import { lazy } from "react";
import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import { LazySection } from "./LazySection";

const QualificationQuiz = lazy(() => import("@/sections/QualificationQuiz"));
const Projects = lazy(() => import("@/sections/Projects"));
const VideoTour = lazy(() => import("@/sections/VideoTour"));
const Services = lazy(() => import("@/sections/Services"));
const About = lazy(() => import("@/sections/About"));
const PresenceMap = lazy(() => import("@/app/PresenceMap"));
const Testimonials = lazy(() => import("@/sections/Testimonials"));
const Gallery = lazy(() => import("@/sections/Gallery"));
const Contact = lazy(() => import("@/sections/Contact"));
const Footer = lazy(() => import("@/sections/Footer"));

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0d0f14]" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif' }}>
      <Navbar />
      <Hero />

      <LazySection id="requisitos" Comp={QualificationQuiz} minHeight={760} />
      <LazySection id="proyectos" Comp={Projects} minHeight={900} />
      <LazySection Comp={VideoTour} minHeight={620} />
      <LazySection id="servicios" Comp={Services} minHeight={560} />
      <LazySection id="nosotros" Comp={About} minHeight={1500} />
      <LazySection Comp={PresenceMap} minHeight={900} />
      <LazySection Comp={Testimonials} minHeight={520} />
      <LazySection id="galeria" Comp={Gallery} minHeight={620} />
      <LazySection id="contacto" Comp={Contact} minHeight={820} />
      <LazySection Comp={Footer} minHeight={420} />
    </div>
  );
}