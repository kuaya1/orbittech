import React, { useState } from 'react';
import { Info, CheckCircle } from 'lucide-react';

// Hotspot data for DMV area
const hotspots = [
  { id: 1, x: 60, y: 65, name: "Washington DC", available: true },
  { id: 2, x: 67, y: 79, name: "Alexandria", available: true },
  { id: 3, x: 43, y: 81, name: "Fairfax", available: true },
  { id: 4, x: 54, y: 77, name: "Arlington", available: true },
  { id: 5, x: 69, y: 71, name: "Hyattsville", available: true },
  { id: 6, x: 76, y: 64, name: "Annapolis", available: true },
  { id: 7, x: 48, y: 67, name: "McLean", available: true },
  { id: 8, x: 54, y: 58, name: "Bethesda", available: true },
  { id: 9, x: 65, y: 58, name: "Silver Spring", available: true },
  { id: 10, x: 61, y: 52, name: "Rockville", available: true },
  { id: 11, x: 52, y: 48, name: "Gaithersburg", available: true },
  { id: 12, x: 53, y: 39, name: "Germantown", available: true },
  { id: 13, x: 46, y: 33, name: "Leesburg", available: true },
  { id: 14, x: 42, y: 24, name: "Frederick", available: true },
  { id: 15, x: 30, y: 47, name: "Ashburn", available: true },
];

type HotspotProps = {
  x: number;
  y: number;
  name: string;
  available: boolean;
  onClick: () => void;
  active: boolean;
};

const Hotspot: React.FC<HotspotProps> = ({ x, y, name, available, onClick, active }) => {
  return (
    <div 
      className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${active ? 'z-30' : 'z-20'}`}
      style={{ left: `${x}%`, top: `${y}%` }}
      onClick={onClick}
    >
      {/* Pulse animation ring */}
      <div className={`absolute inset-0 rounded-full ${active ? 'animate-ping-slow opacity-50' : 'opacity-0'} bg-blue-500 w-5 h-5 -m-2.5`}></div>
      
      {/* Main dot */}
      <div className={`w-4 h-4 rounded-full ${available 
        ? 'bg-gradient-to-r from-blue-400 to-blue-500' 
        : 'bg-gray-500'} shadow-lg hover:scale-125 transition-transform duration-300 border border-white/20`}>
      </div>
      
      {/* Tooltip that shows on active state */}
      {active && (
        <div className="absolute left-5 -top-2 bg-gray-900/90 backdrop-blur-md text-white px-3 py-1 rounded shadow-lg text-sm whitespace-nowrap border border-blue-500/20 z-10">
          <div className="flex items-center">
            {available ? (
              <CheckCircle className="h-3.5 w-3.5 text-blue-400 mr-1.5" />
            ) : (
              <Info className="h-3.5 w-3.5 text-gray-400 mr-1.5" />
            )}
            {name}
          </div>
        </div>
      )}
    </div>
  );
};

const CoverageMap: React.FC = () => {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  return (
    <div className="py-24 relative overflow-hidden" id="coverage-map">
      {/* Background with Starlink aesthetic */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#020617]"></div>
        <div className="absolute inset-0 starfield-enhanced opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-900/30 text-blue-300 text-sm font-medium mb-4">Coverage Area</span>
          <h2 style={{ fontFamily: 'Jost, sans-serif' }} className="text-3xl md:text-4xl font-bold text-white mb-4">
            DMV Service Coverage
          </h2>
          <p style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400 }} className="text-lg text-gray-300 mb-8">
            Explore our coverage throughout the Washington DC, Maryland, and Virginia regions. Click on any location to check availability.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto mb-8">
          {/* Map container with glow effect */}
          <div className="aspect-[4/3] relative rounded-xl overflow-hidden border border-blue-900/30 shadow-2xl map-glow">
            {/* Map overlay - dark tint */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-black/40 z-10"></div>
            
            {/* Stylized map grid overlay */}
            <div className="absolute inset-0 map-grid opacity-20 z-[5]"></div>
            
            {/* DMV map image - Replace placeholder with actual image */}
            <img 
              src="/images/dmv-map.jpg" 
              alt="DMV Area Coverage Map"
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                // Fallback if image doesn't load
                e.currentTarget.src = "https://via.placeholder.com/800x600/0f172a/475569?text=DMV+Area+Map";
              }}
            />
            
            {/* Central glow to highlight DC area */}
            <div className="absolute w-1/3 h-1/3 rounded-full bg-blue-500/10 blur-xl left-[60%] top-[65%] transform -translate-x-1/2 -translate-y-1/2 z-[6]"></div>
            
            {/* Hotspots */}
            {hotspots.map(hotspot => (
              <Hotspot
                key={hotspot.id}
                x={hotspot.x}
                y={hotspot.y}
                name={hotspot.name}
                available={hotspot.available}
                active={activeHotspot === hotspot.id}
                onClick={() => setActiveHotspot(activeHotspot === hotspot.id ? null : hotspot.id)}
              />
            ))}
            
            {/* Coverage border - high coverage area */}
            <div className="absolute w-[65%] h-[65%] rounded-full border-2 border-dashed border-blue-500/30 left-[60%] top-[65%] transform -translate-x-1/2 -translate-y-1/2 z-[7]"></div>
            
            {/* Coverage border - medium coverage area */}
            <div className="absolute w-[85%] h-[85%] rounded-full border border-dashed border-blue-400/20 left-[60%] top-[65%] transform -translate-x-1/2 -translate-y-1/2 z-[7]"></div>
          </div>
          
          {/* Map legend */}
          <div className="mt-6 bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 border border-blue-900/20">
            <h3 className="text-white text-lg mb-3 font-medium">Coverage Legend</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 mr-2"></div>
                <span className="text-gray-300 text-sm">Active Coverage</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-4 border border-dashed border-blue-500/30 rounded-full mr-2"></div>
                <span className="text-gray-300 text-sm">High Coverage</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-4 border border-dashed border-blue-400/20 rounded-full mr-2"></div>
                <span className="text-gray-300 text-sm">Medium Coverage</span>
              </div>
            </div>
          </div>
          
          <div className="mt-4 text-center text-gray-400 text-sm italic">
            <p>Select any pin on the map to see location information and service details.</p>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .starfield-enhanced {
          background-image: 
            radial-gradient(1.5px 1.5px at 25px 25px, rgba(255, 255, 255, 0.7), rgba(0, 0, 0, 0)),
            radial-gradient(1px 1px at 50px 50px, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 125px 125px, rgba(255, 255, 255, 0.6), rgba(0, 0, 0, 0)),
            radial-gradient(1.5px 1.5px at 170px 170px, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0)),
            radial-gradient(2px 2px at 200px 200px, rgba(255, 255, 255, 0.7), rgba(0, 0, 0, 0)),
            radial-gradient(1px 1px at 300px 300px, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0));
          background-size: 400px 400px;
        }
        
        .map-grid {
          background-image:
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        
        .map-glow {
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.15);
        }
        
        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          80%, 100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }
        
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default CoverageMap;
