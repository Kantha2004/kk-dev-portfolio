import React from 'react';

interface FooterProps {
  name: string;
}

const Footer: React.FC<FooterProps> = ({ name }) => {
  return (
    <footer className="border-t border-border py-8 mt-12 text-muted text-center">
      <div className="container">
        <p className="text-sm">© {new Date().getFullYear()} {name}. Built with ♥ using React & Tailwind v4.</p>
      </div>
    </footer>
  );
};

export default Footer;
