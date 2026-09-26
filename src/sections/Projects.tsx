import { useState } from "react";
import { Building2, Hammer, Maximize2, X, BedDouble, Bath, Sofa, Layers, Utensils, HardHat, Ruler, Users, Home } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { MODELOS } from "@/app/ModelosGaleria.jsx";
import type { ModelItem } from "@/data/content";

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

function PlanosModal({ model, onClose }: { model: ModelItem; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-2"
      style={{ background: "rgba(13,15,20,0.85)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative flex flex-col w-[90vw] max-w-4xl bg-white overflow-hidden shadow-2xl"
        style={{ height: "min(85dvh, 85vh)", borderRadius: "16px" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-2 shrink-0" style={{ background: "#f8f8f8", borderBottom: "1px solid #ececec" }}>
          <h3 className="truncate pr-3" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.9rem", fontWeight: 600, color: "#4a4a49" }}>
            {model.name}
          </h3>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={model.plan}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-full text-xs font-bold transition-colors"
              style={{ background: "rgba(245,183,0,0.15)", color: "#4a4a49", fontFamily: '"Myriad Pro", "Segoe UI", sans-serif' }}
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
        <iframe src={model.plan} title={`Planos ${model.name}`} className="flex-1 min-h-0 w-full" style={{ background: "#f1f1f1" }} allow="autoplay" />
      </div>
    </div>
  );
}

export default function Projects() {
  const [openModel, setOpenModel] = useState<ModelItem | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.75rem", fontWeight: 500, color: "#f5b700", letterSpacing: "0.2em" }}>MODELOS DE VIVIENDA</span>
            <h2 style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "clamp(2.2rem, 4vw, 3.5rem)", color: "#4a4a49", lineHeight: 0.95, marginTop: "0.5rem" }}>
              NUESTROS<br />PROYECTOS
            </h2>
          </div>
          <p className="text-gray-600 max-w-sm" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, lineHeight: 1.7, fontSize: "0.95rem" }}>
            Cada modelo ha sido diseñado para maximizar el confort y la funcionalidad. Elige el que mejor se adapta a tu familia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(MODELOS as ModelItem[]).map((m) => {
            if (m.kind === "header") {
              const HeaderIcon = (FEAT_ICONS[m.featIcon ?? "home"] ?? Building2) as LucideIcon;
              return (
                <div key={m.title} className="col-span-full mt-4 first:mt-0">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 flex items-center justify-center shrink-0" style={{ background: "#f5b700", color: "#0d0f14", borderRadius: "8px" }}>
                      <HeaderIcon size={20} />
                    </div>
                    <h3 style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "1.6rem", color: "#4a4a49", letterSpacing: "0.04em", margin: 0 }}>
                      {m.title}
                    </h3>
                  </div>
                  <div style={{ width: 60, height: 3, background: "#f5b700", borderRadius: "2px" }} />
                </div>
              );
            }

            const FeatIcon = (FEAT_ICONS[m.featIcon ?? "construction"] ?? Hammer) as LucideIcon;
            return (
              <div
                key={m.name}
                className="group bg-white overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl"
                style={{ borderRadius: "10px", border: "1px solid #e5e5e5" }}
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: "0.8" }}>
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  {m.badge && (
                    <span className="absolute top-3 right-3 px-2 py-1 text-[10px] font-bold uppercase shadow-sm" style={{ background: "#f5b700", color: "#0d0f14", fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', letterSpacing: "0.06em", borderRadius: "4px" }}>
                      {m.badge.text}
                    </span>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "1.1rem", color: "#4a4a49", letterSpacing: "0.02em" }}>{m.name}</h3>
                    <p className="mt-2 text-gray-600" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, fontSize: "0.88rem", lineHeight: 1.65 }}>{m.desc}</p>
                  </div>
                  <div>
                    <div className="grid grid-cols-2 gap-4 mt-4 pt-4" style={{ borderTop: "1px solid #eceae4" }}>
                      <div className="flex items-center gap-2">
                        <Maximize2 size={16} style={{ color: "#f5b700", flexShrink: 0 }} />
                        <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.9rem", fontWeight: 600, color: "#4a4a49" }}>{m.area}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FeatIcon size={16} style={{ color: "#f5b700", flexShrink: 0 }} />
                        <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.9rem", fontWeight: 600, color: "#4a4a49" }}>{m.feat}</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setOpenModel(m)}
                      className="w-full mt-5 py-3 font-bold transition-all hover:opacity-90"
                      style={{ background: "#f5b700", color: "#0d0f14", fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', letterSpacing: "0.1em", borderRadius: "6px" }}
                    >
                      VER PLANOS
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {openModel && <PlanosModal model={openModel} onClose={() => setOpenModel(null)} />}
    </section>
  );
}