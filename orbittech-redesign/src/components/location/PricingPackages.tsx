import React from 'react';
import Section from '../shared/Section';
import Card from '../shared/Card';
import Button from '../shared/Button';
import { pricingPackages } from '../../data/pricing';

const PricingPackages: React.FC = () => {
  return (
    <Section background="white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Transparent Pricing, No Hidden Fees
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Choose the installation package that fits your needs. All packages include professional installation and 2-year warranty.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingPackages.map((pkg) => (
          <Card
            key={pkg.id}
            className={`h-full relative ${
              pkg.highlighted 
                ? 'border-2 border-primary-500 shadow-xl scale-105' 
                : 'border border-gray-200'
            }`}
          >
            {pkg.highlighted && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                  Most Popular
                </span>
              </div>
            )}

            <div className="flex flex-col h-full">
              {/* Package Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                
                <div className="mb-4">
                  <div className="text-4xl font-bold text-primary-600">
                    ${pkg.price}
                  </div>
                  <div className="text-sm text-gray-600">one-time installation</div>
                  <div className="text-lg font-semibold text-gray-800 mt-2">
                    + ${pkg.monthlyPrice}/month service
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="flex-1 mb-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-accent-500 mr-3 mt-0.5">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="mt-auto">
                <Button
                  variant={pkg.highlighted ? 'primary' : 'secondary'}
                  className="w-full"
                  size="lg"
                >
                  {pkg.ctaText}
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-12 text-center">
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">What's Included in Every Package</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">🛡️</div>
              <h4 className="font-semibold mb-2">2-Year Warranty</h4>
              <p className="text-gray-600 text-sm">Full coverage on installation work and components</p>
            </div>
            <div>
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="font-semibold mb-2">Same-Day Service</h4>
              <p className="text-gray-600 text-sm">Most installations completed within 24 hours</p>
            </div>
            <div>
              <div className="text-3xl mb-2">📞</div>
              <h4 className="font-semibold mb-2">Ongoing Support</h4>
              <p className="text-gray-600 text-sm">Direct line to your installation technician</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-gray-600 mb-4">
            Questions about which package is right for you?
          </p>
          <Button variant="accent" size="lg">
            Call (703) 555-0123 for Free Consultation
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default PricingPackages;
