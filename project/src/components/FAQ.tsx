import React, { useState, useEffect, useRef } from 'react';

// --- Calcite Icon Component ---
// A helper component to make using Calcite web components in React more convenient.
const CalciteIcon = ({ icon, className = '', scale = 'm', ...props }) => {
  return <calcite-icon icon={icon} class={className} scale={scale} {...props}></calcite-icon>;
};


interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  accentColor: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick, accentColor }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-neutral-800 last:border-b-0">
      <button
        className="w-full flex justify-between items-center text-left py-6 focus:outline-none"
        onClick={onClick}
      >
        <h3 className="text-lg font-medium text-neutral-100 pr-4">{question}</h3>
        <div className="flex-shrink-0">
          <CalciteIcon 
            icon="chevron-down" 
            className={`transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''}`}
            style={{ color: isOpen ? accentColor : 'currentColor' }}
          />
        </div>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px' }}
      >
        <div className="pb-6 text-neutral-400 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
};


const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    const faqData = [
        {
          question: "Is it easy to install Starlink?",
          answer: "Starlink, initially marketed as a DIY installation, now demands expertise for optimal performance. Many aren't aware that additional equipment such as ethernet adaptors, longer cables, mesh systems, and suitable mounts might be necessary to maximise speeds and ensure the longevity of the installation, thus protecting your monthly subscription. Our skilled engineers will meticulously choose the ideal spot on your house for the setup, emphasising a careful, discreet, and tidy installation to seamlessly blend with your home. As a result, many of our customers experience speeds in excess of 200 Mbps, showcasing the effectiveness of a professionally managed installation."
        },
        {
          question: "How much does Starlink installation cost?",
          answer: "Professional Starlink installation costs vary based on complexity and location requirements. Standard residential installations typically range from $400-$800, which includes site assessment, professional mounting, cable routing, weatherproofing, and system setup. Complex installations with additional equipment or challenging roof access may cost more. We provide free consultations and transparent pricing with no hidden fees. Contact us for a personalized quote based on your specific needs and location in the DMV area."
        },
        {
          question: "How long does it take to install Starlink?",
          answer: "Most professional Starlink installations are completed within 2-4 hours. Standard residential installations typically take 2-3 hours, while more complex setups requiring additional equipment, extensive cable routing, or challenging mounting locations may take 3-5 hours. Commercial installations can take 4-6 hours depending on the scope. We'll provide you with an accurate time estimate during your free consultation based on your specific installation requirements."
        },
        {
          question: "Does Starlink come with a router?",
          answer: "Yes, Starlink comes with a built-in WiFi router in the power supply unit. However, for optimal performance in larger homes or commercial spaces, we often recommend additional networking equipment such as mesh systems, ethernet adapters, or enterprise-grade routers. Our professional installation includes WiFi optimization, network configuration, and recommendations for any additional equipment that might enhance your internet experience based on your property size and usage needs."
        },
        {
          question: "What equipment is needed for Starlink installation?",
          answer: "A complete Starlink installation includes the satellite dish, mounting hardware, power supply with built-in router, and cables. For professional installations, we often add weatherproof cable connectors, extended cables if needed, appropriate mounting systems (roof, pole, or ground mounts), and surge protection. Depending on your setup, we may also recommend ethernet adapters, mesh networking equipment, or upgraded mounting solutions for optimal performance and longevity."
        },
        {
          question: "Do you provide warranty on your installation?",
          answer: "Absolutely! We provide a comprehensive warranty on all our installation work. Our installation warranty covers workmanship, mounting hardware, cable routing, and weatherproofing for a full year. We also ensure all installations meet local building codes and safety standards. Additionally, all our installers are licensed, insured, and carry a minimum of one million dollars in liability insurance for your peace of mind."
        },
    ];

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

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

    // Dynamically load Calcite Components script
    useEffect(() => {
        const calciteCss = document.createElement('link');
        calciteCss.rel = 'stylesheet';
        calciteCss.href = 'https://js.arcgis.com/calcite-components/2.8.0/calcite.css';
        document.head.appendChild(calciteCss);

        const calciteScript = document.createElement('script');
        calciteScript.type = 'module';
        calciteScript.src = 'https://js.arcgis.com/calcite-components/2.8.0/calcite.esm.js';
        document.body.appendChild(calciteScript);
        
        return () => {
            document.head.removeChild(calciteCss);
            document.body.removeChild(calciteScript);
        }
    }, []);
    
    const animationStyle = (delay: number) => ({
        transition: 'opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)',
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    });

    const calciteBlue = '#0079c1';

    return (
        <section 
            ref={sectionRef}
            id="faq" 
            className="min-h-screen w-full py-24 px-4 sm:px-6 lg:px-8 bg-black flex items-center justify-center font-sans"
        >
            <div className="w-full max-w-4xl mx-auto">
                <div className="text-center" style={animationStyle(0)}>
                    <h2 className="text-4xl sm:text-5xl font-medium text-neutral-50 tracking-tighter">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
                        Your questions, answered. Everything you need to know about our professional installation services.
                    </p>
                </div>

                <div className="mt-16" style={animationStyle(200)}>
                    {faqData.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={activeIndex === index}
                            onClick={() => toggleFAQ(index)}
                            accentColor={calciteBlue}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
