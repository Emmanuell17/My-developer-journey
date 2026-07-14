import { useEffect } from "react";

export function useScrollReveal(active = true) {
  useEffect(() => {
    if (!active) return;

    const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');

    const handleClick = (event: Event) => {
      const anchor = event.currentTarget as HTMLAnchorElement;
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const target = document.querySelector(targetId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    anchors.forEach((anchor) => anchor.addEventListener("click", handleClick));

    const revealElements = document.querySelectorAll<HTMLElement>(".reveal");
    let observer: IntersectionObserver | undefined;

    if ("IntersectionObserver" in window && revealElements.length) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("reveal-visible");
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      revealElements.forEach((el) => observer?.observe(el));
    } else {
      revealElements.forEach((el) => el.classList.add("reveal-visible"));
    }

    return () => {
      anchors.forEach((anchor) => anchor.removeEventListener("click", handleClick));
      observer?.disconnect();
    };
  }, [active]);
}
