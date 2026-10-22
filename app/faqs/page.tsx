import Faq from "@/sections/Faq";

export const metadata = {
  title: "Preguntas frecuentes | Consorcio Constructor",
  description: "Resolvemos las dudas más frecuentes sobre nuestros programas y servicios.",
};

export default function Faqs() {
  return (
    <div className="pt-32">
      <Faq />
    </div>
  );
}
