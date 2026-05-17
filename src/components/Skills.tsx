import React from 'react';
import { Skill } from '../data';

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section id="skills" className="section container">
      <h2 className="text-3xl font-bold mb-4.5">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
        {skills.map((s, idx) => (
          <div key={idx} className="border border-border bg-card rounded-xl p-3.5 flex flex-col sm:flex-row sm:items-center justify-between shadow-sm gap-1 sm:gap-0">
            <div className="font-semibold">{s.name}</div>
            <div className="text-muted text-[10px] sm:text-xs uppercase tracking-wider">{s.level}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
