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

  // Modern minimal link component for footer links
  const FooterLink = ({ href, children, target, rel }: { href: string; children: React.ReactNode; target?: string; rel?: string }) => (
    <li>
      <a href={href} target={target} rel={rel} className="text-neutral-400 hover:text-neutral-50 transition-all duration-300 text-sm tracking-wide group relative">
        {children}
        <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-neutral-50 transition-all duration-300 group-hover:w-full"></span>
      </a>
    </li>
  );
  
  // Modern minimal link component for bottom bar links
  const BottomBarLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
     <a href={href} className="text-neutral-500 hover:text-neutral-300 text-sm transition-all duration-300 uppercase tracking-wider">
        {children}
      </a>
  );

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Modern minimal footer content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-16">
          
          {/* Logo and description with modern styling */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <img 
                src="/Orbit.png" 
                alt="Orbittec Logo" 
                className="h-12 w-auto mb-4 transition-all duration-300 hover:scale-105"
              />
              <p className="text-neutral-400 text-base leading-relaxed max-w-md">
                Professional Starlink installation services across the DMV area and beyond. 
                Connecting you to the future of internet.
              </p>
            </div>
            
            {/* Contact info with minimal design - Updated NAP */}
            <div className="space-y-3">
              <a href="tel:+15719996915" className="flex items-center text-neutral-400 hover:text-neutral-50 transition-all duration-300 group">
                <span className="text-sm tracking-wide">(571) 999-6915</span>
              </a>
              <a href="mailto:contact@theorbittech.com" className="flex items-center text-neutral-400 hover:text-neutral-50 transition-all duration-300 group">
                <span className="text-sm tracking-wide">contact@theorbittech.com</span>
              </a>
              <div className="text-neutral-400 text-sm tracking-wide">
                8000 Westpark Drive, STE 450<br />
                McLean, VA 22102
              </div>
            </div>
          </div>
          
          {/* Modern link columns */}
          <div className="space-y-4">
            <h4 className="font-medium text-neutral-50 tracking-tighter text-lg">Services</h4>
            <ul className="space-y-3">
              <FooterLink href="/#services">Residential Installation</FooterLink>
              <FooterLink href="/#services">Business Solutions</FooterLink>
              <FooterLink href="/#services">Mobile & Marine</FooterLink>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-neutral-50 tracking-tighter text-lg">Company</h4>
            <ul className="space-y-3">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/blog">Blog & Resources</FooterLink>
              <FooterLink href="/#featured-installations">Success Stories</FooterLink>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-neutral-50 tracking-tighter text-lg">Support</h4>
            <ul className="space-y-3">
              <FooterLink href="/#contact">Contact Us</FooterLink>
              <FooterLink href="/#availability-process">Check Coverage</FooterLink>
              <FooterLink href="https://starlink.com" target="_blank" rel="noopener noreferrer">Order Starlink Kit</FooterLink>
              <FooterLink href="https://www.google.com/maps/place/?cid=16628350007596958974" target="_blank" rel="noopener noreferrer">Leave us a Review on Google!</FooterLink>
            </ul>
          </div>

        </div>

        {/* Modern newsletter and bottom section */}
        <div className="border-t border-white/10 pt-12">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
                
                {/* Premium newsletter design */}
                <div className="w-full lg:w-auto max-w-md">
                    <h4 className="font-medium text-neutral-50 mb-4 text-lg tracking-tighter">Stay Updated</h4>
                    <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                        Get the latest updates on Starlink technology and installation tips.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-3">
                        <input 
                            type="email"
                            placeholder="Enter your email"
                            className="bg-white/[0.02] border border-white/20 text-neutral-50 placeholder-neutral-500 px-4 py-3 rounded-lg focus:ring-2 focus:ring-white/20 focus:border-white/30 focus:outline-none w-full flex-grow transition-all duration-300"
                            aria-label="Email for newsletter"
                        />
                        <button 
                            type="submit"
                            className="bg-white text-black font-semibold rounded-lg px-6 py-3 hover:bg-neutral-100 transition-all duration-300 whitespace-nowrap shadow-lg hover:shadow-xl"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Modern bottom bar */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 w-full lg:w-auto">
                    <div className="text-neutral-500 text-sm uppercase tracking-wider order-2 sm:order-1">
                        © {year} OrbitTech
                    </div>
                    <div className="flex items-center space-x-6 order-1 sm:order-2">
                         <BottomBarLink href="/privacy-policy.html">Privacy</BottomBarLink>
                         <BottomBarLink href="/terms-of-service.html">Terms</BottomBarLink>
                         <BottomBarLink href="/imprint.html">Legal</BottomBarLink>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
