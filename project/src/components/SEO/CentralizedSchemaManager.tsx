// src/components/SEO/CentralizedSchemaManager.tsx
import React, { createContext, useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';

interface SchemaContextType {
  registerSchema: (id: string, schema: any) => void;
  unregisterSchema: (id: string) => void;
  getConsolidatedSchemas: () => any[];
}

const SchemaContext = createContext<SchemaContextType | null>(null);

export const useSchema = () => {
  const context = useContext(SchemaContext);
  if (!context) {
    throw new Error('useSchema must be used within a SchemaProvider');
  }
  return context;
};

interface SchemaProviderProps {
  children: React.ReactNode;
}

export const SchemaProvider: React.FC<SchemaProviderProps> = ({ children }) => {
  const [schemas, setSchemas] = useState<Map<string, any>>(new Map());

  const registerSchema = (id: string, schema: any) => {
    setSchemas(prev => new Map(prev.set(id, schema)));
  };

  const unregisterSchema = (id: string) => {
    setSchemas(prev => {
      const newMap = new Map(prev);
      newMap.delete(id);
      return newMap;
    });
  };

  const getConsolidatedSchemas = () => {
    const consolidatedSchemas: any[] = [];
    const businessData = {
      name: "The Orbit Tech",
      url: "https://www.theorbittech.com",
      telephone: "+1-571-999-6915",
      email: "contact@theorbittech.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "8000 Westpark Drive, STE 450",
        addressLocality: "McLean",
        addressRegion: "VA",
        postalCode: "22102",
        addressCountry: "US"
      }
    };

    let consolidatedFAQs: any[] = [];
    let consolidatedReviews: any[] = [];
    let hasBusinessSchema = false;

    // Process all registered schemas
    schemas.forEach((schema) => {
      if (schema['@type'] === 'LocalBusiness' || schema['@type'] === 'HomeAndConstructionBusiness') {
        // Mark that we found a business schema, but don't add it yet
        hasBusinessSchema = true;
        
        // Collect reviews from business schemas
        if (schema.review) {
          consolidatedReviews = consolidatedReviews.concat(Array.isArray(schema.review) ? schema.review : [schema.review]);
        }
      } else if (schema['@type'] === 'FAQPage') {
        // Consolidate FAQ schemas
        if (schema.mainEntity) {
          consolidatedFAQs = consolidatedFAQs.concat(schema.mainEntity);
        }
      } else {
        // Keep other schema types as-is (Service, Article, etc.)
        consolidatedSchemas.push(schema);
      }
    });

    // Add single consolidated business schema if any business schemas were registered
    if (hasBusinessSchema) {
      const consolidatedBusiness: any = {
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness",
        "@id": "https://www.theorbittech.com/#business",
        ...businessData,
        priceRange: "$$$",
        openingHoursSpecification: [{
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
          "opens": "08:00",
          "closes": "18:00"
        }],
        areaServed: [
          {"@type": "State", "name": "Virginia"},
          {"@type": "State", "name": "Maryland"},
          {"@type": "AdministrativeArea", "name": "Washington DC"}
        ],
        image: [
          "https://www.theorbittech.com/images/starlink-dish.webp",
          "https://www.theorbittech.com/images/technician-installation.webp",
          "https://www.theorbittech.com/images/orbit-tech-logo.webp"
        ],
        logo: {
          "@type": "ImageObject",
          url: "https://www.theorbittech.com/images/orbit-tech-logo.webp",
          width: 300,
          height: 100,
          caption: "The Orbit Tech - Professional Starlink Installation Services",
          license: "https://www.theorbittech.com/terms-of-service",
          copyrightHolder: {
            "@type": "Organization",
            name: "The Orbit Tech"
          },
          acquireLicensePage: "https://www.theorbittech.com/contact"
        }
      };

      // Add consolidated reviews and rating if we have reviews
      if (consolidatedReviews.length > 0) {
        consolidatedBusiness.review = consolidatedReviews.slice(0, 10); // Limit to 10 reviews
        consolidatedBusiness.aggregateRating = {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: consolidatedReviews.length.toString(),
          bestRating: "5",
          worstRating: "1"
        };
      }

      consolidatedSchemas.push(consolidatedBusiness);
    }

    // Add consolidated FAQ schema if we have FAQs
    if (consolidatedFAQs.length > 0) {
      consolidatedSchemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": "https://www.theorbittech.com/#faq",
        mainEntity: consolidatedFAQs.map((faq, index) => ({
          ...faq,
          "@id": `https://www.theorbittech.com/#faq-${index + 1}`
        }))
      });
    }

    return consolidatedSchemas;
  };

  return (
    <SchemaContext.Provider value={{ registerSchema, unregisterSchema, getConsolidatedSchemas }}>
      {children}
    </SchemaContext.Provider>
  );
};

