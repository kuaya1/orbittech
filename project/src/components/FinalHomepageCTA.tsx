import { motion } from 'framer-motion';
import { Phone, Wifi, Shield, Star } from 'lucide-react';

const FinalHomepageCTA = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.section
      className="font-sans py-24 sm:py-32 bg-black relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Section */}
        <motion.div 
          className="text-center"
          variants={headerVariants}
        >
          <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready for High-Speed Internet?
          </h3>
          <p className="mt-4 text-lg leading-8 text-[#f8f8f8] max-w-2xl mx-auto">
            Get a free consultation and quote for your professional Starlink installation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a 
              href="#contact" 
              className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-md transition-all duration-300 shadow-lg"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#f5f5f5",
                boxShadow: "0 10px 25px rgba(255,255,255,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get a Free Quote
            </motion.a>
            <motion.a 
              href="tel:+1-571-999-6915" 
              className="inline-block bg-white/10 border border-white/20 text-white font-semibold px-8 py-3 rounded-md transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="inline w-4 h-4 mr-2" />
              (571) 999-6915
            </motion.a>
          </div>
          
          {/* Trust indicators under CTA buttons */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="flex items-center text-neutral-400">
              <Shield className="w-4 h-4 mr-2 text-blue-500" />
              Licensed & Insured
            </div>
            
            <div className="w-px h-4 bg-neutral-700 hidden sm:block"></div>
            
            <div className="flex items-center text-neutral-400">
              <Star className="w-4 h-4 mr-2 text-blue-500" />
              5.0 Google Rating
            </div>
            
            <div className="w-px h-4 bg-neutral-700 hidden sm:block"></div>
            
            <div className="flex items-center text-neutral-400">
              <Wifi className="w-4 h-4 mr-2 text-blue-500" />
              500+ Installations
            </div>
          </motion.div>
          
          {/* Additional trust indicators */}
          <motion.p 
            className="mt-4 text-sm text-neutral-400 font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Same-Day Installation • 90-Day Warranty
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FinalHomepageCTA;
