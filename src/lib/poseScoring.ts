// Real-time pose scoring system for dance game
// Compares reference video poses with live webcam poses using cosine similarity

export type Keypoint = {
  x: number;
  y: number;
  score?: number;
};

export type PoseFrame = {
  pose: {
    keypoints: Keypoint[];
  } | null;
  timestamp: number;
  frameIndex: number;
};

export type LiveKeypoint = Keypoint;

// Timing grace configuration
const TIMING_GRACE_MS = 120; // Allow 120ms of timing grace
const SCORING_INTERVAL_MS = 100; // Score every 100ms

// Find the reference pose at a specific timestamp with timing grace
export function getRefAt(refPoses: PoseFrame[], targetTimeMs: number): Keypoint[] | null {
  if (!refPoses || refPoses.length === 0) return null;

  // Find the closest reference pose within timing grace
  let closestPose: PoseFrame | null = null;
  let minTimeDiff = Infinity;

  for (const poseFrame of refPoses) {
    if (!poseFrame.pose) continue;
    
    const timeDiff = Math.abs(poseFrame.timestamp - targetTimeMs);
    
    // Only consider poses within timing grace
    if (timeDiff <= TIMING_GRACE_MS && timeDiff < minTimeDiff) {
      minTimeDiff = timeDiff;
      closestPose = poseFrame;
    }
  }

  return closestPose?.pose?.keypoints || null;
}

