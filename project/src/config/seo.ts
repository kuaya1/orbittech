// SEO Configuration for The Orbit Tech
export const seoConfig = {
  // Site-wide defaults
  defaultTitle: 'The Orbit Tech | #1 Starlink Installation DMV | Free Quote',
  titleTemplate: '%s | The Orbit Tech',
  defaultDescription: 'The Orbit Tech: DMV\'s #1-rated Starlink installation experts. Professional setup in DC, MD & VA with same-day service. 500+ installations. Get your free quote today!',
  siteUrl: 'https://www.theorbittech.com',
  
  // Open Graph defaults
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.theorbittech.com',
    siteName: 'The Orbit Tech',
    images: [
      {
        url: 'https://www.theorbittech.com/starlink-dish-installation.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Starlink Installation by The Orbit Tech',
      },
    ],
  },
  
  // Twitter Card defaults
  twitter: {
    handle: '@theorbittech',
    site: '@theorbittech',
    cardType: 'summary_large_image',
  },
  
  // Additional meta tags
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#1e40af',
    },
    {
      name: 'msapplication-TileColor',
      content: '#1e40af',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'default',
    },
    {
      name: 'mobile-web-app-capable',
      content: 'yes',
    },
  ],
  
  // Structured Data Schema
  organizationSchema: {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.theorbittech.com/#organization',
    name: 'The Orbit Tech',
    url: 'https://www.theorbittech.com',
    telephone: '+1-571-378-7360',
    email: 'info@theorbittech.com',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'VA',
      addressCountry: 'US',
      addressLocality: 'Northern Virginia',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 38.9072,
      longitude: -77.0369,
    },
    areaServed: [
      {
        '@type': 'State',
        name: 'Virginia',
      },
      {
        '@type': 'State', 
        name: 'Maryland',
      },
      {
        '@type': 'City',
        name: 'Washington DC',
      },
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 38.9072,
        longitude: -77.0369,
      },
      geoRadius: '50 miles',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
    priceRange: '$$$',
    openingHours: 'Mo-Fr 08:00-18:00',
    paymentAccepted: 'Cash, Credit Card',
    currenciesAccepted: 'USD',
    sameAs: [
      'https://www.facebook.com/theorbittech',
      'https://www.linkedin.com/company/theorbittech', 
      'https://twitter.com/theorbittech',
    ],
  },
  
  // Service Schema
  serviceSchema: {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://www.theorbittech.com/#service',
    name: 'Starlink Installation Service',
    description: 'Professional Starlink satellite internet installation and setup service',
    provider: {
      '@id': 'https://www.theorbittech.com/#organization',
    },
    serviceType: 'Satellite Internet Installation',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: '299',
      priceValidUntil: '2025-12-31',
      availability: 'https://schema.org/InStock',
      validFrom: '2025-01-01',
    },
  },
  
  // FAQ Schema
  faqSchema: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How long does Starlink installation take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most installations take 2-4 hours depending on the complexity of your setup and roof access.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you serve the entire DMV area?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide Starlink installation services throughout Northern Virginia, Maryland, and Washington DC.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is included in the installation service?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our service includes dish mounting, cable routing, indoor setup, network configuration, and speed testing.',
        },
      },
    ],
  },
};

// Page-specific SEO configurations
export const pageConfigs = {
  home: {
    title: 'The Orbit Tech | #1 Starlink Installation DMV | Free Quote',
    description: 'The Orbit Tech: DMV\'s #1-rated Starlink installation experts. Professional setup in DC, MD & VA with same-day service. 500+ installations. Get your free quote today!',
    keywords: 'starlink installation, dmv, northern virginia, maryland, washington dc, satellite internet, professional installation',
  },
  
  services: {
    title: 'Starlink Installation Services | Professional Setup | The Orbit Tech',
    description: 'Expert Starlink installation services in the DMV area. Professional mounting, cable routing, and network setup. Licensed & insured with 90-day warranty.',
    keywords: 'starlink installation services, professional setup, dish mounting, cable routing, network configuration',
  },
  
  serviceAreas: {
    title: 'Service Areas | DMV Starlink Installation | The Orbit Tech',
    description: 'We provide Starlink installation throughout Northern Virginia, Maryland, and Washington DC. Find out if we service your area.',
    keywords: 'starlink installation areas, northern virginia, maryland, washington dc, service coverage',
  },
  
  contact: {
    title: 'Contact Us | Free Starlink Installation Quote | The Orbit Tech',
    description: 'Get your free Starlink installation quote today. Call (571) 378-7360 or contact us online. Serving the entire DMV area.',
    keywords: 'starlink installation quote, contact, phone, dmv area, free estimate',
  },
  
  about: {
    title: 'About Us | Professional Starlink Installers | The Orbit Tech',
    description: 'Learn about The Orbit Tech, DMV\'s trusted Starlink installation experts. 500+ successful installations with 5-star customer ratings.',
    keywords: 'about orbit tech, starlink installers, dmv, professional team, customer reviews',
  },
};
