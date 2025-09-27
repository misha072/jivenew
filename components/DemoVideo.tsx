'use client';

import React, { useState } from 'react';

interface DemoVideoProps {
  onVideoSelect: (file: File) => void;
}

export default function DemoVideo({ onVideoSelect }: DemoVideoProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const generateDemoVideo = async () => {
    setIsGenerating(true);
    
    try {
      // Create a simple demo video with canvas
      const canvas = document.createElement('canvas');
      canvas.width = 640;
      canvas.height = 480;
      const ctx = canvas.getContext('2d');
      
      if (!ctx) throw new Error('Could not get canvas context');

      // Create a simple animation
      const frames = 150; // 5 seconds at 30fps
      const videoBlob = await new Promise<Blob>((resolve) => {
        const chunks: BlobPart[] = [];
        const stream = canvas.captureStream(30);
        const recorder = new MediaRecorder(stream, { mimeType: 'video/webm' });
        
        recorder.ondataavailable = (e) => {
          if (e.data.size > 0) {
            chunks.push(e.data);
          }
        };
        
        recorder.onstop = () => {
          resolve(new Blob(chunks, { type: 'video/webm' }));
        };
        
        recorder.start();
        
        // Animate for 5 seconds
        let frame = 0;
        const animate = () => {
          if (frame >= frames) {
            recorder.stop();
            return;
          }
          
          // Clear canvas
          ctx.fillStyle = '#1a1a2e';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          
          // Draw animated circle (representing a dancer)
          const time = frame / 30;
          const x = canvas.width / 2 + Math.sin(time * 2) * 100;
          const y = canvas.height / 2 + Math.cos(time * 2) * 50;
          
          ctx.fillStyle = '#4ecdc4';
          ctx.beginPath();
          ctx.arc(x, y, 20, 0, 2 * Math.PI);
          ctx.fill();
          
          // Draw some text
          ctx.fillStyle = 'white';
          ctx.font = '24px Arial';
          ctx.textAlign = 'center';
          ctx.fillText('Demo Dance Video', canvas.width / 2, 50);
          ctx.fillText(`Frame ${frame + 1}`, canvas.width / 2, canvas.height - 20);
          
          frame++;
          requestAnimationFrame(animate);
        };
        
        animate();
      });

      // Convert to File
      const file = new File([videoBlob], 'demo-dance.webm', { type: 'video/webm' });
      onVideoSelect(file);
      
    } catch (error) {
      console.error('Error generating demo video:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mb-8">
      <div className="border-2 border-dashed border-gray-400 rounded-lg p-8 text-center">
        <div className="text-6xl mb-4">🎬</div>
        <div className="text-xl font-semibold mb-2">Upload Dance Video</div>
        <div className="text-gray-400 mb-4">Click to select MP4, MOV, or other video files</div>
        
        <div className="space-y-4">
          <input
            type="file"
            accept="video/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) onVideoSelect(file);
            }}
            className="hidden"
            id="video-upload"
          />
          <label
            htmlFor="video-upload"
            className="btn-primary text-lg px-8 py-3 cursor-pointer inline-block"
          >
            Choose Video File
          </label>
          
          <div className="text-gray-400">or</div>
          
          <button
            onClick={generateDemoVideo}
            disabled={isGenerating}
            className="btn-secondary text-lg px-8 py-3 disabled:opacity-50"
          >
            {isGenerating ? 'Generating...' : 'Generate Demo Video'}
          </button>
        </div>
      </div>
    </div>
  );
}
