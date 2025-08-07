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

  // Sitemap Configuration
  sitemapConfig: {
    siteUrl: 'https://www.theorbittech.com',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    changefreq: 'weekly',
    priority: 0.7,
    lastmod: new Date().toISOString(),
    additionalPaths: [
      {
        loc: '/privacy-policy',
        changefreq: 'monthly',
        priority: 0.3,
      },
      {
        loc: '/terms-of-service',
        changefreq: 'monthly',
        priority: 0.3,
      },
    ],
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
          crawlDelay: 1,
        },
        {
          userAgent: 'Googlebot',
          allow: '/',
          crawlDelay: 0.5,
        },
      ],
      sitemap: 'https://www.theorbittech.com/sitemap-index.xml',
    },
  },

  // Dynamic Sitemap Structure
  sitemapStructure: {
    index: {
      filename: 'sitemap-index.xml',
      sitemaps: [
        {
          loc: 'https://www.theorbittech.com/sitemap-pages.xml',
          lastmod: new Date().toISOString(),
        },
        {
          loc: 'https://www.theorbittech.com/sitemap-locations.xml',
          lastmod: new Date().toISOString(),
        },
        {
          loc: 'https://www.theorbittech.com/sitemap-blog.xml',
          lastmod: new Date().toISOString(),
        },
        {
          loc: 'https://www.theorbittech.com/sitemap-services.xml',
          lastmod: new Date().toISOString(),
        },
      ],
    },
    pages: {
      filename: 'sitemap-pages.xml',
      changefreq: 'weekly',
      priority: 0.8,
      urls: [
        { loc: '/', priority: 1.0, changefreq: 'daily' },
        { loc: '/services', priority: 0.9, changefreq: 'weekly' },
        { loc: '/service-areas', priority: 0.9, changefreq: 'weekly' },
        { loc: '/about', priority: 0.7, changefreq: 'monthly' },
        { loc: '/contact', priority: 0.8, changefreq: 'weekly' },
        { loc: '/privacy-policy', priority: 0.3, changefreq: 'monthly' },
        { loc: '/terms-of-service', priority: 0.3, changefreq: 'monthly' },
      ],
    },
    locations: {
      filename: 'sitemap-locations.xml',
      changefreq: 'weekly',
      priority: 0.9,
      urls: [
        // Northern Virginia Locations - aligned with React Router paths
        { loc: '/locations/fairfax-county-va', priority: 0.9, changefreq: 'weekly' },
        { loc: '/locations/arlington-county-va', priority: 0.9, changefreq: 'weekly' },
        { loc: '/locations/alexandria-va', priority: 0.9, changefreq: 'weekly' },
        { loc: '/locations/loudoun-county-va', priority: 0.9, changefreq: 'weekly' },
        { loc: '/locations/prince-william-county-va', priority: 0.9, changefreq: 'weekly' },
        { loc: '/locations/rockingham-county-va', priority: 0.9, changefreq: 'weekly' },
        
        // Maryland Locations - aligned with React Router paths
        { loc: '/locations/montgomery-county-md', priority: 0.9, changefreq: 'weekly' },
        { loc: '/locations/howard-county-md', priority: 0.9, changefreq: 'weekly' },
        { loc: '/locations/anne-arundel-county-md', priority: 0.9, changefreq: 'weekly' },
        
        // Washington DC - aligned with React Router paths
        { loc: '/locations/washington-dc', priority: 0.9, changefreq: 'weekly' },
        
        // West Virginia - aligned with React Router paths
        { loc: '/locations/jefferson-county-wv', priority: 0.9, changefreq: 'weekly' },
      ],
    },
    services: {
      filename: 'sitemap-services.xml',
      changefreq: 'weekly',
      priority: 0.8,
      urls: [
        { loc: '/starlink-installation', priority: 0.9, changefreq: 'weekly' },
        { loc: '/starlink-mounting', priority: 0.8, changefreq: 'weekly' },
        { loc: '/starlink-cable-routing', priority: 0.8, changefreq: 'weekly' },
        { loc: '/starlink-network-setup', priority: 0.8, changefreq: 'weekly' },
        { loc: '/starlink-troubleshooting', priority: 0.8, changefreq: 'weekly' },
        { loc: '/starlink-maintenance', priority: 0.8, changefreq: 'weekly' },
        { loc: '/starlink-relocation', priority: 0.8, changefreq: 'weekly' },
        { loc: '/commercial-starlink-installation', priority: 0.8, changefreq: 'weekly' },
        { loc: '/residential-starlink-installation', priority: 0.8, changefreq: 'weekly' },
      ],
    },
    blog: {
      filename: 'sitemap-blog.xml',
      changefreq: 'weekly',
      priority: 0.6,
      urls: [
        // Blog posts will be dynamically generated
        { loc: '/blog', priority: 0.7, changefreq: 'daily' },
        { loc: '/blog/starlink-installation-guide', priority: 0.6, changefreq: 'monthly' },
        { loc: '/blog/starlink-vs-traditional-internet', priority: 0.6, changefreq: 'monthly' },
        { loc: '/blog/starlink-mounting-options', priority: 0.6, changefreq: 'monthly' },
        { loc: '/blog/starlink-weather-performance', priority: 0.6, changefreq: 'monthly' },
      ],
    },
  },
  
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

