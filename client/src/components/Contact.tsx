import type { PortfolioData } from "../types/portfolio";
import { IconGithub, IconLinkedin, IconMail, IconPhone, IconPin } from "./Icons";
import { Reveal, SectionHeader } from "./Reveal";

interface ContactProps {
  profile: PortfolioData["profile"];
  offset: number;
}

export function Contact({ profile, offset }: ContactProps) {
  const cards = [
    {
      href: `mailto:${profile.email}`,
      label: "Email",
      value: profile.email,
      icon: IconMail,
      external: false,
    },
    {
      href: `tel:${profile.phone}`,
      label: "Phone",
      value: profile.phoneDisplay,
      icon: IconPhone,
      external: false,
    },
    {
      href: profile.links.github,
      label: "GitHub",
      value: "@Emmanuell17",
      icon: IconGithub,
      external: true,
    },
    {
      href: profile.links.linkedin,
      label: "LinkedIn",
      value: "Emmanuel Odu",
      icon: IconLinkedin,
      external: true,
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-copper/15 blur-3xl will-change-transform"
        style={{ transform: `translate3d(0, ${offset * -0.08}px, 0)` }}
      />
      <div className="mx-auto w-[min(1120px,92vw)]">
        <SectionHeader index="05" kicker="Next" title="Let’s work" />
        <Reveal>
          <p className="max-w-2xl text-lg leading-relaxed text-cream-muted md:text-xl">
            Open to software engineering roles and collaborations. Currently shipping the LookOwt
            admin dashboard from {profile.location}.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {cards.map((card, index) => (
            <Reveal key={card.label} delay={index * 70}>
              <a
                href={card.href}
                target={card.external ? "_blank" : undefined}
                rel={card.external ? "noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-3xl border border-line bg-ink-2/60 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-copper/40"
              >
                <span className="grid h-12 w-12 shrink-0 place-content-center rounded-2xl border border-line text-copper transition-colors duration-300 group-hover:bg-copper group-hover:text-ink">
                  <card.icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.2em] text-cream-muted">
                    {card.label}
                  </span>
                  <strong className="mt-1 block font-medium break-all">{card.value}</strong>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6">
          <p className="inline-flex items-center gap-2 text-sm text-cream-muted">
            <IconPin className="h-4 w-4 text-copper" />
            {profile.location}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

interface FooterProps {
  name: string;
  links: PortfolioData["profile"]["links"];
}

export function Footer({ name, links }: FooterProps) {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex w-[min(1120px,92vw)] flex-col items-center justify-between gap-4 text-sm text-cream-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {name}. Built with React & Tailwind.
        </p>
        <div className="flex gap-6">
          <a href={links.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-cream">
            GitHub
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-cream">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
