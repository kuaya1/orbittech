import React, { useState } from 'react';
import { Package, Calendar, Wifi } from 'lucide-react';

const ProcessStep = ({ 
  icon, 
  title, 
  description, 
  isActive, 
  onClick, 
  stepNumber 
}) => (
  <div 
    className={`relative cursor-pointer transition-all duration-300 ${isActive ? 'scale-105' : 'opacity-80 hover:opacity-100'}`}
    onClick={onClick}
  >
    <div className={`w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-5 transition-all duration-300 ${
      isActive 
        ? 'bg-white text-gray-900 shadow-lg' 
        : 'bg-gray-100/10 text-white border border-white/10'
    }`}>
      {icon}
    </div>
    
    <div className="text-center">
      <h3 className={`text-lg font-bold mb-2 transition-colors ${isActive ? 'text-white' : 'text-gray-300'}`}>
        {title}
      </h3>
      <p className="text-gray-400 text-sm px-4">{description}</p>
    </div>
    
    {/* Connected line */}
    <div className={`absolute top-10 left-full w-full h-0.5 -z-10 hidden md:block ${isActive ? 'bg-white/40' : 'bg-white/5'}`}></div>
    
    {/* Step number */}
    <div className={`absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border transition-all duration-300 ${
      isActive 
        ? 'bg-gray-950 text-white border-white/50' 
        : 'bg-gray-900 text-gray-300 border-white/20'
    }`}>
      {stepNumber}
    </div>
  </div>
);

const Process = () => {
  const [activeStep, setActiveStep] = useState(1);
  
  const steps = [
    {
      icon: <Package className="h-8 w-8" />,
      title: "Order",
      description: "Buy Starlink today and wait for your dish to arrive",
      content: (
        <div className="space-y-5">
          <h4 className="text-2xl font-semibold text-white mb-3">Buy Starlink Today</h4>
          <p className="text-gray-200 leading-relaxed">Order your Starlink hardware directly at starlink.com and wait for your new Starlink dish to arrive at your doorstep.</p>
          
          <div className="bg-gray-950/80 backdrop-blur-sm p-6 rounded-xl border border-white/10 mt-6">
            <h5 className="font-semibold text-white mb-3">What You'll Receive:</h5>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-white mr-2">•</span> 
                <span>Starlink dish (dishy)</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">•</span> 
                <span>Mounting base</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">•</span> 
                <span>Power supply</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">•</span> 
                <span>Cables and router</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Book Install",
      description: "Schedule your installation with our expert engineers",
      content: (
        <div className="space-y-5">
          <h4 className="text-2xl font-semibold text-white mb-3">Book Your Installation</h4>
          <p className="text-gray-200 leading-relaxed">Once your Starlink hardware arrives, contact us to schedule your professional installation. We'll get one of our engineers out to you as soon as possible.</p>
          
          <div className="bg-gray-950/80 backdrop-blur-sm p-6 rounded-xl border border-white/10 mt-6">
            <h5 className="font-semibold text-white mb-3">Booking Process:</h5>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-white mr-2">•</span> 
                <span>Call our dedicated installation team</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">•</span> 
                <span>Schedule a date that works for you</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">•</span> 
                <span>Receive confirmation and pre-installation guidance</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "Get Online",
      description: "We'll install your Starlink and get you connected fast",
      content: (
        <div className="space-y-5">
          <h4 className="text-2xl font-semibold text-white mb-3">Get Online in No Time</h4>
          <p className="text-gray-200 leading-relaxed">Our expert technicians will arrive at your location, professionally install your Starlink system, and get you connected to high-speed internet quickly and efficiently.</p>
          
          <div className="bg-gray-950/80 backdrop-blur-sm p-6 rounded-xl border border-white/10 mt-6">
            <h5 className="font-semibold text-white mb-3">What We Do:</h5>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-white mr-2">•</span> 
                <span>Professional mounting in the optimal location</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">•</span> 
                <span>Clean, discreet cable routing</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">•</span> 
                <span>Complete system setup and testing</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">•</span> 
                <span>Demonstration and usage guidance</span>
              </li>
            </ul>
          </div>
          
          <div className="mt-6 p-5 bg-gradient-to-r from-gray-900/90 to-gray-950/90 rounded-xl border border-white/10">
            <p className="text-white flex items-center">
              <span className="font-bold mr-2">💪</span> 
              You'll be up and running with high-speed internet in no time!
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="process" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Modern layered background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-950"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pattern-grid"></div>
      
      {/* Abstract shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-tr from-white/3 to-transparent rounded-full blur-3xl"></div>
      
      {/* Subtle star field */}
      <div className="stars-container absolute inset-0 overflow-hidden opacity-60">
        <div className="stars"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium mb-5">Simple Process</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-5 text-white tracking-tight">How It Works</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Getting connected with Starlink is easy. Just three simple steps from order to online.
          </p>
        </div>
        
        {/* Process steps navigation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 relative max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <ProcessStep 
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              isActive={activeStep === index + 1}
              onClick={() => setActiveStep(index + 1)}
              stepNumber={index + 1}
            />
          ))}
        </div>
        
        {/* Content display area with elegant transitions */}
        <div className="bg-gray-950/90 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl shadow-black/20 min-h-[300px] transition-all duration-500 max-w-3xl mx-auto">
          {steps[activeStep - 1].content}
        </div>
      </div>

      {/* CSS for background effects */}
      <style jsx>{`
        .pattern-grid {
          background-image: linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        
        .stars {
          position: absolute;
          top: 0;
          left: 0;
          width: 200%;
          height: 200%;
          transform: translateX(-25%) translateY(-25%);
          background-image: 
            radial-gradient(1px 1px at 25px 25px, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0)),
            radial-gradient(1px 1px at 50px 50px, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0)),
            radial-gradient(1px 1px at 125px 125px, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0)),
            radial-gradient(1.5px 1.5px at 170px 170px, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0)),
            radial-gradient(1px 1px at 300px 300px, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0));
          background-repeat: repeat;
          background-size: 400px 400px;
          animation: stars-animation 200s linear infinite;
        }
        
        @keyframes stars-animation {
          0% {
            transform: translateX(-25%) translateY(-25%) rotate(0deg);
          }
          100% {
            transform: translateX(-25%) translateY(-25%) rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default Process;