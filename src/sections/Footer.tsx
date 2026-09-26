import { Facebook, Users } from "lucide-react";
import { NAV_LINKS, CONTACT } from "@/data/content";
import logo from "@/imports/logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Consorcio Constructor" className="h-10 w-auto" />
            </div>
            <p style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, fontSize: "0.85rem", color: "#4a4a49", lineHeight: 1.7 }}>
              Construyendo el Perú de hoy para las familias del mañana. Calidad, compromiso y confianza en cada proyecto.
            </p>
          </div>

          <div>
            <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, color: "#4a4a49", letterSpacing: "0.1em", marginBottom: "1rem", fontSize: "0.85rem" }}>NAVEGACIÓN</div>
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((l) => (
                <a key={l.label} href={l.href} className="text-gray-600 hover:text-primary transition-colors" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.85rem" }}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, color: "#4a4a49", letterSpacing: "0.1em", marginBottom: "1rem", fontSize: "0.85rem" }}>CONTACTO</div>
            <div className="flex flex-col gap-2">
              <span className="text-gray-600" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.85rem" }}>consorcioconstructormkt@gmail.com</span>
              <span className="text-gray-600" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.85rem" }}>+51 987 654 321</span>
              <span className="text-gray-600" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.85rem" }}>Lima, Perú</span>
              <div className="flex gap-3 mt-3">
                <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-600 hover:text-primary transition-colors">
                  <Facebook size={18} />
                </a>
                <a href={CONTACT.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-gray-600 hover:text-primary transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.65a8.26 8.26 0 0 0 4.83 1.56V6.77a4.85 4.85 0 0 1-1.06-.08z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="text-gray-600" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.78rem" }}>
            © 2025 Consorcio Constructor. Todos los derechos reservados.
          </span>
          <div className="flex items-center gap-2">
            <Users size={14} className="text-primary" />
            <span className="text-gray-600" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.78rem" }}>Más de 150 familias confían en nosotros</span>
          </div>
        </div>
      </div>
    </footer>
  );
}