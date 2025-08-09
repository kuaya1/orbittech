import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  schema?: object[];
  noindex?: boolean;
}

const SEOHead: React.FC<SEOProps> = ({
  title = "The Orbit Tech | #1 Starlink Installation DMV | Free Quote",
  description = "The Orbit Tech: Certified Starlink installation experts serving 100-mile radius from Reston, VA. Professional setup across Northern Virginia, Maryland & West Virginia. Flexible pricing $499-$999. Get your free quote today!",
  keywords = "starlink installation dmv, starlink installer virginia, starlink maryland, starlink washington dc, satellite internet installation, professional starlink setup",
  canonical = "https://www.theorbittech.com",
  ogImage = "https://www.theorbittech.com/starlink-dish-installation.jpg",
  ogType = "website",
  schema = [],
  noindex = false
}) => {
  const brandName = "The Orbit Tech";
  
  return (
    <Helmet>
      {/* Essential Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:site_name" content={brandName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Professional Starlink Installation by The Orbit Tech" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@theorbittech" />
      <meta name="twitter:creator" content="@theorbittech" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="Professional Starlink Installation by The Orbit Tech" />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#1e40af" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Additional SEO Tags */}
      <meta name="author" content={brandName} />
      <meta name="publisher" content={brandName} />
      <meta name="application-name" content={brandName} />
      <meta name="geo.region" content="US-VA" />
      <meta name="geo.placename" content="Northern Virginia, Maryland, Washington DC" />
      <meta name="geo.position" content="38.9072;-77.0369" />
      <meta name="ICBM" content="38.9072, -77.0369" />
      
      {/* Business-specific meta tags */}
      <meta name="business:contact_data:street_address" content="8000 Westpark Drive, STE 450" />
      <meta name="business:contact_data:locality" content="McLean" />
      <meta name="business:contact_data:region" content="VA" />
      <meta name="business:contact_data:postal_code" content="22102" />
      <meta name="business:contact_data:country_name" content="United States" />
      <meta name="business:contact_data:phone_number" content="+1-571-999-6915" />
      <meta name="business:contact_data:email" content="contact@theorbittech.com" />
      
      {/* Structured Data Schema */}
      {schema.map((schemaObject, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schemaObject)}
        </script>
      ))}
      
      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
      
      {/* DNS Prefetch for External Resources */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//maps.googleapis.com" />
    </Helmet>
  );
};

export default SEOHead;
