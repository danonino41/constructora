# Guía de mantenimiento técnico

Cómo correr y editar la web, paso a paso. Guía pensada para el equipo (no hace falta ser
desarrollador para cambiar textos, fotos o datos de contacto).

> Documento vigente para **Next.js 15 (App Router)**. Las referencias a `src/app/App.tsx`,
> `dist/` y al puerto `5173` eran de la versión anterior (Vite) y ya no aplican.
> Para el detalle técnico completo ver [`09-manual-tecnico.md`](./09-manual-tecnico.md).

## Comandos

```bash
npm install        # solo la primera vez (o tras clonar el repo)
npm run dev        # servidor de desarrollo → http://localhost:3000
npm run build      # compilación de producción (verificar SIEMPRE que termine con "✓ Generating static pages (15/15)")
npm run start      # levanta el build de producción
```

Regla de oro: **después de cada cambio, correr `npm run build`.** Si da error de
`/_not-found` o 500, borrar la caché y recompilar:

```bash
Remove-Item .next -Recurse -Force   # Windows PowerShell
rm -rf .next                       # macOS / Linux / Git Bash
npm run build
```

## Dónde está cada cosa

| Qué quieres editar | Dónde |
|---|---|
| Menú del header | `NAV_LINKS` → `src/data/content.ts` |
| Dropdown "Programas" del header | `PROGRAM_LINKS` → `src/data/content.ts` |
| Datos de la empresa (stats del inicio) | `STATS` → `src/data/content.ts` |
| Teléfonos / WhatsApp / email / dirección | `CONTACT` → `src/data/content.ts` |
| Testimonios | `TESTIMONIALS` → `src/data/content.ts` |
| Publicaciones de Facebook (Galería) | `FB_POSTS` → `src/data/content.ts` |
| Servicios | `SERVICES` → `src/data/content.ts` |
| Quiz de requisitos (programas) | `QUIZ_PROGRAMS` y `QUIZ_STEPS` → `src/data/content.ts` |
| Textos largos de cada programa | `PROGRAMAS_DETALLE` → `src/data/programas.ts` |
| Mapa (regiones, sedes, zonas, leyenda) | `ZONES`, `OFFICES`, `REGION_LEGEND` → `src/components/inicio/PresenceMap.tsx` |
| Formulario de contacto | `src/sections/Contact.tsx` (función `buildMessage`) |
| Slider principal de la home | `src/components/inicio/SliderProgramas.tsx` |
| Fotos de los modelos de vivienda | `public/modelos/` y `src/components/proyectos/ModelosGaleria.jsx` |
| Colores globales / fuentes | `src/styles/theme.css` y `src/styles/fonts.css` |

## Añadir una publicación nueva a la Galería
1. Copia la imagen en `public/PublicacionesFB/` con nombre `IMG8.jpeg` (y siguientes).
2. En `FB_POSTS` (`src/data/content.ts`) agrega un objeto al final del array:
```ts
{
  title: "Título visible",
  text: "Texto de la publicación.",
  url: "https://www.facebook.com/photo/?fbid=TU_FBID",
  img: "/PublicacionesFB/IMG8.jpeg",
},
```
3. Guarda y corre `npm run build` para verificar.

## Cambiar imágenes
- Fotos de `public/PublicacionesFB/`: reemplaza el archivo **manteniendo el mismo nombre y
  formato** (`.jpeg`).
- `src/imports/`: logo, imágenes de obra, evidencia de avance y `VIDEO_RECORRIDO_3D.mp4`.
  Estas se importan desde el código; si cambias el archivo, actualiza el nombre en el
  componente que lo usa.
- `public/modelos/`: fotos de los modelos de vivienda.
- `public/Clientes/`: fotos de los testimonios.
- `public/videos/`: videos de los modelos (`modelo-1-40m2.mp4`, `modelo-2-35m2.mp4`,
  `modelo-2-60m2.mp4`).

> Importante: las imágenes que están en `public/` se muestran **sin optimizar**.
> Comprime antes de subirlas (peso objetivo **< 500 KB** por foto).

## Buenas prácticas para performance (indicación del CEO)
- Optimiza imágenes antes de subir (peso objetivo < 500 KB por foto).
- El video `VIDEO_RECORRIDO_3D.mp4` pesa ~9.4 MB: pendiente optimizar (comprimir/recortar)
  para acelerar la carga.
- El CEO prefiere carruseles con autoplay (la configuración actual es 6 s) por encima de
  animaciones complejas.

## Publicar
- El build genera la carpeta `.next/` (no `dist/`).
- Antes del primer despliegue hay que **confirmar con el equipo qué hosting** se usará
  (plataforma Node vs. hosting de archivos estáticos). Ver la sección 11 del
  [manual técnico](./09-manual-tecnico.md).
- Checklist de publicación: sección 12 del manual técnico.

## Antes de dar por terminado un cambio
- [ ] `npm run build` terminó con `✓ Generating static pages (15/15)`.
- [ ] Se revisaron las páginas afectadas en `http://localhost:3000`.
- [ ] Los enlaces (WhatsApp, correo, Mapas, redes) abren bien.
- [ ] Si se tocaron cifras o ubicaciones, están confirmadas por gerencia
      (ver [`08-datos-pendientes-gerencia.md`](./08-datos-pendientes-gerencia.md)).
