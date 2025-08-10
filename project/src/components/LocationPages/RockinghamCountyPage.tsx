import React from 'react';
import { SEOMetadata } from '../SEO/SEOMetadata';
import LocationSchema from '../SEO/LocationSchema';
import OptimizedImage from '../OptimizedImage';
import { Star, Phone, MapPin, Clock, Shield, Award } from 'lucide-react';

/**
 * Rockingham County, VA location page optimized for local SEO
 * Targets: "Starlink installation Rockingham County VA", "satellite internet Harrisonburg Virginia"
 */
export const RockinghamCountyPage: React.FC = () => {
  const rockinghamCountyZipCodes = [
    '22801', '22802', '22803', '22807', '22812', '22815', '22820', '22821', '22824', '22827',
    '22835', '22840', '22841', '22842', '22843', '22844', '22845', '22846', '22847', '22849',
    '22850', '22853', '22972'
  ];

  return (
    <>
      <SEOMetadata 
        title="Starlink Installation Rockingham County VA | Professional Satellite Internet"
        description="Expert Starlink installation in Rockingham County, Virginia. Professional satellite internet setup in Harrisonburg, Broadway, Elkton & more. Call 571-999-6915."
        canonical="https://theorbittech.com/locations/rockingham-county-va"
      />
      
      <LocationSchema 
        location="Rockingham County" 
        state="VA" 
        zipCodes={rockinghamCountyZipCodes}
        serviceRadius={30}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-900 via-black to-violet-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-violet-400 mr-2" />
                <span className="text-violet-400 font-medium">Rockingham County, Virginia</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Professional Starlink Installation in Rockingham County
              </h1>
              
              <p className="text-xl mb-6 text-gray-300">
                Expert Starlink satellite internet installation throughout Rockingham County, VA 
                including Harrisonburg, Broadway, Elkton, and all Shenandoah Valley communities.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-violet-400 mr-2" />
                  <span>Virginia Licensed</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-violet-400 mr-2" />
                  <span>Same-Day Service</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-violet-400 mr-2" />
                  <span>5-Star Reviews</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-2" />
                  <span>55+ Installations</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+1-571-999-6915"
                  className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call (571) 999-6915
                </a>
                <a 
                  href="#quote"
                  className="bg-white text-violet-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 text-center"
                >
                  Get Free Quote
                </a>
              </div>
            </div>

            <div className="relative">
                            <OptimizedImage
                src="/starlink-dish-installation.jpg"
                alt="Professional Starlink installation in Rockingham County Virginia"
                width={600}
                height={400}
                priority={true}
                className="rounded-lg shadow-2xl"
              />
              
              <div className="absolute -bottom-6 -left-6 bg-violet-600 rounded-lg p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">55+</div>
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
            Starlink Installation Service Areas in Rockingham County
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
            {[
              'Harrisonburg', 'Broadway', 'Elkton', 'Grottoes', 'Timberville', 'Mount Crawford',
              'Bridgewater', 'Dayton', 'Singers Glen', 'Linville', 'McGaheysville', 'Keezletown',
              'Penn Laird', 'Massanutten', 'Hinton', 'Fulks Run'
            ].map((city) => (
              <div key={city} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <MapPin className="h-5 w-5 text-violet-600 mx-auto mb-2" />
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
            Why Rockingham County Chooses The Orbit Tech
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Shenandoah Valley Experts</h3>
              <p className="text-gray-600">
                Specialized knowledge of Virginia's Shenandoah Valley terrain and 
                mountainous installation challenges for optimal satellite positioning.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">University Community Ready</h3>
              <p className="text-gray-600">
                Perfect for JMU students, faculty, and local businesses needing 
                reliable high-speed internet in the Harrisonburg area.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Mountain Installation Specialists</h3>
              <p className="text-gray-600">
                Experienced with challenging mountain installations where 
                traditional internet infrastructure is limited.
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
                Perfect for Shenandoah Valley Living
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-violet-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Mountain-Ready:</strong> Installation methods designed for Appalachian terrain and weather</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-violet-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>University Compatible:</strong> High-speed internet perfect for remote learning and research</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-violet-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Rural Connectivity:</strong> Reliable internet where cable and DSL fall short</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-violet-600 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Tourism Ready:</strong> Support for vacation rentals and hospitality businesses</span>
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <OptimizedImage
                src="/rockingham-county-va-starlink-benefits.jpg"
                alt="Starlink satellite internet benefits for Rockingham County Virginia residents in the Shenandoah Valley"
                width={500}
                height={350}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-violet-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready for Professional Starlink Installation in Rockingham County?
          </h2>
          <p className="text-xl mb-8 text-violet-200">
            Join 55+ satisfied customers in Rockingham County who chose The Orbit Tech.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+1-571-999-6915"
              className="bg-white text-violet-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (571) 999-6915 Now
            </a>
            <a 
              href="#quote"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-violet-900 transition-colors duration-300 text-center"
            >
              Get Your Free Quote
            </a>
          </div>
        </div>
      </section>

    </>
  );
};

export default RockinghamCountyPage;
