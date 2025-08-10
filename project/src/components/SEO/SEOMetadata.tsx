// src/components/SEO/SEOMetadata.tsx
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  keywords?: string[];
  ogImage?: string;
  noindex?: boolean;
}

export const SEOMetadata = ({ 
  title, 
  description, 
  canonical, 
  type = 'website',
  keywords = [],
  ogImage = 'https://theorbittech.com/og-image.jpg',
  noindex = false
}: SEOProps) => {
  const location = useLocation();
  const siteTitle = "The Orbit Tech | #1 Starlink Installation DMV";
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;
  
  // Generate proper canonical URL
  const baseUrl = 'https://theorbittech.com';
  const canonicalUrl = canonical || `${baseUrl}${location.pathname}`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      
      {/* Canonical URL - CRITICAL FIX */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots meta */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="The Orbit Tech" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#000000" />
    </Helmet>
  );
};
