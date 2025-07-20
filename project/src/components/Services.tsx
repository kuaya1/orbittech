import React, { useState, useEffect, useRef } from 'react';
import { ShootingStars } from './ui/shooting-stars';
import { StarsBackground } from './ui/star-backround';

// Define the updated type for the ServiceCard props
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
    // Card container: Solid black background with darker borders
    <div className="bg-black border border-neutral-800 hover:border-neutral-600 rounded-xl p-8 h-full flex flex-col shadow-2xl shadow-black/40 transition-all duration-300 hover:shadow-neutral-500/20 group">

      {/* Content Area */}
      <div className="flex-grow">
        <h4 className="font-bold text-white mb-6 text-xl uppercase tracking-widest group-hover:text-gray-100 transition-colors duration-300">
          {title}
        </h4>
        <p className="text-gray-100 mb-8 leading-relaxed text-lg font-normal">
          {description}
        </p>
        
        {/* Feature list */}
        <ul className="space-y-4 mb-8 text-left">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start group-hover:translate-x-1 transition-transform duration-300">
              <div className="w-3 h-3 bg-white rounded-full mr-4 flex-shrink-0 mt-1.5 group-hover:bg-gray-100 transition-colors duration-300"></div>
              <span className="text-gray-200 leading-relaxed text-base font-normal group-hover:text-white transition-colors duration-300">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button Container: Pushed to the bottom of the card */}
      <div className="mt-auto">
        <a
          href="#contact"
          className="bg-white text-black font-black uppercase text-sm px-6 py-3 rounded-lg w-full text-center transition-all duration-300 hover:scale-105 hover:bg-neutral-200 hover:shadow-lg block tracking-wider group-hover:shadow-white/20"
        >
          Schedule Now
        </a>
      </div>
    </div>
  );
};

const Services = () => {
  // Scroll animation state
  const [isVisible, setIsVisible] = useState(false);
  const [cardVisibility, setCardVisibility] = useState([false, false, false]);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Mobile-optimized card animations
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
              }, index * 150); // Staggered animation delay
            }
          }
        });
      },
      { 
        threshold: 0.15,
        rootMargin: '-20px 0px'
      }
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
      className="pt-32 pb-20 md:pt-40 md:pb-20 bg-black relative overflow-hidden"
    >
      {/* Shooting Stars Background */}
      <ShootingStars />
      <StarsBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header (enhanced) */}
        <div className={`text-center max-w-4xl mx-auto mb-20 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-8 leading-tight tracking-tight drop-shadow-lg">
            Certified Starlink Installation Experts
          </h2>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto font-semibold drop-shadow-md">
            Expert setups for every need: residential, commercial, and mobile/RV.
          </p>
        </div>

        {/* Service Cards Grid with mobile-optimized animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
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
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                features={service.features}
              />
            </div>
          ))}
        </div>

        {/* CTA section (enhanced) */}
        <div className={`text-center transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="bg-neutral-900/55 backdrop-blur-sm border border-neutral-800 hover:border-neutral-600 rounded-2xl p-12 max-w-4xl mx-auto shadow-2xl shadow-black/40 transition-all duration-300 hover:shadow-neutral-500/20">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight drop-shadow-lg">
              Ready for Professional Installation?
            </h3>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto font-semibold drop-shadow-md">
              Get a free consultation and quote for your Starlink installation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-white text-black font-black px-8 py-4 rounded-lg hover:scale-105 transition-transform duration-300 tracking-widest shadow-lg hover:shadow-white/20">
                GET QUOTE
              </a>
              <a href="tel:+15719996915" className="bg-neutral-800/70 border-2 border-neutral-600 hover:bg-neutral-700 hover:border-neutral-500 text-white font-black px-8 py-4 rounded-lg hover:scale-105 transition-all duration-300 tracking-widest shadow-lg hover:shadow-neutral-400/20">
                CALL (571) 999-6915
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;