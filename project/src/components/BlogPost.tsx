import React, { useEffect } from 'react';
import { BlogPost as BlogPostType } from '../types/blog';
import { Calendar, Clock, ArrowLeft, Tag, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import blogPosts from '../data/blogPosts';

interface BlogPostProps {
  post: BlogPostType;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  // Set page metadata for SEO
  useEffect(() => {
    if (post) {
      document.title = `${post.title} | The Orbit Tech`;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', post.metaDescription || post.excerpt);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = post.metaDescription || post.excerpt;
        document.head.appendChild(meta);
      }
      
      // Update keywords
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords && post.metaKeywords) {
        metaKeywords.setAttribute('content', post.metaKeywords);
      } else if (post.metaKeywords) {
        const meta = document.createElement('meta');
        meta.name = 'keywords';
        meta.content = post.metaKeywords;
        document.head.appendChild(meta);
      }
    }
    
    return () => {
      document.title = 'The Orbit Tech';
    };
  }, [post]);
  
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-gray-900">Post not found</h1>
          <Link 
            to="/blog" 
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to all articles
          </Link>
        </div>
      </div>
    );
  }

  // Format the date properly
  const formattedDate = post.date ? 
    (post.date.includes('T') ? 
      new Date(post.date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }) : 
      post.date) : 
    'Unknown date';
  
  // Get related posts if available
  const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation Spacer */}
      <div className="h-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="py-6 text-sm text-gray-600">
          <Link to="/" className="text-blue-600 hover:text-blue-800">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/blog" className="text-blue-600 hover:text-blue-800">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{post.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <main className="lg:col-span-3">
            <article className="max-w-3xl">
              {/* Article Header */}
              <header className="mb-8">
                {/* Meta Information */}
                <div className="flex flex-wrap gap-6 mb-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{formattedDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime} min read</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{post.author.name}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200 hover:bg-gray-200 transition-colors"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
                  {post.title}
                </h1>
                
                {/* Cover Image */}
                {post.coverImage && (
                  <div className="mb-8">
                    <img 
                      src={post.coverImage} 
                      alt={post.title}
                      className="w-full h-64 lg:h-96 object-cover rounded-lg shadow-lg"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                )}
              </header>

              {/* Article Content */}
              <div className="prose prose-lg prose-gray max-w-none">
                <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                  <ReactMarkdown
                    components={{
                      h1: ({children}) => <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4">{children}</h1>,
                      h2: ({children}) => <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{children}</h2>,
                      h3: ({children}) => <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{children}</h3>,
                      p: ({children}) => <p className="text-gray-700 leading-relaxed mb-4">{children}</p>,
                      ul: ({children}) => <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>,
                      ol: ({children}) => <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>,
                      li: ({children}) => <li className="text-gray-700">{children}</li>,
                      strong: ({children}) => <strong className="font-semibold text-gray-900">{children}</strong>,
                      blockquote: ({children}) => (
                        <blockquote className="border-l-4 border-blue-500 pl-6 py-4 my-6 bg-gray-50 rounded-r-lg">
                          <div className="text-gray-800 italic">{children}</div>
                        </blockquote>
                      ),
                    }}
                  >
                    {post.content}
                  </ReactMarkdown>
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {post.author.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{post.author.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{post.author.role}</p>
                    <p className="text-gray-700">
                      Professional satellite internet installation specialists serving the DMV area with years of experience in telecommunications and connectivity solutions.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* About Section */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">About The Orbit Tech</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Professional Starlink and satellite internet installation services serving the Washington D.C., Maryland, and Virginia area. Licensed, insured, and committed to delivering reliable connectivity solutions.
                </p>
                <Link
                  to="/contact"
                  className="block w-full bg-blue-600 text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Get a Free Quote
                </Link>
              </div>

              {/* Recent Posts */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      to={`/blog?post=${relatedPost.id}`}
                      className="block group"
                    >
                      <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                        {relatedPost.title}
                      </h4>
                      <p className="text-xs text-gray-600 mt-1">{relatedPost.date}</p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Professional Installation?</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Our certified technicians provide complete Starlink installation services with warranty coverage and ongoing support.
                </p>
                <a
                  href="tel:5719996915"
                  className="block w-full bg-blue-600 text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Call (571) 999-6915
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* Back to Blog Button */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            to="/blog"
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to all articles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;