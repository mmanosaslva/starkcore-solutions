# StarkCore Solutions — Design System

> **Archivo oficial de filosofía de marca y sistema de diseño.**
> Fuente de verdad para el sitio web, materiales comerciales, presentaciones, redes sociales y cualquier producto digital futuro.
>
> **Versión** 1.1 · **Estado**: vigente · **Fuente visual**: `stitch/logo-sitioweb.png` (PNG) y `stitch/code.html` (SVG vectorial)
> **Regla raíz**: el logo existente es el punto de partida de todo el sistema. El logo no se modifica, no se reemplaza ni se regenera.
> **Historial**: v1.0 (2026-10-06) analizó el logo original `starkcore-logo.png` ("S" con órbita). v1.1 (2026-10-08) adopta el **nuevo símbolo** (3 barras + punto) definido por el dueño del proyecto — ver §2.5-G. El wordmark bicolor y la paleta se conservan.

---

## 0. Cómo leer este documento

1. La identidad visual **no se inventó de cero**: se extrajo analizando el logo píxel a píxel (paleta, degradados, formas, proporciones, tipografía).
2. Toda decisión visual debe poder rastrearse hasta el logo o hasta una regla explícita de este documento.
3. Cuando el logo es ambiguo, la decisión queda registrada en **§2.5 Decisiones y supuestos documentados**.
4. Las implementaciones se harán con **shadcn/ui + Tailwind CSS**, adaptando sus componentes a este sistema (§7.1) — nunca con el estilo por defecto sin modificar.

---

## 1. Brand Philosophy

### 1.1 Qué es StarkCore

StarkCore Solutions es una empresa tecnológica fundada por dos desarrolladores en Barranquilla, Colombia, enfocada en **simplificar y optimizar la operación de las empresas mediante tecnología**.

No somos una agencia que "hace páginas web". Somos una empresa de **soluciones personalizadas**: identificamos problemas operativos reales y los resolvemos con software, automatización e integración de herramientas.

### 1.2 El problema que resolvemos

Las PYMES realizan procesos de forma manual o fragmentada: revisan oportunidades de contratación a mano, clasifican correos y pedidos uno por uno, digitan la misma información en dos o tres plataformas, pierden seguimientos. Eso consume horas que deberían dedicarse a hacer crecer el negocio.

> **Idea central:**
> **Encontramos los procesos que frenan a una empresa y los convertimos en procesos más simples, conectados y automatizados.**

### 1.3 Filosofía

| Pilar | Significado |
|---|---|
| **Conectar** | Unir herramientas, información y procesos que hoy están separados. |
| **Automatizar** | Eliminar tareas repetitivas y reducir el trabajo manual. |
| **Simplificar** | Convertir procesos complejos en flujos sencillos. |
| **Optimizar** | Ahorrar tiempo y mejorar la eficiencia con lo que ya existe. |
| **Adaptar** | Desarrollar según las necesidades reales de cada empresa. |
| **Escalar** | Construir soluciones que crezcan junto con el negocio. |

**Premisa no negociable:** la tecnología no es el producto final. **La tecnología es el medio** para resolver problemas empresariales reales. Si un problema se resuelve con un proceso mejor y no con software, se dice abiertamente.

### 1.4 Valores

1. **Honestidad técnica** — decimos qué se puede y qué no se puede, con cifras y plazos realistas.
2. **Cercanía** — hablamos el idioma del cliente, no el de la jerga técnica.
3. **Precisión** — el detalle importa: un proceso mal automatizado es peor que uno manual.
4. **Responsabilidad** — acompañamiento posterior a la entrega; no desaparecemos después del deploy.
5. **Confidencialidad** — tocamos datos operativos de la empresa: la confianza es parte del servicio.
6. **Resultados** — el valor se mide en tiempo ahorrado y errores reducidos, no en líneas de código.

### 1.5 Personalidad de marca

**StarkCore SÍ es:**

- Profesional
- Confiable
- Preciso
- Claro y directo
- Cercano con empresas reales
- Resolutivo y orientado a resultados
- Técnicamente sólido
- Maduro

**StarkCore NO es:**

- ❌ Agencia genérica de marketing
- ❌ Startup genérica de "IA" que promete transformación digital con una demo bonita
- ❌ Plantilla tecnológica prediseñada
- ❌ Proyecto universitario
- ❌ Una marca que usa efectos visuales solo para *parecer* tecnológica
- ❌ Frío, distante ni excesivamente corporativo

### 1.6 Principios de diseño

1. **Cada elemento tiene una función.** Si un efecto, animación o bloque visual no comunica algo o no guía al usuario, se elimina.
2. **Confianza antes que vanguardia.** El público es una empresa tradicional evaluando un proveedor: la sofisticación se logra con jerarquía y claridad, no con espectáculo.
3. **La claridad es la estética.** Espacio en blanco, alineación estricta y tipografía bien jerarquizada hacen más trabajo que cualquier degradado.
4. **Coherencia con el logo.** Toda paleta, forma y ritmo proviene del sistema ya contenido en la marca.
5. **Densidad informativa honesta.** El contenido explica procesos reales; nada de relleno de marketing.
6. **Responsive-first.** Se diseña primero para móvil: la mayoría llegará desde un celular por WhatsApp o una búsqueda.
7. **Accesibilidad como calidad.** Contraste AA mínimo, foco visible, teclado operable, `prefers-reduced-motion` respetado.

---

## 2. Visual Identity

### 2.1 Concepto visual central

> **Tres flujos que ascienden hacia un núcleo luminoso.**

El nuevo símbolo representa procesos que se ordenan y avanzan: tres barras diagonales paralelas (ritmo, repetición, método) que escalan en intensidad de color —de la solidez navy al azul vivo— hasta encontrar el punto cian: el **core**, el resultado que emite valor. Es la historia del servicio hecha forma: de lo pesado a lo claro, con dirección.

### 2.2 Análisis del logo elemento por elemento

**Composición:** símbolo (3 barras + punto) a la izquierda + wordmark "StarkCore" + bajada "SOLUTIONS" en mono. Lockup horizontal.

