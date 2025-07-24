import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';

// This is the 3D background component from the previous step.
// It creates the animated globe.
const Hero3DBackground = () => {
    const mountRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    // This effect runs once to set up the resize listener.
    useEffect(() => {
        const updateDimensions = () => {
            setDimensions({ width: window.innerWidth, height: window.innerHeight });
        };
        updateDimensions(); // Set initial dimensions
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    // This effect re-creates the scene whenever the dimensions change.
    useEffect(() => {
        const mount = mountRef.current;
        if (!mount || dimensions.width === 0) return;

        // --- Responsive Sizing ---
        const isMobile = dimensions.width < 768;
        const radius = isMobile ? 9 * 1.1 : 9 * 1.2; // 10% bigger for mobile, 20% for desktop
        const connectionDistance = isMobile ? 1.98 : 2.16; // Proportional connection distance

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

        renderer.setSize(mount.clientWidth, mount.clientHeight);
        // Clear previous canvas if it exists
        while (mount.firstChild) {
            mount.removeChild(mount.firstChild);
        }
        mount.appendChild(renderer.domElement);

        // --- Full Sphere with Random Point Distribution ---
        const points = [];
        const numPoints = 857; // Reduced by 15% from 1008

        for (let i = 0; i < numPoints; i++) {
            const u = Math.random();
            const v = Math.random();
            const theta = 2 * Math.PI * u;
            const phi = Math.acos(2 * v - 1);
            const x = radius * Math.sin(phi) * Math.cos(theta);
            const y = radius * Math.sin(phi) * Math.sin(theta);
            const z = radius * Math.cos(phi);
            points.push(x, y, z);
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
        
        // Updated color to #1086f4
        const material = new THREE.PointsMaterial({ color: 0x1086f4, size: 0.05 }); 
        const sphere = new THREE.Points(geometry, material);
        scene.add(sphere);

        // --- Lines connecting the points ---
        const linesGeometry = new THREE.BufferGeometry();
        // Brightened up lines by increasing opacity
        const linesMaterial = new THREE.LineBasicMaterial({ color: 0x1086f4, transparent: true, opacity: 0.2 }); 
        
        const linesPositions = [];
        const positions = geometry.attributes.position.array;

        for (let i = 0; i < positions.length; i += 3) {
            for (let j = i + 3; j < positions.length; j += 3) {
                const p1 = new THREE.Vector3(positions[i], positions[i+1], positions[i+2]);
                const p2 = new THREE.Vector3(positions[j], positions[j+1], positions[j+2]);
                const distance = p1.distanceTo(p2);

                if (distance < connectionDistance) { 
                    linesPositions.push(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z);
                }
            }
        }

        linesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linesPositions, 3));
        const lines = new THREE.LineSegments(linesGeometry, linesMaterial);
        scene.add(lines);

        // Adjust camera distance based on sphere radius
        camera.position.set(0, 0, radius * 2.5);
        camera.lookAt(0, 0, 0);

        const animate = () => {
            requestAnimationFrame(animate);
            sphere.rotation.y += 0.0005;
            sphere.rotation.x += 0.0002;
            lines.rotation.y = sphere.rotation.y;
            lines.rotation.x = sphere.rotation.x;
            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            camera.aspect = mount.clientWidth / mount.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(mount.clientWidth, mount.clientHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (mount && renderer.domElement) {
                mount.removeChild(renderer.domElement);
            }
        };
    }, [dimensions]); // Re-run effect when dimensions change

    return (
        <div 
            ref={mountRef}
            className="absolute inset-0 z-0 -mt-[0.5in] md:-mt-[1in]"
        />
    );
};


// This is your Hero component, now using the 3D background.
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  return (

   <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      style={{
        backgroundImage: "url('/Premium_Module_01.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Custom dark gradient overlay for contrast */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{
        background: 'linear-gradient(120deg, rgba(0,0,0,0.82) 0%, rgba(16,134,244,0.18) 60%, rgba(0,0,0,0.92) 100%)',
        mixBlendMode: 'multiply',
      }} />
      {/* The 3D background is placed here */}
      <Hero3DBackground />

      {/* Content Container - z-10 ensures it's above the background */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          } mt-[0.5in] md:mt-[1in]`}
        >
          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tight font-sans leading-tight drop-shadow-xl mb-6">
            PROFESSIONAL STARLINK
            <br />
            INSTALLATION
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-white max-w-3xl mx-auto leading-8 font-normal font-sans drop-shadow-lg mb-10">
            Expert installation services across the DMV region, connecting your home or business with reliable high-speed internet.
          </p>

          {/* Call to Action Button */}
          <a
            href="#contact"
            className="inline-block bg-white text-black font-semibold rounded-md text-lg px-10 py-4 transition-all duration-300 hover:bg-neutral-200 hover:scale-105 shadow-2xl mb-8 font-sans"
          >
            Get Quote
          </a>
          
          {/* Service Area */}
          <div className="text-center mt-2">
            <p className="text-neutral-200 font-normal text-sm font-sans tracking-wide drop-shadow-md">
              WASHINGTON DC • MARYLAND • VIRGINIA
            </p>
          </div>
        </div>
      </div>

      {/* Fade to black at the bottom for a smooth transition to the next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-5 pointer-events-none" />
   </section>
  );
};

export default Hero;
