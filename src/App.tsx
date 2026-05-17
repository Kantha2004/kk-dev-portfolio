import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { usePortfolioData } from './hooks/usePortfolioData';

const App: React.FC = () => {
  const { data, isLoading, error } = usePortfolioData();
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
    return 'dark';
  });

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl text-muted bg-bg">
        Loading...
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl text-red-400 bg-bg">
        Error loading portfolio data.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg text-text selection:bg-accent/30 selection:text-accent">
      <Header 
        name={data.name} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />
      <main className="space-y-4">
        <Hero 
          name={data.name} 
          role={data.role} 
          socials={data.socials} 
        />
        <About about={data.about} />
        <Skills skills={data.skills} />
        <Projects 
          projects={data.projects} 
          tags={data.projectTags} 
        />
        <Experience experience={data.experience} />
        <Contact email={data.email} />
      </main>
      <Footer name={data.name} />
    </div>
  );
};

export default App;
