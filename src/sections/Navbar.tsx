import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_LINKS, PROGRAM_LINKS } from "@/data/content";
import logo from "@/imports/logo.png";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: "rgba(255,255,255,0.92)",
        borderBottom: "1px solid rgba(23,59,102,0.10)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        boxShadow: scrolled ? "0 8px 28px rgba(23,32,46,0.10)" : "0 2px 12px rgba(23,32,46,0.05)",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-6 py-3 md:py-4 flex items-center justify-between gap-4">
        {/* Logo protagonista */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3 shrink-0 group"
          aria-label="Consorcio Constructor - Inicio"
        >
          <span
            className="grid place-items-center bg-white transition-all duration-300 group-hover:shadow-md"
            style={{
              padding: "0.4rem 0.7rem",
              borderRadius: "10px",
              border: "1px solid rgba(23,59,102,0.10)",
              boxShadow: "0 2px 8px rgba(23,32,46,0.06)",
            }}
          >
            <img
              src={logo}
              alt="Consorcio Constructor"
              className="w-auto object-contain h-12 sm:h-14 md:h-16 lg:h-20"
            />
          </span>
          <span className="hidden xl:flex flex-col leading-tight">
            <span
              style={{
                fontFamily: '"Myriad Pro", "Segoe UI", sans-serif',
                fontWeight: 700,
                fontSize: "0.95rem",
                color: "#173B66",
                letterSpacing: "0.06em",
              }}
            >
              CONSORCIO
            </span>
            <span
              style={{
                fontFamily: '"Myriad Pro", "Segoe UI", sans-serif',
                fontWeight: 500,
                fontSize: "0.7rem",
                color: "#8a8a88",
                letterSpacing: "0.22em",
              }}
            >
              CONSTRUCTOR
            </span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_LINKS.map((l) =>
            l.label === "Programas" ? (
              <div key={l.label} className="relative group">
                <button
                  onClick={() => { setOpen(false); navigate("/programas"); }}
                  className="inline-flex items-center gap-1 text-sm transition-colors duration-200 hover:text-primary"
                  style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 500, color: "#3d3d3c", letterSpacing: "0.05em", cursor: "pointer" }}
                >
                  {l.label}
                  <ChevronDown size={13} className="transition-transform duration-200 group-hover:rotate-180" style={{ color: "#f5b700" }} />
                </button>
                <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible focus-within:opacity-100 focus-within:visible transition-all duration-200">
                  <div className="bg-white rounded-lg py-2 min-w-[240px]" style={{ borderRadius: "10px", border: "1px solid #e5e5e5", boxShadow: "0 8px 30px rgba(0,0,0,0.12)" }}>
                    {PROGRAM_LINKS.map((p) => (
                      <Link
                        key={p.label}
                        to={p.href}
                        className="block px-5 py-2.5 text-sm text-gray-700 transition-colors hover:bg-[#f8f8f8] hover:text-[#173B66]"
                        style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif' }}
                      >
                        {p.label}
                      </Link>
                    ))}
                    <div className="my-1.5 border-t border-gray-100" />
                    <Link to="/programas" className="flex items-center justify-between px-5 py-2.5 text-sm font-bold text-[#173B66] transition-colors hover:bg-[#f8f8f8]" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif' }}>
                      Ver todos los programas
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={l.label}
                to={l.href}
                className="text-sm transition-colors duration-200 hover:text-primary"
                style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 500, color: "#3d3d3c", letterSpacing: "0.05em" }}
              >
                {l.label}
              </Link>
            )
          )}
          <Link
            to="/contacto"
            className="bg-primary text-primary-foreground px-5 py-2.5 text-sm font-bold transition-all hover:opacity-90 hover:scale-105"
            style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', letterSpacing: "0.08em", borderRadius: "3px" }}
          >
            COTIZAR AHORA
          </Link>
        </div>

        <button
          className="md:hidden transition-colors shrink-0"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X size={26} style={{ color: "#173B66" }} /> : <Menu size={26} style={{ color: "#173B66" }} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 px-5 py-5 flex flex-col gap-4 shadow-lg max-h-[80vh] overflow-y-auto">
          {NAV_LINKS.map((l) => (
            <div key={l.label} className="flex flex-col gap-3">
              {l.label === "Programas" ? (
                <>
                  <Link to="/programas" className="text-sm text-gray-600 hover:text-primary transition-colors" onClick={() => setOpen(false)}>
                    Programas
                  </Link>
                  <div className="pl-4 flex flex-col gap-2.5 border-l-2" style={{ borderColor: "#f5b700" }}>
                    {PROGRAM_LINKS.map((p) => (
                      <Link key={p.label} to={p.href} className="text-sm text-gray-600 hover:text-primary transition-colors" onClick={() => setOpen(false)}>
                        {p.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link to={l.href} className="text-sm text-gray-600 hover:text-primary transition-colors" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif' }} onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              )}
            </div>
          ))}
          <Link to="/contacto" className="bg-primary text-primary-foreground px-5 py-3 text-sm font-bold text-center transition-all hover:opacity-90" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', letterSpacing: "0.08em", borderRadius: "3px" }} onClick={() => setOpen(false)}>
            COTIZAR AHORA
          </Link>
        </div>
      )}
    </nav>
  );
}
