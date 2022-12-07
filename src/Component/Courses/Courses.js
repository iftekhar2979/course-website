import React, { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { DataProvider } from '../../Context/SearchContext';
import CategoryField from './CategoryField';
import SingleCourse from './SingleCourse';

const Courses = () => {
  const [course, setCourse] = useState();
  const {singleContent,setSingleContent,setCourses,filtered,searchContext,setFiltered,handleClick}=useContext(DataProvider)
  // const {setIsLoading}=useContext(UserContext)
  // console.log(contentId)
  
  useEffect(() => {
    fetch('https://coding-home-server-iftekhar2979.vercel.app/')
      .then((res) => res.json())
      .then((data) => {
       
        setCourse(data);
        setCourses(data)
      });
  }, []);
  
  const handleShow=(id)=>{
    const findItem=course?.find(item=>item.courseId===id)
    setSingleContent(findItem)
    
    // setContentId(id)
  }

  return (
    <section className='flex  dark:bg-gray-600'>
      <div className=' w-60'>

        <CategoryField></CategoryField>
      </div>
          <Outlet></Outlet>
      <div className="grid grid-cols-2  mx-10 my-10  w-9/12">
        {
            course?.map((item,index)=>{
                return (
                        <SingleCourse key={item.courseId} data={item} handleShow={handleShow}></SingleCourse>
                )
            })
        }
      </div>
    </section>
    
  );
};

export default Courses;
