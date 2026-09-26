# Registro de cambios

Bitácora de modificaciones a la web según indicaciones. Se agregan entradas del más reciente al más antiguo.

| Fecha | Cambio | Comentario |
|---|---|---|
| 25 Sep 2026 | Se crea carpeta `doc/` | Documentación de funciones y observaciones del CEO |
| 25 Sep 2026 | Header: fondo oscuro translúcido en degradé al top | Links legibles sobre el slideshow; al scrollear vuelve blanco sólido |
| 25 Sep 2026 | Logo del header +20 % | `h-12` → `h-[3.6rem]` |
| 25 Sep 2026 | Hero convertido a slideshow a pantalla completa | embla con banner + 7 fotos, autoplay 6 s, pausa al hover, sin gradiente oscuro; badge centrado con fondo opaco sutil |
| 25 Sep 2026 | Hero: video reemplazado por `banner.jpeg`; se eliminan título y párrafo | Quedan badge, dot y stats |
| 25 Sep 2026 | Tipografía global Myriad Pro + color base #4a4a49 | Reemplaza Barlow/Barlow Condensed; pesos 800→700, 300→400; tokens en `src/styles/theme.css`, `fonts.css`, `PresenceMap.tsx` |
| 25 Sep 2026 | Sección Galería (`#galeria`) con carrusel de publicaciones de Facebook | embla-carousel-react, 7 fotos IMG1–IMG7 con texto y enlace a publicación; menú "Galería" |
| 25 Sep 2026 | Rutas de imágenes corregidas | Renombrado a `IMG1.jpeg`–`IMG7.jpeg` en `public/PublicacionesFB/` |
| — | Reels de Facebook descartados | No permiten embebido (error 400); se usan capturas de las publicaciones |

## Pendiente de implementar (CEO)
Ver checklist en [01-observaciones-ceo-ux-ui.md](./01-observaciones-ceo-ux-ui.md):
- Apartado "¿Qué es Techo Propio?" (requisitos + beneficios, lenguaje sencillo).
- FAQs sobre los tres programas.
- CTAs explícitos: "Solicita información", "Descarga requisitos".
- Enlaces a recursos oficiales (Fondo MiVivienda, reglamentos MVCS).
- Optimización de imágenes (peso actual de `VIDEO_RECORRIDO_3D.mp4` ≈ 9.4 MB).