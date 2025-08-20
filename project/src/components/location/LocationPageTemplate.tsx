import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import type { LocationData } from '@/types/location';
import { SchemaInjector } from '@/components/SEO';

interface LocationPageTemplateProps extends LocationData {
  description?: string;
  metaImage?: string;
}

export const LocationPageTemplate: React.FC<LocationPageTemplateProps> = ({
  county,
  state,
  cities,
  population,
  avgSpeed,
  installationCount,
  testimonials,
  competitors,
  faqs,
  landmarks,
  speedTests,
  demographics,
  description,
  metaImage
}) => {
  const formatNumber = (num: number) => new Intl.NumberFormat().format(num);
  const cityNames = cities.map(city => city.name).join(', ');
  const zipCodes = cities.flatMap(city => city.zipCodes);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const pageTitle = `Starlink Installation ${county} | Professional Service`;
  const metaDescription = description || 
    `Professional Starlink installation in ${county}, ${state}. Serving ${cityNames}. ` +
    `${formatNumber(installationCount)}+ successful installations with ${avgSpeed}Mbps average speeds. ` +
    `Local, expert installation service near you.`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        {metaImage && <meta property="og:image" content={metaImage} />}
        <link rel="canonical" href={`https://theorbittech.com/locations/${county.toLowerCase().replace(' ', '-')}`} />
      </Helmet>

      <SchemaInjector
        pageType="location"
        location={{
          county,
          state,
          zipCodes
        }}
        faqs={faqs}
        reviews={{
          rating: testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length,
          reviewCount: testimonials.length,
          reviews: testimonials.map(t => ({
            author: t.name,
            rating: t.rating,
            text: t.text,
            date: t.date
          }))
        }}
      />

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-bold mb-6">
              Starlink Installation in {county}
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-8">
              Professional Satellite Internet Installation Serving {cityNames}
            </motion.p>
            <motion.div variants={fadeInUp}>
              <a
                href="#get-quote"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg inline-block"
              >
                Get Your Free Quote Today
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-3xl font-bold mb-2">{formatNumber(installationCount)}+</h3>
              <p className="text-gray-600">Successful Installations</p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-3xl font-bold mb-2">{avgSpeed}Mbps</h3>
              <p className="text-gray-600">Average Download Speed</p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-3xl font-bold mb-2">24hr</h3>
              <p className="text-gray-600">Response Time</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Service Area in {county}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Cities We Serve</h3>
              <ul className="grid grid-cols-2 gap-4">
                {cities.map(city => (
                  <li key={city.name} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {city.name}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Local Landmarks</h3>
              <ul className="grid grid-cols-1 gap-2">
                {landmarks.map(landmark => (
                  <li key={landmark} className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {landmark}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Speed Test Results */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Local Speed Test Results</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Download</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Upload</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Latency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {speedTests.map((test, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">{test.location}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{test.downloadSpeed} Mbps</td>
                    <td className="px-6 py-4 whitespace-nowrap">{test.uploadSpeed} Mbps</td>
                    <td className="px-6 py-4 whitespace-nowrap">{test.latency} ms</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Local Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="flex-1">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.city}</p>
                  </div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <div className="text-sm text-gray-500">
                  {new Date(testimonial.date).toLocaleDateString()}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mb-6"
              >
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Join {formatNumber(installationCount)}+ satisfied customers in {county}
          </p>
          <a
            href="#get-quote"
            className="bg-white text-blue-900 hover:bg-blue-100 font-bold py-4 px-8 rounded-lg text-lg inline-block"
          >
            Schedule Your Installation
          </a>
        </div>
      </section>
    </>
  );
};

export default LocationPageTemplate;
