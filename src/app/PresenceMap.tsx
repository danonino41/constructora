import { useMemo, useState } from "react";
import { MapPin, CheckCircle, Building2, Users, Home } from "lucide-react";
import { PERU_MAP } from "@/lib/peru-map";
import clientesImg from "@/imports/Fotos_de_clientes.jpg";

type ZoneValue = { value?: number; type?: "bono" | "oficina" };

const ZONES: Record<string, ZoneValue> = {
  arequipa: { value: 1119, type: "bono" },
  "la-libertad": { value: 746, type: "bono" },
  ica: { value: 737, type: "bono" },
  lima: { type: "oficina" },
  lambayeque: { type: "oficina" },
};

const OFFICES = ["lima", "ica", "lambayeque"];

const TOTAL_VIVIENDAS = 3367;

const REGION_LEGEND = [
  { name: "Arequipa", value: "1,119 bonos", color: "#f5b700", desc: "1er lugar nacional" },
  { name: "La Libertad", value: "746 bonos", color: "#e8ae08", desc: "2do lugar nacional" },
  { name: "Ica", value: "737 bonos", color: "#d9a506", desc: "3er lugar nacional" },
];

const ACHIEVEMENTS = [
  "Más de 3,367 viviendas entregadas a nivel nacional",
  "Bonos Familiares Habitacionales gestionados para cientos de familias",
  "Oficinas de atención y showroom en Lima, Ica y Lambayeque",
  "Entrega de llaves ceremoniales del programa Techo Propio",
  "Construcción llave en mano con certificación y garantía",
];

