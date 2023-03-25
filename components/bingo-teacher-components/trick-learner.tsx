'use client';
import React, { useState } from 'react';
import { CategoryDto } from '../../data-access-layer/mappers/category-mapper';
import { RouteDto } from '../../data-access-layer/mappers/route-mapper';
import { TrickDto } from '../../data-access-layer/mappers/trick-mapper';
import { TrickDisplay } from './bingo-assistant-internals/trick-display';

interface TrickLearnerProps {
  categories: Array<CategoryDto>;
}

export const TrickLearner = ({ categories }: TrickLearnerProps) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryClick = (category: CategoryDto) => {
    setSelectedCategories((prevState) =>
      prevState.includes(category.name)
        ? prevState.filter((catName) => catName !== category.name)
        : [...prevState, category.name]
    );
  };

  return (
    <div className='flex flex-row pt-5'>
      <div className='basis-1/6'>
        <h2>Categories</h2>
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => handleCategoryClick(category)}
            className={`block p-2 ${
              selectedCategories.includes(category.name)
                ? 'text-green-600 hover:text-gray-400'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className='basis-5/6 '>
        {selectedCategories.length > 0 && (
          <button
            className=' text-gray-800 bg-white border border-gray-300 rounded-lg shadow-md'
            onClick={() => setSelectedCategories([])}
          >
            Clear Selection
          </button>
        )}
        {categories.map(
          (category) =>
            selectedCategories.includes(category.name) && (
              <>
                <div className='min-w-full p-2'>Category: {category.name}</div>
                {category.routes.map((route) => (
                  <>
                    <h3>Route: {route.name}</h3>
                    {route.tricks.map((t) => (
                      <div
                        key={`${route.name}${t.name}`}
                        className='w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-2 lg:p-2'
                      >
                        <TrickDisplay trick={t} />
                      </div>
                    ))}
                  </>
                ))}
              </>
            )
        )}
      </div>
    </div>
  );
};
