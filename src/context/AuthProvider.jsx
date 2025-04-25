import React, { useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../firebase/firebase.config';

const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null)
    const [loader, setLoader]=useState(true)
   
//   create user 
const createUser = (email, password)=>{
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password)
}



    const authInfo={
        user,
        loader,
        createUser
     
    }
    return (
        <AuthContext.Provider value={authInfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default AuthProvider;