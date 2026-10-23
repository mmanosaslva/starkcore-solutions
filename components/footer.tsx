import Image from 'next/image';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import {
  contactEmail,
  legalLinks,
  sectionLinks,
  sicHref,
  whatsappDisplay,
  whatsappHref,
} from '@/components/site-links';

const linkClass =
  'rounded-sm text-blue-200 transition-colors duration-150 hover:text-cyan focus-visible:outline-cyan';

export async function Footer() {
  const t = await getTranslations('footer');
  const tNav = await getTranslations('navbar');

  return (
    <footer className="bg-navy py-16 text-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-12 md:gap-6">
          <div className="md:col-span-5">
            <Link href="/" aria-label={tNav('home')} className="inline-block rounded-sm">
              <Image src="/logo-navy.svg" alt="" width={150} height={31} className="w-37.5" />
            </Link>
            <p className="text-navy-muted mt-6 max-w-[40ch] text-base leading-[1.65]">
              {t('tagline')}
            </p>
          </div>

          <nav aria-labelledby="footer-nav-title" className="md:col-span-3">
            <h2 id="footer-nav-title" className="font-mono text-xs tracking-[0.14em] uppercase">
              {t('navTitle')}
            </h2>
            <ul className="mt-4 flex flex-col gap-3">
              {sectionLinks.map(({ key, href }) => (
                <li key={key}>
                  <Link href={href} className={linkClass}>
                    {tNav(`links.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <h2 className="font-mono text-xs tracking-[0.14em] uppercase">{t('contactTitle')}</h2>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <span className="text-navy-muted block">{t('emailLabel')}</span>
                <a href={`mailto:${contactEmail}`} className={`${linkClass} break-all`}>
                  {contactEmail}
                </a>
              </li>
              <li>
                <span className="text-navy-muted block">{t('whatsappLabel')}</span>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  {whatsappDisplay}
                  <span className="sr-only"> {t('newTab')}</span>
                </a>
                {/* plan-legal.md §6: next to the WhatsApp link, state it is a third-party channel. */}
                <span className="text-navy-muted mt-1 block text-sm leading-[1.6]">
                  {t('whatsappNote')}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* plan-legal.md §4 and §6: legal pages, consumer authority and provider identification. */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-6">
          <nav aria-label={t('legalTitle')}>
            <ul className="flex flex-col gap-x-6 gap-y-1 text-sm sm:flex-row sm:flex-wrap">
              {legalLinks.map(({ key, href }) => (
                <li key={key}>
                  {/* No prefetch: legal pages are rarely visited, and /aviso-legal 404s until T4.2. */}
                  <Link href={href} prefetch={false} className={`${linkClass} inline-block py-1`}>
                    {t(`legalLinks.${key}`)}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={sicHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkClass} inline-block py-1`}
                >
                  {t('sic')}
                  <span className="sr-only"> {t('newTab')}</span>
                </a>
              </li>
            </ul>
          </nav>
          <p className="text-navy-muted max-w-[75ch] text-sm leading-[1.6]">{t('provider')}</p>
          <div className="text-navy-muted flex flex-col gap-2 font-mono text-xs sm:flex-row sm:justify-between">
            <p>{t('copyright')}</p>
            <p>{t('location')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
