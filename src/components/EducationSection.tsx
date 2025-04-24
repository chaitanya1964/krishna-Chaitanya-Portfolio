import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

interface Education {
  id: number;
  institution: string;
  degree: string;
  location: string;
  period: string;
  score: string;
}

const EducationSection: React.FC = () => {
  const educations: Education[] = [
    {
      id: 1,
      institution: 'Lovely Professional University',
      degree: 'Bachelor of Technology - Computer Science and Engineering',
      location: 'Punjab, India',
      period: 'August 2022 - Present',
      score: 'CGPA: 6.7'
    },
    {
      id: 2,
      institution: 'Sri Chaitanya Junior College',
      degree: 'Intermediate',
      location: 'Visakhapatnam, Andhra Pradesh',
      period: 'April 2020 - March 2022',
      score: 'Percentage: 94%'
    },
    {
      id: 3,
      institution: 'Suresh High School',
      degree: 'Matriculation',
      location: 'Parvathipuram, Andhra Pradesh',
      period: 'April 2019 - March 2020',
      score: 'Percentage: 100%'
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My academic journey that has shaped my skills and knowledge in the field of computer science.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-blue-500/30 transform md:translate-x-[-50%] hidden md:block"></div>

          <div className="space-y-12">
            {educations.map((edu, index) => (
              <div key={edu.id} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-[-8px] md:left-1/2 top-0 w-4 h-4 rounded-full bg-blue-500 transform md:translate-x-[-50%] hidden md:block"></div>
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:ml-auto' : 'md:pl-12'}`}>
                  <div className="bg-slate-700 rounded-xl p-6 shadow-lg hover:shadow-blue-500/10 transition-shadow duration-300">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-500 mr-3">
                        <GraduationCap size={20} />
                      </div>
                      <h3 className="text-xl text-white font-semibold">{edu.institution}</h3>
                    </div>
                    
                    <h4 className="text-lg text-teal-400 font-medium mb-2">{edu.degree}</h4>
                    
                    <div className="space-y-2 text-gray-300 text-sm">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-2" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-2" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-slate-600">
                      <div className="flex justify-between items-center">
                        <span className="text-white">Performance</span>
                        <span className="text-blue-400 font-medium">{edu.score}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;