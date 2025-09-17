import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-light py-10 md:py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">About Microcon Systems</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your trusted partner for industrial homogenizers and components with over 25 years of industry experience.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="h-64 md:h-auto">
              <img
                src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Microcon Systems Facility"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-3">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 1998, Microcon Systems has grown to become a leading provider of industrial homogenizers, components, and maintenance services in the region. What started as a small family business has evolved into a trusted partner for numerous industries including dairy, food processing, pharmaceuticals, and chemicals.
              </p>
              <p className="text-gray-700">
                Our mission is to provide high-quality equipment and components, exceptional service, and expert technical support to help our customers optimize their operations and reduce downtime. With a team of experienced engineers and technicians, we offer comprehensive solutions tailored to each customer's specific needs.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-14 h-14 rounded-lg bg-primary-bg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To be the preferred partner for industrial homogenizer solutions, recognized for our technical expertise, quality products, and exceptional customer service.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-14 h-14 rounded-lg bg-primary-bg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To provide high-quality equipment, components, and services that help our customers maximize productivity, reduce downtime, and achieve operational excellence.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="w-14 h-14 rounded-lg bg-primary-bg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.5 20.25l-.259-1.035a3.375 3.375 0 0 0-2.456-2.456L12.75 16.5l1.035-.259a3.375 3.375 0 0 0 2.456-2.456L16.5 12.75l.259 1.035a3.375 3.375 0 0 0 2.456 2.456l1.035.259-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Values</h3>
            <p className="text-gray-600">
              We are guided by our commitment to excellence, integrity in all business dealings, innovation in solutions, and building lasting relationships with our customers.
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex">
              <div className="mr-4 mt-1">
                <div className="w-10 h-10 rounded-full bg-primary-bg flex items-center justify-center">
                  <span className="text-primary font-bold">1</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Authorized Dealership</h3>
                <p className="text-gray-600">
                  We are authorized dealers for leading homogenizer brands including SPX Gaulin, Bertoli, FBF Italia, TetraPak, and Niro Sovi.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 mt-1">
                <div className="w-10 h-10 rounded-full bg-primary-bg flex items-center justify-center">
                  <span className="text-primary font-bold">2</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Technical Expertise</h3>
                <p className="text-gray-600">
                  Our team of engineers and technicians has extensive experience with all major homogenizer brands and models.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 mt-1">
                <div className="w-10 h-10 rounded-full bg-primary-bg flex items-center justify-center">
                  <span className="text-primary font-bold">3</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Quality Components</h3>
                <p className="text-gray-600">
                  We supply only genuine OEM parts or high-quality alternatives that meet or exceed OEM specifications.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4 mt-1">
                <div className="w-10 h-10 rounded-full bg-primary-bg flex items-center justify-center">
                  <span className="text-primary font-bold">4</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Comprehensive Service</h3>
                <p className="text-gray-600">
                  From on-site maintenance to complete overhauls, we provide a full range of services to keep your equipment running smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Our team of experienced professionals is dedicated to providing exceptional service and technical expertise to meet your industrial homogenizer needs.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Team Member"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Rajesh Sharma</h3>
                <p className="text-primary">Founder & CEO</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Team Member"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Priya Patel</h3>
                <p className="text-primary">Technical Director</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3771839/pexels-photo-3771839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Team Member"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Vikram Singh</h3>
                <p className="text-primary">Service Manager</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.pexels.com/photos/5397723/pexels-photo-5397723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Team Member"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">Ananya Desai</h3>
                <p className="text-primary">Sales Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;