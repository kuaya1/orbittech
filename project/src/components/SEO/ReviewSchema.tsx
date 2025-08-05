// src/components/SEO/ReviewSchema.tsx
import { Helmet } from 'react-helmet-async';

export const ReviewSchema = () => {
  const reviewSchemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.theorbittech.com/#reviews",
    "name": "The Orbit Tech",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah Chen"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "The Orbit Tech team exceeded our expectations! They handled our challenging roofline perfectly and the installation was seamless. Our Starlink speeds are incredible now.",
        "datePublished": "2024-12-15"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Michael Rodriguez"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Outstanding service from quote to completion. The Orbit Tech's DMV team knows exactly what they're doing. Professional installation with excellent cable management.",
        "datePublished": "2024-11-28"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Jennifer Walsh"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "After years of poor rural internet, The Orbit Tech transformed our connectivity completely. Fast, reliable service and their DMV area expertise really shows.",
        "datePublished": "2024-11-10"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(reviewSchemaData)}
      </script>
    </Helmet>
  );
};
