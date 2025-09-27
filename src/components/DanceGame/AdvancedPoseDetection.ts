/**
 * Advanced Pose Detection Utilities
 * Based on sophisticated pose analysis with normalization, smoothing, and angle-based metrics
 */

type Keypoint = { x: number, y: number, score?: number };
type Landmarks = Keypoint[];

/**
 * Normalize landmarks by centering on hip midpoint and scaling by shoulder distance
 * This makes pose comparison invariant to position and scale
 * Using correct COCO indices: 5:lShoulder 6:rShoulder 11:lHip 12:rHip
 */
function normalize(landmarks: Landmarks): Landmarks {
  // Center on hip midpoint (COCO indices 11 and 12)
  const hip = { 
    x: (landmarks[11].x + landmarks[12].x) / 2, 
    y: (landmarks[11].y + landmarks[12].y) / 2 
  };
  
  // Scale by shoulder distance (COCO indices 5 and 6)
  const dx = landmarks[5].x - landmarks[6].x;
  const dy = landmarks[5].y - landmarks[6].y;
  const scale = Math.max(1e-6, Math.hypot(dx, dy));
  
  return landmarks.map(point => ({
    x: (point.x - hip.x) / scale,
    y: (point.y - hip.y) / scale,
    score: point.score ?? 1
  }));
}

let previousLandmarks: Landmarks | null = null;

/**
 * Apply temporal smoothing to reduce jitter in pose detection
 * Uses exponential moving average with smoothing factor
 */
function smooth(current: Landmarks, smoothingFactor: number = 0.6): Landmarks {
  if (!previousLandmarks) {
    previousLandmarks = current;
    return current;
  }
  
  const smoothed = current.map((point, index) => ({
    x: smoothingFactor * point.x + (1 - smoothingFactor) * previousLandmarks![index].x,
    y: smoothingFactor * point.y + (1 - smoothingFactor) * previousLandmarks![index].y,
    score: point.score
  }));
  
  previousLandmarks = smoothed;
  return smoothed;
}

/**
 * Calculate angle at point B between vectors BA and BC
 */
function angleAt(pointA: { x: number, y: number }, pointB: { x: number, y: number }, pointC: { x: number, y: number }): number {
  const vectorBA = [pointA.x - pointB.x, pointA.y - pointB.y];
  const vectorBC = [pointC.x - pointB.x, pointC.y - pointB.y];
  
  const dot = vectorBA[0] * vectorBC[0] + vectorBA[1] * vectorBC[1];
  const normBA = Math.hypot(vectorBA[0], vectorBA[1]);
  const normBC = Math.hypot(vectorBC[0], vectorBC[1]);
  
  if (normBA < 1e-6 || normBC < 1e-6) return Math.PI;
  
  return Math.acos(Math.min(1, Math.max(-1, dot / (normBA * normBC))));
}

/**
 * Calculate angle between two vectors
 */
function angleBetween(vectorU: [number, number], vectorV: [number, number]): number {
  const dot = vectorU[0] * vectorV[0] + vectorU[1] * vectorV[1];
  const normU = Math.hypot(...vectorU);
  const normV = Math.hypot(...vectorV);
  
  if (normU < 1e-6 || normV < 1e-6) return Math.PI;
  
  return Math.acos(Math.min(1, Math.max(-1, dot / (normU * normV))));
}

/**
 * Extract meaningful pose metrics from landmarks using correct COCO indices
 * COCO indices: 5:lShoulder 6:rShoulder 7:lElbow 8:rElbow 9:lWrist 10:rWrist 11:lHip 12:rHip
 */
function extractPoseMetrics(landmarks: Landmarks) {
  const L = (index: number) => landmarks[index];
  
  // Joint angles using correct COCO indices
  const elbowL = angleAt(L(5), L(7), L(9));   // Left elbow: shoulder-elbow-wrist
  const elbowR = angleAt(L(6), L(8), L(10));  // Right elbow: shoulder-elbow-wrist
  const kneeL = angleAt(L(11), L(13), L(15)); // Left knee: hip-knee-ankle
  const kneeR = angleAt(L(12), L(14), L(16)); // Right knee: hip-knee-ankle
  
  // Arm elevation using correct shoulder elevation calculation
  const shoulderElev = shoulderElevationRadians(landmarks);
  
  // Torso tilt (body lean)
  const torsoVector: [number, number] = [L(12).x - L(11).x, L(12).y - L(11).y];
  const horizontalVector: [number, number] = [1, 0];
  const torsoTilt = angleBetween(torsoVector, horizontalVector);
  
  return {
    elbowL,
    elbowR,
    kneeL,
    kneeR,
    shoulderElevationL: shoulderElev.left,
    shoulderElevationR: shoulderElev.right,
    torsoTilt
  };
}

