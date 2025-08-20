// Sitemap Generator for The Orbit Tech
// This file generates dynamic sitemaps for all pages and location-specific pages

interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

const baseUrl = 'https://theorbittech.com';

// Main site pages
const mainPages: SitemapEntry[] = [
  {
    url: `${baseUrl}/`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 1.0
  },
  {
    url: `${baseUrl}/services`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.9
  },
  {
    url: `${baseUrl}/about`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    url: `${baseUrl}/contact`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.8
  },
  {
    url: `${baseUrl}/blog`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'daily',
    priority: 0.8
  }
];

// Service pages
const servicePages: SitemapEntry[] = [
  {
    url: `${baseUrl}/services/starlink-installation`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.9
  },
  {
    url: `${baseUrl}/services/business-starlink`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.9
  },
  {
    url: `${baseUrl}/services/rural-internet`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.9
  },
  {
    url: `${baseUrl}/services/obstruction-assessment`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.8
  }
];

// Location-specific pages for DMV area
const locationPages: SitemapEntry[] = [
  // Virginia locations
  {
    url: `${baseUrl}/locations/fairfax-county-va`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.8
  },
  {
    url: `${baseUrl}/locations/loudoun-county-va`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.8
  },
  {
    url: `${baseUrl}/locations/arlington-county-va`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.8
  },
  {
    url: `${baseUrl}/locations/prince-william-county-va`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.8
  },
  {
    url: `${baseUrl}/locations/stafford-county-va`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.7
  },
  {
    url: `${baseUrl}/locations/fauquier-county-va`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.7
  },
  // Maryland locations
  {
    url: `${baseUrl}/locations/montgomery-county-md`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.8
  },
  {
    url: `${baseUrl}/locations/prince-georges-county-md`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.8
  },
  {
    url: `${baseUrl}/locations/anne-arundel-county-md`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.7
  },
  {
    url: `${baseUrl}/locations/charles-county-md`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.7
  },
  {
    url: `${baseUrl}/locations/frederick-county-md`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.7
  },
  // DC
  {
    url: `${baseUrl}/locations/washington-dc`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.8
  },
  // West Virginia
  {
    url: `${baseUrl}/locations/jefferson-county-wv`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.7
  },
  {
    url: `${baseUrl}/locations/berkeley-county-wv`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.7
  },
  // Pennsylvania
  {
    url: `${baseUrl}/locations/adams-county-pa`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.7
  },
  {
    url: `${baseUrl}/locations/franklin-county-pa`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 0.7
  }
];

// City-specific pages for major cities
const cityPages: SitemapEntry[] = [
  // Virginia cities
  { url: `${baseUrl}/locations/reston-va`, lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.8 },
  { url: `${baseUrl}/locations/herndon-va`, lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.7 },
  { url: `${baseUrl}/locations/vienna-va`, lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.7 },
  { url: `${baseUrl}/locations/mclean-va`, lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.7 },
  { url: `${baseUrl}/locations/great-falls-va`, lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.7 },
  { url: `${baseUrl}/locations/sterling-va`, lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.7 },
  { url: `${baseUrl}/locations/leesburg-va`, lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.7 },
  { url: `${baseUrl}/locations/ashburn-va`, lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.7 },
  { url: `${baseUrl}/locations/fairfax-va`, lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.7 },
  { url: `${baseUrl}/locations/alexandria-va`, lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.7 },
  { url: `${baseUrl}/locations/arlington-va`, lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.7 },
  
  // Maryland cities
  { url: `${baseUrl}/locations/bethesda-md`, lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.7 },
  { url: `${baseUrl}/locations/rockville-md`, lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.7 },
  { url: `${baseUrl}/locations/gaithersburg-md`, lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.7 },
  { url: `${baseUrl}/locations/germantown-md`, lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.7 },
  { url: `${baseUrl}/locations/silver-spring-md`, lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.7 },
  { url: `${baseUrl}/locations/potomac-md`, lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.7 },
  { url: `${baseUrl}/locations/annapolis-md`, lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.7 },
  { url: `${baseUrl}/locations/frederick-md`, lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: 0.7 }
];

// Blog pages (dynamic - would be generated from actual blog posts)
const generateBlogPages = (): SitemapEntry[] => {
  const blogPosts = [
    'starlink-installation-guide-dmv',
    'rural-internet-solutions-virginia',
    'starlink-vs-traditional-internet',
    'business-starlink-benefits',
    'starlink-weather-performance',
    'choosing-starlink-installer',
    'starlink-cost-analysis-2024',
    'satellite-internet-future'
  ];

  return blogPosts.map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly' as const,
    priority: 0.6
  }));
};

// Generate complete sitemap
export const generateSitemap = (): string => {
  const allPages = [
    ...mainPages,
    ...servicePages,
    ...locationPages,
    ...cityPages,
    ...generateBlogPages()
  ];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemapXml;
};

// Generate robots.txt content
export const generateRobotsTxt = (): string => {
  return `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay for politeness
Crawl-delay: 1

# Block common bot paths
Disallow: /admin/
Disallow: /api/
Disallow: /.env
Disallow: /node_modules/
Disallow: /src/
Disallow: /build/
Disallow: /dist/

# Allow important pages
Allow: /
Allow: /services
Allow: /locations
Allow: /blog
Allow: /about
Allow: /contact

# Block search result pages
Disallow: /search
Disallow: /*?search=*
Disallow: /*?q=*

# Block duplicate content
Disallow: /*?utm_*
Disallow: /*?ref=*
Disallow: /*?source=*

# Block development and testing
Disallow: /test/
Disallow: /dev/
Disallow: /_test/
Disallow: /staging/`;
};

export default { generateSitemap, generateRobotsTxt };
