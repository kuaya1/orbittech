import React from 'react';
import { SEOMetadata } from '../SEO/SEOMetadata';
import LocationSchema from '../SEO/LocationSchema';
import OptimizedImage from '../OptimizedImage';
import { Star, Phone, MapPin, Clock, Shield, Award } from 'lucide-react';

/**
 * Arlington County, VA location page optimized for local SEO
 * Targets: "Starlink installation Arlington VA", "satellite internet Arlington County"
 */
export const ArlingtonPage: React.FC = () => {
  const arlingtonZipCodes = [
    '22201', '22202', '22203', '22204', '22205', '22206', '22207', '22209', '22210', '22211',
    '22212', '22213', '22214', '22215', '22216', '22217', '22218', '22219', '22222', '22226',
    '22227', '22230', '22240', '22243', '22244', '22245', '22246'
  ];

  return (
    <>
      <SEOMetadata 
        title="Starlink Installation Arlington VA | Expert Satellite Internet Setup"
        description="Professional Starlink installation in Arlington County, Virginia. Expert satellite internet setup near DC with same-day service. Call The Orbit Tech at 571-999-6915."
        canonical="https://theorbittech.com/locations/arlington-va"
      />
      
      <LocationSchema 
        location="Arlington County" 
        state="VA" 
        zipCodes={arlingtonZipCodes}
        serviceRadius={25}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-black to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-indigo-400 mr-2" />
                <span className="text-indigo-400 font-medium">Arlington County, Virginia</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Premium Starlink Installation Service in Arlington County
              </h1>
              
              <p className="text-xl mb-6 text-gray-300">
                Professional Starlink satellite internet installation throughout Arlington County, VA. 
                Serving Pentagon City, Crystal City, Ballston, Clarendon, and all Arlington neighborhoods.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-indigo-400 mr-2" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-indigo-400 mr-2" />
                  <span>Same-Day Service</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-indigo-400 mr-2" />
                  <span>5-Star Reviews</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-2" />
                  <span>125+ Installations</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+1-571-999-6915"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call (571) 999-6915
                </a>
                <a 
                  href="#quote"
                  className="bg-white text-indigo-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 text-center"
                >
                  Get Free Quote
                </a>
              </div>
            </div>

            <div className="relative">
              <OptimizedImage
                src="/starlink-installation-arlington-county-va.jpg"
                alt="Professional Starlink satellite internet installation in Arlington County, Virginia near Pentagon and DC"
                width={600}
                height={400}
                priority={true}
                className="rounded-lg shadow-2xl"
              />
              
              <div className="absolute -bottom-6 -left-6 bg-indigo-600 rounded-lg p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">125+</div>
                  <div className="text-sm">Installations</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Starlink Installation Service Areas in Arlington County
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
            {[
              'Pentagon City', 'Crystal City', 'Ballston', 'Clarendon', 'Court House', 'Rosslyn',
              'Virginia Square', 'East Falls Church', 'Cherrydale', 'Lyon Village', 'Westover',
              'Bluemont', 'Lyon Park', 'Waverly Hills', 'Dominion Hills', 'Alcova Heights'
            ].map((area) => (
              <div key={area} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <MapPin className="h-5 w-5 text-indigo-600 mx-auto mb-2" />
                <div className="font-medium">{area}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready for Professional Starlink Installation in Arlington County?
          </h2>
          <p className="text-xl mb-8 text-indigo-200">
            Join 125+ satisfied customers in Arlington County who chose The Orbit Tech.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+1-571-999-6915"
              className="bg-white text-indigo-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (571) 999-6915 Now
            </a>
            <a 
              href="#quote"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-900 transition-colors duration-300 text-center"
            >
              Get Your Free Quote
            </a>
          </div>
        </div>
      </section>

    </>
  );
};

export default ArlingtonPage;
