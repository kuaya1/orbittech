import { 
  Satellite, 
  Wifi, 
  Shield, 
  Clock, 
  CheckCircle,
  ChevronDown,
  Phone,
  Mail,
  ArrowRight,
  Camera,
  XCircle
} from 'lucide-react';

const ConstructionConnectLanding = () => {
  const faqs = [
    {
      question: "How quickly can you get our construction site online?",
      answer: "We can typically perform a full installation and have your site online within 24-48 hours of your request, assuming you have the Starlink kit on hand. Our rapid deployment team specializes in immediate site connectivity to prevent project delays."
    },
    {
      question: "How does this work with our existing IT infrastructure?",
      answer: "Our system can act as your primary internet connection or as a failover. We integrate directly with your existing network or build one from scratch, including managed switches, enterprise routers, and commercial-grade access points configured to your specifications."
    },
    {
      question: "Is the connection reliable enough for video calls and transferring large files?",
      answer: "Absolutely. We guarantee speeds sufficient for multiple HD video calls, transferring large blueprints (BIM/CAD files), and running all your cloud-based software without interruption. Typical speeds range from 150-250 Mbps with sub-50ms latency."
    },
    {
      question: "What is the real-world range of your job site Wi-Fi?",
      answer: "We design a custom mesh layout for each site. Our systems can cover anything from a small lot to multi-acre industrial sites with multiple buildings, ensuring strong signals everywhere you need them - from the site trailer to the top floor of construction."
    },
    {
      question: "Can we move the system to a new job site once this project is complete?",
      answer: "Yes. The entire system is designed for deployment and redeployment. We offer a service to professionally decommission, move, and reinstall your connectivity and surveillance at your next project site, ensuring zero downtime between projects."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Schema injection for SEO */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      <style>
        {`
        @keyframes kenburns-effect {
          0% {
            transform: scale(1) translate(0, 0);
          }
          100% {
            transform: scale(1.1) translate(-2%, 2%);
          }
        }
        
        .animate-kenburns {
          animation: kenburns-effect 20s ease-out forwards;
        }
        `}
      </style>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A192F] via-[#0A192F]/95 to-[#0A192F]/90 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/Whisk_e1f97057a5.jpg')] bg-cover bg-center opacity-40 animate-kenburns"></div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Turnkey Connectivity for the<br/>Modern Job Site
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            From foundation to finish, The Orbit Tech delivers reliable Starlink internet, 
            site-wide Wi-Fi mesh, and 24/7 surveillance to keep your DMV construction 
            project on schedule and on budget.
          </h2>
          
          <button className="bg-[#FFC107] text-[#0A192F] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#FFD54F] transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            Get a Free Site Assessment
          </button>
          
          <p className="mt-8 text-gray-300 text-sm">
            Your Trusted Partner for Projects in Virginia, Maryland, and DC
          </p>
        </div>
      </section>

      {/* Trust Bar Component */}
      <section className="bg-[#0A192F] py-8">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-center text-lg font-semibold text-gray-400 mb-6">
            PROVIDING CRITICAL CONNECTIVITY FOR LEADING CONTRACTORS IN THE DMV
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
            {/* Replace with your actual logo files */}
            <div className="flex justify-center"><img className="h-10 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" src="/logos/turner-construction-logo.svg" alt="Turner Construction"/></div>
            <div className="flex justify-center"><img className="h-10 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" src="/logos/clark-construction-logo.svg" alt="Clark Construction"/></div>
            <div className="flex justify-center"><img className="h-10 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" src="/logos/whiting-turner-logo.svg" alt="Whiting-Turner"/></div>
            <div className="flex justify-center"><img className="h-10 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" src="/logos/balfour-beatty-logo.svg" alt="Balfour Beatty"/></div>
            <div className="flex justify-center"><img className="h-10 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" src="/logos/abc-metro-logo.svg" alt="ABC Metro Washington"/></div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Problem Column */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold mb-4">THE PROBLEM</div>
              <h3 className="text-3xl lg:text-4xl font-bold text-[#212529]">Disconnected Sites Cause Costly Delays</h3>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-start"><XCircle className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Weeks of waiting</strong> for traditional ISPs means weeks of lost productivity and project delays from day one.</span></li>
                <li className="flex items-start"><XCircle className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Poor on-site communication</strong> leads to errors when your superintendent can't video conference with architects or access plans instantly.</span></li>
                <li className="flex items-start"><XCircle className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" /><span><strong>A dark, unmonitored site</strong> is a massive security risk, vulnerable to theft of materials and equipment.</span></li>
              </ul>
              <p className="font-semibold text-[#0A192F] text-lg">These aren't just inconveniences; they are direct threats to your timeline and profitability.</p>
            </div>
            {/* Solution Column */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">THE SOLUTION</div>
              <h3 className="text-3xl lg:text-4xl font-bold text-[#212529]">One Call Solves It All</h3>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p><span className="font-semibold text-[#0A192F]">Construction Connect</span> by The Orbit Tech is an all-in-one solution designed specifically for construction sites.</p>
                <p>We deploy high-speed satellite internet in hours, not weeks. Your site goes from offline to online before your next safety meeting.</p>
                <p>We blanket your entire site with robust Wi-Fi for all your devices and teams. From the trailer to the top floor, everyone stays connected.</p>
                <p>We secure your assets with HD surveillance you can monitor from anywhere. Protect equipment, monitor progress, and maintain site security 24/7.</p>
                <p className="font-semibold text-[#0A192F]">It's the connectivity infrastructure your modern construction project demands.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0A192F] mb-4">Complete Connectivity Solution</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Everything your job site needs to stay connected, productive, and secure</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F8F9FA] rounded-xl p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#FFC107] w-16 h-16 rounded-lg flex items-center justify-center mb-6"><Satellite className="w-8 h-8 text-[#0A192F]" /></div>
              <h3 className="text-2xl font-bold text-[#0A192F] mb-4">Job Site Internet Backbone</h3>
              <p className="text-gray-700 leading-relaxed">High-speed, low-latency internet powered by Starlink. Deployed in under 4 hours. Perfect for running BIM software, daily reports, VoIP, and all cloud-based project management tools.</p>
              <div className="mt-6 flex items-center text-[#FFC107] font-semibold"><Clock className="w-5 h-5 mr-2" /><span>Setup in &lt; 24 hours</span></div>
            </div>
            <div className="bg-[#F8F9FA] rounded-xl p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#FFC107] w-16 h-16 rounded-lg flex items-center justify-center mb-6"><Wifi className="w-8 h-8 text-[#0A192F]" /></div>
              <h3 className="text-2xl font-bold text-[#0A192F] mb-4">Complete Wi-Fi Coverage</h3>
              <p className="text-gray-700 leading-relaxed">From the site trailer to the top floor, our commercial-grade mesh Wi-Fi systems provide seamless, reliable connectivity for every laptop, tablet, and smartphone on site. No more dead zones.</p>
              <div className="mt-6 flex items-center text-[#FFC107] font-semibold"><CheckCircle className="w-5 h-5 mr-2" /><span>Trailer-to-Trench Coverage</span></div>
            </div>
            <div className="bg-[#F8F9FA] rounded-xl p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-[#FFC107] w-16 h-16 rounded-lg flex items-center justify-center mb-6"><Camera className="w-8 h-8 text-[#0A192F]" /></div>
              <h3 className="text-2xl font-bold text-[#0A192F] mb-4">HD Security & Surveillance</h3>
              <p className="text-gray-700 leading-relaxed">Protect your assets and monitor progress with integrated IP camera systems. Live, recordable HD video feeds accessible from any device, anywhere. Deter theft and improve site safety.</p>
              <div className="mt-6 flex items-center text-[#FFC107] font-semibold"><Shield className="w-5 h-5 mr-2" /><span>Remote Access, Anywhere</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Proof Gallery with AI-Generated Images */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0A192F] mb-4">Built for the Real World</h2>
            <p className="text-xl text-gray-600">Professional installations designed to withstand job site conditions</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg group transform hover:-translate-y-2 transition-all duration-300">
              <div className="h-48 bg-gray-300 flex items-center justify-center overflow-hidden"><img src="/images/Gemini_Generated_Image_t7u8prt7u8prt7u8.png" alt="Storm-proof Starlink satellite installation on a commercial roof" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/></div>
              <div className="p-4"><p className="text-sm text-gray-700">Storm-proof satellite installation on a commercial building in Fairfax, VA.</p></div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg group transform hover:-translate-y-2 transition-all duration-300">
              <div className="h-48 bg-gray-300 flex items-center justify-center overflow-hidden"><img src="/images/Whisk_c8d18d14d2.jpg" alt="Ruggedized Wi-Fi access point on a construction site" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/></div>
              <div className="p-4"><p className="text-sm text-gray-700">Ruggedized Wi-Fi node providing coverage across a 5-acre site in Loudoun County.</p></div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg group transform hover:-translate-y-2 transition-all duration-300">
              <div className="h-48 bg-gray-300 flex items-center justify-center overflow-hidden"><img src="/images/Whisk_df20144b50.jpg" alt="24/7 HD surveillance camera protecting construction site materials" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/></div>
              <div className="p-4"><p className="text-sm text-gray-700">24/7 surveillance camera protecting equipment and materials.</p></div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg group transform hover:-translate-y-2 transition-all duration-300">
              <div className="h-48 bg-gray-300 flex items-center justify-center overflow-hidden"><img src="/images/Whisk_du2n2qxzu.jpg" alt="Professional network rack installation in a site office trailer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/></div>
              <div className="p-4"><p className="text-sm text-gray-700">The central nervous system: A clean and organized network rack in the site office.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0A192F] mb-4">Your Questions, Answered</h2>
            <p className="text-xl text-gray-600">Everything you need to know about Construction Connect</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-[#F8F9FA] rounded-lg">
                <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-gray-100 transition-colors">
                  <h3 className="text-lg font-semibold text-[#0A192F] pr-8">{faq.question}</h3>
                  <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-6 pb-6"><p className="text-gray-700 leading-relaxed">{faq.answer}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-[#0A192F]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Stop Waiting. Start Building.</h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">Don't let poor connectivity be the weak link in your project. Partner with the DMV's leading experts in job site technology solutions.</p>
          <button className="bg-[#FFC107] text-[#0A192F] px-10 py-5 rounded-lg font-bold text-xl hover:bg-[#FFD54F] transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center">Schedule Your Free Site Assessment & Quote<ArrowRight className="ml-3 w-6 h-6" /></button>
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center text-gray-400">
            <a href="tel:571-999-6915" className="flex items-center justify-center hover:text-[#FFC107] transition-colors"><Phone className="w-5 h-5 mr-2" /><span>(571) 999-6915</span></a>
            <a href="mailto:connect@theorbittech.com" className="flex items-center justify-center hover:text-[#FFC107] transition-colors"><Mail className="w-5 h-5 mr-2" /><span>connect@theorbittech.com</span></a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConstructionConnectLanding;
