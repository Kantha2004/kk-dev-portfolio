import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface HeaderProps {
  name: string;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ name, theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full bg-bg border-b-4 border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a 
          href="#home" 
          onClick={() => setIsMenuOpen(false)}
          className="font-black text-xl md:text-2xl tracking-tight text-text no-underline whitespace-nowrap hover:text-accent transition-colors"
          aria-label={`${name} - Home`}
        >
          {name.split(' ')[0].toUpperCase()}
        </a>
        
        <nav className="flex items-center gap-4 md:gap-8" aria-label="Main navigation">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <ul className="flex items-center gap-6 lg:gap-8 font-black text-sm uppercase list-none m-0 p-0">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn text-xs lg:text-sm">Contact</a>
          </div>
          
          {/* Mobile Menu Toggle Container */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="btn p-2 flex"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40 bg-bg/95 backdrop-blur-sm">
          <nav className="container py-8 flex flex-col items-center justify-between h-[calc(100vh-64px)] overflow-y-auto">
            <ul className="flex flex-col items-center gap-8 font-black text-2xl uppercase list-none m-0 p-0 text-center w-full">
              {navLinks.map((link) => (
                <li key={link.name} className="w-full">
                  <a 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="hover:text-accent transition-colors block py-2"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="w-full pt-4">
                <a 
                  href="#contact" 
                  onClick={() => setIsMenuOpen(false)}
                  className="btn text-xl w-full py-4"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
