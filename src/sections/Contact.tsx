import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Facebook, CheckCircle, ArrowRight } from "lucide-react";
import { MODELOS } from "@/app/ModelosGaleria.jsx";
import { CONTACT, type ModelItem } from "@/data/content";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "", model: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", phone: "", email: "", message: "", model: "" });
  };

  const inputStyle = {
    background: "#1e2330",
    border: "1px solid rgba(245,183,0,0.15)",
    borderRadius: "2px",
    color: "#f0ece4",
    fontFamily: '"Myriad Pro", "Segoe UI", sans-serif',
    fontWeight: 400,
    fontSize: "0.9rem",
    outline: "none",
    width: "100%",
    padding: "0.75rem 1rem",
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.75rem", fontWeight: 500, color: "#f5b700", letterSpacing: "0.2em" }}>HABLEMOS</span>
            <h2 style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "clamp(2.2rem, 4vw, 3.2rem)", color: "#4a4a49", lineHeight: 0.95, marginTop: "0.5rem" }}>
              TU CASA PROPIA<br />EMPIEZA CON<br />
              <span style={{ color: "#f5b700" }}>UNA LLAMADA.</span>
            </h2>
            <p className="mt-6 text-muted-foreground" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, lineHeight: 1.8, fontSize: "0.95rem" }}>
              Contáctanos hoy y recibe una cotización personalizada sin compromiso. Nuestro equipo te responderá en menos de 24 horas.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center shrink-0" style={{ background: "rgba(245,183,0,0.1)" }}>
                  <Phone size={18} style={{ color: "#f5b700" }} />
                </div>
                <div>
                  <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, color: "#4a4a49", fontSize: "0.95rem" }}>Llámanos</div>
                  <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.85rem", color: "#8a8f9e" }}>993 611 523</div>
                  <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.85rem", color: "#8a8f9e" }}>937 202 783</div>
                  <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.85rem", color: "#8a8f9e" }}>960 989 470</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center shrink-0" style={{ background: "rgba(245,183,0,0.1)" }}>
                  <Mail size={18} style={{ color: "#f5b700" }} />
                </div>
                <div>
                  <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, color: "#4a4a49", fontSize: "0.95rem" }}>Escríbenos</div>
                  <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.85rem", color: "#8a8f9e" }}>{CONTACT.email}</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center shrink-0" style={{ background: "rgba(245,183,0,0.1)" }}>
                  <MapPin size={18} style={{ color: "#f5b700" }} />
                </div>
                <div>
                  <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, color: "#4a4a49", fontSize: "0.95rem" }}>Visítanos</div>
                  <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.85rem", color: "#8a8f9e" }}>Lima: Av. Próceres de Huandoy Mz. C Lt. 13, 3er Piso, Los Olivos</div>
                  <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.85rem", color: "#8a8f9e" }}>Ica: Calle 20 Mz M, Lotes 19, 20 y 21, Urb. Valle Esmeralda, Pueblo Nuevo</div>
                  <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.85rem", color: "#8a8f9e" }}>Lambayeque: Av. Augusto B. Leguía N° 190, Olmos</div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 font-bold text-sm transition-opacity hover:opacity-80"
                style={{ background: "#1877f2", color: "#fff", fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', letterSpacing: "0.05em", borderRadius: "2px" }}
              >
                <Facebook size={16} /> FACEBOOK
              </a>
              <a
                href={CONTACT.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 font-bold text-sm transition-opacity hover:opacity-80"
                style={{ background: "#010101", color: "#fff", fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', letterSpacing: "0.05em", borderRadius: "2px", border: "1px solid #3a3f52" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.65a8.26 8.26 0 0 0 4.83 1.56V6.77a4.85 4.85 0 0 1-1.06-.08z"/></svg>
                TIKTOK
              </a>
            </div>
          </div>

          <div className="p-8 rounded-lg shadow-lg bg-white border border-gray-200">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center gap-4 text-center py-16">
                <CheckCircle size={48} style={{ color: "#f5b700" }} />
                <h3 style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "1.8rem", color: "#f0ece4" }}>¡Mensaje enviado!</h3>
                <p style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', color: "#8a8f9e" }}>Te contactaremos en menos de 24 horas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3 style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "1.4rem", color: "#4a4a49", marginBottom: "0.5rem" }}>
                  FORMULARIO DE COTIZACIÓN
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.75rem", fontWeight: 400, color: "#8a8f9e", letterSpacing: "0.1em" }}>NOMBRE *</label>
                    <input required style={inputStyle} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Tu nombre" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.75rem", fontWeight: 400, color: "#8a8f9e", letterSpacing: "0.1em" }}>TELÉFONO *</label>
                    <input required style={inputStyle} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Tu teléfono" />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.75rem", fontWeight: 400, color: "#8a8f9e", letterSpacing: "0.1em" }}>CORREO ELECTRÓNICO</label>
                  <input style={inputStyle} type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="tucorreo@email.com" />
                </div>
                <div className="flex flex-col gap-1">
                  <label style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.75rem", fontWeight: 400, color: "#8a8f9e", letterSpacing: "0.1em" }}>MODELO DE INTERÉS</label>
                  <select
                    style={{ ...inputStyle, cursor: "pointer" }}
                    value={form.model}
                    onChange={(e) => setForm({ ...form, model: e.target.value })}
                  >
                    <option value="">Selecciona un modelo</option>
                    {(MODELOS as ModelItem[]).filter((p) => !p.kind).map((p) => <option key={p.name} value={p.name}>{p.name} — {p.area}</option>)}
                    <option value="otro">Otro / No sé aún</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.75rem", fontWeight: 400, color: "#8a8f9e", letterSpacing: "0.1em" }}>MENSAJE</label>
                  <textarea
                    rows={4}
                    style={{ ...inputStyle, resize: "vertical" }}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Cuéntanos más sobre tu proyecto..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 font-bold transition-opacity hover:opacity-90 flex items-center justify-center gap-2 mt-2"
                  style={{ background: "#f5b700", color: "#0d0f14", fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "1rem", letterSpacing: "0.1em", borderRadius: "2px" }}
                >
                  ENVIAR COTIZACIÓN <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}