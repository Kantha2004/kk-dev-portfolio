import React from 'react';
import { Experience as ExperienceType } from '../types/portfolio';
import Section from './common/Section';

interface ExperienceProps {
  experience: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <Section id="experience" title="Experience">
      <div className="flex flex-col gap-3.5">
        {experience.map((e, idx) => (
          <div key={idx} className="relative pl-6 border-l-2 border-border hover:border-accent/40 transition-colors py-1 group">
            <div className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-border group-hover:bg-accent transition-colors border-2 border-bg" />
            <div className="font-bold text-lg">{e.role} · {e.company}</div>
            <div className="text-muted text-sm mb-2.5 font-medium">{e.period}</div>
            <ul className="space-y-2 mt-2">
              {e.items.map((item, iIdx) => (
                <li key={iIdx} className="text-muted text-[15px] flex items-start gap-2.5">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-muted shrink-0" />
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
