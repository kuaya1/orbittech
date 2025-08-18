#!/usr/bin/env node

/**
 * Advanced Schema Performance Monitoring Script
 * Tracks enhanced schema implementation and performance metrics
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class AdvancedSchemaMonitor {
  constructor() {
    this.schemaTypes = [
      'ServiceAreaSchema',
      'EnhancedLocationServiceSchema', 
      'PriceSpecificationSchema',
      'OfferSchema',
      'HowToSchema',
      'VideoSchema',
      'CourseSchema',
      'EventSchema',
      'BlogArticleSchema'
    ];
    
    this.results = {
      implementation: {},
      coverage: {},
      validation: {},
      performance: {}
    };
  }

  /**
   * Scan for advanced schema implementations
   */
  scanSchemaImplementation() {
    console.log('🔍 Scanning for Advanced Schema Implementation...\n');
    
    const srcDir = path.join(path.dirname(__dirname), 'src');
    
    this.schemaTypes.forEach(schemaType => {
      this.results.implementation[schemaType] = {
        count: 0,
        files: [],
        locations: []
      };
    });

    this._scanDirectory(srcDir);
    this._reportImplementation();
  }

  /**
   * Recursively scan directory for schema usage
   */
  _scanDirectory(dir) {
    if (!fs.existsSync(dir)) return;

    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        this._scanDirectory(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        this._scanFile(fullPath);
      }
    });
  }

  /**
   * Scan individual file for schema implementations
   */
  _scanFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      this.schemaTypes.forEach(schemaType => {
        const regex = new RegExp(`<${schemaType}[\\s\\S]*?/>`, 'g');
        const matches = content.match(regex);
        
        if (matches) {
          this.results.implementation[schemaType].count += matches.length;
          this.results.implementation[schemaType].files.push(filePath);
          
          // Extract location context if available
          const locationMatch = filePath.match(/\/([^\/]+)Page\.tsx$/);
          if (locationMatch) {
            this.results.implementation[schemaType].locations.push(locationMatch[1]);
          }
        }
      });
    } catch (error) {
      console.error(`Error scanning file ${filePath}:`, error.message);
    }
  }

  /**
   * Report implementation status
   */
  _reportImplementation() {
    console.log('📊 Advanced Schema Implementation Report:');
    console.log('==========================================\n');
    
    let totalImplementations = 0;
    
    this.schemaTypes.forEach(schemaType => {
      const data = this.results.implementation[schemaType];
      const status = data.count > 0 ? '✅' : '❌';
      
      console.log(`${status} ${schemaType}:`);
      console.log(`   Implementations: ${data.count}`);
      
        if (data.files.length > 0) {
          console.log(`   Files: ${data.files.length}`);
          data.files.forEach(file => {
            const relativePath = path.relative(path.dirname(__dirname), file);
            console.log(`     - ${relativePath}`);
          });
        }      if (data.locations.length > 0) {
        console.log(`   Locations: ${[...new Set(data.locations)].join(', ')}`);
      }
      
      console.log('');
      totalImplementations += data.count;
    });
    
    console.log(`🎯 Total Advanced Schema Implementations: ${totalImplementations}\n`);
  }

  /**
   * Validate advanced schema coverage
   */
  validateSchemaCoverage() {
    console.log('🎯 Schema Coverage Analysis:');
    console.log('============================\n');
    
    const coverage = {
      'Location Pages': {
        expected: ['ServiceAreaSchema', 'EnhancedLocationServiceSchema', 'PriceSpecificationSchema'],
        found: []
      },
      'Service Pages': {
        expected: ['ServiceAreaSchema', 'PriceSpecificationSchema', 'OfferSchema', 'HowToSchema'],
        found: []
      },
      'Educational Content': {
        expected: ['HowToSchema', 'VideoSchema', 'CourseSchema'],
        found: []
      },
      'Business Solutions': {
        expected: ['EventSchema', 'OfferSchema', 'PriceSpecificationSchema'],
        found: []
      },
      'Blog Content': {
        expected: ['BlogArticleSchema'],
        found: []
      }
    };
    
    // Calculate coverage for each category
    Object.keys(coverage).forEach(category => {
      const expected = coverage[category].expected;
      const found = expected.filter(schema => this.results.implementation[schema].count > 0);
      
      coverage[category].found = found;
      const percentage = Math.round((found.length / expected.length) * 100);
      
      console.log(`📍 ${category}:`);
      console.log(`   Coverage: ${percentage}% (${found.length}/${expected.length})`);
      
      expected.forEach(schema => {
        const status = found.includes(schema) ? '✅' : '❌';
        const count = this.results.implementation[schema].count;
        console.log(`   ${status} ${schema} (${count} implementations)`);
      });
      
      console.log('');
    });
  }

  /**
   * Generate performance recommendations
   */
  generateRecommendations() {
    console.log('💡 Advanced Schema Performance Recommendations:');
    console.log('===============================================\n');
    
    const recommendations = [];
    
    // Check for missing critical schemas
    const criticalSchemas = [
      'ServiceAreaSchema',
      'EnhancedLocationServiceSchema', 
      'PriceSpecificationSchema'
    ];
    
    criticalSchemas.forEach(schema => {
      if (this.results.implementation[schema].count === 0) {
        recommendations.push({
          priority: 'HIGH',
          type: 'Missing Critical Schema',
          schema: schema,
          action: `Implement ${schema} on location pages for enhanced local SEO`,
          impact: 'Significant improvement in local search rankings'
        });
      }
    });
    
    // Check for educational content opportunities
    if (this.results.implementation['HowToSchema'].count === 0) {
      recommendations.push({
        priority: 'MEDIUM',
        type: 'Content Authority',
        schema: 'HowToSchema',
        action: 'Create installation guides with HowTo schemas',
        impact: 'Featured snippets and educational content authority'
      });
    }
    
    // Check for business schema opportunities
    if (this.results.implementation['EventSchema'].count === 0) {
      recommendations.push({
        priority: 'MEDIUM',
        type: 'Business Development',
        schema: 'EventSchema',
        action: 'Add consultation event schemas for lead generation',
        impact: 'Enhanced business consultation bookings'
      });
    }
    
    // Output recommendations
    if (recommendations.length === 0) {
      console.log('🎉 Excellent! All critical advanced schemas are implemented.\n');
      console.log('🚀 Next Steps for Optimization:');
      console.log('   - Monitor Google Search Console for rich results appearance');
      console.log('   - Track local pack ranking improvements');
      console.log('   - Measure conversion rate improvements from enhanced SERP display');
      console.log('   - Expand to additional counties with location-specific schemas\n');
    } else {
      recommendations.forEach((rec, index) => {
        console.log(`${index + 1}. [${rec.priority}] ${rec.type}`);
        console.log(`   Schema: ${rec.schema}`);
        console.log(`   Action: ${rec.action}`);
        console.log(`   Impact: ${rec.impact}`);
        console.log('');
      });
    }
  }

  /**
   * Performance monitoring dashboard
   */
  generatePerformanceDashboard() {
    console.log('📈 Schema Performance Monitoring Dashboard:');
    console.log('==========================================\n');
    
    const dashboard = {
      'Schema Health': {
        'Total Advanced Schemas': Object.values(this.results.implementation)
          .reduce((sum, schema) => sum + schema.count, 0),
        'Schema Types Implemented': this.schemaTypes
          .filter(type => this.results.implementation[type].count > 0).length,
        'Coverage Percentage': Math.round(
          (this.schemaTypes.filter(type => this.results.implementation[type].count > 0).length / 
           this.schemaTypes.length) * 100
        )
      },
      'Location Coverage': {
        'Pages with Advanced Schemas': [
          ...new Set(
            Object.values(this.results.implementation)
              .flatMap(schema => schema.locations)
          )
        ].length,
        'Service Area Schemas': this.results.implementation['ServiceAreaSchema'].count,
        'Location Service Schemas': this.results.implementation['EnhancedLocationServiceSchema'].count
      },
      'Business Impact Schemas': {
        'Pricing Schemas': this.results.implementation['PriceSpecificationSchema'].count,
        'Offer Schemas': this.results.implementation['OfferSchema'].count,
        'Event Schemas': this.results.implementation['EventSchema'].count
      },
      'Content Authority': {
        'HowTo Guides': this.results.implementation['HowToSchema'].count,
        'Video Schemas': this.results.implementation['VideoSchema'].count,
        'Course Content': this.results.implementation['CourseSchema'].count,
        'Blog Articles': this.results.implementation['BlogArticleSchema'].count
      }
    };
    
    Object.entries(dashboard).forEach(([category, metrics]) => {
      console.log(`📊 ${category}:`);
      Object.entries(metrics).forEach(([metric, value]) => {
        console.log(`   ${metric}: ${value}`);
      });
      console.log('');
    });
  }

  /**
   * Run complete analysis
   */
  async run() {
    console.log('🚀 Advanced Schema Performance Monitor\n');
    console.log('=====================================\n');
    
    try {
      this.scanSchemaImplementation();
      this.validateSchemaCoverage();
      this.generatePerformanceDashboard();
      this.generateRecommendations();
      
      console.log('✅ Advanced Schema Analysis Complete!');
      console.log('\n📋 Next Steps:');
      console.log('1. Review implementation recommendations above');
      console.log('2. Monitor Google Search Console for rich results');
      console.log('3. Track local search ranking improvements');
      console.log('4. Measure business impact from enhanced schemas');
      
    } catch (error) {
      console.error('❌ Error during schema analysis:', error.message);
      process.exit(1);
    }
  }
}

// Run the monitor
const monitor = new AdvancedSchemaMonitor();
monitor.run();

export default AdvancedSchemaMonitor;
