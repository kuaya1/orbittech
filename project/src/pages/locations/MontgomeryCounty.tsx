import React from 'react';
import LocationPageTemplate from '@/components/location/LocationPageTemplate';
import type { LocationData } from '@/types/location';

const montgomeryData: LocationData = {
  county: "Montgomery County",
  state: "MD",
  cities: [
    {
      name: "Rockville",
      zipCodes: ["20850", "20851", "20852"],
      population: 67117
    },
    {
      name: "Bethesda",
      zipCodes: ["20814", "20816", "20817"],
      population: 63195
    },
    {
      name: "Germantown",
      zipCodes: ["20874", "20876"],
      population: 91249
    },
    {
      name: "Silver Spring",
      zipCodes: ["20901", "20902", "20904"],
      population: 81816
    },
    {
      name: "Gaithersburg",
      zipCodes: ["20877", "20878", "20879"],
      population: 69657
    }
  ],
  population: 1062061,
  avgSpeed: 155,
  installationCount: 350,
  landmarks: [
    "National Institutes of Health",
    "Rock Creek Regional Park",
    "Brookside Gardens",
    "Strathmore Music Center",
    "Montgomery College"
  ],
  speedTests: [
    {
      location: "Bethesda Row",
      downloadSpeed: 170,
      uploadSpeed: 25,
      latency: 20,
      date: "2025-08-01"
    },
    {
      location: "Rockville Town Square",
      downloadSpeed: 160,
      uploadSpeed: 24,
      latency: 22,
      date: "2025-08-05"
    },
    {
      location: "Germantown Tech Corridor",
      downloadSpeed: 165,
      uploadSpeed: 25,
      latency: 21,
      date: "2025-08-10"
    }
  ],
  testimonials: [
    {
      name: "Emily Chang",
      city: "Bethesda",
      rating: 5,
      text: "Outstanding installation service for our medical office. Critical for our telemedicine needs.",
      date: "2025-07-05",
      installationType: "business",
      verified: true
    },
    {
      name: "James Thompson",
      city: "Rockville",
      rating: 5,
      text: "Professional team that understood Maryland regulations. Perfect for our home office setup.",
      date: "2025-07-12",
      installationType: "residential",
      verified: true
    },
    {
      name: "Lisa Rodriguez",
      city: "Silver Spring",
      rating: 5,
      text: "Great experience with the installation. The team was knowledgeable about local codes and HOA requirements.",
      date: "2025-07-20",
      installationType: "residential",
      verified: true
    }
  ],
  competitors: [
    "Xfinity",
    "Verizon Fios",
    "RCN"
  ],
  faqs: [
    {
      question: "How do you handle Maryland-specific regulations?",
      answer: "We're fully versed in Maryland's telecommunications regulations and work closely with local authorities to ensure all installations meet state and county requirements."
    },
    {
      question: "Can Starlink be installed in historic areas like Bethesda?",
      answer: "Yes! We have experience working with historic district requirements and can provide discrete installations that meet preservation guidelines."
    },
    {
      question: "What about trees and coverage in Montgomery County?",
      answer: "We conduct thorough site surveys to find the optimal installation location, working around Montgomery County's extensive tree coverage while maintaining excellent signal strength."
    }
  ],
  demographics: {
    households: 375905,
    medianIncome: 108820,
    ruralPercentage: 10
  }
};

export default function MontgomeryCounty() {
  return (
    <LocationPageTemplate
      {...montgomeryData}
      description="Expert Starlink installation in Montgomery County, MD. Serving Bethesda, Rockville, Silver Spring, and beyond. 350+ installations with average speeds of 155Mbps. Maryland-certified installers."
      metaImage="/images/locations/montgomery-county-installation.jpg"
    />
  );
}
