// Analytics and tracking utilities for The Orbit Tech

// Google Tag Manager Events Interface
export interface GTMEvent {
  event: string;
  [key: string]: any;
}

// Conversion Goals Tracking
export interface ConversionGoal {
  type: 'primary' | 'secondary' | 'micro' | 'engagement' | 'navigation';
  category: string;
  action: string;
  label?: string;
  value?: number;
}

// Analytics Utility Class
export class OrbitTechAnalytics {
  // Initialize GTM
  static init(gtmId: string = 'GTM-XXXXXXX') {
    if (typeof window === 'undefined') return;

    // Initialize dataLayer
    (window as any).dataLayer = (window as any).dataLayer || [];

    // GTM Script injection
    const gtmScript = document.createElement('script');
    gtmScript.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${gtmId}');
    `;
    document.head.appendChild(gtmScript);

    // GTM NoScript fallback
    const gtmNoscript = document.createElement('noscript');
    gtmNoscript.innerHTML = `
      <iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `;
    document.body.appendChild(gtmNoscript);

    console.log('✅ Google Tag Manager initialized');
  }

  // Push event to dataLayer
  private static pushEvent(event: GTMEvent) {
    if (typeof window === 'undefined') return;

    const dataLayer = (window as any).dataLayer || [];
    dataLayer.push({
      ...event,
      timestamp: new Date().toISOString(),
      page_url: window.location.href,
      page_title: document.title,
      user_agent: navigator.userAgent,
    });

    // Log in development
    if (window.location.hostname === 'localhost') {
      console.log('📊 Analytics Event:', event);
    }
  }

  // PRIMARY CONVERSION GOAL: Lead Form Submissions
  static trackLeadFormSubmit(data: {
    formType: 'quick_quote' | 'detailed_quote' | 'contact_form' | 'availability_check';
    serviceSelected: 'starlink_installation' | 'installation_plus_wifi' | 'consultation';
    location: string;
    leadId?: string;
    formStep?: number;
    totalSteps?: number;
  }) {
    this.pushEvent({
      event: 'lead_form_submit',
      event_category: 'Conversion',
      event_action: 'Form Submit',
      event_label: data.formType,
      form_type: data.formType,
      service_selected: data.serviceSelected,
      location: data.location.toLowerCase().replace(/\s+/g, '_'),
      lead_id: data.leadId,
      form_step: data.formStep,
      total_steps: data.totalSteps,
      conversion_value: 100, // Assign lead value
    });
  }

  // SECONDARY CONVERSION GOAL: Phone Calls
  static trackPhoneClick(data: {
    clickLocation: 'header' | 'hero' | 'sticky_mobile' | 'footer' | 'contact_page';
    phoneNumber: string;
    businessHours?: string;
    callType?: 'primary' | 'emergency';
  }) {
    this.pushEvent({
      event: 'phone_click',
      event_category: 'Conversion',
      event_action: 'Phone Click',
      event_label: data.clickLocation,
      click_location: data.clickLocation,
      phone_number: data.phoneNumber.replace(/\D/g, ''), // Store digits only
      business_hours: data.businessHours,
      call_type: data.callType || 'primary',
      conversion_value: 75, // Phone call value
    });
  }

  // MICRO CONVERSION: Email Clicks
  static trackEmailClick(data: {
    emailAddress: string;
    clickLocation: 'header' | 'footer' | 'contact_page' | 'about_page';
    emailType?: 'general' | 'support' | 'sales';
  }) {
    this.pushEvent({
      event: 'email_click',
      event_category: 'Micro Conversion',
      event_action: 'Email Click',
      event_label: data.clickLocation,
      click_location: data.clickLocation,
      email_address: data.emailAddress,
      email_type: data.emailType || 'general',
      conversion_value: 25,
    });
  }

  // CTA Button Tracking
  static trackCTAClick(data: {
    buttonText: string;
    pageSection: 'hero' | 'pricing' | 'testimonials' | 'footer' | 'sidebar';
    ctaType?: 'primary' | 'secondary' | 'tertiary';
    destination?: string;
  }) {
    this.pushEvent({
      event: 'cta_click',
      event_category: 'Engagement',
      event_action: 'CTA Click',
      event_label: data.buttonText,
      button_text: data.buttonText,
      page_section: data.pageSection,
      cta_type: data.ctaType || 'primary',
      destination: data.destination,
    });
  }

  // ENGAGEMENT GOAL: Time on Location Pages
  static trackPageEngagement(data: {
    pageType: 'location' | 'blog' | 'homepage' | 'pricing' | 'about';
    location?: string;
    timeSpent: number; // in seconds
    scrollDepth: number; // percentage
    interactionCount: number;
  }) {
    // Only track if engagement is meaningful (>2 minutes for location pages)
    const isLocationPage = data.pageType === 'location';
    const meetsThreshold = isLocationPage ? data.timeSpent >= 120 : data.timeSpent >= 60;

    if (meetsThreshold) {
      this.pushEvent({
        event: 'page_engagement',
        event_category: 'Engagement',
        event_action: 'Quality Time',
        event_label: data.pageType,
        page_type: data.pageType,
        location: data.location?.toLowerCase().replace(/\s+/g, '_'),
        time_spent: data.timeSpent,
        scroll_depth: data.scrollDepth,
        interaction_count: data.interactionCount,
        engagement_quality: data.timeSpent >= 300 ? 'high' : data.timeSpent >= 120 ? 'medium' : 'low',
      });
    }
  }

  // NAVIGATION GOAL: Service Area Checker Usage
  static trackServiceAreaChecker(data: {
    action: 'start' | 'submit' | 'result_view';
    location?: string;
    zipCode?: string;
    result?: 'available' | 'waitlist' | 'not_available';
    waitTime?: string;
  }) {
    this.pushEvent({
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
    });
  }

  // Speed Test Tool Tracking
  static trackSpeedTest(data: {
    action: 'start' | 'complete' | 'share_results';
    downloadSpeed?: number;
    uploadSpeed?: number;
    provider?: string;
    improvement?: number;
  }) {
    this.pushEvent({
      event: 'speed_test',
      event_category: 'Tool Usage',
      event_action: 'Speed Test',
      event_label: data.action,
      test_action: data.action,
      download_speed: data.downloadSpeed,
      upload_speed: data.uploadSpeed,
      current_provider: data.provider,
      potential_improvement: data.improvement,
    });
  }

  // Blog Content Engagement
  static trackBlogEngagement(data: {
    action: 'read_start' | 'read_complete' | 'social_share' | 'related_click';
    articleSlug: string;
    category: string;
    readTime?: number;
    scrollPercentage?: number;
  }) {
    this.pushEvent({
      event: 'blog_engagement',
      event_category: 'Content',
      event_action: 'Blog Engagement',
      event_label: data.action,
      blog_action: data.action,
      article_slug: data.articleSlug,
      article_category: data.category,
      read_time: data.readTime,
      scroll_percentage: data.scrollPercentage,
    });
  }

  // Error Tracking
  static trackError(data: {
    errorType: 'javascript' | 'api' | 'form_validation' | 'performance';
    errorMessage: string;
    errorLocation: string;
    userId?: string;
  }) {
    this.pushEvent({
      event: 'error_tracking',
      event_category: 'Error',
      event_action: data.errorType,
      event_label: data.errorLocation,
      error_message: data.errorMessage,
      error_location: data.errorLocation,
      user_id: data.userId,
    });
  }

  // Custom Dimension Tracking
  static setCustomDimensions(data: {
    userType?: 'new' | 'returning' | 'lead' | 'customer';
    serviceArea?: string;
    leadSource?: 'organic' | 'paid' | 'social' | 'referral' | 'direct';
    deviceType?: 'mobile' | 'tablet' | 'desktop';
  }) {
    this.pushEvent({
      event: 'custom_dimensions',
      user_type: data.userType,
      service_area: data.serviceArea?.toLowerCase().replace(/\s+/g, '_'),
      lead_source: data.leadSource,
      device_type: data.deviceType,
    });
  }

  // Enhanced E-commerce Tracking for Pricing
  static trackPricingInteraction(data: {
    action: 'view' | 'select' | 'compare';
    packageName: string;
    packagePrice: number;
    packageType: 'installation' | 'installation_plus_wifi';
  }) {
    this.pushEvent({
      event: 'pricing_interaction',
      event_category: 'E-commerce',
      event_action: 'Pricing Interaction',
      event_label: data.action,
      pricing_action: data.action,
      package_name: data.packageName,
      package_price: data.packagePrice,
      package_type: data.packageType,
      currency: 'USD',
    });
  }

  // Scroll Depth Tracking
  static trackScrollDepth(percentage: number) {
    // Track at 25%, 50%, 75%, 100% milestones
    const milestones = [25, 50, 75, 100];
    if (milestones.includes(percentage)) {
      this.pushEvent({
        event: 'scroll_depth',
        event_category: 'Engagement',
        event_action: 'Scroll Depth',
        event_label: `${percentage}%`,
        scroll_percentage: percentage,
      });
    }
  }
}

export default OrbitTechAnalytics;
