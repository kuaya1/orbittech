import React from 'react';
import { SEOMetadata } from '../components/seo';
import Section from '../components/shared/Section';
import Button from '../components/shared/Button';

const ThankYou: React.FC = () => {
  return (
    <>
      <SEOMetadata 
        title="Thank You | The Orbit Tech"
        description="Thank you for your interest in professional Starlink installation services."
        canonical="/thank-you"
        noindex={true}
      />
      
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-6xl mb-6">🎉</div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Thank You!
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            We've received your request and one of our certified technicians will contact you within 
            2 hours to schedule your professional Starlink installation.
          </p>
          
          <div className="bg-primary-50 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">What happens next?</h2>
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <div className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">1</div>
                <div>
                  <h3 className="font-semibold text-primary-800">Quick Call</h3>
                  <p className="text-primary-700">We'll call you within 2 hours to discuss your needs and schedule installation</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">2</div>
                <div>
                  <h3 className="font-semibold text-primary-800">Site Assessment</h3>
                  <p className="text-primary-700">Free site survey to determine optimal dish placement</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">3</div>
                <div>
                  <h3 className="font-semibold text-primary-800">Professional Installation</h3>
                  <p className="text-primary-700">Complete setup with 2-year warranty included</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-lg font-semibold text-gray-800">
              Need immediate assistance?
            </p>
            
            <Button size="lg" className="mr-4">
              Call (703) 555-0123
            </Button>
            
            <Button variant="secondary" size="lg">
              Return Home
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ThankYou;
