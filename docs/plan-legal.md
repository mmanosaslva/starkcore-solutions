# StarkCore Solutions — Plan de Seguridad Legal del Sitio Web

> **Versión** 0.3 · **Estado**: aprobado por el dueño del proyecto (2026-10-08), pendiente de **revisión por un abogado** antes de publicar.
> Contexto: sitio corporativo B2B de marketing en Colombia, sin login ni usuarios (`plan-sitio.md` §1). Stack: Vercel + Brevo + Vercel Web Analytics + Cloudflare Turnstile (antispam).
> ⚠️ **Descargo**: este documento es un plan de cumplimiento basado en la normativa colombiana vigente consultada (Ley 1581 de 2012 y reglamentos, Ley 1480 de 2011, Ley 23 de 1982). **No es asesoría jurídica**: los textos legales finales deben ser revisados/firmados por un abogado antes de la publicación.
> **Cambios v0.3** (revisión 2026-10-08): responsable del tratamiento definido (§2.1), plazos legales corregidos (§3.2), prueba de autorización (§3.3), encargados y transmisión internacional (§3.4), finalidades y canales (§3.6), titularidad de derechos (§5), incidentes (§9), pendientes (§10).

---

## 1. Por qué importa (riesgo económico y judicial)

Un sitio web con formulario de contacto que recolecta datos personales (nombre, email, empresa) **está sujeto al régimen colombiano de protección de datos personales** (Ley Estatutaria 1581 de 2012, reglamentada por el Decreto 1377 de 2013, hoy compilado en el Decreto 1074 de 2015) y, al ofrecer servicios por medios electrónicos, a las obligaciones del **Estatuto del Consumidor** (Ley 1480 de 2011, art. 50).

La autoridad de control es la **Superintendencia de Industria y Comercio (SIC)**. Las sanciones de la Ley 1581 incluyen **multas hasta de 2.000 SMMLV**, censuras y medidas correctivas; las del Estatuto del Consumidor incluyen multas y el cierre del establecimiento. Más allá de la multa, la consecuencia práctica más común es la **mala reputación** y la imposibilidad de operar sin cumplimiento cuando se buscan clientes corporativos serios.

---

## 2. Aplicabilidad al sitio de StarkCore

| Norma | ¿Aplica? | Por qué |
|---|---|---|
| Ley 1581 de 2012 (datos personales) | **Sí** | El formulario de contacto recolecta datos personales (nombre, email, empresa) que se almacenan y tratan. Aplica igual a personas naturales que a empresas |
| Registro Nacional de Bases de Datos (RNBD) | **No, hoy** | La obligación recae en personas jurídicas privadas con activos totales > 100.000 UVT (Decreto 090 de 2018, compilado en el Decreto 1074 de 2015) y entidades públicas. Hoy los responsables son personas naturales (§2.1). Se revisa al constituir la sociedad y al crecer. *Confirmar con el abogado la vigencia de la Res. SIC 56579 de 2025 citada en v0.2* |
| Ley 1480 de 2011 (consumidor, art. 50) | **Sí (mínimo razonable)** | Se ofrecen servicios mediante medios electrónicos en Colombia; la SIC exige información clara del proveedor y mecanismos de reclamo |
| Ley 23 de 1982 (derechos de autor) | **Sí** | Textos, imágenes y código del sitio son obras protegidas; hay que reservar derechos, definir titularidad (§5) y respetar terceros |
| GDPR / normativa de la UE | No (por ahora) | Solo si se trata datos de personas en la UE o se apunta ese mercado |
| Régimen de hábeas data (Ley 1266) | No | Aplica a operadores de información financiera/crediticia; el sitio no es operador de información |

### 2.1 Responsable del tratamiento (decisión 2026-10-08)

StarkCore Solutions **no está constituida** como sociedad: no tiene razón social ni NIT. Es un emprendimiento de **dos socios personas naturales** que usa "StarkCore Solutions" como **nombre comercial**.

