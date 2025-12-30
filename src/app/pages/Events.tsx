import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, Users, Image as ImageIcon } from 'lucide-react';

// Fallback component for images
function ImageWithFallback({ src, alt, className }: { src: string; alt: string; className: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.src = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800';
      }}
    />
  );
}

const events = [
  {
    id: 1,
    title: 'Annual Day 2024',
    date: 'March 15, 2025',
    time: '9:00 AM - 5:00 PM',
    location: 'San Francisco Convention Center, CA',
    description: 'Join us for a full day of insights into the latest trends in data engineering, AI, and analytics. Network with industry leaders and discover innovative solutions that are shaping the future of data management.',
    attendees: '50+ Attendees',
    category: 'Conference',
    image: '/public/team.jpeg',
    isPast: true
  },
  {
    id: 2,
    title: 'Toreo Data Product Launch',
    date: 'April 22, 2025',
    time: '6:00 PM - 9:00 PM',
    location: 'MHK Tech Inc Headquarters, San Francisco',
    description: 'Be part of history as we officially launch Toreo Data to the world. Experience live demonstrations, meet our product team, and discover how Toreo Data can transform your data integration challenges.',
    attendees: '200+ Expected',
    category: 'Product Launch',
    image: '/public/toreo.png',
    isPast: true
  },
  {
    id: 3,
    title: 'Campus Recruitment Drive',
    date: 'May 10, 2025',
    time: '10:00 AM - 4:00 PM',
    location: 'Virtual Event',
    description: 'Join our campus recruitment drive to discover exciting career opportunities at MHK Tech Inc. We\'re looking for talented individuals to join our growing team across various departments.',
    attendees: '300+ Expected',
    category: 'Recruitment',
    image: '/public/drives2.jpeg',
    isPast: true
  },
  {
    id: 4,
    title: 'Networking Dinner',
    date: 'June 5, 2025',
    time: '7:00 PM - 10:00 PM',
    location: 'The Ritz-Carlton, New York',
    description: 'An exclusive evening for AI professionals and business leaders to discuss the impact of artificial intelligence on modern business. Enjoy fine dining while connecting with peers and thought leaders in the AI space.',
    attendees: '10+ Gathered',
    category: 'Networking',
    image: '/public/team_dinner.jpeg',
    isPast: true
  },
  {
    id: 5,
    title: 'Christmas Celebrations 2024',
    date: 'December 25, 2024',
    time: '9:00 AM - 6:00 PM',
    location: 'Hyderabad, India',
    description: 'Our team gathered at our workplace and celebrated Christmas day with various fun activities, games, and festivities. A wonderful day of team bonding and holiday cheer!',
    attendees: '10+ Team Members',
    category: 'Celebration',
    image: 'dist/images/christmas.jpeg',
    isPast: true
  }
];

export function Events() {
  const upcomingEvents = events.filter(event => !event.isPast);
  const pastEvents = events.filter(event => event.isPast);

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
            <Calendar className="w-16 h-16 mx-auto mb-6" />
            <h1 className="mb-6 text-4xl md:text-5xl font-bold">Events & Celebrations</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join us at our upcoming events and stay connected with the latest in technology innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
              <p className="text-gray-600">Mark your calendar for these exciting events</p>
            </motion.div>

            <div className="space-y-12">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Event Image */}
                    <div className="relative h-64 lg:h-auto">
                      <ImageWithFallback
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />

                      {/* Category Badge */}
                      <div className="absolute bottom-4 left-4">
                        <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium shadow-lg">
                          {event.category}
                        </span>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="p-8 lg:p-10">
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">{event.title}</h3>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center space-x-3 text-gray-600">
                          <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-600">
                          <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-600">
                          <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-600">
                          <Users className="w-5 h-5 text-blue-600 flex-shrink-0" />
                          <span>{event.attendees}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {event.description}
                      </p>

                      <div className="flex flex-wrap gap-4">
                        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                          Register Now
                        </button>
                        <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Past Events & Celebrations</h2>
              <p className="text-gray-600">Memorable moments from our previous events</p>
            </motion.div>

            <div className="space-y-12">
              {pastEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    {/* Event Image */}
                    <div className="relative h-64 lg:h-auto">
                      <ImageWithFallback
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />

                      {/* Category Badge */}
                      <div className="absolute bottom-4 left-4">
                        <span className="px-4 py-2 bg-gray-700 text-white rounded-full text-sm font-medium shadow-lg">
                          {event.category}
                        </span>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="p-8 lg:p-10">
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">{event.title}</h3>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center space-x-3 text-gray-600">
                          <Calendar className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-600">
                          <Clock className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-600">
                          <MapPin className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-600">
                          <Users className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          <span>{event.attendees}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Don't Miss Out</h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to our newsletter to stay updated on upcoming events and exclusive invitations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-900"
              />
              <button className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}