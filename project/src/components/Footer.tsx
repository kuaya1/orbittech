import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

// Precision Intersection Observer for orchestrated reveal
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

const Footer = () => {
  const year = new Date().getFullYear();
  const [containerRef, isVisible] = useScrollReveal(0.15);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Subtle parallax effect for premium feel
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
  };

  // Transform mouse position for gradient tracking
  const gradientX = useTransform(mouseX, [0, 1400], [0, 100]);
  const gradientY = useTransform(mouseY, [0, 600], [0, 100]);

  // Orchestrated entrance animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: 0.3
      }
    }
  };

  const FooterLink = ({ href, children, external = false }: { href: string; children: React.ReactNode; external?: boolean }) => (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="text-neutral-400 hover:text-white transition-all duration-300 text-sm font-light group inline-block"
      whileHover={{ x: 2 }}
    >
      {children}
    </motion.a>
  );

  return (
    <motion.footer
      ref={containerRef}
      className="relative overflow-hidden isolate"
      onMouseMove={handleMouseMove}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Layered background system for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
      
      {/* Spotlight effect - tracks mouse subtly */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{
          background: useTransform(
            [gradientX, gradientY],
            ([x, y]) => `radial-gradient(circle 1000px at ${x}% ${y}%, rgba(59, 130, 246, 0.05), transparent 50%)`
          )
        }}
      />
      
      {/* Grid pattern overlay for technical authority */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />

      {/* Top accent line */}
      <motion.div 
        variants={lineVariants}
        className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent origin-center"
      />

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Brand Column - Wider */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
            <div>
              <img 
                src="/Starlink Dmv (33).png" 
                alt="The Orbit Tech" 
                className="h-10 w-auto mb-6 opacity-90"
              />
              <p className="text-neutral-400 text-sm leading-relaxed max-w-sm font-light">
                Professional Starlink installation experts serving the DMV region. 
                Connecting you to the future of internet with precision and expertise.
              </p>
            </div>
            
            {/* Contact Info - Minimal */}
            <div className="space-y-2.5 text-sm">
              <a 
                href="tel:+15719996915" 
                className="flex items-center text-neutral-400 hover:text-white transition-colors duration-300 font-light"
              >
                <span className="text-blue-500 mr-3 text-xs">●</span>
                (571) 999-6915
              </a>
              <a 
                href="mailto:contact@theorbittech.com" 
                className="flex items-center text-neutral-400 hover:text-white transition-colors duration-300 font-light"
              >
                <span className="text-blue-500 mr-3 text-xs">●</span>
                contact@theorbittech.com
              </a>
              <div className="flex items-start text-neutral-400 font-light">
                <span className="text-blue-500 mr-3 text-xs mt-1.5">●</span>
                <span>
                  8000 Westpark Drive, STE 450<br />
                  McLean, VA 22102
                </span>
              </div>
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-normal text-sm mb-6 tracking-wide">Services</h4>
            <ul className="space-y-3">
              <li><FooterLink href="/#services">Residential Installation</FooterLink></li>
              <li><FooterLink href="/#services">Business Solutions</FooterLink></li>
              <li><FooterLink href="/#services">Mesh WiFi Setup</FooterLink></li>
              <li><FooterLink href="/#services">RV & Marine</FooterLink></li>
            </ul>
          </motion.div>

          {/* Locations Column */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-normal text-sm mb-6 tracking-wide">Locations</h4>
            <ul className="space-y-3">
              <li><FooterLink href="/locations/loudoun-county">Loudoun County</FooterLink></li>
              <li><FooterLink href="/locations/fairfax-county">Fairfax County</FooterLink></li>
              <li><FooterLink href="/locations/arlington-county">Arlington County</FooterLink></li>
              <li><FooterLink href="/locations/montgomery-county">Montgomery County</FooterLink></li>
            </ul>
          </motion.div>

          {/* Resources Column */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-normal text-sm mb-6 tracking-wide">Resources</h4>
            <ul className="space-y-3">
              <li><FooterLink href="/blog">Installation Guide</FooterLink></li>
              <li><FooterLink href="/#faq">FAQs</FooterLink></li>
              <li><FooterLink href="/#featured-installations">Success Stories</FooterLink></li>
              <li>
                <FooterLink 
                  href="https://www.google.com/maps/place/?cid=16628350007596958974" 
                  external
                >
                  Google Reviews
                </FooterLink>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section - Ultra Minimal */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-neutral-900"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-neutral-500 text-xs font-light tracking-wide">
              © {year} The Orbit Tech. All rights reserved.
            </div>
            <div className="flex items-center gap-8">
              <a 
                href="/privacy-policy.html" 
                className="text-neutral-500 hover:text-neutral-300 text-xs font-light tracking-wide transition-colors duration-300"
              >
                Privacy
              </a>
              <a 
                href="/terms-of-service.html" 
                className="text-neutral-500 hover:text-neutral-300 text-xs font-light tracking-wide transition-colors duration-300"
              >
                Terms
              </a>
              <a 
                href="/imprint.html" 
                className="text-neutral-500 hover:text-neutral-300 text-xs font-light tracking-wide transition-colors duration-300"
              >
                Legal
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom accent line */}
      <motion.div 
        variants={lineVariants}
        className="h-px bg-gradient-to-r from-transparent via-neutral-900 to-transparent origin-center"
      />

      {/* Edge vignette for focus */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30" />
      </div>
    </motion.footer>
  );
};

export default Footer;