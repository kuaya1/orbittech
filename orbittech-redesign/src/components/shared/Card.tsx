import React from 'react';
import { clsx } from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className, hover = true }) => {
  return (
    <div
      className={clsx(
        'card',
        hover && 'hover:shadow-xl hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
