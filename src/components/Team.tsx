import React from 'react';
import { Users, Award, BookOpen, Heart } from 'lucide-react';

const Team = () => {
  const departments = [
    {
      name: 'Cardiology',
      specialists: 8,
      description: 'Leading cardiac specialists with international training',
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'Internal Medicine',
      specialists: 12,
      description: 'Comprehensive internal medicine experts',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      name: 'Surgery',
      specialists: 10,
      description: 'Experienced surgical team for complex procedures',
      color: 'from-green-500 to-teal-500'
    },
    {
      name: 'Pediatrics',
      specialists: 6,
      description: 'Dedicated children healthcare specialists',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Radiology',
      specialists: 5,
      description: 'Advanced imaging and diagnostic experts',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Emergency Medicine',
      specialists: 15,
      description: '24/7 emergency care specialists',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const teamStats = [
    { icon: Users, number: '200+', label: 'Medical Professionals' },
    { icon: Award, number: '50+', label: 'Specialist Doctors' },
    { icon: BookOpen, number: '15+', label: 'Years Average Experience' },
    { icon: Heart, number: '24/7', label: 'Patient Care' }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            <Users className="w-4 h-4 mr-2" />
            Our Medical Team
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Expert Healthcare
            <span className="block text-blue-600">Professionals</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our multidisciplinary team of highly qualified specialists, nurses, and support staff 
            are dedicated to providing exceptional patient care with compassion and expertise.
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {teamStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Departments Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Medical Departments
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized teams across all major medical disciplines working together for comprehensive care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-blue-200"
              >
                {/* Department Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${dept.color} p-1 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                      <Users className={`w-6 h-6 bg-gradient-to-r ${dept.color} bg-clip-text text-transparent`} />
                    </div>
                  </div>
                  <div className="bg-gray-100 group-hover:bg-blue-100 px-3 py-1 rounded-full text-sm font-medium text-gray-700 group-hover:text-blue-700 transition-colors">
                    {dept.specialists} Specialists
                  </div>
                </div>

                {/* Department Info */}
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {dept.name}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {dept.description}
                </p>

                {/* View Team Button */}
                <button className="w-full bg-gray-100 hover:bg-blue-600 text-gray-700 hover:text-white py-2 rounded-lg font-medium transition-all duration-200 group-hover:shadow-lg">
                  View Team
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Team Excellence Banner */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Excellence in Medical Education
              </h3>
              <p className="text-xl text-blue-100 mb-6">
                Our team continuously advances their skills through ongoing education, 
                international collaborations, and participation in medical research.
              </p>
              <ul className="space-y-3 text-blue-100">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  International medical training and certifications
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Regular medical conferences and workshops
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Collaborative research with global institutions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Continuous professional development programs
                </li>
              </ul>
            </div>
            <div className="text-center lg:text-right">
              <div className="inline-block bg-white bg-opacity-20 rounded-3xl p-8 backdrop-blur-sm">
                <div className="text-4xl font-bold mb-2">Top 1%</div>
                <div className="text-lg text-blue-100 mb-4">Medical Excellence</div>
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105">
                  Meet Our Specialists
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;