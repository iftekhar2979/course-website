import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Toggle from './toggle/Toggle';

const Navbar = () => {
    const [isUserProfile,setIsUserProfile]=useState(false)
 
  return (
    // <header className=' container m-auto' >
    <div className='navbar  shadow-md dark:bg-stone-900 dark:text-base-100' >
      <div className='navbar-start container m-auto '>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52'
          >
            <li className='text-emerald-600 font-semibold dark:text-stone-300'>
              {' '}
              <img src='../../../public/favicon.png' alt=''  />
            </li>
            <li className='text-emerald-600 font-semibold dark:text-stone-300'>
              <Link to='/'>Coding Home</Link>
            </li>
            <li tabIndex={0} className='text-emerald-600 font-semibold'>
              <Link className='justify-between text-emerald-600 font-semibold'>
                Parent
                <svg
                  className='fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                >
                  <path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />
                </svg>
              </Link>
              <ul className='p-2 text-emerald-600 font-semibold'>
                <li className='text-emerald-600 font-semibold'>
                  <Link to=''>Submenu 1</Link>
                </li>
                <li className='text-emerald-600 font-semibold'>
                  <Link to=''>Submenu 2</Link>
                </li>
              </ul>
            </li>
            <li className='text-emerald-600 font-semibold'>
              <Link to=''>Item 3</Link>
            </li>
          </ul>
        </div>
        <img
          className='w-8'
          src='https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/dev-512.png'
          alt=''
          
        />
        <Link
          to=''
          className='btn btn-ghost text-emerald-600 normal-case text-xl dark:text-stone-300'
        >
          Coding Home
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex '>
        <ul className='menu menu-horizontal p-0'>
          <li className='text-emerald-600 font-semibold dark:text-stone-300'>
            <Link to='/courses'>Courses</Link>
          </li>
          <li className='text-emerald-600 font-semibold dark:text-stone-300'>
            <Link to='/faq'>FAQ</Link>
          </li>
          <li className='text-emerald-600 font-semibold dark:text-stone-300'>
            <Link to='/blog'>Blog</Link>
          </li>
          <li className='text-emerald-600 font-semibold dark:text-stone-300'>     
          </li>   
        </ul>
      </div>
      <div className='navbar-end mr-4'>

      {isUserProfile?
        <div className='avatar'>
          <div className='w-12 mr-4 rounded-full'>
            <img src='' />
          </div>
        </div>
        :
        <div>
       <Link to='/login'> <button className="btn bg-emerald-600 font-semibold border-none mr-4">Login</button></Link>
        </div>
        }
        <div>
     <Toggle></Toggle>
      </div>
     
            
      </div>
    </div>
    // </header>
  );
};

export default Navbar;
