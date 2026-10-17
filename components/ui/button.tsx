import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from 'cn';
import { Slot } from 'radix-ui';

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-md text-[0.9375rem] leading-none font-semibold whitespace-nowrap transition-[color,background-color,border-color,transform] duration-150 ease-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-[1.125rem]",
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-foreground hover:-translate-y-px hover:bg-primary-hover active:translate-y-0',
        accent: 'bg-accent text-accent-foreground hover:bg-blue-400',
        outline: 'border border-border-strong text-primary hover:border-primary hover:bg-surface',
        ghost: 'text-primary hover:bg-surface',
        link: 'text-link underline decoration-blue-200 underline-offset-[3px] hover:text-blue-700 hover:decoration-blue-600',
      },
      size: {
        sm: 'h-9 px-5',
        default: 'h-11 px-6',
        lg: 'h-13 px-6',
        icon: 'size-11',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);

function Button({
  className,
  variant = 'primary',
  size = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : 'button';

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
