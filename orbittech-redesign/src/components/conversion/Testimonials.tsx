import React from 'react';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

interface TestimonialsProps {
  variant?: 'featured' | 'compact' | 'carousel';
  limit?: number;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'John Miller',
    location: 'Fairfax, VA',
    rating: 5,
    text: 'Professional installation, great communication, and my Starlink is working perfectly! The team was punctual and cleaned up after themselves.',
    date: '2024-01-15'
  },
  {
    id: '2',
    name: 'Sarah Chen',
    location: 'Bethesda, MD',
    rating: 5,
    text: 'Finally have reliable internet at our rural property. The installation was seamless and the team explained everything clearly.',
    date: '2024-01-10'
  },
  {
    id: '3',
    name: 'Mike Rodriguez',
    location: 'Loudoun County, VA',
    rating: 5,
    text: 'Outstanding service from start to finish. They handled all the technical details and my speeds are amazing - 200+ Mbps consistently.',
    date: '2024-01-08'
  },
  {
    id: '4',
    name: 'Jennifer Walsh',
    location: 'Montgomery County, MD',
    rating: 5,
    text: 'Switched from slow DSL to Starlink. The installation team was knowledgeable and professional. Highly recommend!',
    date: '2024-01-05'
  }
];

const Testimonials: React.FC<TestimonialsProps> = ({ variant = 'featured', limit = 3 }) => {
  const displayTestimonials = testimonials.slice(0, limit);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-yellow-400 ${i < rating ? 'opacity-100' : 'opacity-30'}`}>
        ★
      </span>
    ));
  };

  if (variant === 'compact') {
    return (
      <div className="space-y-4">
        {displayTestimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white rounded-lg p-4 border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <div className="text-sm font-semibold text-gray-800">{testimonial.name}</div>
                <div className="text-xs text-gray-500">{testimonial.location}</div>
              </div>
              <div className="flex text-sm">{renderStars(testimonial.rating)}</div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{testimonial.text}</p>
          </div>
        ))}
      </div>
    );
  }

  if (variant === 'carousel') {
    return (
      <div className="relative">
        <div className="flex space-x-6 overflow-x-auto pb-4">
          {displayTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex-shrink-0 w-80 bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="flex text-lg mb-3">{renderStars(testimonial.rating)}</div>
              <p className="text-gray-700 mb-4 leading-relaxed">"{testimonial.text}"</p>
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-800">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Featured variant (default)
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayTestimonials.map((testimonial) => (
        <div key={testimonial.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex text-lg mb-4">{renderStars(testimonial.rating)}</div>
          <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
          <div className="border-t pt-4">
            <div className="font-semibold text-gray-800">{testimonial.name}</div>
            <div className="text-sm text-gray-500">{testimonial.location}</div>
            <div className="text-xs text-gray-400 mt-1">{new Date(testimonial.date).toLocaleDateString()}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
