import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

// A custom hook for the Intersection Observer API to handle scroll animations.
const useIntersectionObserver = (options) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLElement>(null);

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

const BackgroundImage = ({ imageUrl }) => (
    <>
        {/* Background Image */}
        <div 
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
                backgroundImage: `url(${imageUrl})`,
            }}
        ></div>
        {/* Dark Gradient Overlay */}
        <div 
            className="absolute inset-0 z-10"
            style={{
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 100%)'
            }}
        ></div>
    </>
);


const Hero = () => {
    const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    const animationStyle = (delay: number) => ({
        transition: 'opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)',
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    });

    const calciteBlue = '#0079c1';
    const backgroundImageUrl = '/starlink-dmv-23.png';

    return (
        <section 
            ref={sectionRef as React.RefObject<HTMLElement>}
            id="hero" 
            className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-black font-sans"
        >
            <BackgroundImage imageUrl={backgroundImageUrl} />
            
            <div className="relative z-20 text-center px-4">
                <div style={animationStyle(0)}>
                    {/* FIX: Updated the main headline */}
                    <h1 className="text-[2.42rem] md:text-7xl font-medium text-white tracking-tighter max-w-4xl mx-auto leading-tight">
                        Get Your Starlink Installed by Experts.
                    </h1>
                </div>
                
                <div style={animationStyle(200)}>
                    {/* FIX: Updated the subtitle to complement the new headline */}
                    <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-neutral-200 leading-relaxed">
                        We provide professional installation for your home and business, ensuring you experience high-speed, reliable internet without compromise.
                    </p>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4" style={animationStyle(400)}>
                    <a
                        href="#contact"
                        className="group inline-flex items-center justify-center px-8 py-4 text-lg text-white font-medium rounded-full
                                   transition-all duration-300 ease-in-out disabled:bg-neutral-800 disabled:text-neutral-500 disabled:cursor-not-allowed"
                        style={{ backgroundColor: calciteBlue, '--hover-bg': '#005a9e' }}
                        onMouseOver={e => e.currentTarget.style.backgroundColor = getComputedStyle(e.currentTarget).getPropertyValue('--hover-bg')}
                        onMouseOut={e => e.currentTarget.style.backgroundColor = calciteBlue}
                    >
                        <span>Get a Quote</span>
                        <ArrowRight className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                    <a
                        href="#faq"
                        className="group inline-flex items-center justify-center px-8 py-4 text-lg text-neutral-200 font-medium rounded-full
                                   bg-black/20 hover:bg-black/40 backdrop-blur-sm
                                   transition-all duration-300 ease-in-out"
                    >
                        <span>Learn More</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
