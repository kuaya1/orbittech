import React from 'react';
import { SEOMetadata } from '../SEO/SEOMetadata';
import LocationSchema from '../SEO/LocationSchema';
import OptimizedImage from '../OptimizedImage';
import { Star, Phone, MapPin, Clock, Shield, Award } from 'lucide-react';

/**
 * Anne Arundel County, MD location page optimized for local SEO
 * Targets: "Starlink installation Anne Arundel County MD", "satellite internet Annapolis Maryland"
 */
export const AnneArundelPage: React.FC = () => {
  const anneArundelZipCodes = [
    '20701', '20711', '20712', '20733', '20750', '20755', '20758', '20764', '20776', '20778',
    '20779', '20783', '20794', '21012', '21035', '21037', '21056', '21061', '21077', '21090',
    '21108', '21113', '21114', '21122', '21140', '21144', '21146', '21401', '21402', '21403',
    '21404', '21405', '21409', '21411', '21412'
  ];

  return (
    <>
      <SEOMetadata 
        title="Starlink Installation Anne Arundel County MD | Professional Satellite Internet"
        description="Expert Starlink installation in Anne Arundel County, Maryland. Professional satellite internet setup in Annapolis, Glen Burnie, Severn & more. Call 571-999-6915."
        canonical="https://theorbittech.com/locations/anne-arundel-county-md"
      />
      
      <LocationSchema 
        location="Anne Arundel County" 
        state="MD" 
        zipCodes={anneArundelZipCodes}
        serviceRadius={35}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-black to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-blue-400 mr-2" />
                <span className="text-blue-400 font-medium">Anne Arundel County, Maryland</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Professional Starlink Installation in Anne Arundel County
              </h1>
              
              <p className="text-xl mb-6 text-gray-300">
                Expert Starlink satellite internet installation throughout Anne Arundel County, MD 
                including Annapolis, Glen Burnie, Severn, and all Chesapeake Bay communities.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-blue-400 mr-2" />
                  <span>Maryland Licensed</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-400 mr-2" />
                  <span>Same-Day Service</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-blue-400 mr-2" />
                  <span>5-Star Reviews</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-2" />
                  <span>75+ Installations</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+1-571-999-6915"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call (571) 999-6915
                </a>
                <a 
                  href="#quote"
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 text-center"
                >
                  Get Free Quote
                </a>
              </div>
            </div>

            <div className="relative">
              <OptimizedImage
                src="/starlink-installation-anne-arundel-county-md.jpg"
                alt="Professional Starlink satellite internet installation in Anne Arundel County, Maryland including Annapolis and Glen Burnie"
                width={600}
                height={400}
                priority={true}
                className="rounded-lg shadow-2xl"
              />
              
              <div className="absolute -bottom-6 -left-6 bg-blue-600 rounded-lg p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">75+</div>
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
            Starlink Installation Service Areas in Anne Arundel County
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
            {[
              'Annapolis', 'Glen Burnie', 'Severn', 'Pasadena', 'Crofton', 'Odenton',
              'Arnold', 'Severna Park', 'Millersville', 'Crownsville', 'Gambrills', 'Davidsonville',
              'Deale', 'Edgewater', 'Riva', 'Lothian', 'Shadyside', 'Tracys Landing',
              'Shady Side', 'Churchton', 'Harwood', 'West River'
            ].map((city) => (
              <div key={city} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <MapPin className="h-5 w-5 text-blue-600 mx-auto mb-2" />
                <div className="font-medium">{city}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Anne Arundel County Chooses The Orbit Tech
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Maryland Licensed Professionals</h3>
              <p className="text-gray-600">
                Fully licensed and insured technicians with expertise in Maryland's unique 
                coastal and suburban installation requirements.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Chesapeake Bay Expertise</h3>
              <p className="text-gray-600">
                Specialized experience with coastal installations, weather protection, 
                and optimal positioning for waterfront properties.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Same-Day Service</h3>
              <p className="text-gray-600">
                Quick response times throughout Anne Arundel County. Most installations 
                completed within 2-4 hours of arrival.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready for Professional Starlink Installation in Anne Arundel County?
          </h2>
          <p className="text-xl mb-8 text-blue-200">
            Join 75+ satisfied customers in Anne Arundel County who chose The Orbit Tech.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+1-571-999-6915"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (571) 999-6915 Now
            </a>
            <a 
              href="#quote"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors duration-300 text-center"
            >
              Get Your Free Quote
            </a>
          </div>
        </div>
      </section>

    </>
  );
};

export default AnneArundelPage;
