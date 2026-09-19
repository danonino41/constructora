import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Facebook, ArrowRight, Star, CheckCircle, Building2, Users, Award, Clock, BadgeCheck, LandPlot, FileText, Home, Hammer, BedSingle, BedDouble, TrendingUp, PiggyBank, Banknote, MessageCircle, PhoneCall, ShieldCheck, CalendarClock, Sparkles, ArrowLeft, RefreshCw } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import heroBg from "@/imports/VIDEO_RECORRIDO_3D.mp4";
import img1 from "@/imports/1.png";
import img2 from "@/imports/2.png";
import img3 from "@/imports/3.png";
import img4 from "@/imports/4.png";
import img5 from "@/imports/5.png";
import img6 from "@/imports/6.png";

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Requisitos", href: "#requisitos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

const PROJECTS = [
  { img: img1, name: "Modelo Estudio Premium", area: "45 m²", rooms: "1 dormitorio", tag: "Top ventas" },
  { img: img2, name: "Modelo Familiar Clásico", area: "72 m²", rooms: "2 dormitorios", tag: "Disponible" },
  { img: img3, name: "Modelo Familiar Plus", area: "80 m²", rooms: "2 dormitorios", tag: "Disponible" },
  { img: img4, name: "Modelo Moderno Coral", area: "68 m²", rooms: "1 dormitorio", tag: "Nuevo" },
  { img: img5, name: "Modelo Clásico Dorado", area: "65 m²", rooms: "1 dormitorio", tag: "Disponible" },
  { img: img6, name: "Modelo Compacto Urbano", area: "38 m²", rooms: "Estudio", tag: "Disponible" },
];

const SERVICES = [
  { icon: Building2, title: "Construcción a llave", desc: "Entregamos tu vivienda lista para habitar. Nos encargamos de todo el proceso constructivo con materiales de primera calidad." },
  { icon: Award, title: "Diseño arquitectónico", desc: "Planos 3D personalizados, renders fotorrealistas y asesoría de arquitectos certificados para tu proyecto ideal." },
  { icon: CheckCircle, title: "Habilitación urbana", desc: "Gestión completa de licencias, permisos municipales y trámites legales para tu terreno o proyecto." },
  { icon: Clock, title: "Plazos garantizados", desc: "Cumplimos los cronogramas pactados. Penalidad por demora en contrato. Tu inversión protegida desde el día uno." },
];

const STATS = [
  { value: "3,367", label: "Viviendas construidas a nivel nacional" },
  { value: "11", label: "Departamentos atendidos" },
  { value: "+10", label: "Años de experiencia" },
  { value: "1ª", label: "Empresa en entregar viviendas tras el Niño Costero" },
];

