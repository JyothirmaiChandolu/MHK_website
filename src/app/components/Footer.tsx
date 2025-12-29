import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
                {/* Replace with your logo image */}
                <span className="text-white text-xs">LOGO</span>
              </div>
              <span className="text-xl">MHK Tech Inc</span>
            </div>
            <p className="text-gray-400 text-sm">
              Transforming businesses through innovative technology solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/who-we-are" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/what-we-do" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">Data Engineering</li>
              <li className="text-gray-400">AI Solutions</li>
              <li className="text-gray-400">Cloud Solutions</li>
              <li className="text-gray-400">IT Solutions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>info@mhktech.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 MHK Tech Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}