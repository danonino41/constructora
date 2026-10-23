# Manual técnico — Sitio web Consorcio Constructor

Documento de referencia técnica del repositorio. Describe **qué es el proyecto, cómo está
armado, cómo se ejecuta, cómo se edita el contenido y cómo se despliega**.

> Documento válido para el estado actual del repositorio: **Next.js 15 (App Router)**.
> Si alguna sección menciona Vite, `src/app/App.tsx`, `dist/` o el puerto 5173, es
> información obsoleta de la era anterior a la migración.

---

## 1. Resumen

| Dato | Valor |
|---|---|
| Nombre del paquete | `consorcio-constructor` |
| Framework | Next.js 15.5.4 (App Router) |
| UI | React 18.3.1 + Tailwind CSS 4.1.12 |
| Lenguaje | TypeScript 5.7.3 (`strict: true`) |
| Router | App Router (`app/`) |
| Render | Estático (SSG) por defecto; sin servidor de datos propio |
| Idioma | Español (Perú) |
| Versión de Node | 22.x (probado en 22.16.0) |
| Gestor de paquetes | npm 11.x |

**Qué hace el sitio:** landing page institucional de una constructora de vivienda social en
Perú. Presenta los tres programas del Estado que gestionan (Techo Propio, Bono de
Reforzamiento Estructural, Crédito MiVivienda), un mapa interactivo de zonas atendidas,
catálogo de modelos de vivienda, quiz de requisitos, formulario de contacto que arma el
mensaje y abre WhatsApp o el cliente de correo, y enlaces a sus redes.

**Lo que NO tiene:** backend, API REST/GraphQL, autenticación, base de datos, ni
almacenamiento de leads. Todo el "envío" del formulario es un enlace `wa.me:` o `mailto:`.

---

## 2. Estructura del proyecto

