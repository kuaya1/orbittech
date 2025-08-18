import React from 'react';
import { ServiceAreaSchema, PriceSpecificationSchema, OfferSchema } from './AdvancedLocationSchemas';
import { HowToSchema, VideoSchema, CourseSchema, EventSchema } from './ContentAuthoritySchemas';

// Example: Enhanced Starlink Installation Service Page
export const StarlineServicePageSchemas: React.FC = () => {
  return (
    <>
      {/* Service Area Coverage for DMV Region */}
      <ServiceAreaSchema
        serviceName="Starlink Installation"
        serviceArea={{
          name: "Washington DC Metropolitan Area",
          counties: ["Fairfax", "Arlington", "Prince William", "Loudoun", "Montgomery"],
          coordinates: {
            latitude: 38.9072,
            longitude: -77.0369
          }
        }}
        priceRange={{
          minPrice: 299,
          maxPrice: 899,
          currency: "USD"
        }}
        availability={{
          openingHours: ["Mo-Sa 08:00-18:00"],
          serviceRadius: 50
        }}
      />

      {/* Transparent Pricing Display */}
      <PriceSpecificationSchema
        serviceName="Starlink Installation"
        basePrice={499}
        priceRange={{ min: 299, max: 899 }}
        includedServices={[
          "Professional dish mounting",
          "Cable routing and concealment",
          "Network configuration",
          "Speed testing and optimization",
          "2-year installation warranty"
        ]}
        additionalOptions={[
          {
            name: "Mesh Network Setup",
            price: 199,
            description: "Whole-home Wi-Fi coverage with Starlink mesh routers"
          },
          {
            name: "Pole Mount Installation",
            price: 149,
            description: "Custom pole mounting for optimal signal reception"
          }
        ]}
      />

      {/* Limited Time Offer */}
      <OfferSchema
        offerName="Free Site Survey & Installation Consultation"
        description="Comprehensive property assessment with satellite visibility analysis and custom installation plan"
        price={0}
        availability="InStock"
        validFrom={new Date()}
        validThrough={new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)}
        eligibleRegions={["Virginia", "Maryland", "Washington DC"]}
        bookingInfo={{
          url: "https://www.theorbittech.com/contact",
          phone: "+1-703-555-0123"
        }}
      />

      {/* Installation Guide */}
      <HowToSchema
        title="Professional Starlink Installation Process"
        description="Step-by-step guide to professional Starlink satellite internet installation with optimal placement and configuration"
        image="https://www.theorbittech.com/images/starlink-installation-guide.webp"
        estimatedCost={{ currency: "USD", value: 499 }}
        totalTime="PT2H"
        steps={[
          {
            name: "Site Survey and Planning",
            text: "Conduct comprehensive property assessment to identify optimal satellite placement location with clear sky view",
            image: "https://www.theorbittech.com/images/site-survey.webp"
          },
          {
            name: "Dish Mounting and Positioning",
            text: "Securely mount Starlink dish using professional-grade mounting hardware with proper weatherproofing",
            image: "https://www.theorbittech.com/images/dish-mounting.webp"
          },
          {
            name: "Cable Installation and Routing",
            text: "Route cables through building entry points with proper sealing and concealment for clean installation",
            image: "https://www.theorbittech.com/images/cable-routing.webp"
          },
          {
            name: "Network Configuration",
            text: "Configure Starlink router and optimize network settings for maximum performance and coverage",
            image: "https://www.theorbittech.com/images/network-config.webp"
          },
          {
            name: "Testing and Optimization",
            text: "Perform comprehensive speed tests and signal optimization to ensure optimal performance",
            image: "https://www.theorbittech.com/images/speed-testing.webp"
          }
        ]}
        tools={[
          "Professional dish mounting kit",
          "Cable concealment system",
          "Weatherproofing materials",
          "Network testing equipment"
        ]}
        supplies={[
          "Starlink hardware kit",
          "Mounting brackets and hardware",
          "Ethernet cables",
          "Sealants and weatherproofing"
        ]}
      />

      {/* Installation Process Video */}
      <VideoSchema
        title="Starlink Installation: Professional Process Walkthrough"
        description="Watch our certified technicians demonstrate the complete Starlink installation process from site survey to final testing"
        videoUrl="https://www.youtube.com/watch?v=starlink-installation-demo"
        thumbnailUrl="https://www.theorbittech.com/images/installation-video-thumb.webp"
        duration="PT12M30S"
        uploadDate={new Date('2024-12-01')}
        category="Installation Tutorial"
        keywords={[
          "Starlink installation",
          "satellite internet setup",
          "professional installation",
          "DMV area",
          "The Orbit Tech"
        ]}
        transcript="Complete transcript of the professional Starlink installation process..."
      />
    </>
  );
};

