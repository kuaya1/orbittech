// Blog post data types
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  category: string;
  tags: string[];
  featuredImage?: string;
  readTime: number;
  seoTitle?: string;
  metaDescription?: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  count: number;
}

// Q1 2025 Blog Content Calendar
export const blogContentCalendar: BlogPost[] = [
  {
    id: 'ultimate-guide-starlink-installation-dmv',
    title: 'Ultimate Guide to Starlink Installation in the DMV',
    slug: 'ultimate-guide-starlink-installation-dmv',
    excerpt: 'Everything you need to know about professional Starlink installation in Virginia, Maryland, and Washington DC. From site surveys to ongoing support.',
    content: '', // Content would be filled in actual implementation
    author: 'The Orbit Tech Team',
    publishDate: '2025-01-07',
    category: 'Installation Guides',
    tags: ['starlink', 'installation', 'dmv', 'guide', 'professional'],
    readTime: 12,
    seoTitle: 'Complete Starlink Installation Guide for DMV | The Orbit Tech',
    metaDescription: 'Professional Starlink installation guide for Virginia, Maryland & DC. Expert tips, cost breakdown, and what to expect from certified installers.'
  },
  {
    id: 'professional-vs-diy-starlink-installation',
    title: 'Why Professional Installation Beats DIY Every Time',
    slug: 'professional-vs-diy-starlink-installation',
    excerpt: 'Discover why professional Starlink installation offers better performance, warranty coverage, and long-term value compared to DIY setups.',
    content: '',
    author: 'Mike Rodriguez, Lead Technician',
    publishDate: '2025-01-14',
    category: 'Installation Tips',
    tags: ['professional', 'diy', 'comparison', 'installation', 'benefits'],
    readTime: 8,
    seoTitle: 'Professional vs DIY Starlink Installation: Complete Comparison',
    metaDescription: 'Professional Starlink installation vs DIY: costs, benefits, and why certified installers deliver better results. Get the facts from DMV experts.'
  },
  {
    id: 'starlink-vs-comcast-speed-tests-fairfax',
    title: 'Starlink vs Comcast: Real Speed Tests from Fairfax County',
    slug: 'starlink-vs-comcast-speed-tests-fairfax',
    excerpt: 'Head-to-head speed test comparison between Starlink and Comcast in Fairfax County, with real customer data and performance analysis.',
    content: '',
    author: 'Sarah Chen, Network Specialist',
    publishDate: '2025-01-21',
    category: 'Performance Analysis',
    tags: ['starlink', 'comcast', 'speed-test', 'fairfax', 'comparison'],
    readTime: 10,
    seoTitle: 'Starlink vs Comcast Speed Tests Fairfax County | Real Data',
    metaDescription: 'Real speed test data comparing Starlink vs Comcast in Fairfax County. See actual performance metrics from 100+ installations.'
  },
  {
    id: 'optimize-starlink-maximum-speed',
    title: 'How to Optimize Your Starlink for Maximum Speed',
    slug: 'optimize-starlink-maximum-speed',
    excerpt: 'Expert tips and techniques to maximize your Starlink internet speeds, including placement optimization, network setup, and performance monitoring.',
    content: '',
    author: 'David Kim, Senior Technician',
    publishDate: '2025-01-28',
    category: 'Optimization',
    tags: ['starlink', 'optimization', 'speed', 'performance', 'tips'],
    readTime: 9,
    seoTitle: 'Maximize Starlink Speed: Expert Optimization Guide 2025',
    metaDescription: 'Professional tips to optimize Starlink performance. Learn dish placement, network setup, and troubleshooting from certified installers.'
  },
  {
    id: 'starlink-installation-loudoun-county',
    title: 'Starlink Installation Services in Loudoun County: Complete Guide',
    slug: 'starlink-installation-loudoun-county',
    excerpt: 'Comprehensive guide to professional Starlink installation in Loudoun County, including service areas, pricing, and local considerations.',
    content: '',
    author: 'The Orbit Tech Team',
    publishDate: '2025-02-04',
    category: 'Location Spotlight',
    tags: ['loudoun-county', 'starlink', 'installation', 'virginia', 'local'],
    readTime: 11,
    seoTitle: 'Professional Starlink Installation Loudoun County VA | The Orbit Tech',
    metaDescription: 'Expert Starlink installation in Loudoun County. Serving Ashburn, Leesburg, and all Loudoun communities with certified professional installation.'
  },
  {
    id: 'starlink-weather-performance-analysis',
    title: 'Understanding Starlink\'s Weather Performance in the Mid-Atlantic',
    slug: 'starlink-weather-performance-analysis',
    excerpt: 'Detailed analysis of how Starlink performs during various weather conditions common to Virginia, Maryland, and DC, with real-world data.',
    content: '',
    author: 'Jennifer Walsh, Technical Analyst',
    publishDate: '2025-02-11',
    category: 'Technical Analysis',
    tags: ['starlink', 'weather', 'performance', 'mid-atlantic', 'reliability'],
    readTime: 7,
    seoTitle: 'Starlink Weather Performance: Rain, Snow & Storm Impact Analysis',
    metaDescription: 'How does Starlink perform in bad weather? Real data from Mid-Atlantic installations showing rain, snow, and storm impact on connectivity.'
  },
  {
    id: 'hidden-costs-diy-satellite-installation',
    title: 'The Hidden Costs of DIY Satellite Installation',
    slug: 'hidden-costs-diy-satellite-installation',
    excerpt: 'Uncover the true costs of DIY Starlink installation, including tools, materials, potential mistakes, and long-term maintenance expenses.',
    content: '',
    author: 'Alex Thompson, Installation Manager',
    publishDate: '2025-02-18',
    category: 'Cost Analysis',
    tags: ['diy', 'costs', 'satellite', 'installation', 'hidden-fees'],
    readTime: 8,
    seoTitle: 'Hidden Costs of DIY Starlink Installation | True Cost Breakdown',
    metaDescription: 'DIY Starlink installation hidden costs revealed. Tools, materials, mistakes, and long-term expenses vs professional installation value.'
  },
  {
    id: 'mesh-wifi-starlink-perfect-combination',
    title: 'Mesh WiFi + Starlink: The Perfect Combination for Whole-Home Coverage',
    slug: 'mesh-wifi-starlink-perfect-combination',
    excerpt: 'Learn how combining Starlink with a professional mesh WiFi system delivers seamless coverage throughout your home, especially in large or rural properties.',
    content: '',
    author: 'Chris Martinez, Network Engineer',
    publishDate: '2025-02-25',
    category: 'Network Setup',
    tags: ['mesh-wifi', 'starlink', 'coverage', 'networking', 'home-setup'],
    readTime: 10,
    seoTitle: 'Starlink + Mesh WiFi Setup: Complete Home Network Guide',
    metaDescription: 'Optimize Starlink with mesh WiFi for whole-home coverage. Professional setup guide for large homes and rural properties in the DMV.'
  }
];

