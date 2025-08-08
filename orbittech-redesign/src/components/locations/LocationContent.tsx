import React from 'react';

interface LocationContentProps {
  county: string;
  cities: string[];
  majorLandmarks: string[];
  drivingTimes: { from: string; time: string }[];
  testimonials: {
    name: string;
    city: string;
    quote: string;
    speedBefore: number;
    speedAfter: number;
  }[];
}

const LocationContent: React.FC<LocationContentProps> = ({
  county,
  cities,
  majorLandmarks,
  drivingTimes,
  testimonials
}) => {
  return (
    <div className="space-y-12">
      {/* Opening Section */}
      <section className="prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Professional Starlink Installation Services in {county}
        </h2>
        <div className="text-gray-700 leading-relaxed space-y-4">
          <p>
            Serving residents and businesses across {cities.slice(0, 3).join(', ')}, and {cities.length > 3 ? `${cities.length - 3}+ other communities` : cities.slice(3).join(', ')} in {county}, 
            The Orbit Tech brings reliable high-speed internet to areas that have been underserved by traditional providers.
          </p>
          <p>
            Whether you're dealing with slow DSL speeds in rural {county}, unreliable cable internet, or complete lack of broadband options, 
            our certified Starlink installation specialists provide same-day service with professional setup that ensures optimal performance from day one.
          </p>
          <p>
            With 500+ successful installations across the DMV region and a 4.9-star rating, we understand the unique challenges of {county} residents. 
            Our team handles everything from site surveys to optimal dish placement, ensuring your Starlink installation in {county} delivers the 100-200+ Mbps speeds you need.
          </p>
        </div>
      </section>

      {/* Why Choose The Orbit Tech */}
      <section className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose The Orbit Tech for {county}?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <span className="text-green-500 text-xl">🏆</span>
              <div>
                <h3 className="font-semibold text-gray-800">Local {county} Expertise</h3>
                <p className="text-gray-600 text-sm">
                  Our technicians know {county} inside and out, from {majorLandmarks.slice(0, 2).join(' to ')}, 
                  ensuring optimal installation for your specific location.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="text-blue-500 text-xl">⚡</span>
              <div>
                <h3 className="font-semibold text-gray-800">Same-Day Service Available</h3>
                <p className="text-gray-600 text-sm">
                  Emergency installations and urgent service calls throughout {county}, 
                  with most installations completed within 2-4 hours.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <span className="text-purple-500 text-xl">🎓</span>
              <div>
                <h3 className="font-semibold text-gray-800">SpaceX Certified Technicians</h3>
                <p className="text-gray-600 text-sm">
                  All installers are certified by SpaceX with specialized training in satellite positioning, 
                  weather protection, and performance optimization.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="text-orange-500 text-xl">🛡️</span>
              <div>
                <h3 className="font-semibold text-gray-800">2-Year Installation Warranty</h3>
                <p className="text-gray-600 text-sm">
                  Complete warranty coverage on installation work, equipment mounting, 
                  and weatherproofing with free service calls in {county}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Coverage */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete {county} Coverage</h2>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <p className="text-gray-600 mb-6">
              We proudly serve all communities throughout {county}, providing professional Starlink installation 
              with same-day service availability in most areas.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-800 mb-4">Cities & Towns We Serve</h3>
                <div className="grid grid-cols-2 gap-2">
                  {cities.map((city, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="text-gray-700 text-sm">{city}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-4">Driving Times from Major Areas</h3>
                <div className="space-y-2">
                  {drivingTimes.map((route, index) => (
                    <div key={index} className="flex justify-between items-center py-1">
                      <span className="text-gray-700 text-sm">{route.from}</span>
                      <span className="text-blue-600 font-medium text-sm">{route.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Social Proof */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Real Results from {county} Customers</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
              
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-800">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.city}, {county}</div>
                
                <div className="mt-3 bg-gray-50 rounded p-3">
                  <div className="text-xs text-gray-600 mb-1">Speed Improvement</div>
                  <div className="flex items-center justify-between">
                    <span className="text-red-600 font-medium">{testimonial.speedBefore} Mbps</span>
                    <span className="text-gray-400">→</span>
                    <span className="text-green-600 font-medium">{testimonial.speedAfter}+ Mbps</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LocationContent;
