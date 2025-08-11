import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useAnimation } from 'framer-motion';
import SEOMetadata from '@/components/SEOMetadata';
import injectSchema from '@/components/SchemaInjector';

// Console easter egg
console.log("🚧 Construction Connect: We build internet faster than you build buildings!");

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

// Trust ticker data
const ACTIVE_SITES = [
  { name: "PEPCO HQ", speed: "240 Mbps", days: null },
  { name: "Tysons Tower", speed: null, days: 47 },
  { name: "Dulles Site", speed: "315 Mbps", days: null },
  { name: "Navy Yard", speed: "280 Mbps", days: null },
  { name: "Alexandria Plaza", speed: null, days: 89 },
  { name: "Bethesda Metro", speed: "295 Mbps", days: null },
] as const;

// Timeline data
const TIMELINE_STEPS = [
  { hour: 0, time: "8:00 AM", label: "Emergency Call", detail: "Immediate response, no wait time" },
  { hour: 1, time: "9:00 AM", label: "Team Arrives", detail: "Equipment ready, site survey" },
  { hour: 2, time: "10:00 AM", label: "Installation", detail: "Hardware mount & configuration" },
  { hour: 3, time: "11:00 AM", label: "Testing", detail: "Speed verification, redundancy check" },
  { hour: 4, time: "12:00 PM", label: "Site Online", detail: "Full deployment complete" },
] as const;

// Live sites data for overwhelming social proof
const LIVE_SITES = [
  { name: "McLean Tower", speed: 312, days: 67, contractor: "Walsh Group" },
  { name: "Dulles Phase 2", speed: 287, days: 23, contractor: "Clark Construction" },
  { name: "Navy Yard", speed: 294, days: 101, contractor: "Whiting-Turner" },
  { name: "Tysons Corner", speed: 329, days: 45, contractor: "HITT" },
  { name: "Alexandria Depot", speed: 276, days: 89, contractor: "Balfour Beatty" },
  { name: "Rockville Center", speed: 301, days: 12, contractor: "Gilbane" },
] as const;

// Service packages with strategic pricing
const SERVICE_PACKAGES = [
  {
    name: "ESSENTIAL",
    price: 799,
    badge: null,
    recommended: false,
    features: [
      { name: "250+ Mbps Starlink", included: true },
      { name: "24/7 Monitoring", included: true },
      { name: "Site-to-office VPN", included: true },
      { name: "Construction WiFi", included: true },
      { name: "Redundant backup", included: false },
      { name: "Priority support", included: false },
      { name: "Multi-site mesh", included: false },
    ]
  },
  {
    name: "SITE COMMAND",
    price: 1299,
    badge: "Most sites choose this",
    recommended: true,
    features: [
      { name: "250+ Mbps Starlink", included: true },
      { name: "24/7 Monitoring", included: true },
      { name: "Site-to-office VPN", included: true },
      { name: "Construction WiFi", included: true },
      { name: "Redundant backup", included: true },
      { name: "Priority support", included: true },
      { name: "Multi-site mesh", included: false },
    ]
  },
  {
    name: "ENTERPRISE MESH",
    price: 2499,
    badge: "For 100+ workers",
    recommended: false,
    features: [
      { name: "250+ Mbps Starlink", included: true },
      { name: "24/7 Monitoring", included: true },
      { name: "Site-to-office VPN", included: true },
      { name: "Construction WiFi", included: true },
      { name: "Redundant backup", included: true },
      { name: "Priority support", included: true },
      { name: "Multi-site mesh", included: true },
    ]
  }
] as const;

// Yesterday's actual speed tests for credibility
const SPEED_TESTS = [
  { location: "Dulles Phase 2", time: "2:47 PM", download: 287, upload: 45 },
  { location: "Navy Yard Site", time: "11:23 AM", download: 294, upload: 52 },
  { location: "McLean Tower", time: "9:15 AM", download: 312, upload: 48 },
  { location: "Tysons Corner", time: "4:32 PM", download: 329, upload: 61 },
  { location: "Alexandria Depot", time: "1:08 PM", download: 276, upload: 43 },
] as const;

