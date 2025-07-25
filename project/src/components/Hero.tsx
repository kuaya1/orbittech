import { Star } from 'lucide-react';

// --- Star Rating Component for Social Proof ---
const StarRating = () => (
    <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
        ))}
    </div>
);

// --- Hero Section with Pure CSS Animations ---
const Hero = () => {
    const imageUrl = '/Untitled design (20) resized.PNG';

    return (
        <section id="hero" className="w-full bg-black relative overflow-hidden">
            {/* Modern CSS Animations */}
            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes fadeInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                @keyframes fadeInRight {
                    from {
                        opacity: 0;
                        transform: translateX(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                @keyframes wordReveal {
                    from {
                        opacity: 0;
                        filter: blur(4px);
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        filter: blur(0px);
                        transform: translateY(0);
                    }
                }
                
                @keyframes scaleIn {
                    from {
                        opacity: 0;
                        transform: scale(0.8);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                
                .animate-fade-in-up {
                    animation: fadeInUp 0.8s ease-out forwards;
                }
                
                .animate-fade-in-left {
                    animation: fadeInLeft 0.8s ease-out forwards;
                }
                
                .animate-fade-in-right {
                    animation: fadeInRight 1s ease-out forwards;
                }
                
                .animate-scale-in {
                    animation: scaleIn 0.8s ease-out forwards;
                }
                
                .word-reveal {
                    animation: wordReveal 0.4s ease-in-out forwards;
                    opacity: 0;
                }
                
                /* Staggered word animations */
                .word-1 { animation-delay: 0.1s; }
                .word-2 { animation-delay: 0.2s; }
                .word-3 { animation-delay: 0.3s; }
                .word-4 { animation-delay: 0.4s; }
                .word-5 { animation-delay: 0.5s; }
                
                /* Component delays */
                .delay-800 { animation-delay: 0.8s; }
                .delay-1000 { animation-delay: 1.0s; }
                .delay-1200 { animation-delay: 1.2s; }
                .delay-1400 { animation-delay: 1.4s; }
                .delay-500 { animation-delay: 0.5s; }
                
                /* Hover effects */
                .hover-lift:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 25px rgba(255,255,255,0.1);
                }
                
                .hover-scale:hover {
                    transform: scale(1.05);
                }
                
                .hover-rotate:hover {
                    transform: scale(1.1) rotate(5deg);
                }
            `}</style>

            {/* Aceternity-inspired decorative lines */}
            <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-800/80">
                <div className="absolute top-20 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
            </div>
            <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-800/80">
                <div className="absolute top-20 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-800/80">
                <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Mobile-First Responsive Layout */}
                <div className="min-h-screen flex flex-col items-center justify-center text-center py-16 sm:py-20 relative z-10">

                    {/* Responsive Grid Layout */}
                    <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        
                        {/* Content Block - Mobile First */}
                        <div className="order-1 lg:order-1 space-y-6 sm:space-y-8 text-center lg:text-left animate-fade-in-left">
                            {/* 1. Enhanced Animated Title */}
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight leading-tight">
                                {"Professional Starlink Installation Service"
                                    .split(" ")
                                    .map((word, index) => (
                                        <span
                                            key={index}
                                            className={`word-reveal word-${Math.min(index + 1, 5)} inline-block mr-2`}
                                        >
                                            {word}
                                        </span>
                                    ))}
                            </h1>

                            {/* 2. Enhanced Subtitle */}
                            <p className="text-base sm:text-lg lg:text-xl text-neutral-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-in-up delay-800">
                                Get your Starlink professionally installed by certified experts serving the DMV area and beyond.
                            </p>

                            {/* 3. Mobile Image Block - Shows only on mobile */}
                            <div className="block lg:hidden relative animate-fade-in-up delay-1000">
                                <div className="relative w-full max-w-lg mx-auto">
                                    <img
                                        src={imageUrl}
                                        alt="Starlink hardware dish and router"
                                        className="w-full h-auto object-contain transition-transform duration-700 hover-scale"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.onerror = null;
                                            target.src = 'https://placehold.co/800x600/000000/ffffff?text=Starlink+Hardware';
                                        }}
                                    />
                                    {/* Subtle gradient overlay */}
                                    <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-black/20 to-transparent pointer-events-none"></div>
                                </div>
                            </div>

                            {/* 4. Enhanced Get Quote Button */}
                            <div className="animate-fade-in-up delay-1200">
                                <a 
                                    href="#contact" 
                                    className="inline-block bg-white text-black font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-lg hover:bg-neutral-100 active:bg-neutral-200 transition-all duration-300 text-base sm:text-lg shadow-lg hover-lift active:scale-95"
                                >
                                    Get Your Free Quote →
                                </a>
                            </div>

                            {/* 5. Enhanced Google Rating */}
                            <div className="flex items-center gap-3 sm:gap-4 justify-center lg:justify-start animate-fade-in-up delay-1400">
                                {/* Google 'G' icon stylized */}
                                <div className="flex-shrink-0 transition-transform duration-300 hover-rotate">
                                    <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24">
                                         <path fill="#4285F4" d="M22.56,12.25C22.56,11.42,22.49,10.63,22.35,9.86H12.24V14.4H18.06C17.74,16.07,16.83,17.43,15.45,18.33V21.09H19.34C21.43,19.16,22.56,15.99,22.56,12.25Z"/>
                                         <path fill="#34A853" d="M12.24,23C15.11,23,17.5,22.1,19.34,20.55L15.45,17.79C14.51,18.44,13.46,18.8,12.24,18.8C9.89,18.8,7.91,17.2,7.1,15.08H3.14V17.94C4.98,21.05,8.32,23,12.24,23Z"/>
                                         <path fill="#FBBC05" d="M7.1,15.08C6.88,14.43,6.75,13.73,6.75,13C6.75,12.27,6.88,11.57,7.1,10.92V8.06H3.14C2.34,9.6,1.9,11.25,1.9,13C1.9,14.75,2.34,16.4,3.14,17.94L7.1,15.08Z"/>
                                         <path fill="#EA4335" d="M12.24,7.2C13.6,7.2,14.78,7.69,15.81,8.66L19.43,5.05C17.5,3.24,15.11,2,12.24,2C8.32,2,4.98,4.95,3.14,8.06L7.1,10.92C7.91,8.8,9.89,7.2,12.24,7.2Z"/>
                                     </svg>
                                </div>
                                <div className="text-left">
                                    <p className="font-semibold text-white text-sm sm:text-base lg:text-lg">Google Rating</p>
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <span className="font-bold text-white text-base sm:text-lg lg:text-xl">5.0</span>
                                        <div className="animate-fade-in-up delay-1400">
                                            <StarRating />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Desktop Image Block - Hidden on mobile */}
                        <div className="order-2 lg:order-2 relative animate-fade-in-right delay-500 hidden lg:block">
                            <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
                                <img
                                    src={imageUrl}
                                    alt="Starlink hardware dish and router"
                                    className="w-full h-auto object-contain transition-transform duration-700 hover-scale"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.onerror = null;
                                        target.src = 'https://placehold.co/800x600/000000/ffffff?text=Starlink+Hardware';
                                    }}
                                />
                                {/* Subtle gradient overlay */}
                                <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-black/20 to-transparent pointer-events-none"></div>
                            </div>
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
