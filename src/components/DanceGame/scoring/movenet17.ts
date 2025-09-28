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

