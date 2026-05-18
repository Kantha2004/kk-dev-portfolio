import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/common/CustomCursor';
import { usePortfolioData } from './hooks/usePortfolioData';
import { useTheme } from './hooks/useTheme';

const App: React.FC = () => {
  const { data, isLoading, error } = usePortfolioData();
  const { theme, toggleTheme } = useTheme();

  if (isLoading) {
    return (
      <div 
        className="flex justify-center items-center h-screen text-2xl text-muted bg-bg"
        role="status"
        aria-live="polite"
      >
        Loading portfolio...
      </div>
    );
  }

  if (error || !data) {
    return (
      <div 
        className="flex justify-center items-center h-screen text-2xl text-red-400 bg-bg"
        role="alert"
        aria-live="assertive"
      >
        Error loading portfolio data. Please try again later.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg text-text selection:bg-text selection:text-bg font-medium">
      <a href="#about" className="skip-link">
        Skip to main content
      </a>
      <CustomCursor />
      <Header 
        name={data.name} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />
      <main id="main-content">
        <Hero 
          name={data.name} 
          role={data.role} 
          socials={data.socials} 
        />
        <About about={data.about} />
        <Experience experience={data.experience} />
        <Skills skills={data.skills} />
        <Projects 
          projects={data.projects} 
          tags={data.projectTags} 
        />
        <Contact email={data.email} socials={data.socials} />
      </main>
      <Footer name={data.name} />
    </div>
  );
};

export default App;
