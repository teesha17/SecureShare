import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CartSidebar from '../cart/CartSidebar';
import { useCartStore } from '../../store/cartStore';

const Layout: React.FC = () => {
  const { isCartOpen } = useCartStore();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      {isCartOpen && <CartSidebar />}
      <Footer />
    </div>
  );
};

export default Layout;