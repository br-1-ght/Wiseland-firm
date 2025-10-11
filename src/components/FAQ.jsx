import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What do I need to get started?',
      answer: 'To get started, you will need basic information about your business including your business name, address, and the type of business entity you want to form. Our team will guide you through the entire process and help you gather all necessary documents.'
    },
    {
      question: 'Do I need to visit the USA to start my business?',
      answer: 'No, you do not need to visit the USA to start your business. We handle everything remotely and can help entrepreneurs from anywhere in the world establish their U.S. business online.'
    },
    {
      question: 'Do I need to be a U.S. citizen or have an SSN to start my business?',
      answer: 'No, you do not need to be a U.S. citizen or have a Social Security Number (SSN) to start a U.S. business. We help international entrepreneurs navigate the process and obtain the necessary tax identification numbers.'
    },
    {
      question: 'What can I do after I start my business?',
      answer: 'After starting your business, you can open a U.S. bank account, apply for business credit, hire employees, sign contracts, and operate your business legally in the United States. We provide ongoing support to help you succeed.'
    },
    {
      question: 'Do you help with opening a U.S. bank account?',
      answer: 'Yes, we provide guidance and support in opening a U.S. bank account for your business. We can recommend banks that work with international entrepreneurs and help you understand the requirements.'
    },
    {
      question: 'How do you have so many 5.0 Star Google reviews?',
      answer: 'Our commitment to exceptional service and client satisfaction has earned us over 3,790 five-star Google reviews. We prioritize clear communication, quick turnaround times, and personalized support for every client.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-10 sm:mb-14">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 sm:p-5 md:p-6 text-left hover:bg-gray-300 transition-colors"
              >
                <span className="text-base sm:text-lg md:text-xl text-blue-600 font-medium pr-4">
                  {faq.question}
                </span>
                <ChevronRight
                  className={`w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-90' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 bg-white">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
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

export default FAQSection;