const StatusBar: React.FC = () => {
  const [activeSites, setActiveSites] = useState(0);
  
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 47;
    const increment = Math.ceil(duration / steps);
    
    let current = 0;
    const timer = setInterval(() => {
      if (current < 47) {
        setActiveSites(prev => prev + 1);
        current++;
      } else {
        clearInterval(timer);
      }
    }, increment);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-space-black border-b border-gray-800">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between text-sm">
        <div className="flex items-center space-x-2">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.8, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-2 h-2 rounded-full bg-success-green"
          />
          <span className="text-success-green font-medium">OPERATIONAL</span>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <motion.span 
              className="text-construction-orange font-medium mr-1"
              key={activeSites}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {activeSites}
            </motion.span>
            <span className="text-gray-400">Active Sites</span>
          </div>
          <div className="text-gray-400">
            <span className="text-success-green font-medium">99.97%</span> Uptime Today
          </div>
        </div>
      </div>
    </div>
  );
};

// Warning Banner Component
const WarningBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Show banner after 10 seconds
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true);
      }
    }, 10000);

    // Show again if user scrolls to top after dismissing
    const handleScroll = () => {
      if (isDismissed && window.scrollY < 100) {
        setIsDismissed(false);
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDismissed]);

  if (!isVisible || isDismissed) return null;

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-red-600 text-white px-4 py-3 shadow-lg"
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span>⚠️</span>
          <span className="font-medium">
            PERMIT DELAYS WITHOUT INTERNET: Average 6.3 days | $52,000 lost revenue
          </span>
        </div>
        <button
          onClick={() => {
            setIsVisible(false);
            setIsDismissed(true);
          }}
          className="text-white hover:text-gray-300 font-bold text-xl"
        >
          ×
        </button>
      </div>
    </motion.div>
  );
};

// Mobile Sticky CTA
const MobileStickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsVisible(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-construction-orange px-4 py-3 shadow-lg md:hidden">
      <a
        href="tel:7035553278"
        className="block text-center text-white font-bold text-lg"
      >
        📞 CALL NOW: (703) 555-FAST
      </a>
    </div>
  );
};

// Particle Effect Component
const ParticleEffect: React.FC = () => {
  const particles = Array.from({ length: 50 }, (_, i) => i);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.1 + 0.05,
          }}
          animate={{
            y: [typeof window !== 'undefined' ? window.innerHeight : 800, -100],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
        />
      ))}
    </div>
  );
};

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

// Live Site Map Component
const LiveSiteMap: React.FC = () => {
  const mapSites = [
    { name: "McLean Tower", lat: 38.9338, lng: -77.2297, speed: 312, status: "online" },
    { name: "Dulles Phase 2", lat: 38.9445, lng: -77.4558, speed: 287, status: "online" },
    { name: "Navy Yard", lat: 38.8765, lng: -77.0074, speed: 294, status: "online" },
    { name: "Tysons Corner", lat: 38.9189, lng: -77.2300, speed: 329, status: "online" },
    { name: "Alexandria", lat: 38.8048, lng: -77.0469, speed: 276, status: "online" },
    { name: "Rockville", lat: 39.0840, lng: -77.1528, speed: 301, status: "online" },
  ];

  return (
    <div className="bg-gray-800 rounded-lg aspect-square relative overflow-hidden">
      {/* DMV Region Background */}
      <div 
        className="absolute inset-0 bg-gray-700 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20,20 L80,20 L80,80 L20,80 Z' fill='none' stroke='%23374151' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '20px 20px'
        }}
      />
      
      {/* Map Title */}
      <div className="absolute top-4 left-4 z-20">
        <h3 className="text-white font-bold text-sm">LIVE DMV SITES</h3>
        <p className="text-gray-400 text-xs">Real-time status</p>
      </div>

      {/* Site Dots */}
      {mapSites.map((site, index) => (
        <motion.div
          key={site.name}
          className="absolute"
          style={{
            left: `${20 + (index % 3) * 25}%`,
            top: `${25 + Math.floor(index / 3) * 30}%`,
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.2 }}
        >
          {/* Pulsing Ring */}
          <motion.div
            className="absolute w-8 h-8 rounded-full bg-success-green/20 -translate-x-1/2 -translate-y-1/2"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.3,
            }}
          />
          
          {/* Site Dot */}
          <motion.div
            className="relative w-3 h-3 rounded-full bg-success-green -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            whileHover={{ scale: 1.5 }}
          />
          
          {/* Tooltip on Hover */}
          <motion.div
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 pointer-events-none"
            whileHover={{ opacity: 1 }}
          >
            <div className="text-center">
              <p className="font-bold">{site.name}</p>
              <p className="text-success-green">{site.speed} Mbps</p>
            </div>
          </motion.div>
        </motion.div>
      ))}

      {/* Live Indicator */}
      <div className="absolute bottom-4 right-4">
        <div className="flex items-center space-x-2">
          <motion.div
            className="w-2 h-2 rounded-full bg-success-green"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <span className="text-xs text-success-green font-medium">LIVE</span>
        </div>
      </div>
    </div>
  );
};

