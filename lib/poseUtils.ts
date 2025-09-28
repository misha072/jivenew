import { Pose, Keypoint } from '@tensorflow-models/pose-detection';

export interface PoseFrame {
  pose: Pose | null;
  timestamp: number;
  frameIndex: number;
}


// MoveNet keypoint connections for skeleton drawing
export const POSE_CONNECTIONS = [
  [0, 1], [0, 2], [1, 3], [2, 4], // head
  [5, 6], [5, 7], [6, 8], [7, 9], [8, 10], // arms
  [5, 11], [6, 12], [11, 12], // torso
  [11, 13], [12, 14], [13, 15], [14, 16], // legs
];

// Keypoint names for MoveNet
export const KEYPOINT_NAMES = [
  'nose', 'left_eye', 'right_eye', 'left_ear', 'right_ear',
  'left_shoulder', 'right_shoulder', 'left_elbow', 'right_elbow',
  'left_wrist', 'right_wrist', 'left_hip', 'right_hip',
  'left_knee', 'right_knee', 'left_ankle', 'right_ankle'
];


/**
 * Normalize keypoints to a standard coordinate system
 */
export function normalizeKeypoints(keypoints: Keypoint[]): Keypoint[] {
  if (keypoints.length === 0) return keypoints;

  // Find bounding box
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  
  keypoints.forEach(kp => {
    if (kp.score > 0.3) {
      minX = Math.min(minX, kp.x);
      minY = Math.min(minY, kp.y);
      maxX = Math.max(maxX, kp.x);
      maxY = Math.max(maxY, kp.y);
    }
  });

  const width = maxX - minX;
  const height = maxY - minY;
  const centerX = (minX + maxX) / 2;
  const centerY = (minY + maxY) / 2;

  // Normalize to [-1, 1] range
  return keypoints.map(kp => ({
    ...kp,
    x: width > 0 ? (kp.x - centerX) / (width / 2) : 0,
    y: height > 0 ? (kp.y - centerY) / (height / 2) : 0
  }));
}

/**
 * Smooth pose data using exponential moving average
 */
export function smoothPoseData(
  currentPose: Pose,
  previousPose: Pose | null,
  smoothingFactor: number = 0.7
): Pose {
  if (!previousPose || !currentPose.keypoints || !previousPose.keypoints) {
    return currentPose;
  }

  const smoothedKeypoints = currentPose.keypoints.map((currentKp, index) => {
    const previousKp = previousPose.keypoints?.[index];
    if (!previousKp || currentKp.score < 0.3) return currentKp;

    return {
      ...currentKp,
      x: currentKp.x * (1 - smoothingFactor) + previousKp.x * smoothingFactor,
      y: currentKp.y * (1 - smoothingFactor) + previousKp.y * smoothingFactor,
    };
  });

  return {
    ...currentPose,
    keypoints: smoothedKeypoints
  };
}