function PresenceMap() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<string>("arequipa");

  const tooltip = useMemo(() => {
    if (!hovered) return null;
    const spot = PERU_MAP.hotspots[hovered];
    if (!spot) return null;
    const zone = ZONES[hovered];
    const info = zone?.type === "bono"
      ? { title: zone.value?.toLocaleString("es-PE"), label: "Bonos entregados" }
      : zone?.type === "oficina"
        ? { title: "Punto de atención", label: "Oficina consorcio" }
        : { title: "Zona atendida", label: "Proyectos alcanzados" };
    const left = Math.min(88, Math.max(12, (spot.x / PERU_MAP.width) * 100));
    const top = Math.min(92, Math.max(10, (spot.y / PERU_MAP.height) * 100));
    return {
      name: PERU_MAP.paths.find((p) => p.key === hovered)?.name,
      left,
      top,
      ...info,
    };
  }, [hovered]);

  const fillFor = (key: string) => {
    const zone = ZONES[key];
    if (key === hovered || key === selected) return "#f5b700";
    if (zone?.type === "bono") return zone.value === 1119 ? "#f5b700" : zone.value === 746 ? "#e8ae08" : "#d9a506";
    if (zone?.type === "oficina") return "#d7d5d0";
    return "#eceae4";
  };

  const strokeFor = (key: string) =>
    key === hovered || key === selected ? "#ffffff" : "#ffffff";

  return (
    <section id="zonas-atendidas" className="py-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-14 items-start">
          {/* LEFT: MAPA INTERACTIVO */}
          <div>
            <div
              className="relative overflow-hidden"
              style={{ background: "#ffffff", border: "1px solid #e5e5e5", borderRadius: "16px", boxShadow: "0 18px 48px rgba(0,0,0,0.08)" }}
            >
              <div className="flex items-center justify-between px-6 py-5" style={{ borderBottom: "1px solid rgba(0,0,0,0.1)", background: "rgba(245,183,0,0.06)" }}>
                <div className="flex items-center gap-2.5">
                  <MapPin size={18} style={{ color: "#f5b700" }} />
                  <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "1.15rem", letterSpacing: "0.12em", color: "#1a1a1a" }}>
                    ZONAS ATENDIDAS
                  </span>
                </div>
                <div className="text-right">
                  <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "1.6rem", lineHeight: 1, color: "#1a1a1a" }}>
                    {TOTAL_VIVIENDAS.toLocaleString("es-PE")}
                  </div>
                  <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.7rem", letterSpacing: "0.1em", color: "#5f666e", fontWeight: 400 }}>
                    VIVIENDAS EDIFICADAS
                  </div>
                </div>
              </div>

              <div className="px-4 py-5 sm:px-6">
                <div className="relative w-full max-w-[420px] mx-auto">
                  <svg
                    viewBox={`0 0 ${PERU_MAP.width} ${PERU_MAP.height}`}
                    className="w-full h-auto select-none"
                    style={{ display: "block" }}
                  >
                    {PERU_MAP.paths.map((p) => (
                      <path
                        key={p.key}
                        d={p.d}
                        fill={fillFor(p.key)}
                        stroke={strokeFor(p.key)}
                        strokeWidth={0.8}
                        style={{ cursor: "pointer", transition: "fill 0.15s ease, opacity 0.15s ease", opacity: 1 }}
                        onMouseEnter={() => setHovered(p.key)}
                        onMouseLeave={() => setHovered(null)}
                        onClick={() => setSelected(p.key)}
                      />
                    ))}

                    {OFFICES.map((k) => {
                      const spot = PERU_MAP.hotspots[k];
                      if (!spot) return null;
                      const isActive = hovered === k || selected === k;
                      return (
                        <g
                          key={k}
                          style={{ cursor: "pointer" }}
                          onMouseEnter={() => setHovered(k)}
                          onMouseLeave={() => setHovered(null)}
                          onClick={() => setSelected(k)}
                        >
                          <circle cx={spot.x} cy={spot.y} r={isActive ? 13 : 9} fill="rgba(245,183,0,0.22)" />
                          <circle cx={spot.x} cy={spot.y} r={4} fill="#f5b700" stroke="#ffffff" strokeWidth={1.2} />
                        </g>
                      );
                    })}
                  </svg>

                  {tooltip && (
                    <div
                      className="pointer-events-none absolute z-10 -translate-x-1/2"
                      style={{
                        left: `${tooltip.left}%`,
                        top: `${tooltip.top}%`,
                        transform: "translate(-50%, -130%)",
                      }}
                    >
                      <div
                        className="px-3.5 py-2.5 rounded-lg shadow-xl"
                        style={{ background: "#f5b700", borderRadius: "8px", minWidth: 150, boxShadow: "0 8px 30px rgba(245,183,0,0.28)" }}
                      >
                        <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "0.95rem", letterSpacing: "0.05em", color: "#0d0f14" }}>
                          {tooltip.name}
                        </div>
                        <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.72rem", fontWeight: 400, color: "#0d0f14", opacity: 0.85 }}>
                          {tooltip.label}: <span style={{ fontWeight: 700 }}>{tooltip.title}</span>
                        </div>
                      </div>
                      <div style={{ width: 0, height: 0, margin: "0 auto", borderLeft: "7px solid transparent", borderRight: "7px solid transparent", borderTop: "7px solid #f5b700" }} />
                    </div>
                  )}
                </div>
              </div>

              <div className="px-6 pb-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {REGION_LEGEND.map((r) => (
                    <div
                      key={r.name}
                      className="px-4 py-3 rounded-lg"
                      style={{ background: "#f8f8f8", border: "1px solid rgba(0,0,0,0.07)" }}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span style={{ width: 10, height: 10, borderRadius: 3, background: r.color, display: "inline-block", flexShrink: 0 }} />
                        <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.04em", color: "#1a1a1a" }}>{r.name}</span>
                      </div>
                      <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.78rem", color: "#2e2e2d", fontWeight: 700 }}>{r.value}</div>
                      <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.68rem", color: "#5f666e", fontWeight: 400 }}>{r.desc}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-1.5 pt-3" style={{ borderTop: "1px dashed rgba(0,0,0,0.1)" }}>
                  <span className="inline-flex items-center gap-1.5" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.72rem", color: "#2e2e2d", fontWeight: 400 }}>
                    <span style={{ width: 8, height: 8, background: "#eceae4", border: "1px solid #d0ccc4", display: "inline-block" }} /> Zona atendida
                  </span>
                  <span className="inline-flex items-center gap-1.5" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.72rem", color: "#2e2e2d", fontWeight: 400 }}>
                    <span style={{ width: 8, height: 8, background: "#d7d5d0", display: "inline-block" }} /> Punto de atención
                  </span>
                  <span className="inline-flex items-center gap-1.5" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.72rem", color: "#2e2e2d", fontWeight: 400 }}>
                    <span style={{ width: 8, height: 8, background: "#f5b700", display: "inline-block" }} /> Top regiones
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: DESCRIPCIÓN + COLLAGE */}
          <div>
            <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.75rem", fontWeight: 700, color: "#f5b700", letterSpacing: "0.2em" }}>
              LO QUE HEMOS LOGRADO
            </span>
            <h2 style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "clamp(2.2rem, 4vw, 3.2rem)", color: "#1a1a1a", lineHeight: 0.95, marginTop: "0.5rem" }}>
              MÁS DE 3,367 VIVIENDAS
              <br />
              <span style={{ color: "#f5b700", lineHeight: 1.0 }}>CONSTRUIDAS EN TODO EL PERÚ.</span>
            </h2>
            <p className="mt-6" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, lineHeight: 1.8, fontSize: "0.95rem", color: "#2e2e2d" }}>
              Desde nuestros inicios hemos recorrido el territorio nacional entregando viviendas del programa Techo Propio. Nuestro mapa de zonas atendidas refleja el trabajo realizado a lo largo de los años: más de <strong style={{ color: "#f5b700", fontWeight: 700 }}>3,367 viviendas edificadas</strong>, con la mayor concentración de bonos familiares habitacionales en Arequipa (1,119), La Libertad (746) e Ica (737).
            </p>
            <p className="mt-4" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, lineHeight: 1.8, fontSize: "0.95rem", color: "#2e2e2d" }}>
              Contamos con oficinas de atención en Lima, Ica y Lambayeque, desde donde coordinamos la habilitación, la construcción y la entrega llave en mano de cada proyecto, además del acompañamiento en la gestión de los bonos del Estado.
            </p>

            <div className="mt-7 flex flex-col gap-3">
              {ACHIEVEMENTS.map((a) => (
                <div key={a} className="flex items-center gap-3">
                  <CheckCircle size={16} style={{ color: "#f5b700", flexShrink: 0 }} />
                  <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.9rem", color: "#2e2e2d", fontWeight: 400 }}>{a}</span>
                </div>
              ))}
            </div>

            <div className="relative mt-8 rounded-xl overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.1)", boxShadow: "0 12px 28px rgba(0,0,0,0.08)" }}>
              <img src={clientesImg} alt="Familias beneficiarias del programa Techo Propio" className="w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 p-4" style={{ background: "linear-gradient(to top, rgba(13,15,20,0.95), rgba(13,15,20,0.35), transparent)" }}>
                <div className="flex items-center gap-2">
                  <Users size={16} style={{ color: "#f5b700" }} />
                  <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.8rem", fontWeight: 400, color: "#ffffff" }}>
                    Familias beneficiarias recibiendo sus llaves en la entrega oficial.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="p-4 rounded-lg flex items-center gap-3" style={{ background: "#f8f8f8", border: "1px solid rgba(0,0,0,0.07)" }}>
                <div className="w-10 h-10 flex items-center justify-center shrink-0 rounded-lg" style={{ background: "rgba(245,183,0,0.14)" }}>
                  <Home size={18} style={{ color: "#f5b700" }} />
                </div>
                <div>
                  <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "1.3rem", lineHeight: 1, color: "#1a1a1a" }}>3,367+</div>
                  <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.72rem", color: "#5f666e", fontWeight: 400 }}>Viviendas entregadas</div>
                </div>
              </div>
              <div className="p-4 rounded-lg flex items-center gap-3" style={{ background: "#f8f8f8", border: "1px solid rgba(0,0,0,0.07)" }}>
                <div className="w-10 h-10 flex items-center justify-center shrink-0 rounded-lg" style={{ background: "rgba(245,183,0,0.14)" }}>
                  <Building2 size={18} style={{ color: "#f5b700" }} />
                </div>
                <div>
                  <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "1.3rem", lineHeight: 1, color: "#1a1a1a" }}>3</div>
                  <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.72rem", color: "#5f666e", fontWeight: 400 }}>Oficinas de atención</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PresenceMap;