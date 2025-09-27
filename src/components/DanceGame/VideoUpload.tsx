'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface VideoUploadProps {
  onVideoUpload: (file: File) => void;
  className?: string;
}

export const VideoUpload: React.FC<VideoUploadProps> = ({ onVideoUpload, className = '' }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleFile = (file: File) => {
    if (file.type.startsWith('video/')) {
      setUploadedFile(file);
      onVideoUpload(file);
    } else {
      alert('Please upload a video file (MP4, WebM, etc.)');
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className={`w-full ${className}`}>
      <div
        className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          dragActive 
            ? 'border-blue-400 bg-blue-50' 
            : 'border-gray-300 hover:border-gray-400'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="video/*"
          onChange={handleChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        
        <div className="space-y-4">
          <motion.div
            className="text-6xl"
            animate={{ scale: dragActive ? 1.1 : 1 }}
            transition={{ duration: 0.2 }}
          >
            📹
          </motion.div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Upload Dance Video
            </h3>
            <p className="text-gray-500 mb-4">
              Drag and drop your dance video here, or click to browse
            </p>
            <p className="text-sm text-gray-400">
              Supports MP4, WebM, MOV, and other video formats
            </p>
          </div>
          
          <button
            onClick={() => fileInputRef.current?.click()}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Choose Video File
          </button>
        </div>
      </div>

      {uploadedFile && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg"
        >
          <div className="flex items-center space-x-3">
            <div className="text-2xl">✅</div>
            <div>
              <p className="font-medium text-green-800">{uploadedFile.name}</p>
              <p className="text-sm text-green-600">
                Size: {formatFileSize(uploadedFile.size)}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};
