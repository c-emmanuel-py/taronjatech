# RADIOGRAFIA DEL PROYECTO

## 1. STACK Y DEPENDENCIAS

- **Framework principal:** React `^18.3.1` (bundler: Vite `^5.4.10`, plugin React `^4.3.3`)
- **Lenguaje:** TypeScript `~5.6.2` (con JSX/TSX)
- **UI / estilos:**
  - Tailwind CSS `^3.4.15`
  - PostCSS `^8.4.49`
  - Autoprefixer `^10.4.20`
- **Librerias de animacion:** no hay librerias externas (animaciones con Tailwind keyframes + CSS custom)
- **Otras dependencias relevantes:**
  - `react-dom ^18.3.1`
  - `@types/react ^18.3.12`
  - `@types/react-dom ^18.3.1`

## 2. ESTRUCTURA DE CARPETAS

Arbol (maximo 3 niveles):

```text
taronjatech/
├─ public/
│  ├─ favicon.svg
│  └─ team/
│     ├─ carlos-ferrer.png
│     ├─ danilo-nunez-garcia.png
│     ├─ david-tejeda.png
│     ├─ elias-reyes.png
│     ├─ emmanuel.png
│     ├─ hansel-garcia.png
│     └─ kelvin-calcanao.png
├─ src/
│  ├─ app/
│  │  └─ App.tsx
│  ├─ assets/
│  │  ├─ *.svg
│  │  └─ logos/
│  ├─ components/
│  │  ├─ layout/
│  │  ├─ sections/
│  │  └─ ui/
│  ├─ data/
│  │  ├─ caseStudies.ts
│  │  ├─ faqs.ts
│  │  ├─ services.ts
│  │  ├─ sowTemplate.ts
│  │  ├─ techStack.ts
│  │  └─ testimonials.ts
│  ├─ i18n/
│  │  ├─ LanguageProvider.tsx
│  │  ├─ translations.ts
│  │  └─ useI18n.ts
│  ├─ styles/
│  │  └─ globals.css
│  ├─ utils/
│  │  ├─ cn.ts
│  │  ├─ download.ts
│  │  └─ scroll.ts
│  ├─ main.tsx
│  └─ vite-env.d.ts
├─ README.md
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts
```

Ubicacion por categoria:

- **Paginas:** `src/app/App.tsx` (SPA landing de una sola pagina)
- **Componentes:** `src/components/**`
- **Assets:** `src/assets/**` y `public/team/**`
- **Estilos globales:** `src/styles/globals.css`
- **i18n/traducciones:** `src/i18n/translations.ts` + `LanguageProvider.tsx`
- **Datos/contenido:** `src/data/*.ts`
- **Utils:** `src/utils/*.ts`

## 3. SISTEMA DE DISENO

- **Colores brand/tokens detectados:**
  - Primario accent: `#FF6A00`
  - Hover accent: `#e55f00`
  - Fondo oscuro recurrente: `#0B0D12`
  - Fondo claro recurrente: `#F8F7F5`
  - Color leadership (team): `#7F77DD`
  - Texto base (Tailwind): `text-gray-900`
  - Bordes base (Tailwind): `border-gray-200`
- **Tipografia:**
  - Fuente principal: `Inter` (fallback `system-ui`, `sans-serif`) en `tailwind.config.js`
  - Pesos usados mayormente: 400/500 (y algunos 600/700 en ciertas secciones existentes)
- **Border radius estandar:**
  - Uso frecuente de `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-3xl`
- **Breakpoints responsive (Tailwind por defecto):**
  - `sm 640px`, `md 768px`, `lg 1024px`, `xl 1280px`, `2xl 1536px`
- **Variables/tokens custom Tailwind:**
  - `colors.accent`, `colors.accent-hover`
  - `fontFamily.sans`
  - Animaciones/keyframes custom: `fade-in`, `slide-up`, `wave`, `wave-float`, `float`, `fade-in-up`, `breathing`
- **Dark mode:**
  - Se usan clases `dark:*` en varios componentes
  - No hay `darkMode` explicitado en `tailwind.config.js` (usa comportamiento por defecto de Tailwind)
  - No existe actualmente un toggle global de tema claro/oscuro en UI

