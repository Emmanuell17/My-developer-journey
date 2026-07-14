export interface Project {
  id: string;
  title: string;
  description: string;
  liveUrl: string | null;
  repoUrl: string | null;
  tags: string[];
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  note?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
}

export interface PortfolioData {
  profile: {
    name: string;
    title: string;
    location: string;
    phone: string;
    email: string;
    bio: string;
    links: {
      github: string;
      linkedin: string;
      portfolio: string;
    };
  };
  skills: {
    technical: string[];
    tools: string[];
    other: string[];
  };
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  projects: Project[];
  languages: { name: string; level: string }[];
  hobbies: string[];
}

export const portfolioData: PortfolioData = {
  profile: {
    name: "Emmanuel Odu",
    title: "Software Engineer & Web Developer",
    location: "Debrecen, Hungary",
    phone: "+36703032003",
    email: "immanuelodu@gmail.com",
    bio: "Final-year Computer Science student and software developer focused on building modern, scalable web applications. I combine strong web fundamentals with AI-assisted development to deliver efficient, responsive, and maintainable full-stack projects.",
    links: {
      github: "https://github.com/Emmanuell17",
      linkedin: "https://www.linkedin.com/in/emmanuel-odu",
      portfolio: "https://github.com/Emmanuell17/My-developer-journey",
    },
  },
  skills: {
    technical: [
      "HTML & CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Angular.js",
      "Next.js",
      "Node.js",
      "Python",
      "Java",
      "PostgreSQL",
      "RESTful APIs",
      "Supabase",
      "AWS",
    ],
    tools: [
      "Git & GitHub",
      "Vercel",
      "Heroku",
      "Visual Studio Code",
      "Cursor AI",
      "Microsoft Office",
      "Scrum (Agile)",
    ],
    other: ["macOS", "Windows", "Linux"],
  },
  experience: [
    {
      id: "glodux",
      role: "Software Developer",
      company: "Glodux Labs",
      location: "Kitchener, Canada (Remote)",
      startDate: "Jan 2026",
      endDate: "Present",
      description:
        "Building and maintaining web applications using modern JavaScript frameworks and cloud deployment workflows.",
    },
    {
      id: "limelight",
      role: "Front-end Web Developer",
      company: "Limelight Renhold",
      location: "Oslo, Norway (Remote)",
      startDate: "Apr 2025",
      endDate: "Jul 2025",
      description:
        "Developed responsive front-end interfaces, improved UI consistency, and collaborated in an agile remote team.",
    },
  ],
  education: [
    {
      id: "debrecen",
      degree: "BSc Computer Science",
      institution: "University of Debrecen",
      location: "Debrecen, Hungary",
      startDate: "Sept 2022",
      endDate: "Jun 2026",
    },
    {
      id: "cherryfield",
      degree: "High School Diploma",
      institution: "Cherryfield College",
      location: "Abuja, Nigeria",
      startDate: "Oct 2014",
      endDate: "Dec 2020",
      note: "Graduated with WASSCE certification",
    },
    {
      id: "scholarship",
      degree: "Stipendium Hungaricum Scholarship",
      institution: "Hungarian Government",
      location: "Hungary",
      startDate: "Jul 2021",
      endDate: "Jul 2021",
    },
  ],
  certifications: [
    {
      id: "python-bootcamp",
      name: "Python Bootcamp Certificate",
      issuer: "Pierian Academy",
      date: "Jun 2024",
    },
    {
      id: "claude-101",
      name: "Claude 101",
      issuer: "Anthropic",
      date: "2024",
    },
  ],
  projects: [
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
        "Modern food ordering web app with responsive UI and streamlined checkout experience.",
      liveUrl: "https://gourmet-pot.vercel.app",
      repoUrl: "https://github.com/Emmanuell17/Gourmet-pot",
      tags: ["React", "Next.js", "Vercel"],
      featured: true,
    },
    {
      id: "project-slot-1",
      title: "Your Next Project",
      description: "Add a live link to one of your websites here.",
      liveUrl: null,
      repoUrl: null,
      tags: ["Coming soon"],
      featured: false,
    },
    {
      id: "project-slot-2",
      title: "Your Next Project",
      description: "Add a live link to one of your websites here.",
      liveUrl: null,
      repoUrl: null,
      tags: ["Coming soon"],
      featured: false,
    },
    {
      id: "project-slot-3",
      title: "Your Next Project",
      description: "Add a live link to one of your websites here.",
      liveUrl: null,
      repoUrl: null,
      tags: ["Coming soon"],
      featured: false,
    },
  ],
  languages: [
    { name: "English", level: "Native speaker" },
    { name: "Hungarian", level: "Working knowledge" },
  ],
  hobbies: ["Coding", "Spending time in nature", "Reading", "Working out"],
};
