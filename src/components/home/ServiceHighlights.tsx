import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, PenTool as Tool, Calendar, Package2 } from 'lucide-react';

const ServiceHighlights: React.FC = () => {
  const services = [
    {
      id: 'on-site',
      name: 'On-Site Maintenance',
      description: 'Expert maintenance and repair services at your facility, minimizing downtime.',
      icon: <Wrench size={24} className="text-primary" />,
      link: '/services#on-site-maintenance'
    },
    {
      id: 'off-site',
      name: 'Off-Site Repairs',
      description: 'Comprehensive overhaul and repair services at our specialized workshop.',
      icon: <Tool size={24} className="text-primary" />,
      link: '/services#off-site-service'
    },
    {
      id: 'amc',
      name: 'AMC Contracts',
      description: 'Tailored maintenance programs to ensure continuous operation of your equipment.',
      icon: <Calendar size={24} className="text-primary" />,
      link: '/services#amc-contracts'
    },
    {
      id: 'parts',
      name: 'Spare Parts',
      description: 'Quick access to genuine spare parts for all major homogenizer brands.',
      icon: <Package2 size={24} className="text-primary" />,
      link: '/services#spare-parts'
    }
  ];
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive maintenance and support services to keep your industrial equipment running at peak performance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(service => (
            <div key={service.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 rounded-lg bg-primary-bg flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link to={service.link} className="group inline-flex items-center text-primary font-medium hover:text-primary-dark">
                Learn more
                <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link to="/services" className="btn-outline">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;