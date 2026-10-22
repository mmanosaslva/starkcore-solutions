// Main navigation shared by Navbar and Footer: landing anchors plus the /servicios page.
// Anchors are prefixed with "/" so they also work from other pages.
export const sectionLinks = [
  { key: 'problems', href: '/#problemas' },
  { key: 'services', href: '/servicios' },
  { key: 'cases', href: '/#casos' },
  { key: 'process', href: '/#proceso' },
] as const;

export const contactHref = '/#contacto';

export const contactEmail = 'contacto.starkcore.solutions@gmail.com';
export const whatsappDisplay = '+57 322 611 0864';
export const whatsappHref = 'https://wa.me/573226110864';
