import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCourse from './SingleCourse';

const FilteredField = () => {
   
    const myLoader=useLoaderData()
   
    return (
        <>
        <div>
            <h2 className='text-4xl font-bold '>{myLoader.courseName}</h2>
        </div>
        <div className='flex dark:bg-gray-600'>
            
            {myLoader?.map((item,index)=><SingleCourse key={item.courseId} data={item}></SingleCourse>)}
        </div>
        </>
    );
};

export default FilteredField;