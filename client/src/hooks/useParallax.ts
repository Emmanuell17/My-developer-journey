import { useEffect, useState } from "react";

export function useParallax() {
  const [offset, setOffset] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
        setProgress(Math.min(window.scrollY / max, 1));
        if (motion.matches) {
          setOffset(0);
        } else {
          const dampen = window.innerWidth < 768 ? 0.45 : 1;
          setOffset(window.scrollY * dampen);
        }
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    motion.addEventListener("change", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      motion.removeEventListener("change", onScroll);
    };
  }, []);

  return { offset, progress };
}
