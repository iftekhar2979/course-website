import React from 'react';

const SingleBlog = ({ data }) => {
  const { image, question, answer } = data;
  let today = new Date();
  let date =` ${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}` ;
  return (
    <div className='max-w-sm w-auto mx-auto md:w-full sm:w-full group hover:no-underline border focus:no-underline dark:bg-gray-900'>
      <img
        src={image}
        className='object-cover w-full rounded h-44 dark:bg-gray-500'
        alt=''
      />
      <div className='p-6 space-y-2'>
        <h3 className='text-2xl font-semibold group-hover:underline group-focus:underline'>
          {question}
        </h3>
        <span className='text-xs dark:text-gray-400'>{date}</span>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default SingleBlog;
