import React, { useState, useEffect, useRef } from 'react';

/*
* To use the "Inter" font like in the reference image, add the following
* line to the <head> section of your main public/index.html file:
*
* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap">
*
* Then, add 'Inter' to your font family in your tailwind.config.js file:
*
* const defaultTheme = require('tailwindcss/defaultTheme')
*
* module.exports = {
* theme: {
* extend: {
* fontFamily: {
* sans: ['Inter', ...defaultTheme.fontFamily.sans],
* },
* colors: {
* 'brand-dark': '#001419',
* 'brand-light': '#f8f8f8',
* }
* },
* },
* plugins: [],
* }
*
* By adding the colors to your config, you can use classes like `bg-brand-dark` and `text-brand-light`.
* For this example, I will use arbitrary values like `bg-[#001419]`.
*/


// Calcite-style SVG icons for each service card with updated blue color
const HomeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mb-4 text-blue-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.5 1.5 0 012.122 0l8.954 8.955M3 10.5V21h6V15h6v6h6v-10.5M12 2.25v2.25" />
    </svg>
);

const BusinessIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mb-4 text-blue-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6M9 11.25h6m-6 4.5h6M3.75 6.75h.008v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM20.25 6.75h.008v.008H20.25V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>
);

const MarineIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mb-4 text-blue-500">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.75v16.5M3.75 12h16.5M4.5 6.75l15 10.5M4.5 17.25L19.5 6.75" />
    </svg>
);

// The props for the ServiceCard component are updated to include an icon
interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  features,
  icon
}) => {
  return (
    // Card container: Solid black background with a border to distinguish it.
    <div className="bg-black border border-neutral-800 rounded-2xl p-8 h-full flex flex-col transition-all duration-300">

      {/* Content Area */}
      <div className="flex-grow">
        {icon}
        <h4 className="font-semibold text-white mb-4 text-lg tracking-wide">
          {title}
        </h4>
        <p className="text-[#f8f8f8] mb-6 leading-relaxed text-base font-normal">
          {description}
        </p>
        
        {/* Feature list with simple bullet points */}
        <ul className="space-y-3 mb-8 text-left">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <div className="w-1.5 h-1.5 bg-neutral-600 rounded-full mr-3 flex-shrink-0"></div>
              <span className="text-[#f8f8f8] text-sm font-normal">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button Container */}
      <div className="mt-auto">
        <a
          href="#contact"
          className="bg-white text-black font-semibold text-sm px-6 py-2.5 rounded-md w-full text-center transition-all duration-300 hover:bg-neutral-200 block"
        >
          Schedule Now
        </a>
      </div>
    </div>
  );
};

const Services = () => {
  const servicesData = [
    {
      title: "HOME INSTALLATION",
      description: "Perfect internet for your entire home, guaranteed. Expert installation with lifetime support.",
      icon: <HomeIcon />,
      features: [
        "Free site survey & speed analysis",
        "Storm-proof roof mounting system",
        "Whole-home WiFi coverage guarantee",
        "Same-day installation available",
        "Hidden cable routing included"
      ]
    },
    {
      title: "BUSINESS SOLUTIONS",
      description: "Enterprise-grade reliability for businesses that can't afford downtime.",
      icon: <BusinessIcon />,
      features: [
        "Redundant backup systems",
        "1-hour emergency response",
        "Business-grade networking",
        "Priority bandwidth allocation",
        "Commercial compliance certified"
      ]
    },
    {
      title: "MOBILE & MARINE",
      description: "Stay connected anywhere with our specialized mobile installations.",
      icon: <MarineIcon />,
      features: [
        "Military-grade mounting",
        "Custom power solutions",
        "30-minute deployment system",
        "All-weather protection",
        "GPS-optimized setup"
      ]
    }
  ];

  return (
    <section
      id="services"
      className="font-sans py-24 sm:py-32 bg-black relative overflow-hidden"
    >
      {/* CSS Animation Styles */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(32px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl leading-tight">
            Professional Starlink Installation in the DMV
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#f8f8f8]">
            Expert installation by certified professionals. Get speeds up to 250 Mbps across VA, MD & DC and expanding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="opacity-0 translate-y-8 animate-fade-in-up transform transition-all duration-700 ease-out"
              style={{ 
                animationDelay: `${index * 200}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                features={service.features}
                icon={service.icon}
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready for Professional Installation?
          </h3>
          <p className="mt-4 text-lg leading-8 text-[#f8f8f8] max-w-2xl mx-auto">
            Get a free consultation and quote for your Starlink installation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-md hover:bg-neutral-200 transition-all duration-300 shadow-lg hover:scale-105 transform"
            >
              Get a Free Quote
            </a>
            <a 
              href="tel:+15719996915" 
              className="inline-block bg-white/10 border border-white/20 text-white font-semibold px-8 py-3 rounded-md hover:bg-white/20 transition-all duration-300 hover:scale-105 transform"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
