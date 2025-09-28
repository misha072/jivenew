'use client';

import React from 'react';

export type ScorePoint = { t: number; score: number };

export type PerformanceSummary = {
  average: number;
  max: number;
  min: number;
  last: number;
  trend: 'surging' | 'improving' | 'steady' | 'dropping' | 'dropping-fast';
  volatility: number; // std dev
};

function computeSummary(points: ScorePoint[]): PerformanceSummary {
  if (points.length === 0) {
    return { average: 0, max: 0, min: 0, last: 0, trend: 'steady', volatility: 0 };
  }
  const scores = points.map((p) => p.score);
  const last = scores[scores.length - 1];
  const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
  const max = Math.max(...scores);
  const min = Math.min(...scores);
  const delta = scores.length >= 2 ? last - scores[Math.max(0, scores.length - 6)] : 0; // compare ~last 5 samples
  const trend = delta >= 8 ? 'surging' : delta >= 3 ? 'improving' : delta <= -8 ? 'dropping-fast' : delta <= -3 ? 'dropping' : 'steady';
  const mean = avg;
  const variance = scores.reduce((acc, s) => acc + Math.pow(s - mean, 2), 0) / Math.max(1, scores.length);
  const volatility = Math.sqrt(variance);
  return { average: Math.round(avg), max, min, last, trend, volatility: Math.round(volatility * 10) / 10 };
}

export function usePerformance(score: number, isPlaying: boolean) {
  const [history, setHistory] = React.useState<ScorePoint[]>([]);
  const [summary, setSummary] = React.useState<PerformanceSummary>(computeSummary([]));

  React.useEffect(() => {
    if (!isPlaying) return;
    setHistory((prev) => {
      const next = [...prev, { t: Date.now(), score }];
      const trimmed = next.slice(-200); // keep last 200 points
      setSummary(computeSummary(trimmed));
      return trimmed;
    });
  }, [score, isPlaying]);

  const reset = React.useCallback(() => {
    setHistory([]);
    setSummary(computeSummary([]));
  }, []);

  return { history, summary, reset };
}
