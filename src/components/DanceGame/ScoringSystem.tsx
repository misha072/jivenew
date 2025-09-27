'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// Define pose types locally since PoseDetector is removed
interface PoseLandmark {
  x: number;
  y: number;
  z?: number;
  visibility?: number;
  confidence?: number;
  name?: string;
}

interface PoseResult {
  landmarks: PoseLandmark[];
  confidence: number;
}

export interface DanceMove {
  name: string;
  landmarks: PoseLandmark[];
  timestamp: number;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface ScoreData {
  totalScore: number;
  combo: number;
  perfectHits: number;
  goodHits: number;
  okHits: number;
  misses: number;
  streak: number;
  accuracy: number;
}

interface ScoringSystemProps {
  currentPose: PoseResult | null;
  targetMove: DanceMove | null;
  onScoreUpdate?: (score: ScoreData) => void;
  className?: string;
}

const POSE_LANDMARKS = [
  'nose', 'left_eye_inner', 'left_eye', 'left_eye_outer',
  'right_eye_inner', 'right_eye', 'right_eye_outer', 'left_ear',
  'right_ear', 'mouth_left', 'mouth_right', 'left_shoulder',
  'right_shoulder', 'left_elbow', 'right_elbow', 'left_wrist',
  'right_wrist', 'left_pinky', 'right_pinky', 'left_index',
  'right_index', 'left_thumb', 'right_thumb', 'left_hip',
  'right_hip', 'left_knee', 'right_knee', 'left_ankle', 'right_ankle'
];

const calculatePoseSimilarity = (pose1: PoseLandmark[], pose2: PoseLandmark[]): number => {
  if (pose1.length !== pose2.length) return 0;

  let totalDistance = 0;
  let validLandmarks = 0;

  for (let i = 0; i < pose1.length; i++) {
    const p1 = pose1[i];
    const p2 = pose2[i];

    // Skip landmarks with low visibility
    if (p1.visibility && p1.visibility < 0.5) continue;
    if (p2.visibility && p2.visibility < 0.5) continue;

    const distance = Math.sqrt(
      Math.pow(p1.x - p2.x, 2) + 
      Math.pow(p1.y - p2.y, 2) + 
      Math.pow((p1.z || 0) - (p2.z || 0), 2)
    );

    totalDistance += distance;
    validLandmarks++;
  }

  if (validLandmarks === 0) return 0;

  const averageDistance = totalDistance / validLandmarks;
  // Convert distance to similarity score (0-1, where 1 is perfect match)
  return Math.max(0, 1 - averageDistance * 10);
};

export const ScoringSystem: React.FC<ScoringSystemProps> = ({
  currentPose,
  targetMove,
  onScoreUpdate,
  className = ''
}) => {
  const [scoreData, setScoreData] = useState<ScoreData>({
    totalScore: 0,
    combo: 0,
    perfectHits: 0,
    goodHits: 0,
    okHits: 0,
    misses: 0,
    streak: 0,
    accuracy: 0
  });

  const [recentFeedback, setRecentFeedback] = useState<{
    type: 'perfect' | 'good' | 'ok' | 'miss';
    message: string;
    timestamp: number;
  } | null>(null);

  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    if (!currentPose || !targetMove) return;

    const similarity = calculatePoseSimilarity(currentPose.landmarks, targetMove.landmarks);
    
    let hitType: 'perfect' | 'good' | 'ok' | 'miss';
    let points = 0;
    let message = '';

    if (similarity >= 0.85) {
      hitType = 'perfect';
      points = 100;
      message = 'PERFECT!';
    } else if (similarity >= 0.7) {
      hitType = 'good';
      points = 50;
      message = 'GOOD!';
    } else if (similarity >= 0.5) {
      hitType = 'ok';
      points = 25;
      message = 'OK';
    } else {
      hitType = 'miss';
      points = 0;
      message = 'MISS';
    }

    setScoreData(prev => {
      const newScore = { ...prev };
      
      // Add points with combo multiplier
      const comboMultiplier = Math.min(1 + (newScore.streak * 0.1), 3);
      newScore.totalScore += Math.floor(points * comboMultiplier);
      
      // Update hit counts
      newScore[`${hitType}Hits` as keyof ScoreData] = (newScore[`${hitType}Hits` as keyof ScoreData] as number) + 1;
      
      // Update streak
      if (hitType !== 'miss') {
        newScore.streak++;
        newScore.combo = Math.max(newScore.combo, newScore.streak);
      } else {
        newScore.streak = 0;
      }
      
      // Calculate accuracy
      const totalAttempts = newScore.perfectHits + newScore.goodHits + newScore.okHits + newScore.misses;
      newScore.accuracy = totalAttempts > 0 ? 
        ((newScore.perfectHits + newScore.goodHits + newScore.okHits) / totalAttempts) * 100 : 0;
      
      return newScore;
    });

    // Show feedback
    setRecentFeedback({
      type: hitType,
      message,
      timestamp: Date.now()
    });
    setShowFeedback(true);

    // Hide feedback after delay
    setTimeout(() => setShowFeedback(false), 1000);

    // Notify parent component
    onScoreUpdate?.(scoreData);
  }, [currentPose, targetMove, onScoreUpdate]);

  const getFeedbackColor = (type: string) => {
    switch (type) {
      case 'perfect': return 'text-yellow-400';
      case 'good': return 'text-green-400';
      case 'ok': return 'text-blue-400';
      case 'miss': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getFeedbackGlow = (type: string) => {
    switch (type) {
      case 'perfect': return 'shadow-yellow-400';
      case 'good': return 'shadow-green-400';
      case 'ok': return 'shadow-blue-400';
      case 'miss': return 'shadow-red-400';
      default: return 'shadow-gray-400';
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Score Display */}
      <div className="bg-gray-900 rounded-lg p-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">{scoreData.totalScore.toLocaleString()}</div>
            <div className="text-sm text-gray-400">Score</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{scoreData.streak}</div>
            <div className="text-sm text-gray-400">Streak</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-yellow-400">{scoreData.combo}</div>
            <div className="text-sm text-gray-400">Max Combo</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-green-400">{scoreData.accuracy.toFixed(1)}%</div>
            <div className="text-sm text-gray-400">Accuracy</div>
          </div>
        </div>
      </div>

      {/* Hit Breakdown */}
      <div className="bg-gray-900 rounded-lg p-4">
        <div className="grid grid-cols-4 gap-2 text-center">
          <div>
            <div className="text-lg font-bold text-yellow-400">{scoreData.perfectHits}</div>
            <div className="text-xs text-gray-400">Perfect</div>
          </div>
          <div>
            <div className="text-lg font-bold text-green-400">{scoreData.goodHits}</div>
            <div className="text-xs text-gray-400">Good</div>
          </div>
          <div>
            <div className="text-lg font-bold text-blue-400">{scoreData.okHits}</div>
            <div className="text-xs text-gray-400">OK</div>
          </div>
          <div>
            <div className="text-lg font-bold text-red-400">{scoreData.misses}</div>
            <div className="text-xs text-gray-400">Miss</div>
          </div>
        </div>
      </div>

      {/* Live Feedback */}
      {showFeedback && recentFeedback && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none`}
        >
          <div className={`text-6xl font-bold ${getFeedbackColor(recentFeedback.type)} ${getFeedbackGlow(recentFeedback.type)}`}>
            {recentFeedback.message}
          </div>
        </motion.div>
      )}
    </div>
  );
};
