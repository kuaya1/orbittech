import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Star, CheckCircle, MapPin, Zap } from 'lucide-react';

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

// Type definitions
interface TestimonialData {
  id: string;
  quote: string;
  customerName: string;
  location: string;
  rating: number;
  date: string;
  speedBefore?: string;
  speedAfter?: string;
  installationType: 'starlink-only' | 'starlink-plus-wifi';
  verifiedPurchase: boolean;
  highlightMetric?: {
    value: string;
    label: string;
  };
}

interface TestimonialCardProps {
  testimonial: TestimonialData;
  index: number;
  featured?: boolean;
}

interface SpeedComparisonProps {
  before: string;
  after: string;
}

// Avatar gradient helper for visual variety
const getAvatarGradient = (key: string) => {
  const palettes = [
    'from-blue-500 to-cyan-500',
    'from-indigo-500 to-purple-500',
    'from-violet-500 to-fuchsia-500',
    'from-emerald-500 to-teal-500',
    'from-amber-500 to-orange-500',
    'from-rose-500 to-pink-500',
  ];
  const sum = key.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  const idx = sum % palettes.length;
  return `bg-gradient-to-br ${palettes[idx]}`;
};

// Star Rating Component
const StarRating: React.FC<{ rating: number; showNumeric?: boolean }> = ({ rating, showNumeric = false }) => (
  <div className="flex items-center gap-2" role="img" aria-label={`Rated ${rating} out of 5 stars`}>
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-neutral-700'}`}
          aria-hidden="true"
        />
      ))}
    </div>
    {showNumeric && (
      <span className="text-sm font-medium text-neutral-400">{rating}.0</span>
    )}
  </div>
);

// Speed Comparison Component
const SpeedComparison: React.FC<SpeedComparisonProps> = ({ before, after }) => (
  <motion.div 
    className="bg-black/50 border border-neutral-800 rounded-xl p-4 mt-4"
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <div className="flex items-center justify-between">
      <div className="text-center">
        <div className="text-sm text-neutral-500 mb-1">Before</div>
        <div className="text-xl font-bold text-red-400">{before}</div>
      </div>
      <div className="flex items-center px-4">
        <div className="w-8 h-0.5 bg-gradient-to-r from-red-400 to-green-400"></div>
        <Zap className="w-5 h-5 text-blue-400 mx-1" />
        <div className="w-8 h-0.5 bg-gradient-to-r from-red-400 to-green-400"></div>
      </div>
      <div className="text-center">
        <div className="text-sm text-neutral-500 mb-1">After</div>
        <div className="text-xl font-bold text-green-400">{after}</div>
      </div>
    </div>
  </motion.div>
);

// Testimonial Card Component
const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index, featured = false }) => {
  return (
    <motion.article
      className="relative bg-gradient-to-b from-neutral-900/30 to-black/30 backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-6 md:p-8 hover:border-neutral-700/50 transition-all duration-500 group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.08,
        ease: "easeOut" as const
      }}
      aria-label={`Customer testimonial from ${testimonial.customerName}`}
    >
      {/* Subtle border glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5 blur-xl -z-10" />

      {/* Content Container */}
      <div className="relative">
        {/* Star Rating */}
        <div className="mb-4 md:mb-6">
          <StarRating rating={testimonial.rating} showNumeric={featured} />
        </div>

        {/* Quote */}
        <blockquote className="relative mb-5 md:mb-6">
          <p className={`relative text-neutral-300 leading-relaxed font-light ${featured ? 'text-base md:text-lg' : 'text-sm md:text-base'}`}>
            "{testimonial.quote}"
          </p>
        </blockquote>

        {/* Speed Comparison (if available) */}
        {testimonial.speedBefore && testimonial.speedAfter && (
          <SpeedComparison before={testimonial.speedBefore} after={testimonial.speedAfter} />
        )}

        {/* Highlight Metric (if available) */}
        {testimonial.highlightMetric && (
          <motion.div 
            className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 mt-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">{testimonial.highlightMetric.value}</div>
              <div className="text-sm text-neutral-400 mt-1">{testimonial.highlightMetric.label}</div>
            </div>
          </motion.div>
        )}

        {/* Customer Info */}
        <div className="flex items-center justify-between mt-5 md:mt-6 pt-5 md:pt-6 border-t border-neutral-800/50">
          <div className="flex items-center gap-4">
            {/* Customer Avatar */}
            <div className={`w-10 h-10 md:w-12 md:h-12 ${getAvatarGradient(testimonial.customerName)} rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm`}>
              {testimonial.customerName.split(' ').map(n => n[0]).join('')}
            </div>
            
            {/* Name and Location */}
            <div>
              <div className="font-light text-white">{testimonial.customerName}</div>
              <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-500">
                <MapPin className="w-3 h-3" />
                <span>{testimonial.location}</span>
              </div>
            </div>
          </div>

          {/* Verification Badge */}
          {testimonial.verifiedPurchase && (
            <div className="flex items-center gap-1 text-xs text-green-400 font-light">
              <CheckCircle className="w-4 h-4" />
              <span>Verified</span>
            </div>
          )}
        </div>

        {/* Date */}
        <div className="text-xs text-neutral-600 mt-4 font-light">
          Installed {testimonial.date}
        </div>
      </div>
    </motion.article>
  );
};

