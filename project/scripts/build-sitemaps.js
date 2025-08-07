import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Sitemap configuration
const seoConfig = {
  siteUrl: 'https://theorbittech.com',  // Updated to match GSC property
  sitemapStructure: {
    index: {
      sitemaps: [
        { loc: 'https://theorbittech.com/sitemap-pages.xml', lastmod: new Date().toISOString() },
        { loc: 'https://theorbittech.com/sitemap-locations.xml', lastmod: new Date().toISOString() },
        { loc: 'https://theorbittech.com/sitemap-services.xml', lastmod: new Date().toISOString() },
        { loc: 'https://theorbittech.com/sitemap-blog.xml', lastmod: new Date().toISOString() },
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
Sitemap: https://theorbittech.com/sitemap-index.xml

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

const publicDir = path.join(__dirname, '..', 'public');

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

function writeFile(filename, content) {
  try {
    const filePath = path.join(publicDir, filename);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Generated: ${filename}`);
    return true;
  } catch (error) {
    console.error(`❌ Error generating ${filename}:`, error.message);
    return false;
  }
}

console.log('🚀 Generating sitemaps for The Orbit Tech...\n');

// Generate sitemap index
writeFile('sitemap-index.xml', generateSitemapIndex());

// Generate individual sitemaps
writeFile('sitemap-pages.xml', generateSitemap('pages'));
writeFile('sitemap-locations.xml', generateSitemap('locations'));
writeFile('sitemap-services.xml', generateSitemap('services'));
writeFile('sitemap-blog.xml', generateSitemap('blog'));

// Generate robots.txt
writeFile('robots.txt', generateRobotsTxt());

// Generate legacy sitemap.xml
const legacySitemap = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://www.theorbittech.com/sitemap-index.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
</sitemapindex>`;

writeFile('sitemap.xml', legacySitemap);

console.log('\n🎉 All sitemaps generated successfully!');
console.log('\n📋 Generated files:');
console.log('   • sitemap-index.xml (main sitemap index)');
console.log('   • sitemap-pages.xml (core site pages)');
console.log('   • sitemap-locations.xml (20 DMV location pages)');
console.log('   • sitemap-services.xml (service pages)');
console.log('   • sitemap-blog.xml (blog content)');
console.log('   • robots.txt (optimized crawl directives)');
console.log('   • sitemap.xml (legacy redirect)');

console.log('\n🔍 SEO Impact:');
console.log('   • 20 location pages with 0.9 priority for local domination');
console.log('   • Weekly changefreq signals fresh content to Google');
console.log('   • Organized structure improves crawl efficiency');
console.log('   • Enhanced discovery of location-specific pages');

console.log('\n⚡ Next Steps:');
console.log('   1. Submit sitemap-index.xml to Google Search Console');
console.log('   2. Monitor indexing status for location pages');
console.log('   3. Track local search rankings for target areas');
console.log('   4. Set up automated regeneration for content updates');
