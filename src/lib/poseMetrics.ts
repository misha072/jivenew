// Pose similarity and vector mapping logic for dance game
// Types and utility functions for pose comparison and scoring

export type KP = {
  x: number;
  y: number;
  score?: number;
};

export type LM = KP[];

// Normalize keypoints to center and scale
export function normalize(keypoints: LM): LM {
  if (keypoints.length === 0) return keypoints;
  
  // Find center point (average of all keypoints)
  const centerX = keypoints.reduce((sum, kp) => sum + kp.x, 0) / keypoints.length;
  const centerY = keypoints.reduce((sum, kp) => sum + kp.y, 0) / keypoints.length;
  
  // Find scale factor (distance from center to furthest point)
  let maxDistance = 0;
  keypoints.forEach(kp => {
    const distance = Math.sqrt((kp.x - centerX) ** 2 + (kp.y - centerY) ** 2);
    maxDistance = Math.max(maxDistance, distance);
  });
  
  if (maxDistance === 0) return keypoints;
  
  // Normalize to unit scale
  return keypoints.map(kp => ({
    x: (kp.x - centerX) / maxDistance,
    y: (kp.y - centerY) / maxDistance,
    score: kp.score
  }));
}

// Smooth keypoints over time using exponential moving average
let smoothedKeypoints: LM | null = null;
const smoothingFactor = 0.7; // Higher = more smoothing

export function smooth(keypoints: LM): LM {
  if (smoothedKeypoints === null) {
    smoothedKeypoints = keypoints.map(kp => ({ ...kp }));
    return smoothedKeypoints;
  }
  
  smoothedKeypoints = smoothedKeypoints.map((smoothed, i) => {
    const current = keypoints[i];
    if (!current) return smoothed;
    
    return {
      x: smoothed.x * smoothingFactor + current.x * (1 - smoothingFactor),
      y: smoothed.y * smoothingFactor + current.y * (1 - smoothingFactor),
      score: current.score
    };
  });
  
  return smoothedKeypoints;
}

// Calculate angle at a keypoint
export function angleAt(keypoints: LM, pointIndex: number): number {
  if (pointIndex < 0 || pointIndex >= keypoints.length) return 0;
  
  const kp = keypoints[pointIndex];
  if (!kp) return 0;
  
  // For simplicity, return angle based on position
  // In a real implementation, you'd calculate angle between connected keypoints
  return Math.atan2(kp.y, kp.x);
}

// Calculate angle between two keypoints
export function angleBetween(keypoints: LM, point1: number, point2: number): number {
  const kp1 = keypoints[point1];
  const kp2 = keypoints[point2];
  
  if (!kp1 || !kp2) return 0;
  
  return Math.atan2(kp2.y - kp1.y, kp2.x - kp1.x);
}

// Calculate various pose metrics
export function metrics(keypoints: LM) {
  if (keypoints.length < 17) return { symmetry: 0, balance: 0, extension: 0 };
  
  // Calculate symmetry (left vs right side)
  const leftSide = [5, 7, 9, 11, 13, 15]; // left arm, hip, knee, ankle
  const rightSide = [6, 8, 10, 12, 14, 16]; // right arm, hip, knee, ankle
  
  let symmetry = 0;
  for (let i = 0; i < leftSide.length; i++) {
    const leftKp = keypoints[leftSide[i]];
    const rightKp = keypoints[rightSide[i]];
    if (leftKp && rightKp) {
      const diff = Math.abs(leftKp.x - rightKp.x);
      symmetry += 1 - Math.min(diff, 1); // Normalize to 0-1
    }
  }
  symmetry /= leftSide.length;
  
  // Calculate balance (center of mass)
  const centerX = keypoints.reduce((sum, kp) => sum + kp.x, 0) / keypoints.length;
  const balance = 1 - Math.abs(centerX - 0.5); // 0.5 is center
  
  // Calculate extension (how spread out the pose is)
  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  keypoints.forEach(kp => {
    minX = Math.min(minX, kp.x);
    maxX = Math.max(maxX, kp.x);
    minY = Math.min(minY, kp.y);
    maxY = Math.max(maxY, kp.y);
  });
  const extension = Math.sqrt((maxX - minX) ** 2 + (maxY - minY) ** 2);
  
  return { symmetry, balance, extension };
}

