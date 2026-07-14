import { useEffect, useState } from "react";
import type { PortfolioData } from "../types/portfolio";

const FALLBACK_DATA: PortfolioData = {
  profile: {
    name: "Emmanuel Odu",
    title: "Software Engineer & Web Developer",
    location: "Debrecen, Hungary",
    phone: "+36703032003",
    email: "immanuelodu@gmail.com",
    bio: "Final-year Computer Science student and software developer focused on building modern, scalable web applications.",
    links: {
      github: "https://github.com/Emmanuell17",
      linkedin: "https://www.linkedin.com/in/emmanuel-odu",
      portfolio: "https://github.com/Emmanuell17/My-developer-journey",
    },
  },
  skills: { technical: [], tools: [], other: [] },
  experience: [],
  education: [],
  certifications: [],
  projects: [],
  languages: [],
  hobbies: [],
};

export function usePortfolio() {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchPortfolio() {
      try {
        const res = await fetch("/api/portfolio");
        if (!res.ok) throw new Error("Failed to load portfolio data");
        const json = (await res.json()) as PortfolioData;
        if (!cancelled) setData(json);
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Unknown error");
          setData(FALLBACK_DATA);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchPortfolio();
    return () => {
      cancelled = true;
    };
  }, []);

  return { data, loading, error };
}
