import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingCart } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

const CartPage: React.FC = () => {
  const { getCartItems, getCartTotal, updateQuantity, removeItem, clearCart } = useCartStore();
  
  const cartItems = getCartItems();
  const total = getCartTotal();
  
  if (cartItems.length === 0) {
    return (
      <div className="bg-light py-16">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <ShoppingCart size={64} className="text-gray-300 mx-auto mb-6" />
            <h1 className="text-2xl font-bold mb-2">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-6">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Link to="/products" className="btn-primary">
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-light py-10 md:py-16">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flow-root">
                  <ul className="divide-y divide-gray-200">
                    {cartItems.map((item) => (
                      <li key={item.productId} className="py-6 flex">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={item.product.imageUrl}
                            alt={item.product.name}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        
                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h2>
                                <Link to={`/products/${item.productId}`}>
                                  {item.product.name}
                                </Link>
                              </h2>
                              <p className="ml-4">${item.product.price.toLocaleString()}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">
                              Brand: {item.product.brandId}
                            </p>
                          </div>
                          
                          <div className="flex flex-1 items-end justify-between">
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
                            
                            <div className="flex">
                              <button
                                onClick={() => removeItem(item.productId)}
                                className="font-medium text-primary hover:text-primary-dark flex items-center"
                              >
                                <Trash2 size={16} className="mr-1" />
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="border-t border-gray-200 px-6 py-4">
                <button
                  onClick={clearCart}
                  className="text-sm text-primary hover:text-primary-dark flex items-center"
                >
                  <Trash2 size={16} className="mr-1" />
                  Clear cart
                </button>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <p className="text-gray-600">Subtotal</p>
                  <p className="font-medium">${total.toLocaleString()}</p>
                </div>
                
                <div className="flex justify-between">
                  <p className="text-gray-600">Shipping</p>
                  <p className="font-medium">Calculated at checkout</p>
                </div>
                
                <div className="flex justify-between">
                  <p className="text-gray-600">Tax</p>
                  <p className="font-medium">Calculated at checkout</p>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between">
                    <p className="font-semibold">Total</p>
                    <p className="font-bold text-xl">${total.toLocaleString()}</p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Link
                    to="/checkout"
                    className="btn-primary w-full text-center"
                  >
                    Proceed to Checkout
                  </Link>
                  
                  <div className="mt-4">
                    <Link
                      to="/products"
                      className="text-center block w-full text-primary hover:text-primary-dark font-medium"
                    >
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 mt-6">
              <h2 className="text-lg font-semibold mb-4">Need Help?</h2>
              <p className="text-gray-600 mb-4">
                If you have questions about your order or need technical assistance, please contact our support team.
              </p>
              <Link to="/contact" className="text-primary hover:text-primary-dark font-medium">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;