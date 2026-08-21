import type { PortfolioData } from "../types/portfolio";
import { Reveal, SectionHeader } from "./Reveal";

interface SkillsProps {
  skills: PortfolioData["skills"];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="mx-auto w-[min(1120px,92vw)]">
        <SectionHeader index="04" kicker="Toolkit" title="Skills" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => (
            <Reveal key={group.category} delay={index * 70}>
              <article className="h-full rounded-3xl border border-line bg-ink-2/50 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-copper/35">
                <h3 className="font-display text-xl font-semibold">{group.category}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line bg-ink/40 px-3 py-1.5 text-sm text-cream-muted transition-all duration-300 hover:border-copper/50 hover:text-cream"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
