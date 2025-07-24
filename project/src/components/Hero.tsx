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
    const imageUrl = '/Untitled design (20).png';

    return (
        <section id="hero" className="w-full bg-black font-sans antialiased overflow-hidden lg:overflow-visible">
            <div className="lg:max-w-none">
                {/* Updated to be full screen on desktop */}
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:min-h-screen">
                    
                    {/* Column 1: Content */}
                    <div className="py-24 px-4 sm:px-6 lg:px-12 text-center lg:text-left lg:pl-48">
                        <AnimatedComponent>
                            <h1 className="text-5xl md:text-7xl font-medium text-white tracking-tighter leading-tight">
                                Professional Starlink Installation.
                            </h1>
                        </AnimatedComponent>
                        <AnimatedComponent delay={200}>
                           <p className="mt-6 text-lg text-neutral-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                Complete Starlink installation service—from dish alignment to speed optimization.
                            </p>
                        </AnimatedComponent>
                        <AnimatedComponent delay={400}>
                               <div className="mt-8 flex items-center gap-4 justify-center lg:justify-start">
                                    <div className="text-blue-500 font-bold text-lg">G</div>
                                    <div>
                                        <p className="font-semibold text-white">Google Rating</p>
                                        <div className="flex items-center gap-2">
                                            <span className="font-bold text-white">5.0</span>
                                            <StarRating />
                                        </div>
                                        <p className="text-sm text-neutral-400">Based on 140+ reviews</p>
                                    </div>
                                </div>
                        </AnimatedComponent>
                    </div>

                    {/* Column 2: Image */}
                    {/* UPDATED: Set mobile top margin to mt-36 and shift right by 0.5 inch (12px) on desktop. */}
                    <div className="relative w-full h-[400px] sm:h-[480px] lg:h-screen mt-36 lg:mt-0 lg:-ml-36 lg:translate-x-3">
                         <img 
                             src={imageUrl}
                             alt="Starlink hardware"
                             className="w-full h-full object-cover"
                             onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/1000x1200/1a202c/ffffff?text=Image+Not+Found'; }}
                         />
                         {/* Gradient overlay for smooth blending */}
                         <div 
                             className="absolute inset-0 pointer-events-none"
                             style={{
                                 background: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 20%, rgba(0,0,0,0) 50%)'
                             }}
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
        <div className="bg-black">
            <Hero />
            {/* Other sections would go here */}
        </div>
    );
};

export default App;
