import { ArrowRight } from "lucide-react";
import heroBg from "@/imports/VIDEO_RECORRIDO_3D.mp4";

export default function VideoTour() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.75rem", fontWeight: 400, color: "#f5b700", letterSpacing: "0.2em" }}>RECORRIDO VIRTUAL</span>
            <h2 style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "clamp(2.2rem, 4vw, 3.2rem)", color: "#4a4a49", lineHeight: 0.95, marginTop: "0.5rem" }}>
              CONOCE TU<br />FUTURA CASA<br />
              <span style={{ color: "#f5b700" }}>EN 3D.</span>
            </h2>
            <p className="mt-6 text-gray-600" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, lineHeight: 1.8, fontSize: "0.95rem" }}>
              Antes de construir, te mostramos cada rincón de tu vivienda con un recorrido 3D completo. Visualiza los espacios, los acabados y la distribución exacta del modelo que elijas.
            </p>
            <a
              href="#contacto"
              className="mt-8 inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-bold transition-all hover:opacity-90 hover:scale-105"
              style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "1rem", letterSpacing: "0.1em", borderRadius: "8px" }}
            >
              QUIERO MI RECORRIDO <ArrowRight size={18} className="transition-transform" />
            </a>
          </div>
          <div className="relative overflow-hidden shadow-xl" style={{ borderRadius: "12px", border: "1px solid #e5e5e5" }}>
            <video
              src={heroBg}
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full"
              style={{ display: "block" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}