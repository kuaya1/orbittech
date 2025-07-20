import './style.css'

// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuButton = document.querySelector('[data-mobile-menu-button]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Check availability form
  const availabilityForm = document.querySelector('#availability-form');
  if (availabilityForm) {
    availabilityForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const zipCode = document.querySelector('#zip-code').value;
      if (zipCode) {
        alert(`Checking availability for ${zipCode}... We'll contact you within 24 hours!`);
      }
    });
  }

  // Contact form
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    });
  }

  // FAQ accordion
  document.querySelectorAll('[data-faq-button]').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      const icon = button.querySelector('[data-faq-icon]');
      
      content.classList.toggle('hidden');
      if (icon) {
        icon.style.transform = content.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
      }
    });
  });
});

// Set up the main content
document.querySelector('#app').innerHTML = `
  <!-- Navigation -->
  <nav class="bg-white shadow-lg fixed w-full z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0 flex items-center">
            <img src="./orbittec.png" alt="Orbittec Logo" class="h-10 w-auto mr-3">
            <span class="text-xl font-bold text-gray-900">Orbittec</span>
          </div>
        </div>
        <div class="hidden md:flex items-center space-x-8">
          <a href="#home" class="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
          <a href="#availability" class="text-gray-700 hover:text-blue-600 transition-colors">Check Availability</a>
          <a href="#services" class="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
          <a href="#jobs" class="text-gray-700 hover:text-blue-600 transition-colors">Careers</a>
          <a href="#faq" class="text-gray-700 hover:text-blue-600 transition-colors">FAQ</a>
          <a href="#contact" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Contact</a>
        </div>
        <div class="md:hidden flex items-center">
          <button data-mobile-menu-button class="text-gray-700 hover:text-blue-600">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div data-mobile-menu class="hidden md:hidden bg-white border-t">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a href="#home" class="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
        <a href="#availability" class="block px-3 py-2 text-gray-700 hover:text-blue-600">Check Availability</a>
        <a href="#services" class="block px-3 py-2 text-gray-700 hover:text-blue-600">Services</a>
        <a href="#jobs" class="block px-3 py-2 text-gray-700 hover:text-blue-600">Careers</a>
        <a href="#faq" class="block px-3 py-2 text-gray-700 hover:text-blue-600">FAQ</a>
        <a href="#contact" class="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section id="home" class="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen flex items-center">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Professional <span class="text-blue-600">Starlink</span> Installation Services
          </h1>
          <p class="text-xl text-gray-600 mb-8">
            Get high-speed satellite internet anywhere with our certified technicians. Professional installation, setup, and ongoing support for your Starlink system.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="#availability" class="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors text-center">
              Check Availability
            </a>
            <a href="#contact" class="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-center">
              Get Quote
            </a>
          </div>
        </div>
        <div class="relative">
          <div class="bg-white rounded-2xl shadow-2xl p-8">
            <div class="text-center mb-6">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900">Why Choose Us?</h3>
            </div>
            <div class="space-y-4">
              <div class="flex items-center">
                <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span class="text-gray-700">Certified Starlink Installers</span>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span class="text-gray-700">Same-Day Installation Available</span>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span class="text-gray-700">2-Year Installation Warranty</span>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span class="text-gray-700">24/7 Technical Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Check Availability Section -->
  <section id="availability" class="py-20 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Check Starlink Availability</h2>
      <p class="text-xl text-gray-600 mb-12">Enter your ZIP code to see if Starlink service is available in your area</p>
      
      <form id="availability-form" class="max-w-md mx-auto">
        <div class="flex gap-4">
          <input 
            type="text" 
            id="zip-code"
            placeholder="Enter ZIP Code" 
            class="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          >
          <button type="submit" class="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
            Check
          </button>
        </div>
      </form>
      
      <div class="mt-12 grid md:grid-cols-3 gap-8">
        <div class="text-center">
          <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Available Now</h3>
          <p class="text-gray-600">Service ready for immediate installation</p>
        </div>
        <div class="text-center">
          <div class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Coming Soon</h3>
          <p class="text-gray-600">Expected availability within 6 months</p>
        </div>
        <div class="text-center">
          <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Not Available</h3>
          <p class="text-gray-600">Service not yet planned for this area</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section id="services" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Installation Services</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          From initial consultation to ongoing support, we provide comprehensive Starlink installation services
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-4">Residential Installation</h3>
          <p class="text-gray-600 mb-6">Professional home installation with optimal dish placement and indoor equipment setup.</p>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex items-center"><span class="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>Site survey and planning</li>
            <li class="flex items-center"><span class="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>Dish mounting and alignment</li>
            <li class="flex items-center"><span class="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>Indoor equipment setup</li>
            <li class="flex items-center"><span class="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>Network configuration</li>
          </ul>
        </div>
        
        <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-4">Commercial Installation</h3>
          <p class="text-gray-600 mb-6">Enterprise-grade installations for businesses, farms, and commercial properties.</p>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex items-center"><span class="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>Multi-building coverage</li>
            <li class="flex items-center"><span class="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>Redundant connections</li>
            <li class="flex items-center"><span class="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>Business-grade networking</li>
            <li class="flex items-center"><span class="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>Priority support</li>
          </ul>
        </div>
        
        <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-4">Maintenance & Support</h3>
          <p class="text-gray-600 mb-6">Ongoing maintenance, troubleshooting, and system optimization services.</p>
          <ul class="space-y-2 text-sm text-gray-600">
            <li class="flex items-center"><span class="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>Regular system checks</li>
            <li class="flex items-center"><span class="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>Performance optimization</li>
            <li class="flex items-center"><span class="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>24/7 technical support</li>
            <li class="flex items-center"><span class="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>Emergency repairs</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Get Your Free Quote</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Ready to get started? Contact us today for a free consultation and quote
        </p>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-12">
        <div>
          <form id="contact-form" class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input type="text" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input type="text" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required>
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input type="tel" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
              <select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required>
                <option value="">Select a service</option>
                <option value="residential">Residential Installation</option>
                <option value="commercial">Commercial Installation</option>
                <option value="maintenance">Maintenance & Support</option>
                <option value="consultation">Free Consultation</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Tell us about your project..."></textarea>
            </div>
            <button type="submit" class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Send Message
            </button>
          </form>
        </div>
        
        <div class="space-y-8">
          <div>
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            <div class="space-y-4">
              <div class="flex items-center">
                <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <p class="font-semibold text-gray-900">Phone</p>
                  <p class="text-gray-600">(555) 123-STAR</p>
                </div>
              </div>
              
              <div class="flex items-center">
                <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <p class="font-semibold text-gray-900">Email</p>
                  <p class="text-gray-600">contact@theorbittech.com</p>
                </div>
              </div>
              
              <div class="flex items-center">
                <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <p class="font-semibold text-gray-900">Service Area</p>
                  <p class="text-gray-600">Nationwide Coverage</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="bg-blue-50 rounded-xl p-6">
            <h4 class="text-lg font-semibold text-gray-900 mb-4">Why Choose StarLink Pro?</h4>
            <ul class="space-y-3 text-sm text-gray-600">
              <li class="flex items-center">
                <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Licensed and insured technicians
              </li>
              <li class="flex items-center">
                <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                2-year installation warranty
              </li>
              <li class="flex items-center">
                <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Same-day service available
              </li>
              <li class="flex items-center">
                <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                24/7 customer support
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Featured Jobs Section -->
  <section id="jobs" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Join Our Team</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          We're looking for skilled technicians to join our growing team of Starlink installation professionals
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div class="flex items-center justify-between mb-4">
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Full-time</span>
            <span class="text-sm text-gray-500">Remote + Travel</span>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Senior Installation Technician</h3>
          <p class="text-gray-600 mb-4">Lead complex installations and mentor junior technicians. 5+ years experience required.</p>
          <div class="space-y-2 text-sm text-gray-600 mb-6">
            <div class="flex items-center">
              <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
              </svg>
              $65,000 - $85,000/year
            </div>
            <div class="flex items-center">
              <svg class="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              </svg>
              Multiple locations
            </div>
          </div>
          <button class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Apply Now
          </button>
        </div>
        
        <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div class="flex items-center justify-between mb-4">
            <span class="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">Full-time</span>
            <span class="text-sm text-gray-500">Field Work</span>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Installation Technician</h3>
          <p class="text-gray-600 mb-4">Perform residential and commercial Starlink installations. Entry level welcome.</p>
          <div class="space-y-2 text-sm text-gray-600 mb-6">
            <div class="flex items-center">
              <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
              </svg>
              $45,000 - $60,000/year
            </div>
            <div class="flex items-center">
              <svg class="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              </svg>
              Regional coverage
            </div>
          </div>
          <button class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Apply Now
          </button>
        </div>
        
        <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div class="flex items-center justify-between mb-4">
            <span class="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded">Remote</span>
            <span class="text-sm text-gray-500">Customer Support</span>
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Technical Support Specialist</h3>
          <p class="text-gray-600 mb-4">Provide technical support to customers via phone, chat, and email.</p>
          <div class="space-y-2 text-sm text-gray-600 mb-6">
            <div class="flex items-center">
              <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
              </svg>
              $40,000 - $55,000/year
            </div>
            <div class="flex items-center">
              <svg class="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
              </svg>
              Work from home
            </div>
          </div>
          <button class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Apply Now
          </button>
        </div>
      </div>
      
      <div class="text-center mt-12">
        <p class="text-gray-600 mb-4">Don't see the right position? We're always looking for talented people.</p>
        <a href="#contact" class="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
          Send us your resume
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section id="faq" class="py-20 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <p class="text-xl text-gray-600">
          Get answers to common questions about Starlink installation and our services
        </p>
      </div>
      
      <div class="space-y-4">
        <div class="border border-gray-200 rounded-lg">
          <button data-faq-button class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
            <span class="font-semibold text-gray-900">How long does a typical Starlink installation take?</span>
            <svg data-faq-icon class="w-5 h-5 text-gray-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div class="hidden px-6 pb-4">
            <p class="text-gray-600">Most residential installations take 2-4 hours, including site survey, dish mounting, cable routing, and equipment setup. Commercial installations may take longer depending on complexity.</p>
          </div>
        </div>
        
        <div class="border border-gray-200 rounded-lg">
          <button data-faq-button class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
            <span class="font-semibold text-gray-900">Do I need to purchase the Starlink equipment separately?</span>
            <svg data-faq-icon class="w-5 h-5 text-gray-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div class="hidden px-6 pb-4">
            <p class="text-gray-600">Yes, you'll need to order your Starlink kit directly from SpaceX. We handle the professional installation of your equipment once it arrives.</p>
          </div>
        </div>
        
        <div class="border border-gray-200 rounded-lg">
          <button data-faq-button class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
            <span class="font-semibold text-gray-900">What's included in the installation service?</span>
            <svg data-faq-icon class="w-5 h-5 text-gray-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div class="hidden px-6 pb-4">
            <p class="text-gray-600">Our installation includes site survey, optimal dish placement, secure mounting, cable routing, indoor equipment setup, network configuration, and testing to ensure optimal performance.</p>
          </div>
        </div>
        
        <div class="border border-gray-200 rounded-lg">
          <button data-faq-button class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
            <span class="font-semibold text-gray-900">Do you offer warranty on installations?</span>
            <svg data-faq-icon class="w-5 h-5 text-gray-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div class="hidden px-6 pb-4">
            <p class="text-gray-600">Yes, we provide a 2-year warranty on all installation work, including mounting hardware and cable installation. Equipment warranty is handled directly by SpaceX.</p>
          </div>
        </div>
        
        <div class="border border-gray-200 rounded-lg">
          <button data-faq-button class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
            <span class="font-semibold text-gray-900">Can you install Starlink in any weather?</span>
            <svg data-faq-icon class="w-5 h-5 text-gray-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div class="hidden px-6 pb-4">
            <p class="text-gray-600">We can install in most weather conditions, but may reschedule during severe weather for safety reasons. Indoor setup can proceed regardless of weather conditions.</p>
          </div>
        </div>
        
        <div class="border border-gray-200 rounded-lg">
          <button data-faq-button class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
            <span class="font-semibold text-gray-900">What if I need to relocate my Starlink dish?</span>
            <svg data-faq-icon class="w-5 h-5 text-gray-500 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div class="hidden px-6 pb-4">
            <p class="text-gray-600">We offer relocation services for existing installations. This includes dismounting, relocating, and reinstalling your dish at the new location with proper alignment and testing.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-gray-900 text-white py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-4 gap-8">
        <div class="col-span-2">
          <div class="flex items-center mb-4">
            <img src="./orbittec.png" alt="Orbittec Logo" class="h-8 w-auto mr-3">
            <span class="text-xl font-bold">Orbittec</span>
          </div>
          <p class="text-gray-400 mb-6 max-w-md">
            Professional Starlink installation services nationwide. Get connected to high-speed satellite internet with our certified technicians.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Services</h3>
          <ul class="space-y-2 text-gray-400">
            <li><a href="#services" class="hover:text-white transition-colors">Residential Installation</a></li>
            <li><a href="#services" class="hover:text-white transition-colors">Commercial Installation</a></li>
            <li><a href="#services" class="hover:text-white transition-colors">Maintenance & Support</a></li>
            <li><a href="#availability" class="hover:text-white transition-colors">Check Availability</a></li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Company</h3>
          <ul class="space-y-2 text-gray-400">
            <li><a href="#jobs" class="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#contact" class="hover:text-white transition-colors">Contact Us</a></li>
            <li><a href="#faq" class="hover:text-white transition-colors">FAQ</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      
      <div class="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-400 text-sm">
          © 2024 Orbittec. All rights reserved.
        </p>
        <p class="text-gray-400 text-sm mt-4 md:mt-0">
          Licensed, Bonded & Insured | Nationwide Service
        </p>
      </div>
    </div>
  </footer>
`;
