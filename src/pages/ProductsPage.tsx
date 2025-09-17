import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, getProductsByBrand, getProductCategories } from '../data/products';
import { brands } from '../data/brands';
import ProductCard from '../components/products/ProductCard';
import ProductFilters from '../components/products/ProductFilters';

const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  const categories = getProductCategories();
  
  // Initialize filters from URL params
  useEffect(() => {
    const brandParam = searchParams.get('brand');
    if (brandParam) {
      setSelectedBrand(brandParam);
    }
    
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, []);
  
  // Update filters
  useEffect(() => {
    let filtered = [...products];
    
    if (selectedBrand) {
      filtered = filtered.filter(product => product.brandId === selectedBrand);
    }
    
    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    setFilteredProducts(filtered);
    
    // Update URL params
    const params = new URLSearchParams();
    if (selectedBrand) params.set('brand', selectedBrand);
    if (selectedCategory) params.set('category', selectedCategory);
    setSearchParams(params);
  }, [selectedBrand, selectedCategory]);
  
  const handleBrandChange = (brandId: string | null) => {
    setSelectedBrand(brandId);
  };
  
  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
  };
  
  const resetFilters = () => {
    setSelectedBrand(null);
    setSelectedCategory(null);
    setSearchParams({});
  };
  
  const selectedBrandName = selectedBrand 
    ? brands.find(brand => brand.id === selectedBrand)?.name 
    : null;
    
  const formatCategoryName = (category: string) => {
    return category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  
  const selectedCategoryName = selectedCategory 
    ? formatCategoryName(selectedCategory)
    : null;
  
  return (
    <div className="bg-light py-10 md:py-16">
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            {selectedBrandName 
              ? `${selectedBrandName} Products` 
              : selectedCategoryName
                ? `${selectedCategoryName}`
                : 'All Products'}
          </h1>
          <p className="text-gray-600">
            {selectedBrandName && selectedCategoryName
              ? `Browse our selection of ${selectedCategoryName} for ${selectedBrandName} homogenizers`
              : selectedBrandName
                ? `Explore our range of premium components for ${selectedBrandName} homogenizers`
                : selectedCategoryName
                  ? `Browse our selection of ${selectedCategoryName} across all brands`
                  : 'Explore our comprehensive range of homogenizer parts and components'}
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-64 flex-shrink-0">
            <ProductFilters
              selectedBrand={selectedBrand}
              selectedCategory={selectedCategory}
              categories={categories}
              onBrandChange={handleBrandChange}
              onCategoryChange={handleCategoryChange}
              onReset={resetFilters}
            />
          </div>
          
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <h2 className="text-xl font-semibold mb-2">No products found</h2>
                <p className="text-gray-600 mb-4">
                  No products match your current filter selection.
                </p>
                <button
                  onClick={resetFilters}
                  className="btn-primary"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;