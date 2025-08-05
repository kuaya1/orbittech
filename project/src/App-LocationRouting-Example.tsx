// Example: How to integrate location pages into your main App.tsx routing
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Import main pages
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

// Import location pages
import { FairfaxPage, MontgomeryPage } from './components/LocationPages';

// Import SEO components that are used globally
import { SEOMetadata } from './components/SEO/SEOMetadata';
import HomeSchema from './components/SEO/SchemaInjector';
import ReviewSchema from './components/SEO/ReviewSchema';

function App() {
  return (
    <HelmetProvider>
      <Router>
        {/* Global SEO components - applied to all pages */}
        <HomeSchema />
        <ReviewSchema />
        
        <div className="App">
          <Routes>
            {/* Main website pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Location-specific pages for local SEO */}
            <Route path="/locations/fairfax-va" element={<FairfaxPage />} />
            <Route path="/locations/montgomery-md" element={<MontgomeryPage />} />
            
            {/* Add more location pages as needed */}
            {/* <Route path="/locations/arlington-va" element={<ArlingtonPage />} /> */}
            {/* <Route path="/locations/alexandria-va" element={<AlexandriaPage />} /> */}
            {/* <Route path="/locations/washington-dc" element={<WashingtonDCPage />} /> */}
            
            {/* Catch-all for 404 pages */}
            <Route path="*" element={
              <>
                <SEOMetadata 
                  title="Page Not Found | The Orbit Tech"
                  description="The page you're looking for doesn't exist. Contact The Orbit Tech for Starlink installation services in the DMV area."
                  canonical="https://theorbittech.com/404"
                />
                <div className="text-center py-20">
                  <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
                  <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
                  <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Return Home
                  </a>
                </div>
              </>
            } />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
