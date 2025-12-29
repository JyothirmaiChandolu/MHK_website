import { motion } from 'motion/react';
import { Database, Brain, Cloud, Server, BarChart3, Cpu, Lock, Zap } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const services = [
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Transform your data into actionable insights with our comprehensive data engineering services.',
    features: [
      'Tableau Dashboard Development',
      'Data Pipeline Architecture',
      'ETL Process Optimization',
      'Real-time Data Processing',
      'Data Warehouse Design',
      'Business Intelligence Solutions'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2Njg1NDgyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Brain,
    title: 'AI Solutions',
    description: 'Leverage artificial intelligence to automate processes and unlock new possibilities.',
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision Systems',
      'Predictive Analytics',
      'AI-Powered Automation',
      'Custom AI Development'
    ],
    image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjY4ODk2NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Migrate and optimize your infrastructure with scalable cloud solutions.',
    features: [
      'Cloud Migration Services',
      'AWS, Azure & GCP Expertise',
      'Serverless Architecture',
      'Cloud Cost Optimization',
      'Disaster Recovery Planning',
      'Multi-Cloud Strategies'
    ],
    image: 'https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlcnN8ZW58MXx8fHwxNzY2ODk5NzM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    icon: Server,
    title: 'IT Solutions',
    description: 'Comprehensive IT services to support and enhance your business operations.',
    features: [
      'Infrastructure Management',
      'Network Security',
      'System Integration',
      '24/7 Technical Support',
      'DevOps Implementation',
      'IT Consulting'
    ],
    image: 'https://images.unsplash.com/flagged/photo-1579274216947-86eaa4b00475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZGF0YSUyMGNlbnRlcnxlbnwxfHx8fDE3NjY5NDE1NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-green-500 to-green-600'
  }
];

export function WhatWeDo() {
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
            <h1 className="mb-6">What We Do</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business and drive growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="mb-4 text-gray-900">{service.title}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        className="flex items-center space-x-3"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${service.color}`} />
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20`} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-gray-900">Why Choose MHK Tech Inc</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional results through expertise, innovation, and dedication
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BarChart3, title: 'Proven Results', description: '500+ successful projects delivered' },
              { icon: Cpu, title: 'Latest Technology', description: 'Always using cutting-edge tools' },
              { icon: Lock, title: 'Secure Solutions', description: 'Enterprise-grade security standards' },
              { icon: Zap, title: 'Fast Delivery', description: 'Agile approach for quick results' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <item.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
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
            <h2 className="mb-6">Let's Build Something Amazing Together</h2>
            <p className="text-xl mb-8 text-blue-100">
              Ready to transform your business with our expert solutions?
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}