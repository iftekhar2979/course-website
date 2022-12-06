import React from 'react';
import { Link } from 'react-router-dom';
const SingleCategory = ({data}) => {
    // console.log(data);
    const {category,categoryId}=data
    // console.log(data);
    
   
    return (
        <>
        <Link to={`category/${categoryId}`} >
        <li className="rounded-sm text-lg p-2  text-gray-900 dark:bg-gray-600 px-4 hover:bg-amber-100 dark:text-base-100 dark:bg-gray-400">{category.toUpperCase()}</li>
        </Link>
        </>
    );
};

export default SingleCategory;