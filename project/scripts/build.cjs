#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting production build...');

try {
  // Step 1: Run Vite build
  console.log('📦 Building with Vite...');
  execSync('vite build', { stdio: 'inherit' });

  // Step 2: Generate sitemap
  console.log('🗺️ Generating sitemap...');
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

  // Ensure dist directory exists
  const distDir = path.resolve(__dirname, '../dist');
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  const sitemapPath = path.join(distDir, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap);
  console.log('✅ Sitemap generated at:', sitemapPath);

  // Step 3: Copy robots.txt if it exists
  const robotsSource = path.resolve(__dirname, '../public/robots.txt');
  const robotsDest = path.join(distDir, 'robots.txt');
  
  if (fs.existsSync(robotsSource)) {
    fs.copyFileSync(robotsSource, robotsDest);
    console.log('✅ Robots.txt copied');
  }

  console.log('🎉 Build completed successfully!');

} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
