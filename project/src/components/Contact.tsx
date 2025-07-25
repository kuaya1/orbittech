import React, { useState, useEffect, useRef } from 'react';
// Calcite icons will be loaded via script. Lucide is used for fallbacks.
import { Loader2, CheckCircle, XCircle, ArrowRight, Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

// --- Calcite Icon Component ---
const CalciteIcon = ({ icon, className = '', scale = 'm', ...props }) => {
  return <calcite-icon icon={icon} class={className} scale={scale} {...props}></calcite-icon>;
};

const Contact = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // State for form submission status
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  // State for scroll-triggered animations
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const [isEmailServiceReady, setIsEmailServiceReady] = useState(false);
  const emailjsRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Dynamically load Calcite and EmailJS scripts
  useEffect(() => {
    // --- Load Calcite Components ---
    const calciteCss = document.createElement('link');
    calciteCss.rel = 'stylesheet';
    calciteCss.href = 'https://js.arcgis.com/calcite-components/2.8.0/calcite.css';
    document.head.appendChild(calciteCss);

    const calciteScript = document.createElement('script');
    calciteScript.type = 'module';
    calciteScript.src = 'https://js.arcgis.com/calcite-components/2.8.0/calcite.esm.js';
    document.body.appendChild(calciteScript);

    // FIX: Replaced dynamic import with a script tag loader for better compatibility.
    // --- Load and initialize EmailJS ---
    const emailjsScript = document.createElement('script');
    emailjsScript.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    emailjsScript.async = true;

    emailjsScript.onload = () => {
        // The library attaches itself to the window object
        if (window.emailjs) {
            emailjsRef.current = window.emailjs;
            try {
                emailjsRef.current.init({ publicKey: "cZxddkmZep5G_h86H" });
                setIsEmailServiceReady(true);
            } catch (initError) {
                console.error('EmailJS initialization failed:', initError);
                setFormStatus('error');
            }
        } else {
            console.error('EmailJS script loaded but window.emailjs is not available.');
            setFormStatus('error');
        }
    };

    emailjsScript.onerror = (error) => {
        console.error('Failed to load EmailJS script:', error);
        setFormStatus('error');
    };
    
    document.body.appendChild(emailjsScript);
      
    return () => {
        document.head.removeChild(calciteCss);
        document.body.removeChild(calciteScript);
        if (document.body.contains(emailjsScript)) {
            document.body.removeChild(emailjsScript);
        }
    }
  }, []);

  // Handler for form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formStatus !== 'idle') {
      setFormStatus('idle');
      setStatusMessage('');
    }
  };

  // Handler for form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isEmailServiceReady || !emailjsRef.current) {
      setFormStatus('error');
      setStatusMessage('Email service is not ready. Please try again.');
      return;
    }
    
    setFormStatus('loading');
    setStatusMessage('Sending...');

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      setStatusMessage('Please fill in all required fields.');
      return;
    }
    
    try {
      const serviceID = "service_a1n7ph9";
      const templateID = "template_si8q63h";
      const templateParams = { ...formData, time: new Date().toLocaleString() };

      const response = await emailjsRef.current.send(serviceID, templateID, templateParams);

      if (response.status === 200) {
        setFormStatus('success');
        setStatusMessage("Thank you. Your message has been sent.");
        setTimeout(() => {
          setFormData({ name: '', email: '', message: '' });
          setFormStatus('idle');
        }, 4000);
      } else {
        throw new Error(`EmailJS returned status: ${response.status}`);
      }
    } catch (error: any) {
      console.error('Email send failed:', error);
      setFormStatus('error');
      setStatusMessage("An error occurred. Please try again.");
    }
  };

  const animationStyle = {
    transition: 'opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
  };
  
  const calciteBlue = '#0079c1';

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="min-h-screen flex items-center justify-center relative py-16 px-4 overflow-hidden"
      style={{
        backgroundImage: "url('/Starlink_Rural_Location_02a-scaled.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/30 backdrop-blur-[2px]" />
      
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        {/* Information Card */}
        <div className="backdrop-blur-xl bg-white/80 rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/40">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Contact Information</h2>
          <ul className="space-y-6">
            <li className="flex items-center space-x-4 group">
              <div className="p-3 rounded-full bg-white/80 shadow-sm group-hover:shadow-md transition-all duration-300">
                <Phone className="w-6 h-6 text-indigo-600" />
              </div>
              <span className="text-gray-800 text-lg">(571) 999-6915</span>
            </li>
            <li className="flex items-center space-x-4 group">
              <div className="p-3 rounded-full bg-white/80 shadow-sm group-hover:shadow-md transition-all duration-300">
                <Mail className="w-6 h-6 text-indigo-600" />
              </div>
              <span className="text-gray-800 text-lg">contact@theorbittech.com</span>
            </li>
            <li className="flex items-center space-x-4 group">
              <div className="p-3 rounded-full bg-white/80 shadow-sm group-hover:shadow-md transition-all duration-300">
                <MapPin className="w-6 h-6 text-indigo-600" />
              </div>
              <span className="text-gray-800 text-lg">DC, Maryland, Virginia</span>
            </li>
            <li className="flex items-center space-x-4 group">
              <div className="p-3 rounded-full bg-white/80 shadow-sm group-hover:shadow-md transition-all duration-300">
                <Clock className="w-6 h-6 text-indigo-600" />
              </div>
              <span className="text-gray-800 text-lg">Mon - Fri: 9:00 AM - 5:00 PM</span>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="backdrop-blur-xl bg-white/80 rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/40">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 block w-full px-4 py-3 bg-white/50 border border-white/60 rounded-xl shadow-sm backdrop-blur-md
                         focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                         placeholder-gray-400 text-gray-800"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 block w-full px-4 py-3 bg-white/50 border border-white/60 rounded-xl shadow-sm backdrop-blur-md
                         focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                         placeholder-gray-400 text-gray-800"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="mt-2 block w-full px-4 py-3 bg-white/50 border border-white/60 rounded-xl shadow-sm backdrop-blur-md
                         focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                         placeholder-gray-400 text-gray-800 resize-none"
                placeholder="What would you like to discuss?"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-4 bg-indigo-600 text-white font-medium rounded-xl
                         shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                         transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                disabled={formStatus === 'loading'}
              >
                {formStatus === 'loading' ? 'Sending...' : 'Submit'}
                {formStatus === 'loading' ? <Send className="ml-2 w-4 h-4 animate-spin" /> : <Send className="ml-2 w-4 h-4" />}
              </button>
            </div>
            {formStatus === 'success' && (
              <div className="mt-4 p-4 bg-green-50/80 backdrop-blur-sm border border-green-200 rounded-xl">
                <p className="text-green-800 text-sm flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Your message has been sent successfully!
                </p>
              </div>
            )}
            {formStatus === 'error' && (
              <div className="mt-4 p-4 bg-red-50/80 backdrop-blur-sm border border-red-200 rounded-xl">
                <p className="text-red-800 text-sm flex items-center">
                  <XCircle className="w-5 h-5 mr-2" />
                  An error occurred. Please try again.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
