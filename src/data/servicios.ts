import type { StaticImageData } from "next/image";
import casa from "@/imports/casa-terminada-amarillo-un-piso.jpeg";
import plano from "@/imports/1.png";
import obra from "@/imports/evidencia-obra.jpg";
import avance from "@/imports/evidencia-avance.jpg";

export type ServicioDetalle = {
  id: string;
  eyebrow: string;
  heroTitle: string;
  heroSub: string;
  image: StaticImageData;
  imageAlt: string;
  intro: string[];
  incluye: { title: string; desc: string }[];
  proceso: { title: string; desc: string }[];
  paraQuien: string[];
  faq: { q: string; a: string }[];
};

export const SERVICIOS_DETALLE: Record<string, ServicioDetalle> = {
  "construccion-a-llave": {
    id: "construccion-a-llave",
    eyebrow: "SERVICIO PRINCIPAL",
    heroTitle: "Construcción a llave",
    heroSub:
      "Nos encargamos de la obra completa para que recibas tu vivienda lista para habitar, con un solo responsable de principio a fin.",
    image: casa,
    imageAlt: "Vivienda terminada construida por Consorcio Constructor",
    intro: [
      "La construcción a llave es nuestro servicio principal: asumimos la ejecución completa de tu vivienda, desde la preparación del terreno hasta la entrega de las llaves.",
      "Coordinamos materiales, mano de obra, instalaciones y acabados con un equipo técnico que supervisa cada etapa. Tú no tienes que coordinar proveedores por separado ni resolver la obra a distancia.",
    ],
    incluye: [
      { title: "Dirección técnica y supervisión", desc: "Un responsable técnico revisa avances, calidad y cumplimiento del proyecto en cada etapa." },
      { title: "Materiales y acabados", desc: "Selección de materiales según el presupuesto y las especificaciones acordadas contigo." },
      { title: "Instalaciones sanitarias y eléctricas", desc: "Redes interiores ejecutadas y probadas para las conexiones correspondientes." },
      { title: "Coordinación de especialidades", desc: "Estructuras, sanitarias y eléctricas alineadas con el plano aprobado." },
      { title: "Reportes de avance", desc: "Seguimiento periódico y canal directo con el equipo durante toda la obra." },
      { title: "Entrega con conformidad", desc: "Revisión final de la vivienda y acta de entrega con el cliente." },
    ],
    proceso: [
      { title: "Evaluación del terreno y del proyecto", desc: "Revisamos el predio, el plano y el alcance de la obra para definir qué se necesita." },
      { title: "Presupuesto y cronograma", desc: "Traducimos el proyecto en partidas, materiales y fechas claras antes de iniciar." },
      { title: "Ejecución supervisada", desc: "Construimos por etapas con control de avance, calidad y seguridad." },
      { title: "Entrega de llaves", desc: "Hacemos la revisión final, levantamos observaciones y entregamos la vivienda." },
    ],
    paraQuien: [
      "Familias con terreno propio que quieren construir su vivienda.",
      "Familias que ya accedieron a un bono o crédito y necesitan ejecutar la obra.",
      "Quienes buscan un solo responsable en lugar de coordinar varios contratistas.",
    ],
    faq: [
      { q: "¿La construcción a llave incluye materiales?", a: "Sí. El alcance se detalla en el presupuesto: materiales, mano de obra, instalaciones y acabados quedan definidos antes de firmar." },
      { q: "¿Puedo visitar la obra?", a: "Sí. Coordinamos visitas y reportes de avance para que veas el estado real del proyecto." },
      { q: "¿Qué pasa si quiero cambiar algo durante la obra?", a: "Los cambios se evalúan con el equipo técnico para revisar su impacto en costo y plazo antes de ejecutarlos." },
      { q: "¿Trabajan con el plano que ya tengo?", a: "Sí. Revisamos tu plano y verificamos que sea viable para la ejecución y la normativa aplicable." },
    ],
  },

  "diseno-arquitectonico": {
    id: "diseno-arquitectonico",
    eyebrow: "DISEÑO Y PLANIFICACIÓN",
    heroTitle: "Diseño arquitectónico",
    heroSub:
      "Convertimos tus necesidades y tu terreno en planos claros, renders y una distribución pensada para tu presupuesto.",
    image: plano,
    imageAlt: "Plano 3D de vivienda con distribución de ambientes",
    intro: [
      "El diseño es la etapa donde se define cómo se vivirá la casa. Trabajamos la distribución, la fachada y la relación con el terreno antes de construir.",
      "Entregamos planos y visualizaciones para que puedas tomar decisiones con claridad, no sobre supuestos. Así llegas a la obra con un proyecto entendido y medido.",
    ],
    incluye: [
      { title: "Análisis del terreno y del programa", desc: "Revisamos medidas, accesos, orientación y cómo se organiza tu familia." },
      { title: "Distribución y anteproyecto", desc: "Propuestas de ambientes, circulación y fachada alineadas a tu presupuesto." },
      { title: "Planos de arquitectura", desc: "Documentos gráficos con medidas, cortes y detalles para la construcción." },
      { title: "Renders 3D", desc: "Visualizaciones para ver la casa antes de construirla y validar acabados." },
      { title: "Revisión normativa", desc: "Verificación de parámetros y requisitos aplicables al proyecto." },
      { title: "Ajustes con el cliente", desc: "Iteraciones acordadas hasta llegar a la versión final del diseño." },
    ],
    proceso: [
      { title: "Brief y levantamiento", desc: "Escuchamos cómo quieres vivir y revisamos las condiciones reales del terreno." },
      { title: "Anteproyecto", desc: "Proponemos la distribución y la fachada para que apruebes la dirección del diseño." },
      { title: "Renders y ajustes", desc: "Visualizas el resultado y afinamos ambientes, materiales y detalles." },
      { title: "Planos finales", desc: "Cerramos la documentación gráfica lista para presupuestar y construir." },
    ],
    paraQuien: [
      "Familias que tienen un terreno y quieren definir su vivienda antes de construir.",
      "Personas que necesitan ordenar ideas, medidas y presupuesto en un proyecto claro.",
      "Quienes ya tienen un plano y quieren revisarlo o mejorarlo antes de ejecutar.",
    ],
    faq: [
      { q: "¿El diseño incluye los planos para la licencia?", a: "El alcance se acuerda con cada cliente. Podemos preparar la documentación gráfica necesaria y coordinar los requisitos municipales." },
      { q: "¿Puedo pedir cambios al diseño?", a: "Sí. El proceso contempla iteraciones para ajustar la propuesta antes de cerrar los planos finales." },
      { q: "¿Necesito tener el terreno para empezar?", a: "Lo ideal es contar con las medidas reales. Si aún no lo tienes, podemos partir de un terreno referencial y ajustar después." },
      { q: "¿Los renders son obligatorios?", a: "No. Son una herramienta para visualizar el resultado; el alcance se define según lo que necesites." },
    ],
  },

  "habilitacion-urbana": {
    id: "habilitacion-urbana",
    eyebrow: "TERRENO Y TRÁMITES",
    heroTitle: "Habilitación urbana",
    heroSub:
      "Ordenamos la ruta técnica y legal de tu terreno para que el proyecto cumpla con la normativa y pueda ejecutarse.",
    image: obra,
    imageAlt: "Obra en proceso con estructura y materiales de construcción",
    intro: [
      "Antes de construir, el terreno y el proyecto deben cumplir requisitos municipales y técnicos. Nos encargamos de ordenar esa ruta para reducir frenos administrativos.",
      "Gestionamos licencias, permisos y documentación, y hacemos seguimiento a las observaciones hasta obtener las conformidades que permitan avanzar.",
    ],
    incluye: [
      { title: "Diagnóstico del terreno", desc: "Revisión de zonificación, accesos y antecedentes del predio." },
      { title: "Ruta de trámites", desc: "Identificación de licencias, permisos y documentos necesarios para tu caso." },
      { title: "Expediente técnico", desc: "Organización de planos, memorias y formatos requeridos por la entidad." },
      { title: "Gestión municipal", desc: "Presentación y seguimiento de la solicitud ante la entidad correspondiente." },
      { title: "Levantamiento de observaciones", desc: "Coordinación para responder requerimientos y completar el expediente." },
      { title: "Entrega de conformidades", desc: "Documentos obtenidos y estado final del trámite." },
    ],
    proceso: [
      { title: "Diagnóstico", desc: "Revisamos el terreno, su situación legal y lo que exige la normativa aplicable." },
      { title: "Expediente", desc: "Armamos la documentación técnica y administrativa que sustenta la solicitud." },
      { title: "Presentación y seguimiento", desc: "Ingresamos el expediente y hacemos seguimiento a cada requerimiento." },
      { title: "Conformidad", desc: "Entregamos los documentos obtenidos y el estado final del trámite." },
    ],
    paraQuien: [
      "Propietarios de terrenos que necesitan ordenar su situación antes de construir.",
      "Familias que quieren construir y deben cumplir requisitos municipales.",
      "Proyectos que requieren licencias, permisos o levantamiento de observaciones.",
    ],
    faq: [
      { q: "¿Qué es la habilitación urbana?", a: "Es el proceso técnico y legal mediante el cual un terreno se incorpora al área urbana con vías y servicios, según la normativa municipal." },
      { q: "¿Siempre se necesita?", a: "Depende del terreno y del proyecto. Revisamos tu caso y te decimos con claridad qué trámites corresponden." },
      { q: "¿Cuánto demora el trámite?", a: "Depende de la municipalidad y del estado del expediente. Te damos un cronograma referencial y te mantenemos informado." },
      { q: "¿Puedo iniciar la obra mientras tramito?", a: "No recomendamos construir sin las autorizaciones correspondientes. Primero se ordena la ruta legal y técnica." },
    ],
  },

  "plazos-garantizados": {
    id: "plazos-garantizados",
    eyebrow: "GESTIÓN DE OBRA",
    heroTitle: "Plazos garantizados",
    heroSub:
      "Planificamos la obra con hitos, reportes de avance y un cronograma que queda por escrito antes de empezar.",
    image: avance,
    imageAlt: "Avance de obra de vivienda con estructura y cobertura",
    intro: [
      "Un plazo creíble no se promete: se planifica. Definimos etapas, responsables y fechas antes de iniciar, y medimos el avance contra ese plan.",
      "Si el cronograma se desvía, lo comunicamos con transparencia y activamos el mecanismo pactado en el contrato para proteger tu inversión.",
    ],
    incluye: [
      { title: "Cronograma por etapas", desc: "Hitos claros con fechas y responsables antes de iniciar la obra." },
      { title: "Reportes de avance", desc: "Seguimiento periódico con evidencia del estado real del proyecto." },
      { title: "Control de desviaciones", desc: "Identificación temprana de retrasos y plan de recuperación." },
      { title: "Penalidad por demora", desc: "La condición se define en el contrato y se revisa contigo antes de firmar." },
      { title: "Coordinación de proveedores", desc: "Materiales y especialidades alineados con el cronograma de obra." },
      { title: "Acta de entrega", desc: "Cierre formal al completar la obra y levantar las observaciones finales." },
    ],
    proceso: [
      { title: "Planificación", desc: "Definimos el alcance, las partidas y el cronograma realista de ejecución." },
      { title: "Hitos y reportes", desc: "Establecemos puntos de control y reportes de avance con evidencia." },
      { title: "Control de avance", desc: "Comparamos lo ejecutado contra el plan y corregimos desviaciones a tiempo." },
      { title: "Entrega en plazo", desc: "Cerramos la obra, revisamos observaciones y formalizamos la entrega." },
    ],
    paraQuien: [
      "Familias que necesitan certeza sobre cuándo estará lista su vivienda.",
      "Clientes con financiamiento o compromisos ligados a una fecha de entrega.",
      "Quienes quieren seguimiento documentado en lugar de promesas verbales.",
    ],
    faq: [
      { q: "¿La penalidad por demora está en todos los contratos?", a: "Se define en el contrato. Revisamos contigo las condiciones y el alcance antes de firmar." },
      { q: "¿Cómo sé que la obra avanza?", a: "Recibes reportes de avance y coordinamos visitas para que verifiques el estado real del proyecto." },
      { q: "¿Qué pasa si el retraso es por causas externas?", a: "El contrato distingue las causas imputables a cada parte y las de fuerza mayor, con el tratamiento que corresponda." },
      { q: "¿El plazo incluye los trámites?", a: "El cronograma detalla qué partidas y gestiones están incluidas para que no haya plazos ocultos." },
    ],
  },
};
