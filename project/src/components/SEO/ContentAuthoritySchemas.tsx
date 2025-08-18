import React from 'react';
import { useSchemaRegistration } from './CentralizedSchemaManager';

interface HowToSchemaProps {
  title: string;
  description: string;
  image: string;
  estimatedCost?: {
    currency: string;
    value: number;
  };
  totalTime: string; // ISO 8601 duration format
  steps: {
    name: string;
    text: string;
    image?: string;
    url?: string;
  }[];
  tools?: string[];
  supplies?: string[];
}

export const HowToSchema: React.FC<HowToSchemaProps> = ({
  title,
  description,
  image,
  estimatedCost,
  totalTime,
  steps,
  tools = [],
  supplies = []
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `https://www.theorbittech.com/guides/${title.toLowerCase().replace(/\s+/g, '-')}#howto`,
    "name": title,
    "description": description,
    "image": {
      "@type": "ImageObject",
      "url": image,
      "width": 1200,
      "height": 800,
      "caption": `${title} - Step by step installation guide`,
      "license": "https://www.theorbittech.com/terms-of-service",
      "copyrightHolder": {
        "@type": "Organization",
        "name": "The Orbit Tech"
      }
    },
    "author": {
      "@type": "Organization",
      "name": "The Orbit Tech",
      "url": "https://www.theorbittech.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "The Orbit Tech",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.theorbittech.com/images/orbit-tech-logo.webp"
      }
    },
    "totalTime": totalTime,
    ...(estimatedCost && {
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": estimatedCost.currency,
        "value": estimatedCost.value
      }
    }),
    ...(tools.length > 0 && {
      "tool": tools.map(tool => ({
        "@type": "HowToTool",
        "name": tool
      }))
    }),
    ...(supplies.length > 0 && {
      "supply": supplies.map(supply => ({
        "@type": "HowToSupply",
        "name": supply
      }))
    }),
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      ...(step.image && {
        "image": {
          "@type": "ImageObject",
          "url": step.image,
          "caption": step.name
        }
      }),
      ...(step.url && {
        "url": step.url
      })
    })),
    "about": {
      "@type": "Thing",
      "name": "Satellite Internet Installation"
    },
    "category": "Technology Installation Guide",
    "datePublished": new Date().toISOString(),
    "inLanguage": "en-US"
  };

  useSchemaRegistration('howto', schemaData);

  return null; // Schema only component
};

interface VideoSchemaProps {
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  duration: string; // ISO 8601 duration
  uploadDate: Date;
  transcript?: string;
  category: string;
  keywords: string[];
}

export const VideoSchema: React.FC<VideoSchemaProps> = ({
  title,
  description,
  videoUrl,
  thumbnailUrl,
  duration,
  uploadDate,
  transcript,
  category,
  keywords
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "@id": `${videoUrl}#video`,
    "name": title,
    "description": description,
    "contentUrl": videoUrl,
    "embedUrl": videoUrl.replace('watch?v=', 'embed/'),
    "thumbnailUrl": thumbnailUrl,
    "duration": duration,
    "uploadDate": uploadDate.toISOString(),
    "author": {
      "@type": "Organization",
      "name": "The Orbit Tech",
      "url": "https://www.theorbittech.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "The Orbit Tech",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.theorbittech.com/images/orbit-tech-logo.webp"
      }
    },
    "category": category,
    "keywords": keywords.join(', '),
    "inLanguage": "en-US",
    "isFamilyFriendly": true,
    ...(transcript && {
      "transcript": {
        "@type": "MediaObject",
        "encodingFormat": "text/plain",
        "text": transcript
      }
    }),
    "about": {
      "@type": "Thing",
      "name": "Satellite Internet Installation",
      "description": "Professional satellite internet installation services"
    },
    "mainEntity": {
      "@type": "Thing",
      "name": "Starlink Installation Process"
    },
    "license": "https://www.theorbittech.com/terms-of-service",
    "copyrightHolder": {
      "@type": "Organization",
      "name": "The Orbit Tech"
    },
    "potentialAction": {
      "@type": "ViewAction",
      "target": videoUrl
    }
  };

  useSchemaRegistration('video', schemaData);

  return null; // Schema only component
};

