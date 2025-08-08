import React from 'react';
import { SEOMetadata } from '../../components/seo';
import Section from '../../components/shared/Section';

const MontgomeryCountyMD: React.FC = () => {
  return (
    <>
      <SEOMetadata 
        title="Starlink Installation Montgomery County MD | Professional Service | The Orbit Tech"
        description="Professional Starlink installation in Montgomery County, Maryland. Same-day service available. Call (703) 555-0123"
        canonical="/locations/montgomery-county-md"
      />
      
      <Section>
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Starlink Installation in Montgomery County, MD
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Coming soon! Professional Starlink installation serving all of Montgomery County, Maryland.
          </p>
          <p className="text-lg text-primary-600 font-semibold">
            Call (703) 555-0123 for immediate service
          </p>
        </div>
      </Section>
    </>
  );
};

export default MontgomeryCountyMD;
