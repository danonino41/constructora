"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Home,
  Landmark,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { NAV_LINKS, PROGRAM_LINKS, SERVICES } from "@/data/content";
import logo from "@/imports/logo.png";

const FONT = '"Myriad Pro", "Segoe UI", sans-serif';

type MenuKey = "Programas" | "Servicios";

type MenuItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  desc: string;
};

type MenuConfig = {
  eyebrow: string;
  title: string;
  desc: string;
  href: string;
  cta: string;
  items: MenuItem[];
};

const PROGRAM_META: Record<string, { icon: LucideIcon; desc: string }> = {
  "/programas/techo-propio": {
    icon: Home,
    desc: "Bono Familiar Habitacional para construir, comprar o mejorar tu vivienda.",
  },
  "/programas/reforzamiento": {
    icon: ShieldCheck,
    desc: "Refuerzo sísmico para hogares en zonas vulnerables.",
  },
  "/programas/credito-mivivienda": {
    icon: Landmark,
    desc: "Financiamiento hipotecario para comprar o construir tu casa.",
  },
};

const PROGRAM_ITEMS: MenuItem[] = PROGRAM_LINKS.map((program) => ({
  label: program.label,
  href: program.href,
  icon: PROGRAM_META[program.href]?.icon ?? Home,
  desc: PROGRAM_META[program.href]?.desc ?? "",
}));

const SERVICE_DESCRIPTIONS: Record<string, string> = {
  "construccion-a-llave": "Entregamos tu vivienda lista para habitar.",
  "diseno-arquitectonico": "Planos 3D, renders y asesoría certificada.",
  "habilitacion-urbana": "Licencias, permisos y trámites para tu terreno.",
  "plazos-garantizados": "Cumplimos el cronograma o asumimos la penalidad.",
};

const SERVICE_ITEMS: MenuItem[] = SERVICES.map((service) => ({
  label: service.title,
  href: `/servicios/${service.slug}`,
  icon: service.icon,
  desc: SERVICE_DESCRIPTIONS[service.slug] ?? service.desc,
}));

const MENUS: Record<MenuKey, MenuConfig> = {
  Programas: {
    eyebrow: "PROGRAMAS",
    title: "Encuentra el apoyo para tu vivienda",
    desc: "Te orientamos según tu caso, tu terreno y tu capacidad de ahorro.",
    href: "/programas",
    cta: "Ver todos los programas",
    items: PROGRAM_ITEMS,
  },
  Servicios: {
    eyebrow: "SERVICIOS",
    title: "Todo el proceso, con un solo equipo",
    desc: "Diseño, trámites y construcción con acompañamiento real.",
    href: "/servicios",
    cta: "Ver todos los servicios",
    items: SERVICE_ITEMS,
  },
};

