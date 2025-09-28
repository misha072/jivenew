import { useEffect, useRef, useState } from "react";
import { initMoveNet, getKeypoints } from './pose/detector';
import { resetPoseSmoothing } from './scoring/movenet17';

interface DebugInfo {
  fps: number;
  keypoints: number;
  confidence: number;
  isDetecting: boolean;
  armStatus: {
    left: boolean;
    right: boolean;
  };
}

export default function DebugPoseHarness() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [info, setInfo] = useState<DebugInfo>({ 
    fps: 0, 
    keypoints: 0, 
    confidence: 0, 
    isDetecting: false,
    armStatus: { left: false, right: false }
  });
  const [referencePose, setReferencePose] = useState<Array<{x: number, y: number, score: number}> | null>(null);

  // Generate a reference pose for testing
  const generateTestReferencePose = () => {
    return [
      { x: 0.5, y: 0.1, score: 0.95 }, // nose
      { x: 0.48, y: 0.12, score: 0.93 }, // left eye
      { x: 0.52, y: 0.12, score: 0.93 }, // right eye
      { x: 0.46, y: 0.15, score: 0.90 }, // left ear
      { x: 0.54, y: 0.15, score: 0.90 }, // right ear
      { x: 0.42, y: 0.35, score: 0.92 }, // left shoulder
      { x: 0.58, y: 0.35, score: 0.92 }, // right shoulder
      { x: 0.35, y: 0.45, score: 0.89 }, // left elbow
      { x: 0.65, y: 0.45, score: 0.89 }, // right elbow
      { x: 0.28, y: 0.55, score: 0.87 }, // left wrist
      { x: 0.72, y: 0.55, score: 0.87 }, // right wrist
      { x: 0.48, y: 0.65, score: 0.90 }, // left hip
      { x: 0.52, y: 0.65, score: 0.90 }, // right hip
      { x: 0.48, y: 0.8, score: 0.85 }, // left knee
      { x: 0.52, y: 0.8, score: 0.85 }, // right knee
      { x: 0.48, y: 0.95, score: 0.82 }, // left ankle
      { x: 0.52, y: 0.95, score: 0.82 }  // right ankle
    ];
  };

  // Real MoveNet pose detection using clean TensorFlow.js implementation
  const detectPoses = async () => {
    const c = canvasRef.current;
    const v = videoRef.current;
    
    if (!c || !v) return;

    try {
      const kp = await getKeypoints(v);

      // Draw overlay
      const ctx = c.getContext("2d");
      if (!ctx) return;
      
      ctx.clearRect(0, 0, c.width, c.height);
      ctx.drawImage(v, 0, 0, c.width, c.height);

      if (kp && kp.length > 0) {
        // Draw skeleton using MoveNet 17-landmark format
        const pairs = [
          [5, 7], [7, 9], // left arm: shoulder -> elbow -> wrist
          [6, 8], [8, 10], // right arm: shoulder -> elbow -> wrist
          [5, 6], // shoulders
          [11, 12], // hips
          [11, 13], [13, 15], // left leg: hip -> knee -> ankle
          [12, 14], [14, 16]  // right leg: hip -> knee -> ankle
        ];
        
        ctx.lineWidth = 3;
        ctx.strokeStyle = "#00ff88";
        pairs.forEach(([a, b]) => {
          if (kp[a] && kp[b] && (kp[a].score ?? 0) > 0.4 && (kp[b].score ?? 0) > 0.4) {
            ctx.beginPath();
            ctx.moveTo(kp[a].x, kp[a].y);
            ctx.lineTo(kp[b].x, kp[b].y);
            ctx.stroke();
          }
        });

        // Draw joints
        ctx.fillStyle = "#ff0066";
        kp.forEach((p, index) => {
          if ((p.score ?? 0) > 0.4) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
            ctx.fill();
          }
        });

        // Simple arm detection for status
        let armStatus = { left: false, right: false };
        const leftArmUp = (kp[7]?.score ?? 0) > 0.4 && kp[7].y < kp[5].y;
        const rightArmUp = (kp[8]?.score ?? 0) > 0.4 && kp[8].y < kp[6].y;
        armStatus = { left: leftArmUp, right: rightArmUp };

        // Calculate average confidence
        const avgConf = kp.reduce((s, p) => s + (p.score ?? 0), 0) / kp.length;

        setInfo(prev => ({
          ...prev,
          keypoints: kp.length,
          confidence: Number(avgConf.toFixed(2)),
          isDetecting: true,
          armStatus
        }));
      } else {
        setInfo(prev => ({
          ...prev,
          keypoints: 0,
          confidence: 0,
          isDetecting: false,
          armStatus: { left: false, right: false }
        }));
      }
    } catch (error) {
      console.error("Pose detection error:", error);
      setInfo(prev => ({
        ...prev,
        isDetecting: false
      }));
    }
  };

  useEffect(() => {
    (async () => {
      try {
        // Initialize MoveNet with clean TensorFlow.js implementation
        await initMoveNet();

        // Get webcam
        const v = videoRef.current;
        if (!v) return;
        
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { width: 640, height: 480, facingMode: "user" },
          audio: false
        });
        v.srcObject = stream;
        await v.play();

        // Match canvas to video
        const c = canvasRef.current;
        if (!c) return;
        c.width = v.videoWidth;
        c.height = v.videoHeight;

        // Generate reference pose for testing
        setReferencePose(generateTestReferencePose());

        // RAF loop
        let last = performance.now();
        let frames = 0;
        
        async function tick() {
          const now = performance.now();
          frames++;
          if (now - last >= 1000) {
            setInfo(prev => ({ ...prev, fps: frames }));
            frames = 0;
            last = now;
          }

          await detectPoses();
          requestAnimationFrame(tick);
        }
        
        requestAnimationFrame(tick);
      } catch (error) {
        console.error("Initialization error:", error);
        setInfo(prev => ({
          ...prev,
          hint: "Initialization failed",
          isDetecting: false
        }));
      }
    })();
  }, [referencePose]);

  const resetSmoothing = () => {
    resetPoseSmoothing();
    setInfo(prev => ({ ...prev, hint: "Smoothing reset" }));
  };

  return (
    <div style={{ display: "grid", gap: 8, padding: 16, fontFamily: "monospace" }}>
      <h2>🎯 Debug Pose Detection Harness</h2>
      
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div>
          <canvas 
            ref={canvasRef} 
            style={{ 
              width: 320, 
              height: 240, 
              background: "#000", 
              border: "2px solid #333" 
            }} 
          />
          <video 
            ref={videoRef} 
            playsInline 
            muted 
            style={{ display: "none" }} 
          />
        </div>
        
        <div style={{ display: "grid", gap: 8 }}>
          <div style={{ background: "#1a1a1a", padding: 12, borderRadius: 8 }}>
            <h3 style={{ margin: "0 0 8px 0", color: "#00ff88" }}>📊 Detection Stats</h3>
            <div>FPS: <span style={{ color: info.fps > 20 ? "#00ff88" : "#ff6666" }}>{info.fps}</span></div>
            <div>Keypoints: <span style={{ color: info.keypoints > 15 ? "#00ff88" : "#ff6666" }}>{info.keypoints}</span></div>
            <div>Avg Confidence: <span style={{ color: info.confidence > 0.7 ? "#00ff88" : "#ff6666" }}>{info.confidence}</span></div>
            <div>Detecting: <span style={{ color: info.isDetecting ? "#00ff88" : "#ff6666" }}>{info.isDetecting ? "✅" : "❌"}</span></div>
          </div>

          <div style={{ background: "#1a1a1a", padding: 12, borderRadius: 8 }}>
            <h3 style={{ margin: "0 0 8px 0", color: "#00ff88" }}>🎯 Pose Analysis</h3>
            <div>Left Arm: <span style={{ color: info.armStatus.left ? "#00ff88" : "#ff6666" }}>{info.armStatus.left ? "UP" : "DOWN"}</span></div>
            <div>Right Arm: <span style={{ color: info.armStatus.right ? "#00ff88" : "#ff6666" }}>{info.armStatus.right ? "UP" : "DOWN"}</span></div>
          </div>

          <div style={{ background: "#1a1a1a", padding: 12, borderRadius: 8 }}>
            <h3 style={{ margin: "0 0 8px 0", color: "#00ff88" }}>🔧 Controls</h3>
            <button 
              onClick={resetSmoothing}
              style={{
                background: "#00ff88",
                color: "#000",
                border: "none",
                padding: "8px 16px",
                borderRadius: 4,
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              Reset Pose Smoothing
            </button>
          </div>
        </div>
      </div>

      <div style={{ background: "#1a1a1a", padding: 12, borderRadius: 8, fontSize: 12, opacity: 0.7 }}>
        <h4 style={{ margin: "0 0 8px 0", color: "#00ff88" }}>🔍 Debugging Guide:</h4>
        <div>• <strong>FPS ≈ 0:</strong> Detector/loop isn&apos;t working</div>
        <div>• <strong>Keypoints = 0:</strong> No pose detected (check lighting/position)</div>
        <div>• <strong>Confidence &lt; 0.7:</strong> Poor pose detection quality</div>
        <div>• <strong>Arm status not updating:</strong> Pose detection or analysis issue</div>
        <div>• <strong>Green skeleton:</strong> Pose detection working ✅</div>
        <div>• <strong>Red skeleton:</strong> Low confidence keypoints</div>
      </div>
    </div>
  );
}
