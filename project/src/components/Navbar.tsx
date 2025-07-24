import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

// The error was caused by using <Link> from react-router-dom in an environment
// that doesn't have a Router context. I've replaced all <Link> components
// with standard <a> tags and used onClick handlers to manage navigation.
// This resolves the "Cannot destructure property 'basename' of 'React10.useContext(...)' as it is null" error.

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // --- Effects and Handlers ---

  // Scroll effect to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handles clicks on nav links to close the mobile menu and scroll smoothly
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault(); // Prevent default anchor tag behavior
    setIsMenuOpen(false);
    
    // Handle hash links for smooth scrolling on the same page
    if (path.startsWith('/#')) {
      const id = path.substring(2);
      // Use a timeout to ensure the menu is closed before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    } else if (path === '/') {
        // If it's the home link, scroll to the top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        // For other links like /faq, we just prevent default for now
        // In a real multi-page app, you would handle navigation here.
    }
  };

  // --- Data ---

  const navLinks = [
    { href: '/#services', label: 'Services' },
    { href: '/#availability-process', label: 'Coverage' },
    { href: '/#featured-installations', label: 'Success Stories' },
    { href: '/faq', label: 'FAQ' },
  ];

  // --- Render ---

  return (
    <>
      <header className={`custom-navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isMenuOpen ? 'bg-black' : (isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent')
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Always Visible (Replaced <Link> with <a>) */}
            <a href="/" className="flex items-center" onClick={(e) => handleLinkClick(e, '/')}>
              <img 
                src="/Starlink Dmv (20).png" 
                alt="Orbittec Logo" 
                className="h-10 w-auto"
              />
            </a>

            {/* Desktop Navigation - Only Visible on Desktop (Replaced <Link> with <a>) */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-neutral-200 hover:text-white text-sm font-normal tracking-tight transition-colors duration-200 font-sans"
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            
            {/* Desktop Buttons - Only Visible on Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:+15719996915"
                className="bg-white/10 border border-white/20 text-white font-semibold rounded-md text-sm px-4 py-2 hover:bg-white/20 transition-all duration-200 font-sans"
              >
                Call Us
              </a>
              <a
                href="/#contact"
                className="bg-white text-black font-semibold rounded-md text-sm px-6 py-2 hover:bg-neutral-200 transition-all duration-200 font-sans"
                onClick={(e) => handleLinkClick(e, '/#contact')}
              >
                Get Quote
              </a>
            </div>

            {/* Mobile Menu Toggle - Only Visible on Mobile/Tablet */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-white/80 transition-colors duration-200 font-sans"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/20 bg-black">
            <nav className="px-4 py-6 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-white text-lg font-normal tracking-tight transition-colors font-sans"
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+15719996915"
                className="block bg-white/10 border border-white/20 text-white font-semibold rounded-md text-lg px-4 py-3 text-center mt-6 hover:bg-white/20 transition-all font-sans"
              >
                Call Us: (571) 999-6915
              </a>
              <a
                href="/#contact"
                className="block bg-white text-black font-semibold rounded-md text-lg px-6 py-3 text-center mt-4 hover:bg-neutral-200 transition-all font-sans"
                onClick={(e) => handleLinkClick(e, '/#contact')}
              >
                ORDER NOW
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;