import React from 'react';

const TrustBadges = () => {
  return (
    <section className="bg-white py-8 sm:py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 items-center justify-items-center">
          {/* Google Badge */}
          <div className="text-center w-full">
            <div className="flex items-center justify-center space-x-1 sm:space-x-2 mb-2">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold">G</span>
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600">o</span>
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600">o</span>
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-500">g</span>
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600">l</span>
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-600">e</span>
            </div>
            <div className="flex justify-center mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-xs sm:text-sm font-semibold">Rated 4.9 From</p>
            <p className="text-xs sm:text-sm font-semibold">3,790 Google Reviews!</p>
          </div>
          
          {/* AVVO Badge */}
          <div className="text-center w-full">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-2">AVVO</div>
            <div className="flex justify-center mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
          </div>
          
          {/* Super Lawyers Badge */}
          <div className="text-center border-4 border-yellow-500 p-3 sm:p-4 rounded w-full max-w-xs sm:col-span-2 md:col-span-1">
            <p className="text-xs font-semibold mb-1">RATED BY</p>
            <p className="text-2xl sm:text-3xl font-serif font-bold">Super</p>
            <p className="text-2xl sm:text-3xl font-serif font-bold">Lawyers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;