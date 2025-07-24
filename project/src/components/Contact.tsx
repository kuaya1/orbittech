import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Loader2, CheckCircle, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
// import { ShootingStars, StarsBackground } from './ui';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: 'residential',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  // Scroll animation state
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Initialize EmailJS once when component mounts
  useEffect(() => {
    try {
      emailjs.init("cZxddkmZep5G_h86H");
      console.log('EmailJS initialized successfully');
    } catch (error) {
      console.error('EmailJS initialization failed:', error);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formStatus === 'success' || formStatus === 'error') {
      setFormStatus('idle');
      setStatusMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    setStatusMessage('');

    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.address) {
      setFormStatus('error');
      setStatusMessage('Please fill in all required fields.');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus('error');
      setStatusMessage('Please enter a valid email address.');
      return;
    }

    try {
      const templateParams = {
        name: formData.name,
        message: `
Customer Details:
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone}
• Installation Address: ${formData.address}
• Service Type: ${formData.service.charAt(0).toUpperCase() + formData.service.slice(1)}

Additional Information:
${formData.message || 'No additional message provided'}`,
        time: new Date().toLocaleString(),
        to_email: 'contact@theorbittech.com',
        from_name: formData.name,
        from_email: formData.email,
        reply_to: formData.email,
        user_name: formData.name,
        user_email: formData.email,
        user_phone: formData.phone,
        user_address: formData.address,
        service_type: formData.service
      };

      const response = await emailjs.send(
        "service_a1n7ph9",
        "template_si8q63h",
        templateParams,
        "cZxddkmZep5G_h86H"
      );

      if (response.status === 200) {
        setFormStatus('success');
        setStatusMessage("Thank you! Your request has been received. We'll contact you within 24-48 hours.");
        
        setTimeout(() => {
          setFormData({
            name: '', 
            email: '', 
            phone: '', 
            address: '', 
            service: 'residential',
            message: ''
          });
        }, 1500);
      } else {
        throw new Error(`EmailJS returned status: ${response.status}`);
      }

    } catch (error: any) {
      console.error('Email send failed:', error);
      setFormStatus('error');
      setStatusMessage("We're having trouble sending your request. Please try again or contact us directly.");
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-20 bg-black relative"
    >
      {/* Animated background - DISABLED */}
      {/* <ShootingStars />
      <StarsBackground /> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8 leading-tight text-white font-sans">
            GET QUOTE
          </h2>
          <p className="text-lg text-neutral-300 leading-8 max-w-3xl mx-auto font-normal font-sans">
            Ready to get connected? Fill out the form below and we'll contact you within 24-48 hours to schedule your professional Starlink installation.
          </p>
        </div>

        <div className={`transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          
          {/* Mobile Layout: Form first, then contact info */}
          <div className="lg:hidden space-y-16">
            
            {/* Contact Form - Mobile First */}
            <div className="bg-black border border-neutral-800 rounded-xl p-8 shadow-lg shadow-black/20 hover:bg-neutral-900 hover:border-neutral-700 transition-all duration-300">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-white mb-2 tracking-tight uppercase font-sans">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-neutral-800 rounded-lg \
                               text-white placeholder-neutral-400 font-normal font-sans\n+                               focus:ring-2 focus:ring-neutral-600 focus:border-neutral-600 transition-all duration-300\n+                               hover:bg-neutral-900 hover:border-neutral-700"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-white mb-2 tracking-tight font-sans">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg \
                               text-white placeholder-white/60 font-normal font-sans\n+                               focus:ring-2 focus:ring-white/50 focus:border-white/40 transition-all duration-300\n+                               hover:bg-white/15 hover:border-white/30"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2 tracking-tight font-sans">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg \
                               text-white placeholder-white/60 font-normal font-sans\n+                               focus:ring-2 focus:ring-white/50 focus:border-white/40 transition-all duration-300\n+                               hover:bg-white/15 hover:border-white/30"
                      placeholder="(571) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-white mb-2 tracking-tight font-sans">
                      Service Type
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg \
                               text-white font-normal font-sans\n+                               focus:ring-2 focus:ring-white/50 focus:border-white/40 transition-all duration-300\n+                               hover:bg-white/15 hover:border-white/30"
                    >
                      <option value="residential">Residential</option>
                      <option value="business">Business</option>
                      <option value="specialty">Mobile/Marine</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-semibold text-white mb-2 tracking-tight font-sans">
                    Installation Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg \
                             text-white placeholder-white/60 font-normal font-sans\n+                             focus:ring-2 focus:ring-white/50 focus:border-white/40 transition-all duration-300\n+                             hover:bg-white/15 hover:border-white/30"
                    placeholder="Full address for installation"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-white mb-2 tracking-tight font-sans">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg \
                             text-white placeholder-white/60 font-normal font-sans\n+                             focus:ring-2 focus:ring-white/50 focus:border-white/40 transition-all duration-300\n+                             hover:bg-white/15 hover:border-white/30"
                    placeholder="Any specific requirements or questions..."
                  />
                </div>

                {/* Status Message */}
                {formStatus !== 'idle' && (
                  <div className={`p-4 rounded-lg flex items-center gap-3 backdrop-blur-sm ${
                    formStatus === 'success' 
                      ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                      : formStatus === 'error'
                      ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                      : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                  }`}>
                    {formStatus === 'loading' && <Loader2 className="h-5 w-5 animate-spin flex-shrink-0" />}
                    {formStatus === 'success' && <CheckCircle className="h-5 w-5 flex-shrink-0" />}
                    {formStatus === 'error' && <XCircle className="h-5 w-5 flex-shrink-0" />}
                    <span className="text-sm font-medium">{statusMessage}</span>
                    <span className="text-sm font-normal font-sans">{statusMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="w-full bg-white text-black font-semibold rounded-md py-4 px-6 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3 tracking-tight uppercase font-sans"
                >
                  {formStatus === 'loading' ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending Request...
                    </>
                  ) : (
                    'REQUEST QUOTE'
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information - Mobile Second */}
            <div>
              <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-sans mb-8">Contact Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#976060]/20 border border-[#976060]/30 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                    <Phone className="w-8 h-8 text-[#976060]" />
                  </div>
                  <h4 className="font-semibold text-white tracking-wide mb-2 uppercase font-sans">Phone</h4>
                  <a href="tel:+15719996915" className="text-neutral-200 hover:text-white transition-colors font-normal font-sans">
                    (571) 999-6915
                  </a>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#976060]/20 border border-[#976060]/30 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                    <Mail className="w-8 h-8 text-[#976060]" />
                  </div>
                  <h4 className="font-semibold text-white tracking-wide mb-2 uppercase font-sans">Email</h4>
                  <a href="mailto:contact@theorbittech.com" className="text-neutral-200 hover:text-white transition-colors font-normal font-sans">
                    contact@theorbittech.com
                  </a>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#976060]/20 border border-[#976060]/30 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                    <MapPin className="w-8 h-8 text-[#976060]" />
                  </div>
                  <h4 className="font-semibold text-white tracking-wide mb-2 uppercase font-sans">Service Area</h4>
                  <p className="text-neutral-200 font-normal font-sans">
                    Washington DC, Maryland, Virginia
                  </p>
                </div>
              </div>
            </div>

            {/* Why Choose Us Card - Mobile Last */}
            <div className="p-8 bg-black border border-neutral-800 rounded-xl shadow-lg shadow-black/20 hover:bg-neutral-900 hover:border-neutral-700 transition-all duration-300">
              <h4 className="font-bold text-white mb-4 tracking-tight uppercase font-sans">Why Choose Professional Installation?</h4>
              <ul className="space-y-3 text-neutral-200 font-normal font-sans">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                  <span className="font-normal font-sans">Licensed and insured professionals</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                  <span className="font-normal font-sans">Optimal placement for maximum performance</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                  <span className="font-normal font-sans">Same-day installation available</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                  <span className="font-normal font-sans">Professional cable routing and setup</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Desktop Layout: Original two-column layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div>
              <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-sans mb-8">Contact Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#976060]/20 border border-[#976060]/30 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                    <Phone className="w-8 h-8 text-[#976060]" />
                  </div>
                  <h4 className="font-semibold text-white tracking-wide mb-2 uppercase font-sans">Phone</h4>
                  <a href="tel:+15719996915" className="text-neutral-200 hover:text-white transition-colors font-normal font-sans">
                    (571) 999-6915
                  </a>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#976060]/20 border border-[#976060]/30 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                    <Mail className="w-8 h-8 text-[#976060]" />
                  </div>
                  <h4 className="font-semibold text-white tracking-wide mb-2 uppercase font-sans">Email</h4>
                  <a href="mailto:contact@theorbittech.com" className="text-neutral-200 hover:text-white transition-colors font-normal font-sans">
                    contact@theorbittech.com
                  </a>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#976060]/20 border border-[#976060]/30 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                    <MapPin className="w-8 h-8 text-[#976060]" />
                  </div>
                  <h4 className="font-semibold text-white tracking-wide mb-2 uppercase font-sans">Service Area</h4>
                  <p className="text-neutral-200 font-normal font-sans">
                    Washington DC, Maryland, Virginia
                  </p>
                </div>
              </div>

              <div className="mt-12 p-8 bg-black border border-neutral-800 rounded-xl shadow-lg shadow-black/20 hover:bg-neutral-900 hover:border-neutral-700 transition-all duration-300">
                <h4 className="font-bold text-white mb-4 tracking-tight uppercase font-sans">Why Choose Professional Installation?</h4>
                <ul className="space-y-3 text-neutral-200 font-normal font-sans">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                    <span className="font-normal font-sans">Licensed and insured professionals</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                    <span className="font-normal font-sans">Optimal placement for maximum performance</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                    <span className="font-normal font-sans">Same-day installation available</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                    <span className="font-normal font-sans">Professional cable routing and setup</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-black border border-neutral-800 rounded-xl p-8 shadow-lg shadow-black/20 hover:bg-neutral-900 hover:border-neutral-700 transition-all duration-300">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name-desktop" className="block text-sm font-bold text-white mb-2 tracking-tight uppercase">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name-desktop"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-neutral-800 rounded-lg 
                               text-white placeholder-neutral-400 font-medium
                               focus:ring-2 focus:ring-neutral-600 focus:border-neutral-600 transition-all duration-300
                               hover:bg-neutral-900 hover:border-neutral-700"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email-desktop" className="block text-sm font-black text-white mb-2 tracking-tight">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email-desktop"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg 
                               text-white placeholder-white/60 font-medium
                               focus:ring-2 focus:ring-white/50 focus:border-white/40 transition-all duration-300
                               hover:bg-white/15 hover:border-white/30"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone-desktop" className="block text-sm font-black text-white mb-2 tracking-tight">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone-desktop"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg 
                               text-white placeholder-white/60 font-medium
                               focus:ring-2 focus:ring-white/50 focus:border-white/40 transition-all duration-300
                               hover:bg-white/15 hover:border-white/30"
                      placeholder="(571) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="service-desktop" className="block text-sm font-black text-white mb-2 tracking-tight">
                      Service Type
                    </label>
                    <select
                      id="service-desktop"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg 
                               text-white font-medium
                               focus:ring-2 focus:ring-white/50 focus:border-white/40 transition-all duration-300
                               hover:bg-white/15 hover:border-white/30"
                    >
                      <option value="residential">Residential</option>
                      <option value="business">Business</option>
                      <option value="specialty">Mobile/Marine</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="address-desktop" className="block text-sm font-black text-white mb-2 tracking-tight">
                    Installation Address *
                  </label>
                  <input
                    type="text"
                    id="address-desktop"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg 
                             text-white placeholder-white/60 font-medium
                             focus:ring-2 focus:ring-white/50 focus:border-white/40 transition-all duration-300
                             hover:bg-white/15 hover:border-white/30"
                    placeholder="Full address for installation"
                  />
                </div>

                <div>
                  <label htmlFor="message-desktop" className="block text-sm font-black text-white mb-2 tracking-tight">
                    Additional Information
                  </label>
                  <textarea
                    id="message-desktop"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg 
                             text-white placeholder-white/60 font-medium
                             focus:ring-2 focus:ring-white/50 focus:border-white/40 transition-all duration-300
                             hover:bg-white/15 hover:border-white/30"
                    placeholder="Any specific requirements or questions..."
                  />
                </div>

                {/* Status Message */}
                {formStatus !== 'idle' && (
                  <div className={`p-4 rounded-lg flex items-center gap-3 backdrop-blur-sm ${
                    formStatus === 'success' 
                      ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                      : formStatus === 'error'
                      ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                      : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                  }`}>
                    {formStatus === 'loading' && <Loader2 className="h-5 w-5 animate-spin flex-shrink-0" />}
                    {formStatus === 'success' && <CheckCircle className="h-5 w-5 flex-shrink-0" />}
                    {formStatus === 'error' && <XCircle className="h-5 w-5 flex-shrink-0" />}
                    <span className="text-sm font-medium">{statusMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="w-full bg-white text-black font-semibold rounded-md py-4 px-6 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3 tracking-tight uppercase font-sans"
                >
                  {formStatus === 'loading' ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending Request...
                    </>
                  ) : (
                    'REQUEST QUOTE'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
