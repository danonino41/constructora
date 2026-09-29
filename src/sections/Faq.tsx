import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ_GROUPS = [
  {
    group: "TECHO PROPIO",
    items: [
      {
        q: "¿Tengo que devolver el bono?",
        a: "No. El Bono Familiar Habitacional (BFH) es un subsidio del Estado no reembolsable: no se devuelve y se suma a tu ahorro para financiar tu vivienda.",
      },
      {
        q: "¿Puedo usarlo para construir en mi terreno?",
        a: "Sí, es una de las modalidades principales del programa. Techo Propio permite comprar, construir en terreno propio o mejorar la vivienda.",
      },
      {
        q: "¿Cuánto son los topes de ingreso?",
        a: "Ingresos familiares de hasta S/ 3,715 para compra o S/ 2,706 para construcción de vivienda.",
      },
      {
        q: "¿Necesito ahorro previo?",
        a: "Sí, se exige un ahorro mínimo del valor de la vivienda. Nosotros te orientamos con el monto y el calendario del ahorro.",
      },
    ],
  },
  {
    group: "BONO DE REFORZAMIENTO ESTRUCTURAL (BPVVRS)",
    items: [
      {
        q: "¿Qué viviendas califican?",
        a: "Viviendas vulnerables a riesgos sísmicos, de hogares en situación de pobreza. Se evalúa la vivienda y se ejecutan las intervenciones estructurales necesarias.",
      },
      {
        q: "¿Es reembolsable?",
        a: "No. Es un subsidio no reembolsable: el Estado financia el refuerzo sísmico sin que debas devolver el dinero.",
      },
      {
        q: "¿Quién hace el proyecto técnico?",
        a: "Consorcio Constructor inscribe tu proyecto y coordina con el MVCS, desde la evaluación hasta la ejecución del refuerzo.",
      },
    ],
  },
  {
    group: "CRÉDITO MIVIVIENDA",
    items: [
      {
        q: "¿Financia construcción en mi terreno?",
        a: "Sí. El Nuevo Crédito MiVivienda financia la construcción en sitio propio, además de la compra de vivienda nueva.",
      },
      {
        q: "¿Qué es el Bono del Buen Pagador?",
        a: "Un beneficio estatal que reduce tu deuda si cumples el pago de tus cuotas. Es un incentivo adicional al crédito.",
      },
      {
        q: "¿Necesito un banco?",
        a: "Sí, es un crédito hipotecario otorgado por entidades financieras. Nosotros preparamos y orientamos tu expediente para que lo solicites de forma eficiente.",
      },
    ],
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  const toggle = (id: number) => setOpen((prev) => (prev === id ? null : id));

  return (
    <section id="faqs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.75rem", fontWeight: 500, color: "#f5b700", letterSpacing: "0.2em" }}>
            RESOLVEMOS TUS DUDAS
          </span>
          <h2 style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "clamp(2rem, 3.6vw, 3rem)", color: "#4a4a49", lineHeight: 1, marginTop: "0.6rem" }}>
            PREGUNTAS FRECUENTES
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-10">
          {FAQ_GROUPS.map((group, gi) => (
            <div key={group.group}>
              <h3 style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "0.85rem", color: "#173B66", letterSpacing: "0.18em", marginBottom: "0.75rem" }}>
                {group.group}
              </h3>
              <div className="divide-y" style={{ borderTop: "1px solid #eceae4", borderBottom: "1px solid #eceae4" }}>
                {group.items.map((item, ii) => {
                  const id = gi * 10 + ii;
                  const isOpen = open === id;
                  return (
                    <div key={item.q}>
                      <button
                        onClick={() => toggle(id)}
                        className="w-full flex items-center justify-between gap-4 py-4 text-left transition-colors hover:bg-[#f8f8f8] px-3 -mx-3"
                      >
                        <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 600, fontSize: "1rem", color: "#4a4a49", lineHeight: 1.4 }}>
                          {item.q}
                        </span>
                        <ChevronDown
                          size={18}
                          className="transition-transform duration-300"
                          style={{ color: "#f5b700", transform: isOpen ? "rotate(180deg)" : "none", flexShrink: 0 }}
                        />
                      </button>
                      {isOpen && (
                        <p className="px-3 pb-5 -mx-3" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, fontSize: "0.95rem", lineHeight: 1.75, color: "#5c5c5a", maxWidth: "56rem" }}>
                          {item.a}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}