import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Content = () => {
    const findCourse=useLoaderData()
    
    const {category,price,courseName,contact,description,image,courseId}=findCourse
   
    return (
        <div>
            <img src={image} alt="" srcset="" />
            <h2 className='text-4xl'>{courseName}</h2>
            <h2 className='text-2xl'><span className='font-bold'>Course Category :</span>{category}</h2>
            <h2 className='text-xl'><span className='font-bold'>Contact:</span>{contact}</h2>
            <h2 className='text-xl'><span className='font-bold'>course description:</span> {description}</h2>
            <h2 className='text-4xl'>Price : {price}</h2>
            <button className="btn bg-blue-700">Download</button>
           <Link to={`cheackOut/${courseId}`}> <button className="btn bg-green-700">cheackOut</button></Link>
            
        </div>
    );
};

export default Content;