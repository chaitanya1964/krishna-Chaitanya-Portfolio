import React from 'react';
import { Code, Server, Database, Cpu, Terminal, Users } from 'lucide-react';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, icon }) => {
  return (
    <div className="bg-slate-800 rounded-xl p-6 transition-transform hover:-translate-y-1 duration-300">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-500 mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-300 flex items-center">
            <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code size={24} />,
      skills: ['C++', 'Java']
    },
    {
      title: 'Technologies & Frameworks',
      icon: <Server size={24} />,
      skills: ['AWS', 'Ubuntu', 'HTML and CSS', 'DSA']
    },
    {
      title: 'Tools & Platforms',
      icon: <Terminal size={24} />,
      skills: ['Cisco Packet Tracer', 'VMware workstation']
    },
    {
      title: 'Soft Skills',
      icon: <Users size={24} />,
      skills: ['Problem-Solving Skills', 'Team Player', 'Project Management', 'Adaptability']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My technical expertise spans across multiple domains with a focus on programming, 
            networking, and system administration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={index}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;