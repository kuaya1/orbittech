import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowLeft, ArrowRight, Star, Quote, MapPin, Calendar, Home, Building2, Truck } from 'lucide-react';
import { ShootingStars } from './ui/shooting-stars';
import { StarsBackground } from './ui/star-backround';

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
    id: 'bethesda-family-home',
    title: 'Ending Years of Internet Frustration for a Bethesda Family',
    location: 'Bethesda, MD',
    date: 'January 2025',
    clientType: 'residential',
    beforeSpeed: '8 Mbps',
    afterSpeed: '180 Mbps',
    description: 'For years, the Johnson family in Bethesda struggled with slow, unreliable internet. With parents working from home and kids attending online classes, their connection was a constant source of stress and frustration.',
    challenge: 'Their property had heavy tree coverage, which had made previous attempts at satellite internet unsuccessful. The local DSL infrastructure was outdated and couldn\'t handle the demands of a modern family.',
    solution: 'Our experienced technicians performed a detailed site analysis and found the perfect location on the roof with a clear line of sight to the sky. We used a specialized mounting system to ensure a secure and weatherproof installation.',
    result: 'The Johnson family now has fast, reliable internet that can handle multiple video calls, online classes, and streaming services simultaneously. Their home is now a productive and stress-free environment for work and school.',
    testimonial: {
      quote: "I can't tell you what a relief it is to have internet that just *works*. No more dropped calls, no more frustrated kids. It's been a total game-changer for our family. This is the best investment we've made in our home.",
      author: "Sarah Johnson, Homeowner",
      rating: 5
    },
    images: {
      main: "https://www.flickr.com/photo_download.gne?id=54622875683&secret=aee2d33785&size=l&source=photoPageEngagement",
      gallery: [
       
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
    <section id="featured-installations" className="py-20 bg-black relative overflow-hidden">
      {/* Shooting Stars Background */}
      <ShootingStars />
      <StarsBackground />
      
      {/* Subtle background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 max-w-7xl">
        {/* Simplified header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-8 leading-tight text-white">
            Real Results for Real People
          </h2>

          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto font-medium">
            See how we've helped families across the DMV area solve their internet problems for good.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
            {/* Main case display */}
            <div ref={contentRef} className="transition-opacity duration-200" style={{ opacity: 1 }}>
              <div className="bg-neutral-900/50 backdrop-blur-sm rounded-2xl border border-neutral-800 overflow-hidden">
                
                {/* Image section */}
                <div className="relative h-80 bg-slate-100">
                  <img
                    src={activeImage}
                    alt={`Installation for ${activeCase.title}`}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Navigation arrows */}
                  <button
                    onClick={handlePrevCase}
                    disabled={isTransitioning || filteredCases.length <= 1}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full border border-white/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  
                  <button
                    onClick={handleNextCase}
                    disabled={isTransitioning || filteredCases.length <= 1}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full border border-white/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  {/* Case counter */}
                  <div className="absolute top-4 right-4 bg-black/70 text-white text-sm px-3 py-1 rounded-full">
                    {activeIndex + 1} of {filteredCases.length}
                  </div>

                  {/* Image gallery dots */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {activeCase.images.gallery.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveImage(img)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          activeImage === img ? 'bg-white' : 'bg-white/50 hover:bg-white/80'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Content section */}
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Main content */}
                    <div className="lg:col-span-2">
                      {/* Case meta */}
                      <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-white/70">
                        <div className="flex items-center gap-1">
                          {getClientTypeIcon(activeCase.clientType)}
                          <span className="font-medium">{getClientTypeLabel(activeCase.clientType)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{activeCase.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{activeCase.date}</span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-black text-white mb-4 tracking-tight">
                        {activeCase.title}
                      </h3>

                      <p className="text-white/90 text-lg mb-8 leading-relaxed font-medium">
                        {activeCase.description}
                      </p>

                      {/* Speed improvement highlight */}
                      <div className="bg-neutral-900/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-neutral-800">
                        <h4 className="font-black text-white mb-3 tracking-tight">From Dial-Up Speeds to Light Speed</h4>
                        <div className="flex items-center justify-between">
                          <div className="text-center">
                            <div className="text-2xl font-black text-red-400">{activeCase.beforeSpeed}</div>
                            <div className="text-sm text-white/90 font-medium">Before</div>
                          </div>
                          <div className="px-4">
                            <ArrowRight className="w-6 h-6 text-white/40" />
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-black text-green-400">{activeCase.afterSpeed}</div>
                            <div className="text-sm text-white/90 font-medium">After</div>
                          </div>
                        </div>
                      </div>

                      {/* Simple process */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div>
                          <h4 className="font-black text-white mb-2 tracking-tight">The Challenge</h4>
                          <p className="text-white/90 text-sm leading-relaxed font-medium">{activeCase.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-black text-white mb-2 tracking-tight">The Solution</h4>
                          <p className="text-white/90 text-sm leading-relaxed font-medium">{activeCase.solution}</p>
                        </div>
                        <div>
                          <h4 className="font-black text-white mb-2 tracking-tight">The Result</h4>
                          <p className="text-white/90 text-sm leading-relaxed font-medium">{activeCase.result}</p>
                        </div>
                      </div>
                    </div>

                    {/* Testimonial sidebar */}
                    <div className="bg-neutral-900/50 backdrop-blur-sm rounded-xl p-6 border border-neutral-800">
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, idx) => (
                          <Star
                            key={idx}
                            className={`w-4 h-4 ${idx < activeCase.testimonial.rating ? "text-yellow-400 fill-current" : "text-white/30"}`}
                          />
                        ))}
                      </div>
                      
                      <Quote className="w-8 h-8 text-white/30 mb-4" />
                      
                      <blockquote className="text-white/90 mb-4 leading-relaxed font-medium">
                        "{activeCase.testimonial.quote}"
                      </blockquote>
                      
                      <p className="font-black text-white tracking-tight">
                        — {activeCase.testimonial.author}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case navigation dots */}
            <div className="flex justify-center mt-8 gap-2">
              {filteredCases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => changeCase(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    activeIndex === index ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
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