export const blogCategories: BlogCategory[] = [
  {
    id: 'installation-guides',
    name: 'Installation Guides',
    slug: 'installation-guides',
    description: 'Comprehensive guides for Starlink installation best practices',
    count: 2
  },
  {
    id: 'installation-tips',
    name: 'Installation Tips',
    slug: 'installation-tips',
    description: 'Expert tips and advice from certified installers',
    count: 1
  },
  {
    id: 'performance-analysis',
    name: 'Performance Analysis',
    slug: 'performance-analysis',
    description: 'Speed tests, comparisons, and performance data',
    count: 1
  },
  {
    id: 'optimization',
    name: 'Optimization',
    slug: 'optimization',
    description: 'Tips to maximize your Starlink performance',
    count: 1
  },
  {
    id: 'location-spotlight',
    name: 'Location Spotlight',
    slug: 'location-spotlight',
    description: 'Area-specific installation guides and considerations',
    count: 1
  },
  {
    id: 'technical-analysis',
    name: 'Technical Analysis',
    slug: 'technical-analysis',
    description: 'In-depth technical performance and reliability studies',
    count: 1
  },
  {
    id: 'cost-analysis',
    name: 'Cost Analysis',
    slug: 'cost-analysis',
    description: 'Cost breakdowns and value comparisons',
    count: 1
  },
  {
    id: 'network-setup',
    name: 'Network Setup',
    slug: 'network-setup',
    description: 'Advanced networking configurations and optimizations',
    count: 1
  }
];

// Helper functions
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogContentCalendar.find(post => post.slug === slug);
};

export const getBlogPostsByCategory = (categorySlug: string): BlogPost[] => {
  return blogContentCalendar.filter(post => 
    post.category.toLowerCase().replace(/\s+/g, '-') === categorySlug
  );
};

export const getFeaturedBlogPosts = (limit: number = 3): BlogPost[] => {
  return blogContentCalendar
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, limit);
};

export const getRecentBlogPosts = (limit: number = 5): BlogPost[] => {
  return blogContentCalendar
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, limit);
};