function ActiveLine() {
  return (
    <span
      aria-hidden
      className="absolute bottom-0 left-3 right-3"
      style={{ height: 2, borderRadius: 2, background: "#f5b700" }}
    />
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<MenuKey | null>(null);
  const [mobileSection, setMobileSection] = useState<MenuKey | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMenu(null);
    setMobileSection(null);
  }, [pathname]);

  useEffect(() => {
    if (!menu) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenu(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menu]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth < 768) setMenu(null);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // En la home (sobre el slider a pantalla completa) el header es transparente
  // hasta que el usuario hace scroll o abre un menú; en el resto de rutas es sólido.
  const transparent = pathname === "/" && !scrolled && !open && !menu;
  const linkColor = transparent ? "#ffffff" : "#3d3d3c";
  const activeColor = transparent ? "#ffffff" : "#173B66";

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  const toggleMenu = (key: MenuKey) => {
    setMenu((current) => (current === key ? null : key));
  };

  return (
    <>
      {menu && (
        <div
          aria-hidden
          onClick={() => setMenu(null)}
          className="fixed inset-0 top-[var(--header-h)] hidden md:block"
          style={{ zIndex: 40, background: "rgba(13,15,20,0.34)", backdropFilter: "blur(4px)", WebkitBackdropFilter: "blur(4px)" }}
        />
      )}

      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: transparent ? "transparent" : "rgba(255,255,255,0.96)",
        borderBottom: transparent ? "1px solid rgba(255,255,255,0.14)" : "1px solid rgba(23,59,102,0.10)",
        backdropFilter: transparent ? "none" : "blur(14px)",
        WebkitBackdropFilter: transparent ? "none" : "blur(14px)",
        boxShadow: transparent
          ? "none"
          : scrolled || menu
            ? "0 8px 28px rgba(23,32,46,0.10)"
            : "0 2px 12px rgba(23,32,46,0.05)",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-6 py-3 md:py-4 flex items-center justify-between gap-4">
        {/* Logo protagonista */}
        <Link
          href="/"
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
              src={logo.src}
              alt="Consorcio Constructor"
              className="w-auto object-contain h-12 sm:h-14 md:h-16 lg:h-20"
            />
          </span>
          <span className="hidden xl:flex flex-col leading-tight">
            <span
              style={{
                fontFamily: FONT,
                fontWeight: 700,
                fontSize: "0.95rem",
                color: transparent ? "#ffffff" : "#173B66",
                letterSpacing: "0.06em",
              }}
            >
              CONSORCIO
            </span>
            <span
              style={{
                fontFamily: FONT,
                fontWeight: 500,
                fontSize: "0.7rem",
                color: transparent ? "rgba(255,255,255,0.75)" : "#8a8a88",
                letterSpacing: "0.22em",
              }}
            >
              CONSTRUCTOR
            </span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-0.5 lg:gap-1 xl:gap-3">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            const menuKey = link.label === "Programas" || link.label === "Servicios" ? (link.label as MenuKey) : null;

            if (menuKey) {
              const isOpen = menu === menuKey;

              return (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => toggleMenu(menuKey)}
                  aria-haspopup="true"
                  aria-expanded={isOpen}
                  aria-controls={`mega-${menuKey}`}
                  aria-current={active ? "page" : undefined}
                  className="relative inline-flex items-center gap-1 px-2.5 py-2.5 text-sm transition-colors duration-200 hover:text-primary"
                  style={{
                    fontFamily: FONT,
                    fontWeight: active || isOpen ? 700 : 500,
                    color: active || isOpen ? activeColor : linkColor,
                    letterSpacing: "0.04em",
                    cursor: "pointer",
                  }}
                >
                  {link.label}
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    style={{ color: "#f5b700" }}
                  />
                  {active && <ActiveLine />}
                </button>
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className="relative inline-flex items-center px-2.5 py-2.5 text-sm transition-colors duration-200 hover:text-primary"
                style={{
                  fontFamily: FONT,
                  fontWeight: active ? 700 : 500,
                  color: active ? activeColor : linkColor,
                  letterSpacing: "0.04em",
                }}
              >
                {link.label}
                {active && <ActiveLine />}
              </Link>
            );
          })}

          <Link
            href="/contacto"
            className="ml-2 bg-primary text-primary-foreground px-5 py-2.5 text-sm font-bold whitespace-nowrap shrink-0 transition-all hover:opacity-90 hover:scale-105"
            style={{ fontFamily: FONT, letterSpacing: "0.08em", borderRadius: "3px" }}
          >
            <span className="hidden xl:inline">SOLICITA </span>INFORMACIÓN
          </Link>
        </div>

        <button
          className="md:hidden transition-colors shrink-0"
          onClick={() => {
            setOpen((value) => !value);
            setMenu(null);
          }}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? (
            <X size={26} style={{ color: transparent ? "#ffffff" : "#173B66" }} />
          ) : (
            <Menu size={26} style={{ color: transparent ? "#ffffff" : "#173B66" }} />
          )}
        </button>
      </div>

      {menu && (
        <div id={`mega-${menu}`} role="region" aria-label={`Menú de ${menu}`} className="absolute left-0 right-0 top-full hidden md:block" style={{ zIndex: 50 }}>
            <div className="relative mx-auto mt-3 w-[min(72rem,calc(100vw-3rem))] overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/10">
              <button
                type="button"
                onClick={() => setMenu(null)}
                aria-label="Cerrar menú"
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-[#173B66]"
              >
                <X size={18} />
              </button>

              <div className="grid gap-8 p-7 pr-16 lg:grid-cols-[0.72fr_1.6fr] lg:p-8 lg:pr-20">
                <div className="flex flex-col">
                  <span style={{ fontFamily: FONT, fontSize: "0.7rem", fontWeight: 700, color: "#f5b700", letterSpacing: "0.2em" }}>
                    {MENUS[menu].eyebrow}
                  </span>
                  <h2 style={{ fontFamily: FONT, fontWeight: 700, fontSize: "clamp(1.45rem, 2.2vw, 1.9rem)", color: "#173B66", lineHeight: 1.08, marginTop: "0.6rem", maxWidth: "18rem" }}>
                    {MENUS[menu].title}
                  </h2>
                  <p className="mt-3" style={{ fontFamily: FONT, fontSize: "0.86rem", lineHeight: 1.7, color: "#6b7480", maxWidth: "18rem" }}>
                    {MENUS[menu].desc}
                  </p>
                  <Link
                    href={MENUS[menu].href}
                    onClick={() => setMenu(null)}
                    className="group mt-6 inline-flex items-center gap-2 font-bold transition-all hover:gap-3"
                    style={{ fontFamily: FONT, fontSize: "0.78rem", letterSpacing: "0.08em", color: "#173B66" }}
                  >
                    {MENUS[menu].cta.toUpperCase()} <ArrowRight size={15} style={{ color: "#f5b700" }} />
                  </Link>
                </div>

                <div className="grid content-start gap-2 sm:grid-cols-2">
                  {MENUS[menu].items.map((item) => {
                    const Icon = item.icon;
                    const activeItem = isActive(item.href);

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMenu(null)}
                        aria-current={activeItem ? "page" : undefined}
                        className={`group flex gap-3 rounded-xl p-3.5 transition-colors ${activeItem ? "bg-[#fff8e1]" : "hover:bg-[#f7f8fa]"}`}
                      >
                        <span
                          className="grid shrink-0 place-items-center"
                          style={{
                            width: 38,
                            height: 38,
                            borderRadius: 10,
                            background: activeItem ? "#f5b700" : "#eef2f7",
                            color: activeItem ? "#0d0f14" : "#173B66",
                          }}
                        >
                          <Icon size={18} />
                        </span>
                        <span className="min-w-0">
                          <span className="flex items-center gap-2" style={{ fontFamily: FONT, fontSize: "0.9rem", fontWeight: 700, color: "#2f3338" }}>
                            {item.label}
                            {activeItem && (
                              <span style={{ fontFamily: FONT, fontSize: "0.58rem", fontWeight: 700, color: "#b58900", letterSpacing: "0.08em" }}>
                                ACTUAL
                              </span>
                            )}
                          </span>
                          <span className="mt-1 line-clamp-2" style={{ fontFamily: FONT, fontSize: "0.76rem", lineHeight: 1.55, color: "#7b8490" }}>
                            {item.desc}
                          </span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
      )}

      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 px-5 py-5 flex flex-col gap-3 shadow-lg max-h-[80vh] overflow-y-auto">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            const menuKey = link.label === "Programas" || link.label === "Servicios" ? (link.label as MenuKey) : null;

            if (menuKey) {
              const isExpanded = mobileSection === menuKey;

              return (
                <div key={link.label} className="flex flex-col">
                  <button
                    type="button"
                    onClick={() => setMobileSection(isExpanded ? null : menuKey)}
                    aria-expanded={isExpanded}
                    className="flex items-center justify-between py-1"
                  >
                    <span style={{ fontFamily: FONT, fontSize: "0.9rem", fontWeight: active ? 700 : 500, color: active ? "#173B66" : "#5c5c5a" }}>
                      {link.label}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                      style={{ color: "#f5b700" }}
                    />
                  </button>

                  {isExpanded && (
                    <div className="mt-1.5 flex flex-col gap-1 border-l-2 pl-4" style={{ borderColor: "#f5b700" }}>
                      {MENUS[menuKey].items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="py-1.5 text-sm text-gray-600 transition-colors hover:text-primary"
                          style={{ fontFamily: FONT }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className="py-1 text-sm transition-colors hover:text-primary"
                style={{ fontFamily: FONT, fontWeight: active ? 700 : 500, color: active ? "#173B66" : "#5c5c5a" }}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/contacto"
            className="mt-2 bg-primary text-primary-foreground px-5 py-3 text-sm font-bold text-center transition-all hover:opacity-90"
            style={{ fontFamily: FONT, letterSpacing: "0.08em", borderRadius: "3px" }}
            onClick={() => setOpen(false)}
          >
            SOLICITA INFORMACIÓN
          </Link>
        </div>
      )}
      </nav>
    </>
  );
}
