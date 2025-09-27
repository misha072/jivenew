'use client';

import React, { useRef, useEffect, useState } from 'react';
import { poseDetectionManager, Pose, POSE_CONNECTIONS } from '@/lib/poseDetection';

interface VideoPosePlayerProps {
  videoUrl: string;
  onReferencePose: (pose: Pose | null) => void;
  isPlaying: boolean;
  width?: number;
  height?: number;
}

// Expose methods via ref
export interface VideoPosePlayerRef {
  play: () => Promise<void>;
  pause: () => void;
  reset: () => void;
  getVideoElement: () => HTMLVideoElement | null;
}

const VideoPosePlayer = React.forwardRef<VideoPosePlayerRef, VideoPosePlayerProps>(({ 
  videoUrl, 
  onReferencePose, 
  isPlaying,
  width = 800,
  height = 600
}, ref) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const [currentPose, setCurrentPose] = useState<Pose | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Expose methods via ref
  React.useImperativeHandle(ref, () => ({
    play: async () => {
      if (videoRef.current) {
        console.log('VideoPosePlayer: Manual play called');
        videoRef.current.currentTime = 0;
        await videoRef.current.play();
      }
    },
    pause: () => {
      if (videoRef.current) {
        console.log('VideoPosePlayer: Manual pause called');
        videoRef.current.pause();
      }
    },
    reset: () => {
      if (videoRef.current) {
        console.log('VideoPosePlayer: Manual reset called');
        videoRef.current.currentTime = 0;
        videoRef.current.pause();
      }
    },
    getVideoElement: () => {
      return videoRef.current;
    }
  }));

  // Initialize pose detection when component mounts
  useEffect(() => {
    const initializeDetection = async () => {
      if (!poseDetectionManager.isReady()) {
        console.log('Waiting for pose detector to be ready...');
        setTimeout(initializeDetection, 100);
        return;
      }
      setIsInitialized(true);
      console.log('VideoPosePlayer: Pose detector ready');
    };

    initializeDetection();
  }, []);

  // Handle video play/pause based on isPlaying prop
  useEffect(() => {
    if (!videoRef.current) return;

    const video = videoRef.current;
    
    if (isPlaying) {
      console.log('VideoPosePlayer: Starting video playback');
      video.currentTime = 0; // Reset to beginning
      video.play().catch(error => {
        console.error('Error starting video:', error);
        // Handle autoplay restrictions
        if (error.name === 'NotAllowedError') {
          console.warn('Autoplay blocked. Video will start when user interacts.');
        }
      });
    } else {
      console.log('VideoPosePlayer: Pausing video');
      video.pause();
    }
  }, [isPlaying]);

  // Main pose detection and drawing loop
  useEffect(() => {
    if (!isPlaying || !isInitialized || !videoRef.current || !canvasRef.current) {
      return;
    }

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match video display dimensions
    canvas.width = width;
    canvas.height = height;

    const detectAndDrawPoses = async () => {
      if (!isPlaying || video.paused || video.ended) {
        return;
      }

      try {
        // Detect poses using the same detector as webcam
        const poses = await poseDetectionManager.detectPoses(video);
        
        if (poses.length > 0) {
          const pose = poses[0];
          setCurrentPose(pose);
          onReferencePose(pose);
          
          // Clear canvas
          ctx.clearRect(0, 0, width, height);
          
          // Draw skeleton using the same logic as SkeletonCanvas
          drawSkeletonOnCanvas(ctx, pose, width, height);
          
          console.log('Video pose detected:', pose.keypoints.length, 'keypoints');
        } else {
          // Keep previous pose to avoid flicker
          console.log('No pose detected in video frame');
        }
      } catch (error) {
        console.error('Error detecting video poses:', error);
      }

      // Continue with requestAnimationFrame
      animationFrameRef.current = requestAnimationFrame(detectAndDrawPoses);
    };

    detectAndDrawPoses();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying, isInitialized, onReferencePose, width, height]);

  // Draw skeleton function with proper coordinate mapping
  const drawSkeletonOnCanvas = (ctx: CanvasRenderingContext2D, pose: Pose, canvasWidth: number, canvasHeight: number) => {
    if (!pose?.keypoints || !videoRef.current) return;

    const keypoints = pose.keypoints;
    const confidenceThreshold = 0.3;
    const video = videoRef.current;

    // Ensure video dimensions are available
    if (!video.videoWidth || !video.videoHeight) {
      console.warn('VideoPosePlayer: Video dimensions not available yet');
      return;
    }

    // Calculate coordinate mapping from video to canvas
    const scaleX = canvasWidth / video.videoWidth;
    const scaleY = canvasHeight / video.videoHeight;
    
    // Debug: Log coordinate mapping info
    console.log('VideoPosePlayer coordinate mapping:', {
      videoSize: { width: video.videoWidth, height: video.videoHeight },
      canvasSize: { width: canvasWidth, height: canvasHeight },
      scale: { x: scaleX, y: scaleY }
    });

    // Draw skeleton connections with proper coordinate mapping
    ctx.strokeStyle = '#4ecdc4';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    POSE_CONNECTIONS.forEach(([startIdx, endIdx]) => {
      const startPoint = keypoints[startIdx];
      const endPoint = keypoints[endIdx];

      if (
        startPoint &&
        endPoint &&
        startPoint.score >= confidenceThreshold &&
        endPoint.score >= confidenceThreshold
      ) {
        // Map coordinates from video space to canvas space
        const startX = startPoint.x * scaleX;
        const startY = startPoint.y * scaleY;
        const endX = endPoint.x * scaleX;
        const endY = endPoint.y * scaleY;

        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      }
    });

    // Draw keypoints with proper coordinate mapping
    keypoints.forEach((keypoint) => {
      if (keypoint.score >= confidenceThreshold) {
        // Map coordinates from video space to canvas space
        const x = keypoint.x * scaleX;
        const y = keypoint.y * scaleY;

        // Draw keypoint circle
        ctx.fillStyle = '#4ecdc4';
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, 2 * Math.PI);
        ctx.fill();

        // Draw confidence ring
        ctx.strokeStyle = '#4ecdc4';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, 2 * Math.PI);
        ctx.stroke();
      }
    });
  };

  // Handle video events
  const handleVideoEnded = () => {
    console.log('Video ended, stopping pose detection');
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    onReferencePose(null);
  };

  const handleVideoPause = () => {
    console.log('Video paused, stopping pose detection');
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  };

  return (
    <div className="relative w-full h-full bg-black rounded-lg overflow-hidden">
      <video
        ref={videoRef}
        src={videoUrl}
        className="w-full h-full object-contain"
        muted
        playsInline
        onEnded={handleVideoEnded}
        onPause={handleVideoPause}
        onPlay={() => console.log('Video started playing')}
      />
      
      {/* Pose detection canvas overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-80"
        style={{ 
          width: '100%', 
          height: '100%',
          imageRendering: 'pixelated'
        }}
      />
      
      {/* Status overlay */}
      <div className="absolute top-4 left-4 bg-black bg-opacity-75 text-white p-2 rounded text-sm">
        {isInitialized ? 'Video Pose Detection Ready' : 'Initializing...'}
        {currentPose ? ' - Pose Detected' : ' - No Pose'}
      </div>
    </div>
  );
});

VideoPosePlayer.displayName = 'VideoPosePlayer';

export default VideoPosePlayer;
