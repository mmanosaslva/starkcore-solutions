# StarkCore Solutions — Plan de Seguridad Legal del Sitio Web

> **Versión** 0.2 · **Estado**: aprobado por el dueño del proyecto (2026-10-08), pendiente de **revisión por un abogado** antes de publicar.
> Contexto: sitio corporativo B2B de marketing en Colombia, sin login ni usuarios (`plan-sitio.md` §1). Stack: Vercel + Brevo + Vercel Web Analytics.
> ⚠️ **Descargo**: este documento es un plan de cumplimiento basado en la normativa colombiana vigente consultada (Ley 1581 de 2012 y reglamentos, Ley 1480 de 2011, Ley 23 de 1982). **No es asesoría jurídica**: los textos legales finales deben ser revisados/firmados por un abogado antes de la publicación.

---

## 1. Por qué importa (riesgo económico y judicial)

Un sitio web con formulario de contacto que recolecta datos personales (nombre, email, empresa) **está sujeto al régimen colombiano de protección de datos personales** (Ley Estatutaria 1581 de 2012, reglamentada por el Decreto 1377 de 2013 y el Decreto 1074 de 2015) y, al ofrecer servicios por medios electrónicos, a las obligaciones del **Estatuto del Consumidor** (Ley 1480 de 2011, art. 50).

La autoridad de control es la **Superintendencia de Industria y Comercio (SIC)**. Las sanciones de la Ley 1581 incluyen **multas hasta de 2.000 SMMLV**, censuras y medidas correctivas; las del Estatuto del Consumidor incluyen multas y el cierre del establecimiento. Más allá de la multa, la consecuencia práctica más común es la **mala reputación** y la imposibilidad de operar sin cumplimiento cuando se buscan clientes corporativos serios.

---

## 2. Aplicabilidad al sitio de StarkCore

| Norma | ¿Aplica? | Por qué |
|---|---|---|
| Ley 1581 de 2012 (datos personales) | **Sí** | El formulario de contacto recolecta datos personales (nombre, email, empresa) que se almacenan y tratan |
| Registro Nacional de Bases de Datos (RNBD) | **Probablemente no** (verificar) | Solo es obligatorio para personas jurídicas con activos ≥ 100.000 UVT (Res. SIC 56579 de 2025). Una SAS de dos socios muy probablemente no llega ahí; se revisa al crecer |
| Ley 1480 de 2011 (consumidor, art. 50) | **Sí (mínimo razonable)** | Se ofrecen servicios mediante medios electrónicos a consumidores/empresas en Colombia; la SIC exige información clara del proveedor y mecanismos de reclamo |
| Ley 23 de 1982 (derechos de autor) | **Sí** | Textos, imágenes y código del sitio son obras protegidas; hay que reservar derechos y respetar terceros |
| GDPR / normativa de la UE | No (por ahora) | Solo si se trata datos de personas en la UE o se apunta ese mercado |
| Régimen de hábeas data (Ley 1266) | No | Aplica a operadores de información en relaciones de consumo masivo / banca; el sitio no es operador de información |

---

## 3. Protección de datos personales (Ley 1581)

### 3.1 Qué datos trata el sitio

El formulario de contacto del MVP recolecta: **nombre, empresa (opcional), email y mensaje**. Son **datos personales privados** (no sensibles). No se recolectan datos sensibles (salud, biometría, etc.), ni de menores, ni datos de pago.

**Principio de minimización** (`plan-sitio.md` §2.3): solo campos necesarios; nada de cédula, teléfono obligatorio ni datos de más.

### 3.2 Documentos legales obligatorios

| Documento | Ruta | Contenido mínimo |
|---|---|---|
| **Política de tratamiento de datos personales** | `/privacidad` | Finalidades del tratamiento, derechos del titular (conocer, actualizar, rectificar, suprimir, presentar queja ante la SIC), procedimiento de consultas y reclamos (plazos: respuesta a consultas en 15 días hábiles; reclamos según la ley), datos del responsable, transferencias internacionales si las hubiera, mecanismos de revocación |
| **Aviso de privacidad (versión corta)** | Junto al formulario | Referencia a la política completa, finalidad (responder la solicitud), carácter voluntario y derecho a revocar |
| **Aviso legal / información del proveedor** | `/aviso-legal` | Razón social, NIT, domicilio (Barranquilla), correo de contacto, responsable del sitio |

