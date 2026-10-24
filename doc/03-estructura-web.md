# Estructura de la web (estado actual)

Mapa de referencia del sitio `consorcio-constructor`, para ubicar secciones y componentes al momento de aplicar las observaciones del CEO. Rutas relativas a la raíz del repo.

## Stack
- **Next.js 15 + React 18 + TypeScript** (App Router, rutas en `app/`).
- **Tailwind CSS 4** para estilos + estilos inline (fuente Myriad Pro, colores de marca).
- **embla-carousel-react 8.6.0** para carruseles (SliderProgramas, hero de Servicios y Galería).
- **lucide-react** para iconos.
- Build de producción: `npm run build`.
- Archivos públicos: `public/PublicacionesFB/` (`banner.jpeg`, `IMG1.jpeg`–`IMG7.jpeg`), `public/imports/` (`logo`, `VIDEO_RECORRIDO_3D.mp4`, imágenes de proyectos).

## Mapa de secciones (referencia)

> La estructura vigente y el detalle de archivos están en
> [`09-manual-tecnico.md`](./09-manual-tecnico.md). Este mapa conserva nombres de la
> versión anterior (Vite/SPA) y solo se mantiene como referencia histórica.

| Sección | id | Componente (línea) | Contenido |
|---|---|---|---|
| Header | — | `Navbar` | logo, menú (Inicio, Programas, Requisitos, Proyectos, Servicios, Nosotros, FAQs), mega-menús de Programas/Servicios, CTA "SOLICITA INFORMACIÓN", menú móvil; transparente en la home sin scroll y blanco con blur al scrollear o abrir un menú |
| Inicio | `#inicio` | `Hero` (~271) | slideshow a pantalla completa (banner + 7 fotos de PublicacionesFB), autoplay 6s, badge "CONSTRUCTORA LÍDER EN PERÚ" centrado, barra de stats |
| Requisitos | `#requisitos` | `QualificationQuiz` (~332) | quiz interactivo "¿Con cuál puedes calificar?" (5 pasos) + resultados por programa |
| Proyectos | `#proyectos` | `Projects` (~701) | modelos con modal de planos (`PlanosModal`, ~656) |
| Recorrido 3D | — | `VideoTour` (~790) | video `VIDEO_RECORRIDO_3D.mp4` |
| Servicios | `#servicios` | `Services` (~830) | tarjetas de servicios |
| Nosotros | `#nosotros` | `About` (~865) | información de la empresa, presencia (`PresenceMap`) |
| Testimonios | — | `Testimonials` (~995) | opiniones de clientes |
| Galería | `#galeria` | `ReelsCarousel` (~1064) + `ReelCard` (~1031) | carrusel embla de 7 publicaciones de Facebook (imagen + texto + "VER PUBLICACIÓN") |
| Contacto | `#contacto` | `Contact` (~1126) | datos de contacto y formulario |
| Footer | — | `Footer` (~1285) | nav, contacto, crédito |

## Datos clave definidos en el archivo
| Constante (línea) | Uso |
|---|---|
| `NAV_LINKS` (7) | ítems del menú |
| `SERVICES` (25) | tarjetas de servicios |
| `STATS` (32) | indicadores del Hero (3,367 familias / 11 años / +10 profesionales / 1ª vivienda) |
| `CONTACT` (39) | teléfono, WhatsApp, email, dirección |
| `TESTIMONIALS` (51) | testimonios |
| `FB_POSTS` (57) | 7 publicaciones (título, texto, URL de Facebook, imagen IMG1–IMG7) |
| `QUIZ_PROGRAMS` (102) | programas del quiz: Techo Propio, Reforzamiento, MiVivienda |
| `QUIZ_STEPS` (141) | pasos del quiz |

## Estado frente a la evaluación UX/UI del CEO
- Programas (Techo Propio / BPVVRS / MiVivienda): presentes en el quiz y servicios.
- Responsive móvil: sí.
- Tipografía Myriad Pro y paleta institucional (dorado #f5b700, textos #4a4a49): aplicadas de forma global.
- Redes: Facebook enlazado en navbar/footer y Galería (feed de publicaciones).
- Pendientes CEO: apartado *"¿Qué es Techo Propio?"* con requisitos/beneficios y FAQs, CTAs tipo "Solicita información / Descarga requisitos", enlaces a recursos oficiales (Fondo MiVivienda/MVCS) y optimización de imágenes.