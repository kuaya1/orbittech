import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Consistent Intersection Observer Hook
const useScrollReveal = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

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

  return [elementRef, isVisible];
};

// Star Icon Component (matching Services section style)
const StarIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="currentColor" 
    viewBox="0 0 24 24" 
    className="w-5 h-5"
  >
    <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>
);

// Primary Testimonial Card (Featured)
const PrimaryTestimonialCard = ({ testimonial }) => {
  return (
    <div className="group bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 rounded-3xl p-10 lg:p-12 relative overflow-hidden transition-all duration-500 hover:border-neutral-700">
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        {/* Rating and Badge */}
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} />
            ))}
            <span className="ml-2 text-neutral-400">5.0</span>
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
            Verified Customer
          </span>
        </div>

        {/* Quote */}
        <blockquote className="mb-8">
          <p className="text-xl lg:text-2xl text-white font-light leading-relaxed">
            "{testimonial.quote}"
          </p>
        </blockquote>

        {/* Customer Info */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold">
            {testimonial.customerName.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <h4 className="text-white font-semibold">{testimonial.customerName}</h4>
            <p className="text-neutral-400 text-sm">{testimonial.location}</p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap gap-6 pt-8 border-t border-neutral-800">
          <div className="flex items-center text-sm text-neutral-400">
            <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Google Review
          </div>
          <div className="flex items-center text-sm text-neutral-400">
            <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {testimonial.date}
          </div>
        </div>
      </div>
    </div>
  );
};

// Secondary Testimonial Card
const SecondaryTestimonialCard = ({ testimonial }) => {
  return (
    <div className="group bg-black/50 border border-neutral-800 rounded-2xl p-8 h-full flex flex-col transition-all duration-300 hover:bg-neutral-900/50 hover:border-neutral-700">
      <div className="flex-grow">
        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="mb-6">
          <p className="text-neutral-300 leading-relaxed">
            "{testimonial.quote}"
          </p>
        </blockquote>
      </div>

      {/* Customer Info */}
      <div className="mt-auto pt-6 border-t border-neutral-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
            {testimonial.customerName.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <h5 className="text-white text-sm font-semibold">{testimonial.customerName}</h5>
            <p className="text-neutral-500 text-xs">{testimonial.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [headerRef, headerVisible] = useScrollReveal(0.2);
  const [primaryRef, primaryVisible] = useScrollReveal(0.1);
  const [secondaryRef, secondaryVisible] = useScrollReveal(0.1);

  // Animation variants (matching Services section)
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

  // Testimonial data
  const primaryTestimonial = {
    id: 'google-review-peter-baughan',
    quote: "We called Orbit to ask about getting connectivity - they were out the next day after setting up exactly what we needed in a Best Buy shopping cart to make equipment purchasing super easy. Orbit expertly set up two systems for us - which work flawlessly - while hardwiring and fixing our Sonos system to boot. Eric is an expert! Goes the extra mile - and at a very reasonable price. Highly recommended!",
    customerName: "Peter Baughan",
    location: "DMV Area • Local Guide",
    date: "January 2025"
  };

  const secondaryTestimonials = [
    {
      id: 'google-review-dave-wiseman',
      quote: "Fantastic job with a very challenging roof and receiver location. Eric provided options and worked with us to get the receiver and hiding associated wires and router in the perfect place for us -- all with an attention to detail",
      customerName: "Dave Wiseman",
      location: "Local Guide • 27 reviews",
      date: "January 2025"
    },
    {
      id: 'google-review-courtney-g',
      quote: "Eric went above and beyond to provide a great installation on my (difficult) roof in Annapolis. Exceeded my expectations and was very professional through the whole process and answered all my questions. Highly recommend!",
      customerName: "Courtney G",
      location: "Annapolis, MD",
      date: "January 2025"
    }
  ];

  return (
    <motion.section
      id="testimonials"
      className="py-24 sm:py-32 bg-black relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Background gradient effect (matching Services) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-20"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Trusted by Hundreds
            <span className="block text-blue-400 mt-2">Across the DMV</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-300">
            Join our growing community of satisfied customers who've transformed their internet experience with professional Starlink installation.
          </p>
          
          {/* Stats Bar */}
          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">100+</div>
              <div className="text-sm text-neutral-400">Installations</div>
            </div>
            <div className="w-px h-8 bg-neutral-700" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">5.0</div>
              <div className="text-sm text-neutral-400">Google Rating</div>
            </div>
            <div className="w-px h-8 bg-neutral-700" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24hr</div>
              <div className="text-sm text-neutral-400">Response Time</div>
            </div>
          </div>
        </motion.div>

        {/* Primary Testimonial - Full Width Feature */}
        <motion.div 
          ref={primaryRef}
          className="mb-16"
          variants={itemVariants}
        >
          <PrimaryTestimonialCard testimonial={primaryTestimonial} />
        </motion.div>

        {/* Secondary Testimonials - Two Column Grid */}
        <motion.div 
          ref={secondaryRef}
          variants={containerVariants}
        >
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white text-center mb-4">
              More Happy Customers
            </h3>
            <p className="text-center text-neutral-400 max-w-2xl mx-auto">
              Real reviews from verified Google Business listings
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {secondaryTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <SecondaryTestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          variants={itemVariants}
        >
          <p className="text-neutral-400 mb-6">Ready to join our satisfied customers?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20"
            >
              Get Your Free Quote
            </a>
            <a
              href="tel:+15719996915"
              className="inline-flex items-center justify-center bg-white/5 border border-white/10 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:bg-white/10"
            >
              Call (571) 999-6915
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Testimonials;