const CONTACT = {
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

const TESTIMONIALS = [
  { name: "Carlos Ramos", location: "Lima, Perú", text: "Excelente atención desde el primer día. Mi casa quedó exactamente como la veía en los renders. Cumplieron el plazo al 100%.", stars: 5 },
  { name: "María Flores", location: "Ica, Perú", text: "El equipo de Consorcio Constructor me orientó en todo el proceso. Calidad de materiales impresionante para el precio.", stars: 5 },
  { name: "Jorge Mendoza", location: "Arequipa, Perú", text: "Contraté el modelo familiar plus y estoy más que contento. El trato fue siempre profesional y transparente.", stars: 5 },
];

const QUIZ_PROGRAMS: { id: string; name: string; tagline: string; desc: string; includes: string[]; timeline: string; icon: LucideIcon }[] = [
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

const QUIZ_STEPS: {
  key: string;
  question: string;
  hint?: string;
  options: { label: string; desc?: string; value: string; program?: string; model?: string; icon: LucideIcon }[];
}[] = [
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

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
               borderBottom: scrolled ? "1px solid rgba(0,0,0,0.1)" : "none",
               backdropFilter: scrolled ? "blur(12px)" : "none",
               boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.1)" : "none"
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary flex items-center justify-center font-bold text-primary-foreground" style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "1.1rem" }}>
            CC
          </div>
          <div>
            <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "1.1rem", color: scrolled ? "#000000" : "#ffffff", letterSpacing: "0.05em", lineHeight: 1, transition: "color 0.3s ease" }}>
              CONSORCIO
            </div>
            <div style={{ fontFamily: "Barlow, sans-serif", fontWeight: 300, fontSize: "0.65rem", color: "#f5b700", letterSpacing: "0.2em", transition: "color 0.3s ease" }}>
              CONSTRUCTOR
            </div>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm transition-colors duration-200 hover:text-primary"
              style={{ fontFamily: "Barlow, sans-serif", fontWeight: 500, color: scrolled ? "#1a1a1a" : "#ffffff", letterSpacing: "0.05em", transition: "color 0.3s ease" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="bg-primary text-primary-foreground px-5 py-2 text-sm font-semibold transition-all hover:opacity-90 hover:scale-105"
            style={{ fontFamily: "Barlow Condensed, sans-serif", letterSpacing: "0.08em", borderRadius: "2px" }}>
            COTIZAR AHORA
          </a>
        </div>

        <button className="md:hidden transition-colors" onClick={() => setOpen(!open)}>
          {open ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-primary" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 flex flex-col gap-4 shadow-lg">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-gray-600 hover:text-primary transition-colors font-medium"
              style={{ fontFamily: "Barlow, sans-serif" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="#contacto" className="bg-primary text-primary-foreground px-5 py-2 text-sm font-semibold text-center transition-all hover:opacity-90 hover:scale-105" style={{ fontFamily: "Barlow Condensed, sans-serif", letterSpacing: "0.08em", borderRadius: "2px" }} onClick={() => setOpen(false)}>
            COTIZAR AHORA
          </a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <video
          src={heroBg}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/75" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col justify-center py-28 lg:py-0">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 border border-primary/30 px-3 py-1 mb-6 bg-white/10 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.75rem", fontWeight: 500, color: "#f5b700", letterSpacing: "0.15em" }}>
              TECHO PROPIO EN 11 DEPARTAMENTOS
            </span>
          </div>

          <h1 className="leading-tight" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "#ffffff", letterSpacing: "-0.01em", textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
            ¿ESTÁS LISTO PARA<br />
            CONSTRUIR<br />
            <span style={{ color: "#f5b700" }}>TU HOGAR IDEAL?</span>
          </h1>

          <p className="mt-6 text-white/90 max-w-xl" style={{ fontFamily: "Barlow, sans-serif", fontWeight: 300, fontSize: "1.05rem", lineHeight: 1.8 }}>
            Cuéntanos tu situación en menos de 1 minuto y descubre qué programa te corresponde, tu modelo ideal y si calificas. Asesoría gratuita y sin compromiso.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-9">
            <a href="#requisitos" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-semibold transition-all hover:opacity-90 hover:scale-105" style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "1.05rem", letterSpacing: "0.08em", borderRadius: "2px" }}>
              <BadgeCheck size={20} />
              QUIERO SABER SI CALIFICO
            </a>
            <a href="#contacto" className="inline-flex items-center justify-center gap-2 border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white hover:text-primary transition-all" style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "1.05rem", letterSpacing: "0.08em", borderRadius: "2px" }}>
              <Phone size={18} />
              HABLAR CON UN ASESOR
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/20 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "2rem", color: "#f5b700", lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.8rem", color: "#ffffff", lineHeight: 1.4, opacity: 0.9 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QualificationQuiz() {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selected, setSelected] = useState<string | null>(null);
  const [picking, setPicking] = useState(false);
  const [done, setDone] = useState(false);
  const [lead, setLead] = useState({ name: "", phone: "", email: "", program: "" });
  const [leadSent, setLeadSent] = useState(false);

  const step = QUIZ_STEPS[stepIndex];
  const progress = done ? 100 : (stepIndex / QUIZ_STEPS.length) * 100;

  const choose = (option: { label: string; value: string; program?: string }) => {
    if (picking) return;
    const next = { ...answers, [step.key]: option.value };
    setAnswers(next);
    setSelected(option.value);
    setPicking(true);
    setTimeout(() => {
      if (stepIndex === QUIZ_STEPS.length - 1) {
        setDone(true);
      } else {
        setStepIndex(stepIndex + 1);
        setSelected(null);
      }
      setPicking(false);
    }, 280);
  };

  const goBack = () => {
    if (stepIndex === 0 || picking) return;
    setStepIndex(stepIndex - 1);
    setSelected(answers[QUIZ_STEPS[stepIndex - 1].key] ?? null);
  };

  const restart = () => {
    setAnswers({});
    setStepIndex(0);
    setSelected(null);
    setPicking(false);
    setDone(false);
    setLeadSent(false);
    setLead({ name: "", phone: "", email: "", program: "" });
  };

  const program = QUIZ_PROGRAMS.find((p) => p.id === answers.terreno) ?? QUIZ_PROGRAMS[2];

  const model = answers.dormitorios === "estudio"
    ? "Modelo Estudio Premium · 45 m²"
    : answers.dormitorios === "familiar"
      ? "Modelo Familiar Clásico o Plus · 72–80 m²"
      : answers.dormitorios === "amplio"
        ? "Plan a medida · desde 80 m²"
        : "Se define en tu asesoría";

  const getLabel = (key: string) => {
    const st = QUIZ_STEPS.find((s) => s.key === key);
    return st?.options.find((o) => o.value === answers[key])?.label ?? "";
  };

  const handleLead = (e: React.FormEvent) => {
    e.preventDefault();
    setLeadSent(true);
  };

  const inputStyle = {
    background: "#1e2330",
    border: "1px solid rgba(245,183,0,0.15)",
    borderRadius: "2px",
    color: "#f0ece4",
    fontFamily: "Barlow, sans-serif",
    fontWeight: 400,
    fontSize: "0.9rem",
    outline: "none",
    width: "100%",
    padding: "0.75rem 1rem",
  };

  return (
    <section id="requisitos" className="py-24 overflow-hidden" style={{ background: "#0d0f14" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.35fr] gap-12 items-start">

          <div className="lg:sticky lg:top-28">
            <span style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.75rem", fontWeight: 500, color: "#f5b700", letterSpacing: "0.2em" }}>
              ¿CALIFICAS? DESCÚBRELO EN 1 MINUTO
            </span>
            <h2 className="mt-3" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "clamp(2.2rem, 4vw, 3.4rem)", color: "#ffffff", lineHeight: 0.98 }}>
              CUÉNTANOS TU SITUACIÓN Y TE DECIMOS QUÉ PROGRAMA TE CORRESPONDE.
            </h2>
            <p className="mt-6 text-gray-400" style={{ fontFamily: "Barlow, sans-serif", fontWeight: 300, lineHeight: 1.8, fontSize: "0.95rem" }}>
              Olvídate de las listas de documentos. Responde 5 preguntas rápidas y en segundos sabrás qué programa de construcción encaja contigo y cuál es tu siguiente paso.
            </p>

            <div className="mt-9 flex flex-col gap-5">
              {[
                { icon: BadgeCheck, text: "Te decimos qué programa te corresponde" },
                { icon: Home, text: "Recomendamos el modelo ideal para ti" },
                { icon: PhoneCall, text: "Un asesor te contacta gratis y sin compromiso" },
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center shrink-0" style={{ background: "rgba(245,183,0,0.12)", borderRadius: "6px" }}>
                    <b.icon size={18} style={{ color: "#f5b700" }} />
                  </div>
                  <span style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.9rem", color: "#cfd3de" }}>{b.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-10" style={{ borderRadius: "16px" }}>
            {/* Progress header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <span style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.15em", color: "#1a1a1a" }}>
                  {done ? "RESULTADO LISTO" : `PASO ${stepIndex + 1} DE ${QUIZ_STEPS.length}`}
                </span>
                <span style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.8rem", color: "#f5b700", fontWeight: 600 }}>{Math.round(progress)}%</span>
              </div>
              <div className="h-1.5 w-full" style={{ background: "#ececec", borderRadius: "4px" }}>
                <div className="h-full transition-all duration-500 ease-out" style={{ width: `${progress}%`, background: "#f5b700", borderRadius: "4px" }} />
              </div>
            </div>

            {done ? (
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold" style={{ background: "#f5b700", color: "#0d0f14", fontFamily: "Barlow Condensed, sans-serif", letterSpacing: "0.08em", borderRadius: "4px" }}>
                    <BadgeCheck size={14} /> PROPONENTE CALIFICADO
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold border" style={{ borderColor: "#e5e5e5", color: "#666", fontFamily: "Barlow, sans-serif", letterSpacing: "0.04em", borderRadius: "4px" }}>
                    <Clock size={13} style={{ color: "#f5b700" }} /> {program.timeline}
                  </span>
                </div>

                <h3 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem, 3vw, 2rem)", color: "#1a1a1a", lineHeight: 1.05 }}>
                  TU PROGRAMA ES<br />
                  <span style={{ color: "#f5b700" }}>{program.name}</span>
                </h3>

                <p className="mt-1" style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.9rem", fontWeight: 500, color: "#8a8f9e" }}>
                  {program.tagline}
                </p>
                <p className="mt-4 text-gray-600" style={{ fontFamily: "Barlow, sans-serif", fontWeight: 300, lineHeight: 1.7, fontSize: "0.92rem" }}>
                  {program.desc}
                </p>

                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5 mt-6">
                  {program.includes.map((c) => (
                    <div key={c} className="flex items-center gap-2.5">
                      <CheckCircle size={15} style={{ color: "#f5b700", flexShrink: 0 }} />
                      <span style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.85rem", color: "#4a4a4a" }}>{c}</span>
                    </div>
                  ))}
                </div>

                <div className="grid sm:grid-cols-2 gap-3 mt-6">
                  <div className="p-4" style={{ background: "#f8f8f8", borderRadius: "8px", border: "1px solid #eceae4" }}>
                    <div className="flex items-center gap-2 mb-1">
                      <Home size={15} style={{ color: "#f5b700" }} />
                      <span style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.12em", color: "#1a1a1a" }}>MODELO SUGERIDO</span>
                    </div>
                    <span style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.88rem", color: "#4a4a4a" }}>{model}</span>
                  </div>
                  <div className="p-4" style={{ background: "#f8f8f8", borderRadius: "8px", border: "1px solid #eceae4" }}>
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp size={15} style={{ color: "#f5b700" }} />
                      <span style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.12em", color: "#1a1a1a" }}>TU PERFIL</span>
                    </div>
                    <span style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.85rem", color: "#4a4a4a" }}>
                      {getLabel("tipo")} · {getLabel("financiamiento")} · {getLabel("plazo")}
                    </span>
                  </div>
                </div>

                <div className="mt-8 pt-7" style={{ borderTop: "1px dashed #e5e5e5" }}>
                  {leadSent ? (
                    <div className="flex flex-col items-center gap-3 py-6 text-center">
                      <BadgeCheck size={44} style={{ color: "#f5b700" }} />
                      <h4 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "1.4rem", color: "#1a1a1a" }}>¡LISTO, {lead.name.split(" ")[0] || "AMIGO"}!</h4>
                      <p style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.9rem", color: "#8a8f9e", maxWidth: 340 }}>
                        Un asesor se pondrá en contacto contigo en menos de 24 horas para confirmar tu calificación y agendar tu asesoría gratis.
                      </p>
                      <a
                        href="#contacto"
                        className="inline-flex items-center gap-2 mt-2 bg-primary text-primary-foreground px-6 py-3 font-semibold transition-all hover:opacity-90"
                        style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "0.95rem", letterSpacing: "0.1em", borderRadius: "2px" }}
                      >
                        QUEDARME EN CONTACTO <ArrowRight size={16} />
                      </a>
                    </div>
                  ) : (
                    <form onSubmit={handleLead} className="flex flex-col gap-4">
                      <h4 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "1.2rem", color: "#1a1a1a" }}>
                        CONFIRMA TUS DATOS Y TE CONTACTAMOS
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1">
                          <label style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.75rem", fontWeight: 600, color: "#8a8f9e", letterSpacing: "0.1em" }}>NOMBRE *</label>
                          <input required style={inputStyle} value={lead.name} onChange={(e) => setLead({ ...lead, name: e.target.value })} placeholder="Tu nombre" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.75rem", fontWeight: 600, color: "#8a8f9e", letterSpacing: "0.1em" }}>TELÉFONO *</label>
                          <input required style={inputStyle} value={lead.phone} onChange={(e) => setLead({ ...lead, phone: e.target.value })} placeholder="Tu teléfono / WhatsApp" />
                        </div>
                      </div>
                      <div className="flex flex-col gap-1">
                        <label style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.75rem", fontWeight: 600, color: "#8a8f9e", letterSpacing: "0.1em" }}>CORREO ELECTRÓNICO</label>
                        <input style={inputStyle} type="email" value={lead.email} onChange={(e) => setLead({ ...lead, email: e.target.value })} placeholder="tucorreo@email.com" />
                      </div>
                      <button
                        type="submit"
                        className="w-full py-4 font-semibold transition-all hover:opacity-90 flex items-center justify-center gap-2 mt-1"
                        style={{ background: "#f5b700", color: "#0d0f14", fontFamily: "Barlow Condensed, sans-serif", fontSize: "1rem", letterSpacing: "0.1em", borderRadius: "2px" }}
                      >
                        QUIERO QUE UN ASESOR ME LLAME <ArrowRight size={18} />
                      </button>
                      <p style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.78rem", color: "#8a8f9e", textAlign: "center" }}>
                        100% gratis · Sin compromiso · Respuesta en menos de 24 horas
                      </p>
                    </form>
                  )}
                </div>

                <button
                  onClick={restart}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold mx-auto hover:gap-3 transition-all"
                  style={{ fontFamily: "Barlow Condensed, sans-serif", letterSpacing: "0.08em", color: "#8a8f9e" }}
                >
                  <RefreshCw size={14} /> VOLVER A EMPEZAR EL QUIZ
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-7">
                  <div className="inline-flex items-center gap-2 mb-2" style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.75rem", fontWeight: 500, color: "#f5b700", letterSpacing: "0.15em" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    {step.hint ?? "RESPONDE Y CONTINÚA"}
                  </div>
                  <h3 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "clamp(1.4rem, 3vw, 1.9rem)", color: "#1a1a1a", lineHeight: 1.1 }}>
                    {step.question}
                  </h3>
                </div>

                <div className="flex flex-col gap-3">
                  {step.options.map((o, i) => {
                    const OptionIcon = o.icon;
                    const isActive = selected === o.value || answers[step.key] === o.value;
                    return (
                      <button
                        key={i}
                        onClick={() => choose(o)}
                        className={`w-full text-left p-4 flex items-center gap-4 transition-all duration-200 border-2 hover:scale-[1.01] ${isActive && !done ? "bg-primary/10" : "bg-white hover:bg-gray-50"}`}
                        style={{
                          borderRadius: "10px",
                          borderColor: isActive ? "#f5b700" : "#e5e5e5",
                        }}
                      >
                        <div
                          className="w-11 h-11 flex items-center justify-center shrink-0 transition-colors"
                          style={{ background: isActive ? "#f5b700" : "#f6f6f6", borderRadius: "8px" }}
                        >
                          <OptionIcon size={20} style={{ color: isActive ? "#0d0f14" : "#8a8f9e" }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#1a1a1a", letterSpacing: "0.02em" }}>{o.label}</span>
                            <ChevronRight size={18} className={`shrink-0 transition-transform duration-200 ${isActive ? "-rotate-90" : "opacity-40"}`} style={{ color: "#f5b700" }} />
                          </div>
                          {o.desc && <span style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.83rem", color: "#8a8f9e", lineHeight: 1.5, display: "block", marginTop: "0.15rem" }}>{o.desc}</span>}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <button
                    onClick={goBack}
                    disabled={stepIndex === 0}
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3 disabled:opacity-30"
                    style={{ fontFamily: "Barlow Condensed, sans-serif", letterSpacing: "0.08em", color: "#8a8f9e" }}
                  >
                    <ArrowLeft size={14} /> ANTERIOR
                  </button>
                  <span style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.8rem", color: "#b5b5b5" }}>
                    Selecciona para continuar
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="proyectos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.75rem", fontWeight: 500, color: "#f5b700", letterSpacing: "0.2em" }}>MODELOS DE VIVIENDA</span>
            <h2 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "clamp(2.2rem, 4vw, 3.5rem)", color: "#1a1a1a", lineHeight: 0.95, marginTop: "0.5rem" }}>
              ELIGE EL MODELO<br />PARA TU FAMILIA
            </h2>
          </div>
          <p className="text-gray-600 max-w-sm" style={{ fontFamily: "Barlow, sans-serif", fontWeight: 300, lineHeight: 1.7, fontSize: "0.95rem" }}>
            Cada modelo ha sido diseñado para maximizar el confort y la funcionalidad. Elige el que mejor se adapta a tu familia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <div
              key={i}
              className="group relative overflow-hidden cursor-pointer"
              style={{ background: "#f8f8f8", borderRadius: "8px", border: active === i ? "2px solid #f5b700" : "1px solid #e5e5e5" }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              <div className="relative h-56 overflow-hidden" style={{ borderRadius: "8px 8px 0 0" }}>
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 text-xs font-semibold" style={{ background: "#f5b700", color: "#0d0f14", fontFamily: "Barlow Condensed, sans-serif", letterSpacing: "0.08em", borderRadius: "4px" }}>
                    {p.tag}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "#1a1a1a", letterSpacing: "0.02em" }}>{p.name}</h3>
                <div className="flex items-center gap-4 mt-3">
                  <span style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.85rem", color: "#666666" }}>{p.rooms}</span>
                  <span style={{ color: "#d4d4d4" }}>·</span>
                  <span style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "0.9rem", fontWeight: 700, color: "#f5b700" }}>{p.area}</span>
                </div>
                <a
                  href="#contacto"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                  style={{ fontFamily: "Barlow Condensed, sans-serif", letterSpacing: "0.1em" }}
                >
                  COTIZAR MODELO <ChevronRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoTour() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.75rem", fontWeight: 500, color: "#f5b700", letterSpacing: "0.2em" }}>RECORRIDO VIRTUAL</span>
            <h2 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "clamp(2.2rem, 4vw, 3.2rem)", color: "#1a1a1a", lineHeight: 0.95, marginTop: "0.5rem" }}>
              CONOCE TU<br />FUTURA CASA<br />
              <span style={{ color: "#f5b700" }}>EN 3D.</span>
            </h2>
            <p className="mt-6 text-gray-600" style={{ fontFamily: "Barlow, sans-serif", fontWeight: 300, lineHeight: 1.8, fontSize: "0.95rem" }}>
              Antes de construir, te mostramos cada rincón de tu vivienda con un recorrido 3D completo. Visualiza los espacios, los acabados y la distribución exacta del modelo que elijas.
            </p>
            <a
              href="#contacto"
              className="mt-8 inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-semibold transition-all hover:opacity-90 hover:scale-105"
              style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "1rem", letterSpacing: "0.1em", borderRadius: "8px" }}
            >
              QUIERO MI RECORRIDO <ArrowRight size={18} className="transition-transform" />
            </a>
          </div>
          <div className="relative overflow-hidden shadow-xl" style={{ borderRadius: "12px", border: "1px solid #e5e5e5" }}>
            <video
              src={heroBg}
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full"
              style={{ display: "block" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicios" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.75rem", fontWeight: 500, color: "#f5b700", letterSpacing: "0.2em" }}>LO QUE HACEMOS</span>
          <h2 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "clamp(2.2rem, 4vw, 3.5rem)", color: "#1a1a1a", lineHeight: 0.95, marginTop: "0.5rem" }}>
            NUESTROS SERVICIOS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className="p-6 group hover:shadow-lg transition-all duration-300 bg-white border border-gray-200 hover:border-primary/30"
              style={{ borderRadius: "8px" }}
            >
              <div className="w-12 h-12 mb-5 flex items-center justify-center bg-yellow-50 rounded-lg">
                <s.icon size={22} style={{ color: "#f5b700" }} />
              </div>
              <h3 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#1a1a1a", letterSpacing: "0.02em", marginBottom: "0.5rem" }}>
                {s.title}
              </h3>
              <p style={{ fontFamily: "Barlow, sans-serif", fontWeight: 300, fontSize: "0.88rem", color: "#666666", lineHeight: 1.7 }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="nosotros" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.75rem", fontWeight: 500, color: "#f5b700", letterSpacing: "0.2em" }}>CÓMO TE AYUDAMOS</span>
            <h2 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "clamp(2.2rem, 4vw, 3.2rem)", color: "#1a1a1a", lineHeight: 0.95, marginTop: "0.5rem" }}>
              AYUDAMOS A TU FAMILIA<br />A ACCEDER A UNA<br />
              <span style={{ color: "#f5b700" }}>VIVIENDA SEGURA.</span>
            </h2>
            <p className="mt-6 text-gray-600" style={{ fontFamily: "Barlow, sans-serif", fontWeight: 300, lineHeight: 1.8, fontSize: "0.95rem" }}>
              Sabemos que tener casa propia es una de las decisiones más importantes para tu familia. Por eso te acompañamos en todo el camino: te orientamos para postular al Bono Techo Propio, nos encargamos de los trámites y construimos tu vivienda hasta entregarte las llaves.
            </p>
            <p className="mt-4 text-gray-600" style={{ fontFamily: "Barlow, sans-serif", fontWeight: 300, lineHeight: 1.8, fontSize: "0.95rem" }}>
              No lo haces solo: nuestro equipo de ingenieros y arquitectos trabaja contigo en cada etapa. Ya lo hicimos con 3,367 familias en 11 departamentos del país, a lo largo de más de 10 años.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              {["Tu casa se construye con materiales certificados de primera calidad", "Te asesoran arquitectos e ingenieros colegiados", "Tu vivienda cuenta con garantía post-entrega", "Accedes a opciones de financiamiento flexible"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={16} style={{ color: "#f5b700", flexShrink: 0 }} />
                  <span style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.9rem", color: "#666666" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[img5, img6, img3, img4].map((img, i) => (
              <div key={i} className="overflow-hidden rounded-lg shadow-lg">
                <img src={img} alt="Proyecto Consorcio Constructor" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.75rem", fontWeight: 500, color: "#f5b700", letterSpacing: "0.2em" }}>LO QUE DICEN</span>
          <h2 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "clamp(2.2rem, 4vw, 3.5rem)", color: "#1a1a1a", lineHeight: 0.95, marginTop: "0.5rem" }}>
            FAMILIAS COMO LA TUYA
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={14} fill="#f5b700" style={{ color: "#f5b700" }} />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "Barlow, sans-serif", fontWeight: 300, fontSize: "0.92rem" }}>
                "{t.text}"
              </p>
              <div className="mt-5 pt-5 border-t border-gray-200">
                <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, color: "#1a1a1a" }}>{t.name}</div>
                <div style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.78rem", color: "#f5b700" }}>{t.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "", model: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", phone: "", email: "", message: "", model: "" });
  };

  const inputStyle = {
    background: "#1e2330",
    border: "1px solid rgba(245,183,0,0.15)",
    borderRadius: "2px",
    color: "#f0ece4",
    fontFamily: "Barlow, sans-serif",
    fontWeight: 400,
    fontSize: "0.9rem",
    outline: "none",
    width: "100%",
    padding: "0.75rem 1rem",
  };

  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.75rem", fontWeight: 500, color: "#f5b700", letterSpacing: "0.2em" }}>HABLEMOS</span>
            <h2 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "clamp(2.2rem, 4vw, 3.2rem)", color: "#1a1a1a", lineHeight: 0.95, marginTop: "0.5rem" }}>
              TU CASA PROPIA<br />EMPIEZA CON<br />
              <span style={{ color: "#f5b700" }}>UNA LLAMADA.</span>
            </h2>
            <p className="mt-6 text-muted-foreground" style={{ fontFamily: "Barlow, sans-serif", fontWeight: 300, lineHeight: 1.8, fontSize: "0.95rem" }}>
              Contáctanos hoy y recibe una cotización personalizada sin compromiso. Nuestro equipo te responderá en menos de 24 horas.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center shrink-0" style={{ background: "rgba(245,183,0,0.1)" }}>
                  <Phone size={18} style={{ color: "#f5b700" }} />
                </div>
                <div>
                  <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, color: "#1a1a1a", fontSize: "0.95rem" }}>Llámanos</div>
                  <div className="flex flex-col gap-0.5 mt-0.5">
                    {CONTACT.phones.map((p) => (
                      <a key={p} href={`tel:+51${p.replace(/\s/g, "")}`} className="hover:text-primary transition-colors" style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.85rem", color: "#8a8f9e" }}>
                        {p}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center shrink-0" style={{ background: "rgba(245,183,0,0.1)" }}>
                  <Mail size={18} style={{ color: "#f5b700" }} />
                </div>
                <div>
                  <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, color: "#1a1a1a", fontSize: "0.95rem" }}>Escríbenos</div>
                  <a href={`mailto:${CONTACT.email}`} className="hover:text-primary transition-colors break-all" style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.85rem", color: "#8a8f9e" }}>
                    {CONTACT.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center shrink-0" style={{ background: "rgba(245,183,0,0.1)" }}>
                  <MapPin size={18} style={{ color: "#f5b700" }} />
                </div>
                <div>
                  <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, color: "#1a1a1a", fontSize: "0.95rem" }}>Visítanos</div>
                  <div className="flex flex-col gap-2 mt-0.5">
                    {CONTACT.sedes.map((s) => (
                      <a key={s.city} href={s.map} target="_blank" rel="noopener noreferrer" className="group" style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.85rem", color: "#8a8f9e", lineHeight: 1.5 }}>
                        <span style={{ fontWeight: 600, color: "#1a1a1a" }}>{s.city}:</span>{" "}
                        <span className="group-hover:text-primary transition-colors">{s.address}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 font-semibold text-sm transition-opacity hover:opacity-80"
                style={{ background: "#1877f2", color: "#fff", fontFamily: "Barlow Condensed, sans-serif", letterSpacing: "0.05em", borderRadius: "2px" }}
              >
                <Facebook size={16} /> FACEBOOK
              </a>
              <a
                href={CONTACT.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 font-semibold text-sm transition-opacity hover:opacity-80"
                style={{ background: "#010101", color: "#fff", fontFamily: "Barlow Condensed, sans-serif", letterSpacing: "0.05em", borderRadius: "2px", border: "1px solid #3a3f52" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.65a8.26 8.26 0 0 0 4.83 1.56V6.77a4.85 4.85 0 0 1-1.06-.08z"/></svg>
                TIKTOK
              </a>
            </div>
          </div>

          <div className="p-8 rounded-lg shadow-lg bg-white border border-gray-200">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center gap-4 text-center py-16">
                <CheckCircle size={48} style={{ color: "#f5b700" }} />
                <h3 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "1.8rem", color: "#f0ece4" }}>¡Mensaje enviado!</h3>
                <p style={{ fontFamily: "Barlow, sans-serif", color: "#8a8f9e" }}>Te contactaremos en menos de 24 horas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "1.4rem", color: "#1a1a1a", marginBottom: "0.5rem" }}>
                  FORMULARIO DE COTIZACIÓN
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.75rem", fontWeight: 500, color: "#8a8f9e", letterSpacing: "0.1em" }}>NOMBRE *</label>
                    <input required style={inputStyle} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Tu nombre" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.75rem", fontWeight: 500, color: "#8a8f9e", letterSpacing: "0.1em" }}>TELÉFONO *</label>
                    <input required style={inputStyle} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Tu teléfono" />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.75rem", fontWeight: 500, color: "#8a8f9e", letterSpacing: "0.1em" }}>CORREO ELECTRÓNICO</label>
                  <input style={inputStyle} type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="tucorreo@email.com" />
                </div>
                <div className="flex flex-col gap-1">
                  <label style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.75rem", fontWeight: 500, color: "#8a8f9e", letterSpacing: "0.1em" }}>MODELO DE INTERÉS</label>
                  <select
                    style={{ ...inputStyle, cursor: "pointer" }}
                    value={form.model}
                    onChange={(e) => setForm({ ...form, model: e.target.value })}
                  >
                    <option value="">Selecciona un modelo</option>
                    {PROJECTS.map((p) => <option key={p.name} value={p.name}>{p.name} — {p.area}</option>)}
                    <option value="otro">Otro / No sé aún</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.75rem", fontWeight: 500, color: "#8a8f9e", letterSpacing: "0.1em" }}>MENSAJE</label>
                  <textarea
                    rows={4}
                    style={{ ...inputStyle, resize: "vertical" }}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Cuéntanos más sobre tu proyecto..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 font-semibold transition-opacity hover:opacity-90 flex items-center justify-center gap-2 mt-2"
                  style={{ background: "#f5b700", color: "#0d0f14", fontFamily: "Barlow Condensed, sans-serif", fontSize: "1rem", letterSpacing: "0.1em", borderRadius: "2px" }}
                >
                  ENVIAR COTIZACIÓN <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-primary flex items-center justify-center font-bold text-primary-foreground rounded-lg" style={{ fontFamily: "Barlow Condensed, sans-serif" }}>CC</div>
              <div>
                <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#1a1a1a", fontSize: "1rem", lineHeight: 1 }}>CONSORCIO</div>
                <div style={{ fontFamily: "Barlow, sans-serif", fontWeight: 300, fontSize: "0.6rem", color: "#f5b700", letterSpacing: "0.2em" }}>CONSTRUCTOR</div>
              </div>
            </div>
            <p style={{ fontFamily: "Barlow, sans-serif", fontWeight: 300, fontSize: "0.85rem", color: "#666666", lineHeight: 1.7 }}>
              Ayudamos a las familias peruanas a acceder a una vivienda segura. Calidad, compromiso y confianza en cada proyecto.
            </p>
          </div>

          <div>
            <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, color: "#1a1a1a", letterSpacing: "0.1em", marginBottom: "1rem", fontSize: "0.85rem" }}>NAVEGACIÓN</div>
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((l) => (
                <a key={l.label} href={l.href} className="text-gray-600 hover:text-primary transition-colors" style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.85rem" }}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, color: "#1a1a1a", letterSpacing: "0.1em", marginBottom: "1rem", fontSize: "0.85rem" }}>CONTACTO</div>
            <div className="flex flex-col gap-2">
              <span className="text-gray-600" style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.85rem" }}>{CONTACT.email}</span>
              <span className="text-gray-600" style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.85rem" }}>{CONTACT.phones.join(" / ")}</span>
              <span className="text-gray-600" style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.85rem" }}>{CONTACT.sedes.map((s) => s.city).join(" · ")}</span>
              <div className="flex gap-3 mt-3">
                <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-600 hover:text-primary transition-colors">
                  <Facebook size={18} />
                </a>
                <a href={CONTACT.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-gray-600 hover:text-primary transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.65a8.26 8.26 0 0 0 4.83 1.56V6.77a4.85 4.85 0 0 1-1.06-.08z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="text-gray-600" style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.78rem" }}>
            © {new Date().getFullYear()} Consorcio Constructor. Todos los derechos reservados.
          </span>
          <div className="flex items-center gap-2">
            <Users size={14} className="text-primary" />
            <span className="text-gray-600" style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.78rem" }}>3,367 familias ya tienen su vivienda con nosotros</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0d0f14]" style={{ fontFamily: "Barlow, sans-serif" }}>
      <Navbar />
      <Hero />
      <QualificationQuiz />
      <Projects />
      <VideoTour />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
