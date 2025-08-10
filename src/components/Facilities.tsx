import React from 'react';
import { Building2, Zap, Shield, Camera, Cpu, Activity } from 'lucide-react';

const Facilities = () => {
  const facilities = [
    {
      icon: Activity,
      title: 'Cardiac Catheterization Lab',
      description: 'State-of-the-art cardiac intervention facility with advanced imaging technology',
      features: ['Digital Angiography', 'Interventional Procedures', '24/7 Availability', 'Expert Cardiologists'],
      image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Camera,
      title: 'Advanced Imaging Center',
      description: 'Comprehensive diagnostic imaging with the latest medical technology',
      features: ['128-Slice CT Scanner', '1.5 Tesla MRI', 'Digital Mammography', 'Ultrasound 4D'],
      image: 'https://images.pexels.com/photos/4031818/pexels-photo-4031818.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Cpu,
      title: 'Modern Operating Theaters',
      description: 'Fully equipped surgical suites with advanced technology and infection control',
      features: ['Minimally Invasive Surgery', 'Advanced Monitoring', 'Sterile Environment', 'Emergency Surgery'],
      image: 'https://images.pexels.com/photos/4099355/pexels-photo-4099355.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Shield,
      title: 'Intensive Care Units',
      description: 'Critical care facilities with 24/7 monitoring and advanced life support',
      features: ['Advanced Monitoring', 'Ventilator Support', 'Specialized Nursing', 'Family Support'],
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Building2,
      title: 'Patient Rooms',
      description: 'Comfortable and modern patient accommodation with amenities for recovery',
      features: ['Private Rooms', 'Family Areas', 'Modern Amenities', 'Healing Environment'],
      image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Zap,
      title: 'Emergency Department',
      description: '24/7 emergency services with rapid response and trauma care capabilities',
      features: ['Trauma Center', 'Rapid Response', 'Advanced Equipment', 'Specialized Team'],
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const technologies = [
    { name: 'Electronic Medical Records', description: 'Digital patient management system' },
    { name: 'Telemedicine Platform', description: 'Remote consultation capabilities' },
    { name: 'AI-Assisted Diagnostics', description: 'Advanced diagnostic support' },
    { name: 'Digital Pharmacy', description: 'Automated medication management' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            <Building2 className="w-4 h-4 mr-2" />
            World-Class Facilities
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Advanced Medical
            <span className="block text-blue-600">Infrastructure</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our state-of-the-art facilities combine cutting-edge medical technology with 
            comfortable patient environments to deliver exceptional healthcare experiences.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {facilities.map((facility, index) => {
            const IconComponent = facility.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white bg-opacity-90 rounded-xl flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {facility.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {facility.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Action */}
                  <button 
                    onClick={() => window.open(facility.image, '_blank')}
                    className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-[1.02]"
                  >
                    Virtual Tour
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technology Section */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Digital Health Innovation
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Leveraging technology to enhance patient care, improve outcomes, and streamline healthcare delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {tech.name}
                </h4>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Schedule a Facility Tour
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;