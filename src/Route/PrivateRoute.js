import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const PrivateRoute = ({children}) => {
    const location=useLocation()
    const {user,isLoading}=useContext(AuthContext)
  
    
    if(isLoading){
        return <div className='flex justify-center'>Loading...</div>
    }
    
    if(!user ){
        return <Navigate to='/login' state={{from:location} } replace></Navigate>
        
    }
    return children
    
};

export default PrivateRoute;