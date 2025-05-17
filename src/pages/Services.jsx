
import React from 'react';
import Button from '../components/ui/Button';

function Services() {
  const services = [
    {
      id: 1,
      title: "Business Consulting",
      description: "Strategic advisory services to help optimize your business operations and drive growth.",
      details: [
        "Market Analysis",
        "Strategic Planning",
        "Process Optimization",
        "Growth Strategy",
        "Cost Reduction"
      ]
    },
    {
      id: 2,
      title: "IT Solutions",
      description: "Cutting-edge technology solutions to streamline operations and enhance security.",
      details: [
        "Software Development",
        "Cloud Migration",
        "IT Infrastructure",
        "Cybersecurity",
        "Digital Transformation"
      ]
    },
    {
      id: 3,
      title: "Financial Services",
      description: "Comprehensive financial management and advisory services for businesses of all sizes.",
      details: [
        "Financial Planning",
        "Investment Strategies",
        "Risk Management",
        "Tax Planning",
        "Wealth Management"
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Services Header */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Comprehensive services designed to meet your business goals and needs.
            </p>
          </div>
        </div>
      </div>
      
      {/* Services List */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <span className="block h-6 w-6 bg-primary/20 rounded-full"></span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-primary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <Button>Learn More</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Ready to take your business to the next level?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our expert team is ready to help you achieve your business goals.
            </p>
            <div className="mt-8">
              <Button size="lg" className="px-8">
                Contact Us Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
