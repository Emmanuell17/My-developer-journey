interface ParallaxSceneProps {
  offset: number;
}

export function ParallaxScene({ offset }: ParallaxSceneProps) {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div
        className="absolute -top-40 -left-24 h-[28rem] w-[28rem] rounded-full bg-copper/15 blur-3xl will-change-transform"
        style={{ transform: `translate3d(0, ${offset * 0.22}px, 0)` }}
      />
      <div
        className="absolute top-[32%] -right-32 h-[34rem] w-[34rem] rounded-full bg-teal/12 blur-3xl will-change-transform"
        style={{ transform: `translate3d(0, ${offset * -0.16}px, 0)` }}
      />
      <div
        className="absolute bottom-[-10%] left-[20%] h-[22rem] w-[22rem] rounded-full bg-copper/8 blur-3xl will-change-transform"
        style={{ transform: `translate3d(0, ${offset * 0.1}px, 0)` }}
      />
      <div
        className="absolute inset-0 opacity-[0.07] will-change-transform"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(244,239,230,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(244,239,230,0.5) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          transform: `translate3d(0, ${offset * 0.08}px, 0)`,
        }}
      />
    </div>
  );
}

interface ScrollProgressProps {
  progress: number;
}

export function ScrollProgress({ progress }: ScrollProgressProps) {
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-[2px] bg-transparent">
      <div
        className="h-full bg-copper transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
