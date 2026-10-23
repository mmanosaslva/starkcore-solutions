// Abuse tests for POST /api/contact (T3.6, re-run on production in T5.5).
//
// Usage:
//   node scripts/contact-abuse-test.mjs <site-url>          -> every case must be rejected
//   node scripts/contact-abuse-test.mjs <site-url> --send   -> one legitimate submission (sends a real email)
//
// <site-url> must match the server's SITE_URL (it is sent as the Origin header).
// The "invalid token" case only fails as expected when the server uses a real Turnstile secret
// or the always-fail test secret (2x0000000000000000000000000000000AA).
// The legitimate case uses a dummy token, so it only passes with the always-pass test secret
// (1x0000000000000000000000000000000AA); on production, send the real form from a browser.

const [siteUrl, flag] = process.argv.slice(2);
if (!siteUrl) {
  console.error('Usage: node scripts/contact-abuse-test.mjs <site-url> [--send]');
  process.exit(2);
}

const endpoint = new URL('/api/contact', siteUrl).toString();
const origin = new URL(siteUrl).origin;

const valid = {
  name: 'Prueba T3.6',
  company: 'StarkCore QA',
  email: 'qa@example.com',
  message: 'Envío de prueba de las pruebas de abuso (T3.6).',
  consent: true,
  website: '',
  turnstileToken: 'XXXX.DUMMY.TOKEN.XXXX',
};

function json(body) {
  return { headers: { 'content-type': 'application/json', origin }, body: JSON.stringify(body) };
}

const cases = [
  {
    name: 'Sin checkbox (consent: false)',
    expect: 400,
    request: json({ ...valid, consent: false }),
  },
  { name: 'Sin campo consent', expect: 400, request: json({ ...valid, consent: undefined }) },
  { name: 'Sin token de Turnstile', expect: 400, request: json({ ...valid, turnstileToken: '' }) },
  { name: 'Token de Turnstile falso', expect: 400, request: json(valid) },
  {
    name: 'Honeypot lleno (200 falso, sin envío)',
    expect: 200,
    request: json({ ...valid, website: 'https://spam.example' }),
  },
  {
    name: 'Body gigante (> 32 KB)',
    expect: 413,
    request: json({ ...valid, message: 'a'.repeat(40 * 1024) }),
  },
  {
    name: 'Origin ajeno',
    expect: 403,
    request: {
      ...json(valid),
      headers: { 'content-type': 'application/json', origin: 'https://evil.example' },
    },
  },
  {
    name: 'Sin Origin',
    expect: 403,
    request: { ...json(valid), headers: { 'content-type': 'application/json' } },
  },
  {
    name: 'Content-Type no JSON',
    expect: 415,
    request: { ...json(valid), headers: { 'content-type': 'text/plain', origin } },
  },
  { name: 'JSON malformado', expect: 400, request: { ...json(valid), body: '{"name":' } },
  { name: 'Email inválido', expect: 400, request: json({ ...valid, email: 'no-es-un-correo' }) },
  { name: 'Nombre vacío', expect: 400, request: json({ ...valid, name: '   ' }) },
  {
    name: 'Mensaje > 5000 caracteres',
    expect: 400,
    request: json({ ...valid, message: 'a'.repeat(5001) }),
  },
];

const legitimate = {
  name: 'Envío legítimo',
  expect: 200,
  request: json({ ...valid, name: 'Prueba T3.6 legítima' }),
};

const run = flag === '--send' ? [legitimate] : cases;
let failures = 0;

for (const { name, expect, request } of run) {
  let status;
  let body;
  try {
    const response = await fetch(endpoint, { method: 'POST', ...request });
    status = response.status;
    body = await response.text();
  } catch (error) {
    status = 'ERROR';
    body = error instanceof Error ? error.message : String(error);
  }
  const ok = status === expect;
  if (!ok) failures += 1;
  console.log(
    `${ok ? 'OK  ' : 'FAIL'} ${String(status).padEnd(5)} (esperado ${expect})  ${name}  ${body}`,
  );
}

console.log(`\n${run.length - failures}/${run.length} casos correctos`);
process.exit(failures ? 1 : 0);