interface CourseSchemaProps {
  courseName: string;
  description: string;
  provider: string;
  courseUrl: string;
  image: string;
  courseMode: 'online' | 'blended' | 'onsite';
  lessons: {
    name: string;
    description: string;
    duration: string;
    position: number;
  }[];
  estimatedDuration: string; // ISO 8601 duration
  skillLevel: 'Beginner' | 'Intermediate' | 'Advanced';
  prerequisites?: string[];
  learningOutcomes: string[];
}

export const CourseSchema: React.FC<CourseSchemaProps> = ({
  courseName,
  description,
  provider,
  courseUrl,
  image,
  courseMode,
  lessons,
  estimatedDuration,
  skillLevel,
  prerequisites = [],
  learningOutcomes
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${courseUrl}#course`,
    "name": courseName,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": provider,
      "url": "https://www.theorbittech.com"
    },
    "image": {
      "@type": "ImageObject",
      "url": image,
      "caption": `${courseName} course materials`,
      "license": "https://www.theorbittech.com/terms-of-service"
    },
    "url": courseUrl,
    "courseMode": courseMode,
    "educationalLevel": skillLevel,
    "timeRequired": estimatedDuration,
    "inLanguage": "en-US",
    "about": {
      "@type": "Thing",
      "name": "Satellite Internet Technology",
      "description": "Comprehensive training on satellite internet installation and maintenance"
    },
    "teaches": learningOutcomes.join(', '),
    "coursePrerequisites": prerequisites.length > 0 ? prerequisites.join(', ') : undefined,
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": courseMode,
      "instructor": {
        "@type": "Organization",
        "name": "The Orbit Tech Certified Instructors"
      },
      "courseSchedule": {
        "@type": "Schedule",
        "repeatFrequency": "Weekly",
        "startDate": new Date().toISOString()
      }
    },
    "syllabusSections": lessons.map(lesson => ({
      "@type": "Syllabus",
      "name": lesson.name,
      "description": lesson.description,
      "timeRequired": lesson.duration,
      "position": lesson.position
    })),
    "educationalCredentialAwarded": `${courseName} Completion Certificate`,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 4.8,
      "reviewCount": 127,
      "bestRating": 5,
      "worstRating": 1
    },
    "offers": {
      "@type": "Offer",
      "price": 0,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "category": "Educational Course"
    }
  };

  useSchemaRegistration('course', schemaData);

  return null; // Schema only component
};

interface EventSchemaProps {
  eventName: string;
  description: string;
  startDate: Date;
  endDate: Date;
  eventType: 'consultation' | 'workshop' | 'webinar' | 'installation';
  location: {
    type: 'online' | 'physical';
    address?: {
      streetAddress: string;
      city: string;
      state: string;
      postalCode: string;
    };
    url?: string; // For online events
  };
  organizer: string;
  offers?: {
    price: number;
    currency: string;
    availability: string;
  };
  attendeeCapacity?: number;
  eventStatus: 'scheduled' | 'cancelled' | 'rescheduled' | 'postponed';
}

