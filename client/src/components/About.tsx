import type { PortfolioData } from "../types/portfolio";
import { Reveal, SectionHeader } from "./Reveal";

interface AboutProps {
  summary: string;
  education: PortfolioData["education"];
  certifications: PortfolioData["certifications"];
  languages: PortfolioData["languages"];
}

export function About({ summary, education, certifications, languages }: AboutProps) {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto w-[min(1120px,92vw)]">
        <SectionHeader index="01" kicker="Profile" title="About" />

        <Reveal>
          <p className="max-w-3xl text-lg leading-relaxed text-cream-muted md:text-xl">
            {summary}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {education.map((item) => (
            <Reveal key={item.id}>
              <article className="h-full rounded-3xl border border-line bg-ink-2/60 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-copper/40">
                <p className="text-xs uppercase tracking-[0.22em] text-copper">Education</p>
                <h3 className="mt-4 font-display text-2xl font-semibold">{item.degree}</h3>
                <p className="mt-2 text-cream-muted">
                  {item.institution}
                  <br />
                  {item.location}
                </p>
                <p className="mt-4 text-sm text-cream/70">
                  {item.startDate} — {item.endDate}
                </p>
                {item.note && <p className="mt-3 text-sm text-teal">{item.note}</p>}
              </article>
            </Reveal>
          ))}

          <Reveal delay={80}>
            <article className="h-full rounded-3xl border border-line bg-ink-2/60 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-copper/40">
              <p className="text-xs uppercase tracking-[0.22em] text-copper">Certifications</p>
              <ul className="mt-4 space-y-4">
                {certifications.map((cert) => (
                  <li key={cert.id}>
                    <p className="font-medium">{cert.name}</p>
                    <p className="text-sm text-cream-muted">
                      {cert.issuer}
                      {cert.date ? ` · ${cert.date}` : ""}
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={160}>
            <article className="h-full rounded-3xl border border-line bg-ink-2/60 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-copper/40">
              <p className="text-xs uppercase tracking-[0.22em] text-copper">Languages</p>
              <ul className="mt-4 space-y-4">
                {languages.map((lang) => (
                  <li key={lang.name} className="flex items-baseline justify-between gap-3">
                    <span className="font-medium">{lang.name}</span>
                    <span className="text-sm text-cream-muted">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
