import React from 'react';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/cartStore';

const CartSidebar: React.FC = () => {
  const { toggleCart, getCartItems, getCartTotal, updateQuantity, removeItem, clearCart } = useCartStore();
  
  const cartItems = getCartItems();
  const total = getCartTotal();
  
  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={toggleCart}></div>
      
      <div className="absolute top-0 right-0 bottom-0 w-full max-w-md flex flex-col bg-white shadow-xl transform transition-transform duration-300 ease-in-out animate-slide-in-right">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">Your Cart</h2>
          <button 
            onClick={toggleCart}
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>
        
        {cartItems.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <ShoppingBag size={64} className="text-gray-300 mb-4" />
            <h3 className="text-xl font-medium text-gray-700 mb-2">Your cart is empty</h3>
            <p className="text-gray-500 mb-6">Looks like you haven't added any products to your cart yet.</p>
            <button 
              onClick={toggleCart}
              className="btn-primary"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-4">
              <ul className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <li key={item.productId} className="py-4 flex">
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={item.product.imageUrl}
                        alt={item.product.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    
                    <div className="ml-4 flex-1 flex flex-col">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <Link to={`/products/${item.productId}`} onClick={toggleCart}>
                            {item.product.name}
                          </Link>
                        </h3>
                        <p className="ml-4">${item.product.price.toLocaleString()}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">{item.product.brandId}</p>
                      
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border rounded-md">
                          <button
                            onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                          >
                            -
                          </button>
                          <span className="px-3 py-1">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                        
                        <button
                          onClick={() => removeItem(item.productId)}
                          className="text-gray-500 hover:text-red-500"
                          aria-label="Remove item"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="border-t border-gray-200 p-4">
              <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                <p>Subtotal</p>
                <p>${total.toLocaleString()}</p>
              </div>
              
              <div className="space-y-3">
                <Link
                  to="/checkout"
                  onClick={toggleCart}
                  className="btn-primary w-full text-center"
                >
                  Checkout
                </Link>
                
                <button
                  onClick={clearCart}
                  className="text-sm text-gray-500 hover:text-gray-700 flex items-center justify-center w-full"
                >
                  <Trash2 size={16} className="mr-1" /> Clear cart
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;