// Example: Location-Specific Page (Fairfax County)
export const FairfaxCountySchemas: React.FC = () => {
  return (
    <>
      <ServiceAreaSchema
        serviceName="Satellite Internet Services"
        serviceArea={{
          name: "Fairfax County",
          counties: ["Fairfax"],
          coordinates: {
            latitude: 38.8462,
            longitude: -77.3064
          }
        }}
        priceRange={{
          minPrice: 299,
          maxPrice: 799,
          currency: "USD"
        }}
        availability={{
          openingHours: ["Mo-Sa 08:00-18:00"],
          serviceRadius: 25
        }}
      />

      <OfferSchema
        offerName="Fairfax County Special: Same-Day Installation"
        description="Emergency and same-day Starlink installation service for Fairfax County residents and businesses"
        price={599}
        availability="InStock"
        validFrom={new Date()}
        validThrough={new Date(Date.now() + 60 * 24 * 60 * 60 * 1000)}
        eligibleRegions={["Virginia"]}
        bookingInfo={{
          url: "https://www.theorbittech.com/locations/fairfax-county-starlink",
          phone: "+1-703-555-0123"
        }}
      />
    </>
  );
};

// Example: "Starlink University" Educational Content
export const StarlinkUniversitySchemas: React.FC = () => {
  return (
    <>
      {/* Course Schema for Educational Content */}
      <CourseSchema
        courseName="Starlink University: Complete Satellite Internet Mastery"
        description="Comprehensive course covering everything from basic satellite internet concepts to advanced troubleshooting and optimization"
        provider="The Orbit Tech"
        courseUrl="https://www.theorbittech.com/starlink-university"
        image="https://www.theorbittech.com/images/starlink-university.webp"
        courseMode="online"
        estimatedDuration="P4W"
        skillLevel="Beginner"
        learningOutcomes={[
          "Understand satellite internet technology fundamentals",
          "Learn optimal installation placement strategies",
          "Master network optimization techniques",
          "Troubleshoot common connectivity issues",
          "Implement advanced mesh networking solutions"
        ]}
        lessons={[
          {
            name: "Satellite Internet Fundamentals",
            description: "Introduction to Low Earth Orbit satellites and how Starlink works",
            duration: "PT45M",
            position: 1
          },
          {
            name: "Site Assessment and Planning",
            description: "How to evaluate property for optimal satellite placement",
            duration: "PT60M",
            position: 2
          },
          {
            name: "Installation Best Practices",
            description: "Professional installation techniques and common pitfalls",
            duration: "PT90M",
            position: 3
          },
          {
            name: "Network Optimization",
            description: "Advanced configuration for maximum performance",
            duration: "PT75M",
            position: 4
          }
        ]}
      />

      {/* How-To for Troubleshooting */}
      <HowToSchema
        title="Starlink Troubleshooting: Connectivity Issues"
        description="Professional troubleshooting guide for resolving common Starlink connectivity and performance issues"
        image="https://www.theorbittech.com/images/troubleshooting-guide.webp"
        totalTime="PT30M"
        steps={[
          {
            name: "Check Physical Connections",
            text: "Verify all cables are securely connected and inspect for damage or corrosion",
            image: "https://www.theorbittech.com/images/cable-check.webp"
          },
          {
            name: "Restart Starlink System",
            text: "Power cycle the Starlink router and dish using the proper shutdown sequence",
            image: "https://www.theorbittech.com/images/system-restart.webp"
          },
          {
            name: "Check for Obstructions",
            text: "Use the Starlink app to identify and clear any new obstructions in the satellite view",
            image: "https://www.theorbittech.com/images/obstruction-check.webp"
          },
          {
            name: "Run Speed Tests",
            text: "Perform multiple speed tests to establish baseline performance metrics",
            image: "https://www.theorbittech.com/images/speed-test.webp"
          }
        ]}
        tools={["Starlink mobile app", "Speed test tools", "Flashlight for inspection"]}
      />
    </>
  );
};

// Example: Business Consultation Event
export const BusinessConsultationSchemas: React.FC = () => {
  return (
    <>
      <EventSchema
        eventName="Free Business Satellite Internet Consultation"
        description="Comprehensive consultation for business satellite internet needs including multi-location connectivity and backup solutions"
        startDate={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)} // Next week
        endDate={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000 + 60 * 60 * 1000)} // 1 hour duration
        eventType="consultation"
        location={{
          type: "online",
          url: "https://www.theorbittech.com/business-consultation"
        }}
        organizer="The Orbit Tech"
        offers={{
          price: 0,
          currency: "USD",
          availability: "https://schema.org/InStock"
        }}
        attendeeCapacity={1}
        eventStatus="scheduled"
      />

      <OfferSchema
        offerName="Business Multi-Site Package"
        description="Complete satellite internet solution for businesses with multiple locations including centralized management and 24/7 support"
        price={1299}
        availability="InStock"
        validFrom={new Date()}
        validThrough={new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)}
        eligibleRegions={["Virginia", "Maryland", "Washington DC"]}
        bookingInfo={{
          url: "https://www.theorbittech.com/business-solutions",
          phone: "+1-703-555-0123"
        }}
      />
    </>
  );
};
