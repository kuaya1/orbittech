import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { validateAndNormalizeUrl } from '@/utils/urlValidator';

/**
 * CanonicalUrlEnforcer Component
 * Prevents indexing issues by enforcing consistent URL structure
 */
export const CanonicalUrlEnforcer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    const currentPath = location.pathname;
    const normalizedPath = validateAndNormalizeUrl(currentPath);
    
    // If the current path doesn't match the normalized version, redirect
    if (currentPath !== normalizedPath) {
      // Use replace to avoid adding to history
      navigate(normalizedPath + location.search, { replace: true });
    }
    
    // Handle trailing slash issues
    if (currentPath !== '/' && currentPath.endsWith('/')) {
      const withoutTrailingSlash = currentPath.slice(0, -1);
      navigate(withoutTrailingSlash + location.search, { replace: true });
    }
    
    // Force HTTPS in production (client-side check)
    if (typeof window !== 'undefined' && window.location.protocol === 'http:' && !window.location.hostname.includes('localhost')) {
      window.location.href = window.location.href.replace('http:', 'https:');
    }
  }, [location, navigate]);
  
  return null; // This component doesn't render anything
};

export default CanonicalUrlEnforcer;
