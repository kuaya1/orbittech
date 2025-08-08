import React, { useEffect } from 'react';
import Button from '../shared/Button';
import Section from '../shared/Section';
import TrustBadges from '../conversion/TrustBadges';
import PhoneCallCTA from '../conversion/PhoneCallCTA';
import { analyticsHelpers, trackingEvents } from '../../utils/analyticsConfig';

const HeroSection: React.FC = () => {
  useEffect(() => {
    // Track hero section view
    const eventData = trackingEvents.pageEngagement({
      pageType: 'homepage',
      timeSpent: 0,
      scrollDepth: 0,
      interactionCount: 0
    });
    
    analyticsHelpers.pushEvent({
      event: 'hero_section_view',
      section: 'hero',
      page_type: 'homepage'
    });
  }, []);

  const handleGetQuoteClick = () => {
    const eventData = trackingEvents.ctaClick({
      buttonText: 'Get Free Quote',
      pageSection: 'hero',
      ctaType: 'primary',
      destination: '/contact'
    });
    analyticsHelpers.pushEvent(eventData);
  };
  return (
    <Section className="hero-pattern relative overflow-hidden" background="white">
      <div className="relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
            DMV's <span className="gradient-text">#1 Rated</span>{' '}
            Starlink Installation Experts
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="font-semibold text-gray-800">Escape Slow Internet Forever.</span> Professional installation by certified experts with same-day service available.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="px-8 text-lg" onClick={handleGetQuoteClick}>
              Get Free Quote
            </Button>
            <PhoneCallCTA variant="button" />
          </div>
          
          {/* Enhanced Social Proof */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <TrustBadges layout="horizontal" compact={true} />
          </div>
        </div>
        
        {/* Hero Image Placeholder */}
        <div className="mt-12 relative">
          <div className="bg-gradient-to-r from-primary-100 to-primary-200 rounded-2xl h-64 md:h-80 lg:h-96 flex items-center justify-center">
            <p className="text-primary-600 text-lg font-medium">Starlink Installation Hero Image</p>
          </div>
          {/* Floating Cards */}
          <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4 animate-bounce-subtle">
            <p className="text-sm font-semibold text-primary-600">200+ Mbps Speed</p>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 animate-bounce-subtle" style={{ animationDelay: '1s' }}>
            <p className="text-sm font-semibold text-accent-500">Same-Day Install</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
