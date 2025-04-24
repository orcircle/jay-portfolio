import React from 'react';

interface SubtitleProps {
  children: React.ReactNode;
  className?: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ children, className = '' }) => {
  return (
    <p className={`text-2xl text-gray-300 ${className}`}>
      {children}
    </p>
  );
};

export default Subtitle; 