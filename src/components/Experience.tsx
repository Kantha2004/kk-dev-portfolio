import React from 'react';
import { Experience as ExperienceType } from '../types/portfolio';
import Section from './common/Section';

interface ExperienceProps {
  experience: ExperienceType[];
  className?: string;
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <Section id="experience" title="EXPERIENCE">
      <div className="flex flex-col gap-6 md:gap-8">
        {experience.map((e, idx) => (
          <div key={idx} className="brutalist-card bg-card flex flex-col gap-3 md:gap-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <h3 className="text-xl md:text-2xl font-black text-text">{e.role}</h3>
              <span className="bg-text text-bg px-3 py-1 font-bold text-xs md:text-sm border-2 border-border self-start md:self-auto">
                {e.period}
              </span>
            </div>
            <div className="text-accent font-black text-base md:text-lg underline decoration-2 md:decoration-4 underline-offset-4 decoration-border">{e.company}</div>
            <ul className="grid gap-2 md:gap-3 mt-2 md:mt-4">
              {e.items.map((item, iIdx) => (
                <li key={iIdx} className="flex items-start gap-3 p-2 md:p-3 border-2 border-border bg-bg-elev font-bold text-xs md:text-sm">
                  <span className="w-2 h-2 bg-text mt-1 md:mt-1.5 shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
