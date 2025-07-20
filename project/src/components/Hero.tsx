import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  // Scroll effect handler
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
   <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Updated Background with New Starlink Rural Location Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <img
          src="https://www.spacelink-installations.co.uk/wp-content/uploads/2025/01/Starlink_Rural_Location_02a-scaled.jpg"
          alt="Starlink installation in rural location"
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out"
          loading="eager"
          style={{
            transform: `scale(${1.1 + scrollY * 0.0001})`
          }}
        />
        {/* Very subtle HD black filter */}
        <div className="absolute inset-0 bg-black/25"></div>
        {/* Enhanced gradient adjustments for top and bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent via-65% to-black/40"></div>
        {/* Additional top gradient for navbar logo contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent via-30% to-transparent"></div>
      </div>

      {/* Content Container - z-10 ensures it's above the z-0 background */}
      <div 
        className="container mx-auto px-4 sm:px-6 relative z-10"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ease-out mobile-layout ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Top Content - Title and Subtitle */}
          <div className="mobile-top-content">
            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-xl mb-6 mt-2">
              PROFESSIONAL STARLINK
              <br />
              INSTALLATION
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed drop-shadow-lg mb-10">
              Expert installation services across the DMV region, connecting your home or business with reliable high-speed internet.
            </p>
          </div>

          {/* Bottom Content - Button and Location */}
          <div className="mobile-bottom-content">
            {/* Call to Action Button */}
            <a
              href="#contact"
              className="inline-block bg-white text-black font-bold text-lg px-10 py-4 rounded-lg
                         transition-all duration-300 hover:bg-neutral-200 hover:scale-105 shadow-2xl mb-8"
            >
              Get Quote
            </a>
            
            {/* Service Area */}
            <div className="text-center mt-2">
              <p className="text-white font-semibold tracking-wider drop-shadow-md">
                WASHINGTON DC • MARYLAND • VIRGINIA
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fade to black at the bottom for a smooth transition to the next section */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-5 pointer-events-none"
        style={{
          opacity: Math.max(0, 1 - scrollY * 0.002)
        }}
      />

      {/* Enhanced Modern CSS */}
      <style jsx>{`
        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
        
        /* Optimized scroll performance */
        * {
          will-change: auto;
        }
        
        .scroll-parallax {
          will-change: transform;
        }

        /* Enhanced font weights with professional spacing */
        .font-thin {
          font-weight: 100;
          letter-spacing: -0.025em;
        }
        
        .font-extralight {
          font-weight: 200;
          letter-spacing: -0.02em;
        }
        
        .font-light {
          font-weight: 300;
          letter-spacing: -0.015em;
        }
        
        .font-normal {
          font-weight: 400;
          letter-spacing: 0em;
        }
        
        .font-medium {
          font-weight: 500;
          letter-spacing: 0.005em;
        }
        
        .font-semibold {
          font-weight: 600;
          letter-spacing: 0em;
        }
        
        .font-bold {
          font-weight: 700;
          letter-spacing: -0.005em;
        }

        .font-extrabold {
          font-weight: 800;
          letter-spacing: -0.01em;
        }
        
        .font-black {
          font-weight: 900;
          letter-spacing: -0.015em;
        }
        
        /* Enhanced tracking options */
        .tracking-tight {
          letter-spacing: -0.025em;
        }
        
        .tracking-normal {
          letter-spacing: 0em;
        }
        
        .tracking-wide {
          letter-spacing: 0.025em;
        }
        
        .tracking-wider {
          letter-spacing: 0.05em;
        }
        
        .tracking-widest {
          letter-spacing: 0.1em;
        }

        /* Enhanced gradient text with better rendering */
        .bg-clip-text {
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 200%;
          animation: gradient-shift 4s ease-in-out infinite;
        }

        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        /* Premium transitions with enhanced easing */
        .transition-all {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        /* Professional responsive typography */
        @media (max-width: 640px) {
          .text-4xl { 
            font-size: 2.1rem; 
            line-height: 1.2; 
          }
          .text-2xl { 
            font-size: 1.25rem; 
            line-height: 1.4;
          }
          .text-lg { 
            font-size: 1rem; 
            line-height: 1.5;
          }
          
          /* Mobile layout structure */
          .mobile-layout {
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-top: 2.4rem;
            padding-bottom: 6.2rem;
          }
          
          .mobile-top-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          
          .mobile-bottom-content {
            flex-shrink: 0;
            margin-top: auto;
          }
          
          /* Reset margins for mobile */
          .mobile-layout h1 {
            margin-top: 0;
            margin-bottom: 1.5rem;
          }
          
          .mobile-layout p {
            margin-bottom: 0;
          }
          
          /* Mobile-specific background image adjustments */
          .absolute.inset-0 img {
            object-position: 75% center;
            transform: scale(1.3);
          }
          
          /* Mobile-specific adjustments to prevent blocking background */
          .flex-col.gap-16 {
            gap: 2rem;
          }
          
          .mt-16 {
            margin-top: 7rem;
          }
          .mt-2 {
            margin-top: 0;
          }
          
          .mb-2 {
            margin-bottom: 0.5rem;
          }
          
          .py-20 {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
        }

        /* Desktop and tablet layouts remain unchanged */
        @media (min-width: 641px) {
          .mobile-layout {
            height: auto;
            display: block;
          }
          
          .mobile-top-content,
          .mobile-bottom-content {
            flex: none;
            display: block;
          }
        }

        @media (min-width: 641px) and (max-width: 768px) {
          .text-5xl { 
            font-size: 3rem; 
            line-height: 1.1; 
          }
          .text-3xl { 
            font-size: 1.875rem; 
            line-height: 1.3;
          }
          .text-xl { 
            font-size: 1.25rem; 
            line-height: 1.5;
          }
          
          /* Tablet-specific background image adjustments */
          .absolute.inset-0 img {
            object-position: 65% center;
            transform: scale(1.15);
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .text-6xl { 
            font-size: 3.75rem; 
            line-height: 1.1; 
          }
          .text-4xl { 
            font-size: 2.25rem; 
            line-height: 1.3;
          }
          .text-2xl { 
            font-size: 1.5rem; 
            line-height: 1.5;
          }
        }

        @media (min-width: 1025px) {
          .text-7xl { 
            font-size: 4.5rem; 
            line-height: 1.1; 
          }
          .text-5xl { 
            font-size: 3rem; 
            line-height: 1.3;
          }
          .text-2xl { 
            font-size: 1.5rem; 
            line-height: 1.5;
          }
        }

        @media (min-width: 1280px) {
          .text-8xl { 
            font-size: 6rem; 
            line-height: 1.1; 
          }
          .text-5xl { 
            font-size: 3rem; 
            line-height: 1.3;
          }
        }

        /* Enhanced color system with improved contrast - HERO SECTION ONLY */
        section .text-white {
          color: rgb(255 255 255);
        }
        
        section .text-gray-50 {
          color: rgb(249 250 251);
        }
        
        section .text-gray-100 {
          color: rgb(243 244 246);
        }
        
        section .text-gray-200 {
          color: rgb(229 231 235);
        }
        
        .text-gray-300 {
          color: rgb(209 213 219);
        }
        
        .text-gray-400 {
          color: rgb(156 163 175);
        }
        
        .text-gray-500 {
          color: rgb(107 114 128);
        }
        
        .text-blue-400 {
          color: rgb(96 165 250);
        }

        .text-blue-600 {
          color: rgb(37 99 235);
        }

        /* Enhanced line heights */
        .leading-tight {
          line-height: 1.1;
        }
        
        .leading-relaxed {
          line-height: 1.6;
        }

        /* Enhanced button and shadow styles */
        .shadow-xl {
          box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04);
        }

        .shadow-2xl {
          box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.35);
        }

        /* Enhanced drop shadow for text */
        .drop-shadow-2xl {
          filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));
        }

        .drop-shadow-lg {
          filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
        }

        .drop-shadow-md {
          filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
        }

        /* Backdrop blur support */
        @supports (backdrop-filter: blur(16px)) {
          .backdrop-blur-xl {
            backdrop-filter: blur(16px) saturate(180%);
          }
        }

        /* Enhanced button hover effects */
        .group:hover .group-hover\\:translate-x-2 {
          transform: translateX(0.5rem);
        }

        /* Professional gradient backgrounds */
        .bg-gradient-to-r {
          background-image: linear-gradient(to right, var(--tw-gradient-stops));
        }

        .from-blue-600 {
          --tw-gradient-from: #2563eb;
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(37 99 235 / 0));
        }

        .to-blue-700 {
          --tw-gradient-to: #1d4ed8;
        }

        .hover\\:from-blue-700:hover {
          --tw-gradient-from: #1d4ed8;
        }

        .hover\\:to-blue-800:hover {
          --tw-gradient-to: #1e40af;
        }

        /* Enhanced text rendering */
        h1, h2, h3, p {
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Button border radius and styling */
        .rounded-full {
          border-radius: 9999px;
        }

        /* Enhanced transforms */
        .hover\\:-translate-y-2:hover {
          transform: translateY(-0.5rem);
        }

        .hover\\:scale-105:hover {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default Hero;