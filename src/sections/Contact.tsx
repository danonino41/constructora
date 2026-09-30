import { useEffect, useRef, useState, type FormEvent } from "react";
import { Mail, MapPin, Facebook, Send, ShieldCheck, ChevronDown, RotateCcw } from "lucide-react";
import { CONTACT } from "@/data/content";
import WhatsAppIcon from "@/components/WhatsAppIcon";

/* ============================================================
   CONTACTO
   Objetivo: que pedir asesoría sea fácil e inmediato.
   - Formulario corto: solo el nombre se escribe; el resto es de un clic
   - El mensaje se redacta solo y la persona puede editarlo antes de enviar
   - Envío por WhatsApp (principal) o por correo (alternativa formal),
     ambos con el mensaje ya redactado (enlaces wa.me y mailto, sin API)
   ============================================================ */

const FONT = '"Myriad Pro", "Segoe UI", sans-serif';

/** Número principal que recibe las solicitudes del formulario. */
const WHATSAPP_PRINCIPAL = CONTACT.phones[0];

/** "993 611 523" -> "https://wa.me/51993611523" (+ texto opcional) */
const waLink = (phone: string, text?: string) =>
  `https://wa.me/51${phone.replace(/\s/g, "")}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

const PROGRAMAS = [
  { value: "techo-propio", label: "Techo Propio", frase: "el programa Techo Propio" },
  { value: "reforzamiento", label: "Bono de Reforzamiento", frase: "el Bono de Reforzamiento Estructural" },
  { value: "mivivienda", label: "Crédito MiVivienda", frase: "el Nuevo Crédito MiVivienda" },
  { value: "no-seguro", label: "No estoy seguro", frase: "" },
];

type Necesidad = { value: string; label: string; frase: string };

/**
 * "¿Qué necesitas?" depende del programa elegido, para evitar combinaciones incoherentes
 * (por ejemplo, Techo Propio + reforzar). `frase` es el texto que se agrega al mensaje.
 * El Bono de Reforzamiento no tiene esta pregunta: el programa ya indica la necesidad.
 */
const NECESIDADES: Record<string, Necesidad[]> = {
  "techo-propio": [
    { value: "construir", label: "Construir en mi terreno", frase: "para construir en mi terreno" },
    { value: "comprar", label: "Comprar una vivienda", frase: "para comprar una vivienda" },
    { value: "mejorar", label: "Mejorar mi casa", frase: "para mejorar mi casa" },
  ],
  mivivienda: [
    { value: "comprar", label: "Comprar una vivienda nueva", frase: "para comprar una vivienda nueva" },
    { value: "construir", label: "Construir en mi terreno", frase: "para construir en mi terreno" },
  ],
  "no-seguro": [
    { value: "terreno", label: "Tengo terreno", frase: "Tengo terreno" },
    { value: "sin-terreno", label: "No tengo terreno", frase: "Aún no tengo terreno" },
    { value: "casa", label: "Ya tengo casa (reforzar o mejorar)", frase: "Ya tengo casa y necesito reforzarla o mejorarla" },
  ],
};

/** Sedes con oficina + "Otro" (abre la lista del resto de departamentos). */
const UBICACIONES = [
  { value: "Lima", label: "Lima" },
  { value: "Ica", label: "Ica" },
  { value: "Lambayeque", label: "Lambayeque" },
  { value: "otro", label: "Otro" },
];

/** Resto de departamentos del Perú (y Callao), en orden alfabético. */
const OTROS_DEPARTAMENTOS = [
  "Amazonas", "Áncash", "Apurímac", "Arequipa", "Ayacucho", "Cajamarca", "Callao", "Cusco",
  "Huancavelica", "Huánuco", "Junín", "La Libertad", "Loreto", "Madre de Dios", "Moquegua",
  "Pasco", "Piura", "Puno", "San Martín", "Tacna", "Tumbes", "Ucayali",
];

type FormState = { name: string; email: string; programa: string; necesidad: string; ubicacion: string; otroLugar: string };

const EMPTY: FormState = { name: "", email: "", programa: "", necesidad: "", ubicacion: "", otroLugar: "" };

/**
 * Arma el mensaje automático a partir de lo que la persona eligió.
 * Estructura: saludo (con el lugar) + una oración sobre el programa + cierre.
 * Ej.: "Hola, mi nombre es Kris y soy de Lambayeque. Me interesa el programa Techo Propio
 *       para construir en mi terreno. Quisiera recibir información."
 */
function buildMessage(f: FormState) {
  const nombre = f.name.trim() || "[tu nombre]";
  const programa = PROGRAMAS.find((p) => p.value === f.programa);
  const necesidad = (NECESIDADES[f.programa] ?? []).find((n) => n.value === f.necesidad);
  const lugar = f.ubicacion === "otro" ? f.otroLugar : f.ubicacion;

  let texto = lugar ? `Hola, mi nombre es ${nombre} y soy de ${lugar}.` : `Hola, mi nombre es ${nombre}.`;

  if (!programa) {
    texto += " Quisiera recibir información.";
  } else if (programa.value === "no-seguro") {
    const orientacion = "que me orienten sobre qué programa de vivienda me conviene.";
    if (!necesidad) texto += ` Quisiera ${orientacion}`;
    // Evita dos "y" seguidas: si la frase ya tiene una, se separa en otra oración
    else if (necesidad.frase.includes(" y ")) texto += ` ${necesidad.frase}. Quisiera ${orientacion}`;
    else texto += ` ${necesidad.frase} y quisiera ${orientacion}`;
  } else {
    const detalle = programa.value === "reforzamiento" ? " para mi casa" : necesidad ? ` ${necesidad.frase}` : "";
    texto += ` Me interesa ${programa.frase}${detalle}. Quisiera recibir información.`;
  }

  if (f.email.trim()) texto += `\n\nMi correo: ${f.email.trim()}`;
  texto += "\n\n¡Gracias!";
  return texto;
}

function Chips({
  options,
  value,
  onChange,
  name,
}: {
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
  name: string;
}) {
  return (
    <div className="flex flex-wrap gap-2" role="radiogroup" aria-label={name}>
      {options.map((o) => {
        const active = value === o.value;
        return (
          <button
            key={o.value}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(active ? "" : o.value)}
            className="px-4 py-2 text-sm transition-all duration-200 hover:border-[#f5b700]"
            style={{
              fontFamily: FONT,
              fontWeight: active ? 700 : 400,
              borderRadius: "999px",
              border: `1.5px solid ${active ? "#f5b700" : "#e5e5e5"}`,
              background: active ? "#f5b700" : "#ffffff",
              color: active ? "#0d0f14" : "#4a4a49",
            }}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

/** Lista desplegable compacta: muestra ~6 opciones y se recorre con scroll. */
function DepartamentoSelect({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!boxRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={boxRef} className="relative w-full sm:w-60">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Elige tu departamento"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-2 px-4 py-2 text-sm transition-all bg-white"
        style={{
          fontFamily: FONT,
          color: value ? "#4a4a49" : "#8a8a88",
          fontWeight: value ? 700 : 400,
          borderRadius: "999px",
          border: `1.5px solid ${open || value ? "#f5b700" : "#e5e5e5"}`,
        }}
      >
        {value || "Elige tu departamento"}
        <ChevronDown size={16} className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} style={{ color: "#b58900" }} />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Departamentos"
          className="absolute z-20 left-0 right-0 mt-1.5 py-1.5 bg-white overflow-y-auto"
          style={{ maxHeight: "13.5rem", borderRadius: "10px", border: "1px solid #e5e5e5", boxShadow: "0 12px 30px rgba(0,0,0,0.12)" }}
        >
          {OTROS_DEPARTAMENTOS.map((d) => {
            const active = d === value;
            return (
              <li key={d} role="option" aria-selected={active}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(d);
                    setOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm transition-colors hover:bg-[#fdf6dc]"
                  style={{ fontFamily: FONT, color: "#4a4a49", fontWeight: active ? 700 : 400, background: active ? "#fdf1c4" : undefined }}
                >
                  {d}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

const labelStyle = { fontFamily: FONT, fontSize: "0.75rem", fontWeight: 700, color: "#4a4a49", letterSpacing: "0.1em" } as const;

const inputClass =
  "w-full bg-white px-4 py-3 outline-none transition-all border border-gray-300 focus:border-[#f5b700] focus:ring-2 focus:ring-[#f5b700]/25";
const inputStyle = { fontFamily: FONT, fontSize: "0.95rem", color: "#4a4a49", borderRadius: "6px" } as const;

/** Botones de redes: se elevan y brillan con el color de cada red al pasar el mouse. */
const socialClass =
  "flex items-center gap-2 px-4 py-2.5 font-bold text-sm transition-all duration-300 hover:-translate-y-0.5";

export default function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY);
  // El mensaje se escribe solo (modo automático) hasta que la persona lo edita a mano
  const [autoMensaje, setAutoMensaje] = useState(true);
  const [mensajeEditado, setMensajeEditado] = useState("");
  const [aviso, setAviso] = useState<"" | "whatsapp" | "correo">("");
  const formRef = useRef<HTMLFormElement>(null);

  const mensaje = autoMensaje ? buildMessage(form) : mensajeEditado;
  const programaLabel = PROGRAMAS.find((p) => p.value === form.programa && p.value !== "no-seguro")?.label;

  // Botón principal (submit): abre WhatsApp con el mensaje escrito
  const enviarWhatsApp = (e: FormEvent) => {
    e.preventDefault();
    window.open(waLink(WHATSAPP_PRINCIPAL, mensaje), "_blank", "noopener,noreferrer");
    setAviso("whatsapp");
  };

  // Alternativa formal: abre la app de correo de la persona con todo listo
  const enviarCorreo = () => {
    if (!formRef.current?.reportValidity()) return;
    const asunto = `Solicitud de información${programaLabel ? ` – ${programaLabel}` : ""} – Consorcio Constructor`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(mensaje.replace(/\n/g, "\r\n"))}`;
    setAviso("correo");
  };

  const set = (key: keyof FormState) => (v: string) => {
    setAviso("");
    setForm((f) => ({
      ...f,
      [key]: v,
      ...(key === "programa" ? { necesidad: "" } : {}),
      ...(key === "ubicacion" && v !== "otro" ? { otroLugar: "" } : {}),
    }));
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* ---------- Columna izquierda: mensaje + datos de contacto ---------- */}
          <div>
            <span style={{ fontFamily: FONT, fontSize: "0.75rem", fontWeight: 500, color: "#f5b700", letterSpacing: "0.2em" }}>HABLEMOS</span>
            <h2 style={{ fontFamily: FONT, fontWeight: 700, fontSize: "clamp(2.2rem, 4vw, 3.2rem)", color: "#4a4a49", lineHeight: 0.95, marginTop: "0.5rem" }}>
              TU CASA PROPIA<br />EMPIEZA CON<br />
              <span style={{ color: "#f5b700" }}>UNA LLAMADA.</span>
            </h2>
            <p className="mt-6 text-muted-foreground" style={{ fontFamily: FONT, fontWeight: 400, lineHeight: 1.8, fontSize: "0.95rem" }}>
              Pedir asesoría es gratis y toma menos de un minuto. Cuéntanos qué necesitas y un asesor te orienta sin compromiso.
            </p>

            {/* Datos de contacto */}
            <div className="mt-10 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center shrink-0" style={{ background: "rgba(245,183,0,0.1)" }}>
                  <WhatsAppIcon size={18} style={{ color: "#f5b700" }} />
                </div>
                <div>
                  <div style={{ fontFamily: FONT, fontWeight: 700, color: "#4a4a49", fontSize: "0.95rem" }}>WhatsApp</div>
                  <div className="flex flex-col gap-0.5 mt-0.5">
                    {CONTACT.phones.map((p) => (
                      <a
                        key={p}
                        href={waLink(p)}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Escribir por WhatsApp al ${p}`}
                        className="transition-colors hover:text-[#b58900]"
                        style={{ fontFamily: FONT, fontSize: "0.9rem", color: "#6b7480" }}
                      >
                        {p}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center shrink-0" style={{ background: "rgba(245,183,0,0.1)" }}>
                  <Mail size={18} style={{ color: "#f5b700" }} />
                </div>
                <div>
                  <div style={{ fontFamily: FONT, fontWeight: 700, color: "#4a4a49", fontSize: "0.95rem" }}>Escríbenos</div>
                  <a href={`mailto:${CONTACT.email}`} className="break-all transition-colors hover:text-[#b58900]" style={{ fontFamily: FONT, fontSize: "0.9rem", color: "#6b7480" }}>
                    {CONTACT.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center shrink-0" style={{ background: "rgba(245,183,0,0.1)" }}>
                  <MapPin size={18} style={{ color: "#f5b700" }} />
                </div>
                <div>
                  <div style={{ fontFamily: FONT, fontWeight: 700, color: "#4a4a49", fontSize: "0.95rem" }}>Visítanos</div>
                  <div className="flex flex-col gap-2 mt-0.5">
                    {CONTACT.sedes.map((s) => (
                      <a
                        key={s.city}
                        href={s.map}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Ver la sede de ${s.city} en Google Maps`}
                        className="group"
                        style={{ fontFamily: FONT, fontSize: "0.9rem", color: "#6b7480", lineHeight: 1.5 }}
                      >
                        <b style={{ color: "#4a4a49" }}>{s.city}:</b>{" "}
                        <span className="transition-colors group-hover:text-[#b58900]">{s.address}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Redes sociales (con animación: se elevan y brillan al pasar el mouse) */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={`${socialClass} hover:shadow-[0_10px_26px_rgba(24,119,242,0.40)]`}
                style={{ background: "#1877f2", color: "#fff", fontFamily: FONT, letterSpacing: "0.05em", borderRadius: "4px", boxShadow: "0 6px 16px rgba(24,119,242,0.22)" }}
              >
                <Facebook size={16} /> FACEBOOK
              </a>
              <a
                href={CONTACT.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className={`${socialClass} hover:shadow-[0_10px_26px_rgba(1,1,1,0.35)]`}
                style={{ background: "#010101", color: "#fff", fontFamily: FONT, letterSpacing: "0.05em", borderRadius: "4px", border: "1px solid #3a3f52", boxShadow: "0 6px 16px rgba(1,1,1,0.18)" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.65a8.26 8.26 0 0 0 4.83 1.56V6.77a4.85 4.85 0 0 1-1.06-.08z"/></svg>
                TIKTOK
              </a>
              <a
                href={waLink(WHATSAPP_PRINCIPAL)}
                target="_blank"
                rel="noopener noreferrer"
                className={`${socialClass} hover:shadow-[0_10px_26px_rgba(37,211,102,0.45)]`}
                style={{ background: "#25D366", color: "#ffffff", fontFamily: FONT, letterSpacing: "0.05em", borderRadius: "4px", boxShadow: "0 6px 16px rgba(37,211,102,0.25)" }}
              >
                <WhatsAppIcon size={16} /> WHATSAPP
              </a>
            </div>
          </div>

          {/* ---------- Columna derecha: formulario ---------- */}
          <div id="solicitud" className="p-6 sm:p-8 rounded-lg shadow-lg bg-white border border-gray-200 scroll-mt-28" style={{ borderTop: "4px solid #f5b700" }}>
            <h3 style={{ fontFamily: FONT, fontWeight: 700, fontSize: "1.5rem", color: "#4a4a49", lineHeight: 1.1 }}>SOLICITA INFORMACIÓN</h3>
            <p className="mt-1.5 mb-6" style={{ fontFamily: FONT, fontSize: "0.88rem", color: "#6b7480" }}>
              Solo escribe tu nombre; lo demás se responde con un clic.
            </p>

            <form ref={formRef} onSubmit={enviarWhatsApp} className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="c-nombre" style={labelStyle}>NOMBRE *</label>
                  <input
                    id="c-nombre"
                    required
                    autoComplete="name"
                    className={inputClass}
                    style={inputStyle}
                    value={form.name}
                    onChange={(e) => set("name")(e.target.value)}
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="c-correo" style={labelStyle}>CORREO ELECTRÓNICO</label>
                  <input
                    id="c-correo"
                    type="email"
                    autoComplete="email"
                    className={inputClass}
                    style={inputStyle}
                    value={form.email}
                    onChange={(e) => set("email")(e.target.value)}
                    placeholder="tucorreo@email.com (opcional)"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span style={labelStyle}>¿QUÉ PROGRAMA TE INTERESA?</span>
                <Chips name="Programa de interés" options={PROGRAMAS} value={form.programa} onChange={set("programa")} />
              </div>

              {/* Solo aparece cuando el programa elegido tiene opciones (no en Bono de Reforzamiento) */}
              {NECESIDADES[form.programa] && (
                <div className="flex flex-col gap-2">
                  <span style={labelStyle}>¿QUÉ NECESITAS?</span>
                  <Chips name="Qué necesitas" options={NECESIDADES[form.programa]} value={form.necesidad} onChange={set("necesidad")} />
                </div>
              )}

              <div className="flex flex-col gap-2">
                <span style={labelStyle}>¿DÓNDE TE ENCUENTRAS?</span>
                <div className="flex flex-wrap items-center gap-2">
                  <Chips name="Ubicación" options={UBICACIONES} value={form.ubicacion} onChange={set("ubicacion")} />
                  {form.ubicacion === "otro" && <DepartamentoSelect value={form.otroLugar} onChange={set("otroLugar")} />}
                </div>
              </div>

              {/* Mensaje: se redacta solo y se puede editar antes de enviar */}
              <div className="flex flex-col gap-1.5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <label htmlFor="c-mensaje" style={labelStyle}>
                    MENSAJE <span style={{ fontWeight: 400, letterSpacing: "0.02em", color: "#8a8a88" }}>(se completa solo, puedes editarlo)</span>
                  </label>
                  {!autoMensaje && (
                    <button
                      type="button"
                      onClick={() => setAutoMensaje(true)}
                      className="inline-flex items-center gap-1 text-xs transition-colors hover:text-[#b58900]"
                      style={{ fontFamily: FONT, color: "#173B66", fontWeight: 700 }}
                    >
                      <RotateCcw size={12} /> Volver al mensaje automático
                    </button>
                  )}
                </div>
                <textarea
                  id="c-mensaje"
                  required
                  rows={6}
                  className={`${inputClass} resize-y`}
                  style={{ ...inputStyle, lineHeight: 1.6, background: autoMensaje ? "#fcfbf8" : "#ffffff" }}
                  value={mensaje}
                  onChange={(e) => {
                    setAviso("");
                    setMensajeEditado(e.target.value);
                    setAutoMensaje(false);
                  }}
                />
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 py-4 px-3 font-bold whitespace-nowrap transition-all hover:opacity-90"
                  style={{ background: "#f5b700", color: "#0d0f14", fontFamily: FONT, fontSize: "0.88rem", letterSpacing: "0.05em", borderRadius: "4px" }}
                >
                  <WhatsAppIcon size={18} /> ENVIAR POR WHATSAPP
                </button>
                <button
                  type="button"
                  onClick={enviarCorreo}
                  className="inline-flex items-center justify-center gap-2 py-4 px-3 font-bold whitespace-nowrap transition-all hover:bg-[#173B66] hover:text-white"
                  style={{ color: "#173B66", border: "1.5px solid #173B66", background: "#ffffff", fontFamily: FONT, fontSize: "0.88rem", letterSpacing: "0.05em", borderRadius: "4px" }}
                >
                  <Send size={17} /> ENVIAR POR CORREO
                </button>
              </div>

              {aviso && (
                <p role="status" className="text-center" style={{ fontFamily: FONT, fontSize: "0.85rem", color: "#173B66" }}>
                  {aviso === "whatsapp"
                    ? "Se abrió WhatsApp con tu mensaje listo. Solo presiona «Enviar»."
                    : "Se abrió tu aplicación de correo con el mensaje listo. Solo presiona «Enviar»."}
                </p>
              )}

              <p className="flex items-center justify-center gap-1.5 text-center" style={{ fontFamily: FONT, fontSize: "0.78rem", color: "#8a8a88" }}>
                <ShieldCheck size={14} style={{ color: "#f5b700", flexShrink: 0 }} />
                Asesoría gratuita · Sin compromiso · Solo usamos tus datos para contactarte
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}