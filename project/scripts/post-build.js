import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.join(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const publicDir = path.join(projectRoot, 'public');

console.log('🚀 Running post-build optimizations...\n');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  console.log('❌ Dist directory not found. Build may have failed.');
  process.exit(1);
}

// Copy robots.txt to dist if it doesn't exist
const robotsSrc = path.join(publicDir, 'robots.txt');
const robotsDest = path.join(distDir, 'robots.txt');

if (fs.existsSync(robotsSrc) && !fs.existsSync(robotsDest)) {
  try {
    fs.copyFileSync(robotsSrc, robotsDest);
    console.log('✅ Copied robots.txt to dist directory');
  } catch (error) {
    console.error('❌ Error copying robots.txt:', error.message);
  }
}

// Generate comprehensive sitemap for Vercel deployment
const siteUrl = 'https://theorbittech.com';
const currentDate = new Date().toISOString();

const sitemapUrls = [
  // Core pages
  { loc: '/', priority: '1.0', changefreq: 'daily' },
  { loc: '/kuiper-installation', priority: '0.9', changefreq: 'weekly' },
  { loc: '/showcase', priority: '0.8', changefreq: 'weekly' },
  { loc: '/about', priority: '0.7', changefreq: 'monthly' },
  { loc: '/contact', priority: '0.8', changefreq: 'weekly' },
  { loc: '/privacy-policy', priority: '0.3', changefreq: 'monthly' },
  { loc: '/terms-of-service', priority: '0.3', changefreq: 'monthly' },
  
  // Location pages - Loudoun County and Arlington County
  { loc: '/locations/loudoun-county-va', priority: '0.9', changefreq: 'weekly' },
  { loc: '/locations/arlington-county-va', priority: '0.9', changefreq: 'weekly' },
  { loc: '/locations/fairfax-county-va', priority: '0.9', changefreq: 'weekly' },
  { loc: '/locations/alexandria-va', priority: '0.9', changefreq: 'weekly' },
  { loc: '/locations/prince-william-county-va', priority: '0.9', changefreq: 'weekly' },
  { loc: '/locations/montgomery-county-md', priority: '0.9', changefreq: 'weekly' },
  { loc: '/locations/howard-county-md', priority: '0.9', changefreq: 'weekly' },
  { loc: '/locations/anne-arundel-county-md', priority: '0.9', changefreq: 'weekly' },
  { loc: '/locations/washington-dc', priority: '0.9', changefreq: 'weekly' },
  { loc: '/locations/jefferson-county-wv', priority: '0.9', changefreq: 'weekly' },
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${sitemapUrls.map(url => `  <url>
    <loc>${siteUrl}${url.loc}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

const sitemapPath = path.join(distDir, 'sitemap.xml');
try {
  fs.writeFileSync(sitemapPath, sitemapXml, 'utf8');
  console.log('✅ Generated sitemap.xml for Vercel deployment');
} catch (error) {
  console.error('❌ Error generating sitemap.xml:', error.message);
}

// Generate robots.txt with correct sitemap reference
const robotsContent = `# Robots.txt for The Orbit Tech
# Generated on ${currentDate}

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
Sitemap: ${siteUrl}/sitemap.xml

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

try {
  fs.writeFileSync(robotsDest, robotsContent, 'utf8');
  console.log('✅ Updated robots.txt in dist directory');
} catch (error) {
  console.error('❌ Error updating robots.txt:', error.message);
}

console.log('\n🎉 Post-build optimizations complete!');
console.log('\n📋 Generated files:');
console.log('   • sitemap.xml (comprehensive URL list)');
console.log('   • robots.txt (search engine directives)');

console.log('\n🔍 SEO Impact:');
console.log('   • 10+ location pages optimized for local search');
console.log('   • Clean URL structure for better indexing');
console.log('   • Proper priority signals for search engines');

console.log('\n⚡ Ready for Vercel deployment!');
