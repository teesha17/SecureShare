import React from 'react';
import { services } from '../data/services';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-light py-10 md:py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Our Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive maintenance and support services to keep your industrial equipment running at peak performance.
          </p>
        </div>
        
        <div className="space-y-12">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`bg-white rounded-lg shadow-md overflow-hidden ${
                index % 2 === 0 ? '' : 'md:flex-row-reverse'
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-64 md:h-auto">
                  <img
                    src={service.imageUrl}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold mb-3">{service.name}</h2>
                  <p className="text-gray-700 mb-6">
                    {service.description}
                  </p>
                  
                  <h3 className="font-semibold text-lg mb-3">Features & Benefits</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-primary mt-1.5 mr-2"></span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8">
                    <a 
                      href="/contact" 
                      className="btn-primary"
                    >
                      Request Service
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;