| Elemento | Descripción | Significado de marca |
|---|---|---|
| **Tres barras diagonales** | Tres trazos gruesos paralelos inclinados ~45° (corte angular en los extremos), en azul medio con degradado sutil | El proceso mismo: flujos repetibles, en ritmo, que avanzan con método |
| **Escalera de azules** | Barra más oscura (navy) → media → más viva (`#0088F8`) | Progresión: de lo manual/pesado a lo automatizado/claro — **transformación** |
| **Punto cian** | Círculo `#0BDBFF` en la punta superior derecha, alineado con la dirección de las barras | El **core**: el núcleo que emite valor; la chispa que culmina el proceso |
| **Wordmark bicolor** | `Stark` en tinta navy (`#001038`) + `Core` en azul vivo (`#0088F8`), unión exacta | El nombre codifica la marca: **solidez (navy) → tecnología (azul)** |
| **"SOLUTIONS"** | Roboto Mono, mayúsculas, tracking amplio (`0.22em`), gris-navy `#54607C` | Seriedad y método; ancla tipográfica del sistema de etiquetas |
| **Fondo transparente** | Sin caja, sin contorno | La marca se adapta al fondo (con la restricción de §2.5-B) |

**Tipografía del wordmark:** sans-serif geométrica en minúscula/mayúscula mixta ("StarkCore", no todo mayúsculas), peso bold, cajas limpias. Este rasgo guía la elección tipográfica del sistema (§4): sans geométrica de bajo contraste.

**Proporciones:** lockup horizontal ~5:2. El símbolo ocupa la cuota izquierda; "SOLUTIONS" se alinea al inicio del wordmark.

### 2.3 Sensación que debe producir la marca

Dirección, ritmo y precisión. Las barras sugieren avance continuo; el punto, un logro concreto. Nunca caos, nunca quietud: la marca debe sentirse **en marcha**, profesional y sobria.

### 2.4 Lenguaje visual derivado (qué tomamos del logo para la interfaz)

| Rasgo del logo | Traducción al sistema |
|---|---|
| Corte angular de 45° en las barras | **Elemento de firma**: chevron/corte angular en diagonal, usado máximo 2 veces por página (§7.11) |
| Diagonal ascendente | Composiciones con tensión diagonal sutil: visuales del hero alineados en diagonal ascendente, nunca simetría absoluta |
| Escalera navy → azul → cian | Uso **solo** en elementos puntuales de énfasis (barra de proceso, borde de acento), nunca en fondos grandes ni en títulos |
| Wordmark bicolor | Recursos editoriales: un término clave de un titular puede recibir el azul vivo (`#0088F8`) para crear jerarquía |
| Tracking amplio de "SOLUTIONS" | **Eyebrows y etiquetas** en mono, mayúsculas, tracking `0.14em` |
| Barras paralelas | Iconografía lineal con radios y trazos consistentes (2px), no iconos rellenos multicolor |

### 2.5 Decisiones y supuestos documentados

| # | Ambigüedad detectada | Decisión tomada | Razonamiento |
|---|---|---|---|
| **A** | El logo original tenía efecto de brillo/degradado "3D" de estilo 2010s | **Se conserva el logo intacto**, pero el sistema de la interfaz es **plano y sobrio** (sin biselados, sin brillos, sin sombras metálicas) | Reproducir el efecto 3D en UI produciría el look anticuado que la marca quiere evitar; el logo aporta color y forma, no el estilo de render |
| **B** | El logo no tiene versión monocroma ni versión sobre fondo oscuro | **Regla**: el logo se usa preferiblemente sobre fondos claros (blanco, `#FBFCFE`, `#F3F6FB`). En bandas navy (footer), usar la versión con wordmark en blanco (`stitch/logo-blanco.png`, pendiente de generar) o wordmark en texto blanco. No se altera el archivo original. | Garantiza legibilidad sin modificar la marca. Si más adelante se aprueba una versión blanca/negro sólido, se documentará aquí |
| **C** | La paleta del logo es 100% fría | Los colores semánticos de estado (success/warning/error) **son funcionales, no decorativos**: solo aparecen en formularios, validaciones y estados de sistema | Se evita contaminar la firma cromática con calidez que la marca no tiene |
| **D** | No hay tipografía oficial asociada al wordmark | Se eligió **DM Sans** para títulos y cuerpo + **Roboto Mono** para etiquetas: sans geométricas de Google Fonts, coherentes con las formas geométricas del logo | Primera elección (Space Grotesk + IBM Plex) se descartó tras evaluarla con el diseño de Stitch: la personalidad de la fuente peleaba con el layout (feedback del proyecto) |
| **E** | No está definido el tono de voz por escrito | Español neutro, de segunda persona (**tú**), directo, sin jerga innecesaria ni promesas vacías | Cercanía con PYMES colombianas sin perder seriedad |
| **F** | El logo original tiene fondo transparente y detalle fino (destello) | Tamaño mínimo de uso: **120 px** de ancho en pantalla; margen de respiro mínimo = **25%** del alto del logo | Por debajo de eso el detalle fino se colapsa |
| **G** | El dueño del proyecto definió un **nuevo símbolo** (3 barras + punto cian) que reemplaza a la "S" con órbita y flecha del logo original | **Se adopta el nuevo logo** (`stitch/logo-sitioweb.png` + `stitch/code.html`) como fuente visual oficial. El wordmark bicolor ("Stark" navy + "Core" azul) y la paleta se conservan. El logo original queda como referencia histórica en `starkcore-logo.png` | Decisión del dueño del proyecto (2026-10-08). El nuevo símbolo es más plano, geométrico y contemporáneo; encaja mejor con el sistema de interfaz plano y sobrio |

---

## 3. Color System

### 3.1 Teoría y psicología del color — base de la paleta

La paleta no se escogió por tendencia: se **extrajo del logo** y se validó con teoría del color.

**1. Matiz (temperatura) — azul frío entre 189° y 223°**
Todos los colores del logo caen en el rango frío (matiz 189°–223°, verificado por muestreo). Psicológicamente, los tonos fríos se asocian a racionalidad, calma, precisión y confianza — exactamente lo que una PYME tradicional necesita sentir antes de contratar un proveedor tecnológico. Los colores cálidos (rojo, naranja) generan urgencia y alerta, útiles para estados de error, inadecuados como identidad.

