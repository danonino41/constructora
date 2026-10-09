"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0d0f14]" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif' }}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
