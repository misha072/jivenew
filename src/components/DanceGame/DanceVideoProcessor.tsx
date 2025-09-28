'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { VideoUpload } from './VideoUpload';

interface DanceVideoProcessorProps {
  className?: string;
}

export interface DanceMove {
  timestamp: number;
  landmarks: any[];
  moveName: string;
}

export const DanceVideoProcessor: React.FC<DanceVideoProcessorProps> = ({ className = '' }) => {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [extractedMoves, setExtractedMoves] = useState<DanceMove[]>([]);
  const [processingProgress, setProcessingProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [demoVideoLoaded, setDemoVideoLoaded] = useState(false);


  const handleVideoUpload = (file: File) => {
    setVideoFile(file);
    setExtractedMoves([]);
    setProcessingProgress(0);
  };

  const loadDemoVideo = async () => {
    try {
      const response = await fetch('/videos/dancevideo.mp4');
      if (response.ok) {
        const blob = await response.blob();
        const file = new File([blob], 'dancevideo.mp4', { type: 'video/mp4' });
        setVideoFile(file);
        setDemoVideoLoaded(true);
      }
    } catch (error) {
      console.error('Error loading demo video:', error);
    }
  };

  const processVideo = async () => {
    if (!videoFile) return;

    try {
      // Simulate video processing with MediaPipe
      // In a real implementation, this would use MediaPipe to analyze each frame
      
      const totalFrames = 100; // Simulate 100 frames to process
      
      for (let i = 0; i < totalFrames; i++) {
        // Simulate processing time
        await new Promise(resolve => setTimeout(resolve, 50));
        
        // Update progress
        const progress = Math.round(((i + 1) / totalFrames) * 100);
        setProcessingProgress(progress);
        
        // Simulate extracting a dance move every 10 frames
        if (i % 10 === 0) {
          const mockMove: DanceMove = {
            timestamp: i * 100, // milliseconds
            landmarks: generateMockLandmarks(),
            moveName: `Move ${Math.floor(i / 10) + 1}`
          };
          
          setExtractedMoves(prev => [...prev, mockMove]);
        }
      }
      
      setIsProcessing(false);
      console.log(`✅ Processing complete! Extracted ${extractedMoves.length} dance moves.`);
      
    } catch (error) {
      setIsProcessing(false);
      console.error(`❌ Error processing video: ${error}`);
    }
  };

  const generateMockLandmarks = () => {
    // Generate mock pose landmarks (33 points like MediaPipe)
    return Array.from({ length: 33 }, () => ({
      x: Math.random(),
      y: Math.random(),
      z: Math.random() * 0.1,
      visibility: 0.8 + Math.random() * 0.2
    }));
  };

  const playExtractedMoves = () => {
    if (extractedMoves.length === 0) return;
    
    console.log(`🎵 Playing back ${extractedMoves.length} extracted dance moves!`);
    
    // Simulate playing back the moves
    extractedMoves.forEach((move, index) => {
      setTimeout(() => {
        console.log(`🎭 ${move.moveName} at ${move.timestamp}ms`);
      }, index * 1000);
    });
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 ${className}`}>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.h1 
            className="text-6xl font-bold text-white mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            🎵 Dance Video Processor 🎵
          </motion.h1>
          <p className="text-xl text-gray-300 mb-6">
            Upload your dance video and extract movements with AI
          </p>
          
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Video Upload & Processing */}
          <div className="space-y-6">
            {/* Video Upload */}
            <motion.div
              className="bg-gray-800 rounded-lg p-6"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">📹 Dance Video</h2>
              
              {/* Demo Video Button */}
              <div className="mb-4">
                <button
                  onClick={loadDemoVideo}
                  disabled={demoVideoLoaded}
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-colors mb-4 ${
                    demoVideoLoaded 
                      ? 'bg-green-600 text-white cursor-not-allowed' 
                      : 'bg-purple-500 text-white hover:bg-purple-600'
                  }`}
                >
                  {demoVideoLoaded ? '✅ Demo Video Loaded' : '🎬 Load Demo Video (dancevideo.mp4)'}
                </button>
              </div>

              {/* Or Upload Your Own */}
              <div className="text-center text-gray-400 mb-4">OR</div>
              <VideoUpload onVideoUpload={handleVideoUpload} />
            </motion.div>

            {/* Processing Controls */}
            <motion.div
              className="bg-gray-800 rounded-lg p-6"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">⚙️ Processing</h2>
              
              {videoFile && (
                <div className="space-y-4">
                  {/* Progress Bar */}
                  {isProcessing && (
                    <div>
                      <div className="flex justify-between text-sm text-gray-400 mb-2">
                        <span>Processing video...</span>
                        <span>{processingProgress}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${processingProgress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <button
                      onClick={() => {
                        setIsProcessing(true);
                        setProcessingProgress(0);
                        processVideo();
                      }}
                      disabled={isProcessing}
                      className={`flex-1 py-2 px-4 rounded font-medium transition-colors ${
                        isProcessing 
                          ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                          : 'bg-green-500 text-white hover:bg-green-600'
                      }`}
                    >
                      {isProcessing ? 'Processing...' : 'Extract Dance Moves'}
                    </button>
                    
                    <button
                      onClick={playExtractedMoves}
                      disabled={extractedMoves.length === 0}
                      className={`flex-1 py-2 px-4 rounded font-medium transition-colors ${
                        extractedMoves.length === 0
                          ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                          : 'bg-blue-500 text-white hover:bg-blue-600'
                      }`}
                    >
                      Play Moves
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Right Column - Results */}
          <div className="space-y-6">
            {/* Extracted Moves */}
            <motion.div
              className="bg-gray-800 rounded-lg p-6"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">🎭 Extracted Moves</h2>
              
              {extractedMoves.length > 0 ? (
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {extractedMoves.map((move, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-700 rounded-lg p-3"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium text-white">{move.moveName}</div>
                          <div className="text-sm text-gray-400">{move.timestamp}ms</div>
                        </div>
                        <div className="text-2xl">🎭</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-400 py-8">
                  <div className="text-4xl mb-2">📹</div>
                  <p>No moves extracted yet</p>
                  <p className="text-sm">Upload a video and click &quot;Extract Dance Moves&quot;</p>
                </div>
              )}
            </motion.div>

            {/* Stats */}
            <motion.div
              className="bg-gray-800 rounded-lg p-6"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">📊 Statistics</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">{extractedMoves.length}</div>
                  <div className="text-sm text-gray-400">Moves Extracted</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">
                    {videoFile ? '✅' : '❌'}
                  </div>
                  <div className="text-sm text-gray-400">Video Status</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
