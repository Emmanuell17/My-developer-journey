import { useEffect, useState } from "react";
import { FALLBACK_DATA } from "../data/portfolio";
import type { PortfolioData } from "../types/portfolio";

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
