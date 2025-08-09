// Complete schema objects for different page types
export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://www.theorbittech.com/#organization",
  "name": "The Orbit Tech",
  "url": "https://www.theorbittech.com",
  "logo": "https://www.theorbittech.com/Starlink Dmv (33).png",
  "description": "Certified Starlink installation experts serving 100-mile radius from Reston, VA. Professional satellite internet setup across Northern Virginia, Maryland, and West Virginia.",
  "telephone": "+1-571-999-6915",
  "email": "contact@theorbittech.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Reston, VA",
    "addressLocality": "Reston",
    "addressRegion": "VA",
    "postalCode": "20190",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "38.9586",
    "longitude": "-77.3570"
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "38.9586",
      "longitude": "-77.3570"
    },
    "geoRadius": "100 miles"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "247",
    "bestRating": "5",
    "worstRating": "1"
  },
  "priceRange": "$499-$999",
  "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-17:00",
  "paymentAccepted": "Cash, Credit Card, Check",
  "currenciesAccepted": "USD",
  "sameAs": [
    "https://www.facebook.com/theorbittech",
    "https://www.linkedin.com/company/the-orbit-tech",
    "https://twitter.com/theorbittech"
  ]
};

export const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.theorbittech.com/#reviews",
  "name": "The Orbit Tech",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "147",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Sarah Chen"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "The Orbit Tech team exceeded our expectations! They handled our challenging roofline perfectly and the installation was seamless. Our Starlink speeds are incredible now.",
      "datePublished": "2024-12-15",
      "publisher": {
        "@type": "Organization",
        "name": "Google"
      }
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Michael Rodriguez"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Outstanding service from quote to completion. The Orbit Tech's DMV team knows exactly what they're doing. Professional installation with excellent cable management.",
      "datePublished": "2024-11-28",
      "publisher": {
        "@type": "Organization",
        "name": "Google"
      }
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Jennifer Walsh"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "After years of poor rural internet, The Orbit Tech transformed our connectivity completely. Fast, reliable service and their DMV area expertise really shows.",
      "datePublished": "2024-11-10",
      "publisher": {
        "@type": "Organization",
        "name": "Google"
      }
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "David Kim"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "The Orbit Tech's Fairfax team delivered exactly what they promised. Clean installation, perfect signal strength, and excellent customer service throughout the DMV area.",
      "datePublished": "2024-10-22",
      "publisher": {
        "@type": "Organization",
        "name": "Google"
      }
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Lisa Thompson"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Highly recommend The Orbit Tech for Starlink installation in Maryland. They handled our complex setup with expertise and professionalism. 5 stars!",
      "datePublished": "2024-10-05",
      "publisher": {
        "@type": "Organization",
        "name": "Google"
      }
    }
  ]
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.theorbittech.com/#service",
  "name": "Starlink Installation Service",
  "description": "Professional Starlink satellite internet installation serving 100-mile radius from Reston, VA across Northern Virginia, Maryland, and West Virginia",
  "provider": {
    "@id": "https://www.theorbittech.com/#organization"
  },
  "serviceType": "Satellite Internet Installation",
  "areaServed": "100-mile radius from Reston, Virginia",
  "offers": [
    {
      "@type": "AggregateOffer",
      "name": "Professional Installation",
      "lowPrice": "499",
      "highPrice": "699",
      "priceCurrency": "USD",
      "offerCount": "3",
      "offers": [
        {
          "@type": "Offer",
          "name": "Base Installation",
          "price": "499",
          "description": "Ground mount or simple roof mount with standard cable run"
        },
        {
          "@type": "Offer",
          "name": "Standard Installation",
          "price": "599",
          "description": "Complex roof mount with extended cable runs"
        },
        {
          "@type": "Offer",
          "name": "Premium Installation",
          "price": "699",
          "description": "Multi-story or complex installations with specialty requirements"
        }
      ]
    },
    {
      "@type": "AggregateOffer",
      "name": "Complete Coverage Package",
      "lowPrice": "799",
      "highPrice": "999",
      "priceCurrency": "USD",
      "description": "Professional installation plus whole-home Wi-Fi optimization"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Starlink Installation Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Residential Starlink Installation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Starlink Installation"
        }
      }
    ]
  }
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.theorbittech.com/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does Starlink installation cost in the DMV?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Professional Starlink installation costs $499-$699 depending on complexity. Simple ground mounts start at $499, complex installations reach $699. The Complete Coverage Package ranges from $799-$999."
      }
    },
    {
      "@type": "Question",
      "name": "What factors determine Starlink installation pricing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pricing depends on mounting location, cable run distance, roof type, accessibility, and obstruction removal needs. Base $499 includes standard ground mount with 50-foot cable run."
      }
    },
    {
      "@type": "Question",
      "name": "How far does The Orbit Tech travel for installations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Orbit Tech serves a 100-mile radius from Reston, VA, covering Northern Virginia, most of Maryland, and parts of West Virginia."
      }
    },
    {
      "@type": "Question",
      "name": "How long does Starlink installation take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Professional Starlink installation typically takes 2-3 hours for standard installation or 3-4 hours for the Complete Coverage Package including Wi-Fi optimization."
      }
    },
    {
      "@type": "Question",
      "name": "What speeds can I expect from Starlink in Northern Virginia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Starlink delivers 50-220 Mbps download speeds and 10-25 Mbps upload speeds throughout the DMV region, with latency of 20-40 milliseconds."
      }
    },
    {
      "@type": "Question",
      "name": "What is included in The Orbit Tech's Starlink installation service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our comprehensive service includes professional dish mounting, weatherproof cable routing, indoor equipment setup, network configuration, speed testing, and customer training. We also provide a 90-day warranty on all installations."
      }
    },
    {
      "@type": "Question",
      "name": "How much does professional Starlink installation cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Professional Starlink installation by The Orbit Tech starts at $299 for standard residential installations. We provide free quotes and our pricing includes all materials, labor, and warranty coverage."
      }
    }
  ]
};

