"use client";

import { useState } from "react";
import { createPortal } from "react-dom";

export const MODELOS = [
  { kind: "header", cat: "MODELO 1", title: "MODELO 1 - Viviendas Completas", icon: "home", iconCls: "bg-primary/10 text-primary" },
  {
    name: "Modelo 1 - 35m2 Mejorado",
    badge: { text: "Popular", cls: "bg-tertiary-fixed text-on-tertiary-fixed" },
    desc: "Distribución optimizada con sala-comedor ampliada y ventilación natural cruzada.",
    area: "45.00 m²",
    feat: "2 Dormitorios",
    featIcon: "bed",
    img: "/modelos/m1-35-mejorado-0001.jpg",
    plan: "https://drive.google.com/file/d/1OdSBRl0Y-3_C_cV6C6eb0S389q8pGEYl/preview",
  },
  {
    name: "Modelo 1 - 35m2 Tradicional",
    badge: null,
    desc: "Fachada diseñada para el confort térmico en climas cálidos, reduciendo el consumo energético.",
    area: "42.50 m²",
    feat: "1 Baño Completo",
    featIcon: "bathroom",
    img: "/modelos/m1-35-tradicional-0001.jpg",
    plan: "https://drive.google.com/file/d/1oT2duZnc2uw_1Clq_E60-FYiXG-Dyk0Q/preview",
  },
  {
    name: "Modelo 1 - 40m2 Mejorado",
    badge: null,
    desc: "Ideal para familias jóvenes, maximizando cada metro cuadrado sin sacrificar estética.",
    area: "38.20 m²",
    feat: "Área Social",
    featIcon: "chair",
    img: "/modelos/m1-40-mejorado-0001.jpg",
    plan: "https://drive.google.com/file/d/1Ri85qtYsLh0a9xFhMEv802CsDVB8C79S/preview",
  },
  {
    name: "Modelo 1 - 40m2 Tradicional",
    badge: null,
    desc: "Incluye lavandería techada y posibilidad de ampliación a segundo nivel.",
    area: "50.15 m²",
    feat: "Proy. 2do Piso",
    featIcon: "layers",
    img: "/modelos/m1-40-tradicional-0001.jpg",
    plan: "https://drive.google.com/file/d/1DG-mnKt7eaSitgY9F7NfOTGAg_UMuYfq/preview",
  },
  {
    name: "Modelo 1 - 60m2 Mejorado",
    badge: null,
    desc: "Líneas modernas y grandes ventanales para una iluminación excepcional.",
    area: "44.80 m²",
    feat: "Cocina Kitchenette",
    featIcon: "kitchen",
    img: "/modelos/m1-60-mejorado-0001.jpg",
    plan: "https://drive.google.com/file/d/1PdyK2k5wg3gFA4lrEIzSpe5soMlxBRFt/preview",
  },
  {
    name: "Modelo 1 - 60m2 Tradicional",
    badge: null,
    desc: "La mejor opción costo-beneficio para acceder rápidamente a tu primera vivienda.",
    area: "35.50 m²",
    feat: "Construcción Rápida",
    featIcon: "construction",
    img: "/modelos/m1-60-tradicional-0001.jpg",
    plan: "https://drive.google.com/file/d/1EH5CEr8MX-R8NYPQyEHpakUAdQB3-ypU/preview",
  },
  {
    name: "Modelo 1 - 80m2 Tradicional",
    badge: null,
    desc: "Ideal para solteros o parejas, con una distribución tipo loft muy moderna.",
    area: "41.20 m²",
    feat: "Acabados A1",
    featIcon: "countertops",
    img: "/modelos/m1-80-tradicional-0001.jpg",
    plan: "https://drive.google.com/file/d/1Vx0qEMcruibFulk8deu4pL9yDdTJDy9f/preview",
  },
  { kind: "header", cat: "MODELO 2", title: "MODELO 2 - Viviendas Amplias", icon: "apartment", iconCls: "bg-secondary/10 text-secondary" },
  {
    name: "Modelo 2 - 35m2 Mejorado",
    badge: { text: "Más Amplio", cls: "bg-secondary-fixed text-on-secondary-fixed-variant" },
    desc: "Máxima capacidad para familias de hasta 5 integrantes con ambientes bien definidos.",
    area: "54.30 m²",
    feat: "3 Dormitorios",
    featIcon: "group",
    img: "/modelos/m2-35-mejorado-0001.jpg",
    plan: "https://drive.google.com/file/d/1d-IZcE6OIKSUmxuloQZ59Q9TNwZ7aPM2/preview",
  },
  {
    name: "Modelo 2 - 35m2 Tradicional",
    badge: null,
    desc: "Diseño tradicional con excelente relación costo-beneficio para familias jóvenes.",
    area: "51.20 m²",
    feat: "2 Dormitorios",
    featIcon: "bed",
    img: "/modelos/m2-35-tradicional-0001.jpg",
    plan: "https://drive.google.com/file/d/18pOiFs0kKghtiS_jQ2dbYbhI6QvMLq4t/preview",
  },
  {
    name: "Modelo 2 - 40m2 Mejorado",
    badge: null,
    desc: "Espacios amplios y luminosos con distribución inteligente para familias medianas.",
    area: "48.50 m²",
    feat: "2 Baños",
    featIcon: "bathroom",
    img: "/modelos/m2-40-mejorado-0001.jpg",
    plan: "https://drive.google.com/file/d/13H9Y0T1n2s8Gnd5VKPiF1E7mecPEsVwv/preview",
  },
  {
    name: "Modelo 2 - 40m2 Tradicional",
    badge: null,
    desc: "Diseño clásico con acabados de primera y opción de ampliación futura.",
    area: "52.80 m²",
    feat: "Proy. 2do Piso",
    featIcon: "layers",
    img: "/modelos/m2-40-tradicional-0001.jpg",
    plan: "https://drive.google.com/file/d/1pd3P1FWrNOTgmonl6e9CGV3PSyVg44Cp/preview",
  },
  {
    name: "Modelo 2 - 60m2 Mejorado",
    badge: null,
    desc: "Vivienda premium con acabados de lujo y espacios generosos para toda la familia.",
    area: "58.90 m²",
    feat: "Cocina Kitchenette",
    featIcon: "kitchen",
    img: "/modelos/m2-60-mejorado-0001.jpg",
    plan: "https://drive.google.com/file/d/13Kg6yUggoxnw6SfOMIPZtaTtYA5feZv1/preview",
  },
  {
    name: "Modelo 2 - 60m2 Tradicional",
    badge: null,
    desc: "Diseño tradicional robusto, máxima durabilidad y bajo mantenimiento.",
    area: "55.40 m²",
    feat: "Construcción Rápida",
    featIcon: "construction",
    img: "/modelos/m2-60-tradicional-0001.jpg",
    plan: "https://drive.google.com/file/d/1s06BJEf_q_I5jm8Kay_8idNoDOPn77sj/preview",
  },
  {
    name: "Modelo 2 - 80m2 Mejorado",
    badge: { text: "Premium", cls: "bg-secondary-fixed text-on-secondary-fixed-variant" },
    desc: "Nuestra vivienda más completa: 3 dormitorios, 2 baños y amplias áreas sociales.",
    area: "78.50 m²",
    feat: "3 Dormitorios",
    featIcon: "group",
    img: "/modelos/m2-80-mejorado-0001.jpg",
    plan: "https://drive.google.com/file/d/1K8PNn8q1Fok8_zguoWFJfPR3zt7wlbLl/preview",
  },
];

