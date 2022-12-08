import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SingleCourse = ({data}) => {
  const {courseName,description,image,courseId}=data

  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
 
  
  
  return (
    <div className='card card-compact w-auto  m-2 bg-base-100 dark:bg-gray-600 dark:text-base-100 shadow-transparent border shadow-xl'>
      <figure>
        <img src={image} alt={courseName} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{courseName}</h2>
        <p>{isReadMore ? description.slice(0, 150) : description}<span onClick={toggleReadMore} className='text-sky-400'>{!isReadMore?'':'...see more'}</span></p>
       
        <button className='btn btn-primary w-24' ><Link to={`/${courseId}`}>Show Details</Link></button>
        </div>
      </div>
   
  );
};

export default SingleCourse;
