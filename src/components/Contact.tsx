import React from 'react';
import { Mail, MessageSquare, AtSign, MessageCircle, Send } from 'lucide-react';
import { Social } from '../types/portfolio';
import Section from './common/Section';

interface ContactProps {
  email: string;
  socials: Social[];
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

  const getIcon = (label: string) => {
    const l = label.toLowerCase();
    if (l.includes('instagram')) return <InstagramIcon />;
    if (l.includes('twitter')) return <TwitterIcon />;
    if (l.includes('linkedin')) return <LinkedinIcon />;
    return <MessageSquare size={20} />;
  };

  // Since brand icons are missing in this version of lucide-react, 
  // we'll use generic but appropriate ones.
  const InstagramIcon = () => <MessageCircle size={20} />;
  const TwitterIcon = () => <Send size={20} />;
  const LinkedinIcon = () => <AtSign size={20} />;

  return (
    <Section id="contact" title="Get in Touch">
      <p className="text-lg text-muted mb-8 max-w-2xl">
        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      
      <div className="flex flex-wrap gap-4">
        <a href={`mailto:${email}`} className="btn btn-primary flex items-center gap-2 px-6 py-3">
          <Mail size={20} />
          Email Me
        </a>
        
        {socials.map((s, idx) => (
          <a 
            key={idx} 
            href={getChatUrl(s)} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn flex items-center gap-2 px-6 py-3"
          >
            {getIcon(s.label)}
            Chat on {s.label.replace(' (Twitter)', '')}
          </a>
        ))}
      </div>
    </Section>
  );
};

export default Contact;
