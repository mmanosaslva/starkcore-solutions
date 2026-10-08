# StarkCore Solutions — Plan del Sitio Web

> **Versión** 0.3 · **Estado**: aprobado por el dueño del proyecto (2026-10-08). Stack y decisiones cerrados (salvo pendientes de §6).
> Fuente de verdad de diseño: `design.md`. Reglas de proceso: `reglas.md` y `prohibiciones.md`.
>
> **Contexto**: StarkCore es un emprendimiento tecnológico de **2 socios, todavía no constituido como sociedad** (sin razón social ni NIT; ver `plan-legal.md` §2.1). Este sitio se construye como **portafolio/presencia web** para ofrecer sus servicios. Stack 100% gratis (salvo dominio). Cuando la empresa se formalice, se evalúa migración de hosting (p. ej. Hostinger) — por ahora Vercel cumple.
> **Cambios v0.3** (revisión 2026-10-08): situación legal, i18n, casos sin clientes aún, Turnstile, buzón corporativo, criterios de salida por fase, nuevas decisiones #8–#15.

---

## 1. Tipo de sitio

**Sitio web corporativo B2B de marketing** (modelo iridian.io, stackpointer.co, red5g.co, instaleap.io, iftech.com.co): un sitio público orientado a generar conversión comercial, **sin aplicación, sin login, sin registro de usuarios y sin autenticación propia**.

Las webs de referencia comparten el mismo patrón:

| Referencia | Patrón observado |
|---|---|
| iridian.io | Landing + páginas de capacidades/casos/nosotros/contacto; formulario de contacto; footer con política de privacidad y términos de uso |
| stackpointer.co | Servicios, portafolio, nosotros, contacto, blog; formulario de contacto simple |
| red5g.co | Página única con anclas; testimonios; footer con términos y condiciones + aviso de privacidad |
| instaleap.io | Landing + casos de estudio + demo/agenda; banner de consentimiento de cookies |
| iftech.com.co | Landing corporativa de servicios + contacto |

**Conclusión:** el producto es una (o pocas) páginas estáticas + un formulario de contacto que entrega el mensaje al equipo. **No hay base de datos de usuarios, no hay sesiones, no hay panel.**

---

## 2. Alcance (MVP)

### 2.1 Páginas

| Ruta | Contenido | Origen del contenido |
|---|---|---|
| `/` | Landing completa (§2.2) | `design.md` §9.2 |
| `/servicios` | Detalle de servicios (extiende la sección de soluciones de la landing) | Copy propio, honesto |
| `/casos` | Casos de éxito / flujo de proyectos reales | **Solo casos reales** (regla 5 de `reglas.md`: sin cifras ni testimonios inventados). Si aún no hay casos publicables, la página se omite en el MVP y se agrega cuando existan |
| `/nosotros` | Quiénes somos, dónde estamos (Barranquilla), cómo trabajamos | Copy propio |
| `/contacto` | Formulario de contacto + WhatsApp + email | §2.3 |
| `/aviso-legal` | Información de los responsables, términos de uso, propiedad intelectual | `plan-legal.md` §2.1 y §3.2 |
| `/privacidad` | Política de privacidad y tratamiento de datos (Ley 1581) | `plan-legal.md` §3 |
| `/cookies` | Política de cookies (solo si se usan cookies no esenciales en el futuro) | `plan-legal.md` §3.5 |

> Las páginas `/aviso-legal` y `/privacidad` son **obligatorias antes de publicar** (ver `plan-legal.md` §7). El footer enlaza siempre a ellas.

### 2.2 Estructura de la landing (`/`)

Se implementa el orden de `design.md` §9.2, alineado con el patrón de las referencias:

