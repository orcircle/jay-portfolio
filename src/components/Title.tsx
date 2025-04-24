import React from 'react';

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ children, className = '' }) => {
  return (
    <h1 className={`font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ${className}`}
        style={{
          fontSize: 'clamp(1.5rem, min(5vw, 3.75rem), 3.75rem)',
          lineHeight: '1.2'
        }}>
      {children}
    </h1>
  );
};

export default Title; 