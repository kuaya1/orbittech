import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ShootingStars } from './ui/shooting-stars';
import { StarsBackground } from './ui/star-backround';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
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
    {
      question: "What areas do you serve in the DMV?",
      answer: "We provide professional Starlink installation services throughout the entire DMV region, including Washington DC, Northern Virginia (Fairfax, Loudoun, Prince William, Arlington, Alexandria), and Maryland (Montgomery County, Prince George's County, and surrounding areas). Our certified technicians are familiar with local building codes and permit requirements specific to each jurisdiction in the DMV area."
    },
    {
      question: "Can you install Starlink on any type of roof?",
      answer: "Our experienced technicians can install Starlink on virtually any roof type, including asphalt shingle, metal, tile, slate, and flat roofs. We use appropriate mounting hardware for each roof material and ensure proper waterproofing and structural integrity. For roofs that aren't suitable for mounting, we offer alternative solutions such as pole mounts, ground mounts, or non-penetrating roof mounts that don't require drilling."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Shooting Stars Background */}
      <ShootingStars />
      <StarsBackground />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            FAQ
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-medium leading-relaxed">
            Everything you need to know about professional Starlink installation
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-2">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl transition-all duration-300 hover:bg-white/10 ${
                activeIndex === index ? 'bg-white/10 border-white/20' : ''
              }`}
            >
              <button
                className="w-full p-6 text-left focus:outline-none rounded-xl"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white pr-8 leading-relaxed tracking-tight">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <ChevronDown
                      className={`h-5 w-5 text-white/60 transition-transform duration-300 ${
                        activeIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-out ${
                activeIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
              }`}>
                <div className="px-6">
                  <p className="text-white/80 leading-relaxed font-medium">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