```
constructora/
├── app/                          ← App Router de Next (RUTAS). No es una carpeta de componentes.
│   ├── layout.tsx                ← Layout raíz: <html>, <body>, Navbar, Footer, ScrollManager
│   ├── page.tsx                  ← Home (client): Hero + PresenceMap + Testimonials + CTA azul
│   ├── ScrollManager.tsx         ← Scroll por ?scrollTo=id y reset al cambiar de ruta
│   ├── contacto/page.tsx         ← /contacto
│   ├── faqs/page.tsx             ← /faqs
│   ├── galeria/page.tsx          ← /galeria
│   ├── nosotros/page.tsx         ← /nosotros  (página completa, sin sección reutilizable)
│   ├── programas/page.tsx        ← /programas
│   ├── programas/[slug]/page.tsx ← /programas/techo-propio | credito-mivivienda | reforzamiento
│   ├── proyectos/page.tsx        ← /proyectos
│   ├── requisitos/page.tsx       ← /requisitos
│   └── servicios/page.tsx        ← /servicios
│
├── src/
│   ├── sections/                 ← Secciones de página (una por bloque de la web)
│   │   ├── Navbar.tsx            ← Header fijo; transparente en la home sin scroll
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx              ← Compone: SliderProgramas → HeroInicio → ProgramasAccesoRapido
│   │   ├── About.tsx  Services.tsx  Programs.tsx  Testimonials.tsx
│   │   ├── Contact.tsx           ← Formulario corto con mensaje automático
│   │   ├── Faq.tsx  Gallery.tsx  Projects.tsx  VideoTour.tsx
│   │   ├── QualificationQuiz.tsx ← Quiz "¿Con cuál puedes calificar?"
│   │   ├── SectionNav.tsx        ← Subnavegación sticky de las páginas largas
│   │   └── nosotros.html         ← HTML estático de respaldo (NO se usa en Next)
│   │
│   ├── components/
│   │   ├── WhatsAppIcon.tsx      ← Ícono de WhatsApp (no existe en lucide)
│   │   ├── common/LazySection.tsx        ← Lazy load + IntersectionObserver
│   │   ├── inicio/HeroInicio.tsx         ← Franja de stats + sello de respaldo
│   │   ├── inicio/SliderProgramas.tsx     ← Slider principal a pantalla completa (Embla)
│   │   ├── inicio/ProgramasAccesoRapido.tsx ← 3 tarjetas de acceso a programas
│   │   ├── inicio/PresenceMap.tsx         ← Mapa SVG interactivo del Perú
│   │   └── proyectos/ModelosGaleria.jsx  ← Catálogo de modelos (archivo .jsx)
│   │
│   ├── data/
│   │   ├── content.ts            ← NAV_LINKS, PROGRAM_LINKS, SERVICES, STATS, CONTACT,
│   │   │                           │   TESTIMONIALS, FB_POSTS, QUIZ_PROGRAMS, QUIZ_STEPS
│   │   └── programas.ts          ← PROGRAMAS_DETALLE (contenido largo de cada programa)
│   │
│   ├── lib/peru-map.js           ← Geometría SVG del Perú (460×673) generada desde INEI
│   │
│   ├── imports/                  ← Imágenes/videos importados por código (URL con hash)
│   │   ├── logo.png
│   │   ├── casa-base-1-fachada-gris.jpeg
│   │   ├── casa-terminada-amarillo-un-piso.jpeg
│   │   ├── casa-terminada-amarillo-puerta-abierta.jpeg
│   │   ├── casa-terminada-amarillo-angulo-superior.jpeg
│   │   ├── evidencia-avance.jpg, evidencia-obra.jpg, evidencia-cambio.jpg
│   │   ├── equipo-en-obra.jpg
│   │   ├── VIDEO_RECORRIDO_3D.mp4
│   │   └── (varios .jpeg/.png de obra y clientes)
│   │
│   └── styles/
│       ├── index.css             ← Entry point: importa fonts + tailwind + theme
│       ├── fonts.css             ← Myriad Pro + fallbacks
│       ├── tailwind.css          ← @import 'tailwindcss' + @source
│       ├── theme.css             ← Variables CSS del tema (colores, radios)
│       └── globals.css           ← (vacío, reservado)
│
├── public/                       ← Archivos servidos tal cual
│   ├── logo.png
│   ├── PublicacionesFB/          ← IMG1–IMG7.jpeg, banner.jpeg (galería Facebook)
│   ├── modelos/                  ← Fotos de los modelos de vivienda (m1-*, m2-*)
│   ├── videos/                   ← modelo-1-40m2.mp4, modelo-2-35m2.mp4, modelo-2-60m2.mp4
│   └── Clientes/                 ← Fotos de testimonios (cliente1..4.png)
│
├── types/assets.d.ts             ← Declaraciones de módulos de assets (.jpeg, .mp4, .pdf…)
│
├── doc/                          ← Documentación del proyecto (ver doc/README.md)
└── configs: package.json, next.config.ts, tsconfig.json, postcss.config.mjs
```

> **Regla de oro de carpetas:** `app/` es **exclusivamente** el router. Los componentes
> viven en `src/components/` (por dominio) y las secciones en `src/sections/`. Antes de
> la migración a Next existía `src/app/` como cajón de componentes; ya no existe.

---

## 3. Puesta en marcha

### Requisitos
- Node.js 22.x (o 20.x LTS)
- npm 10 o superior

### Comandos

```bash
npm install        # instalar dependencias
npm run dev        # servidor de desarrollo → http://localhost:3000
npm run build      # compila y prerenderiza las 15 rutas en .next/
npm run start      # sirve el build de producción (requiere npm run build antes)
npm run lint       # ESLint de Next
```

### Verificación rápida tras un cambio

```bash
npm run build
```
Debe terminar con `✓ Generating static pages (15/15)` y listar las 15 rutas. Si aparece
`Cannot find module for page: /_not-found`, borra la caché y recompila:

```bash
Remove-Item .next -Recurse -Force   # Windows PowerShell
rm -rf .next                       # macOS / Linux / Git Bash
npm run build
```

---

## 4. Enrutado

Todas las rutas son públicas y se prerenderizan en build.

