# StarkCore — Diseño de Login / Registro (prompt para Stitch)

> **Cómo usar este archivo:** copia el prompt de abajo y pégalo en [Stitch](https://stitch.withgoogle.com) junto con `../starkcore-logo.png`.
> Genera **2 pantallas**: Login y Registro. El resultado se guarda aquí (`login.png`, `registro.png`, `code.html`) como referencia visual, igual que la landing.
>
> **Regla raíz:** el prompt es un resumen ejecutivo. La fuente de verdad completa es `../design.md` — cualquier conflicto se resuelve con `design.md`.

---

## Prompt (copiar y pegar en Stitch)

```
Diseña 2 pantallas (mobile-first, responsive) para StarkCore Solutions en español:
pantalla 1 LOGIN y pantalla 2 REGISTRO. Estética corporativa B2B seria para PYMES
colombianas — profesional, sobria, confiable; nada de look "startup de IA".

IDENTIDAD (adjunto logo; NO modificar):
- Fondo general: #FBFCFE. Tarjeta del formulario: #FFFFFF, borde 1px #DDE4F0, radio 12px.
- Tipografía: DM Sans (títulos, cuerpo, botones) + Roboto Mono (etiquetas/eyebrows
  en MAYÚSCULAS con tracking 0.14em). Nada de Inter.
- Títulos alineados a la izquierda dentro de la tarjeta; sentence case.
- Acentos: azul #0088F8 (focus, links hover); links #006ECE; botón primario navy
  #001038 con texto blanco; errores #C0392B; texto principal #0A1330; secundario #54607C.

PANTALLA 1 — LOGIN:
- Tarjeta centrada (máx. 420px) sobre el fondo, con el logo StarkCore arriba (mín. 120px,
  solo sobre fondo claro) y eyebrow monospace "ACCESO".
- Título "Inicia sesión" + línea secundaria "Accede a tu cuenta de StarkCore".
- Campos con LABEL SIEMPRE VISIBLE arriba (14px, peso 600, navy) — el placeholder nunca
  sustituye al label: Email (type email) y Contraseña (con ícono de ojo para mostrar/ocultar).
- Inputs: altura 44px, borde 1px #C9D4E8, radio 8px, texto 16px; focus = borde #0088F8 +
  ring exterior rgba(0,136,248,0.15) 3px; estado de error = borde #C0392B + mensaje 14px
  #C0392B con ícono debajo del campo (diseña el estado de error en un campo).
- Debajo del campo de contraseña, link "¿Olvidaste tu contraseña?" (14px, #006ECE).
- Botón primario full-width "Iniciar sesión" (navy, 44px, radio 8px, peso 600, 15px).
- Separador con línea + label monospace "O CONTINÚA CON".
- Ícono WhatsApp verde (#25D366) y link de email como accesos de contacto alternativos
  (dos accesos pequeños con icono + texto, no botones gigantes).
- Link final: "¿No tienes cuenta? Regístrate" (término clave en #0088F8).

PANTALLA 2 — REGISTRO:
- Misma tarjeta (máx. 440px), eyebrow monospace "NUEVA CUENTA", título "Crea tu cuenta".
- Campos: Nombre completo, Empresa (opcional), Email, Contraseña (con indicador de
  fortaleza: 4 barras pequeñas), Confirmar contraseña.
- Checkbox de aceptación: "He leído y acepto los Términos y la Política de privacidad"
  (links en #006ECE) — obligatorio para habilitar el botón.
- Botón primario full-width "Crear cuenta"; link "¿Ya tienes cuenta? Inicia sesión".
- Estados: habilitado / deshabilitado (50% opacidad) / error de validación por campo.

REGLAS COMUNES:
- Mobile-first: 1 columna, sin scroll horizontal a 360px; en desktop la tarjeta centrada
  con respiro generoso (la página NO se divide en dos mitades con imagen).
- Sin degradados morados, sin neón, sin glassmorphism, sin sombras oscuras fuertes
  (sombra solo como hover, tintada de navy con opacidad baja).
- Radios: 8px inputs/botones, 12px tarjeta. Nunca pill, nunca 0px.
- Accesibilidad: contraste AA, foco visible siempre, área táctil ≥44px.
- Animación: solo transiciones de color/borde 150ms. Nada más.
```

---

## Checklist de validación del diseño generado

- [ ] Logo intacto, sobre fondo claro, ≥120px, con respiro ≥25%.
- [ ] DM Sans + Roboto Mono, sin Inter.
- [ ] Labels visibles arriba de cada input (no placeholder como label).
- [ ] Estados de error con ícono + texto (nunca solo color).
- [ ] Botón primario navy; azul de énfasis solo con texto navy (5.20:1).
- [ ] Eyebrows en Mono mayúsculas con tracking.
- [ ] Sin degradados morados/neón/grises puros.
- [ ] Responsive a 360px sin scroll horizontal.
- [ ] Accesos de correo y WhatsApp presentes como iconos.
- [ ] Coherencia visual con la landing de `code.html` (mismos tokens).

## Resultados (pendientes)

| Pantalla | Archivo | Estado |
|---|---|---|
| Login | `login.png` | ⏳ pendiente |
| Registro | `registro.png` | ⏳ pendiente |
| Código | `auth-code.html` | ⏳ pendiente |

> Diseños generados → se agregan al plan de implementación → aprobación → código con shadcn/ui.