**2. Azul = el color de la confianza institucional**
Es el color más asociado con confianza en estudios de marca, y es el estándar de banca, tecnología y consultoría (IBM, Cisco, Intel, HP, PayPal, Samsung). Elegir azul es una decisión de **bajo riesgo percibido** — precisamente lo que buscamos para una empresa seria que evalúa un proveedor.

**3. Valor (luminancia) — contraste extremo navy ↔ blanco**
El logo trabaja dos polos: navy casi negro (`#001038`, luminancia 11%) y cian casi blanco (`#0BDBFF`, luminancia 52%). Ese salto de valor genera **jerarquía y claridad**: lo importante es oscuro y contundente; lo que respira es claro. En interfaces, alto contraste de valor = legibilidad = profesionalismo.

**4. Saturación — contenida en superficies, intensa en acentos**
El azul saturado (`#0088F8`, saturación 100%) se reserva para acciones y énfasis; las superficies usan neutros con saturación baja (6%–50%). Saturación alta extendida cansa la vista y transmite "juguetón"; saturación alta puntual transmite **energía con control**.

**5. Cian (189°) = la chispa**
Derivado del punto cian del nuevo logo. Es innovación, claridad y luz. Uso **< 10%** de la interfaz: es el destello, no el cuadro.

**6. Narrativa de la escalera navy → azul → cian**
Las tres barras del logo escalan de oscuro a claro hacia el punto cian: es literalmente la historia del servicio — **de lo oscuro y pesado (proceso manual) a lo claro y ligero (proceso automatizado)**. Se usa como metáfora en momentos puntuales, nunca como fondo decorativo generalizado.

**7. Nota cultural y de público**
El objetivo es una PYME colombiana tradicional. Paleta conservadora = percepción de solidez y menor riesgo. Se descartan explícitamente el **morado/violeta** (cliché de startup de IA), los degradados arcoíris, el neón y los gradientes multicolor: son señales de "plantilla", no de empresa seria.

**Proporción de uso (regla 60/30/10):**
- **60%** neutros claros (fondos, superficies, texto)
- **30%** azules (navy + escala azul: texto, botones, bandas)
- **10%** acento cian y énfasis

### 3.2 Paleta primaria

| Token | Nombre | HEX | RGB | HSL | Uso |
|---|---|---|---|---|---|
| `brand` | **Stark Blue** | `#0088F8` | 0, 136, 248 | `207°, 100%, 49%` | Acciones de énfasis, acentos, botones destacados, dato clave (= `blue-500`) |
| `ink` / `navy` | **Core Navy** | `#001038` | 0, 16, 56 | `223°, 100%, 11%` | Texto principal, botón primario, bandas oscuras, footer (= `blue-900`) |
| `secondary` | **Bridge Blue** | `#0050F0` | 0, 80, 240 | `221°, 100%, 47%` | Estados hover intermedios, bordes activos, dato secundario |
| `accent` | **Spark Cyan** | `#0BDBFF` | 11, 219, 255 | `189°, 100%, 52%` | Solo sobre navy: subrayados, iconos activos, resaltados |

> **Nota de mapeo:** en las variables shadcn (§7.1), `--primary` = `ink` navy (la acción más importante) y `--accent` = `brand` azul `#0088F8`. El nombre "primary" de shadcn indica *jerarquía de acción*, no el color de marca.

### 3.3 Escala azul completa (generada matemáticamente)

Mezcla lineal desde `#0088F8`: tintas hacia blanco puro (50–400) y sombras hacia el navy del logo `#001038` (600–900) — nunca hacia negro puro, para mantener la temperatura fría.

| Token | HEX | RGB | HSL | Contraste vs blanco | Uso |
|---|---|---|---|---|---|
| `blue-50` | `#F2F9FF` | 242, 249, 255 | `208°, 100%, 97%` | 1.06 | Fondos de sección suaves, hover de links |
| `blue-100` | `#E0F1FE` | 224, 241, 254 | `207°, 95%, 87%` | 1.16 | Badges, chips, fondos de tabla |
| `blue-200` | `#BDE0FD` | 189, 224, 253 | `207°, 96%, 74%` | 1.38 | Texto secundario **sobre navy**, bordes en oscuro |
| `blue-300` | `#8CC9FC` | 140, 201, 252 | `207°, 94%, 64%` | 1.76 | Texto sobre navy (tamaños grandes) |
| `blue-400` | `#47A9FA` | 71, 169, 250 | `207°, 95%, 63%` | 2.51 | Hover de botones azules |
| **`blue-500`** | **`#0088F8`** | 0, 136, 248 | `207°, 100%, 49%` | 3.57 | **Base**: fondos de acento, botones con texto navy |
| `blue-600` | `#006ECE` | 0, 110, 206 | `208°, 100%, 40%` | **5.12 ✓ AA** | **Texto azul y links** sobre fondo claro |
| `blue-700` | `#0052A2` | 0, 82, 162 | `210°, 100%, 32%` | 7.70 ✓ AAA | Hover/activo de links, texto azul sobre `blue-50` |
| `blue-800` | `#003675` | 0, 54, 117 | `213°, 100%, 23%` | 11.71 | Detalles en bandas oscuras, bordes |
| `blue-900` | `#001038` | 0, 16, 56 | `223°, 100%, 11%` | 18.56 ✓ AAA | Navy principal |

### 3.4 Neutrales (tintados de navy, nunca gris puro)

| Token | HEX | RGB | HSL | Uso |
|---|---|---|---|---|
| `background` | `#FBFCFE` | 251, 252, 254 | `220°, 60%, 99%` | Fondo base del sitio |
| `surface` | `#F3F6FB` | 243, 246, 251 | `217°, 50%, 97%` | Fondo de secciones alternas, cards sobre blanco |
| `surface-strong` | `#EEF2F9` | 238, 242, 249 | `218°, 45%, 95%` | Áreas destacadas sutiles |
| `foreground` | `#0A1330` | 10, 19, 48 | `226°, 66%, 11%` | Texto principal |
| `muted-foreground` | `#54607C` | 84, 96, 124 | `222°, 19%, 41%` | Texto secundario (6.29 ✓ AA) |
| `muted-foreground-2` | `#6B7794` | 107, 119, 148 | `220°, 14%, 50%` | Texto terciario, placeholders (4.48 — solo ≥14px o decorativo) |
| `border` | `#DDE4F0` | 221, 228, 240 | `218°, 39%, 90%` | Bordes de cards y separadores |
| `border-strong` | `#C9D4E8` | 201, 212, 232 | `219°, 40%, 85%` | Bordes de inputs, botón outline |
| `border-hover` | `#B9C9E4` | 185, 201, 228 | `218°, 43%, 81%` | Hover de cards |

