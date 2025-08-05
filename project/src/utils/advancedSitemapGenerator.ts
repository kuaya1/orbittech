import { DMV_LOCATIONS, generateLocationSitemap } from './locationPageGenerator';

/**
 * ADVANCED SITEMAP GENERATOR 🚀
 * Creates XML sitemap with dynamic timestamps, proper priorities, and zero duplicates
 */

export interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

/**
 * Generate complete sitemap entries with proper SEO optimization
 */
export const generateAdvancedSitemap = (): SitemapEntry[] => {
  const baseUrl = 'https://theorbittech.com';
  const now = new Date().toISOString();
  
  // Core pages with strategic priorities
  const corePages: SitemapEntry[] = [
    {
      url: `${baseUrl}/`,
      lastmod: now,
      changefreq: 'daily',
      priority: 1.0 // Homepage - maximum priority
    },
    {
      url: `${baseUrl}/kuiper-installation`,
      lastmod: now,
      changefreq: 'weekly',
      priority: 0.95 // Main service page - very high priority
    },
    {
      url: `${baseUrl}/showcase`,
      lastmod: now,
      changefreq: 'weekly',
      priority: 0.8 // Portfolio showcase
    },
    {
      url: `${baseUrl}/about`,
      lastmod: now,
      changefreq: 'monthly',
      priority: 0.7 // About page
    },
    {
      url: `${baseUrl}/contact`,
      lastmod: now,
      changefreq: 'monthly',
      priority: 0.8 // Contact page - important for conversions
    }
  ];

  // Location pages - HIGH priority for local SEO domination
  const locationPages: SitemapEntry[] = DMV_LOCATIONS.map(location => ({
    url: `${baseUrl}/locations/${location.city.toLowerCase()}-${location.state.toLowerCase()}`,
    lastmod: now, // Fresh timestamp for all location pages
    changefreq: 'weekly' as const, // Regular updates for local content
    priority: 0.9 // Very high priority for local SEO
  }));

  // Legal pages - Lower priority
  const legalPages: SitemapEntry[] = [
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

  // Combine all pages - NO DUPLICATES
  return [...corePages, ...locationPages, ...legalPages];
};

/**
 * Generate XML sitemap string
 */
export const generateSitemapXML = (): string => {
  const entries = generateAdvancedSitemap();
  
  const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  const xmlFooter = `</urlset>`;

  const xmlEntries = entries
    .map(entry => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority.toFixed(1)}</priority>
  </url>`)
    .join('\n');

  return `${xmlHeader}\n${xmlEntries}\n${xmlFooter}`;
};

/**
 * Validate sitemap for duplicates and issues
 */
export const validateSitemap = (entries: SitemapEntry[]): {
  isValid: boolean;
  duplicates: string[];
  issues: string[];
  stats: {
    totalUrls: number;
    uniqueUrls: number;
    locationPages: number;
    averagePriority: number;
  };
} => {
  const urls = entries.map(entry => entry.url);
  const uniqueUrls = [...new Set(urls)];
  const duplicates = urls.filter((url, index) => urls.indexOf(url) !== index);
  
  const issues: string[] = [];
  
  // Check for common issues
  if (duplicates.length > 0) {
    issues.push(`Found ${duplicates.length} duplicate URLs`);
  }
  
  // Check for invalid priorities
  const invalidPriorities = entries.filter(entry => entry.priority < 0 || entry.priority > 1);
  if (invalidPriorities.length > 0) {
    issues.push(`Found ${invalidPriorities.length} entries with invalid priority values`);
  }
  
  // Check for missing lastmod dates
  const missingLastmod = entries.filter(entry => !entry.lastmod);
  if (missingLastmod.length > 0) {
    issues.push(`Found ${missingLastmod.length} entries missing lastmod dates`);
  }

  const locationPages = entries.filter(entry => entry.url.includes('/locations/')).length;
  const averagePriority = entries.reduce((sum, entry) => sum + entry.priority, 0) / entries.length;

  return {
    isValid: duplicates.length === 0 && issues.length === 0,
    duplicates: [...new Set(duplicates)],
    issues,
    stats: {
      totalUrls: entries.length,
      uniqueUrls: uniqueUrls.length,
      locationPages,
      averagePriority: Math.round(averagePriority * 100) / 100
    }
  };
};

/**
 * Get sitemap submission URLs for major search engines
 */
export const getSitemapSubmissionUrls = (sitemapUrl: string = 'https://theorbittech.com/sitemap.xml') => {
  return {
    google: `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`,
    bing: `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`,
    yandex: `https://webmaster.yandex.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`,
    searchConsole: 'https://search.google.com/search-console/sitemaps',
    bingWebmaster: 'https://www.bing.com/webmasters/home'
  };
};

/**
 * Priority-based grouping for strategic SEO analysis
 */
export const getSitemapAnalytics = () => {
  const entries = generateAdvancedSitemap();
  const validation = validateSitemap(entries);
  
  const priorityGroups = {
    critical: entries.filter(e => e.priority >= 0.9).length,
    high: entries.filter(e => e.priority >= 0.7 && e.priority < 0.9).length,
    medium: entries.filter(e => e.priority >= 0.5 && e.priority < 0.7).length,
    low: entries.filter(e => e.priority < 0.5).length
  };

  const changefreqGroups = entries.reduce((acc, entry) => {
    acc[entry.changefreq] = (acc[entry.changefreq] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return {
    validation,
    priorityGroups,
    changefreqGroups,
    totalPages: entries.length,
    submissionUrls: getSitemapSubmissionUrls()
  };
};

export default generateAdvancedSitemap;
