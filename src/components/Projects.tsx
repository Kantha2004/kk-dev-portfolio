import React, { useState } from 'react';
import { Project } from '../types/portfolio';
import ProjectCard from './ProjectCard';
import Section from './common/Section';

interface ProjectsProps {
  projects: Project[];
  tags: string[];
  className?: string;
}

const Projects: React.FC<ProjectsProps> = ({ projects, tags }) => {
  const [activeTag, setActiveTag] = useState('All');

  const filteredProjects = projects.filter(
    p => activeTag === 'All' || p.tags.includes(activeTag)
  );

  const filterButtons = (
    <div className="flex flex-wrap gap-2">
      {tags.map(t => {
        const isActive = activeTag === t;
        const baseClasses = "px-3 py-1.5 md:px-4 md:py-2 border-2 md:border-4 border-border font-black text-xs md:text-base transition-all cursor-pointer";
        const activeClasses = "bg-text text-bg translate-x-0.5 translate-y-0.5 md:translate-x-1 md:translate-y-1 shadow-none";
        const inactiveClasses = "bg-bg text-text shadow-[2px_2px_0px_0px_var(--shadow-color)] md:shadow-[4px_4px_0px_0px_var(--shadow-color)] hover:bg-bg-elev hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_var(--shadow-color)] md:hover:shadow-[6px_6px_0px_0px_var(--shadow-color)]";
        
        return (
          <button 
            key={t} 
            className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
            onClick={() => setActiveTag(isActive ? 'All' : t)}
            aria-pressed={isActive}
          >
            {t}
          </button>
        );
      })}
    </div>
  );

  return (
    <Section id="projects" title="PROJECTS" headerRight={filterButtons}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredProjects.map((p, idx) => (
          <ProjectCard key={idx} project={p} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
