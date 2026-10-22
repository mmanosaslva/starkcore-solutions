import type { Metadata } from 'next';
import Link from 'next/link';
import { cn } from 'cn';
import { ArrowRightIcon, CheckIcon, type LucideIcon } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { CtaBand } from '@/components/cta-band';
import { Eyebrow } from '@/components/eyebrow';
import { Reveal } from '@/components/reveal';
import { SectionHeader } from '@/components/section-header';
import { Card } from '@/components/ui/card';
import { services, type ServiceGroup } from '@/components/services';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('servicesPage.metadata');
  return {
    title: t('title'),
    description: t('description'),
  };
}

// Bands alternate A → B → A → B → D (blue-50 CTA) → C (navy footer), design.md §3.7.
const groups: { key: ServiceGroup; band: string }[] = [
  { key: 'automation', band: 'bg-surface' },
  { key: 'custom', band: 'bg-background' },
];

async function ServiceCard({ serviceKey, icon: Icon }: { serviceKey: string; icon: LucideIcon }) {
  const t = await getTranslations('servicesPage');
  const tTitles = await getTranslations('solutions.services');
  const includes = t.raw(`items.${serviceKey}.includes`) as string[];

  return (
    <Card className="h-full">
      <Icon aria-hidden="true" className="size-6 text-blue-600" strokeWidth={2} />
      <div className="flex flex-col gap-3">
        <h3 className="text-lg leading-[1.3] font-semibold tracking-[-0.005em] md:text-xl">
          {tTitles(`${serviceKey}.title`)}
        </h3>
        <p className="text-muted-foreground text-base leading-[1.65]">
          {t(`items.${serviceKey}.description`)}
        </p>
      </div>
      <div>
        <p className="font-mono text-xs font-medium tracking-[0.14em] text-blue-600 uppercase">
          {t('labels.includes')}
        </p>
        <ul className="mt-3 flex flex-col gap-2">
          {includes.map((item) => (
            <li key={item} className="flex gap-3 text-base leading-[1.65]">
              <CheckIcon aria-hidden="true" className="mt-1 size-4 shrink-0 text-blue-600" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <p className="border-border mt-auto border-t pt-5 text-base leading-[1.65]">
        <strong className="font-semibold">{t('labels.fit')}</strong> {t(`items.${serviceKey}.fit`)}
      </p>
    </Card>
  );
}

// plan-sitio.md §2.1: detail of the landing's Solutions grid. Honest copy only (reglas.md §5.5).
export default async function ServicesPage() {
  const t = await getTranslations('servicesPage');

  return (
    <main className="flex-1">
      <section aria-labelledby="services-title" className="bg-background py-16 md:py-20 lg:py-28">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>{t('header.eyebrow')}</Eyebrow>
          <h1
            id="services-title"
            className="mt-5 max-w-[20ch] text-[2.25rem] leading-[1.05] font-bold tracking-[-0.02em] md:text-[3.75rem]"
          >
            {t('header.title')}
          </h1>
          <p className="text-muted-foreground mt-6 max-w-[60ch] text-[1.0625rem] leading-[1.7] md:text-lg">
            {t('header.lead')}
          </p>
        </div>
      </section>

      {groups.map(({ key, band }) => (
        <section
          key={key}
          aria-labelledby={`services-${key}-title`}
          className={cn('py-16 md:py-20 lg:py-28', band)}
        >
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              id={`services-${key}-title`}
              eyebrow={t(`groups.${key}.eyebrow`)}
              title={t(`groups.${key}.title`)}
              lead={t(`groups.${key}.lead`)}
            />
            <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16">
              {services
                .filter((service) => service.group === key)
                .map((service, index) => (
                  <li key={service.key}>
                    <Reveal delay={(index % 2) * 60} className="h-full">
                      <ServiceCard serviceKey={service.key} icon={service.icon} />
                    </Reveal>
                  </li>
                ))}
            </ul>
          </div>
        </section>
      ))}

      {/* plan-legal.md §4.5: services are quoted, never shown with a fixed price. */}
      <section
        aria-labelledby="services-quote-title"
        className="bg-surface py-16 md:py-20 lg:py-28"
      >
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            id="services-quote-title"
            eyebrow={t('quote.eyebrow')}
            title={t('quote.title')}
            lead={t('quote.lead')}
          />
          <Link
            href="/#proceso"
            className="text-link mt-8 inline-flex items-center gap-2 rounded-sm font-semibold underline decoration-blue-200 underline-offset-[3px] transition-colors duration-150 hover:text-blue-700 hover:decoration-blue-600"
          >
            {t('quote.processLink')}
            <ArrowRightIcon aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
