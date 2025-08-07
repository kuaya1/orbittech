import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Shield, Trees, Wifi, Award, CheckCircle } from 'lucide-react';

// Type definitions
interface FAQData {
  id: string;
  question: string;
  answer: string;
  highlights?: string[];
  icon?: React.ReactNode;
}

interface FAQItemProps {
  item: FAQData;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

interface FAQSchemaProps {
  faqs: FAQData[];
}

// Schema.org Structured Data Component
const FAQSchema: React.FC<FAQSchemaProps> = ({ faqs }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

// Animated Chevron Component
const AnimatedChevron: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <motion.div
    animate={{ rotate: isOpen ? 180 : 0 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className="flex-shrink-0"
  >
    <ChevronDown className="w-5 h-5 text-neutral-400 group-hover:text-blue-400 transition-colors duration-300" />
  </motion.div>
);

// FAQ Item Component
const FAQItem: React.FC<FAQItemProps> = ({ item, isOpen, onClick, index }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const itemId = `faq-item-${item.id}`;
  const panelId = `faq-panel-${item.id}`;

  return (
    <motion.article
      className="border-b border-neutral-800 last:border-b-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <h3>
        <button
          id={itemId}
          onClick={onClick}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="w-full flex items-center justify-between text-left gap-4 py-6 group focus:outline-none focus:ring-2 focus:ring-blue-500/20 rounded-lg px-2 -mx-2 transition-all duration-300 hover:bg-white/5"
        >
          <div className="flex items-start gap-4 flex-1">
            {/* Optional Icon */}
            {item.icon && (
              <div className="flex-shrink-0 mt-1">
                {item.icon}
              </div>
            )}
            
            {/* Question Text */}
            <span className={`text-lg font-semibold transition-colors duration-300 ${
              isOpen ? 'text-white' : 'text-neutral-200 group-hover:text-white'
            }`}>
              {item.question}
            </span>
          </div>
          
          {/* Chevron Icon */}
          <AnimatedChevron isOpen={isOpen} />
        </button>
      </h3>

      {/* Answer Panel */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={itemId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 pl-4 pr-2" ref={contentRef}>
              {/* Main Answer Text */}
              <p className="text-neutral-300 leading-relaxed mb-4">
                {item.answer}
              </p>
              
              {/* Optional Highlights */}
              {item.highlights && item.highlights.length > 0 && (
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 mt-4">
                  <div className="space-y-2">
                    {item.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-neutral-200">{highlight}</span>
                      </div>
                    ))}
                  </div>
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

  // Strategically crafted FAQs aligned with business goals
  const faqData: FAQData[] = [
    {
      id: 'cost-justification',
      question: 'Is professional Starlink installation really worth the cost?',
      answer: 'Absolutely. While Starlink can be self-installed, professional installation ensures you achieve the maximum speeds you\'re paying for—often exceeding 250 Mbps. Our expert technicians prevent costly mistakes like improper mounting that can lead to equipment damage or roof leaks. We also optimize placement using professional tools to find the perfect sky view, something DIY installers often miss. When you consider the monthly subscription cost and equipment investment, professional installation is a small price for guaranteed performance and peace of mind.',
      highlights: [
        'Protect your $599 equipment investment',
        'Avoid costly roof damage from improper mounting',
        'Achieve 30-50% better speeds through optimal placement',
        '90-day warranty on all work'
      ],
      icon: <Shield className="w-5 h-5 text-blue-400 mt-0.5" />
    },
    {
      id: 'tree-coverage',
      question: 'My property has a lot of trees. Can Starlink still work for me?',
      answer: 'Tree coverage is one of the most common challenges we solve. Our certified technicians use specialized equipment to conduct a comprehensive site survey, identifying the optimal installation location even in heavily wooded areas. We\'ve successfully installed Starlink in properties throughout the DMV\'s tree-dense neighborhoods using elevated mounts, strategic positioning, and sometimes creative solutions like outbuilding installations. In cases where trees are unavoidable, we\'ll be honest about expected performance and may recommend complementary solutions.',
      highlights: [
        'Professional sky-view analysis with specialized tools',
        'Custom mounting solutions up to 30 feet high',
        'Alternative placement options (garages, sheds, poles)',
        'Honest assessment if Starlink isn\'t viable'
      ],
      icon: <Trees className="w-5 h-5 text-green-400 mt-0.5" />
    },
    {
      id: 'mesh-network-value',
      question: 'If Starlink provides Wi-Fi, why do I need a mesh network?',
      answer: 'While Starlink\'s built-in router provides basic Wi-Fi, it\'s designed for small to medium spaces. Most homes experience dead zones, especially in basements, upper floors, or areas far from the router. Our whole-home Wi-Fi optimization service extends your Starlink speeds to every corner of your property using enterprise-grade mesh systems. This means your amazing 250 Mbps Starlink connection actually reaches your home office, smart TVs, and outdoor spaces—not just the room with the router.',
      highlights: [
        'Eliminate dead zones in large homes',
        'Consistent speeds in every room',
        'Support for 50+ connected devices',
        'Outdoor coverage for patios and garages'
      ],
      icon: <Wifi className="w-5 h-5 text-blue-400 mt-0.5" />
    },
    {
      id: 'local-expertise',
      question: 'Why should I choose The Orbit Tech over a national company or big box store installer?',
      answer: 'As DMV\'s Starlink specialists, we\'re not generalists juggling TV mounts and doorbell cameras—we\'re connectivity experts. Our technicians are specifically trained on Starlink systems and understand the unique challenges of our region, from HOA requirements in Fairfax to historic district regulations in Alexandria. Unlike national chains that send different contractors each time, we\'re local, accountable, and just a phone call away if you need support. Our 5-star Google reviews and 90-day warranty reflect our commitment to excellence that big box stores simply can\'t match.',
      highlights: [
        'DMV-based team familiar with local regulations',
        'Starlink-certified specialist technicians',
        'Direct accountability—no subcontractors',
        'Same-day emergency support available'
      ],
      icon: <Award className="w-5 h-5 text-yellow-400 mt-0.5" />
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      <FAQSchema faqs={faqData} />
      
      <motion.section
        id="faq"
        className="py-24 sm:py-32 bg-black relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        aria-labelledby="faq-heading"
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-black to-neutral-950" />
          
          {/* Subtle pattern */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}
          />
          
          {/* Ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            variants={headerVariants}
          >
            <h2 
              id="faq-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
            >
              Your Questions,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Answered by the Experts
              </span>
            </h2>
            <p className="text-lg leading-8 text-neutral-300 max-w-2xl mx-auto">
              Get clear, honest answers about professional Starlink installation from DMV's leading connectivity specialists.
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div 
            className="bg-gradient-to-br from-neutral-900/50 to-black/50 border border-neutral-800 rounded-2xl p-6 sm:p-8"
            variants={headerVariants}
          >
            {faqData.map((item, index) => (
              <FAQItem
                key={item.id}
                item={item}
                isOpen={openIndex === index}
                onClick={() => toggleFAQ(index)}
                index={index}
              />
            ))}
          </motion.div>

          {/* Subtle Consultation Note - No Hard CTA */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-neutral-400 text-sm">
              For personalized guidance about your specific installation needs, our certified technicians are available for consultation.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default FAQ;