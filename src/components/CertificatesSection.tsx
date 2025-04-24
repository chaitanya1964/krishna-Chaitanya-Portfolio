import React, { useState } from 'react';
import { Award, Calendar, X } from 'lucide-react';

import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';
// import image5 from '../images/networking-udemy.png';

interface Certificate {
  id: number;
  title: string;
  date: string;
  issuer?: string;
  icon: React.ReactNode;
  image: string;
}

const CertificatesSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certificates: Certificate[] = [
    {
      id: 1,
      title: 'DSA self-paced online course on GFG',
      date: 'June 2024',
      issuer: 'GeeksforGeeks',
      icon: <Award size={24} />,
      image: image1
    },
    {
      id: 2,
      title: 'NPTEL Certification in Internet of Things (IoT)',
      date: 'July 2024',
      issuer: 'NPTEL',
      icon: <Award size={24} />,
      image: image4
    },
    {
      id: 4,
      title: 'Programming in C++: A Hands-on Introduction specialization',
      date: 'February 2024',
      issuer: 'Coursera',
      icon: <Award size={24} />,
      image: image2
    },
    {
      id: 5,
      title: 'The World of Computer Networking',
      date: 'November 2023',
      issuer: 'Udemy',
      icon: <Award size={24} />,
      image: image3
    }
  ];

  const handleCardClick = (imagePath: string) => {
    setSelectedImage(imagePath);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="certificates" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Continuous learning and skill development are key parts of my professional journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  onClick={() => handleCardClick(cert.image)}
                  className="cursor-pointer bg-slate-800 rounded-lg p-5 flex items-start hover:shadow-blue-500/10 hover:shadow-lg transition-all duration-300"
                >
                  <div className="mr-4 mt-1">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-500">
                      {cert.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-lg">{cert.title}</h4>
                    <div className="flex items-center mt-2 text-sm text-gray-400">
                      <Calendar size={14} className="mr-1" />
                      <span>{cert.date}</span>
                      {cert.issuer && (
                        <>
                          <span className="mx-2">•</span>
                          <span>{cert.issuer}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
            <div className="relative bg-slate-800 p-4 rounded-lg max-w-3xl w-full">
              <button onClick={closeModal} className="absolute top-2 right-2 text-white hover:text-red-500">
                <X size={24} />
              </button>
              <img src={selectedImage} alt="Certificate" className="w-full h-auto rounded" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificatesSection;
