import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';

// This is the 3D background component from the previous step.
// It creates the animated globe.
const Hero3DBackground = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

        renderer.setSize(mount.clientWidth, mount.clientHeight);
        mount.appendChild(renderer.domElement);

        // --- Custom Hemisphere Geometry ---
        const points = [];
        const radius = 12;
        const numPoints = 600;

        for (let i = 0; i < numPoints; i++) {
            const u = Math.random();
            const v = Math.random();
            const theta = 2 * Math.PI * u;
            const phi = Math.acos(2 * v - 1);
            const x = radius * Math.sin(phi) * Math.cos(theta);
            const y = radius * Math.sin(phi) * Math.sin(theta);
            const z = radius * Math.cos(phi);

            if (z >= 0) { // Only add points on the upper hemisphere
                points.push(x, y, z);
            }
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
        
        const material = new THREE.PointsMaterial({ color: 0x0077ff, size: 0.06 });
        const sphere = new THREE.Points(geometry, material);
        scene.add(sphere);

        // --- Lines connecting the points ---
        const linesGeometry = new THREE.BufferGeometry();
        const linesMaterial = new THREE.LineBasicMaterial({ color: 0x0077ff, transparent: true, opacity: 0.2 });
        
        const linesPositions = [];
        const positions = geometry.attributes.position.array;

        for (let i = 0; i < positions.length; i += 3) {
            for (let j = i + 3; j < positions.length; j += 3) {
                const p1 = new THREE.Vector3(positions[i], positions[i+1], positions[i+2]);
                const p2 = new THREE.Vector3(positions[j], positions[j+1], positions[j+2]);
                const distance = p1.distanceTo(p2);

                if (distance < 3.0) {
                    linesPositions.push(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z);
                }
            }
        }

        linesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linesPositions, 3));
        const lines = new THREE.LineSegments(linesGeometry, linesMaterial);
        scene.add(lines);

        camera.position.set(0, -4, 20);
        camera.lookAt(0, 0, 0);

        const animate = () => {
            requestAnimationFrame(animate);
            sphere.rotation.y += 0.0005;
            lines.rotation.y = sphere.rotation.y;
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
    }, []);

    return (
        <div 
            ref={mountRef} 
            className="absolute inset-0 z-0"
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
   <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* The 3D background is placed here */}
      <Hero3DBackground />

      {/* Content Container - z-10 ensures it's above the background */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-tight font-sans leading-tight drop-shadow-xl mb-6">
            PROFESSIONAL STARLINK
            <br />
            INSTALLATION
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-neutral-300 max-w-3xl mx-auto leading-8 font-normal font-sans drop-shadow-lg mb-10">
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
