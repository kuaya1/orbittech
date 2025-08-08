import React from 'react';
import { SEOMetadata } from '../../components/seo';
import Section from '../../components/shared/Section';

const FairfaxCounty: React.FC = () => {
  return (
    <>
      <SEOMetadata 
        title="Starlink Installation Fairfax County | Professional Service | The Orbit Tech"
        description="Professional Starlink installation in Fairfax County, VA. Serving McLean, Reston, Vienna, and all surrounding areas. Call (703) 555-0123"
        canonical="/locations/fairfax-county"
      />
      
      <Section>
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Starlink Installation in Fairfax County
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Coming soon! Professional Starlink installation serving McLean, Reston, Vienna, and all of Fairfax County.
          </p>
          <p className="text-lg text-primary-600 font-semibold">
            Call (703) 555-0123 for immediate service
          </p>
        </div>
      </Section>
    </>
  );
};

export default FairfaxCounty;
