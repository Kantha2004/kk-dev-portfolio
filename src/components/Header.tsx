import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface HeaderProps {
  name: string;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ name, theme, toggleTheme }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-bg border-b-4 border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a 
          href="#home" 
          className="font-black text-xl md:text-2xl tracking-tight text-text no-underline whitespace-nowrap hover:text-accent transition-colors"
          aria-label={`${name} - Home`}
        >
          {name.split(' ')[0].toUpperCase()}
        </a>
        <nav className="flex items-center gap-2 md:gap-4" aria-label="Main navigation">
          {/* <button 
            disabled
            className="border-2 md:border-4 border-border p-1.5 md:p-2 bg-bg shadow-[2px_2px_0px_0px_var(--shadow-color)] transition-all opacity-50 cursor-not-allowed pointer-events-none"
            aria-label="Theme toggle disabled" 
          >
            {theme === 'light' ? <Moon size={18} aria-hidden="true" /> : <Sun size={18} aria-hidden="true" />}
          </button> */}
          <ul className="hidden lg:flex items-center gap-6 mr-2 font-black text-sm uppercase list-none m-0 p-0">
            <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
            <li><a href="#experience" className="hover:text-accent transition-colors">Experience</a></li>
            <li><a href="#skills" className="hover:text-accent transition-colors">Skills</a></li>
            <li><a href="#projects" className="hover:text-accent transition-colors">Projects</a></li>
          </ul>
          <a href="#contact" className="btn text-xs md:text-sm">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
