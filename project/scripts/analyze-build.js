#!/usr/bin/env node

/**
 * Build Analysis Script for The Orbit Tech
 * Analyzes bundle sizes and provides optimization recommendations
 */

import { execSync } from 'child_process';
import { readFileSync, existsSync } from 'fs';
import path from 'path';

const BUILD_DIR = 'dist';
const ASSETS_DIR = path.join(BUILD_DIR, 'assets');

function analyzeBundle() {
  console.log('🔍 Analyzing build output...\n');
  
  if (!existsSync(BUILD_DIR)) {
    console.error('❌ Build directory not found. Run "npm run build" first.');
    process.exit(1);
  }
  
  try {
    // Run build with stats
    const buildOutput = execSync('npm run build', { encoding: 'utf8' });
    console.log(buildOutput);
    
    // Parse build sizes
    const sizeRegex = /dist\/assets\/(\w+)\.[\w\d]+\.(js|css)\s+([\d.]+)\s+kB.*?gzip:\s+([\d.]+)\s+kB/g;
    let match;
    const bundles = [];
    
    while ((match = sizeRegex.exec(buildOutput)) !== null) {
      bundles.push({
        name: match[1],
        type: match[2],
        size: parseFloat(match[3]),
        gzipSize: parseFloat(match[4])
      });
    }
    
    console.log('\n📊 Bundle Analysis:');
    console.log('===================');
    
    bundles.forEach(bundle => {
      const compressionRatio = ((bundle.size - bundle.gzipSize) / bundle.size * 100).toFixed(1);
      console.log(`${bundle.name}.${bundle.type}: ${bundle.size} kB → ${bundle.gzipSize} kB (${compressionRatio}% compression)`);
    });
    
    // Check for optimization opportunities
    console.log('\n💡 Optimization Recommendations:');
    console.log('==================================');
    
    const largeBundle = bundles.find(b => b.gzipSize > 100);
    if (largeBundle) {
      console.log(`⚠️  Large bundle detected: ${largeBundle.name} (${largeBundle.gzipSize} kB gzipped)`);
      console.log('   Consider code splitting or lazy loading');
    }
    
    const totalSize = bundles.reduce((sum, b) => sum + b.gzipSize, 0);
    console.log(`\n📦 Total bundle size: ${totalSize.toFixed(2)} kB gzipped`);
    
    if (totalSize > 200) {
      console.log('⚠️  Bundle size is large. Consider:');
      console.log('   - Dynamic imports for route components');
      console.log('   - Tree shaking unused dependencies');
      console.log('   - Optimizing images and assets');
    } else {
      console.log('✅ Bundle size is optimized!');
    }
    
    // Check for PWA files
    if (existsSync(path.join(BUILD_DIR, 'sw.js'))) {
      console.log('✅ Service Worker generated');
    }
    
    if (existsSync(path.join(BUILD_DIR, 'sitemap.xml'))) {
      console.log('✅ Sitemap generated');
    }
    
    if (existsSync(path.join(BUILD_DIR, 'manifest.webmanifest'))) {
      console.log('✅ PWA Manifest generated');
    }
    
  } catch (error) {
    console.error('❌ Build analysis failed:', error.message);
    process.exit(1);
  }
}

analyzeBundle();
