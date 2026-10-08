# StarkCore — Referencia visual (Stitch)

> Carpeta de exploración de diseño con [Stitch](https://stitch.withgoogle.com). Guarda el logo del sitio y los tokens de diseño generados.
>
> **Regla raíz:** la fuente de verdad completa es `../docs/design.md`. Si hay conflicto entre Stitch y `design.md`, gana `design.md`.

---

## Contenido

| Archivo | Qué es |
|---|---|
| `logo-sitioweb.png` | ✅ **Logo oficial del sitio** (3 barras diagonales + punto cian + "StarkCore SOLUTIONS"). Generado por el dueño del proyecto |
| `code.html` | El mismo logo en SVG (vectorial, para la web) |
| `DESIGN.md` | Tokens de diseño exportados por Stitch ("Corporate Precision") — paleta, tipografía, spacing. Insumo que alimentó `../docs/design.md` |

> Histórico: antes aquí vivía el diseño de la landing (`code.html` completo + `screen.png`) y el prompt de Login/Registro. Se eliminó al cambiar el enfoque a sitio sin autenticación.

---

## Decisión sobre el logo: resuelta

✅ **Opción A adoptada (2026-10-08)**: el nuevo logo (`logo-sitioweb.png` / `code.html`) **es la fuente visual oficial** del sitio. Registrado en `../docs/design.md` **§2.5-G** (v1.1).

- El logo original (`../starkcore-logo.png`, la "S" con órbita) queda como **referencia histórica**.
- El wordmark bicolor ("Stark" navy + "Core" azul) y la paleta (navy/azul/cian) se conservan.
- `prohibiciones.md` §2.2 prohíbe modificar el logo: se usa tal cual.

---

## Checklist de validación del nuevo logo

- [x] `design.md` §2 actualizado con el análisis del nuevo símbolo (v1.1).
- [x] Decisión registrada en `design.md` §2.5-G.
- [x] Paleta del nuevo logo verificada contra `design.md` §3.2 (navy/azul/cian).
- [x] SVG (`code.html`) y PNG (`logo-sitioweb.png`) consistentes.
- [ ] Legible a 120px de ancho (mínimo de uso en `design.md` §2.5-F) — verificar al implementar.
- [ ] Sobre banda navy (footer): definir versión blanca (`logo-blanco.png` pendiente de generar) — `design.md` §2.5-B.
- [ ] Registro de marca ante la SIC considerado (`plan-legal.md` §5).
