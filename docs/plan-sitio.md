# StarkCore Solutions — Plan del Sitio Web

> **Versión** 0.2 · **Estado**: aprobado por el dueño del proyecto (2026-10-08). Stack y decisiones cerrados.
> Fuente de verdad de diseño: `design.md`. Reglas de proceso: `reglas.md` y `prohibiciones.md`.
>
> **Contexto**: StarkCore es un emprendimiento tecnológico (2 socios). Este sitio se construye como **portafolio/presencia web** en fase temprana. Stack 100% gratis. Cuando la empresa formalice su crecimiento, se evalúa migración de hosting (p. ej. Hostinger) — por ahora Vercel cumple.

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
| `/aviso-legal` | Información del responsable, términos de uso, propiedad intelectual | `plan-legal.md` |
| `/privacidad` | Política de privacidad y tratamiento de datos (Ley 1581) | `plan-legal.md` |
| `/cookies` | Política de cookies (si se usan cookies no esenciales) | `plan-legal.md` |

> Todas las páginas legales son **obligatorias antes de publicar** (ver `plan-legal.md`). El footer enlaza siempre a ellas.

### 2.2 Estructura de la landing (`/`)

Se implementa el orden de `design.md` §9.2, alineado con el patrón de las referencias:

1. **Navbar** sticky con logo + enlaces ancla + CTA "Hablemos"
2. **Hero** asimétrico 7/5: idea central + CTA + visual
3. **Problemas** ("¿Te suena familiar?") — 3–4 tarjetas numeradas
4. **Soluciones** — grid de servicios con iconografía lineal (lucide-react)
5. **Casos / flujos** — Problema → Solución → Resultado (solo reales)
6. **Cómo trabajamos** — 4 pasos numerados
7. **Por qué StarkCore** — banda navy
8. **CTA final + contacto** — formulario corto o WhatsApp directo
9. **Footer** navy — contacto, navegación, enlaces legales, ©

### 2.3 Formulario de contacto (única pieza "interactiva")

- Campos: **nombre, empresa (opcional), email, mensaje/necesidad** (mínimo viable) + checkbox de aceptación de la política de privacidad (obligatorio, ver `plan-legal.md` §3).
- **No se crea cuenta de usuario ni se guarda en base de datos de usuarios.** El envío entrega el mensaje al correo del equipo (vía **Brevo** SMTP/API) y opcionalmente se archiva con fines de gestión comercial.
- Protección antispam: honeypot + rate limiting por IP +, si hace falta, Turnstile/reCAPTCHA invisible (ver `plan-seguridad.md` §4).
- CTA alternativo siempre visible: **WhatsApp** e **email** (los referentes colombianos los usan como vía principal; coherente con el público PYME).

### 2.4 Fuera de alcance (MVP)

- ❌ Login / registro / panel de usuario / autenticación de ningún tipo.
- ❌ Blog (fase posterior opcional, como stackpointer).
- ❌ Multi-idioma (español únicamente por ahora; i18n solo como estructura si se decide, no como feature).
- ❌ eCommerce, pagos, citas con calendario (el "Agendar" puede ser un link a WhatsApp o Calendly externo — decisión a aprobar).
- ❌ Base de datos de clientes/usuarios (el sitio no la necesita).

---

## 3. Stack (cerrado)

`reglas.md` §2 y §4 fueron escritos pensando en una app con usuarios. **Para este sitio de marketing la base de datos y la autenticación sobran.** Stack aprobado:

| Capa | Elección | Costo | Razón |
|---|---|---|---|
| Framework | **Next.js (App Router) + TypeScript strict** | $0 | Ya aprobado en `reglas.md` §3. SSG/ISR para páginas públicas = rápido y con buen SEO |
| UI | **Tailwind + shadcn/ui** personalizados con tokens de `design.md` §7.1 | $0 | Ya aprobado |
| Íconos | **lucide-react** (una sola familia) | $0 | `reglas.md` §1.4 |
| Formulario | Route handler de Next.js + **Brevo** (SMTP/API, free: 300 emails/día) | $0 | Sin BD; el mensaje llega al correo del equipo |
| Base de datos | **Ninguna en el MVP** | $0 | No hay usuarios ni contenido dinámico. Si más adelante se necesita (blog, CRM), se diseña en `diseño_bd.md` 3FN antes de tocar nada |
| Hosting | **Vercel (plan Hobby, gratis)** | $0 | Deploy por git, previews, HTTPS automático, CDN y protección DDoS incluidos. *Nota: el plan gratis es "no comercial" — aceptado como riesgo en fase de portafolio; al formalizar la empresa se migra (Hostinger, Pro u otra opción)* |
| DNS | El del registrador del dominio, apuntando a Vercel | $0 | Sin CDN/WAF de terceros — igual que las webs de referencia (que no usan Cloudflare). Si en el futuro se necesita WAF/escudo, se evalúa Cloudflare (free) |
| Analítica | **Vercel Web Analytics** (incluida en Hobby, 50k eventos/mes) | $0 | Sin cookies → no requiere banner de consentimiento (`plan-legal.md` §3.5). Alternativa gratis sin cookies: Cloudflare Web Analytics |

