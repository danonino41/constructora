"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, ShieldCheck } from "lucide-react";

/** Desplaza a un id del documento; si no existe en la página actual, navega a la ruta equivalente. */
function useAnchorNavigation() {
  const router = useRouter();

  return useCallback(
    (id: string, fallbackPath: string) => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      router.push(fallbackPath);
    },
    [router]
  );
}

/**
 * Franja bajo el slider principal (ex-Hero).
 * El copy "Accede a tu casa propia…" y la imagen de obra se retiraron para dar
 * protagonismo al slider de programas. Se conservan las stats y el sello de respaldo.
 * (Código del copy anterior conservado en el historial de git para restaurarlo.)
 */
export default function HeroInicio() {
  const goTo = useAnchorNavigation();

  return (
    <div className="relative overflow-hidden border-t" style={{ background: "linear-gradient(180deg, #fbfaf7 0%, #ffffff 100%)", borderColor: "#eceae4" }}>
      <div className="relative max-w-7xl mx-auto px-6 py-10 lg:py-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Mensaje breve que reemplaza al copy del hero */}
          <div className="max-w-2xl">
            <h2
              style={{
                fontFamily: '"Myriad Pro", "Segoe UI", sans-serif',
                fontWeight: 700,
                fontSize: "clamp(1.35rem, 2.4vw, 2rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                color: "#3d3d3c",
              }}
            >
              Accede a tu casa propia con{" "}
              <span style={{ color: "#173B66" }}>asesoría experta</span> y{" "}
              <span style={{ color: "#b58900" }}>respaldo institucional</span>
            </h2>
            <p
              className="mt-3"
              style={{
                fontFamily: '"Myriad Pro", "Segoe UI", sans-serif',
                fontWeight: 400,
                fontSize: "0.98rem",
                lineHeight: 1.6,
                color: "#6b6b69",
              }}
            >
              Te acompañamos desde la evaluación de tu perfil hasta la entrega de tu vivienda,
              gestionando los programas oficiales del Estado.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={() => goTo("contacto", "/contacto")}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 font-bold transition-all duration-300 hover:-translate-y-0.5"
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
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 font-bold transition-all duration-300 hover:-translate-y-0.5"
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
          </div>

          {/* Stats + sello de respaldo */}
          <div className="flex flex-col gap-6 lg:items-end">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              {[
                { value: "+3,367", label: "viviendas entregadas" },
                { value: "11", label: "departamentos atendidos" },
                { value: "+10 años", label: "de experiencia" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span
                    style={{
                      fontFamily: '"Myriad Pro", "Segoe UI", sans-serif',
                      fontWeight: 700,
                      fontSize: "1.9rem",
                      lineHeight: 1,
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
                      marginTop: "0.35rem",
                    }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="flex items-center gap-3 px-5 py-3.5 bg-white"
              style={{ borderRadius: "12px", border: "1px solid #eceae4", boxShadow: "0 14px 34px rgba(23,32,46,0.10)" }}
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