| Ruta | Archivo | Render | Contenido |
|---|---|---|---|
| `/` | `app/page.tsx` | SSG (client) | Slider de programas, stats, acceso directo, mapa, testimonios, CTA |
| `/contacto` | `app/contacto/page.tsx` | SSG | Sección `Contact` |
| `/faqs` | `app/faqs/page.tsx` | SSG | Sección `Faq` |
| `/galeria` | `app/galeria/page.tsx` | SSG | Sección `Gallery` (carrusel Embla de Facebook) |
| `/nosotros` | `app/nosotros/page.tsx` | SSG | Página completa escrita en el propio archivo |
| `/programas` | `app/programas/page.tsx` | SSG | Sección `Programs` |
| `/programas/[slug]` | `app/programas/[slug]/page.tsx` | SSG | Detalle de cada programa |
| `/proyectos` | `app/proyectos/page.tsx` | SSG | Sección `Projects` + modal de planos |
| `/requisitos` | `app/requisitos/page.tsx` | SSG | Requisitos, topes, quiz y FAQs |
| `/servicios` | `app/servicios/page.tsx` | SSG | Sección `Services` |
| `/_not-found` | — | SSG | 404 por defecto de Next |

### Página dinámica `/programas/[slug]`

Es **estática**, no se genera en request. Puntos clave de Next 15:

```tsx
// app/programas/[slug]/page.tsx
export function generateStaticParams() {
  return Object.keys(PROGRAMAS_DETALLE).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;        // params es una Promise en Next 15
  ...
}

export default async function ProgramaDetalle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;        // SIEMPRE await params
  if (!PROGRAMAS_DETALLE[slug]) notFound();
  ...
}
```

> ⚠️ **Error frecuente:** olvidar `await params` → error de tipos y de runtime en Next 15.

Slugs válidos (deben coincidir con las claves de `PROGRAMAS_DETALLE`):
`techo-propio` · `credito-mivivienda` · `reforzamiento`

### Navegación y scroll

- Los enlaces internos usan `next/link` con `href` (nunca `to`).
- `usePathname()` reemplaza a `useLocation().pathname`.
- `useRouter().push()` reemplaza a `useNavigate()`.
- Para desplazar a un ancla desde otra página se usa el query param:
  `/contacto?scrollTo=solicitud`. Lo procesa `app/ScrollManager.tsx` (dentro de `<Suspense>`).
- Los anchors dentro de la misma página se resuelven con `scrollIntoView` y la clase
  `scroll-mt-*` para compensar el header fijo.

---

## 5. Componentes clave

### `src/sections/Navbar.tsx` — header fijo con modo transparente
- `position: fixed`, `z-50`, altura ≈ 126 px en escritorio.
- **Transparente** solo en `/` y sin scroll: fondo `transparent`, textos blancos
  (`linkColor`). Al hacer scroll (`scrollY > 24`) pasa a blanco translúcido con `blur(14px)`.
- El dropdown de "Programas" se cierra con `setOpen(false)` al cambiar de ruta.
- Menú móvil desplegable por debajo del header.

### `src/components/inicio/SliderProgramas.tsx` — visual principal
- Carrusel con **Embla** (`embla-carousel-react`), `loop: true`.
- Altura: `h-[88vh] min-h-[560px] lg:h-[100vh] lg:min-h-[640px]`.
- Autoplay propio de **6 s** (`AUTOPLAY_MS`); se pausa en hover, en foco, con el botón
  play/pause y cuando `document.hidden`.
- Overlay con degradado a la izquierda; contenido en `max-w-xl`.
- Controles: flechas laterales (solo `lg:`), dots, contador `01 / 03` y play/pause.
- Cada slide declara su `href` → `/programas/{slug}`.

### `src/components/inicio/HeroInicio.tsx` — franja bajo el slider
Contiene el mensaje "Accede a tu casa propia…", los CTAs, las **stats**
(+3,367 / 11 / +10 años) y el sello "Respaldo institucional".
> El hero de pantalla completa original (con la imagen de obra en proceso) fue retirado
> para dar protagonismo al slider. Se puede recuperar desde el historial de Git.

