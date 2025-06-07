import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className = '' }) => {
  return (
    <div className={`${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-white">
        {children}
      </h2>
    </div>
  );
};

export default SectionTitle;