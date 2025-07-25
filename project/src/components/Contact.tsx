import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
    const [scrollY, setScrollY] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);

    // Modern scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                const scrollProgress = Math.max(0, Math.min(1, 
                    1 - (rect.bottom / (window.innerHeight + rect.height))
                ));
                setScrollY(scrollProgress);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Dynamic styles based on scroll
    const backgroundStyle: React.CSSProperties = {
        backgroundImage: `url('/Starlink_Rural_Location_02a-scaled.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: `center ${50 + scrollY * 20}%`,
        backgroundAttachment: 'fixed',
        transform: `scale(${1 + scrollY * 0.1})`,
        transition: 'transform 0.3s ease-out'
    };

    const cardTransform = {
        transform: `perspective(1000px) rotateX(${scrollY * 5}deg) translateZ(${scrollY * 20}px)`,
        transition: 'transform 0.3s ease-out'
    };

    return (
        <section 
            ref={sectionRef}
            id="contact" 
            className="py-24 sm:py-32 relative overflow-hidden"
            style={backgroundStyle}
        >
            {/* Light gradient filter for contrast */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/20 to-black/40 backdrop-blur-[1px]" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl leading-tight drop-shadow-lg">
                        Get a Free Quote
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-100 drop-shadow-md">
                        Have questions? We're here to help. Reach out to us for a no-obligation consultation.
                    </p>
                </div>

                {/* Main Glassmorphism Container with scroll effects */}
                <div 
                    className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden
                               bg-white/25 backdrop-filter backdrop-blur-xl shadow-2xl border border-white/40"
                    style={cardTransform}
                >
                    
                    {/* Information Card (Left Side) */}
                    <div className="p-8 sm:p-12 text-gray-800">
                        <h3 className="text-2xl font-bold mb-2 text-black drop-shadow-sm">Contact Information</h3>
                        <p className="mb-8 text-gray-700">Fill out the form and our team will get back to you within 24 hours.</p>
                        
                        <div className="space-y-6">
                            <div className="flex items-center group hover:scale-105 transition-transform duration-300">
                                <div className="p-2 rounded-full bg-white/60 backdrop-blur-sm mr-4">
                                    <Phone className="w-5 h-5 text-gray-800" />
                                </div>
                                <a href="tel:+15719996915" className="hover:text-black transition-colors text-gray-900">
                                    (571) 999-6915
                                </a>
                            </div>
                            <div className="flex items-center group hover:scale-105 transition-transform duration-300">
                                <div className="p-2 rounded-full bg-white/60 backdrop-blur-sm mr-4">
                                    <Mail className="w-5 h-5 text-gray-800" />
                                </div>
                                <a href="mailto:contact@theorbittech.com" className="hover:text-black transition-colors text-gray-900">
                                    contact@theorbittech.com
                                </a>
                            </div>
                            <div className="flex items-start group hover:scale-105 transition-transform duration-300">
                                <div className="p-2 rounded-full bg-white/60 backdrop-blur-sm mr-4 mt-1">
                                    <MapPin className="w-5 h-5 text-gray-800" />
                                </div>
                                <span className="text-gray-900">
                                    Serving the entire DMV Area<br/>(DC, Maryland, Virginia)
                                </span>
                            </div>
                            <div className="flex items-start pt-4 border-t border-white/50 group hover:scale-105 transition-transform duration-300">
                                <div className="p-2 rounded-full bg-white/60 backdrop-blur-sm mr-4 mt-1">
                                    <Clock className="w-5 h-5 text-gray-800" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-black">Business Hours</h4>
                                    <p className="text-gray-700">Mon - Fri: 9:00 AM - 6:00 PM</p>
                                    <p className="text-gray-700">Sat: 10:00 AM - 5:00 PM</p>
                                    <p className="text-gray-700">Sun: Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form (Right Side) */}
                    <div className="p-8 sm:p-12 bg-white/40 backdrop-blur-sm">
                        <form action="#" method="POST" className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-800">Full Name</label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        autoComplete="name"
                                        className="block w-full px-4 py-3 rounded-xl bg-white/70 border border-white/60 backdrop-blur-sm
                                                 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-600
                                                 shadow-sm transition-all duration-300 hover:bg-white/80"
                                        placeholder="John Doe"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-800">Email</label>
                                <div className="mt-1">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        className="block w-full px-4 py-3 rounded-xl bg-white/70 border border-white/60 backdrop-blur-sm
                                                 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-600
                                                 shadow-sm transition-all duration-300 hover:bg-white/80"
                                        placeholder="you@example.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-800">Phone</label>
                                <div className="mt-1">
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        autoComplete="tel"
                                        className="block w-full px-4 py-3 rounded-xl bg-white/70 border border-white/60 backdrop-blur-sm
                                                 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-600
                                                 shadow-sm transition-all duration-300 hover:bg-white/80"
                                        placeholder="(555) 123-4567"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-800">Message</label>
                                <div className="mt-1">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="block w-full px-4 py-3 rounded-xl bg-white/70 border border-white/60 backdrop-blur-sm
                                                 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder-gray-600
                                                 shadow-sm transition-all duration-300 hover:bg-white/80 resize-none"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-lg text-base font-medium text-white 
                                             bg-black/80 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black 
                                             transition-all duration-300 transform hover:scale-105 active:scale-95 backdrop-blur-sm"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
