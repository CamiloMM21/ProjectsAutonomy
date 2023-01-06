import { createContext, useEffect, useState } from 'react';
import {auth} from '../data/firebase'
import { onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext();

export const AuthContextProvider=({children})=>{
    const [currentUser, setCurrentUser]= useState({});
  useEffect(() =>{
    const unsub = onAuthStateChanged(auth,  (user)=>{
        setCurrentUser(user);
        console.log(user)
    });

    return ()=>{
        unsub();
    }
  },[] );

  <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
  {children}
  </AuthContext.Provider>
};

