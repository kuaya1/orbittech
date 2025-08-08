// GTM and Analytics Configuration for The Orbit Tech

// GTM Configuration Script
export const GTMScript = () => `
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
<!-- End Google Tag Manager -->
`;

export const GTMNoScript = () => `
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
`;

// Enhanced E-commerce Tracking Configuration
export const ecommerceTrackingConfig = {
  currency: 'USD',
  packages: {
    'starlink_installation': {
      item_id: 'starlink_basic',
      item_name: 'Starlink Installation',
      item_category: 'Installation',
      price: 299,
    },
    'installation_plus_wifi': {
      item_id: 'starlink_plus_wifi',
      item_name: 'Starlink Installation + WiFi Setup',
      item_category: 'Installation Plus',
      price: 399,
    },
    'consultation': {
      item_id: 'starlink_consultation',
      item_name: 'Starlink Consultation',
      item_category: 'Consultation',
      price: 99,
    },
  },
};

// Custom Event Tracking Templates
export const trackingEvents = {
  // PRIMARY CONVERSION: Lead Form Submissions
  leadFormSubmit: (data: {
    formType: string;
    serviceSelected: string;
    location: string;
    leadValue?: number;
    leadId?: string;
  }) => ({
    event: 'lead_form_submit',
    event_category: 'Conversion',
    event_action: 'Form Submit',
    event_label: data.formType,
    form_type: data.formType,
    service_selected: data.serviceSelected,
    location: data.location.toLowerCase().replace(/\s+/g, '_'),
    lead_value: data.leadValue || 100,
    lead_id: data.leadId,
    conversion_type: 'primary',
  }),

  // SECONDARY CONVERSION: Phone Calls
  phoneClick: (data: {
    clickLocation: string;
    phoneNumber: string;
    businessHours?: string;
  }) => ({
    event: 'phone_click',
    event_category: 'Conversion',
    event_action: 'Phone Click',
    event_label: data.clickLocation,
    click_location: data.clickLocation,
    phone_number: data.phoneNumber.replace(/\D/g, ''),
    business_hours: data.businessHours || '24/7',
    conversion_type: 'secondary',
    conversion_value: 75,
  }),

  // MICRO CONVERSION: Email Clicks
  emailClick: (data: {
    emailAddress: string;
    clickLocation: string;
  }) => ({
    event: 'email_click',
    event_category: 'Micro Conversion',
    event_action: 'Email Click',
    event_label: data.clickLocation,
    email_address: data.emailAddress,
    click_location: data.clickLocation,
    conversion_type: 'micro',
    conversion_value: 25,
  }),

  // CTA Button Clicks
  ctaClick: (data: {
    buttonText: string;
    pageSection: string;
    ctaType?: string;
    destination?: string;
  }) => ({
    event: 'cta_click',
    event_category: 'Engagement',
    event_action: 'CTA Click',
    event_label: data.buttonText,
    button_text: data.buttonText,
    page_section: data.pageSection,
    cta_type: data.ctaType || 'primary',
    destination: data.destination,
  }),

  // ENGAGEMENT: Time on Location Pages (>2 min)
  pageEngagement: (data: {
    pageType: string;
    location?: string;
    timeSpent: number;
    scrollDepth: number;
    interactionCount: number;
  }) => {
    const isQualityEngagement = 
      (data.pageType === 'location' && data.timeSpent >= 120) ||
      (data.pageType !== 'location' && data.timeSpent >= 60);

    if (isQualityEngagement) {
      return {
        event: 'page_engagement',
        event_category: 'Engagement',
        event_action: 'Quality Time',
        event_label: data.pageType,
        page_type: data.pageType,
        location: data.location?.toLowerCase().replace(/\s+/g, '_'),
        time_spent: data.timeSpent,
        scroll_depth: data.scrollDepth,
        interaction_count: data.interactionCount,
        engagement_quality: data.timeSpent >= 300 ? 'high' : 
                          data.timeSpent >= 120 ? 'medium' : 'low',
      };
    }
    return null;
  },

  // NAVIGATION: Service Area Checker Usage
  serviceAreaCheck: (data: {
    action: string;
    location?: string;
    zipCode?: string;
    result?: string;
    waitTime?: string;
  }) => ({
    event: 'service_area_check',
    event_category: 'Navigation',
    event_action: 'Service Area Checker',
    event_label: data.action,
    checker_action: data.action,
    search_location: data.location?.toLowerCase().replace(/\s+/g, '_'),
    zip_code: data.zipCode,
    availability_result: data.result,
    estimated_wait: data.waitTime,
    conversion_value: data.action === 'submit' ? 50 : 10,
  }),

  // Speed Test Tool
  speedTest: (data: {
    action: string;
    downloadSpeed?: number;
    uploadSpeed?: number;
    provider?: string;
    improvement?: number;
  }) => ({
    event: 'speed_test',
    event_category: 'Tool Usage',
    event_action: 'Speed Test',
    event_label: data.action,
    test_action: data.action,
    download_speed: data.downloadSpeed,
    upload_speed: data.uploadSpeed,
    current_provider: data.provider,
    potential_improvement: data.improvement,
  }),

  // Pricing Interaction
  pricingInteraction: (data: {
    action: string;
    packageName: string;
    packagePrice: number;
    packageType: string;
  }) => ({
    event: 'pricing_interaction',
    event_category: 'E-commerce',
    event_action: 'Pricing Interaction',
    event_label: data.action,
    pricing_action: data.action,
    item_name: data.packageName,
    item_price: data.packagePrice,
    item_category: data.packageType,
    currency: 'USD',
  }),

  // Scroll Depth Milestones
  scrollDepth: (percentage: number) => {
    const milestones = [25, 50, 75, 100];
    if (milestones.includes(percentage)) {
      return {
        event: 'scroll_depth',
        event_category: 'Engagement',
        event_action: 'Scroll Depth',
        event_label: `${percentage}%`,
        scroll_percentage: percentage,
      };
    }
    return null;
  },

  // Error Tracking
  errorTracking: (data: {
    errorType: string;
    errorMessage: string;
    errorLocation: string;
  }) => ({
    event: 'error_tracking',
    event_category: 'Error',
    event_action: data.errorType,
    event_label: data.errorLocation,
    error_message: data.errorMessage,
    error_location: data.errorLocation,
  }),

  // Custom Dimensions
  customDimensions: (data: {
    userType?: string;
    serviceArea?: string;
    leadSource?: string;
    deviceType?: string;
  }) => ({
    event: 'custom_dimensions',
    user_type: data.userType,
    service_area: data.serviceArea?.toLowerCase().replace(/\s+/g, '_'),
    lead_source: data.leadSource,
    device_type: data.deviceType,
  }),
};

