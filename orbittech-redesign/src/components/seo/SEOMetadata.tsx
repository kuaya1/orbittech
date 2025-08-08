import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEOMetadataProps } from '../../types';
import BUSINESS_CONFIG from '../../config/business';

const SEOMetadata: React.FC<SEOMetadataProps> = ({
  title,
  description,
  canonical,
  ogImage = '/images/starlink-dish.webp',
  keywords = [],
  noindex = false
}) => {
  const siteUrl = 'https://theorbittech.com';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : `${siteUrl}${typeof window !== 'undefined' ? window.location.pathname : '/'}`;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;
  
  // Enhanced meta tags for local SEO
  const businessName = BUSINESS_CONFIG.business.name;
  const phoneNumber = BUSINESS_CONFIG.phone.display;
  const businessAddress = `${BUSINESS_CONFIG.address.city}, ${BUSINESS_CONFIG.address.state}`;
  
  // Location-specific keywords enhancement
  const localKeywords = [
    'DMV Starlink installation',
    'Virginia satellite internet',
    'Maryland Starlink setup',
    'professional installation service',
    ...keywords
  ];

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {localKeywords.length > 0 && <meta name="keywords" content={localKeywords.join(', ')} />}
      
      {/* Business Information for Local SEO */}
      <meta name="author" content={businessName} />
      <meta name="geo.region" content="US-VA" />
      <meta name="geo.position" content="38.9072;-77.0369" />
      <meta name="ICBM" content="38.9072, -77.0369" />
      <meta name="DC.title" content={title} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      )}
      
      {/* Open Graph Tags for Social Sharing */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Professional Starlink Installation by The Orbit Tech" />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={businessName} />
      <meta property="og:locale" content="en_US" />
      
      {/* Business-specific Open Graph */}
      <meta property="business:contact_data:street_address" content={businessAddress} />
      <meta property="business:contact_data:locality" content="DMV Area" />
      <meta property="business:contact_data:region" content="Virginia" />
      <meta property="business:contact_data:postal_code" content="20120" />
      <meta property="business:contact_data:country_name" content="United States" />
      <meta property="business:contact_data:phone_number" content={phoneNumber} />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:image:alt" content="Professional Starlink Installation Service" />
      <meta name="twitter:site" content="@theorbittech" />
      <meta name="twitter:creator" content="@theorbittech" />
      
      {/* Additional Meta Tags for Local SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Contact Information for Rich Snippets */}
      <meta itemProp="name" content={businessName} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={fullOgImage} />
      <meta itemProp="telephone" content={phoneNumber} />
      <meta itemProp="address" content={businessAddress} />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* DNS Prefetch for performance optimization */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//maps.googleapis.com" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="MobileOptimized" content="width" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      
      {/* Structured Data Hints */}
      <meta name="google-site-verification" content="your-google-verification-code" />
    </Helmet>
  );
};

export default SEOMetadata;
