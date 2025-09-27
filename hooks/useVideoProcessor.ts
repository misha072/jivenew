'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Pose, PoseFrame } from '@/lib/poseUtils';
import { usePoseDetector } from './usePoseDetector';

interface UseVideoProcessorReturn {
  isProcessing: boolean;
  progress: number;
  poseFrames: PoseFrame[];
  error: string | null;
  processVideo: (videoFile: File) => Promise<PoseFrame[]>;
  clearFrames: () => void;
}

export function useVideoProcessor(): UseVideoProcessorReturn {
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [poseFrames, setPoseFrames] = useState<PoseFrame[]>([]);
  const [error, setError] = useState<string | null>(null);
  
  const { detector, isInitialized, detectPosesFromImage } = usePoseDetector();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const processVideo = useCallback(async (videoFile: File): Promise<PoseFrame[]> => {
    if (!isInitialized || !detector) {
      throw new Error('Pose detector not initialized');
    }

    setIsProcessing(true);
    setProgress(0);
    setError(null);
    setPoseFrames([]);

    try {
      // Create video element
      const video = document.createElement('video');
      video.crossOrigin = 'anonymous';
      video.muted = true;
      video.playsInline = true;
      
      // Create canvas for frame extraction
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('Could not get canvas context');

      videoRef.current = video;
      canvasRef.current = canvas;

      // Load video
      await new Promise<void>((resolve, reject) => {
        video.onloadedmetadata = () => resolve();
        video.onerror = () => reject(new Error('Failed to load video'));
        video.src = URL.createObjectURL(videoFile);
        video.load();
      });

      const duration = video.duration;
      const fps = 30; // Target FPS for processing
      const frameInterval = 1 / fps;
      const totalFrames = Math.floor(duration * fps);
      
      const frames: PoseFrame[] = [];
      
      // Process video frame by frame
      for (let i = 0; i < totalFrames; i++) {
        const currentTime = i * frameInterval;
        video.currentTime = currentTime;
        
        // Wait for seek to complete
        await new Promise<void>((resolve) => {
          const onSeeked = () => {
            video.removeEventListener('seeked', onSeeked);
            resolve();
          };
          video.addEventListener('seeked', onSeeked);
        });

        // Draw current frame to canvas
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Create image element from canvas
        const image = new Image();
        image.crossOrigin = 'anonymous';
        
        await new Promise<void>((resolve, reject) => {
          image.onload = () => resolve();
          image.onerror = () => reject(new Error('Failed to create image from frame'));
          image.src = canvas.toDataURL();
        });

        // Detect poses in the frame
        const poses = await detectPosesFromImage(image);
        console.log(`Frame ${i}: Detected ${poses.length} poses`);
        
        if (poses.length > 0) {
          frames.push({
            pose: poses[0], // Use first detected pose
            timestamp: currentTime * 1000, // Convert to milliseconds
            frameIndex: i
          });
        } else {
          // Still add frame even if no pose detected for timing
          frames.push({
            pose: null as any, // We'll handle null poses in the UI
            timestamp: currentTime * 1000,
            frameIndex: i
          });
        }

        // Update progress
        const newProgress = Math.round(((i + 1) / totalFrames) * 100);
        setProgress(newProgress);
      }

      // Clean up
      URL.revokeObjectURL(video.src);
      videoRef.current = null;
      canvasRef.current = null;

      setPoseFrames(frames);
      return frames;

    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to process video';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setIsProcessing(false);
    }
  }, [isInitialized, detector, detectPosesFromImage]);

  const clearFrames = useCallback(() => {
    setPoseFrames([]);
    setProgress(0);
    setError(null);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (videoRef.current) {
        URL.revokeObjectURL(videoRef.current.src);
      }
    };
  }, []);

  return {
    isProcessing,
    progress,
    poseFrames,
    error,
    processVideo,
    clearFrames,
  };
}
