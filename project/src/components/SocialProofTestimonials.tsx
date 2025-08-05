import React from 'react';
import { motion } from 'framer-motion';

const QuoteIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
  </svg>
);

interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, location, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative bg-gradient-to-br from-white/10 via-gray-100/5 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:border-white/30 hover:bg-gradient-to-br hover:from-white/15 hover:via-gray-100/10 hover:to-white/10 transition-all duration-500 group shadow-xl shadow-black/20"
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Inner glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      {/* Content container with relative positioning */}
      <div className="relative z-10">
      {/* Quote Icon */}
      <motion.div 
        className="text-blue-400/80 mb-6 group-hover:text-blue-300 transition-colors duration-500"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.2, type: "spring", stiffness: 150 }}
      >
        <QuoteIcon />
      </motion.div>

      {/* Quote Text */}
      <motion.blockquote
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: delay + 0.3 }}
        className="text-gray-100 text-lg leading-relaxed mb-6 font-medium"
      >
        "{quote}"
      </motion.blockquote>

      {/* Attribution */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.4 }}
        className="flex items-center"
      >
        <div className="w-1 h-12 bg-gradient-to-b from-blue-400/80 to-blue-600/80 rounded-full mr-4 shadow-sm shadow-blue-500/20"></div>
        <div>
          <div className="text-gray-100 font-semibold text-base">{name}</div>
          <div className="text-blue-400/90 text-sm font-medium">{location}</div>
        </div>
      </motion.div>
      
      </div>
    </motion.div>
  );
};

const SocialProofTestimonials = () => {
  const testimonials = [
    {
      quote: "Fantastic job with a very challenging roof and receiver location. Eric provided options and worked with us to get the receiver and hiding associated wires and router in the perfect place for us -- all with an attention to detail.",
      name: "Dave Wiseman",
      location: "Verified Google Review"
    },
    {
      quote: "Eric went above and beyond to provide a great Starlink install on my (difficult) roof in Annapolis. Exceeded my expectations and was very professional through the whole process and answered all my questions. Highly recommend!!",
      name: "Courtney G.",
      location: "Annapolis, MD"
    },
    {
      quote: "We called Orbit to ask about getting Starlink - they were out the next day after setting up exactly what we needed in a Best Buy shopping cart to make equipment purchasing super easy. Orbit expertly set up two systems for us - which work perfectly.",
      name: "Peter Baughan", 
      location: "Verified Google Review"
    },
    {
      quote: "Pleasant, knowledgeable, efficient. Walked me through everything. Superlative in all ways. Awesome experience.",
      name: "Gary Vanderhaven", 
      location: "Charles Town, WV"
    }
  ];

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

  return (
    <section className="font-sans py-24 sm:py-32 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59, 130, 246) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            The Trusted{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Starlink Installer
            </span>
            {' '}for the DMV
          </motion.h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              location={testimonial.location}
              delay={index * 0.15}
            />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center bg-white text-black font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-white/25 group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Get Your Free Quote
            <motion.svg
              className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofTestimonials;
