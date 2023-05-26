import React, { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import { useEffect } from 'react';
import { useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const auth = getAuth(app)
const googleAuthProvider = new GoogleAuthProvider();
const GitHubAuthProvider= new GithubAuthProvider();

const AuthProvider = ({children}) => {
    
    // private route
    const [user, setUser] = useState(null);
    // set loading
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleAuthProvider)
    }
    const gitHubSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, GitHubAuthProvider)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const updateUserData = (user, name, photo) =>{
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
        .then(() => {
            console.log('updated')
        })
        .catch(error =>{
            setError(error.message);
        })
    }
    


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleSignIn,
        gitHubSignIn,
        updateUserData,
        
    }

    // private route

    useEffect(()=>{
        const  unsubscribe = onAuthStateChanged(auth, loggedUser =>{
            console.log('log', loggedUser)
            setUser(loggedUser);
            setLoading(false)
        })
        return() =>{
            unsubscribe();
        }
    },[])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;