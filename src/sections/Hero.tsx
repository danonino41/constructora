import { BadgeCheck, Phone } from "lucide-react";
import { STATS } from "@/data/content";
import heroBg from "@/imports/VIDEO_RECORRIDO_3D.mp4";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <video
          src={heroBg}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/75" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col justify-center py-28 lg:py-0">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 border border-primary/30 px-3 py-1 mb-6 bg-white/10 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.75rem", fontWeight: 500, color: "#f5b700", letterSpacing: "0.15em" }}>
              CONSTRUCTORA LÍDER EN PERÚ
            </span>
          </div>

          <h1 className="leading-tight" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "clamp(2.15rem, 4.2vw, 3.8rem)", color: "#ffffff", letterSpacing: "-0.01em", textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
            ¿ESTÁS LISTO PARA<br />
            CONSTRUIR<br />
            <span style={{ color: "#ffc93a" }}>TU HOGAR IDEAL?</span>
          </h1>

          <p className="mt-6 max-w-xl" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, fontSize: "1.05rem", lineHeight: 1.8, color: "#f1f5fb" }}>
            Cuéntanos tu situación en menos de 1 minuto y descubre qué programa te corresponde, tu modelo ideal y si calificas. Asesoría gratuita y sin compromiso.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-9">
            <a href="#requisitos" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-bold transition-all hover:opacity-90 hover:scale-105" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "1.05rem", letterSpacing: "0.08em", borderRadius: "2px" }}>
              <BadgeCheck size={20} />
              QUIERO SABER SI CALIFICO
            </a>
            <a href="#contacto" className="inline-flex items-center justify-center gap-2 border-2 border-white px-8 py-4 font-bold text-white hover:bg-white hover:text-primary transition-all" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "1.05rem", letterSpacing: "0.08em", borderRadius: "2px" }}>
              <Phone size={18} />
              HABLAR CON UN ASESOR
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/20 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "2rem", color: "#f5b700", lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.8rem", color: "#ffffff", lineHeight: 1.4, opacity: 0.9 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}