'use client';

import { ArrowRight, CircleAlert } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Textarea } from '@/components/ui/textarea';

const sheetItems = ['sheetItemHome', 'sheetItemServices', 'sheetItemProcess', 'sheetItemContact'];

export function ComponentsDemo() {
  const t = useTranslations('tokensPage');

  return (
    <div className="mt-6 flex flex-col gap-12">
      <div>
        <p className="text-muted-foreground font-mono text-[0.6875rem] tracking-[0.06em] uppercase">
          {t('subButtons')}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-4">
          <Button>{t('buttonPrimary')}</Button>
          <Button variant="accent">{t('buttonAccent')}</Button>
          <Button variant="outline">{t('buttonOutline')}</Button>
          <Button variant="ghost">{t('buttonGhost')}</Button>
          <Button variant="link">{t('buttonLink')}</Button>
        </div>
        <p className="text-muted-foreground mt-8 font-mono text-[0.6875rem] tracking-[0.06em] uppercase">
          {t('subButtonSizes')}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-4">
          <Button size="sm">{t('buttonSizeSm')}</Button>
          <Button>{t('buttonSizeDefault')}</Button>
          <Button size="lg">{t('buttonSizeLg')}</Button>
          <Button size="icon" aria-label={t('buttonIconLabel')}>
            <ArrowRight />
          </Button>
          <Button disabled>{t('buttonDisabled')}</Button>
        </div>
      </div>

      <div>
        <p className="text-muted-foreground font-mono text-[0.6875rem] tracking-[0.06em] uppercase">
          {t('subBadge')}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-4">
          <Badge>{t('sampleBadge')}</Badge>
        </div>
      </div>

      <div>
        <p className="text-muted-foreground font-mono text-[0.6875rem] tracking-[0.06em] uppercase">
          {t('subInputs')}
        </p>
        <div className="mt-4 grid max-w-md gap-6">
          <div className="grid gap-2">
            <Label htmlFor="demo-name">{t('inputLabel')}</Label>
            <Input id="demo-name" placeholder={t('inputPlaceholder')} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="demo-email">{t('inputErrorLabel')}</Label>
            <Input
              id="demo-email"
              aria-invalid
              placeholder={t('inputErrorPlaceholder')}
              defaultValue="tucorreo@"
            />
            <p className="text-error flex items-center gap-1.5 text-sm">
              <CircleAlert className="size-4" />
              {t('inputErrorMessage')}
            </p>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="demo-message">{t('textareaLabel')}</Label>
            <Textarea id="demo-message" placeholder={t('textareaPlaceholder')} />
          </div>
        </div>
      </div>

      <div>
        <p className="text-muted-foreground font-mono text-[0.6875rem] tracking-[0.06em] uppercase">
          {t('subCards')}
        </p>
        <div className="mt-4 grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <Badge>{t('sampleBadge')}</Badge>
              <CardTitle>{t('cardTitle')}</CardTitle>
              <CardDescription>{t('cardDescription')}</CardDescription>
            </CardHeader>
          </Card>
          <Card variant="surface">
            <CardHeader>
              <CardTitle>{t('cardTitle')}</CardTitle>
              <CardDescription>{t('cardDescription')}</CardDescription>
            </CardHeader>
          </Card>
          <Card variant="surface" interactive>
            <CardHeader>
              <CardTitle>{t('cardInteractive')}</CardTitle>
              <CardDescription>{t('cardDescription')}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="link">
                {t('cardLink')}
                <ArrowRight />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div>
        <p className="text-muted-foreground font-mono text-[0.6875rem] tracking-[0.06em] uppercase">
          {t('subSheet')}
        </p>
        <div className="mt-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">{t('sheetTrigger')}</Button>
            </SheetTrigger>
            <SheetContent closeLabel={t('sheetClose')}>
              <SheetHeader>
                <SheetTitle>{t('sheetTitle')}</SheetTitle>
              </SheetHeader>
              <Separator />
              <nav className="flex flex-col px-6">
                {sheetItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-muted-foreground hover:text-foreground py-3 text-lg font-medium transition-colors duration-150"
                  >
                    {t(item)}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
