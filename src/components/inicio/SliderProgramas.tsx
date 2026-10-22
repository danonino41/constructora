"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Pause, Play, ArrowRight } from "lucide-react";

import casaTechoPropio from "@/imports/casa-terminada-amarillo-un-piso.jpeg";
import obraRefuerzo from "@/imports/evidencia-avance.jpg";
import casaTerminada from "@/imports/casa-terminada-amarillo-puerta-abierta.jpeg";

type Slide = {
  key: string;
  img: string;
  alt: string;
  tag: string;
  title: string;
  text: string;
  meta: string;
  href: string;
};

const SLIDES: Slide[] = [
  {
    key: "techo-propio",
    img: casaTechoPropio.src,
    alt: "Vivienda Techo Propio terminada y lista para habitar",
    tag: "PROGRAMA 01",
    title: "Techo Propio",
    text: "Bono Familiar Habitacional que no se devuelve para construir en tu terreno o comprar tu vivienda.",
    meta: "Bono Familiar Habitacional",
    href: "/programas/techo-propio",
  },
  {
    key: "reforzamiento",
    img: obraRefuerzo.src,
    alt: "Obra de reforzamiento estructural en vivienda existente",
    tag: "PROGRAMA 02",
    title: "Bono de Reforzamiento Estructural",
    text: "Subsidio no reembolsable para reforzar viviendas vulnerables a riesgos sísmicos.",
    meta: "Subsidio BPVVRS",
    href: "/programas/reforzamiento",
  },
  {
    key: "credito-mivivienda",
    img: casaTerminada.src,
    alt: "Casa terminada con acceso abierto, ejemplo de crédito MiVivienda",
    tag: "PROGRAMA 03",
    title: "Nuevo Crédito MiVivienda",
    text: "Financiamiento para comprar, construir o mejorar tu vivienda con el Bono del Buen Pagador.",
    meta: "Bono del Buen Pagador",
    href: "/programas/credito-mivivienda",
  },
];

const AUTOPLAY_MS = 6000;

