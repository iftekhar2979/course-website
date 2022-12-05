import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isUserProfile,setIsUserProfile]=useState(false)
 
  return (
    // <header className=' container m-auto' >
    <div className='navbar  shadow-md' style={{ backgroundColor: '#FCF7F4' }}>
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
            <li className='text-emerald-600 font-semibold'>
              {' '}
              <img src='../../../public/favicon.png' alt='' srcset='' />
            </li>
            <li className='text-emerald-600 font-semibold'>
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
          srcset=''
        />
        <Link
          to=''
          className='btn btn-ghost text-emerald-600 normal-case text-xl'
        >
          Coding Home
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex '>
        <ul className='menu menu-horizontal p-0'>
          <li className='text-emerald-600 font-semibold'>
            <Link to='/courses'>Courses</Link>
          </li>
          <li className='text-emerald-600 font-semibold'>
            <Link to='/faq'>FAQ</Link>
          </li>
          <li className='text-emerald-600 font-semibold'>
            <Link to='/blog'>Blog</Link>
          </li>
          <li className='text-emerald-600 font-semibold'>     
          </li>   
        </ul>
      </div>
      <div className='navbar-end mr-4'>

      {isUserProfile?
        <div className='avatar'>
          <div className='w-12 mr-4 rounded-full'>
            <img src='https://placeimg.com/192/192/people' />
          </div>
        </div>
        :
        <div>
       <Link to='/login'> <button className="btn bg-emerald-600 font-semibold border-none mr-4">Login</button></Link>
        </div>
        }
        <div>
{/* <div onClick={toggleTheme}>{theme==='dark'?"dark":"white"} */}
       <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='w-8 text-emerald-600 font-bold rounded-xl'
              stroke-width='1.5'
              stroke='currentColor'
              class='w-6 h-6'
              
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
              />
            </svg>
      </div>
     
            
      </div>
    </div>
    // </header>
  );
};

export default Navbar;
