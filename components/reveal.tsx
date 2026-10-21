'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { cn } from 'cn';

// design.md §8.3: reveal once on scroll (opacity 0→1, translateY 12px→0, 400–500ms).
// Progressive enhancement: without JS the content stays visible; the hidden state only
// exists while the observer is attached. With prefers-reduced-motion nothing is hidden.
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (typeof IntersectionObserver === 'undefined') return;

    element.dataset.reveal = 'hidden';

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          element.dataset.reveal = 'visible';
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-[opacity,translate] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] data-[reveal=hidden]:translate-y-3 data-[reveal=hidden]:opacity-0 motion-reduce:transition-none motion-reduce:data-[reveal=hidden]:translate-y-0 motion-reduce:data-[reveal=hidden]:opacity-100',
        className,
      )}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
