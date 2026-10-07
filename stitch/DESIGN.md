---
name: Corporate Precision
colors:
  surface: '#F3F6FB'
  surface-dim: '#d9dadc'
  surface-bright: '#f8f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#edeef0'
  surface-container-high: '#e7e8ea'
  surface-container-highest: '#e1e2e4'
  on-surface: '#0A1330'
  on-surface-variant: '#45464e'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f3'
  outline: '#75767f'
  outline-variant: '#c5c6cf'
  surface-tint: '#4f5d88'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#081940'
  on-primary-container: '#7483b0'
  inverse-primary: '#b7c5f6'
  secondary: '#005cab'
  on-secondary: '#ffffff'
  secondary-container: '#0075d7'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#001550'
  on-tertiary-container: '#527aff'
  error: '#C0392B'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b7c5f6'
  on-primary-fixed: '#081940'
  on-primary-fixed-variant: '#37456e'
  secondary-fixed: '#d5e3ff'
  secondary-fixed-dim: '#a6c8ff'
  on-secondary-fixed: '#001c3b'
  on-secondary-fixed-variant: '#004786'
  tertiary-fixed: '#dce1ff'
  tertiary-fixed-dim: '#b6c4ff'
  on-tertiary-fixed: '#001550'
  on-tertiary-fixed-variant: '#003ab3'
  background: '#f8f9fb'
  on-background: '#191c1e'
  surface-variant: '#e1e2e4'
  muted: '#54607C'
  border: '#DDE4F0'
  border-input: '#C9D4E8'
  accent-spark: '#0BDBFF'
  link: '#006ECE'
  link-hover: '#0052A2'
  badge-bg: '#E0F1FE'
  badge-fg: '#0052A2'
  footer-link: '#BDE0FD'
  footer-subtext: '#A8B4CC'
  success: '#0E7A55'
  warning: '#8A6100'
typography:
  headline-display:
    fontFamily: DM Sans
    fontSize: 60px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.02em
  headline-display-mobile:
    fontFamily: DM Sans
    fontSize: 38px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: DM Sans
    fontSize: 44px
    fontWeight: '700'
    lineHeight: 50px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: DM Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: DM Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: DM Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 30px
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-sm:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  label-lg:
    fontFamily: DM Sans
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 15px
  label-md:
    fontFamily: Roboto Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 15px
    letterSpacing: 0.14em
  label-sm:
    fontFamily: Roboto Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

The design system establishes a direct, stable, and highly credible digital posture designed specifically for Colombian SMB (PYME) executives and decision-makers evaluating technological transformation. The aesthetic departs sharply from generic AI startup tropes, hyper-stylized neon palettes, or ornate creative agencies, committing instead to an authentic corporate-modern language centered on precision, structural clarity, and calm operational competence.

Key principles guiding this aesthetic:
- **Tonal Reliability:** A cool-spectrum hierarchy that anchors mission-critical actions in deep navy, conveying solvency and operational longevity.
- **Content-Driven Utility:** Interfaces prioritize generous negative space, systematic grid alignments, and immediate comprehension over decorative animations or gratuitous glass effects.
- **Left-Aligned Rhythm:** Text, narrative structures, and data read strictly from the left margin, reserving center-aligned treatments exclusively for culminating page conversions or standalone milestone cards.
- **Industrial Precision:** Monospaced labeling details, crisp single-pixel delimiters, and deliberate micro-scale corner bevel accents evoke disciplined software engineering tailored to traditional enterprises.

## Colors

The system relies strictly on a calibrated cool-spectrum palette (189°–223° hue range) to convey technological rigour without visual fatigue. The distribution follows a strict balance: approximately 60% light neutrals, 30% deep core navy and bridge blues, and 10% purposeful accents.

### Role Assignments & Contrast Requirements
- **Primary (`#001038` - Core Navy):** The structural anchor. Used for primary interactive actions, high-level headers, default typography, and immersive hero/footer full-width bands. Offers an exceptional 18.56:1 contrast ratio against pure white.
- **Secondary (`#0088F8` - Stark Blue):** High-visibility brand accent for badges, data highlights, and secondary interactive calls to action. Due to its 3.57:1 contrast ratio over white, it must **never** be used for body or subtext copy on light surfaces; interactive accent buttons pairing this background must employ Core Navy text for accessible 5.20:1 contrast.
- **Tertiary (`#0050F0` - Bridge Blue):** Intermediate tonal anchor governing focus states, active segment tabs, and hover elevations.
- **Neutral (`#FBFCFE`):** Cool, navy-tinted canvas background. Pure, neutral gray `#F5F5F5` is strictly avoided to preserve chromatic cohesion.
- **Surface (`#F3F6FB`):** Systematic alternating section canvas and inset content well background.
- **Accent Spark (`#0BDBFF`):** Reserved exclusively as a radiant highlight on Core Navy dark bands (`#001038`, 11.13:1 contrast ratio) for technical indicators, active underlines, and hover targets. Forbidden on light backgrounds.
- **Semantic Colors:** `success` (`#0E7A55`), `warning` (`#8A6100`), and `error` (`#C0392B`) are restricted to form validation, status alerts, and inline system notifications. They are never decorative.

## Typography

The typography couples the humanist geometric precision of **DM Sans** for all narrative reading contexts with the technical cadence of **Roboto Mono** for systematic indicators.

