import React from 'react';
import { SEOMetadata } from '../SEO/SEOMetadata';
import LocationSchema from '../SEO/LocationSchema';
import OptimizedImage from '../OptimizedImage';
import { Star, Phone, MapPin, Clock, Shield, Award } from 'lucide-react';

/**
 * Howard County, MD location page optimized for local SEO
 * Targets: "Starlink installation Howard County MD", "satellite internet Columbia Maryland"
 */
export const HowardCountyPage: React.FC = () => {
  const howardCountyZipCodes = [
    '20723', '20759', '20763', '20777', '20794', '20833', '20866', '21029', '21036', '21041',
    '21042', '21043', '21044', '21045', '21046', '21075', '21104', '21163', '21737', '21738',
    '21784', '21794'
  ];

  return (
    <>
      <SEOMetadata 
        title="Starlink Installation Howard County MD | Professional Satellite Internet"
        description="Expert Starlink installation in Howard County, Maryland. Professional satellite internet setup in Columbia, Ellicott City, Clarksville & more. Call 571-999-6915."
        canonical="https://theorbittech.com/locations/howard-county-md"
      />
      
      <LocationSchema 
        location="Howard County" 
        state="MD" 
        zipCodes={howardCountyZipCodes}
        serviceRadius={30}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-900 via-black to-orange-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-orange-400 mr-2" />
                <span className="text-orange-400 font-medium">Howard County, Maryland</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Professional Starlink Installation in Howard County
              </h1>
              
              <p className="text-xl mb-6 text-gray-300">
                Expert Starlink satellite internet installation throughout Howard County, MD 
                including Columbia, Ellicott City, Clarksville, and all surrounding communities.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-orange-400 mr-2" />
                  <span>Maryland Licensed</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-orange-400 mr-2" />
                  <span>Same-Day Service</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-orange-400 mr-2" />
                  <span>5-Star Reviews</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-2" />
                  <span>85+ Installations</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+1-571-999-6915"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call (571) 999-6915
                </a>
                <a 
                  href="#quote"
                  className="bg-white text-orange-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 text-center"
                >
                  Get Free Quote
                </a>
              </div>
            </div>

            <div className="relative">
              <OptimizedImage
                src="/starlink-installation-howard-county-md.jpg"
                alt="Professional Starlink satellite internet installation in Howard County, Maryland including Columbia and Ellicott City"
                width={600}
                height={400}
                priority={true}
                className="rounded-lg shadow-2xl"
              />
              
              <div className="absolute -bottom-6 -left-6 bg-orange-600 rounded-lg p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">85+</div>
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
            Starlink Installation Service Areas in Howard County
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
            {[
              'Columbia', 'Ellicott City', 'Clarksville', 'Laurel', 'Savage', 'Fulton',
              'Highland', 'Dayton', 'Glenelg', 'Cooksville', 'Marriottsville', 'West Friendship',
              'Woodbine', 'Sykesville', 'Mount Airy', 'Lisbon'
            ].map((city) => (
              <div key={city} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <MapPin className="h-5 w-5 text-orange-600 mx-auto mb-2" />
                <div className="font-medium">{city}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-orange-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready for Professional Starlink Installation in Howard County?
          </h2>
          <p className="text-xl mb-8 text-orange-200">
            Join 85+ satisfied customers in Howard County who chose The Orbit Tech.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+1-571-999-6915"
              className="bg-white text-orange-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (571) 999-6915 Now
            </a>
            <a 
              href="#quote"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-900 transition-colors duration-300 text-center"
            >
              Get Your Free Quote
            </a>
          </div>
        </div>
      </section>

    </>
  );
};

export default HowardCountyPage;
