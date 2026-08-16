# Brahian Danilo Hurtado — Portfolio

Portafolio profesional construido con React 19, TypeScript, Vite y Tailwind CSS v4, siguiendo una identidad visual premium inspirada en Stripe, Linear, Vercel y Raycast.

## Stack

- **React 19 + TypeScript + Vite**
- **Tailwind CSS v4** (tokens de color y tipografía en `src/index.css`)
- **Framer Motion** — animaciones de scroll, hover y transición de tema
- **React Icons + Lucide React** — iconografía
- **EmailJS** — envío del formulario de contacto (opcional, ver abajo)
- **Sonner** — notificaciones toast
- **React CountUp** — contadores animados
- **React Helmet Async** — gestión de metadatos

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre http://localhost:5173

## Build de producción

```bash
npm run build
npm run preview
```

## Configuración pendiente antes de publicar

1. **CV**: reemplaza `public/CV-Brahian-Hurtado.pdf` con tu hoja de vida real (el archivo actual es un marcador de posición).
2. **Formulario de contacto**: crea una cuenta gratuita en [EmailJS](https://www.emailjs.com), y copia `.env.example` a `.env` con tu `SERVICE_ID`, `TEMPLATE_ID` y `PUBLIC_KEY`. Sin esto, el formulario simula el envío (útil para revisar la UI, pero no envía correos reales).
3. **GitHub**: la sección de GitHub consume en vivo `https://api.github.com/users/BDHURTADO`. Cambia el usuario en `src/sections/GithubStats.tsx` si es necesario.
4. **Dominio / Open Graph**: actualiza las URLs `https://bdhurtado.dev` en `index.html`, `public/robots.txt` y `public/sitemap.xml` por tu dominio real, y agrega una imagen `public/og-cover.png` (1200×630) para las tarjetas de redes sociales.
5. **Proyectos**: los enlaces de "GitHub" en cada tarjeta de proyecto apuntan a tu perfil; actualízalos a los repositorios específicos cuando estén listos, y agrega `demoUrl` en `src/data/content.ts` si tienes demos en vivo.

## Estructura

```
src/
  components/   # Navbar, Footer, Reveal (animación), Container, ScrollExtras
  context/      # ThemeContext (dark/light), LanguageContext (ES/EN)
  data/         # content.ts (todo el copy ES/EN), techIcons.tsx
  sections/     # Hero, About, Stats, Experience, Projects, GithubStats, TechStack, HowIThink, Contact
  types/        # tipos TS del contenido
```

Todo el copy vive en `src/data/content.ts`, tipado por `src/types/content.ts` — agregar un idioma nuevo es tan simple como añadir una clave más al objeto `content`.

## Despliegue en Vercel

```bash
npm i -g vercel
vercel
```

O conecta el repositorio directamente en [vercel.com](https://vercel.com) — Vercel detecta Vite automáticamente.

## Lighthouse

Build optimizado con code splitting nativo de Vite, imágenes vectoriales (sin fotografías pesadas), fuentes con `display: swap` y animaciones que respetan `prefers-reduced-motion`.
