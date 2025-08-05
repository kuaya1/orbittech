import React from 'react';
import OptimizedImage from './OptimizedImage';
import OptimizedImageWithPlaceholder from './OptimizedImageWithPlaceholder';

/**
 * Example usage of OptimizedImage components for The Orbit Tech website
 * Demonstrates best practices for SEO and performance
 */
const ImageExamples: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      
      {/* Hero Section Example */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">Hero Section (Priority Loading)</h2>
        <OptimizedImage
          src="/starlink-hero-dmv.jpg"
          alt="The Orbit Tech - Professional Starlink installation service covering DC, Maryland, and Virginia"
          width={1200}
          height={600}
          priority={true}
          className="w-full h-auto rounded-lg shadow-xl"
        />
      </section>

      {/* Service Gallery Example */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Service Gallery (With Placeholders)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <OptimizedImageWithPlaceholder
            src="/starlink-installation-fairfax.jpg"
            alt="Professional Starlink satellite installation in Fairfax County, Virginia"
            width={400}
            height={300}
            className="rounded-lg hover:scale-105 transition-transform duration-300"
          />
          
          <OptimizedImageWithPlaceholder
            src="/starlink-installation-montgomery.jpg"
            alt="Expert Starlink setup service in Montgomery County, Maryland"
            width={400}
            height={300}
            className="rounded-lg hover:scale-105 transition-transform duration-300"
          />
          
          <OptimizedImageWithPlaceholder
            src="/starlink-installation-arlington.jpg"
            alt="Reliable Starlink internet installation in Arlington, Virginia"
            width={400}
            height={300}
            className="rounded-lg hover:scale-105 transition-transform duration-300"
          />
          
        </div>
      </section>

      {/* Equipment Showcase Example */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Equipment Showcase</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <OptimizedImage
              src="/starlink-gen3-dish.jpg"
              alt="Starlink Generation 3 satellite dish - professional installation available in DMV area"
              width={500}
              height={400}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Starlink Gen 3 Dish</h3>
            <p className="text-gray-600">Latest generation satellite dish with improved performance</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <OptimizedImage
              src="/starlink-router-setup.jpg"
              alt="Starlink Wi-Fi 6 router installation and configuration by The Orbit Tech professionals"
              width={500}
              height={400}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Wi-Fi 6 Router</h3>
            <p className="text-gray-600">High-performance router for optimal coverage</p>
          </div>
          
        </div>
      </section>

      {/* Customer Testimonials Example */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Customer Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <OptimizedImage
                src="/customer-sarah-chen.jpg"
                alt="Sarah Chen - Satisfied Starlink customer in McLean, Virginia"
                width={60}
                height={60}
                className="rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold">Sarah Chen</h4>
                <p className="text-gray-600">McLean, VA</p>
              </div>
            </div>
            <p className="text-gray-700 italic">"The Orbit Tech provided exceptional service. Professional installation and perfect coverage throughout our home!"</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <OptimizedImage
                src="/customer-michael-rodriguez.jpg"
                alt="Michael Rodriguez - Happy Starlink installation customer in Fairfax, Virginia"
                width={60}
                height={60}
                className="rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold">Michael Rodriguez</h4>
                <p className="text-gray-600">Fairfax, VA</p>
              </div>
            </div>
            <p className="text-gray-700 italic">"Outstanding service from start to finish. Now our whole family can work from home without connectivity issues."</p>
          </div>
          
        </div>
      </section>

    </div>
  );
};

export default ImageExamples;
