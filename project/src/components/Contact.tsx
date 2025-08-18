import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Phone, Mail, Shield, Clock, CheckCircle, Award, MapPin, Loader2 } from 'lucide-react';

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (command: string, action: string, parameters: object) => void;
  }
}

// Type definitions
interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  serviceType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

interface TrustIndicator {
  icon: React.ElementType;
  value: string;
  label: string;
}

// Precision Intersection Observer for orchestrated reveal
const useScrollReveal = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin: '50px' }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold]);

  return [elementRef, isVisible] as const;
};

// Trust indicators data
const trustIndicators: TrustIndicator[] = [
  { icon: Shield, value: '100%', label: 'Licensed & Insured' },
  { icon: Award, value: '90 Day', label: 'Service Warranty' },
  { icon: Clock, value: '24hr', label: 'Response Time' },
  { icon: CheckCircle, value: '100+', label: 'Installations' }
];

// Main Contact Component
const Contact: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceType: 'installation',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [isEmailServiceReady, setIsEmailServiceReady] = useState(false);
  const emailjsRef = useRef<any>(null);

  // Scroll reveal and mouse tracking
  const [containerRef, isVisible] = useScrollReveal(0.15);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Subtle parallax effect for premium feel
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
  };

  // Transform mouse position for gradient tracking
  const gradientX = useTransform(mouseX, [0, 1000], [0, 100]);
  const gradientY = useTransform(mouseY, [0, 600], [0, 100]);

  // Load EmailJS
  useEffect(() => {
    const emailjsScript = document.createElement('script');
    emailjsScript.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    emailjsScript.async = true;

    emailjsScript.onload = () => {
      if ((window as any).emailjs) {
        emailjsRef.current = (window as any).emailjs;
        try {
          emailjsRef.current.init({ publicKey: "cZxddkmZep5G_h86H" });
          setIsEmailServiceReady(true);
        } catch (error) {
          console.error('EmailJS initialization failed:', error);
        }
      }
    };

    document.body.appendChild(emailjsScript);

    return () => {
      if (document.body.contains(emailjsScript)) {
        document.body.removeChild(emailjsScript);
      }
    };
  }, []);

  // Validate email format
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validate phone format
  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[\d\s\-\(\)\+]+$/;
    return phone.length >= 10 && phoneRegex.test(phone);
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  // Validate form
  const validateForm = (): boolean => {
    const errors: FormErrors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone is required';
    } else if (!validatePhone(formData.phone)) {
      errors.phone = 'Please enter a valid phone number';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (!isEmailServiceReady || !emailjsRef.current) {
      setFormStatus('error');
      return;
    }

    setFormStatus('loading');

    try {
      const serviceID = "service_a1n7ph9";
      const templateID = "template_si8q63h";
      const templateParams = {
        ...formData,
        time: new Date().toLocaleString(),
        source: 'Installation Quote Form'
      };

      const response = await emailjsRef.current.send(serviceID, templateID, templateParams);

      if (response.status === 200) {
        // Track Google Analytics conversion
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'conversion', {
            'send_to': 'AW-17369280864/afTpCKOIgYkbEODiqNpA',
            'event_category': 'Contact',
            'event_label': 'Contact Form Submission'
          });
        }
        
        setFormStatus('success');
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            address: '',
            serviceType: 'installation',
            message: ''
          });
          setFormStatus('idle');
        }, 5000);
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error('Email send failed:', error);
      setFormStatus('error');
    }
  };

  // Orchestrated entrance animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
  ease: "easeOut" as const,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.98
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
  ease: "easeOut" as const
      }
    }
  };

  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
  ease: "easeOut" as const,
        delay: 0.5
      }
    }
  };

  return (
    <motion.section
      id="contact"
      ref={containerRef}
      className="relative py-32 lg:py-40 overflow-hidden isolate"
      onMouseMove={handleMouseMove}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
      aria-labelledby="contact-heading"
    >
      {/* Layered background system for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
      
      {/* Spotlight effect - tracks mouse subtly */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{
          background: useTransform(
            [gradientX, gradientY],
            ([x, y]) => `radial-gradient(circle 800px at ${x}% ${y}%, rgba(59, 130, 246, 0.06), transparent 60%)`
          )
        }}
      />
      
      {/* Grid pattern overlay for technical authority */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Accent line */}
        <motion.div 
          variants={lineVariants}
          className="w-24 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-12 origin-center"
        />

        {/* Section Header - Minimal and refined */}
        <motion.div 
          className="text-center mb-20"
          variants={itemVariants}
        >
          <h2 
            id="contact-heading"
            className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] mb-6"
          >
            <span className="text-white">Get your free,</span>
            <br />
            <span className="text-white font-semibold">no-obligation quote.</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto font-light">
            Professional Starlink installation by DMV-based connectivity experts. 
            We'll respond within one business day.
          </p>
        </motion.div>

        {/* Trust Indicators Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          variants={itemVariants}
        >
          {trustIndicators.map((indicator, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 mb-3">
                <indicator.icon className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-2xl font-light text-white">{indicator.value}</div>
              <div className="text-sm text-neutral-500 mt-1 font-light">{indicator.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Form Container - Clean and sophisticated */}
        <motion.div 
          className="relative max-w-3xl mx-auto"
          variants={itemVariants}
        >
          {/* Subtle border glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5 blur-xl -z-10" />
          
          {/* Form */}
          <div className="relative bg-gradient-to-b from-neutral-900/30 to-black/30 backdrop-blur-sm border border-neutral-800/50 rounded-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Two Column Layout for Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-light text-neutral-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-black/50 border rounded-xl text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500/50 focus:bg-black/70 transition-all ${
                      formErrors.name ? 'border-red-500/50' : 'border-neutral-800'
                    }`}
                    placeholder="John Smith"
                    aria-label="Your full name"
                    aria-required="true"
                    aria-invalid={!!formErrors.name}
                  />
                  {formErrors.name && (
                    <p className="mt-1 text-xs text-red-400 font-light">{formErrors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-light text-neutral-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-black/50 border rounded-xl text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500/50 focus:bg-black/70 transition-all ${
                      formErrors.email ? 'border-red-500/50' : 'border-neutral-800'
                    }`}
                    placeholder="john@example.com"
                    aria-label="Your email address"
                    aria-required="true"
                    aria-invalid={!!formErrors.email}
                  />
                  {formErrors.email && (
                    <p className="mt-1 text-xs text-red-400 font-light">{formErrors.email}</p>
                  )}
                </div>
              </div>

              {/* Two Column Layout for Phone and Service Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-light text-neutral-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-black/50 border rounded-xl text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500/50 focus:bg-black/70 transition-all ${
                      formErrors.phone ? 'border-red-500/50' : 'border-neutral-800'
                    }`}
                    placeholder="(555) 123-4567"
                    aria-label="Your phone number"
                    aria-required="true"
                    aria-invalid={!!formErrors.phone}
                  />
                  {formErrors.phone && (
                    <p className="mt-1 text-xs text-red-400 font-light">{formErrors.phone}</p>
                  )}
                </div>

                {/* Service Type */}
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-light text-neutral-300 mb-2">
                    Service Type
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black/50 border border-neutral-800 rounded-xl text-white focus:outline-none focus:border-blue-500/50 focus:bg-black/70 transition-all appearance-none cursor-pointer"
                    aria-label="Type of service needed"
                  >
                    <option value="installation">Professional Installation</option>
                    <option value="installation-plus-wifi">Complete Coverage Package</option>
                    <option value="business">Business Installation</option>
                  </select>
                </div>
              </div>

              {/* Address Field */}
              <div>
                <label htmlFor="address" className="block text-sm font-light text-neutral-300 mb-2">
                  Installation Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-neutral-800 rounded-xl text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500/50 focus:bg-black/70 transition-all"
                  placeholder="123 Main St, City, State ZIP"
                  aria-label="Installation address"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-light text-neutral-300 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-black/50 border border-neutral-800 rounded-xl text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500/50 focus:bg-black/70 transition-all resize-none"
                  placeholder="Tell us about your property or any special requirements..."
                  aria-label="Additional information"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={formStatus === 'loading' || !isEmailServiceReady}
                className="w-full bg-blue-500 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/25 disabled:bg-neutral-800 disabled:text-neutral-500 disabled:cursor-not-allowed relative overflow-hidden group"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                aria-label="Submit installation quote request"
              >
                {/* Shimmer effect on hover */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                
                <span className="relative flex items-center justify-center gap-2">
                  {formStatus === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : formStatus === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Quote Request Sent Successfully!</span>
                    </>
                  ) : formStatus === 'error' ? (
                    'Error - Please Try Again'
                  ) : (
                    'Get My Free Quote'
                  )}
                </span>
              </motion.button>

              {/* Form Status Messages */}
              {formStatus === 'success' && (
                <motion.div 
                  className="bg-green-500/10 border border-green-500/20 rounded-xl p-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <p className="text-green-400 text-sm font-light">
                    Thank you! We've received your quote request and will contact you within one business day.
                  </p>
                </motion.div>
              )}

              {formStatus === 'error' && (
                <motion.div 
                  className="bg-red-500/10 border border-red-500/20 rounded-xl p-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <p className="text-red-400 text-sm font-light">
                    Something went wrong. Please try again or call us directly at (571) 999-6915.
                  </p>
                </motion.div>
              )}

              {/* Privacy Note */}
              <p className="text-xs text-neutral-600 text-center font-light">
                By submitting this form, you agree to be contacted about your Starlink installation quote. 
                We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </motion.div>

        {/* Contact Information - Minimal presentation */}
        <motion.div 
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <p className="text-sm text-neutral-500 font-light mb-6">Prefer to talk directly?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            <a 
              href="tel:+15719996915" 
              className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors group"
              aria-label="Call The Orbit Tech"
            >
              <Phone className="w-5 h-5 text-blue-500 group-hover:text-blue-400" />
              <span className="font-light">(571) 999-6915</span>
            </a>
            <a 
              href="mailto:contact@theorbittech.com" 
              className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors group"
              aria-label="Email The Orbit Tech"
            >
              <Mail className="w-5 h-5 text-blue-500 group-hover:text-blue-400" />
              <span className="font-light">contact@theorbittech.com</span>
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 mt-6 text-neutral-500 text-sm">
            <MapPin className="w-4 h-4" />
            <span className="font-light">Serving Virginia • Maryland • Washington DC</span>
          </div>
        </motion.div>

        {/* Bottom accent line */}
        <motion.div 
          variants={lineVariants}
          className="w-24 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mt-16 origin-center"
        />
      </div>

      {/* Edge vignette for focus */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-15" />
      </div>
    </motion.section>
  );
};

export default Contact;