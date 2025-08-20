import React from 'react';
import LocationPageTemplate from '@/components/location/LocationPageTemplate';
import type { LocationData } from '@/types/location';

const fairfaxData: LocationData = {
  county: "Fairfax County",
  state: "VA",
  cities: [
    {
      name: "McLean",
      zipCodes: ["22101", "22102", "22103"],
      population: 48115
    },
    {
      name: "Vienna",
      zipCodes: ["22180", "22181", "22182"],
      population: 16489
    },
    {
      name: "Reston",
      zipCodes: ["20190", "20191", "20194"],
      population: 58404
    },
    {
      name: "Herndon",
      zipCodes: ["20170", "20171"],
      population: 24601
    },
    {
      name: "Fairfax",
      zipCodes: ["22030", "22031", "22032"],
      population: 24146
    }
  ],
  population: 1147532,
  avgSpeed: 145,
  installationCount: 425,
  landmarks: [
    "Tysons Corner Center",
    "Reston Town Center",
    "Wolf Trap National Park",
    "Meadowlark Botanical Gardens",
    "Great Falls Park"
  ],
  speedTests: [
    {
      location: "Tysons Business District",
      downloadSpeed: 165,
      uploadSpeed: 25,
      latency: 21,
      date: "2025-08-01"
    },
    {
      location: "Reston Town Center",
      downloadSpeed: 155,
      uploadSpeed: 23,
      latency: 23,
      date: "2025-08-05"
    },
    {
      location: "Great Falls",
      downloadSpeed: 140,
      uploadSpeed: 20,
      latency: 25,
      date: "2025-08-10"
    }
  ],
  testimonials: [
    {
      name: "David Kim",
      city: "McLean",
      rating: 5,
      text: "Exceptional service for our home office setup. The team was professional and the internet speed is perfect for video conferencing.",
      date: "2025-07-10",
      installationType: "residential",
      verified: true
    },
    {
      name: "Jennifer Lee",
      city: "Reston",
      rating: 5,
      text: "Great experience with installation in our tech office. They understood our requirements for reliable connectivity.",
      date: "2025-07-18",
      installationType: "business",
      verified: true
    },
    {
      name: "Thomas Wilson",
      city: "Vienna",
      rating: 5,
      text: "Perfect solution for our suburban home. Installation was quick and the team was very knowledgeable.",
      date: "2025-07-25",
      installationType: "residential",
      verified: true
    }
  ],
  competitors: [
    "Cox Communications",
    "Verizon Fios",
    "Comcast Business"
  ],
  faqs: [
    {
      question: "How do you handle HOA approvals in Fairfax County?",
      answer: "We work directly with HOAs in Fairfax County and are familiar with local regulations. We'll handle all necessary approvals and ensure installations meet community guidelines."
    },
    {
      question: "What makes Starlink different from fiber options in Fairfax?",
      answer: "While Fairfax has good fiber coverage, Starlink offers unique advantages: no ground infrastructure needed, flexible installation locations, and excellent speeds even in areas where fiber isn't available."
    },
    {
      question: "Do you offer business installations in Tysons and Reston?",
      answer: "Yes! We specialize in business installations throughout Fairfax's tech corridors, offering dedicated support and optimized setups for corporate environments."
    }
  ],
  demographics: {
    households: 419522,
    medianIncome: 124831,
    ruralPercentage: 15
  }
};

export default function FairfaxCounty() {
  return (
    <LocationPageTemplate
      {...fairfaxData}
      description="Professional Starlink installation in Fairfax County, VA. Serving Tysons, Reston, McLean, and more. 425+ installations with average speeds of 145Mbps. Expert service for homes and businesses."
      metaImage="/images/locations/fairfax-county-installation.jpg"
    />
  );
}
