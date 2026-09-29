import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "@/sections/Navbar";
import Footer from "@/sections/Footer";

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (target) {
      const t = window.setTimeout(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
      }, 80);
      return () => window.clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.state]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0d0f14]" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif' }}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}