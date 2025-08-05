import React, { useState } from 'react';

interface OptimizedImageWithPlaceholderProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  priority?: boolean;
  width?: number;
  height?: number;
  placeholder?: string;
  blurDataURL?: string;
}

/**
 * Advanced OptimizedImage component with placeholder support
 * Features:
 * - Lazy loading with placeholder
 * - Loading state management
 * - Error handling with fallback
 * - Blur-to-sharp loading effect
 * - Priority loading for critical images
 * - SEO optimized with proper dimensions
 */
const OptimizedImageWithPlaceholder: React.FC<OptimizedImageWithPlaceholderProps> = ({ 
  src, 
  alt, 
  priority = false,
  width,
  height,
  placeholder = '/placeholder-image.svg',
  blurDataURL,
  className = '',
  onLoad,
  onError,
  ...props 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setIsLoading(false);
    onLoad?.(e);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setIsLoading(false);
    setHasError(true);
    onError?.(e);
  };

  const imageClasses = `
    transition-opacity duration-300 ease-in-out
    ${isLoading ? 'opacity-0' : 'opacity-100'}
    ${className}
  `.trim();

  const placeholderClasses = `
    absolute inset-0 bg-gray-200 animate-pulse
    transition-opacity duration-300 ease-in-out
    ${!isLoading ? 'opacity-0' : 'opacity-100'}
  `.trim();

  return (
    <div className="relative overflow-hidden" style={{ width, height }}>
      {/* Placeholder */}
      {isLoading && (
        <div className={placeholderClasses}>
          {blurDataURL && (
            <img
              src={blurDataURL}
              alt=""
              className="w-full h-full object-cover filter blur-sm scale-110"
              aria-hidden="true"
            />
          )}
        </div>
      )}
      
      {/* Main Image */}
      <img 
        src={hasError ? placeholder : src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={imageClasses}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  );
};

export default OptimizedImageWithPlaceholder;
