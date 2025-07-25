import React from 'react';
import { Phone, Mail, MapPin, Building, Clock } from 'lucide-react';
import backgroundImage from '../assets/images/satelite-bg.jpg'; // Using a suitable background for the effect

const Contact = () => {
    // Main container style to apply the background image
    const sectionStyle: React.CSSProperties = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
    };

    return (
        <section id="contact" className="py-24 sm:py-32" style={sectionStyle}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl leading-tight">
                        Get a Free Quote
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-200">
                        Have questions? We're here to help. Reach out to us for a no-obligation consultation.
                    </p>
                </div>

                {/* Main Glassmorphism Container */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden
                                bg-white/20 backdrop-filter backdrop-blur-xl shadow-2xl border border-white/30">
                    
                    {/* Information Card (Left Side) */}
                    <div className="p-8 sm:p-12 text-gray-800">
                        <h3 className="text-2xl font-bold mb-2 text-black">Contact Information</h3>
                        <p className="mb-8 text-gray-600">Fill out the form and our team will get back to you within 24 hours.</p>
                        
                        <div className="space-y-6">
                            <div className="flex items-center">
                                <Phone className="w-5 h-5 mr-4 text-gray-700" />
                                <a href="tel:+15719996915" className="hover:text-black transition-colors">(571) 999-6915</a>
                            </div>
                            <div className="flex items-center">
                                <Mail className="w-5 h-5 mr-4 text-gray-700" />
                                <a href="mailto:contact@theorbittech.com" className="hover:text-black transition-colors">contact@theorbittech.com</a>
                            </div>
                            <div className="flex items-start">
                                <MapPin className="w-5 h-5 mr-4 mt-1 text-gray-700" />
                                <span>Serving the entire DMV Area<br/>(DC, Maryland, Virginia)</span>
                            </div>
                             <div className="flex items-start pt-4 border-t border-white/50">
                                <Clock className="w-5 h-5 mr-4 mt-1 text-gray-700" />
                                <div>
                                    <h4 className="font-semibold text-black">Business Hours</h4>
                                    <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                                    <p className="text-gray-600">Sat: 10:00 AM - 4:00 PM</p>
                                    <p className="text-gray-600">Sun: Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form (Right Side) */}
                    <div className="p-8 sm:p-12 bg-white/30">
                        <form action="#" method="POST" className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        autoComplete="name"
                                        className="block w-full px-4 py-3 rounded-md bg-white/80 border-transparent focus:ring-2 focus:ring-black focus:border-transparent text-black placeholder-gray-500"
                                        placeholder="John Doe"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <div className="mt-1">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        className="block w-full px-4 py-3 rounded-md bg-white/80 border-transparent focus:ring-2 focus:ring-black focus:border-transparent text-black placeholder-gray-500"
                                        placeholder="you@example.com"
                                    />
                                </div>
                            </div>
                             <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                                <div className="mt-1">
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        autoComplete="tel"
                                        className="block w-full px-4 py-3 rounded-md bg-white/80 border-transparent focus:ring-2 focus:ring-black focus:border-transparent text-black placeholder-gray-500"
                                        placeholder="(555) 123-4567"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <div className="mt-1">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="block w-full px-4 py-3 rounded-md bg-white/80 border-transparent focus:ring-2 focus:ring-black focus:border-transparent text-black placeholder-gray-500"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all duration-300"
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
