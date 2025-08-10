import React from 'react';
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    'Cardiology',
    'Internal Medicine',
    'Surgery',
    'Pediatrics',
    'Radiology',
    'Laboratory',
    'Emergency Care',
    'Critical Care'
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Medical Team', href: '#team' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Emergency', href: '#emergency' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Patient Portal', href: '#portal' },
    { name: 'Insurance', href: '#insurance' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Hospital Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full relative">
                    <div className="absolute inset-1 bg-white rounded-full"></div>
                    <div className="absolute inset-2 bg-red-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Ethio Tebib</h3>
                <p className="text-blue-400 font-medium">General Hospital</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Leading private healthcare institution in Ethiopia, providing world-class medical care 
              with advanced technology and compassionate service since 2008.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 group-hover:bg-blue-400 transition-colors"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3 group-hover:bg-green-400 transition-colors"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-medium text-white mb-1">Emergency Hotline</div>
                  <div className="text-gray-400">+251 11 123 4567</div>
                  <div className="text-sm text-gray-500">24/7 Available</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-medium text-white mb-1">Email</div>
                  <div className="text-gray-400">info@ethiotebib.com</div>
                  <div className="text-sm text-gray-500">Response within 24hrs</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-medium text-white mb-1">Location</div>
                  <div className="text-gray-400">Addis Ababa</div>
                  <div className="text-gray-400">Ethiopia</div>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8 p-4 bg-gray-800 rounded-xl">
              <h4 className="font-bold text-white mb-2">Health Newsletter</h4>
              <p className="text-gray-400 text-sm mb-3">Get health tips and hospital updates</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-700 text-white rounded-l-lg border-0 focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg transition-colors">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © {new Date().getFullYear()} Ethio Tebib General Hospital. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-2 text-sm">
                <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Patient Rights</a>
                <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Sitemap</a>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="flex items-center justify-center md:justify-end space-x-2 text-gray-400">
                <Heart className="w-4 h-4 text-red-500" />
                <span className="text-sm">Excellence in Healthcare Since 2008</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;