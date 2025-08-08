import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SchemaInjectorProps } from '../../types';
import BUSINESS_CONFIG from '../../config/business';

const SchemaInjector: React.FC<SchemaInjectorProps> = ({ type, data }) => {
  const generateSchema = () => {
    const baseUrl = 'https://theorbittech.com';
    
    switch (type) {
      case 'LocalBusiness':
        return {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": `${baseUrl}/#localbusiness`,
          name: data.name || BUSINESS_CONFIG.business.name,
          description: data.description || "Professional Starlink satellite internet installation services in the DMV area",
          url: baseUrl,
          telephone: data.telephone || BUSINESS_CONFIG.phone.display,
          email: data.email || BUSINESS_CONFIG.email.primary,
          priceRange: BUSINESS_CONFIG.pricing.priceRange,
          address: {
            "@type": "PostalAddress",
            streetAddress: data.address?.streetAddress || BUSINESS_CONFIG.address.street,
            addressLocality: data.address?.addressLocality || BUSINESS_CONFIG.address.city,
            addressRegion: data.address?.addressRegion || BUSINESS_CONFIG.address.state,
            postalCode: data.address?.postalCode || BUSINESS_CONFIG.address.zip,
            addressCountry: data.address?.addressCountry || BUSINESS_CONFIG.address.country
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: data.geo?.latitude || 38.9072,
            longitude: data.geo?.longitude || -77.0369
          },
          areaServed: data.areaServed || [
            {
              "@type": "State",
              name: "Virginia"
            },
            {
              "@type": "State", 
              name: "Maryland"
            },
            {
              "@type": "City",
              name: "Washington DC"
            }
          ],
          serviceType: data.serviceType || [
            "Starlink Installation",
            "Satellite Internet Setup",
            "WiFi Network Configuration",
            "Internet Speed Optimization"
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: data.aggregateRating?.ratingValue || BUSINESS_CONFIG.metrics.rating,
            reviewCount: data.aggregateRating?.reviewCount || BUSINESS_CONFIG.metrics.reviewCount,
            bestRating: 5,
            worstRating: 1
          },
          openingHours: BUSINESS_CONFIG.hours.display,
          paymentAccepted: ["Cash", "Credit Card", "Check", "Invoice"],
          currenciesAccepted: BUSINESS_CONFIG.pricing.currency,
          hasMap: `https://maps.google.com/?q=${data.geo?.latitude || 38.9072},${data.geo?.longitude || -77.0369}`,
          image: [
            `${baseUrl}/images/starlink-dish.webp`,
            `${baseUrl}/images/technician-installation.webp`,
            `${baseUrl}/images/orbit-tech-logo.webp`
          ],
          logo: `${baseUrl}/images/orbit-tech-logo.webp`,
          sameAs: BUSINESS_CONFIG.social ? [
            BUSINESS_CONFIG.social.facebook,
            BUSINESS_CONFIG.social.twitter,
            BUSINESS_CONFIG.social.linkedin,
            BUSINESS_CONFIG.social.yelp
          ] : [],
          ...data
        };
      
      case 'Service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${baseUrl}/#service`,
          name: data.name || "Professional Starlink Installation",
          description: data.description || "Complete Starlink satellite internet installation with professional mounting, alignment, and optimization",
          provider: {
            "@type": "LocalBusiness",
            name: BUSINESS_CONFIG.business.name,
            telephone: BUSINESS_CONFIG.phone.display,
            url: baseUrl
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
          review: {
            "@type": "Review",
            reviewRating: {
              "@type": "Rating",
              ratingValue: 5,
              bestRating: 5
            },
            author: {
              "@type": "Person",
              name: "Mike Johnson"
            },
            reviewBody: "Outstanding service! The technician arrived on time and had my Starlink up and running in under 2 hours."
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: 4.9,
            reviewCount: 500
          },
          ...data
        };
      
      case 'FAQPage':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": `${baseUrl}${data.url || ''}#faq`,
          mainEntity: data.faqs?.map((faq: any, index: number) => ({
            "@type": "Question",
            "@id": `${baseUrl}${data.url || ''}#faq-${index + 1}`,
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
              author: {
                "@type": "Organization",
                name: "The Orbit Tech"
              }
            }
          })) || []
        };
      
      case 'Article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "@id": `${baseUrl}${data.url || ''}#article`,
          headline: data.headline || data.title,
          description: data.description,
          image: data.image || `${baseUrl}/images/starlink-dish.webp`,
          author: {
            "@type": "Organization",
            name: "The Orbit Tech",
            url: baseUrl
          },
          publisher: {
            "@type": "Organization",
            name: "The Orbit Tech",
            logo: {
              "@type": "ImageObject",
              url: `${baseUrl}/images/orbit-tech-logo.webp`
            }
          },
          datePublished: data.datePublished || new Date().toISOString(),
          dateModified: data.dateModified || new Date().toISOString(),
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${baseUrl}${data.url || ''}`
          },
          ...data
        };
      
      default:
        return {
          "@context": "https://schema.org",
          ...data
        };
    }
  };

  const schema = generateSchema();

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema, null, 2)}
      </script>
    </Helmet>
  );
};

export default SchemaInjector;
