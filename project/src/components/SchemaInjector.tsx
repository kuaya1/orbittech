import React from 'react';

const SchemaInjector = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "The Orbit Tech",
    "image": "https://www.theorbittech.com/logo.png", // IMPORTANT: Replace with the actual URL to your logo
    "url": "https://www.theorbittech.com/",
    "telephone": "+1-571-999-6915",
    "priceRange": "$$$", // Optional: A general idea of your pricing
    "description": "The Orbit Tech offers professional, certified Starlink installation for homes and businesses across the DMV area (DC, Maryland, Virginia).",

    // This section is critical as it defines your service area without needing a physical address.
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
        "name": "District of Columbia"
      }
    ],

    /*
    // --- OPENING HOURS: UNCOMMENT AND EDIT WHEN READY ---
    // Once you have defined business hours, remove the comment markers (* / and / *)
    // and edit the times.
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "15:00"
      }
    ]
    */
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default SchemaInjector;