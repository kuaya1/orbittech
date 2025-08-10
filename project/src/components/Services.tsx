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
          observer.unobserve(entry.target);
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

// Premium monochromatic icons with accent color on hover
const SatelliteIcon: React.FC<{ isPrimary?: boolean }> = ({ isPrimary }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className={isPrimary ? "w-12 h-12 text-neutral-400 group-hover:text-blue-500 transition-colors duration-300" : "w-8 h-8 text-neutral-500 group-hover:text-blue-500 transition-colors duration-300"}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>
);

const WifiIcon: React.FC = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className="w-8 h-8 text-neutral-500 group-hover:text-blue-500 transition-colors duration-300"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
  </svg>
);

const BusinessIcon: React.FC = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className="w-8 h-8 text-neutral-500 group-hover:text-blue-500 transition-colors duration-300"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
  </svg>
);

// Primary Service Card Component
interface PrimaryServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

const PrimaryServiceCard: React.FC<PrimaryServiceCardProps> = ({
  title,
  subtitle,
  description,
  features,
  icon
}) => {
  return (
    <div className="group bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 rounded-3xl p-10 lg:p-12 relative overflow-hidden transition-all duration-500 hover:border-neutral-700">
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        {/* Icon and Badge */}
        <div className="flex items-start justify-between mb-8">
          {icon}
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
            Most Popular
          </span>
        </div>

        {/* Content */}
        <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">
          {title}
        </h3>
        <p className="text-blue-400 font-medium mb-4">
          {subtitle}
        </p>
        <p className="text-neutral-300 text-lg leading-relaxed mb-8">
          {description}
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <svg className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-neutral-200 font-medium">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            aria-label="Schedule Professional Starlink Installation"
            className="inline-flex items-center justify-center bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20"
          >
            Get Free Quote
          </a>
          <a
            href="tel:+15719996915"
            aria-label="Call for Starlink Installation Quote"
            className="inline-flex items-center justify-center bg-white/5 border border-white/10 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:bg-white/10"
          >
            Call (571) 999-6915
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-neutral-800">
          <div className="flex items-center text-sm text-neutral-400">
            <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Licensed & Insured
          </div>
          <div className="flex items-center text-sm text-neutral-400">
            <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            90-Day Warranty
          </div>
          <div className="flex items-center text-sm text-neutral-400">
            <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Same-Day Service
          </div>
        </div>
      </div>
    </div>
  );
};

// Secondary Service Card Component
interface SecondaryServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

const SecondaryServiceCard: React.FC<SecondaryServiceCardProps> = ({
  title,
  description,
  features,
  icon
}) => {
  return (
    <div className="group bg-black/50 border border-neutral-800 rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:bg-neutral-900/50 hover:border-neutral-700">
      <div className="flex-grow">
        {icon}
        <h4 className="font-semibold text-white mb-3 text-xl tracking-tight">
          {title}
        </h4>
        <p className="text-neutral-400 mb-6 leading-relaxed">
          {description}
        </p>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-4 h-4 text-neutral-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-neutral-300 text-sm">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto">
        <a
          href="#contact"
          aria-label={`Learn more about ${title}`}
          className="inline-flex items-center text-blue-400 font-medium text-sm group-hover:text-blue-300 transition-colors duration-300"
        >
          Learn More
          <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const [headerRef, headerVisible] = useScrollReveal(0.2);
  const [primaryRef, primaryVisible] = useScrollReveal(0.1);
  const [secondaryRef, secondaryVisible] = useScrollReveal(0.1);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const primaryServiceData = {
    title: "Professional Starlink Installation",
    subtitle: "Expert Installation • Guaranteed Performance",
    description: "Transform your property with lightning-fast satellite internet. Our certified technicians ensure flawless installation and optimal performance, backed by our 90-day warranty.",
    icon: <SatelliteIcon isPrimary={true} />,
    features: [
      "Free site survey & analysis",
      "Storm-proof mounting system",
      "Speed optimization guarantee",
      "Same-day installation available",
      "Hidden cable routing",
      "Lifetime technical support"
    ]
  };

  const secondaryServicesData = [
    {
      title: "Whole-Home Wi-Fi Optimization",
      description: "Eliminate dead zones and maximize your Starlink speeds in every corner of your property.",
      icon: <WifiIcon />,
      features: [
        "Professional mesh network setup",
        "Complete coverage guarantee",
        "Smart device integration",
        "Network security configuration"
      ]
    },
    {
      title: "Business Solutions",
      description: "Enterprise-grade connectivity for businesses that demand reliability and performance.",
      icon: <BusinessIcon />,
      features: [
        "Priority installation scheduling",
        "Business-grade equipment",
        "1-hour emergency response",
        "Dedicated account management"
      ]
    }
  ];

  return (
    <motion.section
      id="services"
      className="py-24 sm:py-32 bg-black relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-20"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Your Complete
            <span className="block text-blue-400 mt-2">Starlink Solution</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-300">
            From site assessment to final speed test, we handle every detail. Licensed, insured, and committed to perfection in every installation.
          </p>
        </motion.div>

        {/* Primary Service - Full Width Feature */}
        <motion.div 
          ref={primaryRef}
          className="mb-16"
          variants={itemVariants}
        >
          <PrimaryServiceCard {...primaryServiceData} />
        </motion.div>

        {/* Secondary Services - Two Column Grid */}
        <motion.div 
          ref={secondaryRef}
          variants={containerVariants}
        >
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white text-center mb-4">
              Complete Connectivity Solutions
            </h3>
            <p className="text-center text-neutral-400 max-w-2xl mx-auto">
              Enhance your Starlink installation with our premium add-on services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {secondaryServicesData.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <SecondaryServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;