import React from 'react';
import Section from '../shared/Section';
import Card from '../shared/Card';

interface ServiceAreaMapProps {
  areas: string[];
}

const ServiceAreaMap: React.FC<ServiceAreaMapProps> = ({ areas }) => {
  return (
    <Section background="gray">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Complete Coverage Across the County
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We serve all communities with the same professional, reliable service. 
          No matter where you are, we'll get you connected.
        </p>
      </div>

      {/* Service Areas Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
        {areas.map((area, index) => (
          <Card key={index} className="text-center py-4">
            <div className="text-2xl mb-2">📍</div>
            <h3 className="font-semibold text-gray-900">{area}</h3>
            <p className="text-sm text-accent-600 mt-1">✓ Covered</p>
          </Card>
        ))}
      </div>

      {/* Coverage Stats */}
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
            <p className="text-gray-700 font-medium">County Coverage</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-600 mb-2">&lt;30min</div>
            <p className="text-gray-700 font-medium">Average Drive Time</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-600 mb-2">2hr</div>
            <p className="text-gray-700 font-medium">Response Time</p>
          </div>
        </div>
      </div>

      {/* Service Area Note */}
      <div className="mt-8 text-center">
        <p className="text-gray-600">
          Don't see your specific area listed? <span className="text-primary-600 font-semibold">We still serve you!</span> 
          Call us to confirm coverage for your exact location.
        </p>
      </div>
    </Section>
  );
};

export default ServiceAreaMap;
