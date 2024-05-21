import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext =createContext(null)
const AuthProvider = ({children}) => {

    const [user,setUser]=useState('')

    const [error,setError]=useState('')

    const [success,setSuccess]=useState('')

    // create user with email and password 
    const createUser =(email,password)=>{
        return  createUserWithEmailAndPassword(auth,email,password)
    }

    // sign in user 

    const signIn =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    // logout user 

    const logOut =()=>{
        return signOut(auth)
    }


    const data = {
        user,
        createUser,
        signIn,
        logOut,
        error,
        setError,
        setSuccess,
        success,
        setUser
    }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;