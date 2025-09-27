'use client';

// FIXED: Proper skeleton canvas component with correct overlay positioning
import React, { useRef, useEffect } from 'react';
import { Pose, POSE_CONNECTIONS } from '@/lib/poseDetection';

interface SkeletonCanvasProps {
  pose: Pose | null;
  width: number;
  height: number;
  className?: string;
  color?: string;
}

export default function SkeletonCanvas({ 
  pose, 
  width, 
  height, 
  className = '' 
}: SkeletonCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // FIXED: Set canvas size to match video dimensions
    canvas.width = width;
    canvas.height = height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    if (!pose?.keypoints) return;

    const keypoints = pose.keypoints;
    const confidenceThreshold = 0.3;

    // FIXED: Draw skeleton connections
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
        ctx.beginPath();
        ctx.moveTo(startPoint.x, startPoint.y);
        ctx.lineTo(endPoint.x, endPoint.y);
        ctx.stroke();
      }
    });

    // FIXED: Draw keypoints
    keypoints.forEach((keypoint) => {
      if (keypoint.score >= confidenceThreshold) {
        const x = keypoint.x;
        const y = keypoint.y;

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
  }, [pose, width, height]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ 
        width: '100%', 
        height: '100%',
        imageRendering: 'pixelated'
      }}
    />
  );
}