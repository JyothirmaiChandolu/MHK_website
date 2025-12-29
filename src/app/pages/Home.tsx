import { motion } from 'motion/react';
import { ArrowRight, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const clients = [
  'TechCorp', 'InnovateLabs', 'DataFlow Inc', 'CloudNine', 'FutureWorks', 'SmartSys',
  'TechCorp', 'InnovateLabs', 'DataFlow Inc', 'CloudNine', 'FutureWorks', 'SmartSys' // Duplicate for seamless loop
];

const services = [
  {
    image: 'https://images.unsplash.com/photo-1580983559367-0dc2f8934365?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZW5naW5lZXJpbmclMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2Njk4ODgyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Data Engineering',
    description: 'Transform raw data into actionable insights with our Tableau dashboards and data pipelines.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    image: 'https://images.unsplash.com/photo-1737505599159-5ffc1dcbc08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbmV1cmFsJTIwbmV0d29ya3xlbnwxfHx8fDE3NjY5ODcxMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'AI Solutions',
    description: 'Harness the power of artificial intelligence to automate and optimize your operations.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    image: 'https://images.unsplash.com/photo-1667984390553-7f439e6ae401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY2OTQzMzA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud infrastructure tailored to your business needs.',
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    image: 'https://images.unsplash.com/photo-1548544027-1a96c4c24c7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMGluZnJhc3RydWN0dXJlJTIwc2VydmVyc3xlbnwxfHx8fDE3NjY5ODg4MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'IT Solutions',
    description: 'Comprehensive IT services to keep your business running smoothly.',
    color: 'from-green-500 to-green-600'
  }
];

const industries = [
  { name: 'Finance', icon: Shield },
  { name: 'Healthcare', icon: Shield },
  { name: 'Retail', icon: Zap },
  { name: 'Manufacturing', icon: Shield },
  { name: 'Technology', icon: Shield },
  { name: 'Energy', icon: Shield }
];

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758630737900-a28682c5aa69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3Jwb3JhdGUlMjBvZmZpY2V8ZW58MXx8fHwxNzY2ODk0Mzc5fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-6"
          >
            Transforming Businesses Through Technology
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl mb-8 text-gray-200"
          >
            Innovative solutions in Data Engineering, AI, Cloud, and IT Services
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/what-we-do"
              className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4 text-gray-900">Trusted by Industry Leaders</h2>
            <p className="text-gray-600">We partner with innovative companies worldwide</p>
          </motion.div>

          {/* Continuous Scrolling Animation */}
          <div className="relative">
            <motion.div
              className="flex space-x-8"
              animate={{
                x: [0, -1920]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear"
                }
              }}
            >
              {clients.map((client, index) => (
                <div
                  key={`${client}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center w-64 h-32 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-gray-600 text-lg">{client}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-gray-900">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20`} />
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                  <Link
                    to="/what-we-do"
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 text-sm"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Industries We Serve</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Delivering specialized solutions across diverse sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-750 transition-colors"
              >
                <industry.icon className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                <p className="text-sm">{industry.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Let's discuss how we can help you achieve your goals
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}