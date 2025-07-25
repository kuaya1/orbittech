import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');

    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 py-16 px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Information Card */}
        <div className="bg-white/30 backdrop-blur-lg border border-white/50 rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
          <ul className="space-y-4">
            <li className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-gray-600" />
              <span className="text-gray-700">(571) 999-6915</span>
            </li>
            <li className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-gray-600" />
              <span className="text-gray-700">contact@theorbittech.com</span>
            </li>
            <li className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-gray-600" />
              <span className="text-gray-700">DC, Maryland, Virginia</span>
            </li>
            <li className="flex items-center space-x-4">
              <Clock className="w-6 h-6 text-gray-600" />
              <span className="text-gray-700">Mon - Fri: 9:00 AM - 5:00 PM</span>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="bg-white/30 backdrop-blur-lg border border-white/50 rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex items-center justify-center px-4 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                disabled={formStatus === 'loading'}
              >
                {formStatus === 'loading' ? 'Sending...' : 'Submit'}
                {formStatus === 'loading' ? <Send className="ml-2 w-4 h-4 animate-spin" /> : <Send className="ml-2 w-4 h-4" />}
              </button>
            </div>
            {formStatus === 'success' && (
              <p className="text-green-600 text-sm mt-2">Your message has been sent successfully!</p>
            )}
            {formStatus === 'error' && (
              <p className="text-red-600 text-sm mt-2">An error occurred. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
