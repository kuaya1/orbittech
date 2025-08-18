// Google Analytics Conversion Tracking Utilities
// Centralized tracking functions for The Orbit Tech website

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (command: string, action: string, parameters: object) => void;
  }
}

// Google Ads Conversion ID
const CONVERSION_ID = 'AW-17369280864/afTpCKOIgYkbEODiqNpA';

/**
 * Track form submission conversions
 * @param formType - Type of form submitted
 * @param additionalData - Additional tracking data
 */
export const trackFormSubmission = (
  formType: 'contact_form' | 'availability_check' | 'quote_request',
  additionalData?: Record<string, any>
) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      'send_to': CONVERSION_ID,
      'event_category': 'Form Submission',
      'event_label': formType,
      ...additionalData
    });
  }
};

/**
 * Track CTA button clicks
 * @param buttonText - Text of the clicked button
 * @param location - Page or section where button was clicked
 */
export const trackCTAClick = (buttonText: string, location?: string) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      'send_to': CONVERSION_ID,
      'event_category': 'CTA Click',
      'event_label': buttonText,
      'custom_parameters': {
        'button_location': location || 'unknown'
      }
    });
  }
};

/**
 * Track phone number clicks
 * @param phoneNumber - Phone number that was clicked
 * @param location - Page or section where phone was clicked
 */
export const trackPhoneClick = (phoneNumber: string = '(571) 999-6915', location?: string) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      'send_to': CONVERSION_ID,
      'event_category': 'Phone Contact',
      'event_label': 'Phone Number Click',
      'custom_parameters': {
        'phone_number': phoneNumber,
        'click_location': location || 'unknown'
      }
    });
  }
};

/**
 * Track email clicks
 * @param email - Email address that was clicked
 * @param location - Page or section where email was clicked
 */
export const trackEmailClick = (email: string = 'connect@theorbittech.com', location?: string) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      'send_to': CONVERSION_ID,
      'event_category': 'Email Contact',
      'event_label': 'Email Click',
      'custom_parameters': {
        'email_address': email,
        'click_location': location || 'unknown'
      }
    });
  }
};

/**
 * Track page views for important pages
 * @param pageName - Name of the page being viewed
 * @param pageUrl - URL of the page
 */
export const trackPageView = (pageName: string, pageUrl?: string) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      'page_title': pageName,
      'page_location': pageUrl || window.location.href,
      'custom_parameters': {
        'page_category': 'service_page'
      }
    });
  }
};

/**
 * Track ZIP code availability checks
 * @param zipCode - ZIP code that was checked
 * @param isServiceable - Whether service is available in that area
 */
export const trackAvailabilityCheck = (zipCode: string, isServiceable: boolean) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      'send_to': CONVERSION_ID,
      'event_category': 'Availability Check',
      'event_label': isServiceable ? 'Service Available' : 'Service Not Available',
      'custom_parameters': {
        'zip_code': zipCode,
        'service_available': isServiceable
      }
    });
  }
};

/**
 * Track service quote requests
 * @param serviceType - Type of service requested
 * @param contactMethod - How they want to be contacted
 */
export const trackQuoteRequest = (serviceType: string, contactMethod?: string) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      'send_to': CONVERSION_ID,
      'event_category': 'Quote Request',
      'event_label': serviceType,
      'custom_parameters': {
        'service_type': serviceType,
        'contact_method': contactMethod || 'form'
      }
    });
  }
};

export default {
  trackFormSubmission,
  trackCTAClick,
  trackPhoneClick,
  trackEmailClick,
  trackPageView,
  trackAvailabilityCheck,
  trackQuoteRequest
};
