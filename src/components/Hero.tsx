import React from 'react';
import { Social } from '../data';

interface HeroProps {
  name: string;
  role: string;
  socials: Social[];
}

const Hero: React.FC<HeroProps> = ({ name, role, socials }) => {
  return (
    <section id="home" className="container grid md:grid-cols-[1.2fr_0.8fr] items-center gap-9 py-10 md:py-20">
      <div className="flex flex-col gap-2.5">
        <h1 className="text-4xl md:text-5xl font-bold m-0 leading-tight">
          Hi, I'm <span className="text-accent">{name}</span>
        </h1>
        <p className="text-muted max-w-[640px] text-lg">
          {role}
        </p>
        <div className="flex gap-3 mt-4.5 mb-2">
          <a href="#projects" className="btn btn-primary">View Projects</a>
        </div>
        <div className="flex gap-3 mt-2.5">
          {socials.map((s, idx) => (
            <a 
              key={idx} 
              href={s.url} 
              className="btn" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
      <div className="relative h-70 rounded-[20px] bg-[radial-gradient(60%_80%_at_50%_50%,var(--hero-glow)_0%,transparent_70%)] border border-border overflow-hidden hidden md:block" aria-hidden="true">
        <div className="absolute w-[220px] h-[220px] bg-[radial-gradient(circle,var(--hero-bubble),transparent)] rounded-full top-[20%] left-[20%] blur-[10px] animate-bounce-slow"></div>
      </div>
    </section>
  );
};

export default Hero;
