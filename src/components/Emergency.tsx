import React from 'react';
import { Phone, Clock, Ambulance, AlertTriangle, MapPin, Shield } from 'lucide-react';

const Emergency = () => {
  const emergencyServices = [
    {
      icon: Ambulance,
      title: '24/7 Ambulance Service',
      description: 'Rapid response ambulance service with advanced life support equipment',
      response: '< 8 minutes',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: AlertTriangle,
      title: 'Trauma Center',
      description: 'Fully equipped trauma center for critical emergency cases',
      response: 'Immediate',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Critical Care',
      description: 'Advanced intensive care unit with 24/7 monitoring',
      response: 'Continuous',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Phone,
      title: 'Emergency Hotline',
      description: 'Direct emergency consultation with medical professionals',
      response: '< 2 minutes',
      color: 'from-green-500 to-teal-500'
    }
  ];

  const emergencyTypes = [
    'Heart Attack & Cardiac Emergencies',
    'Stroke & Neurological Emergencies',
    'Trauma & Accidents',
    'Pediatric Emergencies',
    'Respiratory Emergencies',
    'Surgical Emergencies',
    'Poisoning & Drug Overdose',
    'Burns & Critical Injuries'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-4">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Emergency Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            24/7 Emergency
            <span className="block text-red-600">Medical Care</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            When every second counts, our emergency department is ready with advanced equipment, 
            experienced medical teams, and rapid response capabilities.
          </p>
        </div>

        {/* Emergency Hotline Banner */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-8 lg:p-12 text-white mb-16 shadow-2xl">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center animate-pulse">
              <Phone className="w-10 h-10" />
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Emergency Hotline
            </h3>
            <div className="text-4xl lg:text-5xl font-bold mb-4 tracking-wider">
              +251 11 123 4567
            </div>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Available 24/7 for immediate medical emergencies. 
              Our trained professionals are standing by to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+251111234567"
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all duration-200 transform hover:scale-105 shadow-lg text-center"
              >
                Call Emergency Line
              </a>
              <a 
                href="tel:+251111234567"
                className="bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-xl font-bold transition-all duration-200 transform hover:scale-105 border-2 border-white border-opacity-20 text-center"
              >
                Request Ambulance
              </a>
            </div>
          </div>
        </div>

        {/* Emergency Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {emergencyServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} p-1 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                    <IconComponent className={`w-8 h-8 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`} />
                  </div>
                </div>
                <div className="mb-4">
                  <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium inline-block mb-3">
                    Response: {service.response}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Emergency Types & Location */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Emergency Types */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <AlertTriangle className="w-8 h-8 text-red-600 mr-3" />
              We Handle All Medical Emergencies
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {emergencyTypes.map((type, index) => (
                <div key={index} className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700 font-medium">{type}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition-all duration-200">
                View All Emergency Services
              </button>
            </div>
          </div>

          {/* Location & Contact */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <MapPin className="w-8 h-8 text-blue-600 mr-3" />
                Emergency Department Location
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Ethio Tebib General Hospital</div>
                    <div className="text-gray-600">Emergency Department - Ground Floor</div>
                    <div className="text-gray-600">Addis Ababa, Ethiopia</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Always Open</div>
                    <div className="text-gray-600">24 hours a day, 7 days a week</div>
                    <div className="text-gray-600">365 days a year</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-3xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">What to Expect</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Immediate triage and assessment
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Advanced diagnostic imaging on-site
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Direct admission to specialized units
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Coordination with insurance providers
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Emergency;