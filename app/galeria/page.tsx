import Gallery from "@/sections/Gallery";

export const metadata = {
  title: "Galería | Consorcio Constructor",
  description: "Galería de obras, modelos y evidencia de nuestros proyectos de construcción.",
};

export default function Galeria() {
  return (
    <div className="pt-32">
      <Gallery />
    </div>
  );
}
