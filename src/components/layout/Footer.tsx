import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-6">
              <Logo />
            </div>
            <p className="mb-6">
              Your trusted partner for industrial homogenizers and components with over 25 years of industry experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-200">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-primary transition-colors duration-200">Home</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-primary transition-colors duration-200">Products</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors duration-200">Services</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors duration-200">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors duration-200">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Our Brands</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products?brand=spx-gaulin" className="hover:text-primary transition-colors duration-200">SPX Gaulin</Link>
              </li>
              <li>
                <Link to="/products?brand=bertoli" className="hover:text-primary transition-colors duration-200">Bertoli</Link>
              </li>
              <li>
                <Link to="/products?brand=fbf-italia" className="hover:text-primary transition-colors duration-200">FBF Italia</Link>
              </li>
              <li>
                <Link to="/products?brand=tetra-pak" className="hover:text-primary transition-colors duration-200">TetraPak</Link>
              </li>
              <li>
                <Link to="/products?brand=niro-sovi" className="hover:text-primary transition-colors duration-200">Niro Sovi</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin size={20} className="mr-3 text-primary flex-shrink-0" />
                <span>123 Industrial Avenue, Mumbai, MH 400001, India</span>
              </li>
              <li className="flex">
                <Phone size={20} className="mr-3 text-primary flex-shrink-0" />
                <span>+91 22 1234 5678</span>
              </li>
              <li className="flex">
                <Mail size={20} className="mr-3 text-primary flex-shrink-0" />
                <span>info@microconsystems.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800 py-6">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Microcon Systems. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors duration-200">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-primary transition-colors duration-200">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;