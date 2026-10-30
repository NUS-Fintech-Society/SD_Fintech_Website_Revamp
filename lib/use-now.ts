'use client';

import { useSyncExternalStore } from 'react';

let clientNow: number | undefined;
const subscribe = () => () => {};

/**
 * The build time while prerendering and hydrating, then the browser's clock, so upcoming/past and relative dates
 * stay right without a redeploy. Known limit: read once per page load; add a timer if pages stay open across an event.
 */
export function useNow(buildNow: number) {
  return useSyncExternalStore(subscribe, () => (clientNow ??= Date.now()), () => buildNow);
}
