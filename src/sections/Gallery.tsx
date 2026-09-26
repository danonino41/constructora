import { useEffect, useRef } from "react";
import { Facebook, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { FB_POSTS, type ReelSlide } from "@/data/content";

function ReelCard({ slide }: { slide: ReelSlide }) {
  return (
    <div className="group h-full bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300" style={{ borderRadius: "12px" }}>
      <a href={slide.url} target="_blank" rel="noopener noreferrer" className="relative block aspect-video overflow-hidden" style={{ background: "#0d0f14" }}>
        <img src={slide.img} alt={slide.title ?? "Publicación de Consorcio Constructor"} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <span className="absolute top-3 left-3 px-2.5 py-1 text-[0.6rem] font-bold tracking-widest" style={{ background: "#f5b700", color: "#0d0f14", fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', borderRadius: "4px" }}>
          PUBLICACIÓN
        </span>
        <span className="absolute bottom-3 right-3 w-9 h-9 flex items-center justify-center rounded-full transition-transform hover:scale-110" style={{ background: "rgba(13,15,20,0.55)" }}>
          <Facebook size={15} style={{ color: "#ffffff" }} />
        </span>
      </a>
      <div className="p-6">
        <h3 className="line-clamp-2" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "1.05rem", color: "#4a4a49", lineHeight: 1.3, letterSpacing: "0.01em" }}>
          {slide.title}
        </h3>
        <p className="mt-3 line-clamp-3" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, fontSize: "0.88rem", color: "#4a4a49", lineHeight: 1.7 }}>
          {slide.text}
        </p>
        <a
          href={slide.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 font-bold transition-all hover:gap-3"
          style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.85rem", letterSpacing: "0.08em", color: "#f5b700" }}
        >
          VER PUBLICACIÓN <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}

export default function ReelsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const paused = useRef(false);

  useEffect(() => {
    if (!emblaApi) return;
    const id = window.setInterval(() => {
      if (!paused.current) emblaApi.scrollNext();
    }, 5000);
    return () => window.clearInterval(id);
  }, [emblaApi]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.75rem", fontWeight: 400, color: "#f5b700", letterSpacing: "0.2em" }}>SÍGUENOS EN FACEBOOK</span>
            <h2 style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "clamp(2.2rem, 4vw, 3.4rem)", color: "#4a4a49", lineHeight: 0.95, marginTop: "0.5rem" }}>
              NUESTRO TRABAJO<br />
              <span style={{ color: "#f5b700" }}>EN IMÁGENES.</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              aria-label="Anterior"
              className="w-11 h-11 flex items-center justify-center border border-gray-300 hover:border-primary hover:bg-primary transition-all duration-300"
              style={{ borderRadius: "8px", background: "#ffffff", color: "#4a4a49" }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              aria-label="Siguiente"
              className="w-11 h-11 flex items-center justify-center border border-gray-300 hover:border-primary hover:bg-primary transition-all duration-300"
              style={{ borderRadius: "8px", background: "#ffffff", color: "#4a4a49" }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div
          className="overflow-hidden"
          ref={emblaRef}
          onMouseEnter={() => (paused.current = true)}
          onMouseLeave={() => (paused.current = false)}
        >
          <div className="flex">
            {FB_POSTS.map((p) => (
              <div key={p.img} className="min-w-0 mr-5 flex-[0_0_100%] sm:flex-[0_0_45%] lg:flex-[0_0_31.5%]">
                <ReelCard slide={p} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}