type KP = { x: number; y: number; score?: number };
type LM = KP[];

function normalize(k: LM) {
  const hip = { x: (k[11].x + k[12].x) / 2, y: (k[11].y + k[12].y) / 2 };
  const dx = k[5].x - k[6].x;
  const dy = k[5].y - k[6].y;
  const s = Math.max(1e-6, Math.hypot(dx, dy));
  return k.map(p => ({ x: (p.x - hip.x) / s, y: (p.y - hip.y) / s, score: p.score ?? 1 }));
}

let prev: LM | undefined;
export function resetPoseSmoothing() { prev = undefined; }

function smooth(curr: LM, a = 0.6): LM {
  if (!prev) { 
    prev = curr; 
    return curr; 
  }
  const out = curr.map((p, i) => ({ 
    x: a * p.x + (1 - a) * prev![i].x, 
    y: a * p.y + (1 - a) * prev![i].y, 
    score: p.score 
  }));
  prev = out;
  return out;
}

function angleAt(a: KP, b: KP, c: KP) {
  const u = [a.x - b.x, a.y - b.y];
  const v = [c.x - b.x, c.y - b.y];
  const dot = u[0] * v[0] + u[1] * v[1];
  const nu = Math.hypot(...u);
  const nv = Math.hypot(...v);
  if (nu < 1e-6 || nv < 1e-6) return Math.PI;
  return Math.acos(Math.min(1, Math.max(-1, dot / (nu * nv))));
}

function angleBetween(u: [number, number], v: [number, number]) {
  const dot = u[0] * v[0] + u[1] * v[1];
  const nu = Math.hypot(...u);
  const nv = Math.hypot(...v);
  if (nu < 1e-6 || nv < 1e-6) return Math.PI;
  return Math.acos(Math.min(1, Math.max(-1, dot / (nu * nv))));
}

function metrics(k: LM) {
  const L = (i: number) => k[i];
  const elbowL = angleAt(L(5), L(7), L(9));
  const elbowR = angleAt(L(6), L(8), L(10));
  const kneeL = angleAt(L(11), L(13), L(15));
  const kneeR = angleAt(L(12), L(14), L(16));
  const up: [number, number] = [0, -1];
  const uaL: [number, number] = [L(7).x - L(5).x, L(7).y - L(5).y]; // elbow - shoulder
  const uaR: [number, number] = [L(8).x - L(6).x, L(8).y - L(6).y];
  const shoulderElevL = angleBetween(uaL, up);
  const shoulderElevR = angleBetween(uaR, up);
  const torsoTilt = angleBetween([L(12).x - L(11).x, L(12).y - L(11).y], [1, 0]);
  return { elbowL, elbowR, kneeL, kneeR, shoulderElevL, shoulderElevR, torsoTilt };
}

export function similarity17(refRaw: LM, liveRaw: LM) {
  const ref = normalize(refRaw);
  const live = smooth(normalize(liveRaw));
  
  // Confidence gating
  const idx = [5, 6, 7, 8, 9, 10, 11, 12];
  if (!idx.every(i => (ref[i].score ?? 1) > 0.35 && (live[i].score ?? 1) > 0.35)) return 0;

  const R = metrics(ref);
  const L = metrics(live);
  const parts: [number, number][] = [
    [Math.cos(R.elbowL - L.elbowL), 1.0],
    [Math.cos(R.elbowR - L.elbowR), 1.0],
    [Math.cos(R.kneeL - L.kneeL), 1.1],
    [Math.cos(R.kneeR - L.kneeR), 1.1],
    [Math.cos(R.shoulderElevL - L.shoulderElevL), 1.4],
    [Math.cos(R.shoulderElevR - L.shoulderElevR), 1.4],
    [Math.cos(R.torsoTilt - L.torsoTilt), 0.6],
  ];
  let s = 0, w = 0;
  for (const [c, wt] of parts) { 
    s += c * wt; 
    w += wt; 
  }
  return (s / w + 1) / 2; // 0..1
}

export function biggestHint17(refRaw: LM, liveRaw: LM) {
  const R = metrics(normalize(refRaw));
  const L = metrics(normalize(liveRaw));
  const diffs: [string, number][] = [
    ["Raise left arm", Math.abs(R.shoulderElevL - L.shoulderElevL)],
    ["Raise right arm", Math.abs(R.shoulderElevR - L.shoulderElevR)],
    ["Bend left knee", Math.abs(R.kneeL - L.kneeL)],
    ["Bend right knee", Math.abs(R.kneeR - L.kneeR)],
    ["Straighten left elbow", Math.abs(R.elbowL - L.elbowL)],
    ["Straighten right elbow", Math.abs(R.elbowR - L.elbowR)],
  ];
  diffs.sort((a, b) => b[1] - a[1]);
  return diffs[0][0];
}

export function withTimingGrace(sim: number, dtMs: number, win = 120) {
  if (Math.abs(dtMs) <= win) return sim;
  const fall = Math.max(0, 1 - (Math.abs(dtMs) - win) / 300);
  return sim * fall;
}
