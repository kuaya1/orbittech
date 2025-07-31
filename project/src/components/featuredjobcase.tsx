import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowLeft, ArrowRight, Star, MapPin, Calendar, Home, Building2, Truck } from 'lucide-react';
// import { ShootingStars } from './ui/shooting-stars';
// import { StarsBackground } from './ui/star-backround';

// Simplified interface
interface InstallationCase {
  id: string;
  title: string;
  location: string;
  date: string;
  clientType: 'residential' | 'business' | 'mobile';
  beforeSpeed: string;
  afterSpeed: string;
  description: string;
  challenge: string;
  solution: string;
  result: string;
  testimonial: {
    quote: string;
    author: string;
    rating: number;
  };
  images: {
    main: string;
    gallery: string[];
  };
}

// Real, human-proof case studies
const sampleCases: InstallationCase[] = [
  {
    id: 'keppa-fitness-hamilton',
    title: 'From Buffering to Buff: Pro Internet for a Home Gym',
    location: 'Hamilton, VA',
    date: 'March 2025',
    clientType: 'residential',
    beforeSpeed: '15 Mbps',
    afterSpeed: '200 Mbps',
    description: 'A fitness-focused family in Hamilton had built a state-of-the-art home gym. The only thing missing was internet that could keep up with their intense, live-streamed workouts and virtual training sessions.',
    challenge: 'Their rural location meant they were stuck with slow, unreliable internet. Live fitness classes would freeze and buffer, disrupting their workouts and causing major frustration.',
    solution: 'We conducted a thorough site survey to find the optimal location for the Starlink dish, ensuring an unobstructed view of the sky. The installation was clean, professional, and optimized for high-demand streaming.',
    result: 'The family now enjoys uninterrupted 4K streaming for all their fitness needs. Multiple users can be online at once without a single glitch, making their home gym a truly professional-grade setup.',
    testimonial: {
      quote: "The change has been night and day. We used to spend more time staring at a loading screen than working out. Now, our internet is as reliable as our squat rack. It's completely transformed our home fitness experience.",
      author: "Keppa Fitness Owner",
      rating: 5
    },
    images: {
      main: "https://live.staticflickr.com/65535/54387691665_1362c8304b_k_d.jpg",
      gallery: [
        "https://live.staticflickr.com/65535/54387691665_1362c8304b_k_d.jpg",
        "https://live.staticflickr.com/65535/54386437107_2c2861928d_k_d.jpg",
      ]
    }
  },
  {
    id: 'winchester-modern-farmhouse',
    title: 'Bringing City Speeds to a Country Home in Winchester',
    location: 'Winchester, VA',
    date: 'February 2025',
    clientType: 'residential',
    beforeSpeed: '5 Mbps',
    afterSpeed: '185 Mbps',
    description: 'The owners of a stunning modern farmhouse in Winchester loved their rural lifestyle but were constantly battling with frustratingly slow DSL. Working from home was a chore, and their smart home devices were anything but smart.',
    challenge: 'With no access to cable or fiber, their only option was an unstable DSL connection that would drop during bad weather. This made video calls and smart home automation nearly impossible.',
    solution: 'We installed a weatherproof Starlink system on their farmhouse roof, positioned for a clear view of the northern sky. The installation was designed to be discreet and blend with the home\'s aesthetic.',
    result: 'Their farmhouse is now a fully connected smart home. They can work from home seamlessly, stream movies in 4K, and rely on their home automation systems without a second thought.',
    testimonial: {
      quote: "We chose to live in the country for the peace and quiet, but we didn't want to sacrifice modern conveniences. Orbittec gave us the best of both worlds. Our internet is now faster than what our friends have in the city!",
      author: "Winchester Farmhouse Owners",
      rating: 5
    },
    images: {
      main: "https://live.staticflickr.com/65535/54622975475_ff12c3f69f_b.jpg",
      gallery: [
        "https://live.staticflickr.com/65535/54622975475_ff12c3f69f_b.jpg",
        "https://live.staticflickr.com/65535/54622866249_f243c7d46f_b.jpg",
        "https://live.staticflickr.com/65535/54622657311_a7acc75415_b.jpg"
      ]
    }
  },
  {
    id: 'annapolis-family-home',
    title: 'Ending Years of Internet Frustration for an Annapolis Family',
    location: 'Annapolis, MD',
    date: 'January 2025',
    clientType: 'residential',
    beforeSpeed: '8 Mbps',
    afterSpeed: '180 Mbps',
    description: 'For years, the Johnson family in Annapolis struggled with slow, unreliable internet. With parents working from home and kids attending online classes, their connection was a constant source of stress and frustration.',
    challenge: 'Their property had heavy tree coverage, which had made previous attempts at satellite internet unsuccessful. The local DSL infrastructure was outdated and couldn\'t handle the demands of a modern family.',
    solution: 'Our experienced technicians performed a detailed site analysis and found the perfect location on the roof with a clear line of sight to the sky. We used a specialized mounting system to ensure a secure and weatherproof installation.',
    result: 'The Johnson family now has fast, reliable internet that can handle multiple video calls, online classes, and streaming services simultaneously. Their home is now a productive and stress-free environment for work and school.',
    testimonial: {
      quote: "I can't tell you what a relief it is to have internet that just *works*. No more dropped calls, no more frustrated kids. It's been a total game-changer for our family. This is the best investment we've made in our home.",
      author: "Sarah Johnson, Homeowner",
      rating: 5
    },
    images: {
      main: "/PXL_20250720_180602716.jpg",
      gallery: [
        "/PXL_20250720_180602716.jpg"
      ]
    }
  }
];

