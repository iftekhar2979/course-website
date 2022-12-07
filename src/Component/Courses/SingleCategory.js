import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataProvider } from '../../Context/SearchContext';

const SingleCategory = ({ data }) => {
  const {searchContext,setSearchContext,filtered,setFiltered,handleClick}=useContext(DataProvider)
  const { category, categoryId } = data; 
  return (
    <>
      <Link
        to={`category/${categoryId}`}
        onClick={() => handleClick(category)}
      >
        <li className='rounded-sm text-lg p-2  text-gray-900 dark:bg-gray-600 px-4 hover:bg-amber-100 dark:text-base-100 dark:bg-gray-400'>
          {category.toUpperCase()}
        </li>
      </Link>
    </>
  );
};

export default SingleCategory;
