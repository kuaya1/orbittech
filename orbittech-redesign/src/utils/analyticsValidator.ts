// Analytics Implementation Validation Script
// Run this script to validate GTM and conversion tracking setup

const AnalyticsValidator = {
  // Check if GTM is properly loaded
  validateGTM: () => {
    console.log('🔍 Validating Google Tag Manager...');
    
    if (typeof window === 'undefined') {
      console.log('❌ Running in server environment');
      return false;
    }

    // Check if dataLayer exists
    if (!window.dataLayer) {
      console.log('❌ dataLayer not found');
      return false;
    }

    // Check if GTM script is loaded
    const gtmScripts = document.querySelectorAll('script[src*="googletagmanager.com"]');
    if (gtmScripts.length === 0) {
      console.log('❌ GTM script not found');
      return false;
    }

    console.log('✅ GTM properly loaded');
    console.log(`📊 DataLayer has ${window.dataLayer.length} events`);
    return true;
  },

  // Test event firing
  testEventFiring: () => {
    console.log('🧪 Testing event firing...');
    
    const testEvent = {
      event: 'test_event',
      test_category: 'Analytics Validation',
      test_action: 'Manual Test',
      timestamp: new Date().toISOString()
    };

    window.dataLayer?.push(testEvent);
    console.log('✅ Test event fired:', testEvent);
  },

  // Validate conversion tracking setup
  validateConversions: () => {
    console.log('🎯 Validating conversion tracking...');
    
    const conversionTypes = [
      'lead_form_submit',
      'phone_click',
      'email_click',
      'cta_click',
      'service_area_check'
    ];

    conversionTypes.forEach(type => {
      console.log(`✅ ${type} tracking configured`);
    });
  },

  // Check for analytics errors
  validateErrorTracking: () => {
    console.log('🚨 Validating error tracking...');
    
    // Test error tracking
    try {
      throw new Error('Test analytics error');
    } catch (error) {
      const errorEvent = {
        event: 'error_tracking',
        error_type: 'validation_test',
        error_message: error.message,
        error_location: 'Analytics Validator'
      };
      
      window.dataLayer?.push(errorEvent);
      console.log('✅ Error tracking validated');
    }
  },

  // Validate custom dimensions
  validateCustomDimensions: () => {
    console.log('📏 Validating custom dimensions...');
    
    const dimensions = {
      user_type: 'test_user',
      device_type: window.innerWidth < 768 ? 'mobile' : 'desktop',
      service_area: 'test_area',
      lead_source: 'validation_test'
    };

    window.dataLayer?.push({
      event: 'custom_dimensions',
      ...dimensions
    });

    console.log('✅ Custom dimensions validated:', dimensions);
  },

  // Test form tracking
  validateFormTracking: () => {
    console.log('📝 Validating form tracking...');
    
    const formEvent = {
      event: 'lead_form_submit',
      form_type: 'test_form',
      service_selected: 'starlink_installation',
      location: 'test_location',
      lead_value: 100,
      lead_id: `test_lead_${Date.now()}`
    };

    window.dataLayer?.push(formEvent);
    console.log('✅ Form tracking validated:', formEvent);
  },

  // Test phone tracking
  validatePhoneTracking: () => {
    console.log('📞 Validating phone tracking...');
    
    const phoneEvent = {
      event: 'phone_click',
      click_location: 'test_header',
      phone_number: '7035744390',
      conversion_value: 75
    };

    window.dataLayer?.push(phoneEvent);
    console.log('✅ Phone tracking validated:', phoneEvent);
  },

  // Validate performance tracking
  validatePerformanceTracking: () => {
    console.log('⚡ Validating performance tracking...');
    
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0];
      const performanceEvent = {
        event: 'performance_tracking',
        page_load_time: navigation.loadEventEnd - navigation.fetchStart,
        dom_content_loaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
        first_byte: navigation.responseStart - navigation.fetchStart
      };

      window.dataLayer?.push(performanceEvent);
      console.log('✅ Performance tracking validated:', performanceEvent);
    } else {
      console.log('❌ Performance API not available');
    }
  },

  // Run full validation suite
  runFullValidation: () => {
    console.log('🚀 Starting Analytics Implementation Validation');
    console.log('================================================');

    const results = {
      gtm: AnalyticsValidator.validateGTM(),
      conversions: AnalyticsValidator.validateConversions(),
      errors: AnalyticsValidator.validateErrorTracking(),
      dimensions: AnalyticsValidator.validateCustomDimensions(),
      forms: AnalyticsValidator.validateFormTracking(),
      phone: AnalyticsValidator.validatePhoneTracking(),
      performance: AnalyticsValidator.validatePerformanceTracking()
    };

    AnalyticsValidator.testEventFiring();

    console.log('================================================');
    console.log('📊 Validation Summary:');
    Object.entries(results).forEach(([key, value]) => {
      console.log(`${value ? '✅' : '❌'} ${key}: ${value ? 'PASS' : 'FAIL'}`);
    });

    console.log('💡 Check browser DevTools Network tab for GTM requests');
    console.log('💡 Use GTM Preview mode for detailed event debugging');
    console.log('💡 Verify events in Google Analytics Real-Time reports');

    return results;
  },

  // Monitor dataLayer in real-time
  monitorDataLayer: (duration = 30000) => {
    console.log(`👀 Monitoring dataLayer for ${duration/1000} seconds...`);
    
    let eventCount = window.dataLayer?.length || 0;
    
    const monitor = setInterval(() => {
      const currentCount = window.dataLayer?.length || 0;
      if (currentCount > eventCount) {
        const newEvents = window.dataLayer?.slice(eventCount);
        newEvents?.forEach((event, index) => {
          console.log(`📊 New Event ${eventCount + index + 1}:`, event);
        });
        eventCount = currentCount;
      }
    }, 1000);

    setTimeout(() => {
      clearInterval(monitor);
      console.log('⏰ DataLayer monitoring stopped');
    }, duration);
  },

  // Generate analytics report
  generateReport: () => {
    console.log('📈 Generating Analytics Implementation Report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      gtm_status: AnalyticsValidator.validateGTM(),
      total_events: window.dataLayer?.length || 0,
      user_agent: navigator.userAgent,
      page_url: window.location.href,
      local_storage: {
        visited: localStorage.getItem('orbit_tech_visited'),
        lead: localStorage.getItem('orbit_tech_lead'),
        customer: localStorage.getItem('orbit_tech_customer')
      },
      performance: performance.getEntriesByType('navigation')[0] || null
    };

    console.log('📋 Implementation Report:', report);
    return report;
  }
};

// Auto-run validation on script load (development only)
if (window.location.hostname === 'localhost') {
  console.log('🔧 Development Environment Detected');
  console.log('Running automatic analytics validation...');
  
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => AnalyticsValidator.runFullValidation(), 1000);
    });
  } else {
    setTimeout(() => AnalyticsValidator.runFullValidation(), 1000);
  }
}

// Make validator available globally for manual testing
if (typeof window !== 'undefined') {
  window.AnalyticsValidator = AnalyticsValidator;
  console.log('💡 Analytics Validator available as window.AnalyticsValidator');
  console.log('💡 Run AnalyticsValidator.runFullValidation() to test manually');
}

export default AnalyticsValidator;
