import type { LucideIcon } from "lucide-react";
import { Landmark, Banknote, HandCoins, ShieldCheck } from "lucide-react";

export type Paso = { icon: LucideIcon; title: string; desc: string };

export type ProgramaDetalle = {
  id: string;
  eyebrow: string;
  heroTitle: string;
  heroSub: string;
  intro: string[];
  paraQuien: string[];
  beneficios: { title: string; desc: string }[];
  requisitos: string[];
  pasos: Paso[];
  faq: { q: string; a: string }[];
  fuentes: { label: string; href: string }[];
};

export const PROGRAMAS_DETALLE: Record<string, ProgramaDetalle> = {
  "techo-propio": {
    id: "techo-propio",
    eyebrow: "PROGRAMA DEL ESTADO",
    heroTitle: "Programa Techo Propio",
    heroSub:
      "El Bono Familiar Habitacional (BFH) te ayuda a construir, comprar o mejorar tu vivienda. Es un subsidio del Estado que no se devuelve: nosotros te acompañamos en todo el proceso.",
    intro: [
      "Techo Propio es un programa del Estado peruano que ayuda a las familias a obtener, construir o mejorar su vivienda. Entrega un Bono Familiar Habitacional (BFH): un subsidio directo que no se devuelve y que se suma a tu ahorro para financiar tu hogar.",
      "Nosotros no solo construimos: gestionamos tu registro ante el programa, preparamos tu expediente y coordinamos el proyecto con las entidades del Estado para que tu bono llegue a buen término.",
    ],
    paraQuien: [
      "Familias que quieren construir en su propio terreno, comprar una vivienda o mejorar la actual.",
      "Ingresos familiares de hasta S/ 3,715 (compra) o S/ 2,706 (construcción).",
      "Quienes no poseen otra vivienda a nivel nacional.",
      "Familias con un ahorro mínimo (10 % del valor de la vivienda en construcción o 7,5 % en compra; te orientamos con el monto exacto vigente).",
    ],
    beneficios: [
      { title: "Subsidio no reembolsable", desc: "No es un préstamo: el bono se suma a tu ahorro y no se devuelve." },
      { title: "Acompañamiento paso a paso", desc: "Nosotros gestionamos el registro y el proyecto; tú solo nos entregas tus datos." },
      { title: "Combinable con crédito", desc: "Puedes sumar el bono a un crédito hipotecario para completar tu vivienda." },
      { title: "Construcción llave en mano", desc: "Del expediente a la entrega de llaves: materiales, supervisión y plazos garantizados." },
    ],
    requisitos: [
      "Ser ciudadano peruano (o extranjero con residencia).",
      "No ser propietario de otra vivienda a nivel nacional.",
      "Contar con el ahorro mínimo del valor de la vivienda.",
      "Cumplir los topes de ingreso familiar: S/ 3,715 (compra) o S/ 2,706 (construcción).",
    ],
    pasos: [
      { icon: HandCoins, title: "Conoce el programa", desc: "Te explicamos modalidades, topes, ahorro y plazos según tu caso." },
      { icon: Landmark, title: "Descarga requisitos", desc: "Te enviamos la lista actualizada de documentos para tu postulación." },
      { icon: ShieldCheck, title: "Solicita información", desc: "Un asesor revisa tu caso y arma tu expediente junto al MVCS." },
    ],
    faq: [
      { q: "¿Tengo que devolver el bono?", a: "No. El Bono Familiar Habitacional (BFH) es un subsidio no reembolsable: no se devuelve y se suma a tu ahorro para financiar tu vivienda." },
      { q: "¿Puedo usarlo para construir en mi terreno?", a: "Sí, es una de las modalidades principales del programa. Techo Propio permite comprar, construir en terreno propio o mejorar la vivienda." },
      { q: "¿Cuál es el tope de ingreso?", a: "Ingresos familiares de hasta S/ 3,715 para compra o S/ 2,706 para construcción de vivienda." },
      { q: "¿Necesito ahorro previo?", a: "Sí, se exige un ahorro mínimo del valor de la vivienda. Nosotros te orientamos con el monto vigente y el calendario del ahorro." },
    ],
    fuentes: [
      { label: "gob.pe/mvcs", href: "https://www.gob.pe/mvcs" },
      { label: "mivivienda.com.pe", href: "https://www.mivivienda.com.pe" },
    ],
  },
  "credito-mivivienda": {
    id: "credito-mivivienda",
    eyebrow: "CRÉDITO HIPOTECARIO",
    heroTitle: "Nuevo Crédito MiVivienda",
    heroSub:
      "Financia hasta el 90 % de tu vivienda nueva o el 100 % de la construcción en tu propio terreno, con beneficios del Estado como el Bono del Buen Pagador.",
    intro: [
      "El Nuevo Crédito MiVivienda es un crédito hipotecario con beneficios del Estado para comprar vivienda nueva o construir en tu propio terreno. Se solicita a través de entidades financieras autorizadas y puede combinarse con el Bono del Buen Pagador.",
      "Nosotros preparamos tu expediente, te orientamos en la elección del financiamiento y coordinamos la construcción o compra para que todo avance de una sola vez.",
    ],
    paraQuien: [
      "Familias que quieren comprar una vivienda nueva.",
      "Familias que ya tienen terreno y quieren construir con financiamiento.",
      "Quienes buscan un subsidio adicional del Estado (Bono del Buen Pagador).",
    ],
    beneficios: [
      { title: "Financia construcción o compra", desc: "Cubre vivienda nueva y construcción en sitio propio." },
      { title: "Bono del Buen Pagador", desc: "Reduce tu deuda si cumples el pago puntual de tus cuotas." },
      { title: "Hasta 90 % de financiamiento", desc: "Con una cuota inicial accesible según tu capacidad de pago." },
      { title: "Asesoría completa", desc: "Preparamos tu expediente y te acompañamos ante la entidad financiera." },
    ],
    requisitos: [
      "Ingresos familiares dentro de los rangos del programa.",
      "No poseer otra vivienda a nivel nacional (según modalidad).",
      "Contar con la cuota inicial y capacidad de pago.",
      "Tener DNI vigente y documento del terreno (para construcción).",
    ],
    pasos: [
      { icon: HandCoins, title: "Evalúa tu caso", desc: "Analizamos tu capacidad de pago y el monto que puedes financiar." },
      { icon: Landmark, title: "Prepara tu expediente", desc: "Armamos la documentación para tu entidad financiera." },
      { icon: Banknote, title: "Desembolsa y construye", desc: "El crédito se desembolsa por etapas y nosotros construimos llave en mano." },
    ],
    faq: [
      { q: "¿Financia construcción en mi terreno?", a: "Sí. El Nuevo Crédito MiVivienda financia la construcción en sitio propio, además de la compra de vivienda nueva." },
      { q: "¿Qué es el Bono del Buen Pagador?", a: "Un beneficio estatal que reduce tu deuda si cumples el pago de tus cuotas. Es un incentivo adicional al crédito." },
      { q: "¿Necesito un banco?", a: "Sí, es un crédito hipotecario otorgado por entidades financieras. Nosotros preparamos y orientamos tu expediente para que lo solicites de forma eficiente." },
    ],
    fuentes: [
      { label: "mivivienda.com.pe", href: "https://www.mivivienda.com.pe" },
      { label: "gob.pe/mvcs", href: "https://www.gob.pe/mvcs" },
    ],
  },
  reforzamiento: {
    id: "reforzamiento",
    eyebrow: "BONO DEL ESTADO",
    heroTitle: "Bono de Reforzamiento Estructural",
    heroSub:
      "Subsidio no reembolsable que financia el refuerzo sísmico de tu vivienda. Orientado a hogares en situación de pobreza en zonas vulnerables.",
    intro: [
      "El Bono de Reforzamiento Estructural (BPVVRS) es un subsidio no reembolsable del Estado que financia el refuerzo sísmico de viviendas autoconstruidas o en zonas de riesgo. Se evalúa la vivienda y se ejecutan las intervenciones estructurales necesarias.",
      "Consorcio Constructor inscribe tu proyecto, coordina con el MVCS y ejecuta el refuerzo con ingeniería certificada: tu casa queda más segura para tu familia.",
    ],
    paraQuien: [
      "Hogares en situación de pobreza o pobreza extrema.",
      "Viviendas vulnerables a riesgos sísmicos (autoconstruidas o sin refuerzo).",
      "Familias que no pueden asumir por sí mismas el costo del reforzamiento.",
    ],
    beneficios: [
      { title: "Subsidio del Estado", desc: "El bono cubre el refuerzo: no se devuelve ni se convierte en deuda." },
      { title: "Reducción del riesgo sísmico", desc: "Intervenciones estructurales que protegen a tu familia." },
      { title: "Trámites por nosotros", desc: "Inscripción del proyecto y coordinación con el MVCS incluidas." },
      { title: "Ingeniería certificada", desc: "Evaluación estructural, diseño y ejecución con profesionales colegiados." },
    ],
    requisitos: [
      "Pertenecer a un hogar en situación de pobreza (según evaluación del programa).",
      "Contar con una vivienda vulnerable a riesgos sísmicos.",
      "No contar con otra vivienda a nivel nacional.",
      "Documentos personales y del inmueble en regla.",
    ],
    pasos: [
      { icon: HandCoins, title: "Evalúa tu vivienda", desc: "Visitamos tu casa y determinamos si es elegible para el refuerzo." },
      { icon: Landmark, title: "Inscribe tu proyecto", desc: "Nosotros coordinamos la postulación con el MVCS y el expediente técnico." },
      { icon: ShieldCheck, title: "Refuerza tu vivienda", desc: "Ejecutamos las intervenciones estructurales con ingeniería certificada." },
    ],
    faq: [
      { q: "¿Qué viviendas califican?", a: "Viviendas vulnerables a riesgos sísmicos, de hogares en situación de pobreza. Se evalúa la vivienda y se ejecutan las intervenciones estructurales necesarias." },
      { q: "¿Es reembolsable?", a: "No. Es un subsidio no reembolsable: el Estado financia el refuerzo sísmico sin que debas devolver el dinero." },
      { q: "¿Quién hace el proyecto técnico?", a: "Consorcio Constructor inscribe tu proyecto y coordina con el MVCS, desde la evaluación hasta la ejecución del refuerzo." },
    ],
    fuentes: [
      { label: "gob.pe/mvcs", href: "https://www.gob.pe/mvcs" },
      { label: "mivivienda.com.pe", href: "https://www.mivivienda.com.pe" },
    ],
  },
};