import React, { useState, useEffect } from 'react';
import { Menu, X, Github as GitHub, Linkedin, Mail, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-blue-500">
          KC<span className="text-teal-500">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Social Icons - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://github.com/chaitanya1964" target="_blank" rel="noopener noreferrer" 
             className="text-gray-400 hover:text-white transition-colors duration-300">
            <GitHub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/krishna-chaitanya19" target="_blank" rel="noopener noreferrer" 
             className="text-gray-400 hover:text-white transition-colors duration-300">
            <Linkedin size={20} />
          </a>
          <a href="mailto:kchaitanyanaramsetti@gmail.com" 
             className="text-gray-400 hover:text-white transition-colors duration-300">
            <Mail size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-sm">
          <div className="px-4 py-2 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-300 hover:text-blue-500 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center space-x-4 py-4">
              <a href="https://github.com/chaitanya1964" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition-colors duration-300">
                <GitHub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/krishna-chaitanya19" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="mailto:kchaitanyanaramsetti@gmail.com" 
                 className="text-gray-400 hover:text-white transition-colors duration-300">
                <Mail size={20} />
              </a>
              <a href="tel:8280878820" 
                 className="text-gray-400 hover:text-white transition-colors duration-300">
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;