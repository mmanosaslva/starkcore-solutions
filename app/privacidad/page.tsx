import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { getTranslations } from 'next-intl/server';
import { Eyebrow } from '@/components/eyebrow';
import { privacyPolicy } from '@/components/privacy-policy';
import { contactEmail, whatsappDisplay } from '@/components/site-links';
import { Badge } from '@/components/ui/badge';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('privacyPage.metadata');
  return {
    title: t('title'),
    description: t('description'),
    // Draft under legal review (T4.3): keep it out of search engines until approved.
    robots: { index: false },
  };
}

const processors = ['vercel', 'brevo', 'google', 'cloudflare'] as const;

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

// plan-legal.md §3.2: privacy policy with every item required by Decreto 1377 art. 13.
export default async function PrivacyPage() {
  const t = await getTranslations('privacyPage');
  const s = (key: string) => t(`sections.${key}`);
  const list = (key: string) => t.raw(`sections.${key}`) as string[];
  const emailLink = (
    <a href={`mailto:${contactEmail}`} className={`${linkClass} break-all`}>
      {contactEmail}
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
          <p className="mt-6 font-mono text-sm">
            {t('effectiveDateLabel')}: {privacyPolicy.effectiveDate ?? t('effectiveDatePending')}
          </p>
        </header>

        <div className="mt-12 flex max-w-[65ch] flex-col gap-12 text-base leading-[1.65] lg:mt-16">
          <Section id="controllers" title={s('controllers.title')}>
            <p>{s('controllers.intro')}</p>
            <List items={list('controllers.people')} />
            <dl className="grid gap-x-6 gap-y-3 sm:grid-cols-[auto_1fr]">
              {(
                [
                  ['tradeNameLabel', s('controllers.tradeName')],
                  ['domicileLabel', s('controllers.domicile')],
                  ['addressLabel', s('controllers.address')],
                  ['emailLabel', emailLink],
                  ['phoneLabel', whatsappDisplay],
                ] as const
              ).map(([label, value]) => (
                <div key={label} className="contents">
                  <dt className="text-muted-foreground">{s(`controllers.${label}`)}</dt>
                  <dd className="mb-2 sm:mb-0">{value}</dd>
                </div>
              ))}
            </dl>
          </Section>

          <Section id="data" title={s('data.title')}>
            <p>{s('data.intro')}</p>
            <List items={list('data.items')} />
            <p>{s('data.outro')}</p>
          </Section>

          <Section id="purposes" title={s('purposes.title')}>
            <p>{s('purposes.intro')}</p>
            <List items={list('purposes.items')} />
            <p>{s('purposes.outro')}</p>
          </Section>

          <Section id="processing" title={s('processing.title')}>
            <p>{s('processing.text')}</p>
          </Section>

          <Section id="consent" title={s('consent.title')}>
            <p>{s('consent.text')}</p>
          </Section>

          <Section id="rights" title={s('rights.title')}>
            <p>{s('rights.intro')}</p>
            <List items={list('rights.items')} />
          </Section>

          <Section id="contact" title={s('contact.title')}>
            <p>
              {t.rich('sections.contact.text', {
                address: contactEmail,
                email: (chunks) => (
                  <a href={`mailto:${contactEmail}`} className={`${linkClass} break-all`}>
                    {chunks}
                  </a>
                ),
              })}
            </p>
          </Section>

          <Section id="procedure" title={s('procedure.title')}>
            <h3 className="text-lg leading-[1.3] font-semibold tracking-[-0.005em] md:text-xl">
              {s('procedure.queriesTitle')}
            </h3>
            <p>{s('procedure.queries')}</p>
            <h3 className="mt-2 text-lg leading-[1.3] font-semibold tracking-[-0.005em] md:text-xl">
              {s('procedure.claimsTitle')}
            </h3>
            <p>{s('procedure.claimsIntro')}</p>
            <List items={list('procedure.claims')} />
          </Section>

          <Section id="processors" title={s('processors.title')}>
            <p>{s('processors.intro')}</p>
            {/* design.md §6.3.5: stacked blocks instead of a table, so it never scrolls sideways. */}
            <ul className="flex flex-col gap-4">
              {processors.map((key) => (
                <li key={key} className="border-border rounded-lg border p-5">
                  <p className="font-semibold">{s(`processors.items.${key}.name`)}</p>
                  <dl className="mt-3 grid gap-x-4 gap-y-1 sm:grid-cols-[auto_1fr]">
                    {(['role', 'data', 'country'] as const).map((field) => (
                      <div key={field} className="contents">
                        <dt className="text-muted-foreground">{s(`processors.labels.${field}`)}</dt>
                        <dd className="mb-2 sm:mb-0">{s(`processors.items.${key}.${field}`)}</dd>
                      </div>
                    ))}
                  </dl>
                </li>
              ))}
            </ul>
            <p>{s('processors.outro')}</p>
          </Section>

          {(['whatsapp', 'retention', 'security', 'cookies', 'changes'] as const).map((key) => (
            <Section key={key} id={key} title={s(`${key}.title`)}>
              <p>{s(`${key}.text`)}</p>
            </Section>
          ))}
        </div>
      </div>
    </main>
  );
}
