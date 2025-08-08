import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { MapPin, Zap, CheckCircle, ArrowRight } from 'lucide-react';

// Precision Intersection Observer for orchestrated reveal
const useScrollReveal = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin: '50px' }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold]);

  return [elementRef, isVisible] as const;
};

// Type definitions
interface InstallationJob {
  id: string;
  location: string;
  region: string;
  challenge: string;
  solution: string;
  speedAchieved: string;
  installationType: 'residential' | 'business';
  imageUrl: string;
  completionTime: string;
}

interface JobCardProps {
  job: InstallationJob;
  index: number;
}

// Job Card Component with refined aesthetic
const JobCard: React.FC<JobCardProps> = ({ job, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      className="group relative h-[480px] rounded-2xl overflow-hidden cursor-pointer bg-gradient-to-b from-neutral-900/30 to-black/30 backdrop-blur-sm border border-neutral-800/50"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        delay: index * 0.08,
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        y: -4,
        transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
      }}
      aria-label={`Installation project in ${job.location}`}
    >
      {/* Subtle border glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Background Image with refined overlay */}
      <div className="absolute inset-0">
        <img 
          src={job.imageUrl}
          alt={`Starlink installation in ${job.location}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Refined gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />
      </div>

      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-between p-8">
        {/* Top Section - Location with refined typography */}
        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-light text-white">{job.location}</h3>
              <p className="text-xs text-neutral-500 font-light mt-1">{job.region}</p>
            </div>
          </div>
        </div>

        {/* Middle Section - Speed Achievement (Refined presentation) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 10
          }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute top-1/2 left-8 right-8 -translate-y-1/2"
        >
          <div className="bg-black/60 backdrop-blur-md border border-neutral-800/50 rounded-xl p-5">
            <div className="flex items-center justify-center gap-3">
              <Zap className="w-5 h-5 text-blue-400" />
              <div className="text-center">
                <div className="text-2xl font-light text-white">{job.speedAchieved}</div>
                <div className="text-xs text-neutral-500 font-light tracking-wide mt-0.5">ACHIEVED SPEED</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section - Challenge & Solution with refined styling */}
        <div className="space-y-4">
          {/* Challenge */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="block w-1 h-1 rounded-full bg-red-400" />
              <h4 className="text-xs font-light text-neutral-400 uppercase tracking-wider">Challenge</h4>
            </div>
            <p className="text-xs text-neutral-400 font-light line-clamp-2 leading-relaxed">
              {job.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-green-400" />
              <h4 className="text-xs font-light text-neutral-400 uppercase tracking-wider">Solution</h4>
            </div>
            <p className="text-sm text-neutral-300 font-light line-clamp-3 leading-relaxed">
              {job.solution}
            </p>
          </div>

          {/* View Details Link (Refined hover state) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="pt-2"
          >
            <span className="inline-flex items-center text-blue-400 font-light text-xs tracking-wide group-hover:text-blue-300 transition-colors duration-300">
              VIEW FULL CASE STUDY
              <ArrowRight className="w-3 h-3 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </motion.div>
        </div>
      </div>

      {/* Refined border on hover */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-neutral-700/50 transition-colors duration-500 pointer-events-none" />
    </motion.article>
  );
};

// Main Component with refined aesthetic
const FeaturedJobsSection: React.FC = () => {
  const [containerRef, isVisible] = useScrollReveal(0.15);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Subtle parallax effect for premium feel
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
  };

  // Transform mouse position for gradient tracking
  const gradientX = useTransform(mouseX, [0, 1000], [0, 100]);
  const gradientY = useTransform(mouseY, [0, 600], [0, 100]);

  // Sample installation data with placeholder images
  const installations: InstallationJob[] = [
    {
      id: 'keppa-fitness-hamilton',
      location: 'Keppa Fitness, Hamilton VA',
      region: 'Loudoun County',
      challenge: 'Heavy tree coverage and a steep roofline made standard installation impossible. The property\'s size meant Wi-Fi dead zones in critical areas.',
      solution: 'Implemented a ridgeline roof mount with precision aiming, combined with a professional mesh network setup delivering 200+ Mbps to every room.',
      speedAchieved: '245 Mbps',
      installationType: 'business',
      imageUrl: 'https://www.flickr.com/photo_download.gne?id=54387691665&secret=1206b5b1e7&size=l&source=photoPageEngagement',
      completionTime: '3 Hours'
    },
    {
      id: 'charlestown-residential-home',
      location: 'Charlestown Residential Home',
      region: 'Jefferson County',
      challenge: 'Rural location with no fiber access. The family needed reliable internet for remote work and homeschooling across a 5-acre property.',
      solution: 'Strategic dish placement for optimal satellite visibility, with extended cable runs and whole-property Wi-Fi coverage using outdoor access points.',
      speedAchieved: '195 Mbps',
      installationType: 'residential',
      imageUrl: 'https://www.flickr.com/photo_download.gne?id=54704683041&secret=db9751abea&size=l&source=photoPageEngagement',
      completionTime: '2.5 Hours'
    },
    {
      id: 'annapolis-vacation-home',
      location: 'Annapolis Vacation Home',
      region: 'Anne Arundel County',
      challenge: 'A growing tech startup needed enterprise-grade reliability for 50+ employees. Their previous provider couldn\'t deliver consistent speeds.',
      solution: 'Deployed a business-grade Starlink system with redundant power backup and optimized network configuration for high-demand usage.',
      speedAchieved: '285 Mbps',
      installationType: 'residential',
      imageUrl: 'https://www.flickr.com/photo_download.gne?id=54704913554&secret=b97479bb3e&size=l&source=photoPageEngagement',
      completionTime: '4 Hours'
    }
  ];

  // Orchestrated entrance animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.98
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const lineVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.5
      }
    }
  };

  return (
    <motion.section
      id="featured-jobs"
      ref={containerRef}
      className="relative py-32 lg:py-40 overflow-hidden isolate"
      onMouseMove={handleMouseMove}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
      aria-labelledby="featured-jobs-heading"
    >
      {/* Layered background system for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
      
      {/* Spotlight effect - tracks mouse subtly */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{
          background: useTransform(
            [gradientX, gradientY],
            ([x, y]) => `radial-gradient(circle 800px at ${x}% ${y}%, rgba(59, 130, 246, 0.06), transparent 60%)`
          )
        }}
      />
      
      {/* Grid pattern overlay for technical authority */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Accent line */}
        <motion.div 
          variants={lineVariants}
          className="w-24 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-12 origin-center"
        />

        {/* Section Header - Minimal and refined */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          variants={itemVariants}
        >
          <h2 
            id="featured-jobs-heading"
            className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] mb-6"
          >
            <span className="text-white">Installation</span>
            <br />
            <span className="text-white font-semibold">excellence.</span>
          </h2>
          <p className="text-lg text-neutral-400 font-light">
            Real installations, real results. See how we transform connectivity 
            for families and businesses across the DMV area.
          </p>
        </motion.div>

        {/* Jobs Grid with refined spacing */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={itemVariants}
        >
          {installations.map((job, index) => (
            <JobCard key={job.id} job={job} index={index} />
          ))}
        </motion.div>

        {/* Bottom accent line */}
        <motion.div 
          variants={lineVariants}
          className="w-24 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mt-16 origin-center"
        />

        {/* Subtle closing note */}
        <motion.p 
          variants={itemVariants}
          className="text-center text-xs text-neutral-500 mt-8 font-light tracking-wide"
        >
          Each installation is uniquely designed for optimal performance based on your property's specific characteristics.
        </motion.p>
      </div>

      {/* Edge vignette for focus */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-15" />
      </div>
    </motion.section>
  );
};

export default FeaturedJobsSection;