import React from 'react';
import { Project } from '../types/portfolio';
import { urlFor } from '../sanity';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div 
      className="brutalist-card bg-card flex flex-col group no-underline text-text p-0 overflow-hidden"
    >
      <div 
        className="h-40 md:h-48 overflow-hidden border-b-2 md:border-b-4 border-border relative"
        role="img"
        aria-label={`Screenshot or video of ${project.title}`}
      >
        {project.video ? (
          <video 
            src={project.video} 
            muted 
            autoPlay 
            loop 
            playsInline 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div 
            className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" 
            style={{ 
              backgroundImage: project.image 
                ? `url(${typeof project.image === 'string' ? project.image : urlFor(project.image).url()})` 
                : 'none' 
            }}
          />
        )}
      </div>
      <div className="p-4 md:p-6 flex flex-col gap-3 md:gap-4 flex-grow">
        <h3 className="text-xl md:text-2xl font-black group-hover:text-accent transition-colors leading-tight">
          {project.title}
        </h3>
        <p className="font-bold text-xs md:text-sm leading-relaxed line-clamp-3 opacity-90">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.stack.map((s, sIdx) => (
            <span 
              key={sIdx} 
              className="text-[9px] md:text-[10px] uppercase font-black px-2 md:px-3 py-1 border-2 border-border bg-bg-elev shadow-[1px_1px_0px_0px_var(--shadow-color)] md:shadow-[2px_2px_0px_0px_var(--shadow-color)]"
            >
              {s}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-1 md:mt-2">
          {project.links.live && (
            <a 
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] md:text-xs font-black uppercase underline decoration-2 md:decoration-4 underline-offset-4 decoration-accent hover:text-accent transition-colors"
              aria-label={`Live Demo of ${project.title}`}
            >
              Live Demo
            </a>
          )}
          {project.links.repo && (
            <a 
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] md:text-xs font-black uppercase underline decoration-2 md:decoration-4 underline-offset-4 decoration-border hover:text-accent transition-colors"
              aria-label={`Source Code of ${project.title}`}
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