function PlanosModal({ model, onClose }) {
  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-950/80 backdrop-blur-sm p-2"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative flex flex-col w-[90vw] max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl"
        style={{ height: "min(85dvh, 85vh)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-2 bg-neutral-50 border-b border-neutral-200 shrink-0">
          <h3 className="text-neutral-800 text-sm font-medium truncate pr-3">
            {model.name}
          </h3>
          <div className="flex items-center gap-2">
            <a
              href={model.plan}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Abrir en otra pestaña
            </a>
            <button
              type="button"
              onClick={onClose}
              className="w-7 h-7 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-neutral-300 transition-colors"
              aria-label="Cerrar"
            >
              <span className="material-symbols-outlined text-[16px]">close</span>
            </button>
          </div>
        </div>
        <iframe
          src={model.plan}
          title={`Planos ${model.name}`}
          className="flex-1 min-h-0 w-full bg-neutral-100"
          allow="autoplay"
        />
      </div>
    </div>,
    document.body
  );
}

export default function ModelosGaleria() {
  const [openModel, setOpenModel] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MODELOS.map((m) => {
          if (m.kind === "header") {
            return (
              <div key={m.title} className="col-span-full">
                <h3 className="font-headline-md text-headline-md text-primary mb-6 flex items-center gap-3">
                  <span
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${m.iconCls}`}
                  >
                    <span className="material-symbols-outlined">{m.icon}</span>
                  </span>
                  {m.title}
                </h3>
              </div>
            );
          }
          return (
            <div
              key={m.name}
              className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm card-glow border border-outline-variant/20 flex flex-col"
            >
              <div className="shine-effect aspect-[0.79] overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt={m.name} className="img-zoom w-full h-full object-cover" src={m.img} />
                {m.badge && (
                  <span
                    className={`${m.badge.cls} absolute top-3 right-3 px-2 py-1 rounded text-[10px] font-bold uppercase z-10 shadow-sm`}
                  >
                    {m.badge.text}
                  </span>
                )}
              </div>
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-1">
                    {m.name}
                  </h3>
                  <p className="text-on-surface-variant text-sm line-clamp-2">{m.desc}</p>
                </div>
                <div className="grid grid-cols-2 gap-4 border-t border-outline-variant/30 pt-4">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-lg">
                      square_foot
                    </span>
                    <span className="text-sm font-semibold">{m.area}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-lg">
                      {m.featIcon}
                    </span>
                    <span className="text-sm font-semibold">{m.feat}</span>
                  </div>
                </div>
                <button
                  type="button"
                  className="w-full py-3 bg-surface-container text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all"
                  onClick={() => setOpenModel(m)}
                >
                  Ver Planos
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {openModel && (
        <PlanosModal key={openModel.name} model={openModel} onClose={() => setOpenModel(null)} />
      )}
    </>
  );
}