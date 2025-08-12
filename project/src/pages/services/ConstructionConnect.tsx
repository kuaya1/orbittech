import { useState } from 'react';
import { 
  Wifi, 
  Clock, 
  Check,
  X,
  TrendingDown,
  Building,
  Phone,
  DollarSign,
  Globe,
  Satellite,
  Activity,
  Truck,
  Settings
} from 'lucide-react';

// Interactive Timeline Comparison
const TimelineComparison = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  
  const traditionalDays = 21;
  const orbitTechHours = 48;
  
  const dailyCost = 2600 * 8; // $2,600/hour * 8 hours
  const traditionalCost = dailyCost * traditionalDays;
  const orbitTechCost = 899; // Monthly fee

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-8">
      <div className="text-center mb-8">
        <h3 className="text-[28px] font-semibold text-black mb-2">Deployment Time Comparison</h3>
        <p className="text-[18px] text-gray-600">Drag the slider to see the difference</p>
      </div>
      
      <div className="relative">
        <div className="flex justify-between items-center mb-4">
          <div className={`transition-all duration-300 ${sliderPosition < 50 ? 'opacity-100' : 'opacity-50'}`}>
            <h4 className="font-semibold text-gray-900">Traditional ISP</h4>
            <p className="text-3xl font-bold text-black">{traditionalDays} days</p>
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
              {/* Live cost counter removed per updated narrative */}
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
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
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

          /* Mobile touch targets and spacing */
          .mobile-cta {
            width: 100%;
            min-height: 48px;
            font-size: 1rem;
          }

          .mobile-card {
            margin-bottom: 1rem;
          }

          .mobile-stack {
            flex-direction: column;
            gap: 1rem;
          }
        }

        /* Remove hover effects on touch devices */
        @media (hover: none) and (pointer: coarse) {
          .hover\\:bg-blue-700:hover {
            background-color: rgb(37 99 235) !important;
          }
          
          .hover\\:bg-gray-100:hover {
            background-color: rgb(243 244 246) !important;
          }
          
          .hover\\:bg-gray-50:hover {
            background-color: rgb(249 250 251) !important;
          }
          
          .hover\\:bg-white:hover {
            background-color: rgb(255 255 255) !important;
          }
          
          .hover\\:text-blue-600:hover {
            color: rgb(37 99 235) !important;
          }
          
          .hover\\:shadow-lg:hover {
            box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1) !important;
          }

          .core-card:hover {
            box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1) !important;
          }
        }
      `}</style>

      {/* Hero Section - Clean 60/40 Split with Right Image */}
      <section className="relative py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Left: Copy and CTAs (60%) */}
            <div className="lg:col-span-3 order-1 lg:order-1">
              <div>
                <h1 className="text-[56px] font-extrabold leading-[1.1] tracking-tight text-black mb-8">
                  Your Construction Site <br />
                  <span className="text-blue-600">Connected.</span> This Week.
                </h1>
                
                <p className="text-lg text-gray-600 leading-7 mb-10 max-w-2xl">
                  Enterprise-grade Starlink deployment for construction professionals.
                  312 Mbps average. 47 active sites. 48-hour installation.
                </p>
                
                {/* Mobile: Image appears here above button, Desktop: Hidden */}
                <div className="lg:hidden relative mb-10 h-80 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url("/Whisk%20starlink.jpg")'}}>
                </div>
                
                {/* CTAs */}
                <div className="mb-10">
                  <button className="bg-blue-600 text-white px-4 py-4 rounded-lg text-base font-semibold hover:bg-blue-700 transition-all duration-300 w-full sm:w-auto mobile-cta">
                    Schedule Deployment
                  </button>
                  
                  {/* Desktop only second button */}
                  <button className="hidden sm:inline-block bg-white text-blue-600 border border-blue-600 px-4 py-4 rounded-lg text-base font-semibold hover:bg-gray-50 transition-all duration-300 ml-4">
                    View Process
                  </button>
                </div>
                
                {/* Status line */}
                <p className="text-sm text-gray-600">
                  Currently serving 47 active sites across DMV
                </p>
              </div>
            </div>
            
            {/* Right: Construction Site Image (40%) - Desktop only */}
            <div className="hidden lg:block lg:col-span-2 relative order-2">
              <div className="aspect-[4/3] bg-cover bg-center bg-no-repeat rounded-lg" style={{backgroundImage: 'url("/Whisk%20starlink.jpg")'}}>
              </div>
            </div>
          </div>
        </div>
      </section>

          {/* The Challenge */}
          <section style={{ backgroundColor: '#F8FAFC', paddingTop: '96px', paddingBottom: '96px' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
               <h2 className="text-[40px] font-bold text-black" style={{ fontFamily: 'Inter', fontWeight: 700 }}>Time Is Money in Construction</h2>
               <p className="text-[18px] text-gray-600 mt-4">Traditional ISPs don't understand project timelines</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl border border-gray-100 p-8 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-3xl font-bold text-black mb-2">21 days</h3>
                 <p className="text-base text-gray-600">Typical ISP deployment</p>
            </div>
            
            <div className="bg-white rounded-xl border border-gray-100 p-8 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-gray-600" />
              </div>
                 <h3 className="text-3xl font-bold text-black mb-2">$2,600/hour</h3>
                 <p className="text-base text-gray-600">Crew idle cost</p>
            </div>
            
            <div className="bg-white rounded-xl border border-gray-100 p-8 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingDown className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-3xl font-bold text-black mb-2">73%</h3>
                 <p className="text-base text-gray-600">Projects with connectivity delays</p>
            </div>
          </div>
             
             {/* Source note */}
             <p className="text-base text-gray-600 text-center mt-10">
               Source: 2024 Construction Industry Digital Transformation Report
             </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-white" style={{ paddingTop: '96px', paddingBottom: '96px' }} id="solutions">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-[40px] font-bold text-black" style={{ fontFamily: 'Inter', fontWeight: 700 }}>48 Hours. Not 3 Weeks.</h2>
          </div>

          <TimelineComparison />
        </div>
      </section>

      {/* Core Services - New Section */}
      <section className="bg-white" style={{ paddingTop: '96px', paddingBottom: '96px' }}>
        {/* Local styles for card hover */}
        <style>{`
          .core-card { 
            transition: box-shadow 0.3s ease;
            background: #FAFBFC; 
            border: 1px solid #E5E5E5; 
            border-radius: 12px; 
          }
          .core-card:hover { 
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          }
        `}</style>
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-[40px] font-bold text-black" style={{ fontFamily: 'Inter', fontWeight: 700 }}>Complete Connectivity Solutions</h2>
            <p className="text-[18px] text-gray-600 mt-4">Professional deployment and management for construction sites</p>
          </div>

          {/* Three-card grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {/* Card 1: Site Deployment */}
            <div className="core-card mobile-card" style={{ padding: '32px' }}>
              <div className="w-12 h-12 mb-6">
                <Satellite className="w-12 h-12 text-blue-600" strokeWidth={2} />
              </div>
              <h3 className="text-[20px] md:text-[24px] font-semibold text-black mb-3" style={{ fontFamily: 'Inter', fontWeight: 600 }}>Site Deployment</h3>
              <p className="text-[14px] md:text-[16px] text-gray-600">48-hour Starlink installation with professional mounting</p>
            </div>

            {/* Card 2: Network Management */}
            <div className="core-card mobile-card" style={{ padding: '32px' }}>
              <div className="w-12 h-12 mb-6">
                <Globe className="w-12 h-12 text-blue-600" strokeWidth={2} />
              </div>
              <h3 className="text-[20px] md:text-[24px] font-semibold text-black mb-3" style={{ fontFamily: 'Inter', fontWeight: 600 }}>Network Management</h3>
              <p className="text-[14px] md:text-[16px] text-gray-600">24/7 monitoring and support for continuous uptime</p>
            </div>

            {/* Card 3: Performance Analytics */}
            <div className="core-card mobile-card" style={{ padding: '32px' }}>
              <div className="w-12 h-12 mb-6">
                <TrendingDown className="w-12 h-12 text-blue-600" strokeWidth={2} />
              </div>
              <h3 className="text-[20px] md:text-[24px] font-semibold text-black mb-3" style={{ fontFamily: 'Inter', fontWeight: 600 }}>Performance Analytics</h3>
              <p className="text-[14px] md:text-[16px] text-gray-600">Real-time speed monitoring and optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Two-Day Process */}
      <section style={{ backgroundColor: '#F8FAFC', paddingTop: '96px', paddingBottom: '96px' }} id="process">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-[40px] font-bold text-black" style={{ fontFamily: 'Inter', fontWeight: 700 }}>
              Simple Two-Day Process
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { 
                icon: Phone, 
                day: "Day 1", 
                time: "Morning",
                title: "Consultation", 
                description: "Site survey and planning"
              },
              { 
                icon: Settings, 
                day: "Day 1", 
                time: "Afternoon",
                title: "Preparation", 
                description: "Equipment staging"
              },
              { 
                icon: Truck, 
                day: "Day 2", 
                time: "Morning",
                title: "Installation", 
                description: "Professional mounting and setup"
              },
              { 
                icon: Wifi, 
                day: "Day 2", 
                time: "Afternoon",
                title: "Activation", 
                description: "Testing and handoff"
              }
            ].map((step, index) => (
              <div
                key={index}
                className="text-center relative mobile-card"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 border border-gray-100">
                  <step.icon className="w-8 h-8 md:w-10 md:h-10 text-blue-600" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">{step.day}</h3>
                <h4 className="text-sm text-gray-600 mb-2 md:mb-3">{step.time}</h4>
                <h5 className="text-lg md:text-xl font-semibold text-black mb-2">{step.title}</h5>
                <p className="text-sm md:text-base text-gray-600">{step.description}</p>
                
                {/* Connection line - Desktop only */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-200 transform translate-x-1/2"></div>
                )}

                {/* Vertical connection line - Mobile only */}
                {index < 3 && (
                  <div className="md:hidden absolute left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gray-200 -bottom-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Data */}
      <section className="bg-white" style={{ paddingTop: '96px', paddingBottom: '96px' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-[40px] font-bold text-black" style={{ fontFamily: 'Inter', fontWeight: 700 }}>Network Performance</h2>
            <p className="text-[18px] text-gray-600 mt-4">Live data from active construction sites</p>
          </div>
          
          {/* 2x2 Metrics Grid - Mobile: Single Column */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 md:p-8 text-center mobile-card">
              <Activity className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-4 text-blue-600" />
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">298</div>
              <p className="text-sm md:text-base text-gray-600">Average Speed (Mbps)</p>
            </div>
            
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 md:p-8 text-center mobile-card">
              <Building className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-4 text-blue-600" />
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">47</div>
              <p className="text-sm md:text-base text-gray-600">Active Sites</p>
            </div>
            
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 md:p-8 text-center mobile-card">
              <Globe className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-4 text-blue-600" />
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">99.97%</div>
              <p className="text-sm md:text-base text-gray-600">Network Uptime</p>
            </div>
            
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 md:p-8 text-center mobile-card">
              <Clock className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-4 text-blue-600" />
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">&lt;2 hours</div>
              <p className="text-sm md:text-base text-gray-600">Response Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-white" style={{ paddingTop: '96px', paddingBottom: '96px' }} id="pricing">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-[40px] font-bold text-black" style={{ fontFamily: 'Inter', fontWeight: 700 }}>
              Transparent Pricing
            </h2>
            <p className="text-[18px] text-gray-600 mt-4">No contracts. No hidden fees.</p>
          </div>

          {/* Billing cycle toggle */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center rounded-lg border border-gray-200 p-1 bg-gray-50 w-full max-w-xs sm:w-auto">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-3 py-2 md:px-4 md:py-2 rounded-md text-sm font-semibold transition-colors flex-1 sm:flex-initial ${
                  billingCycle === 'monthly' ? 'bg-white text-black shadow-sm' : 'text-gray-600 hover:text-black'
                }`}
                aria-pressed={billingCycle === 'monthly'}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("annual")}
                className={`px-3 py-2 md:px-4 md:py-2 rounded-md text-sm font-semibold transition-colors flex-1 sm:flex-initial ${
                  billingCycle === 'annual' ? 'bg-white text-black shadow-sm' : 'text-gray-600 hover:text-black'
                }`}
                aria-pressed={billingCycle === 'annual'}
              >
                Annual (Save 10%)
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "Essential",
                price: 899,
                description: "Single sites",
                features: [
                  "48-hour deployment",
                  "250+ Mbps speeds",
                  "Standard support"
                ]
              },
              {
                name: "Professional",
                price: 1299,
                description: "Critical projects",
                features: [
                  "Next-day deployment",
                  "Guaranteed speeds",
                  "Priority support",
                  "Backup connectivity"
                ]
              },
              {
                name: "Enterprise",
                price: 2499,
                description: "Multi-site operations",
                features: [
                  "Same-day deployment",
                  "Dedicated management",
                  "Custom configuration",
                  "SLA guarantees"
                ]
              }
            ].map((plan, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-xl p-6 md:p-8 mobile-card"
              >
                <div className="text-center">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-black">
                    {plan.name}
                  </h3>
                  <p className="mb-6 text-gray-600 text-sm md:text-base">
                    {plan.description}
                  </p>
                  
                  <div className="mb-6 md:mb-8">
                    {(() => {
                      const monthly = plan.price;
                      const shown = billingCycle === 'monthly' ? monthly : Math.round(monthly * 0.9);
                      return (
                        <>
                          <span className="font-extrabold text-black text-[40px] md:text-[56px] leading-none">${shown}</span>
                          <span className="text-base md:text-lg text-gray-600">/mo</span>
                          <div className="text-xs md:text-sm text-gray-500 mt-1">
                            {billingCycle === 'annual' ? 'billed annually' : 'billed monthly'}
                          </div>
                        </>
                      );
                    })()}
                  </div>
                  
                  <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-left">
                        <Check className="w-4 h-4 md:w-5 md:h-5 mr-3 text-gray-800 flex-shrink-0" />
                        <span className="text-gray-600 text-sm md:text-base">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    className="w-full py-3 md:py-4 px-6 rounded-lg font-semibold transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700 min-h-[48px] mobile-cta"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section style={{ backgroundColor: '#F8FAFC', paddingTop: '96px', paddingBottom: '96px' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[32px] text-gray-900 leading-relaxed mb-12" style={{ fontFamily: 'Georgia, serif' }}>
            Orbit Tech delivered exactly what they promised. 48 hours from call to connection. Our Tysons project stayed on schedule because of their reliable deployment.
          </p>
          
          <div className="text-[18px] text-gray-700">
            <p className="font-semibold">Mike Rodriguez</p>
            <p>Project Manager, Turner Construction</p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-white" style={{ paddingTop: '96px', paddingBottom: '96px' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-[40px] font-bold text-black" style={{ fontFamily: 'Inter', fontWeight: 700 }}>
              Fully Certified and Insured
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-gray-700">Starlink Authorized Installer</p>
            </div>
            <div className="text-center">
              <p className="text-gray-700">FCC Licensed</p>
            </div>
            <div className="text-center">
              <p className="text-gray-700">$5M General Liability</p>
            </div>
            <div className="text-center">
              <p className="text-gray-700">$2M Professional Liability</p>
            </div>
            <div className="text-center">
              <p className="text-gray-700">BBB Accredited</p>
            </div>
            <div className="text-center">
              <p className="text-gray-700">24/7 Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-600" style={{ paddingTop: '96px', paddingBottom: '96px' }} id="contact">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div>
            <h2 className="text-[40px] font-bold text-white mb-6" style={{ fontFamily: 'Inter', fontWeight: 700 }}>
              Ready to Connect Your Site?
            </h2>
            <p className="text-[18px] text-blue-100 mb-8">
              Professional deployment in 48 hours
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 mobile-stack">
              <a
                href="tel:7035553278"
                className="bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center min-h-[48px] mobile-cta"
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Call (703) 555-FAST
              </a>
              
              <button
                className="bg-transparent border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 min-h-[48px] mobile-cta"
              >
                Schedule Consultation
              </button>
            </div>
            
            <p className="text-[16px] text-blue-100">
              48-hour deployment guarantee
            </p>
          </div>
        </div>
      </section>

      {/* ROI Calculator Widget */}
      <ROICalculator />
    </div>
  );
}
