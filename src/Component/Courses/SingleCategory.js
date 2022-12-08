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
        <li className='rounded-sm text-lg p-2 hover:bg-emerald-400 hover:text-indigo-900 dark:text-stone-300 dark:hover:bg-gray-500'>
          {category.toUpperCase()}
        </li>
      </Link>
    </>
  );
};

export default SingleCategory;
