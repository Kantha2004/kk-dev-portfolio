import React from 'react';
import { Skill } from '../types/portfolio';
import Section from './common/Section';

interface SkillsProps {
  skills: Skill[];
  className?: string;
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const categories = Array.from(new Set(skills.map(s => s.category)));

  return (
    <Section id="skills" title="TECHNICAL SKILLS">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {categories.map(cat => (
          <div key={cat} className="brutalist-card flex flex-col gap-4 md:gap-6">
            <h3 className="text-xl md:text-2xl font-black bg-accent text-white p-2 md:p-3 border-2 md:border-4 border-border shadow-[3px_3px_0px_0px_var(--shadow-color)] md:shadow-[4px_4px_0px_0px_var(--shadow-color)] inline-block self-start">
              {cat}
            </h3>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {skills
                .filter(s => s.category === cat)
                .map((s, idx) => (
                  <div 
                    key={idx} 
                    className="border-2 md:border-4 border-border bg-bg-elev px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base font-bold shadow-[2px_2px_0px_0px_var(--shadow-color)] md:shadow-[3px_3px_0px_0px_var(--shadow-color)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
                  >
                    {s.name}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
