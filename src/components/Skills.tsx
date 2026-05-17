import React from 'react';
import { Skill } from '../data';

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const categories = Array.from(new Set(skills.map(s => s.category)));

  return (
    <section id="skills" className="section container">
      <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {categories.map(cat => (
          <div key={cat} className="space-y-4">
            <h3 className="text-xl font-semibold text-accent flex items-center gap-2">
              <span className="w-1.5 h-6 bg-accent rounded-full"></span>
              {cat}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skills
                .filter(s => s.category === cat)
                .map((s, idx) => (
                  <div 
                    key={idx} 
                    className="group border border-border bg-card hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 rounded-xl p-3.5 flex items-center justify-between shadow-sm"
                  >
                    <span className="font-medium group-hover:text-accent transition-colors">{s.name}</span>
                    <span className="text-[10px] text-muted uppercase tracking-wider bg-bg px-2 py-1 rounded-md group-hover:bg-accent/10 group-hover:text-accent transition-all">
                      {s.level}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
