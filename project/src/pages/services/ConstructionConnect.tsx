import { useState } from 'react';
import { 
  Wifi, 
  Clock, 
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
  Award,
  Truck,
  Settings,
  Target
} from 'lucide-react';

// Interactive Timeline Comparison
const TimelineComparison = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  
  const traditionalDays = 21;
  const orbitTechHours = 4;
  
  const dailyCost = 2600 * 8; // $2,600/hour * 8 hours
  const traditionalCost = dailyCost * traditionalDays;
  const orbitTechCost = 899; // Monthly fee

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-8 hover:shadow-lg transition-shadow duration-300">
      <div className="text-center mb-8">
        <h3 className="h3 text-gray-900 mb-2">Deployment Time Comparison</h3>
        <p className="body">Drag the slider to see the difference</p>
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
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 min-h-[48px] min-w-[48px]"
        >
          <DollarSign className="w-6 h-6" />
        </button>
      ) : (
        <div className="bg-white rounded-xl border border-gray-100 p-6 w-80 max-w-[calc(100vw-2rem)] hover:shadow-lg transition-all duration-300">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-gray-900">ROI Calculator</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 p-1 min-h-[32px] min-w-[32px]"
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
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 min-h-[48px]"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Hourly Rate ($)</label>
              <input
                type="number"
                value={inputs.hourlyRate}
                onChange={(e) => setInputs(prev => ({ ...prev, hourlyRate: parseInt(e.target.value) || 0 }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 min-h-[48px]"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Hours Lost/Day</label>
              <input
                type="number"
                value={inputs.hoursLost}
                onChange={(e) => setInputs(prev => ({ ...prev, hoursLost: parseInt(e.target.value) || 0 }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 min-h-[48px]"
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
        </div>
      )}
    </div>
  );
};

// Main Component
export default function ConstructionConnect() {
  return (
    <div className="min-h-screen bg-white">
      {/* Custom Typography Styles */}
      <style>{`
        /* Refined Typography Scale */
        .h1 {
          font-size: 3.5rem;  /* 56px */
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .h2 {
          font-size: 2.5rem;  /* 40px */
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.01em;
        }

        .h3 {
          font-size: 1.75rem; /* 28px */
          font-weight: 600;
          line-height: 1.3;
        }

        .body {
          font-size: 1.125rem; /* 18px */
          font-weight: 400;
          line-height: 1.7;
          color: #64748B;
        }

        /* Mobile responsive adjustments */
        @media (max-width: 768px) {
          .h1 {
            font-size: 2.25rem; /* 36px on mobile */
          }
          
          .h2 {
            font-size: 1.75rem; /* 28px on mobile */
          }
          
          .h3 {
            font-size: 1.375rem; /* 22px on mobile */
          }
        }
      `}</style>
      
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
              <a href="#solutions" className="text-gray-700 hover:text-blue-600 transition-all duration-300">Solutions</a>
              <a href="#process" className="text-gray-700 hover:text-blue-600 transition-all duration-300">Process</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-all duration-300">Pricing</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-all duration-300">Contact</a>
            </div>
            
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 min-h-[40px]"
            >
              Get Started <ArrowRight className="w-4 h-4 inline ml-2" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Clean 60/40 Split with Background Image */}
      <section className="relative py-24 bg-white overflow-hidden min-h-[80vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/construction-site-79.png" 
            alt="Construction site with satellite internet connectivity"
            className="w-full h-full object-cover"
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/70"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            {/* Left: Copy and CTAs (60%) */}
            <div className="lg:col-span-3">
              <div>
                <div className="inline-flex items-center bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-8">
                  <Zap className="w-4 h-4 mr-2" />
                  4-HOUR DEPLOYMENT
                </div>
                
                <h1 className="h1 text-black mb-8">
                  Your Construction Site <br />
                  <span className="text-blue-600">Connected.</span> Today.
                </h1>
                
                <p className="body mb-10 max-w-2xl">
                  Enterprise-grade Starlink deployment for construction professionals.
                  312 Mbps average. 47 active sites. Zero downtime.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 min-h-[48px]">
                    Deploy Today
                  </button>
                  
                  <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-all duration-300 min-h-[48px]">
                    View Live Sites
                  </button>
                </div>
                
                {/* Subtle live status element */}
                <div className="flex items-center gap-4 text-sm text-gray-700 bg-white/80 backdrop-blur-sm rounded-lg px-4 py-3 inline-flex">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    McLean: 287 Mbps
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    47 Active Sites
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right: Live Stats Card (40%) */}
            <div className="lg:col-span-2 relative">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl border border-gray-100 p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <Satellite className="w-10 h-10 text-blue-600" />
                  <div className="flex items-center text-green-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm font-medium">LIVE</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-black mb-6">Site Connection</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Speed:</span>
                    <span className="text-2xl font-bold text-blue-600">312 Mbps</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Latency:</span>
                    <span className="text-2xl font-bold text-green-500">23ms</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Uptime:</span>
                    <span className="text-2xl font-bold text-green-500">99.97%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - Three Cards, Clean Borders */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold mb-4">THE CHALLENGE</p>
            <h2 className="h2 text-black mb-6">
              Construction Sites Lose $156,000 Monthly
            </h2>
            <p className="body">Without reliable connectivity</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl border border-gray-100 p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-600 mb-2">21 Days</h3>
              <p className="text-lg font-semibold text-black mb-2">Average ISP deployment</p>
              <p className="text-gray-600">While permits expire</p>
            </div>
            
            <div className="bg-white rounded-xl border border-gray-100 p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingDown className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-600 mb-2">$2,600/hour</h3>
              <p className="text-lg font-semibold text-black mb-2">Idle crew costs</p>
              <p className="text-gray-600">Documented losses</p>
            </div>
            
            <div className="bg-white rounded-xl border border-gray-100 p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-600 mb-2">73%</h3>
              <p className="text-lg font-semibold text-black mb-2">Projects delayed</p>
              <p className="text-gray-600">Due to connectivity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - Timeline Comparison */}
      <section className="bg-white py-24" id="solutions">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-semibold mb-4">THE ORBIT TECH SOLUTION</p>
            <h2 className="h2 text-black mb-6">
              4 Hours. Not 4 Weeks.
            </h2>
          </div>
          
          <TimelineComparison />
        </div>
      </section>

      {/* Process Section - 4 Steps, Clean Design */}
      <section className="bg-gray-50 py-24" id="process">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="h2 text-black mb-6">
              How It Works
            </h2>
            <p className="body">From call to connection in 4 hours</p>
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
              <div
                key={index}
                className="text-center relative"
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <step.icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">{step.time}</h3>
                <h4 className="text-xl font-semibold text-black mb-2">{step.title}</h4>
                <p className="text-gray-600">{step.description}</p>
                
                {/* Connection line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-200 transform translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Section - White Background with Blue Accent Cards */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="h2 text-black mb-4">Live Network Performance</h2>
            <p className="body">Real-time data from active construction sites</p>
          </div>
          
          {/* Mobile: Key metrics only */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300">
              <Activity className="w-8 h-8 mx-auto mb-4 text-blue-600" />
              <div className="text-3xl font-bold text-blue-600 mb-2">298</div>
              <p className="text-gray-600 text-sm md:text-base">Avg Speed (Mbps)</p>
            </div>
            
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300">
              <Building className="w-8 h-8 mx-auto mb-4 text-blue-600" />
              <div className="text-3xl font-bold text-blue-600 mb-2">47</div>
              <p className="text-gray-600 text-sm md:text-base">Active Sites</p>
            </div>
            
            <div className="hidden md:block bg-blue-50 border border-blue-100 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300">
              <Globe className="w-8 h-8 mx-auto mb-4 text-blue-600" />
              <div className="text-3xl font-bold text-blue-600 mb-2">2,847</div>
              <p className="text-gray-600">Data Today (GB)</p>
            </div>
            
            <div className="hidden md:block bg-blue-50 border border-blue-100 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300">
              <Target className="w-8 h-8 mx-auto mb-4 text-blue-600" />
              <div className="text-3xl font-bold text-blue-600 mb-2">312</div>
              <p className="text-gray-600">Tysons (Mbps)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-white py-24" id="pricing">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="h2 text-black mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="body">Choose the plan that fits your project needs</p>
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
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-100 p-8 hover:shadow-lg transition-all duration-300"
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Recommended
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2 text-black">
                    {plan.name}
                  </h3>
                  <p className="mb-6 text-gray-600">
                    {plan.description}
                  </p>
                  
                  <div className="mb-8">
                    <span className="text-5xl font-bold text-black">
                      ${plan.price}
                    </span>
                    <span className="text-lg text-gray-600">
                      /month
                    </span>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 mr-3 text-green-500" />
                        <span className="text-gray-600">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    className="w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700 min-h-[48px]"
                  >
                    Deploy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-xl border border-gray-100 p-12 hover:shadow-lg transition-all duration-300">
            <div className="text-6xl text-blue-600 mb-8">"</div>
            <p className="text-2xl md:text-3xl text-gray-900 leading-relaxed font-serif mb-8">
              Orbit Tech delivered what they promised. 4 hours from call to connection. 
              Our Tysons project stayed on schedule because of their rapid deployment.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex-shrink-0"></div>
              <div className="text-center md:text-left">
                <p className="font-semibold text-xl text-black">Mike Rodriguez</p>
                <p className="text-gray-600">Project Manager, Turner Construction</p>
                <div className="flex items-center justify-center md:justify-start mt-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-blue-600 font-medium">Verified Customer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Certifications */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="h2 text-black mb-6">
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
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-100 transition-all duration-300 min-h-[48px]">
                  <cert.icon className="w-8 h-8 text-gray-600 group-hover:text-blue-600 transition-all duration-300" />
                </div>
                <p className="text-sm font-medium text-black">{cert.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-600 py-24" id="contact">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div>
            <h2 className="h2 text-white mb-6">
              Ready to Connect Your Site?
            </h2>
            <p className="body text-white mb-8">
              4-hour deployment starts with one call
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="tel:7035553278"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center min-h-[48px]"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (703) 555-FAST
              </a>
              
              <button
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 min-h-[48px]"
              >
                Schedule Consultation
              </button>
            </div>
            
            <div className="flex items-center justify-center text-white">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
              <span className="text-white">2 deployment slots available today</span>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Widget */}
      <ROICalculator />
    </div>
  );
}