### 3.5 Colores semánticos (solo funcionales)

El logo **no contiene ningún color cálido** (verificado: 0 píxeles con R > B). Estos tonos existen únicamente para estados de sistema y formularios; nunca se usan decorativamente.

| Token | HEX | RGB | Contraste vs blanco | Uso |
|---|---|---|---|---|
| `success` | `#0E7A55` | 14, 122, 85 | 5.34 ✓ AA | Confirmaciones, estados exitosos |
| `success-soft` | `#E7F5EF` | 231, 245, 239 | — | Fondo de alerta de éxito |
| `warning` | `#8A6100` | 138, 97, 0 | 5.54 ✓ AA | Advertencias |
| `warning-soft` | `#FBF3E2` | 251, 243, 226 | — | Fondo de advertencia |
| `error` | `#C0392B` | 192, 57, 43 | 5.44 ✓ AA | Errores, validaciones |
| `error-soft` | `#FDECEA` | 253, 236, 234 | — | Fondo de error |

### 3.6 Ratios de contraste verificados (WCAG 2.1)

| Par | Ratio | Veredicto |
|---|---|---|
| Blanco sobre navy `#001038` | **18.56:1** | ✓ AAA — botón primario, bandas oscuras |
| Navy sobre blanco | **18.56:1** | ✓ AAA — cuerpo de texto |
| **Navy sobre azul `#0088F8`** | **5.20:1** | ✓ AA — **botones azules llevan texto navy** |
| Blanco sobre azul `#0088F8` | 3.57:1 | ⚠️ ✗ para texto normal — solo ≥18px bold o gráficos |
| `blue-600 #006ECE` sobre blanco | 5.12:1 | ✓ AA — links y texto azul |
| `muted-foreground #54607C` sobre blanco | 6.29:1 | ✓ AA |
| Cian `#0BDBFF` sobre navy | 11.13:1 | ✓ AAA — acentos en bandas oscuras |
| `blue-200 #BDE0FD` sobre navy | 13.48:1 | ✓ AAA — texto secundario en navy |
| `muted #A8B4CC` sobre navy | 8.90:1 | ✓ AAA — texto terciario en navy |

**Reglas derivadas:**
- Texto azul sobre fondo claro → **siempre `blue-600` o más oscuro** (nunca `#0088F8` en texto pequeño).
- Botón azul de alto énfasis → fondo `#0088F8` con **texto navy** (5.20:1), no blanco.
- Cian → **exclusivo sobre navy**.

### 3.7 Fondos y bandas de sección

| Banda | HEX | Uso |
|---|---|---|
| **A — Blanco** | `#FBFCFE` | Fondo por defecto |
| **B — Surface** | `#F3F6FB` | Secciones alternas |
| **C — Navy** | `#001038` | Máximo 2–3 bandas por página (prueba social, CTA final, footer). Nunca dos navy seguidas |
| **D — Blue-50** | `#F2F9FF` | Refuerzo puntual de una sección |

### 3.8 Prohibiciones

- ❌ Degradados morados/violeta o multicolor (cliché de startup de IA)
- ❌ Degradados como fondo de secciones o de títulos
- ❌ Neón, fluorescencia, colores fuera de esta paleta
- ❌ Grises puros (`#333`, `#666`, `#EEE`) — los neutros son tintados de navy
- ❌ Combinaciones azul saturado + texto blanco en cuerpos de texto
- ❌ Rojo/naranja decorativos (solo semánticos)
- ❌ Modificar, recolorear ni "mejorar" el logo

---

## 4. Typography

### 4.1 Estrategia y elección

**Dos familias de Google Fonts, roles claros: DM Sans (todo el texto) + Roboto Mono (etiquetas).**

#### Display y cuerpo — **DM Sans**
Sans serif geométrica de bajo contraste, con cajas limpias y terminaciones rectas: el mismo lenguaje geométrico que el wordmark, sin excentricidades. Diseñada originalmente para títulos **y** texto pequeño en pantalla, por lo que una sola familia sostiene toda la jerarquía (el peso y el tamaño hacen el trabajo, no el cambio de fuente). Variable (100–1000), soporte completo de `ñ` y acentos, y está disponible en Stitch y Google Fonts.

> **Por qué no la anterior:** la primera propuesta (Space Grotesk + IBM Plex Sans/Mono) se evaluó contra el diseño generado en Stitch y no funcionaba: la personalidad marcada de Space Grotesk peleaba con el layout. Se cambió por una familia más neutra y versátil.

**Descartadas y por qué:**
- *Inter* → **prohibida en este proyecto**: default de plantillas y artefactos de IA (efecto "AI slop").
- *Space Grotesk* → descartada tras prueba con el diseño de Stitch (ver arriba).
- *IBM Plex Sans/Mono* → demasiado institucionales y frías para el tono de cercanía buscado.
- *Poppins / Montserrat* → look típico de agencia de marketing en LatAm: alto riesgo de parecer plantilla.
- *Josefin Sans / Raleway / Playfair / Lora / Arvo* → x baja o estética lujo/editorial: no corresponden con tecnología B2B.
- *Object Sans / Ranade / Soria / Sreda* (de la guía de Figma) → fuentes de pago, no disponibles en Google Fonts ni en Stitch.
- *Orbitron / Rajdhani / Chakra Petch* → look gamer/sci-fi, percibido como amateur.

*Fuente de referencia para la selección: guía "24 mejores fuentes para sitios web" de Figma (figma.com/resource-library), filtrada por los criterios anteriores.*

