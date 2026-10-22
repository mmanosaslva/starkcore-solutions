import { getTranslations } from 'next-intl/server';
import { z } from 'zod';

import { privacyPolicy } from '@/components/privacy-policy';

export const MAX_BODY_BYTES = 32 * 1024;
export const SUBJECT_PREFIX = '[Formulario web] Nuevo contacto';
export const SENDER_NAME = 'StarkCore Solutions — Web';
export const POLICY_PENDING_VERSION = 'borrador (sin fecha de vigencia)';

export const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  company: z.string().trim().max(120).optional().default(''),
  email: z.string().trim().max(254).email(),
  message: z.string().trim().min(1).max(5000),
  consent: z.literal(true),
  website: z.string().max(200).optional().default(''),
  turnstileToken: z.string().trim().min(1).max(2048),
});

export type ContactPayload = z.infer<typeof contactSchema>;

type ContactEmail = {
  subject: string;
  htmlContent: string;
  textContent: string;
};

const HTML_ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

export function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => HTML_ESCAPES[character] ?? character);
}

export function sanitizeHeaderValue(value: string): string {
  return value
    .replace(/[\r\n]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function getRequiredEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

export function isAllowedOrigin(request: Request, siteUrl: string): boolean {
  const origin = request.headers.get('origin');
  if (!origin) {
    return false;
  }
  try {
    return new URL(origin).origin === new URL(siteUrl).origin;
  } catch {
    return false;
  }
}

export async function readBodyWithLimit(request: Request, limit: number): Promise<string | null> {
  const declaredLength = request.headers.get('content-length');
  if (declaredLength !== null) {
    const length = Number(declaredLength);
    if (!Number.isFinite(length) || length > limit) {
      return null;
    }
  }

  if (!request.body) {
    return null;
  }

  const reader = request.body.getReader();
  const decoder = new TextDecoder();
  let received = 0;
  let body = '';

  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      received += value.byteLength;
      if (received > limit) {
        await reader.cancel();
        return null;
      }
      body += decoder.decode(value, { stream: true });
    }
    return body + decoder.decode();
  } catch {
    return null;
  }
}

export async function buildContactEmail(
  payload: ContactPayload,
  siteUrl: string,
): Promise<ContactEmail> {
  const t = await getTranslations({ locale: 'es', namespace: 'contact' });
  const consentText = t('consentLabel');
  const policyUrl = new URL(privacyPolicy.path, siteUrl).toString();
  const policyVersion = privacyPolicy.effectiveDate ?? POLICY_PENDING_VERSION;
  const submittedAt = new Date().toISOString();
  const safeName = sanitizeHeaderValue(payload.name);
  const safeCompany = sanitizeHeaderValue(payload.company);
  const companyLine = safeCompany || '—';
  const subject = `${SUBJECT_PREFIX} — ${safeName}`;
  const messageHtml = escapeHtml(payload.message.replace(/\r\n?/g, '\n')).replace(/\n/g, '<br />');

  const textContent = [
    'Nuevo contacto desde el formulario web',
    '',
    `Nombre: ${payload.name}`,
    `Empresa: ${companyLine}`,
    `Email: ${payload.email}`,
    '',
    'Mensaje:',
    payload.message,
    '',
    '---',
    'Prueba de consentimiento',
    'consentimiento: true',
    `fecha y hora (UTC): ${submittedAt}`,
    `versión de la política: ${policyVersion}`,
    `URL de la política: ${policyUrl}`,
    `texto aceptado: "${consentText}"`,
  ].join('\n');

  const htmlContent = [
    '<h2>Nuevo contacto desde el formulario web</h2>',
    `<p><strong>Nombre:</strong> ${escapeHtml(payload.name)}</p>`,
    `<p><strong>Empresa:</strong> ${escapeHtml(companyLine)}</p>`,
    `<p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>`,
    `<p><strong>Mensaje:</strong><br />${messageHtml}</p>`,
    '<hr />',
    '<h3>Prueba de consentimiento</h3>',
    '<ul>',
    '<li>consentimiento: true</li>',
    `<li>fecha y hora (UTC): ${escapeHtml(submittedAt)}</li>`,
    `<li>versión de la política: ${escapeHtml(policyVersion)}</li>`,
    `<li>URL de la política: ${escapeHtml(policyUrl)}</li>`,
    `<li>texto aceptado: &quot;${escapeHtml(consentText)}&quot;</li>`,
    '</ul>',
  ].join('\n');

  return { subject, htmlContent, textContent };
}
