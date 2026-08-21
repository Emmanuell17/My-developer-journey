import type { PortfolioData } from "../types/portfolio";
import { Reveal, SectionHeader } from "./Reveal";

interface ExperienceProps {
  experience: PortfolioData["experience"];
}

export function Experience({ experience }: ExperienceProps) {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="mx-auto w-[min(1120px,92vw)]">
        <SectionHeader index="02" kicker="Career" title="Experience" />

        <div className="relative space-y-8 before:absolute before:top-3 before:bottom-3 before:left-[11px] before:w-px before:bg-line md:before:left-[19px]">
          {experience.map((job, index) => (
            <Reveal key={job.id} delay={index * 90}>
              <article className="relative grid gap-6 pl-10 md:grid-cols-[220px_1fr] md:pl-16">
                <span className="absolute top-2 left-0 h-6 w-6 rounded-full border-2 border-copper bg-ink md:h-10 md:w-10" />
                <div>
                  <p className="text-sm text-copper">
                    {job.startDate} — {job.endDate}
                  </p>
                  <p className="mt-2 text-sm text-cream-muted">{job.location}</p>
                  {job.current && (
                    <span className="mt-3 inline-flex rounded-full border border-teal/40 px-2.5 py-1 text-[11px] uppercase tracking-[0.16em] text-teal">
                      Current
                    </span>
                  )}
                </div>

                <div className="rounded-3xl border border-line bg-ink-2/50 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-copper/35 md:p-8">
                  <h3 className="font-display text-2xl font-semibold md:text-3xl">{job.role}</h3>
                  <p className="mt-1 text-cream-muted">{job.company}</p>
                  <p className="mt-5 leading-relaxed text-cream/80">{job.description}</p>
                  <ul className="mt-5 space-y-3 text-sm leading-relaxed text-cream-muted">
                    {job.highlights.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {job.stack.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line px-3 py-1 text-xs text-cream-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
