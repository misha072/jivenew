import { useRef, useState } from "react";
import { initMoveNet, getKeypoints } from "./pose/detector";

interface RefBuilderProps {
  onReady: (poses: { t: number; kp: any[] }[]) => void;
}

export default function RefBuilder({ onReady }: RefBuilderProps) {
  const v = useRef<HTMLVideoElement>(null);
  const c = useRef<HTMLCanvasElement>(null);
  const [busy, setBusy] = useState(false);

  async function build() {
    await initMoveNet();
    const video = v.current!;
    const canvas = c.current!;
    const ctx = canvas.getContext("2d")!;
    
    await new Promise(res => 
      video.readyState >= 1 ? res(null) : 
      video.addEventListener("loadedmetadata", () => res(null), { once: true })
    );

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    setBusy(true);
    const poses: { t: number; kp: any[] }[] = [];
    const stepMs = 1000 / 15; // 15 fps
    let last = -1e9;
    
    try { 
      await video.play(); 
    } catch {}

    const durMs = video.duration * 1000;
    const epsilon = 20;

    const onFrame = async (_now: number, meta: VideoFrameCallbackMetadata) => {
      const tMs = Math.round(meta.mediaTime * 1000);
      if (tMs - last >= stepMs) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const kp = await getKeypoints(video);
        if (kp) poses.push({ t: tMs, kp });
        last = tMs;
      }
      if (tMs + epsilon < durMs && !video.ended) {
        video.requestVideoFrameCallback(onFrame);
      } else {
        // final sample at end
        if (tMs < durMs) {
          video.currentTime = durMs / 1000;
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          const kp = await getKeypoints(video);
          if (kp) poses.push({ t: durMs, kp });
        }
        video.pause();
        setBusy(false);
        onReady(poses);
      }
    };
    video.requestVideoFrameCallback(onFrame);
  }

  return (
    <div style={{ display: "grid", gap: 8 }}>
      <video 
        ref={v} 
        src="/dancevideo.mp4" 
        muted 
        playsInline 
        preload="auto" 
        style={{ width: 320, background: "#000" }}
      />
      <canvas ref={c} style={{ display: "none" }} />
      <button onClick={build} disabled={busy}>
        {busy ? "Processing…" : "Build Reference"}
      </button>
    </div>
  );
}