**Reglas actualizadas:** `reglas.md` §2 (BD) queda marcada como **no aplicable al MVP**; `reglas.md` §4 (auth) idem. Se actualizaron en este mismo ciclo.

---

## 4. Dominio y despliegue

- **Dominio sugerido:** `starkcoresolutions.com` / `.co` / `starkcore.com.co` (decisión del dueño; verificar disponibilidad y registrar marca, ver `plan-legal.md` §5). Costo real único: ~$10–15/año.
- **Correo corporativo:** dominio propio (p. ej. `hola@starkcoresolutions.com`) — obligatorio para credibilidad B2B.
- **DNS:** en el panel del registrador del dominio, apuntando a Vercel. Sin Cloudflare (ver decisión #3).
- **Despliegue:** Vercel conectado al repo de GitHub; producción desde `main`, previews por PR; sin staging indexable por buscadores (`robots` noindex en previews).
- **HTTPS obligatorio** con redirección 301 desde HTTP (`plan-seguridad.md` §3).

---

## 5. Fases de implementación

| Fase | Contenido | Criterio de salida | Estado |
|---|---|---|---|
| **0. Aprobación** | Este plan + cambios a `reglas.md`/`design.md` (logo nuevo) aprobados | Dueño aprueba por escrito | ✅ Hecho (2026-10-08) |
| **1. Cimientos** | Proyecto Next.js, tokens de `design.md` en `globals.css`, fuentes, componentes base shadcn adaptados | `npm run lint && tsc --noEmit` limpio; contraste §3.6 verificado | ⏳ pendiente |
| **2. Landing** | Secciones 1–9 de §2.2, responsive 360px, motion §8.3 | Checklist de `design.md` §9.4 cumplido | ⏳ pendiente |
| **3. Páginas + formulario** | `/servicios`, `/nosotros`, `/contacto` con formulario funcional y protegido | Envío real de prueba recibido en el correo | ⏳ pendiente |
| **4. Legal** | `/aviso-legal`, `/privacidad` + footer + checkbox en formulario (`/cookies` solo si se incorporan cookies no esenciales en el futuro) | `plan-legal.md` §7 (checklist) cumplido | ⏳ pendiente |
| **5. Dominio y publicación** | DNS apuntando a Vercel, HTTPS, Vercel Web Analytics activa (sin banner), sitemap/SEO básico, Google Search Console | Sitio live y accesible | ⏳ pendiente |
| **6. Post-lanzamiento** | Monitoreo, correcciones, casos de éxito reales cuando existan | — | — |

> Las fases se desarrollan en una rama dedicada (`mvp`), según `reglas.md` §5.3.

---

## 6. Decisiones cerradas

| # | Decisión | Resolución | Fecha |
|---|---|---|---|
| 1 | **Logo nuevo vs. `design.md`** | **Logo nuevo adoptado** (3 barras + punto). `design.md` actualizado a v1.1 (§2, §2.5-G) | 2026-10-08 |
| 2 | Hosting | **Vercel Hobby** (gratis, DX conocida). Riesgo "no comercial" aceptado para fase portafolio; plan de salida: Hostinger / Pro al formalizar la empresa | 2026-10-08 |
| 3 | DNS + escudo | **Descartado Cloudflare** — las webs guía no lo usan y Vercel ya incluye CDN/HTTPS/DDoS. DNS directo en el registrador → Vercel. Reevaluar si se necesita WAF en el futuro | 2026-10-08 |
| 4 | Email transaccional | **Brevo** (free, 300 emails/día, SMTP + API) | 2026-10-08 |
| 5 | Analítica | **Vercel Web Analytics** (incluida, sin cookies → sin banner de consentimiento) | 2026-10-08 |
| 6 | `reglas.md` simplificado | §2 (BD) y §4 (auth) marcados como **no aplicables al MVP** | 2026-10-08 |
| 7 | "Agendar diagnóstico" | **Pendiente menor**: link a WhatsApp / Calendly / solo formulario (definir al escribir el copy del CTA) | — |

---

*Documento vivo: los cambios se aprueban aquí primero y se implementan después. Regla raíz: sin aprobación de la Fase 0 no se escribe código.*