## 4. SECCIONES DEL SITIO

Estado observado en runtime actual (desde `App.tsx`):

- ✅ **Hero** — `src/components/sections/Hero.tsx` — Seccion principal con headline, bullets y CTAs.
- ✅ **TrustBar** — `src/components/sections/TrustBar.tsx` — Barra de confianza/valores.
- ✅ **Services** — `src/components/sections/Services.tsx` — Catalogo de servicios y CTA por item.
- ✅ **Industries** — `src/components/sections/Industries.tsx` — Industrias objetivo.
- ✅ **TechStack** — `src/components/sections/TechStack.tsx` — Stack tecnologico con fondo tematico.
- ✅ **Process** — `src/components/sections/Process.tsx` — Flujo de trabajo por pasos.
- ✅ **SecurityCompliance** — `src/components/sections/SecurityCompliance.tsx` — Practicas de seguridad/compliance.
- ✅ **SOWPreview** — `src/components/sections/SOWPreview.tsx` — Vista de Statement of Work.
- ✅ **Team** — `src/components/sections/Team.tsx` — Seccion Equipo (CEO/C-Suite/Operativo + modal).
- ✅ **Testimonials** — `src/components/sections/Testimonials.tsx` — Testimonios de clientes.
- ✅ **FAQ** — `src/components/sections/FAQ.tsx` — Preguntas frecuentes.
- ✅ **Contact** — `src/components/sections/Contact.tsx` — Formulario, canales de contacto y toast.
- ✅ **BackToTop** — `src/components/sections/BackToTop.tsx` — Boton flotante volver arriba.
- ✅ **Navbar** — `src/components/layout/Navbar.tsx` — Navegacion sticky con idioma y CTA.
- ✅ **Footer** — `src/components/layout/Footer.tsx` — Footer legal + links de contacto.

No renderizadas en `App.tsx` actualmente:

- ❌ **CaseStudies** — `src/components/sections/CaseStudies.tsx` — Seccion de casos de estudio (componente existe, no se monta en la pagina actual).

## 5. COMPONENTES REUTILIZABLES

Listado de componentes en `src/components` con props principales y uso:

### Layout

- **Container** (`src/components/layout/Container.tsx`)
  - Props: `children`, `className?`
  - Uso: Navbar, Footer y multiples sections.
- **Section** (`src/components/layout/Section.tsx`)
  - Props: `id?`, `children`, `className?`, `ariaLabel?`, `dataTheme?`
  - Uso: Services, Industries, Process, Team, Contact, etc.
- **Navbar** (`src/components/layout/Navbar.tsx`)
  - Props: none
  - Uso: `App.tsx`
- **Footer** (`src/components/layout/Footer.tsx`)
  - Props: none
  - Uso: `App.tsx`
- **LanguageToggle** (`src/components/layout/LanguageToggle.tsx`)
  - Props: `variant?: 'light' | 'dark'`
  - Uso: Navbar.

### UI

- **Button** (`src/components/ui/Button.tsx`)
  - Props: `variant?`, `size?`, `children`, `className?`, mas `ButtonHTMLAttributes`
  - Uso: Hero, Navbar, Services, SOWPreview, Contact.
- **Card** (`src/components/ui/Card.tsx`)
  - Props: `children`, `className?`
  - Uso: Team, Services, Testimonials, SecurityCompliance, CaseStudies.
- **Badge** (`src/components/ui/Badge.tsx`)
  - Props: `children`, `className?`
  - Uso: CaseStudies.
- **Input** (`src/components/ui/Input.tsx`)
  - Props: `InputHTMLAttributes<HTMLInputElement>`
  - Uso: Contact.
- **Textarea** (`src/components/ui/Textarea.tsx`)
  - Props: `TextareaHTMLAttributes<HTMLTextAreaElement>`
  - Uso: Contact.
- **Select** (`src/components/ui/Select.tsx`)
  - Props: `SelectHTMLAttributes<HTMLSelectElement>` + `children`
  - Uso: Contact.
- **Modal** (`src/components/ui/Modal.tsx`)
  - Props: `isOpen`, `onClose`, `children`, `title?`, `className?`
  - Uso: Team.
