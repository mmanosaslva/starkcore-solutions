import { getTranslations } from 'next-intl/server';

export default async function Home() {
  const t = await getTranslations('home');

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="text-4xl font-semibold tracking-tight">{t('heading')}</h1>
      <p className="mt-4 max-w-xl text-lg">{t('tagline')}</p>
    </main>
  );
}
