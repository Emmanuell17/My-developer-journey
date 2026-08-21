import { useEffect, useState } from "react";
import { useActiveSection } from "../hooks/useActiveSection";
import { IconClose, IconMenu } from "./Icons";

const NAV_ITEMS = [
  { href: "#about", id: "about", label: "About" },
  { href: "#experience", id: "experience", label: "Work" },
  { href: "#projects", id: "projects", label: "Projects" },
  { href: "#skills", id: "skills", label: "Skills" },
  { href: "#contact", id: "contact", label: "Contact" },
];

const SECTION_IDS = ["top", ...NAV_ITEMS.map((item) => item.id)];

interface NavbarProps {
  name: string;
  email: string;
}

export function Navbar({ name, email }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-ink/80 py-3 backdrop-blur-xl" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex w-[min(1120px,92vw)] items-center justify-between gap-4">
        <a
          href="#top"
          className="group flex items-center gap-3 font-display text-sm font-semibold tracking-wide"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-10 w-10 place-content-center rounded-full border border-line bg-ink-2 text-copper transition-transform duration-500 group-hover:rotate-12">
            EO
          </span>
          <span className="hidden sm:inline">{name}</span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-line bg-ink-2/70 px-2 py-1 backdrop-blur-md md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                active === item.id
                  ? "bg-cream text-ink"
                  : "text-cream-muted hover:text-cream"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={`mailto:${email}`}
          className="hidden rounded-full border border-copper/40 px-4 py-2 text-sm text-copper transition-all duration-300 hover:bg-copper hover:text-ink md:inline-flex"
        >
          Email
        </a>

        <button
          type="button"
          className="grid h-11 w-11 place-content-center rounded-full border border-line text-cream md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        } absolute inset-x-0 top-full border-b border-line bg-ink/95 backdrop-blur-xl transition-opacity duration-300`}
      >
        <nav className="mx-auto flex w-[min(1120px,92vw)] flex-col gap-2 py-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-lg text-cream transition-colors duration-300 hover:bg-ink-2"
            >
              {item.label}
            </a>
          ))}
          <a
            href={`mailto:${email}`}
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-copper px-4 py-3 text-center font-medium text-ink"
          >
            Email me
          </a>
        </nav>
      </div>
    </header>
  );
}