- **Toast** (`src/components/ui/Toast.tsx`)
  - Props: `message`, `type`, `onClose`, `duration?`
  - Uso: Contact.
- **SectionBackground** (`src/components/ui/SectionBackground.tsx`)
  - Props: `src`, `opacity?`, `showOverlay?`, `overlayVariant?`, `className?`
  - Uso: TechStack, SecurityCompliance, SOWPreview.

### Sections

- **Hero, TrustBar, Services, Industries, Process, TechStack, SecurityCompliance, SOWPreview, Team, Testimonials, FAQ, Contact, BackToTop, CaseStudies**
  - Props: no exponen props (render auto-contenido con i18n/data)
  - Uso principal: `App.tsx` (excepto `CaseStudies`, no montado actualmente).

## 6. INTERNACIONALIZACION

- **i18n implementado:** Si, idiomas `es` y `en`.
- **Libreria usada:** No hay libreria externa (implementacion propia con React Context + helper `t()`).
- **Archivos clave:**
  - `src/i18n/translations.ts`
  - `src/i18n/LanguageProvider.tsx`
  - `src/i18n/useI18n.ts`
- **Estructura de keys (ejemplos reales):**
  - `nav.cta`
  - `team.claudinoRole`
  - `contact.success`

## 7. DATOS Y CONTENIDO

- **Modelo actual:** mixto.
  - Parte del contenido vive en archivos `src/data/*.ts`.
  - Textos visibles y labels estan en `translations.ts`.
  - Algunas estructuras de presentacion viven hardcodeadas en secciones.
- **Archivos de datos detectados:**
  - `src/data/services.ts` — listado de servicios/categorias.
  - `src/data/techStack.ts` — tecnologias por categoria.
  - `src/data/caseStudies.ts` — casos de estudio.
  - `src/data/faqs.ts` — lista FAQ.
  - `src/data/testimonials.ts` — testimonios.
  - `src/data/sowTemplate.ts` — contenido base SOW.
- **Equipo (Team):**
  - Estructura de miembros (nameKey/roleKey/area/level/photo/etc.) vive en `src/components/sections/Team.tsx`.
  - Textos largos/cortos del equipo viven en `src/i18n/translations.ts`.
  - Fotos reales en `public/team/*.png`.

## 8. ESTADO ACTUAL Y PROBLEMAS CONOCIDOS

- **TODO/FIXME:** no se detectaron `TODO` ni `FIXME` en `src`.
- **console.log/debug activo:** no se detectaron `console.log(` en `src`.
- **TypeScript/build:** build actual compila correctamente (`npm run build` exitoso).
- **Linting/diagnosticos:** sin errores activos en los archivos modificados recientemente.
- **Observacion funcional:** `CaseStudies` existe pero no esta montado en `App.tsx` (seccion no visible en runtime).

## 9. CONVENCIONES DEL PROYECTO

- **Naming de archivos:**
  - Componentes React: `PascalCase.tsx` (ej. `SecurityCompliance.tsx`, `LanguageToggle.tsx`)
  - Utilidades/data: `camelCase.ts` (ej. `sowTemplate.ts`, `scroll.ts`)
  - Assets: mayormente `kebab-case` o descriptivo.
- **Componentes vs paginas:**
  - No hay carpeta de paginas multipath; es landing SPA.
  - `src/app/App.tsx` compone todas las secciones.
- **Importaciones y aliases:**
  - Alias `@` -> `src` definido en `vite.config.ts`.
  - Se usa import absoluto tipo `@/components/...`.
  - No se observan barrel exports centrales.
- **Patron de composicion:**
  - Composicion por secciones dentro de bloques de viewport (`Block` en `App.tsx`).
  - Reuso de wrappers (`Container`, `Section`) + componentes UI base.
  - i18n via hook `useI18n()` en casi todas las secciones.

## 10. COMANDOS

- **Desarrollo:** `npm run dev`
- **Build:** `npm run build`
- **Preview:** `npm run preview`
- **Scripts custom relevantes:** no hay scripts extra; solo los 3 scripts base anteriores.
