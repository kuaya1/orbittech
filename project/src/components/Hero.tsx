import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

// --- CSS for Grid Pattern ---
const gridPatternStyle = `
.bg-grid-pattern {
  background-image: 
    linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
  background-size: 50px 50px;
}
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = gridPatternStyle;
  document.head.appendChild(styleElement);
}

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
            className="w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Background Pattern Overlay */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-grid-pattern"></div>
            </div>
            
            {/* Floating Elements Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Modern Hero Layout */}
                <div className="min-h-screen flex flex-col items-center justify-center text-center py-16 sm:py-20">

                    {/* Enhanced Grid Layout with Modern Spacing */}
                    <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        
                        {/* Modern Content Block - Enhanced Typography */}
                        <motion.div 
                            className="order-1 lg:order-1 lg:col-span-7 space-y-8 sm:space-y-10 text-center lg:text-left"
                            variants={slideInLeft}
                        >
                            {/* Modern Badge/Tag */}
                            <motion.div 
                                className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white/90 font-medium"
                                variants={fadeInUp}
                                transition={{ delay: 0.4 }}
                            >
                                ⭐ Certified Starlink Professionals
                            </motion.div>

                            {/* Enhanced Modern Title */}
                            <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                                {"Professional Starlink Installation Service"
                                    .split(" ")
                                    .map((word, index) => (
                                        <motion.span
                                            key={index}
                                            variants={wordReveal}
                                            custom={index}
                                            className="inline-block mr-3"
                                        >
                                            {word === "Starlink" ? (
                                                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                                    {word}
                                                </span>
                                            ) : (
                                                word
                                            )}
                                        </motion.span>
                                    ))}
                            </motion.h1>

                            {/* Enhanced Modern Subtitle */}
                            <motion.p 
                                className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light"
                                variants={fadeInUp}
                                transition={{ delay: 0.8 }}
                            >
                                Get your Starlink professionally installed by certified experts serving the 
                                <span className="text-blue-400 font-medium"> DMV area</span> and beyond.
                            </motion.p>

                            {/* Modern CTA Buttons */}
                            <motion.div 
                                className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start"
                                variants={fadeInUp}
                                transition={{ delay: 1.2 }}
                            >
                                <motion.a 
                                    href="#contact" 
                                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 text-lg shadow-2xl overflow-hidden"
                                    whileHover={{ 
                                        y: -3, 
                                        scale: 1.02,
                                        boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)",
                                        transition: { duration: 0.3, ease: "easeOut" }
                                    }}
                                    whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
                                >
                                    <span className="relative z-10">Get Free Quote</span>
                                    <motion.div 
                                        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700"
                                        initial={{ x: '-100%' }}
                                        whileHover={{ x: 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <svg className="w-5 h-5 ml-2 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </motion.a>
                                
                                <motion.a 
                                    href="#services" 
                                    className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/20 text-lg"
                                    whileHover={{ 
                                        y: -2, 
                                        scale: 1.02,
                                        borderColor: "rgba(255,255,255,0.4)",
                                        transition: { duration: 0.3, ease: "easeOut" }
                                    }}
                                    whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
                                >
                                    View Services
                                </motion.a>
                            </motion.div>

                            {/* Modern Stats/Rating Section */}
                            <motion.div 
                                className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 justify-center lg:justify-start"
                                variants={fadeInUp}
                                transition={{ delay: 1.6 }}
                            >
                                {/* Google Rating Card */}
                                <motion.div 
                                    className="flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4"
                                    whileHover={{ 
                                        scale: 1.05,
                                        backgroundColor: "rgba(255,255,255,0.15)",
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    <motion.div 
                                        className="flex-shrink-0"
                                        whileHover={{ 
                                            scale: 1.15, 
                                            rotate: 8,
                                            transition: { type: "spring", stiffness: 400, damping: 15 }
                                        }}
                                    >
                                        <svg className="w-8 h-8" viewBox="0 0 24 24">
                                             <path fill="#4285F4" d="M22.56,12.25C22.56,11.42,22.49,10.63,22.35,9.86H12.24V14.4H18.06C17.74,16.07,16.83,17.43,15.45,18.33V21.09H19.34C21.43,19.16,22.56,15.99,22.56,12.25Z"/>
                                             <path fill="#34A853" d="M12.24,23C15.11,23,17.5,22.1,19.34,20.55L15.45,17.79C14.51,18.44,13.46,18.8,12.24,18.8C9.89,18.8,7.91,17.2,7.1,15.08H3.14V17.94C4.98,21.05,8.32,23,12.24,23Z"/>
                                             <path fill="#FBBC05" d="M7.1,15.08C6.88,14.43,6.75,13.73,6.75,13C6.75,12.27,6.88,11.57,7.1,10.92V8.06H3.14C2.34,9.6,1.9,11.25,1.9,13C1.9,14.75,2.34,16.4,3.14,17.94L7.1,15.08Z"/>
                                             <path fill="#EA4335" d="M12.24,7.2C13.6,7.2,14.78,7.69,15.81,8.66L19.43,5.05C17.5,3.24,15.11,2,12.24,2C8.32,2,4.98,4.95,3.14,8.06L7.1,10.92C7.91,8.8,9.89,7.2,12.24,7.2Z"/>
                                         </svg>
                                    </motion.div>
                                    <div className="text-left">
                                        <p className="font-semibold text-white text-sm">Google Rating</p>
                                        <div className="flex items-center gap-2">
                                            <span className="font-bold text-white text-xl">5.0</span>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 2.0, duration: 0.8 }}
                                            >
                                                <StarRating />
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Service Coverage Badge */}
                                <motion.div 
                                    className="flex items-center gap-2 text-gray-300"
                                    variants={fadeInUp}
                                    transition={{ delay: 1.8 }}
                                >
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                    <span className="text-sm font-medium">Serving 50+ locations</span>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Modern Image Block - Enhanced Design */}
                        <motion.div 
                            className="order-2 lg:order-2 lg:col-span-5 relative"
                            variants={slideInRight}
                        >
                            <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
                                {/* Modern Floating Card Effect */}
                                <motion.div 
                                    className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-2xl"
                                    whileHover={{ 
                                        y: -10,
                                        scale: 1.02,
                                        rotateY: 5,
                                        transition: { duration: 0.5, ease: "easeOut" }
                                    }}
                                >
                                    <motion.img
                                        src={imageUrl}
                                        alt="Starlink hardware dish and router"
                                        className="w-full h-auto object-contain"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.onerror = null;
                                            target.src = 'https://placehold.co/800x600/000000/ffffff?text=Starlink+Hardware';
                                        }}
                                        whileHover={{ 
                                            scale: 1.05,
                                            transition: { duration: 0.3 }
                                        }}
                                    />
                                    
                                    {/* Floating Elements */}
                                    <motion.div 
                                        className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-70"
                                        animate={{ 
                                            y: [0, -10, 0],
                                            rotate: [0, 180, 360]
                                        }}
                                        transition={{ 
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />
                                    <motion.div 
                                        className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-60"
                                        animate={{ 
                                            y: [0, 10, 0],
                                            rotate: [360, 180, 0]
                                        }}
                                        transition={{ 
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: 1
                                        }}
                                    />
                                </motion.div>

                                {/* Modern Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl -z-10 opacity-60"></div>
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
