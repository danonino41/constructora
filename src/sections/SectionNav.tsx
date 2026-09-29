import { useEffect, useState } from "react";

export type NavSection = { id: string; label: string };

type Props = {
  sections: NavSection[];
  offset?: number;
  top?: string;
};

export default function SectionNav({ sections, offset = 130, top = "7.4rem" }: Props) {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const onScroll = () => {
      let current = sections[0].id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= offset + 24) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections, offset]);

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: "smooth" });
  };

  return (
    <div className="sticky z-40" style={{ top, background: "rgba(255,255,255,0.97)", backdropFilter: "blur(10px)", borderBottom: "1px solid #eceae4" }}>
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center gap-7 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          {sections.map((s) => {
            const isActive = active === s.id;
            return (
              <button
                key={s.id}
                onClick={() => go(s.id)}
                className="relative py-4 whitespace-nowrap transition-colors"
                style={{
                  fontFamily: '"Myriad Pro", "Segoe UI", sans-serif',
                  fontSize: "0.85rem",
                  fontWeight: isActive ? 700 : 400,
                  letterSpacing: "0.05em",
                  color: isActive ? "#4a4a49" : "#6b7480",
                }}
              >
                {s.label}
                <span
                  className="absolute left-0 right-0 bottom-0 transition-all duration-300"
                  style={{ height: 3, background: isActive ? "#f5b700" : "transparent" }}
                />
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}