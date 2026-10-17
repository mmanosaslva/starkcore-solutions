import type { Metadata } from 'next';
import { DM_Sans, Roboto_Mono } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import './globals.css';

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadata');
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function RootLayout({ children }: LayoutProps<'/'>) {
  const messages = await getMessages();

  return (
    <html lang="es" className={`${dmSans.variable} ${robotoMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
