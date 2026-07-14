import cors from "cors";
import express from "express";
import portfolioRouter from "./routes/portfolio.js";

const app = express();
const PORT = process.env.PORT ?? 3001;

app.use(cors());
app.use(express.json());

app.use("/api/portfolio", portfolioRouter);

app.get("/", (_req, res) => {
  res.json({
    message: "Emmanuel Odu Portfolio API",
    endpoints: ["/api/portfolio", "/api/portfolio/projects", "/api/portfolio/health"],
  });
});

app.listen(PORT, () => {
  console.log(`Portfolio API running at http://localhost:${PORT}`);
});
