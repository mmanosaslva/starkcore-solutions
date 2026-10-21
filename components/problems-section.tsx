import { getTranslations } from 'next-intl/server';
import { SectionHeader } from '@/components/section-header';
import { Card } from '@/components/ui/card';

const problems = ['manualOrders', 'manualSecop', 'disconnectedData', 'repetitiveTasks'] as const;

// design.md §9.2 row 2: band B, 3–4 numbered cards (01–04), no decorative icons.
export async function ProblemsSection() {
  const t = await getTranslations('problems');

  return (
    <section
      id="problemas"
      aria-labelledby="problems-title"
      className="bg-surface scroll-mt-16 py-16 md:py-20 lg:scroll-mt-18 lg:py-28"
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="problems-title"
          eyebrow={t('eyebrow')}
          title={t('title')}
          lead={t('lead')}
        />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {problems.map((key) => (
            <li key={key}>
              <Card className="h-full">
                <span className="font-mono text-sm font-medium tracking-[0.14em] text-blue-600">
                  {t(`items.${key}.number`)}
                </span>
                <h3 className="text-lg leading-[1.3] font-semibold tracking-[-0.005em] md:text-xl">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="text-muted-foreground text-base leading-[1.65]">
                  {t(`items.${key}.text`)}
                </p>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
