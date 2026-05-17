export interface Social {
  label: string;
  url: string;
}

export interface About {
  text: string;
  highlights: string[];
}

export interface Skill {
  name: string;
  level: string;
  category: "Languages" | "Backend" | "Frontend" | "Infrastructure & Testing";
}

export interface ProjectLinks {
  live?: string;
  repo?: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  stack: string[];
  image: any;
  video?: string;
  links: ProjectLinks;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  items: string[];
}

export interface PortfolioData {
  name: string;
  role: string;
  email: string;
  resumeUrl: string;
  socials: Social[];
  about: About;
  skills: Skill[];
  projectTags: string[];
  projects: Project[];
  experience: Experience[];
}

export interface SanityRawData {
  settings: {
    name: string;
    role: string;
    email: string;
    resumeUrl?: string;
    socials?: Social[];
    aboutText: string;
    aboutHighlights?: string[];
  };
  projects: Array<{
    title: string;
    description: string;
    tags?: string[];
    stack?: string[];
    image: any;
    video?: string;
    links?: ProjectLinks;
  }>;
  skills: Array<{
    name: string;
    level: string;
    category: Skill['category'];
  }>;
  experience: Array<{
    company: string;
    role: string;
    period: string;
    items?: string[];
  }>;
}
