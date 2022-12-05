import React, { useState } from 'react';

const SingleCourse = ({data}) => {
  const {category,price,courseName,contact,description,image}=data
  // console.log(data);
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div className='card card-compact w-auto m-2 bg-base-100 dark:bg-gray-600 dark:text-base-100 shadow-transparent border shadow-xl'>
      <figure>
        <img src={image} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{courseName}</h2>
        <p>{isReadMore ? description.slice(0, 150) : description}<span onClick={toggleReadMore} className='text-white text-sm bg-sky-900'>{!isReadMore?'see less':'see more'}</span></p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
