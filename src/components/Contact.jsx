import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        businessType: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-white to-blue-50 py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading with fade-in animation */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 animate-slide-down">
            Get In Touch With Us
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto animate-slide-up opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
            Ready to start your business? Schedule a consultation with our legal experts today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 animate-slide-right hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
                Contact Information
              </h3>

              {/* Email */}
              <div className="flex items-start space-x-4 mb-6 group animate-fade-in" style={{animationDelay: '0.3s', animationFillMode: 'forwards', opacity: 0}}>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-blue-200 transition-all duration-300 group-hover:rotate-6">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Email</h4>
                  <a href="mailto:info@mollaeilaw.com" className="text-blue-600 hover:text-blue-700 hover:underline transition-all">
                    info@mollaeilaw.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4 mb-6 group animate-fade-in" style={{animationDelay: '0.4s', animationFillMode: 'forwards', opacity: 0}}>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-blue-200 transition-all duration-300 group-hover:rotate-6">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Phone</h4>
                  <a href="tel:+18001234567" className="text-blue-600 hover:text-blue-700 hover:underline transition-all">
                    +1 (800) 123-4567
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4 group animate-fade-in" style={{animationDelay: '0.5s', animationFillMode: 'forwards', opacity: 0}}>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-blue-200 transition-all duration-300 group-hover:rotate-6">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Office</h4>
                  <p className="text-gray-700">
                    California, USA<br />
                    Serving clients worldwide
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-br from-indigo-950 to-indigo-900 rounded-lg shadow-lg p-6 sm:p-8 text-white animate-slide-right hover:shadow-2xl transition-all duration-300 hover:-translate-y-1" style={{animationDelay: '0.2s'}}>
              <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between hover:translate-x-2 transition-transform duration-300">
                  <span>Monday - Friday:</span>
                  <span className="font-semibold text-white">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between hover:translate-x-2 transition-transform duration-300">
                  <span>Saturday:</span>
                  <span className="font-semibold text-white">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between hover:translate-x-2 transition-transform duration-300">
                  <span>Sunday:</span>
                  <span className="font-semibold text-white">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 animate-slide-left hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
              Send Us A Message
            </h3>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 animate-scale-in">
                <CheckCircle className="w-20 h-20 text-green-600 mb-4 animate-bounce" />
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                <p className="text-gray-700 text-center">We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div className="animate-fade-in" style={{animationDelay: '0.1s', animationFillMode: 'forwards', opacity: 0}}>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all duration-300 ${focusedField === 'name' ? 'scale-105' : ''}`}
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div className="animate-fade-in" style={{animationDelay: '0.2s', animationFillMode: 'forwards', opacity: 0}}>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all duration-300 ${focusedField === 'email' ? 'scale-105' : ''}`}
                    placeholder="john@example.com"
                  />
                </div>

                {/* Phone */}
                <div className="animate-fade-in" style={{animationDelay: '0.3s', animationFillMode: 'forwards', opacity: 0}}>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all duration-300 ${focusedField === 'phone' ? 'scale-105' : ''}`}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                {/* Business Type */}
                <div className="animate-fade-in" style={{animationDelay: '0.4s', animationFillMode: 'forwards', opacity: 0}}>
                  <label htmlFor="businessType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Business Type *
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    required
                    value={formData.businessType}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('businessType')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all duration-300 bg-white ${focusedField === 'businessType' ? 'scale-105' : ''}`}
                  >
                    <option value="">Select a business type</option>
                    <option value="llc">LLC</option>
                    <option value="corporation">Corporation</option>
                    <option value="professional-corp">Professional Corporation</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div className="animate-fade-in" style={{animationDelay: '0.5s', animationFillMode: 'forwards', opacity: 0}}>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows="5"
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all duration-300 resize-none ${focusedField === 'message' ? 'scale-105' : ''}`}
                    placeholder="Tell us about your business needs..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white px-6 py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-green-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 animate-fade-in group"
                  style={{animationDelay: '0.6s', animationFillMode: 'forwards', opacity: 0}}
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </button>
              </form>
            )}
          </div>
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
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-right {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-left {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-down {
          animation: slide-down 0.6s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
        }

        .animate-slide-right {
          animation: slide-right 0.6s ease-out;
        }

        .animate-slide-left {
          animation: slide-left 0.6s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;