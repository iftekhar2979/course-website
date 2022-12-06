import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCategory from './SingleCategory';
const CategoryField = () => {
    const [category,setCategory]=useState()
    useEffect(()=>{
        fetch('http://localhost:5000/category')
        .then(res=>res.json())
        .then(data=>{
           
            setCategory(data)
        })
    },[])
    const categoryspecific=useLoaderData()
    console.log(categoryspecific);
    
    return (
        <div className="flex flex-col h-full p-3 w-60 dark:bg-gray-600 shadow-xl shadow-purple-800 dark:text-gray-100">
	<div className="space-y-3">
		<div className="flex-1">
        <h2 className="text-lg font-semibold tracking-widest uppercase dark:text-gray-400">Course Category</h2>
			<ul className="pt-2 pb-4 space-y-1 text-lg">
                
				{
                    category?.map(item=><SingleCategory key={item.categoryId} data={item}/>)
                }
			</ul>
		</div>
	</div>
	
</div>
    );
};

export default CategoryField;