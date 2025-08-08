# Analytics & Tracking Implementation Guide
## The Orbit Tech - Google Tag Manager & Conversion Tracking

### 🎯 Overview
Complete analytics and tracking system implementation for The Orbit Tech Starlink installation business, focusing on DMV area lead generation and conversion optimization.

---

## 📊 Google Tag Manager Setup

### 1. GTM Container Configuration
```html
<!-- Add to <head> section -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>

<!-- Add to <body> start -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
```

### 2. DataLayer Events Implementation

#### Primary Conversion: Lead Form Submissions
```javascript
dataLayer.push({
  event: 'lead_form_submit',
  event_category: 'Conversion',
  event_action: 'Form Submit',
  event_label: 'quick_quote',
  form_type: 'quick_quote',
  service_selected: 'starlink_installation',
  location: 'loudoun_county',
  lead_value: 100,
  lead_id: 'lead_1704672000_abc123',
  conversion_type: 'primary'
});
```

#### Secondary Conversion: Phone Calls
```javascript
dataLayer.push({
  event: 'phone_click',
  event_category: 'Conversion',
  event_action: 'Phone Click',
  event_label: 'header',
  click_location: 'header',
  phone_number: '7035744390',
  business_hours: '24/7 Emergency Support',
  conversion_type: 'secondary',
  conversion_value: 75
});
```

#### Micro Conversion: Email Clicks
```javascript
dataLayer.push({
  event: 'email_click',
  event_category: 'Micro Conversion',
  event_action: 'Email Click',
  event_label: 'header',
  email_address: 'info@theorbittech.com',
  click_location: 'header',
  conversion_type: 'micro',
  conversion_value: 25
});
```

#### CTA Button Tracking
```javascript
dataLayer.push({
  event: 'cta_click',
  event_category: 'Engagement',
  event_action: 'CTA Click',
  event_label: 'Get Free Quote',
  button_text: 'Get Free Quote',
  page_section: 'hero',
  cta_type: 'primary',
  destination: '/contact'
});
```

---

## 🎯 Conversion Goals Configuration

### 1. Primary Goals (100 points)
- **Lead Form Submissions**
  - Quick Quote Forms
  - Detailed Quote Requests
  - Contact Forms
  - Availability Checks

### 2. Secondary Goals (75 points)
- **Phone Calls**
  - Header phone clicks
  - Hero section calls
  - Mobile sticky buttons
  - Footer contact clicks

### 3. Micro Conversions (25 points)
- **Email Clicks**
  - Contact email interactions
  - Support email clicks

### 4. Engagement Goals (10-50 points)
- **Time on Location Pages** (>2 minutes)
  - Fairfax, VA content
  - Montgomery County, MD content
  - Service area pages

### 5. Navigation Goals (10-50 points)
- **Service Area Checker Usage**
  - ZIP code searches
  - Availability checks
  - Waitlist signups

---

## 📈 Enhanced E-commerce Tracking

### Service Package Tracking
```javascript
// Pricing View Event
dataLayer.push({
  event: 'view_item',
  ecommerce: {
    currency: 'USD',
    value: 299,
    items: [{
      item_id: 'starlink_basic',
      item_name: 'Starlink Installation',
      item_category: 'Installation',
      price: 299,
      quantity: 1
    }]
  }
});

// Package Selection
dataLayer.push({
  event: 'add_to_cart',
  ecommerce: {
    currency: 'USD',
    value: 399,
    items: [{
      item_id: 'starlink_plus_wifi',
      item_name: 'Starlink Installation + WiFi Setup',
      item_category: 'Installation Plus',
      price: 399,
      quantity: 1
    }]
  }
});

// Lead Conversion
dataLayer.push({
  event: 'purchase',
  ecommerce: {
    transaction_id: 'lead_1704672000_abc123',
    value: 100,
    currency: 'USD',
    items: [{
      item_id: 'lead_conversion',
      item_name: 'Starlink Installation Lead',
      item_category: 'Lead',
      price: 100,
      quantity: 1
    }]
  }
});
```

---

## 🔧 Custom Dimensions & Variables

### User Segmentation
```javascript
dataLayer.push({
  event: 'custom_dimensions',
  user_type: 'new',           // new, returning, lead, customer
  service_area: 'fairfax_va', // fairfax_va, montgomery_md, dc
  lead_source: 'organic',     // organic, paid, social, referral, direct
  device_type: 'desktop'      // mobile, tablet, desktop
});
```

### Page Context Variables
- **Page Type**: homepage, location, pricing, blog, about
- **Location**: fairfax_va, montgomery_md, washington_dc
- **Service Package**: starlink_installation, installation_plus_wifi
- **User Journey Stage**: awareness, consideration, decision

---

## 📱 Event Tracking Implementation

