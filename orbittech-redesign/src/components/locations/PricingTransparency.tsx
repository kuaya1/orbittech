import React from 'react';
import Button from '../shared/Button';

interface PricingPackage {
  name: string;
  installationPrice: number;
  monthlyPrice: number;
  features: string[];
  isPopular?: boolean;
  valueProps: string[];
}

const PricingTransparency: React.FC = () => {
  const packages: PricingPackage[] = [
    {
      name: 'Professional Installation',
      installationPrice: 599,
      monthlyPrice: 120,
      features: [
        'Professional dish mounting',
        'Cable routing & weatherproofing',
        'WiFi router setup',
        'Speed testing & optimization',
        '2-hour installation window',
        '1-year installation warranty'
      ],
      valueProps: [
        'Same-day service available',
        'No hidden fees or surprises',
        'All mounting hardware included'
      ]
    },
    {
      name: 'Complete Coverage Package',
      installationPrice: 899,
      monthlyPrice: 120,
      isPopular: true,
      features: [
        'Everything in Professional Installation',
        'Mesh WiFi system (3-node)',
        'Ethernet backhaul setup',
        'Advanced network optimization',
        'Priority support hotline',
        '2-year extended warranty'
      ],
      valueProps: [
        'Whole-home WiFi coverage',
        'Enterprise-grade performance',
        'Future-proof networking setup'
      ]
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          No hidden fees, no surprises. Our all-inclusive pricing covers everything you need 
          for a professional Starlink installation.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {packages.map((pkg, index) => (
          <div 
            key={index} 
            className={`relative bg-white rounded-xl shadow-lg p-8 ${
              pkg.isPopular ? 'ring-2 ring-blue-500' : 'border border-gray-200'
            }`}
          >
            {pkg.isPopular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
            )}

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
              
              <div className="space-y-2">
                <div>
                  <span className="text-4xl font-bold text-gray-900">
                    {formatPrice(pkg.installationPrice)}
                  </span>
                  <span className="text-gray-600 ml-2">one-time installation</span>
                </div>
                
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-2xl font-bold text-blue-600">
                    {formatPrice(pkg.monthlyPrice)}
                  </span>
                  <span className="text-gray-600">/month</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">Starlink service</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">What's Included</h4>
                <ul className="space-y-2">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <span className="text-green-500 mt-0.5">✓</span>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-800 mb-3">Value Propositions</h4>
                <ul className="space-y-2">
                  {pkg.valueProps.map((prop, propIndex) => (
                    <li key={propIndex} className="flex items-start space-x-3">
                      <span className="text-blue-500 mt-0.5">⭐</span>
                      <span className="text-gray-700 text-sm">{prop}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <Button 
                className={`w-full ${pkg.isPopular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                variant={pkg.isPopular ? 'primary' : 'secondary'}
              >
                Get {pkg.name} Quote
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Pricing Information */}
      <div className="mt-12 bg-gray-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          Pricing Details & Guarantees
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl mb-2">💰</div>
            <h4 className="font-semibold text-gray-800 mb-2">No Hidden Fees</h4>
            <p className="text-gray-600 text-sm">
              Our quoted price includes all materials, labor, and setup. 
              No surprise charges or add-on fees.
            </p>
          </div>
          
          <div>
            <div className="text-2xl mb-2">📋</div>
            <h4 className="font-semibold text-gray-800 mb-2">Free Site Survey</h4>
            <p className="text-gray-600 text-sm">
              Complimentary assessment of your property to ensure 
              optimal dish placement before installation.
            </p>
          </div>
          
          <div>
            <div className="text-2xl mb-2">🔄</div>
            <h4 className="font-semibold text-gray-800 mb-2">Satisfaction Guarantee</h4>
            <p className="text-gray-600 text-sm">
              If you're not satisfied with installation quality, 
              we'll make it right at no additional cost.
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm">
            <strong>Need financing?</strong> Ask about our 0% APR payment plans for qualified customers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingTransparency;
