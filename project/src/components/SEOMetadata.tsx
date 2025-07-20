import React, { useEffect } from 'react';

interface SEOMetadataProps {
  title: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: 'website' | 'article';
  // New properties for enhanced SEO
  canonicalUrl?: string;
  noindex?: boolean;
  location?: {
    name: string;
    region: string;
    country?: string;
  };
  companyName?: string;
  schema?: {
    type: 'LocalBusiness' | 'Service' | 'Organization' | 'WebPage';
    businessName?: string;
    description?: string;
    address?: {
      street: string;
      city: string;
      state: string;
      zip: string;
      country: string;
    };
    priceRange?: string;
    telephone?: string;
    serviceArea?: string[];
    services?: string[];
  };
  twitterCard?: {
    cardType?: 'summary' | 'summary_large_image';
    site?: string;
    creator?: string;
  };
  titleTemplate?: string;
}

const SEOMetadata: React.FC<SEOMetadataProps> = ({ 
  title, 
  description, 
  keywords,
  ogImage,
  ogUrl,
  ogType = 'website',
  canonicalUrl,
  noindex,
  location,
  companyName = 'Spacelink Internet Solutions',
  schema,
  twitterCard,
  titleTemplate
}) => {
  useEffect(() => {
    // Update document title with customizable template
    document.title = titleTemplate 
      ? titleTemplate.replace('%s', title) 
      : `${title} | ${companyName}`;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute('content', description);
    } else if (description) {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
    
    // Update keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords && keywords) {
      metaKeywords.setAttribute('content', keywords);
    } else if (keywords) {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = keywords;
      document.head.appendChild(meta);
    }
    
    // Location-enhanced metadata
    if (location) {
      let locationKeywords = keywords || '';
      if (!locationKeywords.includes(location.name)) {
        locationKeywords += locationKeywords ? `, Starlink ${location.name}, Starlink installation ${location.name}, ${location.name} Starlink` 
          : `Starlink ${location.name}, Starlink installation ${location.name}, ${location.name} Starlink`;
      }
      
      const metaGeo = document.querySelector('meta[name="geo.region"]');
      if (metaGeo) {
        metaGeo.setAttribute('content', location.region);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'geo.region';
        meta.content = location.region;
        document.head.appendChild(meta);
      }
      
      const metaPlacename = document.querySelector('meta[name="geo.placename"]');
      if (metaPlacename) {
        metaPlacename.setAttribute('content', location.name);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'geo.placename';
        meta.content = location.name;
        document.head.appendChild(meta);
      }
    }
    
    // Update Open Graph metadata
    if (ogImage || ogUrl || description) {
      // OG Title
      let ogTitleTag = document.querySelector('meta[property="og:title"]');
      if (ogTitleTag) {
        ogTitleTag.setAttribute('content', title);
      } else {
        ogTitleTag = document.createElement('meta');
        ogTitleTag.setAttribute('property', 'og:title');
        ogTitleTag.setAttribute('content', title);
        document.head.appendChild(ogTitleTag);
      }
      
      // OG Description
      if (description) {
        let ogDescTag = document.querySelector('meta[property="og:description"]');
        if (ogDescTag) {
          ogDescTag.setAttribute('content', description);
        } else {
          ogDescTag = document.createElement('meta');
          ogDescTag.setAttribute('property', 'og:description');
          ogDescTag.setAttribute('content', description);
          document.head.appendChild(ogDescTag);
        }
      }
      
      // OG Image
      if (ogImage) {
        let ogImgTag = document.querySelector('meta[property="og:image"]');
        if (ogImgTag) {
          ogImgTag.setAttribute('content', ogImage);
        } else {
          ogImgTag = document.createElement('meta');
          ogImgTag.setAttribute('property', 'og:image');
          ogImgTag.setAttribute('content', ogImage);
          document.head.appendChild(ogImgTag);
        }
      }
      
      // OG URL
      if (ogUrl) {
        let ogUrlTag = document.querySelector('meta[property="og:url"]');
        if (ogUrlTag) {
          ogUrlTag.setAttribute('content', ogUrl);
        } else {
          ogUrlTag = document.createElement('meta');
          ogUrlTag.setAttribute('property', 'og:url');
          ogUrlTag.setAttribute('content', ogUrl);
          document.head.appendChild(ogUrlTag);
        }
      }
      
      // OG Type
      let ogTypeTag = document.querySelector('meta[property="og:type"]');
      if (ogTypeTag) {
        ogTypeTag.setAttribute('content', ogType);
      } else {
        ogTypeTag = document.createElement('meta');
        ogTypeTag.setAttribute('property', 'og:type');
        ogTypeTag.setAttribute('content', ogType);
        document.head.appendChild(ogTypeTag);
      }
    }
    
    // Twitter Card metadata
    if (twitterCard) {
      // Twitter Card Type
      let twitterCardTag = document.querySelector('meta[name="twitter:card"]');
      if (twitterCardTag) {
        twitterCardTag.setAttribute('content', twitterCard.cardType || 'summary');
      } else {
        twitterCardTag = document.createElement('meta');
        twitterCardTag.setAttribute('name', 'twitter:card');
        twitterCardTag.setAttribute('content', twitterCard.cardType || 'summary');
        document.head.appendChild(twitterCardTag);
      }
      
      // Twitter Title
      let twitterTitleTag = document.querySelector('meta[name="twitter:title"]');
      if (twitterTitleTag) {
        twitterTitleTag.setAttribute('content', title);
      } else {
        twitterTitleTag = document.createElement('meta');
        twitterTitleTag.setAttribute('name', 'twitter:title');
        twitterTitleTag.setAttribute('content', title);
        document.head.appendChild(twitterTitleTag);
      }
      
      if (description) {
        let twitterDescTag = document.querySelector('meta[name="twitter:description"]');
        if (twitterDescTag) {
          twitterDescTag.setAttribute('content', description);
        } else {
          twitterDescTag = document.createElement('meta');
          twitterDescTag.setAttribute('name', 'twitter:description');
          twitterDescTag.setAttribute('content', description);
          document.head.appendChild(twitterDescTag);
        }
      }
      
      if (ogImage) {
        let twitterImageTag = document.querySelector('meta[name="twitter:image"]');
        if (twitterImageTag) {
          twitterImageTag.setAttribute('content', ogImage);
        } else {
          twitterImageTag = document.createElement('meta');
          twitterImageTag.setAttribute('name', 'twitter:image');
          twitterImageTag.setAttribute('content', ogImage);
          document.head.appendChild(twitterImageTag);
        }
      }
      
      if (twitterCard.site) {
        let twitterSiteTag = document.querySelector('meta[name="twitter:site"]');
        if (twitterSiteTag) {
          twitterSiteTag.setAttribute('content', twitterCard.site);
        } else {
          twitterSiteTag = document.createElement('meta');
          twitterSiteTag.setAttribute('name', 'twitter:site');
          twitterSiteTag.setAttribute('content', twitterCard.site);
          document.head.appendChild(twitterSiteTag);
        }
      }
    }
    
    // Canonical URL
    if (canonicalUrl) {
      let canonicalTag = document.querySelector('link[rel="canonical"]');
      if (canonicalTag) {
        canonicalTag.setAttribute('href', canonicalUrl);
      } else {
        canonicalTag = document.createElement('link');
        canonicalTag.setAttribute('rel', 'canonical');
        canonicalTag.setAttribute('href', canonicalUrl);
        document.head.appendChild(canonicalTag);
      }
    }
    
    // Robots meta tag
    if (noindex) {
      let robotsTag = document.querySelector('meta[name="robots"]');
      if (robotsTag) {
        robotsTag.setAttribute('content', 'noindex, nofollow');
      } else {
        robotsTag = document.createElement('meta');
        robotsTag.setAttribute('name', 'robots');
        robotsTag.setAttribute('content', 'noindex, nofollow');
        document.head.appendChild(robotsTag);
      }
    }
    
    // Schema.org structured data
    if (schema) {
      // Remove any existing schema
      const existingSchema = document.querySelector('script[type="application/ld+json"]');
      if (existingSchema) {
        existingSchema.remove();
      }
      
      let schemaData: any = {
        '@context': 'https://schema.org',
      };
      
      switch(schema.type) {
        case 'LocalBusiness':
          schemaData['@type'] = 'LocalBusiness';
          schemaData['name'] = schema.businessName || companyName;
          schemaData['description'] = schema.description || description;
          
          if (schema.address) {
            schemaData['address'] = {
              '@type': 'PostalAddress',
              'streetAddress': schema.address.street,
              'addressLocality': schema.address.city,
              'addressRegion': schema.address.state,
              'postalCode': schema.address.zip,
              'addressCountry': schema.address.country
            };
          }
          
          if (schema.telephone) {
            schemaData['telephone'] = schema.telephone;
          }
          
          if (schema.priceRange) {
            schemaData['priceRange'] = schema.priceRange;
          }
          
          if (schema.serviceArea && schema.serviceArea.length > 0) {
            schemaData['areaServed'] = schema.serviceArea.map(area => ({
              '@type': 'GeoCircle',
              'geoMidpoint': {
                '@type': 'GeoCoordinates',
                'name': area
              }
            }));
          }
          
          if (schema.services && schema.services.length > 0) {
            schemaData['hasOfferCatalog'] = {
              '@type': 'OfferCatalog',
              'name': 'Starlink Installation Services',
              'itemListElement': schema.services.map((service, index) => ({
                '@type': 'Offer',
                'itemOffered': {
                  '@type': 'Service',
                  'name': service
                }
              }))
            };
          }
          break;
          
        case 'Service':
          schemaData['@type'] = 'Service';
          schemaData['serviceType'] = 'Starlink Installation';
          schemaData['provider'] = {
            '@type': 'Organization',
            'name': schema.businessName || companyName
          };
          schemaData['areaServed'] = schema.serviceArea || [];
          schemaData['description'] = schema.description || description;
          break;
      }
      
      const scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      scriptTag.text = JSON.stringify(schemaData);
      document.head.appendChild(scriptTag);
    }
    
    return () => {
      // Cleanup not needed as we're only modifying existing tags
    };
  }, [
    title, description, keywords, ogImage, ogUrl, ogType, 
    canonicalUrl, noindex, location, companyName, schema, 
    twitterCard, titleTemplate
  ]);

  return null; // This component doesn't render anything
};

export default SEOMetadata;
