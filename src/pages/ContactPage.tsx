import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    });
    
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };
  
  return (
    <div className="bg-light py-10 md:py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team of experts for any inquiries about our products, services, or to request a quote.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 flex items-start">
            <div className="mr-4">
              <div className="w-12 h-12 rounded-full bg-primary-bg flex items-center justify-center">
                <MapPin size={24} className="text-primary" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Our Location</h3>
              <p className="text-gray-600">
                123 Industrial Avenue<br />
                Mumbai, MH 400001<br />
                India
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 flex items-start">
            <div className="mr-4">
              <div className="w-12 h-12 rounded-full bg-primary-bg flex items-center justify-center">
                <Phone size={24} className="text-primary" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Phone & Email</h3>
              <p className="text-gray-600">
                Phone: +91 22 1234 5678<br />
                Fax: +91 22 1234 5679<br />
                Email: info@microconsystems.com
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 flex items-start">
            <div className="mr-4">
              <div className="w-12 h-12 rounded-full bg-primary-bg flex items-center justify-center">
                <Clock size={24} className="text-primary" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
              <p className="text-gray-600">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 9:00 AM - 1:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            
            {formSubmitted ? (
              <div className="bg-green-100 text-green-700 p-4 rounded-md mb-6 animate-fade-in">
                <p className="font-medium">Thank you for your message!</p>
                <p>We'll get back to you as soon as possible.</p>
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject*
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                >
                  <option value="">Select a subject</option>
                  <option value="product-inquiry">Product Inquiry</option>
                  <option value="service-request">Service Request</option>
                  <option value="spare-parts">Spare Parts</option>
                  <option value="technical-support">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1457143858!2d72.72088764425538!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1676459254582!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Microcon Systems Location"
            ></iframe>
            
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4">Visit Our Facility</h2>
              <p className="text-gray-600 mb-6">
                We invite you to visit our facility to see our operations firsthand and discuss your specific requirements with our team of experts.
              </p>
              
              <h3 className="font-semibold text-lg mb-2">Directions</h3>
              <p className="text-gray-600 mb-4">
                Our facility is located in the industrial area of Mumbai, easily accessible from the main highway. Landmark: Near XYZ Industrial Complex.
              </p>
              
              <div className="border-t border-gray-200 pt-4">
                <h3 className="font-semibold text-lg mb-2">Request a Meeting</h3>
                <p className="text-gray-600 mb-4">
                  To schedule a visit or meeting with our technical team, please contact us at:
                </p>
                <p className="flex items-center">
                  <Mail size={18} className="text-primary mr-2" />
                  <span>appointments@microconsystems.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;