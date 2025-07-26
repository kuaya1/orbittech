import React, { useEffect } from 'react';
import { BlogPost as BlogPostType } from '../types/blog';
import { Calendar, Clock, ArrowLeft, Tag, User, Share2, BookOpen, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import blogPosts from '../data/blogPosts';
import { motion } from 'framer-motion';

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Fixed Navigation Spacer */}
      <div className="h-24"></div>
      
      {/* Hero Section */}
      <motion.div 
        className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          {/* Breadcrumb */}
          <motion.nav 
            className="mb-8 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors">Home</Link>
            <span className="mx-3 text-slate-400">/</span>
            <Link to="/blog" className="text-blue-400 hover:text-blue-300 transition-colors">Blog</Link>
            <span className="mx-3 text-slate-400">/</span>
            <span className="text-slate-300">{post.title}</span>
          </motion.nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              {/* Tags */}
              <motion.div 
                className="flex flex-wrap gap-2 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {post.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-400/30 backdrop-blur-sm"
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </motion.div>

              {/* Title */}
              <motion.h1 
                className="text-4xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {post.title}
              </motion.h1>
              
              {/* Meta Information */}
              <motion.div 
                className="flex flex-wrap gap-6 text-sm text-slate-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-xs">
                    {post.author.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <span>{post.author.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-blue-400" />
                  <span>{formattedDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-blue-400" />
                  <span>{post.readTime} min read</span>
                </div>
              </motion.div>
            </div>

            {/* Cover Image */}
            {post.coverImage && (
              <motion.div 
                className="lg:col-span-1"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <img 
                    src={post.coverImage} 
                    alt={post.title}
                    className="relative w-full h-64 lg:h-80 object-cover rounded-2xl shadow-2xl border border-white/10"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Article Content */}
          <motion.main 
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <article className="max-w-4xl">
              {/* Content */}
              <div className="bg-white rounded-3xl shadow-xl border border-slate-200/50 overflow-hidden">
                {/* Content Header */}
                <div className="p-8 lg:p-12 border-b border-slate-100">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                      <span className="text-sm font-medium text-slate-600">Article</span>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors text-sm font-medium text-slate-700">
                      <Share2 className="h-4 w-4" />
                      Share
                    </button>
                  </div>
                </div>

                {/* Article Body */}
                <div className="p-8 lg:p-12">
                  <div className="prose prose-lg prose-slate max-w-none">
                    <div className="text-lg text-slate-700 leading-relaxed space-y-8">
                      <ReactMarkdown
                        components={{
                          h1: ({children}) => (
                            <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-12 mb-6 first:mt-0 pb-4 border-b border-slate-200">
                              {children}
                            </h1>
                          ),
                          h2: ({children}) => (
                            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mt-10 mb-5 relative">
                              <span className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
                              {children}
                            </h2>
                          ),
                          h3: ({children}) => (
                            <h3 className="text-xl lg:text-2xl font-semibold text-slate-900 mt-8 mb-4">
                              {children}
                            </h3>
                          ),
                          p: ({children}) => (
                            <p className="text-slate-700 leading-relaxed mb-6 text-lg">
                              {children}
                            </p>
                          ),
                          ul: ({children}) => (
                            <ul className="space-y-3 mb-6">
                              {children}
                            </ul>
                          ),
                          ol: ({children}) => (
                            <ol className="space-y-3 mb-6">
                              {children}
                            </ol>
                          ),
                          li: ({children}) => (
                            <li className="text-slate-700 text-lg flex items-start">
                              <span className="inline-block w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3 mr-3 flex-shrink-0"></span>
                              <span>{children}</span>
                            </li>
                          ),
                          strong: ({children}) => (
                            <strong className="font-semibold text-slate-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                              {children}
                            </strong>
                          ),
                          blockquote: ({children}) => (
                            <blockquote className="relative border-l-4 border-gradient-to-b from-blue-500 to-purple-500 pl-8 py-6 my-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-r-2xl">
                              <div className="absolute top-4 left-4 w-1 h-16 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                              <div className="text-slate-800 italic text-lg font-medium leading-relaxed">
                                {children}
                              </div>
                            </blockquote>
                          ),
                          code: ({children}) => (
                            <code className="px-2 py-1 bg-slate-100 text-slate-800 rounded-md text-sm font-mono">
                              {children}
                            </code>
                          ),
                        }}
                      >
                        {post.content}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>
              </div>

              {/* Author Bio */}
              <motion.div 
                className="mt-12 bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-8 lg:p-12 border border-slate-200/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {post.author.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{post.author.name}</h3>
                    <p className="text-sm font-medium text-blue-600 mb-4">{post.author.role}</p>
                    <p className="text-slate-700 leading-relaxed">
                      Professional satellite internet installation specialists serving the DMV area with years of experience in telecommunications and connectivity solutions.
                    </p>
                  </div>
                </div>
              </motion.div>
            </article>
          </motion.main>

          {/* Modern Sidebar */}
          <motion.aside 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="sticky top-32 space-y-8">
              {/* Quick Actions */}
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200/50 p-6 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <ExternalLink className="h-5 w-5 text-blue-600" />
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <Link
                    to="/contact"
                    className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-3 px-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg"
                  >
                    Get Free Quote
                  </Link>
                  <a
                    href="tel:5719996915"
                    className="block w-full bg-gradient-to-r from-green-600 to-green-700 text-white text-center py-3 px-4 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105 shadow-lg"
                  >
                    Call (571) 999-6915
                  </a>
                </div>
              </div>

              {/* About Section */}
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-slate-200/50 p-6 shadow-lg">
                <h3 className="text-lg font-bold text-slate-900 mb-4">About The Orbit Tech</h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-4">
                  Professional Starlink and satellite internet installation services serving the Washington D.C., Maryland, and Virginia area. Licensed, insured, and committed to delivering reliable connectivity solutions.
                </p>
                <div className="flex items-center gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Licensed</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Insured</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Certified</span>
                  </div>
                </div>
              </div>

              {/* Related Posts */}
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200/50 p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  Related Articles
                </h3>
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost, index) => (
                    <Link
                      key={relatedPost.id}
                      to={`/blog?post=${relatedPost.id}`}
                      className="block group p-4 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-200"
                    >
                      <h4 className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight mb-2">
                        {relatedPost.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Calendar className="h-3 w-3" />
                        <span>{relatedPost.date}</span>
                        <span>•</span>
                        <Clock className="h-3 w-3" />
                        <span>{relatedPost.readTime} min</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Table of Contents - Modern Tech Style */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700/50 p-6 text-white shadow-xl">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-white">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  Navigation
                </h3>
                <div className="space-y-2 text-sm">
                  <a href="#introduction" className="block text-slate-300 hover:text-blue-400 transition-colors py-1 px-2 rounded hover:bg-slate-800/50">
                    → Introduction
                  </a>
                  <a href="#installation" className="block text-slate-300 hover:text-blue-400 transition-colors py-1 px-2 rounded hover:bg-slate-800/50">
                    → Installation Process
                  </a>
                  <a href="#benefits" className="block text-slate-300 hover:text-blue-400 transition-colors py-1 px-2 rounded hover:bg-slate-800/50">
                    → Key Benefits
                  </a>
                  <a href="#conclusion" className="block text-slate-300 hover:text-blue-400 transition-colors py-1 px-2 rounded hover:bg-slate-800/50">
                    → Conclusion
                  </a>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>

        {/* Modern Back Button */}
        <motion.div 
          className="mt-16 pt-8 border-t border-slate-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-3 text-slate-600 font-medium hover:text-blue-600 transition-all group bg-white px-6 py-3 rounded-xl border border-slate-200 hover:border-blue-200 hover:shadow-lg"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to all articles
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost;