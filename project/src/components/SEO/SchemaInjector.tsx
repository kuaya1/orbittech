import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SchemaInjectorProps {
  pageType?: 'home' | 'service' | 'location' | 'blog' | 'contact';
  location?: {
    county?: string;
    state?: 'VA' | 'MD' | 'DC';
    coordinates?: { lat: number; lng: number };
    zipCodes?: string[];
  };
  service?: {
    name: string;
    price?: string;
    description?: string;
  };
  breadcrumbs?: Array<{ name: string; url: string }>;
  faqs?: Array<{ question: string; answer: string }>;
  reviews?: {
    rating: number;
    reviewCount: number;
    reviews?: Array<{
      author: string;
      rating: number;
      text: string;
      date: string;
    }>;
  };
}

const SchemaInjector: React.FC<SchemaInjectorProps> = ({
  pageType = 'home',
  location,
  service,
  breadcrumbs = [],
  faqs = [],
  reviews
}) => {
  // Base organization data
  const organizationSchema = {
    "@type": "Organization",
    "@id": "https://theorbittech.com/#organization",
    "name": "The Orbit Tech",
    "legalName": "The Orbit Tech LLC",
    "url": "https://theorbittech.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://theorbittech.com/orbit-tech-logo.png",
      "width": 300,
      "height": 100
    },
    "image": [
      "https://theorbittech.com/orbit-tech-logo.png",
      "https://theorbittech.com/starlink-installation-team.jpg"
    ],
    "description": "Professional Starlink installation services throughout the Washington DC Metro area. Expert satellite internet setup with same-day installation and complete coverage packages.",
    "email": "info@theorbittech.com",
    "telephone": "+1-703-596-7586",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "11951 Freedom Dr",
      "addressLocality": "Reston",
      "addressRegion": "VA",
      "postalCode": "20190",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.9586,
      "longitude": -77.3570
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+1-703-596-7586",
        "contactType": "customer service",
        "email": "info@theorbittech.com",
        "availableLanguage": ["English"],
        "areaServed": ["US-VA", "US-MD", "US-DC"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+1-703-596-7586",
        "contactType": "technical support",
        "email": "support@theorbittech.com",
        "availableLanguage": ["English"]
      }
    ],
    "sameAs": [
      "https://www.facebook.com/theorbittech",
      "https://www.instagram.com/theorbittech",
      "https://www.linkedin.com/company/theorbittech",
      "https://twitter.com/theorbittech"
    ],
    "foundingDate": "2023",
    "numberOfEmployees": "10-20",
    "slogan": "Connecting You to the Future of Internet",
    "brand": {
      "@type": "Brand",
      "name": "The Orbit Tech"
    }
  };

  // Local Business schema
  const localBusinessSchema = {
    "@type": "LocalBusiness",
    "@id": "https://theorbittech.com/#localbusiness",
    "name": "The Orbit Tech",
    "image": [
      "https://theorbittech.com/orbit-tech-logo.png",
      "https://theorbittech.com/starlink-installation-service.jpg"
    ],
    "telephone": "+1-703-596-7586",
    "email": "info@theorbittech.com",
    "url": "https://theorbittech.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "11951 Freedom Dr",
      "addressLocality": "Reston",
      "addressRegion": "VA",
      "postalCode": "20190",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.9586,
      "longitude": -77.3570
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "priceRange": "$599-$1299",
    "currenciesAccepted": "USD",
    "paymentAccepted": ["Cash", "Credit Card", "Check", "Bank Transfer"],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 38.9586,
        "longitude": -77.3570
      },
      "geoRadius": "80000"
    },
    "areaServed": [
      {
        "@type": "State",
        "name": "Virginia"
      },
      {
        "@type": "State", 
        "name": "Maryland"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Washington DC"
      }
    ]
  };

  // Professional Service schema
  const professionalServiceSchema = {
    "@type": "ProfessionalService",
    "@id": "https://theorbittech.com/#service",
    "name": "Professional Starlink Installation Services",
    "serviceType": "Telecommunications Installation",
    "provider": {
      "@id": "https://theorbittech.com/#organization"
    },
    "areaServed": [
      {
        "@type": "State",
        "name": "Virginia",
        "containsPlace": [
          { "@type": "City", "name": "Reston" },
          { "@type": "City", "name": "Herndon" },
          { "@type": "City", "name": "Vienna" },
          { "@type": "City", "name": "McLean" },
          { "@type": "City", "name": "Great Falls" },
          { "@type": "City", "name": "Sterling" },
          { "@type": "City", "name": "Leesburg" },
          { "@type": "City", "name": "Ashburn" },
          { "@type": "City", "name": "Fairfax" },
          { "@type": "City", "name": "Arlington" }
        ]
      },
      {
        "@type": "State",
        "name": "Maryland",
        "containsPlace": [
          { "@type": "City", "name": "Bethesda" },
          { "@type": "City", "name": "Rockville" },
          { "@type": "City", "name": "Gaithersburg" },
          { "@type": "City", "name": "Germantown" },
          { "@type": "City", "name": "Silver Spring" },
          { "@type": "City", "name": "Potomac" },
          { "@type": "City", "name": "Annapolis" },
          { "@type": "City", "name": "Frederick" }
        ]
      },
      {
        "@type": "AdministrativeArea",
        "name": "Washington DC"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Starlink Installation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Professional Starlink Installation",
            "description": "Complete professional installation of Starlink satellite internet system including dish mounting, cable routing, and network setup."
          },
          "price": "599",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "validFrom": "2024-01-01",
          "priceValidUntil": "2024-12-31"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Complete Coverage Package",
            "description": "Comprehensive Starlink installation with extended warranty, professional assessment, and ongoing support."
          },
          "price": "899",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Starlink Setup",
            "description": "Enterprise-grade Starlink installation for businesses with redundancy planning and network optimization."
          },
          "price": "1299",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Obstruction Assessment",
            "description": "Free professional site survey to assess optimal Starlink dish placement and identify potential obstructions."
          },
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      ]
    }
  };

  // Website schema
  const websiteSchema = {
    "@type": "WebSite",
    "@id": "https://theorbittech.com/#website",
    "url": "https://theorbittech.com",
    "name": "The Orbit Tech - Starlink Installation DMV",
    "description": "Professional Starlink installation services throughout the Washington DC Metro area",
    "publisher": {
      "@id": "https://theorbittech.com/#organization"
    },
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://theorbittech.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    ],
    "inLanguage": "en-US"
  };

  // Generate breadcrumb schema
  const generateBreadcrumbSchema = () => {
    if (breadcrumbs.length === 0) return null;

    return {
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": crumb.url
      }))
    };
  };

  // Generate FAQ schema
  const generateFAQSchema = () => {
    if (faqs.length === 0) return null;

    return {
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  };

  // Generate review/rating schema
  const generateReviewSchema = () => {
    if (!reviews) return null;

    const aggregateRating = {
      "@type": "AggregateRating",
      "ratingValue": reviews.rating,
      "reviewCount": reviews.reviewCount,
      "bestRating": 5,
      "worstRating": 1
    };

    if (reviews.reviews && reviews.reviews.length > 0) {
      return {
        "@type": "Organization",
        "@id": "https://theorbittech.com/#organization",
        "aggregateRating": aggregateRating,
        "review": reviews.reviews.map(review => ({
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": review.author
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": review.rating,
            "bestRating": 5,
            "worstRating": 1
          },
          "reviewBody": review.text,
          "datePublished": review.date
        }))
      };
    }

    return aggregateRating;
  };

  // Generate location-specific service schema
  const generateLocationServiceSchema = () => {
    if (!location) return null;

    return {
      "@type": "Service",
      "name": `Starlink Installation in ${location.county}, ${location.state}`,
      "serviceType": "Satellite Internet Installation",
      "provider": {
        "@id": "https://theorbittech.com/#organization"
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": `${location.county}, ${location.state}`,
        "geo": location.coordinates ? {
          "@type": "GeoCoordinates",
          "latitude": location.coordinates.lat,
          "longitude": location.coordinates.lng
        } : undefined
      },
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://theorbittech.com",
        "serviceSmsNumber": "+1-703-596-7586",
        "servicePhone": "+1-703-596-7586"
      }
    };
  };

  // Compile all schemas
  const compileSchemas = () => {
    const schemas: Record<string, any>[] = [
      organizationSchema,
      localBusinessSchema,
      professionalServiceSchema,
      websiteSchema
    ];

    // Add conditional schemas
    const breadcrumbSchema = generateBreadcrumbSchema();
    if (breadcrumbSchema) schemas.push(breadcrumbSchema);

    const faqSchema = generateFAQSchema();
    if (faqSchema) schemas.push(faqSchema);

    const reviewSchema = generateReviewSchema();
    if (reviewSchema) schemas.push(reviewSchema);

    const locationServiceSchema = generateLocationServiceSchema();
    if (locationServiceSchema) schemas.push(locationServiceSchema);

    // Add service-specific schema
    if (service) {
      schemas.push({
        "@type": "Service",
        "name": service.name,
        "description": service.description || `Professional ${service.name} services in the DMV area`,
        "provider": {
          "@id": "https://theorbittech.com/#organization"
        },
        "offers": {
          "@type": "Offer",
          "price": service.price || "Contact for pricing",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      });
    }

    return {
      "@context": "https://schema.org",
      "@graph": schemas
    };
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(compileSchemas(), null, 2)}
      </script>
    </Helmet>
  );
};

// Legacy component for backward compatibility
export const HomeSchema = () => {
  return (
    <SchemaInjector 
      pageType="home"
      reviews={{
        rating: 5.0,
        reviewCount: 127
      }}
      faqs={[
        {
          question: "How long does Starlink installation take?",
          answer: "Professional Starlink installation typically takes 2-4 hours depending on the complexity of your setup and mounting requirements."
        },
        {
          question: "Do you service my area?",
          answer: "We provide Starlink installation services throughout the Washington DC Metro area, including Virginia, Maryland, and Washington DC within a 50-mile radius."
        },
        {
          question: "What's included in the installation?",
          answer: "Our installation includes professional dish mounting, cable routing, network setup, testing, and a 1-year warranty on installation work."
        }
      ]}
    />
  );
};

export default SchemaInjector;
