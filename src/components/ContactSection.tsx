import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-blue-500" size={24} />,
      title: 'Email',
      value: 'kchaitanyanaramsetti@gmail.com',
      link: 'mailto:kchaitanyanaramsetti@gmail.com'
    },
    {
      icon: <Phone className="text-blue-500" size={24} />,
      title: 'Phone',
      value: '8280878820',
      link: 'tel:8280878820'
    },
    {
      icon: <Github className="text-blue-500" size={24} />,
      title: 'GitHub',
      value: 'github.com/chaitanya1964',
      link: 'https://github.com/chaitanya1964'
    },
    {
      icon: <Linkedin className="text-blue-500" size={24} />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/krishna-chaitanya19',
      link: 'https://www.linkedin.com/in/krishna-chaitanya19'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out for opportunities, collaborations, or just to say hello!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="bg-slate-800 rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a 
                    key={index} 
                    href={info.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-start group"
                  >
                    <div className="mr-4 mt-1">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-gray-400 text-sm">{info.title}</h4>
                      <p className="text-white font-medium group-hover:text-blue-400 transition-colors duration-300">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-slate-800 rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300 w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;