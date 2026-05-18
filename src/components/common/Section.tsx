import React from 'react';
import SectionHeading from './SectionHeading';

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
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 md:mb-10">
          {title && <SectionHeading>{title}</SectionHeading>}
          {headerRight}
        </div>
      )}
      {children}
    </section>
  );
};

export default Section;
