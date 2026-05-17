import React from 'react';
import { Experience as ExperienceType } from '../data';

interface ExperienceProps {
  experience: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <section id="experience" className="section container">
      <h2 className="text-3xl font-bold mb-4.5">Experience</h2>
      <div className="flex flex-col gap-3.5">
        {experience.map((e, idx) => (
          <div key={idx} className="border border-border bg-card rounded-xl p-4.5 transition-colors hover:border-accent/20 shadow-sm">
            <div className="font-bold text-lg">{e.role} · {e.company}</div>
            <div className="text-muted text-sm mb-2.5 font-medium">{e.period}</div>
            <ul className="list-disc pl-4.5 space-y-1.5 mt-2">
              {e.items.map((item, iIdx) => (
                <li key={iIdx} className="text-muted text-[15px]">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