// Page-specific SEO configurations
export const pageConfigs = {
  home: {
    title: "The Orbit Tech | #1 Starlink Installation DMV | Free Quote",
    description: "The Orbit Tech: Certified Starlink installation experts serving 100-mile radius from Reston, VA. Professional setup across Northern Virginia, Maryland & West Virginia. Flexible pricing $499-$999. Get your free quote today!",
    keywords: "starlink installation dmv, starlink installer virginia, starlink maryland, starlink washington dc, satellite internet installation dmv, professional starlink setup",
    canonical: "https://www.theorbittech.com",
    schema: [businessSchema, reviewSchema, serviceSchema, faqSchema]
  },
  
  serviceAreas: {
    title: "Service Areas | DMV Starlink Installation Coverage | The Orbit Tech",
    description: "The Orbit Tech serves all of Northern Virginia, Maryland, and Washington DC for professional Starlink installation. Check our complete DMV service area coverage map.",
    keywords: "starlink installation areas, dmv coverage, northern virginia starlink, maryland starlink installer, washington dc starlink, service area map",
    canonical: "https://www.theorbittech.com/service-areas",
    schema: [businessSchema, serviceSchema]
  },
  
  fairfaxVA: {
    title: "Fairfax VA Starlink Installation | Professional Setup | The Orbit Tech",
    description: "Expert Starlink installation in Fairfax, Virginia. The Orbit Tech provides professional satellite internet setup throughout Fairfax County. Licensed & insured installers.",
    keywords: "starlink installation fairfax va, fairfax virginia starlink installer, satellite internet fairfax, starlink setup fairfax county",
    canonical: "https://www.theorbittech.com/locations/fairfax-va",
    schema: [businessSchema, reviewSchema, serviceSchema]
  },
  
  montgomeryMD: {
    title: "Montgomery County MD Starlink Installation | Expert Setup | The Orbit Tech",
    description: "Professional Starlink installation in Montgomery County, Maryland. The Orbit Tech delivers expert satellite internet setup throughout MoCo with 5-star service.",
    keywords: "starlink installation montgomery county md, maryland starlink installer, satellite internet montgomery county, starlink setup rockville md",
    canonical: "https://www.theorbittech.com/locations/montgomery-md",
    schema: [businessSchema, reviewSchema, serviceSchema]
  },
  
  contact: {
    title: "Contact The Orbit Tech | Free Starlink Installation Quote | DMV",
    description: "Get your free Starlink installation quote from The Orbit Tech. Call (571) 999-6915 or contact us online. Serving the entire DMV area with professional installations.",
    keywords: "starlink installation quote, contact orbit tech, dmv starlink installer, free estimate, (571) 999-6915",
    canonical: "https://www.theorbittech.com/contact",
    schema: [businessSchema]
  },
  
  about: {
    title: "About The Orbit Tech | DMV's Premier Starlink Installation Experts",
    description: "Learn about The Orbit Tech, certified Starlink installation experts serving 100-mile radius from Reston, VA. 100+ successful installations, 4.9-star ratings, licensed & insured professionals.",
    keywords: "about orbit tech, starlink installation company, dmv satellite internet experts, professional installers, licensed insured",
    canonical: "https://www.theorbittech.com/about",
    schema: [businessSchema, reviewSchema]
  }
};
