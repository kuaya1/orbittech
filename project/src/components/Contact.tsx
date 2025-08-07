import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Shield, Clock, CheckCircle, Star, Award, MapPin } from 'lucide-react';

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

interface TrustBadgeProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Trust Badge Component
const TrustBadge: React.FC<TrustBadgeProps> = ({ icon, title, description }) => (
  <motion.div 
    className="flex items-start gap-4"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-white mb-1">{title}</h4>
      <p className="text-sm text-neutral-400">{description}</p>
    </div>
  </motion.div>
);

// Star Rating Component for testimonial
const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex items-center gap-1" role="img" aria-label={`${rating} star rating`}>
    {[...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-neutral-600'}`}
        aria-hidden="true"
      />
    ))}
  </div>
);

// Main Contact Component
const Contact: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceType: 'residential',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [isEmailServiceReady, setIsEmailServiceReady] = useState(false);
  const emailjsRef = useRef<any>(null);

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
        setFormStatus('success');
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            address: '',
            serviceType: 'residential',
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-24 sm:py-32 bg-black relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-black to-neutral-950" />
      
      {/* Subtle pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Get Your Free, No-Obligation Installation Quote
          </h2>
          <p className="text-lg leading-8 text-neutral-300">
            Fill out the form below, and one of our DMV-based connectivity experts will get back to you within one business day.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column - Trust Building */}
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            {/* Featured Testimonial */}
            <div className="bg-gradient-to-br from-neutral-900 to-black border border-neutral-800 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  JR
                </div>
                <div>
                  <h4 className="font-semibold text-white">John Richardson</h4>
                  <p className="text-sm text-neutral-400">Great Falls, VA</p>
                  <StarRating rating={5} />
                </div>
              </div>
              <blockquote className="text-neutral-300 italic mb-4">
                "The Orbit Tech transformed our home internet experience. From 15 Mbps with our old provider to 240 Mbps with Starlink - professionally installed in just 3 hours. The whole-home Wi-Fi coverage they set up means we finally have fast internet in every room. Absolutely worth every penny!"
              </blockquote>
              <div className="flex items-center gap-4 text-sm text-neutral-400">
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Verified Customer
                </span>
                <span>Installed March 2024</span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="space-y-6">
              <TrustBadge
                icon={<Shield className="w-6 h-6 text-blue-500" />}
                title="Licensed & Insured"
                description="Fully licensed contractors with comprehensive insurance coverage for your peace of mind."
              />
              <TrustBadge
                icon={<Award className="w-6 h-6 text-blue-500" />}
                title="90-Day Warranty"
                description="Every installation comes with our comprehensive 90-day warranty on parts and labor."
              />
              <TrustBadge
                icon={<Star className="w-6 h-6 text-blue-500" />}
                title="5.0 Google Rating"
                description="Consistently rated 5 stars by our customers for professional service and results."
              />
              <TrustBadge
                icon={<Clock className="w-6 h-6 text-blue-500" />}
                title="Same-Day Service"
                description="Emergency installations available with same-day service in most DMV areas."
              />
            </div>

            {/* Direct Contact Info */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
              <h3 className="font-semibold text-white mb-4">Prefer to Talk Directly?</h3>
              <a 
                href="tel:+15719996915" 
                className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors group"
                aria-label="Call The Orbit Tech"
              >
                <Phone className="w-5 h-5 text-blue-500 group-hover:text-blue-400" />
                <span className="font-medium">(571) 999-6915</span>
              </a>
              <a 
                href="mailto:contact@theorbittech.com" 
                className="flex items-center gap-3 text-neutral-300 hover:text-white transition-colors group"
                aria-label="Email The Orbit Tech"
              >
                <Mail className="w-5 h-5 text-blue-500 group-hover:text-blue-400" />
                <span className="font-medium">contact@theorbittech.com</span>
              </a>
              <div className="flex items-start gap-3 text-neutral-300">
                <MapPin className="w-5 h-5 text-blue-500 mt-0.5" />
                <div>
                  <p className="font-medium">Service Areas</p>
                  <p className="text-sm text-neutral-400">Virginia • Maryland • Washington DC</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div 
            className="bg-gradient-to-br from-neutral-900 to-black border border-neutral-800 rounded-2xl p-8"
            variants={itemVariants}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-black/50 border rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors ${
                    formErrors.name ? 'border-red-500' : 'border-neutral-700'
                  }`}
                  placeholder="John Smith"
                  aria-label="Your full name"
                  aria-required="true"
                  aria-invalid={!!formErrors.name}
                />
                {formErrors.name && (
                  <p className="mt-1 text-sm text-red-400">{formErrors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-black/50 border rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors ${
                    formErrors.email ? 'border-red-500' : 'border-neutral-700'
                  }`}
                  placeholder="john@example.com"
                  aria-label="Your email address"
                  aria-required="true"
                  aria-invalid={!!formErrors.email}
                />
                {formErrors.email && (
                  <p className="mt-1 text-sm text-red-400">{formErrors.email}</p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-300 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-black/50 border rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors ${
                    formErrors.phone ? 'border-red-500' : 'border-neutral-700'
                  }`}
                  placeholder="(555) 123-4567"
                  aria-label="Your phone number"
                  aria-required="true"
                  aria-invalid={!!formErrors.phone}
                />
                {formErrors.phone && (
                  <p className="mt-1 text-sm text-red-400">{formErrors.phone}</p>
                )}
              </div>

              {/* Address Field */}
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-neutral-300 mb-2">
                  Installation Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="123 Main St, City, State ZIP"
                  aria-label="Installation address"
                />
              </div>

              {/* Service Type */}
              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-neutral-300 mb-2">
                  Service Type
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-neutral-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors"
                  aria-label="Type of service needed"
                >
                  <option value="residential">Residential Installation</option>
                  <option value="business">Business Installation</option>
                  <option value="wifi">Installation + Wi-Fi Optimization</option>
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-black/50 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Tell us about your property or any special requirements..."
                  aria-label="Additional information"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={formStatus === 'loading' || !isEmailServiceReady}
                className="w-full bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/25 disabled:bg-neutral-700 disabled:text-neutral-400 disabled:cursor-not-allowed"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Submit installation quote request"
              >
                {formStatus === 'loading' ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : formStatus === 'success' ? (
                  <span className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Quote Request Sent Successfully!
                  </span>
                ) : formStatus === 'error' ? (
                  'Error - Please Try Again'
                ) : (
                  'Get My Free Quote'
                )}
              </motion.button>

              {/* Form Status Messages */}
              {formStatus === 'success' && (
                <motion.div 
                  className="bg-green-500/10 border border-green-500/20 rounded-xl p-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <p className="text-green-400 text-sm">
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
                  <p className="text-red-400 text-sm">
                    Something went wrong. Please try again or call us directly at (571) 999-6915.
                  </p>
                </motion.div>
              )}

              {/* Privacy Note */}
              <p className="text-xs text-neutral-500 text-center">
                By submitting this form, you agree to be contacted about your Starlink installation quote. 
                We respect your privacy and will never share your information.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;