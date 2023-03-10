import React, { useEffect, useState } from 'react';
import SingleCategory from './SingleCategory';
const CategoryField = () => {
    const [category,setCategory]=useState()
    useEffect(()=>{
        fetch('https://coding-home-server-iftekhar2979.vercel.app/category')
        .then(res=>res.json())
        .then(data=>{
           
            setCategory(data)
        })
    },[])   
    return (
        <div className="flex flex-col h-full p-3 lg:w-60 w-auto sm:w-36 xsm:w-36 sm:p-1 dark:bg-gray-600 shadow-sm shadow-purple-800 dark:text-gray-100">
	<div className="space-y-3">
		<div className="flex-1">
        <h2 className="text-lg font-semibold tracking-widest uppercase dark:text-stone-300">Course Category</h2>
			<ul className="pt-2 pb-4 space-y-1 text-lg dark:bg-gray-600">
                
				{
                    category?.map((item,index)=><SingleCategory key={index} data={item}/>)
                }
			</ul>
		</div>
	</div>
	
</div>
    );
};

export default CategoryField;