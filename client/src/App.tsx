import { About } from "./components/About";
import { Contact, Footer } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Navbar } from "./components/Navbar";
import { ParallaxScene, ScrollProgress } from "./components/ParallaxScene";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { useParallax } from "./hooks/useParallax";
import { usePortfolio } from "./hooks/usePortfolio";

function App() {
  const { data, loading, error } = usePortfolio();
  const { offset, progress } = useParallax();

  if (loading) {
    return (
      <div className="grid min-h-screen place-content-center bg-ink text-cream-muted">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-line border-t-copper" />
        <p className="mt-4 text-sm tracking-wide">Loading portfolio…</p>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink text-cream">
      <div className="grain" />
      <ParallaxScene offset={offset} />
      <ScrollProgress progress={progress} />
      {error && (
        <div className="relative z-40 bg-copper/15 px-4 py-2 text-center text-sm text-copper-bright">
          API unavailable. Showing cached profile.
        </div>
      )}
      <Navbar name={data.profile.name} email={data.profile.email} />
      <Hero profile={data.profile} offset={offset} />
      <Marquee offset={offset} />
      <About
        summary={data.profile.summary}
        education={data.education}
        certifications={data.certifications}
        languages={data.languages}
      />
      <Experience experience={data.experience} />
      <Projects projects={data.projects} />
      <Skills skills={data.skills} />
      <Contact profile={data.profile} offset={offset} />
      <Footer name={data.profile.name} links={data.profile.links} />
    </div>
  );
}

export default App;
