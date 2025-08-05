import React from 'react';
import { LocationConfig, DMV_LOCATIONS, generateLocationSitemap, locationRoutes } from '../utils/locationPageGenerator';
import { getLocationReviewMetrics } from './LocationReviews';
import { generateLocationFAQs } from './LocationFAQ';

/**
 * Location Analytics Dashboard Component
 * Provides comprehensive insights into location performance and SEO metrics
 */

interface LocationAnalyticsProps {
  location?: string;
  state?: string;
  showAllLocations?: boolean;
}

interface LocationMetrics {
  location: string;
  state: string;
  totalFAQs: number;
  reviewMetrics: ReturnType<typeof getLocationReviewMetrics>;
  seoScore: number;
  conversionPotential: 'High' | 'Medium' | 'Low';
}

/**
 * Calculate SEO score based on multiple factors
 */
const calculateSEOScore = (location: LocationConfig, metrics: any): number => {
  let score = 0;
  
  // Base score for having location page
  score += 20;
  
  // Keywords optimization (up to 25 points)
  score += Math.min(location.keywords.length * 3, 25);
  
  // Review signals (up to 30 points)
  const avgRating = parseFloat(metrics.averageRating);
  score += avgRating > 4.5 ? 30 : avgRating > 4 ? 25 : avgRating > 3.5 ? 15 : 5;
  
  // Review volume (up to 15 points)
  score += Math.min(metrics.totalReviews * 2, 15);
  
  // Recent activity (up to 10 points)
  score += Math.min(metrics.recentReviewCount * 3, 10);
  
  return Math.min(score, 100);
};

/**
 * Determine conversion potential based on various factors
 */
const getConversionPotential = (config: LocationConfig, metrics: any): 'High' | 'Medium' | 'Low' => {
  const avgRating = parseFloat(metrics.averageRating);
  const hasRecentActivity = metrics.recentReviewCount > 0;
  const highPopulation = (config.population || 0) > 100000;
  
  if (avgRating >= 4.5 && hasRecentActivity && highPopulation) return 'High';
  if (avgRating >= 4 && (hasRecentActivity || highPopulation)) return 'Medium';
  return 'Low';
};

/**
 * Generate comprehensive location metrics
 */
const generateLocationMetrics = (config: LocationConfig): LocationMetrics => {
  const reviewMetrics = getLocationReviewMetrics(config.city, config.state);
  const faqs = generateLocationFAQs(config.city, config.state, config.zipCodes);
  const seoScore = calculateSEOScore(config, reviewMetrics);
  const conversionPotential = getConversionPotential(config, reviewMetrics);
  
  return {
    location: config.city,
    state: config.state,
    totalFAQs: faqs.length,
    reviewMetrics,
    seoScore,
    conversionPotential
  };
};

/**
 * LocationAnalytics Component
 */
const LocationAnalytics: React.FC<LocationAnalyticsProps> = ({ 
  location, 
  state, 
  showAllLocations = false 
}) => {
  // Generate metrics for requested location(s)
  const locationMetrics = React.useMemo(() => {
    if (showAllLocations) {
      return DMV_LOCATIONS.map(generateLocationMetrics);
    } else if (location && state) {
      const config = DMV_LOCATIONS.find(
        loc => loc.city.toLowerCase() === location.toLowerCase() && 
               loc.state.toLowerCase() === state.toLowerCase()
      );
      return config ? [generateLocationMetrics(config)] : [];
    }
    return [];
  }, [location, state, showAllLocations]);

  // Generate sitemap data for reference
  const sitemapData = React.useMemo(() => {
    return generateLocationSitemap(DMV_LOCATIONS);
  }, []);

  if (locationMetrics.length === 0) {
    return (
      <div className="bg-gray-100 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Location Analytics
        </h3>
        <p className="text-gray-600">No location data available for analysis.</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          {showAllLocations ? 'DMV Market Analytics' : `${location}, ${state} Analytics`}
        </h2>
        <div className="text-sm text-gray-500">
          {locationMetrics.length} location{locationMetrics.length !== 1 ? 's' : ''} analyzed
        </div>
      </div>

      {/* Market Overview */}
      {showAllLocations && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">
              {DMV_LOCATIONS.length}
            </div>
            <div className="text-sm text-blue-800">Active Locations</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-green-600">
              {sitemapData.length}
            </div>
            <div className="text-sm text-green-800">SEO Pages</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">
              {locationRoutes.length}
            </div>
            <div className="text-sm text-purple-800">Auto Routes</div>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-orange-600">
              {locationMetrics.reduce((sum, m) => sum + m.totalFAQs, 0)}
            </div>
            <div className="text-sm text-orange-800">Total FAQs</div>
          </div>
        </div>
      )}

      {/* Location-specific metrics */}
      <div className="space-y-6">
        {locationMetrics.map((metrics, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900">
                {metrics.location}, {metrics.state}
              </h3>
              <div className="flex items-center space-x-4">
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                  metrics.conversionPotential === 'High' ? 'bg-green-100 text-green-800' :
                  metrics.conversionPotential === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {metrics.conversionPotential} Potential
                </div>
                <div className="text-lg font-bold text-blue-600">
                  SEO: {metrics.seoScore}/100
                </div>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-50 p-3 rounded">
                <div className="text-lg font-semibold text-gray-900">
                  {metrics.reviewMetrics.totalReviews}
                </div>
                <div className="text-sm text-gray-600">Total Reviews</div>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <div className="text-lg font-semibold text-gray-900">
                  ⭐ {metrics.reviewMetrics.averageRating}
                </div>
                <div className="text-sm text-gray-600">Avg Rating</div>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <div className="text-lg font-semibold text-gray-900">
                  {metrics.reviewMetrics.recentReviewCount}
                </div>
                <div className="text-sm text-gray-600">Recent (30d)</div>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <div className="text-lg font-semibold text-gray-900">
                  {metrics.totalFAQs}
                </div>
                <div className="text-sm text-gray-600">FAQs Generated</div>
              </div>
            </div>

            {/* Service Breakdown */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Service Type Distribution</h4>
              <div className="flex space-x-4 text-sm">
                <span>
                  Residential: <strong>{metrics.reviewMetrics.serviceTypeBreakdown.residential}</strong>
                </span>
                <span>
                  Commercial: <strong>{metrics.reviewMetrics.serviceTypeBreakdown.commercial}</strong>
                </span>
                <span>
                  Support: <strong>{metrics.reviewMetrics.serviceTypeBreakdown.troubleshooting}</strong>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* SEO Recommendations */}
      {!showAllLocations && locationMetrics.length === 1 && (
        <div className="mt-6 bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-2">SEO Recommendations</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            {locationMetrics[0].seoScore < 80 && (
              <li>• Consider adding more location-specific keywords</li>
            )}
            {locationMetrics[0].reviewMetrics.recentReviewCount === 0 && (
              <li>• Encourage recent customer reviews for better social proof</li>
            )}
            {parseInt(locationMetrics[0].reviewMetrics.averageRating) < 4.5 && (
              <li>• Focus on service quality to improve average rating</li>
            )}
            <li>• Seasonal FAQ updates are active - content stays fresh</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LocationAnalytics;
