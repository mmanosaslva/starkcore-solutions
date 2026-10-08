# StarkCore Solutions — Plan de Seguridad (Técnica)

> **Versión** 0.2 · **Estado**: aprobado por el dueño del proyecto (2026-10-08).
> Contexto: sitio corporativo B2B **sin login, sin registro, sin base de datos de usuarios** (`plan-sitio.md` §1). Stack cerrado: Vercel + Brevo + Vercel Web Analytics (sin Cloudflare — ver `plan-sitio.md` decisión #3).
> La seguridad legal (datos personales, PI, avisos) vive en `plan-legal.md`. Este documento cubre la seguridad **técnica**.
> Cumple y complementa las reglas 1–7 de `reglas.md` §4.

---

## 1. Modelo de amenaza (qué protegemos y de qué)

Al no haber cuentas ni panel, la superficie de ataque es pequeña, pero no nula:

| Activo | Amenaza principal | Consecuencia |
|---|---|---|
| Formulario de contacto | Spam, abuso para inyectar contenido, flood | Correo del equipo saturado, posible vector de phishing interno |
| Dominio y hosting | Secuestro de DNS, suplantación de dominio | Daño reputacional, phishing contra clientes |
| Repositorio | Fuga de secretos (API keys) | Abuso de servicios de pago/email |
| Visitantes | XSS, clickjacking, descargas inseguras | Daño a terceros y responsabilidad del sitio |
| Proveedores (Brevo, Vercel) | Compromiso de la cuenta | Envío de correo en nombre de StarkCore, caída del sitio |

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
| **CSP** | `Content-Security-Policy` restrictiva: `default-src 'self'`; scripts solo de origen propio + dominio de Vercel Web Analytics; sin `'unsafe-eval'`; `frame-ancestors 'none'` |
| **X-Frame-Options / frame-ancestors** | Anti clickjacking |
| **X-Content-Type-Options: nosniff** | Evita MIME sniffing |
| **Referrer-Policy** | `strict-origin-when-cross-origin` |
| **Permissions-Policy** | Desactivar cámara, micrófono, geolocalización (el sitio no los usa) |
| **Cookies** | `SameSite=Lax`; `Secure` en producción; ver también `plan-legal.md` §6 |

> Estas cabeceras se configuran en `next.config.js` / middleware y se **verifican con securityheaders.com** antes de publicar.

---

## 4. Formulario de contacto

Es el único punto de entrada de datos. Controles (todos en el **servidor**):

1. **Validación de esquema en servidor** (Zod o equivalente): email con formato válido, longitud máxima de campos (nombre ≤ 100, email ≤ 254, mensaje ≤ 5000), campos requeridos. El cliente valida también, pero el servidor no asume nada.
2. **Sanitización**: no se interpreta el mensaje como HTML; se escapa al renderizar en el correo.
3. **Honeypot**: campo oculto (`display:none` + `tabindex=-1` + `autocomplete=off`) que los bots rellenan; si se llena, se descarta en silencio sin enviar.
4. **Rate limiting**: máximo de envíos por IP (p. ej. 3 cada 10 min) usando el rate limit del framework o del edge (middleware). Respuesta genérica, sin detalle interno.
5. **Protección antispam avanzada** (si el honeypot no basta): Turnstile de Cloudflare (invisible, servicio externo que no requiere tener el DNS en Cloudflare) o reCAPTCHA v3 con umbral. Nunca bloquear usuarios reales por error.
6. **Límite de tamaño del body** (p. ej. 32 KB) en el route handler.
7. **Checkbox de privacidad obligatorio** en cliente; en servidor se verifica que venga `true` (consentimiento informado, `plan-legal.md` §3).
8. **No reflejar entrada del usuario** en la respuesta HTTP sin escapar (prevención de XSS reflejado).
9. **Envío por Brevo** (SMTP/API) con API key del lado servidor (nunca en el navegador) y remitente verificado (SPF/DKIM/DMARC del dominio, `plan-legal.md` §8).

**Prohibido en el formulario:** guardar el mensaje en una BD sin política de retención, ejecutar cualquier contenido recibido, o enviar el contenido al cliente como "confirmación" sin escapar.

---

## 5. Secretos y configuración

1. `.env` / `.env.local` **nunca se commitea** (`.gitignore` verificado antes del primer commit).
2. Solo variables **no sensibles** en el cliente (`NEXT_PUBLIC_*` solo si deben ser públicas; asumir que cualquier `NEXT_PUBLIC` se expone).
3. API key del servicio de email **solo en el servidor**.
4. Regla de emergencia: si un secreto se filtra al repo → rotar la clave **inmediatamente** y revisar logs del proveedor (no basta con borrar del historial sin rotar).
5. Acceso al repo y a los proveedores (GitHub, **Vercel**, **Brevo**): **2FA activado** en todas las cuentas; accesos limitados a los dos fundadores.

---

## 6. Dependencias y supply chain

1. Gestor de paquetes con lockfile commiteado (`package-lock.json` / `pnpm-lock.yaml`).
2. Dependencias solo las necesarias; cada una justificada (`prohibiciones.md` §1.5).
3. **Auditoría periódica**: `npm audit` (o equivalente) en CI; Dependabot/Renovate para alertas.
4. Scripts postinstall de terceros: revisar antes de aceptar.
5. No usar CDNs de scripts no confiables en producción (el sitio debe poder cargar con lo mínimo).

---

## 7. Analítica y terceros

**Decidido: Vercel Web Analytics** (incluida en el plan Hobby, 50k eventos/mes, sin cookies).

| Proveedor | Estado | Impacto en seguridad/legal |
|---|---|---|
| **Vercel Web Analytics** | ✅ **Elegido** | Sin cookies, sin banner de consentimiento, sin datos personales. Solo cuenta visitas/páginas |
| Plausible | Descartado (fase) | Excelente pero de pago; se evalúa si crece la necesidad |
| Google Analytics 4 | Descartado | Requiere banner de consentimiento y cede datos a Google |

Regla: **solo se activa Vercel Web Analytics**. Ningún tag manager de terceros en el MVP.

---

## 8. Dominio, email y anti-phishing

1. **SPF, DKIM y DMARC** configurados en el dominio (`p=quarantine` o `p=reject` una vez validado) — evita que suplanten el dominio para phishing. **Brevo guía la configuración** de estos registros en su panel.
2. Registro de marca y de dominios similares no es seguridad técnica stricto sensu, pero reduce el riesgo de typosquatting (`plan-legal.md` §5).
3. Acceso al panel del registrador de dominio (y de Vercel/Brevo) con **2FA**.
4. Alertas del proveedor de email (Brevo) hacia un correo con 2FA.

---

## 9. Monitoreo y respuesta

| Control | MVP |
|---|---|
| Uptime monitoring | UptimeRobot / similar (gratis) sobre la home |
| Logs | Logs de Vercel (Function/Build logs) — revisar ante incidente |
| Errores | Opcional: Sentry free tier si se ve necesario; no es requisito de lanzamiento |
| Backups | No hay BD que respaldar; el repo git **es** el backup (GitHub + copia local) |
| Plan de incidente | Si hay fuga de secreto o defacement: 1) rotar secretos, 2) revertir a último commit bueno, 3) revisar accesos, 4) avisar si afecta datos de titulares (`plan-legal.md` §9) |

---

## 10. Checklist de seguridad pre-lanzamiento

- [ ] HTTPS con HSTS y redirect 301 desde HTTP.
- [ ] Cabeceras de seguridad (CSP, nosniff, frame-ancestors, Permissions-Policy) verificadas con securityheaders.com.
- [ ] Formulario: validación + honeypot + rate limit + límite de tamaño, **todo en servidor**.
- [ ] Checkbox de privacidad obligatorio y verificado en servidor.
- [ ] Sin secretos en el repo; `.gitignore` correcto; 2FA en GitHub, Vercel y Brevo.
- [ ] SPF/DKIM/DMARC configurados (guiados por Brevo).
- [ ] `npm audit` sin vulnerabilidades críticas.
- [ ] **Vercel Web Analytics activa** (sin cookies, sin banner).
- [ ] Páginas legales enlazadas en footer y accesibles.
- [ ] Staging/preview no indexable.

---

*Documento vivo: los cambios se aprueban aquí primero y se implementan después.*
