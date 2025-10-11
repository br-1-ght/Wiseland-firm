import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    'START BUSINESS',
    'MEETING',
    'GET MY EIN',
    'GET MY ITIN',
    'DISSOLVE COMPANY',
    'MAKE AMENDMENT'
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-wider">
              MOLLAEI <span className="inline-block border-2 border-blue-600 px-1.5 py-0.5 md:px-2 md:py-1 ml-1 text-sm sm:text-base md:text-xl">LAW</span>
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {/* Services Dropdown */}
            <div className="relative">
              <button 
                className="text-gray-700 hover:text-gray-900 flex items-center text-sm lg:text-base"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services
                <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded shadow-lg"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href={`#${service.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                    >
                      {service} »
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#blog" className="text-gray-700 hover:text-gray-900 text-sm lg:text-base">Blog</a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 text-sm lg:text-base">About</a>
            <button className="bg-green-600 text-white px-4 py-2 lg:px-6 lg:py-3 rounded hover:bg-green-700 font-semibold text-sm lg:text-base whitespace-nowrap">
              BOOK A CALL
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-2">
            {/* Mobile Services Dropdown */}
            <div>
              <button 
                className="flex justify-between items-center w-full text-left text-gray-700 hover:text-gray-900 px-2 py-2"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <span>Services</span>
                <svg 
                  className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              {/* Mobile Services Submenu */}
              {isServicesOpen && (
                <div className="pl-4 mt-2 space-y-2 bg-gray-50 py-2 rounded">
                  {services.map((service, index) => (
                    <a
                      key={index}
                      href={`#${service.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-2 py-2 text-sm text-gray-600 hover:text-gray-900"
                    >
                      {service} »
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#blog" className="block text-gray-700 hover:text-gray-900 px-2 py-2">Blog</a>
            <a href="#about" className="block text-gray-700 hover:text-gray-900 px-2 py-2">About</a>
            <button className="w-full bg-green-600 text-white px-4 py-3 rounded hover:bg-green-700 font-semibold mt-2">
              BOOK A CALL
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;