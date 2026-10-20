import { getTranslations } from 'next-intl/server';

import { ComponentsDemo } from './components-demo';

const blueScale = [
  { token: 'blue-50', hex: '#F2F9FF', swatch: 'bg-blue-50' },
  { token: 'blue-100', hex: '#E0F1FE', swatch: 'bg-blue-100' },
  { token: 'blue-200', hex: '#BDE0FD', swatch: 'bg-blue-200' },
  { token: 'blue-300', hex: '#8CC9FC', swatch: 'bg-blue-300' },
  { token: 'blue-400', hex: '#47A9FA', swatch: 'bg-blue-400' },
  { token: 'blue-500', hex: '#0088F8', swatch: 'bg-blue-500' },
  { token: 'blue-600', hex: '#006ECE', swatch: 'bg-blue-600' },
  { token: 'blue-700', hex: '#0052A2', swatch: 'bg-blue-700' },
  { token: 'blue-800', hex: '#003675', swatch: 'bg-blue-800' },
  { token: 'blue-900', hex: '#001038', swatch: 'bg-blue-900' },
];

const brandColors = [
  { token: 'brand', hex: '#0088F8', swatch: 'bg-brand' },
  { token: 'navy', hex: '#001038', swatch: 'bg-navy' },
  { token: 'secondary', hex: '#0050F0', swatch: 'bg-secondary' },
  { token: 'accent', hex: '#0BDBFF', swatch: 'bg-accent' },
];

const neutralColors = [
  { token: 'background', hex: '#FBFCFE', swatch: 'bg-background' },
  { token: 'surface', hex: '#F3F6FB', swatch: 'bg-surface' },
  { token: 'surface-strong', hex: '#EEF2F9', swatch: 'bg-surface-strong' },
  { token: 'foreground', hex: '#0A1330', swatch: 'bg-foreground' },
  { token: 'muted-foreground', hex: '#54607C', swatch: 'bg-muted-foreground' },
  { token: 'muted-foreground-2', hex: '#6B7794', swatch: 'bg-muted-foreground-2' },
  { token: 'border', hex: '#DDE4F0', swatch: 'bg-border' },
  { token: 'border-strong', hex: '#C9D4E8', swatch: 'bg-border-strong' },
  { token: 'border-hover', hex: '#B9C9E4', swatch: 'bg-border-hover' },
];

const semanticColors = [
  { token: 'success', hex: '#0E7A55', swatch: 'bg-success' },
  { token: 'success-soft', hex: '#E7F5EF', swatch: 'bg-success-soft' },
  { token: 'warning', hex: '#8A6100', swatch: 'bg-warning' },
  { token: 'warning-soft', hex: '#FBF3E2', swatch: 'bg-warning-soft' },
  { token: 'error', hex: '#C0392B', swatch: 'bg-error' },
  { token: 'error-soft', hex: '#FDECEA', swatch: 'bg-error-soft' },
];

const radii = [
  { token: 'rounded-sm', px: '4 px', className: 'rounded-sm' },
  { token: 'rounded-md', px: '8 px', className: 'rounded-md' },
  { token: 'rounded-lg', px: '12 px', className: 'rounded-lg' },
  { token: 'rounded-xl', px: '16 px', className: 'rounded-xl' },
];

const shadows = [
  { token: 'shadow-sm', className: 'shadow-sm' },
  { token: 'shadow-md', className: 'shadow-md' },
  { token: 'shadow-lg', className: 'shadow-lg' },
];