export const EventSchema: React.FC<EventSchemaProps> = ({
  eventName,
  description,
  startDate,
  endDate,
  eventType,
  location,
  organizer,
  offers,
  attendeeCapacity,
  eventStatus
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "@id": `https://www.theorbittech.com/events/${eventName.toLowerCase().replace(/\s+/g, '-')}#event`,
    "name": eventName,
    "description": description,
    "startDate": startDate.toISOString(),
    "endDate": endDate.toISOString(),
    "eventStatus": `https://schema.org/Event${eventStatus.charAt(0).toUpperCase() + eventStatus.slice(1)}`,
    "eventAttendanceMode": location.type === 'online' 
      ? "https://schema.org/OnlineEventAttendanceMode"
      : "https://schema.org/OfflineEventAttendanceMode",
    "location": location.type === 'online' 
      ? {
          "@type": "VirtualLocation",
          "url": location.url || "https://www.theorbittech.com/consultation"
        }
      : {
          "@type": "Place",
          "name": "The Orbit Tech Service Location",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": location.address?.streetAddress,
            "addressLocality": location.address?.city,
            "addressRegion": location.address?.state,
            "postalCode": location.address?.postalCode,
            "addressCountry": "US"
          }
        },
    "organizer": {
      "@type": "Organization",
      "name": organizer,
      "url": "https://www.theorbittech.com"
    },
    "performer": {
      "@type": "Organization",
      "name": "The Orbit Tech Certified Technicians"
    },
    ...(offers && {
      "offers": {
        "@type": "Offer",
        "price": offers.price,
        "priceCurrency": offers.currency,
        "availability": offers.availability,
        "url": "https://www.theorbittech.com/contact",
        "validFrom": new Date().toISOString()
      }
    }),
    ...(attendeeCapacity && {
      "maximumAttendeeCapacity": attendeeCapacity
    }),
    "about": {
      "@type": "Thing",
      "name": "Satellite Internet Consultation",
      "description": "Professional consultation for satellite internet installation"
    },
    "category": eventType === 'consultation' ? 'Business Consultation' : 'Educational Workshop',
    "inLanguage": "en-US",
    "isAccessibleForFree": offers?.price === 0,
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.theorbittech.com/contact",
        "inLanguage": "en-US"
      },
      "result": {
        "@type": "Reservation",
        "name": `${eventName} Reservation`
      }
    }
  };

  useSchemaRegistration('event', schemaData);

  return null; // Schema only component
};

// Blog Article Schema for content authority
interface BlogArticleSchemaProps {
  title: string;
  description: string;
  content: string;
  author: string;
  publishDate: Date;
  lastModified: Date;
  image: string;
  category: string;
  tags: string[];
  readingTime: string; // e.g., "PT5M" for 5 minutes
  wordCount: number;
  articleUrl: string;
}

export const BlogArticleSchema: React.FC<BlogArticleSchemaProps> = ({
  title,
  description,
  content,
  author,
  publishDate,
  lastModified,
  image,
  category,
  tags,
  readingTime,
  wordCount,
  articleUrl
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${articleUrl}#article`,
    "headline": title,
    "description": description,
    "articleBody": content,
    "author": {
      "@type": "Person",
      "name": author,
      "jobTitle": "Satellite Internet Installation Expert",
      "worksFor": {
        "@type": "Organization",
        "name": "The Orbit Tech"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "The Orbit Tech",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.theorbittech.com/images/orbit-tech-logo.webp"
      }
    },
    "datePublished": publishDate.toISOString(),
    "dateModified": lastModified.toISOString(),
    "image": {
      "@type": "ImageObject",
      "url": image,
      "width": 1200,
      "height": 800,
      "caption": title,
      "license": "https://www.theorbittech.com/terms-of-service",
      "copyrightHolder": {
        "@type": "Organization",
        "name": "The Orbit Tech"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": articleUrl
    },
    "about": {
      "@type": "Thing",
      "name": "Satellite Internet Technology"
    },
    "keywords": tags.join(', '),
    "articleSection": category,
    "wordCount": wordCount,
    "timeRequired": readingTime,
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "copyrightYear": publishDate.getFullYear(),
    "copyrightHolder": {
      "@type": "Organization",
      "name": "The Orbit Tech"
    },
    "license": "https://www.theorbittech.com/terms-of-service",
    "potentialAction": {
      "@type": "ReadAction",
      "target": articleUrl
    }
  };

  useSchemaRegistration('blogarticle', schemaData);

  return null; // Schema only component
};
