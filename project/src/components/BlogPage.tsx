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
      className="flex flex-wrap gap-3 mb-12" 
      role="navigation" 
      aria-label="Blog categories"
    >
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`
            px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-200
            ${activeCategory === category
              ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
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
      <article className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
        <Link 
          to={`/blog?post=${post.id}`}
          className="block"
          aria-label={`Read article: ${post.title}`}
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Featured Image */}
            <div className="relative h-72 lg:h-full overflow-hidden bg-gradient-to-br from-primary-50 to-primary-100">
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="p-8 lg:p-10 flex flex-col justify-between">
              <div>
                {/* Featured Badge */}
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-bold text-primary-600 bg-primary-100 rounded-full uppercase tracking-wider">
                    Featured
                  </span>
                  {post.tags[0] && (
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-gray-600 bg-gray-100 rounded-full">
                      {post.tags[0]}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-200 leading-tight">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              {/* Metadata & CTA */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{formattedDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime} min</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-primary-600 font-semibold group-hover:gap-3 transition-all duration-200">
                  Read Article
                  <ArrowRight className="h-4 w-4" />
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
    <article className="group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <Link 
        to={`/blog?post=${post.id}`}
        className="block h-full"
        aria-label={`Read article: ${post.title}`}
      >
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
          {/* Category Tag */}
          {post.tags[0] && (
            <div className="mb-3">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-600 bg-primary-50 rounded-full">
                {post.tags[0]}
              </span>
            </div>
          )}

          {/* Title */}
          <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200 leading-tight line-clamp-2">
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
            {post.excerpt}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <User className="h-3 w-3" />
                <span>{post.author.name.split(' ')[0]}</span>
              </div>
              <span>•</span>
              <span>{post.readTime} min read</span>
            </div>
            <ArrowRight className="h-4 w-4 text-primary-600 group-hover:translate-x-1 transition-transform duration-200" />
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
    <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 rounded-2xl p-8 lg:p-12">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
          Stay Connected to the Future
        </h3>
        <p className="text-gray-600 mb-8 text-lg">
          Get expert insights on satellite internet, professional installation tips, and the latest connectivity innovations delivered to your inbox.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 placeholder-gray-500"
            aria-label="Email address"
          />
          <button 
            type="submit"
            className="px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200 shadow-lg shadow-primary-600/25 hover:shadow-xl"
            aria-label="Subscribe to newsletter"
          >
            Subscribe
          </button>
        </form>
        
        {status === 'success' && (
          <p className="mt-4 text-sm text-green-600 font-medium">
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

      <div className="min-h-screen bg-gray-50">
        {/* Navigation Spacer */}
        <div className="h-20" />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-gray-50 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Expert Insights on Connectivity
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Your expert resource for Starlink, whole-home Wi-Fi, and the future of connectivity in the DMV.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 pb-20">
          {/* Featured Post */}
          {featuredPost && (
            <section className="mb-16" aria-labelledby="featured-heading">
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
            <h2 id="posts-heading" className="text-2xl font-bold text-gray-900 mb-8">
              Recent Articles
            </h2>
            
            {filteredPosts && filteredPosts.length > 0 ? (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
                {filteredPosts.map((post) => (
                  <BlogPostCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-xl shadow-sm">
                <div className="max-w-md mx-auto">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    No Articles Found
                  </h3>
                  <p className="text-gray-600 mb-8">
                    {activeFilter !== 'All' 
                      ? `No articles found in "${activeFilter}". Try selecting a different category.`
                      : 'Check back soon for expert insights on satellite internet and connectivity solutions.'
                    }
                  </p>
                  {activeFilter !== 'All' && (
                    <button
                      onClick={() => setActiveFilter('All')}
                      className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200"
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