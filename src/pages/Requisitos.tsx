import { Link } from "react-router";
import { ArrowRight, BadgeCheck, CheckCircle2, ExternalLink, Wallet } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { PROGRAMAS_DETALLE } from "@/data/programas";
import SectionNav from "@/sections/SectionNav";
import QualificationQuiz from "@/sections/QualificationQuiz";

const SECTIONS = [
  { id: "requisitos", label: "Requisitos por programa" },
  { id: "topes", label: "Topes y ahorro" },
  { id: "encuentra", label: "Encuentra tu programa" },
  { id: "faq", label: "Preguntas frecuentes" },
];

const PROGRAM_CARDS = [
  { slug: "techo-propio", badge: "BONO DEL ESTADO" },
  { slug: "credito-mivivienda", badge: "CRÉDITO HIPOTECARIO" },
  { slug: "reforzamiento", badge: "BONO DEL ESTADO" },
];

const FAQ_REQUISITOS = [
  { q: "¿Tengo que devolver el bono?", a: "No. El Bono Familiar Habitacional (BFH) es un subsidio no reembolsable del Estado: no se devuelve y se suma a tu ahorro o a tu crédito para financiar tu vivienda." },
  { q: "¿Necesito tener terreno?", a: "Depende de la modalidad. Para construir en sitio propio sí necesitas terreno con título saneado. En la modalidad de compra de vivienda, lo que se compra es la vivienda, no un terreno." },
  { q: "¿Puedo combinar el bono con un crédito?", a: "Sí. El bono se suma a tu ahorro y puede complementarse con el Crédito MiVivienda o con un crédito hipotecario para completar el valor de la vivienda." },
  { q: "Si ya tengo otra vivienda, ¿puedo postular?", a: "No. Uno de los requisitos es no ser propietario de otra vivienda a nivel nacional, y que el inmueble a construir o comprar no esté a tu nombre." },
  { q: "¿Qué pasa si soy soltero o vivo solo?", a: "Puedes postular: el programa se evalúa por hogar. Lo que se revisa son los ingresos del grupo familiar y que no tengas otra vivienda, no tu estado civil." },
  { q: "¿Cuánto demora el trámite?", a: "Depende del programa y de la evaluación de la vivienda, pero el proceso incluye evaluación, registro, proyecto y obra. Nosotros te damos un cronograma claro desde el primer día." },
];

