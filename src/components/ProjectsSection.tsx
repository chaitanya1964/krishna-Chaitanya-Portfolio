import React, { useState } from 'react';
import { ExternalLink, Code, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  date: string;
  description: string[];
  technologies: string;
  image: string;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Student Report Card Management System',
      date: 'March 2023',
      description: [
        'Developed a console-based application to manage student academic records, including marks entry and grade generation.',
        'Implemented object-oriented programming concepts to structure student profiles, subjects, and evaluation logic.',
        'Integrated file handling to enable persistent storage of student records and automated report generation.',
        'Added features like search by roll number, performance analytics, and grade calculation based on configurable criteria.'
      ],
      technologies: 'C++ Programming, OOP, File Handling, STL (Vectors, Maps)',
      image: 'https://images.pexels.com/photos/5428004/pexels-photo-5428004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 2,
      title: 'Play Station 5',
      date: 'November 2022',
      description: [
        'Focused on delivering a visually appealing layout with dynamic elements to enhance user experience, optimized for both desktop and mobile device.',
        'A replica website designed to showcase PlayStation 5 products with engaging and responsive user interface.',
        'Developed using HTML, CSS, and JavaScript to create interactive features such as image sliders, product galleries, and smooth navigation effects.'
      ],
      technologies: 'HTML, CSS, JavaScript',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      id: 3,
      title: 'Food Ordering System',
      date: 'September 2022',
      description: [
        'Developed a responsive food ordering website using HTML, CSS, and JavaScript, ensuring a seamless user experience.',
        'Designed an intuitive user interface tailored to customer needs, improving usability and engagement.',
        'Enhanced cross-browser compatibility and optimized design for a clean, user-friendly experience.'
      ],
      technologies: 'HTML, CSS, Bootstrap| Responsive Web Design',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  const [activeProject, setActiveProject] = useState<Project>(projects[0]);

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of my notable projects that showcase my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-slate-700 rounded-xl overflow-hidden shadow-xl">
              <ul>
                {projects.map((project) => (
                  <li 
                    key={project.id}
                    className={`border-b border-slate-600 last:border-b-0 cursor-pointer ${
                      activeProject.id === project.id ? 'bg-blue-900/30' : ''
                    }`}
                    onClick={() => setActiveProject(project)}
                  >
                    <div className="p-4 hover:bg-slate-600/30 transition-colors duration-200">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-white">{project.title}</h3>
                        <span className="text-xs text-teal-400">{project.date}</span>
                      </div>
                      <p className="text-gray-400 text-sm mt-1">{project.technologies}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="bg-slate-700 rounded-xl overflow-hidden shadow-xl h-full">
              <div className="h-56 md:h-64 overflow-hidden">
                <img 
                  src={activeProject.image} 
                  alt={activeProject.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{activeProject.title}</h3>
                    <p className="text-teal-400">{activeProject.date}</p>
                  </div>
                  <div className="flex space-x-2">
                    <a href="https://github.com/chaitanya1964" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-600 hover:bg-slate-500 rounded-full text-white transition-colors duration-300">
                      <Github size={16} />
                    </a>
                    <button className="p-2 bg-slate-600 hover:bg-slate-500 rounded-full text-white transition-colors duration-300">
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
                
                <div className="mb-6">
                  <ul className="space-y-2">
                    {activeProject.description.map((item, index) => (
                      <li key={index} className="text-gray-300 flex">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-4">
                  <h4 className="text-white font-medium mb-2">Technologies Used:</h4>
                  <p className="text-gray-300">{activeProject.technologies}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;