import React from 'react';
import { SEOMetadata } from '../SEO/SEOMetadata';
import LocationSchema from '../SEO/LocationSchema';
import OptimizedImage from '../OptimizedImage';
import { Star, Phone, MapPin, Clock, Shield, Award } from 'lucide-react';

/**
 * Prince William County, VA location page optimized for local SEO
 * Targets: "Starlink installation Prince William County VA", "satellite internet Manassas"
 */
export const PrinceWilliamPage: React.FC = () => {
  const princeWilliamZipCodes = [
    '20105', '20106', '20109', '20110', '20111', '20112', '20115', '20119', '20120', '20121',
    '20136', '20137', '20143', '20144', '20151', '20155', '20169', '20170', '20181', '20187',
    '20191', '20194', '20195', '22025', '22026', '22027', '22079', '22110', '22111', '22125',
    '22134', '22135', '22172', '22191', '22192', '22193'
  ];

  return (
    <>
      <SEOMetadata 
        title="Starlink Installation Prince William County VA | Professional Setup"
        description="Expert Starlink installation in Prince William County, Virginia. Professional satellite internet setup in Manassas, Woodbridge, Dale City & more. Call 571-999-6915."
        canonical="https://theorbittech.com/locations/prince-william-va"
      />
      
      <LocationSchema 
        location="Prince William County" 
        state="VA" 
        zipCodes={princeWilliamZipCodes}
        serviceRadius={35}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-900 via-black to-red-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-red-400 mr-2" />
                <span className="text-red-400 font-medium">Prince William County, Virginia</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Professional Starlink Installation in Prince William County
              </h1>
              
              <p className="text-xl mb-6 text-gray-300">
                Expert Starlink satellite internet installation throughout Prince William County, VA 
                including Manassas, Woodbridge, Dale City, Gainesville, and all surrounding communities.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-red-400 mr-2" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-red-400 mr-2" />
                  <span>Same-Day Service</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-red-400 mr-2" />
                  <span>5-Star Reviews</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-2" />
                  <span>165+ Installations</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+1-571-999-6915"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call (571) 999-6915
                </a>
                <a 
                  href="#quote"
                  className="bg-white text-red-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 text-center"
                >
                  Get Free Quote
                </a>
              </div>
            </div>

            <div className="relative">
                            <OptimizedImage
                src="/starlink-dish-installation.jpg"
                alt="Professional Starlink installation in Prince William County Virginia"
                width={600}
                height={400}
                priority={true}
                className="rounded-lg shadow-2xl"
              />
              
              <div className="absolute -bottom-6 -left-6 bg-red-600 rounded-lg p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">165+</div>
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
            Starlink Installation Service Areas in Prince William County
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
            {[
              'Manassas', 'Woodbridge', 'Dale City', 'Gainesville', 'Haymarket', 'Occoquan',
              'Dumfries', 'Triangle', 'Quantico', 'Lake Ridge', 'Montclair', 'Manassas Park',
              'Bull Run', 'Catharpin', 'Nokesville', 'Independent Hill'
            ].map((city) => (
              <div key={city} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <MapPin className="h-5 w-5 text-red-600 mx-auto mb-2" />
                <div className="font-medium">{city}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-red-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready for Professional Starlink Installation in Prince William County?
          </h2>
          <p className="text-xl mb-8 text-red-200">
            Join 165+ satisfied customers in Prince William County who chose The Orbit Tech.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+1-571-999-6915"
              className="bg-white text-red-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (571) 999-6915 Now
            </a>
            <a 
              href="#quote"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-900 transition-colors duration-300 text-center"
            >
              Get Your Free Quote
            </a>
          </div>
        </div>
      </section>

    </>
  );
};

export default PrinceWilliamPage;
