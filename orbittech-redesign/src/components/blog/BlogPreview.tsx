import React from 'react';
import { Link } from 'react-router-dom';
import { getFeaturedBlogPosts } from '../../data/blogContent';

interface BlogPreviewProps {
  variant?: 'featured' | 'list' | 'grid';
  limit?: number;
  showExcerpt?: boolean;
}

const BlogPreview: React.FC<BlogPreviewProps> = ({ 
  variant = 'featured', 
  limit = 3,
  showExcerpt = true 
}) => {
  const posts = getFeaturedBlogPosts(limit);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (variant === 'list') {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
          <Link 
            to="/blog" 
            className="text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            View All Articles →
          </Link>
        </div>
        
        <div className="space-y-4">
          {posts.map((post) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.slug}`}
              className="block group"
            >
              <article className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                      <span>{formatDate(post.publishDate)}</span>
                      <span>•</span>
                      <span>{post.readTime} min read</span>
                      <span>•</span>
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                      {post.title}
                    </h3>
                    
                    {showExcerpt && (
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                    )}
                    
                    <div className="mt-3 flex items-center text-sm text-gray-500">
                      <span>By {post.author}</span>
                    </div>
                  </div>
                  
                  <div className="ml-4 text-gray-400 group-hover:text-blue-600 transition-colors">
                    →
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'grid') {
    return (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Expert Insights & Guides</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed with the latest tips, guides, and insights from our certified Starlink installation experts.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.slug}`}
              className="group block"
            >
              <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-w-16 aspect-h-9 bg-gradient-to-r from-blue-500 to-purple-600">
                  <div className="flex items-center justify-center">
                    <span className="text-white text-4xl">📡</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                    <span>{formatDate(post.publishDate)}</span>
                    <span>•</span>
                    <span>{post.readTime} min read</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-blue-600 group-hover:text-blue-700 font-medium text-sm">
                      Read More →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            to="/blog" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            View All Articles
          </Link>
        </div>
      </div>
    );
  }

  // Featured variant (default)
  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Articles</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Expert insights and guides from The Orbit Tech team to help you get the most out of your Starlink installation.
        </p>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <Link 
            key={post.id} 
            to={`/blog/${post.slug}`}
            className="group block"
          >
            <article className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${
              index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
            }`}>
              <div className={`aspect-w-16 bg-gradient-to-r from-blue-500 to-purple-600 ${
                index === 0 ? 'aspect-h-9' : 'aspect-h-12'
              }`}>
                <div className="flex items-center justify-center">
                  <span className={`text-white ${index === 0 ? 'text-6xl' : 'text-4xl'}`}>📡</span>
                </div>
              </div>
              
              <div className={`p-6 ${index === 0 ? 'lg:p-8' : ''}`}>
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                  <span>{formatDate(post.publishDate)}</span>
                  <span>•</span>
                  <span>{post.readTime} min read</span>
                </div>
                
                <h3 className={`font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-3 ${
                  index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'
                }`}>
                  {post.title}
                </h3>
                
                <p className={`text-gray-600 leading-relaxed mb-4 ${
                  index === 0 ? 'text-base' : 'text-sm'
                }`}>
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">By {post.author}</span>
                  </div>
                  <span className="text-blue-600 group-hover:text-blue-700 font-medium text-sm">
                    Read More →
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BlogPreview;
