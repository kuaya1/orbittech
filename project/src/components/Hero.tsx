import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle, Shield, Clock } from 'lucide-react';

// Type definitions
interface HeroProps {
  className?: string;
}

interface TrustIndicatorProps {
  icon: React.ReactNode;
  text: string;
}

// Optimized Image Component with proper typing
interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  width: number;
  height: number;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height 
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading="eager"
      decoding="async"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.onerror = null;
        target.src = `https://placehold.co/${width}x${height}/0a0a0a/3b82f6?text=Starlink+Professional`;
      }}
    />
  );
};

// Star Rating Component
const StarRating: React.FC = () => (
  <div className="flex items-center" role="img" aria-label="5 star rating">
    {[...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className="h-4 w-4 text-yellow-400 fill-current" 
        aria-hidden="true"
      />
    ))}
  </div>
);

// Trust Indicator Component
const TrustIndicator: React.FC<TrustIndicatorProps> = ({ icon, text }) => (
  <motion.div 
    className="flex items-center gap-2 text-neutral-400"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {icon}
    <span className="text-sm font-medium">{text}</span>
  </motion.div>
);

// Main Hero Component
const Hero: React.FC<HeroProps> = ({ className = '' }) => {
  // Professional animation variants - subtle and elegant
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 100,
        duration: 0.8
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.0,
        ease: "easeOut"
      }
    }
  };

  const scaleIn = {
    hidden: { 
      opacity: 0, 
      scale: 0.95 
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 35,
        stiffness: 100,
        duration: 1.0
      }
    }
  };

  return (
    <motion.section 
      id="hero" 
      className={`relative min-h-screen bg-black overflow-hidden ${className}`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      aria-label="Hero section"
    >
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
      
      {/* Subtle grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-screen flex items-center justify-center py-20 lg:py-0">
          <div className="w-full max-w-7xl">
            {/* Two-column grid layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Left Column - Content */}
              <motion.div 
                className="text-center lg:text-left space-y-8"
                variants={fadeInUp}
              >
                {/* Main Headline */}
                <motion.h1 
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight"
                  variants={fadeInUp}
                >
                  <span className="block text-white leading-tight">
                    The DMV's #1 Rated
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 leading-tight mt-2">
                    Starlink Installation Experts
                  </span>
                </motion.h1>

                {/* Sub-headline */}
                <motion.p 
                  className="text-lg sm:text-xl lg:text-2xl text-neutral-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                  variants={fadeInUp}
                >
                  We deliver flawless Starlink installations and guarantee perfect Wi-Fi coverage throughout your entire home.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                  variants={fadeInUp}
                >
                  <motion.a
                    href="#contact"
                    aria-label="Get a free quote for Starlink installation"
                    className="inline-flex items-center justify-center bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/25"
                    whileHover={{ 
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get a Free Installation Quote
                    <svg 
                      className="ml-2 w-5 h-5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </motion.a>
                  
                  <motion.a
                    href="tel:+15719996915"
                    aria-label="Call for immediate Starlink installation service"
                    className="inline-flex items-center justify-center bg-white/5 border border-white/10 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/20"
                    whileHover={{ 
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Call (571) 999-6915
                  </motion.a>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div 
                  className="flex flex-wrap gap-6 justify-center lg:justify-start pt-4"
                  variants={fadeIn}
                >
                  <TrustIndicator 
                    icon={<CheckCircle className="w-4 h-4 text-green-500" />}
                    text="Licensed & Insured"
                  />
                  <TrustIndicator 
                    icon={<Shield className="w-4 h-4 text-green-500" />}
                    text="90-Day Warranty"
                  />
                  <TrustIndicator 
                    icon={<Clock className="w-4 h-4 text-green-500" />}
                    text="Same-Day Service"
                  />
                </motion.div>

                {/* Google Rating Badge */}
                <motion.div 
                  className="flex items-center gap-4 justify-center lg:justify-start"
                  variants={fadeIn}
                >
                  <div className="flex items-center bg-white/5 border border-white/10 rounded-xl px-5 py-3">
                    {/* Google G Icon */}
                    <svg className="w-7 h-7 mr-3" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill="#4285F4" d="M22.56,12.25C22.56,11.42,22.49,10.63,22.35,9.86H12.24V14.4H18.06C17.74,16.07,16.83,17.43,15.45,18.33V21.09H19.34C21.43,19.16,22.56,15.99,22.56,12.25Z"/>
                      <path fill="#34A853" d="M12.24,23C15.11,23,17.5,22.1,19.34,20.55L15.45,17.79C14.51,18.44,13.46,18.8,12.24,18.8C9.89,18.8,7.91,17.2,7.1,15.08H3.14V17.94C4.98,21.05,8.32,23,12.24,23Z"/>
                      <path fill="#FBBC05" d="M7.1,15.08C6.88,14.43,6.75,13.73,6.75,13C6.75,12.27,6.88,11.57,7.1,10.92V8.06H3.14C2.34,9.6,1.9,11.25,1.9,13C1.9,14.75,2.34,16.4,3.14,17.94L7.1,15.08Z"/>
                      <path fill="#EA4335" d="M12.24,7.2C13.6,7.2,14.78,7.69,15.81,8.66L19.43,5.05C17.5,3.24,15.11,2,12.24,2C8.32,2,4.98,4.95,3.14,8.06L7.1,10.92C7.91,8.8,9.89,7.2,12.24,7.2Z"/>
                    </svg>
                    <div>
                      <p className="text-xs text-neutral-400 font-medium">Google Rating</p>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-lg">5.0</span>
                        <StarRating />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column - Image */}
              <motion.div 
                className="relative lg:block"
                variants={scaleIn}
              >
                <div className="relative">
                  {/* Premium glow effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-3xl blur-3xl opacity-50" />
                  
                  {/* Main image container */}
                  <div className="relative bg-gradient-to-br from-neutral-900 to-black rounded-2xl border border-white/10 overflow-hidden">
                    <OptimizedImage
                      src="/starlink-professional-installation.png"
                      alt="Professional Starlink satellite internet installation equipment including dish, router, and accessories"
                      className="w-full h-auto object-cover"
                      priority={true}
                      width={800}
                      height={600}
                    />
                    
                    {/* Subtle overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Speed indicator badge */}
                    <motion.div 
                      className="absolute top-6 right-6 bg-black/80 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2, duration: 0.5 }}
                    >
                      <p className="text-xs text-neutral-400 mb-1">Average Speed</p>
                      <p className="text-2xl font-bold text-white">250+ Mbps</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom scroll indicator - Desktop only */}
            <motion.div 
              className="hidden lg:flex justify-center mt-20"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="text-neutral-500"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;