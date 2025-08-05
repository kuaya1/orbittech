import { BlogPost } from '../types/blog';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface BlogPageProps {
  posts: BlogPost[];
}

const BlogPage = ({ posts }: BlogPageProps) => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  // Define categories based on Gladia's design
  const categories = ['All', 'Installation Guides', 'Troubleshooting', 'Product News', 'Case Studies', 'Tutorials'];
  
  // Filter posts based on active category
  const filteredPosts = activeFilter === 'All' 
    ? posts 
    : posts.filter(post => post.tags.includes(activeFilter));

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation Spacer */}
      <div className="h-20"></div>
      
      {/* Clean Header - Gladia Style */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">Blog</h1>
        
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-gray-200">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 text-sm font-medium rounded-t-lg border-b-2 transition-colors ${
                activeFilter === category
                  ? 'text-blue-600 border-blue-600 bg-blue-50'
                  : 'text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid - Gladia Style */}
        {filteredPosts && filteredPosts.length > 0 ? (
          <div className="space-y-8">
            {filteredPosts.map((post) => (
              <article 
                key={post.id} 
                className="group border-b border-gray-100 pb-8 last:border-b-0"
              >
                <Link to={`/blog?post=${post.id}`} className="block">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Content */}
                    <div className="flex-1">
                      {/* Category Tag */}
                      <div className="mb-3">
                        <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full uppercase tracking-wide">
                          {post.tags[0] || 'Installation'}
                        </span>
                      </div>
                      
                      {/* Title */}
                      <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                        {post.title}
                      </h2>
                      
                      {/* Excerpt */}
                      <p className="text-gray-600 mb-6 text-lg leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      {/* View More Link */}
                      <div className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors">
                        View more
                      </div>
                    </div>
                    
                    {/* Featured Image */}
                    <div className="lg:w-80 flex-shrink-0">
                      <div className="aspect-video w-full bg-gray-100 rounded-lg overflow-hidden">
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No Posts Available</h3>
              <p className="text-gray-600 mb-8">
                Check back soon for expert insights on satellite internet technology and installation tips.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Our Experts
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Newsletter Signup - Gladia Style */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            From satellite to success
          </h3>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Subscribe to receive latest news, installation tips and curated satellite internet content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
