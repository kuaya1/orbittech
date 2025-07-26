import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <section 
            id="contact" 
            className="py-24 sm:py-32 relative overflow-hidden bg-black"
        >
            {/* Full Background Image - Desktop Only */}
            <div className="absolute inset-0 hidden lg:block">
                <img 
                    src="/Starlink_Rural_Location_02a-scaled.jpg" 
                    alt="Starlink satellite dish on roof"
                    className="w-full h-full object-cover opacity-30 scale-110"
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl sm:text-5xl font-medium text-neutral-50 tracking-tighter leading-tight mb-6">
                        Get a Free Quote
                    </h2>
                    <p className="text-lg leading-8 text-neutral-400 max-w-2xl mx-auto">
                        Have questions? We're here to help. Reach out to us for a no-obligation consultation.
                    </p>
                </div>

                {/* Modern Minimal Container */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                    
                    {/* Information Card - Minimal Design */}
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-2xl font-medium text-neutral-50 mb-8 tracking-tighter">Contact Information</h3>
                            <p className="text-neutral-400 leading-relaxed">
                                Fill out the form and our team will get back to you within 24 hours.
                            </p>
                        </div>
                        
                        <div className="space-y-8">
                            <div className="flex items-center group">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mr-6 group-hover:bg-white/10 transition-all duration-300">
                                    <Phone className="w-8 h-8 text-blue-500" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <p className="text-neutral-500 text-sm uppercase tracking-wider mb-1">Phone</p>
                                    <a href="tel:+15719996915" className="text-neutral-50 hover:text-neutral-300 transition-colors text-lg font-medium">
                                        (571) 999-6915
                                    </a>
                                </div>
                            </div>
                            
                            <div className="flex items-center group">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mr-6 group-hover:bg-white/10 transition-all duration-300">
                                    <Mail className="w-8 h-8 text-blue-500" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <p className="text-neutral-500 text-sm uppercase tracking-wider mb-1">Email</p>
                                    <a href="mailto:contact@theorbittech.com" className="text-neutral-50 hover:text-neutral-300 transition-colors text-lg font-medium">
                                        contact@theorbittech.com
                                    </a>
                                </div>
                            </div>
                            
                            <div className="flex items-start group">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mr-6 group-hover:bg-white/10 transition-all duration-300 mt-1">
                                    <MapPin className="w-8 h-8 text-blue-500" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <p className="text-neutral-500 text-sm uppercase tracking-wider mb-1">Service Area</p>
                                    <span className="text-neutral-50 text-lg font-medium">
                                        DMV Area<br/>
                                        <span className="text-neutral-400 text-base">DC, Maryland, Virginia</span>
                                    </span>
                                </div>
                            </div>
                            
                            <div className="pt-8 border-t border-white/10">
                                <div className="flex items-start group">
                                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mr-6 group-hover:bg-white/10 transition-all duration-300 mt-1">
                                        <Clock className="w-8 h-8 text-blue-500" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <p className="text-neutral-500 text-sm uppercase tracking-wider mb-3">Business Hours</p>
                                        <div className="space-y-1">
                                            <p className="text-neutral-50 font-medium">Mon - Fri: 9:00 AM - 6:00 PM</p>
                                            <p className="text-neutral-50 font-medium">Sat: 10:00 AM - 5:00 PM</p>
                                            <p className="text-neutral-400 font-medium">Sun: Closed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Modern Contact Form - Removed Glassmorphism */}
                    <div className="bg-white/5 border border-white/20 rounded-2xl p-8 sm:p-12">
                        <form action="#" method="POST" className="space-y-8">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-neutral-400 mb-3 uppercase tracking-wider">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    autoComplete="name"
                                    className="block w-full px-0 py-4 bg-transparent border-0 border-b border-white/20 
                                             focus:border-white focus:ring-0 text-white placeholder-neutral-500 
                                             transition-all duration-300 font-light text-lg focus:outline-none"
                                    placeholder="John Doe"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-3 uppercase tracking-wider">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="email"
                                    className="block w-full px-0 py-4 bg-transparent border-0 border-b border-white/20 
                                             focus:border-white focus:ring-0 text-white placeholder-neutral-500 
                                             transition-all duration-300 font-light text-lg focus:outline-none"
                                    placeholder="you@example.com"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-neutral-400 mb-3 uppercase tracking-wider">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    autoComplete="tel"
                                    className="block w-full px-0 py-4 bg-transparent border-0 border-b border-white/20 
                                             focus:border-white focus:ring-0 text-white placeholder-neutral-500 
                                             transition-all duration-300 font-light text-lg focus:outline-none"
                                    placeholder="(555) 123-4567"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-neutral-400 mb-3 uppercase tracking-wider">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="block w-full px-0 py-4 bg-transparent border-0 border-b border-white/20 
                                             focus:border-white focus:ring-0 text-white placeholder-neutral-500 
                                             transition-all duration-300 font-light text-lg resize-none focus:outline-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>
                            
                            <div className="pt-8">
                                <button
                                    type="submit"
                                    className="w-full py-4 px-8 bg-white text-black font-semibold text-lg
                                             hover:bg-neutral-100 active:bg-neutral-200 focus:outline-none 
                                             transition-all duration-300 rounded-lg tracking-wide shadow-lg hover:shadow-xl
                                             transform hover:-translate-y-0.5 active:scale-95"
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
