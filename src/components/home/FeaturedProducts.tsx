import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getFeaturedProducts } from '../../data/products';
import { brands } from '../../data/brands';
import ProductCard from '../products/ProductCard';

const FeaturedProducts: React.FC = () => {
  const featuredProducts = getFeaturedProducts();
  
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
            <p className="text-gray-600 max-w-xl">
              Explore our selection of premium homogenizer components and parts from leading manufacturers.
            </p>
          </div>
          <Link to="/products" className="group inline-flex items-center mt-4 md:mt-0 text-primary font-medium hover:text-primary-dark">
            View All Products
            <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;