export default function SliderProgramas() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 });
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const paused = useRef(false);

  const sync = useCallback(() => {
    if (!emblaApi) return;
    setIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    sync();
    emblaApi.on("select", sync);
    emblaApi.on("reInit", sync);
    return () => {
      emblaApi.off("select", sync);
      emblaApi.off("reInit", sync);
    };
  }, [emblaApi, sync]);

  // Autoplay propio: se detiene en hover, en foco y con el toggle manual.
  useEffect(() => {
    if (!emblaApi) return;
    const id = window.setInterval(() => {
      if (!paused.current && !document.hidden) emblaApi.scrollNext();
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [emblaApi]);

  const pause = () => {
    paused.current = true;
  };
  const resume = () => {
    if (playing) paused.current = false;
  };

  return (
    <section id="programas-destacados" className="relative bg-[#0d0f14]">
      {/* Altura: primer viewport en escritorio (el header flota transparente encima) */}
      <div className="relative h-[88vh] min-h-[560px] lg:h-[100vh] lg:min-h-[640px]">
        <div
          className="relative h-full overflow-hidden"
          onMouseEnter={pause}
          onMouseLeave={resume}
        >
          <div ref={emblaRef} className="h-full overflow-hidden">
            <div className="flex h-full touch-pan-y">
              {SLIDES.map((s) => (
                <div key={s.key} className="relative h-full min-w-0 flex-[0_0_100%]">
                  <div className="h-full w-full">
                    <img
                      src={s.img}
                      alt={s.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(9,10,14,0.88) 0%, rgba(9,10,14,0.64) 42%, rgba(9,10,14,0.18) 100%)",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full max-w-7xl mx-auto px-6 pt-24 lg:pt-28">
                      <div className="max-w-xl" key={s.key}>
                        <span
                          className="inline-block px-3 py-1.5 text-[0.65rem] font-bold tracking-[0.18em] text-[#0d0f14]"
                          style={{ background: "#f5b700", borderRadius: "3px" }}
                        >
                          {s.tag}
                        </span>
                        <h1
                          className="mt-4 text-white"
                          style={{
                            fontFamily: '"Myriad Pro", "Segoe UI", sans-serif',
                            fontWeight: 700,
                            fontSize: "clamp(2rem, 4vw, 3.4rem)",
                            lineHeight: 1.03,
                          }}
                        >
                          {s.title}
                        </h1>
                        <p
                          className="mt-4"
                          style={{
                            fontFamily: '"Myriad Pro", "Segoe UI", sans-serif',
                            fontWeight: 400,
                            fontSize: "clamp(0.95rem, 1.15vw, 1.1rem)",
                            lineHeight: 1.6,
                            color: "#e2e6ec",
                          }}
                        >
                          {s.text}
                        </p>
                        <div className="mt-7 flex flex-wrap items-center gap-4">
                          <Link
                            href={s.href}
                            className="inline-flex items-center gap-2.5 px-7 py-3.5 font-bold transition-all duration-300 hover:-translate-y-0.5"
                            style={{
                              background: "#f5b700",
                              color: "#0d0f14",
                              borderRadius: "4px",
                              fontSize: "0.85rem",
                              letterSpacing: "0.08em",
                              boxShadow: "0 10px 26px rgba(245,183,0,0.35)",
                            }}
                          >
                            Ver programa
                            <ArrowRight size={16} />
                          </Link>
                          <span
                            className="inline-flex items-center px-3.5 py-2 text-[0.72rem] font-bold tracking-[0.1em] text-white"
                            style={{ background: "rgba(255,255,255,0.16)", borderRadius: "999px" }}
                          >
                            {s.meta}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controles laterales (escritorio) */}
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            onMouseEnter={pause}
            onMouseLeave={resume}
            onFocus={pause}
            onBlur={resume}
            aria-label="Slide anterior"
            className="hidden lg:grid place-items-center absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 transition-all duration-300 hover:-translate-y-[calc(50%+2px)]"
            style={{ borderRadius: "50%", border: "1px solid rgba(255,255,255,0.35)", color: "#ffffff", background: "rgba(13,15,20,0.35)", backdropFilter: "blur(6px)" }}
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            onMouseEnter={pause}
            onMouseLeave={resume}
            onFocus={pause}
            onBlur={resume}
            aria-label="Siguiente slide"
            className="hidden lg:grid place-items-center absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 transition-all duration-300 hover:-translate-y-[calc(50%+2px)]"
            style={{ borderRadius: "50%", border: "1px solid rgba(255,255,255,0.35)", color: "#ffffff", background: "rgba(13,15,20,0.35)", backdropFilter: "blur(6px)" }}
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Dots + contador + play */}
        <div className="absolute left-0 right-0 bottom-0 flex items-center justify-between gap-4 px-6 pb-6">
          <div className="flex items-center gap-2.5">
            {SLIDES.map((s, i) => (
              <button
                key={s.key}
                type="button"
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Ir al slide ${i + 1}: ${s.title}`}
                aria-current={i === index}
                className="transition-all duration-300"
                style={{
                  height: 6,
                  width: i === index ? 30 : 12,
                  borderRadius: 999,
                  background: i === index ? "#f5b700" : "rgba(255,255,255,0.45)",
                }}
              />
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => {
                const next = !playing;
                setPlaying(next);
                paused.current = !next;
              }}
              aria-label={playing ? "Pausar rotación automática" : "Reanudar rotación automática"}
              className="grid place-items-center w-10 h-10 transition-all duration-300 hover:-translate-y-0.5"
              style={{
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.35)",
                color: "#ffffff",
                background: "rgba(13,15,20,0.35)",
                backdropFilter: "blur(6px)",
              }}
            >
              {playing ? <Pause size={16} /> : <Play size={16} />}
            </button>
            <span
              className="text-white/80"
              style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.8rem", letterSpacing: "0.1em" }}
            >
              {String(index + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
