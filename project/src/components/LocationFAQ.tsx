import React from 'react';

// FAQ interface
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'installation' | 'pricing' | 'technical' | 'location' | 'service';
}

// Common FAQ templates
const COMMON_QUESTIONS = {
  installation: [
    {
      question: "How long does Starlink installation take in {location}?",
      answer: "Most Starlink installations in {location}, {state} take 2-4 hours depending on your property setup. Our certified technicians handle everything from dish mounting to network configuration for a complete same-day installation."
    },
    {
      question: "Do you provide Starlink installation in {location}, {state}?",
      answer: "Yes! We provide professional Starlink installation services throughout {location}, {state} and surrounding areas. We serve zip codes {zipCodes} with same-day and next-day appointment availability."
    }
  ],
  pricing: [
    {
      question: "What does Starlink installation cost in {location}?",
      answer: "Starlink installation pricing in {location}, {state} starts at $299 for standard residential setup. This includes professional mounting, cable routing, network setup, and testing. We provide free estimates and transparent pricing with no hidden fees."
    }
  ],
  technical: [
    {
      question: "What internet speeds can I expect with Starlink in {location}?",
      answer: "Starlink in {location}, {state} typically delivers 50-200 Mbps download speeds with low latency. Rural areas often see the best performance improvement, with speeds significantly faster than traditional satellite internet options."
    }
  ],
  location: [
    {
      question: "Do you offer same-day Starlink installation in {location}?",
      answer: "Yes! We offer same-day Starlink installation in {location}, {state} based on availability. Our local technicians can often schedule installations within 24-48 hours. Contact us early in the day for potential same-day service."
    }
  ],
  service: [
    {
      question: "What's included in your {location} Starlink installation service?",
      answer: "Our {location}, {state} Starlink installation includes: professional dish mounting, weatherproof cable installation, indoor equipment setup, Wi-Fi network configuration, speed testing, and customer training. We also provide ongoing support and troubleshooting."
    }
  ]
};

/**
 * Seasonal and trending FAQ content for maximum relevance
 * Automatically adapts to current season for better engagement
 */
const TRENDING_QUESTIONS = {
  winter: [
    {
      question: "Does snow affect Starlink installation in {location}?",
      answer: "Our {location}, {state} technicians are experienced with winter installations. Starlink dishes have built-in snow melt features, and we ensure proper mounting for all weather conditions. Winter installations are fully supported with weatherproof setup."
    },
    {
      question: "Can Starlink work during winter storms in {location}, {state}?",
      answer: "Yes! Starlink in {location}, {state} maintains connectivity during most winter weather. The dish automatically melts snow and ice, and the low-earth orbit satellites provide better storm resilience than traditional satellite internet."
    }
  ],
  spring: [
    {
      question: "Is spring the best time for Starlink installation in {location}?",
      answer: "Spring is an excellent time for Starlink installation in {location}, {state}! Mild weather allows for optimal setup conditions, and you'll have reliable internet ready for summer work-from-home needs and outdoor activities."
    }
  ],
  summer: [
    {
      question: "Does heat affect Starlink performance in {location}, {state}?",
      answer: "Starlink dishes in {location}, {state} are designed for extreme temperatures. The system includes thermal management to maintain optimal performance even during hot {state} summers. Professional installation ensures proper ventilation."
    },
    {
      question: "Can I get Starlink installed for my {location} summer property?",
      answer: "Absolutely! We provide Starlink installation for vacation homes, cabins, and summer properties throughout {location}, {state}. Perfect for remote work while enjoying your summer retreat."
    }
  ],
  fall: [
    {
      question: "Should I install Starlink before winter in {location}?",
      answer: "Fall installation in {location}, {state} is highly recommended! Getting Starlink setup before winter ensures you have reliable internet during storms and prepares your home for the winter months ahead."
    }
  ]
};

/**
 * Dynamic seasonal FAQ selection based on current date
 * Keeps content fresh and relevant year-round
 */
