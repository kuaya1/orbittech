import fs from 'fs';
import path from 'path';

/**
 * CUSTOM SITEMAP GENERATOR - ZERO DUPLICATES ✅
 * Post-build script to generate clean, optimized sitemap
 */

// DMV Location Routes (all 14 markets)
const DMV_LOCATIONS = [
  'mclean-va', 'bethesda-md', 'arlington-va', 'alexandria-va', 'fairfax-va',
  'rockville-md', 'silver-spring-md', 'tysons-va', 'reston-va', 'gaithersburg-md',
  'leesburg-va', 'frederick-md', 'manassas-va', 'annapolis-md'
];

/**
 * Generate clean sitemap entries - NO DUPLICATES
 */
const generateCleanSitemap = () => {
  const baseUrl = 'https://theorbittech.com';
  const now = new Date().toISOString();

  // UNIQUE ROUTES ONLY - Carefully curated to eliminate duplicates
  const entries = [
    // Homepage - Maximum Priority
    {
      url: `${baseUrl}/`,
      lastmod: now,
      changefreq: 'daily',
      priority: 1.0
    },
    
    // Core Service Pages - High Priority
    {
      url: `${baseUrl}/kuiper-installation`,
      lastmod: now,
      changefreq: 'weekly',
      priority: 0.95
    },
    {
      url: `${baseUrl}/showcase`,
      lastmod: now,
      changefreq: 'weekly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/about`,
      lastmod: now,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      url: `${baseUrl}/contact`,
      lastmod: now,
      changefreq: 'monthly',
      priority: 0.8
    },

    // All 14 DMV Location Pages - Very High Priority for Local SEO
    ...DMV_LOCATIONS.map(location => ({
      url: `${baseUrl}/locations/${location}`,
      lastmod: now,
      changefreq: 'weekly',
      priority: 0.9
    })),

    // Legal Pages - Lower Priority
    {
      url: `${baseUrl}/privacy-policy`,
      lastmod: now,
      changefreq: 'yearly',
      priority: 0.3
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastmod: now,
      changefreq: 'yearly',
      priority: 0.3
    }
  ];

  return entries;
};

/**
 * Generate XML sitemap content
 */
const generateSitemapXML = (entries) => {
  const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  const xmlEntries = entries
    .map(entry => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority.toFixed(1)}</priority>
  </url>`)
    .join('\n');

  const xmlFooter = `</urlset>`;

  return `${xmlHeader}\n${xmlEntries}\n${xmlFooter}`;
};

/**
 * Validate sitemap for duplicates
 */
const validateSitemap = (entries) => {
  const urls = entries.map(entry => entry.url);
  const uniqueUrls = [...new Set(urls)];
  const duplicates = urls.filter((url, index) => urls.indexOf(url) !== index);
  
  return {
    isValid: duplicates.length === 0,
    duplicates: [...new Set(duplicates)],
    totalUrls: urls.length,
    uniqueUrls: uniqueUrls.length
  };
};

/**
 * Main function to generate and save sitemap
 */
const generateSitemap = () => {
  console.log('🚀 Generating optimized sitemap...');
  
  const entries = generateCleanSitemap();
  const validation = validateSitemap(entries);
  
  console.log(`📊 Sitemap Stats:
  - Total URLs: ${validation.totalUrls}
  - Unique URLs: ${validation.uniqueUrls}
  - Location Pages: ${DMV_LOCATIONS.length}
  - Duplicates: ${validation.duplicates.length}`);

  if (!validation.isValid) {
    console.error('❌ Duplicates found:', validation.duplicates);
    process.exit(1);
  }

  const xmlContent = generateSitemapXML(entries);
  const distPath = path.join(process.cwd(), 'dist', 'sitemap.xml');
  
  // Write clean sitemap
  fs.writeFileSync(distPath, xmlContent, 'utf8');
  
  console.log('✅ Clean sitemap generated successfully!');
  console.log(`📍 Saved to: ${distPath}`);
  console.log(`🌐 Submit to: https://www.google.com/ping?sitemap=https://theorbittech.com/sitemap.xml`);
};

// Run the generator
generateSitemap();

export { generateCleanSitemap, generateSitemapXML, validateSitemap, generateSitemap };
