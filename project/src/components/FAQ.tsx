import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { FAQSchema } from './SEO/CentralizedSchemaManager';

// Type definitions
interface FAQData {
  id: string;
  question: string;
  answer: string;
  highlights?: string[];
}

interface FAQItemProps {
  item: FAQData;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

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

// FAQ Item Component with refined design
const FAQItem: React.FC<FAQItemProps> = ({ item, isOpen, onClick, index }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const itemId = `faq-item-${item.id}`;
  const panelId = `faq-panel-${item.id}`;

  return (
    <motion.article
      className="border-b border-neutral-800/50 last:border-b-0"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <h3>
        <button
          id={itemId}
          onClick={onClick}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="w-full flex items-center justify-between text-left gap-6 py-8 group focus:outline-none focus:ring-2 focus:ring-blue-500/10 rounded-lg transition-all duration-500"
        >
          {/* Question with number indicator */}
          <div className="flex items-start gap-6 flex-1">
            <span className={`text-sm font-light transition-colors duration-500 ${
              isOpen ? 'text-blue-400' : 'text-neutral-600'
            }`}>
              0{index + 1}
            </span>
            
            <span className={`text-lg font-light transition-colors duration-500 ${
              isOpen ? 'text-white' : 'text-neutral-300 group-hover:text-white'
            }`}>
              {item.question}
            </span>
          </div>
          
          {/* Minimal Plus/Minus Indicator */}
          <div className="flex-shrink-0 relative w-6 h-6">
            <motion.span
              className="absolute inset-0 flex items-center justify-center"
              animate={{ rotate: isOpen ? 45 : 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <svg 
                className={`w-5 h-5 transition-colors duration-500 ${
                  isOpen ? 'text-blue-400' : 'text-neutral-500 group-hover:text-neutral-400'
                }`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </motion.span>
          </div>
        </button>
      </h3>

      {/* Answer Panel with refined animation */}
      <AnimatePresence initial={false} mode="wait">
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={itemId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ 
              height: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
              opacity: { duration: 0.3, ease: "easeInOut" }
            }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-12 pr-4" ref={contentRef}>
              {/* Main Answer Text */}
              <p className="text-neutral-400 leading-relaxed font-light">
                {item.answer}
              </p>
              
              {/* Refined Highlights */}
              {item.highlights && item.highlights.length > 0 && (
                <div className="mt-6 space-y-3">
                  {item.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="block w-1 h-1 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                      <span className="text-sm text-neutral-300 font-light">{highlight}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
};

// Main FAQ Component
const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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

  // Refined FAQ data with AEO optimization
  const faqData: FAQData[] = [
    {
      id: 'starlink-installation-cost',
      question: 'How much does Starlink installation cost in the DMV?',
      answer: 'Professional Starlink installation costs $499-$699 depending on complexity. Simple ground mounts start at $499, complex installations reach $699. The Complete Coverage Package with Wi-Fi optimization ranges from $799-$999.',
      highlights: [
        'Base Installation: $499 (ground/simple roof mount)',
        'Standard Installation: $599 (complex roof mount)',
        'Premium Installation: $699 (multi-story/specialty)',
        'Complete Coverage Package: $799-$999'
      ]
    },
    {
      id: 'pricing-factors',
      question: 'What factors determine Starlink installation pricing?',
      answer: 'Pricing depends on mounting location, cable run distance, roof type, accessibility, and obstruction removal needs. Base $499 includes standard ground mount with 50-foot cable run.',
      highlights: [
        'Mounting complexity (ground/roof/pole)',
        'Cable run distance (50 feet included)',
        'Roof type and accessibility',
        'Tree obstruction mitigation'
      ]
    },
    {
      id: 'service-radius',
      question: 'How far does The Orbit Tech travel for installations?',
      answer: 'The Orbit Tech serves a 100-mile radius from Reston, VA, covering Northern Virginia, most of Maryland, and parts of West Virginia. Same-day service within 50 miles, next-day for extended areas.',
      highlights: [
        '100-mile service radius from Reston, VA',
        'Same-day installation within 50 miles',
        'Next-day service for extended radius',
        'Covers Virginia, Maryland, West Virginia'
      ]
    },
    {
      id: 'installation-duration',
      question: 'How long does Starlink installation take?',
      answer: 'Professional Starlink installation typically takes 2-3 hours for standard installation or 3-4 hours for the Complete Coverage Package including Wi-Fi optimization.',
      highlights: [
        'Standard installation: 2-3 hours',
        'Complete Coverage Package: 3-4 hours',
        'Includes speed testing and training',
        '90-day warranty included'
      ]
    },
    {
      id: 'cost-justification',
      question: 'Is professional Starlink installation really worth the cost?',
      answer: 'Absolutely. While Starlink can be self-installed, professional installation ensures you achieve the maximum speeds you\'re paying for—often exceeding 250 Mbps. Our expert technicians prevent costly mistakes like improper mounting that can lead to equipment damage or roof leaks. We also optimize placement using professional tools to find the perfect sky view, something DIY installers often miss.',
      highlights: [
        'Protect your $599 equipment investment',
        'Avoid costly roof damage from improper mounting',
        'Achieve 30-50% better speeds through optimal placement',
        '90-day warranty on all work'
      ]
    },
    {
      id: 'tree-coverage',
      question: 'My property has a lot of trees. Can Starlink still work for me?',
      answer: 'Tree coverage is one of the most common challenges we solve. Our certified technicians use specialized equipment to conduct a comprehensive site survey, identifying the optimal installation location even in heavily wooded areas. We\'ve successfully installed Starlink in properties throughout the DMV\'s tree-dense neighborhoods using elevated mounts, strategic positioning, and creative solutions.',
      highlights: [
        'Professional sky-view analysis with specialized tools',
        'Custom mounting solutions up to 30 feet high',
        'Alternative placement options available',
        'Honest assessment if Starlink isn\'t viable'
      ]
    },
    {
      id: 'mesh-network-value',
      question: 'If Starlink provides Wi-Fi, why do I need a mesh network?',
      answer: 'While Starlink\'s built-in router provides basic Wi-Fi, it\'s designed for small to medium spaces. Most homes experience dead zones, especially in basements, upper floors, or areas far from the router. Our whole-home Wi-Fi optimization service extends your Starlink speeds to every corner of your property using enterprise-grade mesh systems.',
      highlights: [
        'Eliminate dead zones in large homes',
        'Consistent speeds in every room',
        'Support for 50+ connected devices',
        'Outdoor coverage for patios and garages'
      ]
    },
    {
      id: 'local-expertise',
      question: 'Why choose The Orbit Tech over national installers?',
      answer: 'As DMV\'s Starlink specialists, we\'re not generalists juggling TV mounts and doorbell cameras—we\'re connectivity experts. Our technicians are specifically trained on Starlink systems and understand the unique challenges of our region. Unlike national chains that send different contractors each time, we\'re local, accountable, and just a phone call away.',
      highlights: [
        'DMV-based team familiar with local regulations',
        'Starlink-certified specialist technicians',
        'Direct accountability—no subcontractors',
        'Same-day emergency support available'
      ]
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
      <FAQSchema faqs={faqData.map(faq => ({ question: faq.question, answer: faq.answer }))} />
      
      <motion.section
        id="faq"
        ref={containerRef}
        className="relative py-32 lg:py-40 overflow-hidden isolate"
        onMouseMove={handleMouseMove}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
        aria-labelledby="faq-heading"
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
              id="faq-heading"
              className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] mb-6"
            >
              <span className="text-white">Common questions.</span>
              <br />
              <span className="text-white font-semibold">Expert answers.</span>
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto font-light">
              Clear, honest guidance from DMV's leading connectivity specialists.
            </p>
          </motion.div>

          {/* FAQ Container - Clean and sophisticated */}
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            {/* Subtle border glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5 blur-xl -z-10" />
            
            {/* FAQ Items */}
            <div className="relative bg-gradient-to-b from-neutral-900/30 to-black/30 backdrop-blur-sm border border-neutral-800/50 rounded-2xl px-8 sm:px-12 py-4">
              {faqData.map((item, index) => (
                <FAQItem
                  key={item.id}
                  item={item}
                  isOpen={openIndex === index}
                  onClick={() => toggleFAQ(index)}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* Bottom accent line */}
          <motion.div 
            variants={lineVariants}
            className="w-24 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mt-16 origin-center"
          />

          {/* Subtle note - no CTA */}
          <motion.p 
            variants={itemVariants}
            className="text-center text-xs text-neutral-500 mt-8 font-light tracking-wide"
          >
            
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

export default FAQ;