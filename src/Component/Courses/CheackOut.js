import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheackOut = () => {
    const cheackOutContent=useLoaderData()
    console.log(cheackOutContent);
    const {category,price,courseName,contact,description,image,}=cheackOutContent
    return (
        <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
	<div className="flex justify-between pb-4 border-bottom">
		<div className="flex items-center">
			<p  className="mb-0 capitalize dark:text-gray-100">{courseName}</p>
		</div>
		
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
			<img src={image} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
			<div className="flex items-center text-xs">
				<span>6 min ago</span>
			</div>
		</div>
		<div className="space-y-2">
			<div  className="block">
				<h3 className="text-xl font-semibold dark:text-violet-400">Course Description : {description}</h3>
			</div>
			<p className="leading-snug dark:text-gray-400">category : {category}</p>
			<p className="leading-snug dark:text-gray-400">Price : {price}</p>
			<p className="leading-snug dark:text-gray-400">Contact : {contact}</p>
		</div>
	</div>
</div>
    );
};

export default CheackOut;