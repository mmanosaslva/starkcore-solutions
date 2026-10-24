'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { CircleAlertIcon, CircleCheckIcon, LoaderCircleIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { privacyPolicy } from '@/components/privacy-policy';
import { contactEmail } from '@/components/site-links';
import { TurnstileWidget } from '@/components/turnstile-widget';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactSchema } from '@/lib/contact-schema';

// Same limits as the server; the checkbox starts unchecked, so the client accepts a boolean
// and requires it to be true (plan-legal.md §3.3).
const formSchema = contactSchema
  .pick({ name: true, company: true, email: true, message: true })
  .extend({ consent: z.boolean().refine(Boolean) });

type FormInput = z.input<typeof formSchema>;
type FormOutput = z.output<typeof formSchema>;
type Status = 'idle' | 'success' | 'invalid' | 'error';

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '';

export function ContactForm() {
  const t = useTranslations('contact');
  const [status, setStatus] = useState<Status>('idle');
  const [token, setToken] = useState<string | null>(null);
  const [tokenMissing, setTokenMissing] = useState(false);
  // A Turnstile token is single-use: remount the widget after each attempt.
  const [widgetKey, setWidgetKey] = useState(0);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  const form = useForm<FormInput, unknown, FormOutput>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', company: '', email: '', message: '', consent: false },
  });

  // Maps zod issue codes to translated messages; the shared schema carries no UI text.
  function errorText(field: keyof FormInput, type: string | undefined) {
    if (field === 'consent') return t('errors.consent');
    if (type === 'too_big') return t('errors.tooLong');
    if (field === 'email' && type === 'invalid_format' && form.getValues('email').trim()) {
      return t('errors.email');
    }
    return t('errors.required');
  }

  async function onSubmit(values: FormOutput) {
    if (!token) {
      setTokenMissing(true);
      return;
    }

    setStatus('idle');
    let next: Status = 'error';
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          ...values,
          website: honeypotRef.current?.value ?? '',
          turnstileToken: token,
        }),
      });
      if (response.ok) next = 'success';
      else if (response.status === 400) next = 'invalid';
    } catch {
      next = 'error';
    }

    if (next === 'success') form.reset();
    setToken(null);
    setWidgetKey((key) => key + 1);
    setStatus(next);
    // Move focus to the result so keyboard and screen reader users hear it.
    requestAnimationFrame(() => statusRef.current?.focus());
  }

  const submitting = form.formState.isSubmitting;

  return (
    <Form {...form}>
      <form
        aria-label={t('formLabel')}
        noValidate
        onSubmit={(event) => form.handleSubmit(onSubmit)(event)}
        className="grid gap-6 text-left md:grid-cols-2"
      >
        <div ref={statusRef} tabIndex={-1} className="empty:hidden md:col-span-2">
          {status === 'success' ? (
            <div
              role="status"
              className="border-success bg-success-soft text-foreground flex gap-3 rounded-md border-l-[3px] p-4"
            >
              <CircleCheckIcon aria-hidden="true" className="text-success mt-0.5 size-5 shrink-0" />
              <div>
                <p className="font-semibold">{t('success.title')}</p>
                <p className="mt-1">{t('success.text')}</p>
              </div>
            </div>
          ) : null}
          {status === 'invalid' || status === 'error' ? (
            <div
              role="alert"
              className="border-error bg-error-soft text-foreground flex gap-3 rounded-md border-l-[3px] p-4"
            >
              <CircleAlertIcon aria-hidden="true" className="text-error mt-0.5 size-5 shrink-0" />
              <div>
                <p className="font-semibold">{t('failure.title')}</p>
                <p className="mt-1">
                  {status === 'invalid' ? t('failure.invalid') : t('failure.generic')}
                </p>
              </div>
            </div>
          ) : null}
        </div>

        <FormField
          control={form.control}
          name="name"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>{t('fields.name')}</FormLabel>
              <FormControl>
                <Input autoComplete="name" maxLength={100} aria-required="true" {...field} />
              </FormControl>
              <FormMessage>
                {fieldState.error && errorText('name', fieldState.error.type)}
              </FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="company"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>
                {t('fields.company')}{' '}
                <span className="text-muted-foreground font-normal">{t('optional')}</span>
              </FormLabel>
              <FormControl>
                <Input autoComplete="organization" maxLength={120} {...field} />
              </FormControl>
              <FormMessage>
                {fieldState.error && errorText('company', fieldState.error.type)}
              </FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field, fieldState }) => (
            <FormItem className="md:col-span-2">
              <FormLabel>{t('fields.email')}</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  maxLength={254}
                  aria-required="true"
                  {...field}
                />
              </FormControl>
              <FormMessage>
                {fieldState.error && errorText('email', fieldState.error.type)}
              </FormMessage>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field, fieldState }) => (
            <FormItem className="md:col-span-2">
              <FormLabel>{t('fields.message')}</FormLabel>
              <FormDescription>{t('messageHint')}</FormDescription>
              <FormControl>
                <Textarea rows={5} maxLength={5000} aria-required="true" {...field} />
              </FormControl>
              <FormMessage>
                {fieldState.error && errorText('message', fieldState.error.type)}
              </FormMessage>
            </FormItem>
          )}
        />

        {/* Honeypot (plan-seguridad.md §4.3): hidden from people and assistive tech, bots fill it. */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <label>
            {t('honeypot')}
            <input ref={honeypotRef} type="text" name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <FormField
          control={form.control}
          name="consent"
          render={({ field: { value, onChange, ...field }, fieldState }) => (
            <FormItem className="md:col-span-2">
              <div className="flex items-start gap-3">
                <FormControl>
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={(event) => onChange(event.target.checked)}
                    aria-required="true"
                    className="border-border-strong aria-invalid:outline-error accent-navy mt-0.5 size-5 shrink-0"
                    {...field}
                  />
                </FormControl>
                <FormLabel className="leading-[1.5] font-normal">{t('consentLabel')}</FormLabel>
              </div>
              <FormMessage>
                {fieldState.error && errorText('consent', fieldState.error.type)}
              </FormMessage>
            </FormItem>
          )}
        />

        {/* plan-legal.md §3.2: short privacy notice next to the form, linking the full policy. */}
        <p className="text-muted-foreground text-sm leading-[1.6] md:col-span-2">
          {t.rich('privacyNotice', {
            email: contactEmail,
            link: (chunks) => (
              <Link
                href={privacyPolicy.path}
                className="text-link rounded-sm underline decoration-blue-200 underline-offset-[3px] hover:text-blue-700 hover:decoration-blue-600"
              >
                {chunks}
              </Link>
            ),
          })}
        </p>

        <div className="md:col-span-2">
          <TurnstileWidget
            key={widgetKey}
            siteKey={siteKey}
            onToken={(value) => {
              setToken(value);
              if (value) setTokenMissing(false);
            }}
          />
          {tokenMissing ? (
            <p role="alert" className="text-destructive mt-2 flex items-start gap-2 text-sm">
              <CircleAlertIcon aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
              {t('errors.turnstile')}
            </p>
          ) : null}
        </div>

        <div className="md:col-span-2">
          {/* design.md §7.4: loading state with a discreet spinner; the label never changes. */}
          <Button type="submit" size="lg" disabled={submitting} aria-busy={submitting}>
            {submitting ? (
              <LoaderCircleIcon
                aria-hidden="true"
                className="animate-spin motion-reduce:animate-none"
              />
            ) : null}
            {t('submit')}
          </Button>
          <span role="status" className="sr-only">
            {submitting ? t('sending') : ''}
          </span>
        </div>
      </form>
    </Form>
  );
}
