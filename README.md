# PABS Afiliación

## Homepage interactiva para captación y orientación de prospectos

Proyecto web diseñado para crear una **homepage de afiliación PABS**, enfocada en orientar al visitante, resolver dudas y facilitar el inicio de su proceso de afiliación.

El proyecto será desarrollado progresivamente, incorporando un **asistente virtual inteligente**, formulario de afiliación, cálculo automático de aportaciones y sistema de registro de prospectos.

---

## Objetivo

Crear una plataforma web que permita que una persona:

1. Conozca PABS.
2. Resuelva sus dudas mediante un asistente virtual.
3. Conozca las alternativas de aportación.
4. Inicie su proceso de afiliación.
5. Registre sus datos.
6. Revise la información capturada.
7. Confirme su solicitud.
8. Genere un registro para seguimiento comercial.
9. Pueda contactar directamente por WhatsApp al asesor.

El objetivo principal de la página es:

> **CONVERTIR VISITANTES EN PROSPECTOS DE AFILIACIÓN.**

---

# Características

## Homepage

La página contará con:

* Diseño profesional y responsive.
* Adaptación para computadora, tablet y teléfono.
* Identidad visual inspirada en la comunicación digital de PABS.
* Sección principal de afiliación.
* Beneficios.
* Explicación del proceso.
* Preguntas frecuentes.
* Llamados a la acción.
* Contacto directo por WhatsApp.
* Asistente virtual interactivo.

---

# Asistente Virtual

El asistente virtual será uno de los componentes principales del proyecto.

Su función será orientar al visitante antes y durante el proceso de afiliación.

### Funciones previstas

El visitante podrá preguntar sobre:

* ¿Qué es PABS?
* ¿Cómo funciona?
* ¿Cómo puedo afiliarme?
* Beneficios.
* Aportaciones.
* Frecuencias de pago.
* Requisitos.
* Proceso de afiliación.
* Dudas generales.
* Trámites.
* Orientación comercial.
* Contacto con un asesor.

El asistente se desarrollará inicialmente mediante JavaScript y posteriormente podrá conectarse a un sistema de inteligencia artificial y una base de conocimiento específica.

---

# Base de conocimiento del asistente

El asistente será desarrollado para utilizar información autorizada y validada.

La intención es que pueda proporcionar orientación basada en:

* Información oficial de PABS.
* Preguntas frecuentes.
* Procedimientos.
* Beneficios.
* Información comercial autorizada.
* Preguntas frecuentes de prospectos.
* Objeciones comerciales.
* Información proporcionada por el asesor.
* Procesos de afiliación.
* Información de aportaciones.

El asistente **no deberá inventar beneficios, precios, requisitos, condiciones contractuales ni procedimientos**.

Cuando una pregunta requiera intervención humana, deberá orientar al visitante hacia un asesor.

---

# Formulario de Afiliación

El formulario recopilará inicialmente los siguientes datos:

### Datos personales

* Nombre completo.
* Fecha de nacimiento.
* Lugar de nacimiento.
* Teléfono de contacto / WhatsApp.

### Datos de afiliación

* Cantidad de inversión inicial.
* Frecuencia de aportación.
* Aportación correspondiente.

---

# Aportaciones automáticas

La frecuencia seleccionada determinará automáticamente la aportación mostrada.

| Frecuencia | Aportación |
| ---------- | ---------: |
| Semanal    |   $150 MXN |
| Quincenal  |   $300 MXN |
| Mensual    |   $600 MXN |

El usuario no tendrá que escribir manualmente la cantidad correspondiente.

Ejemplo:

```text
Frecuencia seleccionada:
Quincenal

Aportación:
$300 MXN
```

---

# Flujo de afiliación

El proceso previsto será:

```text
Visitante
    │
    ▼
Homepage
    │
    ▼
Asistente Virtual
    │
    ▼
Información / Preguntas
    │
    ▼
QUIERO AFILIARME
    │
    ▼
Formulario
    │
    ├── Nombre completo
    ├── Fecha de nacimiento
    ├── Lugar de nacimiento
    ├── WhatsApp
    ├── Inversión inicial
    └── Frecuencia
            │
            ▼
    Aportación automática
            │
            ▼
      Resumen de datos
            │
            ▼
       Confirmación
            │
            ▼
       Registro
            │
            ▼
     Seguimiento comercial
```

---

# Almacenamiento de información

La información capturada será enviada posteriormente a una infraestructura basada en Google.

Arquitectura prevista:

```text
Homepage
    │
    ▼
Google Apps Script
    │
    ├── Google Sheets
    │
    ├── Google Drive
    │
    └── Correo electrónico
```

Correo destinado para las notificaciones y respaldo:

```text
pabsindustrialtecate@gmail.com
```

La integración será implementada posteriormente.

---

# Folio de prospecto

El sistema podrá generar un folio único para cada registro.

Ejemplo:

```text
PABS-TKT-20260818-001
```

El folio permitirá identificar y dar seguimiento a cada prospecto.

---

# Contacto comercial

