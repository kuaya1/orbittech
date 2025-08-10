/**
 * SEO Utilities for The Orbit Tech
 * Handles canonical URLs, meta tags, and SEO best practices
 */

export const SITE_CONFIG = {
  baseUrl: 'https://theorbittech.com',
  companyName: 'The Orbit Tech',
  defaultDescription: 'Professional Starlink installation services across Northern Virginia, Maryland & Washington DC. Expert setup, same-day service, 90-day warranty.',
  defaultKeywords: 'Starlink installation, satellite internet setup, DMV Starlink installer, Northern Virginia internet',
  phone: '(571) 999-6915',
  email: 'info@theorbittech.com'
};

/**
 * Generate a clean canonical URL
 * Removes trailing slashes, query parameters, and ensures consistent format
 */
export function getCanonicalUrl(pathname: string): string {
  // Remove trailing slash
  const cleanPath = pathname.replace(/\/$/, '') || '/';
  
  // Ensure it starts with /
  const normalizedPath = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
  
  return `${SITE_CONFIG.baseUrl}${normalizedPath}`;
}

/**
 * Get the current pathname for canonical URL generation
 */
export function getCurrentPathname(): string {
  if (typeof window !== 'undefined') {
    return window.location.pathname;
  }
  return '/';
}

/**
 * Generate SEO metadata for location pages
 */
export function getLocationSEO(location: {
  name: string;
  stateAbbr: string;
  county?: string;
  specialties?: string[];
}) {
  const { name, stateAbbr, county, specialties } = location;
  
  const locationName = county ? `${county}, ${stateAbbr}` : `${name}, ${stateAbbr}`;
  const serviceTypes = specialties?.join(', ') || 'residential and commercial properties';
  
  return {
    title: `Starlink Installation ${locationName} | ${SITE_CONFIG.companyName} | Same-Day Service`,
    description: `Professional Starlink installation in ${locationName}. Expert setup for ${serviceTypes}. Same-day service, 90-day warranty, competitive pricing. Free consultation!`,
    keywords: [
      `Starlink installation ${locationName}`,
      `Starlink installer ${name} ${stateAbbr}`,
      `satellite internet ${locationName}`,
      `Starlink setup ${name}`,
      'professional satellite installation',
      'same-day Starlink service',
      ...(specialties || [])
    ].join(', '),
    canonical: getCanonicalUrl(`/locations/${name.toLowerCase().replace(/\s+/g, '-')}-${county ? 'county-' : ''}${stateAbbr.toLowerCase()}`),
    schema: {
      type: 'LocalBusiness' as const,
      businessName: `${SITE_CONFIG.companyName} - ${locationName}`,
      description: `Professional Starlink installation services in ${locationName}. Serving ${serviceTypes} with expert setup and ongoing support.`,
      serviceArea: [locationName],
      services: [
        'Starlink Installation',
        'Satellite Internet Setup',
        'Equipment Configuration',
        'Site Survey',
        'Professional Mounting',
        'Network Optimization'
      ],
      telephone: SITE_CONFIG.phone,
      priceRange: '$499-$999'
    }
  };
}

/**
 * Validate and clean URL parameters to prevent duplicate content
 */
export function getCleanUrl(url: string): string {
  try {
    const urlObj = new URL(url);
    
    // Remove tracking parameters that can cause duplicates
    const trackingParams = [
      'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content',
      'gclid', 'fbclid', 'msclkid', 'ref', 'source', 'referrer'
    ];
    
    trackingParams.forEach(param => {
      urlObj.searchParams.delete(param);
    });
    
    // Remove trailing slash unless it's the root
    let pathname = urlObj.pathname;
    if (pathname !== '/' && pathname.endsWith('/')) {
      pathname = pathname.slice(0, -1);
    }
    
    urlObj.pathname = pathname;
    
    return urlObj.toString();
  } catch {
    return url;
  }
}

/**
 * Check if current page should be indexed
 */
export function shouldIndex(pathname: string): boolean {
  const noIndexPaths = [
    '/admin',
    '/api',
    '/private',
    '/test',
    '/demo',
    '/.well-known'
  ];
  
  return !noIndexPaths.some(path => pathname.startsWith(path));
}

/**
 * Generate structured data for service pages
 */
export function getServiceSchema(service: {
  name: string;
  description: string;
  areas: string[];
  priceRange?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': service.name,
    'description': service.description,
    'provider': {
      '@type': 'LocalBusiness',
      'name': SITE_CONFIG.companyName,
      'telephone': SITE_CONFIG.phone,
      'url': SITE_CONFIG.baseUrl
    },
    'areaServed': service.areas.map(area => ({
      '@type': 'State',
      'name': area
    })),
    'offers': {
      '@type': 'Offer',
      'priceRange': service.priceRange || '$499-$999',
      'priceCurrency': 'USD'
    }
  };
}

/**
 * Generate breadcrumb structured data
 */
export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url
    }))
  };
}
