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
* },
* },
* plugins: [],
* }
*
*/


// A simple checkmark icon for the feature list for a cleaner look
const CheckIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-5 h-5 text-neutral-400"
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
);

// The props for the ServiceCard component remain the same
interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  features
}) => {
  return (
    // Card container: Increased glassmorphism effect with more transparency and blur
    <div className="bg-neutral-900/40 backdrop-blur-xl border border-neutral-800 rounded-2xl p-8 h-full flex flex-col transition-all duration-300">

      {/* Content Area */}
      <div className="flex-grow">
        <h4 className="font-semibold text-white mb-4 text-lg tracking-wide">
          {title}
        </h4>
        <p className="text-neutral-300 mb-6 leading-relaxed text-base font-normal">
          {description}
        </p>
        
        {/* Feature list with checkmark icons */}
        <ul className="space-y-3 mb-8 text-left">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <div className="mr-3 flex-shrink-0">
                <CheckIcon />
              </div>
              <span className="text-neutral-200 text-sm font-normal">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button Container: Updated button to be brighter */}
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
  // Scroll animation state (hooks remain the same)
  const [isVisible, setIsVisible] = useState(false);
  const [cardVisibility, setCardVisibility] = useState([false, false, false]);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Intersection Observer for scroll animations (logic remains the same)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  useEffect(() => {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.findIndex(ref => ref === entry.target);
            if (index !== -1) {
              setTimeout(() => {
                setCardVisibility(prev => {
                  const newVisibility = [...prev];
                  newVisibility[index] = true;
                  return newVisibility;
                });
              }, index * 150);
            }
          }
        });
      },
      { threshold: 0.15, rootMargin: '-20px 0px' }
    );
    cardRefs.current.forEach(ref => {
      if (ref) cardObserver.observe(ref);
    });
    return () => {
      cardRefs.current.forEach(ref => {
        if (ref) cardObserver.unobserve(ref);
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      // Updated background to pure black
      className="font-sans py-24 sm:py-32 bg-black relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header: Simplified fonts and spacing */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl leading-tight">
            Certified Starlink Installation Experts
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-400">
            Expert setups for every need: residential, commercial, and mobile/RV.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {[
            {
              title: "RESIDENTIAL",
              description: "Complete home Starlink setup with optimal placement and reliable coverage.",
              features: [
                "Site survey & consultation",
                "Professional roof mounting",
                "Wi-Fi network optimization",
                "Same-day installation",
                "Professional cable routing"
              ]
            },
            {
              title: "BUSINESS",
              description: "Enterprise Starlink deployment for maximum uptime and business continuity.",
              features: [
                "Multi-terminal configuration",
                "24/7 priority support",
                "Network infrastructure setup",
                "Bandwidth management",
                "Commercial installation"
              ]
            },
            {
              title: "MOBILE & MARINE",
              description: "Specialized mobile systems for RVs, boats, and remote work locations.",
              features: [
                "Stabilized mounting systems",
                "12V power integration",
                "Quick-deploy setup",
                "Marine weatherproofing",
                "Portable configurations"
              ]
            }
          ].map((service, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={`transform transition-all duration-700 ease-out ${
                cardVisibility[index] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                features={service.features}
              />
            </div>
          ))}
        </div>

        {/* CTA section: Increased glassmorphism effect */}
        <div className={`transition-all duration-1000 delay-300 ${ isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10' }`}>
            <div className="relative group bg-neutral-900/40 backdrop-blur-xl border border-neutral-800 rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto text-center overflow-hidden">
                {/* Subtle hover effect for the border */}
                <div className="absolute -inset-px rounded-2xl border border-transparent group-hover:border-neutral-700 transition-all duration-300" aria-hidden="true"></div>
                
                <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Ready for Professional Installation?
                </h3>
                <p className="mt-4 text-lg leading-8 text-neutral-300 max-w-2xl mx-auto">
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

      </div>
    </section>
  );
};

export default Services;