/**
 * Calculate shoulder elevation using correct COCO indices
 * 5:lShoulder 6:rShoulder 7:lElbow 8:rElbow 9:lWrist 10:rWrist
 */
function shoulderElevationRadians(landmarks: Landmarks) {
  const up: [number, number] = [0, -1]; // "up" on a top-left origin canvas
  const uaL: [number, number] = [landmarks[7].x - landmarks[5].x, landmarks[7].y - landmarks[5].y];  // elbow - shoulder (LEFT)
  const uaR: [number, number] = [landmarks[8].x - landmarks[6].x, landmarks[8].y - landmarks[6].y];  // elbow - shoulder (RIGHT)
  // Smaller angle = more "up"
  return {
    left: angleBetween(uaL, up),
    right: angleBetween(uaR, up)
  };
}

/**
 * Check if arms are actually raised with multiple validation criteria
 * Uses both angle-based and position-based checks for accuracy
 */
function armsUpFlags(landmarks: Landmarks) {
  const { left, right } = shoulderElevationRadians(landmarks);  // 0 rad = straight up; ~1.57 rad = horizontal; ~3.14 rad = straight down
  const leftUp = left < (35 * Math.PI / 180);  // 35 degrees threshold
  const rightUp = right < (35 * Math.PI / 180);

  // Extra check: wrist above shoulder (remember: smaller y is higher on screen)
  const lWristAbove = landmarks[9].y < landmarks[5].y - 0.05;   // 5% of image height margin
  const rWristAbove = landmarks[10].y < landmarks[6].y - 0.05;

  return {
    left: leftUp && lWristAbove,
    right: rightUp && rWristAbove
  };
}

/**
 * Check if pose detection is confident enough for reliable analysis
 * Only analyzes poses where key landmarks have sufficient confidence
 */
function confident(landmarks: Landmarks, threshold: number = 0.4): boolean {
  const keyIndices = [5, 6, 7, 8, 9, 10, 11, 12]; // shoulders, elbows, wrists, hips
  return keyIndices.every(i => (landmarks[i].score ?? 0) >= threshold);
}

/**
 * Calculate similarity between reference and live poses
 * Returns a score from 0 to 1, where 1 is perfect match
 */
export function calculatePoseSimilarity(referenceRaw: Landmarks, liveRaw: Landmarks): number {
  // Check if live pose is confident enough for reliable analysis
  if (!confident(liveRaw, 0.4)) {
    return 0.1; // Very low score for unreliable poses
  }
  
  const reference = normalize(referenceRaw);
  const live = smooth(normalize(liveRaw));
  
  const refMetrics = extractPoseMetrics(reference);
  const liveMetrics = extractPoseMetrics(live);
  
  // Enhanced arm detection using multiple criteria
  const refArmsUp = armsUpFlags(reference);
  const liveArmsUp = armsUpFlags(live);
  
  // Weighted similarity calculation with enhanced arm detection
  const poseComponents: [number, number][] = [
    [Math.cos(refMetrics.elbowL - liveMetrics.elbowL), 1.0],           // Elbow angles
    [Math.cos(refMetrics.elbowR - liveMetrics.elbowR), 1.0],
    [Math.cos(refMetrics.kneeL - liveMetrics.kneeL), 1.1],             // Knee angles (slightly more weight)
    [Math.cos(refMetrics.kneeR - liveMetrics.kneeR), 1.1],
    [Math.cos(refMetrics.shoulderElevationL - liveMetrics.shoulderElevationL), 1.4], // Arm elevation (highest weight)
    [Math.cos(refMetrics.shoulderElevationR - liveMetrics.shoulderElevationR), 1.4],
    [Math.cos(refMetrics.torsoTilt - liveMetrics.torsoTilt), 0.6],     // Torso tilt (lower weight)
  ];
  
  let similarity = 0;
  let totalWeight = 0;
  
  for (const [cosineSimilarity, weight] of poseComponents) {
    similarity += cosineSimilarity * weight;
    totalWeight += weight;
  }
  
  // Apply arm position validation penalty/bonus
  let armValidationBonus = 0;
  if (refArmsUp.left && !liveArmsUp.left) armValidationBonus -= 0.3; // Penalty for missing left arm up
  if (refArmsUp.right && !liveArmsUp.right) armValidationBonus -= 0.3; // Penalty for missing right arm up
  if (!refArmsUp.left && liveArmsUp.left) armValidationBonus -= 0.2; // Penalty for extra left arm up
  if (!refArmsUp.right && liveArmsUp.right) armValidationBonus -= 0.2; // Penalty for extra right arm up
  
  // Normalize to 0-1 range and apply validation
  const baseScore = (similarity / totalWeight + 1) / 2;
  return Math.max(0, Math.min(1, baseScore + armValidationBonus));
}

