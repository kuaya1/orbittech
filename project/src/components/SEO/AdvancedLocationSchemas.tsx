import React from 'react';
import { useSchemaRegistration } from './CentralizedSchemaManager';

interface ServiceAreaSchemaProps {
  serviceName: string;
  serviceArea: {
    name: string;
    counties: string[];
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
  priceRange?: {
    minPrice: number;
    maxPrice: number;
    currency: string;
  };
  availability?: {
    openingHours: string[];
    serviceRadius: number; // in miles
  };
}

export const ServiceAreaSchema: React.FC<ServiceAreaSchemaProps> = ({
  serviceName,
  serviceArea,
  priceRange,
  availability
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://www.theorbittech.com/services/${serviceName.toLowerCase().replace(/\s+/g, '-')}#servicearea`,
    "name": `${serviceName} - ${serviceArea.name}`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "The Orbit Tech",
      "url": "https://www.theorbittech.com"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": serviceArea.coordinates.latitude,
        "longitude": serviceArea.coordinates.longitude
      },
      "geoRadius": availability?.serviceRadius || 50,
      "name": serviceArea.name,
      "containedInPlace": serviceArea.counties.map(county => ({
        "@type": "AdministrativeArea",
        "name": `${county} County`,
        "containedInPlace": {
          "@type": "State",
          "name": "Virginia"
        }
      }))
    },
    ...(priceRange && {
      "offers": {
        "@type": "Offer",
        "priceCurrency": priceRange.currency,
        "price": `${priceRange.minPrice}-${priceRange.maxPrice}`,
        "priceSpecification": {
          "@type": "PriceSpecification",
          "minPrice": priceRange.minPrice,
          "maxPrice": priceRange.maxPrice,
          "priceCurrency": priceRange.currency,
          "valueAddedTaxIncluded": false
        },
        "availability": "https://schema.org/InStock",
        "validThrough": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()
      }
    }),
    ...(availability && {
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      }
    }),
    "serviceType": serviceName,
    "description": `Professional ${serviceName} services in ${serviceArea.name}, covering ${serviceArea.counties.join(', ')} counties with expert installation and support.`
  };

  useSchemaRegistration('servicearea', schemaData);

  return null; // Schema only component
};

interface LocalBusinessLocationSchemaProps {
  locationName: string;
  address: {
    streetAddress: string;
    city: string;
    state: string;
    postalCode: string;
  };
  coordinates: {
    latitude: number;
    longitude: number;
  };
  contactInfo: {
    phone: string;
    email: string;
  };
  services: string[];
  operatingHours: {
    [key: string]: { open: string; close: string; };
  };
}

export const LocalBusinessLocationSchema: React.FC<LocalBusinessLocationSchemaProps> = ({
  locationName,
  address,
  coordinates,
  contactInfo,
  services,
  operatingHours
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://www.theorbittech.com/locations/${locationName.toLowerCase().replace(/\s+/g, '-')}#localbusiness`,
    "name": `The Orbit Tech - ${locationName}`,
    "image": "https://www.theorbittech.com/images/orbit-tech-team.webp",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.streetAddress,
      "addressLocality": address.city,
      "addressRegion": address.state,
      "postalCode": address.postalCode,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": coordinates.latitude,
      "longitude": coordinates.longitude
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": contactInfo.phone,
        "contactType": "customer service",
        "areaServed": "US-VA",
        "availableLanguage": "English"
      },
      {
        "@type": "ContactPoint",
        "email": contactInfo.email,
        "contactType": "customer support",
        "areaServed": "US-VA"
      }
    ],
    "openingHoursSpecification": Object.entries(operatingHours).map(([day, hours]) => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": day,
      "opens": hours.open,
      "closes": hours.close
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Satellite Internet Services",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "name": service,
        "description": `Professional ${service} in ${locationName}`,
        "seller": {
          "@id": "https://www.theorbittech.com/#business"
        }
      }))
    },
    "url": `https://www.theorbittech.com/locations/${locationName.toLowerCase().replace(/\s+/g, '-')}`,
    "priceRange": "$$",
    "paymentAccepted": "Cash, Credit Card, Check, Financing Available"
  };

  useSchemaRegistration('localbusiness', schemaData);

  return null; // Schema only component
};

interface PriceSpecificationSchemaProps {
  serviceName: string;
  basePrice: number;
  priceRange: {
    min: number;
    max: number;
  };
  includedServices: string[];
  additionalOptions?: {
    name: string;
    price: number;
    description: string;
  }[];
}

