import type { ComponentProps } from 'react';
import { cn } from 'cn';

// design.md §7.7: mono 12px uppercase label, prefixed with a 16px line (not a round bullet).
export function Eyebrow({
  className,
  tone = 'light',
  ...props
}: ComponentProps<'p'> & { tone?: 'light' | 'navy' }) {
  return (
    <p
      className={cn(
        'flex items-center gap-3 font-mono text-xs font-medium tracking-[0.14em] uppercase before:h-px before:w-4 before:bg-current',
        tone === 'light' ? 'text-blue-600' : 'text-cyan',
        className,
      )}
      {...props}
    />
  );
}
