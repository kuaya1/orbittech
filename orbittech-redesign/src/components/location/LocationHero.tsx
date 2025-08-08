import React from 'react';
import Button from '../shared/Button';
import Section from '../shared/Section';

interface LocationHeroProps {
  county: string;
  headline: string;
  subheadline: string;
  ctaText: string;
  phoneNumber: string;
  backgroundImage?: string;
}

const LocationHero: React.FC<LocationHeroProps> = ({
  county,
  headline,
  subheadline,
  ctaText,
  phoneNumber,
  backgroundImage
}) => {
  return (
    <Section className="relative overflow-hidden hero-pattern">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-4">
          <span className="inline-block bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-semibold">
            Now Serving {county}
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          {headline}
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          {subheadline}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="lg" className="px-8">
            {ctaText}
          </Button>
          <Button variant="secondary" size="lg" className="px-8">
            Call {phoneNumber}
          </Button>
        </div>
        
        {/* Local Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span className="text-accent-500">✓</span>
            <span>247+ Local Installations</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-yellow-500">★</span>
            <span>4.9★ Google Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent-500">⚡</span>
            <span>Same-Day Service</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary-500">🛡️</span>
            <span>2-Year Warranty</span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default LocationHero;
