import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import LoudounCounty from './pages/locations/LoudounCounty';
import FairfaxCounty from './pages/locations/FairfaxCounty';
import ArlingtonCounty from './pages/locations/ArlingtonCounty';
import PrinceWilliamCounty from './pages/locations/PrinceWilliamCounty';
import MontgomeryCountyMD from './pages/locations/MontgomeryCountyMD';
import ThankYou from './pages/ThankYou';
import ConstructionConnectLanding from './pages/ConstructionConnect';
import { analyticsHelpers } from './utils/analyticsConfig';

function App() {
  useEffect(() => {
    // Initialize Google Tag Manager
    analyticsHelpers.initGTM('GTM-XXXXXXX'); // Replace with actual GTM ID
    
    // Set initial custom dimensions
    analyticsHelpers.pushEvent({
      event: 'custom_dimensions',
      user_type: analyticsHelpers.getUserType(),
      device_type: analyticsHelpers.getDeviceType(),
      lead_source: analyticsHelpers.getLeadSource(),
    });
    
    // Track initial page view
    analyticsHelpers.pushEvent({
      event: 'page_view',
      page_type: 'application_start',
      page_location: window.location.pathname,
    });
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/construction-connect" element={<ConstructionConnectLanding />} />
        <Route path="/locations/loudoun-county" element={<LoudounCounty />} />
        <Route path="/locations/fairfax-county" element={<FairfaxCounty />} />
        <Route path="/locations/arlington-county" element={<ArlingtonCounty />} />
        <Route path="/locations/prince-william-county" element={<PrinceWilliamCounty />} />
        <Route path="/locations/montgomery-county-md" element={<MontgomeryCountyMD />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Layout>
  );
}

export default App;
