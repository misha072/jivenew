'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-webgl';
import { createDetector, SupportedModels, PoseDetector } from '@tensorflow-models/pose-detection';
import { Pose, PoseFrame } from '@/lib/poseUtils';

interface UsePoseDetectorReturn {
  detector: PoseDetector | null;
  isInitialized: boolean;
  isDetecting: boolean;
  error: string | null;
  detectPoses: (videoElement: HTMLVideoElement) => Promise<Pose[]>;
  detectPosesFromImage: (imageElement: HTMLImageElement) => Promise<Pose[]>;
}

export function usePoseDetector(): UsePoseDetectorReturn {
  const [detector, setDetector] = useState<PoseDetector | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isDetecting, setIsDetecting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const isInitializing = useRef(false);

  const initializeDetector = useCallback(async () => {
    if (isInitializing.current || detector) return;

    try {
      isInitializing.current = true;
      setError(null);

      // Set TensorFlow.js backend
      await tf.setBackend('webgl');
      await tf.ready();

      // Create pose detector with MoveNet for better performance
      const poseDetector = await createDetector(SupportedModels.MoveNet, {
        modelType: 'SinglePose.Lightning',
        enableSmoothing: true,
      });

      setDetector(poseDetector);
      setIsInitialized(true);
    } catch (err) {
      console.error('Failed to initialize pose detector:', err);
      setError(err instanceof Error ? err.message : 'Failed to initialize pose detector');
    } finally {
      isInitializing.current = false;
    }
  }, [detector]);

  const detectPoses = useCallback(async (videoElement: HTMLVideoElement): Promise<Pose[]> => {
    if (!detector || !videoElement) return [];

    try {
      setIsDetecting(true);
      const poses = await detector.estimatePoses(videoElement);
      return poses;
    } catch (err) {
      console.error('Error detecting poses:', err);
      setError(err instanceof Error ? err.message : 'Error detecting poses');
      return [];
    } finally {
      setIsDetecting(false);
    }
  }, [detector]);

  const detectPosesFromImage = useCallback(async (imageElement: HTMLImageElement): Promise<Pose[]> => {
    if (!detector || !imageElement) return [];

    try {
      setIsDetecting(true);
      const poses = await detector.estimatePoses(imageElement);
      return poses;
    } catch (err) {
      console.error('Error detecting poses from image:', err);
      setError(err instanceof Error ? err.message : 'Error detecting poses from image');
      return [];
    } finally {
      setIsDetecting(false);
    }
  }, [detector]);

  useEffect(() => {
    initializeDetector();
  }, [initializeDetector]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (detector) {
        detector.dispose();
      }
    };
  }, [detector]);

  return {
    detector,
    isInitialized,
    isDetecting,
    error,
    detectPoses,
    detectPosesFromImage,
  };
}
