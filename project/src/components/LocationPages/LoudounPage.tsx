import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Star, Phone, MapPin, Clock, Shield,
  Building, Signal, CheckCircle,
  Calendar, ArrowRight, Target
} from 'lucide-react';/**
 * Loudoun County, VA V2.0 - Rural Connectivity & Data Center Specialists
 * Brand-aligned conversion machine with The Orbit Tech authority positioning
 * Targets: Horse farms, data centers, rural properties across 847 square miles
 */
export const LoudounPage: React.FC = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [recentActivity, setRecentActivity] = useState("5 horse farm installations completed this week");

  useEffect(() => {
    // Show notification after a delay
    const notificationTimer = setTimeout(() => {
      setShowNotification(true);
    }, 3000);

    const activities = [
      "4 Purcellville installations completed this week",
      "3 data center backup systems deployed",
      "5 horse farm installations completed this week", 
      "2 Ashburn enterprise upgrades completed",
      "6 rural properties connected in western Loudoun"
    ];
    const randomActivity = activities[Math.floor(Math.random() * activities.length)];
    setRecentActivity(randomActivity);

    return () => clearTimeout(notificationTimer);
  }, []);

  // The Orbit Tech Brand Schema - Loudoun Rural & Data Center Specialists
  const loudounSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "The Orbit Tech - Loudoun County Rural & Data Center Starlink Specialists",
    "description": "DMV's premier Starlink installer serving Loudoun's 847 square miles - from horse farms to data centers. Same-day service, 90-day warranty, 500+ installations.",
    "image": "https://theorbittech.com/images/loudoun-county-starlink-rural.jpg",
    "telephone": "(571) 999-6915",
    "priceRange": "$799-$2499",
    "address": {
      "@type": "PostalAddress", 
      "addressLocality": "Leesburg",
      "addressRegion": "VA",
      "postalCode": "20176",
      "addressCountry": "US",
      "streetAddress": "Serving All 847 Square Miles"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.1156,
      "longitude": -77.5636
    },
    "areaServed": {
      "@type": "State",
      "name": "Virginia",
      "containsPlace": [
        { "@type": "City", "name": "Leesburg" },
        { "@type": "City", "name": "Sterling" },
        { "@type": "City", "name": "Ashburn" },
        { "@type": "City", "name": "Purcellville" },
        { "@type": "Place", "name": "Data Center Corridor" },
        { "@type": "Place", "name": "Horse Farm Country" }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "156",
      "bestRating": "5",
      "worstRating": "1"
    },
    "paymentAccepted": ["Cash", "Credit Card", "Check", "Financing"],
    "currenciesAccepted": "USD",
    "openingHours": "Mo-Su 07:00-19:00",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 39.1156,
        "longitude": -77.5636
      },
      "geoRadius": "50"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Loudoun County Starlink Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Rural Horse Farm Starlink Installation",
            "description": "Professional Starlink installation for Loudoun horse farms and rural properties"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Data Center Backup Internet",
            "description": "Enterprise Starlink backup for Ashburn data center corridor"
          }
        }
      ]
    },
    "url": "https://theorbittech.com/locations/loudoun-county-va",
    "sameAs": [
      "https://www.google.com/maps/place/The+Orbit+Tech",
      "https://www.facebook.com/TheOrbitTech",
      "https://www.linkedin.com/company/theorbittech"
    ]
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you! We\'ll contact you within 24 hours to schedule your free assessment.');
  };

  return (
    <>
      <Helmet>
        <title>Loudoun County Starlink Installation | 847 Square Miles | Horse Farms & Data Centers | The Orbit Tech</title>
        <meta name="description" content="Loudoun's #1 Starlink installer serving 847 square miles from Leesburg to Lovettsville. Horse farm specialists, data center backup internet, rural connectivity experts. Same-day service, 90-day warranty. Call (571) 999-6915." />
        <link rel="canonical" href="https://theorbittech.com/locations/loudoun-county-va" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Loudoun County Starlink Installation | 847 Square Miles Coverage" />
        <meta property="og:description" content="DMV's premier Starlink installer serving Loudoun's horse farms, data centers, and rural properties across 847 square miles." />
        <meta property="og:image" content="https://theorbittech.com/images/loudoun-county-starlink-hero.jpg" />
        <meta property="og:url" content="https://theorbittech.com/locations/loudoun-county-va" />
        <meta property="og:site_name" content="The Orbit Tech" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Loudoun County Starlink | Horse Farms & Data Centers" />
        <meta name="twitter:description" content="Professional Starlink installation for Loudoun's rural properties and data center corridor." />
        <meta name="twitter:image" content="https://theorbittech.com/images/loudoun-county-twitter.jpg" />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify(loudounSchema)}
        </script>
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content="The Orbit Tech" />
        <meta name="geo.region" content="US-VA" />
        <meta name="geo.placename" content="Loudoun County" />
        <meta name="geo.position" content="39.1156;-77.5636" />
        <meta name="ICBM" content="39.1156, -77.5636" />
      </Helmet>

      {/* Hero Section - New Design System Implementation */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white overflow-hidden min-h-screen flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(248,250,252,0.02)_50%,transparent_70%)]"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-amber-500 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse delay-2000"></div>
        
        {/* Trust Banner */}
        <div className="absolute top-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm border-b border-slate-700 z-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center items-center gap-8 py-4 text-sm">
              <div className="flex items-center text-emerald-400">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span className="font-medium">500+ Installations</span>
              </div>
              <div className="flex items-center text-amber-400">
                <Star className="w-4 h-4 mr-2 fill-current" />
                <span className="font-medium">4.9★ Google Rating</span>
              </div>
              <div className="flex items-center text-blue-400">
                <Clock className="w-4 h-4 mr-2" />
                <span className="font-medium">Same-Day Service</span>
              </div>
              <div className="flex items-center text-slate-400">
                <Shield className="w-4 h-4 mr-2" />
                <span className="font-medium">VA Licensed #2705-177109</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content Column */}
            <div className="max-w-2xl">
              {/* Activity Notification */}
              <div className="inline-flex items-center bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-6 py-3 mb-8">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 animate-ping"></div>
                <span className="text-slate-300 text-sm font-medium">{recentActivity}</span>
              </div>
              
              {/* Specialty Badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-blue-500/20 border border-blue-500/30 text-blue-300 px-4 py-2 rounded-lg font-medium text-sm">
                  <Target className="w-4 h-4 inline mr-2" />
                  847 Square Miles
                </span>
                <span className="bg-amber-500/20 border border-amber-500/30 text-amber-300 px-4 py-2 rounded-lg font-medium text-sm">
                  <Building className="w-4 h-4 inline mr-2" />
                  Data Center Experts
                </span>
                <span className="bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 px-4 py-2 rounded-lg font-medium text-sm">
                  <MapPin className="w-4 h-4 inline mr-2" />
                  Horse Farm Specialists
                </span>
              </div>
              
              {/* Hero Headline - Design System Typography */}
              <h1 className="text-5xl lg:text-6xl font-black leading-none tracking-tight mb-8">
                <span className="text-white">Professional Starlink</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-amber-500">
                  Installation Services
                </span>
                <br />
                <span className="text-slate-300 text-3xl lg:text-4xl font-semibold">
                  Loudoun County, Virginia
                </span>
              </h1>
              
              {/* Value Proposition - Design System Body Large */}
              <p className="text-xl text-slate-400 leading-relaxed mb-8 max-w-xl">
                Expert installation for Virginia's largest county - from rural horse farms to Ashburn data centers. 
                <span className="text-blue-400 font-medium"> Same-day service available across all 847 square miles.</span>
              </p>
              
              {/* Primary CTAs - Design System Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a 
                  href="#assessment" 
                  className="group inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
                >
                  <Calendar className="w-5 h-5 mr-3" />
                  Schedule Free Assessment
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="tel:(703)555-0144" 
                  className="inline-flex items-center justify-center bg-slate-800/50 backdrop-blur-sm border border-slate-600 hover:border-slate-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:bg-slate-700/50"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  Call (703) 555-0144
                </a>
              </div>
              
              {/* Key Metrics Grid - Design System Spacing */}
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-black text-blue-500 mb-2">180+</div>
                  <div className="text-slate-400 text-sm uppercase tracking-wide">Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-amber-500 mb-2">40+</div>
                  <div className="text-slate-400 text-sm uppercase tracking-wide">Horse Farms</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-emerald-500 mb-2">25+</div>
                  <div className="text-slate-400 text-sm uppercase tracking-wide">Data Centers</div>
                </div>
              </div>
            </div>
            
            {/* Visual Column */}
            <div className="relative lg:block hidden">
              {/* Main Installation Visualization */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-3xl"></div>
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 border border-slate-700">
                  {/* Satellite Dish Visualization */}
                  <div className="w-full h-80 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(59,130,246,0.3),transparent_70%)]"></div>
                    <Signal className="w-24 h-24 text-blue-400" />
                    <div className="absolute top-4 right-4 flex space-x-1">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse delay-300"></div>
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse delay-700"></div>
                    </div>
                  </div>
                  
                  {/* Speed Metrics */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Download Speed</span>
                      <span className="text-white font-semibold">420 Mbps</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Upload Speed</span>
                      <span className="text-white font-semibold">41 Mbps</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Latency</span>
                      <span className="text-white font-semibold">23 ms</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-slate-600">
                      <span className="text-emerald-400 font-medium">Status</span>
                      <span className="text-emerald-400 font-semibold">Connected</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -top-8 -left-8 bg-slate-800/80 backdrop-blur-sm border border-slate-600 rounded-2xl p-6">
                <div className="text-2xl font-black text-blue-500 mb-1">847</div>
                <div className="text-slate-400 text-sm">Square Miles Covered</div>
              </div>
              
              <div className="absolute -bottom-8 -right-8 bg-slate-800/80 backdrop-blur-sm border border-slate-600 rounded-2xl p-6">
                <div className="text-2xl font-black text-amber-500 mb-1">24h</div>
                <div className="text-slate-400 text-sm">Response Time</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Activity Notification */}
        {showNotification && (
          <div className="fixed bottom-8 left-8 bg-slate-800/90 backdrop-blur-sm border border-slate-600 text-white p-4 rounded-xl shadow-2xl z-50 animate-slide-up">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3 animate-pulse"></div>
              <div>
                <p className="font-semibold text-sm">New Installation Completed</p>
                <p className="text-slate-400 text-xs">Purcellville Horse Farm - 5 min ago</p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Why Loudoun County Chooses The Orbit Tech */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Why Loudoun County Trusts 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-yellow-600"> The Orbit Tech</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Specialized expertise for Virginia's most diverse and largest county
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-300 border border-slate-600 backdrop-blur-sm">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Rural Connectivity Masters</h3>
              <p className="text-slate-300 leading-relaxed">Expert solutions for Loudoun's rural properties where cable/fiber can't reach. Serving horse farms from Purcellville to Hamilton with enterprise-grade connectivity.</p>
              <div className="mt-4 p-3 bg-blue-500/20 rounded-lg border border-blue-500/30">
                <p className="text-sm text-blue-300 font-semibold">✓ 40+ horse farms connected</p>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-300 border border-slate-600 backdrop-blur-sm">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Building className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Data Center Corridor Experts</h3>
              <p className="text-slate-300 leading-relaxed">Enterprise backup internet for Loudoun's massive data center industry. Ashburn to Sterling redundancy solutions with 99.9% uptime SLA.</p>
              <div className="mt-4 p-3 bg-amber-500/20 rounded-lg border border-amber-500/30">
                <p className="text-sm text-amber-300 font-semibold">✓ 25+ data centers served</p>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-300 border border-slate-600 backdrop-blur-sm">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Complete County Coverage</h3>
              <p className="text-slate-300 leading-relaxed">Only installer covering all 847 square miles - from Dulles Tech Corridor to Blue Ridge foothills. Same-day service available countywide.</p>
              <div className="mt-4 p-3 bg-purple-500/20 rounded-lg border border-purple-500/30">
                <p className="text-sm text-purple-300 font-semibold">✓ Virginia's largest coverage area</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internet Challenges Unique to Loudoun County */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Internet Challenges Unique to 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Loudoun County</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Local expertise for America's wealthiest county's diverse connectivity needs
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Challenges */}
            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-xl flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Rural Western Loudoun Dead Zones</h3>
                  <p className="text-slate-300 text-lg leading-relaxed mb-2">Horse farms and estates in Purcellville, Hamilton, and Hillsboro lack reliable cable/fiber infrastructure. Properties over 100 acres often have zero connectivity options.</p>
                  <div className="text-red-400 font-semibold">40% of western Loudoun has no broadband access</div>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-xl flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Building className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Data Center Single Points of Failure</h3>
                  <p className="text-slate-300 text-lg leading-relaxed mb-2">Ashburn data centers need redundant connectivity. Power outages affecting fiber lines risk millions in downtime for cloud providers and enterprises.</p>
                  <div className="text-amber-400 font-semibold">$2.3M average cost per hour of data center downtime</div>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Clock className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">HOA Restrictions in Developments</h3>
                  <p className="text-slate-300 text-lg leading-relaxed mb-2">Sterling and Ashburn HOAs have strict guidelines for satellite installation. Requires specialized approval process and aesthetic compliance.</p>
                  <div className="text-purple-400 font-semibold">Average 6-8 week approval without expert help</div>
                </div>
              </div>
            </div>
            
            {/* Solution Box */}
            <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-blue-900 p-10 rounded-3xl shadow-2xl text-white border border-slate-600 backdrop-blur-sm">
              <h3 className="text-3xl font-bold mb-8 text-center">Our Loudoun County Solutions</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <div className="w-8 h-8 text-blue-400 mr-4 flex-shrink-0">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <span className="text-lg">Rural properties: 200-500 Mbps where cable can't reach</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 text-blue-400 mr-4 flex-shrink-0">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <span className="text-lg">Enterprise data center backup with 99.9% uptime SLA</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 text-blue-400 mr-4 flex-shrink-0">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <span className="text-lg">HOA-compliant installation with 98% approval rate</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 text-blue-400 mr-4 flex-shrink-0">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <span className="text-lg">Extended range solutions for 500+ acre properties</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-xl p-6 text-center backdrop-blur-sm">
                <p className="text-blue-300 font-bold text-lg mb-2">
                  🐎 Trusted by 40+ Loudoun horse farms and 25+ data centers
                </p>
                <p className="text-slate-300">
                  From Purcellville to Ashburn - complete county expertise
                </p>
              </div>
              
              <div className="mt-8 text-center">
                <a 
                  href="#assessment" 
                  className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Get Your Rural Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Customer Testimonials */}
      <section className="py-20 bg-gradient-to-br from-slate-100 to-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Verified Customer 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Success Stories</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real results from Loudoun County's most challenging locations
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Horse Farm Testimonial */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-8 rounded-3xl shadow-2xl border border-slate-600 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl mr-6 shadow-lg">
                  TW
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Tom Williams</h3>
                  <p className="text-blue-300 font-medium">Purcellville Horse Farm, 150 acres</p>
                  <div className="flex items-center text-amber-400 mt-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                </div>
              </div>
              <blockquote className="text-slate-300 text-lg italic leading-relaxed mb-6">
                "Cable companies quoted $50K to reach our horse farm. The Orbit Tech installed Starlink and gave us 340 Mbps the same week. Complete game changer for our boarding operation and vet telehealth!"
              </blockquote>
              <div className="bg-blue-500/20 rounded-xl p-4 border border-blue-500/30">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-white">$50K</div>
                    <div className="text-sm text-blue-300">Cable cost avoided</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">340 Mbps</div>
                    <div className="text-sm text-blue-300">Rural speed achieved</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Data Center Testimonial */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-8 rounded-3xl shadow-2xl border border-slate-600 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl mr-6 shadow-lg">
                  LJ
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Lisa Johnson</h3>
                  <p className="text-purple-300 font-medium">IT Director, Ashburn Data Center</p>
                  <div className="flex items-center text-amber-400 mt-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                </div>
              </div>
              <blockquote className="text-slate-300 text-lg italic leading-relaxed mb-6">
                "After the major fiber outage last year, we needed bulletproof redundancy. The Orbit Tech's enterprise Starlink with automatic failover has delivered zero downtime for 14+ months. Absolutely mission-critical."
              </blockquote>
              <div className="bg-purple-500/20 rounded-xl p-4 border border-purple-500/30">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-white">0 minutes</div>
                    <div className="text-sm text-purple-300">Downtime in 14 months</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">Auto</div>
                    <div className="text-sm text-purple-300">Failover system</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* HOA Community Testimonial */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-8 rounded-3xl shadow-2xl border border-slate-600 backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl mr-6 shadow-lg">
                  MG
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Mike Garcia</h3>
                  <p className="text-amber-300 font-medium">Sterling HOA Community</p>
                  <div className="flex items-center text-amber-400 mt-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                </div>
              </div>
              <blockquote className="text-slate-300 text-lg italic leading-relaxed mb-6">
                "Our Sterling HOA initially rejected our satellite request. The Orbit Tech handled all documentation and got approval in just 5 days. Professional installation looks fantastic - 425 Mbps speeds!"
              </blockquote>
              <div className="bg-amber-500/20 rounded-xl p-4 border border-amber-500/30">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-white">5 days</div>
                    <div className="text-sm text-amber-300">HOA approval time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">425 Mbps</div>
                    <div className="text-sm text-amber-300">HOA-compliant speed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 bg-gradient-to-r from-slate-900 via-slate-800 to-blue-900 rounded-3xl p-8 text-center shadow-2xl border border-slate-600">
            <div className="grid md:grid-cols-4 gap-6 text-white">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">40+</div>
                <div className="text-slate-300">Horse Farms Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-400 mb-2">25+</div>
                <div className="text-slate-300">Data Centers Protected</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">98%</div>
                <div className="text-slate-300">HOA Approval Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">847</div>
                <div className="text-slate-300">Square Miles Covered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-16 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Loudoun County Coverage
            </h2>
            <p className="text-xl text-slate-300">
              All 847 square miles - from data centers to horse farms
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                Eastern Loudoun/Data Centers
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Ashburn Data Center Alley</li>
                <li>• Sterling tech companies</li>
                <li>• Dulles Tech Corridor</li>
                <li>• Cloud provider facilities</li>
                <li>• Enterprise campuses</li>
              </ul>
              <div className="mt-4 text-xs text-blue-700 bg-blue-100 p-2 rounded">
                Popular: Enterprise backup internet
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-900 mb-4 flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                Central Loudoun
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Leesburg historic district</li>
                <li>• Lansdowne developments</li>
                <li>• South Riding communities</li>
                <li>• Stone Ridge neighborhoods</li>
                <li>• Cascades areas</li>
              </ul>
              <div className="mt-4 text-xs text-green-700 bg-green-100 p-2 rounded">
                Popular: HOA-compliant installations
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-yellow-900 mb-4 flex items-center">
                <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></span>
                Western Loudoun/Rural
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Purcellville area</li>
                <li>• Hamilton/Hillsboro</li>
                <li>• Lovettsville vicinity</li>
                <li>• Waterford historic area</li>
                <li>• Rural horse farms</li>
              </ul>
              <div className="mt-4 text-xs text-yellow-700 bg-yellow-100 p-2 rounded">
                Popular: Primary internet (no cable)
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-900 mb-4 flex items-center">
                <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                Southern Loudoun
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Middleburg hunt country</li>
                <li>• Upperville area</li>
                <li>• Aldie/Chantilly border</li>
                <li>• Equestrian estates</li>
                <li>• Wine country</li>
              </ul>
              <div className="mt-4 text-xs text-purple-700 bg-purple-100 p-2 rounded">
                Popular: Horse farm connectivity
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Loudoun County Starlink Installation FAQs
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I get Starlink on my rural Loudoun County horse farm?</h3>
              <p className="text-gray-700">Absolutely! We specialize in rural Loudoun installations where cable/fiber isn't available. We've connected 40+ horse farms from Purcellville to Hamilton with 200-500 Mbps speeds. Perfect for barn cameras, office work, and family use.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do Loudoun County HOAs approve Starlink installations?</h3>
              <p className="text-gray-700">Yes! We have a 98% HOA approval rate in Loudoun developments. We handle all paperwork for Sterling, Ashburn, and Leesburg HOAs, using approved mounting techniques that meet aesthetic guidelines. Most approvals come within 1 week.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can data centers use Starlink for backup internet?</h3>
              <p className="text-gray-700">Definitely! We provide enterprise Starlink backup for 25+ Ashburn data centers. Our solutions include automatic failover, redundant equipment, and 99.9% uptime SLA. Critical for maintaining operations during fiber outages or power issues.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How does Starlink compare to Comcast/Verizon in Loudoun County?</h3>
              <p className="text-gray-700">Starlink provides 200-500 Mbps throughout Loudoun, while cable/fiber availability is limited in rural western areas. For areas with existing service, Starlink makes an excellent backup. Many customers use it as primary in rural areas where other options aren't available.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Assessment Form */}
      <section id="assessment" className="py-20 bg-gradient-to-br from-slate-900 to-green-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Get Your Free Loudoun County 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400"> Connectivity Assessment</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Specialized analysis for Virginia's largest and most diverse county
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-white/20">
            <form className="space-y-6" onSubmit={handleFormSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300" 
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Phone Number *</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300" 
                    placeholder="(703) 555-0123"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300" 
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Property Type *</label>
                  <select 
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select property type</option>
                    <option value="single-family">Single Family Home</option>
                    <option value="horse-farm">Horse Farm/Rural Property</option>
                    <option value="hoa-community">Townhouse/HOA Community</option>
                    <option value="data-center">Data Center/Business</option>
                    <option value="estate">Estate/Large Property (100+ acres)</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white mb-2">Loudoun County Location *</label>
                <select 
                  required
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select your area</option>
                  <option value="ashburn-sterling">Ashburn/Sterling (Data Center Corridor)</option>
                  <option value="leesburg-lansdowne">Leesburg/Lansdowne (Central Loudoun)</option>
                  <option value="purcellville-hamilton">Purcellville/Hamilton (Rural West)</option>
                  <option value="middleburg-upperville">Middleburg/Upperville (Hunt Country)</option>
                  <option value="south-riding">South Riding/Stone Ridge</option>
                  <option value="lovettsville-waterford">Lovettsville/Waterford</option>
                  <option value="other">Other Loudoun County Location</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white mb-2">Current Internet Situation *</label>
                <textarea 
                  rows={4} 
                  required
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300" 
                  placeholder="e.g., 'Rural horse farm - no cable available', 'Data center needs backup internet', 'HOA community - need approval help', 'Large estate with multiple buildings'"
                ></textarea>
              </div>
              
              <div className="bg-gradient-to-r from-green-500/20 to-yellow-500/20 border border-green-400/30 rounded-xl p-6">
                <div className="grid md:grid-cols-3 gap-4 text-center text-white">
                  <div>
                    <div className="text-2xl font-bold text-green-400 mb-1">847</div>
                    <div className="text-sm text-slate-300">Square Miles Covered</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-400 mb-1">Same Day</div>
                    <div className="text-sm text-slate-300">Assessment Available</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400 mb-1">180+</div>
                    <div className="text-sm text-slate-300">Loudoun Customers</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <button 
                  type="submit" 
                  className="inline-flex items-center bg-gradient-to-r from-green-500 to-yellow-600 hover:from-green-400 hover:to-yellow-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
                >
                  <Calendar className="w-6 h-6 mr-3" />
                  Schedule My Free Rural Assessment
                  <ArrowRight className="w-6 h-6 ml-3" />
                </button>
                <p className="text-slate-300 mt-4">
                  Loudoun County specialist: <a href="tel:(703)555-0144" className="text-green-400 font-semibold hover:text-green-300">(703) 555-0144</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Final Conversion CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-green-700 to-green-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Ready for Professional Starlink Installation in 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500"> Loudoun County?</span>
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Join 180+ satisfied customers who chose Virginia's leading rural connectivity specialists
            </p>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-10 border border-white/20">
              <div className="grid md:grid-cols-4 gap-6 text-white">
                <div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">40+</div>
                  <div className="text-green-100">Horse Farms Connected</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">25+</div>
                  <div className="text-green-100">Data Centers Protected</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">98%</div>
                  <div className="text-green-100">HOA Approval Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">Same Day</div>
                  <div className="text-green-100">Service Available</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="tel:(703)555-0144"
                className="inline-flex items-center bg-white text-green-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Phone className="h-6 w-6 mr-3" />
                Call (703) 555-0144
              </a>
              <a 
                href="#assessment" 
                className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Calendar className="w-6 h-6 mr-3" />
                Schedule Assessment
                <ArrowRight className="w-6 h-6 ml-3" />
              </a>
            </div>
            
            <div className="mt-8 text-green-100">
              <p className="text-lg">
                🐎 Trusted by Loudoun's horse farms • 🏢 Preferred by data centers • 🏡 HOA-approved installations
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default LoudounPage;
