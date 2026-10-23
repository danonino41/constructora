import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import SectionNav from "@/sections/SectionNav";
import { SERVICIOS_DETALLE } from "@/data/servicios";

const FONT = '"Myriad Pro", "Segoe UI", sans-serif';

const SECTIONS = [
  { id: "servicio", label: "El servicio" },
  { id: "incluye", label: "Qué incluye" },
  { id: "proceso", label: "Cómo trabajamos" },
  { id: "faq", label: "Preguntas frecuentes" },
];

const SELLOS = [
  { value: "3,367", label: "viviendas construidas" },
  { value: "11", label: "departamentos atendidos" },
  { value: "+10", label: "años de experiencia" },
];

export function generateStaticParams() {
  return Object.keys(SERVICIOS_DETALLE).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = SERVICIOS_DETALLE[slug];
  if (!s) return { title: "Servicio no encontrado" };
  return {
    title: `${s.heroTitle} | Servicios | Consorcio Constructor`,
    description: s.heroSub,
  };
}

export default async function ServicioDetalle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = SERVICIOS_DETALLE[slug];

  if (!s) notFound();

  const relacionados = Object.values(SERVICIOS_DETALLE).filter((item) => item.id !== s.id);

  return (
    <div>
      <section className="relative isolate mt-[var(--header-h)] overflow-hidden pt-12 pb-16 md:pt-16 md:pb-20">
        <img
          src={s.image.src}
          alt={s.imageAlt}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "linear-gradient(100deg, rgba(13,15,20,0.92) 0%, rgba(13,15,20,0.74) 48%, rgba(13,15,20,0.36) 100%)" }}
        />

        <div className="relative max-w-7xl mx-auto px-6">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 transition-opacity hover:opacity-80"
            style={{ fontFamily: FONT, fontSize: "0.8rem", color: "#f5b700", letterSpacing: "0.08em" }}
          >
            <ArrowLeft size={14} /> VOLVER A SERVICIOS
          </Link>

          <span className="block mt-7" style={{ fontFamily: FONT, fontSize: "0.72rem", fontWeight: 700, color: "#f5b700", letterSpacing: "0.2em" }}>
            {s.eyebrow}
          </span>

          <h1
            className="mt-3 text-white"
            style={{ fontFamily: FONT, fontWeight: 700, fontSize: "clamp(2.2rem, 4.4vw, 3.5rem)", lineHeight: 1.02, letterSpacing: "0.01em", maxWidth: "46rem" }}
          >
            {s.heroTitle}
          </h1>

          <p className="mt-5 max-w-2xl" style={{ fontFamily: FONT, fontWeight: 400, fontSize: "1.05rem", lineHeight: 1.8, color: "#e6ebf2" }}>
            {s.heroSub}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 font-bold transition-all hover:opacity-90"
              style={{ fontFamily: FONT, fontSize: "0.9rem", letterSpacing: "0.08em", background: "#f5b700", color: "#0d0f14", borderRadius: "6px" }}
            >
              EVALUAR MI CASO <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/51993611523"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 font-bold transition-all hover:bg-white/10"
              style={{ fontFamily: FONT, fontSize: "0.9rem", letterSpacing: "0.08em", color: "#ffffff", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.55)" }}
            >
              <WhatsAppIcon size={16} /> WHATSAPP
            </a>
          </div>

          <div className="mt-12 pt-6 flex flex-wrap gap-x-10 gap-y-4" style={{ borderTop: "1px solid rgba(255,255,255,0.18)" }}>
            {SELLOS.map((item) => (
              <div key={item.label}>
                <div style={{ fontFamily: FONT, fontWeight: 700, fontSize: "1.45rem", lineHeight: 1, color: "#f5b700" }}>
                  {item.value}
                </div>
                <div className="mt-1" style={{ fontFamily: FONT, fontSize: "0.78rem", color: "#dfe6f0" }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionNav sections={SECTIONS} offset={130} />

      <section id="servicio" className="py-20 bg-white scroll-mt-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.25fr_1fr] gap-12">
          <div>
            <span style={{ fontFamily: FONT, fontSize: "0.75rem", fontWeight: 700, color: "#f5b700", letterSpacing: "0.2em" }}>
              EL SERVICIO
            </span>
            <h2 className="mt-2" style={{ fontFamily: FONT, fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#4a4a49", lineHeight: 1.1 }}>
              CÓMO TE AYUDAMOS
            </h2>
            {s.intro.map((paragraph, i) => (
              <p key={i} className="mt-5" style={{ fontFamily: FONT, fontWeight: 400, fontSize: "1rem", lineHeight: 1.85, color: "#4a4a49" }}>
                {paragraph}
              </p>
            ))}
          </div>

          <aside className="p-8 h-fit" style={{ borderRadius: "12px", background: "#173B66" }}>
            <h3 className="text-white" style={{ fontFamily: FONT, fontWeight: 700, fontSize: "1.1rem", letterSpacing: "0.04em" }}>
              ¿PARA QUIÉN ES?
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              {s.paraQuien.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 size={17} style={{ color: "#f5b700", flexShrink: 0, marginTop: "3px" }} />
                  <span style={{ fontFamily: FONT, fontSize: "0.92rem", lineHeight: 1.6, color: "#dfe6f0" }}>{item}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section id="incluye" className="py-20 scroll-mt-32" style={{ background: "#f8f8f8" }}>
        <div className="max-w-7xl mx-auto px-6">
          <span style={{ fontFamily: FONT, fontSize: "0.75rem", fontWeight: 700, color: "#f5b700", letterSpacing: "0.2em" }}>
            ALCANCE DEL SERVICIO
          </span>
          <h2 className="mt-2" style={{ fontFamily: FONT, fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#4a4a49" }}>
            QUÉ INCLUYE
          </h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {s.incluye.map((item) => (
              <div key={item.title} className="p-6" style={{ borderRadius: "10px", background: "#ffffff", border: "1px solid #eceae4" }}>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 size={17} style={{ color: "#f5b700", flexShrink: 0 }} />
                  <b style={{ fontFamily: FONT, fontWeight: 700, fontSize: "1rem", color: "#4a4a49" }}>{item.title}</b>
                </div>
                <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "0.9rem", lineHeight: 1.65, color: "#5c5c5a" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proceso" className="py-20 bg-white scroll-mt-32">
        <div className="max-w-7xl mx-auto px-6">
          <span style={{ fontFamily: FONT, fontSize: "0.75rem", fontWeight: 700, color: "#f5b700", letterSpacing: "0.2em" }}>
            PASO A PASO
          </span>
          <h2 className="mt-2" style={{ fontFamily: FONT, fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#4a4a49" }}>
            CÓMO TRABAJAMOS
          </h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {s.proceso.map((step, i) => (
              <div key={step.title} className="p-6 relative" style={{ borderRadius: "10px", border: "1px solid #eceae4" }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 grid place-items-center" style={{ borderRadius: "50%", background: "rgba(245,183,0,0.14)" }}>
                    <span style={{ fontFamily: FONT, fontWeight: 700, fontSize: "0.82rem", color: "#b58900" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <span style={{ fontFamily: FONT, fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.14em", color: "#b0b6bd" }}>
                    PASO {i + 1}
                  </span>
                </div>
                <b style={{ fontFamily: FONT, fontWeight: 700, fontSize: "1.02rem", color: "#4a4a49" }}>
                  {step.title}
                </b>
                <p className="mt-2" style={{ fontFamily: FONT, fontWeight: 400, fontSize: "0.9rem", lineHeight: 1.65, color: "#5c5c5a" }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 scroll-mt-32" style={{ background: "#f8f8f8" }}>
        <div className="max-w-3xl mx-auto px-6">
          <span style={{ fontFamily: FONT, fontSize: "0.75rem", fontWeight: 700, color: "#f5b700", letterSpacing: "0.2em" }}>
            RESUELVE TUS DUDAS
          </span>
          <h2 className="mt-2" style={{ fontFamily: FONT, fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#4a4a49" }}>
            PREGUNTAS FRECUENTES
          </h2>
          <div className="divide-y mt-7" style={{ borderTop: "1px solid #eceae4", borderBottom: "1px solid #eceae4" }}>
            {s.faq.map((item) => (
              <details key={item.q} className="group">
                <summary className="flex items-center justify-between gap-4 py-4 px-4 cursor-pointer list-none transition-colors hover:bg-[#ffffff]" style={{ fontFamily: FONT, fontWeight: 600, fontSize: "0.98rem", color: "#4a4a49" }}>
                  {item.q}
                  <span className="transition-transform duration-300 group-open:rotate-180" style={{ color: "#f5b700" }}>▾</span>
                </summary>
                <p className="px-4 pb-5" style={{ fontFamily: FONT, fontWeight: 400, fontSize: "0.95rem", lineHeight: 1.75, color: "#5c5c5a" }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-10 p-8 text-center" style={{ borderRadius: "12px", background: "#173B66" }}>
            <h3 className="text-white" style={{ fontFamily: FONT, fontWeight: 700, fontSize: "1.3rem" }}>
              ¿EMPEZAMOS CON TU CASO?
            </h3>
            <p className="mt-2" style={{ fontFamily: FONT, fontSize: "0.92rem", color: "#dfe6f0" }}>
              Revisamos tu situación y te explicamos qué sigue, sin compromiso.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 font-bold transition-all hover:opacity-90"
                style={{ fontFamily: FONT, fontSize: "0.9rem", letterSpacing: "0.08em", borderRadius: "4px" }}
              >
                EVALUAR MI CASO <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/51993611523"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 font-bold transition-all hover:bg-white/10"
                style={{ fontFamily: FONT, fontSize: "0.9rem", letterSpacing: "0.08em", color: "#ffffff", borderRadius: "4px", border: "1px solid rgba(255,255,255,0.55)" }}
              >
                <WhatsAppIcon size={16} /> WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <span style={{ fontFamily: FONT, fontSize: "0.75rem", fontWeight: 700, color: "#f5b700", letterSpacing: "0.2em" }}>
                MÁS SERVICIOS
              </span>
              <h2 className="mt-2" style={{ fontFamily: FONT, fontWeight: 700, fontSize: "clamp(1.5rem, 2.8vw, 2rem)", color: "#4a4a49" }}>
                SIGUE EXPLORANDO
              </h2>
            </div>
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 font-bold transition-all hover:gap-3"
              style={{ fontFamily: FONT, fontSize: "0.85rem", color: "#173B66", letterSpacing: "0.04em" }}
            >
              VER TODOS LOS SERVICIOS <ArrowRight size={15} style={{ color: "#f5b700" }} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relacionados.map((item) => (
              <Link
                key={item.id}
                href={`/servicios/${item.id}`}
                className="group p-6 flex flex-col transition-all hover:shadow-lg"
                style={{ borderRadius: "10px", border: "1px solid #eceae4", background: "#ffffff" }}
              >
                <span style={{ fontFamily: FONT, fontSize: "0.65rem", fontWeight: 700, color: "#f5b700", letterSpacing: "0.16em" }}>
                  {item.eyebrow}
                </span>
                <b className="mt-2" style={{ fontFamily: FONT, fontWeight: 700, fontSize: "1.1rem", color: "#4a4a49" }}>
                  {item.heroTitle}
                </b>
                <p className="mt-2" style={{ fontFamily: FONT, fontWeight: 400, fontSize: "0.88rem", lineHeight: 1.6, color: "#5c5c5a" }}>
                  {item.heroSub}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 font-bold transition-all group-hover:gap-3" style={{ fontFamily: FONT, fontSize: "0.82rem", color: "#173B66" }}>
                  VER SERVICIO <ArrowRight size={14} style={{ color: "#f5b700" }} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
