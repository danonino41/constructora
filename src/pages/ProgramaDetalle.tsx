import { Link, Navigate, useParams } from "react-router";
import { ArrowLeft, ArrowRight, BadgeCheck, CheckCircle2, Download, ExternalLink, MessageCircle } from "lucide-react";
import { PROGRAMAS_DETALLE } from "@/data/programas";
import SectionNav from "@/sections/SectionNav";

const SECTIONS = [
  { id: "resumen", label: "El programa" },
  { id: "beneficios", label: "Beneficios" },
  { id: "como-funciona", label: "Cómo funciona" },
  { id: "requisitos", label: "Requisitos" },
  { id: "faq", label: "Preguntas frecuentes" },
];

const NAV_OFFSET = 130;

export default function ProgramaDetalle() {
  const { slug } = useParams();
  const p = slug ? PROGRAMAS_DETALLE[slug] : undefined;

  if (!p) return <Navigate to="/programas" replace />;

  return (
    <div className="pt-20">
      <section className="py-20" style={{ background: "#173B66" }}>
        <div className="max-w-7xl mx-auto px-6">
          <Link to="/programas" className="inline-flex items-center gap-2 transition-colors hover:opacity-80" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.8rem", color: "#f5b700", letterSpacing: "0.08em" }}>
            <ArrowLeft size={14} /> VOLVER A PROGRAMAS
          </Link>
          <span className="block mt-6" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.75rem", fontWeight: 700, color: "#f5b700", letterSpacing: "0.2em" }}>
            {p.eyebrow}
          </span>
          <h1 className="mt-3 text-white" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "clamp(2.2rem, 4.4vw, 3.4rem)", lineHeight: 1.02, letterSpacing: "0.01em" }}>
            {p.heroTitle}
          </h1>
          <p className="mt-5 max-w-3xl" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, fontSize: "1.05rem", lineHeight: 1.8, color: "#dfe6f0" }}>
            {p.heroSub}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contacto" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-bold transition-all hover:opacity-90" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.9rem", letterSpacing: "0.08em", borderRadius: "3px" }}>
              SOLICITA INFORMACIÓN <ArrowRight size={16} />
            </Link>
            <a href="https://wa.me/51993611523" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 font-bold transition-all hover:bg-white/10" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.9rem", letterSpacing: "0.08em", color: "#ffffff", borderRadius: "3px", border: "1px solid rgba(255,255,255,0.6)" }}>
              <MessageCircle size={16} /> ESCRÍBENOS
            </a>
          </div>
        </div>
      </section>

      <SectionNav sections={SECTIONS} offset={NAV_OFFSET} />

      <section id="resumen" className="py-20 bg-white scroll-mt-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.25fr_1fr] gap-12">
          <div>
            <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.75rem", fontWeight: 700, color: "#f5b700", letterSpacing: "0.2em" }}>
              ¿QUÉ ES?
            </span>
            <h2 className="mt-2" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#4a4a49", lineHeight: 1.1 }}>
              EN POCAS PALABRAS
            </h2>
            {p.intro.map((para, i) => (
              <p key={i} className="mt-5" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, fontSize: "1rem", lineHeight: 1.85, color: "#4a4a49" }}>
                {para}
              </p>
            ))}
          </div>

          <aside className="p-8 h-fit" style={{ borderRadius: "12px", background: "#173B66" }}>
            <h3 className="text-white" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "1.1rem", letterSpacing: "0.04em" }}>
              ¿PARA QUIÉN ES?
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              {p.paraQuien.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 size={17} style={{ color: "#f5b700", flexShrink: 0, marginTop: "3px" }} />
                  <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.92rem", lineHeight: 1.6, color: "#dfe6f0" }}>{item}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section id="beneficios" className="py-20 scroll-mt-32" style={{ background: "#f8f8f8" }}>
        <div className="max-w-7xl mx-auto px-6">
          <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.75rem", fontWeight: 700, color: "#f5b700", letterSpacing: "0.2em" }}>
            LO QUE OBTIENES
          </span>
          <h2 className="mt-2" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#4a4a49" }}>
            BENEFICIOS
          </h2>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {p.beneficios.map((b) => (
              <div key={b.title} className="p-6" style={{ borderRadius: "10px", background: "#ffffff", border: "1px solid #eceae4" }}>
                <div className="flex items-center gap-2 mb-2">
                  <BadgeCheck size={17} style={{ color: "#f5b700", flexShrink: 0 }} />
                  <b style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "1rem", color: "#4a4a49" }}>{b.title}</b>
                </div>
                <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, fontSize: "0.9rem", lineHeight: 1.65, color: "#5c5c5a" }}>
                  {b.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="py-20 bg-white scroll-mt-32">
        <div className="max-w-7xl mx-auto px-6">
          <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.75rem", fontWeight: 700, color: "#f5b700", letterSpacing: "0.2em" }}>
            PASO A PASO
          </span>
          <h2 className="mt-2" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#4a4a49" }}>
            CÓMO FUNCIONA
          </h2>
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {p.pasos.map((paso, i) => (
              <div key={paso.title} className="p-6 relative" style={{ borderRadius: "10px", border: "1px solid #eceae4" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 grid place-items-center" style={{ borderRadius: "50%", background: "rgba(245,183,0,0.14)" }}>
                    <paso.icon size={17} style={{ color: "#f5b700" }} />
                  </div>
                  <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.14em", color: "#b0b6bd" }}>
                    PASO {i + 1}
                  </span>
                </div>
                <b style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "1.05rem", color: "#4a4a49" }}>
                  {paso.title}
                </b>
                <p className="mt-2" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, fontSize: "0.9rem", lineHeight: 1.65, color: "#5c5c5a" }}>
                  {paso.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="requisitos" className="py-20 scroll-mt-32" style={{ background: "#173B66" }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 mb-4" style={{ background: "#f5b700", color: "#0d0f14", fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.16em", borderRadius: "3px" }}>
              REQUISITOS
            </span>
            <h2 className="text-white" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", lineHeight: 1.1 }}>
              LO QUE TIENES QUE CUMPLIR
            </h2>
            <div className="mt-7 flex flex-col gap-3.5">
              {p.requisitos.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 size={18} style={{ color: "#f5b700", flexShrink: 0, marginTop: "3px" }} />
                  <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.98rem", lineHeight: 1.6, color: "#dfe6f0" }}>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://wa.me/51993611523" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-bold transition-all hover:opacity-90" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.88rem", letterSpacing: "0.06em", borderRadius: "3px" }}>
                <Download size={15} /> DESCARGA REQUISITOS
              </a>
              <Link to="/contacto" className="inline-flex items-center gap-2 px-6 py-3 font-bold transition-all hover:bg-white/10" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.88rem", letterSpacing: "0.06em", color: "#ffffff", borderRadius: "3px", border: "1px solid rgba(255,255,255,0.6)" }}>
                SOLICITA INFORMACIÓN
              </Link>
            </div>
          </div>

          <div className="p-8" style={{ borderRadius: "12px", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.16)" }}>
            <h3 className="text-white" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "1.05rem" }}>
              ¿NO SABES SI CALIFICAS?
            </h3>
            <p className="mt-3" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.92rem", lineHeight: 1.7, color: "#dfe6f0" }}>
              No te preocupes por memorizar las reglas. Cuéntanos tu situación —si tienes terreno, si buscas comprar, cuántos ingresos tiene tu familia— y un asesor revisa tu caso con la normativa vigente y te dice con claridad si puedes postular y qué pasos siguen.
            </p>
            <a href="https://wa.me/51993611523" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 font-bold hover:opacity-80" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.88rem", color: "#f5b700", letterSpacing: "0.04em" }}>
              <MessageCircle size={16} /> ESCRÍBENOS POR WHATSAPP
            </a>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-white scroll-mt-32">
        <div className="max-w-3xl mx-auto px-6">
          <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.75rem", fontWeight: 700, color: "#f5b700", letterSpacing: "0.2em" }}>
            RESUELVE TUS DUDAS
          </span>
          <h2 className="mt-2" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#4a4a49" }}>
            PREGUNTAS FRECUENTES
          </h2>
          <div className="divide-y mt-7" style={{ borderTop: "1px solid #eceae4", borderBottom: "1px solid #eceae4" }}>
            {p.faq.map((item) => (
              <details key={item.q} className="group">
                <summary className="flex items-center justify-between gap-4 py-4 px-4 cursor-pointer list-none transition-colors hover:bg-[#f8f8f8]" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 600, fontSize: "0.98rem", color: "#4a4a49" }}>
                  {item.q}
                  <span className="transition-transform duration-300 group-open:rotate-180" style={{ color: "#f5b700" }}>▾</span>
                </summary>
                <p className="px-4 pb-5" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, fontSize: "0.95rem", lineHeight: 1.75, color: "#5c5c5a" }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.82rem", color: "#6b7480" }}>
              Fuentes oficiales:
            </span>
            <div className="flex flex-wrap gap-3">
              {p.fuentes.map((f) => (
                <a key={f.label} href={f.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:opacity-80" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.85rem", color: "#173B66", fontWeight: 600 }}>
                  {f.label} <ExternalLink size={12} />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-10 p-8 text-center" style={{ borderRadius: "12px", background: "#173B66" }}>
            <h3 className="text-white" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "1.3rem" }}>
              ¿LISTO PARA DAR EL PRIMER PASO?
            </h3>
            <p className="mt-2" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.92rem", color: "#dfe6f0" }}>
              Cuéntanos tu situación y un asesor te orienta sin compromiso.
            </p>
            <Link to="/contacto" className="mt-5 inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-3.5 font-bold transition-all hover:opacity-90" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.95rem", letterSpacing: "0.08em", borderRadius: "3px" }}>
              COTIZAR AHORA <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}