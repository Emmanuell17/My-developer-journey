import { useEffect, useState } from "react";

const QUESTION = "If the model can write the function, who still owns the failure?";

export function TypeQuestion() {
  const [shown, setShown] = useState("");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) {
      setShown(QUESTION);
      return;
    }

    let index = 0;
    const id = window.setInterval(() => {
      index += 1;
      setShown(QUESTION.slice(0, index));
      if (index >= QUESTION.length) window.clearInterval(id);
    }, 36);

    return () => window.clearInterval(id);
  }, []);

  return (
    <p
      className="max-w-3xl font-mono text-[0.95rem] leading-relaxed text-cream/80 md:text-lg"
      aria-label={QUESTION}
    >
      <span className="mr-3 text-copper" aria-hidden>
        ›
      </span>
      <span>{shown}</span>
      <span
        className="ml-0.5 inline-block h-[1.05em] w-[0.55ch] translate-y-[0.18em] bg-copper align-text-bottom animate-cursor"
        aria-hidden
      />
    </p>
  );
}
