import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-light to-white pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
        <div className="animate-slide-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Industrial <span className="text-primary">Homogenizers</span> & Components
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-xl">
            Your trusted partner for high-quality industrial homogenizers, components, and comprehensive maintenance services.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/products" className="btn-primary">
              Browse Products
            </Link>
            <Link to="/services" className="btn-outline">
              Our Services
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">25+</p>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">5</p>
              <p className="text-sm text-gray-600">Premium Brands</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">24/7</p>
              <p className="text-sm text-gray-600">Service Support</p>
            </div>
          </div>
        </div>
        <div className="relative hidden md:block">
          <img 
            src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Industrial homogenizer" 
            className="rounded-lg shadow-xl animate-fade-in" 
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg animate-slide-up">
            <div className="flex items-center">
              <img 
                src="https://images.pexels.com/photos/6908041/pexels-photo-6908041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Precision parts" 
                className="w-16 h-16 rounded-md object-cover mr-3" 
              />
              <div>
                <h3 className="font-semibold">Precision Components</h3>
                <p className="text-sm text-gray-600">OEM Quality Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container-custom mt-16 md:mt-24">
        <div className="bg-gray-100 rounded-xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold mb-2">Authorized Dealer</h2>
            <p className="text-gray-600">Official distributor of premium industrial homogenizer brands</p>
          </div>
          <div className="md:col-span-3 flex flex-wrap justify-around items-center gap-6">
            <img src="https://images.pexels.com/photos/2381463/pexels-photo-2381463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="SPX Gaulin" className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Bertoli" className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
            <img src="https://images.pexels.com/photos/3859364/pexels-photo-3859364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="FBF Italia" className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;