import React from 'react';
import { SEOMetadata } from '../SEO/SEOMetadata';
import LocationSchema from '../SEO/LocationSchema';
import OptimizedImage from '../OptimizedImage';
import { Star, Phone, MapPin, Clock, Shield, Award } from 'lucide-react';

/**
 * Montgomery County, MD location page optimized for local SEO
 * Targets: "Starlink installation Montgomery County MD", "satellite internet Maryland"
 */
export const MontgomeryPage: React.FC = () => {
  const montgomeryZipCodes = [
    '20601', '20602', '20603', '20604', '20607', '20608', '20609', '20613', 
    '20616', '20617', '20618', '20620', '20622', '20623', '20624', '20625', 
    '20627', '20628', '20629', '20630', '20632', '20634', '20636', '20637', 
    '20639', '20640', '20643', '20645', '20646', '20650', '20653', '20656', 
    '20658', '20659', '20660', '20662', '20664', '20667', '20670', '20674', 
    '20675', '20676', '20677', '20678', '20682', '20684', '20685', '20686', 
    '20687', '20688', '20689', '20690', '20692', '20693', '20695', '20697', 
    '20701', '20703', '20704', '20705', '20706', '20707', '20708', '20710', 
    '20711', '20712', '20714', '20715', '20716', '20717', '20718', '20719', 
    '20720', '20721', '20722', '20723', '20724', '20725', '20726', '20727', 
    '20728', '20729', '20731', '20732', '20733', '20735', '20736', '20737', 
    '20738', '20740', '20741', '20742', '20743', '20744', '20745', '20746', 
    '20747', '20748', '20749', '20750', '20751', '20752', '20753', '20754', 
    '20755', '20757', '20758', '20759', '20762', '20763', '20764', '20765', 
    '20768', '20769', '20770', '20771', '20772', '20773', '20774', '20775', 
    '20776', '20777', '20778', '20779', '20781', '20782', '20783', '20784', 
    '20785', '20787', '20788', '20790', '20791', '20792', '20794', '20797', 
    '20799', '20812', '20813', '20814', '20815', '20816', '20817', '20818', 
    '20824', '20825', '20827', '20830', '20831', '20832', '20833', '20837', 
    '20838', '20839', '20841', '20842', '20847', '20848', '20849', '20850', 
    '20851', '20852', '20853', '20854', '20855', '20860', '20861', '20862', 
    '20866', '20868', '20871', '20872', '20874', '20876', '20877', '20878', 
    '20879', '20880', '20882', '20883', '20884', '20885', '20886', '20889', 
    '20892', '20895', '20896', '20897', '20898', '20899', '20901', '20902', 
    '20903', '20904', '20905', '20906', '20910', '20912', '20914', '20915', 
    '20916', '20918', '20993', '20997'
  ];

  return (
    <>
      {/* SEO Optimization */}
      <SEOMetadata 
        title="Starlink Installation Montgomery County MD | Professional Setup"
        description="Expert Starlink installation in Montgomery County, Maryland. Professional satellite internet setup in Rockville, Bethesda, Silver Spring & more. Call 571-999-6915."
        canonical="https://theorbittech.com/locations/montgomery-md"
      />
      
      <LocationSchema 
        location="Montgomery County" 
        state="MD" 
        zipCodes={montgomeryZipCodes.slice(0, 20)} // Show first 20 zip codes
        serviceRadius={35}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-black to-green-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Content */}
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-green-400 mr-2" />
                <span className="text-green-400 font-medium">Montgomery County, Maryland</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Premier Starlink Installation Service in Montgomery County
              </h1>
              
              <p className="text-xl mb-6 text-gray-300">
                Professional Starlink satellite internet installation throughout Montgomery County, MD 
                including Rockville, Bethesda, Silver Spring, and Germantown. Expert technicians, 
                same-day service available.
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-green-400 mr-2" />
                  <span>Licensed & Bonded</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-green-400 mr-2" />
                  <span>Same-Day Available</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-green-400 mr-2" />
                  <span>5-Star Service</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-2" />
                  <span>200+ Installations</span>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+1-571-999-6915"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call (571) 999-6915
                </a>
                <a 
                  href="#quote"
                  className="bg-white text-green-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 text-center"
                >
                  Free Installation Quote
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <OptimizedImage
                src="/starlink-installation-montgomery-county-md.jpg"
                alt="Professional Starlink satellite internet installation in Montgomery County, Maryland by certified technicians"
                width={600}
                height={400}
                priority={true}
                className="rounded-lg shadow-2xl"
              />
              
              {/* Service Badge */}
              <div className="absolute -bottom-6 -left-6 bg-green-600 rounded-lg p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">200+</div>
                  <div className="text-sm">MD Installs</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Service Areas in Montgomery County */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Starlink Installation Service Areas in Montgomery County
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
            {[
              'Rockville', 'Bethesda', 'Silver Spring', 'Germantown', 'Gaithersburg', 'Wheaton',
              'Potomac', 'Chevy Chase', 'Takoma Park', 'Kensington', 'Poolesville', 'Clarksburg',
              'Damascus', 'Laytonsville', 'Olney', 'Derwood', 'North Potomac', 'Barnesville'
            ].map((city) => (
              <div key={city} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <MapPin className="h-5 w-5 text-green-600 mx-auto mb-2" />
                <div className="font-medium">{city}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600">
              Serving all Montgomery County zip codes including: {montgomeryZipCodes.slice(0, 15).join(', ')} and more
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Montgomery County Chooses The Orbit Tech
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Maryland Licensed</h3>
              <p className="text-gray-600">
                Fully licensed and insured for Maryland installations with certified expertise 
                in Starlink satellite internet systems throughout Montgomery County.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Rapid Response</h3>
              <p className="text-gray-600">
                Same-day and emergency Starlink installation services available throughout 
                Montgomery County. Most residential installations completed in 2-3 hours.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Proven Excellence</h3>
              <p className="text-gray-600">
                Over 200 successful Starlink installations in Montgomery County with 
                consistently excellent customer reviews and guaranteed satisfaction.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready for Professional Starlink Installation in Montgomery County?
          </h2>
          <p className="text-xl mb-8 text-green-200">
            Join hundreds of satisfied customers throughout Montgomery County, Maryland.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+1-571-999-6915"
              className="bg-white text-green-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (571) 999-6915 Today
            </a>
            <a 
              href="#quote"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-900 transition-colors duration-300 text-center"
            >
              Get Free Estimate
            </a>
          </div>
        </div>
      </section>

    </>
  );
};

export default MontgomeryPage;
