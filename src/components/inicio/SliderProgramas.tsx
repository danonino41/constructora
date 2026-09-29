import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Pause, Play, ArrowRight } from "lucide-react";

import casaTechoPropio from "@/imports/casa terminada en color amarillo de un piso desde el frontal.jpeg";
import obraRefuerzo from "@/imports/evidencia-avance.jpg";
import casaTerminada from "@/imports/casa terminada en color amarillo con la puerta abierta.jpeg";

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
    img: casaTechoPropio,
    alt: "Vivienda Techo Propio terminada y lista para habitar",
    tag: "PROGRAMA 01",
    title: "Techo Propio",
    text: "Bono Familiar Habitacional que no se devuelve para construir en tu terreno o comprar tu vivienda.",
    meta: "Bono Familiar Habitacional",
    href: "/programas/techo-propio",
  },
  {
    key: "reforzamiento",
    img: obraRefuerzo,
    alt: "Obra de reforzamiento estructural en vivienda existente",
    tag: "PROGRAMA 02",
    title: "Bono de Reforzamiento Estructural",
    text: "Subsidio no reembolsable para reforzar viviendas vulnerables a riesgos sísmicos.",
    meta: "Subsidio BPVVRS",
    href: "/programas/reforzamiento",
  },
  {
    key: "credito-mivivienda",
    img: casaTerminada,
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
    <section id="programas-destacados" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <span
              style={{
                fontFamily: '"Myriad Pro", "Segoe UI", sans-serif',
                fontSize: "0.72rem",
                fontWeight: 700,
                color: "#b58900",
                letterSpacing: "0.2em",
              }}
            >
              PROGRAMAS DISPONIBLES
            </span>
            <h2
              className="mt-2"
              style={{
                fontFamily: '"Myriad Pro", "Segoe UI", sans-serif',
                fontWeight: 700,
                fontSize: "clamp(1.5rem, 2.6vw, 2.1rem)",
                lineHeight: 1.05,
                color: "#3d3d3c",
              }}
            >
              Elige el programa que corresponde a tu caso
            </h2>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              onMouseEnter={pause}
              onMouseLeave={resume}
              onFocus={pause}
              onBlur={resume}
              aria-label="Slide anterior"
              className="grid place-items-center w-11 h-11 transition-all duration-300 hover:-translate-y-0.5"
              style={{ borderRadius: "50%", border: "1px solid #e5e5e5", color: "#173B66", background: "#ffffff" }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              onMouseEnter={pause}
              onMouseLeave={resume}
              onFocus={pause}
              onBlur={resume}
              aria-label="Siguiente slide"
              className="grid place-items-center w-11 h-11 transition-all duration-300 hover:-translate-y-0.5"
              style={{ borderRadius: "50%", border: "1px solid #e5e5e5", color: "#173B66", background: "#ffffff" }}
            >
              <ChevronRight size={20} />
            </button>
            <button
              type="button"
              onClick={() => {
                const next = !playing;
                setPlaying(next);
                paused.current = !next;
              }}
              aria-label={playing ? "Pausar rotación automática" : "Reanudar rotación automática"}
              className="grid place-items-center w-11 h-11 transition-all duration-300 hover:-translate-y-0.5"
              style={{
                borderRadius: "50%",
                border: "1px solid #e5e5e5",
                color: playing ? "#173B66" : "#b58900",
                background: "#ffffff",
              }}
            >
              {playing ? <Pause size={18} /> : <Play size={18} />}
            </button>
          </div>
        </div>

        <div
          className="relative overflow-hidden"
          onMouseEnter={pause}
          onMouseLeave={resume}
          style={{ borderRadius: "16px", boxShadow: "0 22px 50px rgba(23,32,46,0.16)" }}
        >
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex touch-pan-y">
              {SLIDES.map((s) => (
                <div key={s.key} className="relative min-w-0 flex-[0_0_100%]">
                  <div style={{ aspectRatio: "16 / 9" }} className="w-full">
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
                        "linear-gradient(90deg, rgba(9,10,14,0.86) 0%, rgba(9,10,14,0.62) 42%, rgba(9,10,14,0.15) 100%)",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full max-w-7xl mx-auto px-6">
                      <div className="max-w-xl" key={s.key}>
                        <span
                          className="inline-block px-3 py-1.5 text-[0.65rem] font-bold tracking-[0.18em] text-[#0d0f14]"
                          style={{ background: "#f5b700", borderRadius: "3px" }}
                        >
                          {s.tag}
                        </span>
                        <h3
                          className="mt-4 text-white"
                          style={{
                            fontFamily: '"Myriad Pro", "Segoe UI", sans-serif',
                            fontWeight: 700,
                            fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                            lineHeight: 1.05,
                          }}
                        >
                          {s.title}
                        </h3>
                        <p
                          className="mt-3.5"
                          style={{
                            fontFamily: '"Myriad Pro", "Segoe UI", sans-serif',
                            fontWeight: 400,
                            fontSize: "0.98rem",
                            lineHeight: 1.6,
                            color: "#e2e6ec",
                          }}
                        >
                          {s.text}
                        </p>
                        <div className="mt-6 flex flex-wrap items-center gap-4">
                          <Link
                            to={s.href}
                            className="inline-flex items-center gap-2.5 px-6 py-3 font-bold transition-all duration-300 hover:-translate-y-0.5"
                            style={{
                              background: "#ffffff",
                              color: "#173B66",
                              borderRadius: "4px",
                              fontSize: "0.85rem",
                              letterSpacing: "0.08em",
                            }}
                          >
                            Ver programa
                            <ArrowRight size={16} />
                          </Link>
                          <span
                            className="inline-flex items-center px-3 py-1.5 text-[0.72rem] font-bold tracking-[0.1em] text-white"
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

          {/* Dots + contador */}
          <div className="absolute left-0 right-0 bottom-0 flex items-center justify-between gap-4 px-6 pb-5">
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
