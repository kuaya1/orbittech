import React from 'react';
import { SEOMetadata } from '../../components/seo';
import Section from '../../components/shared/Section';

const ArlingtonCounty: React.FC = () => {
  return (
    <>
      <SEOMetadata 
        title="Starlink Installation Arlington County | Professional Service | The Orbit Tech"
        description="Professional Starlink installation in Arlington County, VA. Same-day service available. Call (703) 555-0123"
        canonical="/locations/arlington-county"
      />
      
      <Section>
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Starlink Installation in Arlington County
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Coming soon! Professional Starlink installation serving all of Arlington County.
          </p>
          <p className="text-lg text-primary-600 font-semibold">
            Call (703) 555-0123 for immediate service
          </p>
        </div>
      </Section>
    </>
  );
};

export default ArlingtonCounty;
