import React from 'react';
import SchemaInjector from './components/SchemaInjector'; // 1. IMPORT THE NEW COMPONENT
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className="bg-black">
            <SchemaInjector /> {/* 2. PLACE THE COMPONENT HERE */}
            <Navbar />
            <main>
                <Hero />
                <Services />
                <Process />
                <FAQ />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;