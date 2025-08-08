import React from 'react';
import Section from '../shared/Section';
import Button from '../shared/Button';

const ServiceComparison: React.FC = () => {
  const comparisonData = [
    {
      category: 'Installation Quality',
      diy: 'Risky roof work, potential damage',
      national: 'Generic setup, cookie-cutter approach',
      orbittech: 'Professional mounting, custom alignment'
    },
    {
      category: 'Response Time',
      diy: 'Weeks to get equipment, figure out setup',
      national: '1-2 weeks for scheduling',
      orbittech: 'Same-day service available'
    },
    {
      category: 'Local Knowledge',
      diy: 'Trial and error with weather patterns',
      national: 'Limited area expertise',
      orbittech: 'DMV weather & terrain specialists'
    },
    {
      category: 'Support',
      diy: 'YouTube videos and forums',
      national: 'Call center, long wait times',
      orbittech: 'Direct line to your technician'
    },
    {
      category: 'Warranty',
      diy: 'None - you\'re on your own',
      national: '90 days parts only',
      orbittech: '2-year full installation warranty'
    },
    {
      category: 'Cost',
      diy: '$599 equipment + time/risk',
      national: '$599-899 + travel fees',
      orbittech: '$599 all-inclusive, no hidden fees'
    }
  ];

  return (
    <Section background="white">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Why Choose <span className="gradient-text">Professional Installation?</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don't risk your roof, your equipment, or your time. See why local expertise makes all the difference.
        </p>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left py-4 px-4 font-semibold text-gray-900"></th>
              <th className="text-center py-4 px-4">
                <div className="text-lg font-semibold text-red-600 mb-2">DIY Installation</div>
                <div className="text-sm text-gray-500">❌ Risky & Time-Consuming</div>
              </th>
              <th className="text-center py-4 px-4">
                <div className="text-lg font-semibold text-orange-600 mb-2">National Installers</div>
                <div className="text-sm text-gray-500">⚠️ Generic & Slow</div>
              </th>
              <th className="text-center py-4 px-4">
                <div className="text-lg font-semibold text-primary-600 mb-2">The Orbit Tech</div>
                <div className="text-sm text-accent-600">✅ Professional & Local</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, index) => (
              <tr key={index} className="border-b border-gray-100">
                <td className="py-4 px-4 font-semibold text-gray-900">{row.category}</td>
                <td className="py-4 px-4 text-center text-sm text-red-700 bg-red-50">{row.diy}</td>
                <td className="py-4 px-4 text-center text-sm text-orange-700 bg-orange-50">{row.national}</td>
                <td className="py-4 px-4 text-center text-sm text-primary-700 bg-primary-50 font-medium">{row.orbittech}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CTA Section */}
      <div className="mt-12 text-center">
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready for Professional Installation?
          </h3>
          <p className="text-xl mb-6 text-primary-100">
            Join 500+ satisfied customers in the DMV area
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg">
              Get Free Quote Today
            </Button>
            <button className="bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors">
              Call (703) 555-0123
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ServiceComparison;
