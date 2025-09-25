// Customize your portfolio content here
window.PORTFOLIO_DATA = {
  name: "Kanthakumar K",
  role: "Full-Stack Developer",
  email: "kumarkantha41@gmail.com",
  resumeUrl: "", // no resume for now
  socials: [
    { label: "Instagram", url: "https://www.instagram.com/kanthakumar2004" },
    { label: "X (Twitter)", url: "https://x.com/kanthakumar2004" },
    { label: "LinkedIn", url: "https://in.linkedin.com/in/kanthakumar-k-645401233" }
  ],
  about: {
    text: "I build web apps end-to-end with modern JS frameworks and pragmatic APIs.",
    highlights: [
      "Full-stack developer focused on DX and performance",
      "Comfortable across Nuxt/React frontends and FastAPI/Nest backends",
      "Open-source contributor to CornerstoneJS 3D",
      "Enjoy building fun side projects and OSS"
    ]
  },
  skills: [
    { name: "Nuxt.js", level: "Intermediate" },
    { name: "React", level: "Intermediate" },
    { name: "NestJS", level: "Intermediate" },
    { name: "FastAPI", level: "Intermediate" },
    { name: "Go", level: "Intermediate" },
    { name: "PostgreSQL", level: "Intermediate" },
    { name: "MySQL", level: "Intermediate" }
  ],
  projectTags: ["All", "Fun-Projects", "Web", "Backend", "Open Source", "In Progress"],
  projects: [
    {
      title: "Game of Life",
      description: "Interactive Conway's Game of Life playable in the browser.",
      tags: ["Fun-Projects", "Web"],
      stack: ["Vite", "JavaScript", "Canvas"],
      image: "/public/images/gameoflife.png",
      links: { live: "https://game-of-life-kk.netlify.app" }
    },
    {
      title: "Text Particle Effect",
      description: "Text morphing into particles with smooth animations.",
      tags: ["Fun-Projects", "Web"],
      stack: ["Vite", "JavaScript", "Canvas"],
      image: "/public/images/textparticaleffect.png",
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
      company: "Finstein Advisory, Chennai",
      role: "Full-Stack Developer",
      period: "Jul 2024 — Present",
      items: [
        "Building and maintaining web apps across frontend and backend"
      ]
    }
  ]
};

