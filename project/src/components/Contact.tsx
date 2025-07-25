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

        // --- Inline SVG Icons (replacing lucide-react for preview) ---
        const Loader2 = ({ className }) => (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
            </svg>
        );

        const CheckCircle = ({ className }) => (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
        );

        const XCircle = ({ className }) => (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
                <circle cx="12" cy="12" r="10"/>
                <line x1="15" y1="9" x2="9" y2="15"/>
                <line x1="9" y1="9" x2="15" y2="15"/>
            </svg>
        );

        // --- Calcite Icon Component ---
        const CalciteIcon = ({ icon, className = '', scale = 'm', ...props }) => {
             const ref = useRef(null);
             useEffect(() => {
                if (ref.current) {
                    ref.current.icon = icon;
                    ref.current.scale = scale;
                }
             }, [icon, scale]);

            return React.createElement('calcite-icon', { ref, class: className, ...props });
        };


        const App = () => {
            const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
            const [formStatus, setFormStatus] = useState('idle');
            const [statusMessage, setStatusMessage] = useState('');
            const [isVisible, setIsVisible] = useState(false);
            const sectionRef = useRef(null);
            const [isEmailServiceReady, setIsEmailServiceReady] = useState(false);

            useEffect(() => {
                setIsVisible(true); 
            }, []);
            
            useEffect(() => {
                setTimeout(() => {
                    setIsEmailServiceReady(true);
                }, 1000);
            }, []);

            const handleChange = (e) => {
                const { name, value } = e.target;
                setFormData(prev => ({ ...prev, [name]: value }));
                if (formStatus !== 'idle') {
                    setFormStatus('idle');
                    setStatusMessage('');
                }
            };

            const handleSubmit = async (e) => {
                e.preventDefault();
                if (!isEmailServiceReady) {
                    setFormStatus('error');
                    setStatusMessage('Email service is not ready.');
                    return;
                }
                setFormStatus('loading');
                setStatusMessage('Sending...');

                if (!formData.name || !formData.email || !formData.phone) {
                    setTimeout(() => {
                        setFormStatus('error');
                        setStatusMessage('Please fill in all required fields.');
                    }, 500);
                    return;
                }
                
                setTimeout(() => {
                    setFormStatus('success');
                    setStatusMessage("Thank you! Your message has been sent.");
                    setTimeout(() => {
                        setFormData({ name: '', email: '', phone: '', message: '' });
                        setFormStatus('idle');
                    }, 4000);
                }, 1500);
            };

            const animationStyle = {
                transition: 'opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            };
            
            const calciteBlue = '#005987'; // Darker blue for better contrast on white

            return (
                <section 
                    ref={sectionRef}
                    id="contact" 
                    className="min-h-screen w-full pt-16 pb-10 px-4 sm:px-6 lg:px-8 flex items-center justify-center font-sans"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1515825838458-f2a94b20105a?q=80&w=2070&auto=format&fit=crop')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundAttachment: 'fixed'
                    }}
                >
                    <div 
                        className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8"
                        style={animationStyle}
                    >
                        
                        {/* --- Left Column: Info (White Glass) --- */}
                        <div 
                            className="p-8 lg:p-12 backdrop-blur-xl border border-white/30 bg-white/50 shadow-2xl rounded-2xl"
                        >
                                <h1 className="text-4xl sm:text-5xl font-medium text-black tracking-tighter">
                                    Let's Get in Touch
                                </h1>
                                <p className="mt-4 text-lg text-gray-700">
                                    We’ll get back to you within 24 hours.
                                </p>

                                <div className="mt-12 space-y-8">
                                    <ContactInfoItem icon="envelope" title="Email" href="mailto:contact@theorbittech.com" color={calciteBlue}>
                                        contact@theorbittech.com
                                    </ContactInfoItem>
                                    <ContactInfoItem icon="phone" title="Phone" href="tel:+15719996915" color={calciteBlue}>
                                        (571) 999-6915
                                    </ContactInfoItem>
                                    <ContactInfoItem icon="locator" title="Service Area" color={calciteBlue}>
                                        DC, Maryland, Virginia
                                    </ContactInfoItem>
                                </div>
                        </div>

                        {/* --- Right Column: Form (White Glass) --- */}
                        <div className="p-8 lg:p-12 backdrop-blur-xl border border-white/30 bg-white/50 shadow-2xl rounded-2xl">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <InputField label="Full Name" id="name" name="name" value={formData.name} onChange={handleChange} required accentColor={calciteBlue} theme="light" />
                                        <InputField label="Email Address" id="email" name="email" type="email" value={formData.email} onChange={handleChange} required accentColor={calciteBlue} theme="light" />
                                    </div>
                                    <InputField label="Phone Number" id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required accentColor={calciteBlue} theme="light" />
                                    <TextareaField label="Your Message" id="message" name="message" value={formData.message} onChange={handleChange} rows={5} accentColor={calciteBlue} theme="light" />
                                    
                                    <div className="pt-4">
                                        <div className="flex items-center justify-between">
                                            <div className="h-6">
                                                {formStatus !== 'idle' && (
                                                    <div className={`flex items-center gap-2 text-sm transition-opacity duration-300 ${
                                                        formStatus === 'success' ? 'text-green-600' :
                                                        formStatus === 'error' ? 'text-red-600' :
                                                        'text-gray-600'
                                                    }`}>
                                                        {formStatus === 'loading' && <Loader2 className="h-4 w-4 animate-spin" />}
                                                        {formStatus === 'success' && <CheckCircle className="h-4 w-4" />}
                                                        {formStatus === 'error' && <XCircle className="h-4 w-4" />}
                                                        <span>{statusMessage}</span>
                                                    </div>
                                                )}
                                            </div>
                                            <button
                                                type="submit"
                                                disabled={formStatus === 'loading' || !isEmailServiceReady}
                                                className="inline-flex items-center justify-center px-6 py-3 bg-black text-white font-semibold rounded-full transition-all duration-300 ease-in-out disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed hover:bg-gray-800"
                                            >
                                                <span>Send Message</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                        </div>
                    </div>
                </section>
            );
        };

        // --- Form Field & Contact Info Components ---
        const InputField = ({ label, id, accentColor, theme = 'dark', ...props }) => (
            <div className="relative">
                <input 
                    id={id} 
                    {...props} 
                    className={`peer w-full px-1 py-3 bg-transparent border-b-2 placeholder-transparent focus:outline-none transition-colors ${
                        theme === 'light' 
                        ? 'border-gray-300 text-black' 
                        : 'border-neutral-700 text-white'
                    }`}
                    style={{'--accent-color': accentColor}}
                    onFocus={e => e.target.style.borderColor = accentColor}
                    onBlur={e => e.target.style.borderColor = ''}
                    placeholder={label} 
                />
                <label 
                    htmlFor={id} 
                    className={`absolute left-1 -top-5 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-sm ${
                        theme === 'light'
                        ? 'text-gray-600 peer-placeholder-shown:text-gray-500 peer-focus:text-gray-600'
                        : 'text-neutral-500 peer-placeholder-shown:text-neutral-400 peer-focus:text-neutral-500'
                    }`}
                >
                    {label}
                </label>
            </div>
        );

        const TextareaField = ({ label, id, accentColor, theme = 'dark', ...props }) => (
            <div className="relative">
                <textarea 
                    id={id} 
                    {...props} 
                    className={`peer w-full px-1 py-3 bg-transparent border-b-2 placeholder-transparent focus:outline-none transition-colors resize-none ${
                        theme === 'light' 
                        ? 'border-gray-300 text-black' 
                        : 'border-neutral-700 text-white'
                    }`}
                    style={{'--accent-color': accentColor}}
                    onFocus={e => e.target.style.borderColor = accentColor}
                    onBlur={e => e.target.style.borderColor = ''}
                    placeholder={label} 
                />
                <label 
                    htmlFor={id} 
                    className={`absolute left-1 -top-5 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-sm ${
                        theme === 'light'
                        ? 'text-gray-600 peer-placeholder-shown:text-gray-500 peer-focus:text-gray-600'
                        : 'text-neutral-500 peer-placeholder-shown:text-neutral-400 peer-focus:text-neutral-500'
                    }`}
                >
                    {label}
                </label>
            </div>
        );

        const ContactInfoItem = ({ icon, title, href, color, children }) => (
            <a href={href} className="flex items-center group">
                <CalciteIcon icon={icon} scale="m" style={{ color: color }} className="flex-shrink-0 w-6 h-6 mr-4"/>
                <div>
                    <h4 className="text-gray-500 text-sm font-medium">{title}</h4>
                    <div className="text-black font-medium transition-colors duration-300 group-hover:text-gray-700">
                        {children}
                    </div>
                </div>
            </a>
        );

        ReactDOM.render(<App />, document.getElementById('root'));
    </script>
</body>
</html>
