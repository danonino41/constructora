import { SERVICES } from "@/data/content";

export default function Services() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.75rem", fontWeight: 400, color: "#f5b700", letterSpacing: "0.2em" }}>LO QUE HACEMOS</span>
          <h2 style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "clamp(2.2rem, 4vw, 3.5rem)", color: "#4a4a49", lineHeight: 0.95, marginTop: "0.5rem" }}>
            NUESTROS SERVICIOS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className="p-6 group hover:shadow-lg transition-all duration-300 bg-white border border-gray-200 hover:border-primary/30"
              style={{ borderRadius: "8px" }}
            >
              <div className="w-12 h-12 mb-5 flex items-center justify-center bg-yellow-50 rounded-lg">
                <s.icon size={22} style={{ color: "#f5b700" }} />
              </div>
              <h3 style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "1.1rem", color: "#4a4a49", letterSpacing: "0.02em", marginBottom: "0.5rem" }}>
                {s.title}
              </h3>
              <p style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, fontSize: "0.88rem", color: "#4a4a49", lineHeight: 1.7 }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}