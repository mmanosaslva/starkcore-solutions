import { ArrowRightIcon } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Reveal } from '@/components/reveal';
import { SectionHeader } from '@/components/section-header';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

const flows = ['orders', 'secop', 'data'] as const;

function FlowBlock({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="font-mono text-xs font-medium tracking-[0.14em] text-blue-600 uppercase">
        {label}
      </p>
      <p className="text-muted-foreground mt-2 text-base leading-[1.65]">{text}</p>
    </div>
  );
}

// design.md §9.2 row 4 + plan-sitio.md decision #13: illustrative flows only, visibly labelled,
// with no client names and no result figures.
export async function CasesSection() {
  const t = await getTranslations('cases');

  return (
    <section
      id="casos"
      aria-labelledby="cases-title"
      className="bg-surface scroll-mt-16 py-16 md:py-20 lg:scroll-mt-18 lg:py-28"
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="cases-title"
          eyebrow={t('eyebrow')}
          title={t('title')}
          lead={t('lead')}
        />

        <ul className="mt-12 grid gap-6 lg:mt-16">
          {flows.map((key, index) => (
            <li key={key}>
              <Reveal delay={(index % 4) * 60}>
                <Card className="h-full" interactive>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-lg leading-[1.3] font-semibold tracking-[-0.005em] md:text-xl">
                      {t(`items.${key}.title`)}
                    </h3>
                    <Badge>{t('exampleLabel')}</Badge>
                  </div>
                  <div className="grid gap-5 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-start lg:gap-4">
                    <FlowBlock label={t('labels.problem')} text={t(`items.${key}.problem`)} />
                    <ArrowRightIcon
                      aria-hidden="true"
                      className="text-border-strong hidden size-4 lg:mt-1 lg:block"
                    />
                    <FlowBlock label={t('labels.solution')} text={t(`items.${key}.solution`)} />
                    <ArrowRightIcon
                      aria-hidden="true"
                      className="text-border-strong hidden size-4 lg:mt-1 lg:block"
                    />
                    <FlowBlock label={t('labels.result')} text={t(`items.${key}.result`)} />
                  </div>
                </Card>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
