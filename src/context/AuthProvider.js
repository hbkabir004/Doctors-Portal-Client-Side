import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
     }
     
     const signIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
     }

     const logOut =()=>{
        setLoading(true);
        return signOut(auth)
     }

     const updateUser = (userInfo)=>{
        return updateProfile(user, userInfo)
     }
     
     useEffect(()=>{
         const unSubscribe = onAuthStateChanged(auth, currentUser=>{
             console.log('user observing');
             setUser(currentUser);  
             setLoading(false);
         });
         return ()=>unSubscribe();
     }, [])
     
    const authInfo ={
        createUser,
        SignIn: signIn,
        logOut,
        updateUser,
        loading,
        user,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;