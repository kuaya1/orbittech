// Location Pages for The Orbit Tech - Local SEO optimized pages
export { default as FairfaxPage } from './FairfaxPage';
export { default as MontgomeryPage } from './MontgomeryPage';

// Location page configuration for dynamic routing
export const locationPages = [
  {
    path: '/locations/fairfax-va',
    component: 'FairfaxPage',
    title: 'Starlink Installation Fairfax VA',
    location: 'Fairfax County, Virginia',
    shortName: 'Fairfax'
  },
  {
    path: '/locations/montgomery-md',
    component: 'MontgomeryPage',
    title: 'Starlink Installation Montgomery County MD',
    location: 'Montgomery County, Maryland',
    shortName: 'Montgomery'
  }
];

// Helper function to get location page data
export const getLocationPageData = (pathname: string) => {
  return locationPages.find(page => page.path === pathname);
};
