// Core TypeScript interfaces for The Orbit Tech application

// Location Data Structure
export interface Location {
  id: string;
  name: string;
  county: string;
  state: 'VA' | 'MD' | 'DC';
  population: number;
  serviceAreas: string[];
  testimonials: Testimonial[];
  faqs: FAQ[];
  schema: LocalBusinessSchema;
  seoData?: LocationSEO;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  drivingTimes?: DrivingTime[];
  coverageQuality?: 'excellent' | 'good' | 'fair';
}

// Testimonial Structure
export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  content: string;
  speedBefore?: number;
  speedAfter?: number;
  verified: boolean;
  installationType?: 'residential' | 'business' | 'rural';
  photoUrl?: string;
  videoUrl?: string;
}

// FAQ Structure
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'installation' | 'pricing' | 'technical' | 'service';
  priority?: number;
  locationSpecific?: boolean;
}

// Pricing Structure
export interface PricingPackage {
  id: string;
  name: string;
  price: number;
  monthlyPrice?: number;
  features: string[];
  highlighted: boolean;
  ctaText: string;
  description: string;
  installationTime?: string;
  warranty?: string;
  savings?: number;
  mostPopular?: boolean;
}

// Local Business Schema
export interface LocalBusinessSchema {
  "@context": "https://schema.org";
  "@type": "LocalBusiness";
  name: string;
  description: string;
  url: string;
  telephone: string;
  email?: string;
  address: Address;
  geo: GeoCoordinates;
  openingHours?: string[];
  priceRange: string;
  aggregateRating?: AggregateRating;
  areaServed: string[];
  serviceType: string[];
}

// SEO Metadata Props
export interface SEOMetadataProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  keywords?: string[];
  noindex?: boolean;
}

// Schema Injector Props
export interface SchemaInjectorProps {
  type: 'LocalBusiness' | 'Service' | 'FAQPage' | 'Article';
  data: Record<string, any>;
}

// Lead Form Fields
export interface LeadFormFields {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  serviceType: 'installation' | 'installation-plus-wifi';
  preferredDate: string;
  message?: string;
}

// Supporting Interfaces
export interface LocationSEO {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  canonicalUrl: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

export interface DrivingTime {
  from: string;
  to: string;
  time: string;
  distance: string;
}

export interface Address {
  "@type": string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

export interface GeoCoordinates {
  "@type": string;
  latitude: number;
  longitude: number;
}

export interface AggregateRating {
  "@type": string;
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
}

// Blog Content Interfaces
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: Author;
  publishDate: string;
  updatedDate?: string;
  category: BlogCategory;
  tags: string[];
  featuredImage?: Image;
  readTime: number;
  seo: BlogSEO;
  status: 'draft' | 'published' | 'scheduled';
  viewCount?: number;
}

export interface Author {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  role: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
  };
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
}

export interface Image {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export interface BlogSEO {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  canonicalUrl: string;
  ogImage?: string;
  structuredData?: any;
}

// Lead Generation Interfaces
export interface Lead {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  serviceType: 'residential' | 'business';
  urgency: 'immediate' | 'within-week' | 'within-month' | 'planning';
  currentProvider?: string;
  currentSpeed?: number;
  propertyType: 'house' | 'apartment' | 'condo' | 'business' | 'farm';
  installationChallenges?: string[];
  source: LeadSource;
  status: LeadStatus;
  createdAt: string;
  updatedAt: string;
  notes?: string;
}

export interface LeadSource {
  medium: 'organic' | 'paid' | 'social' | 'referral' | 'direct';
  campaign?: string;
  keyword?: string;
  referrer?: string;
  page: string;
}

export interface LeadStatus {
  stage: 'new' | 'contacted' | 'qualified' | 'quoted' | 'scheduled' | 'installed' | 'closed';
  lastContact?: string;
  nextAction?: string;
  assignedTo?: string;
}

// API Response Interfaces
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  timestamp: string;
}

export interface AvailabilityCheckResponse {
  available: boolean;
  estimatedWaitTime?: string;
  cellCapacity: 'high' | 'medium' | 'low';
  message: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

export interface SpeedTestResult {
  downloadSpeed: number;
  uploadSpeed: number;
  ping: number;
  jitter: number;
  provider: string;
  location: string;
  timestamp: string;
  deviceType: 'mobile' | 'desktop';
}

// Analytics Interfaces
export interface AnalyticsEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  userId?: string;
  sessionId?: string;
  timestamp: string;
  page: string;
  userAgent: string;
}

export interface ConversionEvent extends AnalyticsEvent {
  leadId?: string;
  conversionType: 'form_submit' | 'phone_call' | 'chat_start' | 'quote_request';
  conversionValue?: number;
}
