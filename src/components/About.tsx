import React from 'react';
import { Building2, Users, Award, Heart, TrendingUp, Globe } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '2008', event: 'Hospital Foundation', description: 'Established as a premier private healthcare institution' },
    { year: '2012', event: 'Cardiac Center Launch', description: 'First private cardiac catheterization lab in Ethiopia' },
    { year: '2016', event: 'Advanced Imaging', description: 'Introduction of 128-slice CT and 1.5T MRI technology' },
    { year: '2020', event: 'Digital Transformation', description: 'Full EMR implementation and telemedicine services' },
    { year: '2023', event: 'Expansion Project', description: 'New surgical suites and intensive care units' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'Every patient receives personalized, empathetic medical attention.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Award,
      title: 'Clinical Excellence',
      description: 'Committed to the highest standards of medical practice and outcomes.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Patient-Centered',
      description: 'Healthcare decisions guided by patient needs and preferences.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Innovation',
      description: 'Embracing new technologies and treatment methodologies.',
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            <Building2 className="w-4 h-4 mr-2" />
            About Ethio Tebib Hospital
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Leading Healthcare
            <span className="block text-blue-600">in Ethiopia</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over 15 years, we have been dedicated to providing world-class medical care 
            with cutting-edge technology and compassionate service to the Ethiopian community.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Pioneering Private Healthcare Excellence
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ethio Tebib General Hospital stands as Ethiopia's premier private healthcare institution, 
                combining international medical standards with local expertise. Our commitment to excellence 
                has made us the trusted choice for patients seeking advanced medical care.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From our state-of-the-art cardiac catheterization laboratory to our comprehensive 
                diagnostic imaging center, we continue to set new benchmarks in Ethiopian healthcare, 
                ensuring every patient receives the best possible medical attention.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 py-8 border-t border-b border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-sm text-gray-600 font-medium">Years of Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">50K+</div>
                <div className="text-sm text-gray-600 font-medium">Patients Treated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">200+</div>
                <div className="text-sm text-gray-600 font-medium">Medical Professionals</div>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">International Standards</div>
                    <div className="text-sm text-gray-600">World-class protocols</div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Accredited Quality</div>
                    <div className="text-sm text-gray-600">ISO certified facility</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Timeline */}
          <div className="relative">
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Hospital Interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Journey</h4>
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold">
                      {milestone.year.slice(-2)}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 mb-1">{milestone.event}</div>
                      <div className="text-sm text-gray-600 leading-relaxed">{milestone.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Ethio Tebib Hospital
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center"
                >
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${value.color} p-1 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                      <IconComponent className={`w-8 h-8 bg-gradient-to-r ${value.color} bg-clip-text text-transparent`} />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;