import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Wifi, 
  Clock, 
  TrendingUp,
  Check,
  X,
  TrendingDown,
  ArrowRight,
  Star,
  Shield,
  Zap,
  Building,
  Phone,
  DollarSign,
  AlertTriangle,
  CheckCircle,
  Globe,
  Satellite,
  Activity,
  Map,
  Award,
  Truck,
  Settings,
  Target
} from 'lucide-react';

// Live Data Ticker Component
const LiveDataTicker = () => {
  const [currentSiteIndex, setCurrentSiteIndex] = useState(0);
  
  const sites = [
    { location: "McLean", speed: 287, trend: "up" },
    { location: "Tysons", speed: 312, trend: "up" },
    { location: "Arlington", speed: 294, trend: "up" },
    { location: "Alexandria", speed: 301, trend: "up" },
    { location: "Bethesda", speed: 285, trend: "stable" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSiteIndex((prev) => (prev + 1) % sites.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-blue-50 border-b border-blue-100 py-2">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center space-x-8 text-sm text-blue-700">
          <span className="flex items-center">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            Live Network Status
          </span>
          <div className="flex items-center space-x-6">
            {sites.map((site, index) => (
              <motion.span
                key={site.location}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: index === currentSiteIndex ? 1 : 0.5 }}
                className="flex items-center"
              >
                {site.location}: {site.speed} Mbps
                <TrendingUp className="w-3 h-3 ml-1 text-green-500" />
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Animated Counter Component
const AnimatedCounter = ({ value, suffix = "", duration = 2000 }: { value: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number;
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * value));
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return <span ref={countRef}>{count}{suffix}</span>;
};

// Interactive Timeline Comparison
const TimelineComparison = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  
  const traditionalDays = 21;
  const orbitTechHours = 4;
  
  const dailyCost = 2600 * 8; // $2,600/hour * 8 hours
  const traditionalCost = dailyCost * traditionalDays;
  const orbitTechCost = 899; // Monthly fee

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Deployment Time Comparison</h3>
        <p className="text-gray-600">Drag the slider to see the difference</p>
      </div>
      
      <div className="relative">
        <div className="flex justify-between items-center mb-4">
          <div className={`transition-all duration-300 ${sliderPosition < 50 ? 'opacity-100' : 'opacity-50'}`}>
            <h4 className="font-semibold text-gray-900">Traditional ISP</h4>
            <p className="text-3xl font-bold text-red-500">{traditionalDays} days</p>
            <p className="text-sm text-gray-500">Cost during wait: ${traditionalCost.toLocaleString()}</p>
          </div>
          
          <div className={`transition-all duration-300 ${sliderPosition > 50 ? 'opacity-100' : 'opacity-50'}`}>
            <h4 className="font-semibold text-gray-900">Orbit Tech</h4>
            <p className="text-3xl font-bold text-blue-600">{orbitTechHours} hours</p>
            <p className="text-sm text-gray-500">Monthly cost: ${orbitTechCost.toLocaleString()}</p>
          </div>
        </div>
        
        <div className="relative h-2 bg-gray-200 rounded-full mb-4 slider-container">
          <div 
            className="absolute top-0 left-0 h-full bg-blue-600 rounded-full transition-all duration-300"
            style={{ width: `${sliderPosition}%` }}
          ></div>
          <button
            className="absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white border-2 border-blue-600 rounded-full shadow-lg cursor-pointer"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%) translateY(-50%)' }}
            onMouseDown={() => {
              const handleMouseMove = (e: MouseEvent) => {
                const slider = document.querySelector('.slider-container') as HTMLElement;
                if (slider) {
                  const rect = slider.getBoundingClientRect();
                  const newPosition = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
                  setSliderPosition(newPosition);
                }
              };
              
              const handleMouseUp = () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
              };
              
              document.addEventListener('mousemove', handleMouseMove);
              document.addEventListener('mouseup', handleMouseUp);
            }}
          ></button>
        </div>
        
        <div className="text-center">
          <p className="text-2xl font-bold text-green-600">
            Savings: ${(traditionalCost - orbitTechCost).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

// Live Performance Dashboard
const LivePerformanceDashboard = () => {
  const [metrics, setMetrics] = useState({
    averageSpeed: 298,
    activeSites: 47,
    totalData: 2847,
    fastestSite: { name: "Tysons Corner", speed: 312 }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        averageSpeed: prev.averageSpeed + (Math.random() - 0.5) * 10,
        activeSites: prev.activeSites + Math.floor(Math.random() * 3 - 1),
        totalData: prev.totalData + Math.random() * 50,
        fastestSite: prev.fastestSite
      }));
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Live Network Performance</h2>
          <p className="text-xl text-blue-100">Real-time data from active construction sites</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
            whileHover={{ scale: 1.05 }}
          >
            <Activity className="w-8 h-8 mx-auto mb-4 text-blue-200" />
            <div className="text-3xl font-bold">
              <AnimatedCounter value={Math.floor(metrics.averageSpeed)} suffix=" Mbps" />
            </div>
            <p className="text-blue-200">Average Speed</p>
          </motion.div>
          
          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
            whileHover={{ scale: 1.05 }}
          >
            <Building className="w-8 h-8 mx-auto mb-4 text-blue-200" />
            <div className="text-3xl font-bold">
              <AnimatedCounter value={metrics.activeSites} />
            </div>
            <p className="text-blue-200">Active Sites</p>
          </motion.div>
          
          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
            whileHover={{ scale: 1.05 }}
          >
            <Globe className="w-8 h-8 mx-auto mb-4 text-blue-200" />
            <div className="text-3xl font-bold">
              <AnimatedCounter value={Math.floor(metrics.totalData)} suffix=" GB" />
            </div>
            <p className="text-blue-200">Data Today</p>
          </motion.div>
          
          <motion.div 
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
            whileHover={{ scale: 1.05 }}
          >
            <Target className="w-8 h-8 mx-auto mb-4 text-blue-200" />
            <div className="text-3xl font-bold">{metrics.fastestSite.speed} Mbps</div>
            <p className="text-blue-200">{metrics.fastestSite.name}</p>
          </motion.div>
        </div>
        
        {/* Interactive Map Placeholder */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">DMV Active Sites</h3>
          <div className="h-64 bg-white/5 rounded-lg flex items-center justify-center border-2 border-dashed border-white/20">
            <div className="text-center">
              <Map className="w-16 h-16 mx-auto mb-4 text-blue-200" />
              <p className="text-blue-200">Interactive map with live site status</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ROI Calculator Widget
const ROICalculator = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputs, setInputs] = useState({
    crewSize: 10,
    hourlyRate: 65,
    hoursLost: 8
  });

  const calculations = {
    dailyLoss: inputs.crewSize * inputs.hourlyRate * inputs.hoursLost,
    weeklyLoss: inputs.crewSize * inputs.hourlyRate * inputs.hoursLost * 7,
    monthlyLoss: inputs.crewSize * inputs.hourlyRate * inputs.hoursLost * 30,
    annualSavings: (inputs.crewSize * inputs.hourlyRate * inputs.hoursLost * 365) - (899 * 12)
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <motion.button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <DollarSign className="w-6 h-6" />
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-xl shadow-2xl p-6 w-80 border border-gray-200"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-gray-900">ROI Calculator</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Crew Size</label>
              <input
                type="number"
                value={inputs.crewSize}
                onChange={(e) => setInputs(prev => ({ ...prev, crewSize: parseInt(e.target.value) || 0 }))}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Hourly Rate ($)</label>
              <input
                type="number"
                value={inputs.hourlyRate}
                onChange={(e) => setInputs(prev => ({ ...prev, hourlyRate: parseInt(e.target.value) || 0 }))}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Hours Lost/Day</label>
              <input
                type="number"
                value={inputs.hoursLost}
                onChange={(e) => setInputs(prev => ({ ...prev, hoursLost: parseInt(e.target.value) || 0 }))}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Annual Savings</h4>
              <p className="text-2xl font-bold text-green-600">
                ${calculations.annualSavings.toLocaleString()}
              </p>
              <p className="text-sm text-green-700">
                Daily loss avoided: ${calculations.dailyLoss.toLocaleString()}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

// Main Component
export default function ConstructionConnect() {
  return (
    <div className="min-h-screen bg-white">
      {/* Live Data Ticker */}
      <LiveDataTicker />
      
      {/* Navigation Bar */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-gray-900">
                Orbit<span className="text-blue-600">Tech</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#solutions" className="text-gray-700 hover:text-blue-600 transition-colors">Solutions</a>
              <a href="#process" className="text-gray-700 hover:text-blue-600 transition-colors">Process</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </div>
            
            <motion.button
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started <ArrowRight className="w-4 h-4 inline ml-2" />
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/Whisk_f433ee6b48.jpg)',
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Zap className="w-4 h-4 mr-2" />
                  4-HOUR DEPLOYMENT
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  Your Construction Site <br />
                  <span className="text-blue-400">Connected.</span> Today.
                </h1>
                
                <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                  Enterprise-grade Starlink deployment for construction professionals.
                  312 Mbps average. 47 active sites. Zero downtime.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <motion.button
                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Deploy Today
                  </motion.button>
                  
                  <motion.button
                    className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Live Sites
                  </motion.button>
                </div>
                
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    ENR Top 400 Trusted
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    FCC Licensed
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    $5M Insurance
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 relative overflow-hidden border border-white/20">
                  <div className="relative z-10">
                    <Satellite className="w-24 h-24 text-blue-400 mx-auto mb-6" />
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-4">Live Site Connection</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-300">Speed:</span>
                          <span className="font-semibold text-blue-400">312 Mbps</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Latency:</span>
                          <span className="font-semibold text-green-400">23ms</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Uptime:</span>
                          <span className="font-semibold text-green-400">99.97%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Animated data flow lines */}
                  <div className="absolute inset-0">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400 rounded-full"
                        animate={{
                          y: [0, -100],
                          opacity: [0, 1, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.4,
                          ease: "linear"
                        }}
                        style={{
                          left: `${20 + i * 15}%`,
                          top: '90%'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold mb-4">THE CHALLENGE</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Construction Sites Lose $156,000 Monthly
            </h2>
            <p className="text-xl text-gray-600">Without reliable connectivity</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-sm text-center"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-3xl font-bold text-red-500 mb-2">21 Days</h3>
              <p className="text-lg font-semibold text-gray-900 mb-2">Average ISP deployment</p>
              <p className="text-gray-600">While permits expire</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl p-8 shadow-sm text-center"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingDown className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-3xl font-bold text-red-500 mb-2">$2,600/hour</h3>
              <p className="text-lg font-semibold text-gray-900 mb-2">Idle crew costs</p>
              <p className="text-gray-600">Documented losses</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-sm text-center"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-3xl font-bold text-red-500 mb-2">73%</h3>
              <p className="text-lg font-semibold text-gray-900 mb-2">Projects delayed</p>
              <p className="text-gray-600">Due to connectivity</p>
            </motion.div>
          </div>
          
          {/* Live cost counter */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 mb-2">Industry losses accumulating right now:</p>
            <div className="text-4xl font-bold text-red-500">
              $<AnimatedCounter value={2847392} />
            </div>
            <p className="text-sm text-gray-500">Updated every 60 seconds</p>
          </motion.div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="bg-white py-20" id="solutions">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold mb-4">THE ORBIT TECH SOLUTION</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              4 Hours. Not 4 Weeks.
            </h2>
          </div>
          
          <TimelineComparison />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-20 relative overflow-hidden" id="process">
        {/* Blueprint grid background */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, #3B82F6 0px, transparent 1px, transparent 40px, #3B82F6 40px),
              repeating-linear-gradient(90deg, #3B82F6 0px, transparent 1px, transparent 40px, #3B82F6 40px)
            `
          }}
        ></div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">From call to connection in 4 hours</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { 
                icon: Phone, 
                time: "8:00 AM", 
                title: "Call", 
                description: "Direct construction team"
              },
              { 
                icon: Truck, 
                time: "9:00 AM", 
                title: "Deploy", 
                description: "Equipment arrives"
              },
              { 
                icon: Settings, 
                time: "11:00 AM", 
                title: "Install", 
                description: "Professional mounting"
              },
              { 
                icon: Wifi, 
                time: "12:00 PM", 
                title: "Connect", 
                description: "Site online"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">{step.time}</h3>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
                
                {/* Connection line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-blue-200 transform translate-x-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Performance Dashboard */}
      <LivePerformanceDashboard />

      {/* Pricing Section */}
      <section className="bg-white py-20" id="pricing">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">Choose the plan that fits your project needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Essential",
                price: 899,
                description: "Single sites",
                features: [
                  "4-hour deployment",
                  "312 Mbps average speed",
                  "24/7 monitoring",
                  "Basic support"
                ],
                highlighted: false
              },
              {
                name: "Professional",
                price: 1299,
                description: "Critical projects",
                features: [
                  "2-hour deployment",
                  "Guaranteed speeds",
                  "Priority support",
                  "Redundant backup",
                  "Site management portal"
                ],
                highlighted: true
              },
              {
                name: "Enterprise",
                price: 2499,
                description: "Multi-site operations",
                features: [
                  "1-hour deployment",
                  "Dedicated account manager",
                  "Custom configurations",
                  "Advanced analytics",
                  "SLA guarantees"
                ],
                highlighted: false
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`rounded-xl p-8 relative ${
                  plan.highlighted 
                    ? 'bg-blue-600 text-white shadow-2xl scale-105' 
                    : 'bg-white border border-gray-200 shadow-sm'
                }`}
                whileHover={{ scale: plan.highlighted ? 1.05 : 1.02 }}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Recommended
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`mb-6 ${plan.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                  
                  <div className="mb-8">
                    <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                      ${plan.price}
                    </span>
                    <span className={`text-lg ${plan.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                      /month
                    </span>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className={`w-5 h-5 mr-3 ${
                          plan.highlighted ? 'text-blue-200' : 'text-green-500'
                        }`} />
                        <span className={plan.highlighted ? 'text-blue-100' : 'text-gray-600'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                      plan.highlighted
                        ? 'bg-white text-blue-600 hover:bg-gray-100'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Deploy Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-sm"
              >
                <div className="flex items-start mb-6">
                  <div className="text-6xl text-blue-600 mr-4">"</div>
                  <div>
                    <p className="text-xl text-gray-700 leading-relaxed font-serif">
                      Orbit Tech delivered what they promised. 4 hours from call to connection. 
                      Our Tysons project stayed on schedule because of their rapid deployment.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Mike Rodriguez</p>
                    <p className="text-gray-600">Project Manager, Turner Construction</p>
                    <div className="flex items-center mt-1">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-1" />
                      <span className="text-sm text-blue-600">Verified Customer</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-blue-50 rounded-xl p-6"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Case Study Results</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Deployment Time:</span>
                    <span className="font-semibold text-blue-600">3.5 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cost Savings:</span>
                    <span className="font-semibold text-green-600">$200,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Permits Filed:</span>
                    <span className="font-semibold text-blue-600">47 same day</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Certifications */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Trusted by Industry Leaders
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { icon: Satellite, label: "Starlink Authorized" },
              { icon: Shield, label: "FCC Licensed" },
              { icon: Star, label: "BBB A+ Rating" },
              { icon: Award, label: "ENR Top 400" },
              { icon: CheckCircle, label: "$5M Liability" },
              { icon: Phone, label: "24/7 Support" }
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-50 transition-colors">
                  <cert.icon className="w-8 h-8 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
                <p className="text-sm font-medium text-gray-700">{cert.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-20" id="contact">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Connect Your Site?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              4-hour deployment starts with one call
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.a
                href="tel:7035553278"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (703) 555-FAST
              </motion.a>
              
              <motion.button
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Consultation
              </motion.button>
            </div>
            
            <div className="flex items-center justify-center text-white">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-blue-100">2 deployment slots available today</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ROI Calculator Widget */}
      <ROICalculator />
    </div>
  );
}
