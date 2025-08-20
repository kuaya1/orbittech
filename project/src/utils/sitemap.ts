import { writeFileSync } from 'fs';
import { resolve } from 'path';

const baseUrl = 'https://theorbittech.com';

const routes = [
  '/',
  '/services',
  '/about',
  '/contact',
  '/locations/virginia',
  '/locations/maryland',
  '/locations/washington-dc',
  '/blog'
];

const counties = [
  'Fairfax County',
  'Loudoun County',
  'Arlington County',
  'Montgomery County',
  'Prince George\'s County'
].map(county => `/locations/${county.toLowerCase().replace(' ', '-')}`);

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${[...routes, ...counties]
    .map(route => `
    <url>
      <loc>${baseUrl}${route}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>${route === '/' ? 'daily' : 'weekly'}</changefreq>
      <priority>${route === '/' ? '1.0' : '0.8'}</priority>
    </url>`)
    .join('')}
</urlset>`;

  writeFileSync(resolve(__dirname, '../../public/sitemap.xml'), sitemap);
  console.log('✅ Sitemap generated successfully');
};

export { generateSitemap };