### 3.3 Consentimiento en el formulario

1. **Checkbox obligatorio, no pre-marcado**: "He leído y acepto la Política de Privacidad y autorizo el tratamiento de mis datos para ser contactado(a)". Con enlace visible a `/privacidad`.
2. El checkbox es **requisito para enviar** (igual que en el registro obsoleto de `stitch/README.md`, ahora reaprovechado como patrón de UX).
3. El consentimiento queda registrado (p. ej. se guarda la marca de aceptación y la fecha junto al mensaje recibido).
4. En el correo de confirmación/derivación al equipo, no se publica el mensaje del titular en ningún lugar público.

### 3.4 Deberes del responsable (checklist operativo)

- [ ] Adoptar un **manual interno de políticas y procedimientos** para la protección de datos (requisito de la Ley 1581; para una SAS pequeña puede ser un documento breve firmado por los socios — lo prepara el abogado).
- [ ] Atender consultas y reclamos de titulares dentro de los plazos legales (canal: email publicado en `/privacidad`).
- [ ] No tratar los datos para finalidades distintas a las informadas (p. ej. no usar el email del formulario para spam masivo sin autorización).
- [ ] Bloquear/suprimir datos cuando el titular lo solicite o cuando ya no sean necesarios (retención: definir plazo, sugerido 24 meses desde el último contacto comercial, salvo relación contractual vigente).
- [ ] Si algún proveedor (Brevo para email transaccional, Vercel para hosting) trata datos en nuestro nombre, dejar por escrito su rol de **encargado** y exigirle medidas de seguridad (`plan-seguridad.md` §7). **Brevo** es el único que recibe datos personales del formulario (nombre, email, mensaje) para derivarlos al correo del equipo.
- [ ] Evaluar anualmente si se supera el umbral del RNBD (100.000 UVT en activos) — si se supera, inscribir la base de datos ante la SIC.

### 3.5 Analítica y cookies — resuelto

**Decisión (2026-10-08): Vercel Web Analytics** (incluida en plan Hobby). No usa cookies, no recoge datos personales, solo métricas agregadas de visitas/páginas.

**Consecuencia legal: NO se requiere banner de consentimiento de cookies y NO se requiere página `/cookies` por analítica.** El sitio queda sin cookies no esenciales en el MVP.

Si en el futuro se incorpora **Google Analytics 4** u otra herramienta con cookies: se activa el procedimiento de banner de consentimiento previo (bloquear tag hasta aceptar), política de cookies en `/cookies`, y permitir rechazar sin penalizar la navegación. Las referencias tipo instaleap.io lo hacen con "Manage Consent".

---

## 4. Estatuto del Consumidor en comercio electrónico (Ley 1480, art. 50)

Aunque el público es B2B, la SIC aplica el art. 50 a quien ofrezca productos/servicios por medios electrónicos en Colombia. Obligaciones mínimas para el sitio:

1. **Información clara y veraz** del proveedor: razón social, NIT, dirección, teléfono/correo (se cumple en el footer + `/aviso-legal`).
2. **Enlace visible a la página de la autoridad de protección al consumidor**: en el footer, enlace a `www.sic.gov.co` (sección Protección al Consumidor), tal como lo exige el art. 50.
3. **Publicidad veraz**: sin promesas inventadas, sin métricas falsas, sin "resultados garantizados" (coherente con el pilar de honestidad técnica de `design.md` §1.4 y la regla 5 de `reglas.md` §5).
4. **Mecanismo de atención al cliente** para consultas, quejas y reclamos: email público con compromiso de respuesta.
5. Si en el futuro se publican **precios**, deben incluir IVA y condiciones; hoy los servicios se cotizan, se debe decir "cotización personalizada" sin generar expectativa de precio fijo.
6. Si algún día se habilita **contratación electrónica** (firmar y pagar en línea), aplica la Ley 527 de 1999 y se requiere un diseño de flujo de contrato electrónico revisado por abogado — **fuera del MVP**.

---

## 5. Propiedad intelectual y marca

