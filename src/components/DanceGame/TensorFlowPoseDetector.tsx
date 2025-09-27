'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import * as tf from '@tensorflow/tfjs';

interface PoseLandmark {
  x: number;
  y: number;
  confidence: number;
  name: string;
}

interface TensorFlowPoseDetectorProps {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  onPoseDetected: (landmarks: PoseLandmark[]) => void;
  isActive: boolean;
}

// MoveNet keypoint names
const KEYPOINT_NAMES = [
  'nose', 'left_eye', 'right_eye', 'left_ear', 'right_ear',
  'left_shoulder', 'right_shoulder', 'left_elbow', 'right_elbow',
  'left_wrist', 'right_wrist', 'left_hip', 'right_hip',
  'left_knee', 'right_knee', 'left_ankle', 'right_ankle'
];

export const TensorFlowPoseDetector: React.FC<TensorFlowPoseDetectorProps> = ({
  videoRef,
  canvasRef,
  onPoseDetected,
  isActive
}) => {
  const [isModelLoaded, setIsModelLoaded] = useState(false);
  const [model, setModel] = useState<tf.GraphModel | null>(null);
  const animationRef = useRef<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Load MoveNet model with multiple fallbacks
  useEffect(() => {
    const loadModel = async () => {
      const modelUrls = [
        // Primary: TensorFlow Hub (most reliable)
        'https://tfhub.dev/google/tfjs-model/movenet/singlepose/lightning/4',
        // Fallback 1: Alternative CDN
        'https://tfjs-models.s3.amazonaws.com/posenet/mobilenet_v1_100_257_257_metadata.json',
        // Fallback 2: Local model (if you have one)
        '/models/movenet.json'
      ];

      for (let i = 0; i < modelUrls.length; i++) {
        try {
          console.log(`Loading TensorFlow.js model from URL ${i + 1}: ${modelUrls[i]}`);
          
          const loadedModel = await tf.loadGraphModel(modelUrls[i]);
          
          setModel(loadedModel);
          setIsModelLoaded(true);
          console.log(`TensorFlow.js model loaded successfully from URL ${i + 1}`);
          return; // Success, exit the loop
        } catch (err) {
          console.warn(`Failed to load model from URL ${i + 1}:`, err);
          if (i === modelUrls.length - 1) {
            // All URLs failed
            console.error('All model URLs failed. Using simulation mode.');
            setError('Failed to load pose detection model. Using simulation mode.');
            setIsModelLoaded(false);
          }
        }
      }
    };

    loadModel();
  }, []);

  // Convert MoveNet output to our format
  const convertPoseToLandmarks = useCallback((keypoints: any[]): PoseLandmark[] => {
    const landmarks: PoseLandmark[] = [];

    keypoints.forEach((keypoint, index) => {
      landmarks.push({
        x: keypoint.x,
        y: keypoint.y,
        confidence: keypoint.score || 0,
        name: KEYPOINT_NAMES[index] || 'unknown'
      });
    });

    return landmarks;
  }, []);

  // Draw pose on canvas
  const drawPoseOnCanvas = useCallback((keypoints: any[]) => {
    if (!canvasRef.current || !videoRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match video
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw keypoints
    keypoints.forEach((keypoint) => {
      if (keypoint.score && keypoint.score > 0.3) {
        ctx.beginPath();
        ctx.arc(keypoint.x * canvas.width, keypoint.y * canvas.height, 5, 0, 2 * Math.PI);
        ctx.fillStyle = keypoint.score > 0.7 ? '#00FF00' : keypoint.score > 0.5 ? '#FFFF00' : '#FF0000';
        ctx.fill();
      }
    });

    // Draw connections
    const connections = [
      [0, 1], [0, 2], [1, 3], [2, 4], // face
      [5, 6], [5, 7], [7, 9], [6, 8], [8, 10], // upper body
      [5, 11], [6, 12], [11, 12], // torso
      [11, 13], [13, 15], [12, 14], [14, 16] // lower body
    ];

    connections.forEach(([start, end]) => {
      const startPoint = keypoints[start];
      const endPoint = keypoints[end];

      if (startPoint && endPoint && startPoint.score && endPoint.score && 
          startPoint.score > 0.3 && endPoint.score > 0.3) {
        ctx.beginPath();
        ctx.moveTo(startPoint.x * canvas.width, startPoint.y * canvas.height);
        ctx.lineTo(endPoint.x * canvas.width, endPoint.y * canvas.height);
        ctx.strokeStyle = '#00FF00';
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    });
  }, [canvasRef, videoRef]);

  // Main pose detection loop
  const detectPoses = useCallback(async () => {
    if (!model || !videoRef.current || !isActive) return;

    try {
      // Prepare input tensor from video
      const video = videoRef.current;
      const tensor = tf.browser.fromPixels(video);
      
      // Resize to MoveNet input size (192x192)
      const resized = tf.image.resizeBilinear(tensor, [192, 192]);
      const normalized = resized.div(255.0);
      const batched = normalized.expandDims(0);

      // Run inference
      const predictions = model.predict(batched) as tf.Tensor;
      const keypoints = await predictions.data();

      // Process results
      const poseKeypoints = [];
      for (let i = 0; i < 17; i++) {
        const y = keypoints[i * 3];
        const x = keypoints[i * 3 + 1];
        const score = keypoints[i * 3 + 2];
        
        poseKeypoints.push({
          y: y,
          x: x,
          score: score
        });
      }

      if (poseKeypoints.length > 0) {
        const landmarks = convertPoseToLandmarks(poseKeypoints);
        onPoseDetected(landmarks);
        drawPoseOnCanvas(poseKeypoints);
      }

      // Cleanup tensors
      tensor.dispose();
      resized.dispose();
      normalized.dispose();
      batched.dispose();
      predictions.dispose();
    } catch (err) {
      console.error('Error detecting poses:', err);
    }

    animationRef.current = requestAnimationFrame(detectPoses);
  }, [model, videoRef, isActive, convertPoseToLandmarks, onPoseDetected, drawPoseOnCanvas]);

  // Start/stop detection loop
  useEffect(() => {
    if (isActive && isModelLoaded && model) {
      detectPoses();
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isActive, isModelLoaded, model, detectPoses]);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {error && (
        <div className="absolute top-4 left-4 bg-red-600 bg-opacity-80 text-white px-3 py-1 rounded text-sm">
          ⚠️ {error}
        </div>
      )}
      {isModelLoaded && (
        <div className="absolute top-4 left-4 bg-green-600 bg-opacity-80 text-white px-3 py-1 rounded text-sm">
          🧠 TensorFlow Active
        </div>
      )}
    </div>
  );
};