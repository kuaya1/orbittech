import React from 'react';
import { Helmet } from 'react-helmet-async';
import LocationSchema from '../SEO/LocationSchema';
import LocationCrossLinks from '../LocationCrossLinks';

/**
 * Fairfax County Location Page
 * Example implementation with all three priorities addressed
 */
const FairfaxCountyPage: React.FC = () => {
  return (
    <>
      {/* Priority 2: Enhanced Schema Integration */}
      <LocationSchema 
        location="Fairfax County" 
        state="VA" 
        zipCodes={['22030', '22031', '22032', '22033', '22034', '22035']}
        serviceRadius={30}
        nearbyAreas={['Vienna', 'Reston', 'Herndon', 'McLean', 'Great Falls']}
      />

      {/* SEO Metadata */}
      <Helmet>
        <title>Professional Starlink Installation Fairfax County VA | Same-Day Service</title>
        <meta name="description" content="Expert Starlink installation in Fairfax County, Virginia. ⭐ 5-star rated ⭐ Same-day service ⭐ Professional technicians. Serving Vienna, Reston, McLean, and all Fairfax County communities." />
        <meta name="keywords" content="starlink installation fairfax county, satellite internet fairfax va, starlink vienna, starlink reston, starlink mclean, professional installation" />
        <link rel="canonical" href="https://www.theorbittech.com/locations/fairfax-county-va" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Professional Starlink Installation Fairfax County VA" />
        <meta property="og:description" content="Expert Starlink installation in Fairfax County with same-day service and 5-star ratings." />
        <meta property="og:url" content="https://www.theorbittech.com/locations/fairfax-county-va" />
        <meta property="og:type" content="website" />
        
        {/* Local Business JSON-LD with mainEntityOfPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://www.theorbittech.com/locations/fairfax-county-va",
            "mainEntityOfPage": {
              "@type": "WebPage", 
              "@id": "https://www.theorbittech.com/locations/fairfax-county-va"
            },
            "name": "The Orbit Tech - Starlink Installation Fairfax County",
            "description": "Professional Starlink satellite internet installation in Fairfax County, Virginia. Expert setup, same-day service, and 5-star customer reviews.",
            "url": "https://www.theorbittech.com/locations/fairfax-county-va",
            "telephone": "+1-571-999-6915",
            "email": "contact@theorbittech.com",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "VA",
              "addressCountry": "US",
              "addressLocality": "Fairfax County"
            },
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 38.8462,
                "longitude": -77.3064
              },
              "geoRadius": "30 miles"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "127"
            }
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Professional Starlink Installation<br />
                <span className="text-orange-400">Fairfax County, Virginia</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Expert satellite internet installation serving Vienna, Reston, McLean, Herndon, 
                and all Fairfax County communities. Same-day service with 5-star ratings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact?location=Fairfax%20County&state=VA"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
                >
                  Get Free Quote Today
                </a>
                <a 
                  href="tel:+15719996915"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
                >
                  Call: (571) 999-6915
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas in Fairfax County */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Serving All Fairfax County Communities
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
                {[
                  'Vienna', 'Reston', 'McLean', 'Herndon', 'Great Falls', 'Oakton',
                  'Burke', 'Centreville', 'Chantilly', 'Clifton', 'Fairfax City',
                  'Falls Church', 'Annandale', 'Springfield', 'Tysons Corner', 'Lorton'
                ].map((area, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <span className="font-medium text-gray-900">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Complete Starlink Installation Services
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">Professional Mounting</h3>
                  <p className="text-gray-600">
                    Expert roof and ground mounting with weatherproof installation. 
                    We handle all mounting options safely and securely.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">Cable Routing</h3>
                  <p className="text-gray-600">
                    Clean, professional cable management through walls, attics, 
                    and basements with minimal disruption to your home.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">Network Setup</h3>
                  <p className="text-gray-600">
                    Complete network configuration, Wi-Fi optimization, and 
                    device connection to get you online immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Priority 3: Internal Linking Matrix */}
        <LocationCrossLinks currentLocation="Fairfax County" currentState="VA" />

        {/* Local Reviews */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">
                What Fairfax County Customers Say
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {'★'.repeat(5)}
                    </div>
                    <span className="ml-2 font-semibold">Mike R. - Vienna</span>
                  </div>
                  <p className="text-gray-600 italic">
                    "Excellent service from The Orbit Tech! They installed our Starlink system 
                    in Vienna quickly and professionally. Internet speed is amazing!"
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {'★'.repeat(5)}
                    </div>
                    <span className="ml-2 font-semibold">Sarah L. - McLean</span>
                  </div>
                  <p className="text-gray-600 italic">
                    "Professional installation team. They handled the complex roof mounting 
                    perfectly and explained everything. Highly recommend!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-blue-600 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">
              Ready for High-Speed Internet in Fairfax County?
            </h2>
            <p className="text-xl mb-8">
              Join hundreds of satisfied customers who chose The Orbit Tech 
              for their Starlink installation in Fairfax County.
            </p>
            <a 
              href="/contact?location=Fairfax%20County&state=VA"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-block"
            >
              Schedule Your Installation Today
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default FairfaxCountyPage;