### React Component Integration
```typescript
import { analyticsHelpers, trackingEvents } from '../utils/analyticsConfig';

// Track CTA clicks
const handleCTAClick = () => {
  const eventData = trackingEvents.ctaClick({
    buttonText: 'Get Free Quote',
    pageSection: 'hero',
    ctaType: 'primary',
    destination: '/contact'
  });
  analyticsHelpers.pushEvent(eventData);
};

// Track form submissions
const handleFormSubmit = (formData: any) => {
  const leadId = `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  
  const eventData = trackingEvents.leadFormSubmit({
    formType: 'quick_quote',
    serviceSelected: 'starlink_installation',
    location: 'fairfax_va',
    leadValue: 100,
    leadId
  });
  
  analyticsHelpers.pushEvent(eventData);
  analyticsHelpers.markAsLead(leadId);
};
```

### Scroll Depth Tracking
```javascript
// Automatic scroll depth milestones
const trackScrollDepth = () => {
  const scrollPercent = Math.round(
    (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
  );
  
  const eventData = trackingEvents.scrollDepth(scrollPercent);
  if (eventData) {
    analyticsHelpers.pushEvent(eventData);
  }
};
```

---

## 🎯 Google Ads Conversion Setup

### Conversion Actions Configuration
1. **Lead Form Submissions** - Primary conversion
   - Conversion Value: $100
   - Attribution: Last-click
   - Count: One per session

2. **Phone Calls** - Call conversion
   - Conversion Value: $75
   - Attribution: Last-click
   - Count: One per conversion

3. **Service Area Checks** - Micro conversion
   - Conversion Value: $10
   - Attribution: First-click
   - Count: Many per session

### Conversion Tracking Code
```html
<!-- Google Ads Conversion Tracking -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-XXXXXXXXX');
</script>

<!-- Lead Conversion Event -->
<script>
  gtag('event', 'conversion', {
    'send_to': 'AW-XXXXXXXXX/YYYYYYYY',
    'value': 100.0,
    'currency': 'USD',
    'transaction_id': leadId
  });
</script>
```

---

## 📊 Google Analytics 4 Enhanced Events

### Custom Events Setup
```javascript
// Enhanced engagement tracking
gtag('event', 'page_engagement', {
  page_type: 'location',
  location: 'fairfax_va',
  time_spent: 145,
  scroll_depth: 85,
  interaction_count: 12,
  engagement_quality: 'high'
});

// Service tool usage
gtag('event', 'tool_usage', {
  tool_name: 'speed_test',
  action: 'complete',
  result_value: 45,
  improvement_potential: 455
});
```

---

## 🔍 Debugging & Validation

### GTM Preview Mode
1. Enable Preview mode in GTM
2. Navigate to your website
3. Verify all events fire correctly
4. Check dataLayer variables

### Chrome DevTools Validation
```javascript
// Check dataLayer in console
console.log(window.dataLayer);

// Monitor real-time events
window.dataLayer.push = function() {
  console.log('DataLayer event:', arguments);
  return Array.prototype.push.apply(window.dataLayer, arguments);
};
```

### Tag Assistant Legacy
- Install Google Tag Assistant Legacy extension
- Verify GTM container loads
- Check conversion tracking pixels

---

## 📈 Performance Monitoring

### Core Web Vitals Integration
```javascript
// Track performance metrics with conversions
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS((metric) => {
  gtag('event', 'web_vitals', {
    metric_name: 'CLS',
    metric_value: metric.value,
    metric_rating: metric.rating
  });
});
```

### Page Load Speed Correlation
```javascript
// Track conversion correlation with page speed
const trackConversionWithSpeed = (conversionData, loadTime) => {
  dataLayer.push({
    ...conversionData,
    page_load_time: loadTime,
    performance_rating: loadTime < 3000 ? 'fast' : loadTime < 5000 ? 'average' : 'slow'
  });
};
```

---

## 🎯 Success Metrics & KPIs

### Primary KPIs
- **Lead Conversion Rate**: >3%
- **Cost Per Lead**: <$50
- **Phone Call Rate**: >1%
- **Email Engagement**: >0.5%

### Engagement Metrics
- **Location Page Time**: >2 minutes
- **Service Area Usage**: >10% of sessions
- **Scroll Depth**: >75% on key pages
- **Return Visitor Rate**: >20%

### Technical Performance
- **Page Load Time**: <3 seconds
- **Core Web Vitals**: All "Good" ratings
- **Mobile Experience**: >90% usability
- **Conversion Tracking**: 100% accuracy

---

## 🔧 Implementation Checklist

### ✅ Technical Setup
- [ ] GTM container installed
- [ ] DataLayer initialized
- [ ] All events configured
- [ ] Conversion tracking active
- [ ] Debug mode tested

### ✅ Event Configuration
- [ ] Lead form submissions tracked
- [ ] Phone clicks monitored
- [ ] Email interactions logged
- [ ] CTA buttons instrumented
- [ ] Page engagement measured

### ✅ Advanced Features
- [ ] Enhanced e-commerce enabled
- [ ] Custom dimensions configured
- [ ] Scroll depth tracking active
- [ ] Performance metrics integrated
- [ ] Error tracking implemented

### ✅ Validation & Testing
- [ ] GTM Preview verified
- [ ] Real-time reports confirmed
- [ ] Conversion attribution tested
- [ ] Mobile tracking validated
- [ ] Cross-domain setup verified

---

## 📞 Support & Maintenance

### Monthly Reviews
- Conversion goal performance
- Attribution model effectiveness
- Event tracking accuracy
- Custom dimension insights

### Quarterly Optimizations
- Conversion funnel analysis
- User journey mapping
- Attribution model updates
- Performance correlation studies

### Annual Strategy Updates
- Market trend integration
- New tracking technology adoption
- Competition analysis integration
- ROI optimization strategies

---

*This comprehensive analytics setup ensures maximum visibility into The Orbit Tech's lead generation performance across the DMV Starlink installation market, with detailed conversion tracking and optimization capabilities.*
