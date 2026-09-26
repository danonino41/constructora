import {
  Building2,
  Award,
  CheckCircle,
  Clock,
  LandPlot,
  FileText,
  Home,
  Hammer,
  BedSingle,
  BedDouble,
  TrendingUp,
  PiggyBank,
  Banknote,
  MessageCircle,
  ShieldCheck,
  CalendarClock,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type NavLink = { label: string; href: string };

export const NAV_LINKS: NavLink[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Requisitos", href: "#requisitos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
];

export type Service = { icon: LucideIcon; title: string; desc: string };

export const SERVICES: Service[] = [
  { icon: Building2, title: "Construcción a llave", desc: "Entregamos tu vivienda lista para habitar. Nos encargamos de todo el proceso constructivo con materiales de primera calidad." },
  { icon: Award, title: "Diseño arquitectónico", desc: "Planos 3D personalizados, renders fotorrealistas y asesoría de arquitectos certificados para tu proyecto ideal." },
  { icon: CheckCircle, title: "Habilitación urbana", desc: "Gestión completa de licencias, permisos municipales y trámites legales para tu terreno o proyecto." },
  { icon: Clock, title: "Plazos garantizados", desc: "Cumplimos los cronogramas pactados. Penalidad por demora en contrato. Tu inversión protegida desde el día uno." },
];

export type Stat = { value: string; label: string };

export const STATS: Stat[] = [
  { value: "3,367", label: "Viviendas construidas a nivel nacional" },
  { value: "11", label: "Departamentos atendidos" },
  { value: "+10", label: "Años de experiencia" },
  { value: "1ª", label: "Empresa en entregar viviendas tras el Niño Costero" },
];

export const CONTACT = {
  phones: ["993 611 523", "937 202 783", "960 989 470"],
  email: "contacto@consorcioconstructor.com",
  facebook: "https://www.facebook.com/consorcioconstructorperu/",
  tiktok: "https://www.tiktok.com/@consorcioconstructor",
  sedes: [
    { city: "Lima", address: "Av. Próceres de Huandoy Mz. C Lt. 13, 3er Piso, Los Olivos", map: "https://maps.app.goo.gl/mhcXXkTqkGnoRnbD6" },
    { city: "Ica", address: "Calle 20 Mz M, Lotes 19, 20 y 21, Urb. Valle Esmeralda, Pueblo Nuevo", map: "https://maps.app.goo.gl/5RfGWYXHLqX3Zhwb8" },
    { city: "Lambayeque", address: "Av. Augusto B. Leguía N° 190, Olmos", map: "https://maps.app.goo.gl/Adqc457dxT7dMjDeA" },
  ],
};

export type Testimonial = { name: string; location: string; text: string; stars: number };

export const TESTIMONIALS: Testimonial[] = [
  { name: "Carlos Ramos", location: "Lima, Perú", text: "Excelente atención desde el primer día. Mi casa quedó exactamente como la veía en los renders. Cumplieron el plazo al 100%.", stars: 5 },
  { name: "María Flores", location: "Ica, Perú", text: "El equipo de Consorcio Constructor me orientó en todo el proceso. Calidad de materiales impresionante para el precio.", stars: 5 },
  { name: "Jorge Mendoza", location: "Arequipa, Perú", text: "Contraté el modelo familiar plus y estoy más que contento. El trato fue siempre profesional y transparente.", stars: 5 },
];

export type ReelSlide = { title: string; text: string; url: string; img: string };

export const FB_POSTS: ReelSlide[] = [
  {
    title: "¡Construye tu hogar con confianza y respaldo! 🚀",
    text: "Imagina abrir la puerta de tu propia casa, ese espacio que siempre soñaste, construido con calidad, seguridad y rapidez. En Consorcio Constructor llevamos más de 10 años haciendo realidad los sueños de cientos de familias, brindando viviendas dignas y accesibles. Contáctanos ahora: wa.me/51993611523 – wa.me/51937202783 – wa.me/51960989470.",
    url: "https://web.facebook.com/photo/?fbid=122119015778799983&set=pb.61573999493709.-2207520000",
    img: "/PublicacionesFB/IMG1.jpeg",
  },
  {
    title: "Estamos aquí para hacer tu sueño posible 🫂",
    text: "Con 2944 viviendas construidas en todo el país, seguimos haciendo realidad el sueño de muchas familias. Seguros, rápidos y con calidad garantizada. ¡Tu hogar está más cerca de lo que piensas! Contáctanos: wa.me/51993611523 – wa.me/51937202783 – wa.me/51960989470.",
    url: "https://web.facebook.com/photo/?fbid=122117502008799983&set=pb.61573999493709.-2207520000",
    img: "/PublicacionesFB/IMG2.jpeg",
  },
  {
    title: "HACEMOS REALIDAD TU SUEÑO DE VIVIENDA ✨",
    text: "Cada entrega es un paso hacia un futuro mejor. En Consorcio Constructor trabajamos para que más familias accedan a un hogar seguro, cómodo y accesible. Contáctanos: wa.me/51993611523 – wa.me/51937202783 – wa.me/51960989470.",
    url: "https://web.facebook.com/photo/?fbid=122111363198799983&set=pb.61573999493709.-2207520000",
    img: "/PublicacionesFB/IMG3.jpeg",
  },
  {
    title: "¡Tu nuevo hogar te espera! 🏡",
    text: "Si cumples con estos requisitos, puedes postular. ¡Es momento de construir tu futuro! Comúnícate con nosotros: wa.me/51993611523 – wa.me/51937202783 – wa.me/51960989470.",
    url: "https://web.facebook.com/photo/?fbid=122095834400799983&set=pb.61573999493709.-2207520000",
    img: "/PublicacionesFB/IMG4.jpeg",
  },
  {
    title: "CONSTRUIMOS SUEÑOS, ENTREGAMOS HOGARES ✨",
    text: "Cada llave que entregamos representa un nuevo comienzo para una familia. Tu hogar propio está más cerca de lo que imaginas. ¡Haz realidad tu sueño hoy mismo! Contáctanos: wa.me/51993611523 – wa.me/51937202783 – wa.me/51960989470.",
    url: "https://web.facebook.com/photo/?fbid=122095635008799983&set=pb.61573999493709.-2207520000",
    img: "/PublicacionesFB/IMG5.jpeg",
  },
  {
    title: "Con el Bono Familiar Habitacional accede a tu vivienda 💙",
    text: "Con el Bono Familiar Habitacional, accede a una vivienda segura, moderna y bien ubicada. ¡Tu hogar está más cerca de lo que imaginas! Contáctanos: wa.me/51993611523 – wa.me/51937202783 – wa.me/51960989470.",
    url: "https://web.facebook.com/photo/?fbid=122094962336799983&set=pb.61573999493709.-2207520000",
    img: "/PublicacionesFB/IMG6.jpeg",
  },
  {
    title: "¡BIENVENIDOS A SU NUEVO HOGAR! 🏡✨",
    text: "Cumplimos el sueño de miles de familias de tener un techo propio y un nuevo comienzo. Contáctanos y haz realidad tu hogar: wa.me/51993611523 – wa.me/51937202783 – wa.me/51960989470.",
    url: "https://web.facebook.com/photo/?fbid=122094403352799983&set=pb.61573999493709.-2207520000",
    img: "/PublicacionesFB/IMG7.jpeg",
  },
];

export type QuizProgram = { id: string; name: string; tagline: string; desc: string; includes: string[]; timeline: string; icon: LucideIcon };

export const QUIZ_PROGRAMS: QuizProgram[] = [
  {
    id: "terreno",
    name: "Programa Terreno + Construcción",
    tagline: "De la búsqueda del terreno a la entrega de llaves",
    desc: "¿Quieres construir pero aún no tienes dónde? Nos encargamos de encontrar el terreno ideal, habilitarlo y construir tu vivienda completa a llave, todo en un solo contrato.",
    includes: ["Búsqueda y compra del terreno", "Habilitación urbana y saneamiento", "Diseño arquitectónico y renders 3D", "Construcción e instalaciones completas", "Licencias y trámites municipales"],
    timeline: "10 a 14 meses",
    icon: LandPlot,
  },
  {
    id: "habilitacion",
    name: "Programa Habilitación + Construcción",
    tagline: "Regularizamos tu terreno y construimos encima",
    desc: "Tienes terreno pero sin título o sin servicios básicos. Regularizamos la situación legal, habilitamos tu terreno y construimos tu casa a llave, en un solo acompañamiento.",
    includes: ["Saneamiento físico-legal del terreno", "Habilitación urbana (agua, luz, desagüe)", "Licencia de construcción", "Construcción a llave con materiales certificados", "Trámites municipales incluidos"],
    timeline: "8 a 12 meses",
    icon: FileText,
  },
  {
    id: "construccion",
    name: "Programa Construcción a Llave",
    tagline: "Tu terreno listo, nosotros hacemos todo lo demás",
    desc: "Tu terreno ya está habilitado y con título. Nosotros nos encargamos del diseño, la construcción, los acabados y la entrega de llaves con plazos garantizados en contrato.",
    includes: ["Diseño arquitectónico y renders 3D", "Licencias y permisos", "Construcción con materiales certificados", "Acabados e instalaciones completas", "Entrega llave en mano"],
    timeline: "4 a 6 meses",
    icon: Home,
  },
  {
    id: "reforzamiento",
    name: "Programa Reforzamiento y Ampliación",
    tagline: "Damos nueva vida a tu casa actual",
    desc: "¿Necesitas reforzar tu vivienda o ampliarla? Evaluamos la estructura actual, reforzamos lo necesario y construimos las nuevas áreas con ingeniería certificada.",
    includes: ["Evaluación estructural del inmueble", "Diseño del reforzamiento o ampliación", "Licencias y permisos", "Ejecución con ingeniería certificada", "Acabados e instalaciones"],
    timeline: "8 a 16 semanas según alcance",
    icon: Hammer,
  },
];

export type QuizOption = { label: string; desc?: string; value: string; program?: string; model?: string; icon: LucideIcon };

export type QuizStep = { key: string; question: string; hint?: string; options: QuizOption[] };

export const QUIZ_STEPS: QuizStep[] = [
  {
    key: "terreno",
    question: "¿Con qué terreno cuentas hoy?",
    hint: "Define el punto de partida de tu proyecto.",
    options: [
      { label: "No tengo terreno aún", desc: "Buscamos y habilitamos el terreno por ti", value: "no-tengo", program: "terreno", icon: LandPlot },
      { label: "Tengo terreno sin habilitar", desc: "Sin título o sin servicios básicos", value: "sin-habilitar", program: "habilitacion", icon: FileText },
      { label: "Tengo terreno habilitado", desc: "Con título y servicios listos", value: "habilitado", program: "construccion", icon: Home },
      { label: "Quiero reforzar o ampliar mi casa", desc: "Ya tengo una construcción existente", value: "reforzar", program: "reforzamiento", icon: Hammer },
    ],
  },
  {
    key: "tipo",
    question: "¿Qué tipo de proyecto tienes en mente?",
    hint: "Nos ayuda a recomendar el modelo adecuado.",
    options: [
      { label: "Vivienda para mi familia", value: "vivienda", icon: Home },
      { label: "Segunda vivienda o inversión", value: "inversion", icon: TrendingUp },
      { label: "Local o negocio propio", value: "negocio", icon: Building2 },
    ],
  },
  {
    key: "dormitorios",
    question: "¿Cuántos ambientes necesitas?",
    hint: "Definimos la superficie y el modelo ideal.",
    options: [
      { label: "Estudio / 1 dormitorio", desc: "Para 1 o 2 personas", value: "estudio", model: "Modelo Estudio Premium · 45 m²", icon: BedSingle },
      { label: "2 dormitorios", desc: "Para parejas o familias pequeñas", value: "familiar", model: "Modelo Familiar Clásico o Plus · 72–80 m²", icon: BedDouble },
      { label: "3 dormitorios o más", desc: "Familias grandes o espacios amplios", value: "amplio", model: "Plan a medida · desde 80 m²", icon: Home },
    ],
  },
  {
    key: "financiamiento",
    question: "¿Cómo planeas financiar tu proyecto?",
    hint: "Un asesor te explica las opciones disponibles.",
    options: [
      { label: "Bono / crédito MIVIVIENDA", value: "mivivienda", icon: ShieldCheck },
      { label: "Crédito hipotecario o bancario", value: "credito", icon: Banknote },
      { label: "Ahorros propios", value: "ahorros", icon: PiggyBank },
      { label: "Necesito orientación", value: "orientacion", icon: MessageCircle },
    ],
  },
  {
    key: "plazo",
    question: "¿En qué plazo quisieras iniciar?",
    hint: "Última pregunta. Depende de ti.",
    options: [
      { label: "Este mes", value: "urgente", icon: CalendarClock },
      { label: "En 3 a 6 meses", value: "pronto", icon: Clock },
      { label: "Solo estoy explorando opciones", value: "explorando", icon: Sparkles },
    ],
  },
];

export type ModelItem = {
  kind?: string;
  title?: string;
  name: string;
  badge: { text: string } | null;
  desc: string;
  area: string;
  feat: string;
  featIcon?: string;
  iconCls?: string;
  img: string;
  plan: string;
};