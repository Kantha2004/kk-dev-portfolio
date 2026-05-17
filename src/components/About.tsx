import React from 'react';
import { About as AboutType } from '../types/portfolio';
import Section from './common/Section';

interface AboutProps {
  about: AboutType;
}

const About: React.FC<AboutProps> = ({ about }) => {
  return (
    <Section id="about" title="About">
      <p className="text-lg leading-relaxed">{about.text}</p>
      <div className="grid sm:grid-cols-2 gap-4 mt-8">
        {about.highlights.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
            <span className="text-muted leading-snug">{item}</span>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default About;
