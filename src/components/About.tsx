import React from 'react';
import { About as AboutType } from '../data';

interface AboutProps {
  about: AboutType;
}

const About: React.FC<AboutProps> = ({ about }) => {
  return (
    <section id="about" className="section container">
      <h2 className="text-3xl font-bold mb-4.5">About</h2>
      <p className="text-lg leading-relaxed">{about.text}</p>
      <ul className="grid sm:grid-cols-2 gap-2.5 pl-4.5 mt-6 list-disc">
        {about.highlights.map((item, idx) => (
          <li key={idx} className="text-muted">{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default About;