### `src/components/inicio/PresenceMap.tsx` — mapa interactivo
- SVG con la geometría de `src/lib/peru-map.js` (`viewBox="0 0 460 673"`).
- Estados: `hovered` (tooltip) y `selected` (panel de detalle).
- `useMemo` para el `tooltip` y para el `detail`; `fillFor(key)` colorea cada región.
- Layout: tarjeta izquierda con sub-grid `md:grid-cols-[240px_1fr]` (mapa | panel) y
  leyendas al pie; columna derecha con texto editorial y micro-KPIs.
- Responsive: variantes `lg:` compactan la sección para que quepa en un viewport de
  escritorio (~1253 px de ancho).

### `src/components/common/LazySection.tsx` — carga diferida
Envuelve una sección con `React.lazy` + `Suspense` y la monta solo cuando entra en el
viewport (`IntersectionObserver`, `rootMargin: "600px 0px"`).
El prop `minHeight` reserva el espacio para **evitar CLS (Layout Shift)**.
> Si cambias la altura de una sección diferida, actualiza su `minHeight` en `app/page.tsx`.

### `src/sections/Contact.tsx` — formulario con mensaje automático
- El usuario solo escribe su nombre; el resto se elige con un clic (chips).
- `buildMessage(form)` redacta el texto automáticamente según programa + necesidad + lugar.
- Envío: `wa.me` (principal) o `mailto:` (alternativa). **No hay API.**
- Botón "Volver al mensaje automático" restaura el texto generado.

### `src/sections/QualificationQuiz.tsx` — quiz de requisitos
5 pasos con navegación (`restart`, `goBack`, `choose`) y resultado según el programa
elegido. Sus datos están en `QUIZ_PROGRAMS` y `QUIZ_STEPS` (`src/data/content.ts`).

---

## 6. Datos y contenido

Todo el contenido editable vive en **`src/data/content.ts`** y **`src/data/programas.ts`**.

| Qué editar | Dónde |
|---|---|
| Menú del header | `NAV_LINKS` (`content.ts`) |
| Dropdown "Programas" | `PROGRAM_LINKS` (`content.ts`) |
| Servicios | `SERVICES` (`content.ts`) |
| Cifras institucionales (stats) | `STATS` (`content.ts`) |
| Teléfonos, WhatsApp, email, redes, sedes | `CONTACT` (`content.ts`) |
| Testimonios | `TESTIMONIALS` (`content.ts`) |
| Publicaciones de Facebook (Galería) | `FB_POSTS` (`content.ts`) |
| Quiz de requisitos | `QUIZ_PROGRAMS` y `QUIZ_STEPS` (`content.ts`) |
| Contenido largo de cada programa | `PROGRAMAS_DETALLE` (`src/data/programas.ts`) |
| Fechas/datos del mapa | `ZONES`, `OFFICES`, `REGION_LEGEND` (`PresenceMap.tsx`) |

### Datos pendientes de confirmar con la gerencia
Ver `doc/08-datos-pendientes-gerencia.md`. Ahí se listan las cifras y ubicaciones que
todavía no están verificadas (total de viviendas, ranking regional, direcciones de sede).

### Agregar una publicación a la Galería
1. Copia la imagen a `public/PublicacionesFB/` con el siguiente nombre: `IMG8.jpeg`
   (y `IMG9.jpeg`, …).
2. Agrega el objeto al final del array `FB_POSTS`:
```ts
{
  title: "Título visible",
  text: "Texto de la publicación.",
  url: "https://www.facebook.com/photo/?fbid=TU_FBID",
  img: "/PublicacionesFB/IMG8.jpeg",
},
```
3. `npm run build` para verificar.

---

## 7. Imágenes, video y assets

### `src/imports/` vs `public/`
- **`src/imports/`**: se importa desde el código (`import logo from "@/imports/logo.png"`).
  Next genera una URL con hash y optimiza el archivo. Úsalo para imágenes que se usan
  dentro de componentes.
- **`public/`**: se referencia por ruta literal (`src="/PublicacionesFB/IMG1.jpeg"`).
  Úsalo para contenido que cambia seguido o que se sirve tal cual.

