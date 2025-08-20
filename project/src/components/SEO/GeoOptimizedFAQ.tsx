import { FC } from 'react';
import { SchemaInjector } from '@/components/SEO';

interface GeoFAQ {
  question: string;
  answer: string;
  statistics?: string[];
  localContext?: string;
  expertTip?: string;
  schema?: boolean;
}

interface GeoOptimizedFAQProps {
  faqs: GeoFAQ[];
  location?: {
    city?: string;
    county?: string;
    state: 'VA' | 'MD' | 'DC';
  };
  useSchema?: boolean;
}

const defaultFAQs: GeoFAQ[] = [
  {
    question: "How much does Starlink installation cost in Northern Virginia?",
    answer: "Professional Starlink installation in Northern Virginia starts at $599, with most residential installations ranging from $599-$899 depending on mounting requirements.",
    statistics: [
      "Based on 500+ Northern Virginia installations",
      "Average cost savings of $300/year compared to traditional ISPs",
      "92% customer satisfaction rate"
    ],
    localContext: "Northern Virginia installations often require specialized mounting solutions due to mature tree coverage and historic district requirements.",
    expertTip: "HOA-approved installations in Fairfax and Loudoun counties may qualify for our expedited service program."
  },
  {
    question: "Can Starlink work with trees and obstructions?",
    answer: "Yes, Starlink can work with trees through strategic placement and professional mounting solutions that elevate the dish above tree lines common in the DMV area.",
    statistics: [
      "98% success rate in wooded DMV properties",
      "Average height requirement: 15-20 feet",
      "Tree coverage affects 65% of local installations"
    ],
    localContext: "DMV's dense tree canopy requires specialized mounting solutions, particularly in areas like Great Falls and McLean.",
    expertTip: "We use advanced mapping software to identify optimal installation spots that avoid seasonal leaf coverage."
  },
  {
    question: "What speeds can I expect from Starlink in Maryland?",
    answer: "Maryland Starlink users typically experience download speeds of 150-200 Mbps, with peak speeds reaching 250 Mbps in optimal conditions.",
    statistics: [
      "Based on 300+ Maryland installations",
      "Average latency: 20-40ms",
      "99.9% uptime in Montgomery County"
    ],
    localContext: "Speed variations between urban areas like Bethesda and rural Frederick County are minimal, unlike traditional ISPs.",
    expertTip: "Our installations include speed optimization specifically tuned for Maryland's weather patterns."
  },
  {
    question: "How long does professional Starlink installation take?",
    answer: "A professional Starlink installation typically takes 2-4 hours, including site survey, mounting, cable routing, and network optimization.",
    statistics: [
      "90% of installations completed in under 3 hours",
      "Same-day service available in most DMV locations",
      "Zero rework rate in last 200 installations"
    ],
    localContext: "DMV installations may require additional time for HOA compliance and historic district considerations.",
    expertTip: "Schedule morning installations to avoid afternoon thunderstorms common in the DMV area."
  },
  {
    question: "Is Starlink better than Comcast or Verizon Fios?",
    answer: "Starlink offers comparable speeds to Fios and better reliability than Comcast, with the advantage of no ground infrastructure requirements.",
    statistics: [
      "150-200 Mbps average speeds vs. 100-940 Mbps for Fios",
      "99.9% uptime vs. 99.5% for traditional ISPs",
      "$110/month average cost savings"
    ],
    localContext: "Unlike Fios, Starlink reaches underserved areas in western Loudoun and Frederick counties.",
    expertTip: "Consider Starlink as primary internet with Fios as backup for critical business applications."
  }
];

export const GeoOptimizedFAQ: FC<GeoOptimizedFAQProps> = ({ faqs = defaultFAQs, location, useSchema = true }) => {
  const renderFAQ = (faq: GeoFAQ) => {
    const localizedAnswer = location ? 
      faq.answer.replace(/Northern Virginia|Maryland|DMV/g, `${location.county || location.city}, ${location.state}`) :
      faq.answer;

    return (
      <div className="mb-8 last:mb-0" key={faq.question}>
        <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
        <div className="space-y-4">
          <p className="text-gray-700">{localizedAnswer}</p>
          
          {faq.statistics && (
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Quick Facts:</h4>
              <ul className="list-disc list-inside space-y-1">
                {faq.statistics.map((stat, index) => (
                  <li key={index} className="text-sm text-gray-600">{stat}</li>
                ))}
              </ul>
            </div>
          )}
          
          {faq.localContext && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Local Context:</h4>
              <p className="text-sm text-gray-600">{faq.localContext}</p>
            </div>
          )}
          
          {faq.expertTip && (
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Expert Tip:</h4>
              <p className="text-sm text-gray-600">{faq.expertTip}</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="py-12">
      {useSchema && (
        <SchemaInjector
          pageType="service"
          faqs={faqs.map(faq => ({
            question: faq.question,
            answer: `${faq.answer} ${faq.localContext || ''} ${faq.expertTip ? `Expert Tip: ${faq.expertTip}` : ''}`
          }))}
        />
      )}
      
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map(renderFAQ)}
        </div>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map(renderFAQ)}
        </div>
      </div>
    </div>
  );
};

export default GeoOptimizedFAQ;
