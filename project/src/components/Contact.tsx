import React, { useState, useEffect, useRef } from 'react';
// Calcite icons will be loaded via script. Lucide is used for fallbacks.
import { Loader2, CheckCircle, XCircle, ArrowRight } from 'lucide-react';

// --- Calcite Icon Component ---
const CalciteIcon = ({ icon, className = '', scale = 'm', ...props }) => {
  return <calcite-icon icon={icon} class={className} scale={scale} {...props}></calcite-icon>;
};

const App = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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

    if (!formData.name || !formData.email || !formData.phone) {
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
          setFormData({ name: '', email: '', phone: '', message: '' });
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
      className="min-h-[400px] w-full pt-16 pb-10 px-4 sm:px-6 lg:px-8 bg-black flex items-center justify-center font-sans"
      style={{
        backgroundImage: "url('/Starlink_Rural_Location_02a-scaled.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* --- Unified Contact Module --- */}
      <div 
        className="w-full max-w-7xl mx-auto bg-neutral-900/90 border border-neutral-800 rounded-2xl grid grid-cols-1 lg:grid-cols-2 shadow-2xl shadow-black/30 overflow-hidden"
        style={animationStyle}
      >
        
        {/* --- Left Column: Info --- */}
        <div 
          className="p-8 lg:p-12 backdrop-blur-xl border border-white/10 bg-[#101014]/90 rounded-2xl shadow-xl"
          style={{ background: 'rgba(16, 16, 20, 0.92)' }}
        >
            <h1 className="text-4xl sm:text-5xl font-medium text-neutral-50 tracking-tighter">
                Let's Get in Touch
            </h1>
            <p className="mt-4 text-lg text-neutral-400">
                We’ll get back to you within 24 hours.
            </p>

            <div className="mt-12 space-y-8">
                <ContactInfoItem icon="envelope" title="Email" href="mailto:contact@theorbittech.com" color={calciteBlue}>
                    contact@theorbittech.com
                </ContactInfoItem>
                <ContactInfoItem icon="phone" title="Phone" href="tel:+15719996915" color={calciteBlue}>
                    (571) 999-6915
                </ContactInfoItem>
                <ContactInfoItem icon="locator" title="Address" color={calciteBlue}>
                    8000 Westpark Drive, STE 450<br />
                    McLean, VA 22102
                </ContactInfoItem>
                <ContactInfoItem icon="locator" title="Service Area" color={calciteBlue}>
                    DC, Maryland, Virginia
                </ContactInfoItem>
            </div>
        </div>

        {/* --- Right Column: Form (Dark Background) --- */}
        <div className="p-8 lg:p-12 bg-black border border-neutral-800 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <InputField label="Full Name" id="name" name="name" value={formData.name} onChange={handleChange} required accentColor={calciteBlue} />
                    <InputField label="Email Address" id="email" name="email" type="email" value={formData.email} onChange={handleChange} required accentColor={calciteBlue} />
                </div>
                <InputField label="Phone Number" id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required accentColor={calciteBlue} />
                <TextareaField label="Your Message" id="message" name="message" value={formData.message} onChange={handleChange} rows={5} accentColor={calciteBlue} />
                
                <div className="pt-4">
                    <div className="flex items-center justify-between">
                        <div className="h-6">
                            {formStatus !== 'idle' && (
                                <div className={`flex items-center gap-2 text-sm transition-opacity duration-300 ${
                                    formStatus === 'success' ? 'text-green-400' :
                                    formStatus === 'error' ? 'text-red-400' :
                                    'text-neutral-400'
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
                            className="inline-flex items-center justify-center px-6 py-3 bg-white text-black font-semibold rounded-full transition-all duration-300 ease-in-out disabled:bg-neutral-800 disabled:text-neutral-500 disabled:cursor-not-allowed"
                        >
                            <span>Send Message</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
      </div>
      
      {/* Google Maps Section */}
      <div className="w-full max-w-7xl mx-auto mt-16">
        <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Service Area</h2>
          <p className="text-neutral-400 text-center mb-8 max-w-2xl mx-auto">
            Located in McLean, VA, we provide professional Starlink installation services throughout the DMV area and surrounding regions.
          </p>
          
          <div className="relative h-96 rounded-xl overflow-hidden border border-neutral-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.4234567890123!2d-77.2297!3d38.9338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe6c3cb2e3bfa4ade!2s8000%20Westpark%20Dr%20STE%20450%2C%20McLean%2C%20VA%2022102!5e0!3m2!1sen!2sus!4v1640000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Orbit Tech Location - McLean, VA"
            ></iframe>
          </div>
          
          <div className="mt-6 text-center">
            <a 
              href="https://www.google.com/maps/place/?cid=16628350007596958974"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              View on Google Maps & Leave a Review
            </a>
          </div>
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
        ? 'border-neutral-300 text-black' 
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
        ? 'text-neutral-600 peer-placeholder-shown:text-neutral-600 peer-focus:text-neutral-600'
        : 'text-neutral-500 peer-placeholder-shown:text-neutral-400 peer-focus:text-neutral-500'
      }`}
      style={{'--accent-color': accentColor}}
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
          ? 'border-neutral-300 text-black' 
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
          ? 'text-neutral-600 peer-placeholder-shown:text-neutral-600 peer-focus:text-neutral-600'
          : 'text-neutral-500 peer-placeholder-shown:text-neutral-400 peer-focus:text-neutral-500'
        }`}
        style={{'--accent-color': accentColor}}
      >
        {label}
      </label>
    </div>
);

const ContactInfoItem = ({ icon, title, href, color, children }) => {
    const content = (
        <>
            <CalciteIcon icon={icon} scale="m" style={{ color: color }} className="flex-shrink-0 w-6 h-6 mr-4"/>
            <div>
                <h4 className="text-neutral-400 text-sm font-medium">{title}</h4>
                <div className="text-white font-medium transition-colors duration-300 group-hover:text-neutral-300">
                    {children}
                </div>
            </div>
        </>
    );
    
    if (href) {
        return (
            <a href={href} className="flex items-center group">
                {content}
            </a>
        );
    }
    
    return (
        <div className="flex items-center group">
            {content}
        </div>
    );
};

export default App;