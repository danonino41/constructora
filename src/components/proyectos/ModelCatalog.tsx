"use client";

import { useMemo, useState } from "react";
import {
  Bath,
  BedDouble,
  Building2,
  HardHat,
  Home,
  Layers,
  Maximize2,
  Ruler,
  Sofa,
  Users,
  Utensils,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ProyectoEjemplo, ProyectoModelo } from "@/data/proyectos";

type ModeloCatalogo = Omit<ProyectoModelo, "icon">;

const FONT = '"Myriad Pro", "Segoe UI", sans-serif';

const FEAT_ICONS: Record<string, LucideIcon> = {
  bed: BedDouble,
  bathroom: Bath,
  chair: Sofa,
  layers: Layers,
  kitchen: Utensils,
  construction: HardHat,
  countertops: Ruler,
  group: Users,
  home: Home,
  apartment: Building2,
};

function PlanosModal({ model, onClose }: { model: ProyectoEjemplo; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-2"
      style={{ background: "rgba(13,15,20,0.85)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Planos de ${model.name}`}
    >
      <div
        className="relative flex flex-col w-[90vw] max-w-4xl bg-white overflow-hidden shadow-2xl"
        style={{ height: "min(85dvh, 85vh)", borderRadius: "16px" }}
        onClick={(event) => event.stopPropagation()}
      >
        <div
          className="flex items-center justify-between px-4 py-2 shrink-0"
          style={{ background: "#f8f8f8", borderBottom: "1px solid #ececec" }}
        >
          <h3 className="truncate pr-3" style={{ fontFamily: FONT, fontSize: "0.9rem", fontWeight: 600, color: "#4a4a49" }}>
            {model.name}
          </h3>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={model.plan}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-full text-xs font-bold transition-colors"
              style={{ background: "rgba(245,183,0,0.15)", color: "#4a4a49", fontFamily: FONT }}
            >
              ABRIR EN OTRA PESTAÑA
            </a>
            <button
              type="button"
              onClick={onClose}
              className="w-7 h-7 rounded-full flex items-center justify-center transition-colors"
              style={{ background: "#e5e5e5", color: "#555555" }}
              aria-label="Cerrar"
            >
              <X size={16} />
            </button>
          </div>
        </div>
        <iframe
          src={model.plan}
          title={`Planos ${model.name}`}
          className="flex-1 min-h-0 w-full"
          style={{ background: "#f1f1f1" }}
          allow="autoplay"
        />
      </div>
    </div>
  );
}

export default function ModelCatalog({ modelo }: { modelo: ModeloCatalogo }) {
  const [openModel, setOpenModel] = useState<ProyectoEjemplo | null>(null);
  const [filter, setFilter] = useState("todos");

  const lotes = useMemo(
    () => Array.from(new Set(modelo.ejemplos.map((ejemplo) => ejemplo.lot))),
    [modelo.ejemplos]
  );

  const ejemplos =
    filter === "todos"
      ? modelo.ejemplos
      : modelo.ejemplos.filter((ejemplo) => ejemplo.lot === filter);

  return (
    <>
      <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filtrar diseños por tamaño de lote">
        <button
          type="button"
          onClick={() => setFilter("todos")}
          aria-pressed={filter === "todos"}
          className="px-4 py-2 transition-colors"
          style={{
            fontFamily: FONT,
            fontSize: "0.82rem",
            fontWeight: filter === "todos" ? 700 : 500,
            color: filter === "todos" ? "#0d0f14" : "#5c5c5a",
            background: filter === "todos" ? "#f5b700" : "#ffffff",
            border: "1px solid",
            borderColor: filter === "todos" ? "#f5b700" : "#e4e7ec",
            borderRadius: "999px",
          }}
        >
          Todos ({modelo.ejemplos.length})
        </button>
        {lotes.map((lote) => {
          const count = modelo.ejemplos.filter((ejemplo) => ejemplo.lot === lote).length;
          const active = filter === lote;
          return (
            <button
              key={lote}
              type="button"
              onClick={() => setFilter(lote)}
              aria-pressed={active}
              className="px-4 py-2 transition-colors"
              style={{
                fontFamily: FONT,
                fontSize: "0.82rem",
                fontWeight: active ? 700 : 500,
                color: active ? "#0d0f14" : "#5c5c5a",
                background: active ? "#f5b700" : "#ffffff",
                border: "1px solid",
                borderColor: active ? "#f5b700" : "#e4e7ec",
                borderRadius: "999px",
              }}
            >
              Lote {lote} ({count})
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {ejemplos.map((ejemplo) => {
          const FeatIcon = FEAT_ICONS[ejemplo.featIcon] ?? HardHat;

          return (
            <article
              key={ejemplo.slug}
              id={ejemplo.slug}
              className="group bg-white overflow-hidden flex flex-col transition-shadow duration-300 hover:shadow-xl scroll-mt-40"
              style={{ borderRadius: "12px", border: "1px solid #e5e5e5" }}
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: "0.85", background: "#eceff3" }}>
                <img
                  src={ejemplo.img}
                  alt={`${ejemplo.name} de Consorcio Constructor`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:opacity-0 group-hover:scale-105"
                />
                <img
                  src={ejemplo.imgHover}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
                />
                {ejemplo.badge && (
                  <span
                    className="absolute top-3 right-3 px-2.5 py-1 text-[0.62rem] font-bold uppercase shadow-sm"
                    style={{ background: "#f5b700", color: "#0d0f14", fontFamily: FONT, letterSpacing: "0.08em", borderRadius: "4px" }}
                  >
                    {ejemplo.badge}
                  </span>
                )}
                <span
                  className="absolute bottom-3 left-3 px-2.5 py-1 text-[0.66rem] font-bold"
                  style={{ background: "rgba(13,15,20,0.72)", color: "#ffffff", fontFamily: FONT, letterSpacing: "0.08em", borderRadius: "4px" }}
                >
                  LOTE {ejemplo.lot}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 style={{ fontFamily: FONT, fontWeight: 700, fontSize: "1.1rem", color: "#4a4a49", letterSpacing: "0.02em" }}>
                    {ejemplo.name}
                  </h3>
                  <p className="mt-2" style={{ fontFamily: FONT, fontSize: "0.88rem", lineHeight: 1.65, color: "#5c5c5a" }}>
                    {ejemplo.desc}
                  </p>
                </div>

                <div>
                  <div className="grid grid-cols-2 gap-4 mt-4 pt-4" style={{ borderTop: "1px solid #eceae4" }}>
                    <div className="flex items-center gap-2">
                      <Maximize2 size={16} style={{ color: "#f5b700", flexShrink: 0 }} />
                      <span style={{ fontFamily: FONT, fontSize: "0.9rem", fontWeight: 600, color: "#4a4a49" }}>
                        {ejemplo.area}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FeatIcon size={16} style={{ color: "#f5b700", flexShrink: 0 }} />
                      <span style={{ fontFamily: FONT, fontSize: "0.9rem", fontWeight: 600, color: "#4a4a49" }}>
                        {ejemplo.feat}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setOpenModel(ejemplo)}
                    className="w-full mt-5 py-3 font-bold transition-all hover:opacity-90"
                    style={{ background: "#f5b700", color: "#0d0f14", fontFamily: FONT, letterSpacing: "0.1em", borderRadius: "6px" }}
                  >
                    VER PLANOS
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {openModel && <PlanosModal model={openModel} onClose={() => setOpenModel(null)} />}
    </>
  );
}
