import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Modern Intersection Observer Hook for Scroll Effects
const useScrollReveal = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: Unobserve after first intersection for performance
          // observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin: '50px' }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold]);

  return [elementRef, isVisible] as const;
};

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
  const [headerRef, headerVisible] = useScrollReveal(0.2);
  const [cardsRef, cardsVisible] = useScrollReveal(0.1);
  const [ctaRef, ctaVisible] = useScrollReveal(0.3);

  // Framer Motion variants for smoother animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 25,
        stiffness: 100,
        duration: 0.6
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 25,
        stiffness: 100,
        duration: 0.8
      }
    }
  };

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
    <motion.section
      id="services"
      className="font-sans py-24 sm:py-32 bg-black relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-16"
          variants={headerVariants}
        >
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl leading-tight">
            Professional Starlink Installation in the DMV
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#f8f8f8]">
            Expert installation by certified professionals. Get speeds up to 250 Mbps across VA, MD & DC and expanding.
          </p>
        </motion.div>

        <motion.div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
          variants={containerVariants}
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="cursor-pointer"
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                features={service.features}
                icon={service.icon}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          ref={ctaRef}
          className="text-center"
          variants={headerVariants}
        >
          <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready for Professional Installation?
          </h3>
          <p className="mt-4 text-lg leading-8 text-[#f8f8f8] max-w-2xl mx-auto">
            Get a free consultation and quote for your Starlink installation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a 
              href="#contact" 
              className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-md transition-all duration-300 shadow-lg"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#f5f5f5",
                boxShadow: "0 10px 25px rgba(255,255,255,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get a Free Quote
            </motion.a>
            <motion.a 
              href="tel:+15719996915" 
              className="inline-block bg-white/10 border border-white/20 text-white font-semibold px-8 py-3 rounded-md transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Call Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
