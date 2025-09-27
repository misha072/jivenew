import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-backend-webgl";
import * as posedetection from "@tensorflow-models/pose-detection";

let detector: posedetection.PoseDetector;

export async function initMoveNet() {
  await tf.setBackend("webgl");
  await tf.ready();
  detector = await posedetection.createDetector(
    posedetection.SupportedModels.MoveNet,
    { modelType: "Thunder" }
  );
  return detector;
}

export async function getKeypoints(videoEl: HTMLVideoElement) {
  const poses = await detector.estimatePoses(videoEl, { maxPoses: 1, flipHorizontal: false });
  return poses[0]?.keypoints ?? null; // 17 keypoints (COCO)
}
