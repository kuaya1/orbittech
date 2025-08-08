import React from 'react';
import Section from '../shared/Section';
import Button from '../shared/Button';

const CTASection: React.FC = () => {
  return (
    <Section background="dark" className="text-white">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to <span className="text-accent-500">Escape Slow Internet</span> Forever?
        </h2>
        
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join hundreds of satisfied customers in the DMV who chose professional Starlink installation. 
          Same-day service available.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-primary-900 rounded-lg p-6 mb-4">
              <div className="text-4xl mb-2">📞</div>
              <h3 className="text-2xl font-bold mb-2">Call Now</h3>
              <p className="text-gray-300 mb-4">Speak with a certified technician</p>
              <div className="text-3xl font-bold text-accent-500 mb-4">(703) 555-0123</div>
              <Button variant="accent" className="w-full">
                Call Now
              </Button>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-primary-900 rounded-lg p-6 mb-4">
              <div className="text-4xl mb-2">📝</div>
              <h3 className="text-2xl font-bold mb-2">Get Free Quote</h3>
              <p className="text-gray-300 mb-4">Quick online assessment</p>
              <div className="text-lg font-semibold text-accent-500 mb-4">2-minute form</div>
              <Button variant="secondary" className="w-full">
                Get Quote
              </Button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <span className="text-accent-500">✓</span>
            <span>Same-Day Service Available</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent-500">✓</span>
            <span>2-Year Installation Warranty</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent-500">✓</span>
            <span>Fully Licensed & Insured</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent-500">✓</span>
            <span>No Hidden Fees</span>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-gray-400">
            Need emergency service? <span className="text-accent-500 font-semibold">24/7 support available</span>
          </p>
        </div>
      </div>
    </Section>
  );
};

export default CTASection;
