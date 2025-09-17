import { create } from 'zustand';
import { CartItem, Product } from '../types';
import { getProductById } from '../data/products';

interface CartStore {
  items: CartItem[];
  isCartOpen: boolean;
  itemCount: number;
  
  addItem: (productId: string, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  
  getCartTotal: () => number;
  getCartItems: () => (CartItem & { product: Product })[];
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isCartOpen: false,
  itemCount: 0,
  
  addItem: (productId, quantity = 1) => {
    const product = getProductById(productId);
    if (!product) return;
    
    const currentItems = get().items;
    const existingItem = currentItems.find(item => item.productId === productId);
    
    let newItems;
    if (existingItem) {
      newItems = currentItems.map(item => 
        item.productId === productId 
          ? { ...item, quantity: item.quantity + quantity } 
          : item
      );
    } else {
      newItems = [...currentItems, { productId, quantity }];
    }
    
    set({ 
      items: newItems,
      itemCount: newItems.reduce((acc, item) => acc + item.quantity, 0),
      isCartOpen: true
    });
  },
  
  removeItem: (productId) => {
    const newItems = get().items.filter(item => item.productId !== productId);
    set({ 
      items: newItems,
      itemCount: newItems.reduce((acc, item) => acc + item.quantity, 0)
    });
  },
  
  updateQuantity: (productId, quantity) => {
    if (quantity <= 0) {
      get().removeItem(productId);
      return;
    }
    
    const newItems = get().items.map(item => 
      item.productId === productId ? { ...item, quantity } : item
    );
    
    set({ 
      items: newItems,
      itemCount: newItems.reduce((acc, item) => acc + item.quantity, 0)
    });
  },
  
  clearCart: () => {
    set({ items: [], itemCount: 0 });
  },
  
  toggleCart: () => {
    set(state => ({ isCartOpen: !state.isCartOpen }));
  },
  
  getCartTotal: () => {
    return get().items.reduce((total, item) => {
      const product = getProductById(item.productId);
      return total + (product?.price || 0) * item.quantity;
    }, 0);
  },
  
  getCartItems: () => {
    return get().items.map(item => {
      const product = getProductById(item.productId);
      return {
        ...item,
        product: product!
      };
    }).filter(item => item.product); // Filter out any items with missing products
  }
}));