'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

interface MusicPlayerProps {
  audioFile?: File;
  onTimeUpdate?: (currentTime: number, duration: number) => void;
  onBeatDetected?: (beatTime: number) => void;
  className?: string;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({
  audioFile,
  onTimeUpdate,
  onBeatDetected,
  className = ''
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  // Simple beat detection based on audio amplitude
  const beatDetectionRef = useRef<number | null>(null);
  const lastBeatTime = useRef(0);
  const beatThreshold = 0.3; // Adjust this for sensitivity
  const minBeatInterval = 300; // Minimum ms between beats

  useEffect(() => {
    if (audioFile) {
      const url = URL.createObjectURL(audioFile);
      setAudioUrl(url);
      return () => URL.revokeObjectURL(url);
    }
  }, [audioFile]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration || 0);
      onTimeUpdate?.(audio.currentTime, audio.duration || 0);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration || 0);
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, [onTimeUpdate]);

  // Simple beat detection using Web Audio API
  useEffect(() => {
    if (!audioRef.current || !isPlaying) return;

    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const source = audioContext.createMediaElementSource(audioRef.current);
    const analyser = audioContext.createAnalyser();
    const dataArray = new Uint8Array(analyser.frequencyBinCount);

    analyser.fftSize = 256;
    source.connect(analyser);
    analyser.connect(audioContext.destination);

    const detectBeat = () => {
      analyser.getByteFrequencyData(dataArray);
      
      // Calculate average amplitude
      const average = dataArray.reduce((sum, value) => sum + value, 0) / dataArray.length;
      const normalizedAmplitude = average / 255;
      
      // Detect beat
      if (normalizedAmplitude > beatThreshold && Date.now() - lastBeatTime.current > minBeatInterval) {
        lastBeatTime.current = Date.now();
        onBeatDetected?.(currentTime);
      }
      
      if (isPlaying) {
        beatDetectionRef.current = requestAnimationFrame(detectBeat);
      }
    };

    detectBeat();

    return () => {
      if (beatDetectionRef.current) {
        cancelAnimationFrame(beatDetectionRef.current);
      }
    };
  }, [isPlaying, onBeatDetected, currentTime]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = parseFloat(e.target.value);
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newVolume = parseFloat(e.target.value);
    audio.volume = newVolume;
    setVolume(newVolume);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`bg-gray-900 rounded-lg p-4 ${className}`}>
      <audio ref={audioRef} src={audioUrl || undefined} preload="metadata" />
      
      <div className="flex items-center space-x-4">
        <motion.button
          onClick={togglePlayPause}
          className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isPlaying ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </motion.button>

        <div className="flex-1">
          <div className="text-white text-sm mb-1">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${(currentTime / duration) * 100}%, #374151 ${(currentTime / duration) * 100}%, #374151 100%)`
            }}
          />
        </div>

        <div className="flex items-center space-x-2">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
          </svg>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="w-20 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>

      {!audioFile && (
        <div className="mt-4 text-center text-gray-400">
          <p>Upload an audio file to start playing music</p>
        </div>
      )}
    </div>
  );
};
