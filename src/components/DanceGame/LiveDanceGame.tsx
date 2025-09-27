'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { calculatePoseSimilarity, getBiggestHint, getDetailedPoseAnalysis, resetPoseSmoothing } from './AdvancedPoseDetection';

interface PoseLandmark {
  x: number;
  y: number;
  confidence: number;
  name: string;
}

interface DanceFrame {
  timestamp: number;
  landmarks: PoseLandmark[];
  frameNumber: number;
  moveType: string;
  confidence: number;
}

interface ScoreData {
  totalScore: number;
  currentScore: number;
  perfectHits: number;
  goodHits: number;
  okHits: number;
  misses: number;
  streak: number;
  accuracy: number;
  currentMove: string;
}

export const LiveDanceGame: React.FC = () => {
  const [isGameActive, setIsGameActive] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [referenceFrames, setReferenceFrames] = useState<DanceFrame[]>([]);
  const [userPose, setUserPose] = useState<PoseLandmark[] | null>(null);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [isGameReady, setIsGameReady] = useState(false);
  const [poseHint, setPoseHint] = useState<string>('');
  const [detailedAnalysis, setDetailedAnalysis] = useState<any>(null);
  const [scoreData, setScoreData] = useState<ScoreData>({
    totalScore: 0,
    currentScore: 0,
    perfectHits: 0,
    goodHits: 0,
    okHits: 0,
    misses: 0,
    streak: 0,
    accuracy: 0,
    currentMove: ''
  });
  
  const referenceVideoRef = useRef<HTMLVideoElement>(null);
  const animationRef = useRef<number | null>(null);
  const gameStartTime = useRef<number>(0);

  // Generate reference dance frames with 0.5 second intervals for accuracy
  const generateReferenceFrames = useCallback(() => {
    const frames: DanceFrame[] = [];
    const videoDuration = 15; // 15 seconds
    const fps = 2; // 2fps = 0.5 second intervals for more accurate tracking
    const totalFrames = videoDuration * fps; // 30 frames for 15 seconds (every 0.5 seconds)

    // More detailed movement phases with sub-second precision
    const movementPhases = [
      { start: 0, end: 1.5, type: "initial_pose", intensity: 0.3 },
      { start: 1.5, end: 3.5, type: "left_arm_raise", intensity: 0.7 },
      { start: 3.5, end: 5.5, type: "right_arm_raise", intensity: 0.7 },
      { start: 5.5, end: 7.5, type: "both_arms_up", intensity: 0.9 },
      { start: 7.5, end: 9.5, type: "hip_sway_left", intensity: 0.8 },
      { start: 9.5, end: 11.5, type: "body_lean_left", intensity: 0.8 },
      { start: 11.5, end: 13, type: "hip_sway_right", intensity: 0.8 },
      { start: 13, end: 15, type: "final_pose", intensity: 0.9 }
    ];

    for (let frame = 0; frame < totalFrames; frame++) {
      const timestamp = frame / fps; // More precise timing
      const currentPhase = movementPhases.find(phase => 
        timestamp >= phase.start && timestamp < phase.end
      ) || movementPhases[0];

      const landmarks = generateFrameLandmarks(currentPhase.type, timestamp / videoDuration, frame);
      
      frames.push({
        timestamp,
        landmarks,
        frameNumber: frame,
        moveType: currentPhase.type,
        confidence: 0.85 + Math.random() * 0.1
      });
    }

    console.log(`Generated ${frames.length} reference frames at ${fps}fps`);
    return frames;
  }, []);

  const generateFrameLandmarks = (moveType: string, progress: number, frameNumber: number): PoseLandmark[] => {
    const baseLandmarks: PoseLandmark[] = [
      { x: 0.5, y: 0.1, confidence: 0.95, name: "nose" },
      { x: 0.48, y: 0.12, confidence: 0.93, name: "left_eye" },
      { x: 0.52, y: 0.12, confidence: 0.93, name: "right_eye" },
      { x: 0.46, y: 0.15, confidence: 0.90, name: "left_ear" },
      { x: 0.54, y: 0.15, confidence: 0.90, name: "right_ear" },
      { x: 0.48, y: 0.18, confidence: 0.88, name: "mouth_left" },
      { x: 0.52, y: 0.18, confidence: 0.88, name: "mouth_right" },
      { x: 0.42, y: 0.35, confidence: 0.92, name: "left_shoulder" },
      { x: 0.58, y: 0.35, confidence: 0.92, name: "right_shoulder" },
      { x: 0.35, y: 0.45, confidence: 0.89, name: "left_elbow" },
      { x: 0.65, y: 0.45, confidence: 0.89, name: "right_elbow" },
      { x: 0.28, y: 0.55, confidence: 0.87, name: "left_wrist" },
      { x: 0.72, y: 0.55, confidence: 0.87, name: "right_wrist" },
      { x: 0.48, y: 0.65, confidence: 0.90, name: "left_hip" },
      { x: 0.52, y: 0.65, confidence: 0.90, name: "right_hip" },
      { x: 0.48, y: 0.8, confidence: 0.85, name: "left_knee" },
      { x: 0.52, y: 0.8, confidence: 0.85, name: "right_knee" },
      { x: 0.48, y: 0.95, confidence: 0.82, name: "left_ankle" },
      { x: 0.52, y: 0.95, confidence: 0.82, name: "right_ankle" }
    ];

    const transformedLandmarks = baseLandmarks.map(landmark => ({ ...landmark }));
    
    // Add realistic micro-movements
    const breathingOffset = Math.sin(frameNumber * 0.1) * 0.01;
    const microMovement = (Math.random() - 0.5) * 0.02;
    
    transformedLandmarks.forEach(landmark => {
      landmark.y += breathingOffset + microMovement;
      landmark.x += microMovement;
    });

    // Apply movement-specific transformations with more realistic movements
    switch (moveType) {
      case "left_arm_raise":
        const leftArmProgress = Math.min(progress * 2, 1);
        // More dramatic arm movement - arms go much higher
        transformedLandmarks[7].y -= leftArmProgress * 0.25; // left shoulder
        transformedLandmarks[9].y -= leftArmProgress * 0.35; // left elbow
        transformedLandmarks[11].y -= leftArmProgress * 0.45; // left wrist - way up!
        break;
        
      case "right_arm_raise":
        const rightArmProgress = Math.min(progress * 2, 1);
        // More dramatic arm movement - arms go much higher
        transformedLandmarks[8].y -= rightArmProgress * 0.25; // right shoulder
        transformedLandmarks[10].y -= rightArmProgress * 0.35; // right elbow
        transformedLandmarks[12].y -= rightArmProgress * 0.45; // right wrist - way up!
        break;
        
      case "both_arms_up":
        const armsProgress = Math.min((progress - 0.4) * 3, 1);
        if (armsProgress > 0) {
          // Both arms fully extended upward
          transformedLandmarks[7].y -= armsProgress * 0.3; // left shoulder
          transformedLandmarks[8].y -= armsProgress * 0.3; // right shoulder
          transformedLandmarks[9].y -= armsProgress * 0.4; // left elbow
          transformedLandmarks[10].y -= armsProgress * 0.4; // right elbow
          transformedLandmarks[11].y -= armsProgress * 0.5; // left wrist - fully up
          transformedLandmarks[12].y -= armsProgress * 0.5; // right wrist - fully up
        }
        break;
        
      case "hip_sway_left":
        const hipProgress = Math.sin(progress * Math.PI * 3) * 0.5 + 0.5; // More frequent swaying
        // More pronounced hip movement
        transformedLandmarks[13].x -= hipProgress * 0.12; // left hip
        transformedLandmarks[14].x += hipProgress * 0.12; // right hip
        transformedLandmarks[13].y += hipProgress * 0.05; // slight lift
        // Add some shoulder counter-movement
        transformedLandmarks[7].x += hipProgress * 0.03; // left shoulder
        transformedLandmarks[8].x -= hipProgress * 0.03; // right shoulder
        break;
        
      case "hip_sway_right":
        const rightHipProgress = Math.sin(progress * Math.PI * 3 + Math.PI) * 0.5 + 0.5;
        // Opposite hip movement
        transformedLandmarks[13].x += rightHipProgress * 0.12; // left hip
        transformedLandmarks[14].x -= rightHipProgress * 0.12; // right hip
        transformedLandmarks[14].y += rightHipProgress * 0.05; // slight lift
        // Add some shoulder counter-movement
        transformedLandmarks[7].x -= rightHipProgress * 0.03; // left shoulder
        transformedLandmarks[8].x += rightHipProgress * 0.03; // right shoulder
        break;
        
      case "body_lean_left":
        const leanProgress = Math.min((progress - 0.53) * 3, 1);
        if (leanProgress > 0) {
          // More pronounced body lean
          transformedLandmarks.forEach((landmark, i) => {
            if (i >= 7) landmark.x -= leanProgress * 0.08; // whole body leans left
          });
          // Extend left arm outward for balance
          transformedLandmarks[11].x -= leanProgress * 0.2; // left wrist extends
          transformedLandmarks[9].x -= leanProgress * 0.1; // left elbow
        }
        break;
        
      case "final_pose":
        const finalProgress = Math.min((progress - 0.8) * 5, 1);
        if (finalProgress > 0) {
          // Celebration pose - both arms high and wide
          transformedLandmarks[7].y -= finalProgress * 0.3; // left shoulder
          transformedLandmarks[8].y -= finalProgress * 0.3; // right shoulder
          transformedLandmarks[9].y -= finalProgress * 0.4; // left elbow
          transformedLandmarks[10].y -= finalProgress * 0.4; // right elbow
          transformedLandmarks[11].y -= finalProgress * 0.5; // left wrist - celebration!
          transformedLandmarks[12].y -= finalProgress * 0.5; // right wrist - celebration!
          // Spread arms wider
          transformedLandmarks[7].x -= finalProgress * 0.05; // left shoulder
          transformedLandmarks[8].x += finalProgress * 0.05; // right shoulder
          // Slight leg spread for stability
          transformedLandmarks[15].x -= finalProgress * 0.08; // left knee
          transformedLandmarks[16].x += finalProgress * 0.08; // right knee
        }
        break;
    }

    return transformedLandmarks;
  };


  // Use advanced pose similarity calculation
  const calculateAdvancedPoseSimilarity = useCallback((pose1: PoseLandmark[], pose2: PoseLandmark[]): number => {
    if (pose1.length !== pose2.length) return 0;
    
    // Convert to the format expected by advanced detection
    const landmarks1 = pose1.map(p => ({ x: p.x, y: p.y, score: p.confidence }));
    const landmarks2 = pose2.map(p => ({ x: p.x, y: p.y, score: p.confidence }));
    
    return calculatePoseSimilarity(landmarks1, landmarks2);
  }, []);

  // Update score based on pose comparison
  const updateScore = useCallback((userPose: PoseLandmark[], referencePose: PoseLandmark[], moveType: string) => {
    const similarity = calculateAdvancedPoseSimilarity(userPose, referencePose);
    
    // Get detailed analysis and hints
    const landmarks1 = userPose.map(p => ({ x: p.x, y: p.y, score: p.confidence }));
    const landmarks2 = referencePose.map(p => ({ x: p.x, y: p.y, score: p.confidence }));
    const analysis = getDetailedPoseAnalysis(landmarks2, landmarks1);
    
    setPoseHint(analysis.biggestHint);
    setDetailedAnalysis(analysis);
    
    let hitType: 'perfect' | 'good' | 'ok' | 'miss';
    let points = 0;

    if (similarity >= 0.85) {
      hitType = 'perfect';
      points = 100;
    } else if (similarity >= 0.7) {
      hitType = 'good';
      points = 50;
    } else if (similarity >= 0.5) {
      hitType = 'ok';
      points = 25;
    } else {
      hitType = 'miss';
      points = 0;
    }

    setScoreData(prev => {
      const newScore = { ...prev };
      
      // Add points with combo multiplier
      const comboMultiplier = Math.min(1 + (newScore.streak * 0.1), 3);
      newScore.totalScore += Math.floor(points * comboMultiplier);
      newScore.currentScore = Math.floor(points * comboMultiplier);
      
      // Update hit counts
      if (hitType === 'perfect') {
        newScore.perfectHits += 1;
      } else if (hitType === 'good') {
        newScore.goodHits += 1;
      } else if (hitType === 'ok') {
        newScore.okHits += 1;
      } else if (hitType === 'miss') {
        newScore.misses += 1;
      }
      
      // Update streak
      if (hitType !== 'miss') {
        newScore.streak++;
      } else {
        newScore.streak = 0;
      }
      
      // Calculate accuracy
      const totalAttempts = newScore.perfectHits + newScore.goodHits + newScore.okHits + newScore.misses;
      newScore.accuracy = totalAttempts > 0 ? 
        ((newScore.perfectHits + newScore.goodHits + newScore.okHits) / totalAttempts) * 100 : 0;
      
      newScore.currentMove = moveType;
      
      return newScore;
    });
  }, [calculatePoseSimilarity]);

  // Handle real pose detection from TensorFlow
  const handleRealPoseDetection = useCallback((landmarks: PoseLandmark[]) => {
    setUserPose(landmarks);
    
    // If game is active and we have reference frames, compare immediately
    if (isGameActive && landmarks.length > 0 && referenceFrames[currentFrame]) {
      const currentRefFrame = referenceFrames[currentFrame];
      updateScore(landmarks, currentRefFrame.landmarks, currentRefFrame.moveType);
    }
  }, [isGameActive, currentFrame, referenceFrames, updateScore]);

  // Detect user movement - now uses real pose detection
  const detectUserMovement = useCallback(() => {
    if (!isGameActive) return null;

    // Get current reference frame
    const currentRefFrame = referenceFrames[currentFrame];
    if (!currentRefFrame) return null;

    // Real pose detection is handled by TensorFlowPoseDetector component
    // This function is kept for compatibility but real detection happens in handleRealPoseDetection
    return userPose;
  }, [isGameActive, referenceFrames, currentFrame, userPose]);





  // Start countdown before game begins
  const startCountdown = useCallback(() => {
    setIsGameReady(true);
    setCountdown(3);
    
    const countdownInterval = setInterval(() => {
      setCountdown(prev => {
        if (prev === null || prev <= 1) {
          clearInterval(countdownInterval);
          setCountdown(null);
          // Start the actual game
          const frames = generateReferenceFrames();
          setReferenceFrames(frames);
          setIsGameActive(true);
          setCurrentFrame(0);
          setScoreData({
            totalScore: 0,
            currentScore: 0,
            perfectHits: 0,
            goodHits: 0,
            okHits: 0,
            misses: 0,
            streak: 0,
            accuracy: 0,
            currentMove: ''
          });
          gameStartTime.current = Date.now();
          
          // Reset pose smoothing for new game
          resetPoseSmoothing();
          
          // Start reference video
          if (referenceVideoRef.current) {
            referenceVideoRef.current.currentTime = 0;
            referenceVideoRef.current.play().catch(error => {
              console.log('Video autoplay failed:', error);
              // Try to play with user interaction
              referenceVideoRef.current?.play();
            });
          }
          return null;
        }
        return prev - 1;
      });
    }, 1000);
  }, [generateReferenceFrames]);

  // Start game (legacy function - now called by countdown)
  const startGame = useCallback(() => {
    startCountdown();
  }, [startCountdown]);

  // Reset game state
  const resetGame = useCallback(() => {
    setIsGameActive(false);
    setIsGameReady(false);
    setCountdown(null);
    setCurrentFrame(0);
    setScoreData({
      totalScore: 0,
      currentScore: 0,
      perfectHits: 0,
      goodHits: 0,
      okHits: 0,
      misses: 0,
      streak: 0,
      accuracy: 0,
      currentMove: ''
    });
    // Stop reference video
    if (referenceVideoRef.current) {
      referenceVideoRef.current.pause();
      referenceVideoRef.current.currentTime = 0;
    }
  }, []);

  // Game loop - 0.5 second intervals for more accurate tracking
  useEffect(() => {
    if (!isGameActive) return;

    const gameLoop = () => {
      const elapsed = (Date.now() - gameStartTime.current) / 1000;
      // Check every 0.5 seconds (2fps) for more accurate pose comparison
      const frameIndex = Math.min(Math.floor(elapsed * 2), referenceFrames.length - 1);
      
      setCurrentFrame(frameIndex);
      
      // Detect user movement and generate pose
      const detectedPose = detectUserMovement();
      
      // Compare with reference pose - update score more frequently
      if (detectedPose && referenceFrames[frameIndex]) {
        updateScore(detectedPose, referenceFrames[frameIndex].landmarks, referenceFrames[frameIndex].moveType);
      } else if (referenceFrames[frameIndex]) {
        // No movement detected - give 0 points (miss)
        setScoreData(prev => {
          const newScore = { ...prev };
          newScore.misses += 1;
          newScore.streak = 0;
          newScore.currentScore = 0;
          newScore.currentMove = referenceFrames[frameIndex].moveType;
          
          // Calculate accuracy
          const totalAttempts = newScore.perfectHits + newScore.goodHits + newScore.okHits + newScore.misses;
          newScore.accuracy = totalAttempts > 0 ? 
            ((newScore.perfectHits + newScore.goodHits + newScore.okHits) / totalAttempts) * 100 : 0;
          
          return newScore;
        });
      }
      
      // Check if game is over
      if (frameIndex >= referenceFrames.length - 1) {
        setIsGameActive(false);
        return;
      }
      
      animationRef.current = requestAnimationFrame(gameLoop);
    };

    animationRef.current = requestAnimationFrame(gameLoop);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isGameActive, referenceFrames, detectUserMovement, updateScore]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const PoseVisualization: React.FC<{ landmarks: PoseLandmark[]; title: string; color: string }> = ({ landmarks, title, color }) => {
    const connections = [
      [0, 1], [0, 2], [1, 3], [2, 4],
      [7, 8], [7, 9], [8, 10], [9, 11], [10, 12], [11, 13],
      [7, 13], [8, 14],
      [13, 15], [14, 16], [15, 17], [16, 18]
    ];

    return (
      <div className="relative w-full h-64 bg-gray-900 rounded-lg overflow-hidden">
        <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-xs p-2 rounded z-10">
          {title}
        </div>
        <svg className="w-full h-full">
          {/* Draw connections */}
          {connections.map(([start, end], index) => {
            const startPoint = landmarks[start];
            const endPoint = landmarks[end];
            if (!startPoint || !endPoint) return null;
            
            return (
              <line
                key={index}
                x1={startPoint.x * 400}
                y1={startPoint.y * 256}
                x2={endPoint.x * 400}
                y2={endPoint.y * 256}
                stroke={color}
                strokeWidth="2"
                opacity={0.8}
              />
            );
          })}
          
          {/* Draw landmarks */}
          {landmarks.map((landmark, index) => (
            <circle
              key={index}
              cx={landmark.x * 400}
              cy={landmark.y * 256}
              r="3"
              fill={color}
              stroke="#FFFFFF"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-8">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            🎮 Live Dance Game
          </h1>
          <p className="text-xl text-gray-300">
            Dance along with the reference video and get real-time scoring!
          </p>
        </motion.div>

        {/* Game Controls */}
        <div className="flex flex-col items-center gap-6 mb-8">
          {/* Countdown Display */}
          {countdown !== null && (
            <motion.div
              className="text-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="text-8xl font-bold text-white mb-4">
                {countdown}
              </div>
              <div className="text-xl text-gray-300">
                Get ready to dance!
              </div>
            </motion.div>
          )}

          {/* Game Controls */}
          <div className="flex justify-center gap-4">
            {!isGameActive && !isGameReady && (
              <button
                onClick={startGame}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-6 rounded-lg text-2xl font-bold transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                🎵 Play Game!
              </button>
            )}
            
            {isGameActive && (
              <button
                onClick={resetGame}
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                ⏹️ Stop Game
              </button>
            )}

            {!isGameActive && !isGameReady && (
              <button
                onClick={resetGame}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                🔄 Reset
              </button>
            )}
          </div>

          {/* Game Status */}
          <div className="text-center text-gray-300">
            {!isGameActive && !isGameReady && (
              <p className="text-lg">
                Click "Play Game!" to start frame-by-frame dance analysis!
              </p>
            )}
            {isGameActive && (
              <p className="text-lg text-green-400">
                🎉 Analyzing dance moves frame by frame!
              </p>
            )}
          </div>
        </div>

        {/* Main Game Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Reference Video */}
          <div className="bg-gray-800 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Reference Video</h2>
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
              <video 
                ref={referenceVideoRef}
                src="/dancevideo.mp4"
                className="w-full h-full object-contain"
                controls={!isGameActive}
                autoPlay={false}
                loop={false}
                preload="metadata"
                muted={false}
              />
              {isGameActive && (
                <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm">
                  Frame: {currentFrame} / {referenceFrames.length - 1}
                </div>
              )}
              {isGameActive && (
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm">
                  {referenceFrames[currentFrame]?.moveType || 'Loading...'}
                </div>
              )}
            </div>
          </div>

          {/* Movement Analysis Display */}
          <div className="bg-gray-800 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Movement Analysis</h2>
            <div className="relative aspect-video bg-gradient-to-br from-purple-900 to-blue-900 rounded-lg overflow-hidden flex items-center justify-center">
              {isGameActive ? (
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">🎭</div>
                  <div className="text-xl font-bold mb-2">Frame-by-Frame Analysis</div>
                  <div className="text-lg text-purple-200">
                    Frame {currentFrame + 1}/{referenceFrames.length} • {Math.round((currentFrame / referenceFrames.length) * 100)}% Complete
                  </div>
                  <div className="mt-4 flex gap-4 justify-center">
                    <div className="bg-green-600 bg-opacity-80 text-white px-4 py-2 rounded text-sm font-bold">
                      🎯 Score: {scoreData.totalScore}
                    </div>
                    {scoreData.streak > 0 && (
                      <div className="bg-yellow-600 bg-opacity-80 text-white px-4 py-2 rounded text-sm font-bold">
                        🔥 Streak: {scoreData.streak}
                      </div>
                    )}
                  </div>
                  
                  {/* Pose Hint */}
                  {poseHint && (
                    <div className="mt-4 bg-blue-600 bg-opacity-80 text-white px-4 py-2 rounded text-sm font-bold">
                      💡 Hint: {poseHint}
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center text-gray-400">
                  <div className="text-6xl mb-4">🎬</div>
                  <div className="text-xl font-bold mb-2">Ready for Analysis?</div>
                  <div className="text-lg">
                    Click "Play Game!" to start frame-by-frame analysis!
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Pose Comparison */}
        {isGameActive && userPose && referenceFrames[currentFrame] && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Reference Pose</h3>
              <PoseVisualization 
                landmarks={referenceFrames[currentFrame].landmarks} 
                title={referenceFrames[currentFrame].moveType}
                color="#00FF00"
              />
              <div className="mt-2 text-sm text-gray-300">
                Frame {currentFrame}: {referenceFrames[currentFrame].moveType}
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Your Pose</h3>
              <PoseVisualization 
                landmarks={userPose} 
                title="Live Detection"
                color="#FF6B6B"
              />
              <div className="mt-2 text-sm text-gray-300">
                Similarity: {calculatePoseSimilarity(userPose, referenceFrames[currentFrame].landmarks).toFixed(3)}
              </div>
            </div>
          </div>
        )}

        {/* Debug Info */}
        {isGameActive && (
          <div className="bg-gray-800 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Debug Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="text-gray-400">Reference Frames:</div>
                <div className="text-white">{referenceFrames.length} frames stored</div>
              </div>
              <div>
                <div className="text-gray-400">Current Frame:</div>
                <div className="text-white">{currentFrame} / {referenceFrames.length - 1}</div>
              </div>
              <div>
                <div className="text-gray-400">Current Move:</div>
                <div className="text-white">{referenceFrames[currentFrame]?.moveType || 'None'}</div>
              </div>
            </div>
          </div>
        )}

        {/* Current Move Display */}
        {isGameActive && referenceFrames[currentFrame] && (
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <h3 className="text-2xl font-bold text-white mb-2">Current Move</h3>
            <div className="text-xl text-white mb-2">
              {referenceFrames[currentFrame].moveType.replace(/_/g, ' ').toUpperCase()}
            </div>
            <div className="text-sm text-blue-200">
              Frame {currentFrame + 1} of 30 • {Math.round((currentFrame / 30) * 100)}% Complete
            </div>
          </motion.div>
        )}

        {/* Live Score Display */}
        {isGameActive && (
          <motion.div
            className="bg-gray-800 rounded-xl p-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Live Score</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">{scoreData.totalScore}</div>
                <div className="text-sm text-gray-400">Total Score</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{scoreData.currentScore}</div>
                <div className="text-sm text-gray-400">Current Points</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{scoreData.streak}</div>
                <div className="text-sm text-gray-400">Streak</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{scoreData.accuracy.toFixed(1)}%</div>
                <div className="text-sm text-gray-400">Accuracy</div>
              </div>
            </div>
            
            {/* Hit Breakdown */}
            <div className="mt-6">
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
            
            {scoreData.currentMove && (
              <div className="mt-4 text-center">
                <div className="text-lg font-semibold text-white">
                  Current Move: <span className="text-purple-400">{scoreData.currentMove}</span>
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* Final Score */}
        {!isGameActive && scoreData.totalScore > 0 && (
          <motion.div
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">🎉 Dance Complete! 🎉</h2>
            <div className="text-6xl font-bold text-yellow-300 mb-4">{scoreData.totalScore.toLocaleString()}</div>
            <div className="text-xl text-white mb-6">Final Score</div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
              <div>
                <div className="text-2xl font-bold">{scoreData.perfectHits}</div>
                <div className="text-sm">Perfect Hits</div>
              </div>
              <div>
                <div className="text-2xl font-bold">{scoreData.goodHits}</div>
                <div className="text-sm">Good Hits</div>
              </div>
              <div>
                <div className="text-2xl font-bold">{scoreData.accuracy.toFixed(1)}%</div>
                <div className="text-sm">Accuracy</div>
              </div>
              <div>
                <div className="text-2xl font-bold">{scoreData.streak}</div>
                <div className="text-sm">Best Streak</div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
