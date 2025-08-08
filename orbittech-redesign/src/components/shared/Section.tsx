import React from 'react';
import { clsx } from 'clsx';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  background?: 'white' | 'gray' | 'dark';
  padding?: boolean;
}

const Section: React.FC<SectionProps> = ({
  children,
  className,
  containerClassName,
  background = 'white',
  padding = true
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-dark-900'
  };

  return (
    <section
      className={clsx(
        backgroundClasses[background],
        padding && 'section-padding',
        className
      )}
    >
      <div
        className={clsx(
          'max-w-7xl mx-auto container-padding',
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