// Schema.org Structured Data Component
const TestimonialSchema: React.FC<{ testimonials: TestimonialData[] }> = ({ testimonials }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "The Orbit Tech",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": testimonials.length.toString()
    },
    "review": testimonials.map(t => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": t.rating.toString()
      },
      "author": {
        "@type": "Person",
        "name": t.customerName
      },
      "reviewBody": t.quote,
      "datePublished": t.date
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

// Main Testimonials Component
const Testimonials: React.FC = () => {
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

  // Live Google Business Reviews - Authentic customer feedback
  const testimonials: TestimonialData[] = [
    {
      id: 'google-review-dave-wiseman',
      quote: "Fantastic job with a very challenging roof and receiver location. Eric provided options and worked with us to get the receiver and hiding associated wires and router in the perfect place for us -- all with an attention to detail",
      customerName: "Dave Wiseman",
      location: "Local Guide • 27 reviews",
      rating: 5,
      date: "January 2025",
      installationType: 'starlink-only',
      verifiedPurchase: true
    },
    {
      id: 'google-review-courtney-g',
      quote: "Eric went above and beyond to provide a great installation on my (difficult) roof in Annapolis. Exceeded my expectations and was very professional through the whole process and answered all my questions. Highly recommend!",
      customerName: "Courtney G",
      location: "Annapolis, MD",
      rating: 5,
      date: "January 2025",
      installationType: 'starlink-only',
      verifiedPurchase: true
    },
    {
      id: 'google-review-peter-baughan',
      quote: "We called Orbit to ask about getting connectivity - they were out the next day after setting up exactly what we needed in a Best Buy shopping cart to make equipment purchasing super easy. Orbit expertly set up two systems for us - which work flawlessly - while hardwiring and fixing our Sonos system to boot. Eric is an expert! Goes the extra mile - and at a very reasonable price. Highly recommended!",
      customerName: "Peter Baughan",
      location: "DMV Area",
      rating: 5,
      date: "January 2025",
      installationType: 'starlink-plus-wifi',
      verifiedPurchase: true
    }
  ];

  // Orchestrated entrance animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
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
        ease: "easeOut" as const
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
        ease: "easeOut" as const,
        delay: 0.5
      }
    }
  };

  return (
    <>
      {/* Schema.org Structured Data */}
      <TestimonialSchema testimonials={testimonials} />
      
      <motion.section 
        id="testimonials"
        ref={containerRef}
        className="relative py-32 lg:py-40 overflow-hidden isolate"
        onMouseMove={handleMouseMove}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
        aria-labelledby="testimonials-heading"
      >
        {/* Layered background system for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
        
        {/* Spotlight effect - tracks mouse subtly */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{
            background: useTransform(
              [gradientX, gradientY],
              ([x, y]) => `radial-gradient(circle 800px at ${x}% ${y}%, rgba(59, 130, 246, 0.06), transparent 60%)`
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

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Accent line */}
          <motion.div 
            variants={lineVariants}
            className="w-24 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-12 origin-center"
          />

          {/* Section Header - Minimal and refined */}
          <motion.div 
            className="text-center mb-20"
            variants={itemVariants}
          >
            <h2 
              id="testimonials-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-6"
            >
              <span className="text-white">The Trusted </span>
              <span className="text-white font-semibold">Starlink Installer</span>
              <span className="text-white"> for the DMV</span>
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto font-light">
              Join hundreds of satisfied customers who've transformed their internet experience with our professional installation services.
            </p>
            
            {/* Aggregate Rating Display */}
            <motion.div 
              className="flex items-center justify-center gap-4 mt-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <StarRating rating={5} />
              <span className="text-white font-light">5.0 Average</span>
              <span className="text-neutral-600">•</span>
              <span className="text-neutral-500 font-light">100+ Installations</span>
            </motion.div>
          </motion.div>

          {/* Testimonials Container - Clean and sophisticated */}
          <motion.div 
            className="relative mb-16"
            variants={itemVariants}
          >
            {/* Subtle border glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5 blur-xl -z-10" />
            
            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  index={index}
                  featured={index === 0}
                />
              ))}
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            variants={itemVariants}
          >
            {[
              { value: "100+", label: "Installations Completed" },
              { value: "5.0", label: "Google Rating" },
              { value: "24hr", label: "Response Time" },
              { value: "90 Day", label: "Warranty" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-light text-blue-400">{stat.value}</div>
                <div className="text-sm text-neutral-500 mt-1 font-light">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Bottom accent line */}
          <motion.div 
            variants={lineVariants}
            className="w-24 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mt-16 origin-center"
          />

          {/* Subtle note */}
          <motion.p 
            variants={itemVariants}
            className="text-center text-xs text-neutral-500 mt-8 font-light tracking-wide"
          >
            Reviews sourced directly from Google Business listings.
          </motion.p>
        </div>

        {/* Edge vignette for focus */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-15" />
        </div>
      </motion.section>
    </>
  );
};

export default Testimonials;