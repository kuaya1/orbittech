import { Phone, Mail, MapPin, ArrowRight, Star, Shield, Award } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-black to-black">
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.03\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
      }}></div>

      {/* Top CTA Section */}
      <div className="relative border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-gradient-to-r from-blue-600/10 to-emerald-600/10 rounded-2xl border border-gray-800 p-8 backdrop-blur-sm">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Ready to Experience Lightning-Fast Internet?</h3>
                <p className="text-gray-400">Join 500+ satisfied customers across the DMV region</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+15719996915" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (571) 999-6915
                </a>
                <a 
                  href="/#contact" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all duration-300 border border-gray-700"
                >
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img 
              src="/Starlink Dmv (33).png" 
              alt="The Orbit Tech" 
              className="h-12 w-auto mb-6"
            />
            <p className="text-gray-400 mb-6 leading-relaxed">
              DMV's #1 Rated Starlink Installation Experts. Professional, certified, and fully insured.
            </p>
            
            {/* Trust Badges */}
            <div className="flex gap-4 mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-lg">
                <Star className="w-6 h-6 text-yellow-500" />
              </div>
              <div className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-lg">
                <Shield className="w-6 h-6 text-blue-500" />
              </div>
              <div className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-lg">
                <Award className="w-6 h-6 text-emerald-500" />
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:+15719996915" className="flex items-center text-gray-400 hover:text-white transition-colors group">
                <Phone className="w-4 h-4 mr-3 text-emerald-500" />
                <span>(571) 999-6915</span>
              </a>
              <a href="mailto:contact@theorbittech.com" className="flex items-center text-gray-400 hover:text-white transition-colors group">
                <Mail className="w-4 h-4 mr-3 text-emerald-500" />
                <span>contact@theorbittech.com</span>
              </a>
              <div className="flex items-start text-gray-400">
                <MapPin className="w-4 h-4 mr-3 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>
                  8000 Westpark Drive, STE 450<br />
                  McLean, VA 22102
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="/#services" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  <span className="w-1 h-1 bg-emerald-500 rounded-full mr-3 group-hover:w-2 transition-all"></span>
                  Starlink Installation
                </a>
              </li>
              <li>
                <a href="/#services" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  <span className="w-1 h-1 bg-emerald-500 rounded-full mr-3 group-hover:w-2 transition-all"></span>
                  Mesh WiFi Setup
                </a>
              </li>
              <li>
                <a href="/#services" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  <span className="w-1 h-1 bg-emerald-500 rounded-full mr-3 group-hover:w-2 transition-all"></span>
                  Business Solutions
                </a>
              </li>
              <li>
                <a href="/#services" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  <span className="w-1 h-1 bg-emerald-500 rounded-full mr-3 group-hover:w-2 transition-all"></span>
                  RV & Marine
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Service Areas</h4>
            <ul className="space-y-3">
              <li>
                <a href="/locations/loudoun-county" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  <span className="w-1 h-1 bg-emerald-500 rounded-full mr-3 group-hover:w-2 transition-all"></span>
                  Loudoun County
                </a>
              </li>
              <li>
                <a href="/locations/fairfax-county" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  <span className="w-1 h-1 bg-emerald-500 rounded-full mr-3 group-hover:w-2 transition-all"></span>
                  Fairfax County
                </a>
              </li>
              <li>
                <a href="/locations/arlington-county" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  <span className="w-1 h-1 bg-emerald-500 rounded-full mr-3 group-hover:w-2 transition-all"></span>
                  Arlington County
                </a>
              </li>
              <li>
                <a href="/locations/montgomery-county" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  <span className="w-1 h-1 bg-emerald-500 rounded-full mr-3 group-hover:w-2 transition-all"></span>
                  Montgomery County, MD
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="/blog" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  <span className="w-1 h-1 bg-emerald-500 rounded-full mr-3 group-hover:w-2 transition-all"></span>
                  Installation Guide
                </a>
              </li>
              <li>
                <a href="/#faq" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  <span className="w-1 h-1 bg-emerald-500 rounded-full mr-3 group-hover:w-2 transition-all"></span>
                  FAQs
                </a>
              </li>
              <li>
                <a href="/#featured-installations" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  <span className="w-1 h-1 bg-emerald-500 rounded-full mr-3 group-hover:w-2 transition-all"></span>
                  Success Stories
                </a>
              </li>
              <li>
                <a href="https://www.google.com/maps/place/?cid=16628350007596958974" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors inline-flex items-center group">
                  <span className="w-1 h-1 bg-emerald-500 rounded-full mr-3 group-hover:w-2 transition-all"></span>
                  Google Reviews
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-12 pt-12 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-gray-500 text-sm">Installations Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">4.9★</div>
              <div className="text-gray-500 text-sm">Google Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-gray-500 text-sm">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm">
              © {year} The Orbit Tech. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a href="/privacy-policy.html" className="text-gray-500 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-of-service.html" className="text-gray-500 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="/imprint.html" className="text-gray-500 hover:text-white text-sm transition-colors">
                Legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;