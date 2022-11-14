import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { createContext } from 'react';
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const createUser = (email, password)=>{
   return createUserWithEmailAndPassword(auth, email, password);
}

const AuthProvider = ({children}) => {
    const authInfo ={
        createUser,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;