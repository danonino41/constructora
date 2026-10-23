import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import "@/styles/index.css";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import ScrollManager from "./ScrollManager";

export const metadata: Metadata = {
  title: "Consorcio Constructor",
  description:
    "Consorcio Constructor: construimos tu vivienda a llave, gestionamos tu Bono Techo Propio y te acompañamos en todo el proceso.",
  icons: {
    icon: "/logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <div
          className="min-h-screen bg-white dark:bg-[#0d0f14]"
          style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif' }}
        >
          <Navbar />
          <Suspense fallback={null}>
            <ScrollManager />
          </Suspense>
          <main>{children}</main>
          <Footer />
          <WhatsAppWidget />
        </div>
      </body>
    </html>
  );
}
