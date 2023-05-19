import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../utils/firebase.config";
import Spinner from "../components/Spinner";

export const AuthContext = createContext(null)



const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const auth = getAuth(app)

    const googleProvider = new GoogleAuthProvider()


    // create user with email and password 
    const registerUserWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // user login with email and password 
    const loginUserWithEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    // login with google 
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        return signOut(auth)
    }


    const userInfo = {
        user,
        registerUserWithEmailAndPassword,
        loginUserWithEmailAndPassword,
        loginWithGoogle,
        logOut
    }


    // chck user authStatus 
    useEffect(() => {
        setLoading(true)
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('user form AuthProvider', currentUser)
            setLoading(false)
        })
        return () => unSubscribe()
    }, [])

    if (isLoading) {
        return <Spinner></Spinner>
    }




    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;