1. **Navbar** sticky con logo + enlaces ancla + CTA "Hablemos"
2. **Hero** asimétrico 7/5: idea central + CTA + visual
3. **Problemas** ("¿Te suena familiar?") — 3–4 tarjetas numeradas
4. **Soluciones** — grid de servicios con iconografía lineal (lucide-react). Incluye el servicio de presencia digital/web (`design.md` §9.2 fila 7, integrado aquí en el MVP)
5. **Casos / flujos** — Problema → Solución → Resultado. **Mientras no haya casos reales publicables** (decisión #13): se muestran **flujos tipo** marcados de forma visible como *"Ejemplo ilustrativo"*, sin cifras de resultado, sin nombres de clientes y sin testimonios. Cuando exista un caso real con autorización escrita del cliente, reemplaza a un flujo tipo
6. **Cómo trabajamos** — 4 pasos numerados
7. **Por qué StarkCore** — banda navy
8. **CTA final + contacto** — formulario corto o WhatsApp directo (banda `blue-50`, `design.md` §9.2)
9. **Footer** navy — contacto, navegación, enlaces legales, ©

### 2.3 Formulario de contacto (única pieza "interactiva")

- Campos: **nombre, empresa (opcional), email, mensaje/necesidad** (mínimo viable) + checkbox de aceptación de la política de privacidad (obligatorio, ver `plan-legal.md` §3.3) + aviso de privacidad corto.
- **No se crea cuenta de usuario ni se guarda en base de datos.** El envío entrega el mensaje al buzón corporativo del equipo (vía **Brevo** API transaccional), junto con la prueba de consentimiento. El buzón archiva el mensaje para las finalidades declaradas en `plan-legal.md` §3.6 (responder y gestionar comercialmente la solicitud), durante el plazo de retención de `plan-legal.md` §3.4.
- Protección antispam: honeypot + **Cloudflare Turnstile verificado en servidor (obligatorio)** + rate limit opcional como refuerzo (ver `plan-seguridad.md` §4).
- **Sin acuse automático** al visitante con el contenido de su mensaje (`plan-seguridad.md` §4.10).
- CTA alternativo siempre visible: **WhatsApp** e **email** (los referentes colombianos los usan como vía principal; coherente con el público PYME).

### 2.4 Fuera de alcance (MVP)

- ❌ Login / registro / panel de usuario / autenticación de ningún tipo.
- ❌ Blog (fase posterior opcional, como stackpointer).
- ❌ Multi-idioma. **Pero** la estructura i18n es **obligatoria** desde la Fase 1 (`reglas.md` §3.6, `prohibiciones.md` §4.3): todos los textos viven en un archivo de mensajes en español (`es`), y agregar otro idioma más adelante es solo agregar un archivo.
- ❌ eCommerce, pagos, citas con calendario (el "Agendar" puede ser un link a WhatsApp o Calendly externo — decisión #7).
- ❌ Base de datos de clientes/usuarios (el sitio no la necesita).
- ❌ MSA / contratos con clientes en el sitio (se hacen aparte, `plan-legal.md` §10).

---

## 3. Stack (cerrado)

`reglas.md` §2 y §4 fueron escritos pensando en una app con usuarios. **Para este sitio de marketing la base de datos y la autenticación sobran.** Stack aprobado:

| Capa | Elección | Costo | Razón |
|---|---|---|---|
| Framework | **Next.js (App Router) + TypeScript strict** | $0 | Ya aprobado en `reglas.md` §3. SSG para páginas públicas = rápido y con buen SEO |
| UI | **Tailwind + shadcn/ui** personalizados con tokens de `design.md` §7.1 | $0 | Ya aprobado |
| Íconos | **lucide-react** (una sola familia) | $0 | `reglas.md` §1.4 |
| i18n | Estructura de mensajes en español (librería a justificar en la Fase 1, p. ej. `next-intl`) | $0 | `reglas.md` §3.6 |
| Formulario | Route handler de Next.js + **Brevo** (API transaccional, free: 300 emails/día). Sin dominio propio, el remitente es el Gmail verificado en Brevo (Brevo lo reescribe a un dominio suyo); se valida en la tarea T3.1 de `fases-tareas.md`. Respaldo si falla: SMTP de Gmail con contraseña de aplicación | $0 | Sin BD; el mensaje llega al buzón del equipo |
| Antispam | **Cloudflare Turnstile** (servicio independiente, no requiere DNS en Cloudflare) | $0 | Frena bots sin estado y protege la cuota de Brevo (`plan-seguridad.md` §4.4) |
| Buzón corporativo | **Gmail de la empresa** (`contacto.starkcore.solutions@gmail.com`), publicado tal cual mientras no haya dominio. Con dominio propio: reenvío `hola@dominio` → Gmail + "Enviar como" vía SMTP de Brevo (decisión #8) | $0 | Una sola bandeja que ya existe. Brevo **solo envía**, no recibe correo |
| Base de datos | **Ninguna en el MVP** | $0 | No hay usuarios ni contenido dinámico. Si más adelante se necesita (blog, CRM), se diseña en `diseño_bd.md` 3FN antes de tocar nada |
| Hosting | **Vercel (plan Hobby, gratis)** | $0 | Deploy por git, previews, HTTPS automático, CDN y protección DDoS incluidos. *Nota: el plan gratis es "no comercial" — aceptado como riesgo en fase de portafolio; al formalizar la empresa se migra (Hostinger, Pro u otra opción)* |
| Dominio / DNS | **MVP: subdominio gratuito de Vercel** (`starkcore-solutions.vercel.app` o el nombre disponible; decisión #16). Dominio propio: fase posterior, con DNS en el registrador apuntando a Vercel | $0 | Stack 100% gratis. Sin CDN/WAF de terceros — igual que las webs de referencia. Si en el futuro se necesita WAF/escudo, se evalúa Cloudflare (free) |
| Analítica | **Vercel Web Analytics** (incluida en Hobby, 50k eventos/mes) | $0 | Sin cookies → no requiere banner de consentimiento (`plan-legal.md` §3.5). Alternativa gratis sin cookies: Cloudflare Web Analytics |
| CI | **GitHub Actions** | $0 | Lint, formato, typecheck y `npm audit` en cada PR (`plan-seguridad.md` §6) |

**Reglas actualizadas:** `reglas.md` §2 (BD) y §4 (auth) y `prohibiciones.md` §3 quedan marcadas como **no aplicables al MVP**.

---

## 4. Dominio y despliegue

**MVP (decisión #16): se publica en el subdominio gratuito de Vercel**, sin comprar dominio. Costo total: $0.

- **URL de producción:** `https://starkcore-solutions.vercel.app` (o el nombre de proyecto disponible en Vercel). HTTPS y HSTS los pone Vercel automáticamente (`vercel.app` está en la lista de precarga HSTS de los navegadores).
- **Correo publicado:** `contacto.starkcore.solutions@gmail.com` (decisión #8).
- **WhatsApp Business:** +57 322 611 0864 (`https://wa.me/573226110864`), con mensaje de bienvenida automático que enlaza a `/privacidad`.
- **Despliegue:** Vercel conectado al repo de GitHub; producción desde `main`, previews por PR **con Deployment Protection y sin API key de Brevo** (`plan-seguridad.md` §5.4); previews no indexables.
- **Paso detallado:** ver `fases-tareas.md`, Fase 5.

**Cuando se compre un dominio propio** (fase posterior, ~$10–15/año; `starkcoresolutions.com` / `.co` / `starkcore.com.co`, verificar marca en `plan-legal.md` §5):
1. Agregar el dominio en Vercel y apuntar el DNS del registrador; Vercel redirige `*.vercel.app` → dominio con 301.
2. Autenticar el dominio en Brevo (SPF/DKIM/DMARC, `plan-seguridad.md` §8) y cambiar en Vercel la variable `CONTACT_FROM_EMAIL` a una dirección del dominio (p. ej. `formulario@dominio`). **No hay que tocar código.** Configurar también `hola@dominio` → Gmail y "Enviar como" con el SMTP de Brevo.
3. Endurecer el dominio: renovación automática, transfer lock, DNSSEC, CAA (`plan-seguridad.md` §8).
4. Actualizar correo y URL en `/aviso-legal`, `/privacidad`, sitemap y Search Console.

---

## 5. Fases de implementación

| Fase | Contenido | Criterio de salida | Estado |
|---|---|---|---|
| **0. Aprobación** | Este plan + cambios a `reglas.md`/`design.md` (logo nuevo) aprobados | Dueño aprueba por escrito | ✅ Hecho (2026-10-08) |
| **1. Cimientos** | Proyecto Next.js, tokens de `design.md` en `globals.css`, fuentes, estructura i18n, componentes base shadcn adaptados, `.gitignore`, CI | CI en verde: `lint`, `prettier --check`, `tsc --noEmit`; contraste §3.6 verificado | ⏳ pendiente |
| **2. Landing** | Secciones 1–9 de §2.2, responsive 360px, motion §8.3 | Checklist de `design.md` §9.4 cumplido | ⏳ pendiente |
| **3. Páginas + formulario** | `/servicios`, `/nosotros`, `/contacto` con formulario funcional, protegido **y con checkbox de privacidad** (`plan-seguridad.md` §4 completo). Requiere la tarea T3.1 de `fases-tareas.md` (envío Brevo → Gmail validado) | Envío real de prueba recibido en el buzón con el bloque de consentimiento (`plan-legal.md` §3.3.3); envío sin Turnstile o sin checkbox rechazado por el servidor | ⏳ pendiente |
| **4. Legal** | `/aviso-legal`, `/privacidad` + footer + aviso corto junto al formulario (`/cookies` solo si se incorporan cookies no esenciales en el futuro) | `plan-legal.md` §7 (checklist go/no-go) cumplido, **incluida la revisión del abogado** | ⏳ pendiente |
| **5. Publicación en Vercel** | Proyecto en Vercel (Hobby), variables de entorno de producción, URL `*.vercel.app`, Vercel Web Analytics activa (sin banner), sitemap/SEO básico, Google Search Console | **`plan-seguridad.md` §10 al 100 %** (salvo los ítems marcados "con dominio propio") y **`plan-legal.md` §7 al 100 %**, verificados sobre la URL de producción | ⏳ pendiente |
| **6. Post-lanzamiento** | Monitoreo, correcciones, casos de éxito reales cuando existan, revisión trimestral de retención | — | — |

> Las fases se desarrollan en una rama dedicada (`mvp`), según `reglas.md` §5.3.

---

## 6. Decisiones

| # | Decisión | Resolución | Fecha |
|---|---|---|---|
| 1 | **Logo nuevo vs. `design.md`** | **Logo nuevo adoptado** (3 barras + punto). `design.md` actualizado a v1.1 (§2, §2.5-G) | 2026-10-08 |
| 2 | Hosting | **Vercel Hobby** (gratis, DX conocida). Riesgo "no comercial" aceptado para fase portafolio; plan de salida: Hostinger / Pro al formalizar la empresa | 2026-10-08 |
| 3 | DNS + escudo | **Descartado Cloudflare como DNS/CDN** — las webs guía no lo usan y Vercel ya incluye CDN/HTTPS/DDoS. DNS directo en el registrador → Vercel. Reevaluar si se necesita WAF en el futuro | 2026-10-08 |
| 4 | Email transaccional | **Brevo** (free, 300 emails/día, API). Solo envía; no es buzón | 2026-10-08 |
| 5 | Analítica | **Vercel Web Analytics** (incluida, sin cookies → sin banner de consentimiento) | 2026-10-08 |
| 6 | `reglas.md` simplificado | §2 (BD) y §4 (auth) marcados como **no aplicables al MVP**; idem `prohibiciones.md` §3 | 2026-10-08 |
| 7 | "Agendar diagnóstico" | **Pendiente menor**: link a WhatsApp / Calendly / solo formulario (definir al escribir el copy del CTA). Si es Calendly embebido, revisar cookies (`plan-legal.md` §3.5) | — |
| 8 | **Buzón corporativo y canales** | **Gmail de la empresa** `contacto.starkcore.solutions@gmail.com` como bandeja única; `hola@dominio` se reenvía ahí (reenvío del registrador o ImprovMX) y se responde con "Enviar como" por el SMTP de Brevo. **WhatsApp Business** +57 322 611 0864. Google se declara en `plan-legal.md` §3.4. Descartados: Zoho Mail free (segunda bandeja, sin IMAP en plan gratis) y Google Workspace (de pago) | 2026-10-08 |
| 9 | Situación legal / Responsable del tratamiento | **No constituida**: los responsables son los dos socios como personas naturales (`plan-legal.md` §2.1) | 2026-10-08 |
| 10 | Retención de mensajes del formulario | **24 meses** desde el último contacto comercial (`plan-legal.md` §3.4) | 2026-10-08 |
| 11 | Antispam | **Cloudflare Turnstile obligatorio**; reCAPTCHA descartado (cookies) | 2026-10-08 |
| 12 | CSP | `'unsafe-inline'` sin *nonces* para conservar SSG (`plan-seguridad.md` §3.1) | 2026-10-08 |
| 13 | Casos sin clientes aún | **Flujos tipo marcados "Ejemplo ilustrativo"**, sin cifras ni clientes; `/casos` se omite hasta tener casos reales | 2026-10-08 |
| 14 | Variantes del logo (footer navy, favicon) | Definidas en `design.md` §2.5-H | 2026-10-08 |
| 15 | MSA / contratos con clientes | Se hacen **aparte** del sitio (`plan-legal.md` §10) | 2026-10-08 |
| 16 | Dominio en el MVP | **Sin dominio propio**: se publica en `*.vercel.app` (stack 100% gratis). El dominio propio se compra en una fase posterior (pasos en §4) | 2026-10-08 |
| 17 | Equipo y tareas | 2 desarrolladores: **Mery** y **Daniel**. Asignación en `fases-tareas.md` | 2026-10-08 |

---

*Documento vivo: los cambios se aprueban aquí primero y se implementan después. Regla raíz: sin aprobación de la Fase 0 no se escribe código.*
