import React, { useState } from 'react';
import { brands } from '../../data/brands';
import { X } from 'lucide-react';

interface ProductFiltersProps {
  selectedBrand: string | null;
  selectedCategory: string | null;
  categories: string[];
  onBrandChange: (brandId: string | null) => void;
  onCategoryChange: (category: string | null) => void;
  onReset: () => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  selectedBrand,
  selectedCategory,
  categories,
  onBrandChange,
  onCategoryChange,
  onReset
}) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  
  const formatCategoryName = (category: string) => {
    return category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  
  const hasActiveFilters = selectedBrand || selectedCategory;
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Filters</h2>
        
        <div className="flex items-center gap-2">
          {hasActiveFilters && (
            <button
              onClick={onReset}
              className="text-sm text-primary hover:text-primary-dark flex items-center"
            >
              <X size={16} className="mr-1" /> Clear
            </button>
          )}
          
          <button 
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            className="md:hidden text-sm font-medium text-gray-600"
          >
            {isFiltersOpen ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>
      </div>
      
      <div className={`space-y-6 ${isFiltersOpen ? 'block' : 'hidden md:block'}`}>
        <div>
          <h3 className="font-medium mb-3">Brands</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                id="brand-all"
                type="radio"
                name="brand"
                checked={selectedBrand === null}
                onChange={() => onBrandChange(null)}
                className="w-4 h-4 text-primary focus:ring-primary"
              />
              <label htmlFor="brand-all" className="ml-2 text-sm text-gray-700">
                All Brands
              </label>
            </div>
            {brands.map(brand => (
              <div key={brand.id} className="flex items-center">
                <input
                  id={`brand-${brand.id}`}
                  type="radio"
                  name="brand"
                  checked={selectedBrand === brand.id}
                  onChange={() => onBrandChange(brand.id)}
                  className="w-4 h-4 text-primary focus:ring-primary"
                />
                <label htmlFor={`brand-${brand.id}`} className="ml-2 text-sm text-gray-700">
                  {brand.name}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="font-medium mb-3">Categories</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                id="category-all"
                type="radio"
                name="category"
                checked={selectedCategory === null}
                onChange={() => onCategoryChange(null)}
                className="w-4 h-4 text-primary focus:ring-primary"
              />
              <label htmlFor="category-all" className="ml-2 text-sm text-gray-700">
                All Categories
              </label>
            </div>
            {categories.map(category => (
              <div key={category} className="flex items-center">
                <input
                  id={`category-${category}`}
                  type="radio"
                  name="category"
                  checked={selectedCategory === category}
                  onChange={() => onCategoryChange(category)}
                  className="w-4 h-4 text-primary focus:ring-primary"
                />
                <label htmlFor={`category-${category}`} className="ml-2 text-sm text-gray-700">
                  {formatCategoryName(category)}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;