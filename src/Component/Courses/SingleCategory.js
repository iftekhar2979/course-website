import React from 'react';
import { Link } from 'react-router-dom';

const SingleCategory = ({ data }) => {
  const { category, categoryId } = data; 
  return (
    <>
      <Link
        to={`category/${categoryId}`}
        
      >
        <li className='rounded-sm text-lg p-2 hover:bg-emerald-400 hover:text-indigo-900 dark:text-stone-300 dark:hover:bg-gray-500'>
          {category.toUpperCase()}
        </li>
      </Link>
    </>
  );
};

export default SingleCategory;
