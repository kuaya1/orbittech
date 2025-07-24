import React from 'react';

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "The Orbit Tech",
  "image": "https://www.theorbittech.com/logo.png", // IMPORTANT: Replace with the actual URL to your logo
  "url": "https://www.theorbittech.com/",
  "telephone": "+1-571-999-6915",
  "priceRange": "$$$", // Optional: A general idea of your pricing
  "description": "The Orbit Tech offers professional, certified Starlink installation for homes and businesses across the DMV area (DC, Maryland, Virginia).",
  "areaServed": [
    { "@type": "State", "name": "Virginia" },
    { "@type": "State", "name": "Maryland" },
    { "@type": "AdministrativeArea", "name": "District of Columbia" }
  ]
  // Uncomment and edit openingHoursSpecification if needed
};

const SchemaInjector: React.FC = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
  />
);

export default SchemaInjector;