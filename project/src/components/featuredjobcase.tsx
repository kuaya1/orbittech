import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Zap, CheckCircle, ArrowRight } from 'lucide-react';

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

// Job Card Component
const JobCard: React.FC<JobCardProps> = ({ job, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      className="group relative h-[480px] rounded-2xl overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        delay: index * 0.1,
        duration: 0.6,
        type: "spring",
        damping: 25,
        stiffness: 100
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        y: -8,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      aria-label={`Installation project in ${job.location}`}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={job.imageUrl}
          alt={`Starlink installation in ${job.location}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />
      </div>

      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-between p-8">
        {/* Top Section - Metadata */}
        <div className="space-y-3">
          {/* Installation Type Badge */}
          <div className="inline-flex items-center gap-2">
            <span className={`
              inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
              ${job.installationType === 'residential' 
                ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' 
                : 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
              }
            `}>
              {job.installationType === 'residential' ? 'Residential' : 'Business'}
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
              {job.completionTime}
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-white">
            <MapPin className="w-4 h-4 text-blue-400" />
            <h3 className="text-xl font-semibold">{job.location}</h3>
          </div>
          <p className="text-sm text-neutral-400">{job.region}</p>
        </div>

        {/* Middle Section - Speed Achievement (Only visible on hover) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 20
          }}
          transition={{ duration: 0.3 }}
          className="absolute top-1/2 left-8 right-8 -translate-y-1/2"
        >
          <div className="bg-black/80 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-center gap-3">
              <Zap className="w-6 h-6 text-blue-400" />
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{job.speedAchieved}</div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider mt-1">Achieved Speed</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section - Challenge & Solution */}
        <div className="space-y-4">
          {/* Challenge */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-1 h-4 bg-red-500 rounded-full" />
              <h4 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider">Challenge</h4>
            </div>
            <p className="text-sm text-neutral-400 line-clamp-2">
              {job.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <h4 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider">Solution</h4>
            </div>
            <p className="text-sm text-neutral-200 line-clamp-3">
              {job.solution}
            </p>
          </div>

          {/* View Details Link (Appears on hover) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="pt-2"
          >
            <span className="inline-flex items-center text-blue-400 font-medium text-sm group-hover:text-blue-300 transition-colors duration-300">
              View Full Case Study
              <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </motion.div>
        </div>
      </div>

      {/* Premium Border Effect */}
      <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-blue-500/30 transition-colors duration-500" />
      
      {/* Glow Effect on Hover */}
      <motion.div
        className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"
        animate={{
          opacity: isHovered ? 0.5 : 0
        }}
      />
    </motion.article>
  );
};

// Main Component
const FeaturedJobsSection: React.FC = () => {
  // Sample installation data with placeholder images
  const installations: InstallationJob[] = [
    {
      id: 'great-falls-mansion',
      location: 'Great Falls, VA',
      region: 'Fairfax County',
      challenge: 'Heavy tree coverage and a steep roofline made standard installation impossible. The property\'s size meant Wi-Fi dead zones in critical areas.',
      solution: 'Implemented a ridgeline roof mount with precision aiming, combined with a professional mesh network setup delivering 200+ Mbps to every room.',
      speedAchieved: '245 Mbps',
      installationType: 'residential',
      imageUrl: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=800&h=600&fit=crop',
      completionTime: '3 Hours'
    },
    {
      id: 'bethesda-office',
      location: 'Bethesda, MD',
      region: 'Montgomery County',
      challenge: 'A growing tech startup needed enterprise-grade reliability for 50+ employees. Their previous provider couldn\'t deliver consistent speeds.',
      solution: 'Deployed a business-grade Starlink system with redundant power backup and optimized network configuration for high-demand usage.',
      speedAchieved: '285 Mbps',
      installationType: 'business',
      imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      completionTime: '4 Hours'
    },
    {
      id: 'leesburg-farmhouse',
      location: 'Leesburg, VA',
      region: 'Loudoun County',
      challenge: 'Rural location with no fiber access. The family needed reliable internet for remote work and homeschooling across a 5-acre property.',
      solution: 'Strategic dish placement for optimal satellite visibility, with extended cable runs and whole-property Wi-Fi coverage using outdoor access points.',
      speedAchieved: '195 Mbps',
      installationType: 'residential',
      imageUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop',
      completionTime: '2.5 Hours'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 100,
        duration: 0.8
      }
    }
  };

  return (
    <motion.section
      id="featured-jobs"
      className="py-24 sm:py-32 bg-black relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-black to-neutral-950" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, 0.05) 25%, rgba(255, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05) 76%, transparent 77%, transparent)`,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Ambient light effects */}
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          variants={headerVariants}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
            Installation Excellence
          </h2>
          <p className="text-lg leading-8 text-neutral-300">
            Real installations, real results. See how we transform connectivity for families and businesses across the DMV area.
          </p>
        </motion.div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {installations.map((job, index) => (
            <JobCard key={job.id} job={job} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-neutral-400 mb-8">
            Join hundreds of satisfied customers across Virginia, Maryland, and DC
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              aria-label="View all installation projects"
              className="inline-flex items-center justify-center bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20"
            >
              Start Your Installation
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="#testimonials"
              aria-label="Read customer testimonials"
              className="inline-flex items-center justify-center bg-white/5 border border-white/10 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:bg-white/10"
            >
              Read Success Stories
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FeaturedJobsSection;