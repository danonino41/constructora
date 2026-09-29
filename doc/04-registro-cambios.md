# Registro de cambios

Bitácora de modificaciones a la web según indicaciones. Se agregan entradas del más reciente al más antiguo.

| Fecha | Cambio | Comentario |
|---|---|---|
| 26 Sep 2026 | **Web multi-página (React Router)**: `src/app/Router.tsx` + `src/app/Layout.tsx` | Rutas `/` (Home resumen), `/proyectos`, `/requisitos`, `/servicios`, `/nosotros`, `/galeria`, `/contacto`, `/faqs`; Layout con Navbar+Footer; `*`→Home |
| 26 Sep 2026 | **Página Nosotros desde `nosotros.html`** | `src/pages/Nosotros.tsx`: hero, por qué consorcio, diferenciador, confianza (stats reales), misión/visión/valores, testimonios con TESTIMONIALS, CTA; fuente HTML conservada en `src/sections/nosotros.html` |
| 26 Sep 2026 | Navbar/Footer con `Link` de router; transparente solo en Home | Menú: Inicio · Programas ▾ (scroll a tarjetas en Home) · Requisitos · Proyectos · Servicios · Nosotros · FAQs · Galería + COTIZAR AHORA; CTAs de Hero/Programs/Quiz/VideoTour → rutas (`/proyectos`, `/contacto`, `/requisitos`) |
| 26 Sep 2026 | **Sprints 1–4** (contenido programas + FAQs + menú 3 áreas + rendimiento) | Ver filas anteriores; checklist CEO en `doc/01`, borradores en `doc/07` |
| 26 Sep 2026 | **Sprint 1**: bloque "¿Qué es Techo Propio?" en sección Programas | Requisitos/beneficios en bullets, CTAs "Solicita información"/"Descarga requisitos", enlaces oficiales (gob.pe/mvcs, mivivienda.com.pe) |
| 26 Sep 2026 | **Sprint 2**: sección FAQs (`#faqs`) con acordeón | 10 preguntas en 3 grupos (Techo Propio, BPVVRS, MiVivienda) según borrador doc/07 |
| 26 Sep 2026 | **Sprint 3**: menú desplegable "Programas" | Sub-ítems: Techo Propio (#techo-propio), Bono de Reforzamiento (#reforzamiento), Crédito MiVivienda (#credito-mivivienda); sub-lista en móvil |
| 26 Sep 2026 | Ruta `inicio → programas → requisitos → proyectos → ...` + Navbar limpio | Quitado ítem "Contacto" (ya existe CTA COTIZAR AHORA); agregado "Programas" al menú |
| 26 Sep 2026 | Hero: slideshow con proyectos reales recientes + estilo limpio FMV | 5 fotos reales de entregas (src/imports) en autoplay 6 s; texto a la izquierda (eyebrow + título + 1 línea + 1 CTA); badge del proyecto actual; dots navegables; logo +80% |
| 26 Sep 2026 | Video Recorrido 3D: `preload=none` + poster (foto real) | Ya no se descarga al cargar/tocar la sección (≈9.6 MB); baja solo al reproducir |
| 26 Sep 2026 | Lazy-load slides del hero | Primer slide `eager`+`fetchPriority=high`; resto `lazy`/`async` |
| 25 Sep 2026 | Se crea carpeta `doc/` | Documentación de funciones y observaciones del CEO |

## Pendiente de implementar (CEO)
Ver checklist en [01-observaciones-ceo-ux-ui.md](./01-observaciones-ceo-ux-ui.md):
- Comprimir imágenes de `public/modelos/` (≈1.4–2.3 MB c/u, ×30) para el modal de planos.
- Validación del CEO del contenido de doc/07 (FAQ y "¿Qué es Techo Propio" aún a confirmar, en particular ahorro mínimo y FSV).