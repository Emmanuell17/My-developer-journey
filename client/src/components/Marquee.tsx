interface MarqueeProps {
  offset: number;
}

const ITEMS = [
  "TypeScript",
  "Angular",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "AWS",
  "LookOwt",
  "175+ countries",
];

export function Marquee({ offset }: MarqueeProps) {
  return (
    <div className="overflow-hidden border-y border-line py-6 md:py-8">
      <div
        className="flex w-max gap-10 will-change-transform"
        style={{ transform: `translate3d(${-offset * 0.35}px, 0, 0)` }}
      >
        {[...ITEMS, ...ITEMS, ...ITEMS].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="font-display text-4xl font-bold tracking-tight text-cream/12 md:text-6xl"
          >
            {item}
            <span className="ml-10 text-copper/40">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
