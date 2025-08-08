import React from 'react';

interface TrustBadgesProps {
  layout?: 'horizontal' | 'vertical' | 'grid';
  compact?: boolean;
}

const TrustBadges: React.FC<TrustBadgesProps> = ({ layout = 'horizontal', compact = false }) => {
  const badges = [
    {
      icon: '✅',
      title: 'Certified Installer',
      subtitle: 'SpaceX Authorized'
    },
    {
      icon: '🛡️',
      title: 'Fully Insured',
      subtitle: 'Liability Coverage'
    },
    {
      icon: '⭐',
      title: '4.9★ Rating',
      subtitle: '247+ Reviews'
    },
    {
      icon: '🔧',
      title: '2-Year Warranty',
      subtitle: 'Installation Guarantee'
    }
  ];

  if (layout === 'horizontal') {
    return (
      <div className={`flex ${compact ? 'flex-wrap justify-center gap-4' : 'justify-between items-center'} ${compact ? 'space-y-2' : ''}`}>
        {badges.map((badge, index) => (
          <div key={index} className={`flex items-center ${compact ? 'text-xs' : 'text-sm'} text-gray-600`}>
            <span className={`${compact ? 'text-base' : 'text-lg'} mr-2`}>{badge.icon}</span>
            <div>
              <div className={`font-semibold ${compact ? 'text-xs' : 'text-sm'} text-gray-800`}>{badge.title}</div>
              {!compact && <div className="text-xs text-gray-500">{badge.subtitle}</div>}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (layout === 'grid') {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {badges.map((badge, index) => (
          <div key={index} className="bg-white rounded-lg p-4 text-center border border-gray-100 shadow-sm">
            <div className="text-2xl mb-2">{badge.icon}</div>
            <div className="font-semibold text-gray-800 text-sm mb-1">{badge.title}</div>
            <div className="text-xs text-gray-600">{badge.subtitle}</div>
          </div>
        ))}
      </div>
    );
  }

  // Vertical layout
  return (
    <div className="space-y-3">
      {badges.map((badge, index) => (
        <div key={index} className="flex items-center text-sm text-gray-600">
          <span className="text-lg mr-3">{badge.icon}</span>
          <div>
            <div className="font-semibold text-gray-800">{badge.title}</div>
            <div className="text-xs text-gray-500">{badge.subtitle}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;
