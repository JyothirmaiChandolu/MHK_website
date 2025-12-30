import { motion } from 'motion/react';
import { Database, Play, CheckCircle, X } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState } from 'react';

export function Products() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

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
            <Database className="w-16 h-16 mx-auto mb-6" />
            <h1 className="mb-6">Our Product</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Powerful data connectivity solution designed to simplify complex data integration
            </p>
          </motion.div>
        </div>
      </section>

      {/* Toreo Data Product Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Logo Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center"
            >
              <div className="w-full max-w-md h-64 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center border-2 border-blue-200 overflow-hidden">
                {/* Replace this with your Toreo Data logo */}
                <img 
                  src="/public/toreo_data.jpeg" 
                  alt="Toreo Data Logo" 
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-gray-900">Toreo Data</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Data connectors simplify the most complex data integration & synchronization challenges facing the industry today. Toreo is known as the "art of bull fighting" and we're doing just that with Toreo Data. Enabling connectivity between diverse platforms while not compromising on accuracy, efficiency and security are the mark of an accomplished data connector.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The Toreo Data Connector is an ODBC driver that connects the data stored in an SAP BusinessObjects Universe with data visualization solutions like Microsoft Power BI, Qlik (QlikView & Qlik Sense), Spotfire or Tableau. Experience seamless data synchronization with our high-quality Data Connector. We believe that your data should be accessible no matter what tools you choose at your company.
              </p>
            </motion.div>
          </div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12"
          >
            <h3 className="mb-8 text-gray-900 text-center">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'SAP BusinessObjects Universe Integration',
                'Microsoft Power BI Connectivity',
                'Qlik (QlikView & Qlik Sense) Support',
                'Tableau Integration',
                'Spotfire Compatibility',
                'ODBC Driver Architecture',
                'Seamless Data Synchronization',
                'High Accuracy & Efficiency',
                'Enterprise-Grade Security',
                'Multi-Platform Support',
                'Real-Time Data Access',
                'Easy Configuration'
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4 text-gray-900">See Toreo Data in Action</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Watch our demo video to learn how Toreo Data can transform your data integration workflow
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {!isVideoPlaying ? (
              <div className="relative group cursor-pointer" onClick={() => setIsVideoPlaying(true)}>
                {/* Video Thumbnail */}
                <div className="relative w-full h-72 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src="/public/toreo_data.jpeg"
                    alt="Video thumbnail"
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-xl">
                      <Play className="w-12 h-12 text-blue-600 ml-1" fill="currentColor" />
                    </div>
                  </div>

                  {/* Text Overlay */}
                  <div className="absolute bottom-8 left-8 text-white">
                    <h3 className="mb-2">Toreo Data Demo</h3>
                    <p className="text-blue-200">Click to play video</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
                {/* Close Button */}
                <button
                  onClick={() => setIsVideoPlaying(false)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all"
                  aria-label="Close video"
                >
                  <X className="w-6 h-6 text-gray-900" />
                </button>

                {/* Video Player */}
                <video
                  className="w-full h-auto max-h-[600px] object-contain"
                  controls
                  autoPlay
                  playsInline
                >
                  <source src="http://localhost:5173/public/file.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </motion.div>
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
            <h2 className="mb-6">Ready to Experience Toreo Data?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Schedule a demo to see how Toreo Data can revolutionize your data integration
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Request a Demo
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
