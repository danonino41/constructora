import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Layers, Ruler } from "lucide-react";
import ModelCatalog from "@/components/proyectos/ModelCatalog";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { PROYECTOS_MODELOS, PROYECTOS_POR_SLUG } from "@/data/proyectos";

const FONT = '"Myriad Pro", "Segoe UI", sans-serif';

export function generateStaticParams() {
  return PROYECTOS_MODELOS.map((modelo) => ({ modelo: modelo.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ modelo: string }> }): Promise<Metadata> {
  const { modelo: slug } = await params;
  const modelo = PROYECTOS_POR_SLUG[slug];

  if (!modelo) return { title: "Modelo no encontrado | Consorcio Constructor" };

  return {
    title: `${modelo.label} · ${modelo.title} | Consorcio Constructor`,
    description: modelo.desc,
  };
}

function areaRange(areas: string[]) {
  const values = areas
    .map((area) => Number.parseFloat(area.replace(",", ".")))
    .filter((value) => Number.isFinite(value));

  if (values.length === 0) return "";
  const min = Math.min(...values).toFixed(2);
  const max = Math.max(...values).toFixed(2);
  return `${min} – ${max} m²`;
}

export default async function ModeloPage({ params }: { params: Promise<{ modelo: string }> }) {
  const { modelo: slug } = await params;
  const modelo = PROYECTOS_POR_SLUG[slug];

  if (!modelo) notFound();

  const otros = PROYECTOS_MODELOS.filter((item) => item.slug !== modelo.slug);
  const lotes = Array.from(new Set(modelo.ejemplos.map((ejemplo) => ejemplo.lot)));
  const Icon = modelo.icon;
  const catalogo = {
    slug: modelo.slug,
    label: modelo.label,
    title: modelo.title,
    subtitle: modelo.subtitle,
    desc: modelo.desc,
    longDesc: modelo.longDesc,
    accent: modelo.accent,
    ejemplos: modelo.ejemplos,
  };

  return (
    <div className="pt-[var(--header-h)]">
      <section className="relative overflow-hidden" style={{ background: "#173B66" }}>
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: "radial-gradient(circle at 88% 12%, rgba(245,183,0,0.16), transparent 42%)" }}
        />
        <div className="relative max-w-7xl mx-auto px-6 py-14 md:py-20">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 transition-colors hover:opacity-80"
            style={{ fontFamily: FONT, fontSize: "0.8rem", color: "#f5b700", letterSpacing: "0.08em" }}
          >
            <ArrowLeft size={14} /> VOLVER A PROYECTOS
          </Link>

          <div className="mt-7 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2" style={{ fontFamily: FONT, fontSize: "0.72rem", fontWeight: 700, color: "#f5b700", letterSpacing: "0.2em" }}>
                <Icon size={14} /> {modelo.label.toUpperCase()}
              </span>
              <h1 className="mt-3 text-white" style={{ fontFamily: FONT, fontWeight: 700, fontSize: "clamp(2.2rem, 4.4vw, 3.4rem)", lineHeight: 1.02 }}>
                {modelo.title}
              </h1>
              <p className="mt-3" style={{ fontFamily: FONT, fontSize: "1.05rem", fontWeight: 600, color: "#f5b700", lineHeight: 1.5 }}>
                {modelo.subtitle}
              </p>
              <p className="mt-5 max-w-2xl" style={{ fontFamily: FONT, fontSize: "1rem", lineHeight: 1.8, color: "#dfe6f0" }}>
                {modelo.longDesc}
              </p>

              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
                <span className="inline-flex items-center gap-2" style={{ fontFamily: FONT, fontSize: "0.86rem", color: "#dfe6f0" }}>
                  <Layers size={16} style={{ color: "#f5b700" }} />
                  <b style={{ color: "#ffffff" }}>{modelo.ejemplos.length}</b> diseños disponibles
                </span>
                <span className="inline-flex items-center gap-2" style={{ fontFamily: FONT, fontSize: "0.86rem", color: "#dfe6f0" }}>
                  <Ruler size={16} style={{ color: "#f5b700" }} />
                  Lotes de {lotes.join(" · ")}
                </span>
                <span style={{ fontFamily: FONT, fontSize: "0.86rem", color: "#dfe6f0" }}>
                  Área construida: <b style={{ color: "#ffffff" }}>{areaRange(modelo.ejemplos.map((ejemplo) => ejemplo.area))}</b>
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#disenos"
                  className="inline-flex items-center gap-2 px-6 py-3 font-bold transition-all hover:opacity-90"
                  style={{ fontFamily: FONT, fontSize: "0.88rem", letterSpacing: "0.08em", background: "#f5b700", color: "#0d0f14", borderRadius: "6px" }}
                >
                  VER DISEÑOS <ArrowRight size={15} />
                </a>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 px-6 py-3 font-bold transition-all hover:bg-white/10"
                  style={{ fontFamily: FONT, fontSize: "0.88rem", letterSpacing: "0.08em", color: "#ffffff", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.55)" }}
                >
                  SOLICITA INFORMACIÓN
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="overflow-hidden" style={{ borderRadius: "14px", aspectRatio: "1.1", boxShadow: "0 20px 45px rgba(0,0,0,0.3)" }}>
                <img src={modelo.ejemplos[0].img} alt={`${modelo.label}: ${modelo.title}`} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="disenos" className="py-16 md:py-20 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8">
            <div>
              <span style={{ fontFamily: FONT, fontSize: "0.75rem", fontWeight: 700, color: "#f5b700", letterSpacing: "0.2em" }}>
                PLANOS Y METRAJES
              </span>
              <h2 className="mt-2" style={{ fontFamily: FONT, fontWeight: 700, fontSize: "clamp(1.8rem, 3.2vw, 2.5rem)", color: "#4a4a49", lineHeight: 1.05 }}>
                DISEÑOS DEL {modelo.label.toUpperCase()}
              </h2>
              <p className="mt-3 max-w-2xl" style={{ fontFamily: FONT, fontSize: "0.95rem", lineHeight: 1.7, color: "#5c5c5a" }}>
                Filtra por tamaño de lote y abre los planos de cada diseño. Todos incluyen distribución, áreas y la vista del proyecto.
              </p>
            </div>

            {otros.map((otro) => {
              const OtroIcon = otro.icon;
              return (
                <Link
                  key={otro.slug}
                  href={`/proyectos/${otro.slug}`}
                  className="group inline-flex items-center gap-3 px-5 py-3 transition-colors"
                  style={{ fontFamily: FONT, fontSize: "0.84rem", fontWeight: 600, color: "#173B66", border: "1px solid #e4e7ec", borderRadius: "10px", background: "#f8f8f8" }}
                >
                  <OtroIcon size={17} style={{ color: "#f5b700" }} />
                  <span>
                    <span className="block" style={{ fontSize: "0.68rem", fontWeight: 700, color: "#8a9199", letterSpacing: "0.12em" }}>
                      TAMBIÉN TE PUEDE INTERESAR
                    </span>
                    {otro.label} · {otro.title}
                  </span>
                  <ArrowRight size={15} style={{ color: "#f5b700" }} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              );
            })}
          </div>

          <ModelCatalog modelo={catalogo} />

          <div className="mt-12 p-7 md:p-9 flex flex-col md:flex-row md:items-center justify-between gap-6" style={{ borderRadius: "14px", background: "#f8f8f8", border: "1px solid #eceae4" }}>
            <div>
              <h3 style={{ fontFamily: FONT, fontWeight: 700, fontSize: "1.25rem", color: "#4a4a49" }}>
                ¿TE AYUDA UN ASESOR A ELEGIR?
              </h3>
              <p className="mt-2" style={{ fontFamily: FONT, fontSize: "0.92rem", lineHeight: 1.7, color: "#5c5c5a", maxWidth: "38rem" }}>
                Revisamos tu terreno, el tamaño de tu familia y tu presupuesto para recomendarte el diseño correcto dentro del {modelo.label}.
              </p>
            </div>
            <a
              href="https://wa.me/51993611523?text=Hola%2C%20quiero%20elegir%20un%20dise%C3%B1o%20del%20Modelo%20de%20vivienda."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 font-bold shrink-0 transition-all hover:opacity-90"
              style={{ fontFamily: FONT, fontSize: "0.88rem", letterSpacing: "0.06em", background: "#173B66", color: "#ffffff", borderRadius: "6px" }}
            >
              <WhatsAppIcon size={16} /> ESCRIBIR A UN ASESOR
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
