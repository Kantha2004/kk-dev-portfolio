import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  headerRight?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '', headerRight }) => {
  return (
    <section id={id} className={`section container ${className}`}>
      {(title || headerRight) && (
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          {title && <h2 className="text-3xl font-bold m-0">{title}</h2>}
          {headerRight}
        </div>
      )}
      {children}
    </section>
  );
};

export default Section;
