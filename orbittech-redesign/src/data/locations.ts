import { Location } from '../types';

export const locations: Location[] = [
  {
    id: 'loudoun-county',
    name: 'Loudoun County',
    county: 'Loudoun',
    state: 'VA',
    population: 420959,
    serviceAreas: [
      'Leesburg',
      'Ashburn',
      'Sterling',
      'Purcellville',
      'Middleburg',
      'Hamilton',
      'Round Hill',
      'Lovettsville',
      'Bluemont',
      'Waterford'
    ],
    testimonials: [
      {
        id: '1',
        name: 'Mike Johnson',
        location: 'Ashburn, VA',
        rating: 5,
        date: '2024-01-15',
        content: 'Outstanding service! The technician arrived on time and had my Starlink up and running in under 2 hours. Internet speeds went from 5 Mbps to over 200 Mbps instantly.',
        speedBefore: 5,
        speedAfter: 210,
        verified: true
      },
      {
        id: '2',
        name: 'Sarah Miller',
        location: 'Leesburg, VA',
        rating: 5,
        date: '2024-01-20',
        content: 'Finally reliable internet in rural Loudoun! The Orbit Tech team was professional and explained everything clearly. Worth every penny.',
        speedBefore: 12,
        speedAfter: 185,
        verified: true
      }
    ],
    faqs: [
      {
        id: '1',
        question: 'How long does Starlink installation take in Loudoun County?',
        answer: 'Most installations in Loudoun County take 1-3 hours depending on your roof type and desired setup. We provide same-day service for most areas.',
        category: 'installation'
      },
      {
        id: '2',
        question: 'Do you serve rural areas of Loudoun County?',
        answer: 'Yes! We serve all of Loudoun County including rural areas like Bluemont, Waterford, and Hamilton where traditional internet options are limited.',
        category: 'coverage'
      }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "The Orbit Tech - Starlink Installation Loudoun County",
      description: "Professional Starlink satellite internet installation services in Loudoun County, Virginia. Same-day service, certified technicians, 2-year warranty.",
      url: "https://theorbittech.com/locations/loudoun-county",
      telephone: "+1-703-555-0123",
      email: "service@theorbittech.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Tech Drive",
        addressLocality: "Leesburg",
        addressRegion: "VA",
        postalCode: "20175",
        addressCountry: "US"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 39.1157,
        longitude: -77.5636
      },
      areaServed: [
        "Leesburg", "Ashburn", "Sterling", "Purcellville", "Middleburg",
        "Hamilton", "Round Hill", "Lovettsville", "Bluemont", "Waterford"
      ],
      serviceType: [
        "Starlink Installation",
        "Satellite Internet Setup",
        "WiFi Network Configuration",
        "Internet Speed Optimization"
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: 4.9,
        reviewCount: 247
      }
    }
  },
  {
    id: 'fairfax-county',
    name: 'Fairfax County',
    county: 'Fairfax',
    state: 'VA',
    population: 1150309,
    serviceAreas: [
      'Alexandria',
      'Fairfax',
      'McLean',
      'Reston',
      'Herndon',
      'Vienna',
      'Annandale',
      'Burke',
      'Springfield',
      'Centreville'
    ],
    testimonials: [
      {
        id: '3',
        name: 'David Chen',
        location: 'McLean, VA',
        rating: 5,
        date: '2024-01-25',
        content: 'Exceptional service! Working from home just got so much better with reliable Starlink internet. The installation was clean and professional.',
        speedBefore: 25,
        speedAfter: 230,
        verified: true
      }
    ],
    faqs: [
      {
        id: '3',
        question: 'What speeds can I expect with Starlink in Fairfax County?',
        answer: 'Typical speeds in Fairfax County range from 150-250 Mbps download with low latency, perfect for remote work, streaming, and gaming.',
        category: 'performance'
      }
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "The Orbit Tech - Starlink Installation Fairfax County",
      description: "Professional Starlink satellite internet installation services in Fairfax County, Virginia. Serving McLean, Reston, Vienna, and surrounding areas.",
      url: "https://theorbittech.com/locations/fairfax-county",
      telephone: "+1-703-555-0123",
      email: "service@theorbittech.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "456 Innovation Way",
        addressLocality: "Fairfax",
        addressRegion: "VA",
        postalCode: "22030",
        addressCountry: "US"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 38.8462,
        longitude: -77.3064
      },
      areaServed: [
        "Alexandria", "Fairfax", "McLean", "Reston", "Herndon",
        "Vienna", "Annandale", "Burke", "Springfield", "Centreville"
      ],
      serviceType: [
        "Starlink Installation",
        "Satellite Internet Setup",
        "WiFi Network Configuration",
        "Internet Speed Optimization"
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: 4.9,
        reviewCount: 189
      }
    }
  }
];
