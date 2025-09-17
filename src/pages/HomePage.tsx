import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import BrandShowcase from '../components/home/BrandShowcase';
import ServiceHighlights from '../components/home/ServiceHighlights';
import CallToAction from '../components/home/CallToAction';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <BrandShowcase />
      <ServiceHighlights />
      <CallToAction />
    </div>
  );
};

export default HomePage;