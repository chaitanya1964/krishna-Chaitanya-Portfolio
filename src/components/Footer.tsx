import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-slate-950 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} N. Krishna Chaitanya. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center">
            <button 
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-colors duration-300"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;