| Acción | Estado | Recomendación |
|---|---|---|
| **Registro de marca** "StarkCore Solutions" (+ el símbolo) ante la SIC | No verificado | **Recomendado fuertemente** antes de publicar: es barato comparado con un litigio por nombre; clases típicas: 42 (servicios de software) y 9/35 según alcance. Lo inicia el dueño con abogado de PI |
| **Derechos de autor** del contenido del sitio | Automático (Ley 23 de 1982) | Pie de página: "© 2026 StarkCore Solutions. Todos los derechos reservados." No requiere registro para existir, pero ayuda la declaración |
| **Logo** | ✅ Nuevo logo adoptado (2026-10-08) | `design.md` §2.5-G: se usa `stitch/logo-sitioweb.png` / `stitch/code.html` sin modificar. Evitar cualquier imagen de stock sin licencia |
| **Fuentes** (DM Sans, Roboto Mono) | Google Fonts (licencia Apache 2.0 / OFL) | Uso permitido; no hay obligación de atribución, pero se documenta en `docs/` |
| **Iconos** (lucide-react) | ISC | Uso permitido |
| **Contenido de terceros** (fotos, textos, testimonios) | Prohibido sin licencia | Cero copias de la web de competidores (`prohibiciones.md` §2.9 aplica también al copy) |

**Regla dura:** todo texto, imagen o demo publicado en el sitio debe ser de StarkCore o tener licencia documentada. Un testimonio o caso de éxito solo se publica con **autorización escrita del cliente** (además de ser real).

---

## 6. Avisos y elementos legales obligatorios en el sitio

Checklist de presencia en la web (footer + páginas):

- [ ] **© 2026 StarkCore Solutions. Todos los derechos reservados.** (footer)
- [ ] Enlace a **Política de privacidad** (`/privacidad`)
- [ ] Enlace a **Términos de uso** (puede vivir en `/aviso-legal`)
- ~~[ ] Enlace a **Política de cookies**~~ — **No aplica en el MVP**: Vercel Web Analytics no usa cookies. Se requiere solo si se incorporan cookies no esenciales en el futuro
- [ ] Enlace a **www.sic.gov.co** como autoridad de protección al consumidor (art. 50 Ley 1480)
- [ ] **Identificación del proveedor**: razón social, NIT, domicilio, email (footer o `/aviso-legal`)
- [ ] **Checkbox de consentimiento** en el formulario con enlace a la política
- [ ] Si se usa WhatsApp como canal: aclarar que es un canal de terceros (Meta) y aplican sus términos

---

## 7. Checklist de publicación legal (go/no-go)

La web **no se pone en producción** hasta cumplir todo esto:

- [ ] `/privacidad` publicada (política de tratamiento redactada para StarkCore)
- [ ] `/aviso-legal` publicada (proveedor + términos de uso + derechos de autor)
- [x] ~~`/cookies` publicada~~ — ✅ **Resuelto (2026-10-08)**: analítica sin cookies (Vercel Web Analytics) → no aplica
- [ ] Checkbox de privacidad en el formulario, obligatorio y no pre-marcado
- [ ] Enlace a la SIC en el footer
- [ ] Pie de copyright en el footer
- [ ] Email de contacto funcional para consultas/reclamos de titulares
- [ ] Manual interno de políticas (doc interno, no público) firmado por los socios
- [ ] Textos legales **revisados por abogado**
- [ ] (Post-lanzamiento) Registro de marca iniciado ante la SIC

---

## 8. Plan de mantenimiento legal

| Frecuencia | Acción |
|---|---|
| Al cambiar el formulario o añadir campos | Revisar si sigue siendo minimización y actualizar el aviso de privacidad |
| Al añadir proveedor que trate datos (Brevo, Vercel, futuros) | Evaluar encargado, actualizaciones a la política, transferencias internacionales |
| Anual | Revisar vigencia normativa (hay un **proyecto de reforma a la Ley 1581** en trámite, P.L. Estatutaria 214/2025C — si se sanciona, ajustar documentos) y vigencia de textos |
| Al superar 100.000 UVT en activos | Inscribir base de datos en el RNBD de la SIC |
| Ante solicitud de titular | Responder en plazo legal; documentar la gestión |

---

*Documento vivo: los cambios se aprueban aquí primero y se implementan después. Los textos legales publicados derivan de este plan y de la revisión del abogado.*
