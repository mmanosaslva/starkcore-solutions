import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRightIcon, MapPinIcon } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { CtaBand } from '@/components/cta-band';
import { Eyebrow } from '@/components/eyebrow';
import { Reveal } from '@/components/reveal';
import { SectionHeader } from '@/components/section-header';
import { Card } from '@/components/ui/card';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('aboutPage.metadata');
  return {
    title: t('title'),
    description: t('description'),
  };
}

const partners = ['daniel', 'meriyei'] as const;

const processSteps = ['diagnosis', 'proposal', 'implementation', 'support'] as const;

// plan-sitio.md §2.1: who we are, where we are and how we work. Honest copy only (reglas.md §5.5).
export default async function AboutPage() {
  const t = await getTranslations('aboutPage');
  const tProcess = await getTranslations('process');

  return (
    <main className="flex-1">
      <section aria-labelledby="about-title" className="bg-background py-16 md:py-20 lg:py-28">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>{t('header.eyebrow')}</Eyebrow>
          <h1
            id="about-title"
            className="mt-5 max-w-[20ch] text-[2.25rem] leading-[1.05] font-bold tracking-[-0.02em] md:text-[3.75rem]"
          >
            {t('header.title')}
          </h1>
          <p className="text-muted-foreground mt-6 max-w-[60ch] text-[1.0625rem] leading-[1.7] md:text-lg">
            {t('header.lead')}
          </p>
        </div>
      </section>

      <section aria-labelledby="about-team-title" className="bg-surface py-16 md:py-20 lg:py-28">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            id="about-team-title"
            eyebrow={t('team.eyebrow')}
            title={t('team.title')}
            lead={t('team.lead')}
          />

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16">
            {partners.map((key, index) => {
              const name = t(`team.partners.${key}.name`);
              const words = name.trim().split(/\s+/);
              const monogram = `${words[0]?.[0] ?? ''}${words.at(-1)?.[0] ?? ''}`;

              return (
                <li key={key}>
                  <Reveal delay={index * 60} className="h-full">
                    <Card className="h-full">
                      <span
                        aria-hidden="true"
                        className="flex size-12 items-center justify-center rounded-md bg-blue-50 font-mono text-sm font-medium tracking-[0.14em] text-blue-700"
                      >
                        {monogram}
                      </span>
                      <div>
                        <h3 className="text-lg leading-[1.3] font-semibold tracking-[-0.005em] md:text-xl">
                          {name}
                        </h3>
                        <p className="text-muted-foreground mt-1 text-base leading-[1.65]">
                          {t(`team.partners.${key}.role`)}
                        </p>
                      </div>
                    </Card>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="about-location-title"
        className="bg-background py-16 md:py-20 lg:py-28"
      >
        <div className="max-w-container mx-auto grid gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:gap-12 lg:px-8">
          <SectionHeader
            id="about-location-title"
            eyebrow={t('location.eyebrow')}
            title={t('location.title')}
          />
          <Reveal>
            <Card className="h-full">
              <MapPinIcon aria-hidden="true" className="size-6 text-blue-600" strokeWidth={2} />
              <p className="text-base leading-[1.65]">{t('location.text')}</p>
            </Card>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="about-process-title" className="bg-surface py-16 md:py-20 lg:py-28">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            id="about-process-title"
            eyebrow={tProcess('eyebrow')}
            title={tProcess('title')}
            lead={tProcess('lead')}
          />

          <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8">
            {processSteps.map((key, index) => (
              <li key={key}>
                <Reveal delay={(index % 4) * 60}>
                  <span className="font-mono text-sm font-medium tracking-[0.14em] text-blue-600">
                    {tProcess(`steps.${key}.number`)}
                  </span>
                  <h3 className="mt-3 text-lg leading-[1.3] font-semibold tracking-[-0.005em] md:text-xl">
                    {tProcess(`steps.${key}.title`)}
                  </h3>
                  <p className="text-muted-foreground mt-2 text-base leading-[1.65]">
                    {tProcess(`steps.${key}.text`)}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>

          <Link
            href="/#proceso"
            className="text-link mt-10 inline-flex items-center gap-2 rounded-sm font-semibold underline decoration-blue-200 underline-offset-[3px] transition-colors duration-150 hover:text-blue-700 hover:decoration-blue-600"
          >
            {t('processLink')}
            <ArrowRightIcon aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
