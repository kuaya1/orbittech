import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateCanonicalUrl, getCanonicalPath } from '@/utils/urlValidator';

interface SEOMetadataProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalPath?: string;
  ogImage?: string;
  location?: {
    county?: string;
    state?: 'VA' | 'MD' | 'DC';
    coordinates?: { lat: number; lng: number };
  };
  schema?: Record<string, any>[];
  noindex?: boolean;
  priority?: number;
  articleMeta?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
  };
}

const SEOMetadata: React.FC<SEOMetadataProps> = ({
  title,
  description,
  keywords = [],
  canonicalPath = '',
  ogImage = '/hero-og-image.png',
  location,
  schema = [],
  noindex = false,
  priority = 0.8,
  articleMeta
}) => {
  // Base URL for canonical and OG URLs
  const baseUrl = 'https://theorbittech.com';
  
  // Auto-append brand suffix to title
  const fullTitle = title.includes('The Orbit Tech') 
    ? title 
    : `${title} | The Orbit Tech - Starlink Installation DMV`;
  
  // Construct canonical URL using our URL validator
  const canonicalUrl = canonicalPath 
    ? generateCanonicalUrl(canonicalPath)
    : `${baseUrl}/`;
  
  // Construct full OG image URL
  const fullOgImage = ogImage.startsWith('http') 
    ? ogImage 
    : `${baseUrl}${ogImage.startsWith('/') ? ogImage : '/' + ogImage}`;
  
  // Default keywords for Starlink installation services
  const defaultKeywords = [
    'Starlink installation',
    'satellite internet DMV',
    'professional Starlink installer',
    'Washington DC area',
    'Virginia Starlink',
    'Maryland Starlink',
    'high-speed internet',
    'rural internet solutions'
  ];
  
  const allKeywords = [...defaultKeywords, ...keywords];
  
  // Location-specific meta tags
  const getLocationMeta = () => {
    if (!location) return null;
    
    const { county, state, coordinates } = location;
    const locationMeta = [];
    
    if (county && state) {
      locationMeta.push(
        <meta key="geo-region" name="geo.region" content={`US-${state}`} />,
        <meta key="geo-placename" name="geo.placename" content={`${county}, ${state}`} />
      );
    }
    
    if (coordinates) {
      const { lat, lng } = coordinates;
      locationMeta.push(
        <meta key="geo-position" name="geo.position" content={`${lat};${lng}`} />,
        <meta key="icbm" name="ICBM" content={`${lat}, ${lng}`} />
      );
    }
    
    return locationMeta;
  };
  
  // Generate hreflang tags for service areas
  const getHreflangTags = () => {
    const serviceAreas = [
      { code: 'en-US', region: 'United States' },
      { code: 'en-US-VA', region: 'Virginia' },
      { code: 'en-US-MD', region: 'Maryland' },
      { code: 'en-US-DC', region: 'Washington DC' }
    ];
    
    return serviceAreas.map(area => (
      <link
        key={area.code}
        rel="alternate"
        hrefLang={area.code}
        href={canonicalUrl}
      />
    ));
  };
  
  // Generate structured data
  const generateStructuredData = () => {
    if (schema.length === 0) return null;
    
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": schema
    };
    
    return (
      <script type="application/ld+json">
        {JSON.stringify(structuredData, null, 2)}
      </script>
    );
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords.join(', ')} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots Meta */}
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'} />
      <meta name="googlebot" content={noindex ? 'noindex,nofollow' : 'index,follow'} />
      
      {/* Priority and Refresh */}
      <meta name="priority" content={priority.toString()} />
      
      {/* Open Graph Tags */}
      <meta property="og:type" content={articleMeta ? 'article' : 'website'} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${title} - The Orbit Tech Starlink Installation`} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="The Orbit Tech" />
      <meta property="og:locale" content="en_US" />
      
      {/* Article Meta (for blog posts) */}
      {articleMeta && (
        <>
          {articleMeta.publishedTime && (
            <meta property="article:published_time" content={articleMeta.publishedTime} />
          )}
          {articleMeta.modifiedTime && (
            <meta property="article:modified_time" content={articleMeta.modifiedTime} />
          )}
          {articleMeta.author && (
            <meta property="article:author" content={articleMeta.author} />
          )}
          {articleMeta.section && (
            <meta property="article:section" content={articleMeta.section} />
          )}
        </>
      )}
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:image:alt" content={`${title} - The Orbit Tech Starlink Installation`} />
      <meta name="twitter:site" content="@TheOrbitTech" />
      <meta name="twitter:creator" content="@TheOrbitTech" />
      
      {/* Business/Contact Meta */}
      <meta name="contact" content="info@theorbittech.com" />
      <meta name="author" content="The Orbit Tech" />
      <meta name="reply-to" content="info@theorbittech.com" />
      <meta name="owner" content="The Orbit Tech LLC" />
      <meta name="classification" content="Telecommunications, Internet Service Provider" />
      <meta name="category" content="Starlink Installation Services" />
      
      {/* Location-specific Meta Tags */}
      {getLocationMeta()}
      
      {/* Local Business Meta */}
      <meta name="geo.region" content="US-VA" />
      <meta name="geo.placename" content="Reston, VA" />
      <meta name="geo.position" content="38.9586;-77.3570" />
      <meta name="ICBM" content="38.9586, -77.3570" />
      
      {/* Service Area Meta */}
      <meta name="coverage" content="Washington DC Metro Area" />
      <meta name="service-area" content="Virginia, Maryland, Washington DC" />
      
      {/* Hreflang Tags */}
      {getHreflangTags()}
      
      {/* Structured Data */}
      {generateStructuredData()}
      
      {/* Additional SEO Meta */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="application-name" content="The Orbit Tech" />
      
      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
    </Helmet>
  );
};

export { SEOMetadata };
export default SEOMetadata;
