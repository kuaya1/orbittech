// Analytics Implementation Examples for The Orbit Tech Components

import React from 'react';
import { analyticsHelpers, trackingEvents } from '../../utils/analyticsConfig';

// Example 1: Enhanced CTA Button with Analytics
export const AnalyticsButton: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  buttonText: string;
  pageSection: string;
  ctaType?: 'primary' | 'secondary' | 'tertiary';
  className?: string;
}> = ({ children, onClick, buttonText, pageSection, ctaType = 'primary', className }) => {
  const handleClick = () => {
    // Track CTA click
    const eventData = trackingEvents.ctaClick({
      buttonText,
      pageSection,
      ctaType,
    });
    analyticsHelpers.pushEvent(eventData);
    
    // Execute original onClick
    if (onClick) onClick();
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
};

// Example 2: Phone Number with Call Tracking
export const TrackedPhoneLink: React.FC<{
  children: React.ReactNode;
  phoneNumber?: string;
  clickLocation: string;
  className?: string;
}> = ({ children, phoneNumber = '(703) 574-4390', clickLocation, className }) => {
  const handlePhoneClick = () => {
    const eventData = trackingEvents.phoneClick({
      clickLocation,
      phoneNumber,
      businessHours: '24/7 Emergency Support',
    });
    analyticsHelpers.pushEvent(eventData);
  };

  return (
    <a
      href={`tel:${phoneNumber.replace(/\D/g, '')}`}
      onClick={handlePhoneClick}
      className={className}
    >
      {children}
    </a>
  );
};

// Example 3: Email Link with Tracking
export const TrackedEmailLink: React.FC<{
  children: React.ReactNode;
  emailAddress?: string;
  clickLocation: string;
  className?: string;
  subject?: string;
}> = ({ children, emailAddress = 'info@theorbittech.com', clickLocation, className, subject }) => {
  const handleEmailClick = () => {
    const eventData = trackingEvents.emailClick({
      emailAddress,
      clickLocation,
    });
    analyticsHelpers.pushEvent(eventData);
  };

  const href = subject 
    ? `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`
    : `mailto:${emailAddress}`;

  return (
    <a href={href} onClick={handleEmailClick} className={className}>
      {children}
    </a>
  );
};

// Example 4: Form with Lead Tracking
export const TrackedLeadForm: React.FC<{
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent) => void;
  formType: 'quick_quote' | 'detailed_quote' | 'contact_form' | 'availability_check';
  serviceSelected: string;
  location: string;
  className?: string;
}> = ({ children, onSubmit, formType, serviceSelected, location, className }) => {
  const [formStarted, setFormStarted] = React.useState(false);

  const handleFormStart = () => {
    if (!formStarted) {
      setFormStarted(true);
      const eventData = trackingEvents.ctaClick({
        buttonText: 'Form Started',
        pageSection: 'form',
        ctaType: 'primary',
      });
      analyticsHelpers.pushEvent(eventData);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate lead ID
    const leadId = `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Track lead submission
    const eventData = trackingEvents.leadFormSubmit({
      formType,
      serviceSelected,
      location: location.toLowerCase().replace(/\s+/g, '_'),
      leadValue: 100,
      leadId,
    });
    analyticsHelpers.pushEvent(eventData);
    
    // Mark user as lead
    analyticsHelpers.markAsLead(leadId);
    
    // Execute original onSubmit
    onSubmit(e);
  };

  return (
    <form onSubmit={handleSubmit} onFocus={handleFormStart} className={className}>
      {children}
    </form>
  );
};

// Example 5: Service Area Checker with Navigation Tracking
export const ServiceAreaChecker: React.FC = () => {
  const [location, setLocation] = React.useState('');
  const [zipCode, setZipCode] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Track checker start
    const startEvent = trackingEvents.serviceAreaCheck({
      action: 'start',
      location,
      zipCode,
    });
    analyticsHelpers.pushEvent(startEvent);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock result
      const mockResult = Math.random() > 0.3 ? 'available' : 'waitlist';
      setResult(mockResult);
      
      // Track submission
      const submitEvent = trackingEvents.serviceAreaCheck({
        action: 'submit',
        location,
        zipCode,
        result: mockResult,
        waitTime: mockResult === 'waitlist' ? '2-4 weeks' : undefined,
      });
      analyticsHelpers.pushEvent(submitEvent);

      // Track result view
      const resultEvent = trackingEvents.serviceAreaCheck({
        action: 'result_view',
        location,
        zipCode,
        result: mockResult,
      });
      analyticsHelpers.pushEvent(resultEvent);
    } catch (error) {
      // Track error
      const errorEvent = trackingEvents.errorTracking({
        errorType: 'api',
        errorMessage: 'Service area check failed',
        errorLocation: 'ServiceAreaChecker',
      });
      analyticsHelpers.pushEvent(errorEvent);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">Check Service Availability</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g., Fairfax, VA"
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">ZIP Code</label>
          <input
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            placeholder="22030"
            pattern="[0-9]{5}"
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 disabled:opacity-50"
        >
          {loading ? 'Checking...' : 'Check Availability'}
        </button>
      </form>

      {result && (
        <div className="mt-4 p-4 rounded-lg bg-gray-50">
          <div className={`font-medium ${
            result === 'available' ? 'text-green-600' : 'text-yellow-600'
          }`}>
            {result === 'available' ? '✅ Service Available!' : '⏳ Join Waitlist'}
          </div>
        </div>
      )}
    </div>
  );
};

// Example 6: Speed Test Tool with Usage Tracking
export const SpeedTestTool: React.FC = () => {
  const [testing, setTesting] = React.useState(false);
  const [results, setResults] = React.useState<{
    download: number;
    upload: number;
    provider: string;
  } | null>(null);

  const runSpeedTest = async () => {
    setTesting(true);
    
    // Track test start
    const startEvent = trackingEvents.speedTest({
      action: 'start',
    });
    analyticsHelpers.pushEvent(startEvent);

    try {
      // Simulate speed test
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      const mockResults = {
        download: Math.floor(Math.random() * 50) + 10,
        upload: Math.floor(Math.random() * 20) + 5,
        provider: 'Current ISP',
      };

      setResults(mockResults);
      
      // Track test completion
      const completeEvent = trackingEvents.speedTest({
        action: 'complete',
        downloadSpeed: mockResults.download,
        uploadSpeed: mockResults.upload,
        provider: mockResults.provider,
        improvement: 500 - mockResults.download,
      });
      analyticsHelpers.pushEvent(completeEvent);
    } catch (error) {
      // Track error
      const errorEvent = trackingEvents.errorTracking({
        errorType: 'api',
        errorMessage: 'Speed test failed',
        errorLocation: 'SpeedTestTool',
      });
      analyticsHelpers.pushEvent(errorEvent);
    } finally {
      setTesting(false);
    }
  };

  const shareResults = () => {
    // Track result sharing
    const shareEvent = trackingEvents.speedTest({
      action: 'share_results',
      downloadSpeed: results?.download,
      uploadSpeed: results?.upload,
    });
    analyticsHelpers.pushEvent(shareEvent);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">Internet Speed Test</h3>
      
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
            <p>Testing your connection...</p>
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
              <div className="text-lg font-semibold mb-2">Starlink Could Deliver:</div>
              <div className="text-3xl font-bold text-primary-600">500+ Mbps</div>
              <div className="text-sm text-gray-600">
                Up to {Math.round((500 / results.download) * 10) / 10}x faster!
              </div>
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={runSpeedTest}
                className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
              >
                Test Again
              </button>
              <button
                onClick={shareResults}
                className="bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700"
              >
                Share Results
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Example 7: Page Engagement Tracker Hook
export const usePageEngagementTracking = (
  pageType: string,
  location?: string
) => {
  const startTime = React.useRef(Date.now());
  const scrollDepth = React.useRef(0);
  const interactionCount = React.useRef(0);

  React.useEffect(() => {
    // Track scroll depth
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercent > scrollDepth.current) {
        scrollDepth.current = scrollPercent;
        
        // Track scroll milestones
        const scrollEvent = trackingEvents.scrollDepth(scrollPercent);
        if (scrollEvent) {
          analyticsHelpers.pushEvent(scrollEvent);
        }
      }
    };

    // Track user interactions
    const handleInteraction = () => {
      interactionCount.current++;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleInteraction);
    document.addEventListener('keydown', handleInteraction);

    return () => {
      // Track final engagement when component unmounts
      const timeSpent = Math.round((Date.now() - startTime.current) / 1000);
      
      const engagementEvent = trackingEvents.pageEngagement({
        pageType,
        location,
        timeSpent,
        scrollDepth: scrollDepth.current,
        interactionCount: interactionCount.current,
      });
      
      if (engagementEvent) {
        analyticsHelpers.pushEvent(engagementEvent);
      }

      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
    };
  }, [pageType, location]);

  return {
    timeSpent: Math.round((Date.now() - startTime.current) / 1000),
    scrollDepth: scrollDepth.current,
    interactionCount: interactionCount.current,
  };
};

export default {
  AnalyticsButton,
  TrackedPhoneLink,
  TrackedEmailLink,
  TrackedLeadForm,
  ServiceAreaChecker,
  SpeedTestTool,
  usePageEngagementTracking,
};
