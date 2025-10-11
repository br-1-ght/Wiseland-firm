import React from 'react';

const Testimonial = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-8 sm:py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 max-w-3xl mx-auto">
          <div className="text-4xl sm:text-5xl md:text-6xl text-blue-400 mb-3 sm:mb-4">"</div>
          <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
            "I'm really happy with Sam's service. The service was quick and streamlined. I highly recommend Sam Mollaei to all people who want to open a business."
          </p>
          <div className="flex mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <p className="text-sm sm:text-base font-semibold text-gray-900">
            - Jared Alvarado, <span className="text-gray-600 font-normal">6-Figure Online Entrepreneur</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;