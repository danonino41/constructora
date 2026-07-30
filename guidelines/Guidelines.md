# Constructora Landing Page Redesign Guidelines

## Overview

Este documento contiene los lineamientos para el rediseño del landing page de Consorcio Constructor, enfocándose en mejorar la experiencia visual del usuario y la jerarquía de información.

## Componentes Principales del Sistema Actual

El App.tsx actual contiene los siguientes componentes principales:

1. **Navbar** - Menú de navegación fijo superior con toggle para móvil
2. **Hero** - Sección principal con video de fondo, título y estadísticas de la compañía
3. **Projects** - Grid de 6 tarjetas de modelos de viviendas con efecto hover
4. **VideoTour** - Sección de video demostrativo dentro de contenedor estilizado
5. **Services** - Grid de 4 tarjetas de servicios con iconos
6. **About** - Sección sobre la empresa con imagenes y características
7. **Testimonials** - 3 tarjetas de testimonios de clientes con estrellas
8. **Contact** - Formulario de contacto en dos columnas con información de contacto
9. **Footer** - Pie de página con enlaces de navegación y información de contacto

## Requisitos de Rediseño

### 1. Hero Section (Sección Inicio)
- Usar `VIDEO_RECORRIDO_3D.mp4` como video de fondo a pantalla completa
- Fondo de header transparente con transición a negro al hacer scroll
- Título principal: "CONSTRUIMOS TU HOGAR IDEAL" (diseñado en esquina inferior izquierda)
- Contador vertical de estadísticas (150+ viviendas, 12 años, 98% clientes satisfechos, 8 provincias) en el lado derecho
- Efecto de texto superpuesto con difuminado para contraste en video oscuro
- Paleta de colores oscura para el diseño actual, pero se prefiere un tema claro para clientes no técnicos

### 2. Navegación (Navbar)
- Header con efecto de fondo transparente a negro al hacer scroll
- Logo centrado con diseño corporativo "C.C." y "CONSORCIO CONSTRUCTOR"
- Enlaces de navegación: Inicio, Proyectos, Servicios, Nosotros, Contacto
- Versión móvil con menú colapsable en fondo blanco

### 3. Colores y Tipografía
- Fondo principal: Blanco para mejor accesibilidad
- Dorado de marca #f5b700 para acentos y llamadas a la acción
- Texto principal: Negro #000000 o gris oscuro #1a1a1a
- Tipografía:
  - Títulos: Barlow Condensed (Weight 700-800)
  - Cuerpo: Barlow (Weight 300-500)

### 4. Componentes Re-diseñados
- **Project Cards**: Mantenidas pero con rediseño estético de fila a grid
- **Service Cards**: Rediseñadas con fondo claro y efects hover mejorados
- **Testimonial Cards**: Mantenidas con rediseño estético
- **Contact Form**: Rediseñado con validación mejorada

## Plan de Implementación

### Fase 1: Análisis de Componentes (Completado)
- ✅ Documentación de componentes identificados
- ✅ Requisitos de rediseño documentados

### Fase 2: Planificación del Componente
- Crear prototipo del Hero con video de fondo
- Planear detalles de transición del header
- Diseñar nueva paleta de colores

### Fase 3: Implementación del Componente
- Rediseñar Hero con tema claro y video de fondo
- Implementar efecto de scroll del header
- Rediseñar cards de servicios y elementos específicos

### Fase 4: Pruebas y Validación
- Pruebas de responsividad en dispositivos móviles
- Pruebas de transición al hacer scroll
- Validación de contrates en diferentes condiciones de iluminación

### Fase 5: Documentación
- Documentación de cambios
- Documentación de los lineamientos de estilos

## Métricas Clave de Proyecto

- **Retención del usuario**: +15-20% esperada
- **Conversión en formulario**: +10-15% esperada
- **Tiempo de carga**: Reducido por tema claro (procesamiento menos intensivo)
- **Puntuación de accesibilidad**: Target AA+

## Contenido Importante del Prototipo

### Modelos de Vivienda (ORIGINALES)
- Modelo Estudio Premium: 45 m², 1 dormitorio, "Top ventas"
- Modelo Familiar Clásico: 72 m², 2 dormitorios, "Disponible"
- Modelo Familiar Plus: 80 m², 2 dormitorios, "Disponible"
- Modelo Moderno Coral: 68 m², 1 dormitorio, "Nuevo"
- Modelo Clásico Dorado: 65 m², 1 dormitorio, "Disponible"
- Modelo Compacto Urbano: 38 m², Estudio, "Disponible"

### Servicios (ORIGINALES)
- Construcción a llave
- Diseño arquitectónico
- Habilitación urbana
- Plazos garantizados

### Datos de la Compañía
- Más de 150 viviendas entregadas
- 12 años de experiencia
- 98% clientes satisfechos
- 8 provincias atendidas

## Tech Stack Actual
- React 18.3.1 + TypeScript
- Vite 6.3.5
- Tailwind CSS 4.1.12 + @tailwindcss/vite
- @emotion/react + @emotion/styled
- Lucide React (20+ íconos)
- Radix UI (9 componentes)
- Framer Motion para animaciones
- date-fns, react-hook-form y muchos más

## Recurso Clave
- Video: `src/imports/VIDEO_RECORRIDO_3D.mp4`
- Diseño de referencia original: Figma (en README.md)

## Entregables de la Fase 1
- Documentación completa de componentes
- Requisitos de rediseño concretos
- Esquema de colores definitivos
- Plan de transición y navegación