import { lazy } from "react";
import { Link } from "react-router";
import Hero from "@/sections/Hero";
import { LazySection } from "@/app/LazySection";

const Testimonials = lazy(() => import("@/sections/Testimonials"));
const PresenceMap = lazy(() => import("@/app/PresenceMap"));

export default function Home() {
  return (
    <>
      {/* INICIO: Hero (mensaje clave + CTAs) + Slider de programas + 3 tarjetas de acceso directo */}
      <Hero />
      <LazySection Comp={PresenceMap} minHeight={900} />
      <LazySection Comp={Testimonials} minHeight={520} />

      <section className="py-24" style={{ background: "#173B66" }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-white" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 700, fontSize: "clamp(1.8rem, 3.4vw, 2.8rem)", lineHeight: 1.05 }}>
            TU CASA PROPIA EMPIEZA<br />CON UNA CONVERSACIÓN
          </h2>
          <p className="mt-5 mx-auto" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, fontSize: "1rem", lineHeight: 1.7, color: "#dfe6f0", maxWidth: "36rem" }}>
            Cuéntanos tu situación y te orientamos sin compromiso: qué necesitas para postular, qué opciones tienes y cuáles son los siguientes pasos.
          </p>
          <Link
            to="/contacto"
            className="mt-8 inline-flex items-center gap-3 bg-primary text-primary-foreground px-9 py-4 font-bold transition-all hover:opacity-90 hover:scale-105"
            style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontSize: "1rem", letterSpacing: "0.1em", borderRadius: "8px" }}
          >
            SOLICITA INFORMACIÓN
          </Link>
        </div>
      </section>
    </>
  );
}