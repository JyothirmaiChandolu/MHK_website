import { motion } from 'motion/react';
import { Target, Eye, Award, Users, Globe, TrendingUp, Mail, Linkedin } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const values = [
  { icon: Target, title: 'Innovation', description: 'Pushing boundaries with cutting-edge technology' },
  { icon: Eye, title: 'Transparency', description: 'Building trust through open communication' },
  { icon: Award, title: 'Excellence', description: 'Delivering quality in everything we do' },
  { icon: Users, title: 'Collaboration', description: 'Working together to achieve great things' }
];

const stats = [
  { number: '500+', label: 'Projects Delivered' },
  { number: '50+', label: 'Team Members' },
  { number: '20+', label: 'Countries Served' },
  { number: '98%', label: 'Client Satisfaction' }
];

export function WhoWeAre() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2Njg0NTg2M3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/70" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="mb-4">Who We Are</h1>
          <p className="text-xl text-gray-200">Your trusted partner in digital transformation</p>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              >
              <h2 className="mb-6 text-gray-900">Empowering Businesses Since 2015</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
              At MHK TECH INC, we take care of our clients software-based needs regarding application development as well as strategies to make yourself famous on the internet. We provide tailored needs to any and all businesses around the world after understanding the company's core ethics and working methods in-depth. We also ensure that we maintain a close ecosystem of understanding our customer's needs and delivering the required service in the most efficient way.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
              MHK TECH INC has top level IT teams that expertise in making state of the art products that help your business to work efficiently. We are expert in developing custom applications that will help in the growth and financial planning of the entity. With products that take care of all the steps from laying out the initial business plan to conducting the final stage of customer service, we make sure that your company can deliver on time and with customer satisfaction. We also provide services that will help your company's core values grow on an ethical level with your employees dedicated to the company's work ethics and goals.
              </p>
              <p className="text-gray-600 leading-relaxed">
              We deal with providing product based services regarding application development as well as we provide consultancy services. Have a look at some of the products and services that we expertise in providing at MHK TECH INC. Contact us anytime for more information about the products and services we deal in, and we make sure that we will reach you back as soon as possible; usually we revert back within a few hours to maximum 24 hours.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-2xl bg-white p-8"
            >
              <ImageWithFallback
                src="/public/MHK_logo1_new.svg"
                alt="MHK Tech Inc Logo"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-gray-900">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-5xl mb-2">{stat.number}</div>
                <p className="text-blue-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8"
            >
              <Globe className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="mb-4 text-gray-900">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses worldwide with innovative technology solutions that drive efficiency, and competitive advantage in the digital age.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8"
            >
              <TrendingUp className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="mb-4 text-gray-900">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the world's most trusted technology partner, recognized for our innovation, excellence, and unwavering commitment to client success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4 text-gray-900">Leadership</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the visionary leader driving our innovation and success
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
              {/* CEO Image */}
              <div className="md:col-span-2 relative h-96 md:h-auto">
                <ImageWithFallback
                  src="/public/rajesh.jpeg"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CEO Info */}
              <div className="md:col-span-3 p-8 lg:p-12">
                <div className="mb-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    Chief Executive Officer
                  </span>
                </div>
                
                <h3 className="mb-2 text-gray-900 mt-4">Rajesh Kota</h3>
                <p className="text-gray-500 mb-6">Founder & CEO</p>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  Rajesh Kota is the visionary founder and CEO of MHK Tech Inc, bringing his experience in technology innovation and business leadership. Under his guidance, MHK Tech Inc has grown into a globally recognized leader in data engineering and AI solutions.
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  
                </p>

                {/* Contact Links */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="mailto:ceo@mhktech.com"
                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/johndoe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}