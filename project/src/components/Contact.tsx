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
      className="min-h-screen w-full py-24 px-4 sm:px-6 lg:px-8 bg-black flex items-center justify-center font-sans"
    >
      {/* --- Unified Contact Module --- */}
      <div 
        className="w-full max-w-7xl mx-auto bg-neutral-900/50 border border-neutral-800 rounded-2xl grid grid-cols-1 lg:grid-cols-2 shadow-2xl shadow-black/30 overflow-hidden"
        style={animationStyle}
      >
        
        {/* --- Left Column: Info --- */}
        <div className="p-8 lg:p-12">
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
                <ContactInfoItem icon="locator" title="Service Area" color={calciteBlue}>
                    DC, Maryland, Virginia
                </ContactInfoItem>
            </div>
        </div>

        {/* --- Right Column: Form (Dark Background) --- */}
        <div className="p-8 lg:p-12" style={{ backgroundColor: 'rgb(15,15,15)' }}>
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

const ContactInfoItem = ({ icon, title, href, color, children }) => (
    <a href={href} className="flex items-center group">
        <CalciteIcon icon={icon} scale="m" style={{ color: color }} className="flex-shrink-0 w-6 h-6 mr-4"/>
        <div>
            <h4 className="text-neutral-400 text-sm font-medium">{title}</h4>
            <div className="text-white font-medium transition-colors duration-300 group-hover:text-neutral-300">
                {children}
            </div>
        </div>
    </a>
);

export default App;
