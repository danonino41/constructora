import Projects from "@/sections/Projects";

export const metadata = {
  title: "Proyectos | Consorcio Constructor",
  description: "Conoce los modelos de vivienda y proyectos que construimos a nivel nacional.",
};

export default function Proyectos() {
  return (
    <div className="pt-32">
      <Projects />
    </div>
  );
}
