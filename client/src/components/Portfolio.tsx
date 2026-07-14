import { useState } from "react";
import type { PortfolioData } from "../types/portfolio";

const NAV_ITEMS = [
  { href: "#about", label: "About", icon: "fa-regular fa-user" },
  { href: "#experience", label: "Experience", icon: "fa-solid fa-briefcase" },
  { href: "#projects", label: "Projects", icon: "fa-regular fa-window-maximize" },
  { href: "#skills", label: "Skills", icon: "fa-solid fa-layer-group" },
  { href: "#contact", label: "Contact", icon: "fa-regular fa-paper-plane" },
];

interface NavbarProps {
  name: string;
}

export function Navbar({ name }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <a className="navbar-brand" href="#top" onClick={() => setOpen(false)}>
          <span className="brand-icon">
            <i className="fa-solid fa-code" />
          </span>
          <span>{name}</span>
        </a>

        <button
          className="navbar-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`} />
        </button>

        <ul className={`navbar-links ${open ? "open" : ""}`}>
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setOpen(false)}>
                <i className={`${item.icon} nav-icon`} />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

interface HeroProps {
  profile: PortfolioData["profile"];
}

export function Hero({ profile }: HeroProps) {
  return (
    <section id="top" className="hero">
      <div className="hero-content reveal">
        <span className="hero-badge">
          <i className="fa-solid fa-user-graduate" />
          {profile.title}
        </span>

        <div className="hero-avatar">
          <span className="avatar-initials">EO</span>
        </div>

        <h1>{profile.name}</h1>
        <p className="hero-bio">{profile.bio}</p>

        <div className="hero-meta">
          <span>
            <i className="fa-solid fa-location-dot" /> {profile.location}
          </span>
          <span>
            <i className="fa-solid fa-envelope" /> {profile.email}
          </span>
        </div>

        <div className="hero-tags">
          <span className="hero-tag">Full-stack development</span>
          <span className="hero-tag">React &amp; TypeScript</span>
          <span className="hero-tag">Node.js</span>
          <span className="hero-tag">PostgreSQL</span>
        </div>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View my work <i className="fa-solid fa-arrow-right" />
          </a>
          <a href="#contact" className="btn btn-outline">
            Get in touch
          </a>
        </div>

        <div className="hero-links">
          <a href={profile.links.github} target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github" /> GitHub
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
            <i className="fa-brands fa-linkedin" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

interface AboutProps {
  education: PortfolioData["education"];
  certifications: PortfolioData["certifications"];
  languages: PortfolioData["languages"];
  hobbies: PortfolioData["hobbies"];
}

export function About({ education, certifications, languages, hobbies }: AboutProps) {
  return (
    <section id="about" className="section">
      <div className="container reveal">
        <SectionHeading icon="fa-regular fa-compass" title="About & Education" />

        <div className="grid-2">
          <div className="card">
            <h3>Education</h3>
            <div className="timeline">
              {education.map((item) => (
                <div key={item.id} className="timeline-item">
                  <div className="timeline-date">
                    {item.startDate} — {item.endDate}
                  </div>
                  <div className="timeline-title">{item.degree}</div>
                  <div className="timeline-sub">
                    {item.institution} · {item.location}
                  </div>
                  {item.note && <p className="timeline-note">{item.note}</p>}
                </div>
              ))}
            </div>
          </div>

          <div className="stack">
            <div className="card">
              <h3>Certifications</h3>
              <ul className="list">
                {certifications.map((cert) => (
                  <li key={cert.id}>
                    <strong>{cert.name}</strong>
                    <span>
                      {cert.issuer} · {cert.date}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h3>Languages</h3>
              <ul className="list">
                {languages.map((lang) => (
                  <li key={lang.name}>
                    <strong>{lang.name}</strong>
                    <span>{lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h3>Hobbies</h3>
              <div className="tag-row">
                {hobbies.map((hobby) => (
                  <span key={hobby} className="tag">
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ExperienceProps {
  experience: PortfolioData["experience"];
}

export function Experience({ experience }: ExperienceProps) {
  return (
    <section id="experience" className="section section-alt">
      <div className="container reveal">
        <SectionHeading icon="fa-solid fa-briefcase" title="Work Experience" />
        <div className="experience-grid">
          {experience.map((job) => (
            <article key={job.id} className="card experience-card">
              <div className="experience-header">
                <div>
                  <h3>{job.role}</h3>
                  <p className="company">
                    {job.company} · {job.location}
                  </p>
                </div>
                <span className="date-badge">
                  {job.startDate} — {job.endDate}
                </span>
              </div>
              <p>{job.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectsProps {
  projects: PortfolioData["projects"];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="section">
      <div className="container reveal">
        <SectionHeading icon="fa-regular fa-window-maximize" title="Websites I've Built" />
        <p className="section-lead">
          Live projects and reserved slots for more websites — update links in{" "}
          <code>server/src/data/portfolio.ts</code>.
        </p>

        <div className="projects-grid">
          {projects.map((project) => {
            const isPlaceholder = !project.liveUrl && !project.repoUrl;

            return (
              <article
                key={project.id}
                className={`project-card ${isPlaceholder ? "placeholder" : ""}`}
              >
                <div className="project-card-top">
                  <h3>{project.title}</h3>
                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag tag-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p>{project.description}</p>

                <div className="project-actions">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      className="btn btn-primary btn-sm"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" /> Live site
                    </a>
                  ) : (
                    <span className="btn btn-ghost btn-sm disabled">
                      <i className="fa-solid fa-link" /> Live link coming soon
                    </span>
                  )}
                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      className="btn btn-outline btn-sm"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-github" /> Source code
                    </a>
                  ) : (
                    <span className="btn btn-ghost btn-sm disabled">
                      <i className="fa-brands fa-github" /> Repo link coming soon
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface SkillsProps {
  skills: PortfolioData["skills"];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="section section-alt">
      <div className="container reveal">
        <SectionHeading icon="fa-solid fa-layer-group" title="Skills & Tools" />

        <div className="skills-grid">
          <div className="card">
            <h3>Technical</h3>
            <div className="tag-row">
              {skills.technical.map((skill) => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="card">
            <h3>Tools & Workflow</h3>
            <div className="tag-row">
              {skills.tools.map((skill) => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="card">
            <h3>Platforms</h3>
            <div className="tag-row">
              {skills.other.map((skill) => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ContactProps {
  profile: PortfolioData["profile"];
}

export function Contact({ profile }: ContactProps) {
  return (
    <section id="contact" className="section contact-section">
      <div className="container reveal">
        <SectionHeading icon="fa-regular fa-paper-plane" title="Let's Connect" light />
        <p className="section-lead light">
          Open to collaborations, internships, and full-time software engineering roles.
        </p>

        <div className="contact-grid">
          <a href={`mailto:${profile.email}`} className="contact-card">
            <i className="fa-solid fa-envelope" />
            <span>Email</span>
            <strong>{profile.email}</strong>
          </a>
          <a href={`tel:${profile.phone}`} className="contact-card">
            <i className="fa-solid fa-phone" />
            <span>Phone</span>
            <strong>{profile.phone}</strong>
          </a>
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="contact-card">
            <i className="fa-brands fa-github" />
            <span>GitHub</span>
            <strong>@Emmanuell17</strong>
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="contact-card">
            <i className="fa-brands fa-linkedin" />
            <span>LinkedIn</span>
            <strong>Emmanuel Odu</strong>
          </a>
        </div>
      </div>
    </section>
  );
}

interface FooterProps {
  name: string;
  links: PortfolioData["profile"]["links"];
}

export function Footer({ name, links }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>© {year} {name}. All rights reserved.</p>
        <div className="footer-links">
          <a href={links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

function SectionHeading({
  icon,
  title,
  light = false,
}: {
  icon: string;
  title: string;
  light?: boolean;
}) {
  return (
    <h2 className={`section-title ${light ? "light" : ""}`}>
      <i className={icon} /> {title}
    </h2>
  );
}
