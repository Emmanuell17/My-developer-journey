import type { PortfolioData } from "../types/portfolio";
import { IconArrow, IconGithub, IconLinkedin, IconPin } from "./Icons";

interface HeroProps {
  profile: PortfolioData["profile"];
  offset: number;
}

export function Hero({ profile, offset }: HeroProps) {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-28">
      <div className="mx-auto grid w-[min(1120px,92vw)] items-center gap-12 pb-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pb-8 lg:pt-10">
        <div
          className="will-change-transform"
          style={{ transform: `translate3d(0, ${offset * 0.12}px, 0)` }}
        >
          <div className="animate-rise-in">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-ink-2/80 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-cream-muted">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal" />
            Available for work
          </p>

          <p className="mb-3 font-display text-sm uppercase tracking-[0.28em] text-copper">
            {profile.title} · {profile.headline.split(" · ")[0]}
          </p>

          <h1 className="font-display text-[clamp(3.2rem,10vw,7.4rem)] font-extrabold leading-[0.88] tracking-tight text-cream">
            Emmanuel
            <span className="block text-cream/35">Odu</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-cream-muted md:text-xl">
            {profile.bio}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-cream-muted">
            <span className="inline-flex items-center gap-2">
              <IconPin className="h-4 w-4 text-copper" />
              {profile.location}
            </span>
            <span className="hidden h-3 w-px bg-line sm:block" />
            <span>{profile.headline}</span>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-copper px-6 py-3 font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-copper-bright"
            >
              View my work
              <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-cream transition-all duration-300 hover:border-copper/50 hover:text-copper"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-8 flex items-center gap-5 text-sm text-cream-muted">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-cream"
            >
              <IconGithub className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-cream"
            >
              <IconLinkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
          </div>
        </div>

        <div
          className="relative mx-auto grid h-[min(420px,70vw)] w-[min(420px,70vw)] place-content-center will-change-transform lg:h-[480px] lg:w-[480px]"
          style={{ transform: `translate3d(0, ${offset * -0.18}px, 0)` }}
        >
          <div className="animate-pulse-ring absolute inset-0 rounded-full border border-copper/20" />
          <div className="animate-spin-slow absolute inset-8 rounded-full border border-dashed border-cream/15" />
          <div className="absolute inset-16 rounded-full border border-line" />
          <div className="animate-float relative z-10 grid h-40 w-40 place-content-center rounded-full bg-gradient-to-br from-copper to-teal shadow-[0_0_80px_rgba(201,160,106,0.25)] sm:h-48 sm:w-48">
            <span className="font-display text-5xl font-extrabold text-ink sm:text-6xl">EO</span>
          </div>
          <span className="absolute top-6 right-4 rounded-full border border-line bg-ink-2/80 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-cream-muted backdrop-blur-md">
            Angular
          </span>
          <span className="absolute bottom-10 left-0 rounded-full border border-line bg-ink-2/80 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-cream-muted backdrop-blur-md">
            LookOwt
          </span>
          <span className="absolute right-0 bottom-24 rounded-full border border-line bg-ink-2/80 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-cream-muted backdrop-blur-md">
            AWS
          </span>
        </div>
      </div>

      <div className="mx-auto mb-8 flex w-[min(1120px,92vw)] items-center gap-4 text-cream-muted">
        <span className="text-xs uppercase tracking-[0.28em]">Scroll</span>
        <span className="h-px flex-1 bg-line" />
        <span className="grid h-10 w-6 place-content-center rounded-full border border-line">
          <span className="h-2 w-1 animate-bounce rounded-full bg-cream/70" />
        </span>
      </div>
    </section>
  );
}
