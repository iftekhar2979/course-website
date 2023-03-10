import Tippy from '@tippyjs/react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';
import { AuthContext } from '../../Context/UserContext';
import Toggle from './toggle/Toggle';

const Navbar = () => {
  const { user, signOutProfile, setUser } = useContext(AuthContext);
  const handleLogOut = () => {
    signOutProfile()
      .then(() => {
        setUser('');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className='navbar shadow-md dark:bg-gray-600 dark:text-base-100 dark:shadow-white'>
      <div className='navbar-start   m-auto '>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden xl:hidden'>
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
            className='menu menu-compact dropdown-content bg-gray-400 mt-3 p-2 shadow  rounded-box w-52'
          >
            <li className='text-white-300 font-semibold dark:text-stone-300'>
              {' '}
              <img src='../../../public/favicon.png' alt='' className='' />
            </li>
            <li className='text-gray-100 font-semibold dark:text-stone-300'>
              <Link to='/'>Coding Home</Link>
            </li>
            <li
              tabIndex={0}
              to='/courses'
              className=' text-gray-100 font-semibold'
            >
              <Link
                to='/courses'
                className='justify-between text-emerald-600 font-semibold'
              >
                Courses
              </Link>
            </li>
            <li className='text-gray-100 font-semibold'>
              <Link to='/faq'>FAQ</Link>
            </li>
            <li className='text-gray-100 font-semibold'>
              <Link to='/blog'>Blog</Link>
            </li>
            <li><Toggle></Toggle></li>
          </ul>
        </div>
        <img
          className='w-8 xsm:hidden xsm:w-0'
          src='https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/dev-512.png'
          alt=''
        />
        <Link
          to=''
          className='btn btn-ghost text-emerald-600 normal-case text-xl xsm:text-md xsm:p-0 dark:text-stone-300'
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
          <li className='text-emerald-600 font-semibold dark:text-stone-300'></li>
        </ul>
      </div>
      <div className='navbar-end mr-4'>
        {user ? (
          <div className='avatar'>
            <Tippy content={user.displayName}>
            <div className='w-12 mr-4 rounded-full ' >
              
              <img src={user.photoURL} alt='' className="tooltip" data-tip="hello"/>
            </div>
            </Tippy>
          </div>
        ) : (
          <div>
            <Link to='/login'>
              {' '}
              <button className='btn bg-emerald-600 font-semibold border-none mr-4 xsm:mr-1'>
                Login
              </button>
            </Link>
          </div>
        )}
        <div className='flex'>
          {user ? (
            <div className='block'>
              <button className='btn bg-red-300' onClick={handleLogOut}>
                Sign Out
              </button>
            </div>
          ) : (
            ''
          )}
          <div className='xsm:w-0 xsm:hidden'>
          <Toggle></Toggle>

          </div>
        </div>
      </div>
    </div>
    // </header>
  );
};

export default Navbar;
