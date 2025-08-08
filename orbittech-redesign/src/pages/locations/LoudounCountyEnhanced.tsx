import React from 'react';
import SEOMetadata from '../../components/seo/SEOMetadata';
import SchemaInjector from '../../components/seo/SchemaInjector';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import LocationContent from '../../components/locations/LocationContent';
import PricingTransparency from '../../components/locations/PricingTransparency';
import LocationFAQs from '../../components/locations/LocationFAQs';
import Testimonials from '../../components/conversion/Testimonials';
import LeadForm from '../../components/conversion/LeadForm';
import { loudounCountyData } from '../../data/locationsData';

const LoudounCountyEnhanced: React.FC = () => {
  const locationData = loudounCountyData;

  return (
    <>
      <SEOMetadata 
        title={`Professional Starlink Installation ${locationData.county} | Certified Experts | The Orbit Tech`}
        description={`Expert Starlink installation in ${locationData.county}, ${locationData.state}. ✓ Same-day service ✓ Certified technicians ✓ 500+ installations. Serving ${locationData.cities.slice(0, 3).join(', ')} and all ${locationData.county} communities.`}
        canonical={`/locations/${locationData.id}`}
        keywords={locationData.seoKeywords}
      />
      
      <SchemaInjector 
        type="LocalBusiness"
        data={{
          name: `The Orbit Tech - Starlink Installation ${locationData.county}`,
          description: `Professional Starlink installation services in ${locationData.county}, ${locationData.state}`,
          telephone: "(703) 555-0123",
          address: {
            addressLocality: locationData.cities[0],
            addressRegion: locationData.state,
            addressCountry: "US"
          },
          serviceArea: locationData.cities,
          priceRange: "$599-$899"
        }}
      />
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Professional Starlink Installation in {locationData.county}
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Certified experts serving {locationData.cities.slice(0, 3).join(', ')}, and all of {locationData.county}. 
                Same-day installation available with 2-year warranty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors">
                  Get Free Quote
                </button>
                <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-white hover:text-blue-600 transition-colors">
                  Call (703) 555-0123
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Location-specific Content */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <LocationContent 
              county={locationData.county}
              cities={locationData.cities}
              majorLandmarks={locationData.majorLandmarks}
              drivingTimes={locationData.drivingTimes}
              testimonials={locationData.testimonials}
            />
          </div>
        </section>

        {/* Pricing Transparency */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <PricingTransparency />
          </div>
        </section>

        {/* Local Social Proof - Testimonials */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Real Results from {locationData.county} Customers
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                See what your neighbors are saying about their Starlink installation experience with The Orbit Tech.
              </p>
            </div>
            <Testimonials variant="featured" limit={3} />
          </div>
        </section>

        {/* Location-specific FAQs */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <LocationFAQs county={locationData.county} />
          </div>
        </section>

        {/* Lead Generation Form */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Ready for Reliable Internet in {locationData.county}?
                </h2>
                <p className="text-gray-600">
                  Get your free quote and join the 500+ satisfied customers across the DMV region.
                </p>
              </div>
              <LeadForm />
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Join the High-Speed Internet Revolution in {locationData.county}
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Don't let slow internet hold you back. Professional Starlink installation 
              delivers the speed and reliability you need for work, entertainment, and everything in between.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors">
                Schedule Installation
              </button>
              <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-white hover:text-gray-900 transition-colors">
                Call (703) 555-0123
              </button>
            </div>
            
            <div className="mt-12 grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400">500+</div>
                <div className="text-gray-300">Installations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">4.9★</div>
                <div className="text-gray-300">Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">2-Year</div>
                <div className="text-gray-300">Warranty</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">Same-Day</div>
                <div className="text-gray-300">Service</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default LoudounCountyEnhanced;
