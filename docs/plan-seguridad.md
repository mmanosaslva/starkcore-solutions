# StarkCore Solutions — Plan de Seguridad (Técnica)

> **Versión** 0.3 · **Estado**: aprobado por el dueño del proyecto (2026-10-08).
> Contexto: sitio corporativo B2B **sin login, sin registro, sin base de datos de usuarios** (`plan-sitio.md` §1). Stack cerrado: Vercel + Brevo + Vercel Web Analytics + Cloudflare Turnstile (sin Cloudflare como DNS/CDN — ver `plan-sitio.md` decisión #3).
> La seguridad legal (datos personales, PI, avisos) vive en `plan-legal.md`. Este documento cubre la seguridad **técnica**.
> Cumple y complementa las reglas 1–7 de `reglas.md` §4.
> **Cambios v0.3** (revisión 2026-10-08): CSP compatible con SSG (§3), antispam con Turnstile obligatorio (§4.4–4.5), inyección de cabeceras y abuso del formulario (§4.2, §4.10), previews protegidas (§5), CI (§6), endurecimiento del dominio (§8), incidentes con datos (§9).

---

## 1. Modelo de amenaza (qué protegemos y de qué)

Al no haber cuentas ni panel, la superficie de ataque es pequeña, pero no nula:

| Activo | Amenaza principal | Consecuencia |
|---|---|---|
| Formulario de contacto | Spam, abuso para inyectar contenido, flood, uso como relay de correo | Correo del equipo saturado, cuota de Brevo agotada (se pierden contactos reales), posible vector de phishing interno, reputación del dominio dañada |
| Dominio y hosting | Secuestro de DNS, expiración del dominio, suplantación | Daño reputacional, phishing contra clientes |
| Repositorio | Fuga de secretos (API keys) | Abuso de servicios de pago/email |
| Visitantes | XSS, clickjacking, descargas inseguras | Daño a terceros y responsabilidad del sitio |
| Proveedores (Brevo, Vercel, buzón) | Compromiso de la cuenta | Envío de correo en nombre de StarkCore, caída del sitio, fuga de mensajes de titulares |

**Regla general:** seguridad proporcional al riesgo. Un sitio de marketing no necesita autenticación, cifrado de datos sensibles ni auditorías de código de app; sí necesita buenas prácticas de superficie pública.

---

## 2. Principios

1. **Mínimo privilegio**: solo lo que el sitio necesita (un formulario, unos enlaces). Nada de paneles, APIs abiertas ni tokens de más.
2. **Nada sensible en el cliente**: todo lo que viaja al navegador se considera público.
3. **Validar siempre en el servidor**: el cliente se ayuda, nunca se confía (`prohibiciones.md` §3.4).
4. **Dependencias mínimas y auditadas** (`prohibiciones.md` §1.5).
5. **Secretos solo en variables de entorno** (`reglas.md` §4.3).

---

## 3. Transporte y cabeceras

Sin capa de CDN/WAF de terceros (decisión `plan-sitio.md` #3: igual que las webs guía). **Vercel** ya entrega HTTPS, CDN global y protección DDoS; las cabeceras se aplican en la app:

| Control | Implementación |
|---|---|
| **HTTPS obligatorio** | Certificado TLS automático de Vercel; redirección 301 permanente desde `http://`; HSTS (`max-age=63072000; includeSubDomains`) una vez verificado el sitio en HTTPS |
| **CSP** | Ver §3.1 |
| **X-Frame-Options: DENY** / `frame-ancestors 'none'` | Anti clickjacking |
| **X-Content-Type-Options: nosniff** | Evita MIME sniffing |
| **Referrer-Policy** | `strict-origin-when-cross-origin` |
| **Permissions-Policy** | Desactivar cámara, micrófono, geolocalización (el sitio no los usa) |
| **Cookies** | El sitio no crea cookies propias en el MVP. Si alguna vez las crea: `SameSite=Lax`, `Secure`, `HttpOnly` cuando aplique; ver también `plan-legal.md` §3.5 |

> Estas cabeceras se configuran en `next.config.ts` (`headers()`) y se **verifican con securityheaders.com** antes de publicar.

### 3.1 CSP (decisión 2026-10-08)

Las páginas son estáticas (SSG, `plan-sitio.md` §3). Una CSP con *nonce* obliga a renderizar cada página en el servidor en cada visita, lo que elimina el SSG. Como el sitio **no muestra contenido escrito por usuarios**, se acepta `'unsafe-inline'` en scripts y estilos y se conserva SSG:

```
default-src 'self';
script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com;
style-src 'self' 'unsafe-inline';
img-src 'self' data:;
font-src 'self';
connect-src 'self';
frame-src https://challenges.cloudflare.com;
frame-ancestors 'none';
base-uri 'self';
form-action 'self';
object-src 'none';
upgrade-insecure-requests
```

- `'unsafe-eval'` **prohibido**.
- Vercel Web Analytics se sirve desde el mismo origen (`/_vercel/insights/*`), cubierto por `'self'`.
- Las fuentes se autoalojan con `next/font`, cubiertas por `'self'`.
- Si algún día se agregan páginas dinámicas con contenido de usuarios, se reevalúa con *nonces*.

---

## 4. Formulario de contacto

Es el único punto de entrada de datos. Controles (todos en el **servidor**):

1. **Validación de esquema en servidor** (Zod o equivalente): email con formato válido, longitud máxima de campos (nombre ≤ 100, empresa ≤ 120, email ≤ 254, mensaje ≤ 5000), campos requeridos. El cliente valida también, pero el servidor no asume nada.
2. **Sanitización e inyección de cabeceras**:
   - El mensaje no se interpreta como HTML; se escapa al construir el correo.
   - **Nunca** se pone texto del usuario en `From`. El remitente es siempre el remitente verificado del dominio.
   - El email del visitante solo va en `Reply-To`, y solo después de validarlo.
   - Se eliminan saltos de línea (`\r`, `\n`) de nombre, empresa y cualquier dato que vaya al asunto.
3. **Honeypot**: campo oculto (`display:none` + `tabindex=-1` + `autocomplete=off`) que los bots rellenan; si se llena, se descarta en silencio sin enviar.
4. **Antispam principal — Cloudflare Turnstile (obligatorio desde el día uno)**. Gratis, invisible o casi invisible, sin cookies de seguimiento y sin necesidad de tener el DNS en Cloudflare. El token se **verifica en el servidor** contra la API de Turnstile antes de enviar nada a Brevo. Si la verificación falla, respuesta genérica.
   > Por qué no "rate limit del framework": Next.js no trae rate limiting y las funciones de Vercel no comparten memoria, así que un contador en memoria no funciona. Turnstile frena los bots sin estado y protege la cuota de Brevo (300 correos/día).
5. **Rate limiting por IP (refuerzo, opcional)**: si Turnstile no basta, se agrega una regla de rate limit en el firewall de Vercel (verificar disponibilidad en el plan Hobby) o Upstash Redis (free tier; dependencia nueva que se justifica en `docs/` antes de agregarla). **reCAPTCHA queda descartado** (cookies de Google → banner, `plan-legal.md` §3.5).
6. **Límite de tamaño del body** (32 KB) en el route handler. El App Router no lo aplica solo: rechazar si `content-length` > 32 KB y cortar la lectura del stream al superar el límite.
7. **Checkbox de privacidad obligatorio** en cliente; en servidor se verifica que venga `true` (consentimiento informado, `plan-legal.md` §3.3).
8. **No reflejar entrada del usuario** en la respuesta HTTP sin escapar (prevención de XSS reflejado). La respuesta es un mensaje genérico de éxito/error.
9. **Envío por Brevo** (API transaccional) con API key del lado servidor (nunca en el navegador) y remitente verificado (SPF/DKIM/DMARC del dominio, §8). El correo al equipo incluye el bloque de prueba de consentimiento (`plan-legal.md` §3.3.3).
10. **Sin acuse automático al visitante** con su texto. Si se decide enviar confirmación, debe ser un texto fijo sin nada escrito por el usuario; si no, un atacante podría usar el formulario para enviar correo a terceros desde nuestro dominio.
11. **Verificación de `Origin`**: el route handler rechaza peticiones cuyo `Origin` no sea la URL de producción (hoy `*.vercel.app`, configurada en una variable de entorno).

**Prohibido en el formulario:** guardar el mensaje en una BD sin política de retención, ejecutar cualquier contenido recibido, o enviar el contenido al cliente como "confirmación" sin escapar.

---

## 5. Secretos y configuración

1. `.env` / `.env.local` **nunca se commitea** (`.gitignore` verificado antes del primer commit).
2. Solo variables **no sensibles** en el cliente (`NEXT_PUBLIC_*` solo si deben ser públicas; asumir que cualquier `NEXT_PUBLIC` se expone). La *site key* de Turnstile es pública; la *secret key* es solo de servidor.
3. API key de Brevo y secret de Turnstile **solo en el servidor**, configuradas **solo en el entorno Production** de Vercel.
4. **Previews protegidas**: activar *Deployment Protection* (Vercel Authentication) para los despliegues de preview, y **no** dar la API key de Brevo al entorno Preview. Así una URL de preview filtrada no recibe datos reales ni envía correo antes de que existan las páginas legales.
5. **Escaneo de secretos**: activar *secret scanning* y *push protection* de GitHub en el repositorio (si el plan del repo lo permite) o `gitleaks` como hook de pre-commit.
6. Regla de emergencia: si un secreto se filtra al repo → rotar la clave **inmediatamente** y revisar logs del proveedor (no basta con borrar del historial sin rotar).
7. Acceso al repo y a los proveedores (GitHub, **Vercel**, **Brevo**, **Cloudflare**, **Gmail de la empresa**, **WhatsApp Business**, registrador): **2FA activado** en todas las cuentas (en Gmail con llave de acceso o app autenticadora, no SMS; en WhatsApp con PIN de verificación en dos pasos); accesos limitados a los dos socios. En Gmail, preferir la **delegación** a compartir la contraseña; si se comparte, va en un gestor de contraseñas. Recuperación de cuenta configurada con datos que controlen ambos socios. Estos controles son también las **medidas de seguridad exigidas a los encargados** del tratamiento (`plan-legal.md` §3.4).

---

## 6. Dependencias y supply chain

1. Gestor de paquetes con lockfile commiteado (`package-lock.json` / `pnpm-lock.yaml`); instalar con `npm ci` en CI.
2. Dependencias solo las necesarias; cada una justificada (`prohibiciones.md` §1.5).
3. **CI con GitHub Actions** (gratis) en cada PR: `npm ci`, `lint`, `prettier --check`, `tsc --noEmit`, `npm audit --audit-level=high`. Las acciones de terceros se fijan por SHA.
4. **Dependabot** activado para alertas y actualizaciones de seguridad.
5. Scripts postinstall de terceros: revisar antes de aceptar.
6. No usar CDNs de scripts no confiables en producción (el sitio debe poder cargar con lo mínimo). Única excepción: Turnstile (`challenges.cloudflare.com`).

---

## 7. Analítica y terceros

**Decidido: Vercel Web Analytics** (incluida en el plan Hobby, 50k eventos/mes, sin cookies).

| Proveedor | Estado | Impacto en seguridad/legal |
|---|---|---|
| **Vercel Web Analytics** | ✅ **Elegido** | Sin cookies, sin banner de consentimiento, sin datos personales identificables. Solo cuenta visitas/páginas |
| **Cloudflare Turnstile** | ✅ **Elegido (antispam)** | Solo en el formulario; estrictamente necesario; encargado declarado en `plan-legal.md` §3.4 |
| Plausible | Descartado (fase) | Excelente pero de pago; se evalúa si crece la necesidad |
| Google Analytics 4 / reCAPTCHA | Descartados | Requieren banner de consentimiento y ceden datos a Google |

Regla: **solo se activan Vercel Web Analytics y Turnstile**. Ningún tag manager de terceros en el MVP.

---

## 8. Dominio, email y anti-phishing

> **MVP en `*.vercel.app` (`plan-sitio.md` decisión #16):** los puntos 1 y 2 aplican **cuando se compre el dominio propio**. Mientras tanto, el certificado, HSTS y DNS los gestiona Vercel, y el correo sale de Brevo hacia el Gmail de la empresa.

1. **SPF, DKIM y DMARC** configurados en el dominio (`p=quarantine` o `p=reject` una vez validado) — evita que suplanten el dominio para phishing. **Brevo guía la configuración** de estos registros en su panel. Buzón (`plan-sitio.md` decisión #8): los MX del dominio apuntan al servicio de reenvío (registrador o ImprovMX) hacia el Gmail de la empresa; las respuestas "como" `hola@` salen por el SMTP de Brevo con una **clave SMTP dedicada** (distinta de la API key del formulario), así quedan firmadas con el DKIM del dominio. Un solo registro SPF que incluya Brevo (y el reenviador si lo exige).
2. **Endurecimiento del dominio** en el registrador:
   - **renovación automática** activada (un dominio vencido puede ser comprado por un tercero);
   - **bloqueo de transferencia** (transfer lock) activado;
   - **DNSSEC** si el registrador lo ofrece;
   - registro **CAA** que solo autorice a las entidades emisoras que indique la documentación de Vercel (hoy, Let's Encrypt). Verificarlo antes de crearlo: un CAA mal puesto bloquea la renovación del certificado.
3. Registro de marca y de dominios similares no es seguridad técnica stricto sensu, pero reduce el riesgo de typosquatting (`plan-legal.md` §5).
4. Acceso al panel del registrador de dominio (y de Vercel/Brevo/buzón) con **2FA**.
5. Alertas del proveedor de email (Brevo) hacia un correo con 2FA.

---

## 9. Monitoreo y respuesta

| Control | MVP |
|---|---|
| Uptime monitoring | UptimeRobot / similar (gratis) sobre la home |
| Logs | Logs de Vercel (Function/Build logs) — revisar ante incidente |
| Errores | Opcional: Sentry free tier si se ve necesario; no es requisito de lanzamiento |
| Backups | No hay BD que respaldar; el repo git **es** el backup (GitHub + copia local) |
| Plan de incidente | Si hay fuga de secreto o defacement: 1) rotar secretos, 2) revertir a último commit bueno, 3) revisar accesos, 4) si pudo afectar datos de titulares, seguir el procedimiento legal de `plan-legal.md` §9 (evaluación en 48 h y reporte a la SIC) |

---

## 10. Checklist de seguridad pre-lanzamiento

- [ ] HTTPS con HSTS y redirect 301 desde HTTP.
- [ ] Cabeceras de seguridad (CSP de §3.1, nosniff, frame-ancestors, Permissions-Policy) verificadas con securityheaders.com.
- [ ] Formulario: validación + honeypot + **Turnstile verificado en servidor** + límite de tamaño + verificación de `Origin`, **todo en servidor**.
- [ ] Sin texto de usuario en `From`; saltos de línea eliminados; sin acuse automático con contenido del usuario.
- [ ] Checkbox de privacidad obligatorio y verificado en servidor.
- [ ] Sin secretos en el repo; `.gitignore` correcto; secret scanning activo; 2FA en GitHub, Vercel, Brevo, Cloudflare, buzón y registrador.
- [ ] Previews con Deployment Protection y sin API key de Brevo.
- [ ] *(Con dominio propio)* SPF/DKIM/DMARC configurados (guiados por Brevo).
- [ ] *(Con dominio propio)* Dominio con renovación automática, transfer lock, CAA (y DNSSEC si existe).
- [ ] *(MVP)* El correo del formulario llega a la bandeja de entrada del Gmail (no a spam) y con la etiqueta "Formulario-web".
- [ ] CI en verde; `npm audit` sin vulnerabilidades altas o críticas.
- [ ] **Vercel Web Analytics activa** (sin cookies, sin banner).
- [ ] Páginas legales enlazadas en footer y accesibles.
- [ ] Staging/preview no indexable.

---

*Documento vivo: los cambios se aprueban aquí primero y se implementan después.*
