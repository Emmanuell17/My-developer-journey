import type { PortfolioData } from "../types/portfolio";

export const FALLBACK_DATA: PortfolioData = {
  profile: {
    name: "Emmanuel Odu",
    title: "Software Developer",
    headline: "TypeScript · Angular · React · Node.js",
    location: "Budapest, Hungary",
    phone: "+36703032003",
    phoneDisplay: "+36 70 303 2003",
    email: "immanuelodu@gmail.com",
    bio: "Computer Science graduate. I write TypeScript and build the Angular dashboard behind LookOwt, a personal safety app used in 175+ countries.",
    summary:
      "I have a BSc in Computer Science from the University of Debrecen. I build the Angular admin dashboard for LookOwt, a personal safety app on the App Store and Google Play in 175+ countries, using .NET REST APIs on AWS. I also work with React and Next.js on the front end, and Node.js and PostgreSQL on the back. I shipped production work while finishing my degree. Stipendium Hungaricum scholarship recipient. Native English, working Hungarian.",
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
        "Build the dashboard in Angular and TypeScript, with typed models and services for the product's .NET REST API so API changes fail at compile time.",
        "Build operator views to review crowdsourced incident reports, manage user accounts, and watch live safety alerts across regions.",
        "Work against AWS staging and production, coordinating releases with the mobile (Flutter) and backend teams.",
        "Work in a small team that ships features in days. I take a feature from discussion through to release.",
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
        "Built responsive pages in HTML, CSS, JavaScript, and TypeScript from the client's design requirements.",
        "Added Node.js REST endpoints to back the front-end features.",
        "Handled schema updates, queries, and how the app talks to its stored data.",
        "Worked remotely across time zones, taking requirements from the client and shipping in short iterations.",
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
    {
      id: "aws-ai-practitioner",
      name: "AWS Certified AI Practitioner",
      issuer: "Amazon Web Services",
      date: "September 2026",
    },
    { id: "claude-101", name: "Claude 101", issuer: "Anthropic", date: "March 2, 2026" },
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
        "Personal safety app on the App Store and Google Play in 175+ countries. I build the Angular admin dashboard operators use to review incident reports, manage accounts, and watch live safety alerts, talking to .NET REST APIs on AWS.",
      liveUrl: "https://www.lookowt.app/",
      repoUrl: null,
      tags: ["Angular", "TypeScript", ".NET", "AWS"],
      featured: true,
    },
    {
      id: "veltra-stock",
      title: "Veltra Stock",
      description:
        "Inventory app for tracking stock in real time, with an admin dashboard and an AI decision support system backed by Gemini.",
      liveUrl: "https://inventory-management-system-three-tawny.vercel.app/",
      repoUrl: "https://github.com/Emmanuell17/Inventory-management-system",
      tags: ["React", "Node.js", "PostgreSQL", "Gemini", "Vercel"],
      featured: true,
    },
    {
      id: "gourmet-pot",
      title: "Gourmet Pot",
      description:
        "Food ordering site with a responsive layout and a simple checkout.",
      liveUrl: "https://gourmet-pot.vercel.app",
      repoUrl: "https://github.com/Emmanuell17/Gourmet-pot",
      tags: ["React", "Next.js", "Vercel"],
      featured: true,
    },
    {
      id: "shift-coordinator",
      title: "Availability & Shift Coordinator",
      description:
        "Staff submit availability. Managers build, review, and publish shift rosters in one place. Front end, app logic, and a database for users, availability windows, and assigned shifts.",
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