### Structural Typographic Rules
- **Sentence Case Primacy:** All headlines, section titles, and button labels adhere to standard sentence case capitalization. All-caps treatments are strictly limited to `label-md` and `label-sm` monospace badges, metadata eyebrows, and numerical step trackers.
- **Line Length Budget:** Running body text is constrained to a maximum measure of 65 characters per line to guarantee effortless scanning for executive readers.
- **Emphasis Constraint:** A maximum of two font weights may appear in any single viewport section. Within headlines, no more than one focal keyword or phrase may be tinted in Stark Blue (`#0088F8`).
- **Scale Substitution:** Font sizes exceeding 32px automatically step down on mobile screens through mobile-specific headline tokens, preserving hierarchy without awkward line wraps.

## Elevation & Depth

The design system embraces a predominantly planar, structured depth model. Layering and hierarchy are achieved through tonal juxtaposition, crisp single-pixel borders, and calibrated white space.

### Depth Mechanics
- **Default Surfaces:** Base cards and panels rest flat against their canvas without resting drop shadows. The distinction between canvas (`#FBFCFE` or `#F3F6FB`) and surface cards (`#FFFFFF`) is marked solely by the 1px `#DDE4F0` perimeter border.
- **Tonal Navy Shadows (Interactive Only):** Subtle elevation is triggered only during user hover states or modal popovers. Shadows must never use carbon or pure black pigments:
  - *Card Interactive Hover:* `box-shadow: 0 8px 24px -4px rgba(0, 16, 56, 0.08);` with a -2px vertical translation.
  - *Floating Dialog / Popover:* `box-shadow: 0 16px 40px -8px rgba(0, 16, 56, 0.16);`
- **Modal Backdrop:** Overlays use a deep Core Navy wash rather than neutral charcoal: `background-color: rgba(0, 16, 56, 0.55);` paired with a 4px backdrop blur.

## Shapes

Corner radii across the design system are deliberately non-uniform, reflecting specialized physical affordances across distinct component tiers:

- **Small Components (4px / `rounded-sm`):** System status tags, monospace eyebrows, and micro badges.
- **Controls & Inputs (8px / `rounded-md`):** Buttons, select triggers, text fields, and segmented control containers.
- **Containers & Surfaces (12px / `rounded-lg`):** Cards, overview modules, and structured layout panels.
- **Overlays (16px / `rounded-xl`):** Flyout sheets, modal dialogs, and elevated popovers.
- **Full Radius (9999px / `rounded-full`):** Reserved exclusively for interactive chip selectors and compact counter pills.

### Signature Graphic Accent
A signature 45-degree corner chamfer—referencing the diagonal momentum of the brand mark—is permitted up to twice per page (e.g., as an architectural mask on the primary hero graphic wrapper or as a leading typographic chevron `▸` before section eyebrow labels). It is forbidden on generic cards, inputs, and standard buttons.

## Components

### Buttons
All buttons share a strict height of 48px, horizontal internal padding of 24px, 8px border-radius, and DM Sans `label-lg` (15px/600) typography.
- **Primary:** Background Core Navy (`#001038`), text pure white (`#FFFFFF`). Hover transitions to `#0A1E56` within 150ms with a 1px upward lift. Reserved for the singular primary conversion per screen block.
- **Accent:** Background Stark Blue (`#0088F8`), text Core Navy (`#001038`) to ensure 5.20:1 accessible contrast. Never use white text on this background. Hover transitions to `#0077DC`.
- **Outline:** Background transparent or `#FBFCFE`, border 1px solid `#C9D4E8`, text Core Navy (`#001038`). Hover transitions border to `#0088F8` with a subtle `#F3F6FB` background wash.
- **Ghost:** Borderless, text Core Navy (`#001038`), hover background `#F3F6FB`.

### Form Inputs & Selects
- Height: 44px; padding: 0 16px; border: 1px solid `#C9D4E8`; border-radius: 8px; background: `#FFFFFF`; font: DM Sans `body-md` (16px).
- Labels are rendered permanently above the control in DM Sans `label-lg` with Core Navy coloring. Placeholder copy must never substitute a visible label.
- Focus State: Border color switches to `#0088F8` reinforced by a 3px outer glow ring of `rgba(0, 136, 248, 0.15)`.
- Error State: Border switches to `#C0392B` accompanied by an inline error notice and warning icon in `body-sm`.

### Cards & Panels
- Constructed with a pure white background (`#FFFFFF`), 1px continuous border in `#DDE4F0`, 12px border radius, and internal padding of 32px (reduced to 20px on mobile).
- Internal layout order: Roboto Mono metadata eyebrow → DM Sans headline-sm → DM Sans `body-md` in `#54607C` (`muted`) → contextual link or button.
- Nested cards inside cards are prohibited.

### Badges & Eyebrows
- Monospace uppercase treatment using Roboto Mono `label-sm` (11px/500, letter-spacing 0.10em).
- Background `#E0F1FE`, text color `#0052A2`, padding 4px 8px, border-radius 4px. May incorporate a leading `▸` glyph.

### Links
- Standard link styling on light canvas uses `#006ECE` with an underline rendered in `#BDE0FD`. Hover darkens text to `#0052A2` and solidifies the underline.
- On dark Core Navy footer bands, links render in `#BDE0FD` and shift to Spark Cyan (`#0BDBFF`) on hover.

### Alerts & Status Indicators
- Functional notifications utilize solid semantic backgrounds (`#0E7A55` Success, `#8A6100` Warning, `#C0392B` Error) paired with crisp white text, 8px border-radius, and mandatory SVG status icons. Alerts must never rely on color alone to communicate state.

### Navigation & Header
- Sticky desktop height of 64px–72px utilizing a translucent `#FBFCFE` background with a subtle backdrop blur. A bottom border of 1px `#DDE4F0` appears only after initial scroll.
- Mobile navigation expands via a clean sheet drawer rendered with a solid `#FFFFFF` background.