// Sitemap Generation Utilities
export const generateSitemapIndex = () => {
  const { sitemapStructure } = seoConfig;
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapStructure.index.sitemaps.map(sitemap => `  <sitemap>
    <loc>${sitemap.loc}</loc>
    <lastmod>${sitemap.lastmod}</lastmod>
  </sitemap>`).join('\n')}
</sitemapindex>`;
};

export const generateSitemap = (type: 'pages' | 'locations' | 'services' | 'blog') => {
  const { sitemapStructure } = seoConfig;
  const config = sitemapStructure[type];
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${config.urls.map(url => `  <url>
    <loc>${seoConfig.siteUrl}${url.loc}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${url.changefreq || config.changefreq}</changefreq>
    <priority>${url.priority || config.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
};

export const generateRobotsTxt = () => {
  const { robotsTxtOptions } = seoConfig.sitemapConfig;
  
  return `# Robots.txt for The Orbit Tech
# Generated on ${new Date().toISOString()}

${robotsTxtOptions.policies.map(policy => 
  `User-agent: ${policy.userAgent}
${policy.allow ? `Allow: ${policy.allow}` : ''}
${policy.crawlDelay ? `Crawl-delay: ${policy.crawlDelay}` : ''}
`).join('\n')}

# Sitemap location
Sitemap: ${robotsTxtOptions.sitemap}

# Additional directives for better crawling
Clean-param: utm_source&utm_medium&utm_campaign
Clean-param: fbclid&gclid&ref
`;
};

// SEO Analytics and Monitoring
export const seoMonitoring = {
  // Core Web Vitals thresholds
  coreWebVitals: {
    lcp: { good: 2500, needsImprovement: 4000 }, // Largest Contentful Paint
    fid: { good: 100, needsImprovement: 300 },   // First Input Delay
    cls: { good: 0.1, needsImprovement: 0.25 },  // Cumulative Layout Shift
  },
  
  // Page speed targets
  pageSpeed: {
    desktop: { target: 90, minimum: 80 },
    mobile: { target: 85, minimum: 75 },
  },
  
  // Indexing monitoring
  indexing: {
    expectedPages: 50, // Total pages expected to be indexed
    criticalPages: [
      '/',
      '/services',
      '/service-areas',
      '/contact',
      '/starlink-installation-fairfax-va',
      '/starlink-installation-montgomery-county-md',
      '/starlink-installation-washington-dc',
    ],
  },
  
  // Keywords to monitor
  targetKeywords: [
    'starlink installation dmv',
    'starlink installation northern virginia',
    'starlink installation maryland',
    'starlink installation washington dc',
    'professional starlink installation',
    'starlink dish mounting',
    'satellite internet installation',
  ],
};
