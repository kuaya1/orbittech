import React, { useState, useEffect } from 'react';
import Button from '../shared/Button';

interface PhoneCallCTAProps {
  variant?: 'button' | 'sticky' | 'header';
  className?: string;
}

const PhoneCallCTA: React.FC<PhoneCallCTAProps> = ({ variant = 'sticky', className = '' }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [businessHours, setBusinessHours] = useState('');
  const phoneNumber = "(703) 555-0123";
  const phoneHref = "tel:+17035550123";

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const updateBusinessHours = () => {
      const now = new Date();
      const hour = now.getHours();
      const day = now.getDay(); // 0 = Sunday, 6 = Saturday
      
      let isOpen = false;
      let nextOpen = '';
      
      if (day >= 1 && day <= 5) { // Monday-Friday
        isOpen = hour >= 8 && hour < 19;
        nextOpen = isOpen ? 'until 7:00 PM' : 'tomorrow at 8:00 AM';
      } else if (day === 6) { // Saturday
        isOpen = hour >= 9 && hour < 17;
        nextOpen = isOpen ? 'until 5:00 PM' : 'Monday at 8:00 AM';
      } else { // Sunday
        isOpen = hour >= 10 && hour < 16;
        nextOpen = isOpen ? 'until 4:00 PM' : 'Monday at 8:00 AM';
      }
      
      setBusinessHours(isOpen ? 'Open now' : `Opens ${nextOpen}`);
    };
    
    updateBusinessHours();
    const interval = setInterval(updateBusinessHours, 60000); // Update every minute
    
    return () => clearInterval(interval);
  }, []);

  const handlePhoneClick = () => {
    // Track phone click for analytics
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'phone_click',
        click_location: isMobile ? 'mobile_sticky' : 'header',
        phone_number: phoneNumber.replace(/\D/g, '')
      });
    }
  };

  // Button variant for hero section
  if (variant === 'button') {
    return (
      <Button 
        variant="secondary" 
        size="lg" 
        className={`px-8 text-lg ${className}`}
        onClick={() => window.open(phoneHref, '_self')}
      >
        <span className="flex items-center">
          <span className="text-xl mr-2">📞</span>
          Call {phoneNumber}
        </span>
      </Button>
    );
  }

  // Mobile Sticky CTA
  if (isMobile && variant === 'sticky') {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl">
        <div className="p-4">
          <a
            href={phoneHref}
            onClick={handlePhoneClick}
            className="flex items-center justify-center w-full bg-gradient-to-r from-accent-500 to-green-600 hover:from-accent-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 transform active:scale-95"
          >
            <span className="text-2xl mr-3">📞</span>
            <div className="text-left">
              <div className="text-lg">Call Now: {phoneNumber}</div>
              <div className="text-sm opacity-90">{businessHours} • Same-Day Service</div>
            </div>
          </a>
        </div>
      </div>
    );
  }

  // Desktop Header Version
  return (
    <div className="hidden lg:flex items-center space-x-4">
      <div className="text-right">
        <div className="flex items-center text-sm text-gray-600 mb-1">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
          <span>{businessHours}</span>
        </div>
        <div className="text-lg font-bold text-gray-900">{phoneNumber}</div>
        <div className="text-xs text-primary-600 font-semibold">Same-Day Service Available</div>
      </div>
      
      <a
        href={phoneHref}
        onClick={handlePhoneClick}
        className="bg-gradient-to-r from-accent-500 to-green-600 hover:from-accent-600 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
      >
        <span className="flex items-center">
          <span className="text-xl mr-2">📞</span>
          Call Now
        </span>
      </a>
    </div>
  );
};

// Emergency/After Hours CTA Component
export const EmergencyCallCTA: React.FC = () => {
  const phoneNumber = "(703) 555-0123";
  const phoneHref = "tel:+17035550123";

  const handleEmergencyClick = () => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'emergency_phone_click',
        click_location: 'emergency_cta',
        phone_number: phoneNumber.replace(/\D/g, '')
      });
    }
  };

  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-semibold text-red-800 mb-1">Need Emergency Service?</h4>
          <p className="text-sm text-red-700">24/7 support available for urgent installations</p>
        </div>
        <a
          href={phoneHref}
          onClick={handleEmergencyClick}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
        >
          Emergency Line
        </a>
      </div>
    </div>
  );
};

export default PhoneCallCTA;
