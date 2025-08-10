import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { BlogPost } from '../types/blog';
import SEOMetadata from '@/components/SEOMetadata';

// ==========================================
// Type Definitions
// ==========================================

interface BlogPageProps {
  posts: BlogPost[];
}

interface BlogPostCardProps {
  post: BlogPost;
  variant?: 'featured' | 'default';
}

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

// ==========================================
// Child Components
// ==========================================

/**
 * CategoryFilter Component
 * Provides filtering navigation for blog posts
 */
const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}) => {
  return (
    <nav 
      className="flex flex-wrap gap-4 mb-16" 
      role="navigation" 
      aria-label="Blog categories"
    >
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`
            px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-300
            ${activeCategory === category
              ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25 transform hover:scale-105'
              : 'bg-surface-100 text-surface-700 hover:bg-surface-200 hover:text-surface-900 hover:shadow-md'
            }
          `}
          aria-pressed={activeCategory === category}
          aria-label={`Filter by ${category}`}
        >
          {category}
        </button>
      ))}
    </nav>
  );
};

/**
 * BlogPostCard Component
 * Renders individual blog post cards with two variants
 */
const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, variant = 'default' }) => {
  const formattedDate = post.date 
    ? new Date(post.date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      })
    : '';

  if (variant === 'featured') {
    return (
      <article className="group relative bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
        <Link 
          to={`/blog/${post.id}`}
          className="block"
          aria-label={`Read article: ${post.title}`}
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Featured Image */}
            <div className="relative h-80 lg:h-full overflow-hidden bg-gradient-to-br from-primary-50 to-primary-100">
              {post.coverImage && (
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-surface-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="p-12 lg:p-16 flex flex-col justify-between">
              <div>
                {/* Featured Badge */}
                <div className="inline-flex items-center gap-3 mb-6">
                  <span className="inline-block px-4 py-2 text-xs font-bold text-primary-600 bg-primary-100 rounded-xl uppercase tracking-wider">
                    Featured
                  </span>
                  {post.tags[0] && (
                    <span className="inline-block px-4 py-2 text-xs font-semibold text-surface-600 bg-surface-100 rounded-xl">
                      {post.tags[0]}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h2 className="text-3xl lg:text-4xl font-bold text-surface-900 mb-6 group-hover:text-primary-600 transition-colors duration-300 leading-tight">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-surface-600 text-lg lg:text-xl leading-relaxed mb-8 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              {/* Metadata & CTA */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6 text-sm text-surface-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{formattedDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime} min</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-primary-600 font-semibold group-hover:gap-4 transition-all duration-300">
                  Read Article
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  // Default Card Variant
  return (
    <article className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      <Link 
        to={`/blog/${post.id}`}
        className="block h-full"
        aria-label={`Read article: ${post.title}`}
      >
        {/* Image Container */}
        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-surface-100 to-surface-200">
          {post.coverImage && (
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-surface-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col h-[calc(100%-14rem)]">
          {/* Category Tag */}
          {post.tags[0] && (
            <div className="mb-4">
              <span className="inline-block px-3 py-1.5 text-xs font-semibold text-primary-600 bg-primary-50 rounded-lg">
                {post.tags[0]}
              </span>
            </div>
          )}

          {/* Title */}
          <h2 className="text-xl font-bold text-surface-900 mb-4 group-hover:text-primary-600 transition-colors duration-300 leading-tight line-clamp-2">
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="text-surface-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
            {post.excerpt}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-surface-100">
            <div className="flex items-center gap-4 text-xs text-surface-500">
              <div className="flex items-center gap-1">
                <User className="h-3 w-3" />
                <span>{post.author.name.split(' ')[0]}</span>
              </div>
              <span>•</span>
              <span>{post.readTime} min read</span>
            </div>
            <ArrowRight className="h-4 w-4 text-primary-600 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </Link>
    </article>
  );
};

/**
 * NewsletterSignup Component
 * Email capture form with brand-aligned styling
 */
const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter signup logic
    setStatus('success');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section className="bg-gradient-to-br from-primary-50 via-white to-surface-50 rounded-3xl p-12 lg:p-16 shadow-lg">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-3xl lg:text-4xl font-bold text-surface-900 mb-6">
          Stay Connected to the Future
        </h3>
        <p className="text-surface-600 mb-12 text-lg leading-relaxed">
          Get expert insights on satellite internet, professional installation tips, and the latest connectivity innovations delivered to your inbox.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-6 py-4 border border-surface-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-surface-900 placeholder-surface-500 transition-all duration-300"
            aria-label="Email address"
          />
          <button 
            type="submit"
            className="px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300 shadow-lg shadow-primary-600/25 hover:shadow-xl hover:scale-105"
            aria-label="Subscribe to newsletter"
          >
            Subscribe
          </button>
        </form>
        
        {status === 'success' && (
          <p className="mt-6 text-sm text-accent-600 font-medium">
            ✓ Successfully subscribed! Check your email for confirmation.
          </p>
        )}
      </div>
    </section>
  );
};

// ==========================================
// Main BlogPage Component
// ==========================================

const BlogPage: React.FC<BlogPageProps> = ({ posts }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [featuredPost, setFeaturedPost] = useState<BlogPost | null>(null);
  
  // Define categories with proper hierarchy
  const categories = [
    'All',
    'Installation Guides',
    'Technology',
    'Case Studies',
    'Tips & Tricks'
  ];
  
  // Set featured post on mount
  useEffect(() => {
    // Prioritize the "Ultimate Guide" as featured
    const ultimateGuide = posts.find(p => 
      p.id === 'ultimate-starlink-installation-guide-dmv' ||
      p.id === 'complete-satellite-internet-installation-dmv-guide'
    );
    setFeaturedPost(ultimateGuide || posts[0] || null);
  }, [posts]);
  
  // Filter posts based on active category
  const filteredPosts = activeFilter === 'All' 
    ? posts.filter(p => p.id !== featuredPost?.id)
    : posts.filter(p => 
        p.id !== featuredPost?.id && 
        p.tags.some(tag => tag.toLowerCase().includes(activeFilter.toLowerCase()))
      );

  return (
    <>
      {/* SEO Metadata */}
      <SEOMetadata
        title="Expert Insights on Connectivity | The Orbit Tech Blog"
        description="Your expert resource for Starlink installation guides, whole-home Wi-Fi optimization, and the future of connectivity in the DMV area. Professional insights from certified installers."
        keywords="Starlink installation blog, satellite internet guides, mesh WiFi tutorials, DMV connectivity expert, professional installation tips"
        canonicalUrl="https://theorbittech.com/blog"
      />

      <div className="min-h-screen bg-surface-50">
        {/* Navigation Spacer */}
        <div className="h-20" />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-surface-50 py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h1 className="text-5xl lg:text-6xl font-bold text-surface-900 mb-8 leading-tight">
                Expert Insights on Connectivity
              </h1>
              <p className="text-xl lg:text-2xl text-surface-600 leading-relaxed">
                Your expert resource for Starlink, whole-home Wi-Fi, and the future of connectivity in the DMV.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 pb-24">
          {/* Featured Post */}
          {featuredPost && (
            <section className="mb-20" aria-labelledby="featured-heading">
              <h2 id="featured-heading" className="sr-only">Featured Article</h2>
              <BlogPostCard post={featuredPost} variant="featured" />
            </section>
          )}

          {/* Category Filter */}
          <CategoryFilter
            categories={categories}
            activeCategory={activeFilter}
            onCategoryChange={setActiveFilter}
          />

          {/* Blog Posts Grid */}
          <section aria-labelledby="posts-heading">
            <h2 id="posts-heading" className="text-3xl font-bold text-surface-900 mb-12">
              Recent Articles
            </h2>
            
            {filteredPosts && filteredPosts.length > 0 ? (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-20">
                {filteredPosts.map((post) => (
                  <BlogPostCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-2xl shadow-lg">
                <div className="max-w-md mx-auto">
                  <h3 className="text-3xl font-bold text-surface-900 mb-6">
                    No Articles Found
                  </h3>
                  <p className="text-surface-600 mb-8">
                    {activeFilter !== 'All' 
                      ? `No articles found in "${activeFilter}". Try selecting a different category.`
                      : 'Check back soon for expert insights on satellite internet and connectivity solutions.'
                    }
                  </p>
                  {activeFilter !== 'All' && (
                    <button
                      onClick={() => setActiveFilter('All')}
                      className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-300 hover:scale-105"
                    >
                      View All Articles
                    </button>
                  )}
                </div>
              </div>
            )}
          </section>

          {/* Newsletter Signup */}
          <NewsletterSignup />
        </div>
      </div>
    </>
  );
};

export default BlogPage;