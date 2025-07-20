import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Logo and description */}
          <div className="md:col-span-2">
            <div className="mb-8">
              <img 
                src="/Starlink Dmv (20).png" 
                alt="Orbittec Logo" 
                className="h-12 w-auto mb-4"
              />
              <p className="text-white/90 text-xs font-normal uppercase tracking-wide">Professional Installation</p>
            </div>
            
            <p className="text-white/95 mb-8 max-w-md font-normal leading-relaxed text-lg">
              Professional Starlink installation services across the DMV region. 
              We connect residential and commercial customers with high-speed satellite internet.
            </p>
            
            {/* Contact information - minimal design */}
            <div className="space-y-4">
              <a 
                href="tel:+15719996915" 
                className="text-white/80 hover:text-white transition-colors font-medium flex items-center group"
              >
                <div className="mr-3 p-2 bg-white/10 rounded-full group-hover:bg-white/20 transition-all duration-300">
                  📞
                </div>
                (571) 999-6915
              </a>
              <a 
                href="mailto:contact@orbittec.net" 
                className="block text-white/95 hover:text-white transition-colors duration-200 font-normal"
              >
                contact@orbittec.net
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-6 tracking-tight uppercase text-sm">Services</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="/#services" 
                  className="text-white/95 hover:text-white transition-colors duration-200 font-normal block text-sm"
                >
                  Residential Installation
                </a>
              </li>
              <li>
                <a 
                  href="/#services" 
                  className="text-white/95 hover:text-white transition-colors duration-200 font-normal block text-sm"
                >
                  Business Solutions
                </a>
              </li>
              <li>
                <a 
                  href="/#services" 
                  className="text-white/95 hover:text-white transition-colors duration-200 font-normal block text-sm"
                >
                  Mobile & Marine
                </a>
              </li>
              <li>
                <a 
                  href="/#availability-process" 
                  className="text-white/95 hover:text-white transition-colors duration-200 font-normal block text-sm"
                >
                  Check Coverage
                </a>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-6 tracking-tight uppercase text-sm">Company</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="/" 
                  className="text-white/95 hover:text-white transition-colors duration-200 font-normal block text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="/#featured-installations" 
                  className="text-white/95 hover:text-white transition-colors duration-200 font-normal block text-sm"
                >
                  Success Stories
                </a>
              </li>
              <li>
                <a 
                  href="/#contact" 
                  className="text-white/95 hover:text-white transition-colors duration-200 font-normal block text-sm"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a 
                  href="https://starlink.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/95 hover:text-white transition-colors duration-200 font-normal block text-sm"
                >
                  Order Starlink Kit
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/90 text-sm font-normal">
              © {year} ORBITTEC. All rights reserved.
            </div>
            
            <div className="flex space-x-8">
              <a 
                href="/privacy-policy.html" 
                className="text-white/90 hover:text-white text-sm transition-colors duration-200 font-normal"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms-of-service.html" 
                className="text-white/90 hover:text-white text-sm transition-colors duration-200 font-normal"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;