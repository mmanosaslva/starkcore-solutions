# StarkCore Solutions — Prohibiciones

> **Lo que NO se puede hacer, por nada del mundo.** Este documento tiene la misma fuerza que `reglas.md`.
> Si aparece una tentación de hacer algo de esta lista, primero se discute y se cambia este documento con aprobación explícita.
>
> **Versión** 0.2 · Actualizado 2026-10-08: §3 marcado según alcance del MVP, stack de §4.5 actualizado, excepción de variantes de logo en §2.2.

---

## 1. Prohibiciones de proceso

1. ❌ **Salirnos del plan aprobado** — ninguna funcionalidad fuera del plan sin revisión y aprobación.
2. ❌ **Implementar sin aprobación** — el plan se aprueba antes de escribir código de producción.
3. ❌ **Empezar a programar antes de la fase de descubrimiento/documentación.**
4. ❌ **Crear documentación artificial** — solo documentos útiles, que otra persona usará realmente.
5. ❌ **Agregar dependencias "porque sí"** — cada dependencia tiene una razón documentada.

## 2. Prohibiciones de diseño

1. ❌ **Usar otra guía de diseño que no sea `design.md`** — ni plantillas, ni kits de terceros, ni "mejoras" propias.
2. ❌ **Modificar, recolorear ni regenerar el logo.** Única excepción: las variantes aprobadas y documentadas en `design.md` §2.5-H (versión para fondo navy y favicon). Cualquier otra variante requiere aprobación y registro en esa sección.
3. ❌ **Tipografía fuera del sistema**: nada de Inter, Space Grotesk, Poppins, Montserrat ni display decorativas (§4.1 de `design.md`).
4. ❌ **Degradados morados/violeta, neón, grises puros, arcoíris** (§3.8 de `design.md`).
5. ❌ **Dos familias de iconos** — nada de Material Symbols junto a lucide-react.
6. ❌ **Componentes shadcn/ui con estilo por defecto** sin personalizar con los tokens.
7. ❌ **Animaciones que no informen ni guíen** ni nada de la lista de §8.4 (parallax, typewriter, etc.).
8. ❌ **Métricas, cifras o testimonios inventados** en la web (pilar honestidad técnica).
9. ❌ **Copiar literalmente el HTML/CSS de Stitch** — se adapta a la arquitectura, no se pega.

## 3. Prohibiciones de datos y seguridad

> Los puntos marcados *(BD/auth)* no tienen objeto en el MVP (sin base de datos ni autenticación, `plan-sitio.md` decisión #6), pero **siguen vigentes**: se aplican en cuanto el proyecto incorpore BD o usuarios.

1. ❌ **Esquema de BD que rompa 3FN** o que no pase por `diseño_bd.md`. *(BD/auth)*
2. ❌ **Contraseñas sin hash** o con hashes débiles (MD5/SHA1/SHA0). *(BD/auth)*
3. ❌ **Secretos, tokens o claves en el repositorio.**
4. ❌ **Validar formularios solo en el cliente.**
5. ❌ **SQL crudo fuera de la capa de repositorio.** *(BD/auth)*
6. ❌ **Implementar autenticación desde cero** cuando una librería open source probada lo resuelva. *(BD/auth)*
7. ❌ **Credenciales de prueba en producción** ni usuarios admin con contraseñas débiles (incluye las cuentas de Vercel, Brevo, GitHub, buzón y registrador: siempre con 2FA).

## 4. Prohibiciones de arquitectura

1. ❌ **Microservicios** en este proyecto (el patrón aprobado es monolito modular).
2. ❌ **Lógica de negocio dentro de componentes React.**
3. ❌ **Strings de UI hardcodeados** fuera del sistema i18n.
4. ❌ **Acoplar módulos entre sí** de forma circular — dependencias unidireccionales (SRP).
5. ❌ **Cambiar el stack aprobado** (Next.js/React/TS/Tailwind/shadcn + Vercel/Brevo/Turnstile/Vercel Web Analytics, ver `plan-sitio.md` §3; Neon solo si algún día hay BD) sin revisar `reglas.md` y el plan.

---

*Documento vivo: quitar una prohibición requiere aprobación explícita y queda registrado en la tabla de decisiones de `plan-sitio.md` §6.*
