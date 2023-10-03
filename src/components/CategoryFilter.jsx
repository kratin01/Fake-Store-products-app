
import React from 'react';

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  const categories = ['All', 'Electronics', 'Jewelry', 'Clothing', 'Beauty'];

  return (
    <div className=" flex flex-wrap justify-center p-2 mb-3">
      <label htmlFor="category" className="text-lg font-medium">
        Filter by Category:
      </label>
      <select
        id="category"
        className="ml-2 px-2 py-1 border rounded-md"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
