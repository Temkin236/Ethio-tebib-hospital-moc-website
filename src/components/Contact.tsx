import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Calendar, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    appointmentDate: '',
    appointmentTime: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    const submitButton = e.target as HTMLFormElement;
    const button = submitButton.querySelector('button[type="submit"]') as HTMLButtonElement;
    
    if (button) {
      button.disabled = true;
      button.innerHTML = '<div class="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>Submitting...';
      
      setTimeout(() => {
        alert('Thank you! Your appointment request has been submitted. We will contact you within 24 hours to confirm your appointment.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
          appointmentDate: '',
          appointmentTime: ''
        });
        button.disabled = false;
        button.innerHTML = '<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>Submit Appointment Request';
      }, 2000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        { label: 'Main Line', value: '+251 11 123 4567' },
        { label: 'Emergency', value: '+251 11 123 4567' },
        { label: 'Appointments', value: '+251 11 123 4568' }
      ],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: [
        { label: 'General Info', value: 'info@ethiotebib.com' },
        { label: 'Appointments', value: 'appointments@ethiotebib.com' },
        { label: 'Emergency', value: 'emergency@ethiotebib.com' }
      ],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: [
        { label: 'Address', value: 'Addis Ababa, Ethiopia' },
        { label: 'Area', value: 'Medical District' },
        { label: 'Parking', value: 'Available on-site' }
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Operating Hours',
      details: [
        { label: 'Emergency', value: '24/7' },
        { label: 'Outpatient', value: '8:00 AM - 6:00 PM' },
        { label: 'Pharmacy', value: '24/7' }
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const services = [
    'General Consultation',
    'Cardiology',
    'Internal Medicine',
    'Pediatrics',
    'Surgery',
    'Radiology',
    'Laboratory',
    'Emergency'
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            <MessageSquare className="w-4 h-4 mr-2" />
            Get In Touch
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
            <span className="block text-blue-600">Today</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to schedule an appointment or need more information? 
            We're here to help you with all your healthcare needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Book an Appointment</h3>
              <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="+251 9XX XXX XXX"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Select Service *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  required
                >
                  <option value="">Choose a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              {/* Appointment Date & Time */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="appointmentDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="appointmentDate"
                    name="appointmentDate"
                    value={formData.appointmentDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div>
                  <label htmlFor="appointmentTime" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time
                  </label>
                  <select
                    id="appointmentTime"
                    name="appointmentTime"
                    value={formData.appointmentTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select time</option>
                    <option value="08:00">8:00 AM</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Any additional information or specific requests..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Submit Appointment Request
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.color} p-1 mr-4`}>
                      <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                        <IconComponent className={`w-6 h-6 bg-gradient-to-r ${info.color} bg-clip-text text-transparent`} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{info.title}</h3>
                  </div>
                  <div className="space-y-2 ml-16">
                    {info.details.map((detail, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">{detail.label}:</span>
                        <span className="font-medium text-gray-900">{detail.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
              <div className="space-y-3">
                <a 
                  href="tel:+251111234567"
                  className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Emergency Line
                </a>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Online Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;