// Normalize keypoints to unit vectors for cosine similarity
export function normalizeKeypoints(keypoints: Keypoint[]): Keypoint[] {
  if (keypoints.length === 0) return keypoints;

  // Calculate center point
  const centerX = keypoints.reduce((sum, kp) => sum + kp.x, 0) / keypoints.length;
  const centerY = keypoints.reduce((sum, kp) => sum + kp.y, 0) / keypoints.length;

  // Calculate scale factor (distance from center to furthest point)
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

// Calculate cosine similarity between two pose vectors
export function cosineSimilarity(refKeypoints: Keypoint[], liveKeypoints: Keypoint[]): number {
  if (refKeypoints.length === 0 || liveKeypoints.length === 0) return 0;

  // Normalize both poses
  const normRef = normalizeKeypoints(refKeypoints);
  const normLive = normalizeKeypoints(liveKeypoints);

  // Create vectors for cosine similarity calculation
  const minLength = Math.min(normRef.length, normLive.length);
  let dotProduct = 0;
  let refMagnitude = 0;
  let liveMagnitude = 0;
  let validPoints = 0;

  for (let i = 0; i < minLength; i++) {
    const refKp = normRef[i];
    const liveKp = normLive[i];

    // Only include keypoints with sufficient confidence
    if (refKp && liveKp && refKp.score && liveKp.score && 
        refKp.score > 0.3 && liveKp.score > 0.3) {
      
      // Calculate dot product and magnitudes
      const refX = refKp.x;
      const refY = refKp.y;
      const liveX = liveKp.x;
      const liveY = liveKp.y;

      dotProduct += refX * liveX + refY * liveY;
      refMagnitude += refX * refX + refY * refY;
      liveMagnitude += liveX * liveX + liveY * liveY;
      validPoints++;
    }
  }

  if (validPoints === 0) return 0;

  // Calculate cosine similarity
  const magnitude = Math.sqrt(refMagnitude) * Math.sqrt(liveMagnitude);
  if (magnitude === 0) return 0;

  const similarity = dotProduct / magnitude;
  
  // Ensure result is between 0 and 1
  return Math.max(0, Math.min(1, similarity));
}

// Calculate weighted similarity with keypoint importance
export function weightedSimilarity(refKeypoints: Keypoint[], liveKeypoints: Keypoint[]): number {
  if (refKeypoints.length === 0 || liveKeypoints.length === 0) return 0;

  // Keypoint importance weights (higher = more important for dance)
  const keypointWeights = [
    0.5,   // nose
    0.3,   // left_eye
    0.3,   // right_eye
    0.2,   // left_ear
    0.2,   // right_ear
    1.0,   // left_shoulder
    1.0,   // right_shoulder
    1.2,   // left_elbow
    1.2,   // right_elbow
    1.5,   // left_wrist
    1.5,   // right_wrist
    1.0,   // left_hip
    1.0,   // right_hip
    1.2,   // left_knee
    1.2,   // right_knee
    1.0,   // left_ankle
    1.0    // right_ankle
  ];

  const minLength = Math.min(refKeypoints.length, liveKeypoints.length, keypointWeights.length);
  let totalWeightedSimilarity = 0;
  let totalWeight = 0;

  for (let i = 0; i < minLength; i++) {
    const refKp = refKeypoints[i];
    const liveKp = liveKeypoints[i];
    const weight = keypointWeights[i] || 1.0;

    if (refKp && liveKp && refKp.score && liveKp.score && 
        refKp.score > 0.3 && liveKp.score > 0.3) {
      
      // Calculate distance between keypoints
      const distance = Math.sqrt(
        (refKp.x - liveKp.x) ** 2 + (refKp.y - liveKp.y) ** 2
      );
      
      // Convert distance to similarity (closer = higher similarity)
      const keypointSimilarity = Math.max(0, 1 - distance);
      
      totalWeightedSimilarity += keypointSimilarity * weight;
      totalWeight += weight;
    }
  }

  if (totalWeight === 0) return 0;

  return totalWeightedSimilarity / totalWeight;
}

// Calculate score based on cosine similarity with tiered scoring
export function calculateScore(sim: number): number {
  if (sim >= 0.9) return 100;  // Perfect match
  if (sim >= 0.75) return 75;   // Partial match
  if (sim >= 0.5) return 50;    // Poor match
  return 0;                     // Fail
}

// Calculate score with more granular tiers for better feedback
export function calculateDetailedScore(sim: number): number {
  if (sim >= 0.95) return 100;  // Excellent
  if (sim >= 0.9) return 90;   // Very good
  if (sim >= 0.85) return 80;   // Good
  if (sim >= 0.75) return 70;   // Fair
  if (sim >= 0.65) return 60;   // Below average
  if (sim >= 0.5) return 50;    // Poor
  if (sim >= 0.3) return 25;    // Very poor
  return 0;                     // Fail
}

// Main scoring function that uses cosine similarity with tiered scoring
export function calculatePoseScore(refKeypoints: Keypoint[], liveKeypoints: Keypoint[]): number {
  if (!refKeypoints || !liveKeypoints) return 0;

  // Calculate cosine similarity
  const cosineSim = cosineSimilarity(refKeypoints, liveKeypoints);
  
  // Apply tiered scoring based on cosine similarity
  return calculateScore(cosineSim);
}

// Alternative scoring function with more granular feedback
export function calculateDetailedPoseScore(refKeypoints: Keypoint[], liveKeypoints: Keypoint[]): number {
  if (!refKeypoints || !liveKeypoints) return 0;

  // Calculate cosine similarity
  const cosineSim = cosineSimilarity(refKeypoints, liveKeypoints);
  
  // Apply detailed tiered scoring
  return calculateDetailedScore(cosineSim);
}

// Real-time scoring system class
export class PoseScoringSystem {
  private refPoses: PoseFrame[] = [];
  private liveKeypoints: LiveKeypoint[] | null = null;
  private currentScore: number = 0;
  private sessionScores: number[] = [];
  private totalScore: number = 0;
  private averageScore: number = 0;
  private scoringInterval: NodeJS.Timeout | null = null;
  private onScoreUpdate: (score: number) => void;
  private onSessionUpdate?: (total: number, average: number) => void;

  constructor(
    onScoreUpdate: (score: number) => void,
    onSessionUpdate?: (total: number, average: number) => void
  ) {
    this.onScoreUpdate = onScoreUpdate;
    this.onSessionUpdate = onSessionUpdate;
  }

  // Set reference poses from uploaded video
  setReferencePoses(poses: PoseFrame[]): void {
    this.refPoses = poses;
    console.log('PoseScoringSystem: Reference poses set:', poses.length);
  }

  // Update live keypoints from webcam
  updateLiveKeypoints(keypoints: LiveKeypoint[] | null): void {
    this.liveKeypoints = keypoints;
  }

  // Start real-time scoring
  startScoring(refVideo: HTMLVideoElement): void {
    if (this.scoringInterval) {
      clearInterval(this.scoringInterval);
    }

    console.log('PoseScoringSystem: Starting real-time scoring');
    
    this.scoringInterval = setInterval(() => {
      this.scoreCurrentPose(refVideo);
    }, SCORING_INTERVAL_MS);
  }

  // Stop real-time scoring
  stopScoring(): void {
    if (this.scoringInterval) {
      clearInterval(this.scoringInterval);
      this.scoringInterval = null;
    }
    console.log('PoseScoringSystem: Stopped scoring');
  }

  // Score the current pose
  private scoreCurrentPose(refVideo: HTMLVideoElement): void {
    if (!this.liveKeypoints || this.refPoses.length === 0) {
      this.currentScore = 0;
      this.onScoreUpdate(this.currentScore);
      return;
    }

    // Get current video time
    const tMs = Math.floor(refVideo.currentTime * 1000);
    const refKeypoints = getRefAt(this.refPoses, tMs);

    if (!refKeypoints) {
      this.currentScore = 0;
      this.onScoreUpdate(this.currentScore);
      return;
    }

    // Calculate similarity score using tiered scoring
    const score = calculatePoseScore(refKeypoints, this.liveKeypoints);
    this.currentScore = score;
    
    // Update session tracking
    this.sessionScores.push(score);
    this.totalScore += score;
    this.averageScore = this.totalScore / this.sessionScores.length;
    
    // Notify callbacks
    this.onScoreUpdate(score);
    if (this.onSessionUpdate) {
      this.onSessionUpdate(this.totalScore, Math.round(this.averageScore));
    }

    // Debug logging
    console.log(`PoseScoringSystem: Score at ${tMs}ms: ${score}% (Total: ${this.totalScore}, Avg: ${Math.round(this.averageScore)}%)`);
  }

  // Get current score
  getCurrentScore(): number {
    return this.currentScore;
  }

  // Get session statistics
  getSessionStats(): { total: number; average: number; count: number } {
    return {
      total: this.totalScore,
      average: Math.round(this.averageScore),
      count: this.sessionScores.length
    };
  }

  // Get score breakdown by tier
  getScoreBreakdown(): { perfect: number; partial: number; poor: number; fail: number } {
    const breakdown = { perfect: 0, partial: 0, poor: 0, fail: 0 };
    
    this.sessionScores.forEach(score => {
      if (score === 100) breakdown.perfect++;
      else if (score === 75) breakdown.partial++;
      else if (score === 50) breakdown.poor++;
      else breakdown.fail++;
    });
    
    return breakdown;
  }

  // Reset scoring system
  reset(): void {
    this.stopScoring();
    this.refPoses = [];
    this.liveKeypoints = null;
    this.currentScore = 0;
    this.sessionScores = [];
    this.totalScore = 0;
    this.averageScore = 0;
    console.log('PoseScoringSystem: Reset');
  }
}
