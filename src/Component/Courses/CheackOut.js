import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheackOut = () => {
    const cheackOutContent=useLoaderData()
	// const {getInfo}=useContext(UserContext)
	// console.log(getInfo);
    const {category,price,courseName,contact,description,image}=cheackOutContent
    return (
        <div className=" p-4 shadow-md dark:bg-gray-600 dark:text-stone-300">
	<div className="flex justify-between pb-4 border-bottom">
		<div className="flex items-center tracking-widest">
		{/* <p  className="mb-0 capitalize text-4xl font-bold dark:text-stone-300">{user.displayName}</p> */}
			<p  className="mb-0 capitalize text-4xl font-bold dark:text-stone-300">{courseName}</p>
		</div>
		
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
			<img src={image} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-600" />
			
		</div>
		<div className="space-y-2">
			<div  className="block">
				<h3 className="text-xl font-semibold dark:text-stone-300 tracking-widest"><span className="font-bold">Course Description : </span>  {description}</h3>
			</div>
			<p className="leading-snug dark:text-stone-300 text-xl"> <span className="font-bold">Category : </span> : {category}</p>
			<p className="leading-snug dark:text-stone-300 text-xl"><span className="font-bold"> Price : </span> {price}</p>
			<p className="leading-snug dark:text-stone-300 text-xl"><span className="font-bold"> Contact : </span>{contact}</p>
		</div>
	</div>
</div>
    );
};

export default CheackOut;