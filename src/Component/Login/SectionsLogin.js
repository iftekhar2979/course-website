import React from 'react';

const SectionsLogin = () => {
    return (
        <>
        
        <div className='flex flex-col justify-between'>
          <div className='space-y-2'>
            <h2 className='text-4xl font-bold leading-tight lg:text-5xl'>
              Welcome to Coding Home Bangladesh
            </h2>
            <div className='dark:text-gray-400'>
              Develop your skill from Here. Find All course from Us .
            </div>
          </div>
          <img
            src='https://www.computersciencedegreehub.com/wp-content/uploads/2016/02/what-is-coding-768x512.jpg'
            alt=''
            className='p-6 w-1/2 h-52 md:h-64'
          />
        </div>
        </>
    );
};

export default SectionsLogin;