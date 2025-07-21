import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const BlogNavbar = () => {
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
    { href: '/', label: 'Home' },
    { href: '/#services', label: 'Services' },
    { href: '/#availability-process', label: 'Coverage' },
    { href: '/#featured-installations', label: 'Success Stories' },
    { href: '/faq', label: 'FAQ' },
  ];

  // --- Render ---

  return (
    <>
      <header className={`custom-navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isMenuOpen ? 'bg-white shadow-lg' : (isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white shadow-sm')
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Blog specific with black logo */}
            <a href="/" className="flex items-center" onClick={(e) => handleLinkClick(e, '/')}>
              <img 
                src="/orbittech logo black.png" 
                alt="Orbit Tech Logo" 
                className="h-10 w-auto"
              />
            </a>

            {/* Desktop Navigation - Only Visible on Desktop */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors duration-200"
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
                className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors duration-200 border border-gray-300 hover:border-gray-400 px-4 py-2 rounded"
              >
                Call Us
              </a>
              <a
                href="/#contact"
                className="bg-blue-600 text-white font-medium px-6 py-2 rounded text-sm hover:bg-blue-700 transition-colors duration-200"
                onClick={(e) => handleLinkClick(e, '/#contact')}
              >
                Get Quote
              </a>
            </div>

            {/* Mobile Menu Toggle - Only Visible on Mobile/Tablet */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white shadow-lg">
            <nav className="px-4 py-6 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-gray-700 text-base font-medium transition-colors hover:text-gray-900"
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+15719996915"
                className="block text-gray-700 text-base font-medium transition-colors border border-gray-300 hover:border-gray-400 px-4 py-3 rounded text-center mt-6"
              >
                Call Us: (571) 999-6915
              </a>
              <a
                href="/#contact"
                className="block bg-blue-600 text-white px-6 py-3 rounded font-medium transition-colors text-center mt-4 hover:bg-blue-700"
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

export default BlogNavbar;
