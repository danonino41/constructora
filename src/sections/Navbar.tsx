import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data/content";
import logo from "@/imports/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
               borderBottom: scrolled ? "1px solid rgba(0,0,0,0.1)" : "none",
               backdropFilter: scrolled ? "blur(12px)" : "none",
               boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.1)" : "none"
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={logo} alt="Consorcio Constructor" className="h-12 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm transition-colors duration-200 hover:text-primary"
              style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, color: scrolled ? "#1a1a1a" : "#ffffff", letterSpacing: "0.05em", transition: "color 0.3s ease" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="bg-primary text-primary-foreground px-5 py-2 text-sm font-bold transition-all hover:opacity-90 hover:scale-105"
            style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', letterSpacing: "0.08em", borderRadius: "2px" }}>
            COTIZAR AHORA
          </a>
        </div>

        <button className="md:hidden transition-colors" onClick={() => setOpen(!open)}>
          {open ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-primary" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 flex flex-col gap-4 shadow-lg">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-gray-600 hover:text-primary transition-colors"
              style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif' }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="#contacto" className="bg-primary text-primary-foreground px-5 py-2 text-sm font-bold text-center transition-all hover:opacity-90 hover:scale-105" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', letterSpacing: "0.08em", borderRadius: "2px" }} onClick={() => setOpen(false)}>
            COTIZAR AHORA
          </a>
        </div>
      )}
    </nav>
  );
}