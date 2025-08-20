import { build } from 'vite';
import { generateSitemap } from '../src/utils/sitemap';

async function buildApp() {
  try {
    // Run the Vite build
    await build();

    // Generate sitemap
    generateSitemap();

    console.log('✅ Build completed successfully');
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

buildApp();