const getSeasonalFAQs = (location: string, state: string) => {
  const month = new Date().getMonth(); // 0-11
  let season: keyof typeof TRENDING_QUESTIONS;
  
  if (month >= 11 || month <= 2) season = 'winter';    // Dec, Jan, Feb
  else if (month >= 3 && month <= 5) season = 'spring'; // Mar, Apr, May
  else if (month >= 6 && month <= 8) season = 'summer'; // Jun, Jul, Aug
  else season = 'fall';                                 // Sep, Oct, Nov
  
  return TRENDING_QUESTIONS[season].map(faq => ({
    ...faq,
    question: faq.question.replace(/{location}/g, location).replace(/{state}/g, state),
    answer: faq.answer.replace(/{location}/g, location).replace(/{state}/g, state)
  }));
};

/**
 * Generate location-specific FAQs
 * @param location City name
 * @param state State abbreviation
 * @param zipCodes Array of served zip codes
 * @param categories FAQ categories to include
 * @returns Customized FAQ array for the location
 */
export const generateLocationFAQs = (
  location: string,
  state: string,
  zipCodes: string[] = [],
  categories: (keyof typeof COMMON_QUESTIONS)[] = ['installation', 'pricing', 'technical', 'location', 'service']
): FAQ[] => {
  const faqs: FAQ[] = [];
  let id = 1;

  // Add standard category-based FAQs
  categories.forEach(category => {
    COMMON_QUESTIONS[category].forEach(template => {
      faqs.push({
        id: `faq-${id++}`,
        question: template.question
          .replace(/{location}/g, location)
          .replace(/{state}/g, state),
        answer: template.answer
          .replace(/{location}/g, location)
          .replace(/{state}/g, state)
          .replace(/{zipCodes}/g, zipCodes.slice(0, 5).join(', ')),
        category
      });
    });
  });

  // Add seasonal trending FAQs for enhanced relevance
  const seasonalFAQs = getSeasonalFAQs(location, state);
  seasonalFAQs.forEach(seasonal => {
    faqs.push({
      id: `faq-seasonal-${id++}`,
      question: seasonal.question,
      answer: seasonal.answer,
      category: 'technical' // Seasonal questions typically fall under technical
    });
  });

  return faqs;
};

/**
 * Generate FAQ Schema for SEO
 */
export const generateFAQSchema = (faqs: FAQ[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

/**
 * LocationFAQ component for displaying location-specific FAQs
 */
interface LocationFAQProps {
  location: string;
  state: string;
  zipCodes?: string[];
  maxFAQs?: number;
  categories?: (keyof typeof COMMON_QUESTIONS)[];
}

export const LocationFAQ: React.FC<LocationFAQProps> = ({
  location,
  state,
  zipCodes = [],
  maxFAQs = 5,
  categories = ['installation', 'pricing', 'technical', 'location', 'service']
}) => {
  const locationFAQs = generateLocationFAQs(location, state, zipCodes, categories)
    .slice(0, maxFAQs);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions - {location}, {state}
        </h2>
        <div className="space-y-6">
          {locationFAQs.map((faq) => (
            <div key={faq.id} className="border border-gray-200 rounded-lg">
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-lg hover:bg-gray-50 transition-colors">
                  <span>{faq.question}</span>
                  <span className="transform group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Have more questions about Starlink installation in {location}, {state}?{' '}
            <a href="/contact" className="text-blue-600 hover:underline font-medium">
              Contact our local experts
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

/**
 * Quick FAQ data for common locations
 */
export const DMV_LOCATION_FAQS = {
  fairfax: generateLocationFAQs("Fairfax", "VA", ["22030", "22031", "22032"]),
  montgomery: generateLocationFAQs("Montgomery County", "MD", ["20814", "20815", "20816"]),
  arlington: generateLocationFAQs("Arlington", "VA", ["22201", "22202", "22203"])
};

export default LocationFAQ;
