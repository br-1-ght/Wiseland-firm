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
    <section className="bg-gradient-to-b from-blue-50 to-blue-100 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            We Help Entrepreneurs From All Over The World<br className="hidden sm:block" />
            Launch Their Online Businesses
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700">
            Join the 7,236+ entrepreneurs who have trusted our services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 sm:p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4 sm:mb-6">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 text-center mb-3 sm:mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-700 text-center leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="w-full sm:w-auto bg-green-600 text-white px-8 sm:px-12 py-3 sm:py-4 rounded text-base sm:text-lg font-semibold hover:bg-green-700 transition-colors">
            Launch My Business Now!
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;