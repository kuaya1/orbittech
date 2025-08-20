import { lazy, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { SEOMetadata } from './components/SEO';
import { SchemaProvider, ConsolidatedSchemaInjector, BusinessSchema, ReviewSchema } from './components/SEO/CentralizedSchemaManager';
import { CanonicalUrlEnforcer } from './components/SEO/CanonicalUrlEnforcer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Blog from './components/Blog';
import AvailabilityProcess from './components/AvailabilityProcess';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FeaturedInstallations from './components/featuredjobcase';
import FAQ from './components/FAQ';
import FinalHomepageCTA from './components/FinalHomepageCTA';
import SocialProofTestimonials from './components/SocialProofTestimonials';

// Lazy load service pages for better performance
const ConstructionConnect = lazy(() => import('./pages/services/ConstructionConnect'));

// Lazy load location pages for better performance
const FairfaxPage = lazy(() => import('./components/LocationPages/FairfaxPage'));
const MontgomeryPage = lazy(() => import('./components/LocationPages/MontgomeryPage'));
const LoudounPage = lazy(() => import('./components/LocationPages/LoudounPage'));
const PrinceWilliamPage = lazy(() => import('./components/LocationPages/PrinceWilliamPage'));
const ArlingtonPage = lazy(() => import('./components/LocationPages/ArlingtonPage'));
const AlexandriaPage = lazy(() => import('./components/LocationPages/AlexandriaPage'));
const WashingtonDCPage = lazy(() => import('./components/LocationPages/WashingtonDCPage'));
const HowardCountyPage = lazy(() => import('./components/LocationPages/HowardCountyPage'));
const AnneArundelPage = lazy(() => import('./components/LocationPages/AnneArundelPage'));
const JeffersonCountyPage = lazy(() => import('./components/LocationPages/JeffersonCountyPage'));
const RockinghamCountyPage = lazy(() => import('./components/LocationPages/RockinghamCountyPage'));

function App() {
  return (
    <HelmetProvider>
      <SchemaProvider>
        <ConsolidatedSchemaInjector />
        <Router>
          <CanonicalUrlEnforcer />
          <div className="min-h-screen bg-black">
            <BusinessSchema />
            <Navbar />
            <Routes>
              <Route path="/" element={
                <main className="bg-black text-white">
                  <SEOMetadata 
                    title="The Orbit Tech | #1 Starlink Installation DMV | Free Quote"
                    description="The Orbit Tech: Certified Starlink installation experts serving 100-mile radius from Reston, VA. Professional setup across Northern Virginia, Maryland & West Virginia. Flexible pricing $499-$999. Get your free quote today!"
                  />
                  <ReviewSchema reviews={[
                    {
                      "@type": "Review",
                      "author": {
                        "@type": "Person",
                        "name": "Sarah Chen"
                      },
                      "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": "5",
                        "bestRating": "5"
                      },
                      "reviewBody": "The Orbit Tech team exceeded our expectations! They handled our challenging roofline perfectly and the installation was seamless. Our Starlink speeds are incredible now.",
                      "datePublished": "2024-12-15"
                    },
                    {
                      "@type": "Review",
                      "author": {
                        "@type": "Person",
                        "name": "Michael Rodriguez"
                      },
                      "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": "5",
                        "bestRating": "5"
                      },
                      "reviewBody": "Outstanding service from quote to completion. The Orbit Tech's DMV team knows exactly what they're doing. Professional installation with excellent cable management.",
                      "datePublished": "2024-11-28"
                    },
                    {
                      "@type": "Review",
                      "author": {
                        "@type": "Person",
                        "name": "Jennifer Walsh"
                      },
                      "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": "5",
                        "bestRating": "5"
                      },
                      "reviewBody": "After years of poor rural internet, The Orbit Tech transformed our connectivity completely. Fast, reliable service and their DMV area expertise really shows.",
                      "datePublished": "2024-11-10"
                    }
                  ]} />
                  <Hero />
                  <AvailabilityProcess />
                  <Services />
                  <SocialProofTestimonials />
                  <Contact />
                  <FeaturedInstallations />
                  <FAQ />
                  <FinalHomepageCTA />
                </main>
              } />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:postId" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            
            {/* Service Pages */}
            <Route path="/services/construction-connect" element={
              <Suspense fallback={<div className="flex items-center justify-center min-h-screen bg-black text-white">Loading...</div>}>
                <ConstructionConnect />
              </Suspense>
            } />
            
            {/* Location Pages - Virginia */}
            <Route path="/locations/fairfax-county-va" element={
              <Suspense fallback={<div className="flex items-center justify-center min-h-screen bg-black text-white">Loading...</div>}>
                <FairfaxPage />
              </Suspense>
            } />
            <Route path="/locations/loudoun-county-va" element={
              <Suspense fallback={<div className="flex items-center justify-center min-h-screen bg-black text-white">Loading...</div>}>
                <LoudounPage />
              </Suspense>
            } />
            <Route path="/locations/prince-william-county-va" element={
              <Suspense fallback={<div className="flex items-center justify-center min-h-screen bg-black text-white">Loading...</div>}>
                <PrinceWilliamPage />
              </Suspense>
            } />
            <Route path="/locations/arlington-county-va" element={
              <Suspense fallback={<div className="flex items-center justify-center min-h-screen bg-black text-white">Loading...</div>}>
                <ArlingtonPage />
              </Suspense>
            } />
            <Route path="/locations/alexandria-va" element={
              <Suspense fallback={<div className="flex items-center justify-center min-h-screen bg-black text-white">Loading...</div>}>
                <AlexandriaPage />
              </Suspense>
            } />
            <Route path="/locations/rockingham-county-va" element={
              <Suspense fallback={<div className="flex items-center justify-center min-h-screen bg-black text-white">Loading...</div>}>
                <RockinghamCountyPage />
              </Suspense>
            } />
            
            {/* Location Pages - Maryland */}
            <Route path="/locations/montgomery-county-md" element={
              <Suspense fallback={<div className="flex items-center justify-center min-h-screen bg-black text-white">Loading...</div>}>
                <MontgomeryPage />
              </Suspense>
            } />
            <Route path="/locations/howard-county-md" element={
              <Suspense fallback={<div className="flex items-center justify-center min-h-screen bg-black text-white">Loading...</div>}>
                <HowardCountyPage />
              </Suspense>
            } />
            <Route path="/locations/anne-arundel-county-md" element={
              <Suspense fallback={<div className="flex items-center justify-center min-h-screen bg-black text-white">Loading...</div>}>
                <AnneArundelPage />
              </Suspense>
            } />
            
            {/* Location Pages - Washington DC */}
            <Route path="/locations/washington-dc" element={
              <Suspense fallback={<div className="flex items-center justify-center min-h-screen bg-black text-white">Loading...</div>}>
                <WashingtonDCPage />
              </Suspense>
            } />
            
            {/* Location Pages - West Virginia */}
            <Route path="/locations/jefferson-county-wv" element={
              <Suspense fallback={<div className="flex items-center justify-center min-h-screen bg-black text-white">Loading...</div>}>
                <JeffersonCountyPage />
              </Suspense>
            } />
          </Routes>
          <Footer />
        </div>
      </Router>
      </SchemaProvider>
    </HelmetProvider>
  );
}

export default App;