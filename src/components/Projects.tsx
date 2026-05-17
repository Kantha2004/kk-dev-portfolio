import React, { useState } from 'react';
import { Project } from '../data';

interface ProjectsProps {
  projects: Project[];
  tags: string[];
}

const Projects: React.FC<ProjectsProps> = ({ projects, tags }) => {
  const [activeTag, setActiveTag] = useState('All');

  const filteredProjects = projects.filter(
    p => activeTag === 'All' || p.tags.includes(activeTag)
  );

  return (
    <section id="projects" className="section container">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <h2 className="text-3xl font-bold m-0">Projects</h2>
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
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProjects.map((p, idx) => (
          <article key={idx} className="border border-border bg-card rounded-2xl overflow-hidden flex flex-col group transition-all hover:shadow-xl hover:border-accent/30">
            <div 
              className="h-40 bg-cover bg-center border-b border-border group-hover:scale-105 transition-transform duration-500" 
              style={{ backgroundImage: `url(${p.image})` }}
            />
            <div className="p-4 flex flex-col gap-2.5 flex-grow">
              <h3 className="text-xl font-bold m-0">{p.title}</h3>
              <p className="text-muted text-sm line-clamp-2">{p.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {p.stack.map((s, sIdx) => (
                  <span key={sIdx} className="text-[10px] uppercase font-bold px-2.5 py-1 rounded-full bg-bg-elev border border-border text-muted">
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex gap-2.5 mt-2.5">
                {p.links.live && (
                  <a 
                    href={p.links.live} 
                    className="btn btn-primary text-xs py-1.5 px-3" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Live
                  </a>
                )}
                {p.links.repo && (
                  <a 
                    href={p.links.repo} 
                    className="btn text-xs py-1.5 px-3" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
