// Simple Analytics Components for The Orbit Tech
import React, { useEffect } from 'react';
import OrbitTechAnalytics from '../../utils/analytics';

// Initialize analytics
if (typeof window !== 'undefined') {
  OrbitTechAnalytics.init('GTM-XXXXXXX'); // Replace with actual GTM ID
}

// CTA Button with built-in analytics
interface AnalyticsCTAProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  buttonText: string;
  pageSection: 'hero' | 'pricing' | 'testimonials' | 'footer' | 'sidebar';
  ctaType?: 'primary' | 'secondary' | 'tertiary';
  className?: string;
  target?: string;
}

export const AnalyticsCTA: React.FC<AnalyticsCTAProps> = ({
  children,
  onClick,
  href,
  buttonText,
  pageSection,
  ctaType = 'primary',
  className = '',
  target,
}) => {
  const handleClick = () => {
    OrbitTechAnalytics.trackCTAClick({
      buttonText,
      pageSection,
      ctaType,
      destination: href,
    });
    
    if (onClick) {
      onClick();
    }
  };

  if (href) {
    return (
      <a
        href={href}
        target={target}
        onClick={handleClick}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={className}
    >
      {children}
    </button>
  );
};

// Phone Number with tracking
interface AnalyticsPhoneProps {
  children: React.ReactNode;
  phoneNumber?: string;
  clickLocation: 'header' | 'hero' | 'sticky_mobile' | 'footer' | 'contact_page';
  className?: string;
  businessHours?: string;
}

export const AnalyticsPhone: React.FC<AnalyticsPhoneProps> = ({
  children,
  phoneNumber = '(703) 574-4390',
  clickLocation,
  className = '',
  businessHours = '24/7 Emergency Support',
}) => {
  const handleClick = () => {
    OrbitTechAnalytics.trackPhoneClick({
      clickLocation,
      phoneNumber,
      businessHours,
    });
  };

  return (
    <a
      href={`tel:${phoneNumber.replace(/\D/g, '')}`}
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
};

// Email with tracking
interface AnalyticsEmailProps {
  children: React.ReactNode;
  emailAddress?: string;
  clickLocation: 'header' | 'footer' | 'contact_page' | 'about_page';
  className?: string;
  subject?: string;
}

export const AnalyticsEmail: React.FC<AnalyticsEmailProps> = ({
  children,
  emailAddress = 'info@theorbittech.com',
  clickLocation,
  className = '',
  subject = 'Starlink Installation Inquiry',
}) => {
  const handleClick = () => {
    OrbitTechAnalytics.trackEmailClick({
      emailAddress,
      clickLocation,
    });
  };

  return (
    <a
      href={`mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`}
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
};

// Form wrapper with analytics
interface AnalyticsFormProps {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent) => void;
  formType: 'quick_quote' | 'detailed_quote' | 'contact_form' | 'availability_check';
  serviceSelected: 'starlink_installation' | 'installation_plus_wifi' | 'consultation';
  location: string;
  className?: string;
}

export const AnalyticsForm: React.FC<AnalyticsFormProps> = ({
  children,
  onSubmit,
  formType,
  serviceSelected,
  location,
  className = '',
}) => {
  const formStarted = React.useRef(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const leadId = `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    OrbitTechAnalytics.trackLeadFormSubmit({
      formType,
      serviceSelected,
      location,
      leadId,
    });

    onSubmit(e);
  };

  const handleFocus = () => {
    if (!formStarted.current) {
      formStarted.current = true;
      OrbitTechAnalytics.trackCTAClick({
        buttonText: 'Form Start',
        pageSection: 'hero',
        ctaType: 'primary',
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      onFocus={handleFocus}
      className={className}
    >
      {children}
    </form>
  );
};

// Page wrapper with engagement tracking
interface AnalyticsPageProps {
  children: React.ReactNode;
  pageType: 'location' | 'blog' | 'homepage' | 'pricing' | 'about';
  location?: string;
  className?: string;
}

export const AnalyticsPage: React.FC<AnalyticsPageProps> = ({
  children,
  pageType,
  location,
  className = '',
}) => {
  const { analytics } = useAnalytics();
  const startTime = React.useRef(Date.now());
  const scrollDepth = React.useRef(0);
  const interactionCount = React.useRef(0);

  useEffect(() => {
    // Track scroll depth
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercent > scrollDepth.current) {
        scrollDepth.current = scrollPercent;
        analytics.trackScrollDepth(scrollPercent);
      }
    };

    // Track interactions
    const handleInteraction = () => {
      interactionCount.current++;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleInteraction);
    document.addEventListener('keydown', handleInteraction);

    return () => {
      // Track engagement on page unload
      const timeSpent = Math.round((Date.now() - startTime.current) / 1000);
      
      analytics.trackPageEngagement({
        pageType,
        location,
        timeSpent,
        scrollDepth: scrollDepth.current,
        interactionCount: interactionCount.current,
      });

      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
    };
  }, [analytics, pageType, location]);

  return (
    <div className={className}>
      {children}
    </div>
  );
};

// Service Area Checker Component
interface ServiceAreaCheckerProps {
  onCheck: (location: string, zipCode: string) => Promise<{
    result: 'available' | 'waitlist' | 'not_available';
    waitTime?: string;
  }>;
  className?: string;
}

export const ServiceAreaChecker: React.FC<ServiceAreaCheckerProps> = ({
  onCheck,
  className = '',
}) => {
  const { analytics } = useAnalytics();
  const [location, setLocation] = React.useState('');
  const [zipCode, setZipCode] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Track checker start
    analytics.trackServiceAreaChecker({
      action: 'start',
      location,
      zipCode,
    });

    try {
      const checkResult = await onCheck(location, zipCode);
      
      // Track submission
      analytics.trackServiceAreaChecker({
        action: 'submit',
        location,
        zipCode,
        result: checkResult.result,
        waitTime: checkResult.waitTime,
      });

      setResult(checkResult.result);

      // Track result view
      analytics.trackServiceAreaChecker({
        action: 'result_view',
        location,
        zipCode,
        result: checkResult.result,
        waitTime: checkResult.waitTime,
      });
    } catch (error) {
      analytics.trackError({
        errorType: 'api',
        errorMessage: 'Service area check failed',
        errorLocation: 'ServiceAreaChecker',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`${className} bg-white p-6 rounded-lg shadow-lg`}>
      <h3 className="text-xl font-bold mb-4 text-gray-800">
        Check Service Availability
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Location/City
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g., Fairfax, VA"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            ZIP Code
          </label>
          <input
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            placeholder="22030"
            pattern="[0-9]{5}"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 disabled:opacity-50"
        >
          {loading ? 'Checking...' : 'Check Availability'}
        </button>
      </form>

      {result && (
        <div className="mt-4 p-4 rounded-lg bg-gray-50">
          <div className={`text-sm font-medium ${
            result === 'available' ? 'text-green-600' : 
            result === 'waitlist' ? 'text-yellow-600' : 'text-red-600'
          }`}>
            {result === 'available' && '✅ Service Available!'}
            {result === 'waitlist' && '⏳ Join Waitlist'}
            {result === 'not_available' && '❌ Not Available Yet'}
          </div>
        </div>
      )}
    </div>
  );
};

// Speed Test Component
interface SpeedTestProps {
  className?: string;
}

export const SpeedTest: React.FC<SpeedTestProps> = ({ className = '' }) => {
  const { analytics } = useAnalytics();
  const [testing, setTesting] = React.useState(false);
  const [results, setResults] = React.useState<{
    download: number;
    upload: number;
    provider: string;
  } | null>(null);

  const runSpeedTest = async () => {
    setTesting(true);
    
    analytics.trackSpeedTest({ action: 'start' });

    try {
      // Simulate speed test (replace with actual implementation)
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      const mockResults = {
        download: Math.floor(Math.random() * 50) + 10,
        upload: Math.floor(Math.random() * 20) + 5,
        provider: 'Current ISP',
      };

      setResults(mockResults);
      
      analytics.trackSpeedTest({
        action: 'complete',
        downloadSpeed: mockResults.download,
        uploadSpeed: mockResults.upload,
        provider: mockResults.provider,
        improvement: 500 - mockResults.download, // Starlink typical speed
      });
    } catch (error) {
      analytics.trackError({
        errorType: 'api',
        errorMessage: 'Speed test failed',
        errorLocation: 'SpeedTest',
      });
    } finally {
      setTesting(false);
    }
  };

  return (
    <div className={`${className} bg-white p-6 rounded-lg shadow-lg`}>
      <h3 className="text-xl font-bold mb-4 text-gray-800">
        Internet Speed Test
      </h3>
      
      <div className="text-center">
        {!results && !testing && (
          <button
            onClick={runSpeedTest}
            className="bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700"
          >
            Start Speed Test
          </button>
        )}
        
        {testing && (
          <div className="py-8">
            <div className="animate-spin w-8 h-8 border-4 border-primary-200 border-t-primary-600 rounded-full mx-auto mb-4"></div>
            <p className="text-gray-600">Testing your connection...</p>
          </div>
        )}
        
        {results && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary-600">
                  {results.download} Mbps
                </div>
                <div className="text-sm text-gray-600">Download</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary-600">
                  {results.upload} Mbps
                </div>
                <div className="text-sm text-gray-600">Upload</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-4 rounded-lg">
              <div className="text-lg font-semibold text-gray-800 mb-2">
                Starlink Could Deliver:
              </div>
              <div className="text-3xl font-bold text-primary-600">
                500+ Mbps
              </div>
              <div className="text-sm text-gray-600">
                Up to {Math.round((500 / results.download) * 10) / 10}x faster!
              </div>
            </div>
            
            <button
              onClick={runSpeedTest}
              className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
            >
              Test Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default {
  AnalyticsCTA,
  AnalyticsPhone,
  AnalyticsEmail,
  AnalyticsForm,
  AnalyticsPage,
  ServiceAreaChecker,
  SpeedTest,
};
