// src/components/SEO/SEOMetadata.tsx
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
}

export const SEOMetadata = ({ title, description, canonical, type = 'website' }: SEOProps) => {
  const siteTitle = "The Orbit Tech | #1 Starlink Installation DMV";
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical || window.location.href} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical || window.location.href} />
    </Helmet>
  );
};
