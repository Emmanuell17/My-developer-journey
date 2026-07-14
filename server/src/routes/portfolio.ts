import { Router } from "express";
import { portfolioData } from "../data/portfolio.js";

const router = Router();

router.get("/", (_req, res) => {
  res.json(portfolioData);
});

router.get("/projects", (_req, res) => {
  res.json(portfolioData.projects);
});

router.get("/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

export default router;
