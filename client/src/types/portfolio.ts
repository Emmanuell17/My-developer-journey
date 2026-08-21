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
  highlights: string[];
  stack: string[];
  current?: boolean;
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

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface PortfolioData {
  profile: {
    name: string;
    title: string;
    headline: string;
    location: string;
    phone: string;
    phoneDisplay: string;
    email: string;
    bio: string;
    summary: string;
    links: {
      github: string;
      linkedin: string;
      portfolio: string;
    };
  };
  skills: SkillGroup[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  projects: Project[];
  languages: { name: string; level: string }[];
}
