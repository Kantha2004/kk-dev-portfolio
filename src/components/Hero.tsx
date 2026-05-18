import React from 'react';
import { Social } from '../types/portfolio';
import SocialIcon from './common/SocialIcon';

interface HeroProps {
  name: string;
  role: string;
  socials: Social[];
}

const Hero: React.FC<HeroProps> = ({ name, role, socials }) => {
  return (
    <section id="home" className="container flex flex-col gap-6 md:gap-8 py-10 md:py-20">
      <div className="flex gap-2 md:gap-4">
        {socials.map((s, idx) => (
          <a 
            key={idx} 
            href={s.url} 
            className="border-2 md:border-4 border-border p-2 md:p-3 bg-bg shadow-[3px_3px_0px_0px_var(--shadow-color)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all" 
            target="_blank" 
            rel="noopener noreferrer"
            title={s.label}
            aria-label={s.label}
          >
            <SocialIcon label={s.label} />
          </a>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-black leading-tight md:leading-none m-0">
          HI, I'M <span className="text-accent underline decoration-4 md:decoration-8 underline-offset-4 md:underline-offset-8 decoration-border">{name}</span>
        </h1>
        <div className="bg-text text-bg p-4 border-2 md:border-4 border-border shadow-[4px_4px_0px_0px_var(--accent)] md:shadow-[8px_8px_0px_0px_var(--accent)] inline-block self-start">
          <p className="text-lg md:text-2xl font-bold">
            {role}
          </p>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-4 md:gap-6 items-center mt-2 md:mt-4">
        <a href="#projects" className="btn btn-primary text-lg md:text-xl px-6 md:px-8 py-3 md:py-4">
          View Projects
        </a>
      </div>
    </section>
  );
};

export default Hero;