// Conversion Goals Configuration
export const conversionGoals = {
  primary: {
    name: 'Lead Form Submissions',
    events: ['lead_form_submit'],
    value: 100,
    description: 'Quote requests and contact forms',
  },
  secondary: {
    name: 'Phone Calls',
    events: ['phone_click'],
    value: 75,
    description: 'Direct phone number clicks',
  },
  micro: {
    name: 'Email Clicks',
    events: ['email_click'],
    value: 25,
    description: 'Email address clicks',
  },
  engagement: {
    name: 'Time on Location Pages (>2 min)',
    events: ['page_engagement'],
    value: 10,
    description: 'Quality engagement with location content',
  },
  navigation: {
    name: 'Service Area Checker Usage',
    events: ['service_area_check'],
    value: 50,
    description: 'Users checking service availability',
  },
};

// Analytics Helper Functions
export const analyticsHelpers = {
  // Initialize GTM
  initGTM: (gtmId: string = 'GTM-XXXXXXX') => {
    if (typeof window === 'undefined') return;
    
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    });
  },

  // Push event to dataLayer
  pushEvent: (eventData: any) => {
    if (typeof window === 'undefined') return;
    
    const dataLayer = (window as any).dataLayer || [];
    dataLayer.push({
      ...eventData,
      timestamp: new Date().toISOString(),
      page_url: window.location.href,
      page_title: document.title,
    });

    // Log in development
    if (window.location.hostname === 'localhost') {
      console.log('📊 Analytics Event:', eventData);
    }
  },

  // Get device type
  getDeviceType: (): string => {
    if (typeof window === 'undefined') return 'unknown';
    return window.innerWidth < 768 ? 'mobile' : 
           window.innerWidth < 1024 ? 'tablet' : 'desktop';
  },

  // Get lead source
  getLeadSource: (): string => {
    if (typeof window === 'undefined') return 'direct';
    
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
  },

  // Get user type
  getUserType: (): string => {
    if (typeof window === 'undefined') return 'new';
    
    const hasVisited = localStorage.getItem('orbit_tech_visited');
    const isLead = localStorage.getItem('orbit_tech_lead');
    const isCustomer = localStorage.getItem('orbit_tech_customer');
    
    if (isCustomer) return 'customer';
    if (isLead) return 'lead';
    if (hasVisited) return 'returning';
    
    localStorage.setItem('orbit_tech_visited', 'true');
    return 'new';
  },

  // Mark user as lead
  markAsLead: (leadId: string) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('orbit_tech_lead', leadId);
  },

  // Track form progress
  trackFormStep: (step: number, totalSteps: number, formType: string) => {
    analyticsHelpers.pushEvent({
      event: 'form_step',
      form_type: formType,
      step_number: step,
      total_steps: totalSteps,
      completion_rate: Math.round((step / totalSteps) * 100),
    });
  },
};

export default {
  GTMScript,
  GTMNoScript,
  ecommerceTrackingConfig,
  trackingEvents,
  conversionGoals,
  analyticsHelpers,
};
