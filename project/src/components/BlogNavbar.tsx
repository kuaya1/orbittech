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
    
    // Handle routing to different pages
    if (path === '/') {
      // Navigate to home page
      window.location.href = '/';
    } else if (path === '/contact') {
      // Navigate to contact page
      window.location.href = '/#contact';
    } else if (path.startsWith('/#')) {
      // Handle hash links for smooth scrolling on the same page
      // For hash links, navigate to home page first, then scroll
      window.location.href = path;
    } else {
      // For other links, navigate directly
      window.location.href = path;
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
        isMenuOpen ? 'bg-white shadow-xl' : (isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-white shadow-md')
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Blog specific with black logo */}
            <a href="/" className="flex items-center" onClick={(e) => handleLinkClick(e, '/')}>
              <img 
                src="/Starlink Dmv (33).png" 
                alt="Orbit Tech Logo" 
                className="h-9 w-auto"
              />
            </a>

            {/* Desktop Navigation - Only Visible on Desktop */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-surface-700 hover:text-surface-900 text-sm font-semibold transition-colors duration-300"
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
                className="text-surface-700 hover:text-surface-900 text-sm font-semibold transition-all duration-300 border border-surface-300 hover:border-surface-400 px-6 py-3 rounded-xl hover:shadow-md"
              >
                Call Us
              </a>
              <a
                href="/contact"
                className="bg-primary-600 text-white font-semibold px-8 py-3 rounded-xl text-sm hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                onClick={(e) => handleLinkClick(e, '/contact')}
              >
                Get Quote
              </a>
            </div>

            {/* Mobile Menu Toggle - Only Visible on Mobile/Tablet */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-surface-700 hover:text-surface-900 transition-colors duration-300"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-surface-200 bg-white shadow-xl">
            <nav className="px-4 py-8 space-y-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-surface-700 text-base font-semibold transition-colors hover:text-surface-900"
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+15719996915"
                className="block text-surface-700 text-base font-semibold transition-colors border border-surface-300 hover:border-surface-400 px-6 py-4 rounded-xl text-center mt-8"
              >
                Call Us: (571) 999-6915
              </a>
              <a
                href="/contact"
                className="block bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-center mt-4 hover:bg-primary-700 shadow-lg"
                onClick={(e) => handleLinkClick(e, '/contact')}
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
