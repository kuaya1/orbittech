import React from 'react';
import LocationPageTemplate from '@/components/location/LocationPageTemplate';
import type { LocationData } from '@/types/location';

const frederickData: LocationData = {
  county: "Frederick County",
  state: "MD",
  cities: [
    {
      name: "Frederick",
      zipCodes: ["21701", "21702", "21703"],
      population: 78171
    },
    {
      name: "Brunswick",
      zipCodes: ["21716"],
      population: 6491
    },
    {
      name: "Mount Airy",
      zipCodes: ["21771"],
      population: 9458
    },
    {
      name: "Urbana",
      zipCodes: ["21704"],
      population: 11788
    },
    {
      name: "Middletown",
      zipCodes: ["21769"],
      population: 4792
    }
  ],
  population: 271717,
  avgSpeed: 135,
  installationCount: 175,
  landmarks: [
    "Catoctin Mountain Park",
    "Carroll Creek Linear Park",
    "Monocacy National Battlefield",
    "Cunningham Falls State Park",
    "Frederick Municipal Airport"
  ],
  speedTests: [
    {
      location: "Frederick Downtown",
      downloadSpeed: 145,
      uploadSpeed: 22,
      latency: 24,
      date: "2025-08-01"
    },
    {
      location: "Urbana Tech Park",
      downloadSpeed: 140,
      uploadSpeed: 21,
      latency: 25,
      date: "2025-08-05"
    },
    {
      location: "Mount Airy Rural",
      downloadSpeed: 130,
      uploadSpeed: 20,
      latency: 26,
      date: "2025-08-10"
    }
  ],
  testimonials: [
    {
      name: "Andrew Miller",
      city: "Frederick",
      rating: 5,
      text: "Excellent installation service in our historic downtown building. They were careful with the architecture and found a discrete mounting location.",
      date: "2025-07-01",
      installationType: "business",
      verified: true
    },
    {
      name: "Rachel Cooper",
      city: "Mount Airy",
      rating: 5,
      text: "Perfect for our farm property. Finally have reliable internet for our home office and smart farming equipment.",
      date: "2025-07-08",
      installationType: "residential",
      verified: true
    },
    {
      name: "Daniel White",
      city: "Urbana",
      rating: 5,
      text: "Great service in our new development. The team was professional and the internet speed exceeds our expectations.",
      date: "2025-07-15",
      installationType: "residential",
      verified: true
    }
  ],
  competitors: [
    "Xfinity",
    "Verizon Fios",
    "Antietam Broadband"
  ],
  faqs: [
    {
      question: "How do you handle installations in historic Frederick?",
      answer: "We work closely with the Historic Preservation Commission to ensure installations meet all guidelines while maintaining the integrity of historic buildings."
    },
    {
      question: "What about service in agricultural areas?",
      answer: "Our service is ideal for Frederick County's farms and rural properties. We can provide coverage for smart farming equipment and home internet needs."
    },
    {
      question: "Do you handle mountain terrain installations?",
      answer: "Yes! We're experienced with installations in Frederick County's varied terrain, including the Catoctin Mountain area and other elevated locations."
    }
  ],
  demographics: {
    households: 96120,
    medianIncome: 93700,
    ruralPercentage: 40
  }
};

export default function FrederickCounty() {
  return (
    <LocationPageTemplate
      {...frederickData}
      description="Expert Starlink installation in Frederick County, MD. Serving Frederick City, Mount Airy, Brunswick, and rural communities. 175+ installations with average speeds of 135Mbps. Maryland-certified installers."
      metaImage="/images/locations/frederick-county-installation.jpg"
    />
  );
}