export default function Requisitos() {
  return (
    <div className="pt-20">
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.75rem", fontWeight: 700, color: "#f5b700", letterSpacing: "0.2em" }}>
            REQUISITOS
          </span>
          <h1 className="mt-3" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "clamp(2rem, 4.4vw, 3.2rem)", color: "#4a4a49", lineHeight: 1.03, maxWidth: "52rem" }}>
            LO QUE NECESITAS PARA <span style={{ color: "#f5b700" }}>ACCEDER A UN PROGRAMA DE VIVIENDA</span>
          </h1>
          <p className="mt-5 max-w-3xl" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, fontSize: "1.02rem", lineHeight: 1.8, color: "#4a4a49" }}>
            Los programas de vivienda del Estado tienen requisitos claros: una lista corta, explicada y sin letra chica. Aquí tienes la lista completa por programa, los topes de ingreso vigentes y un test de 1 minuto para saber a cuál podrías postular.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2.5" style={{ background: "#f8f8f8", border: "1px solid #eceae4", borderRadius: "3px", fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.85rem", color: "#4a4a49" }}>
              <Wallet size={15} style={{ color: "#f5b700" }} /> Tope compra: <b>S/ 3,715</b>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2.5" style={{ background: "#f8f8f8", border: "1px solid #eceae4", borderRadius: "3px", fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.85rem", color: "#4a4a49" }}>
              <Wallet size={15} style={{ color: "#f5b700" }} /> Tope construcción: <b>S/ 2,706</b>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2.5" style={{ background: "#f8f8f8", border: "1px solid #eceae4", borderRadius: "3px", fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.85rem", color: "#4a4a49" }}>
              <BadgeCheck size={15} style={{ color: "#f5b700" }} /> El bono <b>no se devuelve</b>
            </span>
          </div>
        </div>
      </section>

      <SectionNav sections={SECTIONS} />

      <section id="requisitos" className="py-16 md:py-20 bg-white scroll-mt-32">
        <div className="max-w-7xl mx-auto px-6">
          <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.75rem", fontWeight: 700, color: "#f5b700", letterSpacing: "0.2em" }}>
            LISTA POR PROGRAMA
          </span>
          <h2 className="mt-2" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#4a4a49" }}>
            REQUISITOS SEGÚN EL PROGRAMA
          </h2>

          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {PROGRAM_CARDS.map(({ slug, badge }) => {
              const p = PROGRAMAS_DETALLE[slug];
              return (
                <div key={slug} className="flex flex-col p-7" style={{ borderRadius: "12px", border: "1px solid #eceae4", background: "#ffffff" }}>
                  <span className="inline-block self-start px-2.5 py-1 mb-4" style={{ background: "#f5b700", color: "#0d0f14", fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.12em", borderRadius: "3px" }}>
                    {badge}
                  </span>
                  <h3 style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "1.2rem", color: "#4a4a49", lineHeight: 1.15 }}>
                    {p.heroTitle}
                  </h3>
                  <div className="mt-5 flex flex-col gap-3">
                    {p.requisitos.map((r) => (
                      <div key={r} className="flex gap-3">
                        <CheckCircle2 size={16} style={{ color: "#f5b700", flexShrink: 0, marginTop: "3px" }} />
                        <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.9rem", lineHeight: 1.6, color: "#4a4a49" }}>{r}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to={`/programas/${slug}`}
                    className="mt-auto pt-6 inline-flex items-center gap-2 font-bold transition-all hover:gap-3"
                    style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.85rem", color: "#173B66", letterSpacing: "0.04em" }}
                  >
                    Ver el programa completo <ArrowRight size={15} style={{ color: "#f5b700" }} />
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="mt-6 p-6" style={{ borderRadius: "10px", background: "#f8f8f8", borderLeft: "4px solid #f5b700" }}>
            <p style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.92rem", lineHeight: 1.7, color: "#4a4a49" }}>
              <b>Requisitos comunes a todos los programas:</b> ser ciudadano peruano o extranjero con residencia, no ser propietario de otra vivienda a nivel nacional, cumplir el tope de ingreso familiar y aportar el ahorro mínimo. Nosotros revisamos tu caso y armamos el expediente completo.
            </p>
          </div>
        </div>
      </section>

      <section id="topes" className="py-16 md:py-20 scroll-mt-32" style={{ background: "#f8f8f8" }}>
        <div className="max-w-7xl mx-auto px-6">
          <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.75rem", fontWeight: 700, color: "#f5b700", letterSpacing: "0.2em" }}>
            CIFRAS VIGENTES
          </span>
          <h2 className="mt-2" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#4a4a49" }}>
            TOPES DE INGRESO Y AHORRO MÍNIMO
          </h2>

          <div className="mt-8 grid md:grid-cols-2 gap-5">
            <div className="p-7" style={{ borderRadius: "12px", border: "1px solid #eceae4", background: "#ffffff" }}>
              <h3 style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "1.1rem", color: "#4a4a49" }}>
                TOPE DE INGRESO FAMILIAR MENSUAL
              </h3>
              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="p-5" style={{ borderRadius: "8px", background: "#f8f8f8" }}>
                  <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "1.9rem", lineHeight: 1, color: "#f5b700" }}>S/ 3,715</div>
                  <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.8rem", color: "#4a4a49", marginTop: "0.4rem" }}>Modalidad compra de vivienda</div>
                </div>
                <div className="p-5" style={{ borderRadius: "8px", background: "#f8f8f8" }}>
                  <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "1.9rem", lineHeight: 1, color: "#f5b700" }}>S/ 2,706</div>
                  <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.8rem", color: "#4a4a49", marginTop: "0.4rem" }}>Modalidad construcción en sitio propio</div>
                </div>
              </div>
              <p className="mt-5" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.9rem", lineHeight: 1.7, color: "#5c5c5a" }}>
                El tope se calcula con los ingresos de todos los integrantes del hogar. Si estás justo en el límite, un asesor puede revisar tu caso y buscar la alternativa que mejor te encaje.
              </p>
            </div>

            <div className="p-7" style={{ borderRadius: "12px", border: "1px solid #eceae4", background: "#ffffff" }}>
              <h3 style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "1.1rem", color: "#4a4a49" }}>
                AHORRO MÍNIMO
              </h3>
              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="p-5" style={{ borderRadius: "8px", background: "#f8f8f8" }}>
                  <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "1.9rem", lineHeight: 1, color: "#173B66" }}>10 %</div>
                  <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.8rem", color: "#4a4a49", marginTop: "0.4rem" }}>Del valor de la vivienda, en construcción</div>
                </div>
                <div className="p-5" style={{ borderRadius: "8px", background: "#f8f8f8" }}>
                  <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "1.9rem", lineHeight: 1, color: "#173B66" }}>7,5 %</div>
                  <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.8rem", color: "#4a4a49", marginTop: "0.4rem" }}>Del valor de la vivienda, en compra</div>
                </div>
              </div>
              <p className="mt-5" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.9rem", lineHeight: 1.7, color: "#5c5c5a" }}>
                El ahorro debe estar depositado y declarado antes de la evaluación. Te ayudamos a organizar el calendario de aportes y a que el monto reúna las condiciones del programa.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
            <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.8rem", color: "#8a9199" }}>
              Topes y porcentajes según la normativa vigente del MVCS. Confírmalos con un asesor antes de comprometerte.
            </span>
            <a href="https://www.mivivienda.com.pe" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:opacity-80" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.82rem", color: "#173B66", fontWeight: 600 }}>
              mivivienda.com.pe <ExternalLink size={12} />
            </a>
            <a href="https://www.gob.pe/mvcs" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:opacity-80" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.82rem", color: "#173B66", fontWeight: 600 }}>
              gob.pe/mvcs <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </section>

      <section id="encuentra" className="scroll-mt-32">
        <QualificationQuiz />
      </section>

      <section id="faq" className="py-16 md:py-20 bg-white scroll-mt-32">
        <div className="max-w-3xl mx-auto px-6">
          <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.75rem", fontWeight: 700, color: "#f5b700", letterSpacing: "0.2em" }}>
            RESUELVE TUS DUDAS
          </span>
          <h2 className="mt-2" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#4a4a49" }}>
            PREGUNTAS FRECUENTES SOBRE REQUISITOS
          </h2>
          <div className="divide-y mt-7" style={{ borderTop: "1px solid #eceae4", borderBottom: "1px solid #eceae4" }}>
            {FAQ_REQUISITOS.map((item) => (
              <details key={item.q} className="group">
                <summary className="flex items-center justify-between gap-4 py-4 px-4 cursor-pointer list-none transition-colors hover:bg-[#f8f8f8]" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 600, fontSize: "0.98rem", color: "#4a4a49" }}>
                  {item.q}
                  <span className="transition-transform duration-300 group-open:rotate-180" style={{ color: "#f5b700" }}>▾</span>
                </summary>
                <p className="px-4 pb-5" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, fontSize: "0.95rem", lineHeight: 1.75, color: "#5c5c5a" }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-10 p-8 text-center" style={{ borderRadius: "12px", background: "#173B66" }}>
            <h3 className="text-white" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "1.3rem" }}>
              ¿NO SABES SI CUMPLES LOS REQUISITOS?
            </h3>
            <p className="mt-2" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.92rem", color: "#dfe6f0" }}>
              Revisamos tu caso con la normativa vigente y te decimos con claridad si puedes postular y qué pasos siguen.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Link to="/contacto" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 font-bold transition-all hover:opacity-90" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.92rem", letterSpacing: "0.08em", borderRadius: "3px" }}>
                SOLICITA INFORMACIÓN <ArrowRight size={16} />
              </Link>
              <a href="https://wa.me/51993611523" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 font-bold transition-all hover:bg-white/10" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.92rem", letterSpacing: "0.08em", color: "#ffffff", borderRadius: "3px", border: "1px solid rgba(255,255,255,0.6)" }}>
                <WhatsAppIcon size={16} /> WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}