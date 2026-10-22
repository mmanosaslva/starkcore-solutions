import type { Metadata } from 'next';
import { MailIcon, MapPinIcon, MessageCircleIcon } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { ContactForm } from '@/components/contact-form';
import { Eyebrow } from '@/components/eyebrow';
import { Reveal } from '@/components/reveal';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { contactEmail, whatsappDisplay, whatsappHref } from '@/components/site-links';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('contactPage.metadata');
  return {
    title: t('title'),
    description: t('description'),
  };
}

const steps = ['received', 'reply', 'quote'] as const;

// plan-sitio.md §2.1/§2.3: form plus the direct channels PYMES actually use, with the Meta notice.
export default async function ContactPage() {
  const t = await getTranslations('contactPage');
  const tCta = await getTranslations('ctaBand');

  return (
    <main className="flex-1">
      <section aria-labelledby="contact-title" className="bg-background py-16 md:py-20 lg:py-28">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <Eyebrow>{t('header.eyebrow')}</Eyebrow>
          <h1
            id="contact-title"
            className="mt-5 max-w-[20ch] text-[2.25rem] leading-[1.05] font-bold tracking-[-0.02em] md:text-[3.75rem]"
          >
            {t('header.title')}
          </h1>
          <p className="text-muted-foreground mt-6 max-w-[60ch] text-[1.0625rem] leading-[1.7] md:text-lg">
            {t('header.lead')}
          </p>
        </div>
      </section>

      <section aria-labelledby="contact-form-title" className="bg-surface py-16 md:py-20 lg:py-28">
        <div className="max-w-container mx-auto grid gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-6 lg:px-8">
          <div className="lg:col-span-7">
            <Card>
              <div>
                <h2
                  id="contact-form-title"
                  className="text-xl leading-[1.25] font-semibold tracking-[-0.005em] md:text-2xl"
                >
                  {t('form.title')}
                </h2>
                <p className="text-muted-foreground mt-2 text-base leading-[1.65]">
                  {t('form.lead')}
                </p>
              </div>
              <ContactForm />
            </Card>
          </div>

          <Reveal className="lg:col-span-5 lg:pl-6" delay={60}>
            <section aria-labelledby="contact-channels-title">
              <h2
                id="contact-channels-title"
                className="text-xl leading-[1.25] font-semibold tracking-[-0.005em] md:text-2xl"
              >
                {tCta('directTitle')}
              </h2>

              <div className="mt-5 flex flex-col gap-3">
                <Button asChild variant="outline" size="lg" className="w-full">
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                    <MessageCircleIcon aria-hidden="true" />
                    {tCta('whatsapp')}
                    <span className="sr-only"> {tCta('newTab')}</span>
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full">
                  <a href={`mailto:${contactEmail}`}>
                    <MailIcon aria-hidden="true" />
                    {tCta('email')}
                  </a>
                </Button>
              </div>

              <ul className="text-muted-foreground mt-3 flex flex-col gap-1 text-sm">
                <li>{whatsappDisplay}</li>
                <li className="break-all">{contactEmail}</li>
              </ul>

              {/* plan-legal.md §6: next to the WhatsApp button, state it is a third-party channel. */}
              <p className="text-muted-foreground mt-4 text-base leading-[1.65]">
                {tCta('whatsappNote')}
              </p>

              <div className="border-border mt-8 border-t pt-6">
                <h3 className="font-mono text-xs font-medium tracking-[0.14em] text-blue-600 uppercase">
                  {t('direct.locationLabel')}
                </h3>
                <p className="mt-3 flex items-start gap-2 text-base leading-[1.65]">
                  <MapPinIcon aria-hidden="true" className="mt-1 size-4 shrink-0 text-blue-600" />
                  <span>
                    <span className="block">{t('direct.locationValue')}</span>
                    <span className="text-muted-foreground block">{t('direct.locationNote')}</span>
                  </span>
                </p>
              </div>
            </section>

            <section
              aria-labelledby="contact-next-title"
              className="border-border mt-8 border-t pt-6"
            >
              <p className="font-mono text-xs font-medium tracking-[0.14em] text-blue-600 uppercase">
                {t('next.eyebrow')}
              </p>
              <h2
                id="contact-next-title"
                className="mt-3 text-xl leading-[1.25] font-semibold tracking-[-0.005em] md:text-2xl"
              >
                {t('next.title')}
              </h2>
              <ol className="mt-5 flex flex-col gap-5">
                {steps.map((key) => (
                  <li key={key} className="flex gap-3">
                    <span className="font-mono text-sm font-medium tracking-[0.14em] text-blue-600">
                      {t(`next.steps.${key}.number`)}
                    </span>
                    <div>
                      <h3 className="text-base leading-[1.3] font-semibold">
                        {t(`next.steps.${key}.title`)}
                      </h3>
                      <p className="text-muted-foreground mt-1 text-base leading-[1.65]">
                        {t(`next.steps.${key}.text`)}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
