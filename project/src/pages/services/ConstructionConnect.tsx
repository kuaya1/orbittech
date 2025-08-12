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
  Camera,
  XCircle
} from 'lucide-react';
import { useEffect } from 'react';

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

  // Intersection Observer for fade-up animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach((el) => observer.observe(el));

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

  // Magnetic button effect
  useEffect(() => {
    const magneticButtons = document.querySelectorAll('.btn-magnetic');
    
    magneticButtons.forEach((button) => {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = button.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        if (distance < 150) { // 150px proximity for magnetic effect
          const strength = Math.max(0, (150 - distance) / 150);
          const moveX = deltaX * strength * 0.3;
          const moveY = deltaY * strength * 0.3;
          
          (button as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
        } else {
          (button as HTMLElement).style.transform = 'translate(0, 0)';
        }
      };

      const handleMouseLeave = () => {
        (button as HTMLElement).style.transform = 'translate(0, 0)';
      };

      document.addEventListener('mousemove', handleMouseMove);
      button.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        button.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, []);

  // Parallax scrolling effect
  useEffect(() => {
    const handleParallax = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-bg');
      
      parallaxElements.forEach((element) => {
        const rate = scrolled * -0.1; // 10% offset for subtle parallax
        (element as HTMLElement).style.transform = `translateY(${rate}px)`;
      });
    };

    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Scroll Progress Indicator */}
      <div className="scroll-progress">
        <div className="scroll-progress-bar" id="scroll-progress-bar"></div>
      </div>
      
      {/* Quick Navigation - Desktop Only */}
      <div className="hidden lg:block fixed right-6 top-1/2 transform -translate-y-1/2 z-40">
        <nav className="bg-white/80 floating-element rounded-full p-2 shadow-lg border border-white/20">
          <div className="space-y-2">
            <a href="#hero" className="block w-3 h-3 rounded-full bg-gray-300 hover:bg-[#00D4FF] transition-colors" title="Hero"></a>
            <a href="#problem" className="block w-3 h-3 rounded-full bg-gray-300 hover:bg-[#00D4FF] transition-colors" title="Problem/Solution"></a>
            <a href="#services" className="block w-3 h-3 rounded-full bg-gray-300 hover:bg-[#00D4FF] transition-colors" title="Services"></a>
            <a href="#results" className="block w-3 h-3 rounded-full bg-gray-300 hover:bg-[#00D4FF] transition-colors" title="Results"></a>
            <a href="#faq" className="block w-3 h-3 rounded-full bg-gray-300 hover:bg-[#00D4FF] transition-colors" title="FAQ"></a>
            <a href="#contact" className="block w-3 h-3 rounded-full bg-gray-300 hover:bg-[#00D4FF] transition-colors" title="Contact"></a>
          </div>
        </nav>
      </div>

      {/* Schema injection for SEO */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@600;700&family=Inter:wght@400;500&display=swap');
        
        /* Typography System */
        .headline-h1 {
          font-family: 'Inter Tight', sans-serif;
          font-weight: 700;
          font-size: 72px;
          line-height: 1.1;
        }
        
        .headline-h2 {
          font-family: 'Inter Tight', sans-serif;
          font-weight: 700;
          font-size: 48px;
          line-height: 1.2;
        }
        
        .headline-h3 {
          font-family: 'Inter Tight', sans-serif;
          font-weight: 600;
          font-size: 32px;
          line-height: 1.3;
        }
        
        .headline-h4 {
          font-family: 'Inter Tight', sans-serif;
          font-weight: 600;
          font-size: 24px;
          line-height: 1.4;
        }
        
        .body-large {
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          font-size: 20px;
          line-height: 1.7;
        }
        
        .body-regular {
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          font-size: 18px;
          line-height: 1.65;
        }
        
        .body-small {
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          font-size: 16px;
          line-height: 1.6;
        }
        
        .caption {
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 14px;
          line-height: 1.5;
        }
        
        /* UI Component Style Guide */
        
        /* Primary CTA Button */
        .btn-primary-cta {
          background: linear-gradient(135deg, #00D4FF 0%, #0099CC 100%);
          border-radius: 8px;
          padding: 20px 40px;
          font-weight: 600;
          font-size: 18px;
          letter-spacing: 0.025em;
          text-transform: none;
          box-shadow: 0 4px 14px 0 rgba(0, 212, 255, 0.25);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          color: #0A0E1A;
        }
        
        .btn-primary-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px 0 rgba(0, 212, 255, 0.35);
          background: linear-gradient(135deg, #00E5FF 0%, #00AADD 100%);
        }
        
        /* Service Cards */
        .service-card {
          background: linear-gradient(145deg, #12172B, #0A0E1A);
          border: 1px solid rgba(0, 212, 255, 0.1);
          border-radius: 16px;
          padding: 40px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .service-card:hover {
          transform: translateY(-8px);
          border-color: rgba(0, 212, 255, 0.3);
          box-shadow: 
            0 20px 40px -15px rgba(0, 0, 0, 0.5),
            0 0 40px -10px rgba(0, 212, 255, 0.2);
        }
        
        /* Case Study Cards */
        .case-study-card {
          background: #FFFFFF;
          border: 1px solid #E5E7EB;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        
        .case-study-card:hover {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.15);
          border-color: rgba(0, 212, 255, 0.3);
        }
        
        /* Iconography */
        .icon-standard {
          width: 24px;
          height: 24px;
          stroke-width: 1.5px;
        }
        
        .icon-feature {
          width: 32px;
          height: 32px;
          stroke-width: 1.5px;
        }
        
        .icon-glow {
          filter: drop-shadow(0 0 8px rgba(0, 212, 255, 0.3));
        }
        
        /* Micro-Interactions & Advanced Animations */
        
        /* Animated Gradient Mesh for Hero Background */
        .hero-gradient-mesh {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 30%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255, 107, 53, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(0, 212, 255, 0.06) 0%, transparent 50%);
          animation: gradientFloat 15s ease-in-out infinite;
        }
        
        @keyframes gradientFloat {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.8;
          }
          33% {
            transform: translate(-10px, -20px) scale(1.05);
            opacity: 1;
          }
          66% {
            transform: translate(20px, 10px) scale(0.95);
            opacity: 0.9;
          }
        }
        
        /* Magnetic CTA Button Effect */
        .btn-magnetic {
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .btn-magnetic::before {
          content: '';
          position: absolute;
          top: -20px;
          left: -20px;
          right: -20px;
          bottom: -20px;
          border-radius: 20px;
          pointer-events: none;
        }
        
        /* Enhanced Service Card Hover with Inner Glow */
        .service-card {
          background: linear-gradient(145deg, #12172B, #0A0E1A);
          border: 1px solid rgba(0, 212, 255, 0.1);
          border-radius: 16px;
          padding: 40px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at center, rgba(0, 212, 255, 0.15) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.6s ease;
          border-radius: 16px;
        }
        
        .service-card:hover::before {
          opacity: 1;
          animation: innerGlowPulse 1.5s ease-out;
        }
        
        .service-card:hover {
          transform: translateY(-8px);
          border-color: rgba(0, 212, 255, 0.3);
          box-shadow: 
            0 20px 40px -15px rgba(0, 0, 0, 0.5),
            0 0 40px -10px rgba(0, 212, 255, 0.2);
        }
        
        @keyframes innerGlowPulse {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        /* FAQ Accordion Smooth Animations */
        .faq-details {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .faq-details[open] {
          animation: accordionExpand 0.4s ease-out;
        }
        
        .faq-details[open] .faq-answer {
          animation: fadeInUp 0.5s ease-out 0.1s both;
        }
        
        @keyframes accordionExpand {
          from {
            max-height: 0;
            opacity: 0;
          }
          to {
            max-height: 500px;
            opacity: 1;
          }
        }
        
        .faq-answer {
          opacity: 0;
          transform: translateY(10px);
        }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Trust Logos Sequential Animation */
        .trust-logo {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .trust-logo.animate-in {
          opacity: 0.6;
          transform: translateY(0);
        }
        
        .trust-logo:hover {
          opacity: 1;
          transform: translateY(-2px);
        }
        
        /* Enhanced Progress Bar with Shimmer */
        .scroll-progress {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: rgba(0, 212, 255, 0.2);
          z-index: 1000;
        }
        
        .scroll-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #00D4FF 0%, #FF6B35 100%);
          width: 0%;
          transition: width 0.25s ease-out;
          position: relative;
          overflow: hidden;
        }
        
        .scroll-progress-bar::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%);
          animation: shimmer 2s ease-in-out infinite;
        }
        
        @keyframes shimmer {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
        
        /* Animated Scroll Indicator */
        .scroll-bounce {
          animation: gentleBounce 2s ease-in-out infinite;
        }
        
        @keyframes gentleBounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-8px);
          }
          60% {
            transform: translateY(-4px);
          }
        }
        
        /* Intersection Observer Fade-Up Animations */
        .fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .fade-in-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Parallax Background Effect */
        .parallax-bg {
          transform: translateZ(0);
          transition: transform 0.1s ease-out;
        }
        
        /* Floating Elements with Backdrop Blur */
        .floating-element {
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        
        /* Radial Gradient for Hero Overlay */
        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }
        
        /* Mobile responsive typography */
        @media (max-width: 768px) {
          .headline-h1 {
            font-size: 48px;
          }
          
          .headline-h2 {
            font-size: 36px;
          }
          
          .headline-h3 {
            font-size: 24px;
          }
          
          .headline-h4 {
            font-size: 20px;
          }
          
          .btn-primary-cta {
            padding: 16px 32px;
            font-size: 16px;
          }
          
          .service-card {
            padding: 32px;
          }
          
          .hero-gradient-mesh {
            animation-duration: 20s;
          }
        }
        
        @keyframes kenburns-effect {
          0% {
            transform: scale(1) translate(0, 0);
          }
          100% {
            transform: scale(1.1) translate(-2%, 2%);
          }
        }
        
        .animate-kenburns {
          animation: kenburns-effect 20s ease-out forwards;
        }
        
        @keyframes pulse-slow {
          50% {
            box-shadow: 0 0 0 5px rgba(0, 212, 255, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(0, 212, 255, 0);
          }
        }
        
        .animate-pulse-slow {
          box-shadow: 0 0 0 0 rgba(0, 212, 255, 1);
          animation: pulse-slow 2s infinite;
        }
        
        .scroll-progress {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: rgba(0, 212, 255, 0.3);
          z-index: 1000;
        }
        
        .scroll-progress-bar {
          height: 100%;
          background: #00D4FF;
          width: 0%;
          transition: width 0.25s ease-out;
        }
        
        .fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        
        .fade-in-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
        `}
      </style>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image Container with Overlays */}
        <div className="absolute inset-0" style={{ zIndex: 1 }}>
          <img 
            src="/images/Whisk_7728c5d747 (1).jpg" 
            alt="Construction site background" 
            className="absolute inset-0 w-full h-full object-cover opacity-70 animate-kenburns parallax-bg"
          />
          {/* Overlays constrained to image */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A0E1A]/70 via-[#0A0E1A]/65 to-[#12172B]/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-radial from-black/60 via-transparent to-transparent"></div>
        </div>
        
        {/* Animated Gradient Mesh */}
        <div className="hero-gradient-mesh" style={{ zIndex: 2 }}></div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 py-24 text-center" style={{ zIndex: 10 }}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight fade-in-up" style={{ textShadow: '0 4px 8px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.9)' }}>
            Connected in 48 Hours.
            <br/>
            <span className="text-[#00D4FF]">Not 8 Weeks.</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-[#B8BCC8] mb-8 max-w-3xl mx-auto leading-relaxed fade-in-up" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
            Complete connectivity infrastructure for DMV construction sites. Internet, coverage, and surveillance deployed before your next morning meeting.
          </h2>
          
          <button className="btn-primary-cta btn-magnetic animate-pulse-slow fade-in-up">
            Schedule Your Site Assessment
          </button>
          
          <p className="mt-8 text-[#B8BCC8] caption fade-in-up" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
            Your Trusted Partner for Projects in Virginia, Maryland, and DC
          </p>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-bounce">
            <ChevronDown className="icon-standard text-[#00D4FF] opacity-60" />
          </div>
        </div>
      </section>

      {/* Trust Bar Component */}
      <section className="bg-[#12172B] py-8">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-center caption text-[#6B7280] mb-6 tracking-wider fade-in-up">
            TRUSTED BY DMV'S PREMIER CONSTRUCTION FIRMS
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
            {/* Replace with your actual logo files */}
            <div className="flex justify-center trust-logo"><img className="h-10 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" src="/logos/turner-construction-logo.svg" alt="Turner Construction"/></div>
            <div className="flex justify-center trust-logo"><img className="h-10 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" src="/logos/clark-construction-logo.svg" alt="Clark Construction"/></div>
            <div className="flex justify-center trust-logo"><img className="h-10 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" src="/logos/whiting-turner-logo.svg" alt="Whiting-Turner"/></div>
            <div className="flex justify-center trust-logo"><img className="h-10 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" src="/logos/balfour-beatty-logo.svg" alt="Balfour Beatty"/></div>
            <div className="flex justify-center trust-logo"><img className="h-10 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" src="/logos/abc-metro-logo.svg" alt="ABC Metro Washington"/></div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section - Apple-Style Minimal Design */}
      <section id="problem" className="py-32 bg-white relative overflow-hidden">
        {/* Subtle Tech Pattern Background */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-8 relative">
          {/* Minimal Section Header */}
          <div className="text-center mb-20 fade-in-up">
            <div className="inline-block mb-6">
              <span className="text-sm font-medium text-[#6B7280] tracking-[0.2em] uppercase">Before & After</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-light text-[#1D1D1F] mb-6 tracking-tight">
              The Construction<br/>
              <span className="font-semibold text-[#0A0E1A]">Connectivity Challenge</span>
            </h2>
            <p className="text-xl text-[#86868B] max-w-2xl mx-auto font-light leading-relaxed">
              Traditional approaches fail construction projects.<br/>
              Smart infrastructure changes everything.
            </p>
          </div>

          {/* Split Screen Layout */}
          <div className="grid lg:grid-cols-2 gap-1 rounded-3xl overflow-hidden shadow-2xl fade-in-up">
            
            {/* Problem Side - Dark Theme */}
            <div className="bg-gradient-to-br from-[#1D1D1F] to-[#2D2D30] p-12 lg:p-16 relative">
              {/* Subtle Grid Pattern */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 0h40v1H0zM0 20h40v1H0z'/%3E%3Cpath d='M0 0v40h1V0zM20 0v40h1V0z'/%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
              
              <div className="relative z-10">
                {/* Problem Header */}
                <div className="mb-12">
                  <div className="w-12 h-12 bg-[#FF3B30] rounded-2xl flex items-center justify-center mb-6">
                    <XCircle className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="text-sm font-medium text-[#FF3B30] tracking-[0.15em] uppercase mb-4">The Problem</div>
                  <h3 className="text-3xl lg:text-4xl font-semibold text-white leading-tight mb-6">
                    Disconnected<br/>Construction Sites
                  </h3>
                  <p className="text-lg text-[#86868B] font-light leading-relaxed">
                    Legacy infrastructure approaches create cascading delays and mounting costs.
                  </p>
                </div>

                {/* Problem Points */}
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-1 h-16 bg-[#FF3B30] rounded-full mt-1 flex-shrink-0"></div>
                    <div>
                      <div className="text-white font-medium mb-2">8+ Week ISP Delays</div>
                      <div className="text-[#86868B] text-sm leading-relaxed">
                        $40,000+ lost productivity while waiting for traditional internet installation
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-1 h-16 bg-[#FF3B30] rounded-full mt-1 flex-shrink-0"></div>
                    <div>
                      <div className="text-white font-medium mb-2">Communication Breakdown</div>
                      <div className="text-[#86868B] text-sm leading-relaxed">
                        $5,000/day in delays from poor connectivity affecting coordination
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-1 h-16 bg-[#FF3B30] rounded-full mt-1 flex-shrink-0"></div>
                    <div>
                      <div className="text-white font-medium mb-2">Security Vulnerabilities</div>
                      <div className="text-[#86868B] text-sm leading-relaxed">
                        $25,000+ annual losses from theft on unmonitored sites
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Insight */}
                <div className="mt-12 pt-8 border-t border-[#48484A]">
                  <div className="text-[#86868B] text-sm italic">
                    "Every offline day multiplies project delays exponentially."
                  </div>
                </div>
              </div>
            </div>

            {/* Solution Side - Light Theme */}
            <div className="bg-gradient-to-br from-[#F5F5F7] to-white p-12 lg:p-16 relative">
              {/* Subtle Tech Pattern */}
              <div className="absolute inset-0 opacity-3" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300D4FF' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
              
              <div className="relative z-10">
                {/* Solution Header */}
                <div className="mb-12">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00D4FF] to-[#0099CC] rounded-2xl flex items-center justify-center mb-6">
                    <CheckCircle className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="text-sm font-medium text-[#00D4FF] tracking-[0.15em] uppercase mb-4">The Solution</div>
                  <h3 className="text-3xl lg:text-4xl font-semibold text-[#1D1D1F] leading-tight mb-6">
                    Intelligent<br/>Infrastructure
                  </h3>
                  <p className="text-lg text-[#6B7280] font-light leading-relaxed">
                    Purpose-built connectivity that deploys in hours, not weeks.
                  </p>
                </div>

                {/* Solution Features */}
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#00D4FF] to-[#0099CC] rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <Satellite className="w-4 h-4 text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="text-[#1D1D1F] font-medium mb-2">48-Hour Deployment</div>
                      <div className="text-[#6B7280] text-sm leading-relaxed">
                        Enterprise satellite internet bypassing traditional ISP timelines entirely
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#00D4FF] to-[#0099CC] rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <Wifi className="w-4 h-4 text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="text-[#1D1D1F] font-medium mb-2">Complete Coverage</div>
                      <div className="text-[#6B7280] text-sm leading-relaxed">
                        Professional mesh networks covering trailer to top floor
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#00D4FF] to-[#0099CC] rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <Camera className="w-4 h-4 text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="text-[#1D1D1F] font-medium mb-2">Integrated Security</div>
                      <div className="text-[#6B7280] text-sm leading-relaxed">
                        HD surveillance with remote monitoring and instant alerts
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Result */}
                <div className="mt-12 pt-8 border-t border-[#D1D1D6]">
                  <div className="bg-gradient-to-r from-[#00D4FF]/10 to-[#0099CC]/10 rounded-2xl p-6 border border-[#00D4FF]/20">
                    <div className="text-[#1D1D1F] font-medium text-sm">
                      Complete connectivity infrastructure deployed faster and more reliably than any alternative in the DMV market.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats Bar */}
          <div className="mt-16 fade-in-up">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-[#D1D1D6] p-8 shadow-xl">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl lg:text-4xl font-light text-[#1D1D1F] mb-2">48hrs</div>
                  <div className="text-xs text-[#6B7280] font-medium tracking-[0.1em] uppercase">Deploy Time</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-light text-[#1D1D1F] mb-2">$52K</div>
                  <div className="text-xs text-[#6B7280] font-medium tracking-[0.1em] uppercase">Avg Savings</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-light text-[#1D1D1F] mb-2">280%</div>
                  <div className="text-xs text-[#6B7280] font-medium tracking-[0.1em] uppercase">ROI</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-light text-[#1D1D1F] mb-2">99.8%</div>
                  <div className="text-xs text-[#6B7280] font-medium tracking-[0.1em] uppercase">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section id="services" className="py-24 bg-[#0A0E1A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="headline-h2 text-white mb-4 fade-in-up">Complete Connectivity Solution</h2>
            <p className="body-large text-[#B8BCC8] max-w-3xl mx-auto fade-in-up">Everything your job site needs to stay connected, productive, and secure</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="service-card fade-in-up">
              <div className="bg-[#00D4FF] w-16 h-16 rounded-lg flex items-center justify-center mb-6"><Satellite className="icon-feature text-[#0A0E1A]" /></div>
              <h3 className="headline-h4 text-white mb-4">Job Site Internet Backbone</h3>
              <p className="body-small text-[#B8BCC8] mb-6">Enterprise-grade satellite connectivity engineered for construction environments. Operational within hours.</p>
              <div className="flex items-center text-[#FF6B35] caption font-semibold"><Clock className="icon-standard mr-2" /><span>Setup in &lt; 24 hours</span></div>
            </div>
            <div className="service-card fade-in-up">
              <div className="bg-[#00D4FF] w-16 h-16 rounded-lg flex items-center justify-center mb-6"><Wifi className="icon-feature text-[#0A0E1A]" /></div>
              <h3 className="headline-h4 text-white mb-4">Complete Wi-Fi Coverage</h3>
              <p className="body-small text-[#B8BCC8] mb-6">Intelligent mesh network architecture that adapts to your site's evolving footprint. Every device, every zone, consistently connected.</p>
              <div className="flex items-center text-[#FF6B35] caption font-semibold"><CheckCircle className="icon-standard mr-2" /><span>Trailer-to-Trench Coverage</span></div>
            </div>
            <div className="service-card fade-in-up">
              <div className="bg-[#00D4FF] w-16 h-16 rounded-lg flex items-center justify-center mb-6"><Camera className="icon-feature text-[#0A0E1A]" /></div>
              <h3 className="headline-h4 text-white mb-4">HD Security & Surveillance</h3>
              <p className="body-small text-[#B8BCC8] mb-6">Professional-grade visual security with remote monitoring capabilities. Document progress, deter theft, maintain compliance.</p>
              <div className="flex items-center text-[#FF6B35] caption font-semibold"><Shield className="icon-standard mr-2" /><span>Remote Access, Anywhere</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Proof Gallery with ROI Case Studies */}
      <section id="results" className="py-24 bg-[#F7F8FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="headline-h2 text-[#0A0E1A] mb-4 fade-in-up">Proven Results, Measurable ROI</h2>
            <p className="body-large text-[#4A5568] fade-in-up">Real installations delivering quantifiable business impact across the DMV</p>
            {/* Note: Consider replacing with actual project photos for maximum authenticity */}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="case-study-card group transform hover:-translate-y-2 transition-all duration-300 fade-in-up">
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden relative">
                <img 
                  src="/images/Gemini_Generated_Image_t7u8prt7u8prt7u8.png" 
                  alt="Storm-proof Starlink satellite installation on a commercial roof" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h4 className="headline-h4 text-[#0A0E1A] mb-2">Fairfax Mixed-Use Development</h4>
                <p className="body-small text-[#4A5568] mb-2">Storm-proof installation eliminated 3 weather-related outages, saving $15,000 in downtime.</p>
                <div className="caption text-[#10B981] font-semibold">ROI: 340% in first 6 months</div>
              </div>
            </div>
            <div className="case-study-card group transform hover:-translate-y-2 transition-all duration-300 fade-in-up">
              <div className="h-48 bg-gray-300 flex items-center justify-center overflow-hidden"><img src="/images/Whisk_c8d18d14d2.jpg" alt="Ruggedized Wi-Fi access point on a construction site" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/></div>
              <div className="p-4">
                <h4 className="headline-h4 text-[#0A0E1A] mb-2">Loudoun Industrial Complex</h4>
                <p className="body-small text-[#4A5568] mb-2">5-acre coverage enabled real-time BIM collaboration, reducing rework by 60%.</p>
                <div className="caption text-[#10B981] font-semibold">Cost Savings: $89,000 vs delays</div>
              </div>
            </div>
            <div className="case-study-card group transform hover:-translate-y-2 transition-all duration-300 fade-in-up">
              <div className="h-48 bg-gray-300 flex items-center justify-center overflow-hidden"><img src="/images/Whisk_df20144b50.jpg" alt="24/7 HD surveillance camera protecting construction site materials" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/></div>
              <div className="p-4">
                <h4 className="headline-h4 text-[#0A0E1A] mb-2">Arlington High-Rise Project</h4>
                <p className="body-small text-[#4A5568] mb-2">24/7 surveillance prevented theft of $45,000 in copper and prevented 2 break-ins.</p>
                <div className="caption text-[#10B981] font-semibold">Security ROI: 1,200% annually</div>
              </div>
            </div>
            <div className="case-study-card group transform hover:-translate-y-2 transition-all duration-300 fade-in-up">
              <div className="h-48 bg-gray-300 flex items-center justify-center overflow-hidden"><img src="/images/Whisk_du2n2qxzju.jpg" alt="Professional network rack installation in a site office trailer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/></div>
              <div className="p-4">
                <h4 className="headline-h4 text-[#0A0E1A] mb-2">Montgomery County Office Park</h4>
                <p className="body-small text-[#4A5568] mb-2">Professional network center enabled remote inspections, cutting approval time by 40%.</p>
                <div className="caption text-[#10B981] font-semibold">Time Savings: 12 days faster</div>
              </div>
            </div>
          </div>
          
          {/* ROI Summary Bar */}
          <div className="mt-12 bg-white rounded-xl p-8 shadow-lg fade-in-up">
            <div className="text-center mb-6">
              <h3 className="headline-h3 text-[#0A0E1A]">Average Client Results</h3>
            </div>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="border-r border-gray-200 last:border-r-0">
                <div className="headline-h3 text-[#00D4FF]">48hrs</div>
                <div className="caption text-[#6B7280]">Average Deploy Time</div>
              </div>
              <div className="border-r border-gray-200 last:border-r-0">
                <div className="headline-h3 text-[#00D4FF]">$52K</div>
                <div className="caption text-[#6B7280]">Average Cost Savings</div>
              </div>
              <div className="border-r border-gray-200 last:border-r-0">
                <div className="headline-h3 text-[#00D4FF]">280%</div>
                <div className="caption text-[#6B7280]">Average ROI</div>
              </div>
              <div>
                <div className="headline-h3 text-[#00D4FF]">99.8%</div>
                <div className="caption text-[#6B7280]">Uptime Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="headline-h2 text-[#0A0E1A] mb-4 fade-in-up">Your Questions, Answered</h2>
            <p className="body-large text-[#4A5568] fade-in-up">Everything you need to know about Construction Connect</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="faq-details group bg-[#F7F8FA] rounded-lg fade-in-up">
                <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-gray-100 transition-colors">
                  <h3 className="body-regular font-semibold text-[#0A0E1A] pr-8">{faq.question}</h3>
                  <ChevronDown className="icon-standard text-[#6B7280] group-open:rotate-180 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="body-regular text-[#4A5568] faq-answer">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-24 bg-[#0A0E1A]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="headline-h2 text-white mb-6 fade-in-up">Ready When You Are.</h2>
          <p className="body-large text-[#B8BCC8] mb-10 fade-in-up">Don't let poor connectivity be the weak link in your project. Partner with the DMV's leading experts in job site technology solutions.</p>
          <button className="btn-primary-cta btn-magnetic fade-in-up">Schedule Your Site Assessment & Quote<ArrowRight className="ml-3 icon-standard" /></button>
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center text-[#B8BCC8] fade-in-up">
            <a href="tel:571-999-6915" className="flex items-center justify-center hover:text-[#00D4FF] transition-colors body-regular"><Phone className="icon-standard mr-2" /><span>(571) 999-6915</span></a>
            <a href="mailto:connect@theorbittech.com" className="flex items-center justify-center hover:text-[#00D4FF] transition-colors body-regular"><Mail className="icon-standard mr-2" /><span>connect@theorbittech.com</span></a>
          </div>
        </div>
      </section>

      {/* Mobile-Only Sticky Click-to-Call Footer */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0A0E1A]/95 floating-element p-4 z-50 shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.3)] border-t border-white/10">
        <a 
          href="tel:571-999-6915" 
          className="w-full btn-primary-cta btn-magnetic text-lg flex items-center justify-center"
        >
          <Phone className="icon-standard mr-3" />
          Click to Call Now
        </a>
      </div>
    </div>
  );
};

export default ConstructionConnectLanding;
