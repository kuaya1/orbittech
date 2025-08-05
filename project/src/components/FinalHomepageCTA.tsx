import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Zap, Shield, Award, Star } from 'lucide-react';

const FinalHomepageCTA = () => {
  return (
    <section className="font-sans py-32 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgb(59, 130, 246) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgb(147, 51, 234) 0%, transparent 50%)`,
        }} />
      </div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59, 130, 246) 1px, transparent 0)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Glass Morphism Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-white/10 via-gray-100/5 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-12 md:p-16 text-center shadow-2xl shadow-black/20"
        >
          
          {/* Inner glow effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-blue-500/5 pointer-events-none"></div>
          
          {/* Content */}
          <div className="relative z-10">
            
            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <motion.h2 
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Ready for{' '}
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Lightning-Fast
                </span>
                {' '}Internet?
              </motion.h2>
              
              <motion.p 
                className="text-gray-300 text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Join 500+ satisfied customers across the DMV who chose The Orbit Tech for professional Starlink installation.
              </motion.p>
            </motion.div>
            {/* Trust Elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-8 mb-16 text-base"
            >
              <div className="flex items-center text-blue-400 font-medium">
                <Shield className="w-5 h-5 mr-2 text-green-400" />
                Licensed & Insured
              </div>
              
              <div className="w-1 h-1 bg-blue-400/50 rounded-full hidden sm:block"></div>
              
              <div className="flex items-center text-blue-400 font-medium">
                <Star className="w-5 h-5 mr-2 text-yellow-400" />
                5.0 Google Rating
              </div>
              
              <div className="w-1 h-1 bg-blue-400/50 rounded-full hidden sm:block"></div>
              
              <div className="flex items-center text-blue-400 font-medium">
                <Award className="w-5 h-5 mr-2 text-green-400" />
                500+ Installations
              </div>
            </motion.div>

            {/* Primary CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <motion.a
                href="#contact"
                className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold text-xl px-12 py-6 rounded-2xl hover:from-blue-400 hover:to-blue-500 transition-all duration-500 shadow-2xl hover:shadow-blue-500/40 group backdrop-blur-sm border border-blue-400/20"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <Zap className="mr-3 w-6 h-6" />
                Get Your Free Installation Quote
                <motion.svg
                  className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </motion.a>
            </motion.div>

            {/* Phone CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center"
            >
              <motion.p 
                className="text-gray-400 text-lg mb-4 font-light"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                Prefer to speak with an expert?
              </motion.p>
              <motion.a
                href="tel:+1-571-999-6915"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold text-2xl transition-all duration-300 group hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <Phone className="mr-3 w-6 h-6 group-hover:animate-pulse" />
                (571) 999-6915
                <motion.span 
                  className="ml-3 text-base opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 0.7, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 1.1 }}
                >
                  Call Now
                </motion.span>
              </motion.a>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalHomepageCTA;
