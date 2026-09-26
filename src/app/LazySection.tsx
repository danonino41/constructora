import { Suspense, useEffect, useRef, useState } from "react";
import type { ComponentType, LazyExoticComponent } from "react";

type SectionProps = {
  id?: string;
  Comp: LazyExoticComponent<ComponentType<Record<string, never>>>;
  minHeight?: number;
};

export function LazySection({ id, Comp, minHeight = 300 }: SectionProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: "600px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      id={id}
      data-section={id ?? undefined}
      style={{ minHeight: visible ? undefined : minHeight }}
    >
      {visible && (
        <Suspense fallback={<div style={{ minHeight }} />}>
          <Comp />
        </Suspense>
      )}
    </div>
  );
}