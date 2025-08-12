import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

interface NavbarProps {
  logoSrc?: string;
  logoAlt?: string;
  variant?: 'default' | 'construction';
}

const Navbar: React.FC<NavbarProps> = ({ 
  logoSrc,
  logoAlt = "OrbitTech Logo",
  variant = 'default'
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Check if we're on a blog page
  const isBlogPage = location.pathname.includes('/blog');
  
  // Check if we're on the construction page
  const isConstructionPage = location.pathname.includes('/services/construction-connect') || location.pathname.includes('/construction-connect');
  
  // Determine the effective variant
  const effectiveVariant = variant || (isConstructionPage ? 'construction' : 'default');
  
  // Determine logo source based on variant or prop
  const finalLogoSrc = logoSrc || (effectiveVariant === 'construction' ? '/orbittech logo black.png' : '/Starlink Dmv (33).png');

  // --- Effects and Handlers ---

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const navbar = document.querySelector('.navbar-container');
      if (navbar && !navbar.contains(event.target as Node) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Handles clicks on nav links to close the mobile menu and navigate properly
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (path === '/blog') {
      // Navigate to blog page using React Router
      navigate('/blog');
    } else if (path.startsWith('/services/')) {
      // Navigate to service pages using React Router
      navigate(path);
    } else if (path.startsWith('/#')) {
      // Handle hash links - navigate to home first if not already there, then scroll
      const id = path.substring(2);
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 300); // Give time for page to load
      } else {
        // Already on home page, just scroll
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else if (path === '/') {
      // Navigate to home page
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  // --- Data ---

  const navLinks = [
    { href: '/#services', label: 'Services' },
    { href: '/services/construction-connect', label: 'Construction Connect' },
    { href: '/#availability-process', label: 'Coverage' },
    { href: '/blog', label: 'Blog' },
    { href: '/#faq', label: 'FAQ' },
  ];

  // --- Render ---

  return (
    <>
      <header className={`navbar-container fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isBlogPage 
          ? 'bg-white/10 backdrop-blur-md border-b border-white/20' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Modern Logo */}
            <button 
              onClick={(e) => handleLinkClick(e as any, '/')} 
              className="flex items-center group transition-transform duration-300 hover:scale-105 bg-transparent border-none p-0 cursor-pointer"
            >
              <img 
                src={finalLogoSrc} 
                alt={logoAlt} 
                className="h-10 w-auto transition-all duration-300"
                loading="eager"
                decoding="async"
                width="120"
                height="40"
              />
            </button>

            {/* Modern Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-neutral-300 hover:text-neutral-50 text-sm font-medium tracking-wide transition-all duration-300 relative group"
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>
            
            {/* Modern Desktop Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <a
                href="tel:+15719996915"
                className="bg-white/[0.08] border border-white/20 text-neutral-50 font-medium rounded-lg text-sm px-4 py-2.5 hover:bg-white/[0.12] hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
              >
                (571) 999-6915
              </a>
              <button
                onClick={(e) => handleLinkClick(e as any, '/#contact')}
                className="bg-white text-black font-semibold rounded-lg text-sm px-6 py-2.5 hover:bg-neutral-100 transition-all duration-300 shadow-lg hover:shadow-xl border-none cursor-pointer"
              >
                Get Quote
              </button>
            </div>

            {/* Modern Mobile Menu Toggle */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2.5 rounded-lg text-white transition-all duration-300 ${
                  isMenuOpen 
                    ? 'bg-white/20 backdrop-blur-sm border border-white/30' 
                    : 'hover:bg-white/10'
                }`}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                <div className="relative w-5 h-5">
                  <Menu className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
                  }`} />
                  <X className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
                  }`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Modern Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-500 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="bg-black/95 backdrop-blur-xl border-b border-white/10">
            <nav className="px-4 py-8 space-y-1 max-w-7xl mx-auto">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`block py-4 px-4 text-neutral-300 hover:text-neutral-50 hover:bg-white/[0.05] rounded-lg text-base font-medium tracking-wide transition-all duration-300 ${
                    'animate-fade-in-up'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
              
              {/* Mobile Action Buttons */}
              <div className="pt-6 space-y-3">
                <a
                  href="tel:+15719996915"
                  className="block bg-white/[0.08] border border-white/20 text-neutral-50 font-medium rounded-lg text-base px-6 py-4 text-center hover:bg-white/[0.12] hover:border-white/30 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${navLinks.length * 100}ms` }}
                >
                  Call: (571) 999-6915
                </a>
                <button
                  onClick={(e) => handleLinkClick(e as any, '/#contact')}
                  className="block w-full bg-white text-black font-semibold rounded-lg text-base px-6 py-4 text-center hover:bg-neutral-100 transition-all duration-300 shadow-lg animate-fade-in-up border-none cursor-pointer"
                  style={{ animationDelay: `${(navLinks.length + 1) * 100}ms` }}
                >
                  Get Your Free Quote
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      <div className={`lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm transition-all duration-500 z-40 ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`} onClick={() => setIsMenuOpen(false)} />

      {/* Animation Styles */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </>
  );
};

export default Navbar;