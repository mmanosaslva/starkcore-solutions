import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { Eyebrow } from '@/components/eyebrow';
import { privacyPolicy } from '@/components/privacy-policy';
import { contactEmail, sicHref, whatsappDisplay, whatsappHref } from '@/components/site-links';
import { Badge } from '@/components/ui/badge';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('legalNoticePage.metadata');
  return {
    title: t('title'),
    description: t('description'),
    // Draft under legal review (T4.3): keep it out of search engines until approved.
    robots: { index: false },
  };
}

const linkClass =
  'text-link rounded-sm underline decoration-blue-200 underline-offset-[3px] transition-colors duration-150 hover:text-blue-700 hover:decoration-blue-600';

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section aria-labelledby={id} className="flex flex-col gap-4">
      <h2
        id={id}
        className="text-[1.375rem] leading-[1.25] font-semibold tracking-[-0.01em] md:text-[1.75rem]"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="flex list-disc flex-col gap-2 pl-5 marker:text-blue-600">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

// plan-legal.md §3.2: legal notice with provider identification and terms of use.
export default async function LegalNoticePage() {
  const t = await getTranslations('legalNoticePage');
  const s = (key: string) => t(`sections.${key}`);
  const list = (key: string) => t.raw(`sections.${key}`) as string[];
  const emailLink = (
    <a href={`mailto:${contactEmail}`} className={`${linkClass} break-all`}>
      {contactEmail}
    </a>
  );
  const whatsappLink = (
    <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={linkClass}>
      {whatsappDisplay}
      <span className="sr-only"> {t('newTab')}</span>
    </a>
  );

  return (
    <main className="flex-1 py-16 md:py-20 lg:py-28">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-[65ch]">
          <Badge>{t('draftNotice')}</Badge>
          <Eyebrow className="mt-6">{t('eyebrow')}</Eyebrow>
          <h1 className="mt-5 text-[2.25rem] leading-[1.05] font-bold tracking-[-0.02em] md:text-[3.75rem]">
            {t('title')}
          </h1>
          <p className="text-muted-foreground mt-6 text-[1.0625rem] leading-[1.7] md:text-lg">
            {t('lead')}
          </p>
        </header>

        <div className="mt-12 flex max-w-[65ch] flex-col gap-12 text-base leading-[1.65] lg:mt-16">
          <Section id="provider" title={s('provider.title')}>
            <p>{s('provider.intro')}</p>
            <List items={list('provider.people')} />
            <dl className="grid gap-x-6 gap-y-3 sm:grid-cols-[auto_1fr]">
              {(
                [
                  ['tradeNameLabel', s('provider.tradeName')],
                  ['domicileLabel', s('provider.domicile')],
                  ['addressLabel', s('provider.address')],
                  ['emailLabel', emailLink],
                  ['phoneLabel', whatsappLink],
                ] as const
              ).map(([label, value]) => (
                <div key={label} className="contents">
                  <dt className="text-muted-foreground">{s(`provider.${label}`)}</dt>
                  <dd className="mb-2 sm:mb-0">{value}</dd>
                </div>
              ))}
            </dl>
            <p>{s('provider.outro')}</p>
          </Section>

          {(['purpose', 'terms'] as const).map((key) => (
            <Section key={key} id={key} title={s(`${key}.title`)}>
              <p>{s(`${key}.text`)}</p>
            </Section>
          ))}

          <Section id="use" title={s('use.title')}>
            <p>{s('use.intro')}</p>
            <List items={list('use.items')} />
          </Section>

          {(['ip', 'services', 'links'] as const).map((key) => (
            <Section key={key} id={key} title={s(`${key}.title`)}>
              <p>{s(`${key}.text`)}</p>
            </Section>
          ))}

          <Section id="data" title={s('data.title')}>
            <p>
              {t.rich('sections.data.text', {
                privacy: (chunks) => (
                  <Link href={privacyPolicy.path} className={linkClass}>
                    {chunks}
                  </Link>
                ),
              })}
            </p>
          </Section>

          {(['liability', 'changes'] as const).map((key) => (
            <Section key={key} id={key} title={s(`${key}.title`)}>
              <p>{s(`${key}.text`)}</p>
            </Section>
          ))}

          <Section id="law" title={s('law.title')}>
            <p>
              {t.rich('sections.law.text', {
                emailAddress: contactEmail,
                email: (chunks) => (
                  <a href={`mailto:${contactEmail}`} className={`${linkClass} break-all`}>
                    {chunks}
                  </a>
                ),
                whatsappNumber: whatsappDisplay,
                whatsapp: (chunks) => (
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {chunks}
                    <span className="sr-only"> {t('newTab')}</span>
                  </a>
                ),
                sic: (chunks) => (
                  <a href={sicHref} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {chunks}
                    <span className="sr-only"> {t('newTab')}</span>
                  </a>
                ),
              })}
            </p>
          </Section>

          <p className="text-muted-foreground font-mono text-xs">{t('copyright')}</p>
        </div>
      </div>
    </main>
  );
}
