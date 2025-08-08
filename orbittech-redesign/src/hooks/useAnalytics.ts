// React hooks for analytics integration

import { useEffect, useRef, useCallback } from 'react';
import OrbitTechAnalytics from '../utils/analytics';

// Hook for tracking page views
export const usePageView = (pageType: string, location?: string) => {
  const startTime = useRef<number>(Date.now());
  const scrollDepth = useRef<number>(0);
  const interactionCount = useRef<number>(0);

  useEffect(() => {
    // Track page view
    OrbitTechAnalytics.setCustomDimensions({
      deviceType: window.innerWidth < 768 ? 'mobile' : window.innerWidth < 1024 ? 'tablet' : 'desktop',
      serviceArea: location,
    });

    // Set up scroll tracking
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercent > scrollDepth.current) {
        scrollDepth.current = scrollPercent;
        OrbitTechAnalytics.trackScrollDepth(scrollPercent);
      }
    };

    // Track interactions
    const handleInteraction = () => {
      interactionCount.current++;
    };

    // Set up event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleInteraction);
    document.addEventListener('keydown', handleInteraction);

    // Cleanup function
    return () => {
      // Calculate time spent
      const timeSpent = Math.round((Date.now() - startTime.current) / 1000);
      
      // Track engagement if meaningful
      OrbitTechAnalytics.trackPageEngagement({
        pageType: pageType as any,
        location,
        timeSpent,
        scrollDepth: scrollDepth.current,
        interactionCount: interactionCount.current,
      });

      // Remove event listeners
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
    };
  }, [pageType, location]);
};

// Hook for form tracking
export const useFormTracking = () => {
  const trackFormStart = useCallback((formType: string) => {
    OrbitTechAnalytics.trackCTAClick({
      buttonText: 'Form Start',
      pageSection: 'form',
      ctaType: 'primary',
    });
  }, []);

  const trackFormStep = useCallback((step: number, totalSteps: number, formType: string) => {
    (window as any).dataLayer?.push({
      event: 'form_step',
      form_type: formType,
      step_number: step,
      total_steps: totalSteps,
      completion_rate: (step / totalSteps) * 100,
    });
  }, []);

  const trackFormSubmit = useCallback((data: {
    formType: 'quick_quote' | 'detailed_quote' | 'contact_form' | 'availability_check';
    serviceSelected: 'starlink_installation' | 'installation_plus_wifi' | 'consultation';
    location: string;
    leadId?: string;
  }) => {
    OrbitTechAnalytics.trackLeadFormSubmit(data);
  }, []);

  const trackFormError = useCallback((errorMessage: string, fieldName: string) => {
    OrbitTechAnalytics.trackError({
      errorType: 'form_validation',
      errorMessage,
      errorLocation: fieldName,
    });
  }, []);

  return {
    trackFormStart,
    trackFormStep,
    trackFormSubmit,
    trackFormError,
  };
};

// Hook for CTA tracking
export const useCTATracking = () => {
  const trackCTA = useCallback((
    buttonText: string,
    pageSection: string,
    ctaType: 'primary' | 'secondary' | 'tertiary' = 'primary',
    destination?: string
  ) => {
    OrbitTechAnalytics.trackCTAClick({
      buttonText,
      pageSection: pageSection as any,
      ctaType,
      destination,
    });
  }, []);

  const trackPhoneClick = useCallback((
    clickLocation: string,
    phoneNumber: string = '(703) 574-4390'
  ) => {
    OrbitTechAnalytics.trackPhoneClick({
      clickLocation: clickLocation as any,
      phoneNumber,
      businessHours: '24/7 Emergency Support',
    });
  }, []);

  const trackEmailClick = useCallback((
    clickLocation: string,
    emailAddress: string = 'info@theorbittech.com'
  ) => {
    OrbitTechAnalytics.trackEmailClick({
      emailAddress,
      clickLocation: clickLocation as any,
    });
  }, []);

  return {
    trackCTA,
    trackPhoneClick,
    trackEmailClick,
  };
};

// Hook for service area checker
export const useServiceAreaTracking = () => {
  const trackServiceAreaCheck = useCallback((
    action: 'start' | 'submit' | 'result_view',
    data?: {
      location?: string;
      zipCode?: string;
      result?: 'available' | 'waitlist' | 'not_available';
      waitTime?: string;
    }
  ) => {
    OrbitTechAnalytics.trackServiceAreaChecker({
      action,
      ...data,
    });
  }, []);

  return { trackServiceAreaCheck };
};

// Hook for speed test tracking
export const useSpeedTestTracking = () => {
  const trackSpeedTest = useCallback((
    action: 'start' | 'complete' | 'share_results',
    results?: {
      downloadSpeed?: number;
      uploadSpeed?: number;
      provider?: string;
      improvement?: number;
    }
  ) => {
    OrbitTechAnalytics.trackSpeedTest({
      action,
      ...results,
    });
  }, []);

  return { trackSpeedTest };
};

// Hook for pricing interaction tracking
export const usePricingTracking = () => {
  const trackPricingView = useCallback((packageName: string, price: number) => {
    OrbitTechAnalytics.trackPricingInteraction({
      action: 'view',
      packageName,
      packagePrice: price,
      packageType: packageName.includes('WiFi') ? 'installation_plus_wifi' : 'installation',
    });
  }, []);

  const trackPricingSelect = useCallback((packageName: string, price: number) => {
    OrbitTechAnalytics.trackPricingInteraction({
      action: 'select',
      packageName,
      packagePrice: price,
      packageType: packageName.includes('WiFi') ? 'installation_plus_wifi' : 'installation',
    });
  }, []);

  return {
    trackPricingView,
    trackPricingSelect,
  };
};

// Error boundary analytics hook
export const useErrorTracking = () => {
  const trackError = useCallback((
    error: Error,
    errorInfo: { componentStack: string },
    errorLocation: string
  ) => {
    OrbitTechAnalytics.trackError({
      errorType: 'javascript',
      errorMessage: error.message,
      errorLocation,
    });
  }, []);

  return { trackError };
};

// Blog engagement tracking hook
export const useBlogTracking = () => {
  const trackBlogRead = useCallback((
    articleSlug: string,
    category: string,
    action: 'read_start' | 'read_complete'
  ) => {
    OrbitTechAnalytics.trackBlogEngagement({
      action,
      articleSlug,
      category,
    });
  }, []);

  const trackBlogShare = useCallback((articleSlug: string, category: string) => {
    OrbitTechAnalytics.trackBlogEngagement({
      action: 'social_share',
      articleSlug,
      category,
    });
  }, []);

  return {
    trackBlogRead,
    trackBlogShare,
  };
};

export default {
  usePageView,
  useFormTracking,
  useCTATracking,
  useServiceAreaTracking,
  useSpeedTestTracking,
  usePricingTracking,
  useErrorTracking,
  useBlogTracking,
};
