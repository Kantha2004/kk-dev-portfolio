import React from 'react';
import { About as AboutType } from '../types/portfolio';
import Section from './common/Section';

interface AboutProps {
  about: AboutType;
  className?: string;
}

const About: React.FC<AboutProps> = ({ about }) => {
  return (
    <Section id="about" title="ABOUT ME">
      <div className="brutalist-card">
        <p className="text-lg md:text-xl leading-relaxed font-bold">{about.text}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-10">
          {about.highlights.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 p-3 md:p-4 border-2 md:border-4 border-border bg-bg-elev shadow-[3px_3px_0px_0px_var(--shadow-color)] md:shadow-[4px_4px_0px_0px_var(--shadow-color)]">
              <span className="w-3 h-3 md:w-4 md:h-4 bg-accent shrink-0 border-2 border-border" aria-hidden="true" />
              <span className="text-base md:text-lg font-bold">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
