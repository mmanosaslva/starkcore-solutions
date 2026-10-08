# StarkCore Solutions — Reglas del proyecto

> **Archivo obligatorio para todo el desarrollo.** Toda decisión técnica y de diseño debe alinearse con estas reglas.
> Si una regla entra en conflicto con una tarea, primero se cambia este documento (con aprobación) y después se implementa.
>
> **Versión** 0.2 · **Estado**: vigente (Fase 0 aprobada 2026-10-08). §2 y §4.1/4.2/4.4 no aplican al MVP (`plan-sitio.md` decisión #6).

---

## 1. Reglas de diseño

1. **`design.md` es la única fuente de verdad de la identidad visual.** Paleta, tipografía, espaciado, motion y componentes salen de ahí.
2. **El diseño de `stitch/` es la referencia visual del sitio**: se implementa fiel y responsive, adaptado a nuestra arquitectura (no se copia su HTML/CSS literal).
3. **Responsive obligatorio**: mobile-first, sin scroll horizontal a 360px, áreas táctiles ≥ 44px, cumplir §6.3 de `design.md`.
4. **Iconografía: una sola familia** — `lucide-react` (vía shadcn/ui). Prohibido mezclar con Material Symbols u otras.
5. **Todos los componentes se construyen sobre shadcn/ui + Tailwind**, personalizados con los tokens de `design.md` (nunca con estilo por defecto).
6. El logo oficial (v1.1: `stitch/logo-sitioweb.png` / `stitch/code.html`, ver `design.md` §2.5-G) se usa **sin modificar**, preferiblemente sobre fondos claros (§2.5-B de `design.md`). Solo se permiten las variantes aprobadas en `design.md` §2.5-H.
7. **Accesibilidad**: contraste AA mínimo, foco visible, teclado operable, `prefers-reduced-motion` respetado (§8.5).

## 2. Reglas de base de datos

> **Estado: NO APLICABLES al MVP.** El sitio de marketing (`plan-sitio.md`) no usa base de datos. Estas reglas se activan automáticamente si el proyecto incorpora una BD (nuevo producto, blog con CMS, etc.) — y entonces el esquema se diseña y aprueba en `diseño_bd.md` antes de cualquier migración.

1. **3FN (Tercera Forma Normal)**: todo el esquema relacional debe estar en 3FN. Sin atributos redundantes, sin dependencias parciales ni transitivas.
2. **SRP (Single Responsibility Principle)**: cada tabla/modelo tiene una responsabilidad única; cada capa de acceso a datos tiene una razón única para cambiar.
3. **Diseño antes que código**: el esquema se documenta y aprueba en `diseño_bd.md` **antes** de escribir migraciones o SQL.
4. **Motor**: PostgreSQL gestionado en **Neon**. Sin otros motores de BD en el proyecto.
5. Toda consulta pasa por la capa de repositorio (Drizzle) — nunca SQL crudo en componentes ni en route handlers.

## 3. Reglas de código

1. **TypeScript strict** en todo el proyecto. Sin `any` sin justificación.
2. **Validación de formularios en cliente y en servidor** (nunca solo en el cliente).
3. **SRP en código**: servicios, utilidades y componentes con una sola responsabilidad; nada de archivos "god".
4. **Next.js (App Router) + React + Tailwind + shadcn/ui** — cada tecnología con la razón documentada en `docs/`.
5. Separación clara: componentes UI ≠ lógica de negocio ≠ acceso a datos.
6. **Idioma español por defecto**; todo texto visible pasa por el sistema i18n (nunca strings hardcodeados en componentes). En el MVP hay un solo idioma, pero la estructura i18n es obligatoria (`plan-sitio.md` §2.4).
7. Lint + formato + typecheck limpios antes de cada commit (`eslint`, `prettier --check`, `tsc --noEmit`), y verificados en CI en cada PR (`plan-seguridad.md` §6).

## 4. Reglas de seguridad

> El plan técnico completo vive en `plan-seguridad.md`. Estas son las reglas mínimas. Las reglas 1, 2 y 4 (auth/sesiones) **no aplican al MVP** (no hay usuarios); se activan si algún día hay autenticación.

1. **Contraseñas siempre con hash** — Argon2id (o bcrypt como alternativa). **Nunca** texto plano, nunca MD5/SHA1. *(No aplica al MVP: no hay usuarios.)*
2. **Nunca criptografía propia**: usar librerías y frameworks open source probados para autenticación y sesiones. *(No aplica al MVP: no hay auth.)*
3. Secretos y claves **solo en variables de entorno** (`.env` nunca se commitea).
4. Sesiones en cookies HTTP-only; rutas protegidas verificadas **en el servidor** (el middleware no basta). *(No aplica al MVP: no hay sesiones.)*
5. Dependencias nuevas: justificadas, revisadas y documentadas en `docs/`.
6. **Sin login, sin registro, sin base de datos de usuarios** en el sitio de marketing — la superficie de ataque se reduce al formulario de contacto (`plan-seguridad.md` §4).
7. **HTTPS obligatorio** con HSTS; cabeceras de seguridad (CSP, nosniff, frame-ancestors) — ver `plan-seguridad.md` §3.

## 5. Reglas de proceso

1. **Nada se implementa sin aprobación del plan** por parte del dueño del proyecto.
2. **Documentación viva**: cada decisión importante (y la que se descarta) queda registrada en `docs/`.
3. Trabajo en ramas: `main` = producción; las fases se desarrollan en ramas dedicadas (ej. `mvp`).
4. Cada fase termina con: código revisado, documentación actualizada, checklist de aceptación cumplido.
5. **Honestidad técnica en el contenido**: sin métricas, cifras ni testimonios inventados en la web.

---

*Documento vivo: los cambios de reglas se aprueban aquí primero y se aplican después.*
