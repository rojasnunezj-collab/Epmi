# EPMI S.A.C. - Landing Page Corporativa B2B

Landing Page estática oficial de **EPMI S.A.C.** (Empresa Operadora de Residuos Sólidos - EO-RS). Diseñada bajo estándares modernos de UX/UI para el sector B2B, optimizada para altas conversiones, 100% responsive, accesible y lista para ser alojada de forma gratuita en **GitHub Pages**.

Repositorio oficial: [https://github.com/rojasnunezj-collab/Epmi](https://github.com/rojasnunezj-collab/Epmi)

---

## 🚀 Características Principales

* **Enfoque B2B y Generación de Confianza**:
  * Destaca la condición de **EO-RS autorizada** por los organismos reguladores del Perú.
  * Respaldo institucional alineado a **MINAM, OEFA, MTC y Municipalidad de Lima**.
  * Sección exclusiva de **Entregables Oficiales** (Certificados EO-RS, Boletas de pesaje oficial, Manifiestos de residuos peligrosos y Actas notariales SUNAT para desmedros).
  * Cobertura multisectorial (Minería, Manufactura, Construcción, Salud y Retail).

* **Diseño y Experiencia de Usuario (UI/UX 2026)**:
  * Paleta cromática corporativa extraída del brochure comercial (Verde Bosque `#0f5132`, Verde Esmeralda `#10b981`, Acento Lima `#84cc16` y Slate industrial).
  * Tipografías de alta legibilidad: *Plus Jakarta Sans* para encabezados e *Inter* para lectura técnica.
  * Efectos y micro-animaciones sin penalización de rendimiento: efecto *shimmer* en botones de conversión, pulsación sutil en WhatsApp y animaciones al hacer scroll (*IntersectionObserver*).
  * Mobile-First con navegación fluida y drawer menú adaptable.

* **Formulario de Contacto Funcional (Sin Backend)**:
  * Integrado con **Formspree** mediante envío asíncrono (AJAX) para cotizaciones inmediatas sin recargar la página.
  * Campos diseñados para calificar prospectos B2B (Empresa, RUC, Tipo de residuo, Frecuencia estimada).
  * Botón flotante persistente de **WhatsApp** con mensaje preconfigurado directo al `+51 998 257 562`.

* **SEO y Rendimiento Óptimo**:
  * Metadatos completos (Title, Description, Keywords, OpenGraph para LinkedIn/Facebook).
  * Estructura semántica HTML5 (H1, H2, H3, section, header, nav, footer).
  * Código estático ultraligero que permite un score de 95-100 en Google Lighthouse.

---

## 📁 Estructura del Proyecto

```text
EPMI/
├── index.html              # Estructura semántica, contenidos del brochure y SEO
├── assets/
│   ├── css/
│   │   └── styles.css      # Estilos personalizados, keyframe animations y glassmorphism
│   └── js/
│       └── main.js         # Menú móvil, contadores animados y gestión AJAX del formulario
├── README.md               # Documentación y guía de despliegue
└── .gitignore              # Exclusiones de Git
```

---

## ⚙️ Pasos para Publicar en GitHub Pages

Dado que el proyecto es 100% estático (sin PHP ni bases de datos), la publicación en GitHub Pages se realiza en menos de 2 minutos:

1. **Subir los cambios al repositorio:**
   ```bash
   git init
   git add .
   git commit -m "feat: landing page corporativa EPMI SAC terminada"
   git branch -M main
   git remote add origin https://github.com/rojasnunezj-collab/Epmi.git
   git push -u origin main
   ```

2. **Activar GitHub Pages en el repositorio:**
   * Entra a [https://github.com/rojasnunezj-collab/Epmi](https://github.com/rojasnunezj-collab/Epmi).
   * Ve a la pestaña **Settings** (Configuración) > **Pages** (en el menú lateral izquierdo).
   * En la sección **Build and deployment**:
     * **Source**: `Deploy from a branch`
     * **Branch**: Selecciona `main` y en la carpeta elige `/ (root)`.
     * Haz clic en **Save**.
   * En unos segundos, tu sitio estará en vivo en:  
     `https://rojasnunezj-collab.github.io/Epmi/`

---

## ✉️ Configuración del Formulario (Formspree)

El formulario en `index.html` está configurado por defecto para funcionar con Formspree.

Para vincularlo a tu propia cuenta y recibir los correos directamente en `comercial@epmi.com.pe`:
1. Crea una cuenta gratuita en [formspree.io](https://formspree.io).
2. Crea un nuevo formulario ("New Form") y coloca como destinatario `comercial@epmi.com.pe` (y si deseas en copia `helver.pongo@epmi.com.pe`).
3. Copia el Endpoint proporcionado (ej. `https://formspree.io/f/tu_codigo_aqui`).
4. Abre `index.html` y reemplaza el atributo `action` de la etiqueta `<form id="contact-form">`:
   ```html
   <form id="contact-form" action="https://formspree.io/f/tu_codigo_aqui" method="POST">
   ```

---

## 📞 Datos de Contacto de EPMI S.A.C.

* **Teléfono / WhatsApp**: +51 998 257 562
* **Correos**: `comercial@epmi.com.pe` | `helver.pongo@epmi.com.pe`
* **Dirección**: Mza. C, Lote 01 – A Saracoto Alto, San Antonio, Huarochirí, Lima, Perú.
