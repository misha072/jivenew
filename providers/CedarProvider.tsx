'use client';

import React from 'react';
import { CedarCopilot, ProviderConfig } from 'cedar-os';

export default function CedarProvider({ children }: { children: React.ReactNode }) {
  const llmProvider: ProviderConfig = {
    provider: 'mastra' as const,
    baseURL: process.env.NEXT_PUBLIC_MASTRA_URL || 'http://localhost:4111',
  };

  return (
    <CedarCopilot
      userId={'Dance Player'}
      threadId={'just-dance-session'}
      llmProvider={llmProvider}
    >
      {children}
    </CedarCopilot>
  );
}
