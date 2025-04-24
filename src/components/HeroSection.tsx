import React from 'react';
import { ArrowDown } from 'lucide-react';
import HERO from '../images/formal1.jpg'

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen bg-slate-900 flex items-center relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500/10 to-slate-900/50 z-0"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/10 to-transparent z-0"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="md:w-3/5 mt-8 md:mt-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              <span className="text-blue-500">N. Krishna</span> <span className="text-white">Chaitanya</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-teal-400 mb-6">Computer Science Engineer</h2>
            <p className="text-gray-300 text-lg max-w-2xl mb-8">
              A dedicated computer science professional with expertise in C++, Java, and web development. 
              Focused on delivering clean, efficient solutions with a strong foundation in data structures 
              and algorithms.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-transparent border border-teal-500 text-teal-500 hover:bg-teal-500/10 font-medium rounded-lg transition-colors duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="md:w-2/5 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                <img 
                  src={HERO} 
                  alt="Krishna Chaitanya" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#skills" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-80 hover:opacity-100 transition-opacity duration-300 flex flex-col items-center animate-bounce"
      >
        <span className="mb-2 text-sm">Scroll Down</span>
        <ArrowDown size={20} />
      </a>
    </section>
  );
};

export default HeroSection;