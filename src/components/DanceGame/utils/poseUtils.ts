type LM = { x: number; y: number; score?: number }[];

export function getRefAt(poses: { t: number; kp: LM }[], tMs: number) {
  if (!poses?.length) return null;
  if (tMs <= poses[0].t) return poses[0].kp;
  if (tMs >= poses.at(-1)!.t) return poses.at(-1)!.kp;
  
  let lo = 0, hi = poses.length - 1;
  while (lo < hi) { 
    const m = (lo + hi) >> 1; 
    (poses[m].t < tMs) ? lo = m + 1 : hi = m; 
  }
  
  const i = Math.max(0, Math.min(poses.length - 1, lo));
  const a = poses[Math.max(0, i - 1)];
  const b = poses[i];
  return (Math.abs(a.t - tMs) < Math.abs(b.t - tMs) ? a : b).kp;
}

export function nearestRefTime(poses: { t: number }[], tMs: number) {
  let lo = 0, hi = poses.length - 1;
  while (lo < hi) { 
    const m = (lo + hi) >> 1; 
    (poses[m].t < tMs) ? lo = m + 1 : hi = m; 
  }
  
  const i = Math.max(0, Math.min(poses.length - 1, lo));
  const a = poses[Math.max(0, i - 1)];
  const b = poses[i];
  return Math.abs(a.t - tMs) < Math.abs(b.t - tMs) ? a.t : b.t;
}
