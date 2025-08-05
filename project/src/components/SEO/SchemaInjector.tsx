// src/components/SEO/SchemaInjector.tsx
import { Helmet } from 'react-helmet-async';

export const HomeSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "The Orbit Tech",
    "url": "https://www.theorbittech.com",
    "telephone": "+1-571-999-6915",
    "email": "contact@theorbittech.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "8000 Westpark Drive, STE 450",
      "addressLocality": "McLean",
      "addressRegion": "VA",
      "postalCode": "22102",
      "addressCountry": "US"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "127"
    },
    "priceRange": "$$$",
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "08:00",
      "closes": "18:00"
    }],
    "areaServed": [
      {"@type": "State", "name": "Virginia"},
      {"@type": "State", "name": "Maryland"},
      {"@type": "AdministrativeArea", "name": "Washington DC"}
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};
