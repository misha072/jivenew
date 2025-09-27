# Pose Similarity Integration Example

## Example Usage in Game Loop

Here's how to use the new pose metrics in your game loop:

```typescript
import { similarity17, biggestHint17, resetPoseSmoothing, withTimingGrace, LM } from '@/src/lib/poseMetrics';

// In your game loop (e.g., in performRealTimeComparison):
const performRealTimeComparison = useCallback(async () => {
  if (!isPlaying || !webcamRef.current) return;

  try {
    // Get poses from webcam and reference video
    const webcamPoses = await poseDetectionManager.detectPoses(webcamRef.current);
    const newWebcamPose = webcamPoses.length > 0 ? webcamPoses[0] : null;

    if (newWebcamPose && referencePose) {
      // Convert to LM format
      const refKeypoints: LM = referencePose.keypoints.map(kp => ({
        x: kp.x,
        y: kp.y,
        score: kp.score
      }));
      const liveKeypoints: LM = newWebcamPose.keypoints.map(kp => ({
        x: kp.x,
        y: kp.y,
        score: kp.score
      }));
      
      // Calculate similarity with timing grace
      const similarity = withTimingGrace(refKeypoints, liveKeypoints);
      setSimilarityScore(Math.round(similarity * 100));
      
      // Get hint if similarity is low
      if (similarity < 0.7) {
        const hint = biggestHint17(refKeypoints, liveKeypoints);
        setCurrentHint(hint);
        console.log('Hint:', hint);
      } else {
        setCurrentHint('');
      }
      
      console.log('Similarity:', Math.round(similarity * 100) + '%');
    }
  } catch (error) {
    console.error('Error in pose comparison:', error);
  }
}, [isPlaying, referencePose]);
```

## Integration with detector.ts

If you want to use the metrics in your detector.ts file:

```typescript
// In detector.ts
import { similarity17, biggestHint17, LM } from '@/src/lib/poseMetrics';

export async function getKeypointsWithSimilarity(
  videoEl: HTMLVideoElement, 
  referenceKeypoints?: LM
): Promise<{ keypoints: LM | null; similarity?: number; hint?: string }> {
  const poses = await detector.estimatePoses(videoEl, { maxPoses: 1, flipHorizontal: false });
  const keypoints = poses[0]?.keypoints ?? null;
  
  if (keypoints && referenceKeypoints) {
    const similarity = similarity17(referenceKeypoints, keypoints);
    const hint = similarity < 0.7 ? biggestHint17(referenceKeypoints, keypoints) : '';
    
    return { keypoints, similarity, hint };
  }
  
  return { keypoints };
}
```

## Key Features

1. **Normalized Similarity**: Uses `similarity17()` for 0-1 scale similarity
2. **Timing Grace**: `withTimingGrace()` gives grace period for pose transitions
3. **Smart Hints**: `biggestHint17()` provides specific feedback on worst keypoint
4. **Smoothing**: Built-in pose smoothing for stable detection
5. **Reset Support**: `resetPoseSmoothing()` clears state for new rounds

## Console Output

You'll see logs like:
```
Real-time similarity score: 85%
Hint: Focus on your left_wrist position
```

## UI Display

The similarity score and hints are displayed in the game UI:
- Green score display (0-100%)
- Yellow hint box when similarity < 70%
- Real-time updates during gameplay
