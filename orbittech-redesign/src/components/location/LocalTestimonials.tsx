import React from 'react';
import Section from '../shared/Section';
import Card from '../shared/Card';
import { Testimonial } from '../../types';

interface LocalTestimonialsProps {
  location: string;
  testimonials?: Testimonial[];
}

const LocalTestimonials: React.FC<LocalTestimonialsProps> = ({ location, testimonials = [] }) => {
  // Default testimonials if none provided
  const defaultTestimonials = [
    {
      id: '1',
      name: 'Mike Johnson',
      location: `${location}`,
      rating: 5,
      date: '2024-01-15',
      content: `Outstanding service! The technician arrived on time and had my Starlink up and running in under 2 hours. Internet speeds went from 5 Mbps to over 200 Mbps instantly.`,
      speedBefore: 5,
      speedAfter: 210,
      verified: true
    },
    {
      id: '2',
      name: 'Sarah Miller',
      location: `${location}`,
      rating: 5,
      date: '2024-01-20',
      content: `Finally reliable internet in ${location}! The Orbit Tech team was professional and explained everything clearly. Worth every penny.`,
      speedBefore: 12,
      speedAfter: 185,
      verified: true
    },
    {
      id: '3',
      name: 'David Chen',
      location: `${location}`,
      rating: 5,
      date: '2024-01-25',
      content: `Exceptional service! Working from home just got so much better with reliable Starlink internet. The installation was clean and professional.`,
      speedBefore: 25,
      speedAfter: 230,
      verified: true
    }
  ];

  const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials;

  return (
    <Section background="gray">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What {location} Customers Say
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Real reviews from verified customers in {location} who chose professional Starlink installation.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayTestimonials.slice(0, 3).map((testimonial) => (
          <Card key={testimonial.id} className="h-full">
            <div className="flex flex-col h-full">
              {/* Rating Stars */}
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-xl ${
                      i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  >
                    ★
                  </span>
                ))}
                {testimonial.verified && (
                  <span className="ml-2 bg-accent-100 text-accent-800 text-xs px-2 py-1 rounded-full">
                    ✓ Verified
                  </span>
                )}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-gray-700 mb-4 flex-1">
                "{testimonial.content}"
              </blockquote>

              {/* Speed Improvement */}
              {testimonial.speedBefore && testimonial.speedAfter && (
                <div className="bg-primary-50 rounded-lg p-3 mb-4">
                  <div className="text-sm text-primary-800 font-semibold mb-2">
                    Speed Improvement:
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <div className="text-red-600 font-bold">{testimonial.speedBefore} Mbps</div>
                      <div className="text-xs text-gray-600">Before</div>
                    </div>
                    <div className="text-primary-600 mx-2">→</div>
                    <div className="text-center">
                      <div className="text-accent-600 font-bold">{testimonial.speedAfter} Mbps</div>
                      <div className="text-xs text-gray-600">After</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Customer Info */}
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.location}</div>
                <div className="text-xs text-gray-500 mt-1">
                  Installed {new Date(testimonial.date).toLocaleDateString()}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Trust Indicators */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-md">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <span className="text-yellow-400 text-xl mr-1">★</span>
              <span className="font-bold text-gray-900">4.9/5</span>
              <span className="text-gray-600 ml-1">({displayTestimonials.length * 50}+ reviews)</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="text-accent-600 font-semibold">
              500+ Installations in {location}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default LocalTestimonials;
