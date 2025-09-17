import React from 'react';
import { Link } from 'react-router-dom';
import { brands } from '../../data/brands';

const BrandShowcase: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Our Brands</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are authorized dealers for the world's leading industrial homogenizer manufacturers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map(brand => (
            <Link 
              key={brand.id} 
              to={`/products?brand=${brand.id}`}
              className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={brand.logoUrl} 
                  alt={brand.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-xl font-semibold mb-1">{brand.name}</h3>
                <p className="text-white/80 text-sm line-clamp-2">
                  {brand.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;