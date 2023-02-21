import {
  Context,
  enableContextDevTools,
  enableDebugConsoleLogDrain,
} from '@uniformdev/context';
import { NextCookieTransitionDataStore } from '@uniformdev/context-next';
import manifest from '../contextManifest.json';
import { enableGoogleGtagAnalytics } from '@uniformdev/context-gtag';
import getConfig from 'next/config';

const {
  publicRuntimeConfig: { gtmStreamId },
} = getConfig();

export function createUniformContext(serverContext) {
  const plugins = [
    enableContextDevTools(),
    enableDebugConsoleLogDrain('debug'),
  ];

  if (gtmStreamId) {
    plugins.push(enableGoogleGtagAnalytics({ emitAll: true }));
  }

  const context = new Context({
    defaultConsent: true,
    manifest: manifest,
    transitionStore: new NextCookieTransitionDataStore({
      serverContext,
    }),
    plugins: plugins,
  });

  return context;
}
