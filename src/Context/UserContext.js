import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from 'firebase/auth';

import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.init';
export const AuthContext = createContext(null);
const auth = getAuth(app);
const UserContext = ({ children }) => {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const provider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const createAccount = (email, password) => {
    setIsLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (object) => {
    setIsLoading(true)
    return updateProfile(auth.currentUser, object);
  };
  const signInWithGoogle = () => {
    setIsLoading(true)
    return signInWithPopup(auth, provider);
  };
  const signWithGithub = () => {
    setIsLoading(true)
    return signInWithPopup(auth, gitHubProvider);
  };
  const signInProfile = (email, password) => {
    setIsLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signOutProfile = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setIsLoading(false)
        setUser(currentUser);
      }else{
        setIsLoading(false)
      }

      return () => unsubscribe();
    });
  }, []);
  const authObject = {
    createAccount,
    updateUserProfile,
    signInWithGoogle,
    setUser,
    signOutProfile,
    user,
    signInProfile,
    signWithGithub,
    isLoading,
    setIsLoading
  };
  return (
    <AuthContext.Provider value={authObject}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
