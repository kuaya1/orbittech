import { lazy, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { SEOMetadata, HomeSchema, ReviewSchema } from './components/SEO';
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
      <Router>
        <div className="min-h-screen bg-black">
          <HomeSchema />
          <Navbar />
          <Routes>
            <Route path="/" element={
              <main className="bg-black text-white">
                <SEOMetadata 
                  title="The Orbit Tech | #1 Starlink Installation DMV | Free Quote"
                  description="The Orbit Tech: Certified Starlink installation experts serving 100-mile radius from Reston, VA. Professional setup across Northern Virginia, Maryland & West Virginia. Flexible pricing $499-$999. Get your free quote today!"
                  canonical="https://theorbittech.com/"
                  keywords={['Starlink installation', 'DMV area', 'Northern Virginia', 'Maryland', 'West Virginia', 'satellite internet']}
                />
                <ReviewSchema />
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
    </HelmetProvider>
  );
}

export default App;