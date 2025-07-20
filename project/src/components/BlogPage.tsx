import { BlogPost } from '../types/blog';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPageProps {
  posts: BlogPost[];
}

const BlogPage = ({ posts }: BlogPageProps) => {
  console.log("BlogPage rendering with posts:", posts);
  
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Hero Section - Black theme */}
      <div className="relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black"></div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold text-white mb-6 tracking-tight">
              From the Orbit: 
              <span className="block text-white/90">Tech Tips & Satellite News</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto font-normal">
              Expert insights on satellite internet installation, optimization, and troubleshooting from 
              The Orbit Tech's certified professionals serving the DMV area.
            </p>
          </div>
        </div>
        {/* Decorative elements - subtle */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/5 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
        </div>
      </div>

      {/* Blog Posts Grid - Black background */}
      <div className="bg-black">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto">
            {posts && posts.length > 0 ? (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <article 
                    key={post.id} 
                    className="group bg-black border border-neutral-800 hover:border-neutral-600 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-neutral-500/20 hover:-translate-y-1"
                  >
                    <Link to={`/blog?post=${post.id}`} className="block h-full">
                      {/* Featured Image */}
                      <div className="relative h-52 overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900">
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
                        <div className="flex items-center justify-between text-sm text-white/60 mb-4">
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
                        <h2 className="font-bold text-white mb-4 group-hover:text-white/90 transition-colors line-clamp-2 leading-tight text-xl">
                          {post.title}
                        </h2>
                        
                        {/* Excerpt */}
                        <p className="text-white/80 mb-6 line-clamp-3 leading-relaxed font-normal flex-grow">
                          {post.excerpt}
                        </p>
                        
                        {/* Tags */}
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-6">
                            {post.tags.slice(0, 2).map((tag) => (
                              <span 
                                key={tag} 
                                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/20"
                              >
                                <Tag className="h-3 w-3 mr-1" />
                                {tag}
                              </span>
                            ))}
                            {post.tags.length > 2 && (
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-neutral-800 text-white/70 border border-neutral-700">
                                +{post.tags.length - 2} more
                              </span>
                            )}
                          </div>
                        )}
                        
                        {/* Read More Link */}
                        <div className="flex items-center text-white font-semibold group-hover:text-white/90 transition-colors mt-auto uppercase tracking-wider text-sm">
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
                  <h3 className="text-2xl font-bold text-white mb-4">No Posts Available</h3>
                  <p className="text-white/80 mb-8 font-normal">
                    Check back soon for expert insights on satellite internet technology and installation tips.
                  </p>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-neutral-200 transition-colors uppercase tracking-wider"
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

      {/* CTA Section - Black theme */}
      <div className="bg-black border-t border-neutral-800">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4 text-white">
              Ready for Professional Satellite Internet Installation?
            </h3>
            <p className="text-xl text-white/80 mb-8 leading-relaxed font-normal">
              Get expert Starlink and Kuiper installation services in Virginia, Maryland, and Washington D.C.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-neutral-200 transition-colors uppercase tracking-wider"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a 
                href="tel:5719996915" 
                className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-bold rounded-lg hover:bg-neutral-900 transition-colors border-2 border-neutral-800 hover:border-neutral-600 uppercase tracking-wider"
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
