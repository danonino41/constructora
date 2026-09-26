# Guía de marca visual

Referencia para mantener la identidad de Consorcio Constructor coherente en web, redes y material impreso (según observaciones del CEO). Aprobación de cambios: **CEO / equipo de marca**.

## Símbolo y posicionamiento de marca
- Nombre: **Consorcio Constructor**. Enfatiza la alianza de expertos (construcción, finanzas, asesoría).
- Mensaje clave: *"Accede a tu casa propia con asesoría experta y respaldo institucional"*.
- Personalidad: **solidez + cercanía + confianza**. Tono cercano y motivador.
- Público: familias de ingresos bajo a medio (urbanas y rurales vulnerables); también promotores y entidades financieras.

## Paleta institucional
Fuente: tokens en `src/styles/theme.css` (modo claro).

| Uso | Color | Hex |
|---|---|---|
| Primario (CTAs, acentos, badges) | Dorado/amarillo | `#f5b700` |
| Texto sobre dorado (botones) | Gris oscuro | `#0d0f14` |
| Texto principal (cuerpo) | Gris suave | `#4a4a49` |
| Fondo principal (claro) | Blanco | `#ffffff` |
| Fondo de sección alterno | Gris muy claro | `#f8f8f8` / `#f0f0f0` / `#f5f5f5` |
| Fondos oscuros (header/requisitos, hero stats) | Grafito | `#0d0f14` |
| Rojo (errores/eliminar) | Rojo | `#d4183d` |
| Borde sutil | Negro 10 % | `rgba(0,0,0,0.1)` |

Reglas:
- **Dorado #f5b700**: solo en elementos de marca/acción (botones, badges, acentos, detalles). No tintar bloques de texto.
- **Textos**: `#4a4a49` sobre fondo claro (contraste accesible); `#ffffff` o `#f0ece4` sobre fondo oscuro.
- No introducir colores ajenos a la paleta sin aprobación.

## Tipografía
- **Familia base: Myriad Pro** (regular y bold). Fuente del sistema Adobe; fallback en código: `"Myriad Pro", "Segoe UI", Arial, sans-serif` (`src/styles/fonts.css`).
- Estilos usados:
  - Títulos/valores destacados: **bold 700**.
  - Cuerpo y menús: **regular 400** (normalización acordada: 800→700, 300→400).
  - Mayúsculas con espaciado amplio (`letter-spacing: 0.05em–0.15em`) para etiquetas y botones.
- No usar otras familias tipográficas en la web (se eliminó Barlow/Barlow Condensed).

## Logo
- Archivo: `public/imports/logo.svg` (usado vía `<img src={logo}>`).
- Altura de referencia: header **3.6rem** (h-[3.6rem], +20 % respecto a la original). Footer: h-10.
- Conservar proporción (nunca deformar) y dejar aire alrededor.
- No usar logotipos oficiales de programas estatales (Techo Propio, MiVivienda, MVCS): **solo referencia textual** a los programas.

## Voz y tono
- Claro, directo y accesible: lenguaje sencillo sobre trámites (sin tecnicismos).
- Motivador: destacar el logro de la vivienda propia ("tu hogar está más cerca de lo que piensas").
- Referencias oficiales (Fondo MiVivienda, MVCS) mencionadas como respaldo institucional.
- Bullet points para pasos, requisitos y beneficios.

## Do / Don't
| Do | Don't |
|---|---|
| Dorado solo en acentos/acciones | Pintar párrafos completos de dorado |
| Myriad Pro en todos los textos | Introducir otra fuente (p. ej. Barlow) |
| Texto #4a4a49 sobre fondo claro | Textos de bajo contraste |
| Referencia textual a programas estatales | Usar logos oficiales Mivivienda/MVCS |
| Buenos CTAs ("Solicita información", "Cotiza ahora") | Enlaces/botones ambiguos |