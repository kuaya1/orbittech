import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle, MapPin, Zap, Wifi, Signal } from 'lucide-react';

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
  const cardClasses = featured 
    ? "lg:col-span-2 bg-gradient-to-br from-neutral-900 via-black to-neutral-900 border-blue-500/20"
    : "bg-gradient-to-br from-neutral-900 to-black border-neutral-800";

  return (
    <motion.article
      className={`relative ${cardClasses} border rounded-2xl p-8 hover:border-neutral-700 transition-all duration-500 group`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        damping: 25,
        stiffness: 100
      }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.3 }
      }}
      aria-label={`Customer testimonial from ${testimonial.customerName}`}
    >
      {/* Service Type Badge */}
      <div className="absolute top-8 right-8">
        {testimonial.installationType === 'starlink-plus-wifi' ? (
          <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1">
            <Wifi className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-medium text-blue-400">+ Wi-Fi Optimization</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1">
            <Signal className="w-4 h-4 text-green-400" />
            <span className="text-xs font-medium text-green-400">Starlink Installation</span>
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="relative">
        {/* Star Rating */}
        <div className="mb-6">
          <StarRating rating={testimonial.rating} showNumeric={featured} />
        </div>

        {/* Quote */}
        <blockquote className="relative">
          {/* Quote Icon */}
          <svg 
            className="absolute -top-2 -left-2 w-8 h-8 text-blue-500/20" 
            fill="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
          </svg>
          
          <p className={`relative text-neutral-200 leading-relaxed ${featured ? 'text-lg' : 'text-base'}`}>
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
        <div className="flex items-center justify-between mt-6 pt-6 border-t border-neutral-800">
          <div className="flex items-center gap-4">
            {/* Customer Avatar */}
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              {testimonial.customerName.split(' ').map(n => n[0]).join('')}
            </div>
            
            {/* Name and Location */}
            <div>
              <div className="font-semibold text-white">{testimonial.customerName}</div>
              <div className="flex items-center gap-2 text-sm text-neutral-400">
                <MapPin className="w-3 h-3" />
                <span>{testimonial.location}</span>
              </div>
            </div>
          </div>

          {/* Verification Badge */}
          {testimonial.verifiedPurchase && (
            <div className="flex items-center gap-1 text-xs text-green-400">
              <CheckCircle className="w-4 h-4" />
              <span>Verified</span>
            </div>
          )}
        </div>

        {/* Date */}
        <div className="text-xs text-neutral-500 mt-4">
          Installed {testimonial.date}
        </div>
      </div>

      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
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
  // Strategic testimonials aligned with 75/25 focus
  const testimonials: TestimonialData[] = [
    {
      id: 'core-service-testimonial',
      quote: "The Orbit Tech transformed our rural property from internet wasteland to connectivity powerhouse. They completed our Starlink installation in under 3 hours, achieving 245 Mbps speeds where we previously struggled with 8 Mbps DSL. Professional, knowledgeable, and they cleaned up everything perfectly. This is how installation should be done.",
      customerName: "Michael Harrison",
      location: "Great Falls, VA",
      rating: 5,
      date: "March 2024",
      speedBefore: "8 Mbps",
      speedAfter: "245 Mbps",
      installationType: 'starlink-only',
      verifiedPurchase: true
    },
    {
      id: 'value-add-testimonial',
      quote: "We had Starlink installed by another company, but still had dead zones throughout our home. The Orbit Tech came in and set up a professional mesh network that finally delivered on Starlink's promise. Now we have 200+ Mbps in every room, including the basement office and detached garage. Worth every penny for the whole-home coverage.",
      customerName: "Sarah Chen",
      location: "Bethesda, MD",
      rating: 5,
      date: "February 2024",
      installationType: 'starlink-plus-wifi',
      verifiedPurchase: true,
      highlightMetric: {
        value: "100%",
        label: "Home Coverage Achieved"
      }
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 100,
        duration: 0.8
      }
    }
  };

  return (
    <>
      {/* Schema.org Structured Data */}
      <TestimonialSchema testimonials={testimonials} />
      
      <motion.section 
        className="py-24 sm:py-32 bg-black relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        aria-labelledby="testimonials-heading"
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
          
          {/* Subtle grid pattern */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            variants={headerVariants}
          >
            <h2 
              id="testimonials-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
            >
              The Trusted{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Starlink Installer
              </span>
              {' '}for the DMV
            </h2>
            <p className="text-lg leading-8 text-neutral-300">
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
              <span className="text-white font-semibold">5.0 Average</span>
              <span className="text-neutral-400">•</span>
              <span className="text-neutral-400">100+ Installations</span>
            </motion.div>
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
            variants={containerVariants}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
                featured={index === 0}
              />
            ))}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {[
              { value: "100+", label: "Installations Completed" },
              { value: "5.0", label: "Google Rating" },
              { value: "24hr", label: "Response Time" },
              { value: "90 Day", label: "Warranty" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-400">{stat.value}</div>
                <div className="text-sm text-neutral-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-neutral-300 mb-8">
              Ready to experience the difference of professional installation?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/25"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Get your free Starlink installation quote"
              >
                Get Your Free Quote
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
              
              <motion.a
                href="https://www.google.com/search?q=the+orbit+tech+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white/5 border border-white/10 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:bg-white/10"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Read more reviews on Google"
              >
                Read More Reviews
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Testimonials;