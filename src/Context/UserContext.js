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
  const provider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const createAccount = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (object) => {
    return updateProfile(auth.currentUser, object);
  };
  const signInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };
  const signWithGithub = () => {
    return signInWithPopup(auth, gitHubProvider);
  };
  const signInProfile = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signOutProfile = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
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
  };
  return (
    <AuthContext.Provider value={authObject}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
