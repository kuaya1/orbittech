import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, Wifi, Shield, Star } from 'lucide-react';

const FinalHomepageCTA = () => {
  return (
    <section className="font-sans py-24 bg-white relative overflow-hidden">
      
      {/* Minimal background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0, 0, 0) 1px, transparent 0)`,
          backgroundSize: '120px 120px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-black rounded-3xl p-12 md:p-16 text-center shadow-2xl border border-gray-800"
        >
          
          {/* Content */}
          <div className="max-w-4xl mx-auto">
            
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <motion.h2 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight font-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Ready for{' '}
                <span className="text-blue-500">
                  high-speed
                </span>
                {' '}internet?
              </motion.h2>
              
              <motion.p 
                className="text-gray-400 text-xl sm:text-2xl max-w-3xl mx-auto leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Professional Starlink installation across the DMV region.
              </motion.p>
            </motion.div>
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-12 mb-16 text-base"
            >
              <div className="flex items-center text-gray-300">
                <Shield className="w-5 h-5 mr-3 text-blue-500" />
                Licensed & Insured
              </div>
              
              <div className="w-px h-6 bg-gray-700 hidden sm:block"></div>
              
              <div className="flex items-center text-gray-300">
                <Star className="w-5 h-5 mr-3 text-blue-500" />
                5.0 Rating
              </div>
              
              <div className="w-px h-6 bg-gray-700 hidden sm:block"></div>
              
              <div className="flex items-center text-gray-300">
                <Wifi className="w-5 h-5 mr-3 text-blue-500" />
                500+ Installations
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            >
              {/* Primary Button */}
              <motion.a
                href="#contact"
                className="group relative inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 min-w-[280px] justify-center"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Free Installation Quote
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
              
              {/* Secondary Button */}
              <motion.a
                href="tel:+1-571-999-6915"
                className="group inline-flex items-center border-2 border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 min-w-[280px] justify-center"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="mr-3 w-5 h-5" />
                (571) 999-6915
              </motion.a>
            </motion.div>

            {/* Bottom Text */}
            <motion.p 
              className="text-gray-500 text-sm font-light"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Same-day installation available
            </motion.p>

          </div>
        </motion.div>
        
        {/* Minimal accent */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 h-px bg-gray-200 max-w-md mx-auto"
        />
        
      </div>
    </section>
  );
};

export default FinalHomepageCTA;
