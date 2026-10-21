import Link from 'next/link';
import { cn } from 'cn';
import { ArrowDownIcon } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Button } from '@/components/ui/button';

// design.md §7.11: 45° signature cut on the top-right corner of the hero visual (16px).
const cornerCut = '[clip-path:polygon(0_0,calc(100%-16px)_0,100%_16px,100%_100%,0_100%)]';

const beforeItems = ['emails', 'spreadsheets', 'copyPaste', 'messages'] as const;
const afterSteps = ['receive', 'register', 'notify'] as const;

// The logo's staircase (navy → blue → bright blue) marks each step; the cyan dot is the result.
const stepColors = ['bg-navy', 'bg-secondary', 'bg-brand'] as const;
// Uneven indents make the "before" list read as scattered, without rotations (§8.4).
const beforeIndents = ['ml-0', 'ml-6', 'ml-2', 'ml-8'] as const;

export async function Hero() {
  const t = await getTranslations('home');

  return (
    <section aria-labelledby="hero-title" className="bg-background py-16 md:py-20 lg:py-28">
      <div className="max-w-container mx-auto grid gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-6 lg:px-8">
        <div className="lg:col-span-7">
          <p className="flex items-center gap-3 font-mono text-xs font-medium tracking-[0.14em] text-blue-600 uppercase">
            <span aria-hidden="true" className="h-px w-4 bg-current" />
            {t('eyebrow')}
          </p>
          <h1
            id="hero-title"
            className="mt-5 max-w-[20ch] text-[2.25rem] leading-[1.05] font-bold tracking-[-0.02em] md:text-[3.75rem]"
          >
            {t.rich('title', {
              accent: (chunks) => <span className="text-accent">{chunks}</span>,
            })}
          </h1>
          <p className="text-muted-foreground mt-6 max-w-[60ch] text-[1.0625rem] leading-[1.7] md:text-lg">
            {t('lead')}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/#contacto">{t('primaryCta')}</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/#soluciones">{t('secondaryCta')}</Link>
            </Button>
          </div>
        </div>

        <figure className="lg:col-span-5">
          <figcaption className="sr-only">{t('visual.caption')}</figcaption>
          <div className={cn('bg-border-strong p-px', cornerCut)}>
            <div className={cn('bg-card p-6 md:p-8', cornerCut)}>
              <p className="text-muted-foreground font-mono text-xs font-medium tracking-[0.14em] uppercase">
                {t('visual.beforeLabel')}
              </p>
              <ul className="mt-4 flex flex-col gap-2">
                {beforeItems.map((key, i) => (
                  <li
                    key={key}
                    className={cn(
                      'border-border-strong bg-surface text-muted-foreground w-fit rounded-md border border-dashed px-3 py-2 text-base',
                      beforeIndents[i],
                    )}
                  >
                    {t(`visual.before.${key}`)}
                  </li>
                ))}
              </ul>

              <div
                aria-hidden="true"
                className="text-muted-foreground-2 my-6 flex items-center gap-3"
              >
                <span className="bg-border h-px flex-1" />
                <ArrowDownIcon className="size-5" strokeWidth={2} />
                <span className="bg-border h-px flex-1" />
              </div>

              <p className="font-mono text-xs font-medium tracking-[0.14em] text-blue-600 uppercase">
                {t('visual.afterLabel')}
              </p>
              <ol className="mt-4 flex flex-col">
                {afterSteps.map((key, i) => (
                  <li key={key} className="group relative flex gap-4 pb-5 last:pb-0">
                    {/* Connector line between step markers */}
                    <span
                      aria-hidden="true"
                      className="bg-border absolute top-4 bottom-0 left-[5px] w-0.5 group-last:hidden"
                    />
                    <span
                      aria-hidden="true"
                      className={cn('relative mt-1.5 size-3 shrink-0 rounded-sm', stepColors[i])}
                    />
                    <span className="text-foreground text-base font-medium">
                      {t(`visual.after.${key}`)}
                    </span>
                  </li>
                ))}
              </ol>
              <p className="border-border mt-6 flex items-center gap-3 border-t pt-5 text-base font-semibold">
                <span aria-hidden="true" className="bg-cyan size-3 shrink-0 rounded-full" />
                {t('visual.result')}
              </p>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}
