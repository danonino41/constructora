import { useCallback } from "react";
import { useNavigate } from "react-router";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import obraEnProceso from "@/imports/casa base 1, en fachas grises (osea solo ladrillo y cemento).jpeg";

/** Desplaza a un id del documento; si no existe en la página actual, navega a la ruta equivalente. */
function useAnchorNavigation() {
  const navigate = useNavigate();

  return useCallback(
    (id: string, fallbackPath: string) => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      navigate(fallbackPath);
    },
    [navigate]
  );
}

export default function HeroInicio() {
  const goTo = useAnchorNavigation();

  return (
    <div className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #ffffff 0%, #fbfaf7 62%, #ffffff 100%)" }}>
      {/* Acentos de marca */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 -right-24 h-[380px] w-[380px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(245,183,0,0.16) 0%, rgba(245,183,0,0) 70%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-40 -left-32 h-[320px] w-[320px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(23,59,102,0.10) 0%, rgba(23,59,102,0) 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-14 lg:pt-36 lg:pb-20">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          {/* Copy: mensaje clave primero */}
          <div>
            <span
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[0.68rem] font-bold tracking-[0.18em] uppercase"
              style={{ background: "rgba(245,183,0,0.16)", color: "#173B66", borderRadius: "999px" }}
            >
              <Sparkles size={13} style={{ color: "#f5b700" }} />
              Consorcio Constructor · Lima, Ica y Lambayeque
            </span>

            <h1
              className="mt-6"
              style={{
                fontFamily: '"Myriad Pro", "Segoe UI", sans-serif',
                fontWeight: 700,
                fontSize: "clamp(2.1rem, 4.6vw, 3.9rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.015em",
                color: "#3d3d3c",
              }}
            >
              Accede a tu casa propia con{" "}
              <span style={{ color: "#173B66" }}>asesoría experta</span> y{" "}
              <span style={{ color: "#b58900" }}>respaldo institucional</span>
            </h1>

            <p
              className="mt-6 max-w-xl"
              style={{
                fontFamily: '"Myriad Pro", "Segoe UI", sans-serif',
                fontWeight: 400,
                fontSize: "clamp(1rem, 1.15vw, 1.12rem)",
                lineHeight: 1.65,
                color: "#5f5f5e",
              }}
            >
              Te acompañamos desde la evaluación de tu perfil hasta la entrega de tu vivienda.
              Gestionamos los programas oficiales del Estado para que aproveches tu bono o crédito
              sin perder tiempo ni cometiendo errores.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={() => goTo("contacto", "/contacto")}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 font-bold transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "#f5b700",
                  color: "#0d0f14",
                  borderRadius: "4px",
                  letterSpacing: "0.08em",
                  boxShadow: "0 10px 26px rgba(245,183,0,0.35)",
                }}
              >
                Solicita información
                <ArrowRight size={18} />
              </button>

              <button
                type="button"
                onClick={() => goTo("programas", "/programas")}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 font-bold transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  color: "#173B66",
                  background: "#ffffff",
                  borderRadius: "4px",
                  border: "1.5px solid #173B66",
                  letterSpacing: "0.08em",
                }}
              >
                Conoce los programas
              </button>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3">
              {[
                { value: "+3,367", label: "viviendas entregadas" },
                { value: "11", label: "departamentos atendidos" },
                { value: "+10 años", label: "de experiencia" },
              ].map((s) => (
                <div key={s.label} className="flex items-baseline gap-2">
                  <span
                    style={{
                      fontFamily: '"Myriad Pro", "Segoe UI", sans-serif',
                      fontWeight: 700,
                      fontSize: "1.45rem",
                      color: "#173B66",
                    }}
                  >
                    {s.value}
                  </span>
                  <span
                    style={{
                      fontFamily: '"Myriad Pro", "Segoe UI", sans-serif',
                      fontSize: "0.82rem",
                      color: "#7a7a78",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual protagonista: obra en proceso */}
          <div className="relative">
            <div
              className="relative overflow-hidden"
              style={{
                borderRadius: "18px",
                boxShadow: "0 28px 60px rgba(23,32,46,0.22)",
                aspectRatio: "4 / 3",
              }}
            >
              <img
                src={obraEnProceso}
                alt="Vivienda en proceso de construcción de brick y cemento"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="w-full h-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, rgba(13,15,20,0) 45%, rgba(13,15,20,0.72) 100%)" }}
              />
              <div className="absolute left-5 right-5 bottom-5">
                <span
                  className="inline-flex items-center gap-2 px-3 py-1.5 text-[0.65rem] font-bold tracking-[0.16em] text-white uppercase"
                  style={{ background: "rgba(23,59,102,0.88)", borderRadius: "3px" }}
                >
                  Obra en proceso
                </span>
                <p
                  className="mt-2.5 text-white"
                  style={{
                    fontFamily: '"Myriad Pro", "Segoe UI", sans-serif',
                    fontWeight: 700,
                    fontSize: "1.15rem",
                    lineHeight: 1.25,
                  }}
                >
                  Construimos con ingeniería y materiales certificados
                </p>
              </div>
            </div>

            {/* Badge de respaldo institucional */}
            <div
              className="absolute -bottom-6 -left-4 lg:-left-8 flex items-center gap-3 px-5 py-4 bg-white"
              style={{ borderRadius: "12px", border: "1px solid #eceae4", boxShadow: "0 14px 34px rgba(23,32,46,0.14)" }}
            >
              <span
                className="grid place-items-center shrink-0"
                style={{ width: 44, height: 44, background: "rgba(245,183,0,0.18)", borderRadius: "10px" }}
              >
                <ShieldCheck size={24} style={{ color: "#b58900" }} />
              </span>
              <span>
                <span
                  className="block"
                  style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "0.95rem", color: "#3d3d3c" }}
                >
                  Respaldo institucional
                </span>
                <span
                  className="block"
                  style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.8rem", color: "#7a7a78" }}
                >
                  MVCS · Mivivienda · GORE
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