### `StaticImageData` y `<img>`
Cuando importas una imagen y la usas en un `<img>` o `<video>` **nativo** (no en
`<Image>` de Next), debes usar la propiedad `.src`:
```tsx
import casa from "@/imports/casa-terminada-amarillo-un-piso.jpeg";
<img src={casa.src} alt="…" />     // ✅
```
Las declaraciones de tipos están en `types/assets.d.ts` (`.mp4`, `.webm`, `.pdf`,
`.jpeg`, `.jpg`, `.png`, `.svg`).

### Video
- `public/videos/` → 3 videos de modelos (`modelo-1-40m2.mp4`, `modelo-2-35m2.mp4`,
  `modelo-2-60m2.mp4`), usados en `src/sections/VideoTour.tsx`.
- `src/imports/VIDEO_RECORRIDO_3D.mp4` → recorrido 3D.
- **Pendiente de optimización:** el video 3D pesa ~9.4 MB. Comprimirlo antes de producción.

---

## 8. Estilos y diseño

### Flujo de CSS
`app/layout.tsx` importa `@/styles/index.css`, que a su vez importa:
1. `fonts.css` → Myriad Pro con fallbacks (`Segoe UI`, Arial).
2. `tailwind.css` → Tailwind 4 + `tw-animate-css`.
3. `theme.css` → variables CSS del tema.

### Tailwind CSS 4 (configuración por CSS, no por JS)
No hay `tailwind.config.js`. La configuración vive en `src/styles/tailwind.css`:

```css
@import 'tailwindcss' source(none);
@source '../**/*.{js,ts,jsx,tsx}';      /* componentes y secciones */
@source '../../app/**/*.{js,ts,jsx,tsx}'; /* rutas del App Router */
```

> ⚠️ **`source(none)` desactiva el escaneo automático.** Si agregas una carpeta nueva con
> clases de Tailwind, **debe** agregarse un `@source` o sus clases no se generarán.

El plugin de PostCSS es `@tailwindcss/postcss` (`postcss.config.mjs`).

### Variables de marca (`src/styles/theme.css`)
| Variable | Valor | Uso |
|---|---|---|
| `--primary` | `#f5b700` | Dorado institucional (CTAs, íconos) |
| `--primary-foreground` | `#0d0f14` | Texto sobre dorado |
| `--foreground` | `#4a4a49` | Gris principal de textos |
| `--muted-foreground` | `#666666` | Texto secundario |
| `--card` | `#f8f8f8` | Fondo de tarjetas/superficies |
| `--radius` | `0.25rem` | Radio por defecto |
| `--ring` | `#f5b700` | Foco de inputs |

Azul institucional `#173B66` y gris azulado `#6b7480` se usan por código directo
(`style={{ color: "#173B66" }}`), no como variables.

### Reglas de estilo
- Tipografía: Myriad Pro. **No** introducir otras familias (Barlow fue eliminada).
- Los estilos inline `style={{ fontFamily: ... }}` son heredados del diseño de Figma.
  Cuando toques un componente, prioriza pasarlos a clases de Tailwind.
- Paleta: dorado `#f5b700` + azul `#173B66` + grises (`slate`/`gray`).

---

## 9. Alias y configuración de TypeScript

`tsconfig.json`:
```json
"paths": { "@/*": ["./src/*"] }
```
→ `@/data/content` = `src/data/content.ts`, `@/components/inicio/PresenceMap` =
`src/components/inicio/PresenceMap.tsx`.

Opciones relevantes: `strict: true`, `noEmit: true`, `jsx: "preserve"`,
`moduleResolution: "bundler"`, `allowJs: true` (habilita `ModelosGaleria.jsx`).

`next.config.ts` es mínimo:
```ts
const nextConfig: NextConfig = { reactStrictMode: true };
```

---

## 10. Rendimiento

- `Home` carga `PresenceMap` y `Testimonials` de forma diferida con `React.lazy` +
  `LazySection` (IntersectionObserver con margen de 600 px).
- Las imágenes de `src/imports/` se optimizan automáticamente (import estático).
- Las imágenes de `public/` NO se optimizan: pre-comprime antes de subirlas
  (objetivo: **< 500 KB** por foto).
