import React from 'react';
import { BlogPost } from '../types/blog';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogListProps {
  posts: BlogPost[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  // Add debug logging
  console.log("BlogList rendering with posts:", posts);
  
  // Handle the case where posts might be undefined or empty
  if (!posts || posts.length === 0) {
    return (
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-6xl font-bold text-surface-900 mb-6">Blog</h1>
            <p className="text-2xl text-surface-600 mb-16">No posts available at the moment. Check back soon!</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-surface-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl font-bold text-surface-900 mb-6">Blog</h1>
          <p className="text-2xl text-surface-600 mb-16">Discover the latest Starlink news, insights, and how-to guides</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <Link to={`/blog?post=${post.id}`} className="block">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center flex-wrap gap-4 text-sm text-surface-600 mb-4">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {post.readTime} min
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-surface-900 mb-4 group-hover:text-primary-600 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-surface-600 mb-6 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                    
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span 
                            key={tag} 
                            className="inline-flex items-center px-3 py-1 rounded-lg text-xs bg-primary-100 text-primary-700 font-medium"
                          >
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 2 && (
                          <span className="inline-flex items-center px-3 py-1 rounded-lg text-xs bg-surface-100 text-surface-700 font-medium">
                            +{post.tags.length - 2}
                          </span>
                        )}
                      </div>
                    )}
                    
                    <div className="flex items-center text-primary-600 font-semibold group-hover:text-primary-700 transition-colors duration-300">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;