import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Star } from 'lucide-react';

// --- Custom Hook for Animations ---
const useIntersectionObserver = (options) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, options);

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [options]);

    return [elementRef, isVisible];
};

const AnimatedComponent = ({ children, delay = 0 }) => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    const style = {
        transition: 'opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)',
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    };
    return <div ref={ref} style={style}>{children}</div>;
};

// --- Star Rating Component for Social Proof ---
const StarRating = () => (
    <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
        ))}
    </div>
);


// --- Hero Section ---
const Hero = () => {
    const backgroundImageUrl = '/Untitled design (19).png';

    return (
        <section id="hero" className="w-full bg-white font-sans antialiased">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
                    
                    {/* Left Column: Content */}
                    <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
                        <AnimatedComponent>
                            <h1 className="text-4xl md:text-6xl font-medium text-black tracking-tighter leading-tight">
                                Professional Starlink Installation.
                            </h1>
                            <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
                                Experience flawless, high-performance internet with our expert installation service. We handle everything.
                            </p>
                            
                            {/* Social Proof Section */}
                            <div className="mt-8 flex items-center gap-4">
                                <div className="text-blue-600 font-bold text-lg">G</div>
                                <div>
                                    <p className="font-semibold text-black">Google Rating</p>
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold text-black">5.0</span>
                                        <StarRating />
                                    </div>
                                    <p className="text-sm text-neutral-500">Based on 140+ reviews</p>
                                </div>
                            </div>

                            <div className="mt-10">
                                <a
                                    href="#contact"
                                    className="group inline-flex items-center justify-center px-8 py-4 text-lg bg-black text-white font-medium rounded-full
                                               transition-all duration-300 ease-in-out shadow-lg hover:bg-neutral-800"
                                >
                                    <span>Get Your Quote</span>
                                    <ArrowRight className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                                </a>
                            </div>
                        </AnimatedComponent>
                    </div>

                    {/* Right Column: Image */}
                    <div className="relative w-full h-96 lg:h-full bg-black">
                         <div 
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
                         ></div>
                    </div>

                </div>
            </div>
        </section>
    );
};


// --- Main App Component (to render the Hero section) ---
const App = () => {
    return (
        <div className="bg-white">
            <Hero />
            {/* Other sections would go here */}
        </div>
    );
};

export default App;
