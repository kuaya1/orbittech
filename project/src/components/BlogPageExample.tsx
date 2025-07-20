// Example usage of the new BlogPage component
// You can replace the existing BlogList component with BlogPage in your routing

import BlogPage from './BlogPage';
import blogPosts from '../data/blogPosts';

// Example: Replace BlogList with BlogPage in your Blog.tsx component
const BlogPageExample = () => {
  return <BlogPage posts={blogPosts} />;
};

export default BlogPageExample;

// To integrate this into your existing Blog.tsx:
// Simply replace <BlogList posts={blogPosts} /> with <BlogPage posts={blogPosts} />
// in the Blog component where it currently renders BlogList
