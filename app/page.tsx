'use client';

// FIXED: Main app component with proper TensorFlow.js initialization and pose detection
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { poseDetectionManager, Pose, PoseFrame, calculatePoseSimilarity } from '@/lib/poseDetection';
import { similarity17, biggestHint17, resetPoseSmoothing, withTimingGrace, LM } from '@/src/lib/poseMetrics';
import { PoseScoringSystem, Keypoint, calculateScore, cosineSimilarity } from '@/src/lib/poseScoring';
import VideoPlayer from '@/components/VideoPlayer';
import WebcamPlayer from '@/components/WebcamPlayer';
import SkeletonCanvas from '@/components/SkeletonCanvas';
import VideoPosePlayer, { VideoPosePlayerRef } from '@/components/VideoPosePlayer';

export default function Home() {
  // State management
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [referencePoses, setReferencePoses] = useState<PoseFrame[]>([]);
  const [currentPose, setCurrentPose] = useState<Pose | null>(null);
  const [referencePose, setReferencePose] = useState<Pose | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [similarityScore, setSimilarityScore] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentHint, setCurrentHint] = useState<string>('');
  const [realTimeScore, setRealTimeScore] = useState<number>(0);
  const [sessionTotal, setSessionTotal] = useState<number>(0);
  const [sessionAverage, setSessionAverage] = useState<number>(0);
  const [sessionCount, setSessionCount] = useState<number>(0);

  // FIXED: Video and webcam refs for real-time pose detection
  const webcamRef = useRef<HTMLVideoElement>(null);
  const videoPosePlayerRef = useRef<VideoPosePlayerRef>(null);
  const animationFrameRef = useRef<number | null>(null);
  const liveKPRef = useRef<Keypoint[] | null>(null);
  const scoringSystemRef = useRef<PoseScoringSystem | null>(null);

  // FIXED: Initialize TensorFlow.js and pose detector on component mount
  useEffect(() => {
    const initializePoseDetection = async () => {
      try {
        console.log('Initializing pose detection...');
        await poseDetectionManager.initialize();
        setIsInitialized(true);
        console.log('Pose detection initialized successfully');
        
        // Initialize scoring system (simplified since we do scoring in the main loop)
        scoringSystemRef.current = new PoseScoringSystem(
          (score: number) => {
            // This won't be used since we calculate scores directly in the loop
          }
        );
        console.log('Scoring system initialized');
      } catch (err) {
        console.error('Failed to initialize pose detection:', err);
        setError('Failed to initialize pose detection. Please refresh the page.');
      }
    };

    initializePoseDetection();

    // FIXED: Cleanup on unmount
    return () => {
      poseDetectionManager.dispose();
      if (scoringSystemRef.current) {
        scoringSystemRef.current.reset();
      }
    };
  }, []);

  // FIXED: Cleanup animation frame on unmount
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (videoUrl) {
        URL.revokeObjectURL(videoUrl);
      }
    };
  }, [videoUrl]);

  // FIXED: Handle video file upload
  const handleVideoUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('video/')) {
      setVideoFile(file);
      const url = URL.createObjectURL(file);
      setVideoUrl(url);
      setReferencePoses([]);
      setCurrentFrame(0);
      setSimilarityScore(0);
      setReferencePose(null);
      console.log('Video file selected:', file.name);
    }
  }, []);

  // FIXED: Handle reference poses detected from video
  const handleReferencePosesDetected = useCallback((poses: PoseFrame[]) => {
    setReferencePoses(poses);
    console.log('Reference poses detected:', poses.length);
  }, []);

  // FIXED: Real-time pose comparison function
  const performRealTimeComparison = useCallback(async () => {
    if (!isPlaying || !webcamRef.current) return;

    try {
      // FIXED: Detect poses from webcam only (reference video poses come from VideoPosePlayer)
      const webcamPoses = await poseDetectionManager.detectPoses(webcamRef.current);

      // FIXED: Update webcam pose state
      const newWebcamPose = webcamPoses.length > 0 ? webcamPoses[0] : null;
      setCurrentPose(newWebcamPose);

      // Update live keypoints reference
      if (newWebcamPose) {
        const liveKeypoints: Keypoint[] = newWebcamPose.keypoints.map(kp => ({
          x: kp.x,
          y: kp.y,
          score: kp.score
        }));
        liveKPRef.current = liveKeypoints;
        
        console.log('Webcam pose detected:', newWebcamPose.keypoints.length, 'keypoints');
      } else {
        liveKPRef.current = null;
      }

      // FIXED: Log detected poses for debugging
      if (referencePose) {
        console.log('Reference pose detected:', referencePose.keypoints.length, 'keypoints');
      }

      // FIXED: Calculate similarity score if both poses are available (legacy)
      if (newWebcamPose && referencePose) {
        // Convert poses to LM format for new similarity function
        const refKeypoints: LM = referencePose.keypoints.map(kp => ({
          x: kp.x,
          y: kp.y,
          score: kp.score
        }));
        const liveKeypoints: LM = newWebcamPose.keypoints.map(kp => ({
          x: kp.x,
          y: kp.y,
          score: kp.score
        }));
        
        // Use new similarity function with timing grace
        const similarity = withTimingGrace(refKeypoints, liveKeypoints);
        setSimilarityScore(Math.round(similarity * 100));
        
        // Get hint if similarity is low
        if (similarity < 0.7) {
          const hint = biggestHint17(refKeypoints, liveKeypoints);
          setCurrentHint(hint);
        } else {
          setCurrentHint('');
        }
        
        console.log('Real-time similarity score:', Math.round(similarity * 100) + '%');
        if (similarity < 0.7) {
          console.log('Hint:', currentHint);
        }
      }

      // REAL-TIME SCORING: Calculate tiered score directly in the pose comparison loop
      if (newWebcamPose && referencePose) {
        // Convert poses to Keypoint format for scoring
        const refKeypointsForScoring: Keypoint[] = referencePose.keypoints.map(kp => ({
          x: kp.x,
          y: kp.y,
          score: kp.score
        }));
        const liveKeypointsForScoring: Keypoint[] = newWebcamPose.keypoints.map(kp => ({
          x: kp.x,
          y: kp.y,
          score: kp.score
        }));

        // Calculate cosine similarity
        const cosineSim = cosineSimilarity(refKeypointsForScoring, liveKeypointsForScoring);
        
        // Calculate tiered score
        const tieredScore = calculateScore(cosineSim);
        setRealTimeScore(tieredScore);
        
        // Update session statistics
        setSessionTotal(prev => prev + tieredScore);
        setSessionCount(prev => prev + 1);
        setSessionAverage(prev => {
          const newCount = sessionCount + 1;
          const newTotal = sessionTotal + tieredScore;
          return Math.round(newTotal / newCount);
        });
        
        console.log(`Real-time scoring: Cosine sim=${cosineSim.toFixed(3)}, Tiered score=${tieredScore}`);
      } else {
        // No poses detected, reset score
        setRealTimeScore(0);
      }

      // FIXED: Continue with requestAnimationFrame for smooth real-time detection
      animationFrameRef.current = requestAnimationFrame(performRealTimeComparison);
    } catch (error) {
      console.error('Error in real-time pose comparison:', error);
      animationFrameRef.current = requestAnimationFrame(performRealTimeComparison);
    }
  }, [isPlaying, referencePose]);

  // FIXED: Handle current pose from webcam (keeping existing functionality)
  const handleCurrentPoseDetected = useCallback((pose: Pose | null) => {
    setCurrentPose(pose);
    
    // FIXED: Calculate similarity with reference pose (fallback for pre-processed poses)
    if (pose && referencePoses.length > 0 && currentFrame < referencePoses.length) {
      const referencePose = referencePoses[currentFrame]?.pose;
      if (referencePose) {
        const similarity = calculatePoseSimilarity(referencePose, pose);
        setSimilarityScore(similarity);
        console.log('Similarity score:', similarity);
      }
    }
  }, [referencePoses, currentFrame]);

  // FIXED: Game controls
  const startGame = useCallback(async () => {
    if (!videoFile) {
      console.log('Cannot start game: missing video');
      return;
    }
    
    setIsPlaying(true);
    setCurrentFrame(0);
    setSimilarityScore(0);
    setReferencePose(null);
    setCurrentHint('');
    
    // Reset pose smoothing for new round
    resetPoseSmoothing();
    console.log('Game started');
    
    // Scoring is now handled directly in the pose comparison loop
    console.log('Game started - scoring will begin with pose detection');
    
    // FIXED: Explicitly start video playback
    try {
      if (videoPosePlayerRef.current) {
        console.log('Starting video playback via ref...');
        await videoPosePlayerRef.current.play();
        console.log('Video playback started successfully');
        
        // Real-time scoring is handled in the pose comparison loop
        console.log('Video started - real-time scoring will begin with pose detection');
      }
    } catch (error) {
      console.error('Error starting video:', error);
      if (error instanceof Error && error.name === 'NotAllowedError') {
        console.warn('Autoplay blocked. Video will start when user interacts.');
      }
    }
    
    // FIXED: Start real-time pose comparison
    performRealTimeComparison();
  }, [videoFile, performRealTimeComparison]);

  const pauseGame = useCallback(() => {
    setIsPlaying(false);
    
    // FIXED: Pause video explicitly
    if (videoPosePlayerRef.current) {
      videoPosePlayerRef.current.pause();
    }
    
    // Scoring stops automatically when pose comparison stops
    
    // FIXED: Stop real-time comparison
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    console.log('Game paused');
  }, []);

  const resetGame = useCallback(() => {
    setIsPlaying(false);
    setCurrentFrame(0);
    setSimilarityScore(0);
    setCurrentPose(null);
    setReferencePose(null);
    setRealTimeScore(0);
    setSessionTotal(0);
    setSessionAverage(0);
    setSessionCount(0);
    
    // FIXED: Reset video explicitly
    if (videoPosePlayerRef.current) {
      videoPosePlayerRef.current.reset();
    }
    
    // Scoring resets automatically with state reset
    
    // FIXED: Stop real-time comparison
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    
    console.log('Game reset');
  }, []);

  if (!isInitialized) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="text-6xl mb-4">🎵</div>
          <div className="text-2xl mb-2">Loading Pose Detection...</div>
          <div className="text-sm text-gray-300">Initializing TensorFlow.js with WebGL backend</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="text-6xl mb-4">❌</div>
          <div className="text-2xl mb-2">Error</div>
          <div className="text-sm text-gray-300">{error}</div>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold text-white mb-4">🎵 Just Dance Clone 🕺</h1>
          <p className="text-xl text-gray-300">Upload a video and dance along with real-time pose detection!</p>
        </div>

        {/* Upload Section */}
        <div className="mb-8 text-center">
          <label className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg cursor-pointer transition-colors">
            <span className="text-lg">📹 Upload Video</span>
            <input
              type="file"
              accept="video/*"
              onChange={handleVideoUpload}
              className="hidden"
            />
          </label>
          {videoFile && (
            <div className="mt-4 text-white">
              <div className="text-lg font-semibold">Selected: {videoFile.name}</div>
              <div className="text-sm text-gray-300">
                {referencePoses.length > 0 ? `${referencePoses.length} poses detected` : 'Processing...'}
              </div>
            </div>
          )}
        </div>

        {/* Game Controls */}
        {videoFile && (
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={startGame}
              disabled={isPlaying}
              className="bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              ▶️ Start Game
            </button>
            <button
              onClick={pauseGame}
              disabled={!isPlaying}
              className="bg-yellow-600 hover:bg-yellow-700 disabled:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              ⏸️ Pause
            </button>
            <button
              onClick={resetGame}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              🔄 Reset
            </button>
          </div>
        )}

        {/* Score Display */}
        {isPlaying && (
          <div className="text-center mb-8">
            <div className="flex justify-center gap-4">
              {/* Legacy Similarity Score */}
              <div className="inline-block bg-black bg-opacity-75 text-white p-6 rounded-lg">
                <div className="text-4xl font-bold text-green-400 mb-2">
                  {similarityScore}%
                </div>
                <div className="text-lg">Similarity Score</div>
                <div className="text-sm text-gray-300 mt-2">
                  Frame {currentFrame + 1} / {referencePoses.length}
                </div>
              </div>
              
              {/* Real-time Scoring System */}
              <div className="inline-block bg-blue-900 bg-opacity-75 text-white p-6 rounded-lg">
                <div className="text-4xl font-bold text-blue-400 mb-2">
                  {realTimeScore}%
                </div>
                <div className="text-lg">Tiered Score</div>
                <div className="text-sm text-gray-300 mt-2">
                  {realTimeScore === 100 && 'Perfect Match!'}
                  {realTimeScore === 75 && 'Partial Match'}
                  {realTimeScore === 50 && 'Poor Match'}
                  {realTimeScore === 0 && 'Fail'}
                </div>
              </div>
              
              {/* Session Statistics */}
              <div className="inline-block bg-purple-900 bg-opacity-75 text-white p-6 rounded-lg">
                <div className="text-2xl font-bold text-purple-400 mb-2">
                  {sessionAverage}%
                </div>
                <div className="text-lg">Session Average</div>
                <div className="text-sm text-gray-300 mt-2">
                  Total: {sessionTotal} pts
                </div>
              </div>
            </div>
            
            {/* Hint Display */}
            {currentHint && (
              <div className="mt-4 inline-block bg-yellow-600 bg-opacity-90 text-white p-4 rounded-lg">
                <div className="text-lg font-semibold">💡 Hint:</div>
                <div className="text-sm">{currentHint}</div>
              </div>
            )}
          </div>
        )}

        {/* Video and Webcam Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Reference Video */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white text-center">Reference Video</h2>
            <div className="relative h-[70vh] bg-black rounded-lg overflow-hidden">
              {videoUrl ? (
                <VideoPosePlayer
                  ref={videoPosePlayerRef}
                  videoUrl={videoUrl}
                  onReferencePose={setReferencePose}
                  isPlaying={isPlaying}
                  width={800}
                  height={600}
                />
              ) : (
                <div className="flex items-center justify-center h-full text-white text-xl">
                  Upload a video to start
                </div>
              )}
            </div>
          </div>

          {/* Webcam Feed */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white text-center">Your Dance</h2>
            <div className="h-[70vh]">
              <WebcamPlayer
                isActive={isPlaying}
                onPoseDetected={handleCurrentPoseDetected}
              />
            </div>
          </div>
        </div>

        {/* Debug Info */}
        <div className="mt-8 text-center text-sm text-gray-400">
          <div>Pose Detection: {isInitialized ? '✅ Ready' : '⏳ Loading...'}</div>
          <div>Webcam Pose: {currentPose ? '✅ Detected' : '❌ None'}</div>
          <div>Reference Pose: {referencePose ? '✅ Detected' : '❌ None'}</div>
          <div>Real-time Comparison: {isPlaying ? '🔄 Active' : '⏸️ Paused'}</div>
        </div>
      </div>
    </div>
  );
}