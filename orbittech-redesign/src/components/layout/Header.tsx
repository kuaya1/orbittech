import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../shared/Button';
import PhoneCallCTA from '../conversion/PhoneCallCTA';

const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-primary-800 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">O</span>
            </div>
            <span className="text-xl font-bold gradient-text">The Orbit Tech</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-primary-600' 
                  : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              Home
            </Link>
            
            <div className="relative group">
              <button className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">
                Service Areas
              </button>
              <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2">
                  <Link
                    to="/locations/loudoun-county"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
                  >
                    Loudoun County, VA
                  </Link>
                  <Link
                    to="/locations/fairfax-county"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
                  >
                    Fairfax County, VA
                  </Link>
                  <Link
                    to="/locations/arlington-county"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
                  >
                    Arlington County, VA
                  </Link>
                  <Link
                    to="/locations/prince-william-county"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
                  >
                    Prince William County, VA
                  </Link>
                  <Link
                    to="/locations/montgomery-county-md"
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
                  >
                    Montgomery County, MD
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Contact Info & Phone CTA */}
          <div className="flex items-center space-x-4">
            <PhoneCallCTA />
            <Button size="sm">
              Get Free Quote
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
