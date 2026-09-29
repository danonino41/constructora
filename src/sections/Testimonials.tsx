import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/content";

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.75rem", fontWeight: 500, color: "#f5b700", letterSpacing: "0.2em" }}>LO QUE DICEN</span>
          <h2 style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "clamp(2.2rem, 4vw, 3.5rem)", color: "#4a4a49", lineHeight: 0.95, marginTop: "0.5rem" }}>
            NUESTROS CLIENTES
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={14} fill="#f5b700" style={{ color: "#f5b700" }} />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, fontSize: "0.92rem" }}>
                "{t.text}"
              </p>
              <div className="mt-5 pt-5 border-t border-gray-200 flex items-center gap-3.5">
                <div className="overflow-hidden flex-shrink-0" style={{ width: 52, height: 52, borderRadius: "50%", border: "2px solid #f5b700" }}>
                  <img src={t.photo} alt={`Foto de ${t.name}`} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, color: "#4a4a49" }}>{t.name}</div>
                  <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.78rem", color: "#f5b700" }}>{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}