export default async function TokensPage() {
  const t = await getTranslations('tokensPage');

  const typography = [
    {
      label: t('labelDisplay'),
      className: 'font-bold text-[2.25rem] leading-[1.05] tracking-[-0.02em] md:text-[3.75rem]',
      sample: t('sampleTitle'),
    },
    {
      label: t('labelH2'),
      className: 'font-bold text-[1.75rem] leading-[1.12] tracking-[-0.015em] md:text-[2.75rem]',
      sample: t('sampleTitle'),
    },
    {
      label: t('labelH3'),
      className:
        'font-semibold text-[1.375rem] leading-[1.25] tracking-[-0.01em] md:text-[1.75rem]',
      sample: t('sampleTitle'),
    },
    {
      label: t('labelH4'),
      className:
        'font-semibold text-[1.125rem] leading-[1.3] tracking-[-0.005em] md:text-[1.25rem]',
      sample: t('sampleTitle'),
    },
    {
      label: t('labelLead'),
      className: 'text-[1.0625rem] leading-[1.7] md:text-[1.125rem]',
      sample: t('sampleLead'),
    },
    {
      label: t('labelBody'),
      className: 'text-base leading-[1.65]',
      sample: t('sampleBody'),
    },
    {
      label: t('labelSmall'),
      className: 'text-sm leading-[1.6]',
      sample: t('sampleSmall'),
    },
    {
      label: t('labelEyebrow'),
      className: 'text-blue-600 font-mono text-xs font-medium tracking-[0.14em] uppercase',
      sample: t('sampleEyebrow'),
    },
    {
      label: t('labelBadge'),
      className:
        'bg-blue-100 text-blue-700 inline-block rounded-sm px-2 py-1 font-mono text-[0.6875rem] font-medium tracking-[0.1em] uppercase',
      sample: t('sampleBadge'),
    },
    {
      label: t('labelButton'),
      className:
        'bg-primary text-primary-foreground inline-flex h-11 items-center rounded-md px-6 text-[0.9375rem] font-semibold',
      sample: t('sampleButton'),
    },
    {
      label: t('labelDato'),
      className: 'font-bold text-[2rem] leading-none tracking-[-0.02em] md:text-5xl',
      sample: t('sampleDato'),
    },
    {
      label: t('labelCode'),
      className: 'bg-surface inline-block rounded-sm px-2 py-1 font-mono text-sm leading-[1.5]',
      sample: t('sampleCode'),
    },
  ];

  return (
    <main className="max-w-container mx-auto flex w-full flex-1 flex-col px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-[1.75rem] leading-[1.12] font-bold tracking-[-0.015em] md:text-[2.75rem]">
        {t('title')}
      </h1>
      <p className="text-muted-foreground mt-2 max-w-[65ch]">{t('description')}</p>

      <section className="mt-16">
        <h2 className="text-[1.375rem] leading-[1.25] font-semibold tracking-[-0.01em]">
          {t('blueScaleTitle')}
        </h2>
        <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {blueScale.map((color) => (
            <li key={color.token} className="border-border overflow-hidden rounded-md border">
              <div className={`h-14 ${color.swatch}`} />
              <div className="border-border bg-card border-t px-2 py-1.5">
                <p className="font-mono text-[0.6875rem] font-medium tracking-[0.06em] uppercase">
                  {color.token}
                </p>
                <p className="text-muted-foreground font-mono text-[0.6875rem]">{color.hex}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-[1.375rem] leading-[1.25] font-semibold tracking-[-0.01em]">
          {t('brandTitle')}
        </h2>
        <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {brandColors.map((color) => (
            <li key={color.token} className="border-border overflow-hidden rounded-md border">
              <div className={`h-14 ${color.swatch}`} />
              <div className="border-border bg-card border-t px-2 py-1.5">
                <p className="font-mono text-[0.6875rem] font-medium tracking-[0.06em] uppercase">
                  {color.token}
                </p>
                <p className="text-muted-foreground font-mono text-[0.6875rem]">{color.hex}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-[1.375rem] leading-[1.25] font-semibold tracking-[-0.01em]">
          {t('neutralsTitle')}
        </h2>
        <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {neutralColors.map((color) => (
            <li key={color.token} className="border-border overflow-hidden rounded-md border">
              <div className={`h-14 ${color.swatch}`} />
              <div className="border-border bg-card border-t px-2 py-1.5">
                <p className="font-mono text-[0.6875rem] font-medium tracking-[0.06em] uppercase">
                  {color.token}
                </p>
                <p className="text-muted-foreground font-mono text-[0.6875rem]">{color.hex}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-[1.375rem] leading-[1.25] font-semibold tracking-[-0.01em]">
          {t('semanticTitle')}
        </h2>
        <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {semanticColors.map((color) => (
            <li key={color.token} className="border-border overflow-hidden rounded-md border">
              <div className={`h-14 ${color.swatch}`} />
              <div className="border-border bg-card border-t px-2 py-1.5">
                <p className="font-mono text-[0.6875rem] font-medium tracking-[0.06em] uppercase">
                  {color.token}
                </p>
                <p className="text-muted-foreground font-mono text-[0.6875rem]">{color.hex}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-[1.375rem] leading-[1.25] font-semibold tracking-[-0.01em]">
          {t('typographyTitle')}
        </h2>
        <ul className="mt-6 flex flex-col gap-8">
          {typography.map((item) => (
            <li key={item.label} className="border-border border-b pb-6">
              <p className="text-muted-foreground font-mono text-[0.6875rem] tracking-[0.06em] uppercase">
                {item.label}
              </p>
              <div className={`mt-2 ${item.className}`}>{item.sample}</div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-[1.375rem] leading-[1.25] font-semibold tracking-[-0.01em]">
          {t('radiiTitle')}
        </h2>
        <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {radii.map((radius) => (
            <li key={radius.token} className="flex flex-col gap-2">
              <div
                className={`border-border-strong bg-surface flex size-24 items-end justify-center border pb-2 ${radius.className}`}
              >
                <span className="text-muted-foreground font-mono text-[0.6875rem]">
                  {radius.px}
                </span>
              </div>
              <span className="text-muted-foreground font-mono text-[0.6875rem] uppercase">
                {radius.token}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-[1.375rem] leading-[1.25] font-semibold tracking-[-0.01em]">
          {t('shadowsTitle')}
        </h2>
        <ul className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {shadows.map((shadow) => (
            <li
              key={shadow.token}
              className={`border-border bg-card rounded-lg border p-6 ${shadow.className}`}
            >
              <span className="text-muted-foreground font-mono text-[0.6875rem] uppercase">
                {shadow.token}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-[1.375rem] leading-[1.25] font-semibold tracking-[-0.01em]">
          {t('containerTitle')}
        </h2>
        <div className="border-border-strong bg-surface max-w-container mt-6 rounded-lg border border-dashed p-4">
          <span className="text-muted-foreground font-mono text-[0.6875rem]">
            {t('containerLabel')}
          </span>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-[1.375rem] leading-[1.25] font-semibold tracking-[-0.01em]">
          {t('linkLabel')}
        </h2>
        <p className="mt-6">
          <a
            href="#"
            className="text-link underline decoration-blue-200 underline-offset-[3px] hover:text-blue-700"
          >
            {t('linkLabel')}
          </a>
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-[1.375rem] leading-[1.25] font-semibold tracking-[-0.01em]">
          {t('componentsTitle')}
        </h2>
        <ComponentsDemo />
      </section>
    </main>
  );
}
