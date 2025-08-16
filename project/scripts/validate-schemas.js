#!/usr/bin/env node

/**
 * Schema Validation Script for The Orbit Tech
 * Validates JSON-LD structured data for Google Search Console compliance
 * 
 * Usage: node scripts/validate-schemas.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class SchemaValidator {
  constructor() {
    this.errors = [];
    this.warnings = [];
    this.duplicateChecks = {
      faqPages: [],
      businesses: [],
      aggregateRatings: []
    };
  }

  validateBuildOutput() {
    console.log('🔍 Validating Schema Implementation...\n');
    
    const distPath = path.join(__dirname, '..', 'dist');
    if (!fs.existsSync(distPath)) {
      console.error('❌ Build output not found. Run "npm run build" first.');
      process.exit(1);
    }

    // Check main index.html
    this.validateFile(path.join(distPath, 'index.html'), 'Homepage');
    
    // Check if other HTML files exist and validate them
    const htmlFiles = fs.readdirSync(distPath).filter(f => f.endsWith('.html'));
    htmlFiles.forEach(file => {
      if (file !== 'index.html') {
        this.validateFile(path.join(distPath, file), file);
      }
    });

    this.generateReport();
  }

  validateFile(filePath, pageName) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const schemas = this.extractSchemas(content);
      
      console.log(`📄 Validating ${pageName}:`);
      console.log(`   Found ${schemas.length} schema objects`);
      
      schemas.forEach((schema, index) => {
        this.validateIndividualSchema(schema, pageName, index);
      });
      
      this.checkForDuplicates(schemas, pageName);
      
    } catch (error) {
      this.errors.push(`Failed to read ${pageName}: ${error.message}`);
    }
  }

  extractSchemas(htmlContent) {
    const schemas = [];
    const scriptRegex = /<script type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs;
    let match;

    while ((match = scriptRegex.exec(htmlContent)) !== null) {
      try {
        const schemaData = JSON.parse(match[1]);
        schemas.push(schemaData);
      } catch (error) {
        this.errors.push(`Invalid JSON-LD syntax: ${error.message}`);
      }
    }

    return schemas;
  }

  validateIndividualSchema(schema, pageName, index) {
    // Check required fields
    if (!schema['@context']) {
      this.errors.push(`${pageName} Schema ${index}: Missing @context`);
    } else if (schema['@context'] !== 'https://schema.org') {
      this.warnings.push(`${pageName} Schema ${index}: Non-standard @context`);
    }

    if (!schema['@type']) {
      this.errors.push(`${pageName} Schema ${index}: Missing @type`);
    }

    // Validate specific schema types
    switch (schema['@type']) {
      case 'FAQPage':
        this.validateFAQSchema(schema, pageName, index);
        break;
      case 'LocalBusiness':
      case 'HomeAndConstructionBusiness':
        this.validateBusinessSchema(schema, pageName, index);
        break;
      case 'Service':
        this.validateServiceSchema(schema, pageName, index);
        break;
      case 'Article':
        this.validateArticleSchema(schema, pageName, index);
        break;
    }
  }

  validateFAQSchema(schema, pageName, index) {
    this.duplicateChecks.faqPages.push({ schema, pageName, index });

    if (!schema.mainEntity || !Array.isArray(schema.mainEntity)) {
      this.errors.push(`${pageName} FAQ Schema ${index}: Missing or invalid mainEntity array`);
      return;
    }

    schema.mainEntity.forEach((faq, faqIndex) => {
      if (!faq.name) {
        this.errors.push(`${pageName} FAQ ${faqIndex}: Missing question (name)`);
      }
      if (!faq.acceptedAnswer || !faq.acceptedAnswer.text) {
        this.errors.push(`${pageName} FAQ ${faqIndex}: Missing answer text`);
      }
      if (!faq['@id']) {
        this.warnings.push(`${pageName} FAQ ${faqIndex}: Missing unique @id`);
      }
    });

    console.log(`   ✅ FAQ Schema: ${schema.mainEntity.length} questions`);
  }

  validateBusinessSchema(schema, pageName, index) {
    this.duplicateChecks.businesses.push({ schema, pageName, index });

    const required = ['name', 'url', 'telephone'];
    required.forEach(field => {
      if (!schema[field]) {
        this.errors.push(`${pageName} Business Schema ${index}: Missing ${field}`);
      }
    });

    if (schema.aggregateRating) {
      this.duplicateChecks.aggregateRatings.push({ schema, pageName, index });
      this.validateAggregateRating(schema.aggregateRating, pageName, index);
    }

    if (schema.image) {
      this.validateImageObject(schema.image, pageName, index);
    }

    console.log(`   ✅ Business Schema: ${schema.name}`);
  }

  validateServiceSchema(schema, pageName, index) {
    if (!schema.name || !schema.provider) {
      this.errors.push(`${pageName} Service Schema ${index}: Missing name or provider`);
    }

    if (schema.image) {
      this.validateImageObject(schema.image, pageName, index);
    }

    console.log(`   ✅ Service Schema: ${schema.name}`);
  }

  validateArticleSchema(schema, pageName, index) {
    const required = ['headline', 'author', 'publisher', 'datePublished'];
    required.forEach(field => {
      if (!schema[field]) {
        this.errors.push(`${pageName} Article Schema ${index}: Missing ${field}`);
      }
    });

    if (schema.image) {
      this.validateImageObject(schema.image, pageName, index);
    }

    console.log(`   ✅ Article Schema: ${schema.headline}`);
  }

  validateAggregateRating(rating, pageName, index) {
    if (!rating.ratingValue || !rating.reviewCount) {
      this.errors.push(`${pageName} AggregateRating ${index}: Missing ratingValue or reviewCount`);
    }

    const ratingValue = parseFloat(rating.ratingValue);
    if (ratingValue < 1 || ratingValue > 5) {
      this.warnings.push(`${pageName} AggregateRating ${index}: Rating value outside 1-5 range`);
    }
  }

  validateImageObject(image, pageName, index) {
    if (typeof image === 'string') {
      this.warnings.push(`${pageName} Schema ${index}: Image should be ImageObject, not string`);
      return;
    }

    if (Array.isArray(image)) {
      image.forEach((img, imgIndex) => {
        this.validateSingleImageObject(img, pageName, `${index}-${imgIndex}`);
      });
    } else {
      this.validateSingleImageObject(image, pageName, index);
    }
  }

  validateSingleImageObject(image, pageName, index) {
    if (!image.url) {
      this.errors.push(`${pageName} ImageObject ${index}: Missing URL`);
    }

    // Check for enhanced image metadata
    const enhancedFields = ['license', 'copyrightHolder', 'acquireLicensePage'];
    enhancedFields.forEach(field => {
      if (!image[field]) {
        this.warnings.push(`${pageName} ImageObject ${index}: Missing ${field} for enhanced SEO`);
      }
    });

    if (image.width && image.height) {
      console.log(`   ✅ Enhanced ImageObject: ${image.width}x${image.height}`);
    }
  }

  checkForDuplicates(schemas, pageName) {
    const types = schemas.map(s => s['@type']);
    const duplicateTypes = types.filter((type, index) => types.indexOf(type) !== index);
    
    if (duplicateTypes.length > 0) {
      this.errors.push(`${pageName}: Duplicate schema types found: ${duplicateTypes.join(', ')}`);
    }
  }

  generateReport() {
    console.log('\n📊 Schema Validation Report');
    console.log('=' .repeat(50));

    // Check for global duplicates
    this.checkGlobalDuplicates();

    console.log(`\n📈 Summary:`);
    console.log(`   Errors: ${this.errors.length}`);
    console.log(`   Warnings: ${this.warnings.length}`);

    if (this.errors.length > 0) {
      console.log('\n❌ Errors:');
      this.errors.forEach(error => console.log(`   • ${error}`));
    }

    if (this.warnings.length > 0) {
      console.log('\n⚠️  Warnings:');
      this.warnings.forEach(warning => console.log(`   • ${warning}`));
    }

    if (this.errors.length === 0) {
      console.log('\n🎉 All schemas pass validation!');
      console.log('✅ Ready for Google Search Console submission');
    } else {
      console.log('\n🚨 Please fix errors before deploying');
      process.exit(1);
    }
  }

  checkGlobalDuplicates() {
    // Check for multiple FAQPages across site
    if (this.duplicateChecks.faqPages.length > 1) {
      this.errors.push(`Multiple FAQPage schemas found across site (${this.duplicateChecks.faqPages.length} total)`);
    }

    // Check for multiple LocalBusiness schemas
    if (this.duplicateChecks.businesses.length > 1) {
      this.errors.push(`Multiple LocalBusiness schemas found (${this.duplicateChecks.businesses.length} total)`);
    }

    // Check for multiple aggregate ratings
    if (this.duplicateChecks.aggregateRatings.length > 1) {
      this.errors.push(`Multiple aggregateRating objects found (${this.duplicateChecks.aggregateRatings.length} total)`);
    }

    console.log(`\n🔍 Global Duplicate Check:`);
    console.log(`   FAQPage schemas: ${this.duplicateChecks.faqPages.length}`);
    console.log(`   Business schemas: ${this.duplicateChecks.businesses.length}`);
    console.log(`   AggregateRating objects: ${this.duplicateChecks.aggregateRatings.length}`);
  }
}

// Run validation
const validator = new SchemaValidator();
validator.validateBuildOutput();
