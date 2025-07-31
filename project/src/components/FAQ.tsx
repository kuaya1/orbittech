import React, { useState, useEffect, useRef } from 'react';

// A custom hook for the Intersection Observer API to handle scroll animations.
const useIntersectionObserver = (options) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, options);

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [options]);

    return [elementRef, isVisible];
};

// A dedicated component for the animated plus/minus icon.
const PlusMinusIcon = ({ isOpen }) => (
    <div className="relative flex-shrink-0 w-8 h-8 flex items-center justify-center">
        <div 
            className="absolute w-4 h-0.5 bg-neutral-500 transition-transform duration-300 ease-in-out" 
            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(90deg)' }}
        ></div>
        <div 
            className="absolute w-4 h-0.5 bg-neutral-500 transition-transform duration-300 ease-in-out" 
            style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        ></div>
    </div>
);


interface FAQItemProps {
  question: string;
  answer: string;
  number: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, number, isOpen, onClick }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-neutral-800 last:border-b-0">
      <button
        className="w-full flex justify-between items-start text-left gap-6 py-8 focus:outline-none group"
        onClick={onClick}
      >
        <div className="flex items-start gap-6">
            <span className="text-lg font-medium text-neutral-500 mt-1">{number}</span>
            <h3 className={`text-xl font-medium pr-4 transition-colors duration-300 ${isOpen ? 'text-white' : 'text-neutral-300 group-hover:text-white'}`}>{question}</h3>
        </div>
        <div className="mt-1">
            <PlusMinusIcon isOpen={isOpen} />
        </div>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px' }}
      >
        <div className="pl-16 pr-12 pb-8 text-neutral-400 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
};


const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    const faqData = [
        {
          question: "Is professional installation necessary for Starlink?",
          answer: "While Starlink is marketed for DIY setup, professional installation is key to unlocking its full potential. We ensure optimal placement, use necessary equipment like ethernet adapters and mounts, and provide a clean, discreet setup. This professional touch often results in speeds exceeding 200 Mbps, safeguarding your investment and subscription value."
        },
        {
          question: "What is the cost of a Starlink installation?",
          answer: "Costs vary by complexity, but standard residential installations typically range from $400-$800. This includes a site assessment, professional mounting, secure cable routing, and full system setup. We offer free consultations for a transparent, personalized quote with no hidden fees, tailored to your location in the DMV area."
        },
        {
          question: "How long does the installation process take?",
          answer: "A standard professional installation is usually completed within 2-4 hours. More complex projects might take 3-5 hours. We provide an accurate time estimate during your free consultation, ensuring a clear timeline based on your specific requirements."
        },
        {
          question: "Does the Starlink kit include a router?",
          answer: "Yes, a Wi-Fi router is built into the power supply. However, for larger homes or commercial spaces, we often recommend mesh systems or enterprise-grade routers to ensure optimal coverage. Our service includes network configuration and recommendations for any necessary upgrades."
        },
        {
          question: "What does a professional installation include?",
          answer: "Beyond the standard Starlink kit, our professional service includes weatherproof connectors, extended cables, appropriate roof or pole mounts, and surge protection. We tailor the equipment to your specific environment to ensure optimal performance and longevity."
        },
        {
          question: "Is there a warranty on your installation work?",
          answer: "Absolutely. We provide a full 90-day warranty covering all aspects of our workmanship, including mounting, cable routing, and weatherproofing. Our licensed and insured technicians adhere to all local codes, giving you complete peace of mind."
        },
    ];

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    
    const animationStyle = (delay: number) => ({
        transition: 'opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)',
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
    });

    return (
        <section 
            ref={sectionRef as React.RefObject<HTMLElement>}
            id="faq" 
            className="w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black flex items-center justify-center font-sans"
        >
            {/* FIX: Reverted to a single-column layout */}
            <div className="w-full max-w-4xl mx-auto">
                <div className="text-center" style={animationStyle(0)}>
                    <h2 className="text-4xl sm:text-5xl font-medium text-neutral-50 tracking-tighter">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
                        Everything you need to know about professional Starlink installation.
                    </p>
                </div>

                <div className="mt-16" style={animationStyle(200)}>
                    {faqData.map((faq, index) => (
                        <FAQItem
                            key={index}
                            number={String(index + 1).padStart(2, '0')}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={activeIndex === index}
                            onClick={() => toggleFAQ(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
