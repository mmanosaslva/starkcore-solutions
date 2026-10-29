import { privacyPolicy } from '@/components/privacy-policy';

// Main navigation shared by Navbar and Footer: landing anchors plus the interior pages.
// Anchors are prefixed with "/" so they also work from other pages.
export const sectionLinks = [
  { key: 'problems', href: '/#problemas' },
  { key: 'services', href: '/servicios' },
  { key: 'cases', href: '/#casos' },
  { key: 'process', href: '/#proceso' },
  { key: 'about', href: '/nosotros' },
  { key: 'contact', href: '/contacto' },
] as const;

export const contactHref = '/contacto';

export const contactEmail = 'contacto.starkcore.solutions@gmail.com';
export const whatsappDisplay = '+57 322 611 0864';
export const whatsappHref = 'https://wa.me/573226110864';

// plan-legal.md §6: legal pages linked from the footer.
export const legalLinks = [
  { key: 'privacy', href: privacyPolicy.path },
  { key: 'legalNotice', href: '/aviso-legal' },
] as const;

// Ley 1480 art. 50: visible link to the consumer protection authority.
export const sicHref = 'https://www.sic.gov.co';
