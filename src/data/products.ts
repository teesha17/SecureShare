import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'crankshaft-spx-001',
    name: 'SPX Gaulin Crankshaft Assembly',
    brandId: 'spx-gaulin',
    category: 'crankshaft',
    description: 'High-quality crankshaft assembly for SPX Gaulin homogenizers',
    details: 'Compatible with models MC45, MC75, and MC90. Made from premium forged steel with precision machining for maximum durability and performance.',
    price: 4500,
    inStock: true,
    imageUrl: 'https://images.pexels.com/photos/2569842/pexels-photo-2569842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: true
  },
  {
    id: 'piston-set-bertoli-001',
    name: 'Bertoli Piston Set',
    brandId: 'bertoli',
    category: 'pistons',
    description: 'Set of 3 premium pistons for Bertoli homogenizers',
    details: 'Ceramic-coated pistons with extended lifespan, designed for Bertoli R-series homogenizers. Includes installation gaskets.',
    price: 1200,
    inStock: true,
    imageUrl: 'https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'oring-kit-fbf-001',
    name: 'FBF Italia O-Ring Kit',
    brandId: 'fbf-italia',
    category: 'o-rings',
    description: 'Complete O-ring kit for FBF Italia homogenizers',
    details: 'Contains 25 assorted FDA-approved O-rings suitable for all fluid contact points in FBF homogenizers. Made from high-grade EPDM material.',
    price: 350,
    inStock: true,
    imageUrl: 'https://images.pexels.com/photos/4483375/pexels-photo-4483375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'valve-assy-tetra-001',
    name: 'TetraPak Valve Assembly',
    brandId: 'tetra-pak',
    category: 'valves',
    description: 'Premium valve assembly for TetraPak homogenizers',
    details: 'Includes valve seat, valve, and spring. Constructed from high-grade stainless steel with precision machining for optimal flow and pressure regulation.',
    price: 780,
    inStock: false,
    imageUrl: 'https://images.pexels.com/photos/7281758/pexels-photo-7281758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'gasket-set-niro-001',
    name: 'Niro Sovi Gasket Set',
    brandId: 'niro-sovi',
    category: 'gaskets',
    description: 'Complete gasket set for Niro Sovi homogenizers',
    details: 'Full set of gaskets for all major connection points. Made from FDA-approved materials suitable for food and pharmaceutical applications.',
    price: 220,
    inStock: true,
    imageUrl: 'https://images.pexels.com/photos/277282/pexels-photo-277282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'pressure-gauge-spx-001',
    name: 'SPX Gaulin Pressure Gauge',
    brandId: 'spx-gaulin',
    category: 'pressure-gauges',
    description: 'High-precision pressure gauge for SPX Gaulin homogenizers',
    details: 'Glycerin-filled pressure gauge with range 0-10,000 PSI. Stainless steel construction with 2.5" dial face for easy reading.',
    price: 450,
    inStock: true,
    imageUrl: 'https://images.pexels.com/photos/5825594/pexels-photo-5825594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'hydraulic-unit-bertoli-001',
    name: 'Bertoli Hydraulic Power Unit',
    brandId: 'bertoli',
    category: 'hydraulic-parts',
    description: 'Complete hydraulic power unit for Bertoli homogenizers',
    details: 'Integrated hydraulic power unit with pump, reservoir, and control valves. Compatible with all Bertoli homogenizer models. Includes installation guide.',
    price: 3800,
    inStock: true,
    imageUrl: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    featured: true
  },
  {
    id: 'crankshaft-tetra-001',
    name: 'TetraPak Crankshaft Assembly',
    brandId: 'tetra-pak',
    category: 'crankshaft',
    description: 'Premium crankshaft assembly for TetraPak homogenizers',
    details: 'Heavy-duty crankshaft assembly designed for continuous operation. Compatible with TetraPak homogenizer models TA and TB series.',
    price: 5200,
    inStock: true,
    imageUrl: 'https://images.pexels.com/photos/3862634/pexels-photo-3862634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

export const getProductsByBrand = (brandId: string): Product[] => {
  return products.filter(product => product.brandId === brandId);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductCategories = (): string[] => {
  const categories = new Set(products.map(product => product.category));
  return Array.from(categories);
};