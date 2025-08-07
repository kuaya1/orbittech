import React from 'react';
import { Helmet } from 'react-helmet-async';

interface LocationSchemaProps {
  location: string;
  state: string;
  zipCodes?: string[];
  serviceRadius?: number;
  phone?: string;
  email?: string;
  businessHours?: {
    open: string;
    close: string;
    days: string[];
  }[];
  additionalServices?: string[];
  nearbyAreas?: string[];
}

/**
 * LocationSchema component for local SEO optimization
 * Generates location-specific JSON-LD structured data
 */
const LocationSchema: React.FC<LocationSchemaProps> = ({
  location,
  state,
  zipCodes = [],
  serviceRadius = 25,
  phone = "+1-571-999-6915",
  email = "contact@theorbittech.com",
  businessHours = [
    { open: "08:00", close: "18:00", days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] },
    { open: "09:00", close: "17:00", days: ["Saturday"] }
  ],
  additionalServices = ["Starlink Troubleshooting", "Network Optimization", "Equipment Maintenance"],
  nearbyAreas = []
}) => {
  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://theorbittech.com/locations/${location.toLowerCase()}-${state.toLowerCase()}`,
    "name": `The Orbit Tech - Starlink Installation ${location}, ${state}`,
    "description": `Professional Starlink satellite internet installation services in ${location}, ${state}. Expert setup, same-day service, and 5-star customer reviews. ${nearbyAreas.length > 0 ? `Also serving ${nearbyAreas.join(', ')}.` : ''}`,
    "url": `https://theorbittech.com/locations/${location.toLowerCase()}-${state.toLowerCase()}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://theorbittech.com/locations/${location.toLowerCase()}-${state.toLowerCase()}`
    },
    "telephone": phone,
    "email": email,
    "priceRange": "$$$",
    "image": "https://theorbittech.com/starlink-installation-team.jpg",
    "logo": "https://theorbittech.com/Starlink Dmv (33).png",
    "serviceType": "Starlink & Satellite Internet Installation",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": location,
      "addressRegion": state,
      "addressCountry": "US",
      "postalCode": zipCodes.length > 0 ? zipCodes.join(", ") : undefined
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": getLocationCoordinates(location, state).lat,
        "longitude": getLocationCoordinates(location, state).lng
      },
      "geoRadius": `${serviceRadius} miles`
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": getLocationCoordinates(location, state).lat,
      "longitude": getLocationCoordinates(location, state).lng
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Starlink Installation Services in ${location}, ${state}`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `Residential Starlink Installation - ${location}, ${state}`,
            "description": `Professional home Starlink setup in ${location}`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `Commercial Starlink Installation - ${location}, ${state}`,
            "description": `Business satellite internet installation in ${location}`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `Starlink Troubleshooting - ${location}, ${state}`,
            "description": `Expert Starlink repair and optimization services`
          }
        },
        ...additionalServices.map(service => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `${service} - ${location}, ${state}`,
            "description": `Professional ${service.toLowerCase()} in ${location}`
          }
        }))
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "147",
      "bestRating": "5",
      "worstRating": "1"
    },
    "openingHoursSpecification": businessHours.map(hours => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": hours.days,
      "opens": hours.open,
      "closes": hours.close
    })),
    "sameAs": [
      "https://www.facebook.com/theorbittech",
      "https://www.linkedin.com/company/the-orbit-tech",
      "https://twitter.com/theorbittech"
    ],
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `https://theorbittech.com/contact?location=${location}&service=starlink-installation`,
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      "result": {
        "@type": "Reservation",
        "name": `Starlink Installation Appointment in ${location}`
      }
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(locationSchema)}
      </script>
    </Helmet>
  );
};

// Helper function to get coordinates for different locations
function getLocationCoordinates(location: string, state: string): { lat: string; lng: string } {
  const coordinates: Record<string, { lat: string; lng: string }> = {
    'fairfax-va': { lat: '38.8462', lng: '-77.3064' },
    'montgomery-md': { lat: '39.1547', lng: '-77.2405' },
    'arlington-va': { lat: '38.8816', lng: '-77.0910' },
    'alexandria-va': { lat: '38.8048', lng: '-77.0469' },
    'loudoun-va': { lat: '39.0438', lng: '-77.4874' },
    'prince-william-va': { lat: '38.7312', lng: '-77.4605' },
    'rockville-md': { lat: '39.0840', lng: '-77.1528' },
    'bethesda-md': { lat: '38.9847', lng: '-77.1500' },
    'washington-dc': { lat: '38.9072', lng: '-77.0369' }
  };

  const key = `${location.toLowerCase()}-${state.toLowerCase()}`;
  return coordinates[key] || { lat: '38.9338', lng: '-77.2297' }; // Default to McLean, VA
}

export default LocationSchema;
