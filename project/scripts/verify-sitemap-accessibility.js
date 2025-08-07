#!/usr/bin/env node
/**
 * Sitemap Accessibility Verification Script
 * Checks if sitemaps are accessible from various domain variations
 */

import https from 'https';
import { URL } from 'url';

const TIMEOUT = 10000; // 10 seconds

// Domain variations to test
const domains = [
  'https://www.theorbittech.com',
  'https://theorbittech.com',
];

// Sitemap paths to test
const sitemapPaths = [
  '/sitemap-index.xml',
  '/sitemap-pages.xml', 
  '/sitemap-locations.xml',
  '/robots.txt'
];

async function checkUrl(url) {
  return new Promise((resolve) => {
    const urlObj = new URL(url);
    
    const options = {
      hostname: urlObj.hostname,
      port: urlObj.port || 443,
      path: urlObj.pathname,
      method: 'GET',
      timeout: TIMEOUT,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        resolve({
          url,
          status: res.statusCode,
          accessible: res.statusCode >= 200 && res.statusCode < 300,
          contentType: res.headers['content-type'],
          size: data.length,
          hasXML: data.includes('<?xml') && data.includes('<sitemapindex'),
          redirectLocation: res.headers.location
        });
      });
    });

    req.on('error', (error) => {
      resolve({
        url,
        status: 'ERROR',
        accessible: false,
        error: error.message
      });
    });

    req.on('timeout', () => {
      resolve({
        url,
        status: 'TIMEOUT',
        accessible: false,
        error: 'Request timeout'
      });
    });

    req.end();
  });
}

async function verifyAllSitemaps() {
  console.log('🔍 Verifying sitemap accessibility for Google Search Console...\n');
  
  for (const domain of domains) {
    console.log(`📍 Testing domain: ${domain}`);
    console.log('─'.repeat(60));
    
    for (const path of sitemapPaths) {
      const url = domain + path;
      const result = await checkUrl(url);
      
      console.log(`   ${path}`);
      console.log(`   ├─ Status: ${result.status}`);
      console.log(`   ├─ Accessible: ${result.accessible ? '✅ YES' : '❌ NO'}`);
      
      if (result.contentType) {
        console.log(`   ├─ Content-Type: ${result.contentType}`);
      }
      
      if (result.size) {
        console.log(`   ├─ Size: ${result.size} bytes`);
      }
      
      if (result.hasXML) {
        console.log(`   ├─ Valid XML: ✅ YES`);
      }
      
      if (result.redirectLocation) {
        console.log(`   ├─ Redirects to: ${result.redirectLocation}`);
      }
      
      if (result.error) {
        console.log(`   ├─ Error: ${result.error}`);
      }
      
      console.log(`   └─ URL: ${url}`);
      console.log('');
    }
    console.log('\n');
  }
  
  console.log('🎯 GOOGLE SEARCH CONSOLE SUBMISSION GUIDE:');
  console.log('─'.repeat(60));
  console.log('1. Use the domain that shows ✅ accessible above');
  console.log('2. Submit the sitemap-index.xml URL from that domain');
  console.log('3. Ensure your GSC property matches the accessible domain exactly');
  console.log('4. Wait 24-48 hours for Google to process the sitemap\n');
}

// Run verification
verifyAllSitemaps().catch(console.error);
