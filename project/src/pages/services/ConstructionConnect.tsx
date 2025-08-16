import { 
  Satellite, 
  Wifi, 
  Shield, 
  Clock, 
  CheckCircle,
  ChevronDown,
  Phone,
  Mail,
  ArrowRight,
  Camera
} from 'lucide-react';
import { useEffect } from 'react';
import { FAQSchema, ServiceSchema } from '../../components/SEO/CentralizedSchemaManager';

const ConstructionConnectLanding = () => {
  // Scroll progress tracking
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      const progressBar = document.getElementById('scroll-progress-bar');
      if (progressBar) {
        progressBar.style.width = scrollPercent + '%';
      }
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  // Intersection Observer for fade-up animations and timeline slides
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Handle timeline slide animations
          if (entry.target.classList.contains('slide-left') || entry.target.classList.contains('slide-right')) {
            (entry.target as HTMLElement).style.opacity = '1';
          }
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-up, .slide-left, .slide-right');
    fadeElements.forEach((el) => {
      // Set initial state for slide elements
      if (el.classList.contains('slide-left') || el.classList.contains('slide-right')) {
        (el as HTMLElement).style.opacity = '0';
      }
      observer.observe(el);
    });

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Trust logos sequential animation
  useEffect(() => {
    const trustLogos = document.querySelectorAll('.trust-logo');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const logos = Array.from(trustLogos);
          logos.forEach((logo, index) => {
            setTimeout(() => {
              logo.classList.add('animate-in');
            }, index * 100);
          });
          observer.disconnect(); // Only animate once
        }
      });
    }, { threshold: 0.5 });

    if (trustLogos.length > 0) {
      observer.observe(trustLogos[0].parentElement?.parentElement || trustLogos[0]);
    }

    return () => observer.disconnect();
  }, []);

  // Preload hero images for better performance
  useEffect(() => {
    const preloadImages = () => {
      const desktopImg = new Image();
      const mobileImg = new Image();
  desktopImg.src = '/images/Google_AI_Studio_2025-08-15T04_58_21.092Z.png';
  mobileImg.src = '/images/Google_AI_Studio_2025-08-15T04_58_21.092Z.png';
    };
    preloadImages();
  }, []);

  const faqs = [
    {
      question: "How quickly can you get our construction site online?",
      answer: "Standard deployment: 24-48 hours from your call. If you have equipment ready, we can often connect you same day."
    },
    {
      question: "How does this work with our existing IT infrastructure?",
      answer: "Our system can act as your primary internet connection or as a failover. We integrate directly with your existing network or build one from scratch, including managed switches, enterprise routers, and commercial-grade access points configured to your specifications."
    },
    {
      question: "Is the connection reliable enough for video calls and transferring large files?",
      answer: "Yes. Our installations consistently deliver 150-250 Mbps—more than sufficient for simultaneous video conferences, large file transfers, and cloud applications."
    },
    {
      question: "What is the real-world range of your job site Wi-Fi?",
      answer: "We design a custom mesh layout for each site. Our systems can cover anything from a small lot to multi-acre industrial sites with multiple buildings, ensuring strong signals everywhere you need them - from the site trailer to the top floor of construction."
    },
    {
      question: "Can we move the system to a new job site once this project is complete?",
      answer: "Yes. The entire system is designed for deployment and redeployment. We offer a service to professionally decommission, move, and reinstall your connectivity and surveillance at your next project site, ensuring zero downtime between projects."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Schema Components */}
      <FAQSchema faqs={faqs} />
      <ServiceSchema data={{
        name: "Construction Site Connectivity Solutions",
        description: "Professional Starlink installation for construction sites with security cameras and high-speed internet",
        url: "/services/construction-connect",
        image: "https://www.theorbittech.com/images/construction-starlink.webp",
        imageCaption: "Professional construction site connectivity by The Orbit Tech"
      }} />
      
      {/* Scroll Progress Indicator */}
      <div className="scroll-progress">
        <div className="scroll-progress-bar" id="scroll-progress-bar"></div>
      </div>
      
      {/* Quick Navigation - Desktop Only */}
      <div className="hidden lg:block fixed right-6 top-1/2 transform -translate-y-1/2 z-40">
        <nav className="bg-white/80 floating-element rounded-full p-2 shadow-lg border border-white/20">
          <div className="space-y-2">
            <a href="#hero" className="block w-3 h-3 rounded-full bg-gray-300 hover:bg-[#3B82F6] transition-colors" title="Hero"></a>
            <a href="#problem" className="block w-3 h-3 rounded-full bg-gray-300 hover:bg-[#3B82F6] transition-colors" title="Problem/Solution"></a>
            <a href="#services" className="block w-3 h-3 rounded-full bg-gray-300 hover:bg-[#3B82F6] transition-colors" title="Services"></a>
            <a href="#results" className="block w-3 h-3 rounded-full bg-gray-300 hover:bg-[#3B82F6] transition-colors" title="Results"></a>
            <a href="#faq" className="block w-3 h-3 rounded-full bg-gray-300 hover:bg-[#3B82F6] transition-colors" title="FAQ"></a>
            <a href="#contact" className="block w-3 h-3 rounded-full bg-gray-300 hover:bg-[#3B82F6] transition-colors" title="Contact"></a>
          </div>
        </nav>
      </div>

      <style>
        {`
        /* UI Component Style Guide */
        
        /* Primary CTA Button */
        .btn-primary-cta {
          background: #3B82F6;
          border-radius: 8px;
          padding: 9px 18px;
          font-weight: 600;
          font-size: 18px;
          letter-spacing: 0.025em;
          text-transform: none;
          box-shadow: 0 4px 14px 0 rgba(59, 130, 246, 0.25);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          color: white;
        }
        
        .btn-primary-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px 0 rgba(59, 130, 246, 0.35);
          background: #2563EB;
        }
        
        /* Service Cards */
        .service-card {
          background: linear-gradient(145deg, #12172B, #0A0E1A);
          border: 1px solid rgba(59, 130, 246, 0.1);
          border-radius: 16px;
          padding: 40px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .service-card:hover {
          transform: translateY(-8px);
          border-color: rgba(59, 130, 246, 0.3);
          box-shadow: 
            0 20px 40px -15px rgba(0, 0, 0, 0.5),
            0 0 40px -10px rgba(59, 130, 246, 0.2);
        }
        
        /* Iconography */
        .icon-standard {
          width: 24px;
          height: 24px;
          stroke-width: 1.5px;
        }
        
        /* Micro-Interactions & Advanced Animations */
        
        /* Simplified Animations - Main Site Aligned */
        
        /* Essential Fade-Up Animation */
        .fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .fade-in-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Simple Card Hover */
        .hover-lift {
          transition: transform 0.3s ease-out;
        }
        
        .hover-lift:hover {
          transform: translateY(-2px);
        }
        
        /* Button Transitions */
        .btn-primary-cta {
          transition: all 0.3s ease-out;
        }
        
        .btn-primary-cta:hover {
          transform: translateY(-1px);
        }
        
        /* Subtle Background Animation */
        .hero-gradient-mesh {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255, 107, 53, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.04) 0%, transparent 50%);
          animation: gradientFloat 15s ease-in-out infinite;
        }
        
        @keyframes gradientFloat {
          0%, 100% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
        }
        
        /* Simple Scroll Indicator */
        .scroll-bounce {
          animation: gentleBounce 2s ease-in-out infinite;
        }
        
        @keyframes gentleBounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }
        
        /* Trust Logo Animation */
        .trust-logo {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out;
        }
        
        .trust-logo.animate-in {
          opacity: 0.6;
          transform: translateY(0);
        }
        
        .trust-logo:hover {
          opacity: 1;
          transform: translateY(-2px);
        }
        
        /* Backdrop Blur for Floating Elements */
        .floating-element {
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        
        /* Radial Gradient Helper */
        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }
        
        /* Mobile Responsive */
        @media (max-width: 768px) {
          .btn-primary-cta {
            padding: 7px 14px;
            font-size: 16px;
          }
        }

        /* Timeline Animation Styles */
        @keyframes slideInFromLeft {
          from { transform: translateX(-100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes slideInFromRight {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); }
          50% { box-shadow: 0 0 0 20px rgba(59, 130, 246, 0); }
        }

        .slide-left { animation: slideInFromLeft 0.8s ease-out forwards; }
        .slide-right { animation: slideInFromRight 0.8s ease-out forwards; }
        .pulse-glow { animation: pulseGlow 2s infinite; }

        .timeline-dot {
          position: relative;
          background: linear-gradient(135deg, #ef4444, #dc2626);
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .timeline-dot.solution {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
        }

        .metric-card {
          background: rgba(18, 23, 43, 0.95);
          border: 1px solid rgba(59, 130, 246, 0.2);
        }

        .problem-card {
          background: linear-gradient(to-b, #fef2f2, #ffffff);
          border: 1px solid rgba(239, 68, 68, 0.2);
          border-left: 3px solid #ef4444;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
        }

        .solution-card {
          background: linear-gradient(to-b, #f0f9ff, #ffffff);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-left: 3px solid #3b82f6;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
        }

        /* Hero Section Responsive Images - Clean Background */
        .hero-section picture {
          width: 100%;
          height: 100%;
        }

        .hero-section picture img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Mobile image positioning - center the construction worker */
        @media (max-width: 767px) {
          .hero-section picture img {
            object-position: 30% center;
          }
        }

        /* Desktop image positioning */
        @media (min-width: 768px) {
          .hero-section picture img {
            object-position: center center;
          }
        }

        /* Content container styling - clean and simple */
        .hero-content-box {
          background-color: transparent;
          border-radius: 16px;
          padding: 40px;
          border: none;
          color: white;
          /* Fully transparent, no overlay or border */
        }

        /* Mobile responsive adjustments for content box */
        @media (max-width: 768px) {
          .hero-content-box {
            padding: 32px 24px;
            margin: 0 16px;
          }
        }
        `}
      </style>

      {/* Hero Section */}
<section id="hero" className="hero-section relative min-h-screen pt-16 flex items-center justify-center overflow-hidden">
  {/* Background Image Container with Overlays */}
  <div className="absolute inset-0">
    {/* Responsive Background Image using Picture Element */}
    <picture className="absolute inset-0">
            <source 
              media="(min-width: 768px)" 
              srcSet="/images/Google_AI_Studio_2025-08-15T04_58_21.092Z.png"
            />
            <source 
              media="(max-width: 767px)" 
              srcSet="/images/Google_AI_Studio_2025-08-15T04_58_21.092Z.png"
            />
            <img 
              src="/images/Google_AI_Studio_2025-08-15T04_58_21.092Z.png" 
        alt="Professional construction site with modern connectivity infrastructure" 
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        fetchPriority="high"
      />
    </picture>
    
    {/* Semi-transparent overlay for entire hero section */}
  <div className="absolute inset-0 bg-black/50"></div>
  </div>
  
  {/* Content - Properly centered */}
  <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
    <div className="text-center">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight fade-in-up">
        Connected in 48 Hours.
        <br/>
        <span className="text-[#3B82F6]">Not 8 Weeks.</span>
      </h1>
      
      <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed fade-in-up">
        Complete connectivity infrastructure for DMV construction sites. Internet, coverage, and surveillance deployed before your next morning meeting.
      </p>
      
      <button className="btn-primary-cta hover-lift fade-in-up mb-8">
        <a href="/my-app#contact" className="btn-primary-cta hover-lift fade-in-up">Schedule Your Site Assessment</a>
      </button>
      
      <p className="text-white/70 text-sm md:text-base fade-in-up">
        Your Trusted Partner for Projects in Virginia, Maryland, and DC
      </p>
    </div>
  </div>
  
  {/* Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-bounce z-10">
    <ChevronDown className="w-6 h-6 text-white/60" />
  </div>
</section>

      {/* Problem/Solution Section - Timeline-based Design */}
      <section id="problem" className="py-24 sm:py-32 bg-white relative overflow-hidden">
        {/* Animated Background Pattern - DISABLED */}
        {/*
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(59, 130, 246, 0.05) 35px, rgba(59, 130, 246, 0.05) 70px)"}}></div>
        </div>
        */}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header - Refined */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-sm font-medium text-neutral-600 tracking-[0.2em] uppercase mb-6 block">The Challenge</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-6">
              Every Day <span className="text-red-500">Offline</span>
              <br/>
              <span className="text-2xl md:text-3xl font-normal text-neutral-600">Costs You Thousands</span>
            </h2>
            <p className="text-lg text-neutral-600 font-light leading-relaxed">
              See how Construction Connect transforms your timeline from months to hours.
            </p>
          </div>

          {/* Interactive Timeline Comparison */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Traditional Timeline */}
            <div className="relative slide-left">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-black mb-2">Traditional ISP Timeline</h3>
                <p className="text-neutral-600 font-light">The costly reality of waiting</p>
              </div>
              
              <div className="relative pl-8">
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-400 to-red-600"></div>
                
                <div className="space-y-8">
                  <div className="relative flex items-start">
                    <div className="timeline-dot absolute -left-5"></div>
                    <div className="problem-card rounded-xl p-6 ml-8 hover:shadow-lg transition-shadow">
                      <div className="text-xs font-bold text-red-600 mb-1">WEEK 1-2</div>
                      <h4 className="font-bold text-black mb-2">Initial Site Survey</h4>
                      <p className="text-sm text-neutral-500">Waiting for technician availability</p>
                      <div className="mt-3 text-red-600 font-bold">-$10,000 productivity</div>
                    </div>
                  </div>
                  
                  <div className="relative flex items-start">
                    <div className="timeline-dot absolute -left-5"></div>
                    <div className="problem-card rounded-xl p-6 ml-8 hover:shadow-lg transition-shadow">
                      <div className="text-xs font-bold text-red-600 mb-1">WEEK 3-4</div>
                      <h4 className="font-bold text-black mb-2">Permit & Planning</h4>
                      <p className="text-sm text-neutral-500">Infrastructure requirements assessment</p>
                      <div className="mt-3 text-red-600 font-bold">-$10,000 delays</div>
                    </div>
                  </div>
                  
                  <div className="relative flex items-start">
                    <div className="timeline-dot absolute -left-5"></div>
                    <div className="problem-card rounded-xl p-6 ml-8 hover:shadow-lg transition-shadow">
                      <div className="text-xs font-bold text-red-600 mb-1">WEEK 5-8</div>
                      <h4 className="font-bold text-black mb-2">Cable Installation</h4>
                      <p className="text-sm text-neutral-500">Trenching and infrastructure build</p>
                      <div className="mt-3 text-red-600 font-bold">-$20,000 lost time</div>
                    </div>
                  </div>
                  
                  <div className="relative flex items-start">
                    <div className="timeline-dot absolute -left-5"></div>
                    <div className="problem-card rounded-xl p-6 ml-8 hover:shadow-lg transition-shadow opacity-50">
                      <div className="text-xs font-bold text-red-600 mb-1">WEEK 9+</div>
                      <h4 className="font-bold text-black mb-2">Maybe Connected</h4>
                      <p className="text-sm text-neutral-500">If everything goes perfectly...</p>
                      <div className="mt-3 text-red-600 font-bold">Total: -$40,000+</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Construction Connect Timeline */}
            <div className="relative slide-right">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-black mb-2">Construction Connect</h3>
                <p className="text-blue-600 font-medium">Connected. This week.</p>
              </div>
              
              <div className="relative pl-8">
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-blue-600"></div>
                
                <div className="space-y-8">
                  <div className="relative flex items-start">
                    <div className="timeline-dot solution absolute -left-5 pulse-glow"></div>
                    <div className="solution-card rounded-xl p-6 ml-8 hover:shadow-lg transition-shadow">
                      <div className="text-xs font-bold text-blue-600 mb-1">HOUR 1</div>
                      <h4 className="font-bold text-black mb-2">Immediate Response</h4>
                      <p className="text-sm text-neutral-500">Call us, get scheduled today</p>
                      <div className="mt-3 text-blue-600 font-bold">Same day assessment</div>
                    </div>
                  </div>
                  
                  <div className="relative flex items-start">
                    <div className="timeline-dot solution absolute -left-5"></div>
                    <div className="solution-card rounded-xl p-6 ml-8 hover:shadow-lg transition-shadow">
                      <div className="text-xs font-bold text-blue-600 mb-1">HOUR 24</div>
                      <h4 className="font-bold text-black mb-2">Equipment Deployed</h4>
                      <p className="text-sm text-neutral-500">Satellite & network gear installed</p>
                      <div className="mt-3 text-blue-600 font-bold">200+ Mbps active</div>
                    </div>
                  </div>
                  
                  <div className="relative flex items-start">
                    <div className="timeline-dot solution absolute -left-5"></div>
                    <div className="solution-card rounded-xl p-6 ml-8 hover:shadow-lg transition-shadow">
                      <div className="text-xs font-bold text-blue-600 mb-1">HOUR 48</div>
                      <h4 className="font-bold text-black mb-2">Fully Operational</h4>
                      <p className="text-sm text-neutral-500">Complete site coverage & security</p>
                      <div className="mt-3 text-blue-600 font-bold">100% connected</div>
                    </div>
                  </div>
                  
                  <div className="relative flex items-start">
                    <div className="timeline-dot solution absolute -left-5"></div>
                    <div className="solution-card rounded-xl p-6 ml-8 hover:shadow-lg transition-shadow border-2 border-blue-500">
                      <div className="text-xs font-bold text-blue-600 mb-1">RESULT</div>
                      <h4 className="font-bold text-black mb-2">Project On Track</h4>
                      <p className="text-sm text-neutral-500">Zero downtime, maximum productivity</p>
                      <div className="mt-3 text-blue-600 font-bold text-lg">+$40,000 Saved</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Comparison Metrics */}
          <div className="bg-black rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
            
            <h3 className="text-3xl font-bold text-center text-white mb-12">
              The Real Cost of Waiting
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 text-center hover:border-neutral-700 transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className="text-5xl font-bold text-red-500 mb-2">56</div>
                <div className="text-white font-medium">Days Average Wait</div>
                <div className="text-sm text-neutral-400 mt-2">Traditional ISP</div>
              </div>
              
              <div className="bg-neutral-900 border-2 border-blue-500 rounded-xl p-8 text-center transform scale-105">
                <div className="text-5xl font-bold text-blue-400">48</div>
                <div className="text-white font-medium">Hours to Connect</div>
                <div className="text-sm text-blue-400 mt-2 font-semibold">Construction Connect</div>
              </div>
              
              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8 text-center hover:border-neutral-700 transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className="text-5xl font-bold text-white mb-2">92%</div>
                <div className="text-white font-medium">Time Saved</div>
                <div className="text-sm text-neutral-400 mt-2">Back to work faster</div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-lg text-neutral-300">
                Every week offline costs you <span className="text-red-400 font-bold">$5,000+</span> in lost productivity.
              </p>
              <p className="text-2xl text-blue-400 font-bold mt-2">
                We get you connected in 48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section id="services" className="py-24 sm:py-32 bg-gradient-to-b from-black via-neutral-950 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 fade-in-up">Complete Connectivity Solution</h2>
            <p className="text-lg text-neutral-300 font-light fade-in-up">Everything your job site needs to stay connected, productive, and secure</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 hover:border-neutral-700 rounded-2xl p-10 lg:p-12 transition-all duration-300 hover:-translate-y-2 fade-in-up">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3B82F6] to-[#2563EB] rounded-xl flex items-center justify-center mb-6">
                <Satellite className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl lg:text-4xl font-semibold text-white mb-4">Job Site Internet Backbone</h3>
              <p className="text-base text-neutral-300 font-light mb-6">Enterprise-grade satellite connectivity engineered for construction environments. Operational within hours.</p>
              <div className="flex items-center text-blue-400 text-sm font-medium"><Clock className="icon-standard mr-2" /><span>Setup in &lt; 24 hours</span></div>
            </div>
            <div className="bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 hover:border-neutral-700 rounded-2xl p-10 lg:p-12 transition-all duration-300 hover:-translate-y-2 fade-in-up">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3B82F6] to-[#2563EB] rounded-xl flex items-center justify-center mb-6">
                <Wifi className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl lg:text-4xl font-semibold text-white mb-4">Complete Wi-Fi Coverage</h3>
              <p className="text-base text-neutral-300 font-light mb-6">Intelligent mesh network architecture that adapts to your site's evolving footprint. Every device, every zone, consistently connected.</p>
              <div className="flex items-center text-blue-400 text-sm font-medium"><CheckCircle className="icon-standard mr-2" /><span>Trailer-to-Trench Coverage</span></div>
            </div>
            <div className="bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 hover:border-neutral-700 rounded-2xl p-10 lg:p-12 transition-all duration-300 hover:-translate-y-2 fade-in-up">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3B82F6] to-[#2563EB] rounded-xl flex items-center justify-center mb-6">
                <Camera className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl lg:text-4xl font-semibold text-white mb-4">HD Security & Surveillance</h3>
              <p className="text-base text-neutral-300 font-light mb-6">Professional-grade visual security with remote monitoring capabilities. Document progress, deter theft, maintain compliance.</p>
              <div className="flex items-center text-blue-400 text-sm font-medium"><Shield className="icon-standard mr-2" /><span>Remote Access, Anywhere</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Proof Gallery with ROI Case Studies */}
      <section id="results" className="py-24 sm:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0A0E1A] mb-4 fade-in-up">Proven Results, Measurable ROI</h2>
            <p className="text-lg text-[#4A5568] font-light fade-in-up">Real installations delivering quantifiable business impact across the DMV</p>
            {/* Note: Consider replacing with actual project photos for maximum authenticity */}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative h-[480px] rounded-2xl overflow-hidden bg-gradient-to-b from-neutral-900/30 to-black/30 backdrop-blur-sm border border-neutral-800/50 group transition-all duration-300 hover:-translate-y-4 fade-in-up">
              <div className="absolute inset-0">
                <img 
                  src="/images/Gemini_Generated_Image_t7u8prt7u8prt7u8.png" 
                  alt="Storm-proof Starlink satellite installation on a commercial roof" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="text-xl font-semibold text-white mb-2">Fairfax Mixed-Use Development</h4>
                <p className="text-sm text-neutral-300 mb-3">Storm-proof installation eliminated 3 weather-related outages, saving $15,000 in downtime.</p>
                <div className="text-sm text-blue-400 font-medium">ROI: 340% in first 6 months</div>
              </div>
            </div>
            <div className="relative h-[480px] rounded-2xl overflow-hidden bg-gradient-to-b from-neutral-900/30 to-black/30 backdrop-blur-sm border border-neutral-800/50 group transition-all duration-300 hover:-translate-y-4 fade-in-up">
              <div className="absolute inset-0">
                <img src="/images/Whisk_c8d18d14d2.jpg" alt="Ruggedized Wi-Fi access point on a construction site" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="text-xl font-semibold text-white mb-2">Loudoun Industrial Complex</h4>
                <p className="text-sm text-neutral-300 mb-3">5-acre coverage enabled real-time BIM collaboration, reducing rework by 60%.</p>
                <div className="text-sm text-blue-400 font-medium">Cost Savings: $89,000 vs delays</div>
              </div>
            </div>
            <div className="relative h-[480px] rounded-2xl overflow-hidden bg-gradient-to-b from-neutral-900/30 to-black/30 backdrop-blur-sm border border-neutral-800/50 group transition-all duration-300 hover:-translate-y-4 fade-in-up">
              <div className="absolute inset-0">
                <img src="/images/Whisk_df20144b50.jpg" alt="24/7 HD surveillance camera protecting construction site materials" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="text-xl font-semibold text-white mb-2">Arlington High-Rise Project</h4>
                <p className="text-sm text-neutral-300 mb-3">24/7 surveillance prevented theft of $45,000 in copper and prevented 2 break-ins.</p>
                <div className="text-sm text-blue-400 font-medium">Security ROI: 1,200% annually</div>
              </div>
            </div>
            <div className="relative h-[480px] rounded-2xl overflow-hidden bg-gradient-to-b from-neutral-900/30 to-black/30 backdrop-blur-sm border border-neutral-800/50 group transition-all duration-300 hover:-translate-y-4 fade-in-up">
              <div className="absolute inset-0">
                <img src="/images/Whisk_du2n2qxzju.jpg" alt="Professional network rack installation in a site office trailer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="text-xl font-semibold text-white mb-2">Montgomery County Office Park</h4>
                <p className="text-sm text-neutral-300 mb-3">Professional network center enabled remote inspections, cutting approval time by 40%.</p>
                <div className="text-sm text-blue-400 font-medium">Time Savings: 12 days faster</div>
              </div>
            </div>
          </div>
          
          {/* ROI Summary Bar */}
          <div className="mt-12 bg-white rounded-xl p-8 shadow-lg fade-in-up">
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#0A0E1A]">Average Client Results</h3>
            </div>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="border-r border-gray-200 last:border-r-0">
                <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#3B82F6]">48hrs</div>
                <div className="text-sm md:text-base font-medium text-[#6B7280]">Average Deploy Time</div>
              </div>
              <div className="border-r border-gray-200 last:border-r-0">
                <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#3B82F6]">$52K</div>
                <div className="text-sm md:text-base font-medium text-[#6B7280]">Average Cost Savings</div>
              </div>
              <div className="border-r border-gray-200 last:border-r-0">
                <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#3B82F6]">280%</div>
                <div className="text-sm md:text-base font-medium text-[#6B7280]">Average ROI</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#3B82F6]">99.8%</div>
                <div className="text-sm md:text-base font-medium text-[#6B7280]">Uptime Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 sm:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0A0E1A] mb-4 fade-in-up">Your Questions, Answered</h2>
            <p className="text-lg md:text-xl font-light text-[#4A5568] fade-in-up">Everything you need to know about Construction Connect</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-neutral-100 border border-gray-200 rounded-xl transition-colors hover:bg-gray-100 fade-in-up">
                <summary className="flex items-center justify-between cursor-pointer p-6">
                  <h3 className="text-base md:text-lg font-semibold text-[#0A0E1A] pr-8">{faq.question}</h3>
                  <ChevronDown className="w-5 h-5 text-[#6B7280] group-open:rotate-180 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-base md:text-lg font-light text-[#4A5568]">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-24 sm:py-32 bg-gradient-to-b from-neutral-950 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 fade-in-up">Ready When You Are.</h2>
            <p className="text-lg md:text-xl font-light text-neutral-400 mb-10 fade-in-up">Don't let poor connectivity be the weak link in your project. Partner with the DMV's leading experts in job site technology solutions.</p>
            <button className="btn-primary-cta fade-in-up">Schedule Your Site Assessment & Quote<ArrowRight className="ml-3 icon-standard" /></button>
            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center text-neutral-400 fade-in-up">
              <a href="tel:571-999-6915" className="flex items-center justify-center hover:text-blue-500 transition-colors text-base md:text-lg font-light"><Phone className="icon-standard mr-2" /><span>(571) 999-6915</span></a>
              <a href="mailto:connect@theorbittech.com" className="flex items-center justify-center hover:text-blue-500 transition-colors text-base md:text-lg font-light"><Mail className="icon-standard mr-2" /><span>connect@theorbittech.com</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-Only Sticky Click-to-Call Footer - DISABLED */}
      {/* 
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-neutral-950/95 floating-element p-4 z-50 shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.3)] border-t border-white/10">
        <a 
          href="tel:571-999-6915" 
          className="w-full btn-primary-cta text-lg flex items-center justify-center"
        >
          <Phone className="icon-standard mr-3" />
          Click to Call Now
        </a>
      </div>
      */}
    </div>
  );
};

export default ConstructionConnectLanding;
