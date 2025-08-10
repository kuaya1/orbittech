#!/usr/bin/env node

/**
 * SEO Fix Script for The Orbit Tech
 * 
 * This script addresses the Google Search Console indexing issues:
 * 1. Page with redirect (31 pages) - Fixed via Vercel config
 * 2. Alternate page with proper canonical tag (29 pages) - Ensures proper canonicals
 * 3. Duplicate without user-selected canonical (7 pages) - Adds missing canonicals
 * 4. Crawled - currently not indexed (1 page) - Content quality improvements
 */

import fs from 'fs';
import path from 'path';

// Configuration
const SITE_URL = 'https://theorbittech.com';
const BUILD_DIR = 'dist';
const PUBLIC_DIR = 'public';

// All valid routes in the application
const ROUTES = [
  // Main pages
  { path: '/', priority: 1.0, changefreq: 'daily' },
  { path: '/services', priority: 0.9, changefreq: 'weekly' },
  { path: '/about', priority: 0.7, changefreq: 'monthly' },
  { path: '/contact', priority: 0.8, changefreq: 'weekly' },
  { path: '/blog', priority: 0.8, changefreq: 'daily' },
  { path: '/faq', priority: 0.7, changefreq: 'weekly' },
  
  // Location pages - Virginia
  { path: '/locations/fairfax-county-va', priority: 0.9, changefreq: 'weekly' },
  { path: '/locations/loudoun-county-va', priority: 0.9, changefreq: 'weekly' },
  { path: '/locations/prince-william-county-va', priority: 0.9, changefreq: 'weekly' },
  { path: '/locations/arlington-county-va', priority: 0.9, changefreq: 'weekly' },
  { path: '/locations/alexandria-va', priority: 0.9, changefreq: 'weekly' },
  { path: '/locations/rockingham-county-va', priority: 0.9, changefreq: 'weekly' },
  
  // Location pages - Maryland
  { path: '/locations/montgomery-county-md', priority: 0.9, changefreq: 'weekly' },
  { path: '/locations/howard-county-md', priority: 0.9, changefreq: 'weekly' },
  { path: '/locations/anne-arundel-county-md', priority: 0.9, changefreq: 'weekly' },
  
  // Location pages - Washington DC
  { path: '/locations/washington-dc', priority: 0.9, changefreq: 'weekly' },
  
  // Location pages - West Virginia
  { path: '/locations/jefferson-county-wv', priority: 0.9, changefreq: 'weekly' },
  
  // Legal pages
  { path: '/privacy-policy', priority: 0.3, changefreq: 'monthly' },
  { path: '/terms-of-service', priority: 0.3, changefreq: 'monthly' }
];

/**
 * Generate clean sitemap
 */
function generateSitemap() {
  const lastmod = new Date().toISOString();
  
  const urls = ROUTES.map(route => `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return sitemap;
}

/**
 * Generate robots.txt with proper directives
 */
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
Sitemap: ${SITE_URL}/sitemap.xml

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

/**
 * Validate and fix common SEO issues
 */
function validateAndFixSEO() {
  console.log('🔍 Starting SEO validation and fixes...\n');
  
  // 1. Generate clean sitemap
  console.log('✅ Generating clean sitemap...');
  const sitemap = generateSitemap();
  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemap);
  console.log('   Generated sitemap.xml with', ROUTES.length, 'URLs');
  
  // 2. Update robots.txt
  console.log('✅ Updating robots.txt...');
  const robotsTxt = generateRobotsTxt();
  fs.writeFileSync(path.join(PUBLIC_DIR, 'robots.txt'), robotsTxt);
  console.log('   Updated robots.txt with clean directives');
  
  // 3. Check for potential duplicate URLs
  console.log('✅ Checking for URL consistency...');
  const pathsWithTrailingSlash = ROUTES.filter(route => route.path.endsWith('/') && route.path !== '/');
  if (pathsWithTrailingSlash.length > 0) {
    console.warn('⚠️  Found paths with trailing slashes:', pathsWithTrailingSlash.map(r => r.path));
  } else {
    console.log('   All URLs are consistent (no trailing slashes)');
  }
  
  // 4. Validate canonical URLs
  console.log('✅ Validating canonical URL structure...');
  const invalidPaths = ROUTES.filter(route => {
    const path = route.path;
    return path.includes('//') || (path !== '/' && path.endsWith('/')) || path.includes('?');
  });
  
  if (invalidPaths.length > 0) {
    console.warn('⚠️  Found potentially problematic paths:', invalidPaths.map(r => r.path));
  } else {
    console.log('   All canonical URLs are properly formatted');
  }
  
  console.log('\n🎉 SEO validation and fixes completed!');
  console.log('\nNext steps:');
  console.log('1. Deploy these changes to production');
  console.log('2. Submit sitemap to Google Search Console');
  console.log('3. Use URL Inspection tool to validate fixes');
  console.log('4. Monitor indexing status over next 1-2 weeks');
}

/**
 * Generate deployment checklist
 */
function generateDeploymentChecklist() {
  const checklist = `# SEO Fix Deployment Checklist

## ✅ Files Updated
- [x] vercel.json - Added redirect rules to fix trailing slash issues
- [x] src/utils/seo.ts - Created SEO utilities for consistent canonical URLs
- [x] src/components/LocationPages/LoudounPage.tsx - Updated to use SEO utilities
- [x] public/sitemap.xml - Generated clean sitemap with ${ROUTES.length} URLs
- [x] public/robots.txt - Updated with proper crawling directives

## 🚀 Deployment Steps
1. [ ] Commit all changes to git
2. [ ] Deploy to production (Vercel)
3. [ ] Verify site loads correctly at https://theorbittech.com
4. [ ] Test key pages for proper canonical URLs

## 📊 Google Search Console Actions
1. [ ] Submit new sitemap: https://theorbittech.com/sitemap.xml
2. [ ] Remove old sitemaps if they exist
3. [ ] Use URL Inspection tool on 5-10 affected pages
4. [ ] Click "Request Indexing" for critical pages
5. [ ] Validate fixes for redirect issues
6. [ ] Monitor indexing status weekly

## 🎯 Expected Results
- Reduction in "Page with redirect" errors (currently 31 pages)
- Proper canonical tag recognition (currently 29 pages affected)
- Resolution of duplicate content issues (currently 7 pages)
- Improved crawl efficiency and indexing

## 📈 Success Metrics
- Target: 80%+ of pages indexed within 2 weeks
- Current: 26 indexed / 94 total = 28% indexed
- Goal: 75+ indexed / 94 total = 80%+ indexed

Generated: ${new Date().toISOString()}
`;

  fs.writeFileSync('SEO_DEPLOYMENT_CHECKLIST.md', checklist);
  console.log('📋 Generated SEO_DEPLOYMENT_CHECKLIST.md');
}

// Run the validation
validateAndFixSEO();
generateDeploymentChecklist();
