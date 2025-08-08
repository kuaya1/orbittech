// Analytics Context Provider for The Orbit Tech

import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import OrbitTechAnalytics from '../utils/analytics';

interface AnalyticsContextType {
  analytics: typeof OrbitTechAnalytics;
  isInitialized: boolean;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: ReactNode;
  gtmId?: string;
  enableInDevelopment?: boolean;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({
  children,
  gtmId = 'GTM-XXXXXXX', // Replace with actual GTM ID
  enableInDevelopment = false,
}) => {
  const [isInitialized, setIsInitialized] = React.useState(false);

  useEffect(() => {
    // Only initialize in production or if explicitly enabled in development
    const shouldInitialize = 
      process.env.NODE_ENV === 'production' || 
      enableInDevelopment || 
      window.location.hostname !== 'localhost';

    if (shouldInitialize && !isInitialized) {
      try {
        OrbitTechAnalytics.init(gtmId);
        setIsInitialized(true);
        
        // Set initial custom dimensions
        OrbitTechAnalytics.setCustomDimensions({
          deviceType: window.innerWidth < 768 ? 'mobile' : 
                     window.innerWidth < 1024 ? 'tablet' : 'desktop',
          leadSource: getLeadSource(),
          userType: getUserType(),
        });

        console.log('✅ Analytics initialized successfully');
      } catch (error) {
        console.error('❌ Analytics initialization failed:', error);
      }
    }
  }, [gtmId, enableInDevelopment, isInitialized]);

  // Determine lead source from URL parameters
  const getLeadSource = (): string => {
    const urlParams = new URLSearchParams(window.location.search);
    const utm_source = urlParams.get('utm_source');
    const utm_medium = urlParams.get('utm_medium');
    
    if (utm_source && utm_medium) {
      return `${utm_source}_${utm_medium}`;
    }
    
    if (document.referrer) {
      const referrer = new URL(document.referrer).hostname;
      if (referrer.includes('google')) return 'organic';
      if (referrer.includes('facebook') || referrer.includes('instagram')) return 'social';
      if (referrer.includes('bing') || referrer.includes('yahoo')) return 'organic';
      return 'referral';
    }
    
    return 'direct';
  };

  // Determine user type from localStorage or cookies
  const getUserType = (): string => {
    const hasVisited = localStorage.getItem('orbit_tech_visited');
    const isLead = localStorage.getItem('orbit_tech_lead');
    const isCustomer = localStorage.getItem('orbit_tech_customer');
    
    if (isCustomer) return 'customer';
    if (isLead) return 'lead';
    if (hasVisited) return 'returning';
    
    // Mark as visited
    localStorage.setItem('orbit_tech_visited', 'true');
    return 'new';
  };

  const contextValue: AnalyticsContextType = {
    analytics: OrbitTechAnalytics,
    isInitialized,
  };

  return (
    <AnalyticsContext.Provider value={contextValue}>
      {children}
    </AnalyticsContext.Provider>
  );
};

// Hook to use analytics
export const useAnalytics = (): AnalyticsContextType => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

// Higher-order component for analytics tracking
export const withAnalytics = <P extends object>(
  Component: React.ComponentType<P>,
  trackingConfig?: {
    pageType?: string;
    location?: string;
    autoTrack?: boolean;
  }
) => {
  return React.forwardRef<any, P>((props, ref) => {
    const { analytics, isInitialized } = useAnalytics();

    useEffect(() => {
      if (isInitialized && trackingConfig?.autoTrack) {
        // Auto-track page view
        analytics.setCustomDimensions({
          serviceArea: trackingConfig.location,
        });
      }
    }, [analytics, isInitialized]);

    return <Component {...props} ref={ref} />;
  });
};

export default AnalyticsProvider;
