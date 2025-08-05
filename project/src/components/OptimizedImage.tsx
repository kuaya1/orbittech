import React from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  priority?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
}

/**
 * OptimizedImage component for better performance and SEO
 * Features:
 * - Responsive srcSet for different screen sizes
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
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  ...props 
}) => {
  // Generate responsive srcSet for different screen sizes
  const generateSrcSet = (baseSrc: string): string => {
    const breakpoints = [320, 640, 768, 1024, 1280, 1920];
    return breakpoints
      .map(width => `${baseSrc}?w=${width} ${width}w`)
      .join(', ');
  };

  const srcSet = generateSrcSet(src);

  return (
    <img 
      src={src} 
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={className}
      style={{
        maxWidth: '100%',
        height: 'auto',
        ...props.style
      }}
      {...props}
    />
  );
};

export default OptimizedImage;
