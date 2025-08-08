import React from 'react';
import { SEOMetadata } from '../components/seo';
import HeroSection from '../components/home/HeroSection';
import TrustIndicators from '../components/home/TrustIndicators';
import ServiceComparison from '../components/home/ServiceComparison';
import CTASection from '../components/home/CTASection';

const Home: React.FC = () => {
  return (
    <>
      <SEOMetadata
        title="Starlink Installation DMV | #1 Rated Experts | Same-Day Service | The Orbit Tech"
        description="Professional Starlink installation in DC, Maryland & Virginia. ✓ Certified experts ✓ Same-day service ✓ 500+ installations ✓ 2-year warranty. Call (703) 555-0123"
        canonical="/"
        keywords={[
          'Starlink installation DMV',
          'Starlink installer Virginia',
          'Starlink setup Maryland',
          'satellite internet installation',
          'professional Starlink install',
          'DMV internet service'
        ]}
      />
      
      <HeroSection />
      <TrustIndicators />
      <ServiceComparison />
      <CTASection />
    </>
  );
};

export default Home;
