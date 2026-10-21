import { getTranslations } from 'next-intl/server';
import { Reveal } from '@/components/reveal';
import { SectionHeader } from '@/components/section-header';

const steps = ['diagnosis', 'proposal', 'implementation', 'support'] as const;

// design.md §9.2 row 5: band A, 4 steps with mono numbering (01–04) and a connector line.
export async function ProcessSection() {
  const t = await getTranslations('process');

  return (
    <section
      id="proceso"
      aria-labelledby="process-title"
      className="scroll-mt-16 py-16 md:py-20 lg:scroll-mt-18 lg:py-28"
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="process-title"
          eyebrow={t('eyebrow')}
          title={t('title')}
          lead={t('lead')}
        />

        <ol className="lg:before:bg-border relative mt-12 grid gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8 lg:before:absolute lg:before:top-2 lg:before:right-0 lg:before:left-0 lg:before:h-px">
          {steps.map((key, index) => (
            <li key={key} className="relative">
              <Reveal delay={(index % 4) * 60}>
                <span className="bg-background relative z-10 inline-block pr-3 font-mono text-sm font-medium tracking-[0.14em] text-blue-600">
                  {t(`steps.${key}.number`)}
                </span>
                <h3 className="mt-3 text-lg leading-[1.3] font-semibold tracking-[-0.005em] md:text-xl">
                  {t(`steps.${key}.title`)}
                </h3>
                <p className="text-muted-foreground mt-2 text-base leading-[1.65]">
                  {t(`steps.${key}.text`)}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
