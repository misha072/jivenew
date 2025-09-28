'use client';

import React from 'react';
import { CoachApi, CoachMessage } from '@/components/CoachFeedback';

export type ScoreSnapshot = {
  value: number;
  at: number;
};

function trendFromDelta(delta: number) {
  if (delta >= 8) return 'surging' as const;
  if (delta >= 3) return 'improving' as const;
  if (delta <= -8) return 'dropping-fast' as const;
  if (delta <= -3) return 'dropping' as const;
  return 'steady' as const;
}

function buildTip(score: number, trend: ReturnType<typeof trendFromDelta>): { text: string; tone: CoachMessage['tone'] } {
  // Short, actionable tips. Keep it upbeat and specific.
  if (trend === 'surging') return { text: `On fire! Score ${score}. Keep that energy and full-range motion!`, tone: 'celebration' };
  if (trend === 'improving') return { text: `Nice! Score ${score}. Great form—keep shoulders relaxed and match timing.`, tone: 'encouragement' };
  if (trend === 'dropping-fast') return { text: `Small reset. Focus on big beats and mirror the torso angle. You got this!`, tone: 'warning' };
  if (trend === 'dropping') return { text: `Tempo check—match the rhythm and extend your arms a touch more.`, tone: 'tip' };
  // steady
  if (score >= 90) return { text: `Elite consistency at ${score}! Maintain posture and breathe.`, tone: 'celebration' };
  if (score >= 75) return { text: `Solid ${score}. Try exaggerating arm lines for extra points.`, tone: 'tip' };
  if (score >= 50) return { text: `You’re halfway there—sync hips with the beat to climb.`, tone: 'encouragement' };
  return { text: `Start strong: open chest, clear arm paths, and follow the beat.`, tone: 'encouragement' };
}

export function useDanceCoach(params: {
  score: number;
  isPlaying: boolean;
  onFeedback: CoachApi['push'];
}) {
  const { score, isPlaying, onFeedback } = params;
  const last = React.useRef<ScoreSnapshot | null>(null);
  const lastTipAt = React.useRef<number>(0);

  React.useEffect(() => {
    if (!isPlaying) return;

    const now = Date.now();
    const prev = last.current;

    // Rate-limit to 2s between tips to avoid spam
    const RATE_LIMIT_MS = 2000;
    const MILESTONE_STEP = 10; // celebrate every +10 bucket

    const canEmit = now - lastTipAt.current >= RATE_LIMIT_MS;

    if (prev) {
      const delta = score - prev.value;
      const trend = trendFromDelta(delta);

      // Milestones (70,80,90,100) or by tens
      const crossedMilestone = Math.floor(score / MILESTONE_STEP) > Math.floor(prev.value / MILESTONE_STEP);

      // Emit on notable trend or milestone
      if (canEmit && (Math.abs(delta) >= 3 || crossedMilestone)) {
        const tip = buildTip(score, trend);
        onFeedback({ text: tip.text, tone: tip.tone });
        lastTipAt.current = now;
      }
    } else {
      // First tip when starting play
      if (canEmit && score >= 0) {
        const tip = buildTip(score, 'steady');
        onFeedback({ text: `Coach ready. ${tip.text}`, tone: 'encouragement' });
        lastTipAt.current = now;
      }
    }

    last.current = { value: score, at: now };
  }, [score, isPlaying, onFeedback]);
}
