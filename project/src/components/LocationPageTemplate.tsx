import React from 'react';
import { Helmet } from 'react-helmet-async';
import LocationSchema from './SEO/LocationSchema';
import OptimizedImage from './OptimizedImage';
import LocationReviews from './LocationReviews';
import LocationFAQ from './LocationFAQ';
import { LocationConfig } from '../utils/locationPageGenerator';

interface LocationPageTemplateProps {
  config: LocationConfig;
}

/**
 * Scalable Location Page Template
 * Designed for rapid expansion across DMV market
 */
const LocationPageTemplate: React.FC<LocationPageTemplateProps> = ({ config }) => {
  const { city, state, zipCodes, serviceRadius, keywords, nearbyAreas } = config;

  const seoTitle = `Professional Starlink Installation ${city}, ${state} | Same-Day Service`;
  const seoDescription = `Expert Starlink satellite internet installation in ${city}, ${state}. ⭐ 5-star rated ⭐ Same-day service ⭐ Professional technicians. Serving ${zipCodes.slice(0, 3).join(', ')} and surrounding areas.`;

  return (
    <>
      {/* SEO Head */}
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={keywords.join(', ')} />
        <link rel="canonical" href={`https://theorbittech.com/locations/${city.toLowerCase()}-${state.toLowerCase()}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:url" content={`https://theorbittech.com/locations/${city.toLowerCase()}-${state.toLowerCase()}`} />
        <meta property="og:image" content={`https://theorbittech.com/images/starlink-installation-${city.toLowerCase()}-${state.toLowerCase()}.jpg`} />
        
        {/* Local Business Markup */}
        <meta name="geo.region" content={`${state}-${city}`} />
        <meta name="geo.placename" content={`${city}, ${state}`} />
        <meta name="ICBM" content={`${config.coordinates.lat}, ${config.coordinates.lng}`} />
      </Helmet>

      {/* Location Schema */}
      <LocationSchema
        location={city}
        state={state}
        zipCodes={zipCodes}
        serviceRadius={serviceRadius}
        nearbyAreas={nearbyAreas}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Starlink Installation in {city}, {state}
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Expert satellite internet installation with same-day service. 
            Serving {zipCodes.slice(0, 3).join(', ')} and surrounding areas 
            within {serviceRadius} miles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              Get Free Quote
            </a>
            <a 
              href="tel:+1-571-999-6915" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              Call (571) 999-6915
            </a>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Starlink Installation Service Areas in {city}, {state}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {zipCodes.map((zip) => (
              <div key={zip} className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold mb-2">ZIP Code {zip}</h3>
                <p className="text-gray-600">Same-day installation available</p>
              </div>
            ))}
          </div>
          {nearbyAreas.length > 0 && (
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-center mb-6">
                Also Serving Nearby Areas
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {nearbyAreas.map(area => (
                  <span key={area} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Starlink Services in {city}, {state}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <OptimizedImage
                src="/starlink-residential-installation.jpg"
                alt={`Residential Starlink Installation ${city} ${state}`}
                width={400}
                height={300}
                className="rounded-lg mb-4"
                priority={false}
              />
              <h3 className="text-xl font-semibold mb-4">Residential Installation</h3>
              <p className="text-gray-600">
                Professional home Starlink setup with optimal placement and configuration.
              </p>
            </div>
            <div className="text-center">
              <OptimizedImage
                src="/starlink-commercial-installation.jpg"
                alt={`Commercial Starlink Installation ${city} ${state}`}
                width={400}
                height={300}
                className="rounded-lg mb-4"
                priority={false}
              />
              <h3 className="text-xl font-semibold mb-4">Commercial Installation</h3>
              <p className="text-gray-600">
                Business-grade satellite internet setup for reliable connectivity.
              </p>
            </div>
            <div className="text-center">
              <OptimizedImage
                src="/starlink-troubleshooting.jpg"
                alt={`Starlink Troubleshooting ${city} ${state}`}
                width={400}
                height={300}
                className="rounded-lg mb-4"
                priority={false}
              />
              <h3 className="text-xl font-semibold mb-4">Troubleshooting & Repair</h3>
              <p className="text-gray-600">
                Expert diagnosis and repair of Starlink connectivity issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Reviews */}
      <LocationReviews location={city} state={state} maxReviews={3} />

      {/* Location FAQ */}
      <LocationFAQ
        location={city}
        state={state}
        zipCodes={zipCodes}
        maxFAQs={6}
      />

      {/* Contact CTA */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready for Professional Starlink Installation in {city}?
          </h2>
          <p className="text-xl mb-8">
            Join hundreds of satisfied customers in {city}, {state} who chose 
            The Orbit Tech for their satellite internet installation.
          </p>
          <a 
            href={`/contact?location=${city}&state=${state}`}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-block"
          >
            Schedule Your Installation Today
          </a>
        </div>
      </section>
    </>
  );
};

export default LocationPageTemplate;
