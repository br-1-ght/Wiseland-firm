import React from 'react';
import { Rocket, FileCheck, XCircle, Award, Store, FileEdit } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Rocket className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-blue-500" />,
      title: 'LLC',
      description: 'Done-for-you LLC service of everything you need to start your LLC!'
    },
    {
      icon: <FileCheck className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-blue-500" />,
      title: 'EIN',
      description: 'Get your EIN to start your U.S. business and open U.S. business bank account!'
    },
    {
      icon: <XCircle className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-blue-500" />,
      title: 'CLOSE BUSINESS',
      description: 'If you decide to close your LLC or corporation, we will dissolve your business for you!'
    },
    {
      icon: <Award className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-blue-500" />,
      title: 'PROFESSIONAL CORPORATION',
      description: "Everything you need to start your Professional Corporation if you're a professional with a licensed degree!"
    },
    {
      icon: <Store className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-blue-500" />,
      title: "SELLER'S PERMIT",
      description: "Get your Seller's Permit to avoid paying sales tax on merchandise you buy from wholesalers!"
    },
    {
      icon: <FileEdit className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-blue-500" />,
      title: 'MAKE CHANGES',
      description: 'Change LLC name, change members or managers, change business address or make other changes to your business!'
    }
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-blue-100 py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 animate-slide-down">
            We Help Entrepreneurs From All Over The World<br className="hidden sm:block" />
            Launch Their Online Businesses
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 animate-fade-in opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
            Join the 7,236+ entrepreneurs who have trusted our services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 sm:p-8 shadow-md hover:shadow-2xl transition-all duration-500 animate-scale-in opacity-0 group hover:-translate-y-2 hover:scale-105"
              style={{
                animationDelay: `${0.1 * (index + 1)}s`,
                animationFillMode: 'forwards'
              }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-12">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 text-center mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-700 text-center leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                {service.description}
              </p>

              {/* Animated Border Effect */}
              <div className="absolute inset-0 rounded-lg border-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center animate-fade-in opacity-0" style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}>
          <button className="w-full sm:w-auto bg-green-600 text-white px-8 sm:px-12 py-3 sm:py-4 rounded text-base sm:text-lg font-semibold hover:bg-green-700 transition-all duration-300 hover:scale-110 hover:shadow-2xl active:scale-95 group">
            <span className="inline-block group-hover:animate-pulse">Launch My Business Now!</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-down {
          animation: slide-down 0.8s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;