import { useQuery } from '@tanstack/react-query';
import { PortfolioData, SanityRawData } from '../types/portfolio';
import { client } from '../sanity';

const mapSanityData = (data: SanityRawData): PortfolioData => {
  if (!data.settings) {
    return {
      name: "Loading...",
      role: "",
      email: "",
      resumeUrl: "",
      socials: [],
      about: { text: "", highlights: [] },
      skills: [],
      projectTags: ["All"],
      projects: [],
      experience: []
    };
  }

  return {
    name: data.settings.name,
    role: data.settings.role,
    email: data.settings.email,
    resumeUrl: data.settings.resumeUrl || "",
    socials: data.settings.socials || [],
    about: {
      text: data.settings.aboutText,
      highlights: data.settings.aboutHighlights || []
    },
    skills: data.skills.map(s => ({
      name: s.name,
      level: s.level,
      category: s.category
    })),
    projectTags: ["All", ...new Set(data.projects.flatMap(p => p.tags || []))],
    projects: data.projects.map(p => ({
      title: p.title,
      description: p.description,
      tags: p.tags || [],
      stack: p.stack || [],
      image: p.image,
      video: p.video,
      links: p.links || {}
    })),
    experience: data.experience.map(e => ({
      company: e.company,
      role: e.role,
      period: e.period,
      items: e.items || []
    }))
  };
};

const fetchPortfolioData = async (): Promise<PortfolioData> => {
  const query = `{
    "settings": *[_type == "siteSettings"][0],
    "projects": *[_type == "project"] | order(rank asc, _createdAt desc),
    "skills": *[_type == "skill"],
    "experience": *[_type == "experience"] | order(_createdAt desc)
  }`;

  const data = await client.fetch<SanityRawData>(query);
  return mapSanityData(data);
};

export const usePortfolioData = () => {
  return useQuery({
    queryKey: ['portfolioData'],
    queryFn: fetchPortfolioData,
  });
};
