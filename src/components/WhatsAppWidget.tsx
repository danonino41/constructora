"use client";

import { useEffect, useRef, useState } from "react";
import { UserRound, X } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { CONTACT } from "@/data/content";

const FONT = '"Myriad Pro", "Segoe UI", sans-serif';
const MESSAGE = "Hola, quiero información sobre la construcción de mi vivienda.";

const ADVISORS = [
  { label: "Asesor 01", phone: CONTACT.phones[0] },
  { label: "Asesor 02", phone: CONTACT.phones[1] },
  { label: "Asesor 03", phone: CONTACT.phones[2] },
];

function waLink(phone: string) {
  return `https://wa.me/51${phone.replace(/\D/g, "")}?text=${encodeURIComponent(MESSAGE)}`;
}

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={ref} className="whatsapp-widget fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3">
      {open && (
        <div
          id="whatsapp-advisors"
          role="dialog"
          aria-label="Asesores de WhatsApp"
          className="w-[min(20rem,calc(100vw-2.5rem))] overflow-hidden rounded-xl bg-white shadow-2xl"
          style={{ border: "1px solid rgba(23,32,46,0.08)" }}
        >
          <div className="px-4 py-4" style={{ background: "#173B66" }}>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                  style={{ background: "#25D366" }}
                />
                <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: "#25D366" }} />
              </span>
              <span style={{ fontFamily: FONT, fontSize: "0.62rem", fontWeight: 700, color: "rgba(255,255,255,0.7)", letterSpacing: "0.18em" }}>
                EN LÍNEA
              </span>
            </div>
            <p className="mt-1.5" style={{ fontFamily: FONT, fontWeight: 700, fontSize: "1rem", color: "#ffffff" }}>
              Hablemos por WhatsApp
            </p>
            <p className="mt-0.5" style={{ fontFamily: FONT, fontSize: "0.78rem", color: "rgba(255,255,255,0.72)" }}>
              Elige al asesor que prefieras.
            </p>
          </div>

          <div className="p-2">
            {ADVISORS.map((advisor) => (
              <a
                key={advisor.phone}
                href={waLink(advisor.phone)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-[#f6f8fa]"
              >
                <span
                  className="relative grid shrink-0 place-items-center"
                  style={{ width: 38, height: 38, borderRadius: "50%", background: "#e9f8ef", color: "#128C4A" }}
                >
                  <UserRound size={18} />
                  <span
                    className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full ring-2 ring-white"
                    style={{ background: "#25D366" }}
                  />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block" style={{ fontFamily: FONT, fontSize: "0.85rem", fontWeight: 700, color: "#2f3338" }}>
                    {advisor.label}
                  </span>
                  <span className="block" style={{ fontFamily: FONT, fontSize: "0.76rem", color: "#7b8490" }}>
                    {advisor.phone}
                  </span>
                </span>
                <WhatsAppIcon size={18} style={{ color: "#25D366" }} />
              </a>
            ))}
          </div>

          <p className="border-t px-4 py-2.5 text-center" style={{ borderColor: "#eceae4", fontFamily: FONT, fontSize: "0.68rem", color: "#8a8f98" }}>
            Atención de lunes a sábado.
          </p>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="whatsapp-advisors"
        aria-label={open ? "Cerrar asesores de WhatsApp" : "Abrir asesores de WhatsApp"}
        className="relative grid place-items-center rounded-full text-white shadow-xl transition-transform hover:scale-105"
        style={{ width: 58, height: 58, background: "#25D366" }}
      >
        {open ? <X size={24} /> : <WhatsAppIcon size={28} />}
      </button>
    </div>
  );
}
