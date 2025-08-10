/**
 * URL Validation Utility for The Orbit Tech
 * 
 * Use this to test your URLs and identify potential redirect issues
 */

export const TEST_URLS = [
  // Core pages
  'https://theorbittech.com/',
  'https://theorbittech.com/services',
  'https://theorbittech.com/contact',
  'https://theorbittech.com/about',
  'https://theorbittech.com/blog',
  'https://theorbittech.com/faq',
  
  // Location pages - Virginia
  'https://theorbittech.com/locations/fairfax-county-va',
  'https://theorbittech.com/locations/loudoun-county-va',
  'https://theorbittech.com/locations/prince-william-county-va',
  'https://theorbittech.com/locations/arlington-county-va',
  'https://theorbittech.com/locations/alexandria-va',
  'https://theorbittech.com/locations/rockingham-county-va',
  
  // Location pages - Maryland
  'https://theorbittech.com/locations/montgomery-county-md',
  'https://theorbittech.com/locations/howard-county-md',
  'https://theorbittech.com/locations/anne-arundel-county-md',
  
  // Location pages - DC & WV
  'https://theorbittech.com/locations/washington-dc',
  'https://theorbittech.com/locations/jefferson-county-wv',
  
  // Legal pages
  'https://theorbittech.com/privacy-policy',
  'https://theorbittech.com/terms-of-service'
];

/**
 * Test a URL for SEO issues
 */
export async function testUrl(url: string): Promise<{
  url: string;
  status: number;
  redirected: boolean;
  finalUrl: string;
  hasTrailingSlash: boolean;
  issues: string[];
}> {
  const issues: string[] = [];
  
  try {
    const response = await fetch(url, { 
      method: 'HEAD',
      redirect: 'manual'
    });
    
    const redirected = response.status >= 300 && response.status < 400;
    const finalUrl = redirected ? response.headers.get('location') || url : url;
    const hasTrailingSlash = url.endsWith('/') && url !== 'https://theorbittech.com/';
    
    // Check for issues
    if (redirected) {
      issues.push(`Redirects to: ${finalUrl}`);
    }
    
    if (hasTrailingSlash) {
      issues.push('Has trailing slash (may cause duplicates)');
    }
    
    if (response.status >= 400) {
      issues.push(`HTTP error: ${response.status}`);
    }
    
    return {
      url,
      status: response.status,
      redirected,
      finalUrl,
      hasTrailingSlash,
      issues
    };
  } catch (error) {
    return {
      url,
      status: 0,
      redirected: false,
      finalUrl: url,
      hasTrailingSlash: false,
      issues: [`Network error: ${error}`]
    };
  }
}

/**
 * Batch test all URLs
 */
export async function validateAllUrls(): Promise<void> {
  console.log('🔍 Testing all URLs for SEO issues...\n');
  
  const results = await Promise.all(
    TEST_URLS.map(url => testUrl(url))
  );
  
  const problematicUrls = results.filter(result => 
    result.issues.length > 0 || result.redirected || result.status >= 400
  );
  
  if (problematicUrls.length === 0) {
    console.log('✅ All URLs are clean - no redirects or issues found!');
  } else {
    console.log(`⚠️  Found ${problematicUrls.length} URLs with potential issues:\n`);
    
    problematicUrls.forEach(result => {
      console.log(`🔗 ${result.url}`);
      console.log(`   Status: ${result.status}`);
      if (result.redirected) {
        console.log(`   ↳ Redirects to: ${result.finalUrl}`);
      }
      result.issues.forEach(issue => {
        console.log(`   ❌ ${issue}`);
      });
      console.log('');
    });
  }
  
  console.log(`\n📊 Summary: ${results.length - problematicUrls.length}/${results.length} URLs are clean`);
}

/**
 * Check for common redirect patterns
 */
export function checkRedirectPatterns(url: string): string[] {
  const issues: string[] = [];
  
  // Check for trailing slash issues
  if (url.endsWith('/') && url !== 'https://theorbittech.com/') {
    issues.push('Trailing slash may cause redirect');
  }
  
  // Check for www vs non-www
  if (url.includes('www.theorbittech.com')) {
    issues.push('Using www subdomain - ensure consistency');
  }
  
  // Check for HTTP vs HTTPS
  if (url.startsWith('http://')) {
    issues.push('Using HTTP - will redirect to HTTPS');
  }
  
  // Check for common query parameters that cause duplicates
  const urlObj = new URL(url);
  const trackingParams = ['utm_source', 'utm_medium', 'gclid', 'fbclid'];
  const hasTrackingParams = trackingParams.some(param => urlObj.searchParams.has(param));
  
  if (hasTrackingParams) {
    issues.push('Contains tracking parameters that may cause duplicates');
  }
  
  return issues;
}

// Export for use in browser console or testing
if (typeof window !== 'undefined') {
  (window as any).validateOrbitTechUrls = validateAllUrls;
  (window as any).testOrbitTechUrl = testUrl;
}
