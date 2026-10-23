"use client";

import Link from "next/link";
import { useRef, useState, type TouchEvent } from "react";
import { ArrowRight, Check, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { SERVICES } from "@/data/content";
import portada from "@/imports/casa-terminada-amarillo-angulo-superior.jpeg";
import equipo from "@/imports/equipo-en-obra.jpg";

const SLIDES = 3;

const PILARES = ["Diseño a tu medida", "Trámites y bono", "Obra supervisada"];

const FONT = '"Myriad Pro", "Segoe UI", sans-serif';

const WHATSAPP_URL = `https://wa.me/51993611523?text=${encodeURIComponent(
  "Hola, quiero evaluar mi caso y conocer sus servicios de construcción."
)}`;

const SELLOS = [
  "3,367 viviendas construidas",
  "11 departamentos atendidos",
  "+10 años de experiencia",
];

export default function Services() {
  const [slide, setSlide] = useState(0);
  const touchX = useRef<number | null>(null);

  const goTo = (next: number) => setSlide((next + SLIDES) % SLIDES);

  const onTouchStart = (event: TouchEvent<HTMLElement>) => {
    touchX.current = event.touches[0].clientX;
  };

  const onTouchEnd = (event: TouchEvent<HTMLElement>) => {
    if (touchX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchX.current;
    if (Math.abs(delta) > 50) goTo(slide + (delta < 0 ? 1 : -1));
    touchX.current = null;
  };

  return (
    <>
      <section
        className="relative isolate mt-[var(--header-h)] flex min-h-[calc(100svh_-_var(--header-h))] flex-col overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <img
          src={portada.src}
          alt="Vivienda terminada construida por Consorcio Constructor"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <img
          src={equipo.src}
          alt="Equipo de Consorcio Constructor en obra"
          aria-hidden={slide !== 2}
          className={`absolute inset-0 -z-20 h-full w-full object-cover transition-opacity duration-700 ${slide === 2 ? "opacity-100" : "opacity-0"}`}
          style={{ objectPosition: "center 62%" }}
        />
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "linear-gradient(100deg, rgba(13,15,20,0.93) 0%, rgba(13,15,20,0.78) 48%, rgba(13,15,20,0.42) 100%)" }}
        />
        <div
          className="absolute inset-0 -z-10 transition-opacity duration-700"
          style={{ background: "rgba(13,15,20,0.28)", opacity: slide === 1 ? 1 : 0 }}
        />
        <div
          className="absolute inset-x-0 bottom-0 -z-10 h-44"
          style={{ background: "linear-gradient(0deg, rgba(13,15,20,0.65) 0%, rgba(13,15,20,0) 100%)" }}
        />

        <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pt-12 pb-36 md:pt-16 md:pb-40">
          <div key={slide} className={`hero-slide ${slide === 1 ? "w-full text-center" : "max-w-3xl"}`}>
            {slide === 0 ? (
              <>
                <span style={{ fontFamily: FONT, fontSize: "0.75rem", fontWeight: 700, color: "#f5b700", letterSpacing: "0.2em" }}>
                  SERVICIOS
                </span>

                <h1
                  className="mt-3 text-white"
                  style={{ fontFamily: FONT, fontWeight: 700, fontSize: "clamp(2.2rem, 4.4vw, 3.5rem)", color: "#ffffff", lineHeight: 1.02, letterSpacing: "0.01em", maxWidth: "42rem" }}
                >
                  Construimos tu casa <span style={{ color: "#f5b700" }}>de principio a fin</span>
                </h1>

                <p className="mt-6 max-w-2xl" style={{ fontFamily: FONT, fontWeight: 400, fontSize: "1.05rem", lineHeight: 1.8, color: "#e6ebf2" }}>
                  Diseñamos, gestionamos tu expediente y construimos con un solo equipo hasta la
                  entrega de tus llaves.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contacto"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 font-bold transition-all hover:opacity-90"
                    style={{ fontFamily: FONT, fontSize: "0.9rem", letterSpacing: "0.08em", background: "#f5b700", color: "#0d0f14", borderRadius: "6px" }}
                  >
                    EVALUAR MI CASO <ArrowRight size={16} />
                  </Link>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 font-bold transition-all hover:bg-white/10"
                    style={{ fontFamily: FONT, fontSize: "0.9rem", letterSpacing: "0.08em", color: "#ffffff", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.55)" }}
                  >
                    <WhatsAppIcon size={16} /> WHATSAPP
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2">
                  {SELLOS.map((text, i) => (
                    <span key={text} className="inline-flex items-center gap-3">
                      {i > 0 && (
                        <span aria-hidden style={{ color: "#f5b700", fontSize: "0.7rem" }}>
                          •
                        </span>
                      )}
                      <span style={{ fontFamily: FONT, fontSize: "0.8rem", color: "#dfe6f0" }}>
                        {text}
                      </span>
                    </span>
                  ))}
                </div>
              </>
            ) : slide === 1 ? (
              <h1
                className="mx-auto text-white"
                style={{
                  fontFamily: FONT,
                  fontWeight: 700,
                  fontSize: "clamp(2.4rem, 12vw, 9rem)",
                  lineHeight: 0.9,
                  letterSpacing: "0.02em",
                  textShadow: "0 10px 40px rgba(0,0,0,0.45)",
                }}
              >
                SERVICIOS<span style={{ color: "#f5b700" }}>.</span>
              </h1>
            ) : (
              <>
                <span style={{ fontFamily: FONT, fontSize: "0.75rem", fontWeight: 700, color: "#f5b700", letterSpacing: "0.2em" }}>
                  SERVICIOS
                </span>

                <h1
                  className="mt-3 text-white"
                  style={{ fontFamily: FONT, fontWeight: 700, fontSize: "clamp(2.2rem, 4.4vw, 3.5rem)", lineHeight: 1.02, letterSpacing: "0.01em", maxWidth: "42rem" }}
                >
                  Construimos contigo, <span style={{ color: "#f5b700" }}>paso a paso.</span>
                </h1>

                <p className="mt-6 max-w-xl" style={{ fontFamily: FONT, fontWeight: 400, fontSize: "1.05rem", lineHeight: 1.8, color: "#e6ebf2" }}>
                  Diseño, trámites y obra con un equipo cercano que te explica todo sin letras
                  chiquitas.
                </p>

                <div className="mt-7 flex flex-wrap gap-2.5">
                  {PILARES.map((pilar) => (
                    <span
                      key={pilar}
                      className="inline-flex items-center gap-2 rounded-full px-4 py-2"
                      style={{ fontFamily: FONT, fontSize: "0.82rem", color: "#ffffff", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.28)" }}
                    >
                      <Check size={14} style={{ color: "#f5b700" }} /> {pilar}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  <Link
                    href="/contacto"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 font-bold transition-all hover:opacity-90"
                    style={{ fontFamily: FONT, fontSize: "0.9rem", letterSpacing: "0.08em", background: "#f5b700", color: "#0d0f14", borderRadius: "6px" }}
                  >
                    CONVERSEMOS <ArrowRight size={16} />
                  </Link>
                </div>
              </>
            )}
          </div>

          <div className="absolute bottom-24 left-1/2 flex -translate-x-1/2 items-center gap-4">
            <button
              type="button"
              onClick={() => goTo(slide - 1)}
              aria-label="Diapositiva anterior"
              className="grid place-items-center transition-colors hover:bg-white/15"
              style={{ width: 36, height: 36, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.4)", color: "#ffffff" }}
            >
              <ChevronLeft size={16} />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: SLIDES }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSlide(i)}
                  aria-label={`Ir a la diapositiva ${i + 1}`}
                  aria-current={slide === i ? "true" : undefined}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{ width: slide === i ? 24 : 8, background: slide === i ? "#f5b700" : "rgba(255,255,255,0.55)" }}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => goTo(slide + 1)}
              aria-label="Diapositiva siguiente"
              className="grid place-items-center transition-colors hover:bg-white/15"
              style={{ width: 36, height: 36, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.4)", color: "#ffffff" }}
            >
              <ChevronRight size={16} />
            </button>
          </div>

          <a
            href="#servicios"
            className="absolute bottom-6 left-1/2 inline-flex -translate-x-1/2 flex-col items-center gap-2"
            aria-label="Desliza para descubrir los servicios"
          >
            <span style={{ fontFamily: FONT, fontSize: "0.62rem", fontWeight: 600, color: "#dfe6f0", letterSpacing: "0.22em" }}>
              DESLIZA PARA DESCUBRIR
            </span>
            <span
              className="grid place-items-center animate-bounce"
              style={{ width: 32, height: 32, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.4)", background: "rgba(13,15,20,0.25)" }}
            >
              <ChevronDown size={16} style={{ color: "#f5b700" }} />
            </span>
          </a>
        </div>
      </section>

      <section id="servicios" className="py-24 bg-gray-50 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span style={{ fontFamily: FONT, fontSize: "0.75rem", fontWeight: 400, color: "#f5b700", letterSpacing: "0.2em" }}>LO QUE HACEMOS</span>
            <h2 style={{ fontFamily: FONT, fontWeight: 700, fontSize: "clamp(2.2rem, 4vw, 3.5rem)", color: "#4a4a49", lineHeight: 0.95, marginTop: "0.5rem" }}>
              NUESTROS SERVICIOS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/servicios/${s.slug}`}
                className="p-6 group flex flex-col hover:shadow-lg transition-all duration-300 bg-white border border-gray-200 hover:border-primary/30"
                style={{ borderRadius: "8px" }}
              >
                <div className="w-12 h-12 mb-5 flex items-center justify-center bg-yellow-50 rounded-lg">
                  <s.icon size={22} style={{ color: "#f5b700" }} />
                </div>
                <h3 style={{ fontFamily: FONT, fontWeight: 700, fontSize: "1.1rem", color: "#4a4a49", letterSpacing: "0.02em", marginBottom: "0.5rem" }}>
                  {s.title}
                </h3>
                <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: "0.88rem", color: "#4a4a49", lineHeight: 1.7 }}>
                  {s.desc}
                </p>
                <span className="mt-auto pt-5 inline-flex items-center gap-2 font-bold transition-all group-hover:gap-3" style={{ fontFamily: FONT, fontSize: "0.82rem", color: "#173B66", letterSpacing: "0.04em" }}>
                  VER SERVICIO <ArrowRight size={14} style={{ color: "#f5b700" }} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
