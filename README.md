# Taronja Tech Solutions S.R.L. — Landing

Landing page de conversión (leads) para **Taronja Tech Solutions S.R.L.**  
React + TypeScript + Vite + TailwindCSS. Bilingüe (ES/EN), responsive y accesible.

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
```

Genera la carpeta `dist/` lista para desplegar.

## Preview del build

```bash
npm run preview
```

Sirve la versión de producción localmente.

## Estructura del proyecto

```
src/
  app/
    App.tsx                 # Punto de entrada de la app
  components/
    layout/                  # Navbar, Footer, Container, Section, LanguageToggle
    ui/                      # Button, Card, Badge, Input, Select, Textarea, Toast, Modal
    sections/                # Hero, TrustBar, Services, Industries, Process, TechStack,
                            # CaseStudies, SecurityCompliance, SOWPreview, Team,
                            # Testimonials, FAQ, Contact, BackToTop
  data/                      # services, testimonials, faqs, caseStudies, techStack, sowTemplate
  i18n/                      # translations, LanguageProvider, useI18n
  styles/
    globals.css
  utils/
    cn.ts, scroll.ts, download.ts
```

## Contacto (datos en la web)

- **Email:** admin@taronjats.com  
- **WhatsApp:** [+1 829 308 1609](https://wa.me/18293081609)

## CTA principal

El botón "Agendar llamada" / "Book a call" apunta a un placeholder de Calendly. Sustituir la URL en los componentes que usen `CALENDLY_PLACEHOLDER` por tu enlace real de Calendly.
