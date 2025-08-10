import React from 'react';
import { SEOMetadata } from '../SEO/SEOMetadata';
import LocationSchema from '../SEO/LocationSchema';
import OptimizedImage from '../OptimizedImage';
import { Star, Phone, MapPin, Clock, Shield, Award } from 'lucide-react';

/**
 * Jefferson County, WV location page optimized for local SEO
 * Targets: "Starlink installation Jefferson County WV", "satellite internet Charles Town West Virginia"
 */
export const JeffersonCountyPage: React.FC = () => {
  const jeffersonCountyZipCodes = [
    '25401', '25402', '25403', '25404', '25405', '25411', '25414', '25425', '25427', 
    '25430', '25432', '25443', '25446'
  ];

  return (
    <>
      <SEOMetadata 
        title="Starlink Installation Jefferson County WV | Professional Satellite Internet"
        description="Expert Starlink installation in Jefferson County, West Virginia. Professional satellite internet setup in Charles Town, Martinsburg, Shepherdstown & more. Call 571-999-6915."
        canonical="https://theorbittech.com/locations/jefferson-county-wv"
      />
      
      <LocationSchema 
        location="Jefferson County" 
        state="WV" 
        zipCodes={jeffersonCountyZipCodes}
        serviceRadius={25}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-black to-green-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-green-400 mr-2" />
                <span className="text-green-400 font-medium">Jefferson County, West Virginia</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Professional Starlink Installation in Jefferson County
              </h1>
              
              <p className="text-xl mb-6 text-gray-300">
                Expert Starlink satellite internet installation throughout Jefferson County, WV 
                including Charles Town, Martinsburg, Shepherdstown, and all Eastern Panhandle communities.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-green-400 mr-2" />
                  <span>WV Licensed</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-green-400 mr-2" />
                  <span>Same-Day Service</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-green-400 mr-2" />
                  <span>5-Star Reviews</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-2" />
                  <span>45+ Installations</span>
                </div>
              </div>

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
                  Get Free Quote
                </a>
              </div>
            </div>

            <div className="relative">
                            <OptimizedImage
                src="/starlink-dish-installation.jpg"
                alt="Professional Starlink installation in Jefferson County West Virginia"
                width={600}
                height={400}
                priority={true}
                className="rounded-lg shadow-2xl"
              />
              
              <div className="absolute -bottom-6 -left-6 bg-green-600 rounded-lg p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">45+</div>
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
            Starlink Installation Service Areas in Jefferson County
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
            {[
              'Charles Town', 'Martinsburg', 'Shepherdstown', 'Ranson', 'Harpers Ferry', 'Kearneysville',
              'Inwood', 'Bunker Hill', 'Gerrardstown', 'Middleway', 'Rippon', 'Shenandoah Junction'
            ].map((city) => (
              <div key={city} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <MapPin className="h-5 w-5 text-green-600 mx-auto mb-2" />
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
            Why Jefferson County Chooses The Orbit Tech
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Eastern Panhandle Experts</h3>
              <p className="text-gray-600">
                Specialized knowledge of West Virginia's Eastern Panhandle terrain and 
                installation requirements for optimal satellite positioning.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">DMV Border Coverage</h3>
              <p className="text-gray-600">
                Perfect for residents commuting to DC/MD/VA who need reliable 
                high-speed internet at their West Virginia home.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Rural Connectivity Specialists</h3>
              <p className="text-gray-600">
                Experienced with rural and mountainous installations where 
                traditional internet options are limited or unavailable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Perfect for Jefferson County's Unique Needs
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Historic Area Compatible:</strong> Installation methods respectful of historic Charles Town and Harpers Ferry areas</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Commuter Ready:</strong> Reliable speeds for remote work while living in West Virginia</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Weather Resistant:</strong> Installations designed for Appalachian weather conditions</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>No Rural Limitations:</strong> High-speed internet where cable and fiber don't reach</span>
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <OptimizedImage
                src="/jefferson-county-wv-starlink-benefits.jpg"
                alt="Starlink satellite internet benefits for Jefferson County West Virginia residents and commuters"
                width={500}
                height={350}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready for Professional Starlink Installation in Jefferson County?
          </h2>
          <p className="text-xl mb-8 text-green-200">
            Join 45+ satisfied customers in Jefferson County who chose The Orbit Tech.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+1-571-999-6915"
              className="bg-white text-green-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (571) 999-6915 Now
            </a>
            <a 
              href="#quote"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-900 transition-colors duration-300 text-center"
            >
              Get Your Free Quote
            </a>
          </div>
        </div>
      </section>

    </>
  );
};

export default JeffersonCountyPage;
