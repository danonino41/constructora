# Guía de mantenimiento técnico

Cómo correr y editar la web. Para uso del equipo (no desarrolladores pueden editar contenido siguiendo esta guía). Todo el contenido vive en `src/app/App.tsx`.

## Comandos
```bash
npm run dev      # servidor de desarrollo (http://localhost:5173)
npm run build    # compilación de producción (verificar SIEMPRE que diga "built in")
```

## Dónde está cada cosa
| Qué quieres editar | Dónde |
|---|---|
| Menú del header | `NAV_LINKS` (App.tsx, ~línea 15) |
| Sliders del inicio (fotos del slideshow) | Sección `Hero` (~271): combina `banner.jpeg` + fotos de `FB_POSTS` |
| Datos de la empresa (stats del inicio) | `STATS` (~32) |
| Teléfonos / WhatsApp / email / dirección | `CONTACT` (~39) |
| Testimonios | `TESTIMONIALS` (~51) |
| Publicaciones de Facebook (Galería) | `FB_POSTS` (~57) |
| Modelos / proyectos con planos | `Projects` y `PlanosModal` (~701 / ~656) |
| Servicios | `SERVICES` (~25) y componente `Services` (~830) |
| Quiz de requisitos (programas) | `QUIZ_PROGRAMS` (~102) y `QUIZ_STEPS` (~141) |
| Formulario de contacto | Componente `Contact` (~1126) |
| Colores globales / fuentes | `src/styles/theme.css` y `src/styles/fonts.css` |

## Añadir una publicación nueva a la Galería
1. Copia la imagen en `public/PublicacionesFB/` con nombre `IMG8.jpeg` (y siguientes).
2. En `FB_POSTS` (App.tsx, ~línea 57) agrega un objeto al final del array:
```ts
{
  title: "Título visible",
  text: "Texto de la publicación.",
  url: "https://web.facebook.com/photo/?fbid=TU_FBID",
  img: "/PublicacionesFB/IMG8.jpeg",
},
```
3. Guarda y corre `npm run build` para verificar.
> El slideshow del inicio usa automáticamente todas las imágenes de `FB_POSTS` (las nuevas entradas también aparecen ahí).

## Cambiar imágenes del proyecto / banner
- Fotos de `PublicacionesFB/`: reemplaza el archivo manteniendo el mismo nombre y formato (`.jpeg`).
- Banner del slideshow: `public/PublicacionesFB/banner.jpeg`.
- `public/imports/`: logo, imágenes de proyectos y `VIDEO_RECORRIDO_3D.mp4`.

## Buenas prácticas para performance (indicación del CEO)
- Optimiza imágenes antes de subir (peso objetivo < 500 KB por foto).
- El video `VIDEO_RECORRIDO_3D.mp4` pesa ~9.4 MB: pendiente optimizar (comprimir/recortar) para acelerar la carga.
- Prefiere carruseles con autoplay LA configuración actual (6 s) por encima de animaciones complejas.

## Publicar
- El proyecto es estático (build en `dist/`). Publicar = subir `dist/` al hosting.
- Confirmar con el equipo qué hosting/ojo, antes de publicar por primera vez.