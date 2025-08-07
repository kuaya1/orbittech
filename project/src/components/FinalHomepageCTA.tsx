import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Clock, Star, Zap, ArrowRight, Phone } from 'lucide-react';

// Type definitions
interface TrustIndicatorProps {
  icon: React.ReactNode;
  text: string;
}

interface CTAButtonProps {
  href: string;
  ariaLabel: string;
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
}

// Trust Indicator Component
const TrustIndicator: React.FC<TrustIndicatorProps> = ({ icon, text }) => (
  <motion.div 
    className="flex items-center gap-2"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    {icon}
    <span className="text-neutral-300 font-medium">{text}</span>
  </motion.div>
);

// CTA Button Component
const CTAButton: React.FC<CTAButtonProps> = ({ href, ariaLabel, variant, children }) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-lg";
  
  const variantClasses = variant === 'primary' 
    ? "bg-blue-500 text-white hover:bg-blue-600 hover:shadow-2xl hover:shadow-blue-500/30"
    : "bg-white/10 border-2 border-white/20 text-white hover:bg-white/20 hover:border-white/30";

  return (
    <motion.a
      href={href}
      aria-label={ariaLabel}
      className={`${baseClasses} ${variantClasses}`}
      whileHover={{ 
        y: -3,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.a>
  );
};

// Main Final CTA Component
const FinalCTA: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
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
    <motion.section
      className="relative py-32 bg-black overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      aria-labelledby="final-cta-heading"
    >
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-black" />
        
        {/* Radial gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-blue-500/10" />
        
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        
        {/* Ambient glow effects */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Area */}
        <motion.div 
          className="text-center space-y-8"
          variants={itemVariants}
        >
          {/* Speed Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">Speeds up to 250+ Mbps</span>
          </motion.div>

          {/* Main Headline - More Consultative */}
          <motion.h2 
            id="final-cta-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white"
            variants={itemVariants}
          >
            Experience the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
              Orbit Tech Difference
            </span>
          </motion.h2>

          {/* Sub-headline - Value-focused */}
          <motion.p 
            className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Join hundreds of satisfied customers who chose professional installation for optimal performance and peace of mind.
          </motion.p>

          {/* Trust Elements Grid */}
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-6 md:gap-8 py-8"
            variants={itemVariants}
          >
            <TrustIndicator 
              icon={<Zap className="w-5 h-5 text-green-500" />}
              text="Fast & Professional Service"
            />
            <div className="hidden sm:block w-px h-6 bg-neutral-700" />
            <TrustIndicator 
              icon={<Shield className="w-5 h-5 text-green-500" />}
              text="Licensed & Insured"
            />
            <div className="hidden sm:block w-px h-6 bg-neutral-700" />
            <TrustIndicator 
              icon={<CheckCircle className="w-5 h-5 text-green-500" />}
              text="Satisfaction Guaranteed"
            />
          </motion.div>

          {/* CTA Buttons - More Consultative Approach */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            {/* Primary CTA - Removed Pulsing for Subtlety */}
            <CTAButton
              href="#contact"
              ariaLabel="Request a consultation for your Starlink installation"
              variant="primary"
            >
              Request Free Consultation
              <ArrowRight className="ml-3 w-5 h-5" />
            </CTAButton>

            {/* Secondary CTA - Maintains Expert Accessibility */}
            <CTAButton
              href="tel:+15719996915"
              ariaLabel="Speak with a Starlink installation expert"
              variant="secondary"
            >
              <Phone className="mr-2 w-5 h-5" />
              Speak with Expert
            </CTAButton>
          </motion.div>

          {/* Additional Trust Indicators */}
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-400" />
              <span>Same-Day Installation Available</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-400" />
              <span>90-Day Warranty</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>5.0 Google Rating</span>
            </div>
          </motion.div>

          {/* Urgency Indicator - Softer Approach */}
          <motion.p 
            className="text-blue-400 font-medium text-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            � Free consultations available this week for new installations
          </motion.p>
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-500/5 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        />
      </div>

      {/* Floating particles effect (subtle animation) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default FinalCTA;