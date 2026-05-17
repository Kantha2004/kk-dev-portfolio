import React, { useState } from 'react';
import { Project } from '../types/portfolio';
import ProjectCard from './ProjectCard';
import Section from './common/Section';

interface ProjectsProps {
  projects: Project[];
  tags: string[];
}

const Projects: React.FC<ProjectsProps> = ({ projects, tags }) => {
  const [activeTag, setActiveTag] = useState('All');

  const filteredProjects = projects.filter(
    p => activeTag === 'All' || p.tags.includes(activeTag)
  );

  const filterButtons = (
    <div className="flex flex-wrap gap-2.5">
      {tags.map(t => (
        <button 
          key={t} 
          className={`px-3 py-2 rounded-full border cursor-pointer transition-colors text-sm font-medium ${
            activeTag === t 
              ? 'bg-accent text-white border-transparent' 
              : 'bg-bg-elev text-muted border-border hover:border-accent'
          }`}
          onClick={() => setActiveTag(t)}
        >
          {t}
        </button>
      ))}
    </div>
  );

  return (
    <Section id="projects" title="Projects" headerRight={filterButtons}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProjects.map((p, idx) => (
          <ProjectCard key={idx} project={p} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
