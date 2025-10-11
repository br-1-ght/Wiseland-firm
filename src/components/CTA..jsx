import React from 'react';

const CTASection = () => {
  return (
    <section className="bg-gradient-to-b from-indigo-950 to-indigo-900 py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8">
            Don't Get Stuck Starting Your Online Business
          </h2>
          
          {/* Three Points */}
          <div className="space-y-4 sm:space-y-5 text-white text-base sm:text-lg md:text-xl">
            <p className="leading-relaxed">
              Don't fall for the "do-it-yourself" trap that ends up costing you more time and money that takes you away from making money from your business…
            </p>
            <p className="leading-relaxed">
              Save valuable time trying to figure out the legal steps to start your online business…
            </p>
            <p className="leading-relaxed">
              Don't let complicated and confusing legal forms hold you back from starting your business…
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10 sm:mt-12">
          <button className="w-full sm:w-auto bg-green-600 text-white px-8 sm:px-12 py-3 sm:py-4 rounded text-base sm:text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg">
            Launch My Business Now!
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;