import { motion } from 'motion/react';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';

const jobOpenings = [
  {
    title: 'Senior Data Engineer',
    department: 'Data Engineering',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'We are looking for an experienced Data Engineer to design and build scalable data pipelines and Tableau dashboards.',
    requirements: [
      '5+ years of experience in data engineering',
      'Expert in Tableau and SQL',
      'Experience with AWS or Azure',
      'Strong Python skills'
    ]
  },
  {
    title: 'Machine Learning Engineer',
    department: 'AI Solutions',
    location: 'Remote',
    type: 'Full-time',
    description: 'Join our AI team to develop cutting-edge machine learning models and deploy them at scale.',
    requirements: [
      '3+ years in ML/AI development',
      'Proficiency in TensorFlow or PyTorch',
      'Experience with NLP or Computer Vision',
      'Strong mathematical background'
    ]
  },
  {
    title: 'Cloud Solutions Architect',
    department: 'Cloud Solutions',
    location: 'New York, NY',
    type: 'Full-time',
    description: 'Design and implement cloud architecture solutions for enterprise clients across AWS, Azure, and GCP.',
    requirements: [
      'AWS/Azure/GCP certifications',
      '5+ years cloud architecture experience',
      'Kubernetes and Docker expertise',
      'Strong communication skills'
    ]
  },
  {
    title: 'DevOps Engineer',
    department: 'IT Solutions',
    location: 'Austin, TX',
    type: 'Full-time',
    description: 'Automate infrastructure and deployments to enable continuous delivery and improve system reliability.',
    requirements: [
      '3+ years DevOps experience',
      'CI/CD pipeline expertise',
      'Infrastructure as Code (Terraform)',
      'Monitoring and observability tools'
    ]
  },
  {
    title: 'Product Manager - AI',
    department: 'Product',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'Lead the product strategy and roadmap for our AI-powered analytics platform.',
    requirements: [
      '4+ years product management',
      'AI/ML product experience',
      'Strong analytical skills',
      'Technical background preferred'
    ]
  },
  {
    title: 'UX/UI Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    description: 'Create beautiful and intuitive user experiences for our enterprise software products.',
    requirements: [
      '3+ years UX/UI design',
      'Figma and design systems',
      'Enterprise software experience',
      'User research skills'
    ]
  }
];

const benefits = [
  'Competitive salary and equity',
  'Comprehensive health insurance',
  'Unlimited PTO',
  'Remote work flexibility',
  '401(k) matching',
  'Learning & development budget',
  'Wellness programs',
  'Team events and activities'
];

export function Careers() {
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
            <Briefcase className="w-16 h-16 mx-auto mb-6" />
            <h1 className="mb-6">Join Our Team</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Be part of a team that's transforming businesses through innovative technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-gray-900">Why Work at MHK Tech Inc?</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                At MHK Tech Inc, we believe in fostering a culture of innovation, collaboration, and continuous learning. Our team is our greatest asset, and we're committed to creating an environment where everyone can thrive.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We offer challenging projects with cutting-edge technologies, competitive compensation, and opportunities for professional growth. Join us in making a real impact on businesses worldwide.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h3 className="mb-6 text-gray-900">Benefits & Perks</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-600" />
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-gray-900">Current Openings</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find your next opportunity and help us build the future
            </p>
          </motion.div>

          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-gray-900">{job.title}</h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                        {job.department}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center space-x-2 text-gray-600 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.requirements.slice(0, 3).map((req) => (
                        <span key={req} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 lg:mt-0 lg:ml-8">
                    <button className="w-full lg:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center space-x-2">
                      <span>Apply Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-gray-900">Don't See a Perfect Fit?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <a
              href="mailto:careers@mhktech.com"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Your Resume
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}