const FeaturedInstallations: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeImage, setActiveImage] = useState<string>(sampleCases[0].images.main);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Since all cases are now residential, we can simplify filtering
  const filteredCases = sampleCases;

  const activeCase = filteredCases[activeIndex] || sampleCases[0];

  // Reset active index when filter changes
  useEffect(() => {
    setActiveIndex(0);
    setActiveImage(filteredCases[0]?.images.main || sampleCases[0].images.main);
  }, [filteredCases]);

  const changeCase = useCallback((newIndex: number) => {
    if (newIndex === activeIndex || isTransitioning || newIndex < 0 || newIndex >= filteredCases.length) return;

    setIsTransitioning(true);
    
    if (contentRef.current) {
      contentRef.current.style.opacity = '0';
    }

    setTimeout(() => {
      setActiveIndex(newIndex);
      setActiveImage(filteredCases[newIndex]?.images.main || sampleCases[0].images.main);

      setTimeout(() => {
        if (contentRef.current) {
          contentRef.current.style.opacity = '1';
        }
        setIsTransitioning(false);
      }, 50);
    }, 200);
  }, [activeIndex, isTransitioning, filteredCases]);

  const handleNextCase = useCallback(() => {
    if (filteredCases.length === 0) return;
    const nextIndex = (activeIndex + 1) % filteredCases.length;
    changeCase(nextIndex);
  }, [activeIndex, changeCase, filteredCases]);

  const handlePrevCase = useCallback(() => {
    if (filteredCases.length === 0) return;
    const prevIndex = activeIndex === 0 ? filteredCases.length - 1 : activeIndex - 1;
    changeCase(prevIndex);
  }, [activeIndex, changeCase, filteredCases]);

  const getClientTypeIcon = (type: 'residential' | 'business' | 'mobile'): React.ReactElement => {
    switch(type) {
      case 'residential': return <Home className="w-4 h-4" />;
      case 'business': return <Building2 className="w-4 h-4" />;
      case 'mobile': return <Truck className="w-4 h-4" />;
    }
  };

  const getClientTypeLabel = (type: 'residential' | 'business' | 'mobile'): string => {
    switch(type) {
      case 'residential': return 'Residential';
      case 'business': return 'Business';
      case 'mobile': return 'Mobile/RV';
    }
  };

  return (
    <section id="featured-installations" className="py-20 sm:py-[128px] bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-80 h-80 sm:w-[368px] sm:h-[368px] bg-white/[0.02] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 sm:w-[368px] sm:h-[368px] bg-white/[0.02] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-10 lg:px-16 relative z-10 max-w-5xl sm:max-w-[69rem]">
        <div className="text-center max-w-2xl sm:max-w-3xl mx-auto mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl font-semibold text-neutral-50 mb-4 sm:mb-6 tracking-tight">
            Starlink Installs, Done Right
          </h2>
          <p className="text-base sm:text-xl text-neutral-400">
            A few real projects—fast, reliable internet for real people. Simple, seamless, and always professional.
          </p>
        </div>

        <div className="max-w-3xl sm:max-w-4xl mx-auto">
          <div ref={contentRef} className="transition-opacity duration-300" style={{ opacity: 1 }}>
            <div className="bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
              <div className="relative h-64 sm:h-[294px] bg-black">
                <img
                  src={activeImage}
                  alt={`Starlink installation: ${activeCase.title}`}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center' }}
                />
                <button
                  onClick={handlePrevCase}
                  disabled={isTransitioning || filteredCases.length <= 1}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/60 hover:bg-black/80 text-white rounded-full border border-white/20 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center"
                  aria-label="Previous installation"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextCase}
                  disabled={isTransitioning || filteredCases.length <= 1}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/60 hover:bg-black/80 text-white rounded-full border border-white/20 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center"
                  aria-label="Next installation"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="absolute top-4 right-4 bg-black/80 text-white text-xs px-3 py-1 rounded-full border border-white/20">
                  {activeIndex + 1} / {filteredCases.length}
                </div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
                  {activeCase.images.gallery.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(img)}
                      aria-label={`View photo ${index + 1}`}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeImage === img ? 'bg-white' : 'bg-white/30 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="p-6 sm:p-10">
                <div className="space-y-6 sm:space-y-8">
                  <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-neutral-500 mb-2 sm:mb-4">
                    <div className="flex items-center gap-1">
                      {getClientTypeIcon(activeCase.clientType)}
                      <span className="uppercase tracking-wider">{getClientTypeLabel(activeCase.clientType)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span className="uppercase tracking-wider">{activeCase.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span className="uppercase tracking-wider">{activeCase.date}</span>
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-neutral-50">
                    {activeCase.title}
                  </h3>
                  <p className="text-neutral-300 text-base sm:text-lg">
                    {activeCase.description}
                  </p>
                  <div className="bg-white/[0.02] border border-white/10 rounded-lg p-5 sm:p-7">
                    <div className="flex items-center justify-between max-w-xs sm:max-w-sm mx-auto">
                      <div className="text-center">
                        <div className="text-lg sm:text-2xl font-semibold text-red-400 mb-1">{activeCase.beforeSpeed}</div>
                        <div className="text-xs sm:text-sm text-neutral-500 uppercase tracking-wider">Before</div>
                      </div>
                      <div className="px-4 sm:px-6">
                        <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 text-neutral-600" />
                      </div>
                      <div className="text-center">
                        <div className="text-lg sm:text-2xl font-semibold text-green-400 mb-1">{activeCase.afterSpeed}</div>
                        <div className="text-xs sm:text-sm text-neutral-500 uppercase tracking-wider">After</div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                    <div>
                      <h4 className="font-semibold text-neutral-50 text-sm sm:text-base mb-1">Challenge</h4>
                      <p className="text-xs sm:text-sm text-neutral-400">{activeCase.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-50 text-sm sm:text-base mb-1">Solution</h4>
                      <p className="text-xs sm:text-sm text-neutral-400">{activeCase.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-50 text-sm sm:text-base mb-1">Result</h4>
                      <p className="text-xs sm:text-sm text-neutral-400">{activeCase.result}</p>
                    </div>
                  </div>
                  <div className="bg-white/[0.02] border border-white/10 rounded-lg p-5 sm:p-7 mt-2">
                    <div className="flex items-center mb-3 sm:mb-4">
                      {[...Array(5)].map((_, idx) => (
                        <Star
                          key={idx}
                          className={`w-4 h-4 sm:w-5 sm:h-5 ${idx < activeCase.testimonial.rating ? "text-yellow-400 fill-current" : "text-neutral-600"}`}
                        />
                      ))}
                    </div>
                    <blockquote className="text-neutral-300 mb-3 sm:mb-4 text-sm sm:text-base">
                      “{activeCase.testimonial.quote}”
                    </blockquote>
                    <p className="font-semibold text-neutral-50 text-xs sm:text-sm">
                      {activeCase.testimonial.author}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8 sm:mt-12 gap-1 sm:gap-2">
            {filteredCases.map((_, index) => (
              <button
                key={index}
                onClick={() => changeCase(index)}
                aria-label={`Go to case ${index + 1}`}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-white sm:w-8' : 'bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInstallations;