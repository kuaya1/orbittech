/**
 * Redirect Configuration for SEO
 * Handles common redirect scenarios that cause indexing issues
 */

export interface RedirectRule {
  from: string;
  to: string;
  type: 'permanent' | 'temporary';
  condition?: string;
}

// Common redirect patterns that fix indexing issues
export const seoRedirectRules: RedirectRule[] = [
  // Remove trailing slashes (except root)
  {
    from: '/*/',
    to: '/*',
    type: 'permanent',
    condition: 'not-root'
  },
  
  // Standardize location URLs
  {
    from: '/locations/loudoun',
    to: '/locations/loudoun-county',
    type: 'permanent'
  },
  {
    from: '/locations/fairfax',
    to: '/locations/fairfax-county',
    type: 'permanent'
  },
  {
    from: '/locations/montgomery',
    to: '/locations/montgomery-county',
    type: 'permanent'
  },
  
  // Remove file extensions
  {
    from: '/services.html',
    to: '/services',
    type: 'permanent'
  },
  {
    from: '/about.html',
    to: '/about',
    type: 'permanent'
  },
  {
    from: '/contact.html',
    to: '/contact',
    type: 'permanent'
  },
  
  // Handle index pages
  {
    from: '/index.html',
    to: '/',
    type: 'permanent'
  },
  {
    from: '/services/index.html',
    to: '/services',
    type: 'permanent'
  }
];

// Generate Vercel redirects configuration
export const generateVercelRedirects = () => {
  return seoRedirectRules.map(rule => ({
    source: rule.from,
    destination: rule.to,
    permanent: rule.type === 'permanent'
  }));
};

// Generate .htaccess rules (for Apache servers)
export const generateHtaccessRules = (): string => {
  return `
# SEO Redirect Rules for Better Indexing
RewriteEngine On

# Force HTTPS and non-www
RewriteCond %{HTTPS} off [OR]
RewriteCond %{HTTP_HOST} ^www\\. [NC]
RewriteRule ^(.*)$ https://theorbittech.com/$1 [R=301,L]

# Remove trailing slashes (except for directories)
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} /(.+)/$
RewriteRule ^(.+)/$ /$1 [R=301,L]

# Remove .html extension
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^([^.]+)$ $1.html [L]

RewriteCond %{THE_REQUEST} ^[A-Z]{3,}\\s/+(.+)\\.html[\\s?] [NC]
RewriteRule ^ /%1 [R=301,L]

# Location URL standardization
RewriteRule ^locations/loudoun/?$ /locations/loudoun-county [R=301,L]
RewriteRule ^locations/fairfax/?$ /locations/fairfax-county [R=301,L]
RewriteRule ^locations/montgomery/?$ /locations/montgomery-county [R=301,L]

# Block duplicate content patterns
RewriteRule ^(.+)/index\\.(html?|php)$ /$1 [R=301,L]
RewriteRule ^index\\.(html?|php)$ / [R=301,L]
`;
};

export default seoRedirectRules;
