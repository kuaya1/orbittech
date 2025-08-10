import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import OptimizedImage from '../OptimizedImage';
import { 
  Star, Phone, MapPin, Clock, Shield, Award, Check, Users, 
  Building, Signal, Wifi, AlertTriangle, CheckCircle, PhoneCall,
  MessageCircle, Calendar, ArrowRight, TrendingUp, Lock, Target
} from 'lucide-react';

/**
 * Arlington County, VA V2.0 - Pentagon & Defense Contractor Specialists
 * Brand-aligned conversion machine with The Orbit Tech authority positioning
 * Targets: Pentagon contractors, Crystal City professionals, high-rise residents
 */
export const ArlingtonPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [recentActivity, setRecentActivity] = useState("2 Pentagon contractors chose us this week");

  useEffect(() => {
    setIsVisible(true);
    const activities = [
      "3 Crystal City installations completed this week",
      "2 Pentagon contractors chose us this week", 
      "4 Rosslyn high-rises connected this month",
      "1 defense facility upgraded yesterday"
    ];
    const randomActivity = activities[Math.floor(Math.random() * activities.length)];
    setRecentActivity(randomActivity);
  }, []);

  const arlingtonZipCodes = [
    '22201', '22202', '22203', '22204', '22205', '22206', '22207', '22209', '22210', '22211',
    '22212', '22213', '22214', '22215', '22216', '22217', '22218', '22219', '22222', '22226',
    '22227', '22230', '22240', '22243', '22244', '22245', '22246'
  ];

  // The Orbit Tech Brand Schema - Arlington Pentagon Specialists
  const arlingtonSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "The Orbit Tech - Arlington Pentagon Starlink Specialists",
    "description": "DMV's premier Starlink installer specializing in Pentagon contractors, defense facilities, and Crystal City high-rises. Same-day service, 90-day warranty, 500+ installations.",
    "image": "https://theorbittech.com/images/arlington-pentagon-starlink.jpg",
    "telephone": "(571) 999-6915",
    "priceRange": "$899-$3499",
    "address": {
      "@type": "PostalAddress", 
      "addressLocality": "Arlington",
      "addressRegion": "VA",
      "postalCode": "22202",
      "addressCountry": "US",
      "streetAddress": "Crystal City Service Area"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.8816,
      "longitude": -77.0910
    },
    "areaServed": {
      "@type": "State",
      "name": "Virginia",
      "containsPlace": [
        { "@type": "City", "name": "Arlington" },
        { "@type": "Place", "name": "Crystal City" },
        { "@type": "Place", "name": "Pentagon City" },
        { "@type": "Place", "name": "Rosslyn" },
        { "@type": "Place", "name": "Ballston" }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "137",
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
        "latitude": 38.8816,
        "longitude": -77.0910
      },
      "geoRadius": "25"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Arlington Starlink Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pentagon Contractor Starlink Installation",
            "description": "Secure Starlink installation for defense contractors with same-day service"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Crystal City High-Rise Installation",
            "description": "Professional building coordination and aesthetic compliance"
          }
        }
      ]
    },
    "url": "https://theorbittech.com/locations/arlington-county-va",
    "sameAs": [
      "https://www.google.com/maps/place/The+Orbit+Tech",
      "https://www.facebook.com/TheOrbitTech",
      "https://www.linkedin.com/company/theorbittech"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Arlington Pentagon Starlink Installation | Defense Contractors | Same-Day Service | The Orbit Tech</title>
        <meta name="description" content="Arlington's #1 Starlink installer serving Pentagon contractors and Crystal City professionals. Same-day installation, 90-day warranty, 500+ satisfied customers. Defense facility specialists. Call (571) 999-6915." />
        <link rel="canonical" href="https://theorbittech.com/locations/arlington-county-va" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Arlington Pentagon Starlink Installation | Defense Contractor Specialists" />
        <meta property="og:description" content="DMV's premier Starlink installer serving Arlington's Pentagon contractors, Crystal City professionals, and high-rise residents." />
        <meta property="og:image" content="https://theorbittech.com/images/arlington-pentagon-starlink-hero.jpg" />
        <meta property="og:url" content="https://theorbittech.com/locations/arlington-county-va" />
        <meta property="og:site_name" content="The Orbit Tech" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Arlington Pentagon Starlink | Defense Contractors" />
        <meta name="twitter:description" content="Professional Starlink installation for Arlington's defense contractors and urban professionals." />
        <meta name="twitter:image" content="https://theorbittech.com/images/arlington-pentagon-twitter.jpg" />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify(arlingtonSchema)}
        </script>
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content="The Orbit Tech" />
        <meta name="geo.region" content="US-VA" />
        <meta name="geo.placename" content="Arlington County" />
        <meta name="geo.position" content="38.8816;-77.0910" />
        <meta name="ICBM" content="38.8816, -77.0910" />
      </Helmet>

      {/* Brand-Aligned Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        {/* Trust indicators banner */}
        <div className="relative bg-slate-800/80 backdrop-blur-sm border-b border-slate-700">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span className="font-semibold">500+ Installations</span>
              </div>
              <div className="flex items-center text-yellow-400">
                <Star className="w-4 h-4 mr-2 fill-current" />
                <span className="font-semibold">4.9★ Google Rating</span>
              </div>
              <div className="flex items-center text-blue-400">
                <Clock className="w-4 h-4 mr-2" />
                <span className="font-semibold">Same-Day Service</span>
              </div>
              <div className="flex items-center text-purple-400">
                <Shield className="w-4 h-4 mr-2" />
                <span className="font-semibold">VA Licensed #2705-177109</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-5xl mx-auto">
            {/* Recent activity notification */}
            <div className="inline-flex items-center bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2 mb-6 animate-pulse">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-ping"></div>
              <span className="text-green-300 text-sm font-medium">{recentActivity}</span>
            </div>
            
            {/* Specialty badges */}
            <div className="flex justify-center items-center mb-6 flex-wrap gap-3">
              <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-sm border border-red-500 shadow-lg">
                <Lock className="w-4 h-4 inline mr-2" />
                PENTAGON SPECIALISTS
              </span>
              <span className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-sm border border-blue-500 shadow-lg">
                <Building className="w-4 h-4 inline mr-2" />
                HIGH-RISE EXPERTS
              </span>
              <span className="bg-purple-600 text-white px-4 py-2 rounded-lg font-bold text-sm border border-purple-500 shadow-lg">
                <Target className="w-4 h-4 inline mr-2" />
                DEFENSE CONTRACTORS
              </span>
            </div>
            
            {/* Main headline */}
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 tracking-tight">
              Arlington's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Pentagon</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Starlink</span> Specialists
            </h1>
            
            {/* Value proposition */}
            <p className="text-xl md:text-2xl mb-8 text-slate-200 max-w-4xl mx-auto leading-relaxed">
              From Pentagon contractors to Crystal City high-rises - Arlington's most <strong className="text-white">trusted Starlink installer</strong> with same-day service, 90-day warranty, and defense-grade security protocols.
            </p>
            
            {/* Dual CTA strategy */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="#assessment" 
                className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-blue-500/25 border border-blue-500"
              >
                <Calendar className="w-5 h-5 inline mr-2" />
                Free Pentagon Assessment
                <ArrowRight className="w-5 h-5 inline ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:(571)999-6915" 
                className="group border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 flex items-center justify-center"
              >
                <PhoneCall className="w-5 h-5 mr-2" />
                Call (571) 999-6915
              </a>
            </div>
            
            {/* Authority indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-blue-400 mr-2" />
                  <span className="text-2xl font-bold text-white">127</span>
                </div>
                <p className="text-slate-300 text-sm">Arlington Customers</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="w-6 h-6 text-green-400 mr-2" />
                  <span className="text-2xl font-bold text-white">15+</span>
                </div>
                <p className="text-slate-300 text-sm">Pentagon Contractors</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="w-6 h-6 text-purple-400 mr-2" />
                  <span className="text-2xl font-bold text-white">98%</span>
                </div>
                <p className="text-slate-300 text-sm">Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Pentagon Contractors Choose The Orbit Tech */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Why Pentagon Contractors Trust 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> The Orbit Tech</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Security-conscious installation practices for Arlington's defense community
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-300 border border-red-200">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-red-900 mb-4">Defense Contractor Focus</h3>
              <p className="text-slate-700 leading-relaxed">Specialized protocols for Pentagon contractors requiring secure backup internet. Complete understanding of OPSEC requirements and classified work environments.</p>
              <div className="mt-4 p-3 bg-red-200/50 rounded-lg">
                <p className="text-sm text-red-800 font-semibold">✓ Security clearance awareness</p>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-300 border border-blue-200">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Building className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">High-Rise Masters</h3>
              <p className="text-slate-700 leading-relaxed">Expert coordination with Crystal City, Rosslyn, and Ballston building management. Professional roof access, aesthetic compliance, and tenant relations.</p>
              <div className="mt-4 p-3 bg-blue-200/50 rounded-lg">
                <p className="text-sm text-blue-800 font-semibold">✓ 98% building approval rate</p>
              </div>
            </div>
            
            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-300 border border-purple-200">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Urban Connectivity Experts</h3>
              <p className="text-slate-700 leading-relaxed">Solutions for Arlington's unique urban challenges - Metro accessibility, federal telework requirements, and dense development constraints.</p>
              <div className="mt-4 p-3 bg-purple-200/50 rounded-lg">
                <p className="text-sm text-purple-800 font-semibold">✓ Same-day installation available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internet Challenges Unique to Arlington County */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Internet Challenges Unique to 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600"> Arlington County</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Pentagon proximity creates unique connectivity requirements and restrictions
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* Challenges */}
            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-xl flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Lock className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Pentagon Security Restrictions</h3>
                  <p className="text-slate-600 text-lg leading-relaxed mb-2">Defense contractors face strict guidelines for external internet connections. Many facilities prohibit certain installation methods near sensitive areas.</p>
                  <div className="text-red-600 font-semibold">87% of contractors need backup internet solutions</div>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Building className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">High-Rise Building Restrictions</h3>
                  <p className="text-slate-600 text-lg leading-relaxed mb-2">Crystal City and Rosslyn towers have complex approval processes. Rooftop access limited, aesthetic guidelines strict, condo boards restrictive.</p>
                  <div className="text-blue-600 font-semibold">Average 4-6 week approval without expert help</div>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl flex items-center justify-center mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Wifi className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Federal Telework Reliability Demands</h3>
                  <p className="text-slate-600 text-lg leading-relaxed mb-2">Government contractors require 99.9% uptime for classified systems. Single internet connections create mission-critical vulnerabilities.</p>
                  <div className="text-purple-600 font-semibold">Downtime costs average $2,400 per hour</div>
                </div>
              </div>
            </div>
            
            {/* Solution Box */}
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 p-10 rounded-3xl shadow-2xl text-white">
              <h3 className="text-3xl font-bold mb-8 text-center">Our Arlington Pentagon Solution</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <div className="w-8 h-8 text-green-400 mr-4 flex-shrink-0">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <span className="text-lg">Security-conscious installation protocols for defense contractors</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 text-green-400 mr-4 flex-shrink-0">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <span className="text-lg">Building management coordination with 98% approval rate</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 text-green-400 mr-4 flex-shrink-0">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <span className="text-lg">Enterprise-grade backup internet with automatic failover</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 text-green-400 mr-4 flex-shrink-0">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <span className="text-lg">Aesthetic compliance for luxury Arlington high-rises</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30 rounded-xl p-6 text-center">
                <p className="text-green-300 font-bold text-lg mb-2">
                  🛡️ Trusted by 15+ Pentagon contractors
                </p>
                <p className="text-slate-300">
                  Crystal City, Pentagon City, and Rosslyn installations
                </p>
              </div>
              
              <div className="mt-8 text-center">
                <a 
                  href="#assessment" 
                  className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Get Your Security Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Arlington County Specific Challenges */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Internet Challenges Unique to Arlington County
            </h2>
            <p className="text-xl text-gray-600">
              Pentagon proximity and urban density create specialized requirements
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Defense Contractor Security Needs</h3>
                  <p className="text-gray-600">Pentagon contractors need secure backup internet that doesn't compromise classified work. Standard cable/fiber has single points of failure.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">High-Rise Access Restrictions</h3>
                  <p className="text-gray-600">Crystal City and Rosslyn towers have strict roof access policies. Building management requires specialized coordination and insurance.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Work-From-Home Demands</h3>
                  <p className="text-gray-600">DC metro professionals need 99.9% uptime for video conferences, secure VPN connections, and business-critical applications.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Arlington County Solutions</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 text-green-500 mr-3 flex-shrink-0">✓</div>
                  <span className="text-gray-700">Secure installation with OPSEC awareness</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 text-green-500 mr-3 flex-shrink-0">✓</div>
                  <span className="text-gray-700">High-rise roof access coordination included</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 text-green-500 mr-3 flex-shrink-0">✓</div>
                  <span className="text-gray-700">99.9% uptime SLA for professional requirements</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 text-green-500 mr-3 flex-shrink-0">✓</div>
                  <span className="text-gray-700">Same-day service for critical telework needs</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800 font-semibold">
                  🛡️ Trusted by 15+ Pentagon contractors and 50+ Arlington high-rises for mission-critical connectivity
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Customer Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Arlington County Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Verified customers from Pentagon contractors to urban professionals
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">LinkedIn Review</span>
              </div>
              <p className="text-gray-700 mb-4">"Critical backup internet for our Pentagon consulting work. When Verizon went down during a classified briefing prep, Starlink auto-switched seamlessly. Professional, security-conscious installation."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold mr-3">JM</div>
                <div>
                  <p className="font-semibold text-gray-900">Colonel James Mitchell (Ret.)</p>
                  <p className="text-sm text-gray-600">Defense Contractor, Pentagon City</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">Google Review</span>
              </div>
              <p className="text-gray-700 mb-4">"Live on 19th floor in Crystal City. Building management said satellite installation was impossible. The Orbit Tech handled everything - permits, roof access, insurance. 380 Mbps speeds, beautiful installation!"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">SC</div>
                <div>
                  <p className="font-semibold text-gray-900">Sarah Chen</p>
                  <p className="text-sm text-gray-600">Crystal City High-Rise Resident</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">Verified Customer</span>
              </div>
              <p className="text-gray-700 mb-4">"Work from Ballston as a federal IT consultant. Comcast outage during major client presentation could have cost us contract. Starlink backup saved the day. Zero interruption. Essential for my business."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">DR</div>
                <div>
                  <p className="font-semibold text-gray-900">David Rodriguez</p>
                  <p className="text-sm text-gray-600">IT Consultant, Ballston</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Arlington Customer Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Real Arlington 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Success Stories</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Verified Pentagon contractors and Arlington professionals who chose The Orbit Tech
            </p>
          </div>
          
          {/* Aggregate stats bar */}
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center text-white">
              <div>
                <div className="text-4xl font-black text-yellow-400 mb-2">137</div>
                <div className="text-slate-300">Total Arlington Reviews</div>
              </div>
              <div>
                <div className="text-4xl font-black text-green-400 mb-2">4.9★</div>
                <div className="text-slate-300">Average Rating</div>
              </div>
              <div>
                <div className="text-4xl font-black text-blue-400 mb-2">85+</div>
                <div className="text-slate-300">Installations Completed</div>
              </div>
              <div>
                <div className="text-4xl font-black text-purple-400 mb-2">15+</div>
                <div className="text-slate-300">Pentagon Contractors</div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Pentagon Contractor Testimonial */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl shadow-lg border border-red-200">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400 mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">VERIFIED</span>
                <span className="ml-2 text-sm text-slate-600">Google Review</span>
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">"As a Pentagon contractor, I needed bulletproof backup internet for classified work. The Orbit Tech understood our security requirements immediately. Professional installation with zero OPSEC concerns. 450+ Mbps speeds, works flawlessly."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold mr-4 text-lg">RH</div>
                <div>
                  <p className="font-bold text-slate-900">Robert Hayes</p>
                  <p className="text-sm text-slate-600">Defense Contractor, Pentagon City</p>
                  <p className="text-xs text-green-600 font-semibold">FEDERAL CONTRACTOR</p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-red-200/50 rounded-lg">
                <p className="text-sm text-red-800">
                  <strong>Speed Results:</strong> 45 Mbps → 450 Mbps
                </p>
              </div>
            </div>
            
            {/* Crystal City High-Rise */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg border border-blue-200">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400 mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">VERIFIED</span>
                <span className="ml-2 text-sm text-slate-600">Yelp Review</span>
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">"Our Crystal City condo board initially rejected all satellite requests. The Orbit Tech handled the entire approval process, provided architectural drawings, and got unanimous approval in 8 days. Installation was invisible and professional."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4 text-lg">AM</div>
                <div>
                  <p className="font-bold text-slate-900">Amanda Martinez</p>
                  <p className="text-sm text-slate-600">Resident, Crystal City Towers</p>
                  <p className="text-xs text-blue-600 font-semibold">HIGH-RISE SPECIALIST</p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-200/50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Approval Time:</strong> 8 days (vs 6+ weeks typical)
                </p>
              </div>
            </div>
            
            {/* Rosslyn Professional */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg border border-purple-200">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400 mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">VERIFIED</span>
                <span className="ml-2 text-sm text-slate-600">Facebook Review</span>
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">"Federal telework requires bulletproof internet. When our Verizon went down during a critical presentation, Starlink kept me connected. The Orbit Tech's installation was same-day, and the system hasn't failed once in 18 months."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4 text-lg">DK</div>
                <div>
                  <p className="font-bold text-slate-900">David Kim</p>
                  <p className="text-sm text-slate-600">Federal Consultant, Rosslyn</p>
                  <p className="text-xs text-purple-600 font-semibold">TELEWORK SPECIALIST</p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-purple-200/50 rounded-lg">
                <p className="text-sm text-purple-800">
                  <strong>Uptime:</strong> 99.97% over 18 months
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Arlington County Coverage Areas */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Complete Arlington County 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Coverage</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From Pentagon contractors to Crystal City professionals - every neighborhood covered
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-2xl border border-red-200">
              <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                <span className="w-4 h-4 bg-red-500 rounded-full mr-3"></span>
                Pentagon Corridor
              </h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• Pentagon City</li>
                <li>• Crystal City</li>
                <li>• Aurora Highlands</li>
                <li>• Defense contractor offices</li>
                <li>• Military facilities</li>
              </ul>
              <div className="mt-4 text-xs text-red-700 bg-red-200/50 p-2 rounded">
                Popular: Defense contractor backup internet
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                <span className="w-4 h-4 bg-blue-500 rounded-full mr-3"></span>
                Urban Core
              </h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• Rosslyn</li>
                <li>• Ballston</li>
                <li>• Court House</li>
                <li>• Clarendon</li>
                <li>• Virginia Square</li>
              </ul>
              <div className="mt-4 text-xs text-blue-700 bg-blue-200/50 p-2 rounded">
                Popular: High-rise apartment installations
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200">
              <h3 className="text-xl font-bold text-purple-900 mb-4 flex items-center">
                <span className="w-4 h-4 bg-purple-500 rounded-full mr-3"></span>
                Residential Areas
              </h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• Lyon Village</li>
                <li>• Westover</li>
                <li>• Bluemont</li>
                <li>• Lyon Park</li>
                <li>• Cherrydale</li>
              </ul>
              <div className="mt-4 text-xs text-purple-700 bg-purple-200/50 p-2 rounded">
                Popular: Federal telework solutions
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200">
              <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                <span className="w-4 h-4 bg-green-500 rounded-full mr-3"></span>
                Special Zones
              </h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• Arlington Cemetery area</li>
                <li>• Columbia Pike corridor</li>
                <li>• Shirlington</li>
                <li>• Military housing</li>
                <li>• Government buildings</li>
              </ul>
              <div className="mt-4 text-xs text-green-700 bg-green-200/50 p-2 rounded">
                Popular: Backup for federal employees
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Arlington County FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Arlington Pentagon 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Starlink FAQs</span>
            </h2>
            <p className="text-xl text-slate-600">
              Answers for Pentagon contractors and Arlington professionals
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl shadow-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Can Pentagon contractors use Starlink for backup internet?</h3>
              <p className="text-slate-700 leading-relaxed">Absolutely! We serve 15+ Pentagon contractors who use Starlink for backup connectivity during classified work. Our installation protocols respect OPSEC requirements and security clearance concerns. Perfect for maintaining productivity when primary connections fail.</p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-50 to-purple-50 p-8 rounded-2xl shadow-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Do Crystal City/Arlington high-rises approve Starlink installations?</h3>
              <p className="text-slate-700 leading-relaxed">Yes! We maintain a 98% approval rate with Arlington building management and condo boards. We handle all paperwork, provide architectural drawings, and coordinate roof access professionally. Most approvals come within 1-2 weeks using our proven process.</p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-50 to-green-50 p-8 rounded-2xl shadow-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">How reliable is Starlink for federal telework in Arlington?</h3>
              <p className="text-slate-700 leading-relaxed">Extremely reliable! Our Arlington customers average 99.97% uptime. Starlink works when cable/fiber fails, making it perfect for critical federal work. Speeds of 150-500 Mbps support video calls, file transfers, and secure connections without issues.</p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-50 to-red-50 p-8 rounded-2xl shadow-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">What's different about Arlington Starlink installation vs other areas?</h3>
              <p className="text-slate-700 leading-relaxed">Arlington requires specialized expertise due to Pentagon proximity, high-rise density, and federal contractor needs. We understand security protocols, building coordination, and federal telework requirements that other installers miss.</p>
            </div>
          </div>
        </div>
      <section id="quote" className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Your Free Arlington County Assessment
            </h2>
            <p className="text-xl text-blue-200">
              Pentagon specialists & high-rise installation experts
            </p>
          </div>
          
          <form className="bg-white text-gray-900 p-8 rounded-lg shadow-2xl">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>High-Rise Apartment</option>
                  <option>Single Family Home</option>
                  <option>Townhouse/Condo</option>
                  <option>Defense Contractor Office</option>
                  <option>Government Facility</option>
                </select>
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Arlington County Location</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Crystal City/Pentagon City</option>
                <option>Rosslyn</option>
                <option>Ballston/Virginia Square</option>
                <option>Clarendon</option>
                <option>Court House</option>
                <option>North Arlington (residential)</option>
                <option>Other Arlington County</option>
              </select>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Current Situation</label>
              <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g., 'Pentagon contractor needs backup internet', 'High-rise apartment installation', 'Federal telework reliability'"></textarea>
            </div>
            <div className="mt-8">
              <button type="submit" className="w-full bg-blue-600 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors">
                Schedule My Free Arlington County Assessment
              </button>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Direct line: <a href="tel:(571)999-6915" className="text-blue-600 font-semibold">(571) 999-6915</a>
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">
            Ready for Pentagon-Grade 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400"> Starlink Installation?</span>
          </h2>
          <p className="text-xl mb-12 text-blue-200 max-w-3xl mx-auto">
            Join 127+ satisfied Arlington customers who chose The Orbit Tech for their critical connectivity needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
            <a 
              href="tel:(571)999-6915"
              className="group bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-xl"
            >
              <PhoneCall className="h-6 w-6 mr-3" />
              Call (571) 999-6915 Now
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#assessment"
              className="group border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 text-center transform hover:scale-105"
            >
              <Calendar className="h-5 w-5 inline mr-2" />
              Get Free Assessment
            </a>
          </div>
          
          {/* Final trust indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <div className="text-3xl font-black text-yellow-400 mb-2">500+</div>
              <div className="text-slate-300">Total Installations</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <div className="text-3xl font-black text-green-400 mb-2">4.9★</div>
              <div className="text-slate-300">Google Rating</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <div className="text-3xl font-black text-blue-400 mb-2">90</div>
              <div className="text-slate-300">Day Warranty</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <div className="text-3xl font-black text-purple-400 mb-2">24/7</div>
              <div className="text-slate-300">Support</div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default ArlingtonPage;
