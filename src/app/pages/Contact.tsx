import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const offices = [
   {
    city: 'USA',
    address: '20008 Champion Forest Dr, STE',
    state: '403, Spring, TX 77379 USA',
    country: 'United States',
    phone: '+1 (555) 123-4567',
    email: 'mhktechinc.com'
  },
  {
    city: 'INDIA',
    address: 'Road No 36 & 37 Beside Madhapur Metrostation Jubilee Hills',
    state: ' Hyderabad, Telangana, 500033 India' ,
    country: 'India',
    phone: '+1 (555) 234-5678',
    email: 'mhktechinc.com'
  },
  {
    city: 'Canada',
    address: '132 Daylily Lane, Kitchener',
    state: 'Ontario, Canada, N2R 0L7',
    country: 'Canada',
    phone: '+44 20 7123 4567',
    email: 'mhktechinc.com'
  }
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Mail className="w-16 h-16 mx-auto mb-6" />
            <h1 className="mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Let's discuss how we can help transform your business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-gray-900">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm mb-2 text-gray-700">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="Acme Inc"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm mb-2 text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm mb-2 text-gray-700">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="data-engineering">Data Engineering</option>
                    <option value="ai-solutions">AI Solutions</option>
                    <option value="cloud-solutions">Cloud Solutions</option>
                    <option value="it-solutions">IT Solutions</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-2 text-gray-700">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitted ? (
                    <>
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-gray-900">Get In Touch</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Have a question or want to work together? We'd love to hear from you. Our team is ready to help you transform your business through innovative technology solutions.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-gray-900">Email</h3>
                    <a href="mailto:info@mhktech.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                      info@mhktech.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-gray-900">Phone</h3>
                    <a href="tel:+15551234567" className="text-gray-600 hover:text-blue-600 transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-gray-900">Headquarters</h3>
                    <p className="text-gray-600">
                      123 Market Street, Suite 500<br />
                      San Francisco, CA 94103<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-gray-900">Our Locations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We have offices around the world to serve you better
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((location, index) => (
              <motion.div
                key={location.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <MapPin className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="mb-4 text-gray-900">{location.city}</h3>
                <div className="space-y-3 text-sm">
                  <p className="text-gray-600">
                    {location.address}<br />
                    {location.state}<br />
                    {location.country}
                  </p>
                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-gray-600 mb-1">
                      <Phone className="w-4 h-4 inline mr-2" />
                      {location.phone}
                    </p>
                    <p className="text-gray-600">
                      <Mail className="w-4 h-4 inline mr-2" />
                      {location.email}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}