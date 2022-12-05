import React from 'react';

const SingleCategory = ({data}) => {
    // console.log(data);
    return (
        <>
        <li className="rounded-sm text-lg p-2  text-gray-900 dark:bg-gray-600 px-4 hover:bg-amber-100 dark:text-base-100 dark:bg-gray-400">{data.toUpperCase()}</li>
        </>
    );
};

export default SingleCategory;