export const PriceSpecificationSchema: React.FC<PriceSpecificationSchemaProps> = ({
  serviceName,
  basePrice,
  priceRange,
  includedServices,
  additionalOptions = []
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Offer",
    "@id": `https://www.theorbittech.com/services/${serviceName.toLowerCase().replace(/\s+/g, '-')}#pricing`,
    "name": `${serviceName} - Professional Installation`,
    "description": `Complete ${serviceName} service including ${includedServices.join(', ')}`,
    "price": basePrice,
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": basePrice,
      "minPrice": priceRange.min,
      "maxPrice": priceRange.max,
      "priceCurrency": "USD",
      "valueAddedTaxIncluded": false,
      "eligibleQuantity": {
        "@type": "QuantitativeValue",
        "value": 1,
        "unitCode": "C62" // Installation unit
      }
    },
    "itemOffered": {
      "@type": "Service",
      "name": serviceName,
      "description": `Professional ${serviceName} with warranty and support`,
      "category": "Satellite Internet Installation"
    },
    "includedServices": includedServices.map(service => ({
      "@type": "Service",
      "name": service
    })),
    ...(additionalOptions.length > 0 && {
      "addOn": additionalOptions.map(option => ({
        "@type": "Offer",
        "name": option.name,
        "description": option.description,
        "price": option.price,
        "priceCurrency": "USD"
      }))
    }),
    "availability": "https://schema.org/InStock",
    "validThrough": new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
    "seller": {
      "@id": "https://www.theorbittech.com/#business"
    },
    "warranty": {
      "@type": "WarrantyPromise",
      "durationOfWarranty": {
        "@type": "Duration",
        "value": "P2Y" // 2 years
      },
      "warrantyScope": "Full installation warranty with free service calls"
    }
  };

  useSchemaRegistration('pricing', schemaData);

  return null; // Schema only component
};

interface OfferSchemaProps {
  offerName: string;
  description: string;
  price: number;
  availability: 'InStock' | 'OutOfStock' | 'PreOrder';
  validFrom: Date;
  validThrough: Date;
  eligibleRegions: string[];
  bookingInfo?: {
    url: string;
    phone: string;
  };
}

export const OfferSchema: React.FC<OfferSchemaProps> = ({
  offerName,
  description,
  price,
  availability,
  validFrom,
  validThrough,
  eligibleRegions,
  bookingInfo
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Offer",
    "@id": `https://www.theorbittech.com/offers/${offerName.toLowerCase().replace(/\s+/g, '-')}#offer`,
    "name": offerName,
    "description": description,
    "price": price,
    "priceCurrency": "USD",
    "availability": `https://schema.org/${availability}`,
    "validFrom": validFrom.toISOString(),
    "validThrough": validThrough.toISOString(),
    "eligibleRegion": eligibleRegions.map(region => ({
      "@type": "State",
      "name": region
    })),
    "category": "Satellite Internet Installation",
    "seller": {
      "@id": "https://www.theorbittech.com/#business"
    },
    ...(bookingInfo && {
      "potentialAction": [
        {
          "@type": "ReserveAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": bookingInfo.url,
            "inLanguage": "en-US",
            "actionPlatform": [
              "http://schema.org/DesktopWebPlatform",
              "http://schema.org/MobileWebPlatform"
            ]
          },
          "result": {
            "@type": "Reservation",
            "name": `${offerName} Booking`
          }
        },
        {
          "@type": "ContactAction",
          "target": {
            "@type": "ContactPoint",
            "telephone": bookingInfo.phone,
            "contactType": "reservations"
          }
        }
      ]
    })
  };

  useSchemaRegistration('offer', schemaData);

  return null; // Schema only component
};

// Enhanced location service schema with precise coordinates
interface EnhancedLocationServiceSchemaProps {
  locationName: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  serviceRadius: number; // in miles
  services: {
    name: string;
    description: string;
    priceRange: { min: number; max: number; };
    duration: string; // ISO 8601 duration
  }[];
  specializations: string[];
  contactInfo: {
    phone: string;
    email: string;
    localNumber?: string; // Local phone number for this area
  };
}

export const EnhancedLocationServiceSchema: React.FC<EnhancedLocationServiceSchemaProps> = ({
  locationName,
  coordinates,
  serviceRadius,
  services,
  specializations,
  contactInfo
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://www.theorbittech.com/locations/${locationName.toLowerCase().replace(/\s+/g, '-')}#enhancedservice`,
    "name": `Satellite Internet Services - ${locationName}`,
    "description": `Professional satellite internet installation and support services in ${locationName}, specializing in ${specializations.join(', ')}`,
    "provider": {
      "@id": "https://www.theorbittech.com/#business"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": coordinates.latitude,
        "longitude": coordinates.longitude,
        "name": locationName
      },
      "geoRadius": serviceRadius
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${locationName} Service Catalog`,
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "name": service.name,
        "description": service.description,
        "priceSpecification": {
          "@type": "PriceSpecification",
          "minPrice": service.priceRange.min,
          "maxPrice": service.priceRange.max,
          "priceCurrency": "USD"
        },
        "estimatedDuration": service.duration,
        "areaServed": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": coordinates.latitude,
            "longitude": coordinates.longitude
          },
          "geoRadius": serviceRadius
        }
      }))
    },
    "serviceType": specializations,
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": contactInfo.phone,
        "contactType": "customer service",
        "areaServed": locationName,
        "availableLanguage": "English",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "08:00",
          "closes": "18:00"
        }
      },
      ...(contactInfo.localNumber ? [{
        "@type": "ContactPoint",
        "telephone": contactInfo.localNumber,
        "contactType": "local service",
        "areaServed": locationName,
        "availableLanguage": "English"
      }] : []),
      {
        "@type": "ContactPoint",
        "email": contactInfo.email,
        "contactType": "customer support",
        "areaServed": locationName
      }
    ],
    "url": `https://www.theorbittech.com/locations/${locationName.toLowerCase().replace(/\s+/g, '-')}`,
    "category": "Satellite Internet Installation"
  };

  useSchemaRegistration('enhancedlocationservice', schemaData);

  return null; // Schema only component
};
