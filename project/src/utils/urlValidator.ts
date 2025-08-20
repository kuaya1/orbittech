/**
 * URL Validation and Normalization Utility
 * Fixes common URL issues that cause indexing problems
 */

export const validateAndNormalizeUrl = (url: string): string => {
  // Handle empty or root URLs
  if (!url || url === '/') return '/';
  
  // Remove trailing slashes except for root
  url = url.replace(/\/+$/, '');
  
  // Convert to lowercase for consistency
  url = url.toLowerCase();
  
  // Remove duplicate slashes
  url = url.replace(/\/+/g, '/');
  
  // Remove index.html references
  url = url.replace(/\/index\.html?$/, '');
  
  // Remove common file extensions that shouldn't be in URLs
  url = url.replace(/\.(html?|php)$/, '');
  
  return url || '/';
};

export const getCanonicalPath = (pathname: string, search: string = ''): string => {
  // Normalize the pathname first
  let canonical = validateAndNormalizeUrl(pathname);
  
  // Handle URL parameters - only keep essential ones
  if (search) {
    const params = new URLSearchParams(search);
    const essentialParams = ['service', 'package', 'county']; // Keep these
    
    const filteredParams = new URLSearchParams();
    essentialParams.forEach(param => {
      if (params.has(param)) {
        filteredParams.set(param, params.get(param)!);
      }
    });
    
    const queryString = filteredParams.toString();
    canonical = queryString ? `${canonical}?${queryString}` : canonical;
  }
  
  return canonical;
};

export const generateCanonicalUrl = (path: string): string => {
  const baseUrl = 'https://theorbittech.com';
  const normalizedPath = getCanonicalPath(path);
  return `${baseUrl}${normalizedPath}`;
};

// Route validation for React Router
export const createCleanRoute = (path: string) => {
  return {
    originalPath: path,
    cleanPath: validateAndNormalizeUrl(path),
    canonical: generateCanonicalUrl(path)
  };
};
