import React, { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

// --- Custom Hook for Animations ---
// This hook detects when an element is visible in the viewport
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

// --- Animated Component Wrapper ---
// This component applies a subtle fade-in and slide-up animation
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
            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
        ))}
    </div>
);


// --- Hero Section ---
const Hero = () => {
    const imageUrl = '/Untitled design (20).png';

    return (
        <section id="hero" className="w-full bg-black font-sans antialiased">
            <div className="container mx-auto px-6 sm:px-8">
                {/* Main content container - mobile optimized layout */}
                <div className="min-h-screen flex flex-col items-center justify-center text-center py-20">

                    {/* Mobile Layout: Title, Subtitle, Image, Button, Rating */}
                    <div className="w-full max-w-4xl md:mt-[1.5in] flex flex-col md:flex-row md:items-center md:gap-12">
                        
                        {/* Content Block - Desktop Left, Mobile Top */}
                        <div className="w-full md:w-1/2 md:text-left">
                            {/* 1. Title */}
                            <AnimatedComponent>
                                <h1 className="text-[2.2rem] md:text-[4.5rem] font-bold text-white tracking-tight leading-tight">
                                    Expert Starlink Installation in the DMV
                                </h1>
                            </AnimatedComponent>

                            {/* 2. Subtitle */}
                            <AnimatedComponent delay={200}>
                               <p className="mt-6 md:mt-8 text-[0.95rem] md:text-[1.5625rem] text-neutral-300 leading-relaxed">
                                    Guaranteed perfect installation by certified professionals. Get speeds up to 250 Mbps with same-day service across VA, MD & DC.
                                </p>
                            </AnimatedComponent>

                            {/* Mobile Image Block - positioned after subtitle on mobile */}
                            <div className="md:hidden relative w-full mt-8 mb-8">
                                <AnimatedComponent delay={400}>
                                    <div className="flex justify-center items-center w-full">
                                        <img
                                            src={imageUrl}
                                            alt="Starlink hardware dish and router"
                                            className="w-[150%] h-auto object-contain mx-auto"
                                            style={{
                                                maxWidth: 'none',
                                                display: 'block',
                                                marginLeft: 'auto',
                                                marginRight: 'auto',
                                            }}
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.onerror = null;
                                                target.src = 'https://placehold.co/1200x700/000000/ffffff?text=Starlink+Hardware';
                                            }}
                                        />
                                    </div>
                                    {/* Gradient overlay for mobile */}
                                    <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
                                </AnimatedComponent>
                            </div>

                            {/* 4. Get Quote Button */}
                            <AnimatedComponent delay={500}>
                                <div className="mt-6 md:mt-8">
                                    <a href="#contact" className="inline-block bg-white text-black font-semibold px-6 py-3 md:px-8 md:py-3 rounded-md hover:bg-neutral-100 transition-all duration-300 text-base md:text-lg">
                                        Get Your Free Quote →
                                    </a>
                                </div>
                            </AnimatedComponent>

                            {/* 5. Google Rating */}
                            <AnimatedComponent delay={600}>
                                <div className="mt-8 md:mt-10 flex items-center gap-3 md:gap-4 justify-center md:justify-start">
                                    {/* Google 'G' icon stylized */}
                                    <div className="flex-shrink-0">
                                        <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24">
                                             <path fill="#4285F4" d="M22.56,12.25C22.56,11.42,22.49,10.63,22.35,9.86H12.24V14.4H18.06C17.74,16.07,16.83,17.43,15.45,18.33V21.09H19.34C21.43,19.16,22.56,15.99,22.56,12.25Z"/>
                                             <path fill="#34A853" d="M12.24,23C15.11,23,17.5,22.1,19.34,20.55L15.45,17.79C14.51,18.44,13.46,18.8,12.24,18.8C9.89,18.8,7.91,17.2,7.1,15.08H3.14V17.94C4.98,21.05,8.32,23,12.24,23Z"/>
                                             <path fill="#FBBC05" d="M7.1,15.08C6.88,14.43,6.75,13.73,6.75,13C6.75,12.27,6.88,11.57,7.1,10.92V8.06H3.14C2.34,9.6,1.9,11.25,1.9,13C1.9,14.75,2.34,16.4,3.14,17.94L7.1,15.08Z"/>
                                             <path fill="#EA4335" d="M12.24,7.2C13.6,7.2,14.78,7.69,15.81,8.66L19.43,5.05C17.5,3.24,15.11,2,12.24,2C8.32,2,4.98,4.95,3.14,8.06L7.1,10.92C7.91,8.8,9.89,7.2,12.24,7.2Z"/>
                                         </svg>
                                    </div>
                                    <div className="text-left">
                                        <p className="font-semibold text-white text-sm md:text-xl">Google Rating</p>
                                        <div className="flex items-center gap-2 md:gap-3">
                                            <span className="font-bold text-white text-base md:text-xl">5.0</span>
                                            <StarRating />
                                        </div>
                                    </div>
                                </div>
                            </AnimatedComponent>
                        </div>

                        {/* Desktop Image Block - hidden on mobile */}
                        <div className="hidden md:block relative w-full md:w-1/2 max-w-5xl">
                            <AnimatedComponent delay={300}>
                                <div className="flex justify-center items-center w-full">
                                    <img
                                        src={imageUrl}
                                        alt="Starlink hardware dish and router"
                                        className="w-[130%] h-auto object-contain mx-auto"
                                        style={{
                                            maxWidth: 'none',
                                            display: 'block',
                                            marginLeft: 'auto',
                                            marginRight: 'auto',
                                            marginTop: '-1in',
                                            marginBottom: '0',
                                        }}
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.onerror = null;
                                            target.src = 'https://placehold.co/1200x700/000000/ffffff?text=Starlink+Hardware';
                                        }}
                                    />
                                </div>
                                {/* Gradient overlay for desktop */}
                                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
                            </AnimatedComponent>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};


// --- Main App Component ---
const App = () => {
    return (
        <div className="bg-black">
            <Hero />
            {/* You can add other sections of your website here */}
        </div>
    );
};

export default App;
