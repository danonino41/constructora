import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Facebook, ArrowRight, Star, CheckCircle, Building2, Users, Award, Clock } from "lucide-react";

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
  { value: "150+", label: "Viviendas entregadas" },
  { value: "12", label: "Años de experiencia" },
  { value: "98%", label: "Clientes satisfechos" },
  { value: "8", label: "Provincias atendidas" },
];

const TESTIMONIALS = [
  { name: "Carlos Ramos", location: "Lima, Perú", text: "Excelente atención desde el primer día. Mi casa quedó exactamente como la veía en los renders. Cumplieron el plazo al 100%.", stars: 5 },
  { name: "María Flores", location: "Ica, Perú", text: "El equipo de Consorcio Constructor me orientó en todo el proceso. Calidad de materiales impresionante para el precio.", stars: 5 },
  { name: "Jorge Mendoza", location: "Arequipa, Perú", text: "Contraté el modelo familiar plus y estoy más que contento. El trato fue siempre profesional y transparente.", stars: 5 },
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
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <video
          src={heroBg}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 lg:py-0 lg:grid lg:grid-cols-2 lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 border border-primary/30 px-3 py-1 mb-6 bg-white/10 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.75rem", fontWeight: 500, color: "#f5b700", letterSpacing: "0.15em" }}>
              CONSTRUCTORA LÍDER EN PERÚ
            </span>
          </div>

          <h1 className="leading-tight" style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "#ffffff", letterSpacing: "-0.01em", textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
            CONSTRUIMOS<br />
            <span style={{ color: "#f5b700" }}>TU HOGAR</span><br />
            IDEAL.
          </h1>

          <div className="mt-6 mb-10 flex items-center gap-8">
            {STATS.map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "2rem", color: "#f5b700", lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.75rem", color: "#ffffff", lineHeight: 1.4, opacity: 0.9 }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href="#proyectos" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-semibold transition-all hover:opacity-90 hover:scale-105" style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "1rem", letterSpacing: "0.1em", borderRadius: "2px" }}>
              VER PROYECTOS
              <ArrowRight size={18} className="transition-transform" />
            </a>
            <a href="#contacto" className="inline-flex items-center justify-center gap-2 border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white hover:text-primary transition-all" style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "1rem", letterSpacing: "0.1em", borderRadius: "2px" }}>
              COTIZAR GRATIS
            </a>
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
              NUESTROS<br />PROYECTOS
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
            <span style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.75rem", fontWeight: 500, color: "#f5b700", letterSpacing: "0.2em" }}>QUIÉNES SOMOS</span>
            <h2 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "clamp(2.2rem, 4vw, 3.2rem)", color: "#1a1a1a", lineHeight: 0.95, marginTop: "0.5rem" }}>
              CONSTRUIMOS<br />MÁS QUE CASAS,<br />
              <span style={{ color: "#f5b700" }}>CONSTRUIMOS FUTUROS.</span>
            </h2>
            <p className="mt-6 text-gray-600" style={{ fontFamily: "Barlow, sans-serif", fontWeight: 300, lineHeight: 1.8, fontSize: "0.95rem" }}>
              Somos una empresa peruana con más de 12 años de experiencia en el sector construcción. Hemos entregado más de 150 viviendas en todo el territorio nacional, desde Lima hasta provincias, con el compromiso de calidad y transparencia que nos caracteriza.
            </p>
            <p className="mt-4 text-gray-600" style={{ fontFamily: "Barlow, sans-serif", fontWeight: 300, lineHeight: 1.8, fontSize: "0.95rem" }}>
              Nuestro equipo de ingenieros y arquitectos trabaja contigo desde la primera piedra hasta la entrega de llaves, asegurando que cada etapa cumpla con los más altos estándares de construcción.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              {["Materiales certificados de primera calidad", "Arquitectos e ingenieros colegiados", "Garantía post-entrega incluida", "Financiamiento flexible disponible"].map((item) => (
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
            NUESTROS CLIENTES
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
            <h2 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "clamp(2.2rem, 4vw, 3.2rem)", color: "#f0ece4", lineHeight: 0.95, marginTop: "0.5rem" }}>
              COTIZA TU<br />VIVIENDA<br />
              <span style={{ color: "#f5b700" }}>GRATIS.</span>
            </h2>
            <p className="mt-6 text-muted-foreground" style={{ fontFamily: "Barlow, sans-serif", fontWeight: 300, lineHeight: 1.8, fontSize: "0.95rem" }}>
              Contáctanos hoy y recibe una cotización personalizada sin compromiso. Nuestro equipo te responderá en menos de 24 horas.
            </p>

            <div className="mt-10 flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center" style={{ background: "rgba(245,183,0,0.1)" }}>
                  <Phone size={18} style={{ color: "#f5b700" }} />
                </div>
                <div>
                  <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, color: "#f0ece4", fontSize: "0.95rem" }}>Llámanos</div>
                  <div style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.85rem", color: "#8a8f9e" }}>+51 987 654 321</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center" style={{ background: "rgba(245,183,0,0.1)" }}>
                  <Mail size={18} style={{ color: "#f5b700" }} />
                </div>
                <div>
                  <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, color: "#f0ece4", fontSize: "0.95rem" }}>Escríbenos</div>
                  <div style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.85rem", color: "#8a8f9e" }}>consorcioconstructormkt@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center" style={{ background: "rgba(245,183,0,0.1)" }}>
                  <MapPin size={18} style={{ color: "#f5b700" }} />
                </div>
                <div>
                  <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, color: "#f0ece4", fontSize: "0.95rem" }}>Visítanos</div>
                  <div style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.85rem", color: "#8a8f9e" }}>Lima, Perú</div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 font-semibold text-sm transition-opacity hover:opacity-80"
                style={{ background: "#1877f2", color: "#fff", fontFamily: "Barlow Condensed, sans-serif", letterSpacing: "0.05em", borderRadius: "2px" }}
              >
                <Facebook size={16} /> FACEBOOK
              </a>
              <a
                href="https://www.tiktok.com"
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

          <div className="p-8" style={{ background: "#161a22", border: "1px solid rgba(245,183,0,0.15)", borderRadius: "2px" }}>
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center gap-4 text-center py-16">
                <CheckCircle size={48} style={{ color: "#f5b700" }} />
                <h3 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "1.8rem", color: "#f0ece4" }}>¡Mensaje enviado!</h3>
                <p style={{ fontFamily: "Barlow, sans-serif", color: "#8a8f9e" }}>Te contactaremos en menos de 24 horas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "1.4rem", color: "#f0ece4", marginBottom: "0.5rem" }}>
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
    <footer className="border-t border-border" style={{ background: "#0a0c10" }}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-primary flex items-center justify-center font-bold text-primary-foreground" style={{ fontFamily: "Barlow Condensed, sans-serif" }}>CC</div>
              <div>
                <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#f0ece4", fontSize: "1rem", lineHeight: 1 }}>CONSORCIO</div>
                <div style={{ fontFamily: "Barlow, sans-serif", fontWeight: 300, fontSize: "0.6rem", color: "#f5b700", letterSpacing: "0.2em" }}>CONSTRUCTOR</div>
              </div>
            </div>
            <p style={{ fontFamily: "Barlow, sans-serif", fontWeight: 300, fontSize: "0.85rem", color: "#8a8f9e", lineHeight: 1.7 }}>
              Construyendo el Perú de hoy para las familias del mañana. Calidad, compromiso y confianza en cada proyecto.
            </p>
          </div>

          <div>
            <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, color: "#f0ece4", letterSpacing: "0.1em", marginBottom: "1rem", fontSize: "0.85rem" }}>NAVEGACIÓN</div>
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((l) => (
                <a key={l.label} href={l.href} style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.85rem", color: "#8a8f9e" }} className="hover:text-primary transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, color: "#f0ece4", letterSpacing: "0.1em", marginBottom: "1rem", fontSize: "0.85rem" }}>CONTACTO</div>
            <div className="flex flex-col gap-2">
              <span style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.85rem", color: "#8a8f9e" }}>consorcioconstructormkt@gmail.com</span>
              <span style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.85rem", color: "#8a8f9e" }}>+51 987 654 321</span>
              <span style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.85rem", color: "#8a8f9e" }}>Lima, Perú</span>
              <div className="flex gap-3 mt-3">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.65a8.26 8.26 0 0 0 4.83 1.56V6.77a4.85 4.85 0 0 1-1.06-.08z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <span style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.78rem", color: "#8a8f9e" }}>
            © 2025 Consorcio Constructor. Todos los derechos reservados.
          </span>
          <div className="flex items-center gap-2">
            <Users size={14} style={{ color: "#f5b700" }} />
            <span style={{ fontFamily: "Barlow, sans-serif", fontSize: "0.78rem", color: "#8a8f9e" }}>Más de 150 familias confían en nosotros</span>
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
