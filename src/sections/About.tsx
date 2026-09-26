import { CheckCircle } from "lucide-react";
import equipoEnObra from "@/imports/equipo-en-obra.jpg";
import evidenciaObra from "@/imports/evidencia-obra.jpg";
import evidenciaAvance from "@/imports/evidencia-avance.jpg";
import evidenciaCambio from "@/imports/evidencia-cambio.jpg";

export default function About() {
  const stats = [
    { value: "3,367", label: "viviendas construidas a nivel nacional" },
    { value: "11", label: "departamentos atendidos" },
    { value: "10+", label: "años de experiencia" },
  ];

  const valores = [
    { title: "Integridad", desc: "Honestidad y ética en cada proyecto." },
    { title: "Excelencia", desc: "Construcciones seguras y de calidad." },
    { title: "Innovación", desc: "Mejora continua en procesos y materiales." },
  ];

  const evidencia = [
    { img: evidenciaObra, titulo: "En obra", desc: "Nuestro personal técnico trabajando en el armado estructural." },
    { img: evidenciaAvance, titulo: "Avance de obra", desc: "Levantamiento de muros con equipos de seguridad completos." },
    { img: evidenciaCambio, titulo: "Antes y después", desc: "El cambio real que dejamos en cada vivienda entregada." },
    { img: equipoEnObra, titulo: "Nuestro equipo", desc: "El grupo humano detrás de cada proyecto Techo Propio." },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.75rem", fontWeight: 500, color: "#f5b700", letterSpacing: "0.2em" }}>QUIÉNES SOMOS</span>
            <h2 style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "clamp(2.2rem, 4vw, 3.2rem)", color: "#4a4a49", lineHeight: 0.95, marginTop: "0.5rem" }}>
              AYUDAMOS A TU FAMILIA<br />A ACCEDER A UNA<br />
              <span style={{ color: "#f5b700" }}>VIVIENDA SEGURA.</span>
            </h2>
            <p className="mt-6 text-gray-600" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, lineHeight: 1.8, fontSize: "0.95rem" }}>
              Sabemos que tener casa propia es una de las decisiones más importantes para tu familia. Por eso te acompañamos en todo el camino: te orientamos para postular al Bono Techo Propio, nos encargamos de los trámites y construimos tu vivienda hasta entregarte las llaves.
            </p>
            <p className="mt-4 text-gray-600" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, lineHeight: 1.8, fontSize: "0.95rem" }}>
              No lo haces solo: nuestro equipo de ingenieros y arquitectos trabaja contigo en cada etapa. Ya lo hicimos con 3,367 familias en 11 departamentos del país, a lo largo de más de 10 años.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              {["Tu casa se construye con materiales certificados de primera calidad", "Te asesoran arquitectos e ingenieros colegiados", "Tu vivienda cuenta con garantía post-entrega", "Accedes a opciones de financiamiento flexible"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={16} style={{ color: "#f5b700", flexShrink: 0 }} />
                  <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.9rem", color: "#4a4a49" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-lg shadow-2xl" style={{ border: "6px solid #ffffff", transform: "rotate(1.2deg)" }}>
              <img src={equipoEnObra} alt="Nuestro equipo en obra" className="w-full h-80 object-cover" />
            </div>
            <div className="mt-4 ml-6" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.82rem", color: "#4a4a49" }}>
              <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, color: "#173B66" }}>Nuestro equipo en obra, Lima — 2026</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20">
          {stats.map((s) => (
            <div key={s.label} className="text-center p-8" style={{ background: "#f8f8f8", borderRadius: "8px", border: "1px solid #eceae4" }}>
              <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "2.6rem", color: "#f5b700", lineHeight: 1 }}>{s.value}</div>
              <div className="mt-2" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.85rem", color: "#4a4a49", lineHeight: 1.5 }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-20">
          <div className="p-10" style={{ background: "#173B66", borderRadius: "8px" }}>
            <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.75rem", fontWeight: 700, color: "#f5b700", letterSpacing: "0.2em" }}>NUESTRA RAZÓN DE SER</span>
            <h3 style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "2rem", color: "#ffffff", marginTop: "0.5rem", marginBottom: "1rem" }}>Misión</h3>
            <p style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, fontSize: "0.98rem", color: "#eef1f5", lineHeight: 1.8, margin: 0 }}>
              Somos un grupo de empresas especializadas en la edificación de viviendas sociales, contando con profesionales de amplia experiencia, capacidad logística y financiera que nos permite atender con tranquilidad a nuestro público objetivo.
            </p>
          </div>
          <div className="p-10" style={{ background: "#1a1a1a", borderRadius: "8px" }}>
            <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.75rem", fontWeight: 700, color: "#f5b700", letterSpacing: "0.2em" }}>A DÓNDE VAMOS</span>
            <h3 style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "2rem", color: "#ffffff", marginTop: "0.5rem", marginBottom: "1rem" }}>Visión</h3>
            <p style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, fontSize: "0.98rem", color: "#eef1f5", lineHeight: 1.8, margin: 0 }}>
              Ser un grupo constructor líder en la construcción de viviendas sociales en el país, con capacidad de articular esfuerzos con el Estado, a fin de conseguir la mejora continua del programa de vivienda Techo Propio.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-12">
            <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.75rem", fontWeight: 500, color: "#f5b700", letterSpacing: "0.2em" }}>LO QUE NOS GUÍA</span>
            <h2 style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#4a4a49", lineHeight: 0.95, marginTop: "0.5rem" }}>
              VALORES DE LA EMPRESA
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {valores.map((v, i) => (
              <div key={v.title} className="p-8 transition-all duration-300 hover:shadow-lg" style={{ background: "#f8f8f8", borderRadius: "8px", border: "1px solid #eceae4" }}>
                <div className="w-12 h-12 flex items-center justify-center font-bold mb-5" style={{ background: i === 1 ? "#f5b700" : "#173B66", color: "#ffffff", fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "1.4rem", borderRadius: "6px" }}>
                  {i + 1}
                </div>
                <h4 style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "1.4rem", color: "#4a4a49", marginBottom: "0.5rem" }}>{v.title}</h4>
                <p style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.88rem", color: "#4a4a49", lineHeight: 1.7, margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-center mb-12">
            <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.75rem", fontWeight: 500, color: "#f5b700", letterSpacing: "0.2em" }}>FOTOGRAFÍA REAL</span>
            <h2 style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#4a4a49", lineHeight: 0.95, marginTop: "0.5rem" }}>
              EVIDENCIA, NO<br />IMÁGENES DE STOCK.
            </h2>
            <p className="mx-auto mt-5 text-gray-600" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, lineHeight: 1.8, fontSize: "0.95rem", maxWidth: "62ch" }}>
              Estas son fotos reales de nuestro equipo, nuestras obras y las familias a las que ayudamos. Preferimos mostrar el trabajo tal como es antes que recurrir a fotos de banco.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {evidencia.map((e, i) => (
              <div key={i} className="overflow-hidden rounded-lg shadow-lg bg-white" style={{ border: "1px solid #e5e5e5" }}>
                <img src={e.img} alt={e.titulo} className="w-full h-48 object-cover hover:scale-105 transition-transform duration-700" />
                <div className="p-4">
                  <div style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "0.78rem", color: "#f5b700", letterSpacing: "0.05em", marginBottom: "0.25rem" }}>{e.titulo.toUpperCase()}</div>
                  <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.85rem", color: "#4a4a49", lineHeight: 1.5 }}>{e.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}