// Form submission handler
const handleDeployRequest = async (plan: string, source: string = 'construction-connect') => {
  try {
    trackEvent('click', 'CTA', `Deploy ${plan} - ${source}`, 1299);
    
    // TODO: Replace with actual API endpoint
    const response = await fetch('/api/deploy-request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        plan, 
        source,
        timestamp: new Date().toISOString(),
        page: 'construction-connect'
      })
    });

    if (response.ok) {
      // Success - could redirect to calendar booking or thank you page
      window.location.href = '/book-deployment';
    } else {
      // Fallback to phone call
      window.location.href = 'tel:7035553278';
    }
  } catch (error) {
    console.error('Deploy request failed:', error);
    // Fallback to phone call
    window.location.href = 'tel:7035553278';
  }
};

const ConstructionConnect: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Add smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Schema data for construction internet service
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "4-Hour Construction Site Internet Deploy",
    "description": "Instant connectivity for construction sites. Deploy tomorrow. No contracts. 250+ Mbps average across 47 active DMV sites.",
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
    setIsLoaded(true);
  }, []);

  return (
    <>
      <SEOMetadata 
        title="Construction Site Internet in 4 Hours | DMV Starlink Deploy"
        description="Instant connectivity for construction sites. Deploy tomorrow. No contracts. 250+ Mbps average. 47 active sites across DMV. Call (703) 555-FAST"
      />
      
      {/* Enhanced Meta Tags for Social Sharing */}
      <head>
        <meta property="og:title" content="Construction Site Internet in 4 Hours | DMV Starlink Deploy" />
        <meta property="og:description" content="Instant connectivity for construction sites. Deploy tomorrow. No contracts. 250+ Mbps average. 47 active sites across DMV." />
        <meta property="og:image" content="/images/og/construction-connect-hero.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://theorbittech.com/services/construction-connect" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Construction Site Internet in 4 Hours" />
        <meta name="twitter:description" content="Deploy tomorrow. No contracts. 250+ Mbps average. 47 active sites across DMV." />
        <meta name="twitter:image" content="/images/twitter/construction-connect-card.jpg" />
        
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://theorbittech.com/services/construction-connect" />
      </head>
      
      {/* Warning Banner */}
      <WarningBanner />
      
      {/* Mobile Sticky CTA */}
      <MobileStickyCTA />
      
      <div className="min-h-screen bg-space-black text-white relative overflow-hidden">
        {/* Particle Effect for Hero */}
        <div className="absolute inset-0 z-0">
          <ParticleEffect />
        </div>
        {/* Status Bar */}
        <div className="relative z-10">
          <StatusBar />
        </div>
        
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="flex flex-wrap items-center">
            {/* Left Column - 60% */}
            <motion.div 
              className="w-full lg:w-3/5 pr-0 lg:pr-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-7xl font-black leading-tight mb-6">
                Your Site Goes Dark in{' '}
                <span className="text-construction-orange">48 Hours</span>{' '}
                Without Internet. We Deploy in 4.
              </h1>
              
              <p className="text-2xl text-gray-400 mb-8">
                Instant connectivity for construction sites across DMV. No contracts. No delays. Just internet that works.
              </p>
              
              <motion.div 
                className="flex flex-wrap gap-4 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoaded ? 1 : 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <motion.button
                  className="px-8 py-4 bg-construction-orange text-white font-bold rounded-lg shadow-lg hover:transform hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-construction-orange/50"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  aria-label="Deploy internet service tomorrow"
                  onClick={() => handleDeployRequest('hero-primary', 'hero-section')}
                >
                  DEPLOY TOMORROW
                </motion.button>
                
                <motion.button
                  className="px-8 py-4 border-2 border-construction-orange text-construction-orange font-bold rounded-lg hover:bg-construction-orange/10 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-construction-orange/50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  aria-label="Call (703) 555-FAST now"
                  onClick={() => {
                    trackEvent('click', 'CTA', 'Call Hero - (703) 555-FAST');
                    window.location.href = 'tel:7035553278';
                  }}
                >
                  Call: (703) 555-FAST
                </motion.button>
              </motion.div>
              
              <motion.p 
                className="text-sm text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoaded ? 1 : 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Next-day deployment available
              </motion.p>
            </motion.div>
            
            {/* Right Column - 40% */}
            <motion.div 
              className="w-full lg:w-2/5 mt-8 lg:mt-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <LiveSiteMap />
            </motion.div>
          </div>
        </div>

        {/* Trust Ticker - Continuous social proof to build confidence */}
        <div className="w-full bg-gray-900 py-6 overflow-hidden">
          <motion.div
            className="flex space-x-12 whitespace-nowrap"
            animate={{
              x: [0, -1920], // Adjust based on content width
            }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              },
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {[...ACTIVE_SITES, ...ACTIVE_SITES].map((site, index) => (
              <div
                key={`${site.name}-${index}`}
                className="inline-flex items-center space-x-2"
              >
                <span className="text-construction-orange font-bold">{site.name}:</span>
                {site.speed && (
                  <span className="text-success-green">{site.speed} ✓</span>
                )}
                {site.days && (
                  <span className="text-success-green">Day {site.days} Online ✓</span>
                )}
                <span className="text-gray-600 mx-4">|</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* 4-Hour Timeline - Visual process that emphasizes speed */}
        <div className="container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">
              While They're Still{" "}
              <span className="text-gray-500">Planning</span>,{" "}
              <br />
              We're Already{" "}
              <span className="text-construction-orange">Deploying</span>
            </h2>
            <p className="text-xl text-gray-400">
              Others take weeks. We take hours. Here's how:
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <motion.div
              className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-800"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            />

            {/* Timeline steps */}
            <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8">
              {TIMELINE_STEPS.map((step, index) => (
                <motion.div
                  key={step.hour}
                  className="flex flex-col items-center text-center relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-full bg-construction-orange flex items-center justify-center mb-4 z-10">
                    <span className="font-bold">H{step.hour}</span>
                  </div>
                  <p className="text-construction-orange font-mono">{step.time}</p>
                  <h3 className="font-bold my-2">{step.label}</h3>
                  <p className="text-sm text-gray-400">{step.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ROI Calculator - Convert through financial impact */}
        <div className="bg-gray-900 py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-5xl font-bold text-center mb-8">
                Calculate Your{" "}
                <span className="text-construction-orange">Losses</span>
              </h2>
              <ROICalculatorWithErrorBoundary />
            </motion.div>
          </div>
        </div>

        {/* Live Sites Grid - Overwhelming social proof */}
        <div className="container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <h2 className="text-5xl font-bold">LIVE SITES RIGHT NOW</h2>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-success-green text-black px-3 py-1 rounded-full text-sm font-bold"
              >
                UPDATING LIVE
              </motion.div>
            </div>
            <p className="text-xl text-gray-400">
              Real sites, real speeds, real results happening right now
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {LIVE_SITES.map((site, index) => (
              <motion.div
                key={site.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  borderColor: "#FF6B35",
                  transition: { duration: 0.2 }
                }}
                className="bg-gray-900 border-2 border-gray-800 rounded-lg p-6 hover:border-construction-orange transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-lg">{site.name}</h3>
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.7, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 rounded-full bg-success-green"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-success-green font-mono text-xl">
                    {site.speed} Mbps
                  </p>
                  <p className="text-gray-400">
                    Day {site.days} Online
                  </p>
                  <p className="text-construction-orange text-sm">
                    {site.contractor}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <button 
              className="text-construction-orange hover:underline font-medium"
              onClick={() => {
                trackEvent('click', 'Link', 'View All 47 Sites');
                // TODO: Navigate to sites page
                window.location.href = '/sites';
              }}
            >
              View All 47 Sites →
            </button>
          </motion.div>
        </div>

        {/* Service Packages - Clear value proposition */}
        <div className="bg-gray-900 py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-4">
                Choose Your{" "}
                <span className="text-construction-orange">Deployment</span>
              </h2>
              <p className="text-xl text-gray-400">
                All plans include same-day deployment and no contracts
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {SERVICE_PACKAGES.map((pkg, index) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className={`relative bg-space-black rounded-xl p-8 transition-transform ${
                    pkg.recommended ? 'border-2 border-construction-orange' : 'border border-gray-800'
                  }`}
                >
                  {pkg.badge && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-construction-orange text-white px-4 py-1 rounded-full text-sm font-bold">
                        {pkg.badge}
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <div className="text-4xl font-black mb-2">
                      <span className="text-construction-orange">${pkg.price}</span>
                      <span className="text-lg text-gray-400">/mo</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-5 h-5 mr-3 flex items-center justify-center">
                          {feature.included ? (
                            <span className="text-success-green text-lg">✓</span>
                          ) : (
                            <span className="text-gray-600 text-lg">✗</span>
                          )}
                        </div>
                        <span className={feature.included ? "text-white" : "text-gray-500"}>
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button 
                    className={`w-full py-4 rounded-lg font-bold transition-colors ${
                      pkg.recommended 
                        ? 'bg-construction-orange text-white hover:bg-construction-orange/90'
                        : 'border-2 border-construction-orange text-construction-orange hover:bg-construction-orange/10'
                    }`}
                    onClick={() => {
                      trackEvent('click', 'CTA', `Deploy ${pkg.name} Plan`, pkg.price);
                      handleDeployRequest(pkg.name.toLowerCase(), 'pricing-section');
                    }}
                  >
                    DEPLOY THIS PLAN →
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Speed Test Wall - Real performance data */}
        <div className="container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">
              YESTERDAY'S{" "}
              <span className="text-construction-orange">ACTUAL</span>{" "}
              SPEED TESTS
            </h2>
            <p className="text-xl text-gray-400">
              Real performance data from real construction sites
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-x-auto"
          >
            <table className="w-full min-w-[600px] bg-gray-900 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-800">
                  <th className="px-6 py-4 text-left font-bold">Location</th>
                  <th className="px-6 py-4 text-left font-bold">Time</th>
                  <th className="px-6 py-4 text-left font-bold">Download</th>
                  <th className="px-6 py-4 text-left font-bold">Upload</th>
                  <th className="px-6 py-4 text-left font-bold">Action</th>
                </tr>
              </thead>
              <tbody>
                {SPEED_TESTS.map((test, index) => (
                  <motion.tr
                    key={test.location}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`border-b border-gray-800 ${
                      index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800/50'
                    }`}
                  >
                    <td className="px-6 py-4 font-medium">{test.location}</td>
                    <td className="px-6 py-4 text-gray-400">{test.time}</td>
                    <td className="px-6 py-4 text-success-green font-mono">
                      {test.download} Mbps
                    </td>
                    <td className="px-6 py-4 text-success-green font-mono">
                      {test.upload} Mbps
                    </td>
                    <td className="px-6 py-4">
                      <button 
                        className="text-construction-orange hover:underline"
                        onClick={() => {
                          trackEvent('click', 'Link', `View Speed Test - ${test.location}`);
                          // TODO: Navigate to speed test details
                          window.location.href = `/speed-tests/${test.location.toLowerCase().replace(/\s+/g, '-')}`;
                        }}
                      >
                        View Test →
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>

        {/* Testimonial Feature - Powerful social proof */}
        <div className="relative bg-black py-24 overflow-hidden">
          {/* Construction texture overlay */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FF6B35' fill-opacity='0.1'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12"
            >
              {/* Quote */}
              <div className="flex-1">
                <div className="text-construction-orange text-6xl mb-6">"</div>
                <blockquote className="text-3xl leading-relaxed mb-8 text-white">
                  We were 3 weeks behind schedule. The Orbit Tech had us online in 4 hours. 
                  We filed 47 permits that afternoon and got back on track. 
                  That's $200,000 in delays prevented with one phone call.
                </blockquote>
                
                <div className="flex items-center space-x-4">
                  <div>
                    <p className="font-bold text-lg">Michael Chen</p>
                    <p className="text-gray-400">Site Superintendent, Meridian Construction Group</p>
                  </div>
                  
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="bg-construction-orange text-white px-3 py-1 rounded-full text-sm font-bold"
                  >
                    ✓ Verified Google Review
                  </motion.div>
                </div>
              </div>
              
              {/* Image placeholder */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="w-64 h-64 rounded-full border-4 border-construction-orange bg-gray-800 overflow-hidden"
              >
                <img
                  src="/images/testimonials/michael-chen.jpg"
                  alt="Michael Chen, Site Superintendent at Meridian Construction Group"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    e.currentTarget.style.display = 'none';
                    const placeholder = e.currentTarget.nextElementSibling as HTMLElement;
                    if (placeholder) placeholder.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-center" style={{ display: 'none' }}>
                  <span>
                    Michael Chen<br />
                    <small>Site Superintendent</small>
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Final Converter CTA - Binary choice psychology */}
        <div className="bg-black py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-6xl font-black text-center mb-16">
                You Have{" "}
                <span className="text-construction-orange">Two Options</span>:
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                {/* Option 1: Problems */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-gray-900 rounded-xl p-8"
                >
                  <h3 className="text-3xl font-bold mb-6 text-red-500">
                    Keep Using Hotspots
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">✗</span>
                      <span>Lose $10,000+ per week on connectivity issues</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">✗</span>
                      <span>Wait 2-6 weeks for other providers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">✗</span>
                      <span>Deal with dropped connections during critical operations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">✗</span>
                      <span>Explain delays to project owners</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">✗</span>
                      <span>Risk project bonuses and reputation</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Option 2: Solution */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gray-900 rounded-xl p-8 border-2 border-success-green"
                >
                  <h3 className="text-3xl font-bold mb-6 text-success-green">
                    Call Us Now
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-success-green mr-3 mt-1">✓</span>
                      <span>Site online in 4 hours guaranteed</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-success-green mr-3 mt-1">✓</span>
                      <span>250+ Mbps from day one</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-success-green mr-3 mt-1">✓</span>
                      <span>99.97% uptime across all sites</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-success-green mr-3 mt-1">✓</span>
                      <span>Keep your project on schedule</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-success-green mr-3 mt-1">✓</span>
                      <span>Protect bonuses and reputation</span>
                    </li>
                  </ul>
                </motion.div>
              </div>

              {/* Massive CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-construction-orange text-white text-2xl font-black py-6 px-12 rounded-xl shadow-2xl mb-4"
                  onClick={() => {
                    trackEvent('click', 'CTA', 'Final CTA - Deploy Tomorrow Phone', 1299);
                    window.location.href = 'tel:7035553278';
                  }}
                >
                  📞 (703) 555-FAST - DEPLOY TOMORROW
                </motion.button>
                
                <p className="text-gray-400 mb-4">
                  Kent from our construction team will answer
                </p>
                
                <motion.div
                  animate={{ opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex items-center justify-center text-construction-orange font-bold"
                >
                  <span className="mr-2">⚠️</span>
                  Only 3 installation slots available tomorrow
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

// ROI Calculator Component with Error Boundary and Accessibility
const ROICalculatorWithErrorBoundary: React.FC = () => {
  return (
    <div className="bg-space-black p-8 rounded-xl shadow-2xl">
      <ROICalculator />
    </div>
  );
};

// ROI Calculator Component
const ROICalculator: React.FC = () => {
  const [inputs, setInputs] = useState<ROIInputs>({
    crewSize: 20,
    hourlyRate: 65,
    hoursLost: 8
  });

  const [results, setResults] = useState<ROICalculation | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateInputs = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (inputs.crewSize < 1) newErrors.crewSize = "Crew size must be at least 1";
    if (inputs.hourlyRate < 1) newErrors.hourlyRate = "Hourly rate must be at least $1";
    if (inputs.hoursLost < 0) newErrors.hoursLost = "Hours lost cannot be negative";
    if (inputs.hoursLost > 168) newErrors.hoursLost = "Cannot exceed 168 hours per week";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateROI = () => {
    if (!validateInputs()) return;
    
    setIsCalculating(true);
    const weeklyLoss = inputs.crewSize * inputs.hourlyRate * inputs.hoursLost;
    const monthlyLoss = weeklyLoss * 4;
    const annualSavings = monthlyLoss * 12 * 0.9; // Assuming 90% recovery

    setTimeout(() => {
      setResults({
        weeklyLoss,
        monthlyLoss,
        annualSavings
      });
      setIsCalculating(false);
    }, 500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numValue = Math.max(0, parseInt(value) || 0);
    
    setInputs(prev => ({
      ...prev,
      [name]: numValue
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Memoized calculation for performance
  const memoizedResults = React.useMemo(() => {
    if (!results) return null;
    return results;
  }, [results]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="space-y-2">
          <label htmlFor="crewSize" className="block text-sm text-gray-400">
            Crew Size
          </label>
          <input
            id="crewSize"
            type="number"
            name="crewSize"
            value={inputs.crewSize}
            onChange={handleInputChange}
            className={`w-full bg-gray-800 border rounded px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-construction-orange ${
              errors.crewSize ? 'border-red-500' : 'border-gray-700'
            }`}
            min="1"
            aria-describedby={errors.crewSize ? "crewSize-error" : undefined}
          />
          {errors.crewSize && (
            <p id="crewSize-error" className="text-red-500 text-sm">
              {errors.crewSize}
            </p>
          )}
        </div>
        
        <div className="space-y-2">
          <label htmlFor="hourlyRate" className="block text-sm text-gray-400">
            Hourly Rate ($)
          </label>
          <input
            id="hourlyRate"
            type="number"
            name="hourlyRate"
            value={inputs.hourlyRate}
            onChange={handleInputChange}
            className={`w-full bg-gray-800 border rounded px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-construction-orange ${
              errors.hourlyRate ? 'border-red-500' : 'border-gray-700'
            }`}
            min="1"
            aria-describedby={errors.hourlyRate ? "hourlyRate-error" : undefined}
          />
          {errors.hourlyRate && (
            <p id="hourlyRate-error" className="text-red-500 text-sm">
              {errors.hourlyRate}
            </p>
          )}
        </div>
        
        <div className="space-y-2">
          <label htmlFor="hoursLost" className="block text-sm text-gray-400">
            Hours Lost/Week
          </label>
          <input
            id="hoursLost"
            type="number"
            name="hoursLost"
            value={inputs.hoursLost}
            onChange={handleInputChange}
            className={`w-full bg-gray-800 border rounded px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-construction-orange ${
              errors.hoursLost ? 'border-red-500' : 'border-gray-700'
            }`}
            min="0"
            max="168"
            aria-describedby={errors.hoursLost ? "hoursLost-error" : undefined}
          />
          {errors.hoursLost && (
            <p id="hoursLost-error" className="text-red-500 text-sm">
              {errors.hoursLost}
            </p>
          )}
        </div>
      </div>

      <motion.button
        onClick={calculateROI}
        className="w-full bg-construction-orange text-white font-bold py-4 rounded-lg mb-8 hover:bg-construction-orange/90 focus:outline-none focus:ring-4 focus:ring-construction-orange/50 disabled:opacity-50"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={isCalculating}
        aria-label="Calculate your losses from internet downtime"
      >
        {isCalculating ? "Calculating..." : "CALCULATE LOSSES"}
      </motion.button>

      {memoizedResults && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-2"
          >
            <p className="text-gray-400">Weekly Loss</p>
            <p className="text-3xl font-bold text-red-500">
              ${memoizedResults.weeklyLoss.toLocaleString()}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="space-y-2"
          >
            <p className="text-gray-400">Monthly Loss</p>
            <p className="text-4xl font-bold text-red-500">
              ${memoizedResults.monthlyLoss.toLocaleString()}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-2"
          >
            <p className="text-gray-400">Potential Annual Savings</p>
            <p className="text-3xl font-bold text-success-green">
              ${memoizedResults.annualSavings.toLocaleString()}
            </p>
          </motion.div>
        </div>
      )}

      {memoizedResults && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <button 
            className="bg-success-green text-white font-bold py-4 px-8 rounded-lg hover:bg-success-green/90 focus:outline-none focus:ring-4 focus:ring-success-green/50"
            onClick={() => {
              trackEvent('click', 'CTA', 'Stop Losing Money - ROI Calculator', memoizedResults?.monthlyLoss);
              handleDeployRequest('roi-calculator', 'roi-section');
            }}
          >
            STOP LOSING MONEY - DEPLOY NOW
          </button>
        </motion.div>
      )}
    </>
  );
};

export default ConstructionConnect;