#### Técnica/etiquetas — **Roboto Mono**
Eyebrows, badges, numeración de pasos y datos: mayúsculas con tracking amplio, eco directo del "SOLUTIONS" del logo. Mismo ecosistema Google Fonts que DM Sans (sin choque de voz entre familias, a diferencia del par Plex anterior).

### 4.2 Escala tipográfica

| Rol | Familia | Móvil → Desktop | Peso | Line-height | Tracking |
|---|---|---|---|---|---|
| Display (hero) | DM Sans | 2.25rem (36) → **3.75rem (60)** | 700 | 1.05 | −0.02em |
| H2 (sección) | DM Sans | 1.75rem (28) → **2.75rem (44)** | 700 | 1.12 | −0.015em |
| H3 | DM Sans | 1.375rem (22) → **1.75rem (28)** | 600 | 1.25 | −0.01em |
| H4 / card title | DM Sans | 1.125rem → 1.25rem | 600 | 1.3 | −0.005em |
| Lead (párrafo guía) | DM Sans | 1.0625rem → **1.125rem (18)** | 400 | 1.7 | 0 |
| Body | DM Sans | **1rem (16)** | 400 | 1.65 | 0 |
| Small / ayuda | DM Sans | 0.875rem (14) | 400 | 1.6 | 0 |
| **Eyebrow** | Roboto Mono | 0.75rem (12) | 500 | 1.2 | **0.14em**, UPPERCASE |
| Badge / chip | Roboto Mono | 0.6875rem (11) | 500 | 1.2 | **0.1em**, UPPERCASE |
| Button | DM Sans | 0.9375rem (15) | 600 | 1 | 0 |
| Dato/cifra | DM Sans | 2rem → 3rem | 700 | 1 | −0.02em |
| Código / técnico | Roboto Mono | 0.875rem | 400 | 1.5 | 0 |

### 4.3 Reglas de uso

1. **Titulares en sentence case** (no TODO MAYÚSCULAS). Las mayúsculas se reservan a eyebrows, badges y botones cortos.
2. **Máximo 2 familias por pantalla** (DM Sans para todo el texto + Roboto Mono solo en etiquetas).
3. **Medida de lectura**: máximo **65 caracteres** por línea en párrafos.
4. **Jerarquía por peso y tamaño, no por color**: el color secunda.
5. Titular de hero: **máximo 12 palabras**; subtítulo: 1–2 líneas.
6. Un solo término clave por titular puede resaltarse en `#0088F8` (ecoa el wordmark bicolor).
7. Nunca justificar texto ni centrar párrafos largos.

### 4.4 Carga y fallbacks

```css
--font-display: 'DM Sans', ui-sans-serif, system-ui, sans-serif;
--font-sans: 'DM Sans', ui-sans-serif, system-ui, sans-serif;
--font-mono: 'Roboto Mono', ui-monospace, monospace;
```

- Carga con `next/font` (o Google Fonts) — `display=swap`, pesos DM Sans **400/500/600/700** (familia variable 100–1000) y Roboto Mono **400/500**, subconjunto `latin` + `latin-ext` (para `ñ`, `á`, `é`, `í`, `ó`, `ú`, `ü`).
- `--font-display` y `--font-sans` apuntan a la misma familia: la jerarquía se construye con **peso y tamaño**, no con cambios de fuente.
- Fallback visible y aceptable si la fuente falla: el sistema no depende de una fuente exótica.

---

## 5. Spacing

**Base de 4px.** Todos los espacios son múltiplos de 4; se alinea 1:1 con la escala de Tailwind para mapeo directo con shadcn/ui.

| Token Tailwind | px | Uso típico |
|---|---|---|
| `1` | 4 | gaps íconos, separación mínima |
| `2` | 8 | entre icono y texto, chips |
| `3` | 12 | padding de badge, gap de tarjeta pequeña |
| `4` | 16 | padding base, gaps en móvil |
| `5` | 20 | gap entre bloques |
| `6` | 24 | **padding de card (móvil)**, gap de grid |
| `8` | 32 | padding de card (desktop), gap de grid desktop |
| `10` | 40 | separación entre bloques de una sección |
| `12` | 48 | padding de card grande, gap de CTA |
| `16` | 64 | padding de sección en móvil |
| `20` | 80 | padding de sección en tablet |
| `24` | 96 | separación editorial |
| `28` | 112 | **padding vertical de sección en desktop** |
| `32` | 128 | respiro máximo (hero) |

**Ritmo vertical de secciones:** `py-16` (móvil, 64px) → `py-20` (tablet, 80px) → `py-28` (desktop, 112px).

**Densidad:** aire > saturación. Si un bloque se siente apretado, se **elimina contenido**, no se reduce el padding.

---

## 6. Layout

### 6.1 Contenedor y grid

- **Ancho máximo de contenido:** `1200px` (`max-w-container`).
- **Padding horizontal:** `16px` (móvil) → `24px` (sm) → `32px` (lg).
- **Grid:** 12 columnas, gap `16px` (móvil) / `24px` (desktop).
- **Medida de texto:** bloques de lectura ≤ `65ch`; titulares ≤ `20ch` por línea.
- **Alineación:** titulares y contenido **alineados a la izquierda** por defecto. El centrado se reserva para la sección CTA final y los estados vacíos (nunca centrar el hero ni secciones completas).

### 6.2 Breakpoints (Tailwind por defecto)

| Token | px | Comportamiento |
|---|---|---|
| base | < 640 | 1 columna, menú en sheet, hero apilado |
| `sm` | 640 | Cards en 2 columnas |
| `md` | 768 | Grid de 2–3 columnas, contenido en 2 columnas |
| `lg` | 1024 | Layout completo, navbar horizontal, grids de 3–4 |
| `xl` | 1280 | Contenedor completo con respiro extra |

### 6.3 Reglas responsive-first

1. Se compone **primero en móvil**: una columna, jerarquía vertical, CTAs visibles sin scroll largo.
2. Ningún texto baja de **16px** en móvil.
3. Áreas táctiles ≥ **44 × 44px**.
4. El hero en desktop usa asimetría **7/5** (texto/visual); en móvil el visual va **debajo** del texto.
5. Tablas y flujos horizontales se convierten en tarjetas apiladas en móvil (nunca scroll horizontal forzado).
6. Los grids rompen en 2 columnas antes que en 1 con elementos estirados.

