import React from 'react';
import { motion, Variants } from 'framer-motion';
import { CheckCircle, ArrowRight, Phone } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delayIndex: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
      when: 'beforeChildren',
      staggerChildren: 0.08,
      delayChildren: 0.15 + delayIndex * 0.05,
    }
  })
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

const accentLine: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.3, ease: [0.65, 0, 0.35, 1], delay: 0.4 }
  }
};

const FinalCTA: React.FC = () => {
  return (
    <motion.section
      id="final-call"
      role="region"
      aria-labelledby="final-cta-heading"
      aria-describedby="final-cta-subhead"
      className="relative overflow-hidden py-36 md:py-44"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={containerVariants}
      custom={0}
    >
      {/* Background Composition */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_20%,rgba(37,99,235,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060608] via-[#050509] to-black" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[conic-gradient(from_220deg_at_50%_50%,rgba(59,130,246,0.08),transparent_65%)] blur-3xl opacity-60" />
        <div className="absolute inset-0 opacity-[0.04] mix-blend-screen" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E")` }} />
        <motion.div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" variants={accentLine} />
        <motion.div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" variants={accentLine} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
        <div className="text-center space-y-12">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/40 backdrop-blur-sm text-xs font-medium tracking-wide text-neutral-300">
            <span className="flex items-center gap-1 text-neutral-400"><CheckCircle className="w-3.5 h-3.5 text-green-400" /> Trusted Local Experts</span>
            <span className="w-px h-3 bg-neutral-700" />
            <span className="text-neutral-400">DMV Coverage</span>
          </motion.div>

          <motion.h2
            id="final-cta-heading"
            variants={itemVariants}
            className="font-bold leading-tight tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] text-balance"
          >
            <span className="block text-white">Ready for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600">Fast, Reliable Internet?</span></span>
          </motion.h2>

          <motion.p
            id="final-cta-subhead"
            variants={itemVariants}
            className="mx-auto max-w-3xl text-lg md:text-2xl leading-relaxed font-light text-neutral-300"
          >
            Join hundreds of your neighbors in the DMV who trust <span className="font-semibold text-white">The Orbit Tech</span> for a flawless Starlink installation.
          </motion.p>

          <motion.p variants={itemVariants} className="text-sm md:text-base text-neutral-400 font-medium tracking-wide">
            Fast & Professional Service • Licensed & Insured • Satisfaction Guaranteed
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col items-center gap-6 pt-4">
            <div className="flex flex-col sm:flex-row gap-5">
              <motion.a
                href="#contact"
                aria-label="Get a free Starlink installation quote"
                className="group relative inline-flex items-center justify-center gap-3 rounded-lg px-10 py-5 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-[0_8px_30px_-6px_rgba(37,99,235,0.55)] hover:from-blue-500 hover:via-blue-500 hover:to-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 transition-all duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <span className="relative z-10 flex items-center gap-3">
                  Get a Free Installation Quote
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </motion.a>

              <motion.a
                href="tel:+15719996915"
                aria-label="Call local Starlink installation experts at (571) 999-6915"
                className="relative inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-700 bg-neutral-900/40 px-8 py-5 text-base font-medium text-neutral-200 hover:border-neutral-500 hover:bg-neutral-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-600 focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Phone className="w-5 h-5 text-neutral-300" />
                <span>Or call our local experts at (571) 999-6915</span>
              </motion.a>
            </div>

            <div className="relative w-full max-w-2xl">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/0 via-blue-600/10 to-blue-600/0 blur-lg opacity-60" />
              <div className="relative flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] md:text-xs tracking-wide text-neutral-500 uppercase font-medium">
                <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-green-400" /> Average Install 2 Hrs</span>
                <span className="hidden sm:inline">•</span>
                <span>99% Line-of-Sight Success</span>
                <span className="hidden sm:inline">•</span>
                <span>Local Support Team</span>
              </div>
            </div>
          </motion.div>

          <motion.p variants={itemVariants} className="pt-4 text-xs md:text-sm text-neutral-500 font-light">
            Serving Virginia • Maryland • Washington DC • Same-Day Installation Available
          </motion.p>
        </div>
      </div>

      {/* Soft focus perimeter vignette */}
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5 [mask:radial-gradient(circle_at_center,black,transparent_75%)]" />
    </motion.section>
  );
};

export default FinalCTA;