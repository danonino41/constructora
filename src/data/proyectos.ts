import type { LucideIcon } from "lucide-react";
import { Building2, Home } from "lucide-react";

export type ProyectoEjemplo = {
  slug: string;
  name: string;
  shortName: string;
  lot: string;
  badge: string | null;
  desc: string;
  area: string;
  feat: string;
  featIcon: string;
  img: string;
  imgHover: string;
  plan: string;
};

export type ProyectoModelo = {
  slug: string;
  label: string;
  title: string;
  subtitle: string;
  desc: string;
  longDesc: string;
  icon: LucideIcon;
  accent: string;
  ejemplos: ProyectoEjemplo[];
};

const imgHover = (img: string) => img.replace("-0001.jpg", "-0002.jpg");

export const PROYECTOS_MODELOS: ProyectoModelo[] = [
  {
    slug: "modelo-1",
    label: "Modelo 1",
    title: "Viviendas Completas",
    subtitle: "Compactas, eficientes y listas para habitar",
    desc:
      "El punto de partida ideal para tu primera vivienda: distribución optimizada, buena ventilación y acabados pensados para el día a día.",
    longDesc:
      "El Modelo 1 reúne viviendas de un nivel, con distribuciones eficientes que aprovechan cada metro cuadrado. Es la opción más directa para familias que quieren construir en su propio terreno o acceder a su primera casa con el Bono Familiar Habitacional.",
    icon: Home,
    accent: "#f5b700",
    ejemplos: [
      {
        slug: "modelo-1-35-mejorado",
        name: "Modelo 1 · 35 m² Mejorado",
        shortName: "35 m² · Mejorado",
        lot: "35 m²",
        badge: "Popular",
        desc: "Distribución optimizada con sala-comedor ampliada y ventilación natural cruzada.",
        area: "45.00 m²",
        feat: "2 Dormitorios",
        featIcon: "bed",
        img: "/modelos/m1-35-mejorado-0001.jpg",
        imgHover: imgHover("/modelos/m1-35-mejorado-0001.jpg"),
        plan: "https://drive.google.com/file/d/1OdSBRl0Y-3_C_cV6C6eb0S389q8pGEYl/preview",
      },
      {
        slug: "modelo-1-35-tradicional",
        name: "Modelo 1 · 35 m² Tradicional",
        shortName: "35 m² · Tradicional",
        lot: "35 m²",
        badge: null,
        desc: "Fachada diseñada para el confort térmico en climas cálidos, reduciendo el consumo energético.",
        area: "42.50 m²",
        feat: "1 Baño Completo",
        featIcon: "bathroom",
        img: "/modelos/m1-35-tradicional-0001.jpg",
        imgHover: imgHover("/modelos/m1-35-tradicional-0001.jpg"),
        plan: "https://drive.google.com/file/d/1oT2duZnc2uw_1Clq_E60-FYiXG-Dyk0Q/preview",
      },
      {
        slug: "modelo-1-40-mejorado",
        name: "Modelo 1 · 40 m² Mejorado",
        shortName: "40 m² · Mejorado",
        lot: "40 m²",
        badge: null,
        desc: "Ideal para familias jóvenes, maximizando cada metro cuadrado sin sacrificar estética.",
        area: "38.20 m²",
        feat: "Área Social",
        featIcon: "chair",
        img: "/modelos/m1-40-mejorado-0001.jpg",
        imgHover: imgHover("/modelos/m1-40-mejorado-0001.jpg"),
        plan: "https://drive.google.com/file/d/1Ri85qtYsLh0a9xFhMEv802CsDVB8C79S/preview",
      },
      {
        slug: "modelo-1-40-tradicional",
        name: "Modelo 1 · 40 m² Tradicional",
        shortName: "40 m² · Tradicional",
        lot: "40 m²",
        badge: null,
        desc: "Incluye lavandería techada y posibilidad de ampliación a segundo nivel.",
        area: "50.15 m²",
        feat: "Proy. 2do Piso",
        featIcon: "layers",
        img: "/modelos/m1-40-tradicional-0001.jpg",
        imgHover: imgHover("/modelos/m1-40-tradicional-0001.jpg"),
        plan: "https://drive.google.com/file/d/1DG-mnKt7eaSitgY9F7NfOTGAg_UMuYfq/preview",
      },
      {
        slug: "modelo-1-60-mejorado",
        name: "Modelo 1 · 60 m² Mejorado",
        shortName: "60 m² · Mejorado",
        lot: "60 m²",
        badge: null,
        desc: "Líneas modernas y grandes ventanales para una iluminación excepcional.",
        area: "44.80 m²",
        feat: "Cocina Kitchenette",
        featIcon: "kitchen",
        img: "/modelos/m1-60-mejorado-0001.jpg",
        imgHover: imgHover("/modelos/m1-60-mejorado-0001.jpg"),
        plan: "https://drive.google.com/file/d/1PdyK2k5wg3gFA4lrEIzSpe5soMlxBRFt/preview",
      },
      {
        slug: "modelo-1-60-tradicional",
        name: "Modelo 1 · 60 m² Tradicional",
        shortName: "60 m² · Tradicional",
        lot: "60 m²",
        badge: null,
        desc: "La mejor opción costo-beneficio para acceder rápidamente a tu primera vivienda.",
        area: "35.50 m²",
        feat: "Construcción Rápida",
        featIcon: "construction",
        img: "/modelos/m1-60-tradicional-0001.jpg",
        imgHover: imgHover("/modelos/m1-60-tradicional-0001.jpg"),
        plan: "https://drive.google.com/file/d/1EH5CEr8MX-R8NYPQyEHpakUAdQB3-ypU/preview",
      },
      {
        slug: "modelo-1-80-tradicional",
        name: "Modelo 1 · 80 m² Tradicional",
        shortName: "80 m² · Tradicional",
        lot: "80 m²",
        badge: null,
        desc: "Ideal para solteros o parejas, con una distribución tipo loft muy moderna.",
        area: "41.20 m²",
        feat: "Acabados A1",
        featIcon: "countertops",
        img: "/modelos/m1-80-tradicional-0001.jpg",
        imgHover: imgHover("/modelos/m1-80-tradicional-0001.jpg"),
        plan: "https://drive.google.com/file/d/1Vx0qEMcruibFulk8deu4pL9yDdTJDy9f/preview",
      },
    ],
  },
  {
    slug: "modelo-2",
    label: "Modelo 2",
    title: "Viviendas Amplias",
    subtitle: "Más espacio para familias que crecen",
    desc:
      "Ambientes mejor definidos, más dormitorios y áreas sociales generosas para familias de hasta cinco integrantes.",
    longDesc:
      "El Modelo 2 está pensado para familias que necesitan más espacio sin salir del esquema de vivienda social. Sus diseños priorizan dormitorios bien dimensionados, áreas comunes amplias y la posibilidad de ampliar la vivienda en el futuro.",
    icon: Building2,
    accent: "#173B66",
    ejemplos: [
      {
        slug: "modelo-2-35-mejorado",
        name: "Modelo 2 · 35 m² Mejorado",
        shortName: "35 m² · Mejorado",
        lot: "35 m²",
        badge: "Más amplio",
        desc: "Máxima capacidad para familias de hasta 5 integrantes con ambientes bien definidos.",
        area: "54.30 m²",
        feat: "3 Dormitorios",
        featIcon: "group",
        img: "/modelos/m2-35-mejorado-0001.jpg",
        imgHover: imgHover("/modelos/m2-35-mejorado-0001.jpg"),
        plan: "https://drive.google.com/file/d/1d-IZcE6OIKSUmxuloQZ59Q9TNwZ7aPM2/preview",
      },
      {
        slug: "modelo-2-35-tradicional",
        name: "Modelo 2 · 35 m² Tradicional",
        shortName: "35 m² · Tradicional",
        lot: "35 m²",
        badge: null,
        desc: "Diseño tradicional con excelente relación costo-beneficio para familias jóvenes.",
        area: "51.20 m²",
        feat: "2 Dormitorios",
        featIcon: "bed",
        img: "/modelos/m2-35-tradicional-0001.jpg",
        imgHover: imgHover("/modelos/m2-35-tradicional-0001.jpg"),
        plan: "https://drive.google.com/file/d/18pOiFs0kKghtiS_jQ2dbYbhI6QvMLq4t/preview",
      },
      {
        slug: "modelo-2-40-mejorado",
        name: "Modelo 2 · 40 m² Mejorado",
        shortName: "40 m² · Mejorado",
        lot: "40 m²",
        badge: null,
        desc: "Espacios amplios y luminosos con distribución inteligente para familias medianas.",
        area: "48.50 m²",
        feat: "2 Baños",
        featIcon: "bathroom",
        img: "/modelos/m2-40-mejorado-0001.jpg",
        imgHover: imgHover("/modelos/m2-40-mejorado-0001.jpg"),
        plan: "https://drive.google.com/file/d/13H9Y0T1n2s8Gnd5VKPiF1E7mecPEsVwv/preview",
      },
      {
        slug: "modelo-2-40-tradicional",
        name: "Modelo 2 · 40 m² Tradicional",
        shortName: "40 m² · Tradicional",
        lot: "40 m²",
        badge: null,
        desc: "Diseño clásico con acabados de primera y opción de ampliación futura.",
        area: "52.80 m²",
        feat: "Proy. 2do Piso",
        featIcon: "layers",
        img: "/modelos/m2-40-tradicional-0001.jpg",
        imgHover: imgHover("/modelos/m2-40-tradicional-0001.jpg"),
        plan: "https://drive.google.com/file/d/1pd3P1FWrNOTgmonl6e9CGV3PSyVg44Cp/preview",
      },
      {
        slug: "modelo-2-60-mejorado",
        name: "Modelo 2 · 60 m² Mejorado",
        shortName: "60 m² · Mejorado",
        lot: "60 m²",
        badge: null,
        desc: "Vivienda premium con acabados de lujo y espacios generosos para toda la familia.",
        area: "58.90 m²",
        feat: "Cocina Kitchenette",
        featIcon: "kitchen",
        img: "/modelos/m2-60-mejorado-0001.jpg",
        imgHover: imgHover("/modelos/m2-60-mejorado-0001.jpg"),
        plan: "https://drive.google.com/file/d/13Kg6yUggoxnw6SfOMIPZtaTtYA5feZv1/preview",
      },
      {
        slug: "modelo-2-60-tradicional",
        name: "Modelo 2 · 60 m² Tradicional",
        shortName: "60 m² · Tradicional",
        lot: "60 m²",
        badge: null,
        desc: "Diseño tradicional robusto, máxima durabilidad y bajo mantenimiento.",
        area: "55.40 m²",
        feat: "Construcción Rápida",
        featIcon: "construction",
        img: "/modelos/m2-60-tradicional-0001.jpg",
        imgHover: imgHover("/modelos/m2-60-tradicional-0001.jpg"),
        plan: "https://drive.google.com/file/d/1s06BJEf_q_I5jm8Kay_8idNoDOPn77sj/preview",
      },
      {
        slug: "modelo-2-80-mejorado",
        name: "Modelo 2 · 80 m² Mejorado",
        shortName: "80 m² · Mejorado",
        lot: "80 m²",
        badge: "Premium",
        desc: "Nuestra vivienda más completa: 3 dormitorios, 2 baños y amplias áreas sociales.",
        area: "78.50 m²",
        feat: "3 Dormitorios",
        featIcon: "group",
        img: "/modelos/m2-80-mejorado-0001.jpg",
        imgHover: imgHover("/modelos/m2-80-mejorado-0001.jpg"),
        plan: "https://drive.google.com/file/d/1K8PNn8q1Fok8_zguoWFJfPR3zt7wlbLl/preview",
      },
    ],
  },
];

export const PROYECTOS_POR_SLUG: Record<string, ProyectoModelo> = Object.fromEntries(
  PROYECTOS_MODELOS.map((modelo) => [modelo.slug, modelo])
);

export const PROYECTOS_TOTAL_DISENOS = PROYECTOS_MODELOS.reduce(
  (total, modelo) => total + modelo.ejemplos.length,
  0
);

export const PROYECTOS_LOTES = Array.from(
  new Set(PROYECTOS_MODELOS.flatMap((modelo) => modelo.ejemplos.map((ejemplo) => ejemplo.lot)))
);