- `fetchPriority="high"` + `loading="eager"` en la imagen principal del slider.
- Objetivo del CEO: carruseles con autoplay (6 s) antes que animaciones complejas.
- Verifica el peso del bundle en la salida de `npm run build` (columna "First Load JS").

---

## 11. Despliegue

### Build de producción
```bash
npm run build     # genera .next/ con las 15 rutas prerenderizadas
npm run start     # servidor Node local (para probar)
```

### Opciones de hosting
1. **Plataforma Node** (Vercel, Railway, Render, Fly.io): `npm run build`, comando de
   inicio `npm run start`. Soporta el modelo híbrido de Next.
2. **Exportación estática**: añadir `output: "export"` en `next.config.ts` y servir
   `out/`. **Requisito:** las rutas con query params (`?scrollTo=`) no funcionan con
   `next export` estático; habría que migrarlas a anclas.
3. **Hosting de archivos estáticos**: subir `out/`.

> Pendiente de confirmar con el equipo cuál hosting se usará antes del primer deploy.
> Revisa `doc/06-mantenimiento-tecnico.md` para el checklist de publicación.

---

## 12. Checklist antes de publicar

- [ ] `npm run build` termina con `✓ Generating static pages (15/15)` sin errores.
- [ ] `npm run lint` sin errores.
- [ ] Las 12 URLs públicas responden 200 (home, 8 secciones y los 3 slugs de programas).
- [ ] WhatsApp, correo y las 3 sedes abren correctamente (`wa.me`, `mailto`, Maps).
- [ ] Los `metadata` de cada ruta tienen el título y descripción correctos.
- [ ] Imágenes de `public/` comprimidas (< 500 KB).
- [ ] Video 3D optimizado.
- [ ] Cifras de `STATS` y del mapa confirmadas por gerencia
      (ver `doc/08-datos-pendientes-gerencia.md`).
- [ ] Probado en la laptop de presentación (≈1253 px de ancho).

---

## 13. Problemas frecuentes y soluciones

| Síntoma | Causa probable | Solución |
|---|---|---|
| `Cannot find module for page: /_not-found` | Caché `.next` desincronizada | `Remove-Item .next -Recurse -Force` y recompilar |
| Error 500 al arrancar | Server viejo corriendo o `.next` corrupto | Matar procesos `node`, borrar `.next`, `npm run dev` |
| `params` es `Promise` / error de tipos en ruta dinámica | Next 15 exige `await params` | `const { slug } = await params;` |
| Una clase de Tailwind no se aplica | Carpeta fuera de los `@source` | Agregar el `@source` en `src/styles/tailwind.css` |
| `img.src` da `undefined` | Falta `.src` en un `StaticImageData` | Usar `imagen.src` (ver §7) |
| Saltos de layout (CLS) al hacer scroll | `minHeight` desactualizado en `LazySection` | Ajustar el `minHeight` en `app/page.tsx` |
| El header tapa el contenido al navegar a un ancla | Falta `scroll-mt-*` o usar query param | Usar `?scrollTo=id` o `scroll-mt-24`/`scroll-mt-32` |

---

## 14. Glosario

| Término | Significado |
|---|---|
| **App Router** | Sistema de rutas de Next 15 basado en la carpeta `app/` |
| **SSG** | Static Site Generation: la página se genera en build, no en cada visita |
| **Server Component** | Componente que se renderiza en servidor (sin `"use client"`) |
| **Client Component** | Componente con `"use client"`: interactivo, se envía al navegador |
| **Hydration** | Proceso por el que React replica en el cliente el HTML del servidor |
| **CLS** | Cumulative Layout Shift: salto de contenido al cargar (se evita con `minHeight`) |
| **Embla** | Librería de carrusel usada en el slider y la galería |
| **Myriad Pro** | Tipografía institucional (requiere estar instalada; hay fallbacks) |

---

*Última actualización: tras la migración a Next.js 15 y el rediseño del slider principal.*
*La documentación funcional y de marca vive en `doc/` (ver `doc/README.md`).*
