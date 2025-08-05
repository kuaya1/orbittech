// src/components/SEO/FAQSchema.tsx
import { Helmet } from 'react-helmet-async';

export const FAQSchema = () => {
  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does Starlink installation take in the DMV area?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most Starlink installations in the DMV area take 2-4 hours depending on the complexity of your setup, roof access, and cable routing requirements. The Orbit Tech ensures every installation is done right the first time."
        }
      },
      {
        "@type": "Question",
        "name": "Do you serve all of Northern Virginia, Maryland, and Washington DC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, The Orbit Tech provides Starlink installation services throughout the entire DMV area including Northern Virginia (Fairfax, Arlington, Alexandria), Maryland (Montgomery County, Prince George's County), and Washington DC."
        }
      },
      {
        "@type": "Question",
        "name": "What is included in The Orbit Tech's Starlink installation service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our comprehensive service includes professional dish mounting, weatherproof cable routing, indoor equipment setup, network configuration, speed testing, and customer training. We also provide a 90-day warranty on all installations."
        }
      },
      {
        "@type": "Question",
        "name": "What makes The Orbit Tech the #1 Starlink installer in the DMV?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Orbit Tech has completed over 500 successful installations with a 5.0-star rating. We're licensed, insured, and specialize exclusively in satellite internet installations throughout DC, Maryland, and Virginia."
        }
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(faqSchemaData)}
      </script>
    </Helmet>
  );
};
