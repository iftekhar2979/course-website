import React, { useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';

const Content = () => {
  const findCourse = useLoaderData();
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const { category, price, courseName, contact, description, image, courseId } =
    findCourse;

  return (
    <div className='p-4 dark:bg-gray-600' ref={componentRef}>
      <div className='flex w-full'>
        <div className='w-1/2 mt-8 sm:block'>
          <img src={image} alt='' />
        </div>

        <div className='dark:text-stone-300 p-6 w-1/2 sm:block'>
          <h2 className='text-4xl'>{courseName}</h2>
          <h2 className='text-2xl'>
            <span className='font-bold'>Course Category :</span>
            {category}
          </h2>
          <h2 className='text-xl'>
            <span className='font-bold'>Contact:</span>
            {contact}
          </h2>
          <h2 className='text-xl'>
            <span className='font-bold'>course description:</span> {description}
          </h2>
          <h2 className='text-4xl'>Price : {price}</h2>
          <button
            className='btn btn-outline btn-success dark:hover:btn-success dark:glass mt-2'
            onClick={handlePrint}
          >
            Download
          </button>

          <Link to={`/cheackOut/${courseId}`}>
            <button className='btn btn-outline btn-warning ml-6 mt-2'>
              Get Premium Access
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Content;
