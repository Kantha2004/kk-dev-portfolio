import React from 'react';

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ children, className = "" }) => {
  return (
    <h2 className={`text-3xl md:text-4xl font-black flex items-center gap-3 ${className}`}>
      <span className="w-6 h-6 md:w-8 md:h-8 border-[6px] md:border-8 border-text shrink-0" aria-hidden="true"></span>
      {children}
    </h2>
  );
};

export default SectionHeading;
