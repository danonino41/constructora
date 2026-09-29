import { Link } from "react-router";
import { ArrowRight, BadgeCheck, CheckCircle2, Download, ExternalLink } from "lucide-react";

const PROGRAMS = [
  {
    id: "credito-mivivienda",
    eyebrow: "MÁS CERCA DE TU VIVIENDA",
    title: "Crédito MiVivienda",
    desc: "Haz realidad tus proyectos de vivienda con alternativas de financiamiento para comprar, construir o mejorar.",
    benefit: "Bono del Buen Pagador",
    cta: "Ver detalles del crédito",
    href: "/programas/credito-mivivienda",
  },
  {
    id: "techo-propio",
    eyebrow: "TU HOGAR ES POSIBLE",
    title: "Programa Techo Propio",
    desc: "Dirigido a familias con ingresos de hasta S/ 3,715 para comprar, construir o mejorar su vivienda, con acceso al Crédito Techo Propio para financiarla.",
    benefit: "Bono Familiar Habitacional",
    cta: "Ver modalidades",
    href: "/programas/techo-propio",
  },
  {
    id: "reforzamiento",
    eyebrow: "MÁS OPORTUNIDADES PARA TU VIVIENDA",
    title: "Bono de Reforzamiento Estructural",
    desc: "Gestión del subsidio no reembolsable para reforzar viviendas vulnerables a riesgos sísmicos y proteger a tu familia.",
    benefit: "Subsidio no reembolsable (BPVVRS)",
    cta: "Ver más programas",
    href: "/programas/reforzamiento",
  },
];

export default function Programs() {
  return (
    <section id="programas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-14">
          <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.75rem", fontWeight: 500, color: "#f5b700", letterSpacing: "0.2em" }}>
            Encuentra la opción que mejor se adapta a ti
          </span>
          <h2 style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "clamp(2rem, 3.6vw, 3rem)", color: "#4a4a49", lineHeight: 1, marginTop: "0.6rem" }}>
            CONOCE LAS DISTINTAS FORMAS DE ACCEDER A UNA VIVIENDA Y LOS BENEFICIOS DISPONIBLES.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROGRAMS.map((p) => (
            <div
              key={p.title}
              id={p.id}
              className="flex flex-col p-8 transition-all duration-300 hover:shadow-xl bg-white scroll-mt-28"
              style={{ borderRadius: "12px", border: "1px solid #e5e5e5" }}
            >
              <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.7rem", fontWeight: 700, color: "#173B66", letterSpacing: "0.16em", marginBottom: "1.25rem" }}>
                {p.eyebrow}
              </div>

              <h3 style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "1.45rem", color: "#4a4a49", lineHeight: 1.1, letterSpacing: "0.01em" }}>
                {p.title}
              </h3>

              <p className="mt-3 text-gray-600" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, fontSize: "0.92rem", lineHeight: 1.7 }}>
                {p.desc}
              </p>

              <div className="mt-6 p-4" style={{ background: "#f8f8f8", borderRadius: "8px", border: "1px solid #eceae4" }}>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[0.6rem] font-bold tracking-widest mb-2" style={{ background: "#f5b700", color: "#0d0f14", fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', borderRadius: "3px" }}>
                  BENEFICIO DESTACADO
                </span>
                <div className="flex items-center gap-2">
                  <BadgeCheck size={16} style={{ color: "#f5b700", flexShrink: 0 }} />
                  <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "0.95rem", color: "#4a4a49" }}>{p.benefit}</span>
                </div>
              </div>

              <Link
                to={p.href}
                className="mt-auto pt-6 inline-flex items-center gap-2 font-bold transition-all hover:gap-3"
                style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.85rem", letterSpacing: "0.06em", color: "#173B66" }}
              >
                {p.cta} <ArrowRight size={16} style={{ color: "#f5b700" }} />
              </Link>
            </div>
          ))}
        </div>

        <div
          className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 p-10 lg:p-14"
          style={{ background: "#173B66", borderRadius: "16px" }}
        >
          <div>
            <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.7rem", fontWeight: 700, color: "#f5b700", letterSpacing: "0.18em" }}>
              ¿QUÉ ES?
            </span>
            <h3 className="mt-2 text-white" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)", lineHeight: 1.05, letterSpacing: "0.01em" }}>
              PROGRAMA TECHO PROPIO
            </h3>
            <p className="mt-5" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, fontSize: "1rem", lineHeight: 1.75, color: "#dfe6f0" }}>
              Es un programa del Estado peruano que ayuda a las familias a obtener, construir o mejorar su vivienda.
              Entrega un <b style={{ color: "#ffffff" }}>Bono Familiar Habitacional (BFH)</b>: un subsidio directo que{" "}
              <b style={{ color: "#f5b700" }}>no se devuelve</b> y que se suma a tu ahorro para financiar tu hogar.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Construir en tu propio terreno o comprar una vivienda.",
                "Ingresos familiares de hasta S/ 3,715 (compra) o S/ 2,706 (construcción).",
                "No poseer otra vivienda a nivel nacional.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <BadgeCheck size={18} style={{ color: "#f5b700", flexShrink: 0, marginTop: "2px" }} />
                  <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.95rem", lineHeight: 1.6, color: "#eef1f5" }}>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 flex flex-wrap gap-x-6 gap-y-2 border-t" style={{ borderColor: "rgba(255,255,255,0.18)" }}>
              <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.8rem", color: "#aab6c9" }}>Fuentes oficiales:</span>
              <a href="https://www.gob.pe/mvcs" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:opacity-80" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.82rem", color: "#f5b700" }}>
                gob.pe/mvcs <ExternalLink size={12} />
              </a>
              <a href="https://www.mivivienda.com.pe" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:opacity-80" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.82rem", color: "#f5b700" }}>
                mivivienda.com.pe <ExternalLink size={12} />
              </a>
            </div>
          </div>

          <div
            className="flex flex-col p-8 bg-white"
            style={{ borderRadius: "12px", border: "1px solid #e5e5e5" }}
          >
            <h4 style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "1.1rem", color: "#4a4a49", letterSpacing: "0.02em" }}>
              REQUISITOS
            </h4>
            <ul className="mt-5 space-y-3">
              {[
                "Ser ciudadano peruano (o extranjero con residencia).",
                "No ser propietario de otra vivienda.",
                "Contar con el ahorro mínimo del valor de la vivienda.",
                "Cumplir los topes de ingreso familiar.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 size={17} style={{ color: "#173B66", flexShrink: 0, marginTop: "3px" }} />
                  <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.92rem", lineHeight: 1.6, color: "#4a4a49" }}>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-col sm:flex-row gap-3 pt-8">
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 font-bold transition-all hover:opacity-90"
                style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.85rem", letterSpacing: "0.06em", borderRadius: "3px" }}
              >
                SOLICITA INFORMACIÓN
              </Link>
              <a
                href="https://wa.me/51993611523"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 font-bold transition-all hover:bg-black/5"
                style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.85rem", letterSpacing: "0.06em", color: "#173B66", borderRadius: "3px", border: "1px solid #173B66" }}
              >
                <Download size={15} /> DESCARGA REQUISITOS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}