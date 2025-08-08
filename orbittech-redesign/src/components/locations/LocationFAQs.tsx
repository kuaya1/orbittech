import React, { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface LocationFAQsProps {
  county: string;
  faqs?: FAQ[];
}

const LocationFAQs: React.FC<LocationFAQsProps> = ({ county, faqs }) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const defaultFAQs: FAQ[] = [
    {
      question: `How long does Starlink installation take in ${county}?`,
      answer: `Most Starlink installations in ${county} are completed within 2-4 hours. This includes mounting the dish, running cables, setting up the router, and optimizing your connection. Our certified technicians work efficiently while ensuring everything is properly weatherproofed and secure. Same-day service is available for most areas in ${county}.`
    },
    {
      question: `Do you serve rural areas of ${county}?`,
      answer: `Absolutely! We specialize in serving rural and hard-to-reach areas throughout ${county} where traditional internet options are limited. Our team has extensive experience with challenging installations including farms, wooded properties, and areas with difficult terrain. We'll conduct a free site survey to ensure optimal satellite visibility for your specific location.`
    },
    {
      question: `What internet speeds can I expect in ${county}?`,
      answer: `Starlink typically delivers 100-200+ Mbps download speeds in ${county}, with some customers seeing speeds up to 300 Mbps during off-peak hours. Upload speeds range from 20-40 Mbps. These speeds are consistent across the county, unlike traditional providers whose performance varies greatly by location. We'll test your speeds during installation to ensure optimal performance.`
    },
    {
      question: `Is professional installation worth it vs DIY in ${county}?`,
      answer: `Professional installation is highly recommended in ${county} due to local weather conditions and terrain challenges. Our certified technicians ensure proper grounding, weatherproofing, and optimal dish positioning that many DIY installations miss. We also handle all warranty registration and provide ongoing support. The 2-year installation warranty alone justifies the professional service cost.`
    },
    {
      question: `What happens if there's bad weather in ${county}?`,
      answer: `Starlink performs well in most weather conditions common to ${county}, including rain and snow. While heavy storms may cause brief interruptions, service typically resumes quickly. Our professional installation includes proper weatherproofing and secure mounting to withstand local weather patterns. We also provide guidance on snow removal and basic maintenance.`
    },
    {
      question: `Can you install Starlink on any type of roof in ${county}?`,
      answer: `We can install Starlink on virtually any roof type common in ${county}, including shingle, metal, tile, and flat roofs. Our team carries specialized mounting equipment for different roof materials and can also provide ground mounts or pole mounts if roof installation isn't ideal. We'll assess your specific situation during the free site survey.`
    },
    {
      question: `Do you offer emergency installation services in ${county}?`,
      answer: `Yes! We provide emergency installation services throughout ${county} for urgent business needs or critical situations. Emergency installations can often be completed within 24 hours, subject to technician availability and weather conditions. Contact us directly for emergency service scheduling and priority pricing.`
    },
    {
      question: `What's included in your ${county} installation warranty?`,
      answer: `Our ${county} installations include a comprehensive 2-year warranty covering all mounting hardware, cable installation, weatherproofing, and workmanship. This includes free service calls for any installation-related issues, re-aiming if needed, and replacement of any defective mounting components. The Starlink equipment itself is covered by SpaceX's standard warranty.`
    }
  ];

  const faqsToDisplay = faqs || defaultFAQs;

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions - {county}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get answers to the most common questions about Starlink installation in {county}. 
          Have a specific question? Contact our team for personalized assistance.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {faqsToDisplay.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-800 pr-4">{faq.question}</span>
                <span className={`text-blue-600 text-xl transform transition-transform ${
                  openFAQ === index ? 'rotate-180' : ''
                }`}>
                  ▼
                </span>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-4 border-t border-gray-100">
                  <p className="text-gray-700 leading-relaxed pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-8 text-center bg-blue-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-4">
            Our {county} installation experts are here to help with personalized answers and free consultations.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
              Call (703) 555-0123
            </button>
            <button className="bg-white hover:bg-gray-50 text-blue-600 font-semibold py-2 px-6 rounded-lg border border-blue-600 transition-colors">
              Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationFAQs;
