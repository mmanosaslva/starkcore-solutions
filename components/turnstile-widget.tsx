'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

type TurnstileOptions = {
  sitekey: string;
  language?: string;
  size?: 'normal' | 'flexible' | 'compact';
  callback: (token: string) => void;
  'expired-callback': () => void;
  'error-callback': () => void;
};

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: TurnstileOptions) => string;
      remove: (widgetId: string) => void;
    };
  }
}

// Explicit rendering so the widget can be removed and re-created: a token is single-use,
// so the form remounts this component (new `key`) after every submission attempt.
const SCRIPT_URL = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

export function TurnstileWidget({
  siteKey,
  onToken,
}: {
  siteKey: string;
  onToken: (token: string | null) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const onTokenRef = useRef(onToken);

  useEffect(() => {
    onTokenRef.current = onToken;
  }, [onToken]);

  useEffect(
    () => () => {
      if (widgetIdRef.current) window.turnstile?.remove(widgetIdRef.current);
      widgetIdRef.current = null;
    },
    [],
  );

  function renderWidget() {
    if (!containerRef.current || !window.turnstile || widgetIdRef.current) return;
    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      language: 'es',
      // 'flexible' needs at least 300px; narrower containers (360px phones) get the compact widget.
      size: containerRef.current.offsetWidth < 300 ? 'compact' : 'flexible',
      callback: (token) => onTokenRef.current(token),
      'expired-callback': () => onTokenRef.current(null),
      'error-callback': () => onTokenRef.current(null),
    });
  }

  return (
    <>
      <Script src={SCRIPT_URL} onReady={renderWidget} />
      <div ref={containerRef} className="min-h-[65px]" />
    </>
  );
}