## Asesor Ejecutivo Comercial

**Sergio Estrada**

WhatsApp:

```text
664 160 1608
```

El sitio contará con botones de contacto directo mediante WhatsApp.

---

# Tecnologías

La primera versión utilizará:

* HTML5
* CSS3
* JavaScript
* GitHub
* GitHub Pages

Posteriormente se podrán integrar:

* Google Apps Script
* Google Sheets
* Google Drive
* API de inteligencia artificial
* Base de conocimiento
* Sistema de seguimiento de prospectos
* Analytics
* SEO
* Dominio personalizado

---

# Estructura del proyecto

```text
pabs-afiliacion/
│
├── index.html
│
├── style.css
│
├── script.js
│
├── README.md
│
└── assets/
    │
    ├── images/
    ├── logos/
    └── icons/
```

---

# Desarrollo por fases

## FASE 1 — Homepage

* [x] Estructura HTML.
* [x] Header.
* [x] Hero.
* [x] Beneficios.
* [x] Proceso.
* [x] Preguntas frecuentes.
* [x] Footer.
* [x] Diseño responsive.
* [x] Asistente visual inicial.

---

## FASE 2 — Formulario de afiliación

* [ ] Nombre completo.
* [ ] Fecha de nacimiento.
* [ ] Lugar de nacimiento.
* [ ] WhatsApp.
* [ ] Inversión inicial.
* [ ] Selector de frecuencia.
* [ ] Cálculo automático de aportación.
* [ ] Validación de campos.
* [ ] Resumen de solicitud.
* [ ] Confirmación.

---

## FASE 3 — Registro de prospectos

* [ ] Google Sheets.
* [ ] Google Apps Script.
* [ ] Registro automático.
* [ ] Fecha y hora.
* [ ] Folio único.
* [ ] Respaldo en Google Drive.
* [ ] Notificación por correo.

---

## FASE 4 — Asistente IA

* [ ] Base de conocimiento.
* [ ] Preguntas frecuentes.
* [ ] Respuestas comerciales.
* [ ] Orientación sobre afiliación.
* [ ] Manejo de objeciones.
* [ ] Identificación de intención.
* [ ] Derivación a asesor.
* [ ] Integración con IA.

---

## FASE 5 — Conversión comercial

* [ ] WhatsApp automático.
* [ ] Mensaje personalizado.
* [ ] Confirmación de prospecto.
* [ ] Seguimiento.
* [ ] Identificación de prospectos calientes.
* [ ] Registro de fuente del prospecto.
* [ ] Métricas de conversión.

---

# Seguridad

Los datos personales deberán manejarse de forma responsable.

Nunca se deberán colocar directamente en el código público de GitHub:

* Contraseñas.
* Tokens.
* API Keys.
* Credenciales de Google.
* Claves privadas.
* Credenciales del sistema de IA.

Las credenciales deberán permanecer en el entorno correspondiente del backend o servicio utilizado.

---

# Aviso de privacidad

Antes de poner el formulario en producción deberá incorporarse un mecanismo adecuado de aviso de privacidad y consentimiento para el tratamiento de datos personales.

El formulario deberá permitir que el visitante conozca cómo serán utilizados sus datos antes de enviarlos.

---

# GitHub Pages

El proyecto podrá publicarse mediante GitHub Pages.

Configuración prevista:

```text
Repository:
pabs-afiliacion

Branch:
main

Folder:
/root
```

Una vez activado GitHub Pages, la página podrá consultarse desde una dirección similar a:

```text
https://USUARIO.github.io/pabs-afiliacion/
```

Posteriormente podrá conectarse un dominio personalizado.

---

# Principio de desarrollo

El proyecto será desarrollado **módulo por módulo**.

No se incorporarán todas las funciones simultáneamente.

Cada módulo deberá:

1. Ser desarrollado.
2. Probarse.
3. Corregirse.
4. Validarse.
5. Integrarse con el siguiente módulo.

Esto permitirá mantener el proyecto estable y evitar errores durante la implementación.

---

# Próximo módulo

El siguiente componente a desarrollar es:

## FORMULARIO INTERACTIVO DE AFILIACIÓN

Con:

```text
Nombre completo
        ↓
Fecha de nacimiento
        ↓
Lugar de nacimiento
        ↓
WhatsApp
        ↓
Inversión inicial
        ↓
Frecuencia
        ↓
Aportación automática
        ↓
Resumen
        ↓
Confirmar
```

Una vez terminado y probado el formulario, se conectará con **Google Sheets / Google Drive mediante Google Apps Script** para comenzar la captura real de prospectos.

---

## Estado actual

**Proyecto:** PABS Afiliación

**Versión:** 0.1

**Estado:** Desarrollo inicial

**Objetivo:** Captación y orientación de prospectos para afiliación.

**Próximo objetivo:** Formulario interactivo de afiliación.

---

## Responsable comercial

**Sergio Estrada**
Asesor Ejecutivo Comercial PABS
Tecate, Baja California

**WhatsApp:** 664 160 1608
