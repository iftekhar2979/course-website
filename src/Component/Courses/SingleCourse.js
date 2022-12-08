import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SingleCourse = ({data}) => {
  const {courseName,description,image,courseId}=data

  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
 
  
  
  return (
    <div className='card card-compact w-96 m-2 bg-base-100 dark:bg-gray-600 dark:text-base-100 shadow-transparent border shadow-xl'>
      <figure>
        <img src={image} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{courseName}</h2>
        <p>{isReadMore ? description.slice(0, 150) : description}<span onClick={toggleReadMore} className='text-white text-sm bg-sky-900'>{!isReadMore?'':'see more'}</span></p>
        <div className='card-actions justify-end'>
          </div><Link to={`/${courseId}`}><button className='btn btn-primary' >Show Details</button></Link>
        </div>
      </div>
   
  );
};

export default SingleCourse;
