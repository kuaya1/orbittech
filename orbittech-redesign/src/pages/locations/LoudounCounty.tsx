import React from 'react';
import { SEOMetadata, SchemaInjector } from '../../components/seo';
import LocationHero from '../../components/location/LocationHero';
import ServiceAreaMap from '../../components/location/ServiceAreaMap';
import LocalTestimonials from '../../components/location/LocalTestimonials';
import PricingPackages from '../../components/location/PricingPackages';
import LocationFAQ from '../../components/location/LocationFAQ';
import CTASection from '../../components/home/CTASection';
import TrustIndicators from '../../components/home/TrustIndicators';
import { locations } from '../../data/locations';

const LoudounCounty: React.FC = () => {
  const locationData = locations.find(loc => loc.id === 'loudoun-county');
  
  if (!locationData) {
    return <div>Location not found</div>;
  }

  return (
    <>
      <SEOMetadata 
        title="Starlink Installation Loudoun County | Certified Experts | Same-Day Service"
        description="Professional Starlink installation in Loudoun County, VA. ✓ Certified technicians ✓ Same-day service ✓ 200+ successful installations. Call (703) 555-0123"
        canonical="/locations/loudoun-county"
        keywords={[
          'Starlink installation Loudoun County',
          'Starlink installer Leesburg',
          'Starlink setup Ashburn',
          'satellite internet Sterling VA',
          'Purcellville Starlink',
          'Middleburg internet installation',
          'Loudoun County internet service',
          'professional Starlink installation Virginia'
        ]}
      />
      
      <SchemaInjector 
        type="LocalBusiness"
        data={locationData.schema}
      />
      
      <SchemaInjector 
        type="FAQPage"
        data={{
          url: '/locations/loudoun-county',
          faqs: locationData.faqs
        }}
      />
      
      <LocationHero 
        county="Loudoun County"
        headline="Get Blazing-Fast Starlink Internet in Loudoun County"
        subheadline="Professional installation by certified experts. Same-day service available throughout Leesburg, Ashburn, Sterling, and all of Loudoun County."
        ctaText="Get Free Quote"
        phoneNumber="(703) 555-0123"
      />
      
      <TrustIndicators />
      
      <ServiceAreaMap 
        areas={locationData.serviceAreas}
      />
      
      <PricingPackages />
      
      <LocalTestimonials 
        location="Loudoun County"
        testimonials={locationData.testimonials}
      />
      
      <LocationFAQ 
        location="Loudoun County"
        faqs={locationData.faqs}
      />
      
      {/* Location-specific content section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why Loudoun County Chooses The Orbit Tech
            </h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                From the bustling tech corridors of Ashburn to the rural beauty of Purcellville, 
                Loudoun County residents deserve reliable internet that works everywhere. Our local 
                team understands the unique challenges of internet connectivity across the county's 
                diverse geography.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Whether you're working from home in Sterling, streaming in Leesburg, or running a 
                business in Middleburg, our certified Starlink installations deliver the speed and 
                reliability you need. We've completed over 247 installations across Loudoun County, 
                from historic Waterford to the growing communities of Hamilton and Round Hill.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                With Loudoun County's mix of suburban developments and rural properties, many residents 
                struggle with slow DSL or unreliable cable internet. Starlink provides consistent 
                high-speed internet everywhere in the county, and our professional installation ensures 
                you get the best possible performance from day one.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-primary-800">Local Expertise</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-3 mt-0.5">✓</span>
                    Over 247 successful installations in Loudoun County
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-3 mt-0.5">✓</span>
                    Familiar with local building codes and HOA requirements
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-3 mt-0.5">✓</span>
                    Understanding of Loudoun's varied terrain and weather patterns
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-3 mt-0.5">✓</span>
                    Same-day service to most areas including rural locations
                  </li>
                </ul>
              </div>
              
              <div className="bg-accent-50 rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-accent-800">Complete Service</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-0.5">✓</span>
                    Professional dish mounting and alignment
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-0.5">✓</span>
                    Cable routing and weatherproofing
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-0.5">✓</span>
                    WiFi optimization for your home layout
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-0.5">✓</span>
                    2-year installation warranty with ongoing support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection />
    </>
  );
};

export default LoudounCounty;