/**
 * Get the biggest hint for improving the current pose
 * Returns the most important correction needed
 */
export function getBiggestHint(reference: Landmarks, live: Landmarks): string {
  // Check if live pose is confident enough
  if (!confident(live, 0.4)) {
    return "Improve pose detection quality";
  }
  
  const refNormalized = normalize(reference);
  const liveNormalized = normalize(live);
  
  const refMetrics = extractPoseMetrics(refNormalized);
  const liveMetrics = extractPoseMetrics(liveNormalized);
  
  // Enhanced arm detection with multiple criteria
  const refArmsUp = armsUpFlags(refNormalized);
  const liveArmsUp = armsUpFlags(liveNormalized);
  
  const corrections: [string, number][] = [
    ['Raise left arm', Math.abs(refMetrics.shoulderElevationL - liveMetrics.shoulderElevationL)],
    ['Raise right arm', Math.abs(refMetrics.shoulderElevationR - liveMetrics.shoulderElevationR)],
    ['Bend left knee', Math.abs(refMetrics.kneeL - liveMetrics.kneeL)],
    ['Bend right knee', Math.abs(refMetrics.kneeR - liveMetrics.kneeR)],
    ['Straighten left elbow', Math.abs(refMetrics.elbowL - liveMetrics.elbowL)],
    ['Straighten right elbow', Math.abs(refMetrics.elbowR - liveMetrics.elbowR)],
  ];
  
  // Add specific arm position hints based on enhanced detection
  if (refArmsUp.left && !liveArmsUp.left) {
    corrections.push(['Left arm not high enough', 2.0]); // High priority
  }
  if (refArmsUp.right && !liveArmsUp.right) {
    corrections.push(['Right arm not high enough', 2.0]); // High priority
  }
  if (!refArmsUp.left && liveArmsUp.left) {
    corrections.push(['Lower left arm', 1.5]);
  }
  if (!refArmsUp.right && liveArmsUp.right) {
    corrections.push(['Lower right arm', 1.5]);
  }
  
  // Sort by difference (biggest correction needed first)
  corrections.sort((a, b) => b[1] - a[1]);
  
  return corrections[0][0];
}

/**
 * Get detailed pose analysis with all metrics
 */
export function getDetailedPoseAnalysis(reference: Landmarks, live: Landmarks) {
  // Check confidence first
  const isConfident = confident(live, 0.4);
  
  const refNormalized = normalize(reference);
  const liveNormalized = normalize(live);
  
  const refMetrics = extractPoseMetrics(refNormalized);
  const liveMetrics = extractPoseMetrics(liveNormalized);
  
  // Enhanced arm detection
  const refArmsUp = armsUpFlags(refNormalized);
  const liveArmsUp = armsUpFlags(liveNormalized);
  
  return {
    similarity: calculatePoseSimilarity(reference, live),
    biggestHint: getBiggestHint(reference, live),
    isConfident,
    armDetection: {
      reference: refArmsUp,
      live: liveArmsUp,
      leftArmCorrect: refArmsUp.left === liveArmsUp.left,
      rightArmCorrect: refArmsUp.right === liveArmsUp.right
    },
    metrics: {
      reference: refMetrics,
      live: liveMetrics,
      differences: {
        elbowL: Math.abs(refMetrics.elbowL - liveMetrics.elbowL),
        elbowR: Math.abs(refMetrics.elbowR - liveMetrics.elbowR),
        kneeL: Math.abs(refMetrics.kneeL - liveMetrics.kneeL),
        kneeR: Math.abs(refMetrics.kneeR - liveMetrics.kneeR),
        shoulderElevationL: Math.abs(refMetrics.shoulderElevationL - liveMetrics.shoulderElevationL),
        shoulderElevationR: Math.abs(refMetrics.shoulderElevationR - liveMetrics.shoulderElevationR),
        torsoTilt: Math.abs(refMetrics.torsoTilt - liveMetrics.torsoTilt),
      }
    }
  };
}

/**
 * Reset the smoothing buffer (call when starting a new dance sequence)
 */
export function resetPoseSmoothing(): void {
  previousLandmarks = null;
}
