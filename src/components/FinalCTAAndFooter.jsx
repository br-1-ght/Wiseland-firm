import React from 'react';

const FinalCTAAndFooter = () => {
  return (
    <>
      {/* Final CTA Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-950 to-indigo-900 rounded-2xl px-6 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                Don't Wait! Start Your Online Business Now!
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white mb-8 sm:mb-10">
                Start your business from anywhere in the world and be your own boss!
              </p>
              <button className="w-full sm:w-auto bg-green-600 text-white px-8 sm:px-12 py-3 sm:py-4 rounded text-base sm:text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg">
                Launch My Business Now!
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 sm:py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8">
            {/* Left Column - Logo and Legal Info */}
            <div className="space-y-4">
              <div className="mb-4">
                <span className="text-xl sm:text-2xl font-bold tracking-wider">
                  MOLLAEI <span className="inline-block border-2 border-blue-600 px-2 py-1 ml-1">LAW</span>
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-400">THIS IS ATTORNEY ADVERTISING</p>
              <p className="text-xs sm:text-sm text-gray-400">© 2025 Mollaei Inc. All Rights Reserved</p>
              <p className="text-xs sm:text-sm text-gray-400">Privacy Policy and Terms</p>
            </div>

            {/* Right Column - Disclaimer */}
            <div className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              <p className="mb-4">
                The information contained in this website contains general educational information only and should not be construed to be legal advice. You should not act or rely on any of the information contained herein without seeking professional legal advice. Accessing or using the information on this website does not create an attorney-client relationship. You are not entitled to rely upon information in this website in determining how to conduct your legal or business affairs. We act as business organizers only.
              </p>
            </div>
          </div>

          {/* Bottom Disclaimer */}
          <div className="border-t border-gray-800 pt-6 sm:pt-8">
            <p className="text-xs sm:text-sm text-gray-400 text-center leading-relaxed">
              Sam Mollaei is a California-admitted attorney with offices in California. Any results described on this website are based upon the facts of that particular case and do not represent a promise, future prediction or guarantee.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FinalCTAAndFooter;