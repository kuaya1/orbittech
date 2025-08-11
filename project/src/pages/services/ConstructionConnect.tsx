import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import SEOMetadata from '@/components/SEOMetadata';
import injectSchema from '@/components/SchemaInjector';
import { X, Check, TrendingDown } from 'lucide-react';

// Console easter egg
console.log("🚧 Construction Connect: Enterprise-grade connectivity in 4 hours, not 4 weeks.");

// Types for ROI Calculator
interface ROIInputs {
  crewSize: number;
  hourlyRate: number;
  hoursLost: number;
}

interface ROICalculation {
  weeklyLoss: number;
  monthlyLoss: number;
  annualSavings: number;
}

// Hero stats data
const HERO_STATS = [
  { number: 47, label: "Active Sites", suffix: "", color: "text-orange-primary" },
  { number: 312, label: "Average Speed", suffix: " Mbps", color: "text-white" },
  { number: 4, label: "Deployment Time", suffix: " Hours", color: "text-white" },
  { number: 99.97, label: "Uptime", suffix: "%", color: "text-green-success" },
] as const;

// Problem/Solution section data
const PROBLEM_ITEMS = [
  "2-6 week wait times",
  "Unreliable hotspots (5-10 Mbps)",
  "Dropped video calls with architects",
  "Can't submit digital permits",
  "Crew standing idle",
];

const IMPACT_ITEMS = [
  "$2,600/hour in idle crew costs",
  "$15,000/day in equipment rental",
  "Missed milestone penalties",
  "Damaged reputation",
  "Lost future contracts",
];

const SOLUTION_ITEMS = [
  "Same-day deployment",
  "250-350 Mbps guaranteed",
  "99.97% uptime SLA",
  "Dedicated support team",
  "Month-to-month flexibility",
];

// Speed comparison data
const SPEED_COMPARISON = [
  {
    provider: "The Orbit Tech",
    speed: "312 Mbps avg",
    deployment: "4 hours",
    reliability: "99.97%",
    cost: "$899/mo",
    highlighted: true
  },
  {
    provider: "Traditional ISP",
    speed: "100 Mbps max",
    deployment: "3-6 weeks",
    reliability: "94%",
    cost: "$599/mo + install",
    highlighted: false
  },
  {
    provider: "5G Hotspots",
    speed: "5-50 Mbps",
    deployment: "Same day",
    reliability: "67%",
    cost: "$299/mo",
    highlighted: false
  },
  {
    provider: "Competitor Satellite",
    speed: "25-100 Mbps",
    deployment: "2 weeks",
    reliability: "89%",
    cost: "$799/mo",
    highlighted: false
  }
];

// Process timeline data
const PROCESS_TIMELINE = [
  {
    time: "8:00 AM",
    title: "You Call",
    details: [
      "Speak directly with our construction team",
      "Get immediate confirmation"
    ]
  },
  {
    time: "9:00 AM",
    title: "We Arrive",
    details: [
      "Full equipment ready",
      "Site survey completed"
    ]
  },
  {
    time: "10:30 AM",
    title: "Installation Begins",
    details: [
      "Professional mounting",
      "Weatherproofing included"
    ]
  },
  {
    time: "11:30 AM",
    title: "Testing & Optimization",
    details: [
      "Speed verification",
      "Network configuration"
    ]
  },
  {
    time: "12:00 PM",
    title: "You're Online",
    details: [
      "312 Mbps average",
      "Full team connected"
    ]
  }
];

// Analytics tracking function
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const trackEvent = (eventName: string, category: string, label: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
  console.log(`Analytics: ${category} - ${label}`, value);
};

// Animated Counter Component
const AnimatedCounter: React.FC<{ end: number; suffix?: string; duration?: number }> = ({ 
  end, 
  suffix = "", 
  duration = 2000 
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(countRef, { once: true });

  useEffect(() => {
    if (isInView) {
      const startTime = Date.now();
      const endTime = startTime + duration;
      
      const updateCount = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        
        setCount(end * easeOutQuart);
        
        if (now < endTime) {
          requestAnimationFrame(updateCount);
        } else {
          setCount(end);
        }
      };
      
      requestAnimationFrame(updateCount);
    }
  }, [isInView, end, duration]);

  return (
    <div ref={countRef}>
      {end % 1 === 0 ? Math.floor(count) : count.toFixed(2)}{suffix}
    </div>
  );
};

