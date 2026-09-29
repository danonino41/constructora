import { Link } from "react-router";
import { STATS, TESTIMONIALS } from "@/data/content";
import equipo from "@/imports/equipo-en-obra.jpg";

const PILLARS = [
  {
    tag: "#f5b700",
    title: "Construcción",
    desc: "Ingenieros y arquitectos colegiados que diseñan y levantan tu casa con materiales certificados y supervisión en cada etapa.",
  },
  {
    tag: "#173B66",
    title: "Finanzas",
    desc: "Analizamos contigo las opciones de financiamiento para que la cuota se ajuste a tu presupuesto, sin sorpresas.",
  },
  {
    tag: "#4a4a49",
    title: "Asesoría y trámites",
    desc: "Te acompañamos en la postulación al Bono Techo Propio y en toda la documentación, de principio a fin.",
  },
];

export default function Nosotros() {
  return (
    <div className="pt-20">
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.75rem", fontWeight: 500, color: "#f5b700", letterSpacing: "0.2em" }}>
              NOSOTROS
            </span>
            <h1 className="mt-3" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "clamp(2.2rem, 4.4vw, 3.4rem)", color: "#4a4a49", lineHeight: 1.05, letterSpacing: "0.01em" }}>
              Somos el equipo que te lleva de la mano hasta <span style={{ color: "#f5b700" }}>tu casa propia.</span>
            </h1>
            <p className="mt-6" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, fontSize: "1.05rem", lineHeight: 1.8, color: "#5c5c5a" }}>
              Construir una vivienda social no debería ser un camino solitario. Somos un consorcio: ingenieros, arquitectos, especialistas en trámites y expertos en financiamiento que trabajan juntos para que tu familia reciba las llaves de una casa segura.
            </p>
            <a
              href="#consorcio"
              className="mt-8 inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-bold transition-all hover:opacity-90 hover:scale-105"
              style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "1rem", letterSpacing: "0.1em", borderRadius: "8px" }}
            >
              CONOCE CÓMO TRABAJAMOS
            </a>
          </div>
          <figure className="m-0">
            <div
              className="overflow-hidden"
              style={{ aspectRatio: "4/3", borderRadius: "8px", boxShadow: "0 18px 40px rgba(0,0,0,0.18)", background: "linear-gradient(135deg,#dfe4ea,#c5ced9)" }}
            >
              <img src={equipo} alt="Nuestro equipo en obra, Lima 2026" className="w-full h-full object-cover" />
            </div>
            <figcaption style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.82rem", fontWeight: 600, color: "#6b7480", marginTop: "0.6rem" }}>
              Nuestro equipo en obra, Lima — 2026
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="consorcio" className="py-24" style={{ background: "#f8f8f8" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-[42rem] mb-10">
            <h2 style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)", color: "#4a4a49", lineHeight: 1.05 }}>
              ¿POR QUÉ SOMOS UN CONSORCIO?
            </h2>
            <p className="mt-4" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, fontSize: "1rem", lineHeight: 1.8, color: "#5c5c5a" }}>
              Porque una casa no la levanta una sola persona. Detrás de cada vivienda hay obra, papeles y dinero, y cada parte necesita a quien realmente la domine. Por eso unimos a tres equipos especializados bajo una sola responsabilidad.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-0" style={{ border: "1px solid #e4e7ec", background: "#ffffff" }}>
            {PILLARS.map((p, i) => (
              <div key={p.title} className="p-8" style={{ borderRight: i < 2 ? "1px solid #e4e7ec" : "none" }}>
                <span className="block h-[5px] w-9 mb-4" style={{ background: p.tag }} />
                <h3 style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "1.15rem", color: "#4a4a49" }}>{p.title}</h3>
                <p className="mt-2" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, fontSize: "0.92rem", lineHeight: 1.7, color: "#5c5c5a" }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-7" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 600, fontSize: "1rem", color: "#4a4a49" }}>
            Tres áreas, un solo equipo, una sola meta: que tu familia llegue a su vivienda sin perderse en el camino.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "clamp(1.7rem, 3vw, 2.4rem)", color: "#4a4a49", lineHeight: 1.05 }}>
              CONOCEMOS EL CAMINO DEL BONO TECHO PROPIO PORQUE LO RECORREMOS A DIARIO
            </h2>
            <p className="mt-5" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, fontSize: "0.98rem", lineHeight: 1.8, color: "#5c5c5a" }}>
              Muchas constructoras saben construir. Lo que marca la diferencia es saber cómo se accede a un programa público: qué exige la norma, qué documentos piden y en qué orden. Ahí es donde más familias se quedan atrás, y ahí es donde nosotros nos especializamos.
            </p>
          </div>
          <ul className="m-0 p-0" style={{ listStyle: "none" }}>
            {[
              { strong: "Especialistas en programas de vivienda social", text: "Nuestro trabajo diario es la vivienda de interés social, no un servicio más entre muchos." },
              { strong: "Trámites resueltos por nosotros", text: "Tú nos entregas tus datos; nosotros nos ocupamos del expediente y del seguimiento." },
              { strong: "Normativa al día", text: "Seguimos los requisitos vigentes para que tu postulación no se retrase por errores evitables." },
            ].map((item, i) => (
              <li key={item.strong} className="relative pl-10 pb-6" style={{ borderBottom: "1px solid #e4e7ec" }}>
                <span className="absolute left-0 top-1.5 w-4 h-4" style={{ borderRadius: "50%", background: "#f5b700" }} />
                <strong className="block" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "1rem", color: "#4a4a49" }}>
                  {item.strong}
                </strong>
                <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, fontSize: "0.92rem", color: "#5c5c5a" }}>
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24" style={{ background: "#173B66" }}>
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-white" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "clamp(1.7rem, 3vw, 2.4rem)", lineHeight: 1.05 }}>
              TRABAJAMOS CON TRANSPARENCIA Y DENTRO DE LAS REGLAS DEL ESTADO
            </h2>
            <p className="mt-5" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, fontSize: "0.98rem", lineHeight: 1.8, color: "#d5deec" }}>
              Conocemos los lineamientos del Ministerio de Vivienda, Construcción y Saneamiento (MVCS) y los aplicamos en cada proyecto. Te explicamos cada paso, cada requisito y cada costo antes de que decidas, porque una decisión tan importante merece información clara.
            </p>
            <p style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, fontSize: "0.98rem", lineHeight: 1.8, color: "#d5deec" }}>
              Lo que te decimos es lo que encontrarás: sin letra chica y con respuestas a tus dudas.
            </p>
          </div>
          <div className="flex flex-col gap-3.5">
            {STATS.slice(0, 3).map((s) => (
              <div key={s.value} className="flex items-baseline gap-4 pl-5" style={{ borderLeft: "4px solid #f5b700" }}>
                <b style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 800, fontSize: "2.2rem", color: "#f5b700", minWidth: "7rem" }}>
                  {s.value}
                </b>
                <span style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, fontSize: "0.95rem", color: "#d5deec" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8" style={{ borderRadius: "8px", background: "#173B66" }}>
              <h2 className="text-white" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "1.7rem", marginBottom: "0.6rem" }}>
                MISIÓN
              </h2>
              <p style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, fontSize: "0.95rem", lineHeight: 1.8, color: "#d5deec" }}>
                Somos un grupo de empresas especializadas en la edificación de viviendas sociales, contando con profesionales de amplia experiencia, capacidad logística y financiera que nos permite atender con tranquilidad a nuestro público objetivo.
              </p>
            </div>
            <div className="p-8" style={{ borderRadius: "8px", background: "#1c1c1c" }}>
              <h2 className="text-white" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "1.7rem", marginBottom: "0.6rem" }}>
                VISIÓN
              </h2>
              <p style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, fontSize: "0.95rem", lineHeight: 1.8, color: "#d5deec" }}>
                Ser un grupo constructor líder en la construcción de viviendas sociales en el país, con capacidad de articular esfuerzos con el Estado, a fin de conseguir la mejora continua del programa de vivienda Techo Propio.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[
              { title: "Integridad", desc: "Honestidad y ética en cada proyecto." },
              { title: "Excelencia", desc: "Construcciones seguras y de calidad." },
              { title: "Innovación", desc: "Mejora continua en procesos y materiales." },
            ].map((v) => (
              <div key={v.title} className="p-6" style={{ borderRadius: "8px", border: "1px solid #e4e7ec", background: "#f8f8f8" }}>
                <h3 style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "1.1rem", color: "#4a4a49" }}>{v.title}</h3>
                <p className="mt-1.5" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, fontSize: "0.95rem", color: "#5c5c5a" }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" style={{ background: "#f8f8f8" }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)", color: "#4a4a49", lineHeight: 1.05 }}>
            FAMILIAS QUE YA TIENEN SUS LLAVES
          </h2>
          <p className="mt-3" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, fontSize: "1rem", color: "#5c5c5a" }}>
            Nuestra mejor carta de presentación son las familias que confiaron en nosotros. Estas son sus historias.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="flex flex-col overflow-hidden" style={{ borderRadius: "8px", border: "1px solid #e4e7ec", background: "#ffffff" }}>
                <div className="overflow-hidden" style={{ aspectRatio: "16/7", background: "linear-gradient(135deg,#dfe4ea,#c5ced9)" }}>
                  <img src={t.photo} alt={`Foto de ${t.name}`} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col flex-1 gap-3 p-6">
                  <blockquote style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 600, fontSize: "0.98rem", lineHeight: 1.55, color: "#4a4a49", margin: 0, fontStyle: "normal" }}>
                    “{t.text}”
                  </blockquote>
                  <div className="mt-auto" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.82rem", color: "#6b7480" }}>
                    <b className="block" style={{ color: "#4a4a49" }}>{t.name}</b>
                    {t.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "0.82rem", color: "#6b7480", marginTop: "1.2rem" }}>
            ¿Tu familia ya vive en una casa construida por nosotros? Escríbenos y cuéntanos tu historia.
          </p>
        </div>
      </section>

      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)", color: "#4a4a49", lineHeight: 1.05 }}>
            TU CASA PROPIA EMPIEZA CON UNA CONVERSACIÓN
          </h2>
          <p className="mt-4" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, fontSize: "1rem", lineHeight: 1.7, color: "#5c5c5a" }}>
            Cuéntanos tu situación y te orientamos sin compromiso: qué necesitas para postular, qué opciones tienes y cuáles son los siguientes pasos.
          </p>
          <Link
            to="/contacto"
            className="mt-7 inline-flex items-center gap-3 bg-primary text-primary-foreground px-9 py-4 font-bold transition-all hover:opacity-90 hover:scale-105"
            style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "1rem", letterSpacing: "0.1em", borderRadius: "6px" }}
          >
            SOLICITA INFORMACIÓN
          </Link>
        </div>
      </section>
    </div>
  );
}