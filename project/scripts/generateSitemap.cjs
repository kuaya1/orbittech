const fs = require('fs');
const path = require('path');

const baseUrl = 'https://theorbittech.com';

// EXACT URLs that should be indexed (no trailing slashes, no duplicates)
const pages = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/about', priority: '0.7', changefreq: 'monthly' },
  { url: '/contact', priority: '0.7', changefreq: 'monthly' },
  
  // Location pages (using consistent naming)
  { url: '/locations/loudoun-county', priority: '0.8', changefreq: 'weekly' },
  { url: '/locations/fairfax-county', priority: '0.8', changefreq: 'weekly' },
  { url: '/locations/montgomery-county', priority: '0.8', changefreq: 'weekly' },
  { url: '/locations/prince-william-county', priority: '0.8', changefreq: 'weekly' },
  { url: '/locations/frederick-county', priority: '0.8', changefreq: 'weekly' },
  
  // Additional important pages
  { url: '/blog', priority: '0.6', changefreq: 'weekly' }
];

const generateSitemap = () => {
  const currentDate = new Date().toISOString().split('T')[0];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(outputPath, sitemap);
  console.log('✅ Clean sitemap generated successfully at:', outputPath);
  console.log(`📊 Total pages: ${pages.length}`);
  console.log('🔗 Pages included:');
  pages.forEach(page => console.log(`   ${baseUrl}${page.url}`));
};

generateSitemap();
