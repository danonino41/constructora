import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ClipboardCheck,
  HardHat,
  House,
  KeyRound,
  Landmark,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { PROGRAMAS_DETALLE } from "@/data/programas";
import { STATS } from "@/data/content";

import heroImg from "@/imports/casa-terminada-amarillo-angulo-superior.jpeg";
import techoPropioImg from "@/imports/casa-terminada-amarillo-un-piso.jpeg";
import reforzamientoImg from "@/imports/evidencia-avance.jpg";
import miviviendaImg from "@/imports/casa de 2 pisos terminada.jpeg";

const FONT = '"Myriad Pro", "Segoe UI", sans-serif';

type ProgramaDestacado = {
  slug: string;
  order: string;
  tag: string;
  tagline: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  badge: string;
  icon: LucideIcon;
  facts: { value: string; label: string }[];
};

const PROGRAMAS_DESTACADOS: ProgramaDestacado[] = [
  {
    slug: "techo-propio",
    order: "01",
    tag: "BONO DEL ESTADO",
    tagline: "El bono que no se devuelve para tu primera vivienda.",
    image: techoPropioImg.src,
    imageAlt: "Vivienda terminada construida con el Bono Familiar Habitacional",
    badge: "Bono Familiar Habitacional",
    icon: House,
    facts: [
      { value: "S/ 3,715", label: "Tope de ingreso para compra" },
      { value: "S/ 2,706", label: "Tope de ingreso para construcción" },
      { value: "No se devuelve", label: "Es un subsidio del Estado" },
    ],
  },
  {
    slug: "reforzamiento",
    order: "02",
    tag: "SUBSIDIO NO REEMBOLSABLE",
    tagline: "Protege tu casa y a tu familia frente a un sismo.",
    image: reforzamientoImg.src,
    imageAlt: "Obra de reforzamiento estructural con ingeniería certificada",
    badge: "Refuerzo sísmico",
    icon: ShieldCheck,
    facts: [
      { value: "Subsidio", label: "Financia el refuerzo estructural" },
      { value: "No se devuelve", label: "No genera deuda" },
      { value: "MVCS", label: "Proyecto inscrito y coordinado" },
    ],
  },
  {
    slug: "credito-mivivienda",
    order: "03",
    tag: "CRÉDITO HIPOTECARIO",
    tagline: "Financia tu vivienda con el respaldo del Bono del Buen Pagador.",
    image: miviviendaImg.src,
    imageAlt: "Vivienda de dos pisos terminada con financiamiento MiVivienda",
    badge: "Bono del Buen Pagador",
    icon: Landmark,
    facts: [
      { value: "Hasta 90 %", label: "De financiamiento de la vivienda" },
      { value: "Bono del Buen Pagador", label: "Reduce tu deuda si pagas puntual" },
      { value: "Compra o construcción", label: "Elige la modalidad que necesitas" },
    ],
  },
];

const PASOS = [
  {
    icon: MessageCircle,
    title: "Conversamos",
    desc: "Nos cuentas tu situación: si tienes terreno, cuánto ganas y qué quieres lograr.",
  },
  {
    icon: ClipboardCheck,
    title: "Revisamos requisitos",
    desc: "Verificamos topes, ahorro y documentos para confirmar a qué programa puedes postular.",
  },
  {
    icon: HardHat,
    title: "Armamos el expediente",
    desc: "Preparamos tu postulación y coordinamos con el MVCS o la entidad financiera.",
  },
  {
    icon: KeyRound,
    title: "Construimos y entregamos",
    desc: "Ejecutamos la obra con supervisión técnica y te entregamos las llaves.",
  },
];

const COMPARISON = [
  {
    label: "¿Qué recibes?",
    techo: "Un bono para construir o comprar tu vivienda",
    reforzamiento: "Un subsidio para reforzar tu casa",
    credito: "Un crédito hipotecario para financiar tu vivienda",
  },
  {
    label: "¿Se devuelve?",
    techo: "No. Es un subsidio no reembolsable",
    reforzamiento: "No. Es un subsidio no reembolsable",
    credito: "Sí. Es un crédito que se paga en cuotas",
  },
  {
    label: "Ideal si...",
    techo: "Tu familia no tiene otra vivienda y cumple el tope de ingresos",
    reforzamiento: "Tu vivienda es vulnerable a sismos y necesitas reforzarla",
    credito: "Necesitas financiar el saldo de una compra o construcción",
  },
  {
    label: "¿Con qué se combina?",
    techo: "Con tu ahorro y, si hace falta, con un crédito",
    reforzamiento: "Se gestiona directamente con el MVCS",
    credito: "Con el Bono del Buen Pagador",
  },
];