// Component to render consolidated schemas
export const ConsolidatedSchemaInjector: React.FC = () => {
  const { getConsolidatedSchemas } = useSchema();
  const schemas = getConsolidatedSchemas();

  return (
    <Helmet>
      {schemas.map((schema, index) => (
        <script key={`schema-${index}`} type="application/ld+json">
          {JSON.stringify(schema, null, 0)}
        </script>
      ))}
    </Helmet>
  );
};

// Hook for registering schemas with cleanup
export const useSchemaRegistration = (id: string, schema: any) => {
  const { registerSchema, unregisterSchema } = useSchema();

  React.useEffect(() => {
    registerSchema(id, schema);
    return () => unregisterSchema(id);
  }, [id, schema, registerSchema, unregisterSchema]);
};

// Enhanced schema components that use the centralized system
export const BusinessSchema: React.FC<{ data?: any }> = ({ data = {} }) => {
  const schema = {
    "@type": "HomeAndConstructionBusiness",
    ...data
  };
  
  useSchemaRegistration('business', schema);
  return null;
};

export const ReviewSchema: React.FC<{ reviews?: any[] }> = ({ reviews = [] }) => {
  const schema = {
    "@type": "LocalBusiness",
    review: reviews
  };
  
  useSchemaRegistration('reviews', schema);
  return null;
};

export const FAQSchema: React.FC<{ faqs: Array<{ question: string; answer: string }> }> = ({ faqs }) => {
  const schema = {
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
        author: {
          "@type": "Organization",
          name: "The Orbit Tech"
        }
      }
    }))
  };
  
  useSchemaRegistration('faq', schema);
  return null;
};

export const ServiceSchema: React.FC<{ data: any }> = ({ data }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://www.theorbittech.com${data.url || ''}#service`,
    name: data.name || "Professional Starlink Installation",
    description: data.description || "Complete Starlink satellite internet installation with professional mounting, alignment, and optimization",
    provider: {
      "@type": "Organization",
      name: "The Orbit Tech",
      telephone: "+1-571-999-6915",
      url: "https://www.theorbittech.com"
    },
    serviceType: "Satellite Internet Installation",
    category: "Internet Installation Services",
    areaServed: data.areaServed || [
      "Loudoun County, VA",
      "Fairfax County, VA", 
      "Arlington County, VA",
      "Prince William County, VA",
      "Montgomery County, MD"
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Starlink Installation Packages",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Professional Installation",
          price: "599",
          priceCurrency: "USD",
          description: "Complete Starlink setup with professional installation"
        },
        {
          "@type": "Offer", 
          name: "Complete Coverage Package",
          price: "899",
          priceCurrency: "USD",
          description: "Everything included plus mesh WiFi for full home coverage"
        }
      ]
    },
    image: {
      "@type": "ImageObject",
      url: data.image || "https://www.theorbittech.com/images/starlink-installation.webp",
      width: 1200,
      height: 800,
      caption: data.imageCaption || "Professional Starlink Installation by The Orbit Tech",
      license: "https://www.theorbittech.com/terms-of-service",
      copyrightHolder: {
        "@type": "Organization",
        name: "The Orbit Tech"
      },
      acquireLicensePage: "https://www.theorbittech.com/contact"
    },
    ...data
  };
  
  useSchemaRegistration(`service-${data.url || 'default'}`, schema);
  return null;
};

