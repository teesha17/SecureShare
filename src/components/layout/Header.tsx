import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import Logo from './Logo';
import { useCartStore } from '../../store/cartStore';
import { useAuthStore } from '../../store/authStore';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { toggleCart, itemCount } = useCartStore();
  const { isAuthenticated, user } = useAuthStore();
  
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 20);
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];
  
  const headerClasses = `fixed w-full z-30 transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
  }`;
  
  const linkClasses = `font-medium transition-colors duration-200 hover:text-primary ${
    isScrolled ? 'text-gray-800' : 'text-gray-800'
  }`;
  
  return (
    <header className={headerClasses}>
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="z-10 flex items-center">
          <Logo />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`${linkClasses} ${
                location.pathname === link.path ? 'text-primary font-semibold' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button 
            onClick={toggleCart}
            className="relative p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            aria-label="Shopping Cart"
          >
            <ShoppingCart size={22} className="text-gray-700" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
          
          <Link
            to={isAuthenticated ? (user?.role === 'admin' ? '/admin' : '/account') : '/login'}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            <User size={22} className="text-gray-700" />
          </Link>
          
          
        </div>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <button 
            onClick={toggleCart}
            className="relative p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            aria-label="Shopping Cart"
          >
            <ShoppingCart size={22} className="text-gray-700" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X size={24} className="text-gray-700" />
            ) : (
              <Menu size={24} className="text-gray-700" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-20 bg-white pt-20 animate-fade-in md:hidden">
          <div className="container-custom py-6 flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg ${
                  location.pathname === link.path ? 'text-primary font-semibold' : 'text-gray-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <Link
                to={isAuthenticated ? (user?.role === 'admin' ? '/admin' : '/account') : '/login'}
                className="flex items-center text-lg text-gray-800"
              >
                <User size={20} className="mr-2" />
                {isAuthenticated ? 'My Account' : 'Login / Register'}
              </Link>
            </div>
            <Link to="/contact" className="btn-primary w-full text-center">
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;