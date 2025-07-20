import blogPosts from '../data/blogPosts';
import BlogPost from './BlogPost';
import BlogPage from './BlogPage';
import { useLocation } from 'react-router-dom';
import SEOMetadata from './SEOMetadata';

const Blog = () => {
  const location = useLocation();
  const postId = new URLSearchParams(location.search).get('post');
  
  // Add console logging for debugging
  console.log("Available posts:", blogPosts);
  console.log("Looking for post ID:", postId);
  
  const currentPost = postId ? blogPosts.find(post => post.id === postId) : null;
  
  // Log the found post
  console.log("Found post:", currentPost);

  return (
    <div className="min-h-screen bg-gray-50">
      {currentPost ? (
        <>
          <SEOMetadata 
            title={currentPost.title}
            description={currentPost.metaDescription || currentPost.excerpt}
            keywords={currentPost.metaKeywords || currentPost.tags.join(', ')}
            ogImage={currentPost.coverImage}
            ogUrl={window.location.href}
            ogType="article"
          />
          <BlogPost post={currentPost} />
        </>
      ) : (
        <>
          <SEOMetadata 
            title="Blog & Resources"
            description="Expert advice on Starlink satellite internet installation, troubleshooting, and optimization from Spacelink's professional technicians."
            keywords="Starlink blog, satellite internet resources, Starlink installation guides, professional Starlink setup"
            ogImage="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=80"
          />
          <BlogPage posts={blogPosts} />
        </>
      )}
    </div>
  );
};

export default Blog;