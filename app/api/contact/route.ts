import { NextResponse } from 'next/server';

import { sendTransactionalEmail } from '@/lib/brevo';
import {
  MAX_BODY_BYTES,
  SENDER_NAME,
  buildContactEmail,
  contactSchema,
  getRequiredEnv,
  isAllowedOrigin,
  readBodyWithLimit,
} from '@/lib/contact';
import { verifyTurnstileToken } from '@/lib/turnstile';

const NO_STORE_HEADERS = { 'cache-control': 'no-store' };

function jsonResponse(body: unknown, status = 200) {
  return NextResponse.json(body, { status, headers: NO_STORE_HEADERS });
}

export async function POST(request: Request) {
  const siteUrl = process.env.SITE_URL?.trim();
  if (!siteUrl) {
    console.error('Contact form misconfigured: missing SITE_URL');
    return jsonResponse({ ok: false, error: 'server_error' }, 500);
  }

  if (!isAllowedOrigin(request, siteUrl)) {
    return jsonResponse({ ok: false, error: 'forbidden' }, 403);
  }

  const contentType = request.headers.get('content-type') ?? '';
  if (!contentType.toLowerCase().startsWith('application/json')) {
    return jsonResponse({ ok: false, error: 'unsupported_type' }, 415);
  }

  const rawBody = await readBodyWithLimit(request, MAX_BODY_BYTES);
  if (rawBody === null) {
    return jsonResponse({ ok: false, error: 'too_large' }, 413);
  }

  let payload: unknown;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return jsonResponse({ ok: false, error: 'invalid' }, 400);
  }

  if (typeof payload === 'object' && payload !== null) {
    const honeypot = (payload as { website?: unknown }).website;
    if (typeof honeypot === 'string' && honeypot.trim() !== '') {
      return jsonResponse({ ok: true });
    }
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return jsonResponse({ ok: false, error: 'invalid' }, 400);
  }

  try {
    const isHuman = await verifyTurnstileToken(parsed.data.turnstileToken);
    if (!isHuman) {
      return jsonResponse({ ok: false, error: 'invalid' }, 400);
    }
  } catch (error) {
    console.error(
      'Contact form verification error:',
      error instanceof Error ? error.message : 'unknown error',
    );
    return jsonResponse({ ok: false, error: 'server_error' }, 500);
  }

  try {
    const email = await buildContactEmail(parsed.data, siteUrl);
    await sendTransactionalEmail({
      senderName: SENDER_NAME,
      senderEmail: getRequiredEnv('CONTACT_FROM_EMAIL'),
      toEmail: getRequiredEnv('CONTACT_TO_EMAIL'),
      replyToEmail: parsed.data.email,
      subject: email.subject,
      htmlContent: email.htmlContent,
      textContent: email.textContent,
    });
    return jsonResponse({ ok: true });
  } catch (error) {
    console.error(
      'Contact form delivery error:',
      error instanceof Error ? error.message : 'unknown error',
    );
    return jsonResponse({ ok: false, error: 'server_error' }, 500);
  }
}
