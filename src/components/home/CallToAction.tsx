import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Operations?</h2>
            <p className="text-white/90 mb-6">
              Get in touch with our team of experts to discuss your industrial homogenizer needs and discover how we can help improve your productivity and reduce downtime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn bg-white text-primary hover:bg-light hover:text-primary-dark focus:ring-white">
                Contact Us
              </Link>
              <Link to="/products" className="btn border border-white text-white hover:bg-white hover:text-primary focus:ring-white">
                Browse Products
              </Link>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 sm:p-8">
            <h3 className="text-xl font-semibold mb-4">Quick Inquiry</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone size={20} className="mr-3" />
                <span>+91 22 1234 5678</span>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-3" />
                <span>info@microconsystems.com</span>
              </div>
              
              <div className="pt-4 border-t border-white/20">
                <p className="mb-4 text-white/90">Send us a message:</p>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-2 rounded bg-white/20 border border-white/30 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-2 rounded bg-white/20 border border-white/30 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={3}
                      className="w-full px-4 py-2 rounded bg-white/20 border border-white/30 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full btn bg-white text-primary hover:bg-light hover:text-primary-dark focus:ring-white"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;