'use client';

// FIXED: Webcam component with proper pose detection loop
import React, { useRef, useEffect, useState } from 'react';
import { poseDetectionManager, Pose } from '@/lib/poseDetection';
import SkeletonCanvas from './SkeletonCanvas';

interface WebcamPlayerProps {
  isActive: boolean;
  onPoseDetected: (pose: Pose | null) => void;
}

export default function WebcamPlayer({ isActive, onPoseDetected }: WebcamPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentPose, setCurrentPose] = useState<Pose | null>(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  // FIXED: Initialize webcam with proper error handling
  useEffect(() => {
    if (!isActive) return;

    const initializeWebcam = async () => {
      try {
        console.log('Requesting webcam access...');
        
        // FIXED: Get webcam stream with proper constraints
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: { ideal: 640 },
            height: { ideal: 480 },
            facingMode: 'user'
          },
          audio: false
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
          setIsStreaming(true);
          setError(null);
          console.log('Webcam started successfully');
        }
      } catch (err) {
        console.error('Error accessing webcam:', err);
        setError('Unable to access webcam. Please check permissions.');
      }
    };

    initializeWebcam();

    // FIXED: Cleanup on unmount
    return () => {
      if (videoRef.current?.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isActive]);

  // FIXED: Real-time pose detection loop
  useEffect(() => {
    if (!isActive || !isStreaming || !videoRef.current) return;

    const detectPosesLoop = async () => {
      if (!isActive || !videoRef.current) return;

      try {
        // FIXED: Detect poses using requestAnimationFrame loop
        const poses = await poseDetectionManager.detectPoses(videoRef.current);
        
        if (poses.length > 0) {
          setCurrentPose(poses[0]);
          onPoseDetected(poses[0]);
          console.log('Webcam pose detected:', poses[0].keypoints.length, 'keypoints');
        } else {
          setCurrentPose(null);
          onPoseDetected(null);
        }
      } catch (error) {
        console.error('Error detecting webcam poses:', error);
      }

      // FIXED: Continue with requestAnimationFrame
      animationFrameRef.current = requestAnimationFrame(detectPosesLoop);
    };

    detectPosesLoop();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isActive, isStreaming, onPoseDetected]);

  if (error) {
    return (
      <div className="relative w-full h-full bg-black rounded-lg overflow-hidden flex items-center justify-center">
        <div className="text-white text-center">
          <div className="text-6xl mb-4">🚫</div>
          <div className="text-lg">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full bg-black rounded-lg overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="w-full h-full object-cover scale-x-[-1]"
      />
      
      {/* FIXED: Skeleton canvas overlay with mirror effect */}
      <SkeletonCanvas
        pose={currentPose}
        width={640}
        height={480}
        className="opacity-80 scale-x-[-1]"
      />
      
      {/* Status overlay */}
      <div className="absolute top-4 left-4 bg-black bg-opacity-75 text-white p-2 rounded text-sm">
        {isStreaming ? 'Webcam Active' : 'Starting...'}
        {currentPose ? ' - Pose Detected' : ' - No Pose'}
      </div>
    </div>
  );
}