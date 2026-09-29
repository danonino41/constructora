import { useMemo, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, MapPin, CheckCircle, Building2, Home } from "lucide-react";
import { PERU_MAP } from "@/lib/peru-map";
import { CONTACT } from "@/data/content";

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
    const zone = hovered ? ZONES[hovered] : undefined;
    if (!hovered || !zone) return null;
    const spot = PERU_MAP.hotspots[hovered];
    if (!spot) return null;
    const info = zone.type === "bono"
      ? { label: "Bonos entregados", value: (zone.value ?? 0).toLocaleString("es-PE") }
      : { label: "Oficina de atención", value: undefined };
    const left = Math.min(88, Math.max(12, (spot.x / PERU_MAP.width) * 100));
    const top = Math.min(92, Math.max(10, (spot.y / PERU_MAP.height) * 100));
    return {
      name: PERU_MAP.paths.find((p) => p.key === hovered)?.name,
      left,
      top,
      ...info,
    };
  }, [hovered]);

  const detail = useMemo(() => {
    const name = PERU_MAP.paths.find((p) => p.key === selected)?.name ?? "";
    const zone = ZONES[selected];
    if (zone?.type === "bono") {
      return {
        name,
        kind: "bono" as const,
        value: (zone.value ?? 0).toLocaleString("es-PE"),
        rank: REGION_LEGEND.find((r) => r.name === name)?.desc,
      };
    }
    if (zone?.type === "oficina") {
      const sede = CONTACT.sedes.find((s) => s.city.toLowerCase() === selected);
      return { name, kind: "oficina" as const, sede };
    }
    return { name, kind: "sin" as const };
  }, [selected]);

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
    <section id="zonas-atendidas" className="py-16 md:py-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-10 xl:gap-12 xl:grid-cols-[1fr_1fr] xl:items-center">
          {/* LEFT: MAPA INTERACTIVO */}
          <div>
            <div
              className="relative overflow-hidden"
              style={{ background: "#ffffff", border: "1px solid #e5e5e5", borderRadius: "16px", boxShadow: "0 18px 48px rgba(0,0,0,0.08)" }}
            >
              <div className="flex items-center justify-between px-6 py-5" style={{ borderBottom: "1px solid rgba(0,0,0,0.1)", background: "rgba(245,183,0,0.06)" }}>
                <div className="flex items-center gap-2.5">
                  <MapPin size={18} style={{ color: "#f5b700" }} />
                  <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "1.15rem", letterSpacing: "0.12em", color: "#4a4a49" }}>
                    ZONAS ATENDIDAS
                  </span>
                </div>
                <div className="text-right">
                  <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "1.6rem", lineHeight: 1, color: "#4a4a49" }}>
                    {TOTAL_VIVIENDAS.toLocaleString("es-PE")}
                  </div>
                  <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.7rem", letterSpacing: "0.1em", color: "#4a4a49", fontWeight: 400 }}>
                    VIVIENDAS EDIFICADAS
                  </div>
                </div>
              </div>

              <div className="px-4 py-5 sm:px-6">
                <div className="relative w-full max-w-[300px] sm:max-w-[340px] xl:max-w-[380px] mx-auto">
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
                          {tooltip.label}
                          {tooltip.value ? <>: <span style={{ fontWeight: 700 }}>{tooltip.value}</span></> : null}
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
                        <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.04em", color: "#4a4a49" }}>{r.name}</span>
                      </div>
                      <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.78rem", color: "#4a4a49", fontWeight: 700 }}>{r.value}</div>
                      <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.68rem", color: "#4a4a49", fontWeight: 400 }}>{r.desc}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-1.5 pt-3" style={{ borderTop: "1px dashed rgba(0,0,0,0.1)" }}>
                  <span className="inline-flex items-center gap-1.5" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.72rem", color: "#4a4a49", fontWeight: 400 }}>
                    <span style={{ width: 8, height: 8, background: "#eceae4", border: "1px solid #d0ccc4", display: "inline-block" }} /> Zona atendida
                  </span>
                  <span className="inline-flex items-center gap-1.5" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.72rem", color: "#4a4a49", fontWeight: 400 }}>
                    <span style={{ width: 8, height: 8, background: "#d7d5d0", display: "inline-block" }} /> Punto de atención
                  </span>
                  <span className="inline-flex items-center gap-1.5" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.72rem", color: "#4a4a49", fontWeight: 400 }}>
                    <span style={{ width: 8, height: 8, background: "#f5b700", display: "inline-block" }} /> Top regiones
                  </span>
                </div>
              </div>

              <div className="px-6 pb-6">
                <div
                  className="p-4 sm:p-5"
                  style={{ background: "#f8f8f8", border: "1px solid rgba(0,0,0,0.07)", borderLeft: "4px solid #f5b700", borderRadius: "8px" }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "0.68rem", letterSpacing: "0.16em", color: "#6b7480" }}>
                        REGIÓN SELECCIONADA
                      </div>
                      <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "1.35rem", color: "#4a4a49", marginTop: "0.2rem" }}>
                        {detail.name}
                      </div>
                    </div>

                    {detail.kind === "bono" && (
                      <div className="text-right">
                        <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "1.9rem", lineHeight: 1, color: "#f5b700" }}>
                          {detail.value}
                        </div>
                        <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.68rem", letterSpacing: "0.1em", color: "#4a4a49", marginTop: "0.3rem" }}>
                          BONOS GESTIONADOS
                        </div>
                        {detail.rank && (
                          <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.72rem", color: "#6b7480", marginTop: "0.2rem" }}>
                            {detail.rank}
                          </div>
                        )}
                      </div>
                    )}

                    {detail.kind === "oficina" && (
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1.5"
                        style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.7rem", fontWeight: 700, color: "#173B66", background: "rgba(245,183,0,0.16)", borderRadius: "3px", letterSpacing: "0.06em" }}
                      >
                        <Building2 size={13} style={{ color: "#f5b700" }} /> PUNTO DE ATENCIÓN
                      </span>
                    )}
                  </div>

                  <p className="mt-3" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.9rem", lineHeight: 1.7, color: "#4a4a49" }}>
                    {detail.kind === "bono" && (
                      <>
                        Gestionamos de principio a fin los bonos familiares habitacionales en esta región: registro, expediente, obra y entrega de llaves. Es una de las zonas donde más familias han accedido a su vivienda con el programa Techo Propio.
                      </>
                    )}
                    {detail.kind === "oficina" && (
                      <>
                        Contamos con oficina de atención en {detail.sede?.city}. Desde ahí coordinamos la habilitación, la construcción y la entrega llave en mano, además del acompañamiento en la gestión de los bonos del Estado.
                      </>
                    )}
                    {detail.kind === "sin" && (
                      <>
                        Aún no registramos bonos en esta región. Si vives aquí, escríbenos igual: te orientamos sobre las modalidades del programa, los requisitos vigentes y las opciones de financiamiento disponibles para tu caso.
                      </>
                    )}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-4">
                    {detail.kind === "bono" && (
                      <Link
                        to="/programas/techo-propio"
                        className="inline-flex items-center gap-2 font-bold transition-all hover:gap-3"
                        style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.85rem", color: "#173B66", letterSpacing: "0.04em" }}
                      >
                        Conoce el programa Techo Propio <ArrowRight size={15} style={{ color: "#f5b700" }} />
                      </Link>
                    )}
                    {detail.kind === "oficina" && (
                      <a
                        href={detail.sede?.map}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-bold hover:opacity-80"
                        style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.85rem", color: "#173B66", letterSpacing: "0.04em" }}
                      >
                        Ver ubicación en el mapa <ArrowRight size={15} style={{ color: "#f5b700" }} />
                      </a>
                    )}
                    {detail.kind === "sin" && (
                      <a
                        href="https://wa.me/51993611523"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-bold hover:opacity-80"
                        style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.85rem", color: "#173B66", letterSpacing: "0.04em" }}
                      >
                        Escríbenos por WhatsApp <ArrowRight size={15} style={{ color: "#f5b700" }} />
                      </a>
                    )}
                    <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.75rem", color: "#8a9199" }}>
                      Toca o haz clic en otra región del mapa para ver su detalle.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: DESCRIPCIÓN + COLLAGE */}
          <div>
            <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.75rem", fontWeight: 700, color: "#f5b700", letterSpacing: "0.2em" }}>
              LO QUE HEMOS LOGRADO
            </span>
            <h2 style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "clamp(2.2rem, 4vw, 3.2rem)", color: "#4a4a49", lineHeight: 0.95, marginTop: "0.5rem" }}>
              MÁS DE 3,367 VIVIENDAS
              <br />
              <span style={{ color: "#f5b700", lineHeight: 1.0 }}>CONSTRUIDAS EN TODO EL PERÚ.</span>
            </h2>
            <p className="mt-6" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, lineHeight: 1.8, fontSize: "0.95rem", color: "#4a4a49" }}>
              Desde nuestros inicios hemos recorrido el territorio nacional entregando viviendas del programa Techo Propio. Nuestro mapa de zonas atendidas refleja el trabajo realizado a lo largo de los años: más de <strong style={{ color: "#f5b700", fontWeight: 700 }}>3,367 viviendas edificadas</strong>, con la mayor concentración de bonos familiares habitacionales en Arequipa (1,119), La Libertad (746) e Ica (737).
            </p>
            <p className="mt-4" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, lineHeight: 1.8, fontSize: "0.95rem", color: "#4a4a49" }}>
              Contamos con oficinas de atención en Lima, Ica y Lambayeque, desde donde coordinamos la habilitación, la construcción y la entrega llave en mano de cada proyecto, además del acompañamiento en la gestión de los bonos del Estado.
            </p>

            <div className="mt-7 flex flex-col gap-3">
              {ACHIEVEMENTS.map((a) => (
                <div key={a} className="flex items-center gap-3">
                  <CheckCircle size={16} style={{ color: "#f5b700", flexShrink: 0 }} />
                  <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.9rem", color: "#4a4a49", fontWeight: 400 }}>{a}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="p-4 rounded-lg flex items-center gap-3" style={{ background: "#f8f8f8", border: "1px solid rgba(0,0,0,0.07)" }}>
                <div className="w-10 h-10 flex items-center justify-center shrink-0 rounded-lg" style={{ background: "rgba(245,183,0,0.14)" }}>
                  <Home size={18} style={{ color: "#f5b700" }} />
                </div>
                <div>
                  <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "1.3rem", lineHeight: 1, color: "#4a4a49" }}>3,367+</div>
                  <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.72rem", color: "#4a4a49", fontWeight: 400 }}>Viviendas entregadas</div>
                </div>
              </div>
              <div className="p-4 rounded-lg flex items-center gap-3" style={{ background: "#f8f8f8", border: "1px solid rgba(0,0,0,0.07)" }}>
                <div className="w-10 h-10 flex items-center justify-center shrink-0 rounded-lg" style={{ background: "rgba(245,183,0,0.14)" }}>
                  <Building2 size={18} style={{ color: "#f5b700" }} />
                </div>
                <div>
                  <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "1.3rem", lineHeight: 1, color: "#4a4a49" }}>3</div>
                  <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.72rem", color: "#4a4a49", fontWeight: 400 }}>Oficinas de atención</div>
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