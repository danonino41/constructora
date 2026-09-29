import HeroInicio from "@/components/inicio/HeroInicio";
import SliderProgramas from "@/components/inicio/SliderProgramas";
import ProgramasAccesoRapido from "@/components/inicio/ProgramasAccesoRapido";

/**
 * Sección INICIO (Home).
 * Orden de lectura del primer viewport:
 * 1. Hero: mensaje clave + 2 CTAs + visual de obra en proceso
 * 2. Slider: 3 slides, uno por programa
 * 3. Acceso directo: 3 tarjetas de programas
 */
export default function Hero() {
  return (
    <section id="inicio">
      <HeroInicio />
      <SliderProgramas />
      <ProgramasAccesoRapido />
    </section>
  );
}
