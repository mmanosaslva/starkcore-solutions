'use client';

import { useSyncExternalStore } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from 'cn';
import { MenuIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { contactHref, sectionLinks } from '@/components/site-links';

// design.md §7.5: the bottom border only appears after scrolling more than 8px.
const SCROLL_THRESHOLD = 8;

function subscribeToScroll(onChange: () => void) {
  window.addEventListener('scroll', onChange, { passive: true });
  return () => window.removeEventListener('scroll', onChange);
}

function useScrolled() {
  return useSyncExternalStore(
    subscribeToScroll,
    () => window.scrollY > SCROLL_THRESHOLD,
    () => false,
  );
}

export function Navbar() {
  const t = useTranslations('navbar');
  const scrolled = useScrolled();

  return (
    <header
      className={cn(
        'bg-background/85 sticky top-0 z-40 border-b backdrop-blur-md transition-colors duration-150',
        scrolled ? 'border-border' : 'border-transparent',
      )}
    >
      <div className="max-w-container mx-auto flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:h-18 lg:px-8">
        <Link href="/" aria-label={t('home')} className="shrink-0 rounded-sm">
          <Image
            src="/logo.svg"
            alt=""
            width={140}
            height={29}
            priority
            className="w-33 lg:w-37.5"
          />
        </Link>

        <nav aria-label={t('label')} className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {sectionLinks.map(({ key, href }) => (
              <li key={key}>
                <Link
                  href={href}
                  className="text-muted-foreground hover:text-foreground after:bg-accent relative rounded-sm py-1 text-[0.9375rem] transition-colors duration-150 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:transition-transform after:duration-150 hover:after:scale-x-100"
                >
                  {t(`links.${key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm">
            <Link href={contactHref}>{t('cta')}</Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <MenuIcon className="size-6" />
                <span className="sr-only">{t('openMenu')}</span>
              </Button>
            </SheetTrigger>
            <SheetContent closeLabel={t('closeMenu')} aria-describedby={undefined}>
              <SheetHeader>
                <SheetTitle>{t('menuTitle')}</SheetTitle>
              </SheetHeader>
              <nav aria-label={t('label')} className="px-6">
                <ul className="flex flex-col gap-1">
                  {sectionLinks.map(({ key, href }) => (
                    <li key={key}>
                      <SheetClose asChild>
                        <Link
                          href={href}
                          className="text-foreground hover:bg-surface flex min-h-11 items-center rounded-md px-3 text-lg transition-colors duration-150"
                        >
                          {t(`links.${key}`)}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
