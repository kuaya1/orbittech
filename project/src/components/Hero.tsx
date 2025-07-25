import { Star } from 'lucide-react';
import { motion } from 'motion/react';

// --- Star Rating Component for Social Proof ---
const StarRating = () => (
    <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
        ))}
    </div>
);


// --- Hero Section with Enhanced Aceternity Design ---
const Hero = () => {
    const imageUrl = '/Untitled design (20) resized.PNG';

    return (
        <section id="hero" className="w-full bg-black font-sans antialiased relative">
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

            <div className="container mx-auto px-6 sm:px-8">
                {/* Main content container - mobile optimized layout */}
                <div className="min-h-screen flex flex-col items-center justify-center text-center py-20 relative z-10">

                    {/* Mobile Layout: Title, Subtitle, Image, Button, Rating */}
                    <div className="w-full max-w-4xl md:mt-[1.5in] flex flex-col md:flex-row md:items-center md:gap-12">
                        
                        {/* Content Block - Desktop Left, Mobile Top */}
                        <div className="w-full md:w-1/2 md:text-left">
                            {/* 1. Enhanced Animated Title */}
                            <motion.h1 
                                className="text-[2.2rem] md:text-[4.5rem] font-bold text-white tracking-tight leading-tight"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                {"Expert Starlink Installation in the DMV"
                                    .split(" ")
                                    .map((word, index) => (
                                        <motion.span
                                            key={index}
                                            initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                                            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                            transition={{
                                                duration: 0.4,
                                                delay: index * 0.1,
                                                ease: "easeInOut",
                                            }}
                                            className="mr-2 inline-block"
                                        >
                                            {word}
                                        </motion.span>
                                    ))}
                            </motion.h1>

                            {/* 2. Enhanced Animated Subtitle */}
                            <motion.p 
                                className="mt-6 md:mt-8 text-[0.95rem] md:text-[1.5625rem] text-neutral-300 leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                            >
                                Guaranteed perfect installation by certified professionals. Get speeds up to 250 Mbps with same-day service across VA, MD & DC.
                            </motion.p>

                            {/* Mobile Image Block - positioned after subtitle on mobile */}
                            <div className="md:hidden relative w-full mt-8 mb-8">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
                                >
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
                                </motion.div>
                            </div>

                            {/* 4. Enhanced Get Quote Button */}
                            <motion.div 
                                className="mt-6 md:mt-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                            >
                                <motion.a 
                                    href="#contact" 
                                    className="inline-block shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-6 py-3 md:px-8 md:py-3 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear text-base md:text-lg"
                                    whileHover={{ 
                                        y: -2
                                    }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Get Your Free Quote →
                                </motion.a>
                            </motion.div>

                            {/* 5. Enhanced Google Rating */}
                            <motion.div 
                                className="mt-8 md:mt-10 flex items-center gap-3 md:gap-4 justify-center md:justify-start"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
                            >
                                {/* Google 'G' icon stylized */}
                                <motion.div 
                                    className="flex-shrink-0"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24">
                                         <path fill="#4285F4" d="M22.56,12.25C22.56,11.42,22.49,10.63,22.35,9.86H12.24V14.4H18.06C17.74,16.07,16.83,17.43,15.45,18.33V21.09H19.34C21.43,19.16,22.56,15.99,22.56,12.25Z"/>
                                         <path fill="#34A853" d="M12.24,23C15.11,23,17.5,22.1,19.34,20.55L15.45,17.79C14.51,18.44,13.46,18.8,12.24,18.8C9.89,18.8,7.91,17.2,7.1,15.08H3.14V17.94C4.98,21.05,8.32,23,12.24,23Z"/>
                                         <path fill="#FBBC05" d="M7.1,15.08C6.88,14.43,6.75,13.73,6.75,13C6.75,12.27,6.88,11.57,7.1,10.92V8.06H3.14C2.34,9.6,1.9,11.25,1.9,13C1.9,14.75,2.34,16.4,3.14,17.94L7.1,15.08Z"/>
                                         <path fill="#EA4335" d="M12.24,7.2C13.6,7.2,14.78,7.69,15.81,8.66L19.43,5.05C17.5,3.24,15.11,2,12.24,2C8.32,2,4.98,4.95,3.14,8.06L7.1,10.92C7.91,8.8,9.89,7.2,12.24,7.2Z"/>
                                     </svg>
                                </motion.div>
                                <div className="text-left">
                                    <p className="font-semibold text-white text-sm md:text-xl">Google Rating</p>
                                    <div className="flex items-center gap-2 md:gap-3">
                                        <span className="font-bold text-white text-base md:text-xl">5.0</span>
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 1.6, duration: 0.5 }}
                                        >
                                            <StarRating />
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Desktop Image Block - redesigned order, no container, 200% bigger */}
                        <div className="hidden md:block relative w-full md:w-1/2 max-w-5xl">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, x: 50 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                                className="relative"
                            >
                                {/* Remove container - direct image display at 200% size */}
                                <img
                                    src={imageUrl}
                                    alt="Starlink hardware dish and router"
                                    className="w-[200%] h-auto object-contain mx-auto transition-transform duration-700 hover:scale-105"
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
                                {/* Simplified gradient overlay */}
                                <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-black/30 to-transparent pointer-events-none"></div>
                            </motion.div>
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
