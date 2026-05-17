import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface HeaderProps {
  name: string;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ name, theme, toggleTheme }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-bg/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="font-extrabold tracking-tight text-text no-underline whitespace-nowrap hover:text-accent transition-colors">
          &lt;{name.split(' ')[0]} Dev /&gt;
        </a>
        <nav className="flex items-center gap-3 md:gap-4.5">
          <button 
            onClick={toggleTheme} 
            className="bg-transparent border border-border text-muted p-2 rounded-xl cursor-pointer hover:text-accent hover:border-accent/30 transition-all duration-300"
            aria-label="Toggle dark mode" 
            title="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <a href="#about" className="text-muted no-underline font-medium hover:text-accent transition-colors hidden sm:block">About</a>
          <a href="#experience" className="text-muted no-underline font-medium hover:text-accent transition-colors hidden sm:block">Experience</a>
          <a href="#skills" className="text-muted no-underline font-medium hover:text-accent transition-colors hidden sm:block">Skills</a>
          <a href="#projects" className="text-muted no-underline font-medium hover:text-accent transition-colors hidden sm:block">Projects</a>
          <a href="#contact" className="btn btn-primary">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