| Tema | Resolución |
|---|---|
| ¿Quién es el Responsable del tratamiento? | **Los dos socios, como personas naturales** (corresponsables), identificados por nombre completo |
| Qué se publica en `/aviso-legal` y `/privacidad` | Nombres completos de los socios, "StarkCore Solutions" como nombre comercial, ciudad (Barranquilla), dirección para notificaciones, correo y teléfono/WhatsApp de contacto. **No se publican números de cédula** salvo que el abogado lo exija |
| RUT / registro mercantil | **A definir con el abogado**: si la oferta de servicios es habitual, los socios pueden requerir RUT y/o matrícula mercantil como personas naturales. Se registra la decisión aquí |
| Al constituir la sociedad (SAS) | 1) actualizar `/aviso-legal` y `/privacidad` con razón social, NIT y dirección de notificación judicial; 2) informar a los titulares existentes del cambio de Responsable (o solicitar nueva autorización si el abogado lo indica); 3) ceder a la SAS los derechos patrimoniales del sitio y del logo (§5); 4) revisar el umbral RNBD |

---

## 3. Protección de datos personales (Ley 1581)

### 3.1 Qué datos trata el sitio

El formulario de contacto del MVP recolecta: **nombre, empresa (opcional), email y mensaje**. Son **datos personales privados** (no sensibles). No se recolectan datos sensibles (salud, biometría, etc.), ni de menores, ni datos de pago. Como efecto técnico del hosting, Vercel registra la **dirección IP** en sus logs de solicitudes.

**Principio de minimización** (`plan-sitio.md` §2.3): solo campos necesarios; nada de cédula, teléfono obligatorio ni datos de más.

### 3.2 Documentos legales obligatorios

| Documento | Ruta | Contenido mínimo |
|---|---|---|
| **Política de tratamiento de datos personales** (Decreto 1377 art. 13) | `/privacidad` | 1) Nombre de los Responsables (§2.1), nombre comercial, domicilio, dirección, correo y teléfono. 2) Tratamiento y **finalidades** (§3.6). 3) Derechos del titular: conocer, actualizar, rectificar, suprimir, revocar la autorización, solicitar prueba de la autorización, ser informado del uso, presentar quejas ante la SIC. 4) **Persona/área responsable** de atender consultas y reclamos (nombre de uno de los socios + correo). 5) Procedimiento con **plazos legales**: **consultas: 10 días hábiles**, prorrogables hasta 5 más informando el motivo (Ley 1581 art. 14); **reclamos: 15 días hábiles**, prorrogables hasta 8 más; reclamo incompleto: se pide completarlo en 5 días y, si pasan 2 meses sin respuesta, se entiende desistido; leyenda "reclamo en trámite" dentro de los 2 días hábiles siguientes a recibirlo completo (art. 15). 6) Encargados y **transmisión internacional** (§3.4). 7) **Fecha de entrada en vigencia** de la política y **período de vigencia de la base de datos** (= plazo de retención, §3.4) |
| **Aviso de privacidad (versión corta)** (Decreto 1377 art. 15) | Junto al formulario | Identificación y contacto de los Responsables, finalidad del tratamiento, derechos del titular, carácter voluntario, cómo revocar y **enlace a la política completa** |
| **Aviso legal / información del proveedor** | `/aviso-legal` | Responsables (§2.1), nombre comercial, domicilio (Barranquilla), **dirección para notificaciones**, **teléfono**, correo de contacto, términos de uso, derechos de autor |

### 3.3 Consentimiento en el formulario

1. **Checkbox obligatorio, no pre-marcado**: "He leído y acepto la Política de Privacidad y autorizo el tratamiento de mis datos para ser contactado(a)". Con enlace visible a `/privacidad`.
2. El checkbox es **requisito para enviar**: se valida en cliente y en servidor (`plan-seguridad.md` §4.7).
3. **Prueba de la autorización** (Ley 1581 art. 17 lit. b; Decreto 1377 art. 8). Como no hay base de datos, la prueba es el **correo que recibe el equipo**, que siempre incluye, en un bloque fijo generado por el servidor:
   - `consentimiento: true`
   - fecha y hora del envío (UTC)
   - versión de la política aceptada (fecha de vigencia) y URL de `/privacidad`
   - texto exacto del checkbox aceptado

   Esos correos se archivan en una **carpeta/etiqueta dedicada** del buzón corporativo y se conservan durante el plazo de retención (§3.4). Cada vez que cambie la política, se actualiza su fecha de versión en el código.
4. El mensaje del titular no se publica en ningún lugar público. **No se envía acuse automático** con el contenido del mensaje al email del visitante (`plan-seguridad.md` §4.10).

