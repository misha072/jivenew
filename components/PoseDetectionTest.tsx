'use client';

// FIXED: Test component to verify pose detection is working
import React, { useEffect, useState } from 'react';
import { poseDetectionManager } from '@/lib/poseDetection';

export default function PoseDetectionTest() {
  const [status, setStatus] = useState<string>('Initializing...');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const testPoseDetection = async () => {
      try {
        setStatus('Testing pose detection...');
        await poseDetectionManager.initialize();
        setIsReady(true);
        setStatus('✅ Pose detection ready!');
        console.log('Pose detection test: SUCCESS');
      } catch (error) {
        setStatus('❌ Pose detection failed');
        console.error('Pose detection test: FAILED', error);
      }
    };

    testPoseDetection();
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-3 rounded text-sm">
      <div className="font-bold">Pose Detection Test</div>
      <div className={isReady ? 'text-green-400' : 'text-yellow-400'}>
        {status}
      </div>
    </div>
  );
}