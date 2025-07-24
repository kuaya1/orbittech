import React from 'react';

// SVG components for social media icons for better reusability and clarity
const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
);


const Footer = () => {
  const year = new Date().getFullYear();

  // Reusable link component for footer links
  const FooterLink = ({ href, children }) => (
    <li>
      <a href={href} className="text-neutral-400 hover:text-white transition-colors duration-200 font-normal block text-sm">
        {children}
      </a>
    </li>
  );
  
  // Reusable link component for bottom bar links
  const BottomBarLink = ({ href, children }) => (
     <a href={href} className="text-neutral-400 hover:text-white text-sm transition-colors duration-200 font-normal">
        {children}
      </a>
  );

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main footer content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img 
                src="/Starlink Dmv (20).png" 
                alt="Orbittec Logo" 
                className="h-10 w-auto mb-2"
              />
              <p className="text-neutral-400 text-xs font-normal tracking-wide">
                Professional Installation
              </p>
            </div>
          </div>
          
          {/* Link Columns */}
          <div>
            <h4 className="font-semibold text-white mb-4 tracking-tight text-sm">Services</h4>
            <ul className="space-y-3">
              <FooterLink href="/#services">Residential Installation</FooterLink>
              <FooterLink href="/#services">Business Solutions</FooterLink>
              <FooterLink href="/#services">Mobile & Marine</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4 tracking-tight text-sm">Company</h4>
            <ul className="space-y-3">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/blog">Blog & Resources</FooterLink>
              <FooterLink href="/#featured-installations">Success Stories</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 tracking-tight text-sm">More</h4>
            <ul className="space-y-3">
                <FooterLink href="/#contact">Contact Us</FooterLink>
                <FooterLink href="/#availability-process">Check Coverage</FooterLink>
                <FooterLink href="https://starlink.com" target="_blank" rel="noopener noreferrer">Order Starlink Kit</FooterLink>
            </ul>
          </div>

        </div>

        {/* Newsletter and Bottom section */}
        <div className="border-t border-neutral-800 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
                
                {/* Newsletter */}
                <div className="w-full lg:w-auto">
                    <h4 className="font-semibold text-white mb-2 text-sm">Subscribe to the newsletter</h4>
                    <form className="flex flex-col sm:flex-row gap-2 max-w-md">
                        <input 
                            type="email"
                            placeholder="E-Mail"
                            className="bg-neutral-800 text-white placeholder-neutral-500 px-4 py-2 rounded-md border border-neutral-700 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full flex-grow"
                            aria-label="Email for newsletter"
                        />
                        <button 
                            type="submit"
                            className="bg-neutral-200 text-black font-semibold px-6 py-2 rounded-md hover:bg-white transition-colors duration-200 whitespace-nowrap"
                        >
                            Sign up
                        </button>
                    </form>
                </div>

                {/* Bottom bar with copyright and social links */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-8 lg:mt-0 w-full lg:w-auto justify-between">
                    <div className="text-neutral-400 text-sm font-normal order-2 sm:order-1">
                        © {year}
                    </div>
                    
                    <div className="flex items-center space-x-4 order-1 sm:order-2">
                         <BottomBarLink href="/imprint.html">Imprint</BottomBarLink>
                         <BottomBarLink href="/privacy-policy.html">Privacy Policy</BottomBarLink>
                         <BottomBarLink href="/terms-of-service.html">Terms of Service</BottomBarLink>
                    </div>

                    <div className="flex space-x-4 text-neutral-400 order-3">
                      <a href="#" className="hover:text-white transition-colors"><LinkedInIcon /></a>
                      <a href="#" className="hover:text-white transition-colors"><InstagramIcon /></a>
                      <a href="#" className="hover:text-white transition-colors"><FacebookIcon /></a>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
