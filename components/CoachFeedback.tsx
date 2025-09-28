'use client';

import React from 'react';

export type CoachMessage = {
  id: string;
  text: string;
  tone?: 'encouragement' | 'tip' | 'celebration' | 'warning';
  createdAt: number;
  ttlMs?: number; // time to live
};

export type CoachApi = {
  push: (msg: Omit<CoachMessage, 'id' | 'createdAt'>) => void;
  clear: () => void;
};

export function useCoachFeedback(): [CoachMessage[], CoachApi] {
  const [messages, setMessages] = React.useState<CoachMessage[]>([]);

  // Auto-remove expired messages
  React.useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setMessages((prev) => prev.filter((m) => (m.ttlMs ? m.createdAt + m.ttlMs > now : true)));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const push = React.useCallback((msg: Omit<CoachMessage, 'id' | 'createdAt'>) => {
    const id = Math.random().toString(36).slice(2);
    setMessages((prev) => [
      ...prev,
      {
        id,
        createdAt: Date.now(),
        ttlMs: 4000,
        tone: 'tip',
        ...msg,
      },
    ]);
  }, []);

  const clear = React.useCallback(() => setMessages([]), []);

  return [messages, { push, clear }];
}

export function CoachFeedbackOverlay({ messages }: { messages: CoachMessage[] }) {
  return (
    <div
      className="pointer-events-none fixed right-4 top-4 z-50 flex w-full max-w-sm flex-col gap-3"
      aria-live="polite"
      aria-atomic="true"
    >
      {messages.map((m) => (
        <div
          key={m.id}
          className={`pointer-events-auto rounded-lg border p-3 shadow-lg backdrop-blur bg-black/70 text-white ${
            m.tone === 'celebration'
              ? 'border-green-400'
              : m.tone === 'warning'
              ? 'border-yellow-400'
              : m.tone === 'encouragement'
              ? 'border-blue-400'
              : 'border-purple-300'
          }`}
        >
          <div className="flex items-start gap-2">
            <span className="text-xl">
              {m.tone === 'celebration' ? '🎉' : m.tone === 'warning' ? '⚠️' : m.tone === 'encouragement' ? '💪' : '💡'}
            </span>
            <p className="text-sm leading-5">{m.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
