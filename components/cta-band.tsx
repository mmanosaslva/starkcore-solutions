import { MailIcon, MessageCircleIcon } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { ContactForm } from '@/components/contact-form';
import { Eyebrow } from '@/components/eyebrow';
import { Reveal } from '@/components/reveal';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { contactEmail, whatsappHref } from '@/components/site-links';

// design.md §9.2 row 8: blue-50 band (the footer that follows is already navy).
// The contact form is the main action; WhatsApp and email stay visible as direct channels
// (plan-sitio.md §2.3), as outline buttons so the section keeps a single primary button (§7.10).
export async function CtaBand() {
  const t = await getTranslations('ctaBand');

  return (
    <section
      id="contacto"
      aria-labelledby="cta-title"
      className="scroll-mt-16 bg-blue-50 py-16 md:py-20 lg:scroll-mt-18 lg:py-28"
    >
      <div className="max-w-container mx-auto grid gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-6 lg:px-8">
        <Reveal className="lg:col-span-5 lg:pr-6">
          <Eyebrow>{t('eyebrow')}</Eyebrow>
          <h2
            id="cta-title"
            className="mt-5 max-w-[20ch] text-[1.75rem] leading-[1.12] font-bold tracking-[-0.015em] md:text-[2.75rem]"
          >
            {t('title')}
          </h2>
          <p className="text-muted-foreground mt-6 max-w-[55ch] text-[1.0625rem] leading-[1.7] md:text-lg">
            {t('lead')}
          </p>

          <h3 className="mt-10 text-lg leading-[1.3] font-semibold tracking-[-0.005em] md:text-xl">
            {t('directTitle')}
          </h3>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-start">
            <Button asChild size="lg" variant="outline">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <MessageCircleIcon aria-hidden="true" />
                {t('whatsapp')}
                <span className="sr-only"> {t('newTab')}</span>
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={`mailto:${contactEmail}`}>
                <MailIcon aria-hidden="true" />
                {t('email')}
              </a>
            </Button>
          </div>
          {/* plan-legal.md §6: next to the WhatsApp button, state it is a third-party channel. */}
          <p className="text-muted-foreground mt-4 max-w-[55ch] text-base leading-[1.65]">
            {t('whatsappNote')}
          </p>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={60}>
          <Card>
            <ContactForm />
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
