import React, { useEffect } from 'react';
import { BlogPost as BlogPostType } from '../types/blog';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
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
      {/* Fixed Navigation Spacer */}
      <div className="h-20"></div>
      
      {/* Main Content - Gladia Style */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Back Button */}
        <Link 
          to="/blog" 
          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to all articles
        </Link>

        {/* Category Tag */}
        <div className="mb-6">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full uppercase tracking-wide">
            {post.tags[0] || 'Installation'}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
          {post.title}
        </h1>
        
        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-12 pb-8 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-xs">
              {post.author.name.split(' ').map(n => n[0]).join('')}
            </div>
            <span className="font-medium">{post.author.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{post.readTime} min read</span>
          </div>
        </div>

        {/* Cover Image */}
        {post.coverImage && (
          <div className="mb-12">
            <img 
              src={post.coverImage} 
              alt={post.title}
              className="w-full h-80 lg:h-96 object-cover rounded-lg"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
        )}

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ children }) => <h1 className="text-3xl font-bold text-gray-900 mb-6 mt-12">{children}</h1>,
              h2: ({ children }) => <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">{children}</h2>,
              h3: ({ children }) => <h3 className="text-xl font-bold text-gray-900 mb-3 mt-8">{children}</h3>,
              p: ({ children }) => <p className="text-gray-700 mb-6 leading-relaxed text-lg">{children}</p>,
              ul: ({ children }) => <ul className="list-disc list-inside mb-6 space-y-2 text-lg text-gray-700">{children}</ul>,
              ol: ({ children }) => <ol className="list-decimal list-inside mb-6 space-y-2 text-lg text-gray-700">{children}</ol>,
              li: ({ children }) => <li className="leading-relaxed">{children}</li>,
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-blue-500 pl-6 py-4 my-8 bg-blue-50 italic text-gray-700">
                  {children}
                </blockquote>
              ),
              code: ({ children }) => (
                <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800">
                  {children}
                </code>
              ),
              pre: ({ children }) => (
                <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6">
                  {children}
                </pre>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.id} 
                  to={`/blog?post=${relatedPost.id}`}
                  className="group block"
                >
                  <div className="aspect-video w-full bg-gray-100 rounded-lg overflow-hidden mb-4">
                    <img
                      src={relatedPost.coverImage}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="mb-2">
                    <span className="inline-block px-2 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded uppercase tracking-wide">
                      {relatedPost.tags[0] || 'Installation'}
                    </span>
                  </div>
                  <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                    {relatedPost.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPost;