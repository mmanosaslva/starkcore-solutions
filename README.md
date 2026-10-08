# StarkCore Solutions — Sitio Web

> Sitio web corporativo B2B de **StarkCore Solutions** (Barranquilla, Colombia): empresa de software que simplifica, conecta, automatiza y optimiza la operación de PYMES.
>
> **Estado actual**: fase de descubrimiento y planificación. **No hay código de producción todavía.** Fase 0 **aprobada** (2026-10-08); la implementación arranca con la Fase 1 (`docs/plan-sitio.md`).

---

## Qué es este repositorio

El plan de trabajo y la documentación del sitio web. El sitio será una **landing corporativa de marketing** (modelo [iridian.io](https://iridian.io/es/), [stackpointer.co](https://stackpointer.co/es), [red5g.co](https://red5g.co/), [instaleap.io](https://instaleap.io/es/), [iftech.com.co](https://iftech.com.co/)): páginas públicas + formulario de contacto. **Sin login, sin registro, sin base de datos de usuarios, sin autenticación propia.**

> **Contexto**: emprendimiento tecnológico (2 socios). Este sitio se construye como **portafolio/presencia web** en fase temprana, con stack **100% gratis**. Cuando la empresa formalice su crecimiento, se evalúa migración de hosting (p. ej. Hostinger).

---

## Documentos

Toda la documentación vive en [`docs/`](docs/):

| Archivo | Qué es |
|---|---|
| [`docs/design.md`](docs/design.md) | **Design system oficial** (identidad visual extraída del logo): paleta, tipografía, componentes, motion, estructura de la landing |
| [`docs/reglas.md`](docs/reglas.md) | Reglas del proyecto (diseño, código, seguridad, proceso). Obligatorias para todo el desarrollo |
| [`docs/prohibiciones.md`](docs/prohibiciones.md) | Lista dura de lo que **no** se puede hacer. Mismo peso que `reglas.md` |
| [`docs/plan-sitio.md`](docs/plan-sitio.md) | **Plan del sitio**: alcance, páginas, stack, fases de implementación |
| [`docs/plan-seguridad.md`](docs/plan-seguridad.md) | **Seguridad técnica**: cabeceras, formulario, secretos, dependencias, monitoreo |
| [`docs/fases-tareas.md`](docs/fases-tareas.md) | **Fases y tareas** asignadas a Mery y Daniel, con criterios de terminado y guía de despliegue en Vercel |
| [`docs/plan-legal.md`](docs/plan-legal.md) | **Seguridad legal**: Ley 1581 (datos personales), Ley 1480 (consumidor), propiedad intelectual, avisos obligatorios |
| [`stitch/`](stitch/) | Referencia visual: logo del sitio (`logo-sitioweb.png`, `code.html`) y tokens de diseño exportados (`DESIGN.md`) |
| *(historial de git)* `starkcore-logo.png` | Logo **histórico** original de la marca, retirado del repo (reemplazado por el nuevo; ver `design.md` §2.5-G) |

> **Regla raíz**: el orden de verdad es `docs/design.md` → `docs/reglas.md` → `docs/prohibiciones.md` → planes → código. Cualquier conflicto se resuelve hacia arriba, y los cambios se aprueban antes de implementarse.

---

## Decisiones resueltas (2026-10-08)

1. **Logo**: ✅ **Nuevo logo adoptado** (3 barras diagonales + punto cian, `stitch/logo-sitioweb.png` / `stitch/code.html`). `design.md` actualizado a **v1.1** con decisión §2.5-G.
2. **Simplificar `reglas.md`**: ✅ Secciones de BD y autenticación marcadas como **no aplicables al MVP** (sitio sin usuarios).
3. **Hosting**: ✅ **Vercel (plan Hobby, gratis)** — incluye CDN, HTTPS y protección DDoS. Riesgo "no comercial" aceptado para fase portafolio; plan de salida a Hostinger al formalizar la empresa. **Cloudflare descartado** (las webs guía no lo usan; ver `docs/plan-sitio.md` decisión #3).
4. **Email transaccional**: ✅ **Brevo** (free, 300 emails/día).
5. **Analítica**: ✅ **Vercel Web Analytics** (sin cookies → no requiere banner ni `/cookies`).
6. **Situación legal**: emprendimiento **no constituido**; responsables del tratamiento = los dos socios como personas naturales (`docs/plan-legal.md` §2.1).
7. **Antispam**: ✅ Cloudflare Turnstile (obligatorio). **Retención**: 24 meses. **MSA**: se hace aparte del sitio.

La lista completa está en `docs/plan-sitio.md` §6.

8. **Buzón y canales**: ✅ Gmail de la empresa; WhatsApp Business.
9. **Publicación**: ✅ en `*.vercel.app`, sin dominio propio (stack 100% gratis). Equipo: Mery y Daniel — tareas en [`docs/fases-tareas.md`](docs/fases-tareas.md).

**Pendiente**: "Agendar diagnóstico" (decisión #7).

---

## Cómo se trabaja

1. ~~Se aprueba el plan (Fase 0 de `plan-sitio.md`)~~ ✅ **Fase 0 aprobada (2026-10-08)**.
2. Se crea la app Next.js + Tailwind + shadcn/ui personalizada con los tokens de `docs/design.md`.
3. Se implementa por fases (cimientos → landing → páginas → legal → publicación).
4. Cada fase termina con lint + typecheck limpios, documentación actualizada y checklist cumplido (`docs/reglas.md` §5).

---

## Contacto

- Barranquilla, Colombia
- Correo: contacto.starkcore.solutions@gmail.com
- WhatsApp Business: +57 322 611 0864