// Calculate similarity between two poses (0-1 scale)
export function similarity17(reference: LM, live: LM): number {
  if (reference.length === 0 || live.length === 0) return 0;
  
  // Normalize both poses
  const normRef = normalize(reference);
  const normLive = normalize(live);
  
  // Calculate weighted distance between keypoints
  let totalDistance = 0;
  let validPoints = 0;
  
  for (let i = 0; i < Math.min(normRef.length, normLive.length); i++) {
    const refKp = normRef[i];
    const liveKp = normLive[i];
    
    if (refKp && liveKp && refKp.score && liveKp.score && 
        refKp.score > 0.3 && liveKp.score > 0.3) {
      const distance = Math.sqrt(
        (refKp.x - liveKp.x) ** 2 + (refKp.y - liveKp.y) ** 2
      );
      totalDistance += distance;
      validPoints++;
    }
  }
  
  if (validPoints === 0) return 0;
  
  const averageDistance = totalDistance / validPoints;
  const similarity = Math.max(0, 1 - averageDistance);
  
  return similarity;
}

// Get the biggest hint for pose correction
export function biggestHint17(reference: LM, live: LM): string {
  if (reference.length === 0 || live.length === 0) return "No pose detected";
  
  const normRef = normalize(reference);
  const normLive = normalize(live);
  
  // Keypoint names for MoveNet 17-point model
  const keypointNames = [
    'nose', 'left_eye', 'right_eye', 'left_ear', 'right_ear',
    'left_shoulder', 'right_shoulder', 'left_elbow', 'right_elbow',
    'left_wrist', 'right_wrist', 'left_hip', 'right_hip',
    'left_knee', 'right_knee', 'left_ankle', 'right_ankle'
  ];
  
  let maxError = 0;
  let worstKeypoint = '';
  
  for (let i = 0; i < Math.min(normRef.length, normLive.length); i++) {
    const refKp = normRef[i];
    const liveKp = normLive[i];
    
    if (refKp && liveKp && refKp.score && liveKp.score && 
        refKp.score > 0.3 && liveKp.score > 0.3) {
      const distance = Math.sqrt(
        (refKp.x - liveKp.x) ** 2 + (refKp.y - liveKp.y) ** 2
      );
      
      if (distance > maxError) {
        maxError = distance;
        worstKeypoint = keypointNames[i] || `keypoint_${i}`;
      }
    }
  }
  
  if (maxError < 0.1) return "Great job! Keep it up!";
  if (maxError < 0.2) return `Good! Try to adjust your ${worstKeypoint}`;
  if (maxError < 0.4) return `Focus on your ${worstKeypoint} position`;
  return `Your ${worstKeypoint} needs more work`;
}

// Add timing grace period for pose transitions
let lastGoodPose: LM | null = null;
let gracePeriod = 0;
const maxGracePeriod = 30; // frames

export function withTimingGrace(reference: LM, live: LM): number {
  const currentSimilarity = similarity17(reference, live);
  
  if (currentSimilarity > 0.7) {
    lastGoodPose = live;
    gracePeriod = 0;
    return currentSimilarity;
  }
  
  if (lastGoodPose && gracePeriod < maxGracePeriod) {
    gracePeriod++;
    return Math.max(currentSimilarity, 0.6); // Give some grace
  }
  
  return currentSimilarity;
}

// Reset pose smoothing for new round
export function resetPoseSmoothing(): void {
  smoothedKeypoints = null;
  lastGoodPose = null;
  gracePeriod = 0;
}
