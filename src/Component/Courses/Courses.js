import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import '../../../src/index.css';

import '../../index.css';
import CategoryField from './CategoryField';
import SingleCourse from './SingleCourse';

const Courses = () => {
  const [course, setCourse] = useState()
  useEffect(() => {
    fetch('https://coding-home-server-iftekhar2979.vercel.app/')
      .then((res) => res.json())
      .then((data) => {
        setCourse(data);
      });
  }, []);
  
 

  return (
    <section className='flex lg:container md:container dark:bg-gray-600'>
      <div className=' w-60 sm:w-36 xsm:w-0 xsm:hidden'>

        <CategoryField></CategoryField>
      </div>
          <Outlet></Outlet>
      <div className=" grid grid-cols-2 md:grid-cols-1 xsm:grid-cols-1 lg:mx-10 lg:my-10 xlg:my-10 xlg:mx-10 sm:grid-cols-1  mx-2 my-2  w-9/12">
        {
            course?.map((item,index)=>{
                return (
                        <SingleCourse key={item.courseId} data={item} ></SingleCourse>
                )
            })
        }
      </div>
    </section>
    
  );
};

export default Courses;
