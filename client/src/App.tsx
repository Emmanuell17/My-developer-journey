import { useScrollReveal } from "./hooks/useScrollReveal";
import { usePortfolio } from "./hooks/usePortfolio";
import {
  About,
  Contact,
  Experience,
  Footer,
  Hero,
  Navbar,
  Projects,
  Skills,
} from "./components/Portfolio";

function App() {
  const { data, loading, error } = usePortfolio();
  useScrollReveal(!loading && !!data);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner" />
        <p>Loading portfolio…</p>
      </div>
    );
  }

  if (!data) return null;

  return (
    <>
      {error && (
        <div className="api-banner">
          API unavailable — showing cached profile. Start the server with <code>npm run dev</code>.
        </div>
      )}
      <Navbar name={data.profile.name} />
      <Hero profile={data.profile} />
      <About
        education={data.education}
        certifications={data.certifications}
        languages={data.languages}
        hobbies={data.hobbies}
      />
      <Experience experience={data.experience} />
      <Projects projects={data.projects} />
      <Skills skills={data.skills} />
      <Contact profile={data.profile} />
      <Footer name={data.profile.name} links={data.profile.links} />
    </>
  );
}

export default App;