### 6.4 Patrones de composición

- **F-pattern** para secciones informativas (lectura natural de izquierda a derecha).
- **Alternancia de bandas** A → B → A → C para dar ritmo sin decoración.
- **Numeración mono** (`01 / 02 / 03`) en listas de procesos — refuerza el carácter técnico.
- Máximo **3–4 elementos comparables** por fila (grid de tarjetas).

---

## 7. Components

### 7.1 Adaptación de shadcn/ui

La implementación usa shadcn/ui como base **nunca como estética final**. Todo se controla por variables CSS:

```css
:root {
  --background: #FBFCFE;
  --foreground: #0A1330;
  --card: #FFFFFF;
  --card-foreground: #0A1330;
  --surface: #F3F6FB;
  --primary: #001038;            /* ink navy = acción primaria (§3.2) */
  --primary-foreground: #FFFFFF;
  --accent: #0088F8;             /* brand azul de énfasis (§3.2) */
  --accent-foreground: #001038;  /* texto navy sobre azul (5.20:1) */
  --muted: #F3F6FB;
  --muted-foreground: #54607C;
  --border: #DDE4F0;
  --border-strong: #C9D4E8;
  --ring: #0088F8;
  --link: #006ECE;               /* AA sobre blanco */

  --radius-sm: 4px;
  --radius-md: 8px;              /* botones e inputs */
  --radius-lg: 12px;             /* cards y paneles */
  --radius-xl: 16px;             /* modales, sheets */

  /* Sombras tintadas de navy — nunca gris/negro puro */
  --shadow-sm: 0 1px 2px rgba(0, 16, 56, 0.06);
  --shadow-md: 0 4px 16px -2px rgba(0, 16, 56, 0.10);
  --shadow-lg: 0 16px 40px -8px rgba(0, 16, 56, 0.16);
}
```

**Adaptaciones obligatorias respecto al default:**
1. `--primary` = **navy**, no azul brillante (la acción más importante proyecta confianza).
2. Radios **no uniformes**: 8px botones, 12px cards, 16px modales — se rompe el "rounded uniform".
3. Sombras **tintadas de navy** con opacidad baja: presencia sin suciedad.
4. Focus ring: `2px solid #0088F8` con `offset 2px` en todo elemento interactivo (visible y consistente).
5. Transiciones de estado: `150ms` en color/borde, `180ms` en elevación.
6. **No se usan sin modificar:** variantes `destructive` por defecto (se recolorea con `#C0392B` de §3.5), ni el tema oscuro default.

**Componentes shadcn a instalar:** `button`, `card`, `input`, `textarea`, `label`, `badge`, `sheet` (menú móvil), `dialog` (modales), `accordion` (FAQ), `separator`, `skeleton`, `form`.
**Compuestos propios (no shadcn):** `Navbar`, `Footer`, `Hero`, `SectionHeader`, `ServiceCard`, `ProcessSteps`, `CtaBand`, `Eyebrow`.

### 7.2 Buttons

| Variante | Fondo | Texto | Borde | Uso |
|---|---|---|---|---|
| **Primary** | `#001038` | blanco | — | Acción principal (1 por sección) |
| **Accent** | `#0088F8` | **navy `#001038`** | — | Énfasis / sobre bandas navy |
| **Outline** | transparente | navy | 1px `#C9D4E8` | Acción secundaria |
| **Ghost** | transparente | navy | — | Acciones terciarias, nav |

- **Alturas:** sm `36px` · md `44px` · lg `48–52px`. Padding-x: 20/24px.
- **Radio:** `8px` (nunca pill, nunca 0).
- **Hover:** primary → `#0A1E56` + `translateY(-1px)`; accent → `#47A9FA`; outline → borde navy + fondo `#F3F6FB`.
- **Active:** `translateY(0)` · **Focus:** ring azul 2px offset 2px · **Disabled:** 50% opacidad.
- Iconos: 16–18px, gap `8px`. Nunca emoji como icono de botón.

### 7.3 Cards

- Fondo `#FFFFFF` o `#F3F6FB`, **borde 1px `#DDE4F0`**, radio **12px**, padding `24px` (móvil) / `32px` (desktop).
- **Sin sombra por defecto** — la sombra aparece solo en hover.
- **Hover:** borde → `#B9C9E4` + `--shadow-sm` + `translateY(-2px)`, `180ms ease-out`.
- Estructura interna: `Eyebrow`/número mono → título H3/H4 → texto `muted-foreground` → link o acción opcional.
- Nunca cards dentro de cards (máx. 1 nivel de anidamiento visual).

### 7.4 Inputs y forms

- Altura `44px` (textarea auto), borde 1px `#C9D4E8`, radio `8px`, fondo blanco, texto 16px (evita zoom en iOS).
- **Focus:** borde `#0088F8` + ring `rgba(0,136,248,0.15)` 3px.
- **Error:** borde `#C0392B` + mensaje 14px `#C0392B` con ícono.
- **Label** siempre visible arriba (14px, peso 600, navy); placeholder `#6B7794` nunca sustituye al label.
- Layout de formulario: **una columna** en móvil, campos cortos en 2 columnas en desktop.
- Envío: botón primary con estado `loading` (skeleton/spinner discreto, sin texto cambiante).

### 7.5 Navbar

- **Sticky** `top-0`, altura `64px` móvil / `72px` desktop.
- Fondo `rgba(251, 252, 254, 0.85)` + `backdrop-blur(12px)`; **borde inferior `#DDE4F0` aparece solo al hacer scroll** (>8px).
- Logo: ancho `132–150px`, enlace al inicio.
- Links: 15px `muted-foreground` → `foreground` en hover, con subrayado animado `2px` `#0088F8` de izquierda a derecha (`150ms`).
- CTA: botón **primary sm** ("Hablemos").
- Móvil: menú en `sheet` (shadcn) desde la derecha, items 18px, fondo claro, cierre con X; sin animaciones elaboradas.
- **Regla:** 1 CTA visible en todo momento.

### 7.6 Footer

