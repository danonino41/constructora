import { Link } from "react-router";
import { ArrowRight, House, Landmark, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Card = {
  id: string;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  desc: string;
  benefit: string;
};

const CARDS: Card[] = [
  {
    id: "techo-propio",
    icon: House,
    eyebrow: "Subsidio del Estado",
    title: "Techo Propio",
    desc: "Bono Familiar Habitacional para construir o comprar tu vivienda.",
    benefit: "Bono que no se devuelve",
  },
  {
    id: "reforzamiento",
    icon: ShieldCheck,
    eyebrow: "Seguridad ante sismos",
    title: "Bono de Reforzamiento Estructural",
    desc: "Subsidio para reforzar viviendas vulnerables a riesgos sísmicos.",
    benefit: "Subsidio no reembolsable",
  },
  {
    id: "credito-mivivienda",
    icon: Landmark,
    eyebrow: "Financiamiento",
    title: "Nuevo Crédito MiVivienda",
    desc: "Crédito para comprar, construir o mejorar tu vivienda.",
    benefit: "Bono del Buen Pagador",
  },
];

export default function ProgramasAccesoRapido() {
  return (
    <section id="programas" className="scroll-mt-24 md:scroll-mt-32 py-16 lg:py-20" style={{ background: "#f8f8f8" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-10">
          <span
            style={{
              fontFamily: '"Myriad Pro", "Segoe UI", sans-serif',
              fontSize: "0.72rem",
              fontWeight: 700,
              color: "#b58900",
              letterSpacing: "0.2em",
            }}
          >
            ACCESO DIRECTO
          </span>
          <h2
            className="mt-2"
            style={{
              fontFamily: '"Myriad Pro", "Segoe UI", sans-serif',
              fontWeight: 700,
              fontSize: "clamp(1.5rem, 2.6vw, 2.1rem)",
              lineHeight: 1.05,
              color: "#3d3d3c",
            }}
          >
            Tres programas, un solo asesor
          </h2>
          <p
            className="mt-3"
            style={{
              fontFamily: '"Myriad Pro", "Segoe UI", sans-serif',
              fontSize: "0.95rem",
              lineHeight: 1.65,
              color: "#6b6b69",
            }}
          >
            Te orientamos para que elijas el programa que mejor se ajusta a tu situación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
          {CARDS.map((c) => {
            const Icon = c.icon;
            return (
              <article
                key={c.id}
                className="group flex h-full flex-col bg-white transition-all duration-300 hover:-translate-y-1"
                style={{
                  borderRadius: "14px",
                  border: "1px solid #e9e7e1",
                  boxShadow: "0 2px 10px rgba(23,32,46,0.04)",
                  padding: "2rem",
                }}
              >
                {/* Ícono protagonista 56px (48px en mobile) */}
                <span
                  className="grid place-items-center shrink-0 transition-transform duration-300 group-hover:scale-105"
                  style={{
                    width: 96,
                    height: 96,
                    borderRadius: "18px",
                    background: "rgba(245,183,0,0.14)",
                    border: "1px solid rgba(245,183,0,0.35)",
                    marginBottom: "1.5rem",
                  }}
                >
                  <Icon className="h-12 w-12 sm:h-14 sm:w-14" style={{ color: "#173B66" }} aria-hidden="true" />
                </span>

                <span
                  className="block"
                  style={{
                    fontFamily: '"Myriad Pro", "Segoe UI", sans-serif',
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    color: "#b58900",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                  }}
                >
                  {c.eyebrow}
                </span>

                <h3
                  className="mt-2"
                  style={{
                    fontFamily: '"Myriad Pro", "Segoe UI", sans-serif',
                    fontWeight: 700,
                    fontSize: "1.3rem",
                    lineHeight: 1.15,
                    color: "#3d3d3c",
                    minHeight: "3rem",
                  }}
                >
                  {c.title}
                </h3>

                <p
                  className="mt-3"
                  style={{
                    fontFamily: '"Myriad Pro", "Segoe UI", sans-serif',
                    fontSize: "0.93rem",
                    lineHeight: 1.6,
                    color: "#6b6b69",
                  }}
                >
                  {c.desc}
                </p>

                <p
                  className="mt-4 inline-flex items-center self-start px-3 py-1.5 text-[0.72rem] font-bold tracking-[0.06em]"
                  style={{ background: "#f8f8f8", color: "#173B66", borderRadius: "999px", border: "1px solid #eceae4" }}
                >
                  {c.benefit}
                </p>

                <Link
                  to="/programas"
                  className="mt-auto pt-7 inline-flex items-center gap-2 font-bold transition-all duration-300 group-hover:gap-3.5"
                  style={{
                    fontFamily: '"Myriad Pro", "Segoe UI", sans-serif',
                    fontSize: "0.85rem",
                    letterSpacing: "0.08em",
                    color: "#173B66",
                  }}
                >
                  Ver programa
                  <ArrowRight size={17} style={{ color: "#f5b700" }} />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
