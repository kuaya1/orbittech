import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

interface NearbyLocation {
  name: string;
  path: string;
  distance?: string;
  description: string;
}

interface LocationCrossLinksProps {
  currentLocation: string;
  currentState: string;
}

/**
 * LocationCrossLinks Component
 * Creates strategic internal linking between location pages for SEO
 */
const LocationCrossLinks: React.FC<LocationCrossLinksProps> = ({ 
  currentLocation, 
  currentState 
}) => {
  
  // Define cross-linking matrix based on geographic proximity and market strategy
  const linkingMatrix: Record<string, NearbyLocation[]> = {
    // Northern Virginia Cross-Links
    'fairfax-county-va': [
      { 
        name: 'Arlington County', 
        path: '/locations/arlington-county-va', 
        distance: '15 miles',
        description: 'Professional Starlink installation in nearby Arlington County'
      },
      { 
        name: 'Alexandria', 
        path: '/locations/alexandria-va', 
        distance: '18 miles',
        description: 'Expert satellite internet setup in Alexandria'
      },
      { 
        name: 'Loudoun County', 
        path: '/locations/loudoun-county-va', 
        distance: '25 miles',
        description: 'Same-day Starlink installation in Loudoun County'
      }
    ],
    
    'arlington-county-va': [
      { 
        name: 'Fairfax County', 
        path: '/locations/fairfax-county-va', 
        distance: '15 miles',
        description: 'Top-rated Starlink installation services in Fairfax County'
      },
      { 
        name: 'Alexandria', 
        path: '/locations/alexandria-va', 
        distance: '8 miles',
        description: 'Professional satellite internet installation in Alexandria'
      },
      { 
        name: 'Washington DC', 
        path: '/locations/washington-dc', 
        distance: '5 miles',
        description: 'Expert Starlink setup throughout Washington DC'
      }
    ],
    
    'alexandria-va': [
      { 
        name: 'Arlington County', 
        path: '/locations/arlington-county-va', 
        distance: '8 miles',
        description: 'Professional Starlink installation in Arlington County'
      },
      { 
        name: 'Fairfax County', 
        path: '/locations/fairfax-county-va', 
        distance: '18 miles',
        description: 'Expert installation services in Fairfax County'
      },
      { 
        name: 'Washington DC', 
        path: '/locations/washington-dc', 
        distance: '10 miles',
        description: 'Same-day Starlink installation in Washington DC'
      }
    ],
    
    'loudoun-county-va': [
      { 
        name: 'Fairfax County', 
        path: '/locations/fairfax-county-va', 
        distance: '25 miles',
        description: 'Professional Starlink installation in Fairfax County'
      },
      { 
        name: 'Montgomery County MD', 
        path: '/locations/montgomery-county-md', 
        distance: '30 miles',
        description: 'Expert satellite internet setup in Montgomery County'
      },
      { 
        name: 'Jefferson County WV', 
        path: '/locations/jefferson-county-wv', 
        distance: '20 miles',
        description: 'Professional installation services in Jefferson County'
      }
    ],
    
    'prince-william-county-va': [
      { 
        name: 'Fairfax County', 
        path: '/locations/fairfax-county-va', 
        distance: '20 miles',
        description: 'Top-rated Starlink installation in Fairfax County'
      },
      { 
        name: 'Loudoun County', 
        path: '/locations/loudoun-county-va', 
        distance: '30 miles',
        description: 'Professional satellite internet setup in Loudoun County'
      }
    ],
    
    // Maryland Cross-Links - Montgomery County → All MD locations
    'montgomery-county-md': [
      { 
        name: 'Howard County MD', 
        path: '/locations/howard-county-md', 
        distance: '25 miles',
        description: 'Expert Starlink installation services in Howard County'
      },
      { 
        name: 'Anne Arundel County MD', 
        path: '/locations/anne-arundel-county-md', 
        distance: '35 miles',
        description: 'Professional satellite internet installation in Anne Arundel County'
      },
      { 
        name: 'Washington DC', 
        path: '/locations/washington-dc', 
        distance: '20 miles',
        description: 'Same-day Starlink installation in Washington DC'
      }
    ],
    
    'howard-county-md': [
      { 
        name: 'Montgomery County MD', 
        path: '/locations/montgomery-county-md', 
        distance: '25 miles',
        description: 'Professional Starlink installation in Montgomery County'
      },
      { 
        name: 'Anne Arundel County MD', 
        path: '/locations/anne-arundel-county-md', 
        distance: '20 miles',
        description: 'Expert satellite internet setup in Anne Arundel County'
      }
    ],
    
    'anne-arundel-county-md': [
      { 
        name: 'Howard County MD', 
        path: '/locations/howard-county-md', 
        distance: '20 miles',
        description: 'Top-rated Starlink installation in Howard County'
      },
      { 
        name: 'Montgomery County MD', 
        path: '/locations/montgomery-county-md', 
        distance: '35 miles',
        description: 'Professional installation services in Montgomery County'
      }
    ],
    
    // Washington DC → Virginia suburbs
    'washington-dc': [
      { 
        name: 'Arlington County VA', 
        path: '/locations/arlington-county-va', 
        distance: '5 miles',
        description: 'Professional Starlink installation in nearby Arlington County'
      },
      { 
        name: 'Alexandria VA', 
        path: '/locations/alexandria-va', 
        distance: '10 miles',
        description: 'Expert satellite internet setup in Alexandria'
      },
      { 
        name: 'Montgomery County MD', 
        path: '/locations/montgomery-county-md', 
        distance: '20 miles',
        description: 'Same-day installation services in Montgomery County'
      }
    ],
    
    // West Virginia
    'jefferson-county-wv': [
      { 
        name: 'Loudoun County VA', 
        path: '/locations/loudoun-county-va', 
        distance: '20 miles',
        description: 'Professional Starlink installation in Loudoun County'
      },
      { 
        name: 'Montgomery County MD', 
        path: '/locations/montgomery-county-md', 
        distance: '40 miles',
        description: 'Expert satellite internet setup in Montgomery County'
      }
    ],
    
    'rockingham-county-va': [
      { 
        name: 'Loudoun County VA', 
        path: '/locations/loudoun-county-va', 
        distance: '45 miles',
        description: 'Professional Starlink installation in Loudoun County'
      },
      { 
        name: 'Jefferson County WV', 
        path: '/locations/jefferson-county-wv', 
        distance: '50 miles',
        description: 'Expert installation services in Jefferson County'
      }
    ]
  };

  const currentLocationKey = `${currentLocation.toLowerCase()}-${currentState.toLowerCase()}`;
  const nearbyLocations = linkingMatrix[currentLocationKey] || [];

  if (nearbyLocations.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Serving Nearby Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide professional Starlink installation services throughout the DMV region. 
              Explore our coverage in nearby communities.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {nearbyLocations.map((location, index) => (
              <a
                key={index}
                href={location.path}
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300"
                rel="noopener"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                      <MapPin className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="ml-3">
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {location.name}
                      </h3>
                      {location.distance && (
                        <p className="text-sm text-gray-500">{location.distance} away</p>
                      )}
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200" />
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {location.description}
                </p>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-sm font-medium text-blue-600 group-hover:text-blue-700">
                    View Installation Services →
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white rounded-lg p-6 shadow-md max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Service Area Coverage
              </h3>
              <p className="text-gray-600 text-sm">
                We provide professional Starlink installation throughout Northern Virginia, Maryland, 
                Washington DC, and West Virginia. All installations include same-day service, 
                professional mounting, and comprehensive setup.
              </p>
              <a 
                href="/contact" 
                className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Get Your Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationCrossLinks;
