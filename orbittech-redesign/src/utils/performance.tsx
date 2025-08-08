// Performance optimization utilities and components

import React, { lazy, Suspense, useState, useEffect, useRef } from 'react';

// Lazy loading components for code splitting
export const LazyLocationPage = lazy(() => import('../pages/locations/LoudounCounty'));
export const LazyTestimonials = lazy(() => import('../components/conversion/Testimonials'));
export const LazySpeedTest = lazy(() => import('../components/tools/SpeedTest'));
export const LazyAvailabilityChecker = lazy(() => import('../components/tools/AvailabilityChecker'));

// Resource hints for preconnect
export const resourceHints = [
  'https://fonts.googleapis.com',
  'https://fonts.gstatic.com',
  'https://api.starlink.com',
  'https://maps.googleapis.com',
  'https://www.google-analytics.com',
  'https://www.googletagmanager.com'
];

// Image optimization utilities
export interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
}) => {
  // Generate WebP and fallback URLs
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const loading = priority ? 'eager' : 'lazy';
  
  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" sizes={sizes} />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        className={className}
        decoding={priority ? 'sync' : 'async'}
      />
    </picture>
  );
};

// Lazy wrapper component with loading fallback
export const LazyWrapper: React.FC<{ 
  children: React.ReactNode;
  fallback?: React.ReactNode;
}> = ({ children, fallback }) => {
  const defaultFallback = (
    <div className="flex items-center justify-center py-12">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  );

  return (
    <Suspense fallback={fallback || defaultFallback}>
      {children}
    </Suspense>
  );
};

// Intersection Observer hook for lazy loading
export const useIntersectionObserver = (
  ref: React.RefObject<Element>,
  options: IntersectionObserverInit = {}
) => {
  const [isIntersecting, setIsIntersecting] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return isIntersecting;
};

// Core Web Vitals monitoring
export interface WebVitalsMetric {
  name: 'FCP' | 'LCP' | 'FID' | 'CLS' | 'TTFB';
  value: number;
  delta: number;
  id: string;
  rating: 'good' | 'needs-improvement' | 'poor';
}

export const reportWebVitals = (metric: WebVitalsMetric) => {
  // Send to analytics service
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      custom_map: {
        metric_rating: metric.rating,
        metric_delta: metric.delta,
      },
    });
  }

  // Log to console in development
  if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    console.log('Web Vitals:', metric);
  }
};

// Preload critical resources
export const preloadCriticalResources = () => {
  if (typeof window === 'undefined') return;

  // Preload hero image
  const heroImage = new Image();
  heroImage.src = '/images/starlink-installation-hero.webp';
  
  // Preload critical fonts
  const fontLink = document.createElement('link');
  fontLink.rel = 'preload';
  fontLink.as = 'font';
  fontLink.type = 'font/woff2';
  fontLink.crossOrigin = 'anonymous';
  fontLink.href = '/fonts/inter-var-latin.woff2';
  document.head.appendChild(fontLink);
};

// Performance monitoring utilities
export const performanceMonitor = {
  // Measure page load time
  measurePageLoad: () => {
    if (typeof window === 'undefined') return;
    
    window.addEventListener('load', () => {
      const loadTime = performance.now();
      console.log(`Page load time: ${loadTime.toFixed(2)}ms`);
      
      // Report to analytics
      if ((window as any).gtag) {
        (window as any).gtag('event', 'page_load_time', {
          event_category: 'Performance',
          value: Math.round(loadTime),
        });
      }
    });
  },

  // Measure time to interactive
  measureTTI: () => {
    if (typeof window === 'undefined') return;
    
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'measure' && entry.name === 'tti') {
          console.log(`Time to Interactive: ${entry.duration.toFixed(2)}ms`);
        }
      }
    });
    
    observer.observe({ entryTypes: ['measure'] });
  },

  // Measure component render time
  measureComponentRender: (componentName: string) => {
    const start = performance.now();
    
    return () => {
      const end = performance.now();
      const duration = end - start;
      
      if (duration > 16.67) { // Slower than 60fps
        console.warn(`${componentName} render took ${duration.toFixed(2)}ms`);
      }
    };
  }
};

export default {
  OptimizedImage,
  LazyWrapper,
  resourceHints,
  reportWebVitals,
  preloadCriticalResources,
  performanceMonitor,
  useIntersectionObserver
};
