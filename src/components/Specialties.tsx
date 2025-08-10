import React from 'react';
import { Award, Target, Zap, Users } from 'lucide-react';

const Specialties = () => {
  const specialties = [
    {
      title: 'Cardiac Catheterization Lab',
      description: 'First private hospital in Ethiopia to establish a comprehensive cardiac catheterization laboratory.',
      achievements: [
        'ASD Device Closure',
        'Balloon Valvotomy (Pediatric & Adult)',
        'ICD & CRT Implantation',
        'Complex Angioplasty Procedures'
      ],
      stats: { number: '1000+', label: 'Cardiac Procedures' }
    },
    {
      title: 'Advanced Diagnostics',
      description: 'State-of-the-art imaging and diagnostic services with the latest medical technology.',
      achievements: [
        '128-Slice CT Scanner',
        '1.5 Tesla MRI Machine',
        'Digital Mammography',
        '4D Ultrasound Technology'
      ],
      stats: { number: '50K+', label: 'Scans Performed' }
    },
    {
      title: 'Minimally Invasive Surgery',
      description: 'Advanced laparoscopic and endoscopic procedures with faster recovery times.',
      achievements: [
        'Laparoscopic Cholecystectomy',
        'Endoscopic Procedures',
        'Robotic-Assisted Surgery',
        'Day Surgery Programs'
      ],
      stats: { number: '5K+', label: 'Surgeries Completed' }
    },
    {
      title: 'Renal Care Center',
      description: 'Comprehensive kidney care with dialysis services and transplant preparation.',
      achievements: [
        'Hemodialysis Services',
        'Peritoneal Dialysis',
        'Kidney Transplant Support',
        'Chronic Kidney Disease Management'
      ],
      stats: { number: '200+', label: 'Dialysis Patients' }
    }
  ];

  return (
    <section id="specialties" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            <Award className="w-4 h-4 mr-2" />
            Medical Specialties
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Pioneering Medical
            <span className="block text-green-600">Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Leading the way in advanced medical procedures and specialized care in Ethiopia's private healthcare sector.
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border-2 border-gray-100 hover:border-green-200 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {specialty.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {specialty.description}
                  </p>
                </div>
                <div className="ml-6 text-center bg-green-100 rounded-2xl p-4 group-hover:bg-green-200 transition-colors">
                  <div className="text-2xl font-bold text-green-600">
                    {specialty.stats.number}
                  </div>
                  <div className="text-sm text-green-700 font-medium">
                    {specialty.stats.label}
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="grid grid-cols-2 gap-3">
                {specialty.achievements.map((achievement, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-lg p-3 border border-gray-200 hover:border-green-300 transition-colors group-hover:shadow-md"
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm font-medium text-gray-700">
                        {achievement}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl">
                  Learn More About This Specialty
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Banner */}
        <div className="bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 rounded-3xl p-8 lg:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Recognized Excellence in Healthcare
            </h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our commitment to quality and innovation has established us as leaders in Ethiopia's private healthcare sector.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center">
                <Award className="w-8 h-8" />
              </div>
              <div className="text-2xl font-bold mb-2">First</div>
              <div className="text-blue-100">Private Cardiac Center</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center">
                <Target className="w-8 h-8" />
              </div>
              <div className="text-2xl font-bold mb-2">ISO</div>
              <div className="text-blue-100">Quality Certified</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center">
                <Zap className="w-8 h-8" />
              </div>
              <div className="text-2xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Advanced Care</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-2xl font-bold mb-2">Expert</div>
              <div className="text-blue-100">Medical Team</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialties;