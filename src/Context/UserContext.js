import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";

import React, { createContext, useState } from 'react';
import app from '../Firebase/firebase.init';
export const AuthContext = createContext(null);
const auth = getAuth(app);
const UserContext = ({ children }) => {
  const [user, setUser] = useState('hello');

  const createAccount = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile=(object)=>{
    return updateProfile(auth.currentUser,object)
  }
  const authObject = { createAccount,updateUserProfile };
  return (
    <AuthContext.Provider value={authObject}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