export const ArticleSchema: React.FC<{ data: any }> = ({ data }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `https://www.theorbittech.com${data.url || ''}#article`,
    headline: data.headline || data.title,
    description: data.description,
    image: {
      "@type": "ImageObject",
      url: data.image || "https://www.theorbittech.com/images/starlink-dish.webp",
      width: 1200,
      height: 630,
      caption: data.imageCaption || data.headline || data.title,
      license: "https://www.theorbittech.com/terms-of-service",
      copyrightHolder: {
        "@type": "Organization",
        name: "The Orbit Tech"
      },
      acquireLicensePage: "https://www.theorbittech.com/contact"
    },
    author: {
      "@type": "Organization",
      name: "The Orbit Tech",
      url: "https://www.theorbittech.com"
    },
    publisher: {
      "@type": "Organization",
      name: "The Orbit Tech",
      logo: {
        "@type": "ImageObject",
        url: "https://www.theorbittech.com/images/orbit-tech-logo.webp",
        width: 300,
        height: 100
      }
    },
    datePublished: data.datePublished || new Date().toISOString(),
    dateModified: data.dateModified || new Date().toISOString(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.theorbittech.com${data.url || ''}`
    },
    ...data
  };
  
  useSchemaRegistration(`article-${data.url || 'default'}`, schema);
  return null;
};

export const LocationServiceSchema: React.FC<{ 
  location: string; 
  state: string; 
  url?: string;
  nearbyAreas?: string[];
}> = ({ location, state, url, nearbyAreas = [] }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://www.theorbittech.com${url || '/locations/' + location.toLowerCase() + '-' + state.toLowerCase()}#locationservice`,
    name: `Starlink Installation Services - ${location}, ${state}`,
    description: `Professional Starlink satellite internet installation services in ${location}, ${state}. Expert setup, same-day service, and 5-star customer reviews. ${nearbyAreas.length > 0 ? `Also serving ${nearbyAreas.join(', ')}.` : ''}`,
    serviceType: "Satellite Internet Installation",
    category: "Internet Installation Services",
    provider: {
      "@type": "Organization",
      name: "The Orbit Tech",
      telephone: "+1-571-999-6915",
      url: "https://www.theorbittech.com"
    },
    areaServed: [
      {
        "@type": "City",
        name: location,
        containedInPlace: {
          "@type": "State",
          name: state
        }
      },
      ...nearbyAreas.map(area => ({
        "@type": "City",
        name: area
      }))
    ],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `https://www.theorbittech.com${url || '/locations/' + location.toLowerCase() + '-' + state.toLowerCase()}`,
      serviceSmsNumber: "+1-571-999-6915",
      servicePhone: "+1-571-999-6915"
    },
    image: {
      "@type": "ImageObject",
      url: "https://www.theorbittech.com/images/starlink-installation.webp",
      width: 1200,
      height: 800,
      caption: `Professional Starlink Installation in ${location}, ${state}`,
      license: "https://www.theorbittech.com/terms-of-service",
      copyrightHolder: {
        "@type": "Organization",
        name: "The Orbit Tech"
      },
      acquireLicensePage: "https://www.theorbittech.com/contact"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Starlink Installation Packages - ${location}, ${state}`,
      itemListElement: [
        {
          "@type": "Offer",
          name: "Professional Installation",
          price: "599",
          priceCurrency: "USD",
          description: "Complete Starlink setup with professional installation",
          areaServed: {
            "@type": "City",
            name: location
          }
        },
        {
          "@type": "Offer", 
          name: "Complete Coverage Package",
          price: "899", 
          priceCurrency: "USD",
          description: "Everything included plus mesh WiFi for full home coverage",
          areaServed: {
            "@type": "City",
            name: location
          }
        }
      ]
    }
  };
  
  useSchemaRegistration(`location-service-${location.toLowerCase()}-${state.toLowerCase()}`, schema);
  return null;
};

export default {
  SchemaProvider,
  ConsolidatedSchemaInjector,
  BusinessSchema,
  ReviewSchema,
  FAQSchema,
  ServiceSchema,
  ArticleSchema,
  LocationServiceSchema,
  useSchema,
  useSchemaRegistration
};
