import React from 'react';
import { Project } from '../types/portfolio';
import { urlFor } from '../sanity';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const primaryLink = project.links.live || project.links.repo;

  return (
    <a 
      href={primaryLink}
      target="_blank"
      rel="noopener noreferrer"
      className="border border-border bg-card rounded-2xl overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl hover:shadow-accent/5 hover:border-accent/40 cursor-pointer no-underline text-inherit"
    >
      <div className="h-40 overflow-hidden border-b border-border relative">
        {project.video ? (
          <video 
            src={project.video} 
            muted 
            autoPlay 
            loop 
            playsInline 
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
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
      <div className="p-4 flex flex-col gap-2.5 flex-grow">
        <h3 className="text-xl font-bold m-0 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-muted text-sm line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.stack.map((s, sIdx) => (
            <span 
              key={sIdx} 
              className="text-[10px] uppercase font-bold px-2.5 py-1 rounded-full bg-bg-elev border border-border text-muted group-hover:border-accent/20 group-hover:text-accent/80 transition-all"
            >
              {s}
            </span>
          ))}
        </div>
        <div className="flex gap-2.5 mt-2.5">
          {project.links.live && (
            <span className="btn btn-primary text-xs py-1.5 px-3">
              Live
            </span>
          )}
          {project.links.repo && (
            <span className="btn text-xs py-1.5 px-3">
              Code
            </span>
          )}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
