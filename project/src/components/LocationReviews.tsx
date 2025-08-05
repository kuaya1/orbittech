import React from 'react';

// Review interface
export interface LocationReview {
  id: string;
  customerName: string;
  location: string;
  state: string;
  rating: number;
  reviewText: string;
  date: string;
  verified: boolean;
  serviceType: 'residential' | 'commercial' | 'troubleshooting';
  zipCode?: string;
}

// Sample reviews data structure
export const DMV_REVIEWS: LocationReview[] = [
  {
    id: "review-001",
    customerName: "Sarah M.",
    location: "Fairfax",
    state: "VA",
    rating: 5,
    reviewText: "Excellent Starlink installation service! The technician arrived on time, explained everything clearly, and had my satellite internet up and running in just 2 hours. Perfect internet speeds now!",
    date: "2024-12-15",
    verified: true,
    serviceType: "residential",
    zipCode: "22030"
  },
  {
    id: "review-002",
    customerName: "Michael K.",
    location: "Montgomery County",
    state: "MD",
    rating: 5,
    reviewText: "Outstanding professional service for our business Starlink setup. The team handled everything from planning to installation. Our office internet is now lightning fast!",
    date: "2024-12-10",
    verified: true,
    serviceType: "commercial"
  },
  {
    id: "review-003",
    customerName: "Jennifer L.",
    location: "Arlington",
    state: "VA",
    rating: 5,
    reviewText: "Had issues with my Starlink after a storm. The Orbit Tech team diagnosed and fixed everything quickly. Great troubleshooting skills and friendly service!",
    date: "2024-12-08",
    verified: true,
    serviceType: "troubleshooting",
    zipCode: "22201"
  }
];

/**
 * Filter reviews by location for location-specific pages
 * @param reviews Array of all reviews
 * @param location Target location
 * @param state Target state
 * @returns Filtered reviews for the specific location
 */
export const getLocationReviews = (
  reviews: LocationReview[], 
  location: string, 
  state: string
): LocationReview[] => {
  return reviews.filter(review => 
    review.location.toLowerCase() === location.toLowerCase() && 
    review.state.toLowerCase() === state.toLowerCase()
  );
};

/**
 * Get reviews by service type for targeted content
 */
export const getReviewsByService = (
  reviews: LocationReview[], 
  serviceType: LocationReview['serviceType']
): LocationReview[] => {
  return reviews.filter(review => review.serviceType === serviceType);
};

/**
 * Generate review schema for SEO
 */
export const generateReviewSchema = (reviews: LocationReview[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": reviews.map((review, index) => ({
      "@type": "Review",
      "position": index + 1,
      "author": {
        "@type": "Person",
        "name": review.customerName
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": 5,
        "worstRating": 1
      },
      "reviewBody": review.reviewText,
      "datePublished": review.date,
      "itemReviewed": {
        "@type": "Service",
        "name": `Starlink Installation - ${review.location}, ${review.state}`
      }
    }))
  };
};

/**
 * Enhanced review aggregation for trust signals and SEO
 * Calculates comprehensive rating statistics
 */
export const getAggregateRating = (reviews: LocationReview[]) => {
  if (reviews.length === 0) {
    return null;
  }

  const totalReviews = reviews.length;
  const averageRating = reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews;
  
  // Calculate rating distribution for rich snippets
  const ratingDistribution = [1, 2, 3, 4, 5].reduce((dist, rating) => {
    dist[rating] = reviews.filter(r => r.rating === rating).length;
    return dist;
  }, {} as Record<number, number>);

  return {
    "@type": "AggregateRating",
    "ratingValue": averageRating.toFixed(1),
    "reviewCount": totalReviews,
    "bestRating": "5",
    "worstRating": "1",
    "ratingDistribution": ratingDistribution
  };
};

/**
 * Location-specific review velocity tracking
 * Shows recent review activity for social proof
 */
export const getRecentReviews = (location: string, days: number = 30) => {
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - days);
  
  return DMV_REVIEWS.filter(review => 
    review.location === location && 
    new Date(review.date) >= cutoffDate
  );
};

/**
 * Get reviews by service type for targeted testimonials
 * Useful for showcasing relevant customer experiences
 */
export const getReviewsByServiceType = (
  location: string, 
  serviceType: LocationReview['serviceType']
) => {
  return DMV_REVIEWS.filter(review => 
    review.location === location && 
    review.serviceType === serviceType
  );
};

/**
 * Calculate review metrics for location performance tracking
 */
export const getLocationReviewMetrics = (location: string, state: string = 'VA') => {
  const locationReviews = getLocationReviews(DMV_REVIEWS, location, state);
  const recentReviews = getRecentReviews(location, 30);
  const aggregateRating = getAggregateRating(locationReviews);
  
  return {
    totalReviews: locationReviews.length,
    recentReviewCount: recentReviews.length,
    averageRating: aggregateRating?.ratingValue || '0',
    verifiedReviews: locationReviews.filter(r => r.verified).length,
    serviceTypeBreakdown: {
      residential: getReviewsByServiceType(location, 'residential').length,
      commercial: getReviewsByServiceType(location, 'commercial').length,
      troubleshooting: getReviewsByServiceType(location, 'troubleshooting').length
    }
  };
};

/**
 * LocationReviews component for displaying reviews on location pages
 */
interface LocationReviewsProps {
  location: string;
  state: string;
  maxReviews?: number;
}

export const LocationReviews: React.FC<LocationReviewsProps> = ({
  location,
  state,
  maxReviews = 3
}) => {
  const localReviews = getLocationReviews(DMV_REVIEWS, location, state)
    .slice(0, maxReviews);

  if (localReviews.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Customers Say in {location}, {state}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {localReviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  {review.verified ? "✓ Verified Customer" : ""}
                </span>
              </div>
              <p className="text-gray-700 mb-4 italic">"{review.reviewText}"</p>
              <div className="text-sm text-gray-500">
                <p className="font-semibold">{review.customerName}</p>
                <p>{review.location}, {review.state} • {review.date}</p>
                <p className="capitalize">{review.serviceType} Service</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationReviews;