### 3.4 Deberes del responsable (checklist operativo)

- [ ] Adoptar un **manual interno de políticas y procedimientos** para la protección de datos (Ley 1581 art. 17 lit. k). Para dos socios puede ser un documento breve firmado por ambos — lo prepara o revisa el abogado.
- [ ] Atender consultas y reclamos dentro de los **plazos de §3.2** (canal: email publicado en `/privacidad`). Registrar cada solicitud y su respuesta.
- [ ] No tratar los datos para finalidades distintas a las informadas (§3.6). Nada de envíos masivos ni boletines sin autorización específica.
- [ ] **Retención — decisión 2026-10-08: 24 meses** desde el último contacto comercial con el titular, salvo que exista una relación contractual (en ese caso se conserva mientras dure el contrato y el tiempo que la ley exija para sus soportes). Cumplido el plazo, o cuando el titular pida supresión:
  1. borrar el hilo del buzón corporativo (incluida la papelera);
  2. borrar el contacto/log en Brevo (Transactional → Logs / Contacts) si existe;
  3. los logs de Vercel expiran solos según el plan (no se exportan);
  4. dejar constancia de la supresión (fecha, solicitud).
  Revisión de vencimientos: **trimestral**.
- [ ] **Encargados del tratamiento**: tratan datos en nuestro nombre y deben constar por escrito (contrato de transmisión, Decreto 1377 art. 25), lo que se cumple aceptando su DPA / acuerdo de tratamiento de datos:

  | Encargado | Qué datos | País | Documento |
  |---|---|---|---|
  | **Vercel** (hosting, funciones del formulario, analítica) | Contenido del formulario en tránsito, IP en logs | EE. UU. | DPA de Vercel |
  | **Brevo** (envío del correo) | Nombre, email, mensaje (logs transaccionales) | Francia (UE) | DPA de Brevo |
  | **Google (Gmail de la empresa)**, buzón corporativo (`plan-sitio.md` decisión #8) | Todo el mensaje archivado + prueba de consentimiento | EE. UU. | Términos y Política de Privacidad de Google. **Ojo:** la cuenta Gmail gratuita **no ofrece DPA** (solo Google Workspace lo tiene). Que el abogado confirme si basta con declararlo en la política o si conviene pasar a Workspace al formalizar la empresa |
  | **Cloudflare Turnstile** (antispam) | IP y señales técnicas del navegador | EE. UU. | DPA de Cloudflare |

  Los dos países están en la lista de **países con nivel adecuado** de la SIC (Circular Externa 005 de 2017). La transmisión internacional se declara en la política. Las medidas de seguridad exigidas a los encargados se describen en `plan-seguridad.md` §5.
- [ ] Al constituir la sociedad, ejecutar los pasos de §2.1 y evaluar el umbral del RNBD.

### 3.5 Analítica y cookies — resuelto

**Decisión (2026-10-08): Vercel Web Analytics** (incluida en plan Hobby). No usa cookies y no guarda datos personales identificables: solo métricas agregadas de visitas y páginas.

**Consecuencia legal: NO se requiere banner de consentimiento de cookies y NO se requiere página `/cookies` por analítica.** El sitio queda sin cookies no esenciales en el MVP.

Cloudflare Turnstile (antispam) se considera **estrictamente necesario** para la seguridad del formulario y no se usa para seguimiento; se declara en la política. **reCAPTCHA queda descartado** porque usa cookies de Google y obligaría a poner banner.

Si en el futuro se incorpora **Google Analytics 4**, Calendly embebido u otra herramienta con cookies: se activa el procedimiento de banner de consentimiento previo (bloquear la herramienta hasta aceptar), política de cookies en `/cookies` y opción de rechazar sin penalizar la navegación. Las referencias tipo instaleap.io lo hacen con "Manage Consent".

### 3.6 Finalidades y canales

**Canales por los que entran datos personales** (todos cubiertos por la política):

| Canal | Datos | Nota |
|---|---|---|
| Formulario de `/contacto` y de la landing | Nombre, empresa, email, mensaje | Con checkbox y prueba de autorización (§3.3) |
| Email directo a `contacto.starkcore.solutions@gmail.com` (luego `hola@dominio`) | Lo que el titular escriba | La política se enlaza en la firma del correo |
| WhatsApp Business (+57 322 611 0864) | Nombre, número, mensaje | Canal de un tercero (Meta), sujeto a sus términos; se aclara en `/privacidad` y junto al botón. El **mensaje de bienvenida automático** incluye el enlace a `/privacidad` |

**Finalidades declaradas** (cerradas; agregar una requiere actualizar la política):

1. Responder la solicitud o consulta enviada.
2. Gestión comercial de esa solicitud: preparar y enviar cotizaciones o propuestas, y hacer seguimiento a la conversación iniciada por el titular.
3. Atender consultas y reclamos de protección de datos.

Fuera de estas finalidades, **no** se usan los datos (por ejemplo, para boletines o marketing masivo).

---

## 4. Estatuto del Consumidor en comercio electrónico (Ley 1480, art. 50)

Aunque el público es B2B, la SIC aplica el art. 50 a quien ofrezca productos/servicios por medios electrónicos en Colombia. Obligaciones mínimas para el sitio:

1. **Información clara y veraz** del proveedor: identificación de los responsables (§2.1; razón social y NIT cuando exista la sociedad), **dirección para notificaciones**, **teléfono** y correo (footer + `/aviso-legal`).
2. **Enlace visible a la página de la autoridad de protección al consumidor**: en el footer, enlace a `www.sic.gov.co` (sección Protección al Consumidor), tal como lo exige el art. 50.
3. **Publicidad veraz**: sin promesas inventadas, sin métricas falsas, sin "resultados garantizados" (coherente con el pilar de honestidad técnica de `design.md` §1.4 y la regla 5 de `reglas.md` §5).
4. **Mecanismo de atención al cliente** para consultas, quejas y reclamos: email público con compromiso de respuesta.
5. Si en el futuro se publican **precios**, deben incluir IVA y condiciones; hoy los servicios se cotizan, se debe decir "cotización personalizada" sin generar expectativa de precio fijo.
6. Si algún día se habilita **contratación electrónica** (firmar y pagar en línea), aplica la Ley 527 de 1999 y se requiere un diseño de flujo de contrato electrónico revisado por abogado — **fuera del MVP**.

---

## 5. Propiedad intelectual y marca

| Acción | Estado | Recomendación |
|---|---|---|
| **Registro de marca** "StarkCore Solutions" (+ el símbolo) ante la SIC | No verificado | **Recomendado fuertemente** antes de publicar: es barato comparado con un litigio por nombre; clases típicas: 42 (servicios de software) y 9/35 según alcance. Puede solicitarse a nombre de los socios y cederse luego a la sociedad. Lo inicia el dueño con abogado de PI |
| **Titularidad de los derechos** del sitio (código, textos) y del logo | Pendiente | Hoy los derechos son de los socios que crean cada obra. Firmar un **acuerdo escrito entre socios** sobre la titularidad compartida y, al constituir la sociedad, una **cesión escrita de derechos patrimoniales** a la SAS (Ley 23 de 1982, art. 183) |
| **Derechos de autor** del contenido del sitio | Automático (Ley 23 de 1982) | Pie de página: "© 2026 StarkCore Solutions. Todos los derechos reservados." No requiere registro para existir, pero ayuda la declaración |
| **Logo** | ✅ Nuevo logo adoptado (2026-10-08) | `design.md` §2.5-G: se usa `stitch/logo-sitioweb.png` / `stitch/code.html` sin modificar (variantes solo según §2.5-H). **Fue generado con apoyo de una herramienta de IA (Stitch)**: la protección por derecho de autor de obras generadas por IA es dudosa en Colombia, por lo que el **registro de marca** es su protección principal. Evitar cualquier imagen de stock sin licencia |
| **Fuentes** (DM Sans, Roboto Mono) | Google Fonts (licencia OFL / Apache 2.0) | Uso permitido; no hay obligación de atribución, pero se documenta en `docs/` |
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
- [ ] **Identificación del proveedor**: responsables (§2.1), nombre comercial, dirección para notificaciones, teléfono, email (footer o `/aviso-legal`)
- [ ] **Checkbox de consentimiento** + aviso de privacidad corto junto al formulario
- [ ] Junto al botón de WhatsApp: aclarar que es un canal de terceros (Meta) y aplican sus términos

---

## 7. Checklist de publicación legal (go/no-go)

La web **no se pone en producción** hasta cumplir todo esto:

- [ ] Responsables del tratamiento identificados en los textos (§2.1) y decisión sobre RUT/registro tomada con el abogado
- [ ] `/privacidad` publicada con **todo** el contenido mínimo de §3.2 (incluidos plazos de 10/15 días hábiles, área responsable, fecha de vigencia)
- [ ] `/aviso-legal` publicada (proveedor + términos de uso + derechos de autor)
- [x] ~~`/cookies` publicada~~ — ✅ **Resuelto (2026-10-08)**: analítica sin cookies (Vercel Web Analytics) → no aplica
- [ ] Checkbox de privacidad en el formulario, obligatorio, no pre-marcado y verificado en servidor
- [ ] **Prueba de autorización**: un envío de prueba llega al buzón con el bloque de consentimiento de §3.3.3 y queda archivado en la carpeta dedicada
- [ ] DPA aceptados de Vercel, Brevo y Cloudflare; situación de Gmail (sin DPA) revisada por el abogado (§3.4)
- [ ] Enlace a la SIC en el footer
- [ ] Pie de copyright en el footer
- [ ] Email de contacto funcional para consultas/reclamos de titulares
- [ ] Manual interno de políticas (doc interno, no público) firmado por los socios
- [ ] Acuerdo de titularidad de derechos entre socios firmado (§5)
- [ ] Textos legales **revisados por abogado**
- [ ] (Post-lanzamiento) Registro de marca iniciado ante la SIC

---

## 8. Plan de mantenimiento legal

| Frecuencia | Acción |
|---|---|
| Al cambiar el formulario o añadir campos | Revisar si sigue siendo minimización; actualizar aviso de privacidad, política y su fecha de versión (§3.3.3) |
| Al añadir proveedor que trate datos | Evaluar si es encargado, aceptar su DPA, actualizar la tabla de §3.4 y la política (transmisión internacional) |
| Al constituir la sociedad | Ejecutar los pasos de §2.1 |
| Trimestral | Revisar vencimientos de retención (§3.4) y borrar lo vencido |
| Anual | Revisar vigencia normativa (hay un **proyecto de reforma a la Ley 1581** en trámite, P.L. Estatutaria 214/2025C — si se sanciona, ajustar documentos) y vigencia de textos |
| Al superar 100.000 UVT en activos (como sociedad) | Inscribir base de datos en el RNBD de la SIC |
| Ante solicitud de titular | Responder en los plazos de §3.2; documentar la gestión |

---

## 9. Incidentes de seguridad con datos personales

Deber legal: informar a la SIC cuando se presenten violaciones a los códigos de seguridad y existan riesgos en la administración de la información de los titulares (Ley 1581 art. 17 lit. n). Procedimiento (complementa `plan-seguridad.md` §9):

1. **Contener**: ejecutar el plan técnico de `plan-seguridad.md` §9 (rotar secretos, revertir, revisar accesos).
2. **Evaluar** (ambos socios, en máximo 48 h): ¿se expusieron datos de titulares (buzón, cuenta de Brevo, logs)? ¿cuántos y cuáles?
3. **Reportar a la SIC** si hubo riesgo para los datos: por el canal que la SIC tenga habilitado para reporte de incidentes y en el plazo que fije (**confirmar canal y plazo con el abogado** y escribirlos aquí antes de publicar).
4. **Informar a los titulares afectados** cuando el riesgo lo amerite, por el mismo email que dejaron.
5. **Registrar** el incidente: fecha, qué pasó, datos afectados, acciones, reportes hechos.

---

## 10. Pendientes legales fuera del sitio

| Pendiente | Estado | Nota |
|---|---|---|
| **MSA (Master Services Agreement) + plantilla de SOW / orden de trabajo** | Pendiente — se hace **aparte** del sitio (decisión 2026-10-08) | Contrato marco para firmar con cada cliente (alcance, entregables, propiedad intelectual del software entregado, confidencialidad, acuerdo de tratamiento de datos cuando StarkCore sea encargado de datos del cliente, garantías, limitación de responsabilidad, pagos). No es una página del sitio; requiere revisión de abogado |

---

*Documento vivo: los cambios se aprueban aquí primero y se implementan después. Los textos legales publicados derivan de este plan y de la revisión del abogado.*
