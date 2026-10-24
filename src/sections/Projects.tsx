import Link from "next/link";
import { ArrowRight, Building2, Check, Home, Layers, Maximize2, Ruler } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { PROYECTOS_MODELOS, PROYECTOS_TOTAL_DISENOS } from "@/data/proyectos";

const FONT = '"Myriad Pro", "Segoe UI", sans-serif';

const COMPARISON = [
  {
    label: "Enfoque",
    modelo1: "Distribución compacta y eficiente",
    modelo2: "Ambientes amplios y mejor definidos",
  },
  {
    label: "Lote mínimo",
    modelo1: "35 m²",
    modelo2: "35 m²",
  },
  {
    label: "Área construida",
    modelo1: "35.50 – 50.15 m²",
    modelo2: "48.50 – 78.50 m²",
  },
  {
    label: "Dormitorios",
    modelo1: "1 a 2 dormitorios",
    modelo2: "2 a 3 dormitorios",
  },
  {
    label: "Ideal para",
    modelo1: "Parejas y familias de 2 a 3 integrantes",
    modelo2: "Familias de hasta 5 integrantes",
  },
];

export default function Projects() {
  const [modelo1, modelo2] = PROYECTOS_MODELOS;

  return (
    <>
      <section className="relative overflow-hidden" style={{ background: "#173B66" }}>
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 82% 18%, rgba(245,183,0,0.18), transparent 45%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-20 md:pt-20 md:pb-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <span style={{ fontFamily: FONT, fontSize: "0.75rem", fontWeight: 700, color: "#f5b700", letterSpacing: "0.2em" }}>
              PROYECTOS
            </span>
            <h1 className="mt-3" style={{ fontFamily: FONT, fontWeight: 700, fontSize: "clamp(2.2rem, 4.6vw, 3.6rem)", color: "#ffffff", lineHeight: 1.02, letterSpacing: "0.01em", maxWidth: "42rem" }}>
              Dos modelos de vivienda. <span style={{ color: "#f5b700" }}>Una misma forma de construir.</span>
            </h1>
            <p className="mt-6 max-w-2xl" style={{ fontFamily: FONT, fontSize: "1.05rem", lineHeight: 1.8, color: "#dfe6f0" }}>
              Elige entre viviendas completas y compactas o viviendas amplias para familias que crecen. Todos nuestros diseños se adaptan a tu terreno y a tu forma de vivir.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#modelos"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 font-bold transition-all hover:opacity-90"
                style={{ fontFamily: FONT, fontSize: "0.9rem", letterSpacing: "0.08em", background: "#f5b700", color: "#0d0f14", borderRadius: "6px" }}
              >
                VER LOS MODELOS <ArrowRight size={16} />
              </a>
              <a
                href="https://wa.me/51993611523?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20los%20modelos%20de%20vivienda."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 font-bold transition-all hover:bg-white/10"
                style={{ fontFamily: FONT, fontSize: "0.9rem", letterSpacing: "0.08em", color: "#ffffff", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.55)" }}
              >
                <WhatsAppIcon size={16} /> CONSULTAR MI CASO
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
              {[
                { value: "2", label: "modelos" },
                { value: `${PROYECTOS_TOTAL_DISENOS}`, label: "diseños" },
                { value: "35 m²", label: "lote mínimo" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-2">
                  <b style={{ fontFamily: FONT, fontWeight: 800, fontSize: "1.9rem", color: "#f5b700", lineHeight: 1 }}>{stat.value}</b>
                  <span style={{ fontFamily: FONT, fontSize: "0.86rem", color: "#c9d5e4", letterSpacing: "0.04em" }}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden sm:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden" style={{ borderRadius: "12px", aspectRatio: "0.78", boxShadow: "0 18px 40px rgba(0,0,0,0.28)" }}>
                <img src={modelo1.ejemplos[0].img} alt={modelo1.ejemplos[0].name} className="w-full h-full object-cover" />
              </div>
              <div className="overflow-hidden mt-10" style={{ borderRadius: "12px", aspectRatio: "0.78", boxShadow: "0 18px 40px rgba(0,0,0,0.28)" }}>
                <img src={modelo2.ejemplos[modelo2.ejemplos.length - 1].img} alt={modelo2.ejemplos[modelo2.ejemplos.length - 1].name} className="w-full h-full object-cover" />
              </div>
            </div>
            <span
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 whitespace-nowrap"
              style={{ background: "#f5b700", color: "#0d0f14", fontFamily: FONT, fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", borderRadius: "999px" }}
            >
              MODELO 1 · MODELO 2
            </span>
          </div>
        </div>
      </section>

      <section id="modelos" className="py-20 md:py-24 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span style={{ fontFamily: FONT, fontSize: "0.75rem", fontWeight: 700, color: "#f5b700", letterSpacing: "0.2em" }}>
              ELIGE TU MODELO
            </span>
            <h2 className="mt-2" style={{ fontFamily: FONT, fontWeight: 700, fontSize: "clamp(1.9rem, 3.4vw, 2.7rem)", color: "#4a4a49", lineHeight: 1.05 }}>
              ¿QUÉ TIPO DE VIVIENDA BUSCAS?
            </h2>
            <p className="mt-4" style={{ fontFamily: FONT, fontSize: "1rem", lineHeight: 1.8, color: "#5c5c5a" }}>
              Cada modelo agrupa varios diseños según el tamaño de tu lote. Entra al modelo que más se acerque a tu familia y revisa las plantas disponibles.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {PROYECTOS_MODELOS.map((modelo, index) => {
              const Icon = modelo.icon;
              const portada = modelo.ejemplos[0];

              return (
                <Link
                  key={modelo.slug}
                  href={`/proyectos/${modelo.slug}`}
                  className="group relative overflow-hidden flex flex-col"
                  style={{ borderRadius: "14px", border: "1px solid #e5e5e5", background: "#ffffff" }}
                >
                  <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                    <img
                      src={portada.img}
                      alt={`${modelo.label}: ${modelo.title}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(0deg, rgba(13,15,20,0.82) 0%, rgba(13,15,20,0.08) 62%)" }}
                    />
                    <div className="absolute left-5 bottom-5 right-5 flex items-end justify-between gap-4">
                      <div>
                        <span
                          className="inline-flex items-center gap-2 px-3 py-1 mb-2"
                          style={{ background: "rgba(255,255,255,0.14)", backdropFilter: "blur(6px)", color: "#ffffff", fontFamily: FONT, fontSize: "0.66rem", fontWeight: 700, letterSpacing: "0.14em", borderRadius: "999px" }}
                        >
                          <Icon size={13} style={{ color: "#f5b700" }} /> {modelo.label.toUpperCase()}
                        </span>
                        <h3 style={{ fontFamily: FONT, fontWeight: 700, fontSize: "1.7rem", color: "#ffffff", lineHeight: 1.05 }}>
                          {modelo.title}
                        </h3>
                      </div>
                      <span
                        className="grid place-items-center shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5"
                        style={{ width: 42, height: 42, borderRadius: "50%", background: "#f5b700", color: "#0d0f14" }}
                      >
                        <ArrowRight size={18} />
                      </span>
                    </div>
                  </div>

                  <div className="p-6 md:p-7 flex flex-col flex-1">
                    <p style={{ fontFamily: FONT, fontSize: "0.92rem", lineHeight: 1.7, color: "#5c5c5a" }}>
                      {modelo.desc}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                      <span className="inline-flex items-center gap-2" style={{ fontFamily: FONT, fontSize: "0.82rem", fontWeight: 600, color: "#4a4a49" }}>
                        <Layers size={15} style={{ color: index === 0 ? "#f5b700" : "#173B66" }} />
                        {modelo.ejemplos.length} diseños
                      </span>
                      <span className="inline-flex items-center gap-2" style={{ fontFamily: FONT, fontSize: "0.82rem", fontWeight: 600, color: "#4a4a49" }}>
                        <Ruler size={15} style={{ color: index === 0 ? "#f5b700" : "#173B66" }} />
                        Lotes de {Array.from(new Set(modelo.ejemplos.map((ejemplo) => ejemplo.lot))).join(" · ")}
                      </span>
                    </div>

                    <span
                      className="mt-6 inline-flex items-center gap-2 font-bold transition-all group-hover:gap-3"
                      style={{ fontFamily: FONT, fontSize: "0.85rem", letterSpacing: "0.06em", color: "#173B66" }}
                    >
                      VER DISEÑOS DEL {modelo.label.toUpperCase()} <ArrowRight size={16} style={{ color: "#f5b700" }} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24" style={{ background: "#f8f8f8" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span style={{ fontFamily: FONT, fontSize: "0.75rem", fontWeight: 700, color: "#f5b700", letterSpacing: "0.2em" }}>
              COMPARA LOS MODELOS
            </span>
            <h2 className="mt-2" style={{ fontFamily: FONT, fontWeight: 700, fontSize: "clamp(1.9rem, 3.4vw, 2.7rem)", color: "#4a4a49", lineHeight: 1.05 }}>
              ¿CUÁL SE AJUSTA MÁS A TU FAMILIA?
            </h2>
          </div>

          <div className="mt-9 overflow-x-auto" style={{ borderRadius: "12px", border: "1px solid #e4e7ec", background: "#ffffff" }}>
            <table className="w-full min-w-[42rem]" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th className="text-left p-5" style={{ fontFamily: FONT, fontSize: "0.72rem", fontWeight: 700, color: "#8a9199", letterSpacing: "0.14em", borderBottom: "1px solid #e4e7ec" }}>
                    CARACTERÍSTICA
                  </th>
                  <th className="text-left p-5" style={{ borderBottom: "1px solid #e4e7ec", background: "rgba(245,183,0,0.08)" }}>
                    <span className="inline-flex items-center gap-2" style={{ fontFamily: FONT, fontSize: "0.95rem", fontWeight: 700, color: "#4a4a49" }}>
                      <Home size={16} style={{ color: "#f5b700" }} /> Modelo 1 · Viviendas Completas
                    </span>
                  </th>
                  <th className="text-left p-5" style={{ borderBottom: "1px solid #e4e7ec", background: "rgba(23,59,102,0.06)" }}>
                    <span className="inline-flex items-center gap-2" style={{ fontFamily: FONT, fontSize: "0.95rem", fontWeight: 700, color: "#4a4a49" }}>
                      <Building2 size={16} style={{ color: "#173B66" }} /> Modelo 2 · Viviendas Amplias
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row) => (
                  <tr key={row.label}>
                    <th className="text-left align-top p-5" style={{ fontFamily: FONT, fontSize: "0.84rem", fontWeight: 700, color: "#4a4a49", borderBottom: "1px solid #eef0f3", width: "22%" }}>
                      {row.label}
                    </th>
                    <td className="align-top p-5" style={{ fontFamily: FONT, fontSize: "0.88rem", lineHeight: 1.6, color: "#5c5c5a", borderBottom: "1px solid #eef0f3", background: "rgba(245,183,0,0.04)" }}>
                      {row.modelo1}
                    </td>
                    <td className="align-top p-5" style={{ fontFamily: FONT, fontSize: "0.88rem", lineHeight: 1.6, color: "#5c5c5a", borderBottom: "1px solid #eef0f3", background: "rgba(23,59,102,0.03)" }}>
                      {row.modelo2}
                    </td>
                  </tr>
                ))}
                <tr>
                  <th className="p-5" />
                  <td className="p-5" style={{ background: "rgba(245,183,0,0.04)" }}>
                    <Link href={`/proyectos/${modelo1.slug}`} className="inline-flex items-center gap-2 font-bold transition-all hover:gap-3" style={{ fontFamily: FONT, fontSize: "0.84rem", color: "#173B66" }}>
                      VER MODELO 1 <ArrowRight size={15} style={{ color: "#f5b700" }} />
                    </Link>
                  </td>
                  <td className="p-5" style={{ background: "rgba(23,59,102,0.03)" }}>
                    <Link href={`/proyectos/${modelo2.slug}`} className="inline-flex items-center gap-2 font-bold transition-all hover:gap-3" style={{ fontFamily: FONT, fontSize: "0.84rem", color: "#173B66" }}>
                      VER MODELO 2 <ArrowRight size={15} style={{ color: "#173B66" }} />
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-5 flex items-start gap-2" style={{ fontFamily: FONT, fontSize: "0.84rem", lineHeight: 1.6, color: "#6b7480" }}>
            <Check size={16} style={{ color: "#f5b700", flexShrink: 0, marginTop: "2px" }} />
            Los diseños pueden adaptarse a tu terreno y a los requisitos de tu programa de vivienda. Un asesor revisa tu caso contigo.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24" style={{ background: "#173B66" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2" style={{ fontFamily: FONT, fontSize: "0.72rem", fontWeight: 700, color: "#f5b700", letterSpacing: "0.18em" }}>
            <Maximize2 size={14} /> ASESORÍA SIN COMPROMISO
          </span>
          <h2 className="mt-3 text-white" style={{ fontFamily: FONT, fontWeight: 700, fontSize: "clamp(1.9rem, 3.6vw, 2.7rem)", lineHeight: 1.05 }}>
            TÚ ELIGES EL MODELO. NOSOTROS NOS ENCARGAMOS DEL RESTO.
          </h2>
          <p className="mt-4" style={{ fontFamily: FONT, fontSize: "1rem", lineHeight: 1.75, color: "#dfe6f0" }}>
            Cuéntanos cuántas personas vivirán en tu casa y qué terreno tienes. Te ayudamos a elegir el diseño correcto y a revisar si califica para un bono o crédito.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-3.5 font-bold transition-all hover:opacity-90"
              style={{ fontFamily: FONT, fontSize: "0.92rem", letterSpacing: "0.08em", background: "#f5b700", color: "#0d0f14", borderRadius: "6px" }}
            >
              SOLICITA INFORMACIÓN <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/51993611523"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 font-bold transition-all hover:bg-white/10"
              style={{ fontFamily: FONT, fontSize: "0.92rem", letterSpacing: "0.08em", color: "#ffffff", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.6)" }}
            >
              <WhatsAppIcon size={16} /> WHATSAPP
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
