export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    image: string;
    role: string;
  };
  coverImage: string;
  date: string;
  readTime: number;
  tags: string[];
  metaDescription?: string;
  metaKeywords?: string;
  tableOfContents?: {
    title: string;
    anchor: string;
  }[];
  callToAction?: {
    text: string;
    url: string;
    buttonText: string;
  };
  relatedPosts?: string[];
}