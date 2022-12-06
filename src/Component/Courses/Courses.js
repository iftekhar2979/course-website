import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import CategoryField from './CategoryField';
import SingleCourse from './SingleCourse';

const Courses = () => {
  const [course, setCourse] = useState();
  useEffect(() => {
    fetch('http://localhost:5000/')
      .then((res) => res.json())
      .then((data) => {
        setCourse(data);
      });
  }, []);

  return (
    <section className='flex  dark:bg-gray-600'>
      <div className=' w-60'>

        <CategoryField></CategoryField>
      </div>
          <Outlet></Outlet>
      <div className="grid grid-cols-2  mx-10 my-10  w-9/12">
        {
            course?.map(item=>{
                return (
                        <SingleCourse key={item.id} data={item}></SingleCourse>
                )
            })
        }
      </div>
    </section>
    
  );
};

export default Courses;
