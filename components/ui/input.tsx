import * as React from 'react';
import { cn } from 'cn';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'border-border-strong bg-card placeholder:text-muted-foreground-2 aria-invalid:border-error aria-invalid:ring-error/15 h-11 w-full min-w-0 rounded-md border px-3 py-1 text-base transition-[border-color,box-shadow] duration-150 focus:border-blue-500 focus:ring-[3px] focus:ring-blue-500/15 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  );
}

export { Input };
