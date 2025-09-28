'use client';

// FIXED: Main app component with proper TensorFlow.js initialization and pose detection
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { poseDetectionManager, Pose, PoseFrame } from '@/lib/poseDetection';
import { resetPoseSmoothing, LM } from '@/src/lib/poseMetrics';
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
  const [isInitialized, setIsInitialized] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mockScore, setMockScore] = useState(0);
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const scoreUpdateInterval = useRef<NodeJS.Timeout | null>(null);

  // Increasing score generator - only increases the score
  const generateIncreasingScore = useCallback((currentScore: number): number => {
    // Add 1-5 points to current score, ensuring it doesn't exceed 100
    const increment = Math.floor(Math.random() * 10) + 1; // 1-5 points
    return Math.min(currentScore + increment, 100);
  }, []);

  // Start mock score updates
  const startMockScoring = useCallback(() => {
    if (scoreUpdateInterval.current) {
      clearInterval(scoreUpdateInterval.current);
    }
    
    setMockScore(0);
    console.log('Starting mock score updates...');
    
    // Update score every 0.5 seconds with increasing values
    scoreUpdateInterval.current = setInterval(() => {
      setMockScore(prevScore => {
        const newScore = generateIncreasingScore(prevScore);
        console.log('Updating score from', prevScore, 'to', newScore);
        return newScore;
      });
    }, 500);
  }, [generateIncreasingScore]);

  // Stop mock score updates (keeps current score)
  const stopMockScoring = useCallback(() => {
    if (scoreUpdateInterval.current) {
      clearInterval(scoreUpdateInterval.current);
      scoreUpdateInterval.current = null;
      console.log('Stopped mock score updates - keeping current score');
    }
  }, []);

  // Reset score to 0
  const resetScore = useCallback(() => {
    setMockScore(0);
    setIsVideoEnded(false);
    console.log('Score reset to 0');
  }, []);

  // FIXED: Video and webcam refs for real-time pose detection
  const webcamRef = useRef<HTMLVideoElement>(null);
  const videoPosePlayerRef = useRef<VideoPosePlayerRef>(null);
  const animationFrameRef = useRef<number | null>(null);

  // FIXED: Initialize TensorFlow.js and pose detector on component mount
  useEffect(() => {
    const initializePoseDetection = async () => {
      try {
        console.log('Initializing pose detection...');
        await poseDetectionManager.initialize();
        setIsInitialized(true);
        console.log('Pose detection initialized successfully');
      } catch (err) {
        console.error('Failed to initialize pose detection:', err);
        setError('Failed to initialize pose detection. Please refresh the page.');
      }
    };

    initializePoseDetection();

    // FIXED: Cleanup on unmount
    return () => {
      poseDetectionManager.dispose();
    };
  }, []);

  // Handle video end event
  const handleVideoEnd = useCallback(() => {
    console.log('Video ended - stopping score updates and keeping final score');
    setIsVideoEnded(true);
    stopMockScoring();
  }, [stopMockScoring]);

  // Simple score updates based on isPlaying state
  useEffect(() => {
    if (isPlaying) {
      console.log('Video is playing - starting mock scoring');
      startMockScoring();
    } else {
      console.log('Video is paused - stopping mock scoring');
      stopMockScoring();
    }
  }, [isPlaying, startMockScoring, stopMockScoring]);

  // FIXED: Cleanup animation frame on unmount
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (scoreUpdateInterval.current) {
        clearInterval(scoreUpdateInterval.current);
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
      setReferencePose(null);
      
      // Reset score when new video is uploaded
      resetScore();
      
      console.log('Video file selected:', file.name);
    }
  }, [resetScore]);

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

      // FIXED: Log detected poses for debugging
      if (newWebcamPose) {
        console.log('Webcam pose detected:', newWebcamPose.keypoints.length, 'keypoints');
      }
      if (referencePose) {
        console.log('Reference pose detected:', referencePose.keypoints.length, 'keypoints');
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
    
  }, []);

  // FIXED: Game controls
  const startGame = useCallback(async () => {
    if (!videoFile) {
      console.log('Cannot start game: missing video');
      return;
    }
    
    setIsPlaying(true);
    setCurrentFrame(0);
    setReferencePose(null);
    
    // Reset pose smoothing for new round
    resetPoseSmoothing();
    console.log('Game started');
    
    // FIXED: Explicitly start video playback
    try {
      if (videoPosePlayerRef.current) {
        console.log('Starting video playback via ref...');
        await videoPosePlayerRef.current.play();
        console.log('Video playback started successfully');
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
    setCurrentPose(null);
    setReferencePose(null);
    
    // Reset score to 0 and clear video end state
    setMockScore(0);
    setIsVideoEnded(false);
    stopMockScoring();
    
    // FIXED: Reset video explicitly
    if (videoPosePlayerRef.current) {
      videoPosePlayerRef.current.reset();
    }
    
    // FIXED: Stop real-time comparison
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    
    console.log('Game reset - score reset to 0');
  }, [stopMockScoring]);

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
                {referencePoses.length > 0 ? `${referencePoses.length} poses detected` : ''}
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

        {/* Mock Score Display - Always visible when video is uploaded */}
        {videoUrl && (
          <div className="text-center mb-8">
            <div className={`inline-block bg-black bg-opacity-75 text-white p-6 rounded-lg border-2 ${isVideoEnded ? 'border-green-400' : 'border-yellow-400'}`}>
              <div className={`text-6xl font-bold mb-2 ${isVideoEnded ? 'text-green-400' : 'text-yellow-400 animate-pulse'}`}>
                {mockScore}
              </div>
              <div className="text-lg">
                {isVideoEnded ? 'Game Finished' : (isPlaying ? 'Live Score' : 'Score')}
              </div>
            </div>
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
                  onVideoEnd={handleVideoEnd}
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

      </div>
    </div>
  );
}