import { BlogPost } from '../types/blog';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPageProps {
  posts: BlogPost[];
}

const BlogPage = ({ posts }: BlogPageProps) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation Spacer */}
      <div className="h-20"></div>
      
      {/* Hero Section - Enhanced Typography */}
      <div className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/20">
        <div className="container mx-auto px-4 py-20 lg:py-24">
          <div className="max-w-5xl mx-auto text-center">
            {/* Eyebrow Text */}
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Certified Satellite Internet Experts
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 bg-clip-text text-transparent">
                From the Orbit:
              </span>
              <span className="block text-gray-800 text-4xl lg:text-5xl font-bold mt-4 leading-tight">
                Tech Tips & Satellite News
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-light">
              Expert insights on satellite internet installation, optimization, and troubleshooting from{' '}
              <span className="font-semibold text-blue-700">The Orbit Tech's</span> certified professionals 
              serving the <span className="font-medium">DMV area</span>.
            </p>
            
            {/* Decorative Element */}
            <div className="flex justify-center mt-12">
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid - White background */}
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto">
            {posts && posts.length > 0 ? (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <article 
                    key={post.id} 
                    className="group bg-white border border-gray-200 hover:border-gray-300 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <Link to={`/blog?post=${post.id}`} className="block h-full">
                      {/* Featured Image */}
                      <div className="relative h-52 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                      </div>
                      
                      <div className="p-8 flex flex-col h-full">
                        {/* Meta Information */}
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(post.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {post.readTime} min read
                          </span>
                        </div>
                        
                        {/* Title */}
                        <h2 className="font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors line-clamp-2 leading-tight text-xl">
                          {post.title}
                        </h2>
                        
                        {/* Excerpt */}
                        <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed flex-grow">
                          {post.excerpt}
                        </p>
                        
                        {/* Tags */}
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-6">
                            {post.tags.slice(0, 2).map((tag) => (
                              <span 
                                key={tag} 
                                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200"
                              >
                                <Tag className="h-3 w-3 mr-1" />
                                {tag}
                              </span>
                            ))}
                            {post.tags.length > 2 && (
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">
                                +{post.tags.length - 2} more
                              </span>
                            )}
                          </div>
                        )}
                        
                        {/* Read More Link */}
                        <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-800 transition-colors mt-auto text-sm">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section - White theme */}
      <div className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">
              Ready for Professional Satellite Internet Installation?
            </h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Get expert Starlink and Kuiper installation services in Virginia, Maryland, and Washington D.C.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a 
                href="tel:5719996915" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors border-2 border-blue-600"
              >
                Call (571) 999-6915
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
