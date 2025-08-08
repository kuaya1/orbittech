import React from 'react';
import Section from '../shared/Section';
import { FAQ } from '../../types';

interface LocationFAQProps {
  location: string;
  faqs?: FAQ[];
}

const LocationFAQ: React.FC<LocationFAQProps> = ({ location, faqs = [] }) => {
  // Default location-specific FAQs
  const defaultFaqs: FAQ[] = [
    {
      id: '1',
      question: `How long does Starlink installation take in ${location}?`,
      answer: `Most installations in ${location} take 1-3 hours depending on your roof type and desired setup. We provide same-day service for most areas in ${location}.`,
      category: 'installation'
    },
    {
      id: '2',
      question: `Do you serve all areas of ${location}?`,
      answer: `Yes! We serve all communities within ${location} including rural and suburban areas where traditional internet options may be limited.`,
      category: 'coverage'
    },
    {
      id: '3',
      question: `What speeds can I expect with Starlink in ${location}?`,
      answer: `Typical speeds in ${location} range from 150-250 Mbps download with low latency, perfect for remote work, streaming, and gaming. Speeds may vary based on network congestion and weather conditions.`,
      category: 'performance'
    },
    {
      id: '4',
      question: `Is professional installation really necessary in ${location}?`,
      answer: `Absolutely! Professional installation ensures optimal dish placement, proper weatherproofing, and compliance with local building codes in ${location}. Our 2-year warranty protects your investment.`,
      category: 'installation'
    },
    {
      id: '5',
      question: `How much does Starlink installation cost in ${location}?`,
      answer: `Our professional installation starts at $599 for complete setup including mounting, alignment, and optimization. This includes our 2-year warranty and same-day service in most ${location} areas.`,
      category: 'pricing'
    },
    {
      id: '6',
      question: `What if I have HOA restrictions in ${location}?`,
      answer: `We're experienced with HOA requirements throughout ${location}. We'll work with your HOA to ensure compliant installation and can provide documentation as needed.`,
      category: 'installation'
    }
  ];

  const displayFaqs = faqs.length > 0 ? faqs : defaultFaqs;
  const [openFaq, setOpenFaq] = React.useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <Section background="gray">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Frequently Asked Questions About Starlink in {location}
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Get answers to common questions about professional Starlink installation in {location}.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {displayFaqs.map((faq) => (
            <div key={faq.id} className="bg-white rounded-lg shadow-sm border border-gray-200">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => toggleFaq(faq.id)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className={`transform transition-transform ${openFaq === faq.id ? 'rotate-45' : ''}`}>
                  <svg
                    className="w-6 h-6 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
              </button>
              
              {openFaq === faq.id && (
                <div className="px-6 pb-4">
                  <div className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Help */}
        <div className="mt-12 text-center">
          <div className="bg-primary-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-primary-800 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-primary-700 mb-6">
              Our certified technicians are standing by to answer any questions about Starlink installation in {location}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-primary-700 transition-colors">
                Call (703) 555-0123
              </button>
              <button className="bg-white text-primary-600 border-2 border-primary-600 font-semibold py-3 px-8 rounded-lg hover:bg-primary-50 transition-colors">
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default LocationFAQ;
