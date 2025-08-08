// Business contact information - SINGLE SOURCE OF TRUTH
export const BUSINESS_CONFIG = {
  // Primary business phone - UPDATE THIS ONE PLACE TO CHANGE EVERYWHERE
  phone: {
    display: "(703) 574-4390",
    tel: "+17035744390",
    formatted: "+1-703-574-4390"
  },
  
  email: {
    primary: "service@theorbittech.com",
    contact: "contact@theorbittech.com",
    support: "support@theorbittech.com"
  },
  
  business: {
    name: "The Orbit Tech",
    legalName: "The Orbit Tech LLC",
    slogan: "DMV's Leading Starlink Installation Experts"
  },
  
  address: {
    street: "DMV Service Area",
    city: "Northern Virginia",
    state: "VA",
    zip: "20120",
    country: "US",
    serviceRadius: "50 miles"
  },
  
  hours: {
    weekdays: "08:00-19:00",
    saturday: "09:00-17:00", 
    sunday: "10:00-16:00",
    display: [
      "Mo-Fr 08:00-19:00",
      "Sa 09:00-17:00", 
      "Su 10:00-16:00"
    ]
  },
  
  social: {
    facebook: "https://www.facebook.com/theorbittech",
    twitter: "https://www.twitter.com/theorbittech",
    linkedin: "https://www.linkedin.com/company/theorbittech",
    yelp: "https://www.yelp.com/biz/theorbittech"
  },
  
  // Pricing information
  pricing: {
    installation: 599,
    completeCoverage: 899,
    priceRange: "$599-$899",
    currency: "USD"
  },
  
  // Service areas
  serviceAreas: [
    "Loudoun County, VA",
    "Fairfax County, VA", 
    "Arlington County, VA",
    "Prince William County, VA",
    "Montgomery County, MD"
  ],
  
  // Business metrics
  metrics: {
    rating: 4.9,
    reviewCount: 500,
    installationsCompleted: 500,
    yearsInBusiness: 3,
    warrantyYears: 2
  }
} as const;

export default BUSINESS_CONFIG;