- Banda **navy** `#001038`, sin excepción.
- Texto principal blanco; secundario `#A8B4CC` (8.90 ✓); links `#BDE0FD` → hover cian `#0BDBFF`.
- Estructura: logo en versión clara (wordmark en blanco sobre navy, o versión monocroma aprobada — ver §2.5-B), 3–4 columnas de enlaces, contacto directo (email, WhatsApp), línea inferior con `Roboto Mono` 12px (©, ubicación "Barranquilla, Colombia").
- Aire generoso: padding `64px` superior/inferior.

### 7.7 Badges y Eyebrows

- **Eyebrow:** mono 12px, UPPERCASE, tracking `0.14em`, color `#006ECE` (5.12 ✓). Prefijo opcional: **chevron angular ▸ o línea de 16px**, no bullet redondo (eco del corte del logo).
- **Badge/chip:** mono 11px uppercase, fondo `#E0F1FE`, texto `#0052A2`, radio `4px`, padding `4px 8px`.
- Uso: categorizar servicios y estados; nunca decorativo sin significado.

### 7.8 Links

- **En texto:** `#006ECE` + `underline-offset: 3px`, decoración `#BDE0FD` → hover `#0052A2`.
- **En navegación:** ver §7.5.
- **Bloque CTA:** no es un link, es un botón (§7.2).
- Links externos: ícono de salida discreto o `target="_blank"` con indicador accesible.

### 7.9 Modals, sheets y alerts

- **Overlay:** `rgba(0, 16, 56, 0.55)` + `blur(2px)` — navy, nunca negro puro.
- **Modal:** radio `16px`, `--shadow-lg`, padding `24/32px`, cierre por X y ESC, foco atrapado.
- **Alert:** fondo suave semántico + borde izquierdo `3px` del color semántico + texto `foreground`. Nunca alerta solo por color (siempre con ícono y texto).

### 7.10 Sections (bandas)

- Alternancia `background` → `surface` → `background` → `navy` (§3.7).
- Cada sección: `Eyebrow` → `H2` → lead opcional (`muted-foreground`, máx. 2 líneas) → contenido.
- Máximo **1 botón primario por sección**; el resto outline/ghost.
- Separación entre secciones por cambio de banda, **no por líneas divisorias**.

### 7.11 Elemento de firma: corte angular 45°

Eco directo de los extremos del logo. Aplicaciones permitidas (**máx. 2 por página**):
1. Esquina superior derecha del bloque visual del hero (`clip-path` de 12–16px).
2. Chevron angular `▸` como prefijo de eyebrows o ítem de lista de procesos.

Nunca en cards, botones ni decoración general — pierde valor si se repite.

---

## 8. Motion

### 8.1 Filosofía

La animación **informa o guía**. Si no hace ninguna de las dos cosas, no existe.

### 8.2 Tokens

| Token | Valor | Uso |
|---|---|---|
| `duration-fast` | `150ms` | Colores, bordes, links |
| `duration-base` | `200ms` | Hover de cards, apertura de menús |
| `duration-slow` | `300ms` | Modales, sheets |
| `duration-reveal` | `400–500ms` | Entradas por scroll (máximo) |
| `easing-standard` | `cubic-bezier(0.2, 0.8, 0.2, 1)` | Estados interactivos |
| `easing-reveal` | `cubic-bezier(0.16, 1, 0.3, 1)` | Entradas |

### 8.3 Patrones permitidos

1. **Reveal por scroll:** `opacity 0→1` + `translateY(12px→0)`, 400–500ms, **una sola vez**, stagger máx. **3–4 elementos** con `60ms` de separación (IntersectionObserver).
2. **Hover de card:** `translateY(-2px)` + cambio de borde, `180ms`.
3. **Transiciones de estado:** color/fondo/borde `150ms`.
4. **Menú móvil / modal:** translación corta `300ms` con fade del overlay.
5. **Resaltar navegación activa:** subrayado que crece de izquierda a derecha.
6. Contadores de datos **solo si son cifras reales verificables**.

### 8.4 Prohibiciones

- ❌ Parallax
- ❌ Elementos flotantes o pulsantes continuos sin propósito
- ❌ Degradados animados o fondos en movimiento
- ❌ Texto que se escribe solo, efectos typewriter
- ❌ Rotaciones, giros, efectos 3D, glassmorphism llamativo
- ❌ Scroll-snap agresivo o smooth-scroll forzado
- ❌ Animaciones > 600ms
- ❌ Efectos que retracen el acceso al contenido (nada que "cargue" antes de leerse)
- ❌ Animar por animar "porque se ve tecnológico"

### 8.5 Accesibilidad

- Respetar **`prefers-reduced-motion: reduce`**: eliminar transformaciones, conservar solo cambios de color/alfa mínimos o desactivar todo.
- Ninguna animación puede impedir hacer clic, leer o navegar con teclado.
- Indicador de foco **nunca** se oculta con animación.

---

## 9. Web Design Direction

### 9.1 Orden de comunicación

La web es una **landing corporativa B2B**. En menos de 10 segundos debe responder:

1. **Qué es StarkCore** → hero
2. **Qué problemas resolvemos** → sección de problemas
3. **Qué soluciones ofrecemos** → servicios
4. **Cómo trabajamos** → proceso
5. **Por qué contactarnos** → diferenciales + CTA

### 9.2 Estructura de la landing

