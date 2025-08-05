import React from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  priority?: boolean;
  width?: number;
  height?: number;
}

/**
 * OptimizedImage component for better performance and SEO
 * Features:
 * - Lazy loading by default
 * - Async decoding for better performance
 * - Priority loading for above-the-fold images
 * - TypeScript support
 * - SEO-friendly alt text requirement
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  priority = false,
  width,
  height,
  className = '',
  ...props 
}) => {
  return (
    <img 
      src={src} 
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={className}
      {...props}
    />
  );
};

export default OptimizedImage;