// ROI Calculator Modal Component
const ROICalculatorModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [inputs, setInputs] = useState<ROIInputs>({
    crewSize: 20,
    hourlyRate: 65,
    hoursLost: 8
  });

  const [results, setResults] = useState<ROICalculation | null>(null);

  const calculateROI = () => {
    const weeklyLoss = inputs.crewSize * inputs.hourlyRate * inputs.hoursLost;
    const monthlyLoss = weeklyLoss * 4;
    const annualSavings = monthlyLoss * 12 * 0.9;

    setResults({
      weeklyLoss,
      monthlyLoss,
      annualSavings
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numValue = Math.max(0, parseInt(value) || 0);
    
    setInputs(prev => ({
      ...prev,
      [name]: numValue
    }));
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-black">Calculate Your Losses</h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="space-y-2">
                <label htmlFor="crewSize" className="block text-sm font-medium text-gray-600">
                  Crew Size
                </label>
                <input
                  id="crewSize"
                  type="number"
                  name="crewSize"
                  value={inputs.crewSize}
                  onChange={handleInputChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-orange-primary"
                  min="1"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="hourlyRate" className="block text-sm font-medium text-gray-600">
                  Hourly Rate ($)
                </label>
                <input
                  id="hourlyRate"
                  type="number"
                  name="hourlyRate"
                  value={inputs.hourlyRate}
                  onChange={handleInputChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-orange-primary"
                  min="1"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="hoursLost" className="block text-sm font-medium text-gray-600">
                  Hours Lost/Week
                </label>
                <input
                  id="hoursLost"
                  type="number"
                  name="hoursLost"
                  value={inputs.hoursLost}
                  onChange={handleInputChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-orange-primary"
                  min="0"
                  max="168"
                />
              </div>
            </div>

            <button
              onClick={calculateROI}
              className="w-full bg-orange-primary text-white font-semibold py-4 rounded-lg mb-8 hover:bg-orange-hover transition-colors"
            >
              Calculate Losses
            </button>

            {results && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-red-50 p-6 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">Weekly Loss</p>
                  <p className="text-3xl font-bold text-red-alert">
                    ${results.weeklyLoss.toLocaleString()}
                  </p>
                </div>
                <div className="bg-red-50 p-6 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">Monthly Loss</p>
                  <p className="text-4xl font-bold text-red-alert">
                    ${results.monthlyLoss.toLocaleString()}
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">Annual Savings</p>
                  <p className="text-3xl font-bold text-green-success">
                    ${results.annualSavings.toLocaleString()}
                  </p>
                </div>
              </div>
            )}

            {results && (
              <div className="mt-8 text-center">
                <button 
                  className="bg-green-success text-white font-semibold py-4 px-8 rounded-lg hover:bg-green-600 transition-colors"
                  onClick={() => {
                    trackEvent('click', 'CTA', 'Stop Losing Money - Modal', results.monthlyLoss);
                    window.location.href = 'tel:7035553278';
                  }}
                >
                  Stop Losing Money - Deploy Now
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Inline ROI Calculator Component
const InlineROICalculator: React.FC = () => {
  const [inputs, setInputs] = useState<ROIInputs>({
    crewSize: 20,
    hourlyRate: 65,
    hoursLost: 8
  });

  const [results, setResults] = useState<ROICalculation | null>(null);

  // Calculate in real-time as user types
  useEffect(() => {
    const weeklyLoss = inputs.crewSize * inputs.hourlyRate * inputs.hoursLost;
    const monthlyLoss = weeklyLoss * 4;
    const annualSavings = monthlyLoss * 12 * 0.9;

    setResults({
      weeklyLoss,
      monthlyLoss,
      annualSavings
    });
  }, [inputs]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numValue = Math.max(0, parseInt(value) || 0);
    
    setInputs(prev => ({
      ...prev,
      [name]: numValue
    }));
  };

  const orbitTechMonthlyCost = 899;
  const monthlySavings = results ? results.monthlyLoss - orbitTechMonthlyCost : 0;

  return (
    <div className="max-w-6xl mx-auto">
      {/* Input Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-gray-800 rounded-2xl p-8 mb-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <label className="block text-white font-semibold text-lg">
              Crew Size
            </label>
            <input
              type="number"
              name="crewSize"
              value={inputs.crewSize}
              onChange={handleInputChange}
              className="w-full bg-gray-700 border-2 border-gray-600 rounded-xl px-6 py-4 text-white text-2xl font-bold focus:outline-none focus:border-orange-primary transition-colors"
              min="1"
            />
          </div>
          
          <div className="space-y-3">
            <label className="block text-white font-semibold text-lg">
              Hourly Rate ($)
            </label>
            <input
              type="number"
              name="hourlyRate"
              value={inputs.hourlyRate}
              onChange={handleInputChange}
              className="w-full bg-gray-700 border-2 border-gray-600 rounded-xl px-6 py-4 text-white text-2xl font-bold focus:outline-none focus:border-orange-primary transition-colors"
              min="1"
            />
          </div>
          
          <div className="space-y-3">
            <label className="block text-white font-semibold text-lg">
              Hours Lost/Week
            </label>
            <input
              type="number"
              name="hoursLost"
              value={inputs.hoursLost}
              onChange={handleInputChange}
              className="w-full bg-gray-700 border-2 border-gray-600 rounded-xl px-6 py-4 text-white text-2xl font-bold focus:outline-none focus:border-orange-primary transition-colors"
              min="0"
              max="168"
            />
          </div>
        </div>
      </motion.div>

      {/* Results Section */}
      {results && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Loss Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <p className="text-gray-400 text-lg mb-3">Weekly Loss</p>
              <motion.p 
                key={results.weeklyLoss}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                className="text-4xl lg:text-5xl font-black text-red-alert"
              >
                $<AnimatedCounter end={results.weeklyLoss} suffix="" />
              </motion.p>
            </div>
            
            <div className="text-center">
              <p className="text-gray-400 text-lg mb-3">Monthly Loss</p>
              <motion.p 
                key={results.monthlyLoss}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                className="text-5xl lg:text-6xl font-black text-red-alert"
              >
                $<AnimatedCounter end={results.monthlyLoss} suffix="" />
              </motion.p>
            </div>
            
            <div className="text-center">
              <p className="text-gray-400 text-lg mb-3">Annual Impact</p>
              <motion.p 
                key={results.annualSavings}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                className="text-4xl lg:text-5xl font-black text-red-alert"
              >
                $<AnimatedCounter end={results.annualSavings} suffix="" />
              </motion.p>
            </div>
          </div>

          {/* Savings Comparison */}
          <div className="bg-green-900/20 border-2 border-green-success rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-center">
                <p className="text-gray-400 text-lg mb-3">With Orbit Tech</p>
                <p className="text-3xl font-black text-green-success">
                  ${orbitTechMonthlyCost}/month
                </p>
              </div>
              
              <div className="text-center">
                <p className="text-gray-400 text-lg mb-3">YOU SAVE</p>
                <motion.p 
                  key={monthlySavings}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  className="text-5xl lg:text-6xl font-black text-green-success"
                >
                  $<AnimatedCounter end={monthlySavings} suffix="/month" />
                </motion.p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <button
              onClick={() => {
                trackEvent('click', 'CTA', 'Stop The Bleeding - Inline Calculator', results.monthlyLoss);
                window.location.href = 'tel:7035553278';
              }}
              className="bg-orange-primary text-white text-2xl font-black px-12 py-6 rounded-xl hover:bg-orange-hover transition-all duration-200 transform hover:scale-105 shadow-2xl"
            >
              STOP THE BLEEDING →
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

// Live Cost Counter Component
const LiveCostCounter: React.FC = () => {
  const [cost, setCost] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(counterRef, { once: true });

  useEffect(() => {
    if (isInView && !isVisible) {
      setIsVisible(true);
      startTimeRef.current = Date.now();
    }
  }, [isInView, isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      if (startTimeRef.current) {
        const elapsed = (Date.now() - startTimeRef.current) / 1000; // seconds
        // $2600 per hour = $0.72 per second
        const newCost = Math.floor(elapsed * 0.72);
        setCost(newCost);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <div ref={counterRef}>
      {cost.toLocaleString()}
    </div>
  );
};

const ConstructionConnect: React.FC = () => {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  // Schema data for construction internet service
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "4-Hour Construction Site Internet Deploy",
    "description": "Emergency connectivity for construction sites. Deploy today. No contracts. 312 Mbps average across 47 active DMV sites.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "The Orbit Tech",
      "telephone": "(703) 555-FAST",
      "areaServed": {
        "@type": "State",
        "name": ["Virginia", "Maryland", "District of Columbia"]
      }
    },
    "serviceType": "Construction Site Internet",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Construction Internet Solutions",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "4-Hour Internet Installation",
            "description": "Emergency internet connectivity deployed in 4 hours or less"
          }
        }
      ]
    }
  };

  useEffect(() => {
    injectSchema(schemaData);
  }, []);

  return (
    <>
      <SEOMetadata 
        title="Construction Site Internet in 4 Hours | DMV Emergency Deploy"
        description="Your site needs internet today, not next month. 312 Mbps average across 47 active construction sites. 4-hour guarantee. Call (703) 555-FAST"
      />
      
      {/* Global Styles for New Design System */}
      <style>{`
        :root {
          --black: #000000;
          --white: #FFFFFF;
          --gray-50: #FAFAFA;
          --gray-100: #F5F5F5;
          --gray-200: #E5E5E5;
          --gray-400: #A3A3A3;
          --gray-600: #525252;
          --gray-800: #262626;
          --orange-primary: #FF6B2B;
          --orange-hover: #E55A1F;
          --green-success: #22C55E;
          --red-alert: #EF4444;
        }
        
        .text-orange-primary { color: var(--orange-primary); }
        .text-green-success { color: var(--green-success); }
        .text-red-alert { color: var(--red-alert); }
        .bg-orange-primary { background-color: var(--orange-primary); }
        .bg-orange-hover { background-color: var(--orange-hover); }
        .bg-green-success { background-color: var(--green-success); }
        .bg-red-alert { background-color: var(--red-alert); }
        .border-orange-primary { border-color: var(--orange-primary); }
        .focus\\:ring-orange-primary:focus { box-shadow: 0 0 0 3px rgba(255, 107, 43, 0.1); }
        .hover\\:bg-orange-hover:hover { background-color: var(--orange-hover); }
        .hover\\:bg-green-600:hover { background-color: #16a34a; }
        .bg-green-50 { background-color: #f0fdf4; }
        .bg-red-50 { background-color: #fef2f2; }
      `}</style>

      <div className="min-h-screen">
        {/* SECTION 1: Hero (Black Background) */}
        <section className="bg-black text-white min-h-[80vh] flex items-center py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              {/* Left Content - 60% */}
              <div className="lg:col-span-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="text-orange-primary text-sm font-semibold tracking-widest uppercase mb-6">
                    EMERGENCY DEPLOYMENT AVAILABLE
                  </p>
                  
                  <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] mb-8">
                    Your Site Needs Internet{' '}
                    <span className="text-white">Today.</span>{' '}
                    Not Next Month.
                  </h1>
                  
                  <p className="text-xl lg:text-2xl text-gray-400 leading-relaxed mb-12 max-w-2xl">
                    While others quote 3-6 weeks, we guarantee connection in 4 hours. 
                    312 Mbps average across 47 active construction sites.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <motion.button
                      className="bg-orange-primary text-white text-lg font-semibold px-8 py-4 rounded-xl hover:bg-orange-hover transition-all duration-200 transform hover:scale-105"
                      whileHover={{ y: -2 }}
                      whileTap={{ y: 0 }}
                      onClick={() => {
                        trackEvent('click', 'CTA', 'Deploy Today - Hero');
                        window.location.href = 'tel:7035553278';
                      }}
                    >
                      DEPLOY TODAY →
                    </motion.button>
                    
                    <motion.button
                      className="border-2 border-white text-white text-lg font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-black transition-all duration-200"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        trackEvent('click', 'CTA', 'Call - Hero');
                        window.location.href = 'tel:7035553278';
                      }}
                    >
                      (703) 555-FAST
                    </motion.button>
                  </div>
                  
                  <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Check className="w-4 h-4 text-green-success mr-2" />
                      Starlink Authorized
                    </div>
                    <div className="flex items-center">
                      <Check className="w-4 h-4 text-green-success mr-2" />
                      4-Hour Guarantee
                    </div>
                    <div className="flex items-center">
                      <Check className="w-4 h-4 text-green-success mr-2" />
                      No Contracts
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Right Content - 40% Stats Card */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gray-800 rounded-2xl p-8 border border-gray-700"
                >
                  <div className="space-y-8">
                    {HERO_STATS.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        className="text-center"
                      >
                        <div className={`text-4xl lg:text-5xl font-black ${stat.color} mb-2`}>
                          <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                        </div>
                        <div className="text-gray-400 text-sm font-medium tracking-wide">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Problem/Solution (White Background) */}
        <section className="bg-white text-black min-h-[80vh] flex items-center py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <p className="text-orange-primary text-sm font-semibold tracking-widest uppercase mb-6">
                THE CONNECTIVITY CRISIS
              </p>
              
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-8">
                Every Hour Without Internet Costs You $2,600
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Your crew. Your equipment. Your deadlines. All waiting.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Column 1: The Problem */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <X className="w-10 h-10 text-red-alert" />
                </div>
                
                <h3 className="text-2xl font-bold mb-6">What You're Dealing With</h3>
                
                <ul className="space-y-4 text-left">
                  {PROBLEM_ITEMS.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-alert mr-3 mt-1">•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Column 2: The Impact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <TrendingDown className="w-10 h-10 text-red-alert" />
                </div>
                
                <h3 className="text-2xl font-bold mb-6">What It's Costing You</h3>
                
                <ul className="space-y-4 text-left">
                  {IMPACT_ITEMS.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-alert mr-3 mt-1">•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Column 3: Our Solution */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <Check className="w-10 h-10 text-green-success" />
                </div>
                
                <h3 className="text-2xl font-bold mb-6">What We Deliver</h3>
                
                <ul className="space-y-4 text-left">
                  {SOLUTION_ITEMS.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-success mr-3 mt-1">•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-16"
            >
              <button
                onClick={() => {
                  trackEvent('click', 'CTA', 'Calculate Losses');
                  setIsCalculatorOpen(true);
                }}
                className="bg-orange-primary text-white text-lg font-semibold px-8 py-4 rounded-xl hover:bg-orange-hover transition-all duration-200 transform hover:scale-105"
              >
                Calculate Your Losses →
              </button>
            </motion.div>
          </div>
        </section>

        {/* SECTION 3: Speed Comparison (Black Background) */}
        <section className="bg-black text-white min-h-[80vh] flex items-center py-32 relative overflow-hidden">
          {/* Subtle grid pattern overlay */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}
          />
          
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <p className="text-orange-primary text-sm font-semibold tracking-widest uppercase mb-6">
                REAL PERFORMANCE DATA
              </p>
              
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-8">
                Speed That Matches Your Pace
              </h2>
              
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Yesterday's actual speed tests from active construction sites
              </p>
            </motion.div>

            <div className="overflow-x-auto">
              <motion.table 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full min-w-[800px] bg-gray-900/50 rounded-2xl overflow-hidden backdrop-blur-sm"
              >
                <thead>
                  <tr className="bg-gray-800/80">
                    <th className="px-8 py-6 text-left font-bold text-white">Provider</th>
                    <th className="px-8 py-6 text-left font-bold text-white">Speed</th>
                    <th className="px-8 py-6 text-left font-bold text-white">Deployment</th>
                    <th className="px-8 py-6 text-left font-bold text-white">Reliability</th>
                    <th className="px-8 py-6 text-left font-bold text-white">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {SPEED_COMPARISON.map((row, index) => (
                    <motion.tr
                      key={row.provider}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className={`border-b border-gray-700/50 ${
                        row.highlighted 
                          ? 'bg-orange-primary/10 border-orange-primary border-2' 
                          : 'bg-gray-800/30'
                      }`}
                    >
                      <td className={`px-8 py-6 font-semibold ${row.highlighted ? 'text-orange-primary' : 'text-white'}`}>
                        {row.provider}
                        {row.highlighted && (
                          <span className="ml-2 text-xs bg-orange-primary text-white px-2 py-1 rounded-full">
                            RECOMMENDED
                          </span>
                        )}
                      </td>
                      <td className={`px-8 py-6 font-mono text-lg ${row.highlighted ? 'text-green-success' : 'text-gray-300'}`}>
                        {row.speed}
                      </td>
                      <td className={`px-8 py-6 ${row.highlighted ? 'text-green-success' : 'text-gray-300'}`}>
                        {row.deployment}
                      </td>
                      <td className={`px-8 py-6 font-mono ${row.highlighted ? 'text-green-success' : 'text-gray-300'}`}>
                        {row.reliability}
                      </td>
                      <td className={`px-8 py-6 font-semibold ${row.highlighted ? 'text-white' : 'text-gray-300'}`}>
                        {row.cost}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </motion.table>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center mt-12"
            >
              <button 
                className="text-orange-primary hover:text-orange-hover font-semibold text-lg transition-colors"
                onClick={() => {
                  trackEvent('click', 'Link', 'View Live Speed Test');
                  window.location.href = '/speed-tests/live';
                }}
              >
                View Live Speed Test →
              </button>
            </motion.div>
          </div>
        </section>

        {/* SECTION 4: Process (White Background) */}
        <section className="bg-white text-black min-h-[80vh] flex items-center py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <p className="text-orange-primary text-sm font-semibold tracking-widest uppercase mb-6">
                THE 4-HOUR PROMISE
              </p>
              
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-8">
                From Call to Connection Before Lunch
              </h2>
            </motion.div>

            {/* Desktop Timeline */}
            <div className="hidden lg:block relative">
              {/* Progress bar background */}
              <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 rounded-full transform -translate-y-1/2 z-0" />
              
              {/* Animated progress bar */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="absolute top-1/2 left-0 w-full h-1 bg-orange-primary rounded-full transform -translate-y-1/2 origin-left z-10"
              />

              <div className="grid grid-cols-5 gap-4 relative z-20">
                {PROCESS_TIMELINE.map((step, index) => (
                  <motion.div
                    key={step.time}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="text-center"
                  >
                    <div className="bg-orange-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-sm">
                      {step.time}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                    
                    <ul className="space-y-2 text-sm text-gray-600">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="leading-relaxed">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="lg:hidden space-y-8">
              {PROCESS_TIMELINE.map((step, index) => (
                <motion.div
                  key={step.time}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-6"
                >
                  <div className="bg-orange-primary text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {step.time}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <ul className="space-y-2 text-gray-600">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="leading-relaxed">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: ROI Calculator (Black Background) */}
        <section className="bg-black text-white min-h-[80vh] flex items-center py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-8">
                See Your Real Losses
              </h2>
              
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Every day without proper internet is money burned
              </p>
            </motion.div>

            <InlineROICalculator />
          </div>
        </section>

        {/* SECTION 6: Social Proof (White Background) */}
        <section className="bg-white text-black min-h-[80vh] flex items-center py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <p className="text-orange-primary text-sm font-semibold tracking-widest uppercase mb-6">
                TRUSTED BY LEADING CONTRACTORS
              </p>
              
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-8">
                47 Sites. Zero Failures. One Choice.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
              {/* Left: Testimonial Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gray-50 rounded-2xl p-12 relative"
              >
                <div className="text-6xl text-orange-primary mb-6 leading-none">"</div>
                
                <blockquote className="text-xl lg:text-2xl leading-relaxed text-gray-800 mb-8">
                  We were hemorrhaging $15,000 a day waiting for permits. 
                  Orbit Tech had us online in 3.5 hours. We submitted 47 
                  documents that afternoon and got back on schedule.
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-lg text-black">Michael Chen</p>
                    <p className="text-gray-600">Meridian Construction</p>
                  </div>
                  
                  <div className="flex items-center bg-blue-50 px-4 py-2 rounded-lg">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-blue-700">Verified Google Review</span>
                  </div>
                </div>
              </motion.div>

              {/* Right: Live Sites Grid */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold mb-8">Live Sites Right Now</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { location: "Tyson's Corner", speed: "324 Mbps", days: "47", contractor: "Clark" },
                    { location: "Bethesda Metro", speed: "298 Mbps", days: "23", contractor: "Walsh" },
                    { location: "Arlington Towers", speed: "356 Mbps", days: "12", contractor: "HITT" },
                    { location: "Rosslyn Gateway", speed: "289 Mbps", days: "8", contractor: "Whiting" },
                    { location: "Dulles Expansion", speed: "312 Mbps", days: "3", contractor: "Turner" },
                    { location: "Pentagon City", speed: "278 Mbps", days: "1", contractor: "Meridian" }
                  ].map((site, index) => (
                    <motion.div
                      key={site.location}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                      className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all duration-200 cursor-pointer"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-sm">{site.location}</h4>
                        <div className="w-2 h-2 bg-green-success rounded-full animate-pulse"></div>
                      </div>
                      
                      <div className="text-2xl font-black text-green-success mb-1">
                        {site.speed}
                      </div>
                      
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>{site.days} days online</span>
                        <span>{site.contractor}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Bottom: Logo Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <p className="text-gray-500 text-sm mb-8">TRUSTED BY</p>
              
              <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
                {["Clark Construction", "Walsh Group", "HITT", "Whiting-Turner"].map((company, index) => (
                  <motion.div
                    key={company}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.6 }}
                    whileHover={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="text-lg font-semibold text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {company}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 7: Packages (Black Background) */}
        <section className="bg-black text-white min-h-[80vh] flex items-center py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <p className="text-orange-primary text-sm font-semibold tracking-widest uppercase mb-6">
                TRANSPARENT PRICING
              </p>
              
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-8">
                Choose Your Deployment Level
              </h2>
              
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                No contracts. No hidden fees. Cancel anytime.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* RAPID DEPLOY */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gray-900 border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">RAPID DEPLOY</h3>
                  <div className="text-4xl font-black mb-4">$899<span className="text-lg font-normal text-gray-400">/mo</span></div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-success mr-3" />
                    <span>4-hour deployment</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-success mr-3" />
                    <span>250+ Mbps Starlink</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-success mr-3" />
                    <span>Basic support</span>
                  </li>
                </ul>
                
                <p className="text-sm text-gray-400 mb-6">Best for: Single sites</p>
                
                <button 
                  className="w-full bg-white text-black font-semibold py-4 rounded-xl hover:bg-gray-100 transition-colors"
                  onClick={() => {
                    trackEvent('click', 'CTA', 'Deploy Rapid Plan');
                    window.location.href = 'tel:7035553278';
                  }}
                >
                  DEPLOY THIS PLAN
                </button>
              </motion.div>

              {/* SITE COMMAND - RECOMMENDED */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-900 border-2 border-orange-primary rounded-2xl p-8 relative transform scale-105 shadow-2xl"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-primary text-white px-6 py-2 rounded-full text-sm font-bold">
                    RECOMMENDED
                  </span>
                </div>
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">SITE COMMAND</h3>
                  <div className="text-4xl font-black mb-4">$1,299<span className="text-lg font-normal text-gray-400">/mo</span></div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-success mr-3" />
                    <span>Everything in Rapid</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-success mr-3" />
                    <span>Redundant 5G backup</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-success mr-3" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-success mr-3" />
                    <span>Network monitoring</span>
                  </li>
                </ul>
                
                <p className="text-sm text-gray-400 mb-6">Best for: Critical projects</p>
                
                <button 
                  className="w-full bg-orange-primary text-white font-semibold py-4 rounded-xl hover:bg-orange-hover transition-colors"
                  onClick={() => {
                    trackEvent('click', 'CTA', 'Deploy Command Plan');
                    window.location.href = 'tel:7035553278';
                  }}
                >
                  DEPLOY THIS PLAN
                </button>
              </motion.div>

              {/* ENTERPRISE MESH */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gray-900 border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">ENTERPRISE MESH</h3>
                  <div className="text-4xl font-black mb-4">$2,499<span className="text-lg font-normal text-gray-400">/mo</span></div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-success mr-3" />
                    <span>Everything in Command</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-success mr-3" />
                    <span>Multi-site connectivity</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-success mr-3" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-success mr-3" />
                    <span>Custom configurations</span>
                  </li>
                </ul>
                
                <p className="text-sm text-gray-400 mb-6">Best for: Large operations</p>
                
                <button 
                  className="w-full bg-white text-black font-semibold py-4 rounded-xl hover:bg-gray-100 transition-colors"
                  onClick={() => {
                    trackEvent('click', 'CTA', 'Deploy Enterprise Plan');
                    window.location.href = 'tel:7035553278';
                  }}
                >
                  DEPLOY THIS PLAN
                </button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="text-center"
            >
              <p className="text-gray-400">
                or{' '}
                <button 
                  className="text-orange-primary hover:text-orange-hover underline"
                  onClick={() => {
                    trackEvent('click', 'Link', 'Custom Pricing');
                    window.location.href = 'tel:7035553278';
                  }}
                >
                  call for custom pricing
                </button>
              </p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 8: Risk Reversal (White Background) */}
        <section className="bg-white text-black min-h-[80vh] flex items-center py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black leading-tight">
                Zero Risk. Total Confidence.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 4-Hour Deployment */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-orange-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">4-Hour Deployment</h3>
                <p className="text-gray-600 leading-relaxed">
                  Online within 4 hours of arrival or your first month is free
                </p>
              </motion.div>

              {/* Speed Guarantee */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">Speed Guarantee</h3>
                <p className="text-gray-600 leading-relaxed">
                  Minimum 200 Mbps or we'll upgrade your equipment at no cost
                </p>
              </motion.div>

              {/* 99.97% Uptime */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">99.97% Uptime</h3>
                <p className="text-gray-600 leading-relaxed">
                  Less than 15 minutes downtime per month, guaranteed
                </p>
              </motion.div>

              {/* No Contracts */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">No Contracts</h3>
                <p className="text-gray-600 leading-relaxed">
                  Month-to-month. Cancel anytime with 24-hour notice
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 9: Urgency Driver (Black Background) */}
        <section className="bg-black text-white min-h-[80vh] flex items-center py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: Cost Counter */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center lg:text-left"
              >
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-300 mb-8">
                  While You Read This Page You've Lost:
                </h3>
                
                <div className="bg-gray-900/50 border-2 border-red-500/30 rounded-2xl p-8 mb-6">
                  <motion.div
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-6xl lg:text-7xl font-black text-red-alert mb-4"
                  >
                    $<LiveCostCounter />
                  </motion.div>
                  
                  <p className="text-gray-400 text-sm">
                    Based on average construction site burn rate
                  </p>
                </div>
              </motion.div>

              {/* Right: Availability Alert */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center lg:text-left"
              >
                <h3 className="text-2xl lg:text-3xl font-bold mb-8">
                  Today's Deployment Schedule
                </h3>
                
                <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 mb-8">
                  <div className="space-y-6">
                    {[
                      { time: "8:00 AM", status: "filled", location: "Tysons Corner" },
                      { time: "10:00 AM", status: "filled", location: "Arlington" },
                      { time: "12:00 PM", status: "available", location: null },
                      { time: "2:00 PM", status: "available", location: null },
                      { time: "4:00 PM", status: "pending", location: null }
                    ].map((slot, index) => (
                      <motion.div
                        key={slot.time}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-center justify-between py-3 border-b border-gray-700/50 last:border-b-0"
                      >
                        <div className="flex items-center">
                          <div className={`w-3 h-3 rounded-full mr-4 ${
                            slot.status === 'filled' ? 'bg-red-500' :
                            slot.status === 'available' ? 'bg-green-500' :
                            'bg-orange-500'
                          }`}></div>
                          
                          <span className="font-mono text-lg">{slot.time}</span>
                        </div>
                        
                        <div className="text-right">
                          {slot.status === 'filled' && (
                            <span className="text-red-400 text-sm">Filled ({slot.location})</span>
                          )}
                          {slot.status === 'available' && (
                            <span className="text-green-400 font-semibold">AVAILABLE</span>
                          )}
                          {slot.status === 'pending' && (
                            <span className="text-orange-400 text-sm">Pending</span>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-red-900/20 border border-red-500/30 rounded-xl">
                    <p className="text-red-300 text-center font-semibold">
                      Only 2 slots remaining for tomorrow
                    </p>
                  </div>
                </div>
                
                <motion.button
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-full bg-orange-primary text-white text-xl font-black py-6 rounded-xl hover:bg-orange-hover transition-colors shadow-2xl"
                  onClick={() => {
                    trackEvent('click', 'CTA', 'Claim Your Slot');
                    window.location.href = 'tel:7035553278';
                  }}
                >
                  CLAIM YOUR SLOT →
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 10: Final CTA (White Background) */}
        <section className="bg-white text-black min-h-[80vh] flex items-center py-32">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 w-full text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-8">
                Your Crew Is Waiting.
              </h2>
              
              <p className="text-xl lg:text-2xl text-gray-600 mb-16 max-w-2xl mx-auto">
                Every hour costs $2,600. We deploy in 4.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-orange-primary text-white text-xl font-black px-12 py-6 rounded-xl hover:bg-orange-hover transition-all duration-200 shadow-2xl"
                  onClick={() => {
                    trackEvent('click', 'CTA', 'Start Deployment - Final');
                    window.location.href = 'tel:7035553278';
                  }}
                >
                  START DEPLOYMENT
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="border-2 border-black text-black text-xl font-semibold px-12 py-6 rounded-xl hover:bg-black hover:text-white transition-all duration-200"
                  onClick={() => {
                    trackEvent('click', 'CTA', 'Schedule Tomorrow');
                    window.location.href = 'tel:7035553278';
                  }}
                >
                  Schedule for Tomorrow
                </motion.button>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-12"
              >
                <p className="text-lg text-gray-600 mb-2">
                  📞 Or call{' '}
                  <a 
                    href="tel:7035553278" 
                    className="text-orange-primary font-bold hover:text-orange-hover transition-colors"
                  >
                    (703) 555-FAST
                  </a>
                  {' '}right now
                </p>
                <p className="text-gray-500">
                  Kent from our construction team will answer
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap justify-center items-center gap-8 text-gray-500"
              >
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-success mr-2" />
                  <span>47 Active Sites</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-success mr-2" />
                  <span>312 Mbps Average</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-success mr-2" />
                  <span>4-Hour Guarantee</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* ROI Calculator Modal */}
      <ROICalculatorModal 
        isOpen={isCalculatorOpen} 
        onClose={() => setIsCalculatorOpen(false)} 
      />
    </>
  );
};

export default ConstructionConnect;
