#!/usr/bin/env node

/**
 * Dynamic Sitemap Generator for The Orbit Tech
 * Generates sitemap index and individual sitemaps for better SEO crawlability
 */

const fs = require('fs');
const path = require('path');

// Import SEO configuration (you may need to adjust this path based on your build setup)
const { seoConfig, generateSitemapIndex, generateSitemap, generateRobotsTxt } = require('../src/config/seo.ts');

const PUBLIC_DIR = path.join(__dirname, '../public');

/**
 * Ensure public directory exists
 */
function ensurePublicDir() {
  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  }
}

/**
 * Write file with error handling
 */
function writeFile(filename, content) {
  try {
    const filePath = path.join(PUBLIC_DIR, filename);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Generated: ${filename}`);
    return true;
  } catch (error) {
    console.error(`❌ Error generating ${filename}:`, error.message);
    return false;
  }
}

/**
 * Generate all sitemaps
 */
function generateAllSitemaps() {
  console.log('🚀 Generating sitemaps for The Orbit Tech...\n');
  
  ensurePublicDir();
  
  let successCount = 0;
  let totalFiles = 0;
  
  // Generate sitemap index
  totalFiles++;
  if (writeFile('sitemap-index.xml', generateSitemapIndex())) {
    successCount++;
  }
  
  // Generate individual sitemaps
  const sitemapTypes = ['pages', 'locations', 'services', 'blog'];
  
  sitemapTypes.forEach(type => {
    totalFiles++;
    if (writeFile(`sitemap-${type}.xml`, generateSitemap(type))) {
      successCount++;
    }
  });
  
  // Generate robots.txt
  totalFiles++;
  if (writeFile('robots.txt', generateRobotsTxt())) {
    successCount++;
  }
  
  // Generate legacy sitemap.xml (redirects to sitemap-index.xml)
  const legacySitemap = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Legacy sitemap.xml - redirects to sitemap-index.xml for better organization -->
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://www.theorbittech.com/sitemap-index.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
</sitemapindex>`;
  
  totalFiles++;
  if (writeFile('sitemap.xml', legacySitemap)) {
    successCount++;
  }
  
  // Summary
  console.log('\n📊 Generation Summary:');
  console.log(`✅ Successfully generated: ${successCount}/${totalFiles} files`);
  
  if (successCount === totalFiles) {
    console.log('🎉 All sitemaps generated successfully!');
    console.log('\n📋 Generated files:');
    console.log('   • sitemap-index.xml (main sitemap index)');
    console.log('   • sitemap-pages.xml (core site pages)');
    console.log('   • sitemap-locations.xml (DMV location pages)');
    console.log('   • sitemap-services.xml (service pages)');
    console.log('   • sitemap-blog.xml (blog content)');
    console.log('   • robots.txt (crawl directives)');
    console.log('   • sitemap.xml (legacy redirect)');
    
    console.log('\n🔍 SEO Impact:');
    console.log('   • Improved crawl discovery for location pages');
    console.log('   • Organized content structure for search engines');
    console.log('   • Weekly changefreq for location pages (0.9 priority)');
    console.log('   • Enhanced local SEO signal strength');
    
    console.log('\n⚡ Next Steps:');
    console.log('   1. Submit sitemap-index.xml to Google Search Console');
    console.log('   2. Monitor indexing status for location pages');
    console.log('   3. Set up automated regeneration for content updates');
    console.log('   4. Monitor Core Web Vitals and page speed metrics');
    
  } else {
    console.log('⚠️  Some files failed to generate. Check errors above.');
    process.exit(1);
  }
}

/**
 * Validate sitemap URLs
 */
function validateSitemaps() {
  console.log('\n🔍 Validating sitemap structure...');
  
  const sitemapTypes = ['pages', 'locations', 'services', 'blog'];
  const { sitemapStructure } = seoConfig;
  
  sitemapTypes.forEach(type => {
    const config = sitemapStructure[type];
    console.log(`\n📄 ${type.toUpperCase()} Sitemap:`);
    console.log(`   • URLs: ${config.urls.length}`);
    console.log(`   • Priority: ${config.priority}`);
    console.log(`   • Change Frequency: ${config.changefreq}`);
    
    // Check for high-priority URLs
    const highPriorityUrls = config.urls.filter(url => (url.priority || config.priority) >= 0.9);
    if (highPriorityUrls.length > 0) {
      console.log(`   • High Priority URLs (≥0.9): ${highPriorityUrls.length}`);
    }
  });
  
  // Location pages analysis
  const locationUrls = sitemapStructure.locations.urls;
  const vaLocations = locationUrls.filter(url => url.loc.includes('-va'));
  const mdLocations = locationUrls.filter(url => url.loc.includes('-md'));
  const dcLocations = locationUrls.filter(url => url.loc.includes('-dc'));
  
  console.log('\n🗺️  Location Coverage:');
  console.log(`   • Virginia: ${vaLocations.length} locations`);
  console.log(`   • Maryland: ${mdLocations.length} locations`);
  console.log(`   • Washington DC: ${dcLocations.length} locations`);
  console.log(`   • Total: ${locationUrls.length} location pages`);
}

// Main execution
if (require.main === module) {
  try {
    validateSitemaps();
    generateAllSitemaps();
  } catch (error) {
    console.error('❌ Fatal error:', error.message);
    process.exit(1);
  }
}

module.exports = {
  generateAllSitemaps,
  validateSitemaps,
};
