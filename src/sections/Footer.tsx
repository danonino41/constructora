import { Link } from "react-router";
import { Facebook, MapPin, MessageCircle, Phone, Users } from "lucide-react";
import { NAV_LINKS, CONTACT } from "@/data/content";
import logo from "@/imports/logo.png";

const FOOTER_PROGRAMS = [
  { label: "Crédito MiVivienda", href: "/programas/credito-mivivienda" },
  { label: "Programa Techo Propio", href: "/programas/techo-propio" },
  { label: "Bono de Reforzamiento Estructural", href: "/programas/reforzamiento" },
];

export default function Footer() {
  return (
    <footer className="bg-white" style={{ borderTop: "1px solid #eceae4" }}>
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Consorcio Constructor" className="h-12 w-auto" />
            </Link>
            <p className="mt-4" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, fontSize: "0.85rem", color: "#6b7480", lineHeight: 1.7 }}>
              Construyendo viviendas sociales llave en mano con el respaldo de los programas del MVCS.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid place-items-center w-9 h-9 transition-all hover:opacity-80" style={{ borderRadius: "50%", background: "#f8f8f8", color: "#4a4a49", border: "1px solid #eceae4" }}>
                <Facebook size={16} />
              </a>
              <a href={CONTACT.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="grid place-items-center w-9 h-9 transition-all hover:opacity-80" style={{ borderRadius: "50%", background: "#f8f8f8", color: "#4a4a49", border: "1px solid #eceae4" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.65a8.26 8.26 0 0 0 4.83 1.56V6.77a4.85 4.85 0 0 1-1.06-.08z"/></svg>
              </a>
              <a href="https://wa.me/51993611523" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="grid place-items-center w-9 h-9 transition-all hover:opacity-80" style={{ borderRadius: "50%", background: "#f8f8f8", color: "#4a4a49", border: "1px solid #eceae4" }}>
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          <div>
            <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, color: "#4a4a49", letterSpacing: "0.1em", marginBottom: "1rem", fontSize: "0.85rem" }}>PROGRAMAS</div>
            <div className="flex flex-col gap-2.5">
              {FOOTER_PROGRAMS.map((p) => (
                <Link key={p.label} to={p.href} className="transition-colors hover:text-primary" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.85rem", color: "#6b7480" }}>
                  {p.label}
                </Link>
              ))}
              <Link to="/programas" className="transition-colors hover:text-primary" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.85rem", color: "#173B66", fontWeight: 600 }}>
                Ver todos los programas →
              </Link>
            </div>
          </div>

          <div>
            <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, color: "#4a4a49", letterSpacing: "0.1em", marginBottom: "1rem", fontSize: "0.85rem" }}>EXPLORA</div>
            <div className="flex flex-col gap-2.5">
              {NAV_LINKS.filter((l) => l.label !== "Programas").map((l) => (
                <Link key={l.label} to={l.href} className="transition-colors hover:text-primary" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.85rem", color: "#6b7480" }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, color: "#4a4a49", letterSpacing: "0.1em", marginBottom: "1rem", fontSize: "0.85rem" }}>ATENCIÓN</div>
            <div className="flex flex-col gap-2.5">
              {CONTACT.sedes.map((s) => (
                <a key={s.city} href={s.map} target="_blank" rel="noopener noreferrer" className="flex gap-2.5 transition-colors hover:text-primary" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.82rem", color: "#6b7480", lineHeight: 1.5 }}>
                  <MapPin size={15} style={{ color: "#f5b700", flexShrink: 0, marginTop: "2px" }} />
                  <span>
                    <b style={{ color: "#4a4a49" }}>{s.city}</b> · {s.address}
                  </span>
                </a>
              ))}
              <a href="https://wa.me/51993611523" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 transition-colors hover:text-primary" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.85rem", color: "#6b7480" }}>
                <MessageCircle size={15} style={{ color: "#f5b700", flexShrink: 0 }} /> {CONTACT.phones.join(" · ")}
              </a>
              <a href="mailto:contacto@consorcioconstructor.com" className="transition-colors hover:text-primary" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.82rem", color: "#6b7480" }}>
                contacto@consorcioconstructor.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: "#173B66" }}>
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="text-center md:text-left">
            <div className="text-white" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "1.05rem" }}>
              ¿NECESITAS MÁS ORIENTACIÓN SOBRE NUESTROS PROGRAMAS?
            </div>
            <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, fontSize: "0.85rem", color: "#dfe6f0", marginTop: "0.25rem" }}>
              Escríbenos y un asesor te atiende sin compromiso.
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a href="https://wa.me/51993611523" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-bold transition-all hover:opacity-90" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.9rem", letterSpacing: "0.06em", borderRadius: "3px" }}>
              <MessageCircle size={16} /> ESCRIBENOS POR WHATSAPP
            </a>
            <Link to="/contacto" className="inline-flex items-center gap-2 px-6 py-3 font-bold transition-all hover:bg-white/10" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.9rem", letterSpacing: "0.06em", color: "#ffffff", borderRadius: "3px", border: "1px solid rgba(255,255,255,0.6)" }}>
              <Phone size={16} /> CONTACTO
            </Link>
          </div>
        </div>
      </div>

      <div style={{ background: "#0d0f14" }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.76rem", color: "#98a1ad" }}>
            © 2026 Consorcio Constructor — Av. Próceres de Huandoy Mz. C Lt. 13, 3er Piso, Los Olivos · Lima, Perú
          </span>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.76rem", color: "#6b7480" }}>
              Soluciones de vivienda alineadas al MVCS · <a className="hover:opacity-80" style={{ color: "#f5b700" }} href="https://www.mivivienda.com.pe" target="_blank" rel="noopener noreferrer">mivivienda.com.pe</a> · <a className="hover:opacity-80" style={{ color: "#f5b700" }} href="https://www.gob.pe/mvcs" target="_blank" rel="noopener noreferrer">gob.pe/mvcs</a>
            </span>
            <span className="flex items-center gap-2" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.76rem", color: "#6b7480" }}>
              <Users size={13} style={{ color: "#f5b700" }} /> Más de 150 familias confían en nosotros
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}