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

  const isHome = location.pathname === "/";
  const solid = scrolled || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkColor = solid ? "#1a1a1a" : "#ffffff";

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: solid ? "rgba(255,255,255,0.95)" : "transparent",
        borderBottom: solid ? "1px solid rgba(0,0,0,0.1)" : "none",
        backdropFilter: solid ? "blur(12px)" : "none",
        boxShadow: solid ? "0 4px 20px rgba(0,0,0,0.1)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="Consorcio Constructor" className="h-[5.4rem] w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((l) =>
            l.label === "Programas" ? (
              <div key={l.label} className="relative group">
                <button
                  onClick={() => { setOpen(false); navigate("/programas"); }}
                  className="inline-flex items-center gap-1 text-sm transition-colors duration-200 hover:text-primary"
                  style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, color: linkColor, letterSpacing: "0.05em", cursor: "pointer" }}
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
                style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', fontWeight: 400, color: linkColor, letterSpacing: "0.05em" }}
              >
                {l.label}
              </Link>
            )
          )}
          <Link
            to="/contacto"
            className="bg-primary text-primary-foreground px-5 py-2 text-sm font-bold transition-all hover:opacity-90 hover:scale-105"
            style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', letterSpacing: "0.08em", borderRadius: "2px" }}
          >
            COTIZAR AHORA
          </Link>
        </div>

        <button className="md:hidden transition-colors" onClick={() => setOpen(!open)}>
          {open ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-primary" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 flex flex-col gap-4 shadow-lg">
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
          <Link to="/contacto" className="bg-primary text-primary-foreground px-5 py-2 text-sm font-bold text-center transition-all hover:opacity-90 hover:scale-105" style={{ fontFamily: '"Myriad Pro", "Segoe UI", sans-serif', letterSpacing: "0.08em", borderRadius: "2px" }} onClick={() => setOpen(false)}>
            COTIZAR AHORA
          </Link>
        </div>
      )}
    </nav>
  );
}