export default function Programs() {
  return (
    <>
      <section className="relative isolate min-h-[76vh] flex items-end overflow-hidden" style={{ background: "#0d0f14" }}>
        <img
          src={heroImg.src}
          alt="Vivienda terminada por Consorcio Constructor"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          style={{ objectPosition: "center 62%" }}
        />
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(9,10,14,0.94) 0%, rgba(9,10,14,0.78) 46%, rgba(9,10,14,0.28) 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 -z-10 h-56"
          style={{ background: "linear-gradient(0deg, rgba(9,10,14,0.9) 0%, rgba(9,10,14,0) 100%)" }}
        />

        <div className="relative w-full max-w-7xl mx-auto px-6 pt-24 pb-16 md:pt-28 md:pb-20">
          <span
            className="inline-block px-3 py-1.5"
            style={{ background: "#f5b700", color: "#0d0f14", fontFamily: FONT, fontSize: "0.66rem", fontWeight: 700, letterSpacing: "0.18em", borderRadius: "3px" }}
          >
            PROGRAMAS DE VIVIENDA
          </span>

          <h1
            className="mt-5 text-white"
            style={{ fontFamily: FONT, fontWeight: 700, fontSize: "clamp(2.3rem, 5vw, 4rem)", lineHeight: 0.98, letterSpacing: "0.01em", maxWidth: "48rem" }}
          >
            Un programa del Estado para cada etapa de <span style={{ color: "#f5b700" }}>tu vivienda.</span>
          </h1>

          <p className="mt-6 max-w-2xl" style={{ fontFamily: FONT, fontSize: "clamp(1rem, 1.3vw, 1.15rem)", lineHeight: 1.8, color: "#e2e6ec" }}>
            Ya sea que quieras construir, comprar, reforzar tu casa o financiar el saldo, te ayudamos a identificar el programa correcto y a postular sin perderte en el camino.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#programas"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 font-bold transition-all hover:-translate-y-0.5"
              style={{ background: "#f5b700", color: "#0d0f14", fontFamily: FONT, fontSize: "0.9rem", letterSpacing: "0.08em", borderRadius: "6px", boxShadow: "0 12px 30px rgba(245,183,0,0.3)" }}
            >
              ENCUENTRA TU PROGRAMA <ArrowRight size={16} />
            </a>
            <a
              href="https://wa.me/51993611523?text=Hola%2C%20quiero%20saber%20a%20qu%C3%A9%20programa%20puedo%20postular."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 font-bold transition-all hover:bg-white/10"
              style={{ fontFamily: FONT, fontSize: "0.9rem", letterSpacing: "0.08em", color: "#ffffff", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.55)" }}
            >
              <WhatsAppIcon size={16} /> CONSULTAR MI CASO
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
            {STATS.slice(0, 3).map((stat, index) => (
              <span key={stat.value} className="inline-flex items-center gap-3">
                {index > 0 && <span aria-hidden style={{ color: "rgba(245,183,0,0.55)", fontSize: "0.7rem" }}>◆</span>}
                <span className="inline-flex items-baseline gap-2">
                  <b style={{ fontFamily: FONT, fontWeight: 800, fontSize: "1.35rem", color: "#f5b700", lineHeight: 1 }}>{stat.value}</b>
                  <span style={{ fontFamily: FONT, fontSize: "0.8rem", color: "#c9d5e4" }}>{stat.label}</span>
                </span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="programas" className="bg-white scroll-mt-36" style={{ borderBottom: "1px solid #eceae4" }}>
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <div>
              <span style={{ fontFamily: FONT, fontSize: "0.7rem", fontWeight: 700, color: "#b58900", letterSpacing: "0.18em" }}>
                ACCESO DIRECTO
              </span>
              <h2 className="mt-1" style={{ fontFamily: FONT, fontWeight: 700, fontSize: "clamp(1.35rem, 2.2vw, 1.7rem)", color: "#3d3d3c" }}>
                Tres caminos. Un mismo acompañamiento.
              </h2>
            </div>

            <nav className="flex flex-wrap gap-2" aria-label="Ir a un programa">
              {PROGRAMAS_DESTACADOS.map((programa) => {
                const Icon = programa.icon;
                return (
                  <a
                    key={programa.slug}
                    href={`#${programa.slug}`}
                    className="group inline-flex items-center gap-2.5 px-4 py-2.5 transition-all hover:-translate-y-0.5"
                    style={{ fontFamily: FONT, fontSize: "0.82rem", fontWeight: 600, color: "#173B66", background: "#f8f8f8", border: "1px solid #e4e7ec", borderRadius: "999px" }}
                  >
                    <Icon size={16} style={{ color: "#f5b700" }} />
                    {PROGRAMAS_DETALLE[programa.slug].heroTitle}
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" style={{ color: "#8a9199" }} />
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      </section>

      {PROGRAMAS_DESTACADOS.map((programa, index) => {
        const detalle = PROGRAMAS_DETALLE[programa.slug];
        const Icon = programa.icon;
        const imageLeft = index % 2 === 0;

        return (
          <section
            key={programa.slug}
            id={programa.slug}
            className="py-16 md:py-24 scroll-mt-36"
            style={{ background: index % 2 === 0 ? "#ffffff" : "#f8f8f8" }}
          >
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div className={`relative ${imageLeft ? "" : "lg:order-2"}`}>
                  <div
                    className="relative overflow-hidden"
                    style={{ borderRadius: "16px", aspectRatio: "4/3.4", boxShadow: "0 24px 60px rgba(23,32,46,0.18)" }}
                  >
                    <img
                      src={programa.image}
                      alt={programa.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: programa.imagePosition ?? "center" }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(0deg, rgba(13,15,20,0.72) 0%, rgba(13,15,20,0.04) 55%)" }}
                    />
                    <span
                      className="absolute top-5 left-5 inline-flex items-center gap-2 px-3 py-1.5"
                      style={{ background: "rgba(13,15,20,0.62)", backdropFilter: "blur(8px)", color: "#ffffff", fontFamily: FONT, fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", borderRadius: "999px", border: "1px solid rgba(255,255,255,0.2)" }}
                    >
                      <Icon size={14} style={{ color: "#f5b700" }} /> {programa.badge.toUpperCase()}
                    </span>
                    <span
                      className="absolute bottom-5 left-5"
                      style={{ fontFamily: FONT, fontWeight: 800, fontSize: "3.2rem", lineHeight: 1, color: "rgba(255,255,255,0.92)" }}
                    >
                      {programa.order}
                    </span>
                  </div>

                  <span
                    aria-hidden
                    className="hidden lg:block absolute -bottom-4 -right-4 w-28 h-28"
                    style={{
                      borderRight: "6px solid #f5b700",
                      borderBottom: "6px solid #f5b700",
                      borderRadius: "0 0 18px 0",
                      opacity: 0.9,
                    }}
                  />
                </div>

                <div className={imageLeft ? "" : "lg:order-1"}>
                  <div className="flex items-center gap-3">
                    <span
                      className="grid place-items-center shrink-0"
                      style={{ width: 42, height: 42, borderRadius: "10px", background: "rgba(245,183,0,0.14)", border: "1px solid rgba(245,183,0,0.35)" }}
                    >
                      <Icon size={20} style={{ color: "#173B66" }} />
                    </span>
                    <span style={{ fontFamily: FONT, fontSize: "0.7rem", fontWeight: 700, color: "#b58900", letterSpacing: "0.18em" }}>
                      PROGRAMA {programa.order} · {programa.tag}
                    </span>
                  </div>

                  <h2 className="mt-5" style={{ fontFamily: FONT, fontWeight: 700, fontSize: "clamp(2rem, 3.6vw, 2.9rem)", color: "#3d3d3c", lineHeight: 1.02 }}>
                    {detalle.heroTitle}
                  </h2>
                  <p className="mt-3" style={{ fontFamily: FONT, fontWeight: 600, fontSize: "1.08rem", lineHeight: 1.55, color: "#173B66" }}>
                    {programa.tagline}
                  </p>
                  <p className="mt-5" style={{ fontFamily: FONT, fontSize: "0.98rem", lineHeight: 1.8, color: "#5c5c5a" }}>
                    {detalle.intro[0]}
                  </p>

                  <div className="mt-7 grid sm:grid-cols-3 gap-3">
                    {programa.facts.map((fact) => (
                      <div key={fact.label} className="p-4" style={{ borderRadius: "10px", background: "#ffffff", border: "1px solid #eceae4" }}>
                        <div style={{ fontFamily: FONT, fontWeight: 800, fontSize: "1.06rem", lineHeight: 1.15, color: "#173B66" }}>
                          {fact.value}
                        </div>
                        <div className="mt-1.5" style={{ fontFamily: FONT, fontSize: "0.73rem", lineHeight: 1.45, color: "#7b8490" }}>
                          {fact.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-col gap-2.5">
                    {detalle.beneficios.slice(0, 3).map((beneficio) => (
                      <div key={beneficio.title} className="flex items-start gap-3">
                        <BadgeCheck size={17} style={{ color: "#f5b700", flexShrink: 0, marginTop: "2px" }} />
                        <span style={{ fontFamily: FONT, fontSize: "0.92rem", lineHeight: 1.55, color: "#4a4a49" }}>
                          <b>{beneficio.title}.</b> {beneficio.desc}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/programas/${programa.slug}`}
                      className="inline-flex items-center gap-2.5 px-6 py-3.5 font-bold transition-all hover:opacity-90"
                      style={{ fontFamily: FONT, fontSize: "0.88rem", letterSpacing: "0.07em", background: "#173B66", color: "#ffffff", borderRadius: "6px" }}
                    >
                      CONOCE EL PROGRAMA <ArrowRight size={16} style={{ color: "#f5b700" }} />
                    </Link>
                    <Link
                      href="/requisitos"
                      className="inline-flex items-center gap-2 font-bold transition-all hover:gap-3"
                      style={{ fontFamily: FONT, fontSize: "0.86rem", letterSpacing: "0.04em", color: "#173B66" }}
                    >
                      VER REQUISITOS <ArrowRight size={15} style={{ color: "#f5b700" }} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="py-16 md:py-24" style={{ background: "#173B66" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span style={{ fontFamily: FONT, fontSize: "0.72rem", fontWeight: 700, color: "#f5b700", letterSpacing: "0.2em" }}>
              COMPARA LOS BENEFICIOS
            </span>
            <h2 className="mt-2 text-white" style={{ fontFamily: FONT, fontWeight: 700, fontSize: "clamp(1.9rem, 3.4vw, 2.7rem)", lineHeight: 1.05 }}>
              ¿BONO, SUBSIDIO O CRÉDITO?
            </h2>
            <p className="mt-4" style={{ fontFamily: FONT, fontSize: "1rem", lineHeight: 1.8, color: "#dfe6f0" }}>
              Los tres programas ayudan a acceder a una vivienda, pero funcionan distinto. Esta comparación rápida te ayuda a ubicar el tuyo.
            </p>
          </div>

          <div className="mt-9 overflow-x-auto" style={{ borderRadius: "14px", border: "1px solid rgba(255,255,255,0.16)" }}>
            <table className="w-full min-w-[54rem]" style={{ borderCollapse: "collapse", background: "rgba(255,255,255,0.05)" }}>
              <thead>
                <tr>
                  <th className="text-left p-5" style={{ width: "18%", borderBottom: "1px solid rgba(255,255,255,0.16)", fontFamily: FONT, fontSize: "0.68rem", fontWeight: 700, color: "#9fb0c6", letterSpacing: "0.14em" }}>
                    PROGRAMA
                  </th>
                  {PROGRAMAS_DESTACADOS.map((programa) => {
                    const Icon = programa.icon;
                    return (
                      <th key={programa.slug} className="text-left p-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.16)" }}>
                        <span className="inline-flex items-center gap-2" style={{ fontFamily: FONT, fontSize: "0.92rem", fontWeight: 700, color: "#ffffff" }}>
                          <Icon size={16} style={{ color: "#f5b700" }} />
                          {PROGRAMAS_DETALLE[programa.slug].heroTitle}
                        </span>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.label}>
                    <th className="text-left align-top p-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", fontFamily: FONT, fontSize: "0.8rem", fontWeight: 700, color: "#f5b700" }}>
                      {row.label}
                    </th>
                    <td className="align-top p-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", fontFamily: FONT, fontSize: "0.86rem", lineHeight: 1.6, color: "#dfe6f0" }}>
                      {row.techo}
                    </td>
                    <td className="align-top p-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", fontFamily: FONT, fontSize: "0.86rem", lineHeight: 1.6, color: "#dfe6f0" }}>
                      {row.reforzamiento}
                    </td>
                    <td className="align-top p-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", fontFamily: FONT, fontSize: "0.86rem", lineHeight: 1.6, color: "#dfe6f0" }}>
                      {row.credito}
                    </td>
                  </tr>
                ))}
                <tr>
                  <th className="p-5" />
                  {PROGRAMAS_DESTACADOS.map((programa) => (
                    <td key={programa.slug} className="p-5">
                      <Link
                        href={`/programas/${programa.slug}`}
                        className="inline-flex items-center gap-2 font-bold transition-all hover:gap-3"
                        style={{ fontFamily: FONT, fontSize: "0.8rem", color: "#f5b700" }}
                      >
                        VER PROGRAMA <ArrowRight size={14} />
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span style={{ fontFamily: FONT, fontSize: "0.72rem", fontWeight: 700, color: "#b58900", letterSpacing: "0.2em" }}>
              ASÍ TE ACOMPAÑAMOS
            </span>
            <h2 className="mt-2" style={{ fontFamily: FONT, fontWeight: 700, fontSize: "clamp(1.9rem, 3.4vw, 2.7rem)", color: "#3d3d3c", lineHeight: 1.05 }}>
              NO SOLO CONSTRUIMOS: GESTIONAMOS TU POSTULACIÓN
            </h2>
            <p className="mt-4" style={{ fontFamily: FONT, fontSize: "1rem", lineHeight: 1.8, color: "#5c5c5a" }}>
              El trámite es donde más familias se quedan atrás. Por eso revisamos tu caso y armamos el expediente contigo, de principio a fin.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-0" style={{ border: "1px solid #e4e7ec", borderRadius: "14px", overflow: "hidden", background: "#ffffff" }}>
            {PASOS.map((paso, index) => {
              const Icon = paso.icon;
              return (
                <div
                  key={paso.title}
                  className="relative p-7"
                  style={{
                    borderRight: index < PASOS.length - 1 ? "1px solid #e4e7ec" : "none",
                    borderBottom: index < PASOS.length - 1 ? "1px solid #e4e7ec" : "none",
                  }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className="grid place-items-center"
                      style={{ width: 44, height: 44, borderRadius: "10px", background: "rgba(245,183,0,0.14)", border: "1px solid rgba(245,183,0,0.35)" }}
                    >
                      <Icon size={20} style={{ color: "#173B66" }} />
                    </span>
                    <span style={{ fontFamily: FONT, fontWeight: 800, fontSize: "1.8rem", lineHeight: 1, color: "#eef0f3" }}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-4" style={{ fontFamily: FONT, fontWeight: 700, fontSize: "1.05rem", color: "#3d3d3c" }}>
                    {paso.title}
                  </h3>
                  <p className="mt-2" style={{ fontFamily: FONT, fontSize: "0.88rem", lineHeight: 1.65, color: "#6b6b69" }}>
                    {paso.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 p-5" style={{ borderRadius: "10px", background: "#f8f8f8", borderLeft: "4px solid #f5b700" }}>
            <Check size={18} style={{ color: "#f5b700", flexShrink: 0 }} />
            <p style={{ fontFamily: FONT, fontSize: "0.9rem", lineHeight: 1.65, color: "#4a4a49" }}>
              <b>No necesitas memorizar los requisitos.</b> Cuéntanos tu caso y revisamos contigo los topes, el ahorro y los documentos vigentes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: "#f8f8f8" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span style={{ fontFamily: FONT, fontSize: "0.72rem", fontWeight: 700, color: "#b58900", letterSpacing: "0.2em" }}>
            EMPIEZA HOY
          </span>
          <h2 className="mt-2" style={{ fontFamily: FONT, fontWeight: 700, fontSize: "clamp(1.9rem, 3.6vw, 2.7rem)", color: "#3d3d3c", lineHeight: 1.05 }}>
            ¿NO SABES A QUÉ PROGRAMA PUEDES POSTULAR?
          </h2>
          <p className="mt-4" style={{ fontFamily: FONT, fontSize: "1rem", lineHeight: 1.75, color: "#5c5c5a" }}>
            En una conversación revisamos tu situación y te decimos con claridad qué opciones tienes. Sin compromiso y sin letra chica.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-3.5 font-bold transition-all hover:opacity-90"
              style={{ fontFamily: FONT, fontSize: "0.92rem", letterSpacing: "0.08em", background: "#173B66", color: "#ffffff", borderRadius: "6px" }}
            >
              SOLICITA INFORMACIÓN <ArrowRight size={16} style={{ color: "#f5b700" }} />
            </Link>
            <a
              href="https://wa.me/51993611523"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 font-bold transition-all hover:bg-black/5"
              style={{ fontFamily: FONT, fontSize: "0.92rem", letterSpacing: "0.08em", color: "#173B66", borderRadius: "6px", border: "1px solid #173B66" }}
            >
              <WhatsAppIcon size={16} /> WHATSAPP
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
