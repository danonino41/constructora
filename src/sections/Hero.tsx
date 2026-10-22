import HeroInicio from "@/components/inicio/HeroInicio";
import SliderProgramas from "@/components/inicio/SliderProgramas";
import ProgramasAccesoRapido from "@/components/inicio/ProgramasAccesoRapido";

/**
 * Sección INICIO (Home).
 * Orden de lectura del primer viewport:
 * 1. Slider de programas: visual principal a pantalla completa (3 slides)
 * 2. Franja de stats + sello de respaldo
 * 3. Acceso directo: 3 tarjetas de programas
 */
export default function Hero() {
  return (
    <section id="inicio">
      <SliderProgramas />
      <HeroInicio />
      <ProgramasAccesoRapido />
    </section>
  );
}
