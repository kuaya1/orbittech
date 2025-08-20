import React from 'react';
import LocationPageTemplate from '@/components/location/LocationPageTemplate';
import type { LocationData } from '@/types/location';

const loudounData: LocationData = {
  county: "Loudoun County",
  state: "VA",
  cities: [
    {
      name: "Leesburg",
      zipCodes: ["20175", "20176"],
      population: 53727
    },
    {
      name: "Ashburn",
      zipCodes: ["20147", "20148"],
      population: 43511
    },
    {
      name: "Sterling",
      zipCodes: ["20164", "20165", "20166"],
      population: 27822
    },
    {
      name: "Purcellville",
      zipCodes: ["20132"],
      population: 10196
    },
    {
      name: "Middleburg",
      zipCodes: ["20117"],
      population: 828
    }
  ],
  population: 420959,
  avgSpeed: 150,
  installationCount: 275,
  landmarks: [
    "Dulles International Airport",
    "One Loudoun",
    "Leesburg Premium Outlets",
    "Morven Park",
    "Ida Lee Park"
  ],
  speedTests: [
    {
      location: "Ashburn Data Center Corridor",
      downloadSpeed: 175,
      uploadSpeed: 25,
      latency: 20,
      date: "2025-08-01"
    },
    {
      location: "Leesburg Historic District",
      downloadSpeed: 145,
      uploadSpeed: 22,
      latency: 25,
      date: "2025-08-05"
    },
    {
      location: "Sterling Tech Park",
      downloadSpeed: 160,
      uploadSpeed: 24,
      latency: 22,
      date: "2025-08-10"
    }
  ],
  testimonials: [
    {
      name: "Michael Chen",
      city: "Ashburn",
      rating: 5,
      text: "Perfect installation for our tech company. The team understood our needs for reliable, high-speed internet in the data center corridor.",
      date: "2025-07-15",
      installationType: "business",
      verified: true
    },
    {
      name: "Sarah Williams",
      city: "Leesburg",
      rating: 5,
      text: "Great service in our historic Leesburg home. They were careful with the property and found the perfect spot for maximum coverage.",
      date: "2025-07-22",
      installationType: "residential",
      verified: true
    },
    {
      name: "Robert Martinez",
      city: "Purcellville",
      rating: 5,
      text: "Finally have reliable internet on our farm! Installation was quick and the team was knowledgeable about rural setups.",
      date: "2025-08-01",
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
      question: "How long does Starlink installation take in Loudoun County?",
      answer: "Most installations in Loudoun County take 2-4 hours. We handle all necessary permits and HOA approvals common in planned communities like Ashburn Village or Lansdowne."
    },
    {
      question: "Do you service rural areas in Loudoun County?",
      answer: "Yes! We specialize in rural installations, particularly in western Loudoun areas like Purcellville, Round Hill, and Middleburg where traditional internet options are limited."
    },
    {
      question: "What speeds can I expect in Loudoun County?",
      answer: "Our Loudoun County customers typically see download speeds of 150-200 Mbps. Speeds are particularly strong near our Ashburn data center corridor."
    }
  ],
  demographics: {
    households: 139018,
    medianIncome: 142299,
    ruralPercentage: 33
  }
};

export default function LoudounCounty() {
  return (
    <LocationPageTemplate
      {...loudounData}
      description="Expert Starlink installation in Loudoun County, VA. From tech corridors in Ashburn to historic Leesburg and rural Purcellville. 275+ successful installations with average speeds of 150Mbps."
      metaImage="/images/locations/loudoun-county-installation.jpg"
    />
  );
}
