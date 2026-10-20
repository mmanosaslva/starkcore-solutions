import { MailIcon, MessageCircleIcon } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { Eyebrow } from '@/components/eyebrow';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { contactEmail, whatsappHref } from '@/components/site-links';

// design.md §9.2 row 8: blue-50 band (the footer that follows is already navy).
// The contact form replaces the direct channels' card content in T3.3.
export async function CtaBand() {
  const t = await getTranslations('ctaBand');

  return (
    <section
      id="contacto"
      aria-labelledby="cta-title"
      className="scroll-mt-16 bg-blue-50 py-16 md:py-20 lg:scroll-mt-18 lg:py-28"
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="mx-auto max-w-3xl items-center text-center">
          <Eyebrow>{t('eyebrow')}</Eyebrow>
          <h2
            id="cta-title"
            className="max-w-[20ch] text-[1.75rem] leading-[1.12] font-bold tracking-[-0.015em] md:text-[2.75rem]"
          >
            {t('title')}
          </h2>
          <p className="text-muted-foreground max-w-[55ch] text-[1.0625rem] leading-[1.7] md:text-lg">
            {t('lead')}
          </p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button asChild size="lg">
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
          <p className="text-muted-foreground max-w-[55ch] text-base leading-[1.65]">
            {t('whatsappNote')}
          </p>
        </Card>
      </div>
    </section>
  );
}
