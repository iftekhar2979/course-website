import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/UserContext';
import OthersLogin from './OthersLogin';
import SectionsLogin from './SectionsLogin';

const Login = () => {
 const {setUser,signInProfile}=useContext(AuthContext)
 const [error,setError]=useState('')
//  console.log();

 const navigate=useNavigate()
 const location=useLocation()
 const from=location.state?.from?.pathname || '/'

  const handleSubmit = (e) => {
    e.preventDefault();
    const form=e.target
    const email=form.email.value
    const password=form.password.value
    signInProfile(email,password)
    .then(result=>{
      const user=result.user
      setUser(user)
      form.reset()
      const notify = () => toast.success("Logged In",{position:'top-center',autoClose:2000,});
      navigate(from,{replace:true})
      notify()
      
      
    })
    .catch(error=>{
      setUser('')
      if(error.message==='Firebase: Error (auth/wrong-password).'){
        setError('Password Wrong. Input a right Password')

      }
      if(error.message==="Firebase: Error (auth/user-not-found)."){
        setError('Wrong Email. Input a right Email')
      }
      // console.log(error.message);
    })
    
  };
  return (
    <section className=' dark:bg-gray-800 dark:text-gray-50'>
      <div className='grid max-w-screen-xl sm:grid-cols-1 xsm:grid-cols-1 gap-8 px-8 py-16 mx-auto  grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100'>
        <SectionsLogin></SectionsLogin>
        <form
          htmlFor=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
          onSubmit={handleSubmit}
        >
          <div className='mb-6'>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Email
            </label>
            <input
              type='email'
              name='email'
              
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            />
          </div>
          
  

          <div className='mb-6'>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Password
            </label>
            <input
              type='password'
              name='password'
              
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            />
          </div>
          {
            error? <div className="alert alert-error shadow-lg">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{error}</span>
            </div>
          </div>:''
          }
          <div className='w-full flex justify-center'>
          <button
            type='submit'
            className=' p-3 text-sm font-bold bg-emerald-500 text-white tracking-wide uppercase rounded  dark:text-base-100'
          >
            Login
          </button>
          </div>
          
            <OthersLogin></OthersLogin>
          
          <div className='text-center'>
            <h3 className='text-xl'>Don't have any account <Link to='/signup' className='text-sky-400 underline font-semibold '>Sign Up</Link> </h3>
            
          </div>
          
        </form>
      </div>
    </section>
  );
};

export default Login;
