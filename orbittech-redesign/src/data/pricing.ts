import { PricingPackage } from '../types';

export const pricingPackages: PricingPackage[] = [
  {
    id: 'professional-installation',
    name: 'Professional Installation',
    price: 599,
    monthlyPrice: 120,
    description: 'Complete Starlink setup with professional installation',
    features: [
      'Professional dish mounting & alignment',
      'Cable routing & weatherproofing',
      'WiFi router setup & optimization',
      'Speed testing & verification',
      '2-year installation warranty',
      'Same-day service available',
      'Free site survey'
    ],
    highlighted: false,
    ctaText: 'Get Started'
  },
  {
    id: 'complete-coverage-package',
    name: 'Complete Coverage Package',
    price: 899,
    monthlyPrice: 120,
    description: 'Everything included plus mesh WiFi for full home coverage',
    features: [
      'Everything in Professional Installation',
      'Mesh WiFi system (covers 6,000 sq ft)',
      'Ethernet hardwiring (3 locations)',
      'Smart home device optimization',
      'Priority technical support',
      'Annual maintenance check',
      'Guest network setup',
      'Parental controls configuration'
    ],
    highlighted: true,
    ctaText: 'Most Popular'
  },
  {
    id: 'business-installation',
    name: 'Business Installation',
    price: 1299,
    monthlyPrice: 500,
    description: 'Enterprise-grade setup for business operations',
    features: [
      'Business-grade Starlink service',
      'Redundant internet backup',
      'Professional network infrastructure',
      'VPN & security configuration',
      'Priority support & SLA',
      'Custom installation consultation',
      'Multiple access points',
      'Business hour installation'
    ],
    highlighted: false,
    ctaText: 'Contact Sales'
  }
];
