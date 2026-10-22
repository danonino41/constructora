"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
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
  { name: "Arequipa", value: "1,119 bonos", color: "#f5b700", desc: "1er lugar" },
  { name: "La Libertad", value: "746 bonos", color: "#e8ae08", desc: "2do lugar" },
  { name: "Ica", value: "737 bonos", color: "#d9a506", desc: "3er lugar" },
];

const ACHIEVEMENTS = [
  "Más de 3,367 viviendas entregadas a nivel nacional",
  "Bonos Familiares Habitacionales gestionados para cientos de familias",
  "Oficinas de atención y showroom en Lima, Ica y Lambayeque",
  "Entrega de llaves ceremoniales del programa Techo Propio",
  "Construcción llave en mano con certificación y garantía",
];

export default function PresenceMap() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [selected, setSelected] = useState<string>("arequipa");

  // Lógica de Tooltip intacta
  const tooltip = useMemo(() => {
    const zone = hovered ? ZONES[hovered] : undefined;
    if (!hovered || !zone) return null;
    const spot = (PERU_MAP.hotspots as Record<string, { x: number; y: number }>)[hovered];
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

  // Lógica de Detalle de Región intacta
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

  return (
    <section id="zonas-atendidas" className="py-16 md:py-20 lg:py-10 bg-slate-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* ENCABEZADO DE LA SECCIÓN */}
        <div className="mb-12 lg:mb-6 text-center md:text-left">
          <span className="text-xs font-bold text-[#f5b700] tracking-[0.2em] uppercase block mb-2">
            Lo que hemos logrado
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-3xl font-extrabold text-[#4a4a49] tracking-tight leading-none">
            MÁS DE 3,367 VIVIENDAS{" "}
            <span className="text-[#f5b700] block md:inline">CONSTRUIDAS EN TODO EL PERÚ</span>
          </h2>
        </div>

        {/* CONTENEDOR PRINCIPAL HORIZONTAL */}
        <div className="grid gap-8 lg:gap-6 lg:grid-cols-[1.2fr_0.8fr] items-start lg:items-center">

          {/* BLOQUE IZQUIERDO: EL MAPA Y SU DETALLE INTERNO HORIZONTAL */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-100/70 overflow-hidden">

            {/* Header del mapa */}
            <div className="flex items-center justify-between px-6 py-4 lg:py-2.5 border-b border-slate-100 bg-[#f5b700]/5">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-[#f5b700]" />
                <span className="font-bold text-sm tracking-wider text-slate-700">ZONAS ATENDIDAS</span>
              </div>
              <div className="text-right">
                <div className="font-extrabold text-xl lg:text-lg text-slate-800 leading-none">{TOTAL_VIVIENDAS.toLocaleString("es-PE")}</div>
                <div className="text-[10px] tracking-wider text-slate-500 uppercase font-medium">Viviendas Edificadas</div>
              </div>
            </div>

            {/* Sub-Grid Horizontal: Mapa a la izquierda, Info a la derecha */}
            <div className="grid md:grid-cols-[240px_1fr] gap-6 lg:gap-5 lg:p-4 p-6 items-center justify-center">

              {/* Mapa de Perú */}
              <div className="relative w-full max-w-[200px] md:max-w-[220px] lg:max-w-[180px] mx-auto py-2 flex items-center justify-center">
                <svg
                  viewBox={`0 0 ${PERU_MAP.width} ${PERU_MAP.height}`}
                  className="w-full h-auto select-none block"
                >
                  {PERU_MAP.paths.map((p) => (
                    <path
                      key={p.key}
                      d={p.d}
                      fill={fillFor(p.key)}
                      stroke="#ffffff"
                      strokeWidth={0.8}
                      className="cursor-pointer transition-colors duration-150"
                      onMouseEnter={() => setHovered(p.key)}
                      onMouseLeave={() => setHovered(null)}
                      onClick={() => setSelected(p.key)}
                    />
                  ))}

                  {OFFICES.map((k) => {
                    const spot = (PERU_MAP.hotspots as Record<string, { x: number; y: number }>)[k];
                    if (!spot) return null;
                    const isActive = hovered === k || selected === k;
                    return (
                      <g
                        key={k}
                        className="cursor-pointer"
                        onMouseEnter={() => setHovered(k)}
                        onMouseLeave={() => setHovered(null)}
                        onClick={() => setSelected(k)}
                      >
                        <circle cx={spot.x} cy={spot.y} r={isActive ? 13 : 9} fill="rgba(245,183,0,0.22)" className="transition-all" />
                        <circle cx={spot.x} cy={spot.y} r={4} fill="#f5b700" stroke="#ffffff" strokeWidth={1.2} />
                      </g>
                    );
                  })}
                </svg>

                {/* Tooltip flotante */}
                {tooltip && (
                  <div
                    className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-[120%]"
                    style={{ left: `${tooltip.left}%`, top: `${tooltip.top}%` }}
                  >
                    <div className="px-3 py-2 bg-slate-900 text-white text-xs rounded-lg shadow-xl min-w-[140px]">
                      <div className="font-bold">{tooltip.name}</div>
                      <div className="text-[11px] text-slate-300 mt-0.5">
                        {tooltip.label}
                        {tooltip.value ? <>: <span className="font-bold text-[#f5b700]">{tooltip.value}</span></> : null}
                      </div>
                    </div>
                    <div className="w-0 h-0 mx-auto border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-slate-900" />
                  </div>
                )}
              </div>

              {/* Panel de Detalle Dinámico Lateral */}
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 lg:p-4 flex flex-col justify-between min-h-[260px] md:min-h-[290px] lg:min-h-[220px]">
                <div>
                  <div className="flex items-center justify-between border-b border-slate-200/60 pb-3 mb-3">
                    <div>
                      <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Región Seleccionada</div>
                      <div className="font-bold text-xl text-slate-800 mt-0.5">{detail.name}</div>
                    </div>

                    {detail.kind === "bono" && (
                      <div className="text-right">
                        <div className="font-black text-2xl text-[#f5b700] leading-none">{detail.value}</div>
                        <div className="text-[9px] font-bold tracking-wider text-slate-500 mt-1 uppercase">Bonos</div>
                      </div>
                    )}

                    {detail.kind === "oficina" && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold text-[#173B66] bg-[#f5b700]/15 rounded-md">
                        <Building2 size={12} className="text-[#f5b700]" /> SEDE
                      </span>
                    )}
                  </div>

                  <p className="text-sm leading-relaxed text-slate-600">
                    {detail.kind === "bono" && (
                      <>Gestionamos los bonos familiares habitacionales de principio a fin en {detail.name}. Una de las regiones con mayor impacto del programa Techo Propio.</>
                    )}
                    {detail.kind === "oficina" && (
                      <>Contamos con oficina física y showroom en {detail.sede?.city || detail.name}. Coordinamos construcciones seguras y entregas llave en mano en la zona.</>
                    )}
                    {detail.kind === "sin" && (
                      <>Aún no registramos bonos aquí. Si eres de esta zona, contáctanos para asesorarte sobre requisitos y próximas convocatorias de Techo Propio.</>
                    )}
                  </p>
                </div>

                {/* Call To Action Dinámico y Contextual */}
                <div className="pt-3 border-t border-slate-200/60 mt-4">
                  {detail.kind === "bono" && (
                    <Link
                      href="/programas/techo-propio"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#173B66] hover:text-[#f5b700] transition-colors group"
                    >
                      Ver programa Techo Propio <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  )}
                  {detail.kind === "oficina" && (
                    <a
                      href={detail.sede?.map}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#173B66] hover:text-[#f5b700] transition-colors group"
                    >
                      Ver dirección exacta <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </a>
                  )}
                  {detail.kind === "sin" && (
                    <a
                      href="https://wa.me/51993611523"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#173B66] hover:text-[#f5b700] transition-colors group"
                    >
                      Consultar por WhatsApp <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </a>
                  )}
                  <p className="text-[10px] text-slate-400 mt-2">
                    Haz clic en cualquier departamento del mapa para cambiar de región.
                  </p>
                </div>
              </div>
            </div>

            {/* Leyendas al fondo */}
            <div className="px-6 py-4 lg:py-2.5 bg-slate-50/50 border-t border-slate-100 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-[#f5b700] rounded-sm" /> Top Regiones
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-[#d7d5d0] rounded-sm" /> Puntos de atención
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-[#eceae4] rounded-sm" /> Otras regiones atendidas
              </span>
            </div>
          </div>

          {/* BLOQUE DERECHO: CONTENIDO EDITORIAL DE SOPORTE */}
          <div className="flex flex-col gap-6 lg:gap-4">
            <p className="text-sm leading-relaxed text-slate-600">
              Desde nuestros inicios hemos recorrido el territorio nacional entregando viviendas seguras. Nuestro mapa refleja el alcance del programa Techo Propio: gestionamos y construimos con certificación y garantía.
            </p>

            {/* Lista de Logros limpia y compacta */}
            <div className="flex flex-col gap-3 lg:gap-2">
              {ACHIEVEMENTS.slice(0, 3).map((a) => (
                <div key={a} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-[#f5b700] shrink-0" />
                  <span className="text-sm text-slate-600">{a}</span>
                </div>
              ))}
            </div>

            {/* Grid de Micro KPIs */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4 lg:p-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f5b700]/15">
                  <Home size={18} className="text-[#f5b700]" />
                </div>
                <div>
                  <div className="text-lg font-extrabold leading-none text-slate-800">3,367+</div>
                  <div className="text-[11px] text-slate-500">Viviendas</div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4 lg:p-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f5b700]/15">
                  <Building2 size={18} className="text-[#f5b700]" />
                </div>
                <div>
                  <div className="text-lg font-extrabold leading-none text-slate-800">3 Sedes</div>
                  <div className="text-[11px] text-slate-500">Oficinas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
