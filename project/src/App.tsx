import React from 'react';
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

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main className="bg-black text-white">
              <Hero />
              <AvailabilityProcess />
              <Services />
              <Contact />
              <FeaturedInstallations />
              <FAQ />
            </main>
          } />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;