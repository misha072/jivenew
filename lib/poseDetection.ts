// FIXED: Proper TensorFlow.js and pose detection setup
// This file handles all pose detection logic with proper WebGL backend initialization

import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-webgl'; // FIXED: Import WebGL backend
import * as posedetection from '@tensorflow-models/pose-detection';

export interface PoseKeypoint {
  x: number;
  y: number;
  score: number;
  name?: string;
}

export interface Pose {
  keypoints: PoseKeypoint[];
  score: number;
}

export interface PoseFrame {
  pose: Pose | null;
  timestamp: number;
  frameIndex: number;
}

// FIXED: MoveNet keypoint connections for skeleton drawing
export const POSE_CONNECTIONS = [
  [0, 1], [0, 2], [1, 3], [2, 4], // head
  [5, 6], [5, 7], [6, 8], [7, 9], [8, 10], // arms
  [5, 11], [6, 12], [11, 12], // torso
  [11, 13], [12, 14], [13, 15], [14, 16], // legs
];

// FIXED: Keypoint names for MoveNet
export const KEYPOINT_NAMES = [
  'nose', 'left_eye', 'right_eye', 'left_ear', 'right_ear',
  'left_shoulder', 'right_shoulder', 'left_elbow', 'right_elbow',
  'left_wrist', 'right_wrist', 'left_hip', 'right_hip',
  'left_knee', 'right_knee', 'left_ankle', 'right_ankle'
];

class PoseDetectionManager {
  private detector: posedetection.PoseDetector | null = null;
  private isInitialized = false;

  // FIXED: Proper TensorFlow.js initialization with WebGL backend
  async initialize(): Promise<void> {
    try {
      console.log('Initializing TensorFlow.js with WebGL backend...');
      
      // FIXED: Set WebGL backend and wait for ready
      await tf.setBackend('webgl');
      await tf.ready();
      
      console.log('TensorFlow.js backend:', tf.getBackend());
      
      // FIXED: Create MoveNet detector with SINGLEPOSE_LIGHTNING
      this.detector = await posedetection.createDetector(
        posedetection.SupportedModels.MoveNet,
        {
          modelType: posedetection.movenet.SINGLEPOSE_LIGHTNING, // FIXED: Use correct enum
          enableSmoothing: true,
        }
      );
      
      this.isInitialized = true;
      console.log('Pose detector initialized successfully');
    } catch (error) {
      console.error('Failed to initialize pose detector:', error);
      throw error;
    }
  }

  // FIXED: Proper pose detection with error handling
  async detectPoses(videoElement: HTMLVideoElement): Promise<Pose[]> {
    if (!this.detector || !this.isInitialized) {
      console.warn('Pose detector not initialized');
      return [];
    }

    try {
      // FIXED: Use detector.estimatePoses with proper error handling
      const poses = await this.detector.estimatePoses(videoElement);
      
      // FIXED: Convert to our Pose interface and add console logging
      const convertedPoses: Pose[] = poses.map(pose => ({
        keypoints: pose.keypoints.map(kp => ({
          x: kp.x,
          y: kp.y,
          score: kp.score,
          name: KEYPOINT_NAMES[kp.name] || kp.name
        })),
        score: pose.score || 0
      }));

      console.log(`Detected ${convertedPoses.length} poses`);
      if (convertedPoses.length > 0) {
        console.log('First pose keypoints:', convertedPoses[0].keypoints.length);
      }

      return convertedPoses;
    } catch (error) {
      console.error('Error detecting poses:', error);
      return [];
    }
  }

  isReady(): boolean {
    return this.isInitialized && this.detector !== null;
  }

  // FIXED: Proper cleanup
  dispose(): void {
    if (this.detector) {
      this.detector.dispose();
      this.detector = null;
    }
    this.isInitialized = false;
  }
}

// FIXED: Singleton instance to avoid multiple initializations
export const poseDetectionManager = new PoseDetectionManager();

// FIXED: Pose similarity calculation
export function calculatePoseSimilarity(pose1: Pose, pose2: Pose): number {
  if (!pose1.keypoints || !pose2.keypoints) return 0;
  
  let totalDistance = 0;
  let validPoints = 0;
  
  for (let i = 0; i < Math.min(pose1.keypoints.length, pose2.keypoints.length); i++) {
    const kp1 = pose1.keypoints[i];
    const kp2 = pose2.keypoints[i];
    
    if (kp1.score > 0.3 && kp2.score > 0.3) {
      const distance = Math.sqrt(
        Math.pow(kp1.x - kp2.x, 2) + Math.pow(kp1.y - kp2.y, 2)
      );
      totalDistance += distance;
      validPoints++;
    }
  }
  
  if (validPoints === 0) return 0;
  
  const averageDistance = totalDistance / validPoints;
  const similarity = Math.max(0, 100 - (averageDistance / 100) * 100);
  
  return Math.round(similarity);
}