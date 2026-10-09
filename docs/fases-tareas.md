# StarkCore Solutions — Fases y tareas

> **Versión** 0.1 · 2026-10-08 · Deriva de `plan-sitio.md` §5 (fases) y de los checklists de `plan-seguridad.md` §10 y `plan-legal.md` §7.
> **Equipo**: **Mery** y **Daniel** (desarrolladores y socios). **Publicación**: Vercel Hobby en `*.vercel.app`, stack 100% gratis (`plan-sitio.md` decisión #16).
> Si una tarea contradice `design.md`, `reglas.md` o `prohibiciones.md`, ganan ellos: se corrige este archivo.

---

## Cómo se trabaja

1. **Ramas**: cada tarea en su rama desde `mvp` (`feat/T2.3-hero`, `fix/...`). PR hacia `mvp`. `main` = producción: solo recibe `mvp` en la Fase 5 (`reglas.md` §5.3).
2. **Revisión cruzada**: todo PR lo aprueba **la otra persona** (lo de Mery lo revisa Daniel y viceversa). CI en verde es obligatorio para hacer merge.
3. **Hecho** = cumple su columna "Terminado cuando" + PR aprobado + documentación actualizada si cambió una decisión.
4. Marcar `[x]` en este archivo en el mismo PR que cierra la tarea.
5. Reparto: **Mery** lleva diseño, interfaz y contenido; **Daniel** lleva infraestructura, formulario, seguridad y SEO técnico. Las secciones de la landing se reparten para que ambos toquen interfaz.

---

## Fase 0.5 — Cuentas y preparación

| ✓ | ID | Tarea | Responsable | Depende de | Terminado cuando |
|---|---|---|---|---|---|
| [x] | T0.1 | Crear repo en GitHub (este), rama `mvp`, dar acceso a Daniel, proteger `main` (PR + 1 aprobación) | Mery | — | Daniel puede abrir PRs; push directo a `main` bloqueado |
| [ ] | T0.2 | 2FA en GitHub (ambos) y en el Gmail de la empresa (llave de acceso o app, no SMS); delegación o gestor de contraseñas para Gmail | Ambos | — | Las dos cuentas de GitHub y el Gmail con 2FA |
| [ ] | T0.3 | Crear cuenta Vercel **Hobby** con el GitHub de Mery; confirmar que el nombre de proyecto `starkcore-solutions` está libre (define la URL `starkcore-solutions.vercel.app`) | Mery | T0.1 | Nombre confirmado y anotado en `plan-sitio.md` §4 |
| [ ] | T0.4 | Crear cuenta **Brevo** con el Gmail de la empresa, 2FA, verificar el remitente `contacto.starkcore.solutions@gmail.com`, crear API key "formulario-web" | Daniel | T0.2 | API key guardada en el gestor de contraseñas (nunca en el repo) |
| [ ] | T0.5 | Crear cuenta **Cloudflare** (solo para Turnstile), 2FA, crear widget con hostnames `starkcore-solutions.vercel.app` y `localhost` | Daniel | T0.3 | Site key + secret key en el gestor de contraseñas |
| [ ] | T0.6 | WhatsApp Business: PIN de verificación en dos pasos, perfil de empresa (Barranquilla, horario) | Dueño del número | — | PIN activo; perfil completo |
| [ ] | T0.7 | Contactar abogado: enviarle `plan-legal.md` y las preguntas de §2.1, §3.4 (Gmail sin DPA), §9 y la cita del RNBD | Ambos | — | Abogado contratado y con fecha de revisión |

> ⚠️ **Vercel Hobby es de una sola persona** (no admite equipos). El proyecto queda en la cuenta de Mery. Si Vercel bloquea los despliegues de commits hechos por Daniel (pasa con repos privados en Hobby), las salidas gratis son: hacer el repo **público** (los secretos siguen en Vercel, no en el repo) o que Mery haga los merges. Se decide en T1.7.

---

## Fase 1 — Cimientos

| ✓ | ID | Tarea | Responsable | Depende de | Terminado cuando |
|---|---|---|---|---|---|
| [ ] | T1.1 | `create-next-app`: App Router, TypeScript strict, ESLint, Prettier, `.gitignore` con `.env*` | Daniel | T0.1 | `npm run lint`, `prettier --check .` y `tsc --noEmit` limpios |
| [ ] | T1.2 | CI con GitHub Actions (`npm ci`, lint, prettier, tsc, `npm audit --audit-level=high`, acciones fijadas por SHA) + Dependabot + secret scanning/push protection | Daniel | T1.1 | CI corre y bloquea el merge si falla (`plan-seguridad.md` §6) |
| [ ] | T1.3 | Estructura i18n: mensajes en `es` y helper para leerlos; librería justificada en `docs/` (p. ej. `next-intl`) | Daniel | T1.1 | Ningún texto visible queda fuera del archivo de mensajes (`reglas.md` §3.6) |
| [ ] | T1.4 | Tokens de `design.md` §7.1 en `globals.css`, Tailwind (contenedor 1200px, radios, sombras), fuentes DM Sans + Roboto Mono con `next/font` | Mery | T1.1 | Página de prueba con colores, tipos y radios de `design.md` |
| [ ] | T1.5 | shadcn/ui: instalar solo los componentes MVP de `design.md` §7.1 y reescribir variantes (botón primary navy / accent con texto navy / outline / ghost, inputs, cards) | Mery | T1.4 | Ningún componente con estilo por defecto (`prohibiciones.md` §2.6) |
| [ ] | T1.6 | Cabeceras de seguridad y CSP de `plan-seguridad.md` §3–§3.1 en `next.config.ts` | Daniel | T1.1 | Cabeceras visibles en la respuesta de una preview |
| [ ] | T1.7 | Conectar el repo al proyecto de Vercel (previews por PR), activar **Deployment Protection** en previews, `noindex` fuera de producción; probar un deploy de un commit de Daniel | Mery | T0.3, T1.1 | Las previews salen protegidas; decidida la salida de la nota de Hobby |
| [ ] | T1.8 | Verificar contrastes de `design.md` §3.6 con los tokens reales | Mery | T1.4 | Todas las parejas de color de la tabla en AA o mejor |

---

## Fase 2 — Landing (`/`)

| ✓ | ID | Tarea | Responsable | Depende de | Terminado cuando |
|---|---|---|---|---|---|
| [ ] | T2.1 | Generar `logo-navy.svg` y favicon (símbolo solo) a partir de `stitch/code.html`, **solo** con los cambios de `design.md` §2.5-H | Mery | — | Archivos en `public/`; diff de colores = exactamente el de §2.5-H |
| [ ] | T2.2 | Navbar sticky (borde al hacer scroll, CTA "Hablemos", menú móvil en `sheet`) + Footer navy (variante del logo, columnas, contacto) | Mery | T1.5, T2.1 | `design.md` §7.5 y §7.6 cumplidos a 360px y desktop |
| [ ] | T2.3 | Hero asimétrico 7/5 con visual "antes → después" y corte angular | Mery | T1.5 | `design.md` §9.2 fila 1; titular ≤ 12 palabras |
| [ ] | T2.4 | Secciones Problemas (cards `01–04`) y Soluciones (grid + lucide, incluye servicio web) | Daniel | T1.5 | `design.md` §9.2 filas 2–3 |
| [ ] | T2.5 | Casos como **flujos tipo** con etiqueta visible "Ejemplo ilustrativo" (sin cifras ni clientes) + Cómo trabajamos (4 pasos) | Daniel | T1.5 | `plan-sitio.md` decisión #13; `design.md` §9.2 filas 4–5 |
| [ ] | T2.6 | Por qué StarkCore (banda navy) + CTA final (banda `blue-50`, el formulario se conecta en T3.3) | Mery | T1.5 | Nunca dos bandas navy seguidas (`design.md` §3.7) |
| [ ] | T2.7 | Copy final de toda la landing en el archivo de mensajes, sin cifras ni promesas inventadas | Mery (Daniel revisa) | T1.3 | Pasa el pilar de honestidad (`reglas.md` §5.5) |
| [ ] | T2.8 | Motion de `design.md` §8.3 (reveal una vez, hover de cards) + `prefers-reduced-motion` | Daniel | T2.2–T2.6 | Con reduced motion no hay transformaciones |
| [ ] | T2.9 | QA cruzada: checklist `design.md` §9.4 completo a 360 / 768 / 1280 px, teclado y foco visible | Daniel revisa lo de Mery; Mery lo de Daniel | T2.1–T2.8 | Las 10 casillas de §9.4 marcadas |

---

## Fase 3 — Páginas y formulario

| ✓ | ID | Tarea | Responsable | Depende de | Terminado cuando |
|---|---|---|---|---|---|
| [ ] | T3.1 | **Prueba de envío**: Brevo (remitente Gmail verificado) → Gmail de la empresa. Filtro en Gmail: "nunca enviar a spam" + etiqueta "Formulario-web". Si Brevo no entrega bien, aplicar el respaldo (SMTP de Gmail con contraseña de aplicación) y registrar el cambio en `plan-sitio.md` §3 | Daniel | T0.4 | 5 envíos de prueba llegan a la bandeja de entrada, etiquetados |
| [ ] | T3.2 | Route handler del formulario: Zod (límites de `plan-seguridad.md` §4.1), body ≤ 32 KB, `Origin`, honeypot, verificación de Turnstile, saltos de línea eliminados, `Reply-To` validado, bloque de consentimiento (`plan-legal.md` §3.3.3), respuestas genéricas, sin acuse al visitante | Daniel | T3.1 | Cumple los 11 puntos de `plan-seguridad.md` §4 |
| [ ] | T3.3 | UI del formulario: campos, validación en cliente, checkbox no pre-marcado + aviso corto, widget Turnstile, estados cargando / error / éxito (`design.md` §7.4) | Mery | T1.5, T3.2 | Funciona con teclado y lector de pantalla; errores con ícono + texto |
| [ ] | T3.4 | Página `/servicios` | Mery | T2.4 | Contenido honesto, enlazada desde la navbar |
| [ ] | T3.5 | Páginas `/nosotros` y `/contacto` (formulario + WhatsApp `wa.me/573226110864` + Gmail, aviso de que WhatsApp es de Meta) | Daniel | T3.3 | Enlazadas desde la navbar y el footer |
| [ ] | T3.6 | Pruebas de abuso: sin checkbox, sin token de Turnstile, honeypot lleno, body gigante, `Origin` ajeno → todo rechazado; envío legítimo → llega con el bloque de consentimiento | Mery | T3.2–T3.5 | Resultado anotado en el PR |

---

## Fase 4 — Legal

| ✓ | ID | Tarea | Responsable | Depende de | Terminado cuando |
|---|---|---|---|---|---|
| [ ] | T4.1 | Borrador de `/privacidad` con **todo** el contenido de `plan-legal.md` §3.2 (plazos 10/15 días hábiles, área responsable, encargados, fecha de vigencia) | Mery | — | Borrador enviado al abogado |
| [ ] | T4.2 | Borrador de `/aviso-legal` (responsables §2.1, nombre comercial, dirección para notificaciones, teléfono, correo, términos de uso, ©) | Daniel | — | Borrador enviado al abogado |
| [ ] | T4.3 | Revisión del abogado y ajustes; respuestas a las preguntas de T0.7 anotadas en `plan-legal.md` | Ambos | T0.7, T4.1, T4.2 | Textos aprobados por escrito por el abogado |
| [ ] | T4.4 | Firmar el manual interno de protección de datos y el acuerdo de titularidad de derechos entre socios | Ambos | T4.3 | Documentos firmados (fuera del repo) |
| [ ] | T4.5 | Aceptar los DPA de Vercel, Brevo y Cloudflare; guardar constancia | Daniel | T0.3–T0.5 | Fechas de aceptación anotadas en `plan-legal.md` §3.4 |
| [ ] | T4.6 | Footer legal: enlaces a `/privacidad` y `/aviso-legal`, enlace a `www.sic.gov.co`, ©, identificación del proveedor | Mery | T2.2 | `plan-legal.md` §6 completo |
| [ ] | T4.7 | Mensaje de bienvenida de WhatsApp Business con el enlace a `/privacidad` (URL final de Vercel) | Dueño del número | T0.3 | Mensaje activo |
| [ ] | T4.8 | Revisar `plan-legal.md` §7 (go/no-go) | Ambos | T4.1–T4.7 | Todas las casillas marcadas |

---

## Fase 5 — Publicación en Vercel

| ✓ | ID | Tarea | Responsable | Depende de | Terminado cuando |
|---|---|---|---|---|---|
| [ ] | T5.1 | SEO técnico: `metadata` por página, imagen Open Graph, `sitemap.ts`, `robots.ts` (indexable solo en producción), favicon | Daniel | T2.1 | Sitemap y robots responden en una preview |
| [ ] | T5.2 | Variables de entorno en Vercel (tabla de abajo) y Deployment Protection verificada | Mery | T0.3–T0.5 | Variables cargadas; Preview **sin** API key de Brevo |
| [ ] | T5.3 | Merge `mvp` → `main` y despliegue de producción (guía de abajo) | Mery | Fases 1–4 | Sitio en `https://starkcore-solutions.vercel.app` |
| [ ] | T5.4 | Activar Vercel Web Analytics y comprobar que llegan visitas | Mery | T5.3 | Visitas visibles en el panel; sin cookies en el navegador |
| [ ] | T5.5 | Revisar `plan-seguridad.md` §10 sobre la URL de producción (securityheaders.com, envío real, pruebas de T3.6) | Daniel | T5.3 | Checklist §10 completo (salvo ítems "con dominio propio") |
| [ ] | T5.6 | Google Search Console (propiedad por prefijo de URL, verificación con etiqueta HTML) + enviar sitemap | Daniel | T5.3 | Sitemap aceptado |
| [ ] | T5.7 | UptimeRobot (gratis) sobre la home, con alertas al Gmail de la empresa | Daniel | T5.3 | Monitor activo |
| [ ] | T5.8 | Prueba final en móvil real (Android + iPhone si es posible): navegación, formulario, WhatsApp | Mery | T5.3 | Sin errores |

### Variables de entorno

| Variable | Production | Preview | Pública |
|---|---|---|---|
| `BREVO_API_KEY` | clave real | **no se define** | No |
| `TURNSTILE_SECRET_KEY` | clave real | clave de prueba de Cloudflare `1x0000000000000000000000000000000AA` | No |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | clave real | clave de prueba `1x00000000000000000000AA` | Sí |
| `CONTACT_TO_EMAIL` | `contacto.starkcore.solutions@gmail.com` | igual | No |
| `CONTACT_FROM_EMAIL` | remitente verificado en Brevo | igual | No |
| `SITE_URL` | `https://starkcore-solutions.vercel.app` | URL de la preview | No |

### Guía de despliegue (T5.3)

1. En `vercel.com`, con la cuenta de Mery: **Add New → Project** → importar el repo → Framework *Next.js* → nombre `starkcore-solutions` (si ya se hizo en T1.7, saltar).
2. **Settings → Git**: *Production Branch* = `main`.
3. **Settings → Environment Variables**: cargar la tabla de arriba, marcando el entorno correcto en cada una.
4. **Settings → Deployment Protection**: *Vercel Authentication* activo (protege las previews; la URL de producción queda pública).
5. En Cloudflare Turnstile: confirmar que el hostname `starkcore-solutions.vercel.app` está en el widget.
6. Abrir PR `mvp` → `main`, CI en verde, aprobación de Daniel, merge. Vercel despliega producción solo.
7. **Analytics → Enable** (Web Analytics).
8. Verificar en la URL de producción: T5.4 a T5.8.
9. Si algo falla: en Vercel, **Deployments → (último bueno) → Promote to Production** para volver atrás en segundos.

---

## Fase 6 — Después del lanzamiento

| ✓ | ID | Tarea | Responsable | Frecuencia |
|---|---|---|---|---|
| [ ] | T6.1 | Revisar la etiqueta "Formulario-web" y borrar lo que pase de 24 meses (`plan-legal.md` §3.4) | Mery | Trimestral |
| [ ] | T6.2 | Atender PRs de Dependabot y alertas de seguridad | Daniel | Semanal |
| [ ] | T6.3 | Reemplazar flujos tipo por casos reales cuando haya autorización escrita del cliente | Mery | Cuando exista |
| [ ] | T6.4 | Iniciar registro de marca ante la SIC | Ambos | Cuando haya presupuesto |
| [ ] | T6.5 | Dominio propio (pasos en `plan-sitio.md` §4) | Daniel | Cuando se decida |
| [ ] | T6.6 | Al constituir la SAS: pasos de `plan-legal.md` §2.1 y revisar migración de hosting (`plan-sitio.md` decisión #2) | Ambos | Cuando ocurra |

---

*Documento vivo: se actualiza en cada PR que cierre una tarea.*
