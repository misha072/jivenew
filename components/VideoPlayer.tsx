'use client';

// FIXED: Video player component with proper pose detection loop
import React, { useRef, useEffect, useState } from 'react';
import { poseDetectionManager, Pose, PoseFrame } from '@/lib/poseDetection';
import SkeletonCanvas from './SkeletonCanvas';

interface VideoPlayerProps {
  videoFile: File | null;
  onPosesDetected: (poses: PoseFrame[]) => void;
  isPlaying: boolean;
  currentFrame: number;
  onFrameChange: (frame: number) => void;
}

export default function VideoPlayer({ 
  videoFile, 
  onPosesDetected, 
  isPlaying, 
  currentFrame,
  onFrameChange 
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [poses, setPoses] = useState<PoseFrame[]>([]);
  const [currentPose, setCurrentPose] = useState<Pose | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const animationFrameRef = useRef<number | null>(null);

  // FIXED: Load video file and set up pose detection
  useEffect(() => {
    if (!videoFile) return;

    const url = URL.createObjectURL(videoFile);
    setVideoUrl(url);

    return () => {
      URL.revokeObjectURL(url);
    };
  }, [videoFile]);

  // FIXED: Process video for poses when it loads
  useEffect(() => {
    if (!videoRef.current || !videoUrl) return;

    const video = videoRef.current;
    
    const processVideo = async () => {
      if (!poseDetectionManager.isReady()) {
        console.log('Pose detector not ready, waiting...');
        setTimeout(processVideo, 100);
        return;
      }

      setIsProcessing(true);
      const detectedPoses: PoseFrame[] = [];
      
      // FIXED: Process video frame by frame
      const processFrame = async () => {
        if (video.ended || video.paused) {
          console.log('Video processing complete, detected poses:', detectedPoses.length);
          setPoses(detectedPoses);
          onPosesDetected(detectedPoses);
          setIsProcessing(false);
          return;
        }

        try {
          // FIXED: Detect poses in current frame
          const framePoses = await poseDetectionManager.detectPoses(video);
          
          if (framePoses.length > 0) {
            const poseFrame: PoseFrame = {
              pose: framePoses[0],
              timestamp: video.currentTime * 1000,
              frameIndex: detectedPoses.length
            };
            detectedPoses.push(poseFrame);
            console.log(`Frame ${detectedPoses.length}: Pose detected`);
          } else {
            const poseFrame: PoseFrame = {
              pose: null,
              timestamp: video.currentTime * 1000,
              frameIndex: detectedPoses.length
            };
            detectedPoses.push(poseFrame);
          }

          // Move to next frame
          video.currentTime += 0.1; // 10 FPS processing
          
          // Continue processing
          setTimeout(processFrame, 100);
        } catch (error) {
          console.error('Error processing frame:', error);
          setIsProcessing(false);
        }
      };

      // Start processing from beginning
      video.currentTime = 0;
      video.play();
      processFrame();
    };

    video.addEventListener('loadedmetadata', processVideo);
    
    return () => {
      video.removeEventListener('loadedmetadata', processVideo);
    };
  }, [videoUrl, onPosesDetected]);

  // FIXED: Real-time pose detection during playback
  useEffect(() => {
    if (!isPlaying || !videoRef.current) return;

    const video = videoRef.current;
    
    const detectPosesLoop = async () => {
      if (!isPlaying || video.paused || video.ended) return;

      try {
        // FIXED: Detect poses in current video frame
        const framePoses = await poseDetectionManager.detectPoses(video);
        
        if (framePoses.length > 0) {
          setCurrentPose(framePoses[0]);
          console.log('Live pose detected:', framePoses[0].keypoints.length, 'keypoints');
        } else {
          setCurrentPose(null);
        }
      } catch (error) {
        console.error('Error in pose detection loop:', error);
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
  }, [isPlaying]);

  // FIXED: Update current pose based on frame index
  useEffect(() => {
    if (poses.length > 0 && currentFrame < poses.length) {
      setCurrentPose(poses[currentFrame]?.pose || null);
    }
  }, [currentFrame, poses]);

  return (
    <div className="relative w-full h-full bg-black rounded-lg overflow-hidden">
      {videoUrl && (
        <video
          ref={videoRef}
          src={videoUrl}
          className="w-full h-full object-contain"
          muted
          playsInline
          onTimeUpdate={() => {
            if (videoRef.current) {
              const frame = Math.floor(videoRef.current.currentTime * 10);
              onFrameChange(frame);
            }
          }}
        />
      )}
      
      {/* FIXED: Skeleton canvas overlay */}
      <SkeletonCanvas
        pose={currentPose}
        width={800}
        height={600}
        className="opacity-80"
      />
      
      {/* Status overlay */}
      <div className="absolute top-4 left-4 bg-black bg-opacity-75 text-white p-2 rounded text-sm">
        {isProcessing ? 'Processing...' : `Frame ${currentFrame + 1} / ${poses.length}`}
        {currentPose ? ' - Pose Detected' : ' - No Pose'}
      </div>
    </div>
  );
}