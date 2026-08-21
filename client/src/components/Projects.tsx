import type { PortfolioData } from "../types/portfolio";
import { IconExternal, IconGithub } from "./Icons";
import { Reveal, SectionHeader } from "./Reveal";

interface ProjectsProps {
  projects: PortfolioData["projects"];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="mx-auto w-[min(1120px,92vw)]">
        <SectionHeader index="03" kicker="Selected work" title="Projects" />
        <Reveal>
          <p className="mb-12 max-w-2xl text-lg text-cream-muted">
            Full-stack products spanning scheduling, inventory, and consumer web — plus the live
            LookOwt dashboard shipped at Glodux Digital Labs.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal
              key={project.id}
              delay={index * 80}
              className={index === 0 ? "md:col-span-2" : ""}
            >
              <article
                className={`group flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-line bg-ink-2/50 p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-copper/40 hover:shadow-[0_24px_80px_rgba(0,0,0,0.35)] md:p-8 ${
                  index === 0 ? "md:min-h-[280px] md:flex-row md:items-end md:gap-10" : ""
                }`}
              >
                <div className={index === 0 ? "md:max-w-2xl" : ""}>
                  <p className="text-xs uppercase tracking-[0.22em] text-copper">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 font-display text-2xl font-semibold md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 max-w-2xl leading-relaxed text-cream-muted">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line px-3 py-1 text-xs text-cream-muted transition-colors duration-300 group-hover:border-copper/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2 text-sm font-medium text-ink transition-all duration-300 hover:bg-copper"
                    >
                      Live site
                      <IconExternal className="h-4 w-4" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center rounded-full border border-line px-4 py-2 text-sm text-cream-muted">
                      Live link coming soon
                    </span>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-cream transition-all duration-300 hover:border-copper/50 hover:text-copper"
                    >
                      <IconGithub className="h-4 w-4" />
                      Source
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
