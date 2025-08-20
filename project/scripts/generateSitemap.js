const fs = require('fs');
const path = require('path');

const baseUrl = 'https://theorbittech.com';

const routes = [
  '/',
  '/services',
  '/about',
  '/contact',
  '/locations/loudoun-county',
  '/locations/fairfax-county',
  '/locations/montgomery-county',
  '/locations/prince-william-county',
  '/locations/frederick-county',
  '/blog'
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(route => `
    <url>
      <loc>${baseUrl}${route}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>${route === '/' ? 'daily' : 'weekly'}</changefreq>
      <priority>${route === '/' ? '1.0' : '0.8'}</priority>
    </url>`)
    .join('')}
</urlset>`;

  const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(outputPath, sitemap);
  console.log('✅ Sitemap generated successfully at:', outputPath);
};

generateSitemap();
