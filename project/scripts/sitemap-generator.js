/**
 * Build-time Sitemap Generator for The Orbit Tech
 * Generates optimized sitemaps during the build process
 */

// Manual SEO configuration for build-time use
const seoConfig = {
  siteUrl: 'https://www.theorbittech.com',
  sitemapStructure: {
    index: {
      sitemaps: [
        { loc: 'https://www.theorbittech.com/sitemap-pages.xml', lastmod: new Date().toISOString() },
        { loc: 'https://www.theorbittech.com/sitemap-locations.xml', lastmod: new Date().toISOString() },
        { loc: 'https://www.theorbittech.com/sitemap-services.xml', lastmod: new Date().toISOString() },
        { loc: 'https://www.theorbittech.com/sitemap-blog.xml', lastmod: new Date().toISOString() },
      ],
    },
    pages: {
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
      changefreq: 'weekly',
      priority: 0.9,
      urls: [
        // Northern Virginia Locations
        { loc: '/starlink-installation-fairfax-va', priority: 0.9, changefreq: 'weekly' },
        { loc: '/starlink-installation-arlington-va', priority: 0.9, changefreq: 'weekly' },
        { loc: '/starlink-installation-alexandria-va', priority: 0.9, changefreq: 'weekly' },
        { loc: '/starlink-installation-vienna-va', priority: 0.9, changefreq: 'weekly' },
        { loc: '/starlink-installation-reston-va', priority: 0.9, changefreq: 'weekly' },
        { loc: '/starlink-installation-herndon-va', priority: 0.9, changefreq: 'weekly' },
        { loc: '/starlink-installation-sterling-va', priority: 0.9, changefreq: 'weekly' },
        { loc: '/starlink-installation-ashburn-va', priority: 0.9, changefreq: 'weekly' },
        { loc: '/starlink-installation-leesburg-va', priority: 0.9, changefreq: 'weekly' },
        { loc: '/starlink-installation-tysons-corner-va', priority: 0.9, changefreq: 'weekly' },
        
        // Maryland Locations
        { loc: '/starlink-installation-bethesda-md', priority: 0.9, changefreq: 'weekly' },
        { loc: '/starlink-installation-rockville-md', priority: 0.9, changefreq: 'weekly' },
        { loc: '/starlink-installation-gaithersburg-md', priority: 0.9, changefreq: 'weekly' },
        { loc: '/starlink-installation-silver-spring-md', priority: 0.9, changefreq: 'weekly' },
        { loc: '/starlink-installation-germantown-md', priority: 0.9, changefreq: 'weekly' },
        { loc: '/starlink-installation-potomac-md', priority: 0.9, changefreq: 'weekly' },
        { loc: '/starlink-installation-montgomery-county-md', priority: 0.9, changefreq: 'weekly' },
        
        // Washington DC
        { loc: '/starlink-installation-washington-dc', priority: 0.9, changefreq: 'weekly' },
        { loc: '/starlink-installation-northwest-dc', priority: 0.9, changefreq: 'weekly' },
        { loc: '/starlink-installation-northeast-dc', priority: 0.9, changefreq: 'weekly' },
      ],
    },
    services: {
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
      changefreq: 'weekly',
      priority: 0.6,
      urls: [
        { loc: '/blog', priority: 0.7, changefreq: 'daily' },
        { loc: '/blog/starlink-installation-guide', priority: 0.6, changefreq: 'monthly' },
        { loc: '/blog/starlink-vs-traditional-internet', priority: 0.6, changefreq: 'monthly' },
        { loc: '/blog/starlink-mounting-options', priority: 0.6, changefreq: 'monthly' },
        { loc: '/blog/starlink-weather-performance', priority: 0.6, changefreq: 'monthly' },
      ],
    },
  },
};

// Sitemap generation functions
function generateSitemapIndex() {
  const { sitemapStructure } = seoConfig;
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapStructure.index.sitemaps.map(sitemap => `  <sitemap>
    <loc>${sitemap.loc}</loc>
    <lastmod>${sitemap.lastmod}</lastmod>
  </sitemap>`).join('\n')}
</sitemapindex>`;
}

function generateSitemap(type) {
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
}

function generateRobotsTxt() {
  return `# Robots.txt for The Orbit Tech
# Generated on ${new Date().toISOString()}

User-agent: *
Allow: /
Crawl-delay: 1

User-agent: Googlebot
Allow: /
Crawl-delay: 0.5

# Block admin and development paths
Disallow: /admin/
Disallow: /api/
Disallow: /.well-known/
Disallow: /private/

# Sitemap location
Sitemap: https://www.theorbittech.com/sitemap-index.xml

# Additional directives for better crawling
Clean-param: utm_source&utm_medium&utm_campaign
Clean-param: fbclid&gclid&ref&source

# Allow essential files
Allow: /robots.txt
Allow: /sitemap*.xml
Allow: /*.css
Allow: /*.js
Allow: /*.png
Allow: /*.jpg
Allow: /*.jpeg
Allow: /*.webp
Allow: /*.svg
`;
}

// Export for use in build scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    seoConfig,
    generateSitemapIndex,
    generateSitemap,
    generateRobotsTxt,
  };
}

// Browser-compatible export
if (typeof window !== 'undefined') {
  window.SitemapGenerator = {
    seoConfig,
    generateSitemapIndex,
    generateSitemap,
    generateRobotsTxt,
  };
}
