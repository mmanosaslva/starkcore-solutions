import * as React from 'react';
import { cn } from 'cn';
import { Slot } from 'radix-ui';

function Badge({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<'span'> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : 'span';

  return (
    <Comp
      data-slot="badge"
      className={cn(
        'inline-flex w-fit shrink-0 items-center gap-1 rounded-sm bg-blue-100 px-2 py-1 font-mono text-[0.6875rem] leading-[1.2] font-medium tracking-[0.1em] text-blue-700 uppercase [&>svg]:pointer-events-none [&>svg]:size-3',
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
