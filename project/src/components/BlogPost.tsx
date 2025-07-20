import React, { useEffect } from 'react';
import { BlogPost as BlogPostType } from '../types/blog';
import { Calendar, Clock, ArrowLeft, Tag, MessageCircle, Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon
} from 'react-share';
import ReactMarkdown from 'react-markdown';
import blogPosts from '../data/blogPosts';

interface BlogPostProps {
  post: BlogPostType;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  // Add debug logging
  console.log("BlogPost rendering with post:", post);
  
  // Set page metadata for SEO
  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Spacelink Internet Solutions`;
      
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
      document.title = 'Spacelink Internet Solutions';
    };
  }, [post]);
  
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
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

  const shareUrl = window.location.href;

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
  const relatedPosts = post.relatedPosts?.map(id => 
    blogPosts.find(blogPost => blogPost.id === id)
  ).filter(Boolean) || [];

  return (
    <article className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[450px] mb-12">
        <div className="absolute inset-0">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
        </div>

        <div className="container mx-auto px-4 relative h-full flex items-center">
          <div className="max-w-3xl">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center flex-wrap gap-6 text-white/90 mb-8">
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {formattedDate}
              </span>
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {post.readTime} min read
              </span>
              {post.author && (
                <span className="flex items-center">
                  <img
                    src={post.author.image}
                    alt={post.author.name}
                    className="w-6 h-6 rounded-full mr-2"
                  />
                  {post.author.name}
                </span>
              )}
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-600/70 text-white"
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="flex items-center space-x-4">
              <span className="text-white/80">Share:</span>
              <div className="flex space-x-2">
                <FacebookShareButton url={shareUrl} quote={post.title}>
                  <FacebookIcon size={32} round className="opacity-80 hover:opacity-100" />
                </FacebookShareButton>
                <TwitterShareButton url={shareUrl} title={post.title}>
                  <TwitterIcon size={32} round className="opacity-80 hover:opacity-100" />
                </TwitterShareButton>
                <LinkedinShareButton url={shareUrl} title={post.title}>
                  <LinkedinIcon size={32} round className="opacity-80 hover:opacity-100" />
                </LinkedinShareButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-8">
          {/* Table of Contents - if available */}
          {post.tableOfContents && (
            <div className="bg-gray-50 p-5 rounded-lg mb-8">
              <h2 className="font-semibold text-lg mb-3">Table of Contents</h2>
              <ul className="space-y-2">
                {post.tableOfContents.map(item => (
                  <li key={item.anchor}>
                    <a 
                      href={`#${item.anchor}`}
                      className="text-blue-600 hover:underline flex items-center"
                    >
                      <ArrowRight className="h-3 w-3 mr-2" />
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown className="prose prose-lg prose-headings:font-semibold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:mb-6 prose-p:text-gray-700 prose-p:leading-relaxed">
              {post.content}
            </ReactMarkdown>
          </div>
          
          {/* Call to Action */}
          {post.callToAction && (
            <div className="my-12 p-6 bg-blue-50 rounded-xl border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{post.callToAction.text}</h3>
              <Link 
                to={post.callToAction.url} 
                className="inline-block mt-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                {post.callToAction.buttonText}
              </Link>
            </div>
          )}
          
          {/* Default CTA if none provided */}
          {!post.callToAction && (
            <div className="my-12 p-6 bg-blue-50 rounded-xl border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ready for reliable Starlink internet?</h3>
              <p className="mb-4">Our expert team can help with professional installation and setup.</p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/contact" 
                  className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get a Free Quote
                </Link>
                <Link 
                  to="/resources/checklist" 
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Pre-Installation Guide
                </Link>
              </div>
            </div>
          )}

          {/* Author Info */}
          <div className="border-t border-gray-200 mt-12 pt-8">
            <div className="flex items-center">
              <img
                src={post.author.image}
                alt={post.author.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">{post.author.name}</h3>
                <p className="text-gray-600">{post.author.role}</p>
              </div>
            </div>
          </div>
          
          {/* Social Sharing with Enhanced UX */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h4 className="font-medium text-gray-800 mb-4">Found this helpful? Share with others:</h4>
            <div className="flex space-x-3">
              <FacebookShareButton url={shareUrl} quote={post.title} className="hover:transform hover:scale-110 transition-transform">
                <FacebookIcon size={40} round />
              </FacebookShareButton>
              <TwitterShareButton url={shareUrl} title={post.title} className="hover:transform hover:scale-110 transition-transform">
                <TwitterIcon size={40} round />
              </TwitterShareButton>
              <LinkedinShareButton url={shareUrl} title={post.title} className="hover:transform hover:scale-110 transition-transform">
                <LinkedinIcon size={40} round />
              </LinkedinShareButton>
            </div>
          </div>
          
          {/* Comments Section Prompt */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-gray-800">Questions or thoughts?</h4>
              <button className="flex items-center text-blue-600 hover:text-blue-800">
                <MessageCircle className="h-4 w-4 mr-2" />
                Add a comment
              </button>
            </div>
          </div>
          
          {/* Related Posts Section */}
          {relatedPosts.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="font-semibold text-xl mb-6">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map(relatedPost => (
                  <Link 
                    to={`/blog?post=${relatedPost.id}`}
                    key={relatedPost.id}
                    className="group flex flex-col h-full bg-gray-50 rounded-lg p-5 hover:bg-gray-100 transition-colors"
                  >
                    <h4 className="font-medium text-gray-900 group-hover:text-blue-600 mb-2 transition-colors">
                      {relatedPost.title}
                    </h4>
                    <p className="text-sm text-gray-600 mb-3 flex-grow">{relatedPost.excerpt.substring(0, 80)}...</p>
                    <div className="flex items-center text-blue-600 text-sm mt-auto">
                      Read article
                      <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
          
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
    </article>
  );
};

export default BlogPost;