import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Phone } from 'lucide-react';

// Type definitions
interface TrustBadgeProps {
 text: string;
}

interface CTAButtonProps {
 href: string;
 ariaLabel: string;
 variant: 'primary' | 'secondary';
 children: React.ReactNode;
 onClick?: () => void;
}

// Trust Badge Component - Refined minimal design
const TrustBadge: React.FC<TrustBadgeProps> = ({ text }) => (
 <div className="flex items-center gap-2">
   <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
   <span className="text-sm font-medium text-neutral-300">{text}</span>
 </div>
);

// CTA Button Component - Premium design with proper hover states
const CTAButton: React.FC<CTAButtonProps> = ({ href, ariaLabel, variant, children, onClick }) => {
 const baseClasses = "relative inline-flex items-center justify-center font-semibold px-10 py-5 rounded-lg transition-all duration-300 text-lg overflow-hidden group";
 
 const variantClasses = variant === 'primary' 
   ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40"
   : "bg-transparent border-2 border-neutral-600 text-neutral-200 hover:border-neutral-500 hover:bg-neutral-900/50";

 return (
   <motion.a
     href={href}
     aria-label={ariaLabel}
     onClick={onClick}
     className={`${baseClasses} ${variantClasses}`}
     whileHover={{ 
       scale: 1.02,
       transition: { duration: 0.2 }
     }}
     whileTap={{ scale: 0.98 }}
   >
     {/* Premium hover effect overlay for primary button */}
     {variant === 'primary' && (
       <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
     )}
     <span className="relative z-10 flex items-center gap-2">
       {children}
     </span>
   </motion.a>
 );
};

// Main Final CTA Component - Complete Redesign
const FinalCTA: React.FC = () => {
 // Premium animation variants
 const containerVariants = {
   hidden: { opacity: 0 },
   visible: {
     opacity: 1,
     transition: {
       duration: 1,
       staggerChildren: 0.1,
       delayChildren: 0.2
     }
   }
 };

 const itemVariants = {
   hidden: { opacity: 0, y: 20 },
   visible: {
     opacity: 1,
     y: 0,
     transition: {
       type: "spring",
       damping: 20,
       stiffness: 80,
       duration: 0.8
     }
   }
 };

 const lineVariants = {
   hidden: { scaleX: 0 },
   visible: {
     scaleX: 1,
     transition: {
       duration: 1.2,
       ease: "easeInOut",
       delay: 0.5
     }
   }
 };

 return (
   <motion.section
     className="relative py-32 lg:py-40 overflow-hidden"
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, amount: 0.2 }}
     variants={containerVariants}
     aria-labelledby="final-cta-heading"
   >
     {/* Premium Dark Textured Background */}
     <div className="absolute inset-0">
       {/* Base gradient - deeper blacks with subtle blue undertone */}
       <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-[#0a0a0f] to-black" />
       
       {/* Premium mesh gradient overlay */}
       <div className="absolute inset-0 opacity-30"
         style={{
           backgroundImage: `
             radial-gradient(at 20% 30%, rgb(59, 130, 246, 0.15) 0px, transparent 50%),
             radial-gradient(at 80% 70%, rgb(59, 130, 246, 0.1) 0px, transparent 50%),
             radial-gradient(at 50% 50%, rgb(30, 58, 138, 0.08) 0px, transparent 50%)
           `
         }}
       />
       
       {/* Sophisticated noise texture */}
       <div 
         className="absolute inset-0 opacity-[0.015]"
         style={{
           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
           backgroundRepeat: 'repeat',
         }}
       />
       
       {/* Premium accent lines */}
       <motion.div 
         className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
         variants={lineVariants}
       />
       <motion.div 
         className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
         variants={lineVariants}
       />
     </div>

     {/* Content Container - Refined Layout */}
     <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
       
       {/* Main Content - Clean, Impactful Design */}
       <div className="text-center space-y-10">
         
         {/* Main Headline - Large and Commanding */}
         <motion.h2 
           id="final-cta-heading"
           className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
           variants={itemVariants}
         >
           <span className="text-white">Ready for </span>
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
             Fast, Reliable Internet?
           </span>
         </motion.h2>

         {/* Sub-headline - Clear Value Proposition */}
         <motion.p 
           className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto leading-relaxed font-light"
           variants={itemVariants}
         >
           Join hundreds of your neighbors in the DMV who trust The Orbit Tech for a flawless Starlink installation.
         </motion.p>

         {/* Trust Elements - Clean Grid */}
         <motion.div 
           className="flex flex-wrap items-center justify-center gap-4 md:gap-8"
           variants={itemVariants}
         >
           <TrustBadge text="Fast & Professional Service" />
           <div className="hidden sm:block w-px h-5 bg-neutral-700" />
           <TrustBadge text="Licensed & Insured" />
           <div className="hidden sm:block w-px h-5 bg-neutral-700" />
           <TrustBadge text="Satisfaction Guaranteed" />
         </motion.div>

         {/* CTA Buttons - Premium Design with Visual Hierarchy */}
         <motion.div 
           className="flex flex-col sm:flex-row gap-5 justify-center pt-4"
           variants={itemVariants}
         >
           {/* Primary CTA - Maximum Visual Impact */}
           <CTAButton
             href="#contact"
             ariaLabel="Get a free quote for your Starlink installation"
             variant="primary"
           >
             Get Your Free Quote
             <ArrowRight className="w-5 h-5" />
           </CTAButton>

           {/* Secondary CTA - Supporting Option */}
           <CTAButton
             href="tel:+15719996915"
             ariaLabel="Call The Orbit Tech for immediate Starlink installation service"
             variant="secondary"
           >
             <Phone className="w-5 h-5" />
             Call (571) 999-6915
           </CTAButton>
         </motion.div>

         {/* Bottom Trust Line - Subtle but Important */}
         <motion.p 
           className="text-sm text-neutral-500 font-light"
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.8, duration: 1 }}
         >
           Serving Virginia • Maryland • Washington DC • Same-Day Installation Available
         </motion.p>
       </div>

       {/* Premium Glow Effect - Subtle but Sophisticated */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/[0.03] rounded-full blur-3xl pointer-events-none" />
     </div>
   </motion.section>
 );
};

export default FinalCTA;