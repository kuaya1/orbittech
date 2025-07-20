import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { createGlobe } from '../utils/globe';

const Globe = () => {
  const containerRef = useRef(null);
  const globeRef = useRef(null);

  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  
  // Sample arcs data to show connections across the globe
  const sampleArcs = [
    {
      startLat: 38.9072,
      startLng: -77.0369, // Washington DC
      endLat: 39.2904,
      endLng: -76.6122, // Baltimore
      arcAlt: 0.1,
      color: colors[0],
    },
    {
      startLat: 39.2904,
      startLng: -76.6122, // Baltimore
      endLat: 38.3082,
      endLng: -77.4602, // Virginia
      arcAlt: 0.15,
      color: colors[1],
    },
    {
      startLat: 38.3082,
      startLng: -77.4602, // Virginia
      endLat: 40.7128,
      endLng: -74.0060, // New York
      arcAlt: 0.2,
      color: colors[2],
    },
    // Add more arcs covering the DMV area and beyond
    {
      startLat: 38.9072,
      startLng: -77.0369, // DC
      endLat: 37.7749,
      endLng: -122.4194, // San Francisco
      arcAlt: 0.5,
      color: colors[0],
    },
    {
      startLat: 38.9072,
      startLng: -77.0369, // DC
      endLat: 52.5200,
      endLng: 13.4050, // Berlin
      arcAlt: 0.6,
      color: colors[1],
    },
    {
      startLat: 39.2904,
      startLng: -76.6122, // Baltimore
      endLat: 35.6762,
      endLng: 139.6503, // Tokyo
      arcAlt: 0.7,
      color: colors[2],
    },
  ];

  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 38.9072, lng: -77.0369 }, // Center on DC
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 200;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Create globe
    const globe = createGlobe(scene, globeConfig, sampleArcs);
    globeRef.current = globe;

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enablePan = false;
    controls.minDistance = 100;
    controls.maxDistance = 300;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      globe.rotation.y += 0.001;
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className="w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
};

export default Globe;