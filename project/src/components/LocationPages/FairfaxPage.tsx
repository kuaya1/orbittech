import React from 'react';
import { SEOMetadata } from '../SEO/SEOMetadata';
import LocationSchema from '../SEO/LocationSchema';
import OptimizedImage from '../OptimizedImage';
import { Star, Phone, MapPin, Clock, Shield, Award } from 'lucide-react';

/**
 * Fairfax County, VA location page optimized for local SEO
 * Targets: "Starlink installation Fairfax VA", "satellite internet Fairfax County"
 */
export const FairfaxPage: React.FC = () => {
  const fairfaxZipCodes = [
    '22030', '22031', '22032', '22033', '22034', '22035', '22036', '22037', 
    '22038', '22039', '22040', '22041', '22042', '22043', '22044', '22046', 
    '22047', '22060', '22101', '22102', '22124', '22150', '22151', '22152', 
    '22153', '22154', '22155', '22156', '22158', '22159', '22161', '22180', 
    '22181', '22182', '22183', '22184', '22185'
  ];

  return (
    <>
      {/* SEO Optimization */}
      <SEOMetadata 
        title="Starlink Installation Fairfax VA | Same-Day Service | The Orbit Tech"
        description="Expert Starlink installation in Fairfax County, Virginia. Professional satellite internet setup with 5-star reviews and same-day service. Call The Orbit Tech at 571-999-6915 for your free quote."
        canonical="https://theorbittech.com/locations/fairfax-va"
      />
      
      <LocationSchema 
        location="Fairfax" 
        state="VA" 
        zipCodes={fairfaxZipCodes}
        serviceRadius={30}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-black to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Content */}
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-blue-400 mr-2" />
                <span className="text-blue-400 font-medium">Fairfax County, Virginia</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                #1 Starlink Installation Service in Fairfax County
              </h1>
              
              <p className="text-xl mb-6 text-gray-300">
                Professional Starlink satellite internet installation throughout Fairfax County, VA. 
                Same-day service, 5-star reviews, and guaranteed perfect coverage for your home or business.
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-green-400 mr-2" />
                  <span>Licensed & Insured</span>
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
                  <span>147+ Happy Customers</span>
                </div>
              </div>

              {/* CTA */}
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

            {/* Image */}
            <div className="relative">
              <OptimizedImage
                src="/starlink-installation-fairfax-va.jpg"
                alt="Professional Starlink satellite internet installation in Fairfax County, Virginia by The Orbit Tech certified technicians"
                width={600}
                height={400}
                priority={true}
                className="rounded-lg shadow-2xl"
              />
              
              {/* Service Badge */}
              <div className="absolute -bottom-6 -left-6 bg-blue-600 rounded-lg p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">147+</div>
                  <div className="text-sm">Installations</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Service Areas in Fairfax County */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Starlink Installation Service Areas in Fairfax County
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
            {[
              'Vienna', 'Reston', 'Great Falls', 'McLean', 'Herndon', 'Centreville',
              'Chantilly', 'Oakton', 'Burke', 'Springfield', 'Annandale', 'Falls Church',
              'Tysons', 'Fair Oaks', 'Fairfax Station', 'Clifton', 'Lorton', 'Newington'
            ].map((city) => (
              <div key={city} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <MapPin className="h-5 w-5 text-blue-600 mx-auto mb-2" />
                <div className="font-medium">{city}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600">
              Serving all zip codes: {fairfaxZipCodes.slice(0, 10).join(', ')} and more
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Fairfax County Residents Choose The Orbit Tech
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Licensed & Certified</h3>
              <p className="text-gray-600">
                Fully licensed and insured Starlink installation professionals serving Fairfax County 
                with certified expertise and guaranteed workmanship.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Same-Day Service</h3>
              <p className="text-gray-600">
                Emergency and same-day Starlink installation available throughout Fairfax County. 
                Most installations completed within 2-4 hours.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">5-Star Reviews</h3>
              <p className="text-gray-600">
                Over 147 satisfied customers in Fairfax County with consistently excellent reviews 
                for professional service and reliable installations.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Local Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Fairfax County Customers Are Saying
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <OptimizedImage
                  src="/customer-sarah-chen-fairfax.jpg"
                  alt="Sarah Chen - Satisfied Starlink customer in Vienna, Fairfax County"
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">Sarah Chen</h4>
                  <p className="text-gray-600">Vienna, VA 22180</p>
                  <div className="flex text-yellow-400 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The Orbit Tech team was fantastic! They installed our Starlink system in Vienna 
                and the internet speeds are incredible. Professional service from start to finish."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <OptimizedImage
                  src="/customer-michael-rodriguez-fairfax.jpg"
                  alt="Michael Rodriguez - Happy Starlink installation customer in Reston, Fairfax County"
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">Michael Rodriguez</h4>
                  <p className="text-gray-600">Reston, VA 20194</p>
                  <div className="flex text-yellow-400 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Outstanding Starlink installation in Reston. The technician was knowledgeable 
                and ensured perfect coverage throughout our home. Highly recommend!"
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready for Professional Starlink Installation in Fairfax County?
          </h2>
          <p className="text-xl mb-8 text-blue-200">
            Join 147+ satisfied customers in Fairfax County who chose The Orbit Tech for their Starlink installation.
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

export default FairfaxPage;
