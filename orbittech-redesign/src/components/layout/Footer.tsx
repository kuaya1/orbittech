import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 text-white">
      <div className="max-w-7xl mx-auto container-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-primary-800 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">O</span>
              </div>
              <span className="text-xl font-bold">The Orbit Tech</span>
            </div>
            <p className="text-gray-300 mb-4">
              DMV's leading Starlink installation experts. Professional, reliable, and fast service guaranteed.
            </p>
            <div className="space-y-2">
              <p className="text-lg font-semibold">(703) 555-0123</p>
              <p className="text-gray-300">service@theorbittech.com</p>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/locations/loudoun-county" className="hover:text-white transition-colors">
                  Loudoun County, VA
                </Link>
              </li>
              <li>
                <Link to="/locations/fairfax-county" className="hover:text-white transition-colors">
                  Fairfax County, VA
                </Link>
              </li>
              <li>
                <Link to="/locations/arlington-county" className="hover:text-white transition-colors">
                  Arlington County, VA
                </Link>
              </li>
              <li>
                <Link to="/locations/prince-william-county" className="hover:text-white transition-colors">
                  Prince William County, VA
                </Link>
              </li>
              <li>
                <Link to="/locations/montgomery-county-md" className="hover:text-white transition-colors">
                  Montgomery County, MD
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Starlink Installation</li>
              <li>WiFi Network Setup</li>
              <li>Mesh Network Installation</li>
              <li>Internet Speed Optimization</li>
              <li>Technical Support</li>
              <li>System Maintenance</li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>8:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <p className="text-sm text-accent-500 mt-4">
                Emergency service available 24/7
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 The Orbit Tech. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
