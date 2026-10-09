import type { Metadata } from "next";
import SiteChrome from "@/components/SiteChrome";
import "@/styles/index.css";

export const metadata: Metadata = {
  title: "Consorcio Constructor",
  description:
    "Construcción de viviendas sociales llave en mano con el respaldo de los programas del MVCS: Techo Propio, Crédito MiVivienda y Bono de Reforzamiento Estructural.",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
