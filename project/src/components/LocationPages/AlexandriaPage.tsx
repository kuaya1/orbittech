import React from 'react';
import { SEOMetadata } from '../SEO/SEOMetadata';
import LocationSchema from '../SEO/LocationSchema';
import OptimizedImage from '../OptimizedImage';
import { Star, Phone, MapPin, Clock, Shield, Award } from 'lucide-react';

/**
 * Alexandria, VA (City) location page optimized for local SEO
 * Targets: "Starlink installation Alexandria VA", "satellite internet Alexandria Virginia"
 */
export const AlexandriaPage: React.FC = () => {
  const alexandriaZipCodes = [
    '22301', '22302', '22303', '22304', '22305', '22306', '22307', '22308', '22309', '22310',
    '22311', '22312', '22313', '22314', '22315', '22320', '22321', '22331', '22332', '22333',
    '22334', '22336'
  ];

  return (
    <>
      <SEOMetadata 
        title="Starlink Installation Alexandria VA | Professional Satellite Internet Setup"
        description="Expert Starlink installation in Alexandria, Virginia. Professional satellite internet setup in Old Town, Del Ray, West End & more. Call The Orbit Tech at 571-999-6915."
        canonical="https://theorbittech.com/locations/alexandria-va"
      />
      
      <LocationSchema 
        location="Alexandria" 
        state="VA" 
        zipCodes={alexandriaZipCodes}
        serviceRadius={25}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-900 via-black to-teal-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-teal-400 mr-2" />
                <span className="text-teal-400 font-medium">Alexandria, Virginia</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Expert Starlink Installation Service in Alexandria
              </h1>
              
              <p className="text-xl mb-6 text-gray-300">
                Professional Starlink satellite internet installation throughout Alexandria, VA. 
                Serving Old Town, Del Ray, West End, Eisenhower Valley, and all Alexandria neighborhoods.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-teal-400 mr-2" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-teal-400 mr-2" />
                  <span>Same-Day Service</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-teal-400 mr-2" />
                  <span>5-Star Reviews</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-2" />
                  <span>95+ Installations</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+1-571-999-6915"
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call (571) 999-6915
                </a>
                <a 
                  href="#quote"
                  className="bg-white text-teal-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 text-center"
                >
                  Get Free Quote
                </a>
              </div>
            </div>

            <div className="relative">
              <OptimizedImage
                src="/starlink-installation-alexandria-va.jpg"
                alt="Professional Starlink satellite internet installation in Alexandria, Virginia including Old Town and Del Ray"
                width={600}
                height={400}
                priority={true}
                className="rounded-lg shadow-2xl"
              />
              
              <div className="absolute -bottom-6 -left-6 bg-teal-600 rounded-lg p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">95+</div>
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
            Starlink Installation Service Areas in Alexandria
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
            {[
              'Old Town', 'Del Ray', 'West End', 'Eisenhower Valley', 'Seminary Hill', 'Potomac Yard',
              'Rosemont', 'North Ridge', 'Taylor Run', 'Beverley Hills', 'Landmark', 'Cameron Station',
              'Carlyle', 'Parker-Gray', 'Braddock Heights', 'Mount Vernon Avenue'
            ].map((area) => (
              <div key={area} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <MapPin className="h-5 w-5 text-teal-600 mx-auto mb-2" />
                <div className="font-medium">{area}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-teal-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready for Professional Starlink Installation in Alexandria?
          </h2>
          <p className="text-xl mb-8 text-teal-200">
            Join 95+ satisfied customers in Alexandria who chose The Orbit Tech.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+1-571-999-6915"
              className="bg-white text-teal-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (571) 999-6915 Now
            </a>
            <a 
              href="#quote"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-teal-900 transition-colors duration-300 text-center"
            >
              Get Your Free Quote
            </a>
          </div>
        </div>
      </section>

    </>
  );
};

export default AlexandriaPage;
