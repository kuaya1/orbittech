import React from 'react';
import LocationPageTemplate from '@/components/location/LocationPageTemplate';
import type { LocationData } from '@/types/location';

const princeWilliamData: LocationData = {
  county: "Prince William County",
  state: "VA",
  cities: [
    {
      name: "Woodbridge",
      zipCodes: ["22191", "22192", "22193"],
      population: 44958
    },
    {
      name: "Manassas",
      zipCodes: ["20109", "20110", "20111"],
      population: 41085
    },
    {
      name: "Gainesville",
      zipCodes: ["20155", "20156"],
      population: 11481
    },
    {
      name: "Haymarket",
      zipCodes: ["20169"],
      population: 2157
    },
    {
      name: "Dale City",
      zipCodes: ["22193"],
      population: 71210
    }
  ],
  population: 482204,
  avgSpeed: 140,
  installationCount: 225,
  landmarks: [
    "Jiffy Lube Live",
    "Manassas National Battlefield Park",
    "Potomac Mills",
    "Prince William Forest Park",
    "Virginia Gateway"
  ],
  speedTests: [
    {
      location: "Innovation Technology Park",
      downloadSpeed: 155,
      uploadSpeed: 23,
      latency: 22,
      date: "2025-08-01"
    },
    {
      location: "Woodbridge Town Center",
      downloadSpeed: 145,
      uploadSpeed: 22,
      latency: 24,
      date: "2025-08-05"
    },
    {
      location: "Rural Haymarket",
      downloadSpeed: 135,
      uploadSpeed: 20,
      latency: 25,
      date: "2025-08-10"
    }
  ],
  testimonials: [
    {
      name: "William Parker",
      city: "Gainesville",
      rating: 5,
      text: "Perfect solution for our new development. Installation was quick and the internet speed is consistently excellent.",
      date: "2025-07-08",
      installationType: "residential",
      verified: true
    },
    {
      name: "Maria Garcia",
      city: "Woodbridge",
      rating: 5,
      text: "Great service for our growing neighborhood. The team was professional and knowledgeable.",
      date: "2025-07-15",
      installationType: "residential",
      verified: true
    },
    {
      name: "John Stevens",
      city: "Haymarket",
      rating: 5,
      text: "Finally have reliable internet on our rural property. Installation was expertly done.",
      date: "2025-07-22",
      installationType: "residential",
      verified: true
    }
  ],
  competitors: [
    "Comcast",
    "Verizon Fios",
    "Cox Communications"
  ],
  faqs: [
    {
      question: "How do you handle installations in new developments?",
      answer: "We work closely with builders and developers in Prince William County's growing communities, ensuring proper installation that meets all new construction guidelines."
    },
    {
      question: "What about service in rural western Prince William?",
      answer: "Our service is particularly valuable in rural areas west of Haymarket and Gainesville where traditional internet options are limited. We ensure optimal placement for clear satellite signals."
    },
    {
      question: "Do you work with homeowners associations?",
      answer: "Yes! We're familiar with HOA requirements throughout Prince William County and handle all necessary approvals and documentation."
    }
  ],
  demographics: {
    households: 155365,
    medianIncome: 107132,
    ruralPercentage: 25
  }
};

export default function PrinceWilliamCounty() {
  return (
    <LocationPageTemplate
      {...princeWilliamData}
      description="Professional Starlink installation in Prince William County, VA. Serving Woodbridge, Manassas, Gainesville, and Haymarket. 225+ installations with average speeds of 140Mbps. Expert service for growing communities."
      metaImage="/images/locations/prince-william-county-installation.jpg"
    />
  );
}
