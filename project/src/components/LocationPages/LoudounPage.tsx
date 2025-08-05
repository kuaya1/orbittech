import React from 'react';
import { SEOMetadata } from '../SEO/SEOMetadata';
import LocationSchema from '../SEO/LocationSchema';
import OptimizedImage from '../OptimizedImage';
import { Star, Phone, MapPin, Clock, Shield, Award } from 'lucide-react';

/**
 * Loudoun County, VA location page optimized for local SEO
 * Targets: "Starlink installation Loudoun County VA", "satellite internet Leesburg"
 */
export const LoudounPage: React.FC = () => {
  const loudounZipCodes = [
    '20101', '20105', '20106', '20107', '20108', '20109', '20110', '20111', '20112', '20113',
    '20115', '20116', '20117', '20118', '20119', '20120', '20121', '20122', '20124', '20129',
    '20130', '20131', '20132', '20134', '20135', '20141', '20142', '20143', '20144', '20145',
    '20146', '20147', '20148', '20149', '20152', '20158', '20159', '20160', '20163', '20164',
    '20165', '20166', '20167', '20168', '20169', '20170', '20171', '20172', '20175', '20176',
    '20177', '20178', '20180', '20184', '20186', '20187', '20190', '20191', '20194', '20197'
  ];

  return (
    <>
      <SEOMetadata 
        title="Starlink Installation Loudoun County VA | Expert Setup Service"
        description="Professional Starlink installation in Loudoun County, Virginia. Expert satellite internet setup in Leesburg, Sterling, Ashburn & more. Call 571-999-6915."
        canonical="https://theorbittech.com/locations/loudoun-va"
      />
      
      <LocationSchema 
        location="Loudoun County" 
        state="VA" 
        zipCodes={loudounZipCodes.slice(0, 25)}
        serviceRadius={40}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-black to-purple-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-purple-400 mr-2" />
                <span className="text-purple-400 font-medium">Loudoun County, Virginia</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Expert Starlink Installation Service in Loudoun County
              </h1>
              
              <p className="text-xl mb-6 text-gray-300">
                Professional Starlink satellite internet installation throughout Loudoun County, VA 
                including Leesburg, Sterling, Ashburn, Purcellville, and all surrounding areas.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-purple-400 mr-2" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-purple-400 mr-2" />
                  <span>Same-Day Service</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-purple-400 mr-2" />
                  <span>5-Star Reviews</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-2" />
                  <span>180+ Installations</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+1-571-999-6915"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call (571) 999-6915
                </a>
                <a 
                  href="#quote"
                  className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 text-center"
                >
                  Get Free Quote
                </a>
              </div>
            </div>

            <div className="relative">
              <OptimizedImage
                src="/starlink-installation-loudoun-county-va.jpg"
                alt="Professional Starlink satellite internet installation in Loudoun County, Virginia including Leesburg and Sterling"
                width={600}
                height={400}
                priority={true}
                className="rounded-lg shadow-2xl"
              />
              
              <div className="absolute -bottom-6 -left-6 bg-purple-600 rounded-lg p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">180+</div>
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
            Starlink Installation Service Areas in Loudoun County
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
            {[
              'Leesburg', 'Sterling', 'Ashburn', 'Purcellville', 'Herndon', 'South Riding',
              'Brambleton', 'Lansdowne', 'Broadlands', 'Stone Ridge', 'Aldie', 'Middleburg',
              'Round Hill', 'Hamilton', 'Hillsboro', 'Lovettsville', 'Paeonian Springs', 'Waterford'
            ].map((city) => (
              <div key={city} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <MapPin className="h-5 w-5 text-purple-600 mx-auto mb-2" />
                <div className="font-medium">{city}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready for Professional Starlink Installation in Loudoun County?
          </h2>
          <p className="text-xl mb-8 text-purple-200">
            Join 180+ satisfied customers in Loudoun County who chose The Orbit Tech.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+1-571-999-6915"
              className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (571) 999-6915 Now
            </a>
            <a 
              href="#quote"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-colors duration-300 text-center"
            >
              Get Your Free Quote
            </a>
          </div>
        </div>
      </section>

    </>
  );
};

export default LoudounPage;
