import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import casa2pisos from "@/imports/casa de 2 pisos terminada.jpeg";
import casaAmarilla from "@/imports/casa terminada en color amarillo .jpeg";
import casaPuerta from "@/imports/casa terminada en color amarillo con la puerta abierta.jpeg";
import casaInterior from "@/imports/casa interior .jpeg";
import evidenciaCambio from "@/imports/evidencia-cambio.jpg";

const SLIDES = [
  {
    img: casaAmarilla,
    label: "Casa amarilla",
    tag: "PROYECTO ENTREGADO",
    title: "Casa terminada de un piso",
    text: "Acabados en color amarillo, entrega completa y lista para habitar.",
  },
  {
    img: casa2pisos,
    label: "Casa de 2 pisos",
    tag: "PROYECTO ENTREGADO",
    title: "Casa de 2 pisos terminada",
    text: "Estructura de dos niveles con fachada y acabados finalizados.",
  },
  {
    img: evidenciaCambio,
    label: "Antes y después",
    tag: "LA TRANSFORMACIÓN",
    title: "Antes y después",
    text: "Viviendas transformadas por completo con el refuerzo estructural.",
  },
  {
    img: casaInterior,
    label: "Interior terminado",
    tag: "ACABADOS",
    title: "Interior llave en mano",
    text: "Baños, paredes y acabados interiores entregados al detalle.",
  },
  {
    img: casaPuerta,
    label: "Entrega de llaves",
    tag: "ENTREGA",
    title: "Tu llave, tu hogar",
    text: "Proyecto culminado y llaves entregadas al propietario.",
  },
];

export default function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const paused = useRef(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    const id = window.setInterval(() => {
      if (!paused.current) emblaApi.scrollNext();
    }, 7000);
    return () => {
      window.clearInterval(id);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const go = (dir: 1 | -1) => {
    if (!emblaApi) return;
    if (dir === 1) emblaApi.scrollNext();
    else emblaApi.scrollPrev();
  };

  const current = SLIDES[index];

  return (
    <section id="inicio" className="relative min-h-screen flex flex-col overflow-hidden">
      <div
        className="absolute inset-0 overflow-hidden"
        ref={emblaRef}
        onMouseEnter={() => (paused.current = true)}
        onMouseLeave={() => (paused.current = false)}
      >
        <div className="flex h-full">
          {SLIDES.map((s, i) => (
            <div key={i} className="relative min-w-0 flex-[0_0_100%] h-full">
              <img
                src={s.img}
                alt={s.label}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={i === 0 ? "high" : undefined}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(9,10,14,0.7) 0%, rgba(9,10,14,0.4) 38%, rgba(9,10,14,0.08) 68%, transparent 100%)" }} />
      </div>

      <button
        aria-label="Slide anterior"
        onClick={() => go(-1)}
        className="hidden md:flex absolute left-5 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-11 h-11 transition-all hover:scale-110"
        style={{ borderRadius: "50%", border: "1px solid rgba(255,255,255,0.3)", color: "#ffffff", background: "rgba(13,15,20,0.2)", backdropFilter: "blur(4px)" }}
      >
        <ChevronLeft size={20} />
      </button>
      <button
        aria-label="Siguiente slide"
        onClick={() => go(1)}
        className="hidden md:flex absolute right-5 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-11 h-11 transition-all hover:scale-110"
        style={{ borderRadius: "50%", border: "1px solid rgba(255,255,255,0.3)", color: "#ffffff", background: "rgba(13,15,20,0.2)", backdropFilter: "blur(4px)" }}
      >
        <ChevronRight size={20} />
      </button>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex-1 flex items-center py-24">
        <div key={index} className="max-w-xl" style={{ animation: "heroFade 0.6s ease" }}>
          <span className="inline-flex items-center gap-2 px-2.5 py-1 text-[0.7rem] font-bold tracking-widest" style={{ background: "rgba(13,15,20,0.55)", color: "#f5b700", borderRadius: "3px", fontFamily: '"Myriad Pro", "Segoe UI", sans-serif' }}>
            {current.tag}
          </span>
          <h1 className="leading-[0.98] mt-4" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "clamp(2.2rem, 4.4vw, 4rem)", color: "#ffffff", letterSpacing: "-0.01em" }}>
            {current.title}
          </h1>
          <p className="mt-5 max-w-sm" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, fontSize: "1rem", lineHeight: 1.7, color: "#e8ebf0" }}>
            {current.text}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/proyectos"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-3.5 font-bold transition-all hover:opacity-90 hover:scale-105"
              style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.95rem", letterSpacing: "0.08em", borderRadius: "2px" }}
            >
              VER PROYECTOS
            </Link>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-3 px-7 py-3.5 font-bold transition-all hover:bg-white/10"
              style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.95rem", letterSpacing: "0.08em", color: "#ffffff", borderRadius: "2px", border: "1px solid rgba(255,255,255,0.6)" }}
            >
              COTIZAR AHORA
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-10 px-6 pb-7 w-full">
        <div className="max-w-7xl mx-auto flex flex-wrap items-end justify-between gap-4 border-t border-white/20 pt-5">
          <div className="flex items-center gap-6 overflow-x-auto">
            {SLIDES.map((s, i) => (
              <button
                key={s.label}
                onClick={() => emblaApi?.scrollTo(i)}
                className="shrink-0 text-left"
                style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif' }}
              >
                <span className="block h-0.5 transition-all duration-300" style={{ width: i === index ? 34 : 18, background: i === index ? "#f5b700" : "rgba(255,255,255,0.35)" }} />
                <span className="mt-2 block text-[0.8rem] transition-colors duration-200" style={{ color: i === index ? "#ffffff" : "rgba(255,255,255,0.65)", fontWeight: i === index ? 700 : 400, letterSpacing: "0.02em" }}>
                  {s.label}
                </span>
              </button>
            ))}
          </div>
          <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.8rem", color: "rgba(255,255,255,0.75)", letterSpacing: "0.06em" }}>
            {String(index + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      <style>{`@keyframes heroFade { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </section>
  );
}