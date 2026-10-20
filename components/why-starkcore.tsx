import { HandshakeIcon, MapPinIcon, SlidersHorizontalIcon, WrenchIcon } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Eyebrow } from '@/components/eyebrow';

const reasons = [
  { key: 'local', icon: MapPinIcon },
  { key: 'tailored', icon: SlidersHorizontalIcon },
  { key: 'support', icon: HandshakeIcon },
  { key: 'technology', icon: WrenchIcon },
] as const;

// design.md §9.2 row 6: first navy band of the page. Never followed by another navy band (§3.7).
export async function WhyStarkcore() {
  const t = await getTranslations('whyStarkcore');

  return (
    <section aria-labelledby="why-title" className="bg-navy py-16 text-white md:py-20 lg:py-28">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <Eyebrow tone="navy">{t('eyebrow')}</Eyebrow>
        <h2
          id="why-title"
          className="mt-5 max-w-[20ch] text-[1.75rem] leading-[1.12] font-bold tracking-[-0.015em] md:text-[2.75rem]"
        >
          {t('title')}
        </h2>
        <p className="mt-6 max-w-[60ch] text-[1.0625rem] leading-[1.7] text-blue-200 md:text-lg">
          {t('lead')}
        </p>

        <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8">
          {reasons.map(({ key, icon: Icon }) => (
            <li key={key} className="border-t border-white/15 pt-6">
              <Icon aria-hidden="true" className="text-cyan size-6" strokeWidth={2} />
              <h3 className="mt-4 text-lg leading-[1.3] font-semibold tracking-[-0.005em] md:text-xl">
                {t(`reasons.${key}.title`)}
              </h3>
              <p className="mt-2 text-base leading-[1.65] text-blue-200">
                {t(`reasons.${key}.text`)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
