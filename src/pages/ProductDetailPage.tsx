import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProductById } from '../data/products';
import { brands } from '../data/brands';
import { useCartStore } from '../store/cartStore';
import { ShoppingCart, ChevronLeft, AlertCircle } from 'lucide-react';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCartStore();
  
  const product = id ? getProductById(id) : null;
  const brand = product ? brands.find(b => b.id === product.brandId) : null;
  
  if (!product) {
    return (
      <div className="bg-light py-16">
        <div className="container-custom">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <AlertCircle size={48} className="mx-auto text-primary mb-4" />
            <h1 className="text-2xl font-bold mb-2">Product Not Found</h1>
            <p className="text-gray-600 mb-6">
              The product you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/products" className="btn-primary">
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    if (product.inStock) {
      addItem(product.id, quantity);
    }
  };
  
  return (
    <div className="bg-light py-10 md:py-16">
      <div className="container-custom">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-primary mb-6"
        >
          <ChevronLeft size={20} />
          <span>Back</span>
        </button>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 md:p-8">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            
            <div className="p-6 md:p-8">
              <div className="mb-2">
                <Link 
                  to={`/products?brand=${product.brandId}`}
                  className="text-sm font-medium text-primary hover:text-primary-dark"
                >
                  {brand?.name || product.brandId}
                </Link>
              </div>
              
              <h1 className="text-2xl md:text-3xl font-bold mb-3">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-gray-900">
                  ${product.price.toLocaleString()}
                </span>
                <span className={`ml-4 px-2 py-1 text-xs font-medium rounded ${
                  product.inStock 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
              
              <div className="border-t border-b border-gray-200 py-4 my-4">
                <p className="text-gray-700 mb-4">
                  {product.description}
                </p>
                <p className="text-gray-600">
                  {product.details}
                </p>
              </div>
              
              {product.inStock && (
                <div className="flex items-center mb-6">
                  <span className="mr-3 text-gray-700">Quantity:</span>
                  <div className="flex items-center border rounded">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-3 py-1">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className={`btn flex-1 ${
                    product.inStock 
                      ? 'bg-primary text-white hover:bg-primary-dark' 
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <ShoppingCart size={18} className="mr-2" />
                  Add to Cart
                </button>
                
                <Link to="/contact" className="btn-outline flex-1 text-center">
                  Request Quote
                </Link>
              </div>
              
              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-2">Specifications</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    <div className="text-sm text-gray-600">Category:</div>
                    <div className="text-sm font-medium">
                      {product.category.split('-').map(word => 
                        word.charAt(0).toUpperCase() + word.slice(1)
                      ).join(' ')}
                    </div>
                    
                    <div className="text-sm text-gray-600">Brand:</div>
                    <div className="text-sm font-medium">{brand?.name || product.brandId}</div>
                    
                    <div className="text-sm text-gray-600">Part Number:</div>
                    <div className="text-sm font-medium">{product.id.toUpperCase()}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;