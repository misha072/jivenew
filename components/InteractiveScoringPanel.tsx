'use client';

import React from 'react';
import type { ScorePoint, PerformanceSummary } from '@/hooks/usePerformance';

export default function InteractiveScoringPanel({
  score,
  isPlaying,
  history,
  summary,
  onAsk,
}: {
  score: number;
  isPlaying: boolean;
  history: ScorePoint[];
  summary: PerformanceSummary;
  onAsk: (question: string) => void;
}) {
  const [q, setQ] = React.useState('How am I doing right now?');

  const ask = () => {
    if (!q.trim()) return;
    onAsk(q.trim());
    // keep the question but could clear if desired
  };

  return (
    <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 text-white">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-semibold">Ask the Coach</h3>
        <div className="text-sm text-white/70">
          Score: <span className="font-mono">{score}</span> · Trend: <span className="capitalize">{summary.trend}</span> · Avg: <span className="font-mono">{summary.average}</span>
        </div>
      </div>
      <div className="flex gap-2">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Ask about your performance (e.g., why did my score drop?)"
          className="flex-1 rounded-md bg-black/40 px-3 py-2 outline-none ring-1 ring-white/15 focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={ask}
          className="rounded-md bg-blue-600 px-4 py-2 font-medium hover:bg-blue-700 disabled:opacity-50"
          disabled={!isPlaying}
          title={isPlaying ? 'Ask' : 'Start playing to get live insights'}
        >
          Ask
        </button>
      </div>
      <div className="mt-3 flex flex-wrap gap-2 text-sm">
        {[
          'How am I doing right now?',
          'Why did my score drop?',
          'What can I improve next?',
          'What’s my best streak?'
        ].map((s) => (
          <button
            key={s}
            onClick={() => {
              setQ(s);
              onAsk(s);
            }}
            className="rounded-full bg-white/10 px-3 py-1 hover:bg-white/15"
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
