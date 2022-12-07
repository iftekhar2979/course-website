import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { DataProvider } from '../../Context/SearchContext';
import SingleCourse from './SingleCourse';

const FilteredField = () => {
    const {filtered,searchContext}=useContext(DataProvider)
    // console.log(filtered);
    const myLoader=useLoaderData()
    // console.log(myLoader);
    return (
        <>
        <div>
            <h2 className='text-4xl font-bold '>{searchContext.toUpperCase()}</h2>
        </div>
        <div className='flex'>
            
            {myLoader?.map((item,index)=><SingleCourse id={index} data={item}></SingleCourse>)}
        </div>
        </>
    );
};

export default FilteredField;