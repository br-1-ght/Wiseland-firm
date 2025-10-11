import React from 'react';
import { HelpCircle, FileText, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white">
      {/* Main Hero Content */}
      <div className="py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Start Your Online Business{' '}
                <span className="italic">Without</span> Dealing With Complicated Legal Forms
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-700 font-semibold">
                Join Over 7,236+ Entrepreneurs Who Have Successfully Started Their Online Business!
              </p>
              
              <button className="w-full sm:w-auto bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded text-base sm:text-lg font-semibold hover:bg-green-700 transition-colors">
                Launch My Business Now!
              </button>
            </div>
            
            {/* Image with overlapping testimonial */}
            <div className="relative order-1 lg:order-2">
              <img 
                src="./assets/images/legal-firm-hero.jpg" 
                alt="Professional lawyer" 
                className="rounded-lg shadow-2xl w-full h-64 sm:h-96 md:h-[500px] lg:h-[600px] object-cover mx-auto max-w-md lg:max-w-none"
              />
              
              {/* Testimonial Card - Overlapping */}
              <div className="absolute -bottom-12 left-4 right-4 sm:left-8 sm:right-8 lg:left-4 lg:right-4 bg-white rounded-lg shadow-2xl p-4 sm:p-6 lg:p-8 z-10">
                <div className="text-3xl sm:text-4xl md:text-5xl text-blue-400 mb-2">"</div>
                <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                  "I'm really happy with Sam's service. The service was quick and streamlined. I highly recommend Sam Mollaei to all people who want to open a business."
                </p>
                <div className="flex mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs sm:text-sm font-semibold text-gray-900">
                  - Jared Alvarado, <span className="text-gray-600 font-normal">6-Figure Online Entrepreneur</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Problems Section */}
      <div className="pt-20 sm:pt-24 md:pt-32 lg:pt-40 pb-12 sm:pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Starting A Business Is<br />Complicated & Confusing...
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              These are the most common problems our clients face when they're starting their business on their own.
            </p>
          </div>

          {/* Three Problems */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
            {/* Problem 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-blue-400 flex items-center justify-center mb-4 sm:mb-6">
                <HelpCircle className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                I don't know what to do
              </h3>
            </div>

            {/* Problem 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-blue-400 flex items-center justify-center mb-4 sm:mb-6">
                <FileText className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                Which form do I fill out?
              </h3>
            </div>

            {/* Problem 3 */}
            <div className="flex flex-col items-center text-center sm:col-span-2 lg:col-span-1">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-blue-400 flex items-center justify-center mb-4 sm:mb-6">
                <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                Am I doing this correctly?
              </h3>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button className="w-full sm:w-auto bg-green-600 text-white px-8 sm:px-12 py-3 sm:py-4 rounded text-base sm:text-lg font-semibold hover:bg-green-700 transition-colors">
              Launch My Business Now!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;