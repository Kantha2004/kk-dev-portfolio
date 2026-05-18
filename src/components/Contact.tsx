import React from 'react';
import { Mail } from 'lucide-react';
import { Social } from '../types/portfolio';
import SocialIcon from './common/SocialIcon';
import Section from './common/Section';

interface ContactProps {
  email: string;
  socials: Social[];
  className?: string;
}

const Contact: React.FC<ContactProps> = ({ email, socials }) => {
  // Helper to get chat-specific URLs
  const getChatUrl = (s: Social) => {
    if (s.label.toLowerCase().includes('instagram')) {
      return 'https://ig.me/m/kanthakumar2004';
    }
    if (s.label.toLowerCase().includes('twitter')) {
      return 'https://twitter.com/messages/compose?recipient_id=kanthakumar2004';
    }
    return s.url;
  };

  return (
    <Section id="contact" className="pb-20">
      <div className="brutalist-card bg-card text-text flex flex-col gap-6">
        <div className="flex flex-wrap gap-3">
          {socials.map((s, idx) => (
            <a 
              key={idx} 
              href={getChatUrl(s)} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 border-2 border-border bg-bg shadow-[3px_3px_0px_0px_var(--shadow-color)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
              title={s.label}
              aria-label={s.label}
            >
              <SocialIcon label={s.label} className="w-6 h-6" />
            </a>
          ))}
        </div>

        <div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-accent">
            LET'S WORK TOGETHER
          </h2>
          <p className="text-xl md:text-2xl font-bold mb-10 max-w-2xl">
            I'm currently looking for new opportunities. Whether you have a project in mind or just want to connect!
          </p>
          
          <a href={`mailto:${email}`} className="btn btn-primary px-10 py-5 text-2xl">
            <Mail size={24} strokeWidth={3} aria-hidden="true" />
            SAY HELLO
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
