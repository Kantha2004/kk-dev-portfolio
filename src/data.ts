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
  image: string;
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

export const PORTFOLIO_DATA: PortfolioData = {
  name: "Kanthakumar K",
  role: "Full-Stack Developer",
  email: "kumarkantha41@gmail.com",
  resumeUrl: "",
  socials: [
    { label: "Instagram", url: "https://www.instagram.com/kanthakumar2004" },
    { label: "X (Twitter)", url: "https://x.com/kanthakumar2004" },
    { label: "LinkedIn", url: "https://in.linkedin.com/in/kanthakumar-k-645401233" }
  ],
  about: {
    text: "I am a Full-Stack Developer with a strong foundation in building real-time medical applications and scalable SaaS platforms. I specialize in bridging the gap between complex backend logic and intuitive frontend experiences, with a focus on writing clean, testable code.",
    highlights: [
      "Experienced in AI-driven data pipelines and multi-tenant architectures",
      "Expertise in building diagnostic-grade medical user interfaces",
      "Proficient in Nuxt (Vue 3) + CornerstoneJS for real-time DICOM visualization",
      "Passionate about low-latency systems and sub-millisecond precision"
    ]
  },
  skills: [
    { name: "TypeScript", level: "Intermediate", category: "Languages" },
    { name: "JavaScript", level: "Intermediate", category: "Languages" },
    { name: "Python", level: "Intermediate", category: "Languages" },
    { name: "Go", level: "Intermediate", category: "Languages" },
    { name: "SQL", level: "Intermediate", category: "Languages" },
    { name: "FastAPI", level: "Intermediate", category: "Backend" },
    { name: "NestJS", level: "Intermediate", category: "Backend" },
    { name: "PostgreSQL", level: "Intermediate", category: "Backend" },
    { name: "Redis", level: "Intermediate", category: "Backend" },
    { name: "Nuxt.js", level: "Intermediate", category: "Frontend" },
    { name: "Vue.js", level: "Intermediate", category: "Frontend" },
    { name: "React", level: "Intermediate", category: "Frontend" },
    { name: "Tailwind CSS", level: "Intermediate", category: "Frontend" },
    { name: "CornerstoneJS", level: "Intermediate", category: "Frontend" },
    { name: "AWS", level: "Intermediate", category: "Infrastructure & Testing" },
    { name: "Docker", level: "Intermediate", category: "Infrastructure & Testing" },
    { name: "Vitest", level: "Intermediate", category: "Infrastructure & Testing" },
    { name: "Pytest", level: "Intermediate", category: "Infrastructure & Testing" },
    { name: "Locust", level: "Intermediate", category: "Infrastructure & Testing" }
  ],
  projectTags: ["All", "Fun-Projects", "Web", "Backend", "Open Source", "In Progress"],
  projects: [
    {
      title: "clipd",
      description: "A fast, minimal clipboard history daemon for Linux (Wayland/X11) with instant search and direct paste.",
      tags: ["Linux", "System", "Open Source"],
      stack: ["Go", "Wayland", "X11"],
      image: "https://github.com/Kantha2004/clipd/raw/main/screenshot.png",
      links: { repo: "https://github.com/Kantha2004/clipd" }
    },
    {
      title: "Game of Life",
      description: "Interactive Conway's Game of Life playable in the browser.",
      tags: ["Fun-Projects", "Web"],
      stack: ["Vite", "JavaScript", "Canvas"],
      image: "/images/gameoflife.png",
      links: { live: "https://game-of-life-kk.netlify.app" }
    },
    {
      title: "Text Particle Effect",
      description: "Text morphing into particles with smooth animations.",
      tags: ["Fun-Projects", "Web"],
      stack: ["Vite", "JavaScript", "Canvas"],
      image: "/images/textparticaleffect.png",
      links: { live: "https://textparticaleffect.netlify.app/" }
    },
    {
      title: "SimpleJWT (WIP)",
      description: "A simple JWT authenticator with multi-client management.",
      tags: ["Microservice", "Backend", "In Progress"],
      stack: ["Go"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThUnciBd-FsLrkbaaGgMVm2BFVVjSZONF3Tw&s",
      links: { repo: "https://github.com/Kantha2004/SimpleJWT" }
    }
  ],
  experience: [
    {
      company: "Finstein Advisory Services LLP – Chennai",
      role: "Full Stack Developer",
      period: "Jul 2024 — Present",
      items: [
        "Building scalable, production-grade healthcare applications across AI, backend systems, and real-time web platforms.",
        "Built a real-time AI/ML inference pipeline using YOLO + ONNX Runtime on NVIDIA GPUs for ultrasound imaging classification.",
        "Engineered a high-performance Python multiprocessing system to synchronize ultrasound video streams with IoT sensor data with sub-millisecond precision.",
        "Developed a diagnostic-grade frontend using Nuxt (Vue 3) + CornerstoneJS for real-time DICOM image visualization and AI-assisted annotations.",
        "Architected a multi-tenant backend using NestJS + TypeORM, ensuring secure data isolation across multiple medical facilities.",
        "Integrated OpenAI APIs for intelligent medical assistance and automated document summarization.",
        "Optimized background processing (SMS, Email, PDF generation) using Redis + BullMQ for high-throughput task execution."
      ]
    }
  ]
};
