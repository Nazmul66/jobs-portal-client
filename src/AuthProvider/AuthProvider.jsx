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
                if(userChange?.email && userChange){
                    const userInfo = {
                        email : userChange?.email
                    }
                    fetch(`https://jobs-portal-server-iota.vercel.app/jwt`,{
                        method: "POST",
                        headers: {
                            "content-type" : "application/json"
                        },
                        body: JSON.stringify(userInfo)
                    })
                    .then(res => res.json())
                    .then(data => {
                        // console.log("get jwt token",data);
                        localStorage.setItem("access-token", data.token)
                    })
                }
                else{
                    localStorage.removeItem("access-token");
                }
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