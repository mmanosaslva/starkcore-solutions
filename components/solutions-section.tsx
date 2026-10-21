import {
  BellIcon,
  DatabaseIcon,
  FileSearchIcon,
  GlobeIcon,
  LayoutDashboardIcon,
  MailIcon,
  PlugIcon,
  WorkflowIcon,
} from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Reveal } from '@/components/reveal';
import { SectionHeader } from '@/components/section-header';
import { Card } from '@/components/ui/card';

const services = [
  { key: 'automation', icon: WorkflowIcon },
  { key: 'integrations', icon: PlugIcon },
  { key: 'orders', icon: MailIcon },
  { key: 'notifications', icon: BellIcon },
  { key: 'secop', icon: FileSearchIcon },
  { key: 'web', icon: GlobeIcon },
  { key: 'internalTools', icon: LayoutDashboardIcon },
  { key: 'data', icon: DatabaseIcon },
] as const;

// design.md §9.2 rows 3 and 7: band A, grid with 2px linear icons; the web service lives here in the MVP.
export async function SolutionsSection() {
  const t = await getTranslations('solutions');

  return (
    <section
      id="soluciones"
      aria-labelledby="solutions-title"
      className="scroll-mt-16 py-16 md:py-20 lg:scroll-mt-18 lg:py-28"
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="solutions-title"
          eyebrow={t('eyebrow')}
          title={t('title')}
          lead={t('lead')}
        />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {services.map(({ key, icon: Icon }, index) => (
            <li key={key}>
              <Reveal delay={(index % 4) * 60} className="h-full">
                <Card className="h-full" interactive>
                  <Icon aria-hidden="true" className="size-6 text-blue-600" strokeWidth={2} />
                  <h3 className="text-lg leading-[1.3] font-semibold tracking-[-0.005em] md:text-xl">
                    {t(`services.${key}.title`)}
                  </h3>
                  <p className="text-muted-foreground text-base leading-[1.65]">
                    {t(`services.${key}.text`)}
                  </p>
                </Card>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
