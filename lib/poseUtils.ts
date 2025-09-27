import { Pose, Keypoint } from '@tensorflow-models/pose-detection';

export interface PoseFrame {
  pose: Pose | null;
  timestamp: number;
  frameIndex: number;
}

export interface PoseSimilarity {
  score: number;
  jointScores: number[];
  overallMatch: boolean;
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
 * Calculate cosine similarity between two keypoint vectors
 */
export function calculateCosineSimilarity(
  keypoints1: Keypoint[],
  keypoints2: Keypoint[],
  confidenceThreshold: number = 0.3
): number {
  if (keypoints1.length !== keypoints2.length) return 0;

  let dotProduct = 0;
  let norm1 = 0;
  let norm2 = 0;
  let validPoints = 0;

  for (let i = 0; i < keypoints1.length; i++) {
    const kp1 = keypoints1[i];
    const kp2 = keypoints2[i];

    // Only consider points with sufficient confidence
    if (kp1.score >= confidenceThreshold && kp2.score >= confidenceThreshold) {
      const x1 = kp1.x;
      const y1 = kp1.y;
      const x2 = kp2.x;
      const y2 = kp2.y;

      dotProduct += x1 * x2 + y1 * y2;
      norm1 += x1 * x1 + y1 * y1;
      norm2 += x2 * x2 + y2 * y2;
      validPoints++;
    }
  }

  if (validPoints === 0 || norm1 === 0 || norm2 === 0) return 0;

  return dotProduct / (Math.sqrt(norm1) * Math.sqrt(norm2));
}

/**
 * Calculate Euclidean distance between two keypoints
 */
export function calculateKeypointDistance(
  keypoint1: Keypoint,
  keypoint2: Keypoint
): number {
  const dx = keypoint1.x - keypoint2.x;
  const dy = keypoint1.y - keypoint2.y;
  return Math.sqrt(dx * dx + dy * dy);
}

/**
 * Calculate pose similarity using multiple metrics
 */
export function calculatePoseSimilarity(
  referencePose: Pose,
  currentPose: Pose,
  confidenceThreshold: number = 0.3
): PoseSimilarity {
  if (!referencePose.keypoints || !currentPose.keypoints) {
    return { score: 0, jointScores: [], overallMatch: false };
  }

  const refKeypoints = referencePose.keypoints;
  const curKeypoints = currentPose.keypoints;

  // Calculate cosine similarity
  const cosineSim = calculateCosineSimilarity(
    refKeypoints,
    curKeypoints,
    confidenceThreshold
  );

  // Calculate per-joint scores
  const jointScores: number[] = [];
  let totalDistance = 0;
  let validJoints = 0;

  for (let i = 0; i < Math.min(refKeypoints.length, curKeypoints.length); i++) {
    const refKp = refKeypoints[i];
    const curKp = curKeypoints[i];

    if (refKp.score >= confidenceThreshold && curKp.score >= confidenceThreshold) {
      const distance = calculateKeypointDistance(refKp, curKp);
      // Normalize distance (assuming max distance of 200 pixels)
      const normalizedDistance = Math.max(0, 1 - distance / 200);
      jointScores.push(normalizedDistance);
      totalDistance += distance;
      validJoints++;
    } else {
      jointScores.push(0);
    }
  }

  // Calculate average distance score
  const avgDistanceScore = validJoints > 0 ? Math.max(0, 1 - totalDistance / (validJoints * 100)) : 0;

  // Combine cosine similarity and distance score
  const combinedScore = (cosineSim * 0.6 + avgDistanceScore * 0.4) * 100;
  const finalScore = Math.min(100, Math.max(0, combinedScore));

  return {
    score: Math.round(finalScore),
    jointScores,
    overallMatch: finalScore > 70
  };
}

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

/**
 * Calculate overall dance performance score
 */
export function calculatePerformanceScore(similarityScores: number[]): {
  averageScore: number;
  maxScore: number;
  minScore: number;
  consistency: number;
  grade: string;
} {
  if (similarityScores.length === 0) {
    return { averageScore: 0, maxScore: 0, minScore: 0, consistency: 0, grade: 'F' };
  }

  const averageScore = similarityScores.reduce((sum, score) => sum + score, 0) / similarityScores.length;
  const maxScore = Math.max(...similarityScores);
  const minScore = Math.min(...similarityScores);
  
  // Calculate consistency (lower variance = higher consistency)
  const variance = similarityScores.reduce((sum, score) => sum + Math.pow(score - averageScore, 2), 0) / similarityScores.length;
  const consistency = Math.max(0, 100 - Math.sqrt(variance));

  // Determine grade
  let grade = 'F';
  if (averageScore >= 90) grade = 'A+';
  else if (averageScore >= 80) grade = 'A';
  else if (averageScore >= 70) grade = 'B';
  else if (averageScore >= 60) grade = 'C';
  else if (averageScore >= 50) grade = 'D';

  return {
    averageScore: Math.round(averageScore),
    maxScore,
    minScore,
    consistency: Math.round(consistency),
    grade
  };
}
