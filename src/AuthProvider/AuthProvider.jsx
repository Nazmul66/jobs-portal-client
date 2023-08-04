import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firease.config";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});

    // RegisterPage sign up user
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // LoginPage sign in user
    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    //Google sign In User
    const googleInUser = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // signOut User
    const userLogOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

    // onAuthStateChange
    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, (userChange) =>{
            setLoading(false)
            setUser(userChange);
        })
        return () =>{
        return unSubscribe();
        }
        },[auth])

   const allInfo = {
       user,
       createUser,
       signInUser,
       googleInUser,
       userLogOut,
       loading
   }



    return (
        <AuthContext.Provider value={allInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;