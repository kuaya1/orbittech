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
    <div className="min-h-screen bg-surface-50">
      {/* Fixed Navigation Spacer */}
      <div className="h-20"></div>
      
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-20">
        {/* Back Button */}
        <Link 
          to="/blog" 
          className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors mb-12 group"
        >
          <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to all articles
        </Link>

        {/* Category Tag */}
        <div className="mb-8">
          <span className="inline-block px-4 py-2 text-sm font-semibold text-primary-600 bg-primary-100 rounded-xl uppercase tracking-wide">
            {post.tags[0] || 'Installation'}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl lg:text-6xl font-bold text-surface-900 mb-12 leading-tight">
          {post.title}
        </h1>
        
        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-8 text-sm text-surface-600 mb-16 pb-8 border-b border-surface-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
              {post.author.name.split(' ').map(n => n[0]).join('')}
            </div>
            <span className="font-semibold">{post.author.name}</span>
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
          <div className="mb-16">
            <img 
              src={post.coverImage} 
              alt={post.title}
              className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
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
              h1: ({ children }) => <h1 className="text-4xl font-bold text-surface-900 mb-8 mt-16">{children}</h1>,
              h2: ({ children }) => <h2 className="text-3xl font-bold text-surface-900 mb-6 mt-12">{children}</h2>,
              h3: ({ children }) => <h3 className="text-2xl font-bold text-surface-900 mb-4 mt-10">{children}</h3>,
              p: ({ children }) => <p className="text-surface-700 mb-8 leading-relaxed text-lg">{children}</p>,
              ul: ({ children }) => <ul className="list-disc list-inside mb-8 space-y-3 text-lg text-surface-700">{children}</ul>,
              ol: ({ children }) => <ol className="list-decimal list-inside mb-8 space-y-3 text-lg text-surface-700">{children}</ol>,
              li: ({ children }) => <li className="leading-relaxed">{children}</li>,
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-primary-500 pl-8 py-6 my-12 bg-primary-50 rounded-r-xl italic text-surface-700">
                  {children}
                </blockquote>
              ),
              code: ({ children }) => (
                <code className="bg-surface-100 px-3 py-1 rounded-lg text-sm font-mono text-surface-800">
                  {children}
                </code>
              ),
              pre: ({ children }) => (
                <pre className="bg-surface-900 text-surface-100 p-8 rounded-2xl overflow-x-auto mb-8">
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
          <div className="mt-20 pt-16 border-t border-surface-200">
            <h3 className="text-3xl font-bold text-surface-900 mb-12">Related Articles</h3>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.id} 
                  to={`/blog?post=${relatedPost.id}`}
                  className="group block"
                >
                  <div className="aspect-video w-full bg-surface-100 rounded-xl overflow-hidden mb-6">
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
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-600 bg-primary-100 rounded-lg uppercase tracking-wide">
                      {relatedPost.tags[0] || 'Installation'}
                    </span>
                  </div>
                  <h4 className="font-bold text-surface-900 group-hover:text-primary-600 transition-colors leading-tight">
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