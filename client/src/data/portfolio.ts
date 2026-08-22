import type { PortfolioData } from "../types/portfolio";

export const FALLBACK_DATA: PortfolioData = {
  profile: {
    name: "Emmanuel Odu",
    title: "Software Developer",
    headline: "TypeScript · Angular · React · Node.js",
    location: "Debrecen, Hungary",
    phone: "+36703032003",
    phoneDisplay: "+36 70 303 2003",
    email: "immanuelodu@gmail.com",
    bio: "Computer Science graduate who writes TypeScript for software people actually use. Building the Angular dashboard behind LookOwt, a personal safety app live in 175+ countries.",
    summary:
      "Computer Science graduate (BSc, University of Debrecen) who writes TypeScript for software people actually use. Currently builds the Angular admin dashboard behind LookOwt, a personal safety application live on the App Store and Google Play across 175+ countries, working against .NET REST APIs deployed on AWS. Comfortable across the stack — React and Next.js on the front end, Node.js and PostgreSQL behind it — with production experience shipping to real deadlines alongside a full degree. Stipendium Hungaricum scholarship recipient; native English speaker with working Hungarian.",
    links: {
      github: "https://github.com/Emmanuell17",
      linkedin: "https://www.linkedin.com/in/emmanuel-odu",
      portfolio: "https://github.com/Emmanuell17/My-developer-journey",
    },
  },
  skills: [
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript (ES6+)", "C#", "Python", "Java", "SQL", "HTML5", "CSS3"],
    },
    {
      category: "Front End",
      items: ["Angular", "React", "Next.js", "Responsive Layout", "REST API Integration"],
    },
    {
      category: "Back End & Data",
      items: ["Node.js", ".NET", "RESTful API Design", "PostgreSQL", "Supabase"],
    },
    {
      category: "Cloud & Tooling",
      items: ["AWS", "Vercel", "Heroku", "Git & GitHub", "Visual Studio Code", "Cursor"],
    },
    {
      category: "Practices",
      items: ["Agile / Scrum", "Code Review", "Version Control Workflows", "AI-Assisted Development"],
    },
  ],
  experience: [
    {
      id: "glodux",
      role: "Software Developer",
      company: "Glodux Digital Labs",
      location: "Kitchener, Canada (Remote)",
      startDate: "Jan 2026",
      endDate: "Present",
      current: true,
      description:
        "Build the internal Angular administration dashboard for LookOwt, a personal safety app published on the App Store and Google Play in 175+ countries.",
      highlights: [
        "Develop the dashboard in Angular and TypeScript, building typed data models and services against the product’s .NET REST API so schema changes surface at compile time rather than in production.",
        "Implement operator-facing views used to review crowdsourced incident reports, manage user accounts, and monitor live safety alerts across regions.",
        "Work directly against AWS-hosted staging and production environments, coordinating releases with the mobile (Flutter) and backend teams.",
        "Contribute in a small, fast-moving team where features move from discussion to deployed in days, taking ownership of a feature end to end.",
      ],
      stack: ["Angular", "TypeScript", ".NET REST APIs", "AWS"],
    },
    {
      id: "limelight",
      role: "Front-End Web Developer",
      company: "Limelight Renhold",
      location: "Oslo, Norway (Remote)",
      startDate: "Apr 2025",
      endDate: "Jul 2025",
      description:
        "Built and maintained client-facing web application features for a Norway-based service business.",
      highlights: [
        "Developed responsive web interfaces in HTML, CSS, JavaScript and TypeScript, translating design requirements into working, cross-browser pages.",
        "Implemented server-side functionality and REST endpoints in Node.js to support the application’s front-end features.",
        "Worked on the underlying database layer — schema updates, queries, and data integration between the application and its stored records.",
        "Collaborated remotely across time zones, taking requirements directly from the client and delivering iteratively over a fixed engagement.",
      ],
      stack: ["HTML", "CSS", "TypeScript", "Node.js", "REST"],
    },
  ],
  education: [
    {
      id: "debrecen",
      degree: "BSc, Computer Science",
      institution: "University of Debrecen",
      location: "Debrecen, Hungary",
      startDate: "2022",
      endDate: "2026",
      note: "Stipendium Hungaricum Scholarship recipient",
    },
  ],
  certifications: [
    { id: "claude-101", name: "Claude 101", issuer: "Anthropic", date: "" },
    {
      id: "python-bootcamp",
      name: "Python Bootcamp Certificate",
      issuer: "Pierian Academy",
      date: "June 2024",
    },
  ],
  projects: [
    {
      id: "lookowt",
      title: "LookOwt",
      description:
        "Personal safety app live on the App Store and Google Play in 175+ countries. I build the Angular admin dashboard operators use to review incident reports, manage accounts, and monitor live safety alerts, working against .NET REST APIs on AWS.",
      liveUrl: "https://www.lookowt.app/",
      repoUrl: null,
      tags: ["Angular", "TypeScript", ".NET", "AWS"],
      featured: true,
    },
    {
      id: "veltra-stock",
      title: "Veltra Stock",
      description:
        "Full-stack inventory management system with real-time stock tracking and a clean admin dashboard.",
      liveUrl: "https://inventory-management-system-three-tawny.vercel.app/",
      repoUrl: "https://github.com/Emmanuell17/Inventory-management-system",
      tags: ["React", "Node.js", "PostgreSQL", "Vercel"],
      featured: true,
    },
    {
      id: "gourmet-pot",
      title: "Gourmet Pot",
      description:
        "Modern food ordering web app with responsive UI and a streamlined checkout experience.",
      liveUrl: "https://gourmet-pot.vercel.app",
      repoUrl: "https://github.com/Emmanuell17/Gourmet-pot",
      tags: ["React", "Next.js", "Vercel"],
      featured: true,
    },
    {
      id: "shift-coordinator",
      title: "Availability & Shift Coordinator",
      description:
        "Web application for coordinating team schedules: staff submit their availability, and managers assemble, review, and publish shift rosters against it in one place. Covers the full stack — interface, application logic, and the database schema modelling users, availability windows, and assigned shifts.",
      liveUrl: null,
      repoUrl: "https://github.com/Emmanuell17",
      tags: ["TypeScript", "Node.js", "PostgreSQL"],
      featured: true,
    },
  ],
  languages: [
    { name: "English", level: "Native" },
    { name: "Hungarian", level: "Working proficiency" },
  ],
};
