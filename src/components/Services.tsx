import React from 'react';
import { Heart, Brain, Baby, Stethoscope, Shield, Microscope, UserCheck, Activity } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Advanced cardiac care with state-of-the-art catheterization lab and interventional procedures.',
      features: ['Cardiac Catheterization', 'Angioplasty', 'Pacemaker Implantation', 'Echocardiography'],
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Brain,
      title: 'Neurology',
      description: 'Comprehensive neurological services with advanced diagnostic and treatment capabilities.',
      features: ['EEG Studies', 'Stroke Management', 'Epilepsy Care', 'Neurological Rehabilitation'],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Baby,
      title: 'Pediatrics',
      description: 'Specialized care for children with experienced pediatric specialists and child-friendly environment.',
      features: ['Neonatal Care', 'Pediatric Surgery', 'Vaccinations', 'Growth Monitoring'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Stethoscope,
      title: 'Internal Medicine',
      description: 'Comprehensive internal medicine services for adult patients with chronic and acute conditions.',
      features: ['Diabetes Management', 'Hypertension Care', 'Preventive Medicine', 'Chronic Disease Management'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Activity,
      title: 'Surgery',
      description: 'Advanced surgical procedures with minimally invasive techniques and expert surgical team.',
      features: ['Laparoscopic Surgery', 'General Surgery', 'Emergency Surgery', 'Post-operative Care'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Microscope,
      title: 'Laboratory',
      description: 'State-of-the-art laboratory services with rapid and accurate diagnostic testing.',
      features: ['Blood Tests', 'Microbiology', 'Pathology', 'Molecular Diagnostics'],
      color: 'from-teal-500 to-green-500'
    },
    {
      icon: Shield,
      title: 'Radiology',
      description: 'Advanced imaging services with latest technology for accurate diagnosis.',
      features: ['CT Scan', 'MRI', 'Ultrasound', 'Digital X-Ray'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: UserCheck,
      title: 'Emergency Medicine',
      description: '24/7 emergency services with fully equipped trauma center and ambulance services.',
      features: ['Trauma Care', 'Intensive Care', 'Emergency Surgery', 'Ambulance Services'],
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            <Stethoscope className="w-4 h-4 mr-2" />
            Our Medical Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Healthcare
            <span className="block text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From routine checkups to complex procedures, we provide world-class medical care 
            with the latest technology and compassionate service.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} p-1 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                    <IconComponent className={`w-8 h-8 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform duration-200"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Need Immediate Medical Attention?
            </h3>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Our emergency department is open 24/7 with experienced medical professionals ready to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+251111234567"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 text-center"
              >
                Emergency: +251 11 123 4567
              </a>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;