import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceArea {
  name: string;
  slug: string;
  county: string;
  state: string;
  featured?: boolean;
}

interface ServiceAreasProps {
  variant?: 'grid' | 'list' | 'compact';
  limit?: number;
  showViewAll?: boolean;
}

const serviceAreas: ServiceArea[] = [
  { name: 'Fairfax', slug: 'fairfax-va', county: 'Fairfax County', state: 'VA', featured: true },
  { name: 'Loudoun County', slug: 'loudoun-county-va', county: 'Loudoun County', state: 'VA', featured: true },
  { name: 'Montgomery County', slug: 'montgomery-county-md', county: 'Montgomery County', state: 'MD', featured: true },
  { name: 'Prince William County', slug: 'prince-william-county-va', county: 'Prince William County', state: 'VA' },
  { name: 'Arlington', slug: 'arlington-va', county: 'Arlington County', state: 'VA' },
  { name: 'Alexandria', slug: 'alexandria-va', county: 'Alexandria', state: 'VA' },
  { name: 'Bethesda', slug: 'bethesda-md', county: 'Montgomery County', state: 'MD' },
  { name: 'Potomac', slug: 'potomac-md', county: 'Montgomery County', state: 'MD' },
  { name: 'Reston', slug: 'reston-va', county: 'Fairfax County', state: 'VA' },
  { name: 'Herndon', slug: 'herndon-va', county: 'Fairfax County', state: 'VA' },
  { name: 'Ashburn', slug: 'ashburn-va', county: 'Loudoun County', state: 'VA' },
  { name: 'Leesburg', slug: 'leesburg-va', county: 'Loudoun County', state: 'VA' }
];

const ServiceAreas: React.FC<ServiceAreasProps> = ({ 
  variant = 'grid', 
  limit, 
  showViewAll = false 
}) => {
  const displayAreas = limit ? serviceAreas.slice(0, limit) : serviceAreas;

  if (variant === 'compact') {
    return (
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Service Areas</h3>
        <div className="flex flex-wrap gap-2">
          {displayAreas.map((area) => (
            <Link
              key={area.slug}
              to={`/locations/${area.slug}`}
              className="inline-block bg-gray-100 hover:bg-blue-50 text-gray-700 hover:text-blue-700 px-3 py-1 rounded-full text-sm transition-colors"
            >
              {area.name}, {area.state}
            </Link>
          ))}
        </div>
        {showViewAll && (
          <Link to="/service-areas" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            View All Areas →
          </Link>
        )}
      </div>
    );
  }

  if (variant === 'list') {
    return (
      <div className="space-y-3">
        {displayAreas.map((area) => (
          <Link
            key={area.slug}
            to={`/locations/${area.slug}`}
            className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-colors group"
          >
            <div>
              <div className="font-medium text-gray-800 group-hover:text-blue-700">
                {area.name}
              </div>
              <div className="text-sm text-gray-500">
                {area.county}, {area.state}
              </div>
            </div>
            <span className="text-gray-400 group-hover:text-blue-600">→</span>
          </Link>
        ))}
        {showViewAll && (
          <Link 
            to="/service-areas" 
            className="block text-center p-3 text-blue-600 hover:text-blue-700 font-medium bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
          >
            View All Service Areas
          </Link>
        )}
      </div>
    );
  }

  // Grid variant (default)
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayAreas.map((area) => (
          <Link
            key={area.slug}
            to={`/locations/${area.slug}`}
            className="group block p-4 bg-white rounded-lg border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all"
          >
            <div className="font-medium text-gray-800 group-hover:text-blue-700 mb-1">
              {area.name}
            </div>
            <div className="text-sm text-gray-500 mb-2">
              {area.county}
            </div>
            <div className="text-xs text-gray-400">
              {area.state}
            </div>
            {area.featured && (
              <div className="inline-block mt-2 px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                Popular
              </div>
            )}
          </Link>
        ))}
      </div>
      {showViewAll && (
        <div className="mt-6 text-center">
          <Link 
            to="/service-areas" 
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            View All Service Areas
          </Link>
        </div>
      )}
    </div>
  );
};

export default ServiceAreas;