| # | Sección | Objetivo | Dirección visual |
|---|---|---|---|
| 0 | **Navbar** | Orientación + CTA permanente | Sticky translúcida (§7.5) |
| 1 | **Hero** | Idea central en una frase + CTA | Asimétrico **7/5**: titular izquierda, visual derecha (diagrama "antes → después" de un proceso). Banda A. Corte angular firma en el visual |
| 2 | **Problemas** ("¿Te suena familiar?") | Identificación del dolor: correos/pedidos manuales, SECOP manual, datos desconectados, tareas repetitivas | Banda B, 3–4 cards numeradas `01–04`, sin iconos decorativos pesados |
| 3 | **Soluciones** | Servicios concretos (automatización, integraciones, correos/pedidos, notificaciones email/WhatsApp, SECOP, web, herramientas internas, datos y APIs) | Banda A, grid 3–4 col con **iconografía lineal 2px** y radio del trazo consistente |
| 4 | **Casos / flujos** | Prueba tangible: 3 flujos en formato **Problema → Solución → Resultado** | Banda B, tarjetas horizontales; en móvil se apilan. Cifras de resultado en DM Sans 700 |
| 5 | **Cómo trabajamos** | Reducir la incertidumbre de contratar | Banda A, 4 pasos con numeración mono `01–04` y línea conectora |
| 6 | **Por qué StarkCore** | Diferenciales: cercanía local (Barranquilla), soluciones a medida, acompañamiento, tecnología como medio | **Banda navy** (1ª), acentos cian, texto blanco/blue-200 |
| 7 | **Presencia digital / web** | Servicio de sitios web como puerta de entrada | Banda A o integrado en Soluciones (decidir según densidad) |
| 8 | **CTA final + contacto** | Conversión: formulario corto (nombre, empresa, email, necesidad) o WhatsApp/email directo | Banda navy (2ª) o blue-50 con card; centrado permitido aquí |
| 9 | **Footer** | Contacto, navegación, identidad | Navy (§7.6) |

### 9.3 Flujo de trabajo: Stitch → shadcn/ui

**Fase 1 — Exploración en Stitch (iterar, no aceptar lo primero)**
- Generar **2–3 direcciones distintas** con este `design.md` como insumo (Apéndice A).
- Validar en Stitch: paleta aplicada, densidad, jerarquía, ritmo de bandas, composición del hero, responsive (móvil primero).
- **No** validar en Stitch: microinteracciones, estados hover/focus, código — eso es de la implementación.

**Fase 2 — Selección y refinamiento**
- Elegir la dirección más sólida y refinarla: espaciados, tamaños exactos, contenido real.
- Quitar todo lo que no tenga función (regla 1 de §1.6).

**Fase 3 — Implementación (shadcn/ui + Tailwind)**
1. **Tokens primero:** instalar variables de §7.1 en `globals.css` + fuentes (§4.4).
2. **Componentes shadcn** adaptados según §7.2–7.9.
3. **Secciones** en el orden de §9.2, responsive-first (móvil → desktop).
4. **Motion** al final, solo donde §8.3 lo permite.
5. Revisar contraste con la tabla §3.6 antes de cerrar.

### 9.4 Criterios de éxito (anti-plantilla)

- [ ] El logo aparece sin modificar, solo sobre fondos claros, tamaño ≥120px.
- [ ] Cada color usado está en §3.2–3.5; contraste AA verificado.
- [ ] Se usan DM Sans + Roboto Mono — **sin Inter**.
- [ ] Sin degradados morados ni gradientes de fondo.
- [ ] Radios variados (8/12/16px), no uniformes.
- [ ] Contenido mayormente alineado a la izquierda (hero no centrado).
- [ ] Cada animación pasa el test: ¿informa o guía?
- [ ] Funciona en móvil a 360px sin scroll horizontal.
- [ ] La página se entiende sin imágenes: el contenido se sostiene solo.
- [ ] Ningún elemento decorativo sin función.

---

## Apéndice A — Prompt base para Stitch

Copia y pega este prompt en Stitch como punto de partida, junto con el logo:

```
Landing page B2B en español para StarkCore Solutions, empresa tecnológica de
Barranquilla (Colombia) que automatiza e integra procesos de PYMES.
Público: dueños y gerentes de empresas tradicionales — tono serio, confiable,
profesional, sin look de "startup de IA".

IDENTIDAD (extraída del logo adjunto):
- Navy #001038 (texto, botón primario, bandas oscuras)
- Azul #0088F8 (énfasis, acentos) · Cian #0BDBFF (solo sobre navy)
- Fondos: blanco tintado #FBFCFE y surface #F3F6FB
- Tipografía: DM Sans (títulos y cuerpo) + Roboto Mono (etiquetas en
  mayúsculas con tracking amplio)
- Estética: plana, precisa, con aire; sin gradientes de fondo, sin morado,
  sin neon, sin esquinas todas redondeadas por igual.

ESTRUCTURA (mobile-first):
1. Navbar sticky con logo y botón "Hablemos"
2. Hero asimétrico 7/5: titular "Encontramos los procesos que frenan a tu
   empresa y los convertimos en simples, conectados y automatizados" + CTA,
   visual de un flujo "antes → después"
3. Sección de problemas (correos/pedidos manuales, búsqueda SECOP manual,
   datos desconectados) en tarjetas numeradas
4. Grid de soluciones/servicios con iconos lineales
5. 3 casos: Problema → Solución → Resultado
6. Cómo trabajamos: 4 pasos numerados
7. Banda oscura navy "Por qué StarkCore"
8. CTA final con formulario corto
9. Footer navy

Reglas: títulos alineados a la izquierda, bandas alternando blanco/gris azulado
/navy, animaciones mínimas (fade + 12px al hacer scroll), responsive estricto.
```

## Apéndice B — Checklist de implementación

1. [ ] `globals.css` con las variables de §7.1 (convertir HEX a HSL/OKLCH).
2. [ ] Fuentes cargadas con `next/font` (DM Sans, Roboto Mono).
3. [ ] Tailwind: `container` en 1200px, radios mapeados (`--radius-*`), sombras tintadas.
4. [ ] shadcn/ui instalado: button, card, input, textarea, label, badge, sheet, dialog, accordion, separator, skeleton, form.
5. [ ] Variantes de botón reescritas (primary navy / accent azul-con-texto-navy / outline / ghost).
6. [ ] Navbar sticky con borde al scroll, footer navy, Eyebrow propio.
7. [ ] Secciones en el orden de §9.2 con bandas de §3.7.
8. [ ] Motion solo según §8.3 + `prefers-reduced-motion`.
9. [ ] Auditoría de contraste (§3.6) y responsive 360px.
10. [ ] Logo nuevo (`stitch/logo-sitioweb.png`) sin modificar; sobre fondos claros preferiblemente; en footer navy usar wordmark en blanco (§2.5-B).

---

*Documento vivo: cualquier cambio de identidad se registra aquí primero y se implementa después.*
