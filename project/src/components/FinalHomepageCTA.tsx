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

const FinalCTA: React.FC = () => {
  const [containerRef, isVisible] = useScrollReveal(0.15);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Subtle parallax effect for premium feel
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
  };

  // Transform mouse position for gradient tracking
  const gradientX = useTransform(mouseX, [0, 1000], [0, 100]);
  const gradientY = useTransform(mouseY, [0, 600], [0, 100]);

  // Orchestrated entrance animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.98
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
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
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.5
      }
    }
  };

  return (
    <motion.section
      id="final-cta"
      ref={containerRef}
      className="relative py-32 lg:py-40 overflow-hidden isolate"
      onMouseMove={handleMouseMove}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Layered background system for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
      
      {/* Spotlight effect - tracks mouse subtly */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{
          background: useTransform(
            [gradientX, gradientY],
            ([x, y]) => `radial-gradient(circle 800px at ${x}% ${y}%, rgba(59, 130, 246, 0.08), transparent 60%)`
          )
        }}
      />
      
      {/* Grid pattern overlay for technical authority */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Accent line */}
        <motion.div 
          variants={lineVariants}
          className="w-24 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-12 origin-center"
        />

        {/* Main content block */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline with sophisticated typography */}
          <motion.h2 
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] mb-6"
          >
            <span className="text-white">Ready for Fast,</span>
            <br />
            <span className="text-white font-semibold">Reliable Internet?</span>
          </motion.h2>

          {/* Sub-headline with premium feel */}
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl text-neutral-300 leading-relaxed mb-8 max-w-3xl mx-auto font-light"
          >
            Join hundreds of your neighbors in the DMV who trust 
            <span className="text-white font-normal"> The Orbit Tech </span>
            for a flawless Starlink installation.
          </motion.p>

          {/* Trust elements - refined presentation */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mb-12 text-xs sm:text-sm text-neutral-400"
          >
            <span className="flex items-center">
              <svg className="w-3 h-3 mr-1.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Fast & Professional Service
            </span>
            <span className="text-neutral-600">•</span>
            <span className="flex items-center">
              <svg className="w-3 h-3 mr-1.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Licensed & Insured
            </span>
            <span className="text-neutral-600">•</span>
            <span className="flex items-center">
              <svg className="w-3 h-3 mr-1.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Satisfaction Guaranteed
            </span>
          </motion.div>

          {/* CTA Container with sophisticated interaction design */}
          <motion.div 
            variants={itemVariants}
            className="space-y-4"
          >
            {/* Primary CTA - The focal point */}
            <motion.div className="relative inline-block">
              <motion.a
                href="#contact"
                aria-label="Get a Free Installation Quote"
                className="relative inline-flex items-center justify-center px-12 py-5 text-base font-semibold text-white bg-blue-500 rounded-full overflow-hidden group transition-all duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Shimmer effect on hover */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                
                {/* Button text */}
                <span className="relative z-10 flex items-center">
                  Get a Free Installation Quote
                  <svg 
                    className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </motion.a>
              
              {/* Glow effect for primary CTA */}
              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl -z-10 group-hover:bg-blue-500/30 transition-colors duration-300" />
            </motion.div>

            {/* Secondary CTA - Understated but accessible */}
            <motion.div 
              variants={itemVariants}
              className="text-neutral-400"
            >
              <span className="text-sm">Or call our local experts at </span>
              <a 
                href="tel:+15719996915"
                aria-label="Call (571) 999-6915"
                className="text-white font-medium hover:text-blue-400 transition-colors duration-300 underline-offset-4 hover:underline"
              >
                (571) 999-6915
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom accent line - mirrors top */}
        <motion.div 
          variants={lineVariants}
          className="w-24 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mt-16 origin-center"
        />
      </div>

      {/* Edge vignette for focus */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-20" />
      </div>
    </motion.section>
  );
};

export default FinalCTA;