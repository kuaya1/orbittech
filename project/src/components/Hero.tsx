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
    // Use the local image from public folder for the right side
    const imageUrl = '/design (20).PNG';

    return (
        <section id="hero" className="w-full bg-black font-sans antialiased">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 items-center">
                    
                    {/* Column 1: Content (Order 2 on mobile, Order 1 on desktop) */}
                    <div className="py-20 text-center lg:text-left order-2 lg:order-1">
                        <AnimatedComponent>
                            <h1 className="text-4xl md:text-5xl font-medium text-white tracking-tighter leading-tight">
                                Professional Starlink Installation.
                            </h1>
                            <p className="mt-6 text-lg text-neutral-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                                Experience flawless, high-performance internet with our expert installation service. We handle everything.
                            </p>
                            
                            {/* Social Proof Section */}
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

                    {/* Column 2: Image (Order 1 on mobile, Order 2 on desktop) */}
                    <div className="relative w-full h-80 sm:h-96 lg:h-[600px] order-1 lg:order-2 rounded-2xl overflow-hidden">
                         <img 
                            src={imageUrl}
                            alt="Starlink hardware"
                            className="w-full h-full object-cover"
                         />
                         {/* Gradient overlay for smooth blending with left column */}
                         <div 
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                background: 'linear-gradient(to left, rgba(16,16,20,0.85) 0%, rgba(16,16,20,0.35) 30%, rgba(16,16,20,0.0) 70%)'
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
