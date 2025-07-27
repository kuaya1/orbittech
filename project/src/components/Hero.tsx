import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

// --- Star Rating Component for Social Proof ---
const StarRating = () => (
    <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
        ))}
    </div>
);

// --- Hero Section with Framer Motion Animations ---
const Hero = () => {
    const imageUrl = '/Untitled design (20) resizeddd.PNG';

    // Animation variants for slower, smoother motion
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.4,
                delayChildren: 0.3,
                duration: 1.2
            }
        }
    };

    const slideInLeft = {
        hidden: { opacity: 0, x: -80, scale: 0.95 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                type: "spring" as const,
                damping: 35,
                stiffness: 60,
                duration: 1.8
            }
        }
    };

    const slideInRight = {
        hidden: { opacity: 0, x: 80, scale: 0.95 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                type: "spring" as const,
                damping: 35,
                stiffness: 60,
                duration: 2.0,
                delay: 0.8
            }
        }
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 50, scale: 0.98 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring" as const,
                damping: 30,
                stiffness: 50,
                duration: 1.5
            }
        }
    };

    const wordReveal = {
        hidden: { opacity: 0, y: 20, rotateX: -10 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                type: "spring" as const,
                damping: 30,
                stiffness: 80,
                duration: 1.0
            }
        }
    };

    return (
        <motion.section 
            id="hero" 
            className="w-full bg-black relative overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Mobile-First Responsive Layout */}
                <div className="min-h-screen flex flex-col items-center justify-center text-center py-16 sm:py-20 relative z-10">

                    {/* Responsive Grid Layout */}
                    <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        
                        {/* Content Block - Mobile First */}
                        <motion.div 
                            className="order-1 lg:order-1 space-y-6 sm:space-y-8 text-center lg:text-left -mt-17 lg:mt-0"
                            variants={slideInLeft}
                        >
                            {/* 1. Clean Bold Title - Gladia Style */}
                            <motion.h1 className="text-[2.5rem] sm:text-[2.6rem] lg:text-[3.3rem] xl:text-[4rem] font-bold tracking-tight leading-tight">
                                {"Professional Starlink Installation Service"
                                    .split(" ")
                                    .map((word, index) => (
                                        <motion.span
                                            key={index}
                                            variants={wordReveal}
                                            custom={index}
                                            className="inline-block mr-2"
                                            style={{
                                                background: 'linear-gradient(180deg, #ffffff 0%, #e2e8f0 100%)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                backgroundClip: 'text',
                                            }}
                                        >
                                            {word}
                                        </motion.span>
                                    ))}
                            </motion.h1>

                            {/* 2. Clean Subtitle - Gladia Style */}
                            <motion.p 
                                className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium"
                                variants={fadeInUp}
                                transition={{ delay: 0.8 }}
                                style={{
                                    color: '#94a3b8',
                                    lineHeight: '1.6'
                                }}
                            >
                                A complete installation service that eliminates connectivity issues and drastically improves your internet experience. Professional setup with same-day installation in the DMV area.
                            </motion.p>

                            {/* 3. Mobile Image Block - Shows only on mobile - 15% bigger */}
                            <motion.div 
                                className="block lg:hidden relative -mt-12 pb-4"
                                variants={fadeInUp}
                                transition={{ delay: 1.2 }}
                            >
                                <div className="relative w-full max-w-lg mx-auto">
                                    <motion.img
                                        src={imageUrl}
                                        alt="Starlink hardware dish and router"
                                        className="w-full h-auto object-contain scale-[1.15]"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.onerror = null;
                                            target.src = 'https://placehold.co/800x600/000000/ffffff?text=Starlink+Hardware';
                                        }}
                                    />
                                    {/* Subtle gradient overlay */}
                                    <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-black/20 to-transparent pointer-events-none"></div>
                                </div>
                            </motion.div>

                            {/* 4. Enhanced Get Quote Button - Mobile Only */}
                            <motion.div 
                                className="block lg:hidden mt-38 pt-2"
                                variants={fadeInUp}
                                transition={{ delay: 1.6 }}
                            >
                                <motion.a 
                                    href="#contact" 
                                    className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 text-base shadow-lg"
                                    whileHover={{ 
                                        y: -3, 
                                        scale: 1.02,
                                        boxShadow: "0 15px 35px rgba(255,255,255,0.15)",
                                        backgroundColor: "#f5f5f5",
                                        transition: { duration: 0.3, ease: "easeOut" }
                                    }}
                                    whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
                                >
                                    Get Your Free Quote →
                                </motion.a>
                            </motion.div>

                            {/* 5. Enhanced Get Quote Button - Desktop Only */}
                            <motion.div 
                                className="hidden lg:block"
                                variants={fadeInUp}
                                transition={{ delay: 1.6 }}
                            >
                                <motion.a 
                                    href="#contact" 
                                    className="inline-block bg-white text-black font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-lg transition-all duration-300 text-base sm:text-lg shadow-lg"
                                    whileHover={{ 
                                        y: -3, 
                                        scale: 1.02,
                                        boxShadow: "0 15px 35px rgba(255,255,255,0.15)",
                                        backgroundColor: "#f5f5f5",
                                        transition: { duration: 0.3, ease: "easeOut" }
                                    }}
                                    whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
                                >
                                    Get Your Free Quote →
                                </motion.a>
                            </motion.div>

                            {/* 6. Enhanced Google Rating - Desktop Only */}
                            <motion.div 
                                className="hidden lg:flex items-center gap-3 sm:gap-4 justify-center lg:justify-start"
                                variants={fadeInUp}
                                transition={{ delay: 2.0 }}
                            >
                                {/* Google 'G' icon stylized */}
                                <motion.div 
                                    className="flex-shrink-0"
                                    whileHover={{ 
                                        scale: 1.15, 
                                        rotate: 8,
                                        transition: { type: "spring", stiffness: 400, damping: 15 }
                                    }}
                                >
                                    <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24">
                                         <path fill="#4285F4" d="M22.56,12.25C22.56,11.42,22.49,10.63,22.35,9.86H12.24V14.4H18.06C17.74,16.07,16.83,17.43,15.45,18.33V21.09H19.34C21.43,19.16,22.56,15.99,22.56,12.25Z"/>
                                         <path fill="#34A853" d="M12.24,23C15.11,23,17.5,22.1,19.34,20.55L15.45,17.79C14.51,18.44,13.46,18.8,12.24,18.8C9.89,18.8,7.91,17.2,7.1,15.08H3.14V17.94C4.98,21.05,8.32,23,12.24,23Z"/>
                                         <path fill="#FBBC05" d="M7.1,15.08C6.88,14.43,6.75,13.73,6.75,13C6.75,12.27,6.88,11.57,7.1,10.92V8.06H3.14C2.34,9.6,1.9,11.25,1.9,13C1.9,14.75,2.34,16.4,3.14,17.94L7.1,15.08Z"/>
                                         <path fill="#EA4335" d="M12.24,7.2C13.6,7.2,14.78,7.69,15.81,8.66L19.43,5.05C17.5,3.24,15.11,2,12.24,2C8.32,2,4.98,4.95,3.14,8.06L7.1,10.92C7.91,8.8,9.89,7.2,12.24,7.2Z"/>
                                     </svg>
                                </motion.div>
                                <div className="text-left">
                                    <p className="font-semibold text-white text-sm sm:text-base lg:text-lg">Google Rating</p>
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <span className="font-bold text-white text-base sm:text-lg lg:text-xl">5.0</span>
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 2.4, duration: 0.8 }}
                                        >
                                            <StarRating />
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Desktop Image Block - Hidden on mobile */}
                        <motion.div 
                            className="order-2 lg:order-2 relative hidden lg:block"
                            variants={slideInRight}
                        >
                            <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
                                <motion.img
                                    src={imageUrl}
                                    alt="Starlink hardware dish and router"
                                    className="w-full h-auto object-contain scale-[1.26]"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.onerror = null;
                                        target.src = 'https://placehold.co/800x600/000000/ffffff?text=Starlink+Hardware';
                                    }}
                                />
                                {/* Subtle gradient overlay */}
                                <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-black/20 to-transparent pointer-events-none"></div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </motion.section>
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
