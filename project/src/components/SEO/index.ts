// SEO Components Index
// Central export for all SEO-related components and utilities

export { default as SEOMetadata } from './SEOMetadata';
export { default as SchemaInjector, HomeSchema } from './SchemaInjector';
export { default as SEOAudit } from './SEOAudit';

// Common SEO configurations
export const seoConfig = {
  siteName: 'The Orbit Tech',
  siteUrl: 'https://theorbittech.com',
  defaultTitle: 'The Orbit Tech - Professional Starlink Installation DMV',
  defaultDescription: 'Expert Starlink installation services throughout the Washington DC Metro area. Same-day professional satellite internet setup with complete coverage packages.',
  defaultKeywords: [
    'Starlink installation',
    'satellite internet DMV',
    'professional Starlink installer',
    'Washington DC area',
    'Virginia Starlink',
    'Maryland Starlink',
    'high-speed internet',
    'rural internet solutions'
  ],
  defaultOgImage: '/hero-og-image.png',
  twitterHandle: '@TheOrbitTech',
  facebookPage: 'https://www.facebook.com/theorbittech',
  linkedinPage: 'https://www.linkedin.com/company/theorbittech',
  businessInfo: {
    name: 'The Orbit Tech LLC',
    address: {
      street: '11951 Freedom Dr',
      city: 'Reston',
      state: 'VA',
      zip: '20190',
      country: 'US'
    },
    phone: '+1-703-596-7586',
    email: 'info@theorbittech.com',
    coordinates: {
      lat: 38.9586,
      lng: -77.3570
    }
  }
};

// Location data for schema and SEO
export const serviceLocations = {
  virginia: {
    counties: [
      'Fairfax County',
      'Loudoun County',
      'Arlington County',
      'Prince William County',
      'Stafford County',
      'Fauquier County'
    ],
    cities: [
      'Reston', 'Herndon', 'Vienna', 'McLean', 'Great Falls',
      'Sterling', 'Leesburg', 'Ashburn', 'Fairfax', 'Alexandria', 'Arlington'
    ]
  },
  maryland: {
    counties: [
      'Montgomery County',
      'Prince Georges County',
      'Anne Arundel County',
      'Charles County',
      'Frederick County'
    ],
    cities: [
      'Bethesda', 'Rockville', 'Gaithersburg', 'Germantown',
      'Silver Spring', 'Potomac', 'Annapolis', 'Frederick'
    ]
  },
  dc: {
    areas: ['Washington DC']
  },
  westVirginia: {
    counties: ['Jefferson County', 'Berkeley County']
  },
  pennsylvania: {
    counties: ['Adams County', 'Franklin County']
  }
};

// FAQ data for schema
export const commonFAQs = [
  {
    question: "How long does Starlink installation take?",
    answer: "Professional Starlink installation typically takes 2-4 hours depending on the complexity of your setup and mounting requirements. This includes dish mounting, cable routing, network configuration, and testing."
  },
  {
    question: "Do you service my area in the DMV?",
    answer: "We provide Starlink installation services throughout the Washington DC Metro area, including Virginia, Maryland, and Washington DC within a 50-mile radius of our Reston, VA base."
  },
  {
    question: "What's included in your Starlink installation service?",
    answer: "Our installation includes professional dish mounting, weatherproof cable routing, network setup and configuration, speed testing, and a 1-year warranty on installation work. We also provide ongoing technical support."
  },
  {
    question: "How much does Starlink installation cost?",
    answer: "Our professional Starlink installation starts at $599 for standard installation. We also offer Complete Coverage Packages ($899) and Business Starlink Setup ($1,299). Free obstruction assessments are available."
  },
  {
    question: "Can you install Starlink on any roof type?",
    answer: "We can install Starlink on most roof types including shingle, tile, metal, and flat roofs. Our certified technicians assess each location to determine the best mounting solution for optimal performance."
  },
  {
    question: "Do you provide warranties on your installation work?",
    answer: "Yes, we provide a comprehensive 1-year warranty on all installation work including mounting hardware, cable routing, and network configuration. Starlink equipment is covered under SpaceX's manufacturer warranty."
  },
  {
    question: "How do I know if Starlink will work at my location?",
    answer: "We offer free obstruction assessments to evaluate your property for optimal Starlink performance. Our technicians use professional tools to identify potential obstructions and recommend the best installation approach."
  },
  {
    question: "Can you help with business Starlink installations?",
    answer: "Absolutely! We specialize in business Starlink installations including redundancy planning, network optimization, and integration with existing IT infrastructure. Our Business Starlink Setup package is designed for commercial needs."
  }
];

// Service offerings for schema
export const serviceOfferings = [
  {
    name: "Professional Starlink Installation",
    price: "$599",
    description: "Complete professional installation of Starlink satellite internet system including dish mounting, cable routing, and network setup."
  },
  {
    name: "Complete Coverage Package",
    price: "$899",
    description: "Comprehensive Starlink installation with extended warranty, professional assessment, and ongoing support."
  },
  {
    name: "Business Starlink Setup",
    price: "$1299",
    description: "Enterprise-grade Starlink installation for businesses with redundancy planning and network optimization."
  },
  {
    name: "Obstruction Assessment",
    price: "Free",
    description: "Professional site survey to assess optimal Starlink dish placement and identify potential obstructions."
  }
];

export default {
  seoConfig,
  serviceLocations,
  commonFAQs,
  serviceOfferings
};
