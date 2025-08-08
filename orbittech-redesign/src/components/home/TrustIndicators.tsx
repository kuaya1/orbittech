import React, { useState, useEffect } from 'react';
import Section from '../shared/Section';
import Card from '../shared/Card';

const TrustIndicators: React.FC = () => {
  const [installationCount, setInstallationCount] = useState(0);
  const targetCount = 500;

  // Animated counter effect
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const increment = targetCount / (duration / 50);
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetCount) {
        setInstallationCount(targetCount);
        clearInterval(timer);
      } else {
        setInstallationCount(Math.floor(current));
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      number: `${installationCount}+`,
      label: 'Successful Installations',
      icon: '🏠',
      color: 'text-primary-600'
    },
    {
      number: '4.9',
      label: 'Google Reviews Rating',
      icon: '⭐',
      color: 'text-yellow-500',
      subtext: 'Based on 247 reviews'
    },
    {
      number: '2hrs',
      label: 'Average Response Time',
      icon: '⚡',
      color: 'text-accent-600'
    },
    {
      number: '2yr',
      label: 'Installation Warranty',
      icon: '🛡️',
      color: 'text-blue-600'
    }
  ];

  const badges = [
    {
      title: 'Certified Starlink Installer',
      icon: '✅',
      description: 'Official certification from SpaceX'
    },
    {
      title: 'Fully Insured & Licensed',
      icon: '🛡️',
      description: 'Complete liability coverage'
    },
    {
      title: '2-Year Service Warranty',
      icon: '🔧',
      description: 'Installation guarantee included'
    },
    {
      title: 'BBB A+ Rating',
      icon: '🏆',
      description: 'Better Business Bureau verified'
    }
  ];

  return (
    <Section background="gray">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Trusted by <span className="gradient-text">500+ Families</span> in the DMV
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Join hundreds of satisfied customers who chose professional installation for reliable, high-speed internet.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center">
            <div className="text-4xl mb-2">{stat.icon}</div>
            <div className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}>
              {stat.number}
            </div>
            <p className="text-gray-600 font-medium">{stat.label}</p>
            {stat.subtext && (
              <p className="text-xs text-gray-500 mt-1">{stat.subtext}</p>
            )}
          </Card>
        ))}
      </div>

      {/* Professional Badges */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {badges.map((badge, index) => (
          <Card key={index} className="text-center p-4 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-2">{badge.icon}</div>
            <h3 className="font-bold text-gray-900 mb-2 text-sm">{badge.title}</h3>
            <p className="text-xs text-gray-600">{badge.description}</p>
          </Card>
        ))}
      </div>

      {/* Google Reviews Integration */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center bg-white rounded-2xl px-8 py-4 shadow-lg border">
          <div className="flex items-center space-x-4">
            <div className="text-4xl">🌟</div>
            <div>
              <div className="flex items-center mb-1">
                <span className="text-2xl font-bold text-gray-900 mr-2">4.9</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-600">247 Google Reviews</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-300 mx-4"></div>
            <div className="hidden md:block text-left">
              <p className="font-semibold text-gray-900">Google Verified</p>
              <p className="text-sm text-gray-600">Local Business</p>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Count Animation */}
      <div className="text-center mt-12">
        <div className="inline-flex items-center bg-accent-50 rounded-full px-6 py-3">
          <div className="w-3 h-3 bg-accent-500 rounded-full animate-pulse mr-3"></div>
          <span className="text-accent-700 font-semibold">
            Installation #532 completed today in Ashburn, VA
          </span>
        </div>
      </div>
    </Section>
  );
};

export default TrustIndicators;
