# Emmanuel Odu — Portfolio Website

A full-stack portfolio built with **React**, **Node.js**, and **TypeScript**, powered by your resume data and ready for links to websites you've built.

## Stack

| Layer | Tech |
|-------|------|
| Frontend | React 19, TypeScript, Vite |
| Backend | Node.js, Express, TypeScript |
| Data | REST API (`/api/portfolio`) |

## Quick start

```bash
# Install all dependencies (root + client + server)
npm run install:all

# Run both frontend and API together
npm run dev
```

- **Frontend:** http://localhost:5173
- **API:** http://localhost:3001/api/portfolio

## Project structure

```
├── client/          # React + TypeScript frontend
├── server/          # Node + Express API
│   └── src/data/portfolio.ts   # ← Edit your content here
└── package.json     # Root scripts
```

## Adding your websites

Open `server/src/data/portfolio.ts` and update the `projects` array. Each project supports:

- `title` — project name
- `description` — short summary
- `liveUrl` — link to the live website
- `repoUrl` — GitHub repo (optional)
- `tags` — tech stack labels

Three placeholder slots (`project-slot-1`, `project-slot-2`, `project-slot-3`) are ready for your next sites — replace `liveUrl: null` with your URLs.

## Sections

- Hero with contact info from your CV
- Education, certifications, languages, hobbies
- Work experience (Glodux Labs, Limelight Renhold)
- **Websites I've Built** — live projects + placeholder slots
- Skills & tools
- Contact links

## Build for production

```bash
npm run build
```

## Resume source

Content is based on `Emmanuel_Ofu_Odu-Software-Engineer.pdf`.
