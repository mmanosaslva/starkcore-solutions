import * as React from 'react';
import { cn } from 'cn';

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'border-border-strong bg-card placeholder:text-muted-foreground-2 aria-invalid:border-error aria-invalid:ring-error/15 field-sizing-content min-h-24 w-full rounded-md border px-3 py-2 text-base transition-[border-color,box-shadow] duration-150 focus:border-blue-500 focus:ring-[3px] focus:ring-blue-500/15 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
