import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        shown ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

interface SectionHeaderProps {
  index: string;
  kicker: string;
  title: string;
}

export function SectionHeader({ index, kicker, title }: SectionHeaderProps) {
  return (
    <Reveal className="mb-10 md:mb-16">
      <p className="mb-3 font-display text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-copper">
        {index} · {kicker}
      </p>
      <h2 className="font-display text-4xl font-bold tracking-tight text-cream sm:text-5xl md:text-6xl">
        {title}
      </h2>
    </Reveal>
  );
}
