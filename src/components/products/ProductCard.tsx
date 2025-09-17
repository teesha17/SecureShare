import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Eye } from 'lucide-react';
import { Product } from '../../types';
import { useCartStore } from '../../store/cartStore';
import { brands } from '../../data/brands';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCartStore();
  
  const brand = brands.find(b => b.id === product.brandId);
  
  return (
    <div className="card group animate-fade-in">
      <div className="relative overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500" 
        />
        
        {!product.inStock && (
          <div className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
            Out of Stock
          </div>
        )}
        
        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
          <Link 
            to={`/products/${product.id}`}
            className="p-2 bg-white rounded-full hover:bg-primary hover:text-white transition-colors duration-200"
            title="View details"
          >
            <Eye size={18} />
          </Link>
          
          <button
            onClick={() => product.inStock && addItem(product.id)}
            className={`p-2 rounded-full transition-colors duration-200 ${
              product.inStock 
                ? 'bg-primary text-white hover:bg-primary-dark' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            disabled={!product.inStock}
            title={product.inStock ? "Add to cart" : "Out of stock"}
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <div className="mb-2">
          <span className="text-xs font-medium text-gray-500 uppercase">
            {brand?.name || product.brandId}
          </span>
        </div>
        <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors duration-200">
          <Link to={`/products/${product.id}`}>
            {product.name}
          </Link>
        </h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg">${product.price.toLocaleString()}</